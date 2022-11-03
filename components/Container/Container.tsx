import { ReactNode } from 'react';
import clsx from 'clsx';

type ContainerProps = {
  maxWidth?: 'sm' | 'md' | 'lg';
  disabledPadding?: boolean;
  className?: string;
  children: ReactNode;
};

function Container(props: ContainerProps) {
  const { maxWidth = 'lg', disabledPadding, className, children } = props;

  return (
    <section
      className={clsx(
        'container mx-auto',
        {
          'max-w-7xl': maxWidth === 'lg',
          'max-w-2xl': maxWidth === 'md',
          'max-w-md': maxWidth === 'sm',
        },
        {
          'px-0': disabledPadding,
          'px-6': !disabledPadding,
        },
        className
      )}
    >
      {children}
    </section>
  );
}

export default Container;
