import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

// Create a more robust root initialization
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Could not find root element! The app cannot be initialized.");
  // Create a fallback element to show error
  const errorElement = document.createElement("div");
  errorElement.style.padding = "20px";
  errorElement.style.fontFamily = "Arial, sans-serif";
  errorElement.style.color = "white";
  errorElement.style.backgroundColor = "black";
  errorElement.textContent = "Could not initialize the application. Please refresh the page.";
  document.body.appendChild(errorElement);
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <QueryClientProvider client={queryClient}>
        <App />
        <Toaster />
      </QueryClientProvider>
    );
    console.log("Application successfully rendered");
  } catch (error) {
    console.error("Failed to render application:", error);
    rootElement.innerHTML = `<div style="padding: 20px; font-family: Arial, sans-serif; color: white; background-color: black;">
      An error occurred while loading the application. Please try refreshing the page.
    </div>`;
  }
}
