import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BookList from "./components/BookList";
import FooterComponent from "./components/MyFooter";

import TopBar from "./components/TopBar";
import fantasy from "./data/fantasy.json";
import horror from "./data/horror.json";

function App() {
  return (
    <>
      <TopBar title="Biblioteca" claim="libreria di Frank" />
      <FooterComponent />

      <BookList books={fantasy} />
      <BookList books={horror} />
    </>
  );
}

export default App;
