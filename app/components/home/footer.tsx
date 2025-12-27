import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 sm:py-12 mt-12 sm:mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h3 className="text-lg font-semibold mb-4">PDF Text Extractor</h3>
                    <p className="text-gray-400 mb-6 text-sm sm:text-base">
                        Fast, secure, and browser-based PDF text extraction
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <Link
                            href="/"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/dashboard"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Extractor
                        </Link>
                        <Link
                            href="/auth"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Sign In
                        </Link>
                    </div>
                    <div className="mt-8 text-xs sm:text-sm text-gray-500 space-y-2">
                        <p>© 2024 PDF Text Extractor. All rights reserved.</p>
                        <p>All processing happens in your browser. We never store your files.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}