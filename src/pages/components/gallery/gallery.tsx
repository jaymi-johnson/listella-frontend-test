import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import styles from "./gallery.module.css";
import astronaut from "../../../../assets/astronaut.jpg";
import planet from "../../../../assets/planet.svg";
import ImageCarousel from "./imageCarousel";

type GalleryProps = {
  data?: any; // TODO get type
};

const Gallery = ({ data }: GalleryProps) => {
  const handleOnClick = () => {
    console.log("handle view gallery click");
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.galleries}>
        <Typography>
          Galleries · <b>Space Database</b>
        </Typography>
        <Image
          src={astronaut}
          alt="astronaut"
          width={400}
          className={styles.astronaut}
        />
      </div>
      <Card>
        <CardContent className={styles.card_header}>
          <Image src={planet} alt="planet icon" />
          <div className={styles.header_text}>
            <Typography variant="subtitle1">
              {"NASA's Space Database"}
            </Typography>
            <Typography variant="subtitle2">
              Our Public Gallery for Outer Space
            </Typography>
          </div>
        </CardContent>
        <CardContent className={styles.card_content}>
          <Typography>
            We want to see space through your eyes! Take photos and upload them
            to our public library. Our goal is to provide the largest database
            of quality images. Space is amazing! Let’s capture it together!
          </Typography>
          {/* Only display the carousel if images are available */}
          {data && data.length && (
            <>
              <div className={styles.content_text}>
                <Typography variant="subtitle1">Featured Images</Typography>
                <Typography variant="subtitle2">Scroll to see more</Typography>
              </div>
              <ImageCarousel images={data} />
            </>
          )}
          <Button onClick={handleOnClick} className={styles.view_button}>
            {"View Gallery >"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Gallery;
