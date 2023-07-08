import PopUp from "../components/PopUp";
import { Link } from "react-router-dom";

const Home =() => {
   
    return(
        <div>
            <div className="container h-[40vh] rounded-b-3xl w-[70%] py-5 px-10 mx-auto bg-ungu mt-14">
                <p className="text-white text-2xl font-bold tracking-wide">Hi kamu</p>
                <p className="text-white"> Selamat Belajar!</p>
                <img src={require ("../plugin/img/banner.jpg")} alt="imgage" className="mt-7 rounded-2xl" />
            </div>
            <PopUp/>
            <div className="grid grid-cols-4 mt-40 gap-7 w-[50%] mx-auto ">
                <div>
                    <Link to="/skd">
                    <button  className="bg-[#4ba2e0] p-6 rounded-3xl drop-shadow-lg">
                        <i class="fa-solid fa-book-open fa-5x text-white"></i>
                    </button>
                    <p className=" uppercase mt-5 text-center">SKD</p>
                    </Link>
                </div>
                <div>
                    <button className="bg-[#f5c242] p-5 rounded-3xl">
                        <img src={ require ("../plugin/img/logo-lampu.png")} alt="skb" className="mx-auto" />
                    </button>
                    <p className=" uppercase mt-5 text-center">skb</p>
                </div>
                {/* <div>
                    <button className="bg-[#a488e2] p-5 rounded-3xl">
                        <img src={ require ("../plugin/img/logo-tps.png")} alt="tps" className="mx-auto" />
                    </button>
                    <p className=" uppercase mt-5 text-center">tps</p>
                </div>
                <div>
                    <button className="bg-[#ee7c95] p-5 rounded-3xl">
                        <img src={ require ("../plugin/img/logo-merah.png")} alt="tpa" className="mx-auto" />
                    </button>
                    <p className=" uppercase mt-5 text-center">tpa</p>
                </div>
                <div>
                    <button className="bg-[#53b78b] p-5 rounded-3xl">
                        <img src={ require ("../plugin/img/logo-psikotest.png")} alt="Psikotest" className="mx-auto" />
                    </button>
                    <p className=" uppercase mt-5 text-center">Psikotest</p>
                </div>
                <div>
                    <button className="bg-[#7bc9d5] p-5 rounded-3xl">
                        <img src={ require ("../plugin/img/logo-ssamapta.png")} alt="samapta" className="mx-auto" />
                    </button>
                    <p className=" uppercase mt-5 text-center">samapta</p>
                </div> */}
            </div>
           {/* Program kelas */}
           <div className="w-[65%] mx-auto mt-16">
                <h1 className="text-2xl font-semibold">Program kelas</h1>
                <div className="flex bg-ungu p-5 gap-5 items-center rounded-2xl text-white mt-8">
                    <div className="w-[50%]">
                        <img src={require ('../plugin/img/iconnn.jpg')} alt="gambar"className="rounded-2xl" />
                    </div>
                    <div>
                        <p className="text-white text-2xl">Gabung Program Tatap Muka Bersama Kami</p>
                        <p>Power Smart</p>
                        <button className="py-2 px-10 rounded-3xl mt-4 bg-green-400 gap-5 flex items-center">
                            <p>yuk lihat program paket komplitnya</p>
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
           </div>
           {/* mau tahu */}
            <div className="w-[65%] mx-auto mt-5 py-4">
                <h1 className="text-2xl font-semibold">Mau tahu Sekolah Kedinasan yang tepat untuk kamu?</h1>
                <p className="text-lg">ketahui sekolah kedinasan,peta persaingan tiap jurusan dan perkiraan status kesehatan sesuai data diri kamu</p>
                <img src={ require ("../plugin/img/banner-2.jpg")} alt="banner" className="mt-7 rounded-2xl pb-2" />
            </div>
        </div>
    )
}
export default Home