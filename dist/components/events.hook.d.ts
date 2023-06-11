import { ReactElement } from "react";
import { Option } from "./types";
export declare const useFocusEvent: () => {
    focusRef: import("react").MutableRefObject<null>;
    isOpen: boolean;
    handleBlur: (event: React.FocusEvent<HTMLDivElement>) => void;
    handleFocus: () => void;
    handleClose: () => void;
};
interface useSelectEventProps {
    onChange?: (value: ReactElement, key: string) => void;
    handleClose: () => void;
    options: Option[];
    defaultSelectedKey?: string;
}
export declare const useSelectEvent: ({ onChange, handleClose, options, defaultSelectedKey }: useSelectEventProps) => {
    selectedOption: string | ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    handlePressOption: (key: string) => () => void;
};
export {};
