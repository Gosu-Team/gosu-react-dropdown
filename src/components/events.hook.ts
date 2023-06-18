import { ReactElement, useRef, useState } from "react";
import { Option } from "./types";

interface UseFocusEventProps {
  isOpenHard?: boolean
}

const isUndefined = (variable: unknown): boolean =>
  typeof variable === 'undefined'

export const useFocusEvent = ({ isOpenHard }: UseFocusEventProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const focusRef = useRef(null);

  const onBlur = (target: Node) => {
    const currentTarget = focusRef.current;
    if (
      currentTarget &&
      !(currentTarget as HTMLDivElement)
        .contains(target as Node)
    ) {
      setIsOpen(false);
    }
  }

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    onBlur(event.relatedTarget as Node)
  };

  const handleTouchBlur = (event: React.TouchEvent<HTMLDivElement>) => {
    onBlur(event.target as Node)
  };

  const handleFocus = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  return {
    focusRef,
    isOpen: isUndefined(isOpenHard) ? isOpen : isOpenHard as boolean,
    handleBlur,
    handleTouchBlur,
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

export const useSelectEvent = ({ onChange, options, defaultSelectedKey }: useSelectEventProps) => {
  const defaultSelectedOption = options.find((option) => option.key === defaultSelectedKey)
  const [selectedOption, setSelectedOption] = useState<ReactElement | string>(
    defaultSelectedOption ?
      defaultSelectedOption.label || defaultSelectedOption.value : ''
  );

  const handlePressOption = (key: string) => () => {
    const candidateToSelectedOption = options.find((option) => option.key === key)
    setSelectedOption((candidateToSelectedOption as Option).label);
    onChange?.(key);
  };

  return {
    selectedOption,
    handlePressOption
  }
}
