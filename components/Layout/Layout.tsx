import { ReactNode } from 'react';

import Container from 'components/Container';
import Header from 'components/Header';

type LayoutProps = {
  children?: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="w-screen h-screen bg-gray-900 text-white overflow-y-auto overflow-x-hidden">
      <Container>
        <Header />
        <main className="relative w-full h-full pt-4 md:pt-10 pb-10 flex flex-col gap-10">{children}</main>
      </Container>
    </div>
  );
}

export default Layout;
