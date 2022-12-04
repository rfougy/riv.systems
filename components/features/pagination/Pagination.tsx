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
        <Button onClick={() => setCurrentPage(1)}>&lt;&lt;</Button>
        <Button onClick={() => handlePrevButtonClick()}>&lt;</Button>
        <PageNumber>Page {currentPage}</PageNumber>
        <Button onClick={() => handleNextButtonClick()}>&gt;</Button>
        <Button onClick={() => setCurrentPage(lastPage)}>&gt;&gt;</Button>
      </PageNav>
      {/* <div>
        <Button onClick={() => setPostCardsPerPage(1)}>1 item per page</Button>
        <Button onClick={() => setPostCardsPerPage(2)}>2 items per page</Button>
      </div> */}
    </Container>
  );
};

export default Pagination;
