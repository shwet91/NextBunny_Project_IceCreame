import T21TestimonialSection2 from "@/components/nextbunny/T21TestimonialSection2";
const testimonials = [{
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  name: "Emma Thompson",
  username: "@emmaai",
  text: " Let users mix and match base flavors, toppings, and sauces to create their dream scoop.",
  social: "https://twitter.com/emmaai"
}, {
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  name: "David Park",
  username: "@davidtech",
  text: "Offer mini sample packs online or tasters in-store to explore flavors.",
  social: "https://twitter.com/davidtech"
}, {
  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
  name: "Sofia Rodriguez",
  username: "@sofiaml",
  text: "Feeling happy, sad, or adventurous? Suggest flavors based on user mood.",
  social: "https://twitter.com/sofiaml"
}, {
  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  name: "Sarah Chen",
  username: "@sarahdev",
  text: "Real-time updates on when your order is being scooped, packed, and on its way.",
  social: "https://twitter.com/sarahdev"
}, {
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  name: "Tom Wilson",
  username: "@tomwtech",
  text: "Outstanding support team! They helped us implement complex features in record time.",
  social: "https://twitter.com/tomwtech"
}, {
  image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
  name: "Julia Martinez",
  username: "@juliadev",
  text: "Time-limited flavors that create urgency and excitement (e.g., Pumpkin Spice in Fall).",
  social: "https://twitter.com/juliadev"
}, {
  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  name: "Michael Chang",
  username: "@michaelc",
  text: " Points for every scoop, redeemable for free ice cream, swag, or secret menu items.",
  social: "https://twitter.com/michaelc"
}, {
  image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  name: "Rachel Kim",
  username: "@rachelk",
  text: "Personalized messages and cute packaging for birthdays, dates, or just because moments.",
  social: "https://twitter.com/rachelk"
}, {
  image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=face",
  name: "Alex Rivera",
  username: "@alexr",
  text: "Quick toggles for vegan, nut-free, gluten-free, or sugar-free options.",
  social: "https://twitter.com/alexr"
}, {
  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
  name: "Emily Zhang",
  username: "@emilyz",
  text: " Each flavor comes with a short story or inspiration behind it to deepen emotional connection.",
  social: "https://twitter.com/emilyz"
}, {
  image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
  name: "Daniel Brown",
  username: "@danielb",
  text: "Monthly delivery of curated or surprise flavors with early access to new launches.",
  social: "https://twitter.com/danielb"
}, {
  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
  name: "Lisa Anderson",
  username: "@lisatech",
  text: " Explore flavors by region, season, or ingredient origin with an engaging visual interface.",
  social: "https://twitter.com/lisatech"
}];
export default function T21TestimonialDemo2() {
  return <div className="w-full">
      <T21TestimonialSection2 testimonials={testimonials} title="Crafted with care, served with a smile and indulge in creamy delight" description="Cold, creamy, and impossible to resist this is ice cream, reimagined." maxDisplayed={6} />
    </div>;
}