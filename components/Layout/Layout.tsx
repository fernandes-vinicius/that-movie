import { ReactNode } from 'react';

import Container from 'components/Container';
import Header from 'components/Header';
import ScrollTop from 'components/ScrollTop';

type LayoutProps = {
  children?: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="w-screen h-screen bg-gray-900 text-white overflow-y-auto overflow-x-hidden">
        <Container>
          <div id="back-to-top-anchor" />
          <Header />
          <main className="relative w-full h-full pt-4 md:pt-10 pb-10 flex flex-col gap-10">{children}</main>
        </Container>
      </div>

      <ScrollTop anchorId="back-to-top-anchor" />
    </>
  );
}

export default Layout;
