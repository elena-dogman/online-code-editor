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
  const handleEditorChange: OnChange = (value) => {
    if (value !== undefined) {
      onChange(value);
    }
  };

  const handleEditorMount: OnMount = (editor) => {
    console.log('Editor is ready:', editor);
  };

  return (
    <Editor
      height="320px"
      defaultLanguage={language}
      defaultValue={value}
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
