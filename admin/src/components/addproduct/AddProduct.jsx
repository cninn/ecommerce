import "./Addproduct.css";
import uploadIcon from "../../assets/upload_area.svg";
import { useState } from "react";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    product: "",
    category: "",
    old_price: "",
    new_price: "",
  });

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("product", image);
      formData.append("name", productDetails.name);
      formData.append("category", productDetails.category);
      formData.append("old_price", productDetails.old_price);
      formData.append("new_price", productDetails.new_price);

      const uploadResponse = await fetch("http://localhost:8800/api/upload", {
        method: "POST",
        body: formData,
      });

      const uploadData = await uploadResponse.json();
      productDetails.product = uploadData.image_url;

      const productResponse = await fetch(
        "http://localhost:8800/api/product/addproduct",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(productDetails),
        }
      );

      const productData = await productResponse.json();
      console.log("Product response:", productData);
      if (productData) {
      

        toast.success("Ürün eklendi! :)", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Zoom,
        });
        setTimeout(() => {
          window.location.assign("http://localhost:5173/api/product");
        },2000)
 
      }
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  };

 
  return (
  
    <div className="addproduct">
     
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={{ Zoom }}
      />
      <h2>Add Product</h2>
      <form action="">
        <input
          onChange={changeHandler}
          name="name"
          value={productDetails.name}
          type="text"
          placeholder="Product Name"
        />
        <input
          onChange={changeHandler}
          name="old_price"
          value={productDetails.old_price}
          type="number"
          placeholder="Product Old Price"
        />
        <input
          onChange={changeHandler}
          name="new_price"
          value={productDetails.new_price}
          type="number"
          placeholder="Product New Price"
        />

        <label htmlFor="category">Select Category</label>
        <select
          onChange={changeHandler}
          value={productDetails.category}
          name="category"
          id="category"
        >
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
        <label htmlFor="file">
          <img
            className="uploadIcon"
            src={image ? URL.createObjectURL(image) : uploadIcon}
            alt="uploadIcon"
          />
        </label>
        <input
          value={productDetails.product}
          name="product"
          onChange={imageHandler}
          style={{ display: "none" }}
          type="file"
          placeholder="Product Image"
          id="file"
        />
        <button onClick={submitHandler}>Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
