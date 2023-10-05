import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NewsPage } from "@/pages";
import AppProvider from "./context/AppProvider";
import { QueryClientProvider, QueryClient } from "react-query";

function App(): JSX.Element {
  const queryClient: QueryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NewsPage />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
