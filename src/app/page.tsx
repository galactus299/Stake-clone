import Image from 'next/image'
import NavBar from "@/components/navbar";
import Registerbox from "@/components/registerbox";
import NewsCards from "@/components/newscards";
import Paybar from "@/components/paybar";
import Infobar from "@/components/infobar";
import Infotable from "@/components/table";
import Footer from "@/components/footer";
import SideNavBar from "@/components/sidenav";

export default function Home() {
    return (
        <main className="">
            <div className="flex">
                <div className="bg-color-side text-white w-16 flex-none flex flex-col items-center hidden sm:block">
                    <SideNavBar></SideNavBar>
                </div>

                <div className="flex-grow bg-gray-100 bg-body">

                    <NavBar></NavBar>
                    <Registerbox></Registerbox>
                    <div className="mx-48 my-6 p-0 px-3vw">
                        <NewsCards></NewsCards>
                        <Infobar></Infobar>
                        <Paybar></Paybar>
                        <Infotable></Infotable>

                    </div>
                    <div className="mx-48 my-6 p-0 px-3vw">
                        <Footer></Footer>
                    </div>
                </div>
            </div>


        </main>
    )
}
