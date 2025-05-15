import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {/* Navigation Links */}
      <nav className="space-x-4 mb-4">
        <Link to="add" className="text-blue-500">Add Product</Link>
        <Link to="delete" className="text-red-500">Delete Product</Link>
        <Link to="update" className="text-red-500">Update Product</Link>
      </nav>

      {/* Nested Routes Render Here */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
