import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { FileUploader } from "react-drag-drop-files";

import styles from "./upload.module.css";
import upload from "../../../../assets/upload.svg";
import { useState } from "react";

const Upload = ({}) => {
  const [file, setFile] = useState<File | undefined>();
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    // Handle upload, or pass to parent to handle - for now just set state
    // setFile(e.dataTransfer.getData('file'));
  };
  const enableDropping = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.upload}>
      <Card className={styles.card}>
        <CardContent>
          <Typography variant="h6" className={styles.title}>
            Upload Your Photos
          </Typography>
          <Typography>
            Select up to 5 high quality images to upload into our database. If
            your image is selected, a member of our team will contact you for
            attribution.
          </Typography>
          <FileUploader handleDrop={handleDrop} name="image" multiple>
            <div className={styles.dropzone}>
              <Image src={upload} alt="upload" height={50} width={50} />
              <Typography className={styles.uploadMessage}>
                Drag & Drop Your Images
              </Typography>
            </div>
          </FileUploader>
        </CardContent>
      </Card>
    </div>
  );
};

export default Upload;
