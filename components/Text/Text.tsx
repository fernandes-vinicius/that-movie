import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

type TextProps = {
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  children?: ReactNode;
  className?: string;
};

function Text(props: TextProps) {
  const { size = 'md', asChild, className, children, ...rest } = props;

  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      {...rest}
      className={clsx(
        'text-base font-sans',
        {
          'text-sm': size === 'sm',
          'text-md': size === 'md',
          'text-lg': size === 'lg',
        },
        className
      )}
    >
      {children}
    </Comp>
  );
}

export default Text;
