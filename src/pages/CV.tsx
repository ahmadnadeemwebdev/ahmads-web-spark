import { ArrowLeft, Download, Mail, MapPin, Linkedin, Github } from "lucide-react";
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
      {/* Header */}
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

      {/* CV Content */}
      <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-lg shadow-2xl overflow-hidden">
        <div className="p-8 md:p-12">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                AHMAD NADEEM
              </h1>
              <p className="text-xl text-primary font-semibold">
                Frontend Developer
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <a 
                href="mailto:ahmadnadeemwebdev@gmail.com" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                ahmadnadeemwebdev@gmail.com
                <Mail className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-2">
                Wapda Town, Lahore
                <MapPin className="w-4 h-4" />
              </div>
              <a 
                href="https://www.linkedin.com/in/ahmad-nadeem-848284380" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                LinkedIn
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/ahmadnadeemwebdev" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                GitHub
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="w-full h-px bg-gray-200 mb-8" />

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Profile & Experience */}
            <div className="md:col-span-2 space-y-8">
              {/* Professional Profile */}
              <section>
                <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  Professional Profile
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Dedicated and detail-oriented Frontend Developer with 1 year of professional experience 
                  in developing responsive, user-friendly and modern web interfaces. Proficient in HTML, 
                  CSS, JavaScript (ES6), and React.js. Passionate about clean code, 
                  continuous learning, and delivering high-quality digital solutions.
                </p>
              </section>

              {/* Work Experience */}
              <section>
                <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  Work Experience
                </h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                      <h3 className="font-semibold text-gray-900">Frontend Developer</h3>
                      <span className="text-sm text-gray-500">Dec 2024 - Present</span>
                    </div>
                    <p className="text-primary text-sm mb-2">Freelance</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Developed responsive and interactive web pages using HTML, CSS, and JavaScript
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Built reusable and modular components using React.js
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Implemented props, state, and component-based architecture
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Fixed UI bugs and optimized performance for better user experience
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section>
                <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  Education
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                      <h3 className="font-semibold text-gray-900">Intermediate (ICS)</h3>
                      <span className="text-sm text-gray-500">2023 - 2025</span>
                    </div>
                    <p className="text-primary text-sm">College Education</p>
                  </div>
                </div>
              </section>

              {/* Courses & Certifications */}
              <section>
                <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  Courses & Certifications
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                      <h3 className="font-semibold text-gray-900">Web Development Bootcamp</h3>
                      <span className="text-sm text-gray-500">2024</span>
                    </div>
                    <p className="text-primary text-sm">Online Course</p>
                    <p className="text-gray-600 text-sm mt-1">HTML, CSS, JavaScript, React.js fundamentals</p>
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                      <h3 className="font-semibold text-gray-900">React.js Complete Guide</h3>
                      <span className="text-sm text-gray-500">2024</span>
                    </div>
                    <p className="text-primary text-sm">Online Course</p>
                    <p className="text-gray-600 text-sm mt-1">Hooks, State Management, Component Architecture</p>
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                      <h3 className="font-semibold text-gray-900">Responsive Web Design</h3>
                      <span className="text-sm text-gray-500">2024</span>
                    </div>
                    <p className="text-primary text-sm">freeCodeCamp</p>
                    <p className="text-gray-600 text-sm mt-1">Mobile-first design, Flexbox, CSS Grid</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column - Skills */}
            <div className="space-y-8">
              {/* Tech Stack */}
              <section>
                <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  Tech Stack
                </h2>
                
                {/* Frontend */}
                <div className="mb-4">
                  <h3 className="text-primary font-semibold text-sm mb-2">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"].map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="mb-4">
                  <h3 className="text-primary font-semibold text-sm mb-2">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "GitHub", "VS Code", "Responsive Design"].map((skill) => (
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

              {/* Languages */}
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
