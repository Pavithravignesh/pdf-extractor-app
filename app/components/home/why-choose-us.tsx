import { Check } from "lucide-react";

const benefits = [
    {
        title: "No File Size Limits",
        description: "Process PDFs of any size directly in your browser"
    },
    {
        title: "Unlimited Conversions",
        description: "Extract text from as many PDFs as you need, no restrictions"
    },
    {
        title: "Privacy First",
        description: "Your files stay on your device - we never store or access them"
    },
    {
        title: "Works Offline",
        description: "Once loaded, extract text even without an internet connection"
    },
    {
        title: "Cross-Platform",
        description: "Works on Windows, Mac, Linux, and mobile devices"
    },
    {
        title: "Clean Output",
        description: "Get properly formatted text with preserved spacing and structure"
    }
];

export function WhyChooseUs() {
    return (
        <div className="mt-12 sm:mt-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-6 sm:p-8 text-white">
            <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
                    Why Choose Our PDF Extractor?
                </h2>
                <p className="text-base sm:text-lg text-indigo-100">
                    The most efficient way to extract text from PDFs
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                        <Check className="w-6 h-6 text-indigo-200 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-semibold mb-1">{benefit.title}</h4>
                            <p className="text-indigo-100 text-sm">{benefit.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}