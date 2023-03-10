import React, { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { MdDeleteOutline } from "react-icons/md";
import { IconUpload, IconDownload, IconPencil } from "@tabler/icons";
// import PaginationComponent from "../../common/Pagination/pagination";
import PaginationComponent from "../../common/Pagination/pagination";
import s from "./index.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Loader from "../../Loader";
import { listProducts , deleteProduct} from "../../../redux/actions/action";
// 
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// 

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // sates for backend pagination
  const [pageNumber, setPageNumber] = useState(1); // current page number  (sent to back-end via api parametes),exports.getAllProducts
  const [pageLimit] = useState(10);  // limit the page records (sent to back-end via api parametes), exports.getAllProducts 
  const [pageSize, setPageSize] = useState(); // total records in mongodb
 // state for loader
 const [loading , setLoading] = useState(true);
 const dispatch = useDispatch();
 const params = useParams();


 const productsData = useSelector((state) => state?.ProductsReducer?.productsArray);
 const productsdelete = useSelector((state) => state?.ProductsReducer?.deleteProduct);
 console.log("delete product by Id",productsdelete)


//  console.log("pppppppppppppppp",productsData)


 useEffect(() => {
  if(productsData?.data?.data?.length > 0){
    setProducts(productsData?.data?.data);
    setPageSize(productsData?.data?.pagination?.total);
    setLoading(false)
  }else {
    console.log("length is 0");
  }
  //  setProducts(productsData)
 },[productsData])

 console.log("reducer productss arry in react component", products);
 

   // list all products
useEffect(()=>{
  dispatch(listProducts(pageNumber,pageLimit));
},[pageNumber])

  const paginate = (number) => {
    setLoading(true)
    setPageNumber(number);
  };

    //  delete product using redux
   const removeProduct = () => {
      console.log("productsData in deleteProduct function ==>", params.id);
       dispatch(deleteProduct(params.id));
       setShowModal(false);
      if (productsdelete?.success == true) {
        // console.log("i am trueeeeeeeeee")
            let productsArray = productsData?.data?.data;
            let productId = params.id;
            let remaningItems = productsArray.filter((product) => product._id !== productId);
            console.log("remaningItems in success ==================>", remaningItems);
            setProducts(remaningItems);
            setShowModal(false);
          }
   };

   

  // const deleteProduct = async (id) => {
  //   // this id i recive from where i am calling this function onClick.
  //   console.log("this is handle delate function");
  //   console.log("products array", id);

  //   // let productId = id;
  //   const apiData = await axios.delete(`http://localhost:8081/products/${id}`);
  //   console.log("delet call", apiData);

  //   if (apiData.data.success) {
  //     let productsArray = products;
  //     let remaningItems = productsArray.filter((item) => item._id !== id);
  //     console.log("remaningItems", remaningItems);
  //     setProducts(remaningItems);
  //     setShowModal(false);
  //     // setShowModal(false);  // close the modal when item deleted
  //   }
  // };
  return (
    <div > 
    <Container>
      {/* Heading Section */}
      <div className="d-flex flex-row pb-4">
        <div className="flex-grow-1">
          <h3 className={s.head3}>All Products</h3>
        </div>
        <div className="pe-2">
          <button className={s.btnImportExport}>
            <IconDownload stroke="1.2" size="1.2rem" />{" "}
            <span className="ps-1 text-bold">Import</span>{" "}
          </button>
        </div>
        <div className="pe-2">
          <button className={s.btnImportExport}>
            <IconUpload stroke="1.2" size="1.2rem" />{" "}
            <span className="ps-1 text-bold">Export</span>{" "}
          </button>
        </div>
        <div className="pe-2">
          <button className={s.btnCreateNew}>Create New</button>
        </div>
      </div>
      {/* Products Card Section*/}
      
      <Card className={s.cardLayout}>
        {/* Searching and Sorting Section */}
        <div className="row pb-4">
          {/* Search Input */}
          <div className="col-md-6">
            <input className={s.searchInput} placeholder="Search..." />
          </div>
          {/* Sorting Section */}
          <div className="col-md-6">
            <div className={`${s.sortingInputArea} d-flex justify-content-end`}>
              <div className="pe-5">
                <select
                  name="by-category"
                  className="form-select col-md-4"
                  required
                  data-msg="Please select category"
                >
                  <option value="">Select By Category</option>
                  <option value="USD">Furniture</option>
                  <option value="RSA">Electornics</option>
                  <option value="USD">Jwelry</option>
                  <option value="RSA">Clothes</option>
                  <option value="RSA">Fashion</option>
                </select>
              </div>
              <div>
                <select
                  name="sorting"
                  className=" col-md-4 form-select"
                  required
                  data-msg="Please select status"
                >
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
        {loading ? <Loader />:
        <div className="row">
          {products.map((product, index) => (
            <div key={index} className={`${s.productCard} col`}>
              {/* image section */}
              <div>
                <img
                  className={s.imagePadding}
                  src={"http://localhost:8081/" + product.image}
                  alt="product image"
                  height="200"
                  width="180"
                />
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
                    <Button
                      variant="secondary"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </Button>
                    <Button
                      variant="danger"
                      size="samll"
                      onClick={()=>removeProduct(productsData.data.data._id)}
                    >
                      Delete
                    </Button>
                  </Modal.Footer>
                </Modal>

                <Link to={`/edit-product/${product._id}`}>
                  <button className={s.editBtn}>
                    <IconPencil stroke={1.2} size="1.2rem" />
                    Edit{" "}
                  </button>
                </Link>
                {/* /:id */}
                <Link to={`/delete-product/${product._id}`}>
                <button
                  className={s.deleteBtn}
                  onClick={() => setShowModal(true)}
                >
                  <MdDeleteOutline stroke={1.2} size="1.2rem" /> Delete
                </button>
                </Link>
              </div>
            </div>
          ))}
           <PaginationComponent 
        pageSize={pageSize}
        pageNumber={pageNumber}
        pageLimit={pageLimit}
        paginate={paginate}
        />
        </div>
}
        {/* <EditProduct products={products} setProducts={setProducts} /> */}
        {/* Pagination */}
       
          
      </Card>

    </Container>
    
    </div>
  );
};

export default ListProduct;
