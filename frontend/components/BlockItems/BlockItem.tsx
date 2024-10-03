import { IButton } from '@/interfaces/models/buttons.interface';
import Image from "next/image";

interface IBlockItemProps {
    item: IButton;
}

const BlockItem = ({ item }: IBlockItemProps) => {
    let imageSrc: string | null = null;

    switch (item.name) {
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

    return (
        <div className='w-full bg-white rounded-md flex flex-col gap-[10px] items-center py-[15px] mt-[15px] hover:cursor-pointer'>
            {imageSrc && (
                <Image
                    src={imageSrc}
                    alt={item.title}
                    width={25}
                    height={25}
                />
            )}
            <p className="text-[12px] font-normal leading-[18px] tracking-[0.02em]">{item.title}</p>
        </div>
    )
}

export default BlockItem