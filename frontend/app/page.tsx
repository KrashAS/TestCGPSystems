import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import SideBar from "@/components/SideBar";

export default function Home() {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1">
                <SideBar />
                <MainContent />
            </div>
        </div>
    );
}
