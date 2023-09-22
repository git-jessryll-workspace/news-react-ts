import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NewsPage } from "@/pages";
import AppProvider from "./context/AppProvider";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewsPage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
