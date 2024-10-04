import { IButtonBlock } from '@/interfaces/models/buttons.interface';
import { IBlocksProps } from '@/store/blocks/block.props';
import { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import ActionButton from '../UI/buttons/ActionButton';
import IconArrowDown from '../icons/IconArrowDown';
import IconArrowUp from '../icons/IconArrowUp';
import IconCopy from '../icons/IconCopy';
import IconTrash from '../icons/IconTrash';

interface ActionsBlockProps extends PropsFromRedux {
    isActive: boolean;
}

const ActionsBlock: FC<ActionsBlockProps> = ({ isActive, blocks, currentBlock, setBlocks, setCurrentBlock }) => {
    const onUpClick = () => { console.log('Move Up'); };

    const onDownClick = () => { console.log('Move Down'); };

    const onCopyClick = () => { console.log('Copy'); };

    const onDeleteClick = () => {
        if (currentBlock) {
            const updatedBlocks = blocks.filter(block => block.id !== currentBlock.id);
            setBlocks(updatedBlocks);
            setCurrentBlock(null);
        }
    };

    return (
        <div
            className={`absolute right-[10px] top-0 w-[111px] h-[27px] z-10 translate-y-[-100%] ${isActive ? " opacity-100" : "opacity-0"}`}
        >
            <div className="flex justify-between">
                <div className="p-[3px] flex items-center justify-between bg-[#449CF4] w-[53px] h-[27px] rounded-tl-[3px] rounded-tr-[3px]">
                    <ActionButton icon={<IconArrowDown />} onClick={onDownClick} />
                    <ActionButton icon={<IconArrowUp />} onClick={onUpClick} />
                </div>
                <div className="p-[3px] flex items-center justify-between bg-[#68C2E9] w-[53px] h-[27px] rounded-tl-[3px] rounded-tr-[3px]">
                    <ActionButton icon={<IconCopy />} onClick={onCopyClick} />
                    <ActionButton icon={<IconTrash />} onClick={onDeleteClick} />
                </div>
            </div>
        </div>
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
    setCurrentBlock: (currentBlock: IButtonBlock | null) => ({
        type: "SET_CURRENT_BLOCK",
        currentBlock,
    })
};

const connector = connect(mapState, mapDispatch);
export type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(ActionsBlock);
