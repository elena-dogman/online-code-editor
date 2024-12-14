import { SquareCode } from 'lucide-react';

const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex w-full items-center justify-between   p-3 md:gap-0 shadow-lg shadow-black/30">
      <div className="flex flex-row items-center gap-1">
        <SquareCode className="text-primary-a50" />
        <h1 className="text-2xl text-primary-a50">Code Editor</h1>
      </div>
    </div>
  );
};

export default Header;
