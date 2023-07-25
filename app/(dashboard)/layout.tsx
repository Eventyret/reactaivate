import { NavBar } from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import { getApiLimitCount } from '@/lib/api-limit';
import { checkSubscription } from '@/lib/subscription';

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();
  return (
    <div className='relative h-full'>
      <div className='hidden h-full bg-gray-900 md:flex md:w-72 md:flex-col md:fixed md:inset-y-0'>
        <Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
      </div>
      <main className='md:pl-72'>
        <NavBar />
        {children}
      </main>
    </div>

  );
}

export default DashboardLayout;