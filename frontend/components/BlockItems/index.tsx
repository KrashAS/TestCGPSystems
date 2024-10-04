'use client'
import { IButtonBlock } from "@/interfaces/models/buttons.interface";
import { IBlocksProps } from "@/store/blocks/block.props";
import { connect, ConnectedProps } from "react-redux";
import BlockItem from "./BlockItem";

const BlockItems = ({ blocks, currentBlock, setCurrentBlock }: PropsFromRedux) => {


    return (
        blocks ? blocks.map((item) =>
            <BlockItem
                key={item.id}
                item={item}
                currentBlock={currentBlock}
                setCurrentBlock={setCurrentBlock}
            />) : <></>
    )
}

const mapState = (state: { blocks: IBlocksProps }) => {
    const { blocks, currentBlock } = state.blocks;
    return { blocks, currentBlock };
};

const mapDispatch = {
    setBlocks: (blocks: IButtonBlock[]) => ({
        type: "SET_BLOCK",
        blocks,
    }),
    setCurrentBlock: (currentBlock: IButtonBlock) => ({
        type: "SET_CURRENT_BLOCK",
        currentBlock,
    })
};

const connector = connect(mapState, mapDispatch);
export type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(BlockItems);
