import { Hero } from "@/components/hero";
import { Portfolio } from "@/components/portfolio";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { About } from "@/components/about";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <Portfolio />
      <Services />
      <Process />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
