import { useMemo, useState } from "react";
import { Camera, Monitor, Cpu, Keyboard } from "lucide-react";
import BackButton from "@/components/BackButton";
import SectionTitle from "@/components/SectionTitle";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import MasonryImageGrid from "@/components/MasonryImageGrid";
import ImageLightbox from "@/components/ImageLightbox";


const sectionOrder = ["Setup", "Tech", "Photography", "Crochet"] as const;

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
        description: "Arch btw.",
        details: {
            blurb: "Currently experimenting with a productivity-focused workflow.",
            highlights: ["Dotfiles on GitHub"],
            photoSlots: 3,
        },
    },
    {
        title: "Mechanical Keyboards",
        description: "Old hobby, not as active recently.",
        details: {
            blurb: "Some of the keyboards that I still own and use regularly.",
            highlights: ["HHKB Professional Hybrid Type-S", "TGR Jane V2 with MX Blacks", "Wooting 60HE"],
            photoSlots: 0,
        },
    },
];

const photoCategoryOrder = ["Nature", "Architecture", "Portraits"];
const crochetCategoryOrder = ["Amigurumi", "Wearables"];

const crochetEquipment = [
    "Clover Amour hooks",
    "Cotton + acrylic yarns",
    "Stitch markers",
    "Yarn needles",
];


type PhotoMap = Record<string, { url: string; name: string }[]>;

const photoFiles = import.meta.glob("../assets/personal/photography/*/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
});

const techPhotoFiles = import.meta.glob("../assets/personal/tech/*/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
});

const crochetPhotoFiles = import.meta.glob("../assets/personal/crochet/*/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
});

const photosByCategory: PhotoMap = Object.entries(photoFiles).reduce<PhotoMap>(
    (acc, [path, mod]) => {
        const match = path.match(/..\/assets\/personal\/photography\/([^/]+)\/([^/]+)$/);
        if (!match) return acc;
        const [, category, filename] = match;
        if (!acc[category]) acc[category] = [];
        acc[category].push({ url: mod as string, name: filename });
        return acc;
    },
    {},
);

const techPhotosByTitle: PhotoMap = Object.entries(techPhotoFiles).reduce<PhotoMap>(
    (acc, [path, mod]) => {
        const match = path.match(/..\/assets\/personal\/tech\/([^/]+)\/([^/]+)$/);
        if (!match) return acc;
        const [, title, filename] = match;
        const normalizedTitle = title.replace(/_/g, " ");
        if (!acc[normalizedTitle]) acc[normalizedTitle] = [];
        acc[normalizedTitle].push({ url: mod as string, name: filename });
        return acc;
    },
    {},
);

Object.values(photosByCategory).forEach((photos) => {
    photos.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
});

const crochetPhotosByCategory: PhotoMap = Object.entries(crochetPhotoFiles).reduce<PhotoMap>(
    (acc, [path, mod]) => {
        const match = path.match(/..\/assets\/personal\/crochet\/([^/]+)\/([^/]+)$/);
        if (!match) return acc;
        const [, category, filename] = match;
        if (!acc[category]) acc[category] = [];
        acc[category].push({ url: mod as string, name: filename });
        return acc;
    },
    {},
);

Object.values(techPhotosByTitle).forEach((photos) => {
    photos.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
});

Object.values(crochetPhotosByCategory).forEach((photos) => {
    photos.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
});
const Personal = () => {
    const [activeTech, setActiveTech] = useState<string | null>(null);

    const [activeCategory, setActiveCategory] = useState("");
    const [activeCrochetCategory, setActiveCrochetCategory] = useState("");
    const [activeImage, setActiveImage] = useState<{ url: string; alt: string } | null>(null);

    const activePhotos = useMemo(
        () => photosByCategory[activeCategory] || [],
        [activeCategory],
    );

    const activeCrochetPhotos = useMemo(
        () => crochetPhotosByCategory[activeCrochetCategory] || [],
        [activeCrochetCategory],
    );

    const handleImageSelect = (item: { url: string; name: string; alt?: string }) => {
        setActiveImage({
            url: item.url,
            alt: item.alt ?? item.name,
        });
    };

    return (
        <div className="min-h-screen bg-personal text-personal-foreground">
            <BackButton variant="dark" />

            {/* Header */}
            <PageHeader
                label="PERSONAL INTERESTS"
                title="Life"
                subtitle="Things that interest me."
                className="border-personal-foreground/20"
            />
            {sectionOrder.map((section, index) => {
                const number = String(index + 1).padStart(2, "0");

                if (section === "Setup") {
                    return (
                        <section
                            key={section}
                            className="py-16 px-8 md:px-16 lg:px-24 border-b-2 border-personal-foreground/20"
                        >
                            <div className="max-w-6xl mx-auto">
                                <SectionTitle number={number} title="Setup" className="text-personal-foreground" />

                                <div className="grid md:grid-cols-3 gap-8">
                                    {setup.map((category, itemIndex) => (
                                        <div
                                            key={category.category}
                                            className="animate-slide-in"
                                            style={{ animationDelay: `${itemIndex * 100}ms` }}
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
                            </div>
                        </section>
                    );
                }

                if (section === "Tech") {
                    return (
                        <section
                            key={section}
                            className="py-16 px-8 md:px-16 lg:px-24 border-b-2 border-personal-foreground/20"
                        >
                            <div className="max-w-6xl mx-auto">
                                <SectionTitle number={number} title="Tech" className="text-personal-foreground" />

                                <div className="grid md:grid-cols-2 gap-6">
                                    {techInterests.map((interest, itemIndex) => {
                                        const isOpen = activeTech === interest.title;
                                        return (
                                            <button
                                                key={interest.title}
                                                type="button"
                                                className="border-2 border-personal-foreground p-6 text-left hover:bg-personal-foreground hover:text-personal group transition-colors duration-200 animate-fade-in"
                                                style={{ animationDelay: `${itemIndex * 100}ms` }}
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
                                                    <MasonryImageGrid
                                                        items={(techPhotosByTitle[interest.title] || []).map((photo) => ({
                                                            ...photo,
                                                            alt: `${interest.title} ${photo.name}`,
                                                        }))}
                                                        columnsClassName="columns-2 sm:columns-3 gap-3"
                                                        itemClassName="mb-3 break-inside-avoid border-2 border-personal-foreground overflow-hidden bg-personal/30 w-full text-left"
                                                        imageClassName="h-auto w-full"
                                                        onSelect={handleImageSelect}
                                                    />
                                                </div>
                                            ))}
                                    </div>
                                )}
                            </div>
                        </section>
                    );
                }

                if (section === "Crochet") {
                    return (
                        <section
                            key={section}
                            className="py-16 px-8 md:px-16 lg:px-24 border-b-2 border-personal-foreground/20"
                        >
                            <div className="max-w-6xl mx-auto">
                                <SectionTitle number={number} title="Crochet" className="text-personal-foreground" />

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div className="border-2 border-personal-foreground p-6">
                                        <h3 className="text-lg font-bold uppercase mb-3">About</h3>
                                        <p className="text-sm opacity-80 leading-relaxed">
                                            Small projects and gifts I make to unwind. Mostly cute creatures and wearables.
                                        </p>
                                    </div>
                                    <div className="border-2 border-personal-foreground p-6">
                                        <h3 className="text-lg font-bold uppercase mb-3">Equipment</h3>
                                        <ul className="space-y-2 text-sm opacity-80">
                                            {crochetEquipment.map((item) => (
                                                <li
                                                    key={item}
                                                    className="pl-6 relative before:content-['—'] before:absolute before:left-0"
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                    {crochetCategoryOrder.map((name, itemIndex) => {
                                        const isActive = name === activeCrochetCategory;
                                        const count = crochetPhotosByCategory[name]?.length ?? 0;
                                        return (
                                            <div
                                                key={name}
                                                className={`border-2 border-personal-foreground p-4 text-center transition-colors duration-200 cursor-pointer animate-fade-in ${isActive ? "bg-personal-foreground text-personal" : "hover:bg-personal-foreground hover:text-personal"}`}
                                                style={{ animationDelay: `${itemIndex * 100}ms` }}
                                                onClick={() => {
                                                    if (count === 0) return;
                                                    setActiveCrochetCategory(isActive ? "" : name);
                                                }}
                                            >
                                                <span className="text-brutal-xs opacity-60 block mb-1">
                                                    {count} {count === 1 ? "photo" : "photos"}
                                                </span>
                                                <span className="text-lg font-bold uppercase">{name}</span>
                                            </div>
                                        );
                                    })}
                                </div>

                                {activeCrochetCategory && activeCrochetPhotos.length > 0 && (
                                    <MasonryImageGrid
                                        items={activeCrochetPhotos.map((photo) => ({
                                            ...photo,
                                            alt: `${activeCrochetCategory} ${photo.name}`,
                                        }))}
                                        columnsClassName="columns-1 sm:columns-2 md:columns-3 gap-4"
                                        itemClassName="mb-4 break-inside-avoid border-2 border-personal-foreground overflow-hidden bg-personal/30 w-full text-left"
                                        imageClassName="h-auto w-full"
                                        onSelect={handleImageSelect}
                                    />
                                )}
                            </div>
                        </section>
                    );
                }

                return (
                    <section
                        key={section}
                        className="py-16 px-8 md:px-16 lg:px-24 border-b-2 border-personal-foreground/20"
                    >
                        <div className="max-w-6xl mx-auto">
                            <SectionTitle number={number} title="Photography" className="text-personal-foreground" />

                            <div className="flex items-center gap-3 mb-8">
                                <Camera className="w-5 h-5" />
                                <p className="text-sm opacity-80">Random photos.</p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                {photoCategoryOrder.map((name, itemIndex) => {
                                    const isActive = name === activeCategory;
                                    const count = photosByCategory[name]?.length ?? 0;
                                    return (
                                        <div
                                            key={name}
                                            className={`border-2 border-personal-foreground p-4 text-center transition-colors duration-200 cursor-pointer animate-fade-in ${isActive ? "bg-personal-foreground text-personal" : "hover:bg-personal-foreground hover:text-personal"}`}
                                            style={{ animationDelay: `${itemIndex * 100}ms` }}
                                            onClick={() => {
                                                if (count === 0) return;
                                                setActiveCategory(isActive ? "" : name);
                                            }}
                                        >
                                            <span className="text-brutal-xs opacity-60 block mb-1">
                                                {count} {count === 1 ? "photo" : "photos"}
                                            </span>
                                            <span className="text-lg font-bold uppercase">{name}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            {activeCategory && activePhotos.length > 0 && (
                                <MasonryImageGrid
                                    items={activePhotos.map((photo) => ({
                                        ...photo,
                                        alt: `${activeCategory} ${photo.name}`,
                                    }))}
                                    columnsClassName="columns-1 sm:columns-2 md:columns-3 gap-4"
                                    itemClassName="mb-4 break-inside-avoid border-2 border-personal-foreground overflow-hidden bg-personal/30 w-full text-left"
                                    imageClassName="h-auto w-full"
                                    onSelect={handleImageSelect}
                                />
                            )}
                        </div>
                    </section>
                );
            })}

            {/* Footer */}
            <PageFooter className="border-personal-foreground/20" />

            <ImageLightbox
                image={activeImage}
                onClose={() => setActiveImage(null)}
                overlayClassName="bg-personal/90 backdrop-blur-sm animate-fade-in"
                closeButtonClassName="border-personal-foreground hover:bg-personal-foreground hover:text-personal"
                frameClassName="border-2 border-personal-foreground bg-personal p-2"
                innerFrameClassName="border-2 border-white bg-white p-1"
                imageClassName="block max-h-[80vh] max-w-full h-auto w-auto"
                animationDurationMs={150}
            />
        </div>
    );
};

export default Personal;
