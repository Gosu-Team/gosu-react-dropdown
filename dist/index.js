"use client"


function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const isUndefined = (variable) => typeof variable === 'undefined';
const useFocusEvent = ({ isOpenHard }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const focusRef = React.useRef(null);
    const onBlur = (target) => {
        const currentTarget = focusRef.current;
        if (currentTarget &&
            !currentTarget
                .contains(target)) {
            setIsOpen(false);
        }
    };
    const handleBlur = (event) => {
        onBlur(event.relatedTarget);
    };
    const handleTouchBlur = (event) => {
        onBlur(event.target);
    };
    const handleFocus = () => {
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };
    return {
        focusRef,
        isOpen: isUndefined(isOpenHard) ? isOpen : isOpenHard,
        handleBlur,
        handleTouchBlur,
        handleFocus,
        handleClose
    };
};
const useSelectEvent = ({ onChange, options, defaultSelectedKey }) => {
    const defaultSelectedOption = options.find((option) => option.key === defaultSelectedKey);
    const [selectedOption, setSelectedOption] = React.useState(defaultSelectedOption ?
        defaultSelectedOption.label || defaultSelectedOption.value : '');
    const handlePressOption = (key) => () => {
        const candidateToSelectedOption = options.find((option) => option.key === key);
        setSelectedOption(candidateToSelectedOption.label);
        onChange === null || onChange === void 0 ? void 0 : onChange(key);
    };
    return {
        selectedOption,
        handlePressOption
    };
};

const Arrow = ({ isOpen, caretColor }) => {
    const styles = {
        arrow: Object.assign({ width: "6px", height: "6px", transform: isOpen ? "rotate(135deg)" : "rotate(315deg)", borderBottom: `1px solid ${caretColor}`, borderLeft: `1px solid ${caretColor}` }, (isOpen ?
            { marginTop: '4px' } :
            { marginBottom: '4px' })),
    };
    return (React__default["default"].createElement("div", { style: styles.arrow }));
};

const getStyles = ({ listPlacement, styleRoot, styleTrigger, styleOption, styleList }) => {
    const listPosition = () => {
        if (listPlacement === 'bottomLeft') {
            return { left: 0 };
        }
        if (listPlacement === 'bottomCenter') {
            return {
                left: '50%',
                transform: 'translate(-50%)'
            };
        }
        if (listPlacement === 'bottomRight') {
            return { right: 0 };
        }
    };
    return ({
        root: Object.assign({ position: "relative", width: 'fit-content' }, styleRoot),
        trigger: Object.assign({ backgroundColor: (styleTrigger === null || styleTrigger === void 0 ? void 0 : styleTrigger.backgroundColor) ? undefined : 'transparent', border: (styleTrigger === null || styleTrigger === void 0 ? void 0 : styleTrigger.border) ? undefined : '0', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }, styleTrigger),
        list: Object.assign(Object.assign({ position: 'absolute', display: 'flex', flexDirection: 'column', top: (styleList === null || styleList === void 0 ? void 0 : styleList.top) ? undefined : '100%', marginTop: (styleList === null || styleList === void 0 ? void 0 : styleList.marginTop) ? undefined : '10px', backgroundColor: (styleList === null || styleList === void 0 ? void 0 : styleList.backgroundColor) ? undefined : '#fff' }, listPosition()), styleList),
        option: Object.assign({ cursor: 'pointer', padding: '10px', background: 'none', border: 'none', whiteSpace: 'nowrap', textAlign: 'left' }, styleOption)
    });
};

const Dropdown = ({ options, onChange, listPlacement = 'bottomCenter', caretColor = '#000', placeholder = 'Select option', defaultSelectedKey, styleRoot, styleTrigger, styleOption, styleList, isOpen: isOpenHard, }) => {
    const { focusRef, isOpen, handleBlur, handleTouchBlur, handleFocus, handleClose } = useFocusEvent({ isOpenHard });
    const { selectedOption, handlePressOption } = useSelectEvent({ onChange, handleClose, options, defaultSelectedKey });
    const styles = getStyles({
        listPlacement,
        styleRoot,
        styleTrigger,
        styleOption,
        styleList
    });
    return (React__default["default"].createElement("div", { style: styles.root, onBlur: handleBlur, onTouchEnd: handleTouchBlur, ref: focusRef, tabIndex: -1 },
        React__default["default"].createElement("button", { style: styles.trigger, onClick: handleFocus },
            selectedOption || placeholder,
            React__default["default"].createElement(Arrow, { caretColor: caretColor, isOpen: isOpen })),
        isOpen && (React__default["default"].createElement("div", { style: styles.list }, options.map(({ value, key }) => (React__default["default"].createElement("button", { style: styles.option, onClick: handlePressOption(key), key: key }, value)))))));
};

exports["default"] = Dropdown;
//# sourceMappingURL=index.js.map
