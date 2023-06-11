import React from 'react';
import { useFocusEvent, useSelectEvent } from './events.hook';
import { DropdownProps } from './types';
import { getStyles } from './styles';
import { Arrow } from './Arrow';

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  onChange,
  listPlacement = 'bottomCenter',
  caretColor = '#000',
  placeholder = 'Select option',
  defaultSelectedKey
}) => {
  const {
    focusRef,
    isOpen,
    handleBlur,
    handleFocus,
    handleClose
  } = useFocusEvent()

  const {
    selectedOption,
    handlePressOption
  } = useSelectEvent({ onChange, handleClose, options, defaultSelectedKey })

  const styles = getStyles({ listPlacement })

  return (
    <div style={styles.root} onBlur={handleBlur} ref={focusRef}>
      <button style={styles.trigger} onFocus={handleFocus}>
        {selectedOption || placeholder}
        <Arrow caretColor={caretColor} isOpen={isOpen} />
      </button>
      {isOpen && (
        <div style={styles.listContainer}>
          {options.map(({ value, key }) => (
            <button
              style={styles.listItem}
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
