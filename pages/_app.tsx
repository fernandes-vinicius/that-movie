import { useState } from 'react';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';

//* SEO config
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo-config';

import 'styles/globals.css';

import Layout from 'components/Layout';

function MyApp({ Component, pageProps }: AppProps<{ initialSession: Session }>) {
  //* Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps.initialSession}>
      <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
        <ToastContainer theme="dark" position="bottom-right" />
      </Layout>
    </SessionContextProvider>
  );
}

export default MyApp;
