import ArrowIcon from "../../icons/ArrowIcon";
import { Button, Container, PageNav, PageNumber } from "./Pagination.styled";

const Pagination: React.FC<{
  currentPage: number;
  postCardsPerPage: number;
  totalPostCards: number;
  setCurrentPage: (arg: number) => void;
  setPostCardsPerPage: (arg: number) => void;
}> = ({
  currentPage,
  postCardsPerPage,
  totalPostCards,
  setCurrentPage,
  setPostCardsPerPage,
}) => {
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

  return (
    <Container>
      <PageNav>
        <Button
          aria-label="Navigate to First Results Page"
          disabled={onFirstPage}
          onClick={() => setCurrentPage(1)}
        >
          <ArrowIcon right />
          <ArrowIcon right />
        </Button>
        <Button
          aria-label="Navigate to Previous Results Page"
          disabled={onFirstPage}
          onClick={() => handlePrevButtonClick()}
        >
          <ArrowIcon right />
        </Button>
        <PageNumber>
          Page {currentPage} of {lastPage}
        </PageNumber>
        <Button
          aria-label="Navigate to Next Results Page"
          disabled={onLastPage}
          onClick={() => handleNextButtonClick()}
        >
          <ArrowIcon left />
        </Button>
        <Button
          aria-label="Navigate to Last Results Page"
          disabled={onLastPage}
          onClick={() => setCurrentPage(lastPage)}
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
