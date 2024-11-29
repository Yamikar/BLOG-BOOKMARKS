import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <p>
        Our blog to learn about new product <br /> features, the latest in tech,
        and updates
      </p>
      <br />
      <Navbar />
      <br />
      <Section />
      <br />
      <Footer />
    </div>
  );
}
