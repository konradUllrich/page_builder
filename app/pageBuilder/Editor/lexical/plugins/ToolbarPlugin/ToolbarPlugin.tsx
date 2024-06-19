// import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
// import { mergeRegister } from '@lexical/utils';
// import { CaretLeftIcon, CaretRightIcon, FontBoldIcon, FontItalicIcon, StrikethroughIcon, TextAlignCenterIcon, TextAlignJustifyIcon, TextAlignLeftIcon, TextAlignRightIcon, UnderlineIcon } from '@radix-ui/react-icons'
// import {
//     $getSelection,
//     $isRangeSelection,
//     CAN_REDO_COMMAND,
//     CAN_UNDO_COMMAND,
//     FORMAT_ELEMENT_COMMAND,
//     FORMAT_TEXT_COMMAND,
//     REDO_COMMAND,
//     SELECTION_CHANGE_COMMAND,
//     UNDO_COMMAND,

// } from 'lexical';

// import { useCallback, useEffect, useRef, useState } from 'react';

// const LowPriority = 1;

// const buttonStyles = { active: ' text-slate-800', base: 'w-8 h-8 text-slate-500 hover:bg-slate-500 disabled:text-slate-200 disabled:cursor-not-allowed flex justify-center items-center rounded-md' }

// function Divider() {
//     return <div className="divider" />;
// }

// export default function ToolbarPlugin() {
//     const [editor] = useLexicalComposerContext();
//     const toolbarRef = useRef(null);
//     const [canUndo, setCanUndo] = useState(false);
//     const [canRedo, setCanRedo] = useState(false);
//     const [isBold, setIsBold] = useState(false);
//     const [isItalic, setIsItalic] = useState(false);
//     const [isUnderline, setIsUnderline] = useState(false);
//     const [isStrikethrough, setIsStrikethrough] = useState(false);

//     const $updateToolbar = useCallback(() => {
//         const selection = $getSelection();
//         if ($isRangeSelection(selection)) {
//             // Update text format
//             setIsBold(selection.hasFormat('bold'));
//             setIsItalic(selection.hasFormat('italic'));
//             setIsUnderline(selection.hasFormat('underline'));
//             setIsStrikethrough(selection.hasFormat('strikethrough'));
//         }
//     }, []);

//     useEffect(() => {
//         return mergeRegister(
//             editor.registerUpdateListener(({ editorState }) => {
//                 editorState.read(() => {
//                     $updateToolbar();
//                 });
//             }),
//             editor.registerCommand(
//                 SELECTION_CHANGE_COMMAND,
//                 (_payload, _newEditor) => {
//                     $updateToolbar();
//                     return false;
//                 },
//                 LowPriority,
//             ),
//             editor.registerCommand(
//                 CAN_UNDO_COMMAND,
//                 (payload) => {
//                     setCanUndo(payload);
//                     return false;
//                 },
//                 LowPriority,
//             ),
//             editor.registerCommand(
//                 CAN_REDO_COMMAND,
//                 (payload) => {
//                     setCanRedo(payload);
//                     return false;
//                 },
//                 LowPriority,
//             ),
//         );
//     }, [editor, $updateToolbar]);

//     return (
//         <div className="flex w-full p-1 border-b-2 border-b-slate-500" ref={toolbarRef}>
//             <button
//                 disabled={!canUndo}
//                 onClick={() => {
//                     editor.dispatchCommand(UNDO_COMMAND, undefined);
//                 }}
//                 className={buttonStyles.base}
//                 aria-label="Undo">
//                 <CaretLeftIcon />
//             </button>
//             <button
//                 disabled={!canRedo}
//                 onClick={() => {
//                     editor.dispatchCommand(REDO_COMMAND, undefined);
//                 }}
//                 className={buttonStyles.base}
//                 aria-label="Redo">
//                 <CaretRightIcon />
//             </button>
//             <Divider />
//             <button
//                 onClick={() => {
//                     editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
//                 }}
//                 className={buttonStyles.base + (isBold ? buttonStyles.active : '')}
//                 aria-label="Format Bold">
//                 <FontBoldIcon />
//             </button>
//             <button
//                 onClick={() => {
//                     editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
//                 }}
//                 className={buttonStyles.base + (isItalic ? buttonStyles.active : '')}
//                 aria-label="Format Italic">
//                 <FontItalicIcon />
//             </button>
//             <button
//                 onClick={() => {
//                     editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
//                 }}
//                 className={buttonStyles.base + (isUnderline ? buttonStyles.active : '')}
//                 aria-label="Format Underline">
//                 <UnderlineIcon />
//             </button>
//             <button
//                 onClick={() => {
//                     editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
//                 }}
//                 className={buttonStyles.base + (isStrikethrough ? buttonStyles.active : '')}
//                 aria-label="Format Strikethrough">
//                 <StrikethroughIcon />
//             </button>
//             <Divider />
//             <button
//                 onClick={() => {
//                     editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left');
//                 }}
//                 className={buttonStyles.base}
//                 aria-label="Left Align">
//                 <TextAlignLeftIcon />
//             </button>
//             <button
//                 onClick={() => {
//                     editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center');
//                 }}
//                 className={buttonStyles.base}
//                 aria-label="Center Align">
//                 <TextAlignCenterIcon />
//             </button>
//             <button
//                 onClick={() => {
//                     editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right');
//                 }}
//                 className={buttonStyles.base}
//                 aria-label="Right Align">
//                 <TextAlignRightIcon />
//             </button>
//             <button
//                 onClick={() => {
//                     editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify');
//                 }}
//                 className={buttonStyles.base}
//                 aria-label="Justify Align">
//                 <TextAlignJustifyIcon />
//             </button>{' '}
//         </div>
//     );
// }

export { }