// import React, { Ref, PropsWithChildren, DOMAttributes } from "react";
// import { cx } from "@emotion/css";
// import { BaseProps, OrNull } from "./components";
// import { useSlate } from "slate-react";
// import {
//   isBlockActive,
//   toggleBlock,
//   isMarkActive,
//   toggleMark,
// } from "../helper";
// import { Icon } from "./Icon";
// import { TEXT_ALIGN_TYPES } from "../Editor";

// type ButtonProps = PropsWithChildren<
//   {
//     active: boolean;
//     reversed: boolean;
//   } & BaseProps
// >;

// export const Button = React.forwardRef(
//   (
//     {
//       className,
//       active,
//       reversed,
//       ...props
//     }: PropsWithChildren<
//       {
//         active: boolean;
//         reversed: boolean;
//       } & BaseProps &
//         React.DetailedHTMLProps<
//           React.ButtonHTMLAttributes<HTMLButtonElement>,
//           HTMLButtonElement
//         >
//     >,
//     ref: Ref<HTMLButtonElement>
//   ) => (
//     <button
//       {...props}
//       ref={ref}
//       className={cx(
//         "cursor-pointer border-2  border-black rounded-md w-8 h-8 flex justify-center items-center",
//         { "text-black bg-white": !active, "bg-black text-white": active },
//         className
//       )}
//     />
//   )
// );
// Button.displayName = "Button";

// const T = () => {
//   return <Button>Bla</Button>;
// };

// export const BlockButton = ({
//   format,
//   icon,
// }: {
//   format: string;
//   icon: string;
// }) => {
//   const editor = useSlate();
//   return (
//     <Button
//       active={isBlockActive(
//         editor,
//         format,
//         TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
//       )}
//       //@ts-ignore
//       onMouseDown={(event) => {
//         event.preventDefault();
//         toggleBlock(editor, format);
//       }}
//     >
//       <Icon>{icon}</Icon>
//     </Button>
//   );
// };

// export const MarkButton = ({
//   format,
//   icon,
// }: {
//   format: string;
//   icon: string;
// }) => {
//   const editor = useSlate();
//   return (
//     <Button
//       active={isMarkActive(editor, format)}
//       //@ts-ignore
//       onMouseDown={(event) => {
//         event.preventDefault();
//         toggleMark(editor, format);
//       }}
//     >
//       <Icon>{icon}</Icon>
//     </Button>
//   );
// };

export { }