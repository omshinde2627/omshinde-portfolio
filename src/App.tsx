import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingFallback from "@/components/LoadingFallback";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const LocalBusinessWebsites = lazy(() => import("./pages/projects/LocalBusinessWebsites.tsx"));
const LiveBusinessList = lazy(() => import("./pages/projects/LiveBusinessList.tsx"));
const STCProject = lazy(() => import("./pages/projects/STCProject.tsx"));
const GMKProject = lazy(() => import("./pages/projects/GMKProject.tsx"));
const Demo = lazy(() => import("./pages/projects/Demo.tsx"));
const SEORanking = lazy(() => import("./pages/projects/SEORanking.tsx"));
const HackathonBuilds = lazy(() => import("./pages/projects/HackathonBuilds.tsx"));
const StartupConcepts = lazy(() => import("./pages/projects/StartupConcepts.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<LoadingFallback />}>
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
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
