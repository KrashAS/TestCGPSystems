export default function Home() {
    return (
        <div className="flex flex-col h-screen">
            {/* Header */}
            <header className="w-full h-[70px] border-b border-[#E4E6F1] pl-[31px] flex items-center">
                <h1 className="font-medium text-[18px] leading-[27px] tracking-2percent text-text-black">
                    REACT EDITOR Test
                </h1>
            </header>

            <div className="flex flex-1">
                {/* Sidebar */}
                <aside className="w-[270px] p-[30px]">
                    Sidebar
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-4 grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-4">Content Left</div>
                    <div className="bg-gray-100 p-4">Content Right</div>
                </main>
            </div>
        </div>
    );
}
