import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import List from "./components/List";
import ItemDetails from "./components/ItemDetails";
import Form from "./components/Form";
import { ItemsProvider } from "./context/ItemsContext";

const App = () => {

  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <ItemsProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<List />} />
            <Route path="/items/:name" element={<ItemDetails />} />
            <Route path="/items/new" element={<Form />} />
          </Routes>
        </ItemsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
