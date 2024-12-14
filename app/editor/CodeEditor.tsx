'use client';

import Editor, { OnChange, OnMount } from '@monaco-editor/react';
import React from 'react';

type CodeEditorProps = {
  value: string;
  onChange: (value: string) => void;
  language: string;
};

const CodeEditor: React.FC<CodeEditorProps> = ({
  value,
  onChange,
  language,
}) => {
  const handleEditorChange: OnChange = (newValue) => {
    if (newValue !== undefined) {
      onChange(newValue);
    }
  };

  const handleEditorMount: OnMount = (editor, monaco) => {
    console.log('Editor is ready:', editor);
  };

  return (
    <Editor
      height="320px"
      language={language}
      value={value}
      onChange={handleEditorChange}
      onMount={handleEditorMount}
      theme="vs-dark"
      options={{
        fontSize: 14,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
      }}
    />
  );
};

export default CodeEditor;
