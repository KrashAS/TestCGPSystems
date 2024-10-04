import { FC, ReactNode } from 'react';

interface ActionButtonProps {
    icon: ReactNode;
    onClick: () => void;
    className?: string;
}

const ActionButton: FC<ActionButtonProps> = ({ icon, onClick, className }) => {
    return (
        <button
            className={`w-[21px] h-[21px] flex items-center justify-center rounded-sm hover:bg-[#4B97B8] transition-colors duration-300 ${className}`}
            onClick={onClick}
        >
            {icon}
        </button>
    );
};

export default ActionButton;