import { ReactElement, CSSProperties } from "react";
export type Option = {
    value: ReactElement;
    key: string;
    label: ReactElement;
};
export type Placement = 'bottomLeft' | 'bottomCenter' | 'bottomRight';
export interface DropdownProps {
    options: Option[];
    onChange?: (key: string) => void;
    listPlacement?: Placement;
    caretColor?: string;
    placeholder?: string;
    defaultSelectedKey?: string;
    isOpen?: boolean;
    styleRoot?: CSSProperties;
    styleTrigger?: CSSProperties;
    styleOption?: CSSProperties;
    styleList?: CSSProperties;
}
