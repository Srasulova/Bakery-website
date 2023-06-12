type GalleryPictures = {
  id: number;
  name: string;
  src: string;
  alt: string;
};

const galleryPictures: GalleryPictures[] = [];

for (let i = 1; i <= 40; i++) {
  const image = require(`./assets/gallery pictures/${i}.png`);
  galleryPictures.push({
    id: i,
    name:
      i === 1
        ? "Hennesy"
        : i === 2
        ? "Cocomelon"
        : i === 3
        ? "White rose"
        : i === 4
        ? "White and blue"
        : i === 5
        ? "White flowers"
        : i === 6
        ? "Gender reveal"
        : i === 7
        ? "Blue confetti"
        : i === 8
        ? "Pink Valentine's day"
        : i === 9
        ? "Hello Kitty"
        : i === 10
        ? "Pink flowers"
        : i === 11
        ? "White roses"
        : i === 12
        ? "White confetti"
        : i === 13
        ? "Casaamigos"
        : i === 14
        ? "White red spots"
        : i === 15
        ? "Pink and golden"
        : i === 16
        ? "Lacoste"
        : i === 17
        ? "Blue and silver"
        : i === 18
        ? "Rainbow"
        : i === 19
        ? "White and gold rose"
        : i === 20
        ? "Michael Kors"
        : i === 21
        ? "Sunflower"
        : i === 22
        ? "Crown"
        : i === 23
        ? "Multicolor"
        : i === 24
        ? "Nike"
        : i === 25
        ? "Unicorn"
        : i === 26
        ? "Butterflies"
        : i === 27
        ? "White and lilac"
        : i === 28
        ? "Pink with pearls"
        : i === 29
        ? "Corona"
        : i === 30
        ? "Blue and gold"
        : i === 31
        ? "Blue with pearls"
        : i === 32
        ? "White with flowers"
        : i === 33
        ? "Blue rainbow"
        : i === 34
        ? "Basketball"
        : i === 35
        ? "Captain America"
        : i === 36
        ? "White with sunflowers"
        : i === 37
        ? "Pink with roses"
        : i === 39
        ? "Sunflower wtih seeds"
        : "Hennesy with strawberries",
    src: image.default,
    alt: "cake picture",
  });
}

export default galleryPictures;
