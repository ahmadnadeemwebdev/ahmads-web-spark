import { ArrowLeft, Download, Mail, MapPin, Instagram, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useDocumentHead } from "@/hooks/useDocumentHead";

const CV = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ahmad_Nadeem_CV.pdf";
    link.download = "Ahmad_Nadeem_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <Helmet>
        <title>Ahmad Nadeem | Professional CV</title>
        <meta
          name="description"
          content="Professional CV of Ahmad Nadeem — Graphic Designer & Web Developer in Lahore, Pakistan. Brand identity, logo design, React websites. Download PDF."
        />
        <link rel="canonical" href="https://ahmads-web-spark.lovable.app/cv" />
        <meta property="og:title" content="Ahmad Nadeem | Professional CV" />
        <meta
          property="og:description"
          content="Full CV — Graphic Designer & Web Developer based in Lahore, Pakistan."
        />
        <meta property="og:url" content="https://ahmads-web-spark.lovable.app/cv" />
        <meta property="og:type" content="profile" />
      </Helmet>

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
              <h1
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Ahmad Nadeem — Graphic Designer &amp; Web Developer CV
              </h1>
              <p className="text-xl text-orange-600 font-semibold">
                Graphic Designer &amp; Web Developer
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <a
                href="mailto:ahmadnadeemwebdev@gmail.com"
                className="flex items-center gap-2 hover:text-orange-600 transition-colors"
                aria-label="Email Ahmad"
              >
                ahmadnadeemwebdev@gmail.com
                <Mail className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-2">
                Lahore, Pakistan
                <MapPin className="w-4 h-4" />
              </div>
              <a
                href="https://instagram.com/ahmadnadeem"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-orange-600 transition-colors"
                aria-label="Instagram profile"
              >
                Instagram
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://ahmads-web-spark.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-orange-600 transition-colors"
                aria-label="Portfolio website"
              >
                Portfolio
                <Globe className="w-4 h-4" />
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
                  Creative and detail-oriented Graphic Designer &amp; Web Developer with 1+ year of
                  freelance experience. Specializes in bold brand identities, logo design, and modern
                  responsive websites built with React, TypeScript, and Tailwind CSS. Comfortable
                  moving from Figma mockups to production code.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  Work Experience
                </h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                      <h3 className="font-semibold text-gray-900">
                        Freelance Graphic Designer &amp; Web Developer
                      </h3>
                      <span className="text-sm text-gray-500">2024 - Present</span>
                    </div>
                    <p className="text-orange-600 text-sm mb-2">Self-Employed</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        Designed brand identities, logos, and social media kits for clients
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        Built responsive websites with React, TypeScript, and Tailwind CSS
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        Translated Figma designs into clean, production-ready code
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        Delivered projects on tight deadlines with consistent revisions
                      </li>
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
                  <h3 className="text-orange-600 font-semibold text-sm mb-2">Design</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Figma", "Photoshop", "Illustrator"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-orange-600 font-semibold text-sm mb-2">Development</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Tailwind CSS", "Vite", "Git"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  Skills
                </h2>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Brand Identity &amp; Logo Design</p>
                  <p>• UI / UX Design</p>
                  <p>• Responsive Web Development</p>
                  <p>• Figma to React Workflow</p>
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
