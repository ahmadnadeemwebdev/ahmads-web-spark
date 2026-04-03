import { ArrowLeft, Download, Mail, MapPin, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CV = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Ahmad_Nadeem_CV.pdf';
    link.download = 'Ahmad_Nadeem_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
        <Button 
          onClick={handleDownload}
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
      </div>

      <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-lg shadow-2xl overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                AHMAD NADEEM
              </h1>
              <p className="text-xl text-orange-600 font-semibold">
                Video Editor & Content Creator
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <a href="mailto:ahmadnadeemwebdev@gmail.com" className="flex items-center gap-2 hover:text-orange-600 transition-colors">
                ahmadnadeemwebdev@gmail.com
                <Mail className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-2">
                Lahore, Pakistan
                <MapPin className="w-4 h-4" />
              </div>
              <a href="https://youtube.com/@ahmadnadeem" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-600 transition-colors">
                YouTube
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/ahmadnadeem" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-600 transition-colors">
                Instagram
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="w-full h-px bg-gray-200 mb-8" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  Professional Profile
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Creative and detail-oriented Video Editor with 1+ year of experience in creating 
                  engaging social media content, cinematic edits, and motion graphics. Proficient in 
                  Adobe Premiere Pro, After Effects, and DaVinci Resolve. Passionate about storytelling 
                  through visual media and delivering high-quality content for creators and brands.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  Work Experience
                </h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                      <h3 className="font-semibold text-gray-900">Freelance Video Editor</h3>
                      <span className="text-sm text-gray-500">2024 - Present</span>
                    </div>
                    <p className="text-orange-600 text-sm mb-2">Self-Employed</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li className="flex items-start gap-2"><span className="text-orange-600 mt-1">•</span>Edited short-form content for social media creators and brands</li>
                      <li className="flex items-start gap-2"><span className="text-orange-600 mt-1">•</span>Created cinematic edits with professional color grading</li>
                      <li className="flex items-start gap-2"><span className="text-orange-600 mt-1">•</span>Designed motion graphics and text animations</li>
                      <li className="flex items-start gap-2"><span className="text-orange-600 mt-1">•</span>Delivered 50+ projects with fast turnaround</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  Education
                </h2>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="font-semibold text-gray-900">Intermediate (ICS)</h3>
                    <span className="text-sm text-gray-500">2023 - 2025</span>
                  </div>
                  <p className="text-orange-600 text-sm">College Education</p>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  Software
                </h2>
                <div className="mb-4">
                  <h3 className="text-orange-600 font-semibold text-sm mb-2">Editing</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Premiere Pro"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">{skill}</span>
                    ))}
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  Skills
                </h2>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Video Editing & Cutting</p>
                  <p>• Color Grading & LUTs</p>
                  <p>• Motion Graphics</p>
                  <p>• Sound Design</p>
                  <p>• Short Form Content</p>
                  <p>• Thumbnail Design</p>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  Languages
                </h2>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">English</span>
                    <span className="text-gray-500">60%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Urdu</span>
                    <span className="text-gray-500">100%</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;