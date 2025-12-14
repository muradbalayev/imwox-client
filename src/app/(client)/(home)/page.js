import {
  Navbar,
  Hero,
  Features,
  HowItWorks,
  UserTypes,
  Stats,
  CTA,
  Footer
} from "@/components/landing";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <UserTypes />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}
