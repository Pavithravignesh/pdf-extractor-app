import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Upload,
  Zap,
  Lock,
  FileText,
  Eye,
  Copy,
  Smartphone,
  Check,
  ArrowRight
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
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

        {/* Features Grid */}
        <div className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>Lightning Fast</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Extract text from PDFs in seconds using advanced browser-based
                processing. No waiting, no server delays - instant results.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>100% Secure</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Your files never leave your browser. All processing happens
                locally on your device, ensuring complete privacy and security.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle>Multi-Page Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Extract text from single or multi-page PDFs with automatic
                page detection and organized output for easy reading.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-red-600" />
              </div>
              <CardTitle>Live Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                View your PDF and extracted text side-by-side with our intuitive
                split-screen interface for easy verification.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Copy className="w-6 h-6 text-yellow-600" />
              </div>
              <CardTitle>Copy & Export</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Easily copy extracted text to your clipboard with one click.
                Perfect for reports, documents, and data processing.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-indigo-600" />
              </div>
              <CardTitle>No Installation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Works directly in your browser - no software installation,
                no downloads, no configuration required. Just upload and extract.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* How It Works Section */}
        <Card className="mt-12 sm:mt-20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl sm:text-3xl">How It Works</CardTitle>
            <CardDescription className="text-base sm:text-lg">
              Extract text from your PDFs in just three simple steps
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Upload PDF
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Click the upload button and select your PDF file from your device.
                  Supports both .pdf and .PDF extensions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Auto Extract
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Our system automatically processes your PDF and extracts all
                  text content with page-by-page organization.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">3</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Copy & Use
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Review the extracted text alongside your PDF preview, then
                  copy it to your clipboard with a single click.
                </p>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 text-center">
              <Button asChild size="lg">
                <Link href="/dashboard">
                  Try It Now - It's Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Benefits Section */}
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
            <div className="flex items-start space-x-3">
              <Check className="w-6 h-6 text-indigo-200 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">No File Size Limits</h4>
                <p className="text-indigo-100 text-sm">
                  Process PDFs of any size directly in your browser
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Check className="w-6 h-6 text-indigo-200 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Unlimited Conversions</h4>
                <p className="text-indigo-100 text-sm">
                  Extract text from as many PDFs as you need, no restrictions
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Check className="w-6 h-6 text-indigo-200 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Privacy First</h4>
                <p className="text-indigo-100 text-sm">
                  Your files stay on your device - we never store or access them
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Check className="w-6 h-6 text-indigo-200 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Works Offline</h4>
                <p className="text-indigo-100 text-sm">
                  Once loaded, extract text even without an internet connection
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Check className="w-6 h-6 text-indigo-200 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Cross-Platform</h4>
                <p className="text-indigo-100 text-sm">
                  Works on Windows, Mac, Linux, and mobile devices
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Check className="w-6 h-6 text-indigo-200 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Clean Output</h4>
                <p className="text-indigo-100 text-sm">
                  Get properly formatted text with preserved spacing and structure
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
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
      </main>

      {/* Footer */}
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
    </div>
  );
}