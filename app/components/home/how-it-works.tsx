import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const steps = [
    {
        number: "1",
        title: "Upload PDF",
        description: "Click the upload button and select your PDF file from your device. Supports both .pdf and .PDF extensions."
    },
    {
        number: "2",
        title: "Auto Extract",
        description: "Our system automatically processes your PDF and extracts all text content with page-by-page organization."
    },
    {
        number: "3",
        title: "Copy & Use",
        description: "Review the extracted text alongside your PDF preview, then copy it to your clipboard with a single click."
    }
];

export function HowItWorks() {
    return (
        <Card className="mt-12 sm:mt-20">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl sm:text-3xl">How It Works</CardTitle>
                <CardDescription className="text-base sm:text-lg">
                    Extract text from your PDFs in just three simple steps
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {steps.map((step) => (
                        <div key={step.number} className="text-center">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-indigo-600">{step.number}</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                                {step.title}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-6 sm:mt-8 text-center">
                    <Button asChild size="lg">
                        <Link href="/dashboard">
                            Try It Now - Its Free
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}