// "use client";

// import React, { useCallback, useMemo } from "react";
// import isHotkey from "is-hotkey";
// import { Editable, withReact, Slate } from "slate-react";
// import { createEditor, Descendant } from "slate";

// import { withHistory } from "slate-history";
// import { Toolbar } from "./components/Toolbar";
// import { BlockButton, MarkButton } from "./components/Button";
// import { toggleMark } from "./helper";

// export const HOTKEYS = {
//   "mod+b": "bold",
//   "mod+i": "italic",
//   "mod+u": "underline",
//   "mod+`": "code",
// };

// export const LIST_TYPES = ["numbered-list", "bulleted-list"];
// export const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];

// const RichText = ({
//   onChange,
//   data,
// }: {
//   onChange?: (value: Descendant[]) => void;
//   showToolbar?: boolean;
//   data: Descendant[];
// }) => {
//   const renderElement = useCallback((props: any) => <Element {...props} />, []);
//   const renderLeaf = useCallback((props: any) => <Leaf {...props} />, []);
//   const editor = useMemo(() => withHistory(withReact(createEditor())), []);

//   return (
//     <div className="flex flex-col w-full">
//       <Slate
//         editor={editor}
//         initialValue={data || initialValue}
//         onChange={onChange}
//       >
//         <Toolbar>
//           <MarkButton format="bold" icon="format_bold" />
//           <MarkButton format="italic" icon="format_italic" />
//           <MarkButton format="underline" icon="format_underlined" />
//           <MarkButton format="code" icon="code" />
//           <BlockButton format="heading-one" icon="looks_one" />
//           <BlockButton format="heading-two" icon="looks_two" />
//           <BlockButton format="block-quote" icon="format_quote" />
//           <BlockButton format="numbered-list" icon="format_list_numbered" />
//           <BlockButton format="bulleted-list" icon="format_list_bulleted" />
//           <BlockButton format="left" icon="format_align_left" />
//           <BlockButton format="center" icon="format_align_center" />
//           <BlockButton format="right" icon="format_align_right" />
//           <BlockButton format="justify" icon="format_align_justify" />
//         </Toolbar>

//         <Editable
//           className="mx-auto container prose overflow-x-auto p-4 min-h-[75vh]"
//           renderElement={renderElement}
//           renderLeaf={renderLeaf}
//           placeholder="Enter some rich text…"
//           spellCheck
//           // autoFocus
//           onKeyDown={(event) => {
//             for (const hotkey in HOTKEYS) {
//               if (isHotkey(hotkey, event as any)) {
//                 event.preventDefault();
//                 //@ts-ignore
//                 const mark = HOTKEYS[hotkey];
//                 toggleMark(editor, mark);
//               }
//             }
//           }}
//         />
//       </Slate>
//     </div>
//   );
// };

// const Element = ({
//   attributes,
//   children,
//   element,
// }: {
//   attributes: any;
//   children: any;
//   element: any;
// }) => {
//   const style = { textAlign: element.align };
//   switch (element.type) {
//     case "block-quote":
//       return (
//         <blockquote style={style} {...attributes}>
//           {children}
//         </blockquote>
//       );
//     case "bulleted-list":
//       return (
//         <ul style={style} {...attributes}>
//           {children}
//         </ul>
//       );
//     case "heading-one":
//       return (
//         <h1 className="text-4xl" style={style} {...attributes}>
//           {children}
//         </h1>
//       );
//     case "heading-two":
//       return (
//         <h2 className="text-3xl" style={style} {...attributes}>
//           {children}
//         </h2>
//       );
//     case "list-item":
//       return (
//         <li style={style} {...attributes}>
//           {children}
//         </li>
//       );
//     case "numbered-list":
//       return (
//         <ol style={style} {...attributes}>
//           {children}
//         </ol>
//       );
//     default:
//       return (
//         <p style={style} {...attributes}>
//           {children}
//         </p>
//       );
//   }
// };

// const Leaf = ({
//   attributes,
//   children,
//   leaf,
// }: {
//   attributes: any;
//   children: any;
//   leaf: any;
// }) => {
//   if (leaf.bold) {
//     children = <strong>{children}</strong>;
//   }

//   if (leaf.code) {
//     children = <code>{children}</code>;
//   }

//   if (leaf.italic) {
//     children = <em>{children}</em>;
//   }

//   if (leaf.underline) {
//     children = <u>{children}</u>;
//   }
//   return <span {...attributes}>{children}</span>;
// };

// const initialValue: Descendant[] = [
//   {
//     type: "paragraph",
//     children: [
//       { text: "This is editable " },
//       //@ts-ignore
//       { text: "rich", bold: true },
//       { text: " text, " },
//       //@ts-ignore
//       { text: "much", italic: true },
//       { text: " better than a " },
//       //@ts-ignore
//       { text: "<textarea>", code: true },
//       { text: "!" },
//     ],
//   },
//   {
//     type: "paragraph",
//     children: [
//       {
//         text: "Since it's rich text, you can do things like turn a selection of text ",
//       },
//       //@ts-ignore
//       { text: "bold", bold: true },
//       {
//         text: ", or add a semantically rendered block quote in the middle of the page, like this:",
//       },
//     ],
//   },
//   {
//     //@ts-ignore
//     type: "block-quote",
//     children: [{ text: "A wise quote." }],
//   },
//   {
//     //@ts-ignore
//     type: "paragraph",
//     align: "center",
//     children: [{ text: "Try it out for yourself!" }],
//   },
// ];

// export default RichText;

// type RichTextData = {
//   type: string;
//   attributes: { [k: string]: any };
//   children: { text: string; bold?: boolean }[];
// };

// export const RenderRichText = ({ data }: { data: RichTextData[] }) => {
//   if (!data && !Array.isArray(data)) return null;
//   return (
//     <div className="prose">
//       {data.map((i, index) => {
//         return (
//           <Element key={index} element={i} attributes={i.attributes}>
//             {i.children.map((i, index) => (
//               <Leaf key={index} leaf={i} attributes={i}>
//                 {i.text}
//               </Leaf>
//             ))}
//           </Element>
//         );
//       })}
//     </div>
//   );
// };


export { }