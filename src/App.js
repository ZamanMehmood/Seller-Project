// import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './Components/Dashboard'
import './App.css';
import Layout from "./Layout";
import Routes from './Routes/index';

// const Notfound = () => <h1 className="text-center">Not found</h1>

function App() {
  return (
    <div className='App'>
      {/* <Layout> */}
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      {/* <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/add-product" element={<Dashboard />} />
          <Route exact path="/products" element={<Dashboard />} />
          <Route exact path="/ategories" element={<Dashboard />} />

          <Route path="*" element={<Notfound />} />
        </Routes> */}
      {/* </Layout> */}
    </div>
  );
}

export default App;
