// import { Container, Card } from "react-bootstrap";
// import { MdDeleteOutline } from 'react-icons/md'
// import { IconUpload, IconDownload, IconPencil } from '@tabler/icons'
// import PaginationComponent from "../../common/Pagination/pagination";
// import s from './index.module.css'
// import { useState, useEffect } from "react";
// import axios from "axios";

// const ListProduct = () => {
//     const [products, setProducts] = useState([]);      
    
//     useEffect(() => {
//         const apiHandler = async () => {
//              const data = await axios.get('http://localhost:8081/products/getProducts')
//              console.log("get products api call ==>", data)
//              setProducts(data.data)
//         }
//         apiHandler();
//       },[])

//       const deleteProduct = async(id) => {   // this id i recive from where i am calling this function onClick.
//         console.log("this is handle delate function")
//          console.log("products array", id)

//         // let productId = id;
//     const apiData = await axios.delete(
//       `http://localhost:8081/products/${id}`
//     );
//     console.log("delet call", apiData);

//     if (apiData.data.success) {
//         let productsArray = products;
//         let remaningItems = productsArray.filter((item) => item._id !== id);
//         console.log("remaningItems", remaningItems);
//         setProducts(remaningItems);
//         // setShowModal(false);  // close the modal when item deleted
//       }

//        };
//     return (
//         <Container>
//             {/* Heading Section */}
//             <div className="d-flex flex-row pb-4">
//                 <div className="flex-grow-1"><h3 className={s.head3}>All Products</h3></div>
//                 <div className="pe-2"><button className={s.btnImportExport}><IconDownload stroke="1.2" size="1.2rem" /> <span className="ps-1 text-bold">Import</span> </button></div>
//                 <div className="pe-2"><button className={s.btnImportExport}><IconUpload stroke="1.2" size="1.2rem" /> <span className="ps-1 text-bold">Export</span> </button></div>
//                 <div className="pe-2"><button className={s.btnCreateNew}>Create New</button></div>
//             </div>
//             {/* Products Card Section*/}
//             <Card className={s.cardLayout}>
//                 {/* Searching and Sorting Section */}
//                 <div className="row pb-4">
//                     {/* Search Input */}
//                     <div className="col-md-6"><input className={s.searchInput} placeholder="Search..." /></div>
//                     {/* Sorting Section */}
//                     <div className="col-md-6">
//                         <div className={`${s.sortingInputArea} d-flex justify-content-end`}>
//                             <div className="pe-5">
//                                 <select name="by-category" className="form-select col-md-4" required data-msg="Please select category">
//                                     <option value="">Select By Category</option>
//                                     <option value="USD">Furniture</option>
//                                     <option value="RSA">Electornics</option>
//                                     <option value="USD">Jwelry</option>
//                                     <option value="RSA">Clothes</option>
//                                     <option value="RSA">Fashion</option>
//                                 </select>
//                             </div>
//                             <div>
//                                 <select name="sorting" className=" col-md-4 form-select" required data-msg="Please select status">
//                                     <option value="">Sorted By</option>
//                                     <option value="USD">Last Added</option>
//                                     <option value="USD">First Added</option>
//                                     <option value="RSA">Lowest Price</option>
//                                     <option value="RSA">Highest Price</option>
//                                 </select>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Listing Products */}
//                 <div className="row">
//                     {products.map((product, index) => (
//                         <div key={index} className={`${s.productCard} col`}>
//                             {/* image section */}
//                             <div>
//                                 {/* {console.log("http://localhost:8081/products/getProducts"+product.Image)} */}
//                                 <img className={s.imagePadding} src={"http://localhost:8081/"+ product.image} alt="product image" height='200' width='180' />
//                             </div>
//                             {/* price section */}
//                             <span>
//                                 <span className={s.titleText}>{product.name}</span>
//                                 <p className={s.priceText}>{product.price}</p>
//                             </span>
//                             {/* actions */}
//                             <div className="d-flex justify-content-around">
//                                 <button className={s.editBtn}><IconPencil stroke={1.2} size="1.2rem" /> Edit</button>
//                                 <button className={s.deleteBtn}  onClick={()=>deleteProduct(product._id)}><MdDeleteOutline stroke={1.2} size="1.2rem" /> Delete</button>
//                             </div>
//                         </div>   
//                     ))}
//                 </div>
//                 {/* Pagination */}
//                 <PaginationComponent />
//             </Card>
//         </Container>
//     );
// }

// export default ListProduct;

 

import React,{ useState, useEffect } from "react";
import { Container, Card,Button } from "react-bootstrap";
import { MdDeleteOutline } from 'react-icons/md'
import { IconUpload, IconDownload, IconPencil } from '@tabler/icons'
import PaginationComponent from "../../common/Pagination/pagination";
import s from './index.module.css'
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
// import { Card, Button } from "react-bootstrap";
// import EditProduct from "../ProductForm/EditProduct";

const ListProduct = () => {
    const [products, setProducts] = useState([]);  
const [showModal, setShowModal] = useState(false);

    
    useEffect(() => {
        const apiHandler = async () => {
             const data = await axios.get('http://localhost:8081/products/getProducts')
             console.log("get products api call ==>", data)
             setProducts(data.data)
        }
        apiHandler();
      },[])

      const deleteProduct = async(id) => {   // this id i recive from where i am calling this function onClick.
        console.log("this is handle delate function")
         console.log("products array", id)

        // let productId = id;
    const apiData = await axios.delete(
      `http://localhost:8081/products/${id}`
    );
    console.log("delet call", apiData);

    if (apiData.data.success) {
        let productsArray = products;
        let remaningItems = productsArray.filter((item) => item._id !== id);
        console.log("remaningItems", remaningItems);
        setProducts(remaningItems);
        setShowModal(false)
        // setShowModal(false);  // close the modal when item deleted
      }

       };
    return (
        <Container>
            {/* Heading Section */}
            <div className="d-flex flex-row pb-4">
                <div className="flex-grow-1"><h3 className={s.head3}>All Products</h3></div>
                <div className="pe-2"><button className={s.btnImportExport}><IconDownload stroke="1.2" size="1.2rem" /> <span className="ps-1 text-bold">Import</span> </button></div>
                <div className="pe-2"><button className={s.btnImportExport}><IconUpload stroke="1.2" size="1.2rem" /> <span className="ps-1 text-bold">Export</span> </button></div>
                <div className="pe-2"><button className={s.btnCreateNew}>Create New</button></div>
            </div>
            {/* Products Card Section*/}
            <Card className={s.cardLayout}>
                {/* Searching and Sorting Section */}
                <div className="row pb-4">
                    {/* Search Input */}
                    <div className="col-md-6"><input className={s.searchInput} placeholder="Search..." /></div>
                    {/* Sorting Section */}
                    <div className="col-md-6">
                        <div className={`${s.sortingInputArea} d-flex justify-content-end`}>
                            <div className="pe-5">
                                <select name="by-category" className="form-select col-md-4" required data-msg="Please select category">
                                    <option value="">Select By Category</option>
                                    <option value="USD">Furniture</option>
                                    <option value="RSA">Electornics</option>
                                    <option value="USD">Jwelry</option>
                                    <option value="RSA">Clothes</option>
                                    <option value="RSA">Fashion</option>
                                </select>
                            </div>
                            <div>
                                <select name="sorting" className=" col-md-4 form-select" required data-msg="Please select status">
                                    <option value="">Sorted By</option>
                                    <option value="USD">Last Added</option>
                                    <option value="USD">First Added</option>
                                    <option value="RSA">Lowest Price</option>
                                    <option value="RSA">Highest Price</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Listing Products */}
                <div className="row">
                    {products.map((product, index) => (
                        <div key={index} className={`${s.productCard} col`}>
                            {/* image section */}
                            <div>
                                {/* {console.log("http://localhost:8081/products/getProducts"+product.Image)} */}
                                <img className={s.imagePadding} src={"http://localhost:8081/"+ product.image} alt="product image" height='200' width='180' />
                            </div>
                            {/* price section */}
                            <span>
                                <span className={s.titleText}>{product.name}</span>
                                <p className={s.priceText}>{product.price}</p>
                            </span>
                            {/* actions */}



                            <div className="d-flex justify-content-around">
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
          {/* <p>{product?.name}</p>    */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="danger" size="samll" onClick={()=>deleteProduct(product._id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

                            <Link to={`/edit-product/${product._id}`}>
      <button className={s.editBtn}  ><IconPencil stroke={1.2} size="1.2rem" /> 

                                Edit </button></Link>
                                <button className={s.deleteBtn}  onClick={() => setShowModal(true)}><MdDeleteOutline stroke={1.2} size="1.2rem" /> Delete</button>
                            </div>
                        </div>   
                    ))}
                </div>
                {/* <EditProduct products={products} setProducts={setProducts} /> */}
                {/* Pagination */}
                <PaginationComponent  />
            </Card>
        </Container>
    );
}

export default ListProduct;

 
 