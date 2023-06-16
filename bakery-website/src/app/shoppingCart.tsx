import { useState } from "react";
import OpenOrderFormModal from "./orderForm";

export default function ShoppingCart() {
  return (
    <>
      <div
        className="modal fade"
        id="shoppingCartModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered text-success">
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
              <p className="firstName"></p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success mx-auto">
                Confirm your order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
