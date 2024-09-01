import Image from "next/image";
import CardVideo from "@/components/CardVideo";
import Navbar from "@/components/Navbar";
import { MoveRight, Search } from "lucide-react";
import Activity from "@/components/Activity";
import CardPeople from "@/components/CardPeople";
import Channel from "@/components/Channel";
import CardDocument from "@/components/CardDocument";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="p-8 font-serif">
        <div className="mb-4 lg:hidden">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <Search strokeWidth={1} />
          </label>
        </div>
        <div className="block lg:grid lg:grid-cols-3 lg:gap-6">
          <div className="flex-col lg:col-span-2">
            <div className='hidden lg:w-full lg:flex lg:justify-between lg:items-center lg:mb-4'>
              <p className='text-2xl font-semibold'>Videos</p>
              <div role="button" className='flex gap-1 hover:text-primary'>
                <p>Browse all videos </p>
                <MoveRight strokeWidth={1} />
              </div>
            </div>
            <CardVideo />
          </div>
          <div className="lg:col-span-1">
            <Activity />
          </div>
        </div>

        <div className="mt-4 block lg:grid lg:grid-cols-3 lg:gap-6">
          <div className="flex-col lg:col-span-2">
            <div className="my-8">
              <CardPeople />
            </div>
            <div className="lg:hidden">
              <Channel />
            </div>
            <div className="my-14">
              <CardDocument />
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1">
            <div className="my-8">
              <Channel />
            </div>
          </div>
        </div>


      </div>
      <Footer />

    </>

  );
}
