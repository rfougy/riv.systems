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

  function handlePrev() {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  }

  function handleNext() {
    if (lastPage && currentPage < lastPage) setCurrentPage(currentPage + 1);
  }

  return (
    <nav>
      <div>
        <button onClick={() => setCurrentPage(1)}>&lt;&lt;</button>
        <button onClick={() => handlePrev()}>&lt;</button>
        <div>
          {currentPage}/{lastPage}
        </div>
        <button onClick={() => handleNext()}>&gt;</button>
        <button onClick={() => setCurrentPage(lastPage)}>&gt;&gt;</button>
      </div>
      <div>
        <button onClick={() => setPostCardsPerPage(1)}>1 item per page</button>
        <button onClick={() => setPostCardsPerPage(2)}>2 items per page</button>
      </div>
    </nav>
  );
};

export default Pagination;
