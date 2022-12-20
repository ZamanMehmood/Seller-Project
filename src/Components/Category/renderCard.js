// import { useState } from "react";
// import { Card, Button } from "react-bootstrap";
// import { IconChevronRight } from '@tabler/icons';
// import Modal from 'react-bootstrap/Modal';
// import PerfectScrollbar from 'react-perfect-scrollbar';
// import 'react-perfect-scrollbar/dist/css/styles.css';
// import s from './index.module.css'
// import axios from "axios";

// const RenderCard = ({ list }) => {
//     const [item, setItem] = useState({});
//     const [isInput, setIsInput] = useState(false);
//     const [showModal, setShowModal] = useState(false);
//     //    state for main categories section , input value
//        const [inputValue, setInputValue] = useState("");

//     //  const [data,setData] = useState([]);

//    console.log("inputValue", inputValue)

//     console.log('item----->', item);
//     const { index } = item;
//     // handle delete

//      const keypress = async(e) => {
//         if (e.key === 'Enter') {
//                 console.log('do validate');

//                 let payload = {
//                     Name: inputValue,
//                   };

//                   const apiCall = await axios.post(
//                     "http://localhost:8081/categories/createCategories",payload
//                   );
//                   console.log("apiCall on press Enter", apiCall);
//         }
//       };

//         const handleSave = async (e) => {
//             e.preventDefault();
//             console.log("this is handel save function")

//             console.log("input", inputValue )

//             let payload = {
//               Name: inputValue,
//             };

//             const apiCall = await axios.post(
//               "http://localhost:8081/categories/createCategories",payload
//             );
//             console.log("apiCall on save button", apiCall);
//           }

//     const handleDelete = async (e) => {
//         console.log("This is handle delete function")

//         // let payload ={
//         //     Id: data._id
//         // }

//     //    const data = await axios.delete(`http://localhost:8081/categories/${payload}`);
//     //      console.log("delete category",data)
//     //     setData(data)
//     //     // list.splice(index, 1);
//     //     // setItem(list);
//     //     // console.log('item ', item.el, 'index ', index)
//     }
//     // console.log('list', list)

//     return (
//         <Card className={s.categoryCard}>
//             <div className="d-flex justify-content-between">
//                 <div>
//                     <button onClick={() => setIsInput(true)} className="btn btn-primary btn-sm">Create New</button>
//                 </div>
//                 <div>
//                     <button onClick={() => setShowModal(true)} className="btn btn-outline-danger btn-sm">Delete</button>
//                 </div>
//             </div>
//             {/* Delete MOdal */}
//             <Modal backdrop="static" keyboard={false} show={index && showModal} onHide={() => setShowModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Delete Item</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <p>Are you sure, want to delete item?</p>
//                     <p>{item?.el?.Name}</p>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => setShowModal(false)}>
//                         Close
//                     </Button>
//                     <Button variant="danger" size="samll" onClick={handleDelete} >
//                         Delete
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//             {/* List */}
//             <div>
//                 <PerfectScrollbar
//                     component="div"
//                     style={{
//                         height: '510px',
//                     }}
//                 >
//                     <ul className={s.ulStyles}>
//                         {list && list.length > 0 && list.map((el, index) => (
//                             <li onClick={() => setItem({ el, index })} key={index} className={(item.index === index) ? `d-flex justify-content-between ${s.listStylesActive}` : `d-flex justify-content-between ${s.listStyles}`}>
//                                 < div> {el.Name}</div>
//                                 <div><IconChevronRight className={(item.index === index) ? "" : s.showIcon} stroke={1.5} size="1.2rem" /></div>
//                             </li>
//                         ))}
//                     </ul>
//                 </PerfectScrollbar>
//             </div >
//             {isInput &&
//                 <div className='d-flex justify-content-between pb-2'>
//                     <div>
//                         <input
//                          name="Name"
//                          className='form-control'
//                          value={inputValue}
//                          onChange={(e) => setInputValue(e.target.value)}
//                          placeholder='Type here...'
//                          onKeyUp={keypress}

//                           />
//                         </div>
//                     <div className='pt-1'>
//                         <button onClick ={handleSave}  type='submit' className='btn btn-primary btn-sm'>Save</button>
//                         </div>
//                 </div>
//             }
//         </Card >
//     );
// }
// export default RenderCard;

import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { IconChevronRight } from "@tabler/icons";
import Modal from "react-bootstrap/Modal";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import s from "./index.module.css";
import axios from "axios";

const RenderCard = ({ list, data, setData }) => {
  // console.log("propps", data)
  const [item, setItem] = useState({});
  const [isInput, setIsInput] = useState(false);
  const [showModal, setShowModal] = useState(false);
  //    state for getting input value of main categories section ,
  const [inputValue, setInputValue] = useState(""); 

//   console.log("inputValue", inputValue);

//   console.log("item----->", item);
  const { index } = item;
  // handle delete

  const keypress = async (e) => {  // when i press enter button this function calle
    if (e.key === "Enter") {
      console.log("do validate");

      let payload = {
        Name: inputValue,
      };

      const apiData = await axios.post(
        "http://localhost:8081/categories/createCategories",
        payload
      );
   
       setInputValue("")

      if (apiData.data.success) {
        let dataArray = data;
        let  newItem = apiData.data.data; 
        console.log("newItem ==>", newItem)
        let createdItems = [...dataArray,newItem];
        console.log('created items', createdItems);
        setData(createdItems);
  };
      console.log("apiCall on press Enter", apiData);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    // console.log("this is handel save function");

    // console.log("input", inputValue);

    let payload = {
      Name: inputValue,
    };

    const apiData = await axios.post(
      "http://localhost:8081/categories/createCategories",
      payload
    );
    setInputValue("")
    //   console.log("aaaaaaaaaaaa",apiData)
    // console.log("apiData on save button", apiData);

    //

    if (apiData.data.success) {    // check backend case, if case is success then add new item in the array immediately
        let dataArray = data;     // my data array
        let  newItem = apiData.data.data; // response of api
        // console.log("newItem ==>", newItem)
        let createdItems = [...dataArray,newItem];   // new dataArray array with new created object 
        // console.log('created items', createdItems);
        setData(createdItems);  
  };
  //
    };

  const handleDelete = async (e) => {
    console.log("This is handle delete function");

    // console.log("item id", item);
    let categoryId = item.el._id;

    const apiData = await axios.delete(
      `http://localhost:8081/categories/${categoryId}`
    );

    if (apiData.data.success) {
      let dataArray = data;
      let remaningItems = dataArray.filter((item) => item._id !== categoryId);
      console.log(remaningItems);
      setData(remaningItems);
      setShowModal(false);  // close the modal when item deleted
    }
  };

   

  return (
    <Card className={s.categoryCard}>
      <div className="d-flex justify-content-between">
        <div>
          <button
            onClick={() => setIsInput(true)}
            className="btn btn-primary btn-sm"
          >
            Create New
          </button>
        </div>
        <div>
          <button
            onClick={() => setShowModal(true)}
            className="btn btn-outline-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
      {/* Delete MOdal */}
      <Modal
        backdrop="static"
        keyboard={false}
        show={index && showModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure, want to delete item?</p>
          <p>{item?.el?.Name}</p>   
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
            height: "510px",
          }}
        >
          <ul className={s.ulStyles}>
            {list &&
              list.length > 0 &&
              list.map((el, index) => (
                <li
                  onClick={() => setItem({ el, index })}
                  key={index}
                  className={
                    item.index === index
                      ? `d-flex justify-content-between ${s.listStylesActive}`
                      : `d-flex justify-content-between ${s.listStyles}`
                  }
                >
                  <div>{el.Name}</div>
                  <div>
                    <IconChevronRight
                      className={item.index === index ? "" : s.showIcon}
                      stroke={1.5}
                      size="1.2rem"
                    />
                  </div>
                </li>
              ))}
          </ul>
        </PerfectScrollbar>
      </div>
      {isInput && (
        <div className="d-flex justify-content-between pb-2">
          <div>
            <input
              name="Name"
              className="form-control"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type here..."
              onKeyUp={keypress}
            />
          </div>
          <div className="pt-1">
            <button
              onClick={handleSave}
              type="submit"
              className="btn btn-primary btn-sm"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </Card>
  );
};
export default RenderCard;