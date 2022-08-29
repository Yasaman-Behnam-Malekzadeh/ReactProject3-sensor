import React from "react";
import Pagination from "react-bootstrap/Pagination";

function PaginationList({ setPage, paging }) {

  //Change page with setPage from HOMEPAGE 
  const changePage = (pageNo) => {
    {
      setPage(pageNo);
    }
  };

  //Adding page Items
  const item = [];
  for (let pageNumber = 1; pageNumber <= 7; pageNumber++) {
    item.push(
      <Pagination.Item
        key={pageNumber}
        active={pageNumber === paging.currentPage}
        onClick={() => {
          changePage(pageNumber);
        }}
      >
        {pageNumber}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination size="sm">
        <Pagination.First onClick={() => changePage(paging.pages[0])} />
        <Pagination.Prev onClick={() => changePage(paging.previousPage)} />
        {item}
        <Pagination.Next onClick={() => changePage(paging.nextPage)} />
        <Pagination.Last
          onClick={() => changePage(paging.pages.slice(-1)[0])}
        />
      </Pagination>
    </div>
  );
}

export default PaginationList;
