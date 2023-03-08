import { Noto_Sans_JP } from "next/font/google";
import { GetServerSideProps } from "next";

import Header from "./layout/header";
import Footer from "./layout/footer";
import Main from "./main";

const natoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400"],
});

type HomeProps = {
  data?: any; // TODO get type
};

const Home = ({ data }: HomeProps) => {
  return (
    <main className={natoSans.className}>
      <Header />
      <Main data={data} />
      <Footer />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  try {
    const res = await fetch("https://images-api.nasa.gov/search?q=featured");
    const data = await res.json();

    // Only display the first 10 images of the featured collection
    return { props: { data: data.collection.items.slice(0, 10) } };
  } catch (error) {
    // TODO
    console.log("Handle the error");
    return { props: { data: [] } };
  }
};

export default Home;
