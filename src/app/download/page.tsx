import Nav from "@/components/Nav";
import DownloadList from "@/components/downloadList";
import BottonNavigationbar from "@/components/childComponents/Navigationbar";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <>
      <Nav />
      <DownloadList />
      <BottonNavigationbar />
      <Footer />
    </>
  )
}
