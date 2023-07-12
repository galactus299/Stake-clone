
'use client'

import React, {useState,useEffect} from "react";
import GroupButton from "@/components/button";
import * as async_hooks from "async_hooks";



export type Bets ={
    "Game": string,
    "User": string,
    "Time": string,
    "Bet Amount": any,
    "Multiplier": string,
    "Payout": any
}





export async function getAll():Promise<Bets[]>  {
    return fetch("https://raw.githubusercontent.com/galactus299/Stake-clone/main/public/data.json").then((resp) => resp.json());
}

export async function getAllRace():Promise<Bets[]>  {
    return  fetch("https://raw.githubusercontent.com/galactus299/Stake-clone/main/public/racedata.json").then((resp) => resp.json());
}
export async function getAllbet():Promise<Bets[]>  {
    return  fetch("https://raw.githubusercontent.com/galactus299/Stake-clone/main/public/racedata.json").then((resp) => resp.json());
}

export async function ClicklRace(setbets:Function,)  {
      setbets([])
      await  getAllRace().then((data)=>{setbets(data)})
}

export async function ClickCasino(setbets:Function) {
    setbets([])
    await  getAll().then((data)=>{setbets(data)})
}
export async function ClicklBet(setbets:Function,)  {
    setbets([])
    await  getAllRace().then((data)=>{setbets(data)})
}






export default function Infotable  (){
    const [bets, setbets  ]=useState <Bets[]>([])
    useEffect(()=>{
        getAll().then((data)=>{setbets(data)})
    },[]);

    console.log(bets)

   return (
       <div>

    <GroupButton setbets={setbets}></GroupButton>


           <div>
               <div className="overflow-x-auto">
                   <table className="table">
                       {/* head */}
                       <thead>
                       <tr>
                           <th>Game</th>
                           <th>User</th>
                           <th>Time</th>
                           <th>Bet Amount</th>
                           <th>Multiplier</th>
                           <th>Payout</th>

                       </tr>
                       </thead>
                       <tbody>
                       { bets.map((p:Bets,index=0) => (


                           <tr className={`${
                               index % 2 === 0 ? "bg-base-200" : "bg-base-100" 
                           } p-4`} key={p.User}>
                               <th>{p.Game}</th>
                               <td>{p.User}</td>
                               <td>{p.Time}</td>
                               <td>{p["Bet Amount"]}</td>
                               <td>{p.Multiplier}</td>
                               <td>{p["Bet Amount"]}</td>
                               <td className={"hidden"}>{index+1}</td>



                           </tr>


                       ))}


                       </tbody>
                   </table>
               </div>

           </div>

       </div>

   )

}
