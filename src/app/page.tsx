import Nav from "@/components/Nav";
import Main from "@/components/Main";
import Attributes from "@/components/Attributes";
import BottonNavigationbar from "@/components/childComponents/Navigationbar";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Nav />
      <Main />
      <BottonNavigationbar />
      <Attributes />
      <Footer />
    </>
  );
}
