import { ReactElement } from "react";
import { Option } from "./types";
interface UseFocusEventProps {
    isOpenHard?: boolean;
}
export declare const useFocusEvent: ({ isOpenHard }: UseFocusEventProps) => {
    focusRef: import("react").MutableRefObject<null>;
    isOpen: boolean;
    handleBlur: (event: React.FocusEvent<HTMLDivElement>) => void;
    handleTouchBlur: (event: React.TouchEvent<HTMLDivElement>) => void;
    handleFocus: () => void;
    handleClose: () => void;
};
interface useSelectEventProps {
    onChange?: (key: string) => void;
    handleClose: () => void;
    options: Option[];
    defaultSelectedKey?: string;
}
export declare const useSelectEvent: ({ onChange, options, defaultSelectedKey, handleClose }: useSelectEventProps) => {
    selectedOption: string | ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    handlePressOption: (key: string) => () => void;
    handleClose: () => void;
};
export {};
