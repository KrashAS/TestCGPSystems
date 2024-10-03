import Image from "next/image";
import BlockItems from "./BlockItems";

const MainContent = () => {
    return (
        <main className="flex-1 grid grid-cols-[1fr_632px]">
            <div
                className="bg-[#F5F5FC] py-[25px] px-[30px] overflow-y-auto"
                style={{ maxHeight: "calc(100vh - 70px)" }}>
                <BlockItems />
            </div>
            <div className="px-[46px] py-[30px] flex flex-col items-center gap-[30px]">
                <Image
                    src="/images/main-image.png"
                    alt="main-image"
                    width={540}
                    height={230}
                />
                <h2 className="font-bold text-[22px] leading-[33px] tracking-[0.02em]">A legendary cap set that feels like new</h2>
                <p className="text-[#97AACD] font-normal text-[14px] leading-[21px] tracking-[0.02em] text-center">Prompt your customer to revisit your store by showing them the products they left
                    <br /> behind. Consider offering them a coupon code to close the deal.
                    <br /> Using the `Insert` panel on the right, drag and drop
                    <br /> the Abandoned Cart element onto the page below.</p>
                <button className="bg-[#4368E0] font-medium text-[14px] leading-[20.3px] tracking-[0.02em] text-center px-[30px] py-[10px] rounded">
                    Register now
                </button>
            </div>
        </main>
    )
}

export default MainContent