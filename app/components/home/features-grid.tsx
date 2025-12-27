import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Lock, FileText, Eye, Copy, Smartphone, LucideIcon } from "lucide-react";

interface Feature {
    icon: LucideIcon;
    iconColor: string;
    bgColor: string;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: Zap,
        iconColor: "text-blue-600",
        bgColor: "bg-blue-100",
        title: "Lightning Fast",
        description: "Extract text from PDFs in seconds using advanced browser-based processing. No waiting, no server delays - instant results."
    },
    {
        icon: Lock,
        iconColor: "text-green-600",
        bgColor: "bg-green-100",
        title: "100% Secure",
        description: "Your files never leave your browser. All processing happens locally on your device, ensuring complete privacy and security."
    },
    {
        icon: FileText,
        iconColor: "text-purple-600",
        bgColor: "bg-purple-100",
        title: "Multi-Page Support",
        description: "Extract text from single or multi-page PDFs with automatic page detection and organized output for easy reading."
    },
    {
        icon: Eye,
        iconColor: "text-red-600",
        bgColor: "bg-red-100",
        title: "Live Preview",
        description: "View your PDF and extracted text side-by-side with our intuitive split-screen interface for easy verification."
    },
    {
        icon: Copy,
        iconColor: "text-yellow-600",
        bgColor: "bg-yellow-100",
        title: "Copy & Export",
        description: "Easily copy extracted text to your clipboard with one click. Perfect for reports, documents, and data processing."
    },
    {
        icon: Smartphone,
        iconColor: "text-indigo-600",
        bgColor: "bg-indigo-100",
        title: "No Installation",
        description: "Works directly in your browser - no software installation, no downloads, no configuration required. Just upload and extract."
    }
];

export function FeaturesGrid() {
    return (
        <div className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                    <Card key={index} className="hover:shadow-xl transition-shadow">
                        <CardHeader>
                            <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                                <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                            </div>
                            <CardTitle>{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-base">
                                {feature.description}
                            </CardDescription>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}