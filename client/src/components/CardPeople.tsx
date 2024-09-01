"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';
import { CirclePlus, MoveRight } from 'lucide-react';

type Company = {
  title: string;
};

type People = {
  firstName: string;
  lastName: string;
  company: Company;
  image: string;
};

const CardPeople = () => {
  const [peoples, setPeoples] = useState<People[]>([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [showWorkButton, setShowWorkButton] = useState(false);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://dummyjson.com/users?limit=5&select=firstName,lastName,company,image');
        setPeoples(response.data.users);
      } catch (error) {
        console.error('Error fetching peoples', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPeople();

    // Timeout to ensure mapped card loaded before "Add" card
    const timer = setTimeout(() => {
      setShowWorkButton(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <>
        <div className='w-full flex gap-2 justify-center items-center mb-4'>
          <span className="loading loading-spinner loading-lg"></span>
          <p>loading people..</p>
        </div>
      </>
    )
  }

  return (
    <>
      <div className='hidden lg:w-full lg:flex lg:justify-between lg:items-center lg:mb-4'>
        <p className='text-2xl font-semibold'>People</p>
        <div role="button" className='flex gap-1 hover:text-primary'>
          <p>View all</p>
          <MoveRight strokeWidth={1} />
        </div>
      </div>
      <div className='hidden lg:grid lg:grid-cols-6 lg:gap-4'>
        {peoples.map((people, index) => {
          if (index === 0) {
            return (
              <div
                key={index}
                className="col-span-4 row-span-2 bg-gray-600 rounded-md flex items-end shadow-md h-auto bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${people.image})` }}
              >
                <div className="text-white block w-full p-4 rounded-b-md bg-primary-content">
                  <p>{people.firstName} {people.lastName}</p>
                  <div className="flex justify-start">
                    <p className='opacity-70'>{people.company.title}</p>
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <div
                key={index}
                className="col-span-2 bg-gray-600 rounded-md flex items-end shadow-md h-44 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${people.image})` }}
              >
                <div className="block w-full p-4 rounded-b-md bg-primary-content text-white">
                  <p>{people.firstName} {people.lastName}</p>
                  <div className="flex justify-start text-sm">
                    <p className='opacity-70'>{people.company.title}</p>
                  </div>
                </div>
              </div>
            )
          }
        })}

        <div className="col-span-2 bg-primary-content text-white flex rounded-md shadow-md items-center justify-center h-44">
          <div className="flex gap-2">
            <CirclePlus width={44} height={44} strokeWidth={1} />
            <p>Upload <br /> Your Own Video</p>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className='lg:hidden'>
        <div className='w-full flex justify-between'>
          <p className='text-2xl font-semibold'>People</p>
          <div role="button" className='flex gap-1 hover:text-primary'>
            <p>View all </p>
            <MoveRight strokeWidth={1} />
          </div>
        </div>
        <div className="flex">
          <div className="carousel space-x-4 p-4">
            {peoples.map((people, index) => (
              <div
                key={index}
                className="carousel-item items-end bg-primary-content rounded-md text-white w-80 h-60 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${people.image})` }}
              >
                <div className="block w-full p-4 rounded-b-md bg-primary-content text-white">
                  <div className='flex w-full justify-center'>
                  </div>
                  <p>{people.firstName} {people.lastName}</p>
                  <div className="flex justify-start text-sm">
                    <p className='opacity-70'>{people.company.title}</p>
                  </div>
                </div>
              </div>
            ))}

            {showWorkButton && (
              <div
                role='button'
                className="carousel-item items-end bg-primary-content rounded-md text-white w-80 h-60 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
              >
                <div className="block w-full p-4 rounded-b-md bg-primary-content text-white">
                  <div className='flex w-full justify-start gap-2'>
                    <CirclePlus width={40} height={40} strokeWidth={1} />
                    <p className='text-sm'>Show <br /> Your Work</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardPeople;
