import {Submenu} from "@/components/sidenav";

export default function NewsCards() {

    return (

        <div className="flex lg:flex-row md:flex-row sm flex-col ">
            <div className="w-full mx-5">
                <div className="card ">
                    <div className="flex  items-center">
                        <Submenu src={"https://img.icons8.com/?size=512&id=7165&format=png"}></Submenu>
                        <h1 className="text-white"> Casino</h1>
                    </div>
                    <figure className=""><img className="w-full"
                                              src="https://mediumrare.imgix.net/welcome-casino-en.jpg?&dpr=1&format=auto&auto=format&q=50&w=586"
                                              alt="Shoes"/></figure>
                    <div className=" w-full">
                        <p className="text-white my-2">Leading Online Crypto Casino</p>

                        <p className="text-sm text-gray-400 my-3">Browse our giant range of casino games as Stake offers
                            a fair and fun online gambling experience. Play Slots, Live Casino, Blackjack, Baccarat,
                            Roulette, and thousands of classic casino games right from your browser, including your
                            favourite Stake Originals.</p>
                        <div className="card-actions justify-end my-5">
                            <button className="btn btn-primary w-full btn-square">Go to casino</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mx-5">
                <div className="card ">
                    <div className="flex items-center">
                        <Submenu src={"https://img.icons8.com/?size=512&id=7165&format=png"}></Submenu>
                        <h1 className="text-white" > Casino</h1>
                    </div>
                    <figure className=""><img className="w-full"
                                              src="https://mediumrare.imgix.net/welcome-sports-en.jpg?&dpr=1&format=auto&auto=format&q=50&w=586"
                                              alt="Shoes"/></figure>
                    <div className=" w-full">
                        <p className="text-white my-2">Leading Online Crypto Casino</p>

                        <p className="text-sm text-gray-400 my-3">Bet on your favourite teams, players and leagues from
                            all around the world on our sports betting platform. Gamble on a wide range of sports
                            betting options and markets for live sports across MMA, Basketball, Soccer and more for an
                            unbeatable sports betting experience.</p>
                        <div className="card-actions justify-end my-5">
                            <button className="btn btn-primary w-full btn-square">Go to casino</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}