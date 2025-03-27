import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for submitting contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const result = insertMessageSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.message 
        });
      }
      
      const message = result.data;
      const savedMessage = await storage.createMessage({
        ...message,
        createdAt: new Date().toISOString(),
      });
      
      return res.status(201).json({ 
        message: "Message sent successfully",
        data: savedMessage
      });
    } catch (error) {
      console.error("Error saving message:", error);
      return res.status(500).json({ message: "Failed to send message" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
