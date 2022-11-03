import { ReactNode } from 'react';
import { NextSeo } from 'next-seo';

type SEOProps = {
  title?: string;
  description?: string;
  path?: string;
  children: ReactNode;
};

const Page = ({ title, description, path, children }: SEOProps) => {
  const metaSiteUrl = `https://that-movie.vercel.app${path}`;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={metaSiteUrl}
        openGraph={{ url: metaSiteUrl, title }}
      />

      {children}
    </>
  );
};

export default Page;
