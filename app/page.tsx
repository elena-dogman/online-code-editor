'use client';

import dynamic from 'next/dynamic';

const EditorPage = dynamic(() => import('./editor/EditorPage'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return <EditorPage />;
}
