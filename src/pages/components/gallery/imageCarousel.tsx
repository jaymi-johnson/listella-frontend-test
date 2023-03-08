import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from "./gallery.module.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1440 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1439, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1023, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 463, min: 0 },
    items: 2,
  },
};

type ImageCarouselProps = {
  images: any[]; // TODO get type
};

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const getImages = () => {
    // TODO get type
    return images.map((image: any) => {
      return (
        <Image
          className={styles.images}
          src={image.links[0].href}
          alt={image.data.title}
          key={image.data.title}
          width={125}
          height={100}
        />
      );
    });
  };
  return (
    <Carousel responsive={responsive} arrows={false}>
      {getImages()}
    </Carousel>
  );
};

export default ImageCarousel;
