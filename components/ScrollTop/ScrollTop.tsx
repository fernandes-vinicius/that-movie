import { ArrowLineUp, ArrowUp } from 'phosphor-react';
import { MouseEvent } from 'react';

type ScrollTopProps = {
  anchorId: string;
};

function ScrollTop({ anchorId }: ScrollTopProps) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(`#${anchorId}`);

    if (anchor) {
      anchor.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  };

  return (
    <div className="">
      <div role="presentation" className="fixed bottom-6 right-4 md:right-10">
        <button
          title="Back to top"
          onClick={handleClick}
          className="bg-gray-300 bg-opacity-50 hover:bg-white transition text-gray-900 flex items-center justify-center p-3 shadow-lg rounded-full"
        >
          <ArrowLineUp weight="bold" size={20} />
        </button>
      </div>
    </div>
  );
}

export default ScrollTop;
