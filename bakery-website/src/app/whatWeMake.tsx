import Image from "next/image";
import cupcake from "./assets/cupcake.jpg";
import customCake from "./assets/custom-cake.jpg";
import flan from "./assets/flan.jpg";
import picaderas from "./assets/picaderas.jpg";

export default function WhatWeMake() {
  return (
    <>
      <div className="what-we-make ">
        <h2
          className="what-we-make-title text-center fs-1 fw-bolder my-5 text-success"
          id="what-we-make-id"
        >
          What we make
        </h2>
        <div className="img-container-div container">
          <div className="row row-cols-4">
            <div className="img-div col">
              <Image
                src={customCake}
                className="img-fluid img-thumbnail rounded-4 img-what-we-make"
                alt="..."
              />
              <p className="text-center p-3 fs-4 fw-semibold text-success">
                Custom cakes
              </p>
            </div>

            <div className="img-div col">
              <Image
                src={cupcake}
                className="img-fluid img-thumbnail rounded-4 img-what-we-make"
                alt="..."
              />
              <p className="text-center p-3 fs-4 fw-semibold text-success">
                Cupcakes
              </p>
            </div>

            <div className="img-div col">
              <Image
                src={flan}
                className="img-fluid img-thumbnail rounded-4 img-what-we-make"
                alt="..."
                style={{ height: "415px" }}
              />
              <p className="text-center p-3 fs-4 fw-semibold text-success">
                Flans
              </p>
            </div>

            <div className="img-div col">
              <Image
                src={picaderas}
                className="img-fluid img-thumbnail rounded-4 img-what-we-make"
                alt="..."
                style={{ height: "415px" }}
              />
              <p className="text-center p-3 fs-4 fw-semibold text-success">
                Picaderas
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
