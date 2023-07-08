import React, { useState, useEffect } from "react";

const PopUp =() =>{
    const[pop,SetPop] = useState(false);
    // const [isOverflowHidden, setIsOverflowHidden] = useState(false); belum bisa

    useEffect (() => {
        const waktu = setTimeout(() => {
            SetPop(true);
            document.body.style.overflow = "hidden";
            // setIsOverflowHidden(true); belum bisa
        }, 0);
        return () => { clearTimeout(waktu);
            document.body.style.overflow = "auto";
            // setIsOverflowHidden(false); belum bisa
        }
    }, []);

    const TutupPopup = () => {
        SetPop(false);
        document.body.style.overflow = "auto";
        // setIsOverflowHidden(false); belum bisa
    };
    return(
        <div>
            {pop && (
                <div className="bg-black bg-opacity-30 absolute top-0 w-full h-screen  z-10 ">
                    <div className="bg-white lg:w-[25%] w-[50%] md:w-[30%] mx-auto mt-[40vh] rounded-2xl">
                        <div className="p-5 text-center">
                            <h1 className="font-bold">Aktifkan Notifikasi</h1>
                            <p className="text-sm mt-3">
                                Dapatkan info langsung ketika tryout dimulai, info pembayaran, dan info terbaru lainya dari kami.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 text-center">
                            <a onClick={TutupPopup} className="bg-ungu text-white rounded-bl-2xl py-2 cursor-pointer">
                                Aktifkan
                            </a>
                            <a onClick={TutupPopup} className="bg-white rounded-br-2xl py-2 cursor-pointer">
                                Lain Kali
                            </a>
                        </div>
                    </div>
                </div>
                
            )}
        </div>
    )
}
export default PopUp