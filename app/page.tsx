import Sliders from "@/components/Sliders";
import Featured from '@/components/Featured';
import Image from "next/image";
import Offer from "@/components/Offer";

export default function Home() {
  return (
   <>
   <Sliders />
   <Featured />
   <Offer />
   </>
  );
}
