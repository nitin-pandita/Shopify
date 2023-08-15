import { Navbar, Footer, Content } from "./components/index";
import style from "../src/App.css";
function App() {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Content />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
