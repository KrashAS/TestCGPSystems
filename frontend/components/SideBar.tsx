'use client'
import buttonsData from '@/data/buttons.json';
import { IButton } from '@/interfaces/models/buttons.interface';
import { IBlocksProps } from '@/store/blocks/block.props';
import { connect, ConnectedProps } from 'react-redux';
import ButtonBlock from './ButtonBlock';

const SideBar = ({ blocks, setBlocks }: PropsFromRedux) => {

    const handleAddItem = (newItem: IButton) => {
        setBlocks([...blocks, newItem]);
    };

    console.log(blocks, 'sfsdfsdfdsfdsfsd');

    return (
        <aside className="w-[270px] p-[30px]">
            <div className="grid grid-cols-2 gap-[10px]">
                {buttonsData.map((data, index) => (
                    <ButtonBlock key={index} title={data.title} name={data.name} onAdd={handleAddItem} />
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
    setBlocks: (blocks: IButton[]) => ({
        type: "SET_BLOCK",
        blocks,
    }),
};

const connector = connect(mapState, mapDispatch);
export type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(SideBar);

