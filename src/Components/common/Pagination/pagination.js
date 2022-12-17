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

        // <Pagination className='paged-area'>
        //     <Pagination.Prev> <b className='text-dark'>Previous</b></Pagination.Prev>
        //     <Pagination.Item>{1}</Pagination.Item>
        //     <Pagination.Ellipsis />
        //     <Pagination.Item>{10}</Pagination.Item>
        //     <Pagination.Item>{11}</Pagination.Item>
        //     <Pagination.Item active>{12}</Pagination.Item>
        //     <Pagination.Item>{13}</Pagination.Item>
        //     <Pagination.Item disabled>{14}</Pagination.Item>
        //     <Pagination.Ellipsis />
        //     <Pagination.Item>{20}</Pagination.Item>
        //     <Pagination.Next><b className='text-dark'>Next</b></Pagination.Next>
        // </Pagination>
    );
}

export default PaginationComponent;