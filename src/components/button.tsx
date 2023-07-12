import React, {useState} from "react";
import {ClicklRace ,ClickCasino} from "@/components/table";
export default function GroupButton({setbets}:any){
    const [activeButton, setActiveButton] = useState(null);

    const handleClick = (buttonId:any) => {
        setActiveButton(buttonId);
    };

    return(

        <div className="  rounded-full  bg-color inline-block py-2 my-4 al ">
        <button onClick={() => {
            handleClick(1);
            ClickCasino(setbets);
        }}
                className={activeButton === 1 ? "btn rounded-full btn-active bg-gray-500" : "btn rounded-full bg-transparent"}   >Casino bets</button>
            <button onClick={() => {handleClick(2) ; ClicklRace(setbets)}}
                    className={activeButton === 2 ? "btn rounded-full btn-active bg-gray-500" : "btn rounded-full bg-transparent"}   >Sports bet</button>
            <button onClick={() => handleClick(3)}
                    className={activeButton === 3 ? "btn rounded-full btn-active bg-gray-500" : "btn rounded-full bg-transparent"}   >Race Leaders</button>
    </div>
    )
}