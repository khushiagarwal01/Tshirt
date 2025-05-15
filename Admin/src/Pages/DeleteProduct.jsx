import { useState } from "react";
import axios from "axios";

const DeleteProduct = () => {
  const [id, setId] = useState(""); // Changed from name to id

  const handleDelete = async (e) => {
    e.preventDefault();

    if (!id) {
      alert("Please enter a product ID");
      return;
    }

    try {
      const res = await axios.delete(`http://localhost:5000/api/products/deleteById/${id}`);
      if (res.data.success) {
        alert("Product deleted successfully!");
        setId("");
      } else {
        alert("Product not found!");
      }
    } catch (err) {
      alert("Error deleting product: " + err.message);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Delete Product by ID</h2>
      <form onSubmit={handleDelete}>
        <input
          placeholder="Enter Product ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="mb-4 w-full p-2 border"
        />
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </form>
    </div>
  );
};

export default DeleteProduct;
