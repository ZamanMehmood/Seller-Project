import { Card } from 'react-bootstrap'
import { IconDotsCircleHorizontal } from '@tabler/icons'
import s from './index.module.css'

const CustomTable = ({ orderColumns, orderList }) => {
    console.log('order columns', orderColumns);
    return (
        <Card className="p-2">
            <div className={s.tableContainer}>
                <table>
                    <thead>
                        <tr className={s.solid}>
                            {orderColumns && orderColumns.map((column, index) => (
                                <div key={index}>
                                    <th style={{ minWidth: column.minWidth }}>{column.columnName}</th>
                                </div>
                            ))}
                        </tr>
                        {/* <tr className={s.solid}>
                            <th className={s.orderIdTd}>Order ID</th>
                            <th className={s.customerDetailTd}>Customer Details</th>
                            <th className={s.itemsTd}>Items</th>
                            <th className={s.totalTd}>Total</th>
                            <th className={s.dateTd}>Date</th>
                            <th className={s.actionTd}>Action</th>
                        </tr> */}
                    </thead>
                    <tbody>
                        {orderList && orderList.map((order, index) => (
                            <tr key={index} className={s.solid}>
                                <td className={s.orderIdTd}>#{order.id}</td>
                                <td className={s.customerDetailTd}>
                                    <b>{order.name}</b>
                                    <p>{order.phone}</p>
                                </td>
                                <td className={s.itemsTd}>{order.items}</td>
                                <td className={s.totalTd}>SAR {(order.total).toFixed(2)}</td>
                                <td className={s.dateTd}>{order.date}</td>
                                <td className={s.actionTd}> <IconDotsCircleHorizontal stroke="1.6" size="2.0rem" /></td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </Card>
    )
}

export default CustomTable;