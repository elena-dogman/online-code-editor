'use client';

import React from 'react';
import { Textarea } from '~/components/ui/textarea';

type CodeEditorProps = {
  value: string;
  onChange: (value: string) => void;
};

const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange }) => {
  return (
    <Textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Write your code here"
    />
  );
};

export default CodeEditor;
