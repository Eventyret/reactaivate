import { MessageSquare, ImageIcon, VideoIcon, MusicIcon, Code } from "lucide-react";

export const MAX_FREE_COUNTS = 5;
export const TOOLS = [
  { label: "Conversation", href: "/conversation", icon: MessageSquare, color: "text-violet-500", bgColor: "bg-violet-500/10" },
  { label: "Image Generation", href: "/image", icon: ImageIcon, color: "text-pink-700", bgColor: "bg-pink-700/10" },
  { label: "Video Generation", href: "/video", icon: VideoIcon, color: "text-orange-700", bgColor: "bg-orange-700/10" },
  { label: "Music Generation", href: "/music", icon: MusicIcon, color: "text-emerald-500", bgColor: "bg-emerald-500/10" },
  { label: "Code Generation", href: "/code", icon: Code, color: "text-green-700", bgColor: "bg-green-700/10" },
];
