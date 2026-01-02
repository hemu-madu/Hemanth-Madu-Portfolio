import { Switch, Route, Router } from "wouter";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { ThemeProvider } from "@/context/ThemeContext";
import { EffectProvider } from "@/context/EffectContext";
import { ParticleCanvas } from "@/components/AntiGravity/engine/ParticleCanvas";
import ScrollProgress from "@/components/ui/ScrollProgress";
function App() {
  // Only use base path in production (GitHub Pages), locally we run at root
  const base = import.meta.env.PROD ? import.meta.env.BASE_URL.replace(/\/$/, "") : "";
  return <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <EffectProvider>
      <ScrollProgress />
      {
        /* <CursorFollower /> Removed per user request */
      }
      <ParticleCanvas />
      <Router base={base}>
        <Switch>
          {
            /* Main portfolio page - shown when someone visits your website */
          }
          <Route path="/" component={Home} />

          {
            /* Error page - shown if someone tries to visit a page that doesn't exist */
          }
          <Route component={NotFound} />
        </Switch>
      </Router>
    </EffectProvider>
  </ThemeProvider>;
}
var App_default = App;
export {
  App_default as default
};
