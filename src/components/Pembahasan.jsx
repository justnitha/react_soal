import "../plugin/css/Quiz.css";
import { Questions } from './js/Quiz';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";

const Pembahasan= () => {
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

    return (
      <div className='px-10 py-5 mx-auto '>
        <h1 className="text-2xl font-bold text-[#b32553] bg-[#e18da8] text-center lg:w-[30%] sm:w-[40%] py-2 rounded-2xl mb-2 mx-auto">Pembahasan</h1>
        {currentQuestion < Questions.length ? (
          <div>
            <p className='px-2 rounded-lg mt-8 bg-[#d9eae2] text-[#429470] font-bold lg:w-[13%] w-[29%] text-center capitalize'>{Questions[currentQuestion].name}</p>
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
                //   checked={
                //     option === selectedOption ||
                //     (skippedQuestions[currentQuestion] !== undefined && option === skippedQuestions[currentQuestion])
                //   }
                //   onChange={() => handleOptionSelect(option)}
                  className=' w-[2%] cursor-pointer hidden'
                />
              </div>
              </label>
            ))}
            <div className="flex gap-3 items-center mt-3">
                <p>Jawaban:</p>
                <p className="px-2 rounded-lg  bg-[#d9eae2] text-[#429470] font-bold  text-center">{Questions[currentQuestion].correctAnswer}</p>
            </div>
          <div>
  
          {/* untuk button nombor */}
          
          <hr className='mt-10 ' style={{ height: '10px', backgroundColor: '#f4f4f4', border: 'none', margin: '20px auto' }}  />
          {/* <div className='flex justify-between mt-5'>
              <div className='flex items-center gap-2'>
                <i class="fa-solid fa-circle text-[#3849b9]"></i>
                <p className='text-xs'>Sudah Terjawab</p>
              </div>
              <div className='flex items-center gap-2'>
                <i class="fa-solid fa-circle text-[#b32553]"></i>
                <p className='text-xs'>Belum Terjawab</p>
              </div>
          </div> */}
          {/* untuk nomor perpindahan soal */}
            <div className='grid sm:grid-cols-7 grid-cols-5 lg:grid-cols-10 gap-3 mt-6'>
            {Questions.map((question, index) => (
              <button
                key={question.id}
                className={question.id === Questions[currentQuestion].id ? 'bg-[#3849b9] rounded-[150px] py-[14px] sm:py-[17px] sm:text-2xl  px-[20px] text-white text-center' : ' sm:py-[17px] sm:text-2xl bg-[#3849b9] rounded-[150px] py-[14px] px-[20px] text-white text-center'}
                          
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

}
export default Pembahasan