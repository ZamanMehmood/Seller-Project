import Pagination from 'react-bootstrap/Pagination';
import s from './pagination.module.css';

const PaginationComponent = ({ }) => {
    return (
        <div className="d-flex col-xs-6 justify-content-end pt-4">
            <Pagination className={s.pagedArea}>
                <Pagination.Prev disabled><b className='text-dark'>Previous</b></Pagination.Prev>
                <Pagination.Item><span className='text-dark'>{1}</span></Pagination.Item>
                <Pagination.Item><span className='text-dark'>{2}</span></Pagination.Item>
                <Pagination.Item><span className='text-dark'>{3}</span></Pagination.Item>
                <Pagination.Item active><span className='text-white'>{4}</span></Pagination.Item>
                <Pagination.Item><span className='text-dark'>{5}</span></Pagination.Item>
                <Pagination.Ellipsis className='text-dark' />
                <Pagination.Item><span className='text-dark'>{15}</span></Pagination.Item>
                <Pagination.Next><b className='text-dark'>Next</b></Pagination.Next>
            </Pagination>
        </div>
    );
}

export default PaginationComponent;

 

//on Delete confirm pop-up 
// set Loader on off
// 