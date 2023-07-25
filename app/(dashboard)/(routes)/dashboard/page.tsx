"use client"

import { Card } from '@/temp/components/ui/card';
import { TOOLS } from '@/constants';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';


const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl font-bold text-center md:text-4xl">Explore the power of AI</h2>
        <p className="text-sm font-light text-center text-muted-foreground md:text-lg">Chat with the smartest AI - Exprience the power of AI</p>
      </div>
      <div className='px-4 space-y-4 md:px-20 lg:px-32'>
        {TOOLS.map((tool) => (
          <Card key={tool.href} className='flex items-center justify-between p-4 transition cursor-pointer border-black/5 hover:shadow-md' onClick={() => router.push(tool.href)}>
            <div className='flex items-center gap-x-4'>
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />

              </div>
              <div className='font-semibold'>{tool.label}</div>
            </div>
            <ArrowRight className='w-5 h-5 ' />
          </Card>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage;