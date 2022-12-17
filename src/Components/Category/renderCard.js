import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { IconChevronRight } from '@tabler/icons';
import Modal from 'react-bootstrap/Modal';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import s from './index.module.css'

const RenderCard = ({ list }) => {
    const [item, setItem] = useState({});
    const [isInput, setIsInput] = useState(false);
    const [showModal, setShowModal] = useState(false);
    console.log('item----->', item);
    const { index } = item;
    // handle delete
    const handleDelete = () => {
        list.splice(index, 1);
        setItem(list);
        console.log('item ', item.el, 'index ', index)
    }
    // console.log('list', list)

    return (
        <Card className={s.categoryCard}>
            <div className="d-flex justify-content-between">
                <div>
                    <button onClick={() => setIsInput(true)} className="btn btn-primary btn-sm">Create New</button>
                </div>
                <div>
                    <button onClick={() => setShowModal(true)} className="btn btn-outline-danger btn-sm">Delete</button>
                </div>
            </div>
            {/* Delete MOdal */}
            <Modal backdrop="static" keyboard={false} show={index && showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure, want to delete item?</p>
                    <p>{item?.el?.name}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="danger" size="samll" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* List */}
            <div>
                <PerfectScrollbar
                    component="div"
                    style={{
                        height: '510px',
                    }}
                >
                    <ul className={s.ulStyles}>
                        {list && list.length > 0 && list.map((el, index) => (
                            <li onClick={() => setItem({ el, index })} key={index} className={(item.index === index) ? `d-flex justify-content-between ${s.listStylesActive}` : `d-flex justify-content-between ${s.listStyles}`}>
                                < div> {el.name}</div>
                                <div><IconChevronRight className={(item.index === index) ? "" : s.showIcon} stroke={1.5} size="1.2rem" /></div>
                            </li>
                        ))}
                    </ul>
                </PerfectScrollbar>
            </div >
            {isInput &&
                <div className='d-flex justify-content-between pb-2'>
                    <div><input name="name" className='form-control' placeholder='Type here...' /></div>
                    <div className='pt-1'><button className='btn btn-primary btn-sm'>Save</button></div>
                </div>
            }
        </Card >
    );
}
export default RenderCard;