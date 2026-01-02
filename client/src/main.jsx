import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Could not find the website container! The website cannot start.");
  const errorElement = document.createElement("div");
  errorElement.style.padding = "20px";
  errorElement.style.fontFamily = "Arial, sans-serif";
  errorElement.style.color = "white";
  errorElement.style.backgroundColor = "black";
  errorElement.textContent = "Could not load the website. Please refresh the page.";
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
    console.log("Website loaded successfully!");
  } catch (error) {
    console.error("Failed to load the website:", error);
    rootElement.innerHTML = `<div style="padding: 20px; font-family: Arial, sans-serif; color: white; background-color: black;">
      Something went wrong while loading the website. Please try refreshing the page.
    </div>`;
  }
}
