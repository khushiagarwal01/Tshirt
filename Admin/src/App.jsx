import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import AddProduct from "./Pages/AddProducts";
import DeleteProduct from "./Pages/DeleteProduct";
import UpdateProduct from "./Pages/UpdateProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        
        {/* Dashboard route with nested routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="add" element={<AddProduct />} />
          <Route path="delete" element={<DeleteProduct />} />
          <Route path="update" element={<UpdateProduct/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
