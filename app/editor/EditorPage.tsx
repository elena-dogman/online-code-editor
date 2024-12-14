'use client';

import React, { useState } from 'react';
import { Button } from '~/components/ui/button';
import CodeEditor from './CodeEditor';
import LanguageDropdownMenu from './LanguageDropdownMenu';
import ResultBlock from './ResultBlock';

const EditorPage: React.FC = () => {
  const [language, setLanguage] = useState<string>('python');
  const [code, setCode] = useState<string>('// Write your code here...');
  const [output, setOutput] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const handleRunCode = async () => {
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: code,
          language: language,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setOutput(result.output);
        setIsError(false);
      } else {
        setOutput(result.message || 'Failed to execute code');
        setIsError(true);
      }
    } catch (error) {
      setOutput('Network error');
      setIsError(true);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Code Editor</h1>
      <p className="mb-4">
        Select a programming language, write your code, and click "Run" to
        execute it.
      </p>

      <LanguageDropdownMenu language={language} setLanguage={setLanguage} />

      <CodeEditor value={code} onChange={setCode} language={language} />

      <Button className="mt-4" onClick={handleRunCode}>
        Run
      </Button>

      <ResultBlock output={output} isError={isError} />
    </div>
  );
};

export default EditorPage;
