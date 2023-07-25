"use client";

import { useEffect, useState } from 'react';
import { ProModal } from '@/temp/components/pro-modal';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true) }, [])
  if (!isMounted) return null

  return (
    <>
      <ProModal />
    </>
  )
}