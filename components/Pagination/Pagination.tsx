const Pagination: React.FC<{
  postCardsPerPage: number;
  totalPostCards: number;
  paginate: (arg: number) => void;
}> = ({ postCardsPerPage, totalPostCards, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPostCards / postCardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
