import React from 'react';
import Image from 'next/image';
import MenuList from './menuList';
import BurgerMenu from './BurgerMenu';

export default function Menu() {
  return (
    <div className="menu flex flex-row justify-between w-full md:px-16 px-4 py-8">
      <a href="/">
        <Image
          src="/images/gsf-blue.png"
          alt="GSF logotype"
          width={185}
          height={46}
          priority
          layout="fixed"
        />
      </a>
      <div className="xl:flex hidden">
        <MenuList />
      </div>
      {/* Burger menu */}
      <div className="xl:hidden flex items-center text-white menu-list">
        <BurgerMenu color="blue" />
      </div>
    </div>
  );
}