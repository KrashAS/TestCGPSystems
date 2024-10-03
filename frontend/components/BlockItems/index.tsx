'use client'

import { IButton } from "@/interfaces/models/buttons.interface";
import { IBlocksProps } from "@/store/blocks/block.props";
import { connect, ConnectedProps } from "react-redux";
import BlockItem from "./BlockItem";

const BlockItems = ({ blocks }: PropsFromRedux) => {
    return (
        blocks ? blocks.map((item) => <BlockItem key={item.id} item={item} />) : <></>
    )
}

const mapState = (state: { blocks: IBlocksProps }) => {
    return {
        blocks: state.blocks.blocks,
    };
};

const mapDispatch = {
    setBlocks: (blocks: IButton[]) => ({
        type: "SET_BLOCK",
        blocks,
    }),
};

const connector = connect(mapState, mapDispatch);
export type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(BlockItems);
