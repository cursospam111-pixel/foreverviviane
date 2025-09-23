import { Button } from '@/components/ui/button';
import { Leaf } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Leaf className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-white">Lift Detox Black</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
