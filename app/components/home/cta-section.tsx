import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload } from "lucide-react";

export function CTASection() {
    return (
        <div className="mt-12 sm:mt-20 text-center">
            <Card className="border-2 border-dashed">
                <CardContent className="p-6 sm:p-12">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                        Ready to Extract Text from Your PDFs?
                    </h3>
                    <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
                        Join thousands of users who trust our PDF text extractor for
                        their document processing needs
                    </p>
                    <Button asChild size="lg" className="w-full sm:w-auto">
                        <Link href="/dashboard">
                            <Upload className="w-6 h-6 mr-3" />
                            Get Started Now
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}