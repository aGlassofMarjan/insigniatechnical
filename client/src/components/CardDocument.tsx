"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import { CirclePlus, MoveRight, Eye, ThumbsUp, ThumbsDown } from "lucide-react";

type Reaction = {
  likes: number;
  dislikes: number;
};

type Document = {
  id: number;
  title: string;
  reactions: Reaction;
  views: number;
  tags: string[];
};

const CardDocument = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDocuments = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/posts?limit=5&select=title,reactions,views,tags');
      return response.data.posts;
    } catch (error) {
      console.error('Error fetching documents', error);
      return [];
    }
  };

  useEffect(() => {
    const getDocumentsData = async () => {
      setLoading(true);
      const docs = await fetchDocuments();
      setDocuments(docs);
      setLoading(false);
    };

    getDocumentsData();
  }, []);

  if (loading) {
    return (
      <div className='w-full flex gap-2 justify-center items-center mb-4'>
        <span className="loading loading-spinner loading-lg"></span>
        <p>Loading documents...</p>
      </div>
    );
  }

  return (
    <>
      <div className='hidden lg:w-full lg:flex lg:justify-between lg:items-center lg:mb-4'>
        <p className='text-2xl font-semibold'>Documents</p>
        <div role="button" className='flex gap-1 hover:text-primary'>
          <p>View all</p>
          <MoveRight strokeWidth={1} />
        </div>
      </div>
      <div className='hidden lg:grid lg:grid-cols-6 lg:gap-4'>
        {documents.map((document, index) => {
          if (index === 0) {
            return (
              <div
                key={document.id}
                className="col-span-4 row-span-2 bg-primary-content rounded-md flex items-end shadow-md h-auto"
              >
                <div className="text-white block w-full rounded-b-md bg-primary-content p-4">
                  <p className="text-xl font-bold">{document.title}</p>
                  <div className="flex justify-between mb-4">
                    <p className="flex items-center gap-2 text-sm mt-2"><ThumbsUp strokeWidth={1.5} height={16} width={16} /> {document.reactions.likes}, <ThumbsDown strokeWidth={1.5} height={16} width={16} /> {document.reactions.dislikes}</p>
                    <p className="flex items-center gap-2 text-sm"><Eye strokeWidth={1.5} height={16} width={16} /> {document.views}</p>
                  </div>
                  <div className="flex gap-1 mt-2">
                    {document.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs text-neutral-content bg-accent px-2 py-1 rounded-md">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <div
                key={document.id}
                className="col-span-2 bg-primary-content rounded-md flex items-end shadow-md h-44"
              >
                <div className="block w-full rounded-b-md bg-primary-content text-white p-4">
                  <p className="font-bold">{document.title}</p>
                  <div className="flex justify-between items-center mb-4">
                    <p className="flex items-center gap-2 text-sm mt-2"><ThumbsUp strokeWidth={1.5} height={16} width={16} /> {document.reactions.likes}, <ThumbsDown strokeWidth={1.5} height={16} width={16} /> {document.reactions.dislikes}</p>
                    <p className="flex items-center gap-2 text-sm"><Eye strokeWidth={1.5} height={16} width={16} /> {document.views}</p>
                  </div>
                  <div className="flex gap-1 mt-2">
                    {document.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs text-neutral-content bg-accent px-2 py-1 rounded-md">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          }
        })}

        <div className="col-span-2 bg-primary-content text-white flex rounded-md shadow-md items-center justify-center h-44">
          <div className="flex gap-2">
            <CirclePlus width={44} height={44} strokeWidth={1} />
            <p>Share <br /> Your Document</p>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className='lg:hidden'>
        <div className='w-full flex justify-between'>
          <p className='text-2xl font-semibold'>Documents</p>
          <div role="button" className='flex gap-1 hover:text-primary'>
            <p>View all</p>
            <MoveRight strokeWidth={1} />
          </div>
        </div>
        <div className="flex">
          <div className="carousel space-x-4 p-4">
            {documents.map((document) => (
              <>
                <div
                  key={document.id}
                  className="carousel-item items-end bg-primary-content rounded-md text-white w-80 h-60 p-4"
                >
                  <div className="block w-full rounded-b-md bg-primary-content text-white">
                    <p className="font-bold">{document.title}</p>
                    <div className="flex justify-between mb-4">
                      <p className="flex items-center gap-2 text-sm mt-2"><ThumbsUp strokeWidth={1.5} height={16} width={16} /> {document.reactions.likes}, <ThumbsDown strokeWidth={1.5} height={16} width={16} /> {document.reactions.dislikes}</p>
                      <p className="flex items-center gap-2 text-sm"><Eye strokeWidth={1.5} height={16} width={16} /> {document.views}</p>
                    </div>
                    <div className="flex gap-1 mt-2">
                      {document.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs text-neutral-content bg-accent px-2 py-1 rounded-md">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  role='button'
                  className="carousel-item items-end bg-primary-content rounded-md text-white w-80 h-60 p-4"
                >
                  <div className="block w-full rounded-b-md bg-primary-content text-white">
                    <div className='flex w-full justify-start gap-2'>
                      <CirclePlus width={40} height={40} strokeWidth={1} />
                      <p className='text-sm'>Share <br /> Your Document</p>
                    </div>
                  </div>
                </div>
              </>

            ))}

          </div>
        </div>
      </div>
    </>
  );
}

export default CardDocument;
