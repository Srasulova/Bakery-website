import Image from "next/image";
import { useState } from "react";
import "./galleryCollapsed.css";
import galleryPictures from "./galleryImages";

interface GalleryCollapsedProps {
  toggleGallery: () => void;
}

export default function GalleryCollapsed({
  toggleGallery,
}: GalleryCollapsedProps) {
  const rightSideGridImages: any = galleryPictures.slice(0, 9);
  const [currentIndex, setCurrentIndex]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState(0);

  const mainImage = galleryPictures[currentIndex];

  const showNextImage = () => {
    const nextImage =
      currentIndex === galleryPictures.length - 1 ? 0 : currentIndex + 1;

    // const nextImage = (currentIndex + 1) % galleryPictures.length;
    setCurrentIndex(nextImage);
  };

  const showPreviousImage = () => {
    const previousImage =
      currentIndex === 0 ? galleryPictures.length - 1 : currentIndex - 1;
    // const previousImage =
    //   (currentIndex - 1 + galleryPictures.length) % galleryPictures.length;
    setCurrentIndex(previousImage);
  };

  return (
    <>
      <div className="galleryCollapsed">
        <div className="gallery-collapsed-title" id="gallery-title">
          <h2 className="gallery-title text-center fs-1 fw-bolder my-5 text-success">
            Gallery
          </h2>
        </div>

        <div className="galleryContainer container-fluid container ">
          <div className="row justify-content-center ">
            <div className="col-md-6 gallery-image main-img">
              <Image
                className="img-fluid rounded"
                src={mainImage.src}
                alt={mainImage.alt}
              />
              <div className="arrows-div d-flex justify-content-between mx-3">
                <button className="previousImage">
                  <i
                    className="bi bi-arrow-left-circle-fill"
                    style={{ fontSize: "3rem", opacity: 0.6, color: "white" }}
                    onClick={showPreviousImage}
                  ></i>
                </button>
                <button className="nextImage">
                  <i
                    className="bi bi-arrow-right-circle-fill"
                    style={{ fontSize: "3rem", opacity: 0.6, color: "white" }}
                    onClick={showNextImage}
                  ></i>
                </button>
              </div>
            </div>
            <div className="col-md-6 gallery-image container">
              <div className="row row-cols-3 g-2">
                {rightSideGridImages.map((image: any, index: number) => (
                  <div
                    className="col"
                    key={image.id}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="img-fluid rounded"
                    />
                  </div>
                ))}
              </div>
              <div className="row justify-content-end">
                <div className="col-md-2 d-flex justify-content-end mt-3">
                  <button
                    type="button"
                    className="moreBtn btn btn-sm btn-outline-success fw-medium"
                    onClick={toggleGallery}
                  >
                    More -&gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
