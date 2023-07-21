"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { useProModal } from '@/hooks/use-pro-modal'
import { Badge } from '@/components/ui/badge'
import { TOOLS } from '@/constants'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Check, Zap } from 'lucide-react'
import { Button } from '@/components//ui/button'

export const ProModal = () => {
  const proModal = useProModal()
  return (
    <div>
      <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className='flex flex-col items-center justify-center pb-2 gap-y-4'>
              <div className='flex items-center py-1 font-bold gap-x-2'>
                Upgrade to ReactAIvate
                <Badge variant="premium" className='py-1 text-sm uppercase'>
                  Pro
                </Badge>
              </div>
            </DialogTitle>
            <DialogDescription className='pt-2 space-y-2 font-medium text-center text-zinc-900'>
              {TOOLS.map((tool) => (
                <Card
                  key={tool.label}
                  className='flex items-center justify-between p-3 border-black/5'
                >
                  <div className='flex items-center gap-x-4'>
                    <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                      <tool.icon className={cn("w-6 h-6", tool.color)} />
                    </div>
                    <div className='text-sm font-semibold'>
                      {tool.label}
                    </div>
                  </div>
                  <Check className='w-5 h-5 text-primary' />
                </Card>
              ))}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button size="lg" variant="premium" className='w-full'>
              Upgrade
              <Zap className='w-4 h-4 ml-2 fill-white' />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}