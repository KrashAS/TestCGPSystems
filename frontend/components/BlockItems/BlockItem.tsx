import { IButton } from "@/interfaces/models/buttons.interface";
import Image from "next/image";

interface IBlockItemProps {
    item: IButton;
}

const BlockItem = ({ item }: IBlockItemProps) => {

    return (
        <div className="w-full bg-white rounded-md flex flex-col gap-[10px] items-center py-[15px] mt-[15px] hover:cursor-pointer">
            {item.imageSrc && (
                <Image
                    src={item.imageSrc}
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