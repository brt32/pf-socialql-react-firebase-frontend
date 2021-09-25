import React from "react";

const PostPagination = ({ page, setPage, postCount }) => {
  let totalPages;
  const pagination = () => {
    totalPages = Math.ceil(postCount && postCount.totalPosts / 3);
    // console.log(totalPages);
    if (totalPages > 7) totalPages = 7;
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li className="pagination-circle">
          <a
            className={`page-link ${page === i && "activePagination"}`}
            onClick={() => setPage(i)}
          >
            {i}
          </a>
        </li>
      );
    }
    return pages;
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="pagination-circle">
          <a
            className={`page-link ${page === 1 && "disabled"}`}
            onClick={() => setPage(1)}
          >
            Previous
          </a>
        </li>

        {pagination()}

        <li className="pagination-circle">
          <a
            className={`page-link ${page === totalPages && "disabled"}`}
            onClick={() => setPage(totalPages)}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PostPagination;
