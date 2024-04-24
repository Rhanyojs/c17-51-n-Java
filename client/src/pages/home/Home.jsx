import { Header } from "@/components/home/Header";
import Nosotros from "../nosotros/Nosotros";
import Contacto from "../contacto/Contacto";
import Mascotas from "@/components/Mascotas/Mascotas";
import Footer from "@/components/Footer/Footer";
import { WhyUs } from "@/components/component/why-us";

function Home() {
  return (
    <>
      <Header />
      <Mascotas />
      <WhyUs />
      <Nosotros />
      <Contacto />
      <Footer />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
