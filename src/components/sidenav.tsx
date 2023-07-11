import casino1 from "../../public/casino1.svg"
import Image from "next/image";

export function Submenu(params: any) {
    return (
        <div className="">
            <button className="btn btn-square btn-ghost">
                <img src={params.src} height={25} width={30} alt={"navitem"}/>
            </button>
        </div>

    )
}

export default function SideNavBar() {

    return (


        <div className="flex-row p-2">
            <div className="mb-4 ">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         className="inline-block w-5 h-5 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <Submenu src={"https://img.icons8.com/?size=512&id=7165&format=png"}></Submenu>
            <Submenu src="https://img.icons8.com/?size=1x&id=W0Dx3yX712sZ&format=png"></Submenu>
            <div className="divider"></div>
            <Submenu src="https://img.icons8.com/?size=512&id=11536&format=png"></Submenu>
            <Submenu src="https://img.icons8.com/?size=512&id=11497&format=png"></Submenu>
            <Submenu src="https://img.icons8.com/?size=512&id=39178&format=png"></Submenu>
            <div className="divider"></div>
            <Submenu src="https://img.icons8.com/?size=512&id=9937&format=png"></Submenu>
            <Submenu src="https://img.icons8.com/?size=1x&id=3720&format=png"></Submenu>
            <Submenu src="https://img.icons8.com/?size=1x&id=12614&format=png"></Submenu>


        </div>

    )
}