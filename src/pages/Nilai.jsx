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
      SetKartu("absolute bg-white border-2 border-red-700 w-[30%] top-[80vh] left-[28rem] p-2 text-center")
    } else if (score <= 30) {
      SetKata("Buruk")
      SetClass("font-bold text-orange-300")
      SetKartu("absolute bg-white border-2 border-orange-300 w-[30%] top-[80vh] left-[28rem] p-2 text-center")
    } else if (score <= 50) {
      SetKata("Cukup")
      SetClass("font-bold text-[#6527BE]")
      SetKartu("absolute bg-white border-2 border-[#6527BE] w-[30%] top-[80vh] left-[28rem] p-2 text-center")
    } else if(score <=80) {
      SetKata("Greet");
      SetClass("font-bold text-[#5A96E3]")
      SetKartu("absolute bg-white border-2 border-[#5A96E3] w-[30%] top-[80vh] left-[28rem] p-2 text-center")
    } else if(score <= 100) {
      SetKata("Kerja Bagus")
      SetClass("font-bold text-[#429470]")
      SetKartu("absolute bg-white border-2 border-[#429470] w-[30%] top-[80vh] left-[28rem] p-2 text-center")
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
      <div className='mt-14 w-[70%] mx-auto bg-ungu h-[50vh] rounded-b-3xl'>
        <div className='w-[50%] mx-auto pt-10'>
          <h1 className='text-center text-white font-semibold'>{Nama}</h1>
          <div className='flex bg-white w-[44%] mx-auto justify-center items-center text-sm p-2 rounded-xl mt-3'>
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
        <div className='bg-white w-[70%] mx-auto absolute top-[40vh] left-[11.69rem]  shadow-xl'>
          {/* Kode pembahasan soal */}
          <Pembahasan/>

        </div>
      ) : (
      <div>
        <div className='bg-white w-[50%] mx-auto absolute top-[40vh] left-[20rem] rounded-2xl shadow-xl'>
          <h1 className='text-center p-3 text-2xl text-ungu'>Raport</h1>
          <p className='text-center py-3 text-white bg-[#b32553] w-[65%] rounded-2xl mx-auto mb-4'>Waktu Pengerjaan: {timeTaken}</p>
          <hr style={{ height: '3px', backgroundColor: '#d9dbe8', border: 'none', margin: '5px auto',width:'90%',borderRadius:'30px'}}  />
          <div className='w-[80%] mx-auto mt-4 flex justify-between items-center text-center pb-5'>
            <div className='w-[20%]'>
              <h1>Jumlah Soal</h1>
              <p className='bg-[#e8e8fc] text-[#6263ea] py-5 mt-2 rounded-3xl w-[65%] mx-auto'>{totalQuestions}</p>
            </div>
            <div className='w-[20%]'>
            <h1>Benar</h1>
            <p className='bg-[#e8e8fc] text-[#6263ea] py-5 mt-2 rounded-3xl w-[65%] mx-auto'>{correctAnswers}</p>
            </div>
            <div className='w-[20%]'>
            <h1>Salah</h1>
            <p className='bg-[#e8e8fc] text-[#6263ea] py-5 mt-2 rounded-3xl w-[65%] mx-auto '>{incorrectAnswers}</p>
            </div>
          </div>
        </div>
        <div className={Kartu}>
          <h3>Total Nilai Anda: </h3>
          <hr style={{ height: '1px', backgroundColor: '#d9dbe8', border: 'none', margin: '5px auto',width:'70%',borderRadius:'30px'}}  />
          <p className={Class}>{score}</p>
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