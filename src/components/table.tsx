const GetData =async() =>{
    return 0;
}



export default function Infotable  (){

    GetData();
   return(
       <div>


               <div className="  rounded-full  bg-color inline-block py-2 my-4 al ">

                   <button className="btn rounded-full btn-active bg-gray-500">Casino bets</button>
                   <button className="btn rounded-full bg-transparent">Sports bet</button>
                   <button className="btn rounded-full bg-transparent "><span className="flex items-center justify-center text-center">Race Leaderboards <div className="text-green-600">.</div></span></button>
               </div>

           <div>
               <div className="overflow-x-auto">
                   <table className="table">
                       {/* head */}
                       <thead>
                       <tr>
                           <th>Game</th>
                           <th>User</th>
                           <th>Multiplier</th>
                           <th>Payout</th>
                       </tr>
                       </thead>
                       <tbody>
                       {/* row 1 */}
                       <tr className="bg-base-200">
                           <th>black</th>
                           <td>Cy Ganderton</td>
                           <td>Quality Control Specialist</td>
                           <td>Blue</td>
                       </tr>
                       {/* row 2 */}
                       <tr>
                           <th>red</th>
                           <td>Hart Hagerty</td>
                           <td>Desktop Support Technician</td>
                           <td>Purple</td>
                       </tr>
                       {/* row 3 */}
                       <tr>
                           <th>3</th>
                           <td>Brice Swyre</td>
                           <td>Tax Accountant</td>
                           <td>Red</td>
                       </tr>
                       </tbody>
                   </table>
               </div>

           </div>

       </div>

   )

}
