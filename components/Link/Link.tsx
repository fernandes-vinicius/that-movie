import { ReactNode } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

type LinkProps = NextLinkProps & {
  className?: string;
  children: ReactNode;
};

function Link({ className, children, ...rest }: LinkProps) {
  return (
    <NextLink {...rest} passHref>
      <a className={className}>{children}</a>
    </NextLink>
  );
}

export default Link;
