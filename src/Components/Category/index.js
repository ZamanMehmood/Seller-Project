 
// import { useEffect, useState } from 'react';
// import { Card, Container } from "react-bootstrap";
// import { IconChevronRight } from '@tabler/icons';
// import RenderCard from './renderCard';
// import s from './index.module.css'
// import axios from 'axios';

// const Category = () => {
//     console.log("props ==>")
//      const [data,setData] = useState([]);
  
//        useEffect(()=>{
//         const apiHandler = async() =>{
//                   const data = await axios.get("http://localhost:8081/categories");
//                    console.log(data)
//                    setData(data.data)
//                 };
//                  apiHandler();
//        },[])

//     return (
//         <Container className="pb-5">
//             <h3 className={s.head3}>Categories</h3>
//             <div className="row pt-5">
//                 <div className="col-md-4">
//                     <h5 className={s.head5}>Main Categories</h5>
//                     {/* <RenderCard list={categories} /> */}
//                     <RenderCard list={data} />

//                 </div>

//                 <div className="col-md-4">
//                     {/* Sub Category */}
//                     <h5 className={s.head5}>Sub Categories</h5>
//                     <Card className={s.categoryCard}>
//                         {/* <ul className="ul-styles">
//                             {categories && categories.length > 0 && categories.map((item, index) => (
//                                 <li className="list-styles d-flex justify-content-between">
//                                     <div>{item.name}</div>
//                                     <div><IconChevronRight className="show-icon" stroke={1.5} size="1.2rem" /></div>
//                                 </li>
//                             ))}
//                         </ul> */}
//                     </Card>
//                 </div>
//                 <div className="col-md-4">
//                     {/* Sub Category */}
//                     <h5 className={s.head5}>Sub-sub Categories</h5>
//                     <Card className={s.categoryCard}>
//                         {/* <ul className="ul-styles">
//                             {categories && categories.length > 0 && categories.map((item, index) => (
//                                 <li className="list-styles d-flex justify-content-between">
//                                     <div>{item.name}</div>
//                                     <div><IconChevronRight className="show-icon" stroke={1.5} size="1.2rem" /></div>
//                                 </li>
//                             ))}
//                         </ul> */}
//                     </Card>
//                 </div>
//             </div>
//         </Container>
//     );
// }

// export default Category;


 
import { useEffect, useState } from 'react';
import { Card, Container } from "react-bootstrap";
import { IconChevronRight } from '@tabler/icons';
import RenderCard from './renderCard';
import s from './index.module.css'
import axios from 'axios';

const Category = () => {
    console.log("props ==>")
     const [data,setData] = useState([]);   // all categories are in this array
  
       useEffect(()=>{
        const apiHandler = async() =>{
                  const data = await axios.get("http://localhost:8081/categories");
                   console.log(data)
                   setData(data.data)
                };
                 apiHandler();
       },[])

    return (
        <Container className="pb-5">
            <h3 className={s.head3}>Categories</h3>
            <div className="row pt-5">
                <div className="col-md-4">
                    <h5 className={s.head5}>Main Categories</h5>
                    <RenderCard list={data} data={data} setData={setData} />                 
                     {/* // send data array to RenderCard component and recieve their */}
                </div>

                <div className="col-md-4">
                    {/* Sub Category */}
                    <h5 className={s.head5}>Sub Categories</h5>
                    <Card className={s.categoryCard}>
                        {/* <ul className="ul-styles">
                            {categories && categories.length > 0 && categories.map((item, index) => (
                                <li className="list-styles d-flex justify-content-between">
                                    <div>{item.name}</div>
                                    <div><IconChevronRight className="show-icon" stroke={1.5} size="1.2rem" /></div>
                                </li>
                            ))}
                        </ul> */}
                    </Card>
                </div>
                <div className="col-md-4">
                    {/* Sub Category */}
                    <h5 className={s.head5}>Sub-sub Categories</h5>
                    <Card className={s.categoryCard}>
                        {/* <ul className="ul-styles">
                            {categories && categories.length > 0 && categories.map((item, index) => (
                                <li className="list-styles d-flex justify-content-between">
                                    <div>{item.name}</div>
                                    <div><IconChevronRight className="show-icon" stroke={1.5} size="1.2rem" /></div>
                                </li>
                            ))}
                        </ul> */}
                    </Card>
                </div>
            </div>
        </Container>
    );
}

export default Category;