import Image from 'next/image';
import { useState, useEffect } from 'react';

export const Loader = () => {
  const [pun, setPun] = useState('');

  useEffect(() => {
    const puns = [
      "AI is currently 🤔 the mysteries of the universe. Please wait while it expands its digital horizons.",
      "Please bear with us as the AI 🐻 fetches data. It's on a mission to quench your thirst for knowledge.",
      "AI is in deep thought mode. Take a breather while it explores the vast realms of 💡.",
      "While the AI analyzes data, let's take a moment to appreciate its tireless 🧠 cogitation.",
      "Sit tight as the AI's mental gears spin, 🚀 data faster than a caffeine-powered supercomputer.",
      "AI is in its think tank, uncovering insights while you enjoy a virtual cup of 🔍.",
      "Please hold on as the AI delves into the 🌌, seeking answers to your burning questions.",
      "While the AI flexes its computational 💪, take a moment to marvel at its insatiable hunger for data.",
      "AI is engaging in a virtual brainstorming session. Your patience will be rewarded with 💡 results.",
      "AI is tapping into its vast neural network, traversing digital 🌐 to fetch the knowledge you seek. Sit back and let the information flow."
    ];

    const randomPun = puns[Math.floor(Math.random() * puns.length)];
    setPun(randomPun);
  }, []);
  return (
    <div className='flex flex-col items-center justify-center h-full gap-y-4'>
      <div className='relative w-10 h-10 animate-spin'>
        <Image alt="logo" fill src="/logo.png" />
      </div>
      <p className='text-sm text-muted-foreground'>{pun}</p>
    </div>
  );
}
