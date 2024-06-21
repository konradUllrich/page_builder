// /**
//  * Copyright (c) Meta Platforms, Inc. and affiliates.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  *
//  */
// import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
// import { LexicalComposer, InitialConfigType } from '@lexical/react/LexicalComposer';
// import { ContentEditable } from '@lexical/react/LexicalContentEditable';
// import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
// import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
// import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
// import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';

// import ExampleTheme from './ExampleTheme';
// import ToolbarPlugin from './plugins/ToolbarPlugin/ToolbarPlugin';
// import TreeViewPlugin from './plugins/TreeViewPlugin';
// import { useMemo } from 'react';
// import { LexicalReactRenderer } from './LexicalReactRenderer/LexicalRender';

// function Placeholder() {
//     return <div className="absolute top-4 left-2 select-none" >Enter some rich text...</div>;
// }

// export default function App({ data, onChange }: { onChange: (data: any) => {}, data: any }) {

//     console.log({ hasData: !!data });

//     const editorConfig = useMemo(() => {
//         return {
//             namespace: 'React.js Demo',
//             nodes: [],
//             // Handling of errors during update
//             onError(error: Error) {
//                 throw error;
//             },
//             // editorState: data ? JSON.stringify(data) : undefined,
//             theme: ExampleTheme,
//         } as InitialConfigType
//     }, [])

//     return (
//         <LexicalComposer initialConfig={editorConfig}>
//             <div className="mx-auto  w-full p-2">
//                 <ToolbarPlugin />
//                 <div className="relative">
//                     <RichTextPlugin
//                         contentEditable={<ContentEditable className="min-h-[150px] relative" />}
//                         placeholder={<Placeholder />}
//                         ErrorBoundary={LexicalErrorBoundary}
//                     />
//                     <HistoryPlugin />
//                     <AutoFocusPlugin />
//                     <OnChangePlugin onChange={(state, editor, set) => {
//                         console.log({ state, editor, set, json: state.toJSON() });
//                         onChange(state.toJSON())
//                     }} />

//                 </div>
//             </div>
//         </LexicalComposer>
//     );
// }

// export const RenderRichText = ({ data }: { data: any }) => {

//     return <div> <LexicalReactRenderer content={data} /> </div>
// }

export {};
