import Image from 'next/image';
import { useRouter } from 'next/router';
import { Heart, HouseSimple, MagnifyingGlass, SignIn, SignOut } from 'phosphor-react';
import { toast } from 'react-toastify';
import clsx from 'clsx';

import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';

import Link from 'components/Link';
import LogoSvg from 'components/LogoSvg';
import Heading from 'components/Heading';
import Button from 'components/Button';

const menuItems = [
  { path: '/', icon: <HouseSimple weight="bold" /> },
  { path: '/search', icon: <MagnifyingGlass weight="bold" /> },
  { path: '/watchlist', icon: <Heart weight="bold" /> },
];

function Header() {
  const router = useRouter();

  const user = useUser();
  const supabaseClient = useSupabaseClient();

  const handleSignOut = async () => {
    const { error } = await supabaseClient.auth.signOut();

    if (error) toast.error(error.message);
    else {
      router.push('/login');
      toast.success(`Hey, you're leaving? Hope we see you tomorrow! 👋`);
    }
  };

  return (
    <header className="w-full min-h-[88px] flex flex-1 justify-center md:justify-between items-center relative">
      <Link href="/">
        <LogoSvg />
      </Link>

      <section className="flex items-center justify-between md:gap-6 fixed md:relative bottom-0 left-0 right-0 z-10 bg-gray-800 md:bg-transparent text-gray-400 border-t border-t-gray-700 md:border-0 py-3 px-6 md:p-0">
        {menuItems.map((item) => (
          <Link key={item.path} href={item.path}>
            <Heading asChild className={clsx({ 'text-white': router.pathname === item.path })}>
              {item.icon}
            </Heading>
          </Link>
        ))}

        <hr className="border border-gray-700 h-5 min-w-0" />

        {/* //* Github repo: https://github.com/fernandes-vinicius/that-movie */}
        <a href="https://github.com/fernandes-vinicius/that-movie" target="_blank" rel="noreferrer">
          <span className="relative block w-5 h-5">
            <Image src="/images/github-logo.svg" alt="Github" layout="fill" objectFit="contain" />
          </span>
        </a>

        {user && (
          <Button variant="secondary" icon={<SignOut weight="bold" />} onClick={handleSignOut}>
            <span className="hidden md:block">Sign Out</span>
          </Button>
        )}

        {!user && (
          <Link href="/login">
            <Button variant="primary" icon={<SignIn weight="bold" />}>
              <span className="hidden md:block">Sign In</span>
            </Button>
          </Link>
        )}
      </section>
    </header>
  );
}

export default Header;
