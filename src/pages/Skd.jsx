import { Link } from "react-router-dom"
const SKD =() => {
    
    return(
        <div className="mt-20 w-[70%] mx-auto">
            <Link to="/" className=" absolute ms-7 mt-5 text-white">
                <i class="fa-solid fa-arrow-left fa-lg"></i>
            </Link>
           <img src={require("../plugin/img/bannnnn.jpg")} alt="gambar" className=" rounded-b-3xl "  />

            <div className="mt-10  w-[85%] mx-auto ">
                <h1>Pilihan Menu</h1>
                <div className="grid grid-cols-4 text-white mt-5">
                    <div className="">
                        <Link to="/skd/try-out-gratis">
                        <button  className="bg-green-500 p-6 rounded-3xl drop-shadow-lg">
                            <i class="fa-regular fa-circle-play fa-5x"></i>
                        </button>
                        <p className="capitalize mt-5 text-black">latihan gratis</p>
                        </Link>
                    </div>
                </div>
            </div>
        
        </div>
    )


}
export default SKD