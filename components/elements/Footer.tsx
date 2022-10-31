import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { socials } from '../../config/config';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className='absolute left-0 right-0 bottom-0 max-w-[95rem] mx-auto flex items-center justify-center flex-col'>
      <div className="source">
        {socials?.map(({ name, url, icon }, i) => {
          return (
            <Link key={i} href={url}>
              <span className='cursor-pointer mx-4'>
                <Image
                  src={icon}
                  alt={name}
                  width={100}
                  height={100}
                  responsive
                />
              </span>
            </Link>
          )
        })}
      </div>
      <div className="tag flex items-center justify-between w-full">
        <div>#Hello</div>
        <div>
          <h3 className='text-base font-shadow uppercase tracking-[7px]'>Ekanshu</h3>
        </div>
      </div>
    </footer>
  )
}

export default Footer