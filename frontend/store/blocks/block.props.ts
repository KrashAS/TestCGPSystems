import { IButtonBlock } from "@/interfaces/models/buttons.interface";

export interface IBlocksProps {
    blocks: IButtonBlock[];
    currentBlock: IButtonBlock | null;
}
