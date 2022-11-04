import { useState } from 'react';
import { ClosedCaptioning, Heart, List, MagnifyingGlass, X } from 'phosphor-react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import { useUser } from '@supabase/auth-helpers-react';

import Button from 'components/Button';
import Heading from 'components/Heading';
import Link from 'components/Link';

function MenuMobile() {
  const [open, setOpen] = useState(false);

  const user = useUser();

  return (
    <>
      <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
        <DialogPrimitive.Trigger asChild>
          <Button variant="secondary">
            <List weight="bold" size={20} />
          </Button>
        </DialogPrimitive.Trigger>

        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="bg-black bg-opacity-5 fixed inset-0 transition z-50" />
          <DialogPrimitive.Content className="bg-white rounded shadow-lg fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-full h-full p-6 transition focus:outline-none">
            <div className="flex flex-1 items-center justify-between">
              <DialogPrimitive.Title className="m-0 flex-1">
                <Heading size="md">Menu</Heading>
              </DialogPrimitive.Title>

              <DialogPrimitive.Close asChild>
                <X weight="bold" size={20} className="text-gray-400" />
              </DialogPrimitive.Close>
            </div>

            <hr className="w-full my-10 bg-transparent border-[1px] border-gray-100" />

            <ul className="flex flex-col gap-10">
              <li key="search">
                <Link href="/search">
                  <Heading size="sm" className="text-gray-500 font-medium">
                    Search
                  </Heading>
                </Link>
              </li>

              {user && (
                <li key="watchlist">
                  <Link href="/watchlist">
                    <Heading size="sm" className="text-gray-500">
                      Watchlist
                    </Heading>
                  </Link>
                </li>
              )}
            </ul>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
}

export default MenuMobile;
