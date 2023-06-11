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

const useFocusEvent = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const focusRef = React.useRef(null);
    const handleBlur = (event) => {
        let currentTarget = focusRef.current;
        if (currentTarget &&
            !currentTarget
                .contains(event.relatedTarget)) {
            setIsOpen(false);
        }
    };
    const handleFocus = () => {
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };
    return {
        focusRef,
        isOpen,
        handleBlur,
        handleFocus,
        handleClose
    };
};
const useSelectEvent = ({ onChange, handleClose, options, defaultSelectedKey }) => {
    const defaultSelectedOption = options.find((option) => option.key === defaultSelectedKey);
    const [selectedOption, setSelectedOption] = React.useState(defaultSelectedOption ?
        defaultSelectedOption.label || defaultSelectedOption.value : '');
    const handlePressOption = (key) => () => {
        const candidateToSelectedOption = options.find((option) => option.key === key);
        setSelectedOption(candidateToSelectedOption.label);
        onChange === null || onChange === void 0 ? void 0 : onChange(candidateToSelectedOption.value, key);
        handleClose();
    };
    return {
        selectedOption,
        handlePressOption
    };
};

const getStyles = ({ listPlacement }) => {
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
        root: {
            position: "relative",
            width: 'fit-content'
        },
        trigger: {
            backgroundColor: 'transparent',
            border: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        },
        listContainer: Object.assign({ position: 'absolute', top: '100%', marginTop: '10px', backgroundColor: '#fff', border: '1px solid #ddd', display: 'flex', flexDirection: 'column' }, listPosition()),
        listItem: {
            cursor: 'pointer',
            padding: '10px',
            background: 'none',
            border: 'none',
            whiteSpace: 'nowrap',
            textAlign: 'left'
        }
    });
};

const Arrow = ({ isOpen, caretColor }) => {
    const styles = {
        arrow: Object.assign({ width: "6px", height: "6px", transform: isOpen ? "rotate(135deg)" : "rotate(315deg)", borderBottom: `1px solid ${caretColor}`, borderLeft: `1px solid ${caretColor}` }, (isOpen ?
            { marginTop: '4px' } :
            { marginBottom: '4px' })),
    };
    return (React__default["default"].createElement("div", { style: styles.arrow }));
};

const Dropdown = ({ options, onChange, listPlacement = 'bottomCenter', caretColor = '#000', placeholder = 'Select option', defaultSelectedKey }) => {
    const { focusRef, isOpen, handleBlur, handleFocus, handleClose } = useFocusEvent();
    const { selectedOption, handlePressOption } = useSelectEvent({ onChange, handleClose, options, defaultSelectedKey });
    const styles = getStyles({ listPlacement });
    return (React__default["default"].createElement("div", { style: styles.root, onBlur: handleBlur, ref: focusRef },
        React__default["default"].createElement("button", { style: styles.trigger, onFocus: handleFocus },
            selectedOption || placeholder,
            React__default["default"].createElement(Arrow, { caretColor: caretColor, isOpen: isOpen })),
        isOpen && (React__default["default"].createElement("div", { style: styles.listContainer }, options.map(({ value, key }) => (React__default["default"].createElement("button", { style: styles.listItem, onClick: handlePressOption(key), key: key }, value)))))));
};

exports["default"] = Dropdown;
//# sourceMappingURL=index.js.map
