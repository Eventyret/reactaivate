"use client"
import { useEffect, useState } from 'react'
import { Card, CardContent } from './ui/card'
import { MAX_FREE_COUNTS } from '@/constants'

interface FreeCounterProps {
  apiLimitCount: number
}
export const FreeCounter = ({ apiLimitCount = 0 }: FreeCounterProps) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null

  return (
    <div className='px-3'>
      <Card className='border-0 bg-white/10'>
        <CardContent className='py-6'>
          <div className='mb-4 space-y-2 text-sm text-center text-white'>
            <p>{apiLimitCount} / {MAX_FREE_COUNTS}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )

}