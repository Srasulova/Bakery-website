import Image from "next/image";
import { useState } from "react";
import "./galleryExpanded.css";
import galleryPictures from "./galleryImages";

interface GalleryCollapsedProps {
  toggleGallery: () => void;
}

export default function GalleryExpanded({
  toggleGallery,
}: GalleryCollapsedProps) {
  return (
    <div className="gallery">
      <div className="gallery-title" id="gallery-title">
        <h2 className="gallery-title text-center fs-1 fw-bolder mt-5 mb-3 text-success">
          Gallery
        </h2>
      </div>

      <div className="gallery-container container">
        <button
          type="button"
          className="btn btn-outline-success btn-less btn-sm mt-3 fw-medium mb-2"
          onClick={toggleGallery}
        >
          Less {"<-"}
        </button>
        <div className="row row-cols-5 g-2">
          {galleryPictures.map((image: any) => (
            <div className="col" key={image.id}>
              <Image
                src={image.src}
                alt={image.alt}
                className="img-fluid rounded gallery-img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
