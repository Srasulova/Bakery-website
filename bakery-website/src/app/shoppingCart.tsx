import { useState } from "react";
import OpenOrderFormModal from "./orderForm";

export default function ShoppingCart() {
  const [firstName, setFirstname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");

  return (
    <>
      <div
        className="modal fade"
        id="shoppingCartModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-flex">
              <h5
                className="modal-title fs-5 text-center fw-bold text-success col-11"
                id="exampleModalLabel"
              >
                Order details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p className="firstName text-center">
                Thank you for your order, {firstName}!
              </p>
              <p className="orderDate text-center">
                Your order will be ready on {date}.
              </p>
              <p className="phoneNumber text-center">
                We will contact you at +1-{phoneNumber} to discuss the order
                details.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success mx-auto"
                data-bs-dismiss="modal"
              >
                Confirm your order
              </button>
            </div>
          </div>
        </div>
      </div>
      <OpenOrderFormModal
        setFirstName={setFirstname}
        setPhoneNumber={setPhoneNumber}
        setDate={setDate}
      />
    </>
  );
}
