import "./navBar.css";
import logo from "./assets/new logo.png";
import Image from "next/image";
import ShoppingCart from "./shoppingCart";

export default function NavBar() {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <a className="navbar-brand ms-5" href="#">
            <Image src={logo} alt="Logo" width="80" height="80" />
            <span className="brand-name">Milo&apos;s homemade</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item mx-3">
                <a
                  className="nav-link active text-success fw-bolder hover-change-color"
                  aria-current="page"
                  href="#hero-parent-id"
                >
                  Home
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link text-success fw-bolder hover-change-color"
                  href="#what-we-make-id"
                >
                  What we make
                </a>
              </li>

              <li className="nav-item mx-3">
                <a
                  className="nav-link text-success fw-bolder hover-change-color"
                  href="#how-it-works-id"
                >
                  How it works
                </a>
              </li>

              <li className="nav-item mx-3">
                <a
                  className="nav-link text-success fw-bolder hover-change-color"
                  href="#gallery-title"
                >
                  Gallery
                </a>
              </li>
            </ul>
            <form className="d-flex " role="search">
              <input
                className="form-control form-control-sm me-2 search-input"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-warning btn-sm me-5"
                type="submit"
              >
                Search
              </button>
            </form>
            <button
              type="button"
              className=" shopping-cart d-flex me-5"
              data-bs-toggle="modal"
              data-bs-target="#shoppingCartModal"
            >
              <a
                className="cart my-auto mx-2 text-success fw-bolder fs-5"
                href="#"
              >
                Cart
              </a>
              {/* <div className="shoppingCartItems" style={{ color: "green" }}>
                1
              </div> */}
              <i
                className="bi bi-cart "
                style={{ fontSize: "2.5rem", color: "green" }}
              ></i>
            </button>
          </div>
        </div>
      </nav>

      <ShoppingCart />
    </>
  );
}
