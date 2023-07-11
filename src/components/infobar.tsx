import  drake from "../../public/drake.svg"
import  drakepic from "../../public/Screenshot 2023-07-11 215411.png"

import Image from "next/image";
export default  function  Infobar(){

    return(
        <div className="flex justify-between items-center bg-color my-5 px-4">
           <button className="btn bg-gray-500 text-amber-50 ">
               Learn more
           </button>

            <Image src={drake} height={250} width={250} alt={"drake"}/>
            <img src={'https://mediumrare.imgix.net/drake-banner.png?&dpr=1&format=auto&auto=format&q=50'} height={250} width={250} className="hidden sm:block"/>


</div>

    )
}