type MasonryItem = {
    url: string;
    name: string;
    alt?: string;
};

type MasonryImageGridProps = {
    items: MasonryItem[];
    columnsClassName?: string;
    itemClassName?: string;
    imageClassName?: string;
    onSelect?: (item: MasonryItem) => void;
};

const MasonryImageGrid = ({
    items,
    columnsClassName = "",
    itemClassName = "",
    imageClassName = "",
    onSelect,
}: MasonryImageGridProps) => {
    if (items.length === 0) return null;

    return (
        <div className={columnsClassName}>
            {items.map((item) => {
                const img = (
                    <img
                        src={item.url}
                        alt={item.alt ?? item.name}
                        className={imageClassName}
                        loading="lazy"
                    />
                );

                if (!onSelect) {
                    return (
                        <div key={item.name} className={itemClassName}>
                            {img}
                        </div>
                    );
                }

                return (
                    <button
                        type="button"
                        key={item.name}
                        className={itemClassName}
                        onClick={() => onSelect(item)}
                    >
                        {img}
                    </button>
                );
            })}
        </div>
    );
};

export default MasonryImageGrid;
