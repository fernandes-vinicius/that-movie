import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode;
  error?: boolean;
};

function TextInput(props: TextInputProps) {
  const { icon, error, ...rest } = props;

  return (
    <div
      className={clsx(
        'relative flex flex-row gap-4 w-full flex-wrap items-center border border-gray-600 bg-transparent rounded focus-within:ring-1 ring-gray-300',
        { 'border border-accent-red ring-accent-red': error }
      )}
    >
      {icon && (
        <span className="h-full flex items-center justify-center leading-snug w-8 ml-4 -mr-4">
          <Slot className="font-bold text-center text-gray-500 text-base w-5 h-5">{icon}</Slot>
        </span>
      )}

      <input
        className="w-full flex-1 h-12 px-4 py-1 bg-transparent rounded text-white focus:outline-none placeholder:text-gray-500"
        {...rest}
      />
    </div>
  );
}

export default TextInput;
