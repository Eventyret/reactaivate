"use client";

import { useEffect } from 'react';
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("2e9ae536-aecd-42a6-93cd-a35d7ccc586b")
  }, [])
  return null
}