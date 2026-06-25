import { useState } from "react";
import { pdf } from "@react-pdf/renderer";
import { Download } from "lucide-react";
import CVDocument from "./CVDocument.jsx";

/**
 * Reliable CV download: generates PDF in-browser via @react-pdf/renderer (real text, not screenshots).
 * Uses blob + synthetic click — works more consistently than PDFDownloadLink in some browsers.
 */
export default function DownloadCVButton({ className = "" }) {
  const [loading, setLoading] = useState(false);

  async function handleDownload() {
    if (loading) return;
    setLoading(true);
    try {
      const blob = await pdf(<CVDocument />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Artea-Bedulla-CV.pdf";
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("CV download failed:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={loading}
      className={`${className} ${loading ? "cursor-wait opacity-80" : ""}`}
    >
      <Download className="h-4 w-4 shrink-0" aria-hidden />
      {loading ? "Preparing CV..." : "Download CV"}
    </button>
  );
}
