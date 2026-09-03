import Link from "next/link";
import { ArrowLeft, Home, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center max-w-lg space-y-6">
        <Badge variant="amber" size="md">
          404 Error: Page Not Found
        </Badge>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Lost in the Field?
        </h1>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          The page or work order you were looking for doesn&apos;t exist or may have been moved. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            variant="glow"
            size="md"
            href="/"
            leftIcon={<Home className="w-4 h-4" />}
          >
            Return to Storefront
          </Button>
          <Button
            variant="outline"
            size="md"
            href="/contact"
            leftIcon={<HelpCircle className="w-4 h-4" />}
          >
            Contact Support
          </Button>
        </div>

        <div className="pt-8 border-t border-slate-800/80">
          <p className="text-xs text-slate-500">
            Looking for something specific? Browse our{" "}
            <Link href="/features" className="text-blue-400 hover:underline">
              Features
            </Link>
            ,{" "}
            <Link href="/pricing" className="text-blue-400 hover:underline">
              Pricing Plans
            </Link>
            , or{" "}
            <Link href="/blog" className="text-blue-400 hover:underline">
              Resources Hub
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
