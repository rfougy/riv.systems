import { useEffect, useState } from "react";
import ArrowIcon from "../../icons/ArrowIcon";
import { Button, Container, PageNav, PageNumber } from "./Pagination.styled";

const Pagination: React.FC<{
  // currentPage: number;
  // postCardsPerPage: number;
  // setCurrentPage: (arg: number) => void;
  // setPostCardsPerPage: (arg: number) => void;
  totalPostCards: number;
  contentToPaginate: any[];
  paginationResetDeps: any;
  setCurrentPostCards: (arg: any) => void;
}> = ({
  // currentPage,
  // postCardsPerPage,
  // setCurrentPage,
  // setPostCardsPerPage,
  totalPostCards,
  contentToPaginate,
  paginationResetDeps, // dependencides for useEffect hook to reset pagination to 1.
  setCurrentPostCards,
}) => {
  // states for pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postCardsPerPage, setPostCardsPerPage] = useState<number>(6);

  // deducting the current PostCards for pagination
  const indexOfLastPostCard: number = currentPage * postCardsPerPage;
  const indexOfFirstPostCard: number = indexOfLastPostCard - postCardsPerPage;
  const currentPostCards: any[] = contentToPaginate.slice(
    indexOfFirstPostCard,
    indexOfLastPostCard
  );

  const lastPage: number | undefined = Math.ceil(
    totalPostCards / postCardsPerPage
  );

  const onFirstPage: boolean = currentPage === 1;
  const onLastPage: boolean = currentPage === lastPage;

  function handlePrevButtonClick() {
    if (currentPage > 1) {
      const prevPage: number = currentPage - 1;
      setCurrentPage(prevPage);
    }
  }

  function handleNextButtonClick() {
    if (lastPage && currentPage < lastPage) {
      const nextPage: number = currentPage + 1;
      setCurrentPage(nextPage);
    }
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [...paginationResetDeps, postCardsPerPage]);

  useEffect(
    () => setCurrentPostCards(currentPostCards),
    [...paginationResetDeps, currentPage]
  );

  return (
    <Container>
      <PageNav>
        <Button
          aria-label="Navigate to First Results Page"
          disabled={onFirstPage}
          onClick={() => {
            window.scrollTo(0, 0);
            setCurrentPage(1);
          }}
        >
          <ArrowIcon right />
          <ArrowIcon right />
        </Button>
        <Button
          aria-label="Navigate to Previous Results Page"
          disabled={onFirstPage}
          onClick={() => {
            window.scrollTo(0, 0);
            handlePrevButtonClick();
          }}
        >
          <ArrowIcon right />
        </Button>
        <PageNumber>
          Page {currentPage} of {lastPage}
        </PageNumber>
        <Button
          aria-label="Navigate to Next Results Page"
          disabled={onLastPage}
          onClick={() => {
            window.scrollTo(0, 0);
            handleNextButtonClick();
          }}
        >
          <ArrowIcon left />
        </Button>
        <Button
          aria-label="Navigate to Last Results Page"
          disabled={onLastPage}
          onClick={() => {
            window.scrollTo(0, 0);
            setCurrentPage(lastPage);
          }}
        >
          <ArrowIcon left />
          <ArrowIcon left />
        </Button>
      </PageNav>
      {/* <div>
        <Button onClick={() => setPostCardsPerPage(1)}>1 item per page</Button>
        <Button onClick={() => setPostCardsPerPage(2)}>2 items per page</Button>
      </div> */}
    </Container>
  );
};

export default Pagination;
