import Image from "next/image";
import { useState } from "react";
import "./galleryCollapsed.css";
import galleryPictures from "./galleryImages";

export default function GalleryCollapsed() {
  const rightSideGridImages = galleryPictures.slice(0, 9);

  return (
    <>
      <div className="galleryCollapsed">
        <div className="gallery-collapsed-title" id="gallery-title">
          <h2 className="gallery-title text-center fs-1 fw-bolder my-5 text-success">
            Gallery
          </h2>
        </div>

        <div className="galleryContainer container-fluid container">
          <div className="row justify-content-center">
            <div className="col-md-6 gallery-img">
              <Image
                className="img-fluid rounded"
                src={galleryPictures[10].src}
                alt={galleryPictures[10].alt}
              />
            </div>
            <div className="col-md-6 gallery-img container">
              <div className="row row-cols-3 g-2">
                {rightSideGridImages.map((image: any, index: number) => (
                  <div className="col" key={image.id}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="img-fluid rounded"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
