import { FaLinkedin, FaGithub } from "react-icons/fa";
import DownloadButton from "@/components/download-button";

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      <section className="flex flex-col items-center justify-center text-center pt-8 pb-12">
        {/* Name */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-3">TARUN VELAGALA</h1>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center items-center gap-x-4 text-sm text-muted-foreground">

        <a
            href="https://github.com/tarunvelagala"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-primary"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-4 h-4" />
            GitHub
          </a>

          <span>|</span>

          <a
            href="https://linkedin.com/in/tarunvelagala"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-primary"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>

        {/* Download Button */}
        <div className="mt-8">
          <DownloadButton />
        </div>
      </section>
    </div>
  );
}
