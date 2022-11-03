import { ReactNode } from 'react';
import { NextSeo } from 'next-seo';

type SEOProps = {
  title?: string;
  description?: string;
  path?: string;
  children: ReactNode;
};

const Page = ({ title, description, path, children }: SEOProps) => {
  const pageSiteUrl = `https://that-movie.vercel.app${path}`;
  const pageTitle = title && `${title} | THATMOVIE`;

  return (
    <>
      <NextSeo
        title={pageTitle}
        description={description}
        canonical={pageSiteUrl}
        openGraph={{ url: pageSiteUrl, title }}
      />

      {children}
    </>
  );
};

export default Page;
