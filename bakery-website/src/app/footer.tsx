import Image from "next/image";
import Logo from "./assets/new logo.png";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer d-flex align-items-center ">
        <div className="footer-container container d-flex justify-content-between align-items-center">
          <div className="logo">
            <a className="navbar-brand" href="#">
              <Image src={Logo} alt="Logo" width="80" height="80" />
              <span className="brand-name">Milo&apos;s homemade</span>
            </a>
          </div>
          <div className="social-media-icons d-flex align-items-center">
            <p
              className="social-icons-follow fw-medium fs-5 m-2"
              style={{ color: "#f1557a" }}
            >
              Follow us
            </p>
            <i
              className="bi bi-instagram m-2"
              style={{ fontSize: "2rem", color: "#f1557a" }}
            ></i>
            <i
              className="bi bi-whatsapp m-2"
              style={{ fontSize: "2rem", color: "#f1557a" }}
            ></i>
          </div>
          <div className="contact-phone d-flex align-items-center">
            <p
              className="call-us fw-medium fs-5 m-2"
              style={{ color: "#f1557a" }}
            >
              Call us
            </p>
            <p
              className="phone-number fw-medium fs-5 m-2 fst-italic"
              style={{ color: "#f1557a" }}
            >
              +1-(646)-388-1276
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
