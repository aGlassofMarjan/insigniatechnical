"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import { MoveRight } from "lucide-react";
import Image from "next/image";

type Channel = {
  name: string;
  ticker: string;
  image: string;
};

const Channel = () => {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [loading, setLoading] = useState(true); // Loading state

  const fetchLogos = async () => {
    try {
      setLoading(true);
      const companies = ["Microsoft", "Google", "HP", "Amazon", "Facebook", "Lenovo", "Asus", "Oracle", "Adobe", "LG", "Xiaomi", "Vivo", "Oppo", "Toyota", "Honda", "Yamaha", "Airbus", "Boeing", "Mercedes", "BMW"];
      const promises = companies.map(async (company) => {
        const response = await axios.get(`https://api.api-ninjas.com/v1/logo?name=${company}`, {
          headers: { 'X-Api-Key': '49J7KXiimWLiJcI7q08glg==vt9PzZmfWmbDi8O3' },
        });
        return response.data[0];
      });
      const channelData = await Promise.all(promises);
      setChannels(channelData);
    } catch (error) {
      console.error('Error fetching logos', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogos();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex gap-2 justify-center items-center my-8">
        <span className="loading loading-spinner loading-lg"></span>
        <p>Loading channels...</p>
      </div>
    );
  }

  return (
    <>
      <div className='w-full flex items-center justify-between mb-4'>
        <p className='text-2xl font-semibold'>Channel</p>
        <div role="button" className='flex gap-1 hover:text-primary'>
          <p>Browse all channels</p>
          <MoveRight strokeWidth={1} />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-3 lg:max-h-[100vh] max-h-[50vh] overflow-auto">
        {channels?.map((channel, index) => (
          <div key={index} className="bg-neutral rounded-md w-auto min-h-32 flex relative justify-between p-2 flex-col space-y-2 md:items-start items-center">
            <Image src={channel.image} alt={`${channel.name} logo`} width={100} height={100} />
            <p className="text-neutral-content">{channel.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Channel;
