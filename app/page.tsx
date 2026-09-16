import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Trip from "@/components/Trip";
import Hotels from "@/components/Hotels";
import Rooms from "@/components/Rooms";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Programs />
        <Trip />
        <Hotels />
        <Rooms />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}