import Image from 'next/image';
import { useRouter } from 'next/router';
import { Heart, MagnifyingGlass, SignIn, SignOut } from 'phosphor-react';
import { toast } from 'react-toastify';

import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';

import Link from 'components/Link';
import LogoSvg from 'components/LogoSvg';
import Heading from 'components/Heading';
import Button from 'components/Button';

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
    <header className="w-full h-[88px] flex flex-1 justify-between items-center">
      <Link href="/">
        <LogoSvg />
      </Link>

      <section className="flex items-center gap-6 justify-end">
        <Link href="/search">
          <Heading asChild>
            <MagnifyingGlass weight="bold" />
          </Heading>
        </Link>

        {user && (
          <Link href="/watchlist">
            <Heading asChild>
              <Heart weight="bold" />
            </Heading>
          </Link>
        )}

        {/* //? Github repository: https://github.com/fernandes-vinicius/watch-me */}
        <a href="https://github.com/fernandes-vinicius/watch-me" target="_blank" rel="noreferrer">
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
