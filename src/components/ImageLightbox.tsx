export type LightboxImage = {
    url: string;
    alt: string;
    caption?: string[];
};

type ImageLightboxProps = {
    image: LightboxImage | null;
    onClose: () => void;
    overlayClassName?: string;
    closeButtonClassName?: string;
    frameClassName?: string;
    innerFrameClassName?: string;
    imageClassName?: string;
    captionClassName?: string;
    captionListClassName?: string;
    animationDurationMs?: number;
};

const ImageLightbox = ({
    image,
    onClose,
    overlayClassName = "",
    closeButtonClassName = "",
    frameClassName = "",
    innerFrameClassName = "",
    imageClassName = "",
    captionClassName = "",
    captionListClassName = "",
    animationDurationMs,
}: ImageLightboxProps) => {
    if (!image) return null;
    const hasCaption = Boolean(image.caption && image.caption.length > 0);

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-6 ${overlayClassName}`}
            role="dialog"
            aria-modal="true"
            onClick={onClose}
            onKeyDown={(event) => {
                if (event.key === "Escape") onClose();
            }}
            tabIndex={-1}
            style={
                animationDurationMs ? { animationDuration: `${animationDurationMs}ms` } : undefined
            }
        >
            <div className="max-w-6xl w-full" onClick={(event) => event.stopPropagation()}>
                <div className="flex justify-end mb-4">
                    <button
                        type="button"
                        className={`border-2 px-4 py-2 text-sm uppercase transition-colors duration-200 ${closeButtonClassName}`}
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
                <div
                    className={`flex ${hasCaption ? "flex-col md:flex-row gap-6 items-center md:items-start" : "justify-center"}`}
                >
                    <div className={`inline-block ${frameClassName}`}>
                        <div className={innerFrameClassName}>
                            <img
                                src={image.url}
                                alt={image.alt}
                                className={imageClassName}
                            />
                        </div>
                    </div>
                    {hasCaption && (
                        <div className={`w-full md:max-w-sm ${captionClassName}`}>
                            <ul className={`list-disc pl-5 space-y-2 text-sm ${captionListClassName}`}>
                                {image.caption?.map((item, index) => (
                                    <li key={`${item}-${index}`}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImageLightbox;
