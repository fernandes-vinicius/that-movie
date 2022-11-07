import ReactPaginate from 'react-paginate';
import { ArrowLeft, ArrowRight, DotsThree } from 'phosphor-react';

import Heading from 'components/Heading';

type PaginationProps = {
  currentPage: number;
  onPageChange: (page: number) => void;
};

const LIMIT_PAGES = 500; //! Fix page break over 500. service returns error 422 from page > 500, 501, 502, 503, 504, ...

function Pagination(props: PaginationProps) {
  const { currentPage, onPageChange } = props;

  const handlePageChange = (activePage: number) => {
    if (onPageChange) onPageChange(activePage);
  };

  const PreviosButton = (
    <Heading asChild>
      <ArrowLeft weight="bold" size={20} />
    </Heading>
  );

  const NextButton = (
    <Heading asChild>
      <ArrowRight weight="bold" size={20} />
    </Heading>
  );

  return (
    <ReactPaginate
      previousLabel={PreviosButton}
      nextLabel={NextButton}
      breakLabel={<DotsThree weight="bold" size={20} />}
      pageCount={LIMIT_PAGES}
      marginPagesDisplayed={1}
      pageRangeDisplayed={1}
      onPageChange={({ selected: activePage }) => handlePageChange(activePage)}
      disableInitialCallback={true}
      // initialPage={currentPage - 1}
      forcePage={currentPage - 1}
      containerClassName="flex justify-center items-center p-0 gap-8 text-gray-400"
      breakClassName="text-md text-center font-sans transtition hover:text-white"
      pageClassName="text-md text-center font-sans transtition hover:text-white"
      activeClassName="text-gray-50 font-medium"
    />
  );
}

export default Pagination;
