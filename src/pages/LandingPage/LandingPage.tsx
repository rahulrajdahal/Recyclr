import { Footer, FooterBanner, Navbar } from "../../components";
import Hero from "./Hero";
import OurServices from "./OurServices";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurServices />
      <FooterBanner />
      <Footer />
    </>
  );
}
