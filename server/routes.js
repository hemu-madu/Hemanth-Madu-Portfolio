import { createServer } from "http";
import { storage } from "./storage.js";
import { contactFormSchema } from "../shared/schema.js";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
async function registerRoutes(app) {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      const contact = await storage.createContact({
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message
      });
      return res.status(201).json({
        success: true,
        message: "Contact form submitted successfully",
        contact
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.message
        });
      }
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
export {
  registerRoutes
};
