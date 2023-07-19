import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const NavBar = () => {
  return (
    <div className='flex items-center -p4'>
      <Button variant="ghost" size="icon" className='md:hidden'>
        <Menu />
      </Button>
    </div>
  );
}

export default NavBar;