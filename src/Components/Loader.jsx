// import { useState } from "react";
// import FadeLoader from "react-spinners/FadeLoader";
import Loading from 'react-fullscreen-loading';


 
const Loader = () => {
  // let [isloading, setIsLoading] = useState(true); 
   

  return (
    <div className="sweet-loading">
       
       <Loading loading background="#2ecc71" loaderColor="#3498db" />

    </div>
  );
}

export default Loader;

// import React from 'react'
// import { LoaderComponent } from 'react-fullscreen-loader'
// import 'react-fullscreen-loader/src/loader.css'

 
// const Loader = () => {
//     return( 
//     <LoaderComponent loading backgroundColor="red" loadingColor="yellow"/>
//     )
// }

// export default Loader;