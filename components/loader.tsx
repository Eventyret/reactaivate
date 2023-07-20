import Image from 'next/image';
import { useEffect, useState } from 'react';

export const Loader = () => {
  const [pun, setPun] = useState('');
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const puns = [
      "AI is currently 🤔 the mysteries of the universe. Please wait while it expands its digital horizons.",
      "Please 🐻 with us as the AI fetches data. It's on a mission to quench your thirst for knowledge.",
      "AI is in deep thought mode. Take a breather while it explores the vast realms of 💡.",
      "While the AI analyzes data, let's take a moment to appreciate its tireless 🧠 cogitation.",
      "Sit tight as the AI's mental gears spin, 🚀 data faster than a caffeine-powered supercomputer.",
      "AI is in its think tank 🤔💭, uncovering insights while you enjoy a virtual cup of ☕️.",
      "Please hold on as the AI delves into the 🌌, seeking answers to your burning questions.",
      "While the AI flexes its computational 💪, take a moment to marvel at its insatiable hunger for data.",
      "AI is engaging in a virtual brainstorming session. Your patience will be rewarded with 💡 results.",
      "AI is tapping into its vast neural network, traversing digital 🌐 to fetch the knowledge you seek. Sit back and let the information flow."
    ];

    const randomPun = () => {
      const punIndex = Math.floor(Math.random() * puns.length);
      setPun(puns[punIndex]);
    };

    randomPun(); // Set initial pun

    const interval = setInterval(() => {
      randomPun(); // Change pun
    }, Math.floor(Math.random() * 3000) + 2000); // Change pun every 2-5 seconds

    const timerInterval = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1); // Increment timer by 1 second
    }, 1000); // Update timer every second

    return () => {
      clearInterval(interval); // Cleanup: clear pun interval
      clearInterval(timerInterval); // Cleanup: clear timer interval
    };
  }, []);

  const formatTimer = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <div className='flex flex-col items-center justify-center h-full gap-y-4'>
      <div className='relative w-10 h-10 animate-spin'>
        <Image alt="logo" fill src="/logo.png" />
      </div>
      <p className='text-sm text-muted-foreground'>{pun}</p>
      <p className='text-sm text-muted-foreground'>Elapsed Time: <span className='font-bold'>{formatTimer(timer)}</span> seconds</p>
    </div>

  );
}
