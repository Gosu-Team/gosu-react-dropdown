/// <reference types="react" />
import { Placement } from "./types";
interface stylesProps {
    listPlacement: Placement;
    styleRoot?: React.CSSProperties;
    styleTrigger?: React.CSSProperties;
    styleOption?: React.CSSProperties;
    styleList?: React.CSSProperties;
}
export declare const getStyles: ({ listPlacement, styleRoot, styleTrigger, styleOption, styleList }: stylesProps) => Record<string, React.CSSProperties>;
export {};
