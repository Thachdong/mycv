import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = ({ totalPage, page, setPage }) => (
  <div className="pagination">
    <div className="content-box flex-box">
      <FaAngleLeft onClick={() => page > 1 && setPage(page - 1)} />
      <div className="count-box">
        <input
          type="number"
          value={page}
          onChange={(e) => {
            let { value } = e.target;
            setPage(value > totalPage ? totalPage : value < 0 ? 1 : value);
          }}
        />
        <span>/{totalPage}</span>
      </div>
      <FaAngleRight onClick={() => page < totalPage && setPage(page + 1)} />
    </div>
  </div>
);

export default Pagination;
