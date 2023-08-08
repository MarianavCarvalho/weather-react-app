import "./styles.css";
import Form from "./Form";
import Heading from "./Heading";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="appContainer">
          <Form />
          <Heading />
        </div>
        <script src="src/app.js"></script>
      </div>
      <Footer />
    </div>
  );
}