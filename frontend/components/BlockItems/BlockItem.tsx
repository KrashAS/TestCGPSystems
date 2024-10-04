import { IButtonBlock } from "@/interfaces/models/buttons.interface";
import Image from "next/image";
import ActionsBlock from "./ActionsBlock";

interface IBlockItemProps {
    item: IButtonBlock;
    currentBlock: IButtonBlock | null;
    setCurrentBlock: (currentBlock: IButtonBlock) => void;
}

const BlockItem = ({ item, currentBlock, setCurrentBlock }: IBlockItemProps) => {

    return (
        <div className={`relative w-full  rounded-md flex flex-col gap-[10px] items-center py-[15px] mt-[15px] hover:cursor-pointer ${currentBlock?.id === item.id ? "bg-[#D9E7FF]" : "bg-white"}`} onClick={() => setCurrentBlock(item)}>
            <ActionsBlock />
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