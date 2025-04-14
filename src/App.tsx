import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Work from "./pages/WORK/Work";
import Resume from "./pages/Resume";
import Social from "./pages/Social";
import Awards from "./pages/Awards";
import Patents from "./pages/Patents";
import Store from "./pages/Store";
import LandingPage from "./pages/Landingpage";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/work" element={<Work />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/social" element={<Social />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/patents" element={<Patents />} />
        <Route path="/store" element={<Store />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </QueryClientProvider>
);

export default App;
