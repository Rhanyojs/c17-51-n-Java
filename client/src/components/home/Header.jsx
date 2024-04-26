import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { useState } from "react";
// import { Input } from "@/components/ui/input"
import { Link} from 'react-router-dom';

export function Header() {
  const [form, setForm] = useState({
    age: "",
    location: "",
    pet:""
});
  return (
    <div
      className=" min-h-[100vh] h-full py-4 bg-white"
      style={{
        backgroundImage:
          "url('https://livedemo00.template-help.com/wt_prod-28070/images/main-img-1920x892.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      // https://livedemo00.template-help.com/wt_prod-28070/images/main-img-1920x892.jpg
    >
      <div className="max-w-7xl md:mx-[100px] lg:mx-auto px-4 sm:px-6 lg:px-6 lg:pt-[100px]">
        <main className="flex flex-col gap-4 lg:flex-row justify-between items-center ">
          <div className="flex flex-col gap-4  lg:gap-6 lg:w-3/5 mt-12 ">
            <p className="text-[22px] text-[#bd177a] font-bold">
              Bienvenido a Adopta.me
            </p>
            <h2 className="text-6xl font-bold text-gray-800 mb-6 ">
              Hogar para Todos
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Encuentra a tu compañero perfecto ¡Adopta una Mascota!
            </p>
          </div>
          <div className="w-full h-full flex justify-center lg:justify-end ">
            <div className=" lg:min-w-[400px] lg:w-[55%] bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Encuentra tu mascota ideal
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Encuentra tu mascota ideal en base a tus preferencias,
                necesidades y/o capacidades. Cualquier opción es una buena
                opción para darle un hogar a un ser que lo necesita.
              </p>
              <form className="space-y-4">
                <Select>
                  <SelectTrigger id="pet">
                    <SelectValue placeholder="Mascota" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="dog">Perro</SelectItem>
                    <SelectItem value="cat">Gato</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger id="breed">
                    <SelectValue placeholder="Ubicación" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="labrador">Ciudad de México</SelectItem>
                    <SelectItem value="persian">Guadalajara</SelectItem>
                    <SelectItem value="labrador">Ciudad de México</SelectItem>
                    <SelectItem value="persian">Monterrey</SelectItem>
                    <SelectItem value="labrador">Puebla</SelectItem>
                    <SelectItem value="persian">Tijuana</SelectItem>
                    <SelectItem value="labrador">Ciudad de México</SelectItem>
                    <SelectItem value="persian">Guadalajara</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger id="age">
                    <SelectValue placeholder="Edad" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="puppy">1 años</SelectItem>
                    <SelectItem value="adult">2 años</SelectItem>
                    <SelectItem value="puppy">3 años</SelectItem>
                    <SelectItem value="adult">4 años</SelectItem>
                    <SelectItem value="puppy">5 años</SelectItem>
                    <SelectItem value="adult">6 años</SelectItem>
                  </SelectContent>
                </Select>

                {/* <Input placeholder="Date" type="date" /> */}
                <Button className="w-100 bg-yellow-300 hover:bg-purple-500 text-black hover:text-white">
                  
                  <Link to="/Mascotas">Buscar Ahora</Link>
                </Button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
