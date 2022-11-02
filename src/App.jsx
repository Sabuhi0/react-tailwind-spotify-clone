import Content from "./components/Content";
import PlayingBar from "./components/PlayingBar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <PlayingBar />
    </>
  )
}

export default App;
