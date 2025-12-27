import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export function HeroSection() {
    return (
        <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                PDF Text Extractor
                <span className="block text-indigo-600 mt-2">Extract Text Instantly</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
                Upload any PDF document and extract its text content in seconds.
                Fast, secure, and completely browser-based processing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
                <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="/dashboard">
                        <Upload className="w-5 h-5 mr-2" />
                        Start Extracting
                    </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                    <Link href="/auth">
                        Sign In
                    </Link>
                </Button>
            </div>
        </div>
    );
}