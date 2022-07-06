import React from 'react';
import Image from 'next/image';

const Author = ({ author }) => {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-white border border-white bg-opacity-20'>
      <div className='absolute left-0 right-0 -top-14'>
        <Image
          unoptimized
          alt={author.name}
          height='100px'
          width='100px'
          className='align-middle rounded-full'
          src={author.photo.url}
        />
      </div>
      <h3 className='text-white my-4 text-xl font-bold drop-shadow-lg'>
        {author.name}
      </h3>
      <p className='text-white text-lg drop-shadow-lg'>{author.bio}</p>
    </div>
  );
};

export default Author;
