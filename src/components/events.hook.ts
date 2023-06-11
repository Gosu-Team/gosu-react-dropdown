import { ReactElement, useRef, useState } from "react";
import { Option } from "./types";

export const useFocusEvent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const focusRef = useRef(null);

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    let currentTarget = focusRef.current;
    if (
      currentTarget &&
      !(currentTarget as HTMLDivElement)
        .contains(event.relatedTarget as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleFocus = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  return {
    focusRef,
    isOpen,
    handleBlur,
    handleFocus,
    handleClose
  }
}
interface useSelectEventProps {
  onChange?: (key: string) => void
  handleClose: () => void
  options: Option[]
  defaultSelectedKey?: string
}

export const useSelectEvent = ({ onChange, handleClose, options, defaultSelectedKey }: useSelectEventProps) => {
  const defaultSelectedOption = options.find((option) => option.key === defaultSelectedKey)
  const [selectedOption, setSelectedOption] = useState<ReactElement | string>(
    defaultSelectedOption ?
      defaultSelectedOption.label || defaultSelectedOption.value : ''
  );

  const handlePressOption = (key: string) => () => {
    const candidateToSelectedOption = options.find((option) => option.key === key)
    setSelectedOption((candidateToSelectedOption as Option).label);
    onChange?.(key);
    handleClose()
  };

  return {
    selectedOption,
    handlePressOption
  }
}
