import React, {useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Questions } from '../components/js/Quiz';
import Pembahasan from '../components/Pembahasan';

const Nilai = () => {
  const location = useLocation();
  const { score, timeTaken,totalQuestions, correctAnswers, incorrectAnswers } = location.state;
  const [showPembahasan, setShowPembahasan] = useState(false);
  const [Nama, SetNama] = useState ("")
  const [Kata,SetKata] = useState("")
  const [Class,SetClass] = useState("")
  const [Kartu,SetKartu] = useState("")
  const [Font,SetFont] = useState("")

  function handleNilaiClick()  {
    // Tampilkan komponen raport nilai
    setShowPembahasan(false);
  };

  function handlePembahasanClick() {
    // Tampilkan pembahasan soal
    setShowPembahasan(true);
  };

  useEffect(() =>{
    if (showPembahasan == false) {
      SetNama("Nilai")
    } else if( showPembahasan == true) {
      SetNama("Pembahasan")
    }
  })

  useEffect (() =>{
    if (score == 0) {
      SetKata("Buruk Sekali");
      SetClass("font-bold text-red-700")
      SetFont("font-bold text-red-700 text-5xl")
      SetKartu("absolute bg-white border-2 border-red-700 lg:w-[30%] w-[45%] top-[83vh] md:mt-[120px] lg:top-[80vh] sm:top-[50vh] mx-auto p-2 text-center inset-1 h-[9rem]   ")
    } else if (score <= 30) {
      SetKata("Buruk")
      SetClass("font-bold text-orange-300")
      SetFont("font-bold text-orange-300 text-5xl")
      SetKartu("absolute bg-white border-2 border-orange-300 lg:w-[30%] w-[45%] top-[83vh] md:mt-[120px] lg:top-[80vh] sm:top-[50vh] mx-auto p-2 text-center inset-1 h-[9rem]   ")
    } else if (score <= 50) {
      SetKata("Cukup")
      SetClass("font-bold text-[#6527BE]")
      SetFont("font-bold text-[#6527BE] text-5xl")
      SetKartu("absolute bg-white border-2 border-[#6527BE] lg:w-[30%] w-[45%] top-[83vh] md:mt-[120px] lg:top-[80vh] sm:top-[50vh] mx-auto p-2 text-center inset-1 h-[9rem]   ")
    } else if(score <=80) {
      SetKata("Greet");
      SetClass("font-bold text-[#5A96E3]")
      SetFont("font-bold text-[#5A96E3] text-5xl")
      SetKartu("absolute bg-white border-2 border-[#5A96E3] lg:w-[30%] w-[45%] top-[83vh] md:mt-[120px] lg:top-[80vh] sm:top-[50vh] mx-auto p-2 text-center inset-1 h-[9rem]   ")
    } else if(score <= 100) {
      SetKata("Kerja Bagus")
      SetClass("font-bold text-[#429470]")
      SetFont("font-bold text-[#429470] text-5xl")
      SetKartu("absolute bg-white border-2 border-[#429470] lg:w-[30%] w-[45%] top-[83vh] md:mt-[120px] lg:top-[80vh] sm:top-[50vh] mx-auto p-2 text-center inset-1 h-[9rem]   ")
    }
  }) 

  useEffect(() => {
    // Memperbarui tampilan tombol saat nilai showPembahasan berubah
    const nilaiButton = document.getElementById('nilaiButton');
    const pembahasanButton = document.getElementById('pembahasanButton');

    if (showPembahasan) {
      nilaiButton.classList.remove('bg-[#3849b9]', 'text-white');
      pembahasanButton.classList.add('bg-[#3849b9]', 'text-white');
    } else {
      nilaiButton.classList.add('bg-[#3849b9]', 'text-white');
      pembahasanButton.classList.remove('bg-[#3849b9]', 'text-white');
    }
  }, [showPembahasan]);

  return (
    <div className='h-[800px]'>
      <div className='mt-14 lg:w-[70%] md:w-[80%] sm:h-[40vh] mx-auto bg-ungu h-[50vh] rounded-b-3xl'>
        <div className='lg:w-[50%] mx-auto pt-10'>
          <h1 className='text-center text-white font-semibold'>{Nama}</h1>
          <div className='flex bg-white lg:w-[47%] sm:w-[32%] w-[50%]  mx-auto justify-center items-center text-sm p-2 rounded-xl mt-3'>
            <button
              id='nilaiButton'
              onClick={handleNilaiClick}
              className='py-2 px-4 rounded-lg bg-[#3849b9] text-white'
            >
              Nilai
            </button>
            <button 
              id='pembahasanButton'
              onClick={handlePembahasanClick}
              className='py-2 px-4 rounded-lg'
            >
              Pembahasan
            </button>
          </div>
          <div className='py-5 text-white text-center'>
            <h1 className='text-2xl font-bold'>Kamu</h1>
            <h1>Kamu@gmail.com</h1>
          </div>
        </div>
      </div>
      {showPembahasan ? (
        // Pembahasan
        <div className='bg-white lg:w-[70%] lg:h-50vh lg:mx-auto mt-5 lg:mt-0 sm:w-[80%] sm:inset-0 sm:h-[120vh] sm:rounded-2xl sm:top-[40vh]  w-full mx-auto absolute top-[40vh]  sm:mx-auto md:w-[70%] md:mx-auto   shadow-xl'>
          {/* Kode pembahasan soal */}
          <Pembahasan/>

        </div>
      ) : (
      <div>
        <div className='bg-white mt-5  lg:w-[50%] sm:w-[65%] md:w-[50%] mx-auto absolute inset-0 top-[40vh] md:top-[47vh] sm:top-[25vh] md:h-[70vh] sm:h-[30vh] h-[50vh]  rounded-2xl shadow-xl sm:text-sm lg:text-base'>
          <h1 className='text-center p-3 text-2xl text-ungu'>Raport</h1>
          <div className='text-center p-3 text-white bg-[#b32553] w-[65%] rounded-2xl mx-auto mb-4'><p>Waktu Pengerjaan:</p> <span>{timeTaken}</span> </div>
          <hr style={{ height: '3px', backgroundColor: '#d9dbe8', border: 'none', margin: '5px auto',width:'90%',borderRadius:'30px'}}  />
          <div className='w-[80%] mx-auto mt-4 flex justify-between lg:items-center  items-start text-center pb-5'>
            <div className='w-[20%]'>
              <h1>Jumlah Soal</h1>
              <p className='bg-[#e8e8fc] text-[#6263ea] lg:py-5 mt-2 rounded-3xl w-[65%] mx-auto'>{totalQuestions}</p>
            </div>
            <div className='w-[20%]'>
            <h1>Benar</h1>
            <p className='bg-[#e8e8fc] text-[#6263ea] lg:py-5 lg:mt-2 rounded-3xl w-[65%] mx-auto mt-8 md:mt-7'>{correctAnswers}</p>
            </div>
            <div className='w-[20%]'>
            <h1>Salah</h1>
            <p className='bg-[#e8e8fc] text-[#6263ea] lg:py-5 lg:mt-2 rounded-3xl w-[65%] mx-auto mt-8 md:mt-7'>{incorrectAnswers}</p>
            </div>
          </div>
        </div>
        <div className={Kartu}>
          <h3>Total Nilai Anda: </h3>
          <hr style={{ height: '1px', backgroundColor: '#d9dbe8', border: 'none', margin: '5px auto',width:'70%',borderRadius:'30px'}}  />
          <p className={Font}>{score}</p>
          <p 
            id="Kata2"
            className={Class}>{Kata}</p>
        </div>
      </div>
        )}
    </div>
  );
};

export default Nilai;