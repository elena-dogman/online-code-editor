'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '~/components/ui/button';
import CodeEditor from './CodeEditor';
import LanguageDropdownMenu from './LanguageDropdownMenu';
import ResultBlock from './ResultBlock';

const defaultComments: Record<string, string> = {
  python: '# Write your code here...',
  go: '// Write your code here...',
};

type Task = {
  id: number;
  title: string;
  description: string;
  initial_code: Record<string, string>;
};

const EditorPage: React.FC = () => {
  const [language, setLanguage] = useState<string>('python');
  const [code, setCode] = useState<string>(defaultComments['python']);
  const [output, setOutput] = useState<string>('');
  const [isError, setIsError] = useState<boolean | undefined>(undefined);
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch('/api/task.json');
      const data = await response.json();
      setTask(data);
      setCode(data.initial_code['python']);
    };

    fetchTask();
  }, []);

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

      if (result.status === 'success') {
        setOutput(result.output);
        setIsError(false);
      } else if (result.status === 'error') {
        setOutput(result.error || 'Error during code execution');
        setIsError(true);
      }
    } catch (error) {
      setOutput('Network error occurred.');
      setIsError(true);
    }
  };

  useEffect(() => {
    setCode(defaultComments[language] || '// Write your code here...');
  }, [language]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="bg-surface-a10 p-4 rounded-sm">
          <h1 className="text-2xl font-bold mb-4 text-primary-a20">Task</h1>
          {task ? (
            <>
              <h2 className="text-xl mb-2">{task.title}</h2>
              <p className="mb-4">{task.description}</p>
            </>
          ) : (
            <p>Loading task...</p>
          )}
        </div>

        <div className="w-full lg:w-2/3">
          <LanguageDropdownMenu language={language} setLanguage={setLanguage} />

          <CodeEditor value={code} onChange={setCode} language={language} />

          <Button
            className="mt-4 bg-surface-a20 font-bold"
            onClick={handleRunCode}
          >
            Run
          </Button>

          <ResultBlock output={output} isError={isError} />
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
