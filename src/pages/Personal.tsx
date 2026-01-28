import { Camera, Monitor, Cpu, Keyboard } from "lucide-react";
import BackButton from "@/components/BackButton";
import SectionTitle from "@/components/SectionTitle";

const setup = [
  {
    icon: Monitor,
    category: "Display",
    items: ["MSI E16M 4k Mini-LED"],
  },
  {
    icon: Cpu,
    category: "Specs",
    items: ["Ryzen 7 9800x3d", "RTX 5070ti", "32GB RAM", "MacBook Pro 16 M1 Pro for productivity tasks"
    ],
  },
  {
    icon: Keyboard,
    category: "Peripherals",
    items: ["TGR Jane V2 | HHKB Professional Hybrid Type-S", "Zaopin Z1 Pro", "XENNS Mangird Top"],
  },
];

const techInterests = [
  {
    title: "Linux",
    description: "Arch btw. Dotfiles on Github.",
  },
  {
    title: "Mechanical Keyboards",
    description: "Old hobby, not as active recently.",
  },
];

const photoCategories = [
  { name: "Street", count: 24 },
  { name: "Architecture", count: 18 },
  { name: "Nature", count: 31 },
  { name: "Urban", count: 15 },
];

const Personal = () => {
  return (
    <div className="min-h-screen bg-personal text-personal-foreground">
      <BackButton variant="dark" />

      {/* Header */}
      <header className="pt-24 pb-16 px-8 md:px-16 lg:px-24 border-b-2 border-personal-foreground/20">
        <div className="max-w-6xl mx-auto">
          <span className="text-brutal-xs opacity-60 block mb-4">PERSONAL INTERESTS</span>
          <h1 className="text-brutal-lg mb-6">Life</h1>
          <p className="text-lg md:text-xl opacity-80 max-w-2xl font-mono">
            Things that interest me.
          </p>
        </div>
      </header>
      {/* PC Setup Section */}
      <section className="py-16 px-8 md:px-16 lg:px-24 border-b-2 border-personal-foreground/20">
        <div className="max-w-6xl mx-auto">
          <SectionTitle number="02" title="Setup" className="text-personal-foreground" />

          <div className="grid md:grid-cols-3 gap-8">
            {setup.map((category, index) => (
              <div
                key={category.category}
                className="animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="w-5 h-5" />
                  <h3 className="text-lg font-bold uppercase">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="text-sm opacity-80 pl-8 relative before:content-['—'] before:absolute before:left-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Setup visual placeholder */}
          {/* <div className="mt-12 border-2 border-personal-foreground p-8 text-center">
            <span className="text-brutal-xs opacity-60">[ SETUP PHOTO ]</span>
          </div> */}
        </div>
      </section>
      {/* Tech Interests Section */}
      <section className="py-16 px-8 md:px-16 lg:px-24 border-b-2 border-personal-foreground/20">
        <div className="max-w-6xl mx-auto">
          <SectionTitle number="01" title="Tech" className="text-personal-foreground" />

          <div className="grid md:grid-cols-2 gap-6">
            {techInterests.map((interest, index) => (
              <div
                key={interest.title}
                className="border-2 border-personal-foreground p-6 hover:bg-personal-foreground hover:text-personal group transition-colors duration-200 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold uppercase mb-3">{interest.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Photography Section */}

      {/* <section className="py-16 px-8 md:px-16 lg:px-24 border-b-2 border-personal-foreground/20">
        <div className="max-w-6xl mx-auto">
          <SectionTitle number="03" title="Photography" className="text-personal-foreground" />

          <div className="flex items-center gap-3 mb-8">
            <Camera className="w-5 h-5" />
            <p className="text-sm opacity-80">Random photos.</p>
          </div> */}

      {/* Photo categories */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {photoCategories.map((cat, index) => (
              <div
                key={cat.name}
                className="border-2 border-personal-foreground p-4 text-center hover:bg-personal-foreground hover:text-personal transition-colors duration-200 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-brutal-xs opacity-60 block mb-1">{cat.count} photos</span>
                <span className="text-lg font-bold uppercase">{cat.name}</span>
              </div>
            ))}
          </div> */}

      {/* Photo grid placeholder */}
      {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square border-2 border-personal-foreground flex items-center justify-center hover:bg-personal-foreground/5 transition-colors duration-200"
              >
                <span className="text-brutal-xs opacity-40">[ {String(i).padStart(2, '0')} ]</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="py-8 px-8 md:px-16 lg:px-24 border-t-2 border-personal-foreground/20">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-brutal-xs opacity-60">© 2026</span>
          <span className="text-brutal-xs opacity-60">Leon Lee</span>
        </div>
      </footer>
    </div>
  );
};

export default Personal;
