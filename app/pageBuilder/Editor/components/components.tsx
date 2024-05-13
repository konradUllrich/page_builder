import { ReactNode } from "react";
import ReactDOM from "react-dom";
import { EditorValue } from "./EditorValue";

export interface BaseProps {
  className: string;
  [key: string]: unknown;
}
export type OrNull<T> = T | null;

EditorValue.displayName = "EditorValue";

export const Portal = ({ children }: { children?: ReactNode }) => {
  return typeof document === "object"
    ? ReactDOM.createPortal(children, document.body)
    : null;
};
