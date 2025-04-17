import { ScrollArea } from "@/components/ui/scroll-area";
import Hero from "@/components/nextbunny/Hero";
import T21TestimonialDemo2 from "@/components/nextbunny/T21TestimonialDemo2";
import Footer from "@/components/nextbunny/footer";

export default function Home() {
  return (
    <ScrollArea className="h-screen bg-derby-50 ">
      <Hero />
      <T21TestimonialDemo2></T21TestimonialDemo2>
      <Footer></Footer>
    </ScrollArea>
  );
}