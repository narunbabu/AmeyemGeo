import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "@/pages/HomePage";
import NotFound from "@/pages/not-found";
import AIPoweredGeoscience from "@/pages/services/AIPoweredGeoscience";
import CustomSoftwareTools from "@/pages/services/CustomSoftwareTools";
import FullCycleGeophysicalServices from "@/pages/services/FullCycleGeophysicalServices";
import WebMobileDevelopment from "@/pages/services/WebMobileDevelopment";
import SeisTrans from "@/pages/products/SeisTrans";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/services/ai-powered-geoscience" component={AIPoweredGeoscience} />
      <Route path="/services/custom-software-tools" component={CustomSoftwareTools} />
      <Route path="/services/full-cycle-geophysical-services" component={FullCycleGeophysicalServices} />
      <Route path="/services/web-mobile-development" component={WebMobileDevelopment} />
      <Route path="/products/seistrans" component={SeisTrans} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
