import { BrowserRouter } from "react-router-dom";
import Content from "./components/Content";
import PlayingBar from "./components/PlayingBar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <PlayingBar />
    </BrowserRouter>
  )
}

export default App;
