import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { getAllMovie } from "../redux/actions/movieAtions";
import { useDispatch, useSelector } from "react-redux";
import { getMoviepagin } from "../redux/actions/movieAtions";

const PaginationComponent = () => {
  const [pageCount, setpageCount] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    setpageCount(pages);
  }, []);
  const pages = useSelector((state) => state.pageCount);
  //get current page

  const handlePageClick = (data) => {
    dispatch(getMoviepagin(data.selected + 1));
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالى"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="السابق"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default PaginationComponent;
