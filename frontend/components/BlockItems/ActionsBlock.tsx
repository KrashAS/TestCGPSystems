import { FC } from 'react';
import ActionButton from '../UI/buttons/ActionButton';
import IconArrowDown from '../icons/IconArrowDown';
import IconArrowUp from '../icons/IconArrowUp';
import IconCopy from '../icons/IconCopy';
import IconTrash from '../icons/IconTrash';

interface ActionsBlockProps {
    isActive: boolean;
}

const ActionsBlock: FC<ActionsBlockProps> = ({ isActive }) => {
    const onUpClick = () => { console.log('Move Up'); };
    const onDownClick = () => { console.log('Move Down'); };
    const onCopyClick = () => { console.log('Copy'); };
    const onDeleteClick = () => { console.log('Delete'); };

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

export default ActionsBlock