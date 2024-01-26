import { useEffect, useState } from "react";
import "./List.css";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const List = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:8800/api/product");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  console.log(products);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8800/api/product/${id}`, {
        method: "POST",
      });
      toast.success("Ürün Silindi! :)", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });
      setProducts(products.filter((item) => item._id !== id));
    } catch (err) {
      toast.error("Ürün Silinemedi! :(", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });
      console.log(err);
    }
  };

  return (
    <div className="list">
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
        theme="light"
        transition={{ Zoom }}
      />
      <h2>All Products</h2>
      <div className="products-list">
        {products && products.length > 0 ? (
          products.map((item) => (
            <div
              key={item._id}
              className="item"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="img-container">
                <img src={item.product} alt="Product" />
              </div>
              <span>Product ID: {item._id}</span>
              <p className="item-name">Product Name: {item.name}</p>
              <div className="item-prices">
                <div className="item-prices-new">
                  <p>New Price: {item.new_price} $</p>
                </div>
                <div className="item-prices-old">
                  <p>Old Price: {item.old_price} $</p>
                </div>
              </div>
              <button>Update</button>
              <button onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
          ))
        ) : (
          <div>No Products Found</div>
        )}
      </div>
    </div>
  );
};

export default List;
