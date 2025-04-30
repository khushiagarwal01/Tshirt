import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Check if the selected file is an image
    if (file && file.type.startsWith("image")) {
      setSelectedImage(file);
    } else {
      alert("Please select a valid image file.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // Check if required fields are filled
    if (!product.name || !product.price || !product.description || !selectedImage) {
      alert("Please fill in all fields and select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("image", selectedImage);

    try {
      const response = await axios.post("http://localhost:5000/api/products/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Product Added Successfully!");
      
      // Clear the form after successful submission
      setProduct({
        name: "",
        price: "",
        image: "",
        description: "",
      });
      setSelectedImage(null);
    } catch (err) {
      alert("Error adding product: " + err.message);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit}> {/* Using form submit here */}
        <input
          placeholder="Name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          className="mb-4 w-full p-2 border"
        />
        <input
          placeholder="Price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          className="mb-4 w-full p-2 border"
        />
        <input
          type="file"
          onChange={handleFileChange}
          className="mb-4 w-full p-2 border"
        />
        <textarea
          placeholder="Description"
          value={product.description}
          onChange={(e) => setProduct({ ...product, description: e.target.value })}
          className="mb-4 w-full p-2 border"
        />
        <button
          type="submit"  // Using form's submit event
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
