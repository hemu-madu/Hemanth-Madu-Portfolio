import { Switch, Route } from "wouter";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { ThemeProvider } from "@/context/ThemeContext";

/**
 * Main App Component - This is the starting point of your website
 * 
 * HOW THIS WORKS:
 * 1. This file controls which page to show based on the website URL
 * 2. When someone visits the main page (/) they see your portfolio (Home component)
 * 3. If they try to visit any other URL, they see the NotFound page
 */
import CursorFollower from "@/components/ui/cursor-follower";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <CursorFollower />
      <Switch>
        {/* Main portfolio page - shown when someone visits your website */}
        <Route path="/" component={Home} />

        {/* Error page - shown if someone tries to visit a page that doesn't exist */}
        <Route component={NotFound} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
