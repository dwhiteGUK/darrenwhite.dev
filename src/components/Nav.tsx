import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

import { DarkModeToggle } from '~/components';

const NavItem = ({ text, link }: { text: string; link: string }) => (
  <li className="text-2xl font-bold mx-4 hover:text-orange-500 transition duration-150 ease-in-out">
    <Link href={link} passHref>
      <a>{text}</a>
    </Link>
  </li>
);

const Nav: FC = () => {
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="flex items-center">
      <ul className="ml-6 flex flex-col lg:flex-row justify-between items-end lg:items-center">
        <NavItem text="Home" link="/" />
        {/* <NavItem text="Work" link="/work" /> */}
        <NavItem text="Blog" link="/blog" />
        <li>
          <DarkModeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
