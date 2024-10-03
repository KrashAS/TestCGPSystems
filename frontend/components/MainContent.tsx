import BlockItems from "./BlockItems"

const MainContent = () => {
    return (
        <main className="flex-1 grid grid-cols-[1fr_632px]">
            <div
                className="bg-[#F5F5FC] py-[25px] px-[30px] overflow-y-auto"
                style={{ maxHeight: "calc(100vh - 70px)" }}>
                <BlockItems />
            </div>
            <div className="p-4">Content Right</div>
        </main>
    )
}

export default MainContent