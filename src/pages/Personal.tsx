import { useMemo, useState } from "react";
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
        details: {
            blurb: "Currently experimenting with minimal window managers and a productivity-focused workflow.",
            highlights: ["Tiling WM setup", "Custom scripts", "Terminal-centric tools"],
            photoSlots: 3,
        },
    },
    {
        title: "Mechanical Keyboards",
        description: "Old hobby, not as active recently.",
        details: {
            blurb: "A mix of vintage boards and modern customs, tuned for feel and sound.",
            highlights: ["Switch testing", "Keycap sets", "Layout experiments"],
            photoSlots: 3,
        },
    },
];

const photoCategoryOrder = ["Nature", "Architecture"];

type PhotoMap = Record<string, { url: string; name: string }[]>;

const photoFiles = import.meta.glob("../assets/photography/*/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
});

const photosByCategory: PhotoMap = Object.entries(photoFiles).reduce<PhotoMap>(
    (acc, [path, mod]) => {
        const match = path.match(/..\/assets\/photography\/([^/]+)\/([^/]+)$/);
        if (!match) return acc;
        const [, category, filename] = match;
        if (!acc[category]) acc[category] = [];
        acc[category].push({ url: mod as string, name: filename });
        return acc;
    },
    {},
);

Object.values(photosByCategory).forEach((photos) => {
    photos.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
});

const Personal = () => {
    const [activeTech, setActiveTech] = useState<string | null>(null);

    const [activeCategory, setActiveCategory] = useState("");

    const activePhotos = useMemo(
        () => photosByCategory[activeCategory] || [],
        [activeCategory],
    );

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
                    <SectionTitle number="01" title="Setup" className="text-personal-foreground" />

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
                    <SectionTitle number="02" title="Tech" className="text-personal-foreground" />

                    <div className="grid md:grid-cols-2 gap-6">
                        {techInterests.map((interest, index) => {
                            const isOpen = activeTech === interest.title;
                            return (
                                <button
                                    key={interest.title}
                                    type="button"
                                    className="border-2 border-personal-foreground p-6 text-left hover:bg-personal-foreground hover:text-personal group transition-colors duration-200 animate-fade-in"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    onClick={() => setActiveTech(isOpen ? null : interest.title)}
                                    aria-expanded={isOpen}
                                >
                                    <h3 className="text-xl font-bold uppercase mb-3">{interest.title}</h3>
                                    <p className="text-sm opacity-80 leading-relaxed">{interest.description}</p>
                                </button>
                            );
                        })}
                    </div>

                    {activeTech && (
                        <div className="mt-8 border-2 border-personal-foreground p-6 animate-fade-in">
                            {techInterests
                                .filter((interest) => interest.title === activeTech)
                                .map((interest) => (
                                    <div key={interest.title} className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-lg font-bold uppercase mb-2">
                                                {interest.title} Details
                                            </h4>
                                            <p className="text-sm opacity-80 leading-relaxed mb-4">
                                                {interest.details.blurb}
                                            </p>
                                            <ul className="space-y-2 text-sm opacity-80">
                                                {interest.details.highlights.map((item) => (
                                                    <li
                                                        key={item}
                                                        className="pl-6 relative before:content-['—'] before:absolute before:left-0"
                                                    >
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="grid grid-cols-3 gap-3">
                                            {Array.from({ length: interest.details.photoSlots }).map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="aspect-square border-2 border-personal-foreground flex items-center justify-center text-brutal-xs opacity-50"
                                                >
                                                    [ PHOTO ]
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    )}
                </div>
            </section>



            {/* Photography Section */}

            <section className="py-16 px-8 md:px-16 lg:px-24 border-b-2 border-personal-foreground/20">
                <div className="max-w-6xl mx-auto">
                    <SectionTitle number="03" title="Photography" className="text-personal-foreground" />

                    <div className="flex items-center gap-3 mb-8">
                        <Camera className="w-5 h-5" />
                        <p className="text-sm opacity-80">Random photos.</p>
                    </div>

                    {/* Photo categories */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {photoCategoryOrder.map((name, index) => {
                            const isActive = name === activeCategory;
                            const count = photosByCategory[name]?.length ?? 0;
                            return (
                            <div
                                key={name}
                                className={`border-2 border-personal-foreground p-4 text-center transition-colors duration-200 cursor-pointer animate-fade-in ${isActive ? "bg-personal-foreground text-personal" : "hover:bg-personal-foreground hover:text-personal"}`}
                                style={{ animationDelay: `${index * 100}ms` }}
                                onClick={() =>
                                    setActiveCategory(isActive ? "" : name)
                                }
                            >
                                <span className="text-brutal-xs opacity-60 block mb-1">{count} photos</span>
                                <span className="text-lg font-bold uppercase">{name}</span>
                            </div>
                            );
                        })}
                    </div>

                    {/* Photo grid */}
                    {activeCategory && (
                        <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
                            {activePhotos.length === 0 ? (
                                <div className="w-full border-2 border-personal-foreground p-6 text-center text-sm opacity-70">
                                    No photos found for {activeCategory}. Add files to src/assets/photography/{activeCategory}/01-06.
                                </div>
                            ) : (
                                activePhotos.map((photo) => (
                                    <div
                                        key={photo.name}
                                        className="mb-4 break-inside-avoid border-2 border-personal-foreground overflow-hidden bg-personal/30"
                                    >
                                        <img
                                            src={photo.url}
                                            alt={`${activeCategory} ${photo.name}`}
                                            className="h-auto w-full"
                                            loading="lazy"
                                        />
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                </div>
            </section>

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
