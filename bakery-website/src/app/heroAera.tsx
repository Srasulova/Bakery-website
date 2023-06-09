"use client";

import { useState } from "react";
import "./heroArea.css";
import OpenOrderFormModal from "./orderForm";

export default function HeroAera() {
  const [showOrderFormModal, setShowOrderFormModal] = useState<boolean>(false);

  const handleOrderNowOnClick = () => {
    setShowOrderFormModal(true);
  };

  return (
    <>
      <div className="hero-parent" id="hero-parent-id">
        <div className="hero-area">
          <div className="hero-components">
            <div className="hero-text">
              <h1 className="hero-message-text text-center">
                <span className="color-change">Dominican</span>
                <span className="color-change"> cake</span>
                <span className="color-change"> that</span>
                <span className="color-change"> melts</span>
                <span className="color-change"> in</span>
                <span className="color-change"> your</span>
                <span className="color-change"> mouth</span>
              </h1>
            </div>
            <div className="order-btn">
              <button
                type="button"
                className="btn btn-outline-success btn-lg"
                onClick={handleOrderNowOnClick}
              >
                Order now
              </button>
            </div>
          </div>
        </div>
      </div>

      <OpenOrderFormModal
        showOrderFormModal={showOrderFormModal}
        setShowOrderFormModal={setShowOrderFormModal}
      />
    </>
  );
}
