import React from "react";
import { Footer } from "./Assets/footer";
import { Navbar } from "./Navbar";

export const ContactUs = () => {
  return (
    <div>
      <div className="">
        <Navbar></Navbar>
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src={require("./Assets/2.jpg")}
              class="d-block mx-lg-auto img-fluid"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">
              Thanku For Contacting Us
            </h1>
            <p class="lead">
              We give you great deals and services and always we are here to
              help you can contact us anytime you have issues with our services.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Contact
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                About
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
