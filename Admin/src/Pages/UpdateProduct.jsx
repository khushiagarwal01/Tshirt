import { useEffect, useState } from "react";
import axios from "axios";

const UpdateProduct = () => {
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ name: "", price: "", description: "" });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5000/api/products");
    setProducts(res.data);
  };

  const handleEdit = (product) => {
    setEditId(product._id);
    setFormData({ name: product.name, price: product.price, description: product.description });
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/api/products/${editId}`, formData);
      if (res.data.success) {
        alert("Product updated!");

        setEditId(null);
        fetchProducts();
      } else {
        alert("Update failed.");
        console.log("no")
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };
  console.log("Updating product with ID:", editId);


  return (

    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Update Products</h2>

      {products.map((p) => (
        <div key={p._id} className="mb-4 border p-4 rounded shadow">
          <p><strong>Name:</strong> {p.name}</p>
          <p><strong>Price:</strong> ₹{p.price}</p>
          <p><strong>Description:</strong> {p.description}</p>
          <button
            className="bg-blue-500 text-white px-4 py-1 mt-2 rounded"
            onClick={() => handleEdit(p)}
          >
            Edit
          </button>
        </div>
      ))}

      {editId && (
        <div className="mt-6 p-4 border rounded shadow">
          <h3 className="text-xl mb-2 font-semibold">Edit Product</h3>
          <input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Name"
            className="w-full p-2 mb-2 border"
          />
          <input
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            placeholder="Price"
            className="w-full p-2 mb-2 border"
          />
          <input
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Description"
            className="w-full p-2 mb-2 border"
          />
          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default UpdateProduct;
