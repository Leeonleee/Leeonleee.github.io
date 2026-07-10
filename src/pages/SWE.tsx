import { ExternalLink, Github } from "lucide-react";
import BackButton from "@/components/BackButton";
import SectionTitle from "@/components/SectionTitle";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

const projects = [
  {
    id: 1,
    title: "Midpoint",
    description: "Full-stack web application. Calculates an optimal midpoint between users and generates an itinerary with recommended venues, simplifying social meetups. Winner of SYNCS Hack 2024",
    tech: ["React", "Node.js", "Express.js", "Google Places API", "Gemini API"],
    year: "2024",
    links: {
      github: "https://github.com/Leeonleee/midpoint",
      // live: "#",
    },
  },
  {
    id: 2,
    title: "AI Survey Creation Platform",
    description: "Full-stack web application that generates high-quality surveys from a given research question",
    tech: ["React", "Node.js", "Express.js", "Qualtrics API", "Gemini API"],
    year: "2024",
    links: {
      github: "https://github.com/Leeonleee/survey-generation-app",
    },
  },
  {
    id: 3,
    title: "RISC-V Emulator",
    description: "Emulator for the RV32I Instruction Set Architecture (ISA), ",
    tech: ["C", "Valgrind"],
    year: "2023",
    links: {
      github: "https://github.com/Leeonleee/risc-v-emulator",
    },
  },
  {
    id: 4,
    title: "Amble",
    description: "Cross-platform mobile application.",
    tech: ["React Native", "TypeScript", "PostgreSQL"],
    year: "2025",
    links: {
      github: "https://github.com/Leeonleee/amble",
    },
  },
];

const experience = [
  {
    role: "Software Engineer",
    company: "Volans",
    period: "Jun. 2026 — Present",
    description: "Doing everything"
  },
  {
    role: "Software Engineer Intern",
    company: "Oracle",
    period: "Jan. 2026 — Apr. 2026",
    description: "Full-stack.",
  },
  {
    role: "Research Intern",
    company: "The University of Sydney",
    period: "Dec. 2024 — Feb. 2025",
    description: "Building a database management system (DBMS) using generative AI.",
  },
  {
    role: "Academic Tutor",
    company: "The University of Sydney",
    period: "Feb. 2024 — Jul. 2024",
    description: "Tutoring COMP2017: Systems Programming.",
  },
];

const sectionOrder = ["Experience", "Projects", "Contact"] as const;

const SWE = () => {
  return (
    <div className="min-h-screen bg-swe text-swe-foreground">
      <BackButton variant="light" />

      {/* Header */}
      <PageHeader
        label="SOFTWARE ENGINEERING"
        title="SWE"
        subtitle="Building things that matter. Focused on clean code, scalable architecture, and delivering value."
        className="border-swe-foreground/20"
      />

      {sectionOrder.map((section, index) => {
        const number = String(index + 1).padStart(2, "0");

        if (section === "Experience") {
          return (
            <section key={section} className="py-16 px-8 md:px-16 lg:px-24 border-b-2 border-swe-foreground/20">
              <div className="max-w-6xl mx-auto">
                <SectionTitle number={number} title="Experience" className="text-swe-foreground" />

                <div className="space-y-8">
                  {experience.map((exp, expIndex) => (
                    <div
                      key={`${exp.company}-${expIndex}`}
                      className="border-l-2 border-swe-foreground pl-6 py-2 animate-slide-in"
                      style={{ animationDelay: `${expIndex * 150}ms` }}
                    >
                      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold uppercase">{exp.role}</h3>
                        <span className="text-brutal-xs opacity-60">{exp.period}</span>
                      </div>
                      <p className="text-brutal-sm opacity-70 mb-2">{exp.company}</p>
                      <p className="text-sm opacity-80">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        if (section === "Projects") {
          return (
            <section key={section} className="py-16 px-8 md:px-16 lg:px-24 border-b-2 border-swe-foreground/20">
              <div className="max-w-6xl mx-auto">
                <SectionTitle number={number} title="Projects" className="text-swe-foreground" />

                <div className="grid md:grid-cols-2 gap-6">
                  {projects.map((project, projectIndex) => (
                    <article
                      key={project.id}
                      className="border-2 border-swe-foreground p-6 hover:bg-swe-foreground hover:text-swe group transition-colors duration-200 animate-fade-in"
                      style={{ animationDelay: `${projectIndex * 100}ms` }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold uppercase">{project.title}</h3>
                        <span className="text-brutal-xs opacity-60">{project.year}</span>
                      </div>

                      <p className="text-sm opacity-80 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-brutal-xs px-2 py-1 border border-current opacity-70"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-brutal-xs hover:opacity-60 transition-opacity"
                          >
                            <Github className="w-4 h-4" />
                            <span>Code</span>
                          </a>
                        )}
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            className="flex items-center gap-2 text-brutal-xs hover:opacity-60 transition-opacity"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live</span>
                          </a>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        return (
          <section key={section} className="py-16 px-8 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">
              <SectionTitle number={number} title="Contact" className="text-swe-foreground" />

              <div className="flex flex-wrap gap-8">
                <a
                  href="mailto:contact@leonlee.io"
                  className="text-brutal-sm brutalist-link"
                >
                  Email
                </a>
                <a
                  href="https://github.com/Leeonleee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brutal-sm brutalist-link"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/leonlee1219"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brutal-sm brutalist-link"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-brutal-sm brutalist-link"
                >
                  Resume
                </a>
              </div>
            </div>
          </section>
        );
      })}

      {/* Footer */}
      <PageFooter className="border-swe-foreground/20" />
    </div>
  );
};

export default SWE;
