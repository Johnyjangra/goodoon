import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MySlide from "./components/MySlide";

function App() {
  return (
    <div className="overflow-hidden">
      <Nav />
      <Header />
      <MySlide />
      <Footer />
    </div>
  );
}

export default App;
