'use client'
import buttonsData from "@/data/buttons.json";
import { IButtonBlock } from "@/interfaces/models/buttons.interface";
import { IBlocksProps } from "@/store/blocks/block.props";
import { connect, ConnectedProps } from "react-redux";
import ButtonBlock from "./ButtonBlock";

const SideBar = ({ blocks, setBlocks }: PropsFromRedux) => {

    const handleAddItem = (newItem: IButtonBlock) => {
        setBlocks([newItem, ...blocks]);
    };

    return (
        <aside className="w-[270px] p-[30px] border-r border-[#E4E6F1]">
            <div className="grid grid-cols-2 gap-[10px]">
                {buttonsData.map((data, index) => (
                    <ButtonBlock key={index} title={data.title} name={data.name} imageSrc={data.imageSrc} onAdd={handleAddItem} />
                ))}
            </div>
        </aside>
    )
}

const mapState = (state: { blocks: IBlocksProps }) => {
    return {
        blocks: state.blocks.blocks,
    };
};

const mapDispatch = {
    setBlocks: (blocks: IButtonBlock[]) => ({
        type: "SET_BLOCK",
        blocks,
    }),
};

const connector = connect(mapState, mapDispatch);
export type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(SideBar);

