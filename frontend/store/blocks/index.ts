import { AnyAction } from "redux";
import { IBlocksProps } from "./block.props";
import initStore from "./initStore";

const popupReducer = (state: IBlocksProps = initStore, action: AnyAction) => {
    switch (action.type) {
        case "SET_BLOCK":
            return {
                ...state,
                blocks: action.blocks,
            };
        case "SET_CURRENT_BLOCK":
            return {
                ...state,
                currentBlock: action.currentBlock,
            };
        default:
            return state;
    }
};
export default popupReducer;
