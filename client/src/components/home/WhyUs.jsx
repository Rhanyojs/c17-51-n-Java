// import { Button } from "@/components/ui/button"

export default function WhyUs() {
  return (
    <div>
      <section className="py-12">
        <div className="container mx-auto space-y-8 text-[#4B5563] ">
          <h2 className="text-3xl font-bold text-center">Refugios de Animales</h2>
          <p className="text-xl text-center">
            {/* Let your pet enjoy the best grooming services and look and feel awesomely fresh & clean. */}
            Puedes encontrar refugios de animales cerca de ti y puedes visitarlos para adoptar a tu nueva mascota.
            {/* en todo el mundo, en los que puedes adoptar a tu nueva mascota. */}
          </p>
          <p className=" text-center">

            Nuestros refugios de animales ofrecen una amplia variedad de servicios para ayudar a los animales necesitados.
            Los refugios de animales son organizaciones sin fines de lucro que se dedican a rescatar, rehabilitar y reubicar animales abandonados, maltratados o en peligro. Los refugios de animales también ofrecen servicios de adopción, educación y atención veterinaria para ayudar a los animales necesitados.

            {/* We are passionate about the pets we care for and take the extra time to get to know them as individuals —
            building lasting relationships with our amazing customers. */}
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center space-y-2">
              <PersonStandingIcon className="h-12 w-12 text-blue-500" />
              <h3 className="text-lg font-semibold">Lorem ipsum.</h3>
              <p className=" text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                {/* A quick screening where we make sure nothing looks or feels abnormal. */}
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <ScissorsIcon className="h-12 w-12 text-blue-500" />
              <h3 className="text-lg font-semibold">Lorem ipsum dolor.</h3>
              <p className=" text-center">
                {/* This service is personalized to your pet&apos;s needs, including a brushout. */}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <ShowerHeadIcon className="h-12 w-12 text-blue-500" />
              <h3 className="text-lg font-semibold">Lorem.</h3>
              <p className=" text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                {/* We gently massage shampoo into your pet&apos;s coat to remove dirt and oil. */}
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <ShowerHeadIcon className="h-12 w-12 text-blue-500" />
              <h3 className="text-lg font-semibold"> ipsum dolor</h3>
              <p className=" text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum

                {/* We use a variety of methods from air-&-towel-drying to handheld dryers. */}
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <StoreIcon className="h-12 w-12 text-blue-500" />
              <h3 className="text-lg font-semibold">Sit amet consectetur</h3>
              <p className=" text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                {/* Our stylists work their magic to create impressive cuts for your loved pets. */}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="bg-[#f3f4f6] p-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between gap-8">
          <img
            alt="Veterinarian holding a dog"
            className="w-full lg:w-1/2 rounded-lg object-cover"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width="400"
          />
          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold">Why people choose us</h2>
            <p className="text-lg">A few reasons why people prefer our services</p>
            <p className="">
              Since our establishment in 1999, we have been working to deliver the best grooming services for your dogs
              and cats. Besides, pet owners all across the US choose our salon for:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckIcon className="text-green-500 h-6 w-6 mr-2" />
                Healthy and safe environment
              </li>
              <li className="flex items-center">
                <CheckIcon className="text-green-500 h-6 w-6 mr-2" />
                Different grooming styles for your pets
              </li>
              <li className="flex items-center">
                <CheckIcon className="text-green-500 h-6 w-6 mr-2" />
                High-quality and fully sterile equipment
              </li>
              <li className="flex items-center">
                <CheckIcon className="text-green-500 h-6 w-6 mr-2" />
                Convenient and affordable
              </li>
            </ul>
            <Button variant="default">Book Now</Button>
          </div>
        </div>
      </section> */}
    </div>
  )
}

// function CheckIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polyline points="20 6 9 17 4 12" />
//     </svg>
//   )
// }


function PersonStandingIcon(props) {
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
      <circle cx="12" cy="5" r="1" />
      <path d="m9 20 3-6 3 6" />
      <path d="m6 8 6 2 6-2" />
      <path d="M12 10v4" />
    </svg>
  )
}


function ScissorsIcon(props) {
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
      <circle cx="6" cy="6" r="3" />
      <path d="M8.12 8.12 12 12" />
      <path d="M20 4 8.12 15.88" />
      <circle cx="6" cy="18" r="3" />
      <path d="M14.8 14.8 20 20" />
    </svg>
  )
}


function ShowerHeadIcon(props) {
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
      <path d="m4 4 2.5 2.5" />
      <path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" />
      <path d="M15 5 5 15" />
      <path d="M14 17v.01" />
      <path d="M10 16v.01" />
      <path d="M13 13v.01" />
      <path d="M16 10v.01" />
      <path d="M11 20v.01" />
      <path d="M17 14v.01" />
      <path d="M20 11v.01" />
    </svg>
  )
}


function StoreIcon(props) {
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
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  )
}