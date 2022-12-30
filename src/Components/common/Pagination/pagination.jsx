// import Pagination from 'react-bootstrap/Pagination';
// import s from './pagination.module.css';
import React from 'react';


const PaginationComponent = ({ pageSize, pageLimit,pageNumber, paginate}) => {
    // console.log("page size",pageSize);
    // console.log("pageLimit",pageLimit);
    console.log("pageNumber",pageNumber);
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(pageSize / pageLimit); i++) {   // 325 / 25   == 13 
      pageNumbers.push(i);
    }
  

    return (
      <div className="pagination">
      <button className='btn btn-success' onClick={() => paginate(pageNumber - 1)} disabled={pageNumber <= 1 ? true : false} >
        &larr; Previous
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number )}
          className={pageNumber === number ? "btn btn-primary" :  " btn btn-light"}
        >
          {number}
        </button>
      ))}
      
      <button
         onClick={() => paginate(pageNumber + 1)}
         className="btn btn-success"
         disabled={pageNumber >= pageNumbers.length ? true : false}
      >
        Next &rarr;
      </button>
    </div>
        // <div className="d-flex col-xs-6 justify-content-end pt-4">
        //     <Pagination className={s.pagedArea}>
        //         <Pagination.Prev disabled><b className='text-dark'>Previous</b></Pagination.Prev>
        //         <Pagination.Item><span className='text-dark'>{1}</span></Pagination.Item>
        //         <Pagination.Item><span className='text-dark'>{2}</span></Pagination.Item>
        //         <Pagination.Item><span className='text-dark'>{3}</span></Pagination.Item>
        //         <Pagination.Item active><span className='text-white'>{4}</span></Pagination.Item>
        //         <Pagination.Item><span className='text-dark'>{5}</span></Pagination.Item>
        //         <Pagination.Ellipsis className='text-dark' />
        //         <Pagination.Item><span className='text-dark'>{15}</span></Pagination.Item>
        //         <Pagination.Next><b className='text-dark'>Next</b></Pagination.Next>
        //     </Pagination>
        // </div>
    );
}

export default PaginationComponent;

  