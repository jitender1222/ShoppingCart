export const Pagination = () => {
  const { state, dispatch } = useContext(Cart);
  const { products, currentPageProducts } = state;

  const pageNumbers = [
    ...Array(Math.ceil(products.length / recordsPerPage)),
  ].map((_, index) => index + 1);

  return (
    <div>
      {pageNumbers.map((pageNumber) => (
        <button key={pageNumber} onClick={() => paginate(pageNumber)}>
          {pageNumber}
        </button>
      ))}
    </div>
  );
};
