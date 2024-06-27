import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ArtObjectsPage from "@/components/ArtObjectsPage";
import Header from "@/components/layout/Header";
import "@/App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Header />
        <main>
          <div className="container">
            <ArtObjectsPage />
          </div>
        </main>
      </>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
