import { Header } from "@/components/home/Header";
import Nosotros from "../nosotros/Nosotros";
import Contacto from "../contacto/Contacto";
import Mascotas from "@/components/Mascotas/Mascotas";
function Home() {
  return (
    <>
      <Header />
      <Mascotas />

      <Nosotros />
      <Contacto />
    </>
  );
}

export default Home;
