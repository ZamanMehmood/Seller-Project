import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import Select from "react-select";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import TagsInput from "../../common/TagInput/tagInput";
import videoLogo from "../../../assets/images/video-logo.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import s from "./index.module.css";

//useEffect() ->axios.get-> [categoreis]
//useEffect() ->axios.get-> [currencies]

//go to backend create product api -> add new fields in api
// value -> id && label -> Name

const ProductForm = ({ paramId }) => {
  const [category, setCategory] = useState({});
  // const [previewFiles, setPreiviewFiles] = useState([]);
  const [mediaFiles, setMediaFiles] = useState([]);
  const [isHover, setIsHover] = useState({});
  //categories state && currency state  for api backend data
  const [categaries, setCategaries] = useState(null);
  const [currencye, setCurrency] = useState([]);
  //   states for form values
  const initialValues = {
    name : "",
    description: "",
    brandName: "",
    price: "",
    currency: "",
    sku: "",
    quantity: "",
    weight: "",
    image: ""
  };
      const [formValues, setFormValues]  = useState(initialValues);
      const secondInitialValues = {
        categories: "",
        subCategories: "",
        subSubCategories: "",
      };
      const [formCategoryValues,setFormCategoryValues] = useState(secondInitialValues);

  useEffect(() => {
    const apiHandler = async () => {
      const data = await axios.get("http://localhost:8081/categories");
      //   console.log(data);

      const newCategories = data.data.map((category) => {
        return {
          label: category.Name,
          value: category._id,
        };
      });
      setCategaries(newCategories);
    };
    apiHandler();
  }, []);

  // useEffect for currency
  useEffect(() => {
    const newApiHandler = async () => {
      const data = await axios.get(
        "http://localhost:8081/currencies/getCurrencies"
      );
      console.log("currency data ===>", data);
      setCurrency(data.data);
    };
    newApiHandler();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description,brandName,price,currency,sku,quantity,weight,image} = formValues;
    const {categories,subCategories,subSubCategories} = formCategoryValues;
    

    let payload = {
      name,
      description,
      brandName,
      categories,
      subCategories,
      subSubCategories,
      price,
      currency,
      sku,
      quantity,
      weight,
      image,
    }; 

    let formData = new FormData();
    formData.append('name',name);   
    formData.append('description',description);
    formData.append('brandName',brandName);
    formData.append('categories',categories);
    formData.append('subCategories',subCategories);
    formData.append('subSubCategories',subSubCategories);
    formData.append('price',price);
    formData.append('currency',currency);
    formData.append('sku',sku);
    formData.append('quantity',quantity);
    formData.append('weight',weight);
    formData.append('Image',image)

    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }

    const apiCall = await axios.post(
      "http://localhost:8081/products",formData, config,
    );
    console.log("apiCall", apiCall);
  }

   const handleChange = (e) => {
               const {name,value} = e.target;
               console.log("form values =========>",name,value)
       setFormValues({...formValues, [name]: value})  
   };

    const options = [
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ];
  const handleChangeCategory = (e) => {
    console.log("formCategoryValue",e);
        setFormCategoryValues(e.value)
    // if (e && e.value > 0) {
    //   setCategory({ category: e.value });
    // } else {
    //   setCategory({ category: "" });
    // }
  };

  const maxSelectFile = (files) => {
    let fileLimit = files.length; // create file object
    if (fileLimit > 5) {
      const msg = "Only 5 files can be uploaded at a time";
      fileLimit = null || ""; // discard selected file
      // alert(msg);
      toast.error(msg, {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: false,
        autoClose: 3000,
      });
      console.log(msg);
      return false;
    }
    return true;
  };
  const checkFileSize = (files) => {
    let fileLimit = files.length;
    let selectedSize = 5242880; // 2mb = 2097152 1mb = 1048576;  5mb = 5242880
    let err = "";
    for (const file of files) {
      if (file.size > selectedSize) {
        err += "file too large, please pick a smaller file upto 5mb.";
      }
    }
    if (err !== "") {
      fileLimit = null;
      // alert(err);
      toast.error(err, {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: false,
        autoClose: 3000,
      });
      console.log(err);
      return false;
    }
    return true;
  };

  const handleFileChange = (e) => {
    // console.log('eeeeeeeee', e.target.files)
    const files = e.target.files;
    const filesArr = [...files];
    if (maxSelectFile(files) && checkFileSize(files)) {
      setMediaFiles(filesArr);
    }
  };

  const handleMouseEnter = (index) => {
    setIsHover({ ...isHover, [index]: true });
  };

  const handleMouseLeave = (index) => {
    setIsHover({ ...isHover, [index]: false });
  };

  const removeFile = (index) => {
    const mf = [...mediaFiles];
    mf.splice(index, 1);
    setMediaFiles(mf);
  };

  // console.log("--------media Fies", mediaFiles, "paramId", paramId);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h3 className={s.head3}>{paramId ? "Edit Product" : "Add Product"}</h3>
        <div className="m-4">
          {/* General Info */}
          <Row>
            <Col className="col-md-3">
              <h5>1.General Info</h5>
            </Col>
            <Col className="col-md-9">
              {/* Name */}
              <div className="mb-4">
                <label className="h6 form-label">Product Name</label>
                <input
                  className={`form-control ${s.formControl}`}
                  name="name"
                  type='text'
                  placeholder="Write Name"
                  onChange={handleChange}
                  value={formValues.name}
                />
              </div>
              {/* Description */}
              <div className="mb-4">
                <label className="h6 form-label">Full Description</label>
                <textarea
                type='text'
                  rows="8"
                  className={`form-control ${s.formControl}`}
                  name="description"
                  placeholder="Type Here"
                  onChange={handleChange}
                  value={formValues.description}
                />
              </div>
              {/* Brand Name */}
              <div className="mb-3">
                <label className="h6 form-label">Brand Name</label>
                <div className="col-md-5">
                  <input
                  type='text'
                    className={`form-control ${s.formControl}`}
                    name="brandName"
                    placeholder="Write Brand Name"
                    onChange={handleChange}
                    value={formValues.brandName}
                  />
                </div>
              </div>
            </Col>
          </Row>
          <hr className={s.hrLine} />
          {/* Category Section */}
          <Row>
            <Col className="col-md-3">
              <h5>2.Category</h5>
            </Col>
            <Col className="col-md-9">
              {/* Category */}
              <div className="mb-4">
                <label className="h6 form-label">Category</label>
                <Select
                  // isClearable
                  // closeMenuOnSelect={false}
                  type='text'
                  name="categories"
                  options={categaries}
                  className="col-md-7 basic-multi-select"
                  // classNamePrefix="select"
                  // onChange={(e) => handleChangeCategory(e)}   // fazi 
                //  onChange={handleChange}
                //  value={formValues.categories}
                value={formCategoryValues.categories}
                onChange={handleChangeCategory}
                />
              </div>
              {/* Sub Category */}
              <div className="mb-4">
                <label className="h6 form-label">Sub Category</label>
                <Select
                  isClearable
                  closeMenuOnSelect={false}
                  // type="select"
                  name="subCategories"
                  options={options}
                  className="col-md-7 basic-multi-select"
                  classNamePrefix="select"
                  // onChange={(e) => handleChangeCategory(e)}   // fazi
                  // onChange={handleChangeCategory}
                  value={formCategoryValues.subCategories}
                  onChange={handleChangeCategory}
                />
              </div>
              {/* Sub Sub Category */}
              <div className="mb-3">
                <label className="h6 form-label">Sub-Sub Category</label>
                <Select
                  //defaultValue={ }
                  //isMulti
                  isClearable
                  closeMenuOnSelect={false}
                  name="subSubCategories"
                  type="text"
                  options={options}
                  className="col-md-7 basic-multi-select"
                  classNamePrefix="select"
                  // onChange={(e) => handleChangeCategory(e)}  // fazi
                  value={formCategoryValues.subSubCategories}
                  onChange={handleChangeCategory}
                // onChange={handleChange}
                // value={formValues.subSubCategories}
                />
              </div>
            </Col>
          </Row>
          {/* Pricing */}
          <hr className={s.hrLine} />
          <Row>
            <Col className="col-md-3">
              <h5>3.Pricing</h5>
            </Col>
            <Col className="col-md-9">
              <div className="mb-2">
                <Row>
                  <div className="col-md-5">
                    <label className="h6 form-label">Price</label>
                    <input
                      type="number"
                      min="0"
                      className={`form-control ${s.formControl}`}
                      name="price"
                      placeholder="Type here"
                      onChange={handleChange}
                      value={formValues.price}
                    />
                  </div>
                  <div className="col-md-5">
                    <label className="h6 form-label">Currency</label>
                    <select
                      type="text"
                      name="currency"
                      className={`form-select ${s.formSelect}`}
                      required
                      data-msg="Please select status"
                      onChange={handleChange}
                      value={formValues.currency}
                    >
                      {currencye.map((ele,i) => (
                        <option key={i} value="USD">{ele.Name}</option>
                      ))}
                    </select>
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
          <hr className={s.hrLine} />
          {/* Inventory */}
          <Row>
            <Col className="col-md-3">
              <h5>4.Inventory</h5>
            </Col>
            <Col className="col-md-9">
              <div className="mb-2">
                <Row>
                  <div className="col-md-5">
                    <label className="h6 form-label">
                      SKU <small>(Stock Keeping Unit)</small>
                    </label>
                    <input
                      type="number"
                      min="0"
                      className={`form-control ${s.formControl}`}
                      name="sku"
                      placeholder="658345"
                      onChange={handleChange}
                      value={formValues.sku}
                    />
                  </div>
                  <div className="col-md-5">
                    <label className="h6 form-label">Qunatity</label>
                    <input
                      type="number"
                      min="0"
                      className={`form-control ${s.formControl}`}
                      name="quantity"
                      placeholder="Enter Qunatity"
                      onChange={handleChange}
                      value={formValues.quantity}
                    />
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
          <hr className={s.hrLine} />
          {/* Shipping */}
          <Row>
            <Col className="col-md-3">
              <h5>5.Shipping</h5>
            </Col>
            <Col className="col-md-9">
              <div className="mb-2">
                <Row>
                  <div className="col-md-5">
                    <label className="h6 form-label">Weight</label>
                    <input
                      type="number"
                      min="0"
                      className={`form-control ${s.formControl}`}
                      name="weight"
                      placeholder="KG"
                      onChange={handleChange}
                      value={formValues.weight}
                    />
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
          <hr className={s.hrLine} />
          {/* Media */}
          <Row>
            <Col className="col-md-3">
              <h5>6.Media</h5>
            </Col>
            <Col className="col-md-9">
              <div className="mb-2">
                <div className="d-flex flex-row justify-content-between">
                  {/* Preview Images */}
                  <div>
                    {mediaFiles &&
                      mediaFiles.length > 0 &&
                      mediaFiles.map((file, index) => (
                        <div
                          key={index}
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={() => handleMouseLeave(index)}
                          className={s.selectedFile}
                        >
                          {isHover[index] ? (
                            <MdDelete
                              className={s.removeItem}
                              onClick={() => removeFile(index)}
                              stroke={1.5}
                              size="1.5rem"
                            />
                          ) : (
                            ""
                          )}
                          <img
                            src={
                              file.type === "video/mp4"
                                ? videoLogo
                                : URL.createObjectURL(file)
                            }
                            className={s.imageSize}
                            alt="selected file"
                          />
                        </div>
                      ))}
                  </div>
                  {/* Upload Input */}
                  <div>
                    <label htmlFor="file-upload" className={s.customFileUpload}>
                      <MdCloudUpload
                        className="text-secondary"
                        stroke={1.5}
                        size="3.5rem"
                      />
                      <div className="text-secondary">
                        <b>Upload</b>
                      </div>
                    </label>
                    <input
                      id="file-upload"
                      accept="image/*, video/*"
                      name="image"
                      type="file"
                      onChange={(e) => handleFileChange(e)}
                      multiple
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <hr className={s.hrLine} />
          {/* Keyword Search */}
          <Row>
            <Col className="col-md-12">
              <h5>7.Keyword Search</h5>
              <TagsInput tagsArr={["Clothes", "Men", "Fashion"]} />
            </Col>
          </Row>
          <hr className={s.hrLine} />
          {/* Submit Button */}
          <div className="d-flex flex-row-reverse">
            <button className="btn btn-primary btn-lg" type="submit">
              {paramId ? "Update" : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default ProductForm;
