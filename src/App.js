import "./App.css";
import Header from "./components/header/Header";
import { menuItems } from "./data/header";

function App() {
  return (
    <div div className="App">
      <Header menuItems={menuItems} subMenuItems={menuItems}/>{" "}
    </div>
  );
}

export default App;
