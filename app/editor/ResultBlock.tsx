'use client';

import clsx from 'clsx';
import React from 'react';

type ExecutionResultProps = {
  output: string;
  isError?: boolean;
};

const ResultBlock: React.FC<ExecutionResultProps> = ({ output, isError }) => {
  return (
    <div
      className={clsx('mt-4 p-4 border rounded-sm', {
        'bg-gray-100': isError === undefined,
        'bg-red-100': isError === true,
        'bg-green-100': isError === false,
      })}
    >
      <h2 className="text-xl mb-2">
        {isError === undefined
          ? 'Execution Result'
          : isError
          ? 'Error'
          : 'Execution Result'}
      </h2>
      <pre>{output}</pre>
    </div>
  );
};

export default ResultBlock;
