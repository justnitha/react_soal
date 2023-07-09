import "../plugin/css/NotFound.css"

const NotFound= () => {

    return(
        <div className="bg-gradient-to-r from-[#6f359c] to-[#bf44c3] h-screen">
            <div className='mx-auto absolute top-[30vh] w-full'>
                <div className='w-[90%] lg:w-[40%] sm:w-[70%] mx-auto justify-between flex text-white'>
                    <i class="fa-solid fa-spinner fa-3x rotating"></i>
                    <div className=" hidden lg:flex md:flex sm:flex">
                    <i class="fa-solid fa-spinner fa-3x fa-rotate-270 revers-rotate "></i>
                    </div>
                </div>
                <img src={require('../plugin/img/404-eror.png')} alt="" srcset="" className='mx-auto w-[60%] lg:w-[30%] sm:w-[50%] ' />
                <p className='text-center uppercase mt-4 text-white text-2xl font-semibold'>404 - page not found</p>
                <p className='text-center mx-auto lg:w-[40%] w-[80%] sm:w-[70%] text-white text-2xlfont-semibold'>The page you are lokking for might have been removed had it's name changed is temporarily unavailable</p>
                
                <div className='w-[90%] lg:w-[40%] mx-auto justify-between flex text-white lg:hidden md:hidden sm:hidden'>
                    <div className="hidden">
                        <i class="fa-solid fa-spinner fa-3x rotating"></i>
                    </div>
                    <div className="ms-auto">
                        <i class="fa-solid fa-spinner fa-3x fa-rotate-270 revers-rotate "></i>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default NotFound