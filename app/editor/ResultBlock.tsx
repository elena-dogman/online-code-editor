'use client';

import React from 'react';

type ResultBlockProps = {
  output: string;
  isError?: boolean;
};

const ResultBlock: React.FC<ResultBlockProps> = ({ output, isError }) => {
  return (
    <div
      className={`mt-4 p-4 rounded-sm ${
        isError ? 'bg-red-100 border-red-500' : 'bg-green-100 border-green-500'
      } border`}
    >
      <h2 className="text-xl mb-2">{isError ? 'Error' : 'Execution Result'}</h2>
      <pre className={isError ? 'text-red-700' : 'text-green-700'}>
        {output}
      </pre>
    </div>
  );
};

export default ResultBlock;
