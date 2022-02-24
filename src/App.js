import "./App.css";
import ListOfGif from "./components/ListOfGif";
import { Route } from "wouter";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>

        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={ListOfGif} />
      </section>
    </div>
  );
}
