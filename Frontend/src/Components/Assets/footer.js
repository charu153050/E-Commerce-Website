import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-light bg-gradient">
        <p class="col-md-4 mb-0 text-muted">© 2022 Company, Inc</p>

        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item">
            <a class="nav-link px-2 text-muted">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-2 text-muted">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-2 text-muted">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-2 text-muted">FAQs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-2 text-muted">About</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
