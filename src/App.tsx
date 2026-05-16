import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import LocalBusinessWebsites from "./pages/projects/LocalBusinessWebsites.tsx";
import LiveBusinessList from "./pages/projects/LiveBusinessList.tsx";
import STCProject from "./pages/projects/STCProject.tsx";
import GMKProject from "./pages/projects/GMKProject.tsx";
import Demo from "./pages/projects/Demo.tsx";
import SEORanking from "./pages/projects/SEORanking.tsx";
import HackathonBuilds from "./pages/projects/HackathonBuilds.tsx";
import StartupConcepts from "./pages/projects/StartupConcepts.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/local-business-websites" element={<LocalBusinessWebsites />} />
          <Route path="/projects/local-business-websites/live" element={<LiveBusinessList />} />
          <Route path="/projects/local-business-websites/live/stc" element={<STCProject />} />
          <Route path="/projects/local-business-websites/live/gmk" element={<GMKProject />} />
          <Route path="/projects/local-business-websites/demo" element={<Demo />} />
          <Route path="/projects/seo-ranking" element={<SEORanking />} />
          <Route path="/projects/hackathon-builds" element={<HackathonBuilds />} />
          <Route path="/projects/startup-concepts" element={<StartupConcepts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
