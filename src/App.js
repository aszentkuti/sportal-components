import Header from "./components/header/Header";
import { headerData } from "./data/header";

function App() {
  return (
    <div>
      <Header headerData={headerData}/>
    </div>
  );
}

export default App;
