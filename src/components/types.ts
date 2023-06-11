import { ReactElement } from "react";

export type Option = { value: React.ReactElement, key: string, label: React.ReactElement }
export type Placement = 'bottomLeft' | 'bottomCenter' | 'bottomRight'

export interface DropdownProps {
  options: Option[];
  onChange?: (key: string) => void;
  listPlacement?: Placement
  caretColor?: string
  placeholder?: string
  defaultSelectedKey?: string
}

