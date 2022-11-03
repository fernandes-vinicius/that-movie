import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

type HeadingProps = {
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  children?: ReactNode;
  className?: string;
};

function Heading(props: HeadingProps) {
  const { size = 'md', asChild, className, children, ...rest } = props;

  const Comp = asChild ? Slot : 'h2';

  return (
    <Comp
      {...rest}
      className={clsx(
        'font-medium font-sans',
        {
          'text-2xl': size === 'lg',
          'text-xl': size === 'md',
          'text-lg': size === 'sm',
        },
        className
      )}
    >
      {children}
    </Comp>
  );
}

export default Heading;
