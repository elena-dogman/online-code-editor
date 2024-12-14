'use client';

import React, { useState } from 'react';
import { Button } from '~/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import CodeEditor from './CodeEditor';
import ExecutionResult from './ExecutionResult';

const EditorPage: React.FC = () => {
  const [language, setLanguage] = useState<string>('Go');
  const [code, setCode] = useState<string>('');
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

      <DropdownMenu>
        <DropdownMenuTrigger className="border rounded-sm p-2 mb-4">
          {language}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Select Language</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setLanguage('Go')}>
            Go
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLanguage('Python')}>
            Python
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <CodeEditor value={code} onChange={setCode} />

      <Button className="mt-4" onClick={handleRunCode}>
        Run
      </Button>

      <ExecutionResult output={output} />
    </div>
  );
};

export default EditorPage;
