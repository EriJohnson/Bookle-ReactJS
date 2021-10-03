import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

import ReactPaginate from 'react-paginate';
import styles from './styles.module.css';

interface IPaginate {
  initialPage?: number;
  pageCount: number;
  onPageChange?: (selectedItem: { selected: number }) => void;
}

function Paginate({ pageCount, onPageChange, initialPage }: IPaginate) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={onPageChange}
      initialPage={initialPage}
      containerClassName={styles.container}
      pageClassName={styles.pageClassName}
      pageRangeDisplayed={9}
      marginPagesDisplayed={1}
      activeClassName={styles.activePagination}
      nextLabel={<ChevronRightIcon w={6} h={6} />}
      previousLabel={<ChevronLeftIcon w={6} h={6} />}
      disableInitialCallback
    />
  );
}

export default Paginate;
