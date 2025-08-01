import Navbar from "@/components/navbar";
import Image from "next/image";
import Hero from "@/components/hero";
import Statistics from "@/components/statistics";
import Problems from "@/components/problems";
import Solutions from "@/components/solutions";
import Features from "@/components/features";
import Works from "@/components/works";
import Reviews from "@/components/reviews";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>
      <Statistics />
      <Problems />
      <Solutions />
      <Features/>
      <Works />
      <Reviews/>
      <Pricing/>
      <FAQ/>
      <Footer />
    </main>
  );
}
