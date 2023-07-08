import React, { useState, useEffect } from 'react';
import { Questions } from './js/Quiz';
import { useNavigate } from 'react-router-dom';
import Countdown from '../components/Timer';
import "../plugin/css/Quiz.css";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('options');
  const [score, setScore] = useState(0);
  const [skippedQuestions, setSkippedQuestions] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate(); 
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [timeTaken, setTimeTaken] = useState(6000); // State untuk menyimpan waktu pengerjaan

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setAnsweredQuestions((prevAnsweredQuestions) => {
      const updatedAnsweredQuestions = [...prevAnsweredQuestions];
      updatedAnsweredQuestions[currentQuestion] = true;
      return updatedAnsweredQuestions;
    });
  };

  const handleNextQuestion = () => {
    if (selectedOption ===Questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption('');
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleQuestionChange = (questionIndex) => {
    setCurrentQuestion(questionIndex);
    setSelectedOption('');
  };

  const handleQuestionById = (questionId) => {
    const questionIndex = Questions.findIndex((question) => question.id === questionId);
    if (questionIndex !== -1) {
      setCurrentQuestion(questionIndex);
      if (answeredQuestions[questionIndex]) {
        setSelectedOption(Questions[questionIndex].selectedAnswer); // Mengatur jawaban yang sudah dijawab sebelumnya
      } else {
        setSelectedOption('');
      }
    }
  };

  const handleSkipQuestion = () => {
    if (selectedOption === Questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    const updatedSkippedQuestions = [...skippedQuestions];
    updatedSkippedQuestions[currentQuestion] = selectedOption;
    setSkippedQuestions(updatedSkippedQuestions);
    setSelectedOption('');
    setCurrentQuestion(currentQuestion + 1);
  };

  // Callback untuk mengupdate waktu pengerjaan
  const handleTimeUpdate = (time) => {
    setTimeTaken(time);
  };
  
  const handleQuizFinish = () => {
    const totalQuestions = Questions.length;
    const percentageScore = (score / totalQuestions) * 100;
  
    const correctAnswers = score;
    const incorrectAnswers = totalQuestions - score;
  
    const currentTime = new Date();
    setEndTime(currentTime); // Menyimpan waktu saat ujian selesai
  
    const timeElapsed = Math.floor((currentTime - startTime) / 1000); // Perbedaan waktu dalam detik
  
    const hours = Math.floor(timeElapsed / 3600);
    const minutes = Math.floor((timeElapsed % 3600) / 60);
    const seconds = timeElapsed % 60;
    const formattedTimeTaken = `${hours} jam ${minutes} menit ${seconds} detik`;
  
    navigate('/skd/try-out-gratis/nilai', {
      state: {
        score: percentageScore,
        correctAnswers,
        incorrectAnswers,
        totalQuestions,
        timeTaken: formattedTimeTaken
      },
      replace: true // Gunakan replace: true jika Anda tidak ingin menyimpan riwayat navigasi sebelumnya
    });
  
    setQuizCompleted(true);
  };
  
  useEffect(() => {
    setStartTime(new Date());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeTaken((prevTimeTaken) => prevTimeTaken - 1);
    }, 1000);
  
    if (timeTaken === 0) {
      clearInterval(interval);
      handleQuizFinish();
    }
  
    return () => {
      clearInterval(interval);
    };
  }, [timeTaken]);
  
  return (
    <div className='lg:w-[70%] mx-auto mt-10'>
      <div className="mt-12 bg-ungu  mx-auto text-center p-5 pb-10 text-white rounded-b-3xl">
        <h1 className=" uppercase text-xs font-bold  tracking-wider">soal berbasis skd cat</h1>
        <h1 className="text-xs font-bold  tracking-wider text-[#f7cc74]">Try Out Gratis</h1>
        <h1 className="pt-5 pb-4 text-xs">Nama : Kamu</h1>
        <Countdown  quizCompleted={quizCompleted} onTimeUpdate={handleTimeUpdate} />
      </div>
      
      {currentQuestion < Questions.length ? (
        <div className='mt-10 px-10 lg:px-0'>
          <p className='px-2 rounded-lg  bg-[#d9eae2] text-[#429470] font-bold lg:w-[13%] w-[29%] text-center capitalize'>{Questions[currentQuestion].name}</p>
          <div className='flex gap-2 items-center tracking-wider mt-2 mb-2'>soal nomor : <p className='bg-green-500 text-white px-2 py-1 text-xs rounded-full'>{Questions[currentQuestion].id}</p> </div>
          <hr />
          <p className='mt-2'>{Questions[currentQuestion].question}</p>
          <p className='mt-3'>Opsi Jawaban</p>
          
          {Questions[currentQuestion].options.map((option, index) => (
            <label key={index}>
            <div className={`flex justify-between border cursor-pointer mt-2 border-[#c0c1f6] p-2 rounded-xl ${
                  option === selectedOption || (skippedQuestions[currentQuestion] !== undefined && option === skippedQuestions[currentQuestion])
                    ? 'bg-[#e0e0fb] text-[#3849b9]'
                    : ''
                }`}>
              <p className='text-sm'>{option}</p>
              <input
                type="radio"
                name="answer"
                value={option}
                checked={
                  option === selectedOption ||
                  (skippedQuestions[currentQuestion] !== undefined && option === skippedQuestions[currentQuestion])
                }
                onChange={() => handleOptionSelect(option)}
                className='block w-[2%] cursor-pointer'
              />
            </div>
            </label>
          ))}
        <div>

        {/* untuk button nombor */}
        <div className='flex justify-between mt-6 gap-5 lg:gap-0 text-sm text-white px-5'>
            <div>
                <button  onClick={handleQuizFinish} className='bg-[#429470] px-5 text-xs lg:text-base py-3 rounded-2xl'>Selesai Ujian</button>
            </div>
            <div>
            {/* Tombol "Selesai Ujian" hanya ditampilkan jika ini adalah pertanyaan terakhir */}
              {currentQuestion === Questions.length - 1 ? (
              <button onClick={handleQuizFinish} className='bg-pink-400 px-5 text-xs lg:text-base py-3 rounded-2xl'>Finish</button>
            ) : (
              <div className='gap-3 flex'>
                <button onClick={handleSkipQuestion} className='bg-[#3849b9] text-xs lg:text-base px-6 py-3 rounded-2xl'>Simpan & Lanjutkan</button>
                <button onClick={handleSkipQuestion} className='bg-[#f3ae3d] text-xs lg:text-base px-6 py-3 rounded-2xl'>Lewati Soal</button>
              </div>
            )
            }
            </div>
            {/* <div className='flex gap-5'>
                <button onClick={handleSkipQuestion} className='bg-[#3849b9] px-6 py-3 rounded-2xl'>Simpan & Lanjutkan</button>
            </div> */}
        </div>
        <hr className='mt-10 ' style={{ height: '10px', backgroundColor: '#f4f4f4', border: 'none', margin: '20px auto' }}  />
        <div className='flex justify-between mt-5'>
            <div className='flex items-center gap-2'>
              <i class="fa-solid fa-circle text-[#3849b9]"></i>
              <p className='text-xs'>Sudah Terjawab</p>
            </div>
            <div className='flex items-center gap-2'>
              <i class="fa-solid fa-circle text-[#b32553]"></i>
              <p className='text-xs'>Belum Terjawab</p>
            </div>
        </div>
        {/* untuk nomor perpindahan soal */}
          <div className='grid grid-cols-5 sm:grid-cols-7 md:grid-cols-8 lg:grid-cols-10 gap-3 mt-10'>
          {Questions.map((question, index) => (
            <button
              key={question.id}
              className={
                          `question-button rounded-[150px] py-[14px] sm:py-[17px] sm:text-2xl  px-[20px] text-white text-center  ${answeredQuestions[index] ? 'answered' : ''} ${
                          question.id === Questions[currentQuestion].id ? 'active' : ' '}`
                        }
              onClick={() => {
                handleQuestionById(question.id);
              }} >
              {question.id}
              </button>
            ))}
          </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Quiz;
