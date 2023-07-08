import React, {useState} from "react";
import { Latihann } from "../components/js/Latihan";
import { Link } from "react-router-dom";
import "../plugin/css/Latihan.css"

const Latihan =() => {
    const [selectedCategory, setSelectedCategory] = useState('Paket-Soal');// dengan menambahkan paket-soal di usestate maka nilai di paket soal akan menjadi yang pertma kali munsul saat di render
    const [hiddenImages, setHiddenImages] = useState([]);
    
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setHiddenImages([]);
    };
    const filteredData = selectedCategory === 'all'
        ? Latihann
        : Latihann.filter(item => item.category === selectedCategory);

    const visibleImages = filteredData.filter(item => !hiddenImages.includes(item.id));

    return(
        <div>
            <div className="w-[70%] mx-auto mt-16 p-5 bg-ungu flex text-white items-center rounded-b-2xl">
                <i class="fa-solid fa-arrow-left fa-lg"></i>
                <p className="mx-auto">Latihan Kamu</p>
            </div>
            <div className="grid grid-cols-2 w-[30%] mx-auto text-sm mt-10">
                <button 
                    id="onclick"
                    onClick={() => handleCategoryChange('Paket-Soal')}
                    className={selectedCategory === '' || selectedCategory === 'Paket-Soal' ? 'activee rounded-l-lg' : 'rounded-l-lg'}>
                    Paket Soal
                </button>
                <button
                    id="onclick"
                    onClick={() => handleCategoryChange('Try-out')}
                    className={selectedCategory === 'Try-out' ? 'activee rounded-r-lg' : 'rounded-r-lg'}>
                        Try Out
                </button>
            </div>
            <div className="w-[50%] mx-auto  mt-5">
                {visibleImages.map(item => (
                <div>
                    <p className="text-center text-sm mt-2">{item.bannerNoPaket}</p>
                    <p className="text-sm text-[#6c727f] font-bold">{item.banner}</p>
                    <div key={item.id} className={item.clasname}>
                        <button className="w-full flex gap-4 items-center">
                            <div className={item.ClModule}>
                                <p>{item.no_modul}</p>
                                <p>{item.module}</p>
                            </div>
                            <div className="text-start">
                                <h1>{item.name}</h1>
                                <p>{item.massa}</p>
                            </div>
                        </button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
export default Latihan