'use client';

import React, { useState } from 'react';
import { Button } from '~/components/ui/button';
import CodeEditor from './CodeEditor';
import LanguageDropdownMenu from './LanguageDropdownMenu';
import ResultBlock from './ResultBlock';

const EditorPage: React.FC = () => {
  const [language, setLanguage] = useState<string>('javascript');
  const [code, setCode] = useState<string>('// Write your code here...');
  const [output, setOutput] = useState<string>('');

  const handleRunCode = async () => {
    setOutput(`Running ${language} code...\n${code}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Code Editor</h1>
      <p className="mb-4">
        Select a programming language, write your code, and click "Run" to
        execute it.
      </p>
      <LanguageDropdownMenu language={language} setLanguage={setLanguage} />{' '}
      <CodeEditor value={code} onChange={setCode} language={language} />
      <Button className="mt-4" onClick={handleRunCode}>
        Run
      </Button>
      <ResultBlock output={output} />
    </div>
  );
};

export default EditorPage;
