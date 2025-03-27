import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for handling contact form submissions
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store the contact form submission
      const contact = await storage.createContact({
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message
      });
      
      // Return success response
      return res.status(201).json({ 
        success: true, 
        message: "Contact form submitted successfully", 
        contact 
      });
    } catch (error) {
      // Handle validation errors
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: validationError.message 
        });
      }
      
      // Handle other errors
      console.error("Error submitting contact form:", error);
      return res.status(500).json({ 
        success: false, 
        message: "Server error while submitting contact form" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
