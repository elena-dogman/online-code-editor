'use client';

import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';

type DropdownMenuProps = {
  language: string;
  setLanguage: (language: string) => void;
};

const LanguageDropdownMenu: React.FC<DropdownMenuProps> = ({
  language,
  setLanguage,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border rounded-sm p-2 mb-4">
        {language}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setLanguage('javascript')}>
          JavaScript
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('typescript')}>
          TypeScript
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('python')}>
          Python
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('go')}>
          Go
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageDropdownMenu;
