import logo from './logo.svg';
import './App.css';
import Form from "./Form"
import Meme from "./Meme"
import { useSelector } from "react-redux"

function App() {
  const memes = useSelector(store => store.memes)

  return (
    <div className="App">
      <Form />

      <section className="output-container">
        <div className="output-container__output ">
          {memes.length > 0 ? memes.map(m => <Meme meme={m} key={m.id} />) : ''}
        </div>
      </section>
    </div>
  );
}

export default App;
