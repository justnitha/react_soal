import { Link } from "react-router-dom"
const SKD =() => {
    
    return(
        <div className="mt-20 lg:w-[70%] px-10 mx-auto">
            <Link to="/" className=" absolute lg:ms-7 ms-2 lg:mt-5 mt-1 lg:text-white text-black">
                <i class="fa-solid fa-arrow-left fa-lg"></i>
            </Link>
           <img src={require("../plugin/img/bannnnn.jpg")} alt="gambar" className=" rounded-b-3xl "  />

            <div className="mt-10  w-[85%] mx-auto ">
                <h1>Pilihan Menu</h1>
                <div className="grid   lg:grid-cols-4 text-white mt-5">
                    <div>
                        <Link to="/skd/try-out-gratis">
                        <button  className="bg-green-500 p-6 rounded-3xl drop-shadow-lg">
                            <i class="fa-regular fa-circle-play fa-3x"></i>
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