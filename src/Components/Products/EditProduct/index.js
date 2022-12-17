import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import ProductForm from "../ProductForm";

const EditProduct = () => {
    const { id } = useParams();
    const location = useLocation();
    const pathname = location.pathname;
    // console.log('prams----->', id, 'pathname------', pathname)
    return (
        <ProductForm paramId={id} />
    )
}

export default EditProduct;