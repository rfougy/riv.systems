import { useEffect, useState } from "react";

import ArrowIcon from "../../icons/ArrowIcon";

import { Button, Container, PageNav, PageNumber } from "./Pagination.styled";

const Pagination: React.FC<{
  contentToPaginate: any[];
  paginationResetDeps: any[]; // dependencies for useEffect hook to reset pagination to 1.
  setRenderedPostCards: (arg: any) => void;
  totalPostCards: number;
}> = ({
  contentToPaginate,
  paginationResetDeps,
  setRenderedPostCards,
  totalPostCards,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postCardsPerPage, setPostCardsPerPage] = useState<number>(6);

  // deducting the current PostCards for pagination
  const indexOfLastPostCard: number = currentPage * postCardsPerPage;
  const indexOfFirstPostCard: number = indexOfLastPostCard - postCardsPerPage;
  const renderedPostCards: any[] = contentToPaginate.slice(
    indexOfFirstPostCard,
    indexOfLastPostCard
  );

  const lastPage: number | undefined = Math.ceil(
    totalPostCards / postCardsPerPage
  );
  const onFirstPage: boolean = currentPage === 1;
  const onLastPage: boolean = currentPage === lastPage;

  function handlePrevButtonClick(): void {
    if (currentPage > 1) {
      const prevPage: number = currentPage - 1;
      setCurrentPage(prevPage);
    }
  }

  function handleNextButtonClick(): void {
    if (lastPage && currentPage < lastPage) {
      const nextPage: number = currentPage + 1;
      setCurrentPage(nextPage);
    }
  }

  useEffect((): void => {
    setCurrentPage(1);
  }, [...paginationResetDeps, postCardsPerPage]);

  useEffect(
    (): void => setRenderedPostCards(renderedPostCards),
    [...paginationResetDeps, currentPage]
  );

  return (
    <Container>
      <PageNav>
        <Button
          aria-label="Navigate to First Results Page"
          disabled={onFirstPage}
          onClick={(): void => {
            window.scrollTo(0, 0);
            setCurrentPage(1);
          }}
        >
          <ArrowIcon left />
          <ArrowIcon left />
        </Button>
        <Button
          aria-label="Navigate to Previous Results Page"
          disabled={onFirstPage}
          onClick={(): void => {
            window.scrollTo(0, 0);
            handlePrevButtonClick();
          }}
        >
          <ArrowIcon left />
        </Button>
        <PageNumber>
          Page {currentPage} of {lastPage}
        </PageNumber>
        <Button
          aria-label="Navigate to Next Results Page"
          disabled={onLastPage}
          onClick={(): void => {
            window.scrollTo(0, 0);
            handleNextButtonClick();
          }}
        >
          <ArrowIcon right />
        </Button>
        <Button
          aria-label="Navigate to Last Results Page"
          disabled={onLastPage}
          onClick={(): void => {
            window.scrollTo(0, 0);
            setCurrentPage(lastPage);
          }}
        >
          <ArrowIcon right />
          <ArrowIcon right />
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
