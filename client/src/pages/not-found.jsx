import { Link } from "wouter";
import { Home, ArrowLeft } from "lucide-react";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center max-w-md">
        {/* 404 */}
        <div className="mb-6">
          <span className="text-8xl font-black gradient-text">404</span>
        </div>

        <h1 className="text-2xl font-bold text-foreground mb-3">Page Not Found</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <span className="btn-primary cursor-pointer">
              <Home className="w-4 h-4" />
              Go Home
            </span>
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="btn-outline"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
