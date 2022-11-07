import { MouseEvent } from 'react';
import { ArrowLineUp } from 'phosphor-react';
import clsx from 'clsx';

type ScrollTopProps = {
  anchorId: string;
};

function ScrollTop({ anchorId }: ScrollTopProps) {
  const handleClick = (event: MouseEvent) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(`#${anchorId}`);
    if (anchor) {
      anchor.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  };

  return (
    <div role="presentation" className="fixed bottom-20 md:bottom-6 right-6 md:right-10">
      <button
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="dark"
        title="Back to top"
        onClick={handleClick}
        className={clsx(
          'inline-block p-3 bg-gray-300 bg-opacity-50 text-gray-900 font-medium leading-tight uppercase rounded-full shadow-md hover:bg-white focus:shadow-lg focus:outline-0 focus:ring-0 transition duration-150 ease-in-out'
        )}
      >
        <ArrowLineUp weight="bold" size={20} />
      </button>
    </div>
  );
}

export default ScrollTop;
