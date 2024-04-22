import { Header } from "@/components/home/Header";
import Nosotros from "../nosotros/Nosotros";
import Contacto from "../contacto/Contacto";
import Mascotas from "@/components/Mascotas/Mascotas";
import Footer from "@/components/Footer/Footer";
function Home() {
  return (
    <>
      <Header />
      <Mascotas />

      <Nosotros />
      <Contacto />
      <Footer/>
    </>
  );
}

export default Home;
