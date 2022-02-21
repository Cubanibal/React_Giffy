import "./App.css";
import ListOfGif from "./components/ListOfGif";
import { Link, Route } from "wouter";

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/panda">Gifs de Panda</Link>
        <Link to="/gif/dance">Gifs de Baile</Link>
        <Link to="/gif/cuba">Gifs de Cuba</Link>
        <Route path="/gif/:keyword" component={ListOfGif} />
      </section>
    </div>
  );
}
