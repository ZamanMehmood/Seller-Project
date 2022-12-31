// import { useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";

 
const Loader = () => {
  // let [isloading, setIsLoading] = useState(true); 
   

  return (
    <div className="sweet-loading">
       
       <FadeLoader
        color={"#F37A24"}
        // loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> 
     
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