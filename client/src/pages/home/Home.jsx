import { Header } from '@/components/home/Header';
import WhyUs from '@/components/home/WhyUs';
import Nosotros from "../nosotros/Nosotros";
import Contacto from "../contacto/Contacto";
import Mascotas from "@/components/Mascotas/Mascotas";
import Footer from "@/components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Mascotas />
      <WhyUs />
      <Nosotros />
      <Contacto />
      <Footer />
    </>
  );
}

export default Home;
