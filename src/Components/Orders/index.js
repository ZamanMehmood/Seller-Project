import { useState } from "react";
import { Container } from "react-bootstrap";
import { IconUpload } from '@tabler/icons'
import s from './orders.module.css';
import PaginationComponent from './../common/Pagination/pagination';
import CustomTable from "../common/CustomTable/customTable";

const Orders = () => {
    const [isPending, setIsPending] = useState("");
    const columns = [
        { columnName: 'Order ID', minWidth: '140px' },
        { columnName: 'Customer Details', minWidth: '230px' },
        { columnName: 'Items', minWidth: '200px' },
        { columnName: 'Total', minWidth: '170px' },
        { columnName: 'Date', minWidth: '200px' },
        { columnName: 'Action', minWidth: '60px' }
    ]
    const orders = [
        {
            id: 1,
            name: 'Arshad Ali',
            phone: '123456789',
            items: 'Bag',
            total: 23.00,
            date: '12-06-2012',
        },
        {
            id: 2,
            name: 'Ahmad Mehmood',
            phone: '921234789',
            items: 'Chair',
            total: 66.00,
            date: '12-06-2012',
        },
        {
            id: 3,
            name: 'Bilal Mughal',
            phone: '00456789',
            items: 'Shirt',
            total: 28.00,
            date: '12-06-2012',
        },
        {
            id: 4,
            name: 'Mesut Ozil',
            phone: '123456789',
            items: 'Shoes',
            total: 155.00,
            date: '12-06-2012',
        }
    ]
    return (
        <Container>
            <h3 className={s.head3}>Orders History</h3>
            {/* Filter Butons */}
            <div className="row pt-2">
                <div className="col-md-6">
                    <span onClick={() => setIsPending(true)} className={isPending === true ? s.pendingBtnActive : s.pendingBtn}>Pending</span>
                    <span onClick={() => setIsPending(false)} className={isPending === false ? s.completedBtnActive : s.completedBtn}>Completed</span>
                </div>
                <div className="col-md-6">
                    <div className="d-flex flex-row ps-5">
                        <button className={s.exportBtn}><IconUpload stroke="1.2" size="1.2rem" /> <span className="ps-1 text-bold">Export</span></button>
                        <input type="date" name="startDate" className={s.dateInput} /> <b className="ps-1 pe-1 pt-1">To</b> <input type="date" name="endDate" className={s.dateInput} />
                    </div>
                </div>
            </div>
            {/* Table Card */}
            <div className="pt-3">
                <CustomTable orderColumns={columns} orderList={orders} />
            </div>
            {/* Pagination */}
            <PaginationComponent />
        </Container>
    )
}

export default Orders;