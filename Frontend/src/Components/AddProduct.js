import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar } from "./Navbar";
import { useNavigate } from "react-router-dom";
import { Footer } from "./Assets/footer";

export const AddProduct = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    productName: "",
    category: "",
    creationDate: "",
    expirationDate: "",
    mrp: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };
  const addProduct = (e) => {
    e.preventDefault();
    setFormErrors(validate(user));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // const { productName, category, creationDate, expirationDate, mrp } = user;

      axios
        .post("http://localhost:9002/addProduct", user)
        .then((res) => alert("Sucessfully Registered"));
      navigate("/");

      // alert("Sucessfully Added");
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.productName) {
      errors.productName = "Add product is required !";
    }
    if (!values.category) {
      errors.category = "Category is required !";
    }
    if (!values.creationDate) {
      errors.creationDate = " Creation Date is required!";
    }
    if (!values.expirationDate) {
      errors.expirationDate = "Expiration Date is required!";
    }
    if (!values.mrp) {
      errors.mrp = "mrp is required!";
    }
    return errors;
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="container bg-light">
        <h1 className="text-center">Add Product</h1>

        <form>
          <div className="row">
            <div className="mb-3 ">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Product Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Enter Product Name"
                aria-describedby="passwordHelpBlock"
                name="productName"
                value={user.productName}
                onChange={handleChange}
              />
            </div>
            <p className="text-danger">{formErrors.productName}</p>
            <div className="mb-3 ">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Category:
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter Category"
                aria-describedby="passwordHelpBlock"
                name="category"
                value={user.category}
                onChange={handleChange}
              />
            </div>
            <p className="text-danger">{formErrors.category}</p>
            <div className="mb-3 ">
              <label htmlFor="formGroupExampleInput3" className="form-label">
                Creation Date:
              </label>
              <input
                type="date"
                className="form-control"
                id="formGroupExampleInput3"
                placeholder="Enter Creation Date"
                aria-describedby="passwordHelpBlock"
                name="creationDate"
                value={user.creationDate}
                onChange={handleChange}
              />
            </div>
            <p className="text-danger">{formErrors.creationDate}</p>
            <div className="mb-3 ">
              <label htmlFor="formGroupExampleInput4" className="form-label">
                Expire Date:
              </label>
              <input
                type="date"
                className="form-control"
                id="formGroupExampleInput4"
                placeholder="Enter Expiration Date"
                aria-describedby="passwordHelpBlock"
                name="expirationDate"
                value={user.expirationDate}
                onChange={handleChange}
              />
            </div>
            <p className="text-danger">{formErrors.expirationDate}</p>
            <div className="mb-3 ">
              <label htmlFor="formGroupExampleInput5" className="form-label">
                MRP:
              </label>
              <input
                type="number"
                className="form-control"
                id="formGroupExampleInput5"
                placeholder="Enter Market price"
                aria-describedby="passwordHelpBlock"
                name="mrp"
                value={user.mrp}
                onChange={handleChange}
              />
            </div>
            <p className="text-danger">{formErrors.mrp}</p>
            <div className="pb-4">
              <button
                type="submit"
                className="btn btn-primary  "
                onClick={addProduct}
              >
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};
