import { IButton, IButtonData } from "@/interfaces/models/buttons.interface";
import Image from "next/image";
import { FC } from "react";

interface ButtonBlockProps extends IButtonData {
    onAdd: (newItem: IButton) => void;
}

const ButtonBlock: FC<ButtonBlockProps> = ({ title, name, onAdd }) => {
    const generateUniqueId = () => {
        return `${name}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    };
    let imageSrc: string | null = null;

    switch (name) {
        case "headline":
            imageSrc = "/images/headline.png";
            break;
        case "image":
            imageSrc = "/images/image.png";
            break;
        case "paragraph":
            imageSrc = "/images/paragraph.png";
            break;
        case "button":
            imageSrc = "/images/image.png";
            break;
        default:
            imageSrc = null;
    }

    const handleClick = () => {
        const newItem = {
            id: generateUniqueId(),
            title,
            name,
            src: imageSrc || "",
        };
        onAdd(newItem);
    };

    return (
        <button className="bg-[#F6F9FE] p-[10px] rounded hover:bg-[#D9E7FF] flex flex-col items-center gap-[10px]" onClick={handleClick}>
            {imageSrc && (
                <Image
                    src={imageSrc}
                    alt={title}
                    width={25}
                    height={25}
                />
            )}
            <p className="text-[12px] font-normal leading-[18px] tracking-[0.02em]">{title}</p>
        </button>

    );
};

export default ButtonBlock;