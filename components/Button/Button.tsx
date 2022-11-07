import { ButtonHTMLAttributes, ReactNode } from 'react';
import { CircleNotch } from 'phosphor-react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
  loading?: boolean;
};

function Button(props: ButtonProps) {
  const { variant = 'primary', disabled, icon, loading, className, children, ...rest } = props;

  return (
    <button
      {...rest}
      disabled={disabled || loading}
      className={clsx(
        'w-auto min-h-10 inline-flex justify-center items-center gap-3 py-2 px-3 rounded transition text-md text-center capitalize font-medium font-sans',
        { 'bg-primary-main text-white hover:bg-primary-dark': variant === 'primary' },
        { 'bg-white text-black hover:bg-gray-200': variant === 'secondary' },
        { 'bg-gray-700 text-gray-400 hover:bg-gray-700': disabled || loading },
        className
      )}
    >
      {loading && (
        <span className="w-5 h-5 animate-spin">
          <CircleNotch size={20} weight="bold" />
        </span>
      )}

      {!loading && icon && <Slot className="w-5 h-5 font-bold">{icon}</Slot>}

      {loading ? 'Loading...' : children}
    </button>
  );
}

export default Button;
