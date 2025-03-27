/**
 * WEBSITE STARTER FILE
 * 
 * This is the first file that runs when your portfolio website loads.
 * It sets up the basics needed for your website to work.
 */

import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // Loads all your website's styling
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

// Find the container where your website will be placed
const rootElement = document.getElementById("root");

// If the container can't be found, show an error message
if (!rootElement) {
  console.error("Could not find the website container! The website cannot start.");
  
  // Create a message to show on the page
  const errorElement = document.createElement("div");
  errorElement.style.padding = "20px";
  errorElement.style.fontFamily = "Arial, sans-serif";
  errorElement.style.color = "white";
  errorElement.style.backgroundColor = "black";
  errorElement.textContent = "Could not load the website. Please refresh the page.";
  document.body.appendChild(errorElement);
} else {
  // If the container is found, try to load your website
  try {
    // Create your website inside the container
    const root = createRoot(rootElement);
    
    // Add your website content to the page
    root.render(
      <QueryClientProvider client={queryClient}>
        <App />
        <Toaster />
      </QueryClientProvider>
    );
    console.log("Website loaded successfully!");
  } catch (error) {
    // If something goes wrong, show an error message
    console.error("Failed to load the website:", error);
    rootElement.innerHTML = `<div style="padding: 20px; font-family: Arial, sans-serif; color: white; background-color: black;">
      Something went wrong while loading the website. Please try refreshing the page.
    </div>`;
  }
}
