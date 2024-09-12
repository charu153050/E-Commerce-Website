import React from "react";
import { Footer } from "./Assets/footer";
import { Navbar } from "./Navbar";

export const AboutUs = () => {
  return (
    <div>
      <div className="">
        <Navbar></Navbar>
        <div className="row featurette mt-4">
          <div className="col-md-7">
            <h2 className="featurette-heading ">About Cosmectics World.</h2>
            <p className="lead">
              Cosmectic World is an Indian e-commerce company, founded by
              Falguni Nayar in 2012 and headquartered in Mumbai. It sells
              beauty, wellness and fashion products across websites, mobile apps
              and 100+ offline stores.
            </p>
          </div>
          <div className="col-md-5">
            <img src={require("./Assets/about image.jpg")}></img>
          </div>
        </div>
        <p>About us</p>
      </div>
      <Footer></Footer>
    </div>
  );
};
