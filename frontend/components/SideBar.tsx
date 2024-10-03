'use client'
import buttonsData from '@/data/buttons.json';
import { useState } from 'react';
import ButtonBlock from './ButtonBlock';
import { IButton } from '@/interfaces/models/buttons.interface';

const SideBar = () => {
    const [items, setItems] = useState<IButton[]>([]);

    const handleAddItem = (newItem: IButton) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    console.log(items);

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

export default SideBar