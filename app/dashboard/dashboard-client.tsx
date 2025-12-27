"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/actions/auth-actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  FileText, 
  Copy, 
  Trash2, 
  LogOut, 
  Loader2, 
  AlertCircle,
  Check,
  RefreshCw
} from "lucide-react";

// Declare pdfjs-dist type
declare global {
  interface Window {
    pdfjsLib: any;
  }
}

export default function DashboardPage() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string>("");
  const [extractedText, setExtractedText] = useState<string>("");
  const [isExtracting, setIsExtracting] = useState(false);
  const [error, setError] = useState<string>("");
  const [pageCount, setPageCount] = useState<number>(0);
  const [copied, setCopied] = useState(false);
  const [pdfjsLoaded, setPdfjsLoaded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Load PDF.js library from CDN
  useEffect(() => {
    if (window.pdfjsLib) {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
      setPdfjsLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
    script.async = true;

    script.onload = () => {
      if (window.pdfjsLib) {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc =
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
        setPdfjsLoaded(true);
      }
    };

    script.onerror = () => {
      setError("Failed to load PDF.js library. Please refresh the page.");
    };

    document.body.appendChild(script);

    return () => {
      try {
        document.body.removeChild(script);
      } catch (e) {
        // Script already removed
      }
    };
  }, []);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileName = file.name.toLowerCase();
    const isPdfMimeType = file.type === "application/pdf";
    const isPdfExtension = fileName.endsWith(".pdf");

    if (!isPdfMimeType && !isPdfExtension) {
      setError("Please upload a valid PDF file (.pdf or .PDF extension)");
      return;
    }

    if (!pdfjsLoaded) {
      setError("PDF library is still loading. Please wait a moment and try again.");
      return;
    }

    setError("");
    setPdfFile(file);

    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl);
    }
    const url = URL.createObjectURL(file);
    setPdfUrl(url);

    await extractTextFromPDF(file);
  };

  const extractTextFromPDF = async (file: File) => {
    setIsExtracting(true);
    setError("");
    setExtractedText("");

    try {
      const arrayBuffer = await file.arrayBuffer();
      const typedArray = new Uint8Array(arrayBuffer);

      const loadingTask = window.pdfjsLib.getDocument({
        data: typedArray,
        verbosity: 0
      });

      const pdf = await loadingTask.promise;
      setPageCount(pdf.numPages);

      let fullText = "";

      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        try {
          const page = await pdf.getPage(pageNum);
          const textContent = await page.getTextContent();

          const pageText = textContent.items
            .map((item: any) => item.str || "")
            .filter(Boolean)
            .join(" ");

          if (pageText.trim()) {
            fullText += `--- Page ${pageNum} ---\n\n${pageText}\n\n`;
          }
        } catch (pageError) {
          fullText += `--- Page ${pageNum} ---\n\n[Error extracting text from this page]\n\n`;
        }
      }

      const cleanedText = fullText
        .trim()
        .replace(/\s+/g, " ")
        .replace(/\n\s*\n\s*\n/g, "\n\n");

      const finalText = cleanedText || "No text could be extracted from this PDF";
      setExtractedText(finalText);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(`Failed to extract text from PDF: ${errorMessage}`);
      setExtractedText("");
    } finally {
      setIsExtracting(false);
    }
  };

  const handleCopyText = async () => {
    if (!extractedText) return;

    try {
      await navigator.clipboard.writeText(extractedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setError("Failed to copy text to clipboard");
    }
  };

  const handleLogout = async () => {
    await signOut();
    router.push("/auth");
  };

  const clearPDF = () => {
    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl);
    }
    setPdfFile(null);
    setPdfUrl("");
    setExtractedText("");
    setError("");
    setPageCount(0);
    setCopied(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">PDF Text Extractor</h1>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            {pageCount > 0 && (
              <Badge variant="secondary" className="hidden sm:inline-flex">
                {pageCount} {pageCount === 1 ? "page" : "pages"}
              </Badge>
            )}
            <Button onClick={handleLogout} variant="destructive" size="sm">
              <LogOut className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Loading PDF.js Library */}
        {!pdfjsLoaded && !error && (
          <Alert className="mb-6">
            <Loader2 className="h-4 w-4 animate-spin" />
            <AlertDescription>Loading PDF library...</AlertDescription>
          </Alert>
        )}

        {/* Error Display */}
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="flex justify-between items-start gap-2">
              <span className="flex-1">{error}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setError("")}
                className="h-auto p-0 text-xs underline"
              >
                Dismiss
              </Button>
            </AlertDescription>
          </Alert>
        )}

        {/* Upload Section */}
        {!pdfFile && (
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto h-16 w-16 sm:h-24 sm:w-24 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Upload className="w-8 h-8 sm:w-12 sm:h-12 text-indigo-600" />
              </div>
              <CardTitle className="text-xl sm:text-2xl">Upload a PDF file</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Extract text content from your PDF documents instantly
              </CardDescription>
              <p className="text-xs sm:text-sm text-muted-foreground">
                All processing happens in your browser - no server upload required
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <label htmlFor="pdf-upload">
                <Button
                  asChild
                  size="lg"
                  disabled={!pdfjsLoaded}
                  className="cursor-pointer w-full sm:w-auto"
                >
                  <span>
                    <Upload className="w-5 h-5 mr-2" />
                    {pdfjsLoaded ? "Select PDF File" : "Loading..."}
                  </span>
                </Button>
              </label>
              <input
                ref={fileInputRef}
                id="pdf-upload"
                type="file"
                accept=".pdf,.PDF,application/pdf"
                onChange={handleFileChange}
                className="hidden"
                disabled={!pdfjsLoaded}
              />
            </CardContent>
          </Card>
        )}

        {/* PDF Viewer and Text Extractor */}
        {pdfFile && (
          <div className="space-y-4 sm:space-y-6">
            {/* File Info Controls */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-red-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                      <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-900 truncate">
                        {pdfFile.name}
                      </p>
                      <p className="text-xs text-slate-500">
                        {(pdfFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <label htmlFor="pdf-upload-new" className="flex-1 sm:flex-initial">
                      <Button variant="outline" size="sm" asChild className="w-full cursor-pointer">
                        <span>
                          <RefreshCw className="w-4 h-4 mr-2" />
                          <span className="hidden sm:inline">Change File</span>
                          <span className="sm:hidden">Change</span>
                        </span>
                      </Button>
                    </label>
                    <input
                      id="pdf-upload-new"
                      type="file"
                      accept=".pdf,.PDF,application/pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Button onClick={clearPDF} variant="outline" size="sm" className="flex-1 sm:flex-initial">
                      <Trash2 className="w-4 h-4 sm:mr-2" />
                      <span className="hidden sm:inline">Clear</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Split View with Tabs */}
            <Tabs defaultValue="split" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                <TabsTrigger value="split" className="text-xs sm:text-sm">Split View</TabsTrigger>
                <TabsTrigger value="pdf" className="text-xs sm:text-sm">PDF Only</TabsTrigger>
                <TabsTrigger value="text" className="text-xs sm:text-sm">Text Only</TabsTrigger>
              </TabsList>

              <TabsContent value="split" className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  {/* PDF Preview */}
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-slate-900 text-white py-3">
                      <CardTitle className="text-base">PDF Preview</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="h-[500px] sm:h-[600px] lg:h-[700px] overflow-auto bg-slate-100">
                        {pdfUrl && (
                          <iframe
                            src={pdfUrl}
                            className="w-full h-full"
                            title="PDF Preview"
                          />
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Extracted Text */}
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-slate-900 text-white py-3 flex flex-row justify-between items-center">
                      <CardTitle className="text-base">Extracted Text</CardTitle>
                      {extractedText && !isExtracting && (
                        <Button
                          onClick={handleCopyText}
                          variant={copied ? "default" : "secondary"}
                          size="sm"
                          className={copied ? "bg-green-600 hover:bg-green-700" : ""}
                        >
                          {copied ? (
                            <>
                              <Check className="w-3 h-3 mr-1" />
                              <span className="hidden sm:inline">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3 mr-1" />
                              <span className="hidden sm:inline">Copy</span>
                            </>
                          )}
                        </Button>
                      )}
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="h-[500px] sm:h-[600px] lg:h-[700px] overflow-auto p-4 sm:p-6 bg-slate-50">
                        {isExtracting ? (
                          <div className="flex items-center justify-center h-full">
                            <div className="text-center">
                              <Loader2 className="w-10 h-10 text-indigo-600 animate-spin mx-auto" />
                              <p className="mt-4 text-slate-600 text-sm sm:text-base">
                                Extracting text from PDF...
                              </p>
                            </div>
                          </div>
                        ) : extractedText ? (
                          <Card>
                            <CardContent className="p-4 sm:p-6">
                              <pre className="whitespace-pre-wrap font-mono text-xs sm:text-sm text-slate-800 leading-relaxed">
                                {extractedText}
                              </pre>
                            </CardContent>
                          </Card>
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <p className="text-slate-500 text-sm">
                              No text extracted yet.
                            </p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="pdf">
                <Card className="overflow-hidden">
                  <CardHeader className="bg-slate-900 text-white py-3">
                    <CardTitle className="text-base">PDF Preview</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="h-[600px] sm:h-[700px] overflow-auto bg-slate-100">
                      {pdfUrl && (
                        <iframe
                          src={pdfUrl}
                          className="w-full h-full"
                          title="PDF Preview"
                        />
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="text">
                <Card className="overflow-hidden">
                  <CardHeader className="bg-slate-900 text-white py-3 flex flex-row justify-between items-center">
                    <CardTitle className="text-base">Extracted Text</CardTitle>
                    {extractedText && !isExtracting && (
                      <Button
                        onClick={handleCopyText}
                        variant={copied ? "default" : "secondary"}
                        size="sm"
                        className={copied ? "bg-green-600 hover:bg-green-700" : ""}
                      >
                        {copied ? (
                          <>
                            <Check className="w-3 h-3 mr-2" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 mr-2" />
                            Copy
                          </>
                        )}
                      </Button>
                    )}
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="h-[600px] sm:h-[700px] overflow-auto p-4 sm:p-6 bg-slate-50">
                      {isExtracting ? (
                        <div className="flex items-center justify-center h-full">
                          <div className="text-center">
                            <Loader2 className="w-10 h-10 text-indigo-600 animate-spin mx-auto" />
                            <p className="mt-4 text-slate-600">
                              Extracting text from PDF...
                            </p>
                          </div>
                        </div>
                      ) : extractedText ? (
                        <Card>
                          <CardContent className="p-4 sm:p-6">
                            <pre className="whitespace-pre-wrap font-mono text-xs sm:text-sm text-slate-800 leading-relaxed">
                              {extractedText}
                            </pre>
                          </CardContent>
                        </Card>
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <p className="text-slate-500">
                            No text extracted yet.
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </main>
    </div>
  );
}