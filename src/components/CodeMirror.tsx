"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { historyField } from "@codemirror/commands";
import { javascript } from "@codemirror/lang-javascript";
import { EditorView } from "@codemirror/view";

const stateFields = { history: historyField };
const CodeMirrorCompo = ({ value }: { value: string }) => {
  const [jsonValue, setJsonValue] = useState<string>(value);

  const handlvalueeJsonChange = (value: string) => {
    setJsonValue(value);
  };

  const serializedState = localStorage.getItem("myEditorState");

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">JSON Input</h1>
      <CodeMirror
        extensions={[
          javascript({ jsx: true }),
          EditorView.lineWrapping, // Aktifkan line wrapping
        ]}
        height="200px"
        value={jsonValue}
        initialState={
          serializedState
            ? {
                json: JSON.parse(serializedState || ""),
                fields: stateFields,
              }
            : undefined
        }
        onChange={(value, viewUpdate) => {
          handlvalueeJsonChange(value);
        }}
      />
    </div>
  );
};

export default CodeMirrorCompo;
