import { ScrollArea } from "@/components/ui/scroll-area";
import Hero from "@/components/nextbunny/Hero";

export default function Home() {
  return (
    <ScrollArea className="h-screen bg-derby-50 ">
      <Hero />
      <h1 className="mt-52 text-center bg-cyan-300" >THIS IS HOME</h1>
    </ScrollArea>
  );
}