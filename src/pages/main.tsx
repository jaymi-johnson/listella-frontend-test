import Gallery from "./components/gallery";
import Upload from "./components/upload";

type MainProps = {
  data?: any; // TODO get type
};

const Main = ({ data }: MainProps) => {
  return (
    <div>
      <Gallery data={data} />
      <Upload />
    </div>
  );
};

export default Main;
