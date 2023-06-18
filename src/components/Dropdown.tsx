import React from 'react';
import { useFocusEvent, useSelectEvent } from './events.hook';
import { DropdownProps } from './types';
import { Arrow } from './Arrow';
import { getStyles } from './styles';

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  onChange,
  listPlacement = 'bottomCenter',
  caretColor = '#000',
  placeholder = 'Select option',
  defaultSelectedKey,
  styleRoot,
  styleTrigger,
  styleOption,
  styleList,
  isOpen: isOpenHard,
}) => {
  const {
    focusRef,
    isOpen,
    handleBlur,
    handleTouchBlur,
    handleFocus,
    handleClose
  } = useFocusEvent({ isOpenHard })

  const {
    selectedOption,
    handlePressOption
  } = useSelectEvent({ onChange, handleClose, options, defaultSelectedKey })

  const styles = getStyles({
    listPlacement,
    styleRoot,
    styleTrigger,
    styleOption,
    styleList
  })

  return (
    <div
      style={styles.root}
      onBlur={handleBlur}
      onTouchEnd={handleTouchBlur}
      ref={focusRef}
      tabIndex={-1}
    >
      <button style={styles.trigger} onClick={handleFocus}>
        {selectedOption || placeholder}
        <Arrow caretColor={caretColor} isOpen={isOpen} />
      </button>
      {isOpen && (
        <div style={styles.list}>
          {options.map(({ value, key }) => (
            <button
              style={styles.option}
              onClick={handlePressOption(key)}
              key={key}
            >
              {value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
