import React from 'react'
import Header from '../Components/Header'
import { FaRegStar } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { FiBookOpen } from "react-icons/fi";
import { CiPlay1 } from "react-icons/ci";
import { LuGraduationCap } from "react-icons/lu";
import { FiTarget } from "react-icons/fi";
import { GiAchievement } from "react-icons/gi";
import { LuCrown } from "react-icons/lu";

function Home() {
  return (
    <>
    <Header/>
     {/* div 1 */}
 <div className="w-full min-h-[684px] justify-center items-center flex flex-col lg:flex-row bg-[linear-gradient(135deg,#DB0082_0%,#7B3FE4_45%,#017CBA_100%)] px-6 lg:px-0">
        <div className="w-full max-w-[584px] h-auto mx-auto lg:mx-13 lg:ms-35 mt-0 lg:mt-[-50px] mt-7">
            {/* Main para */}
            <div className="w-full h-auto">
                <p className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                  <span className="block text-white">Master Your </span>
                  <span className="text-blue-500 block">Academic Goals</span>
                  <span className="block text-white">with Expert</span>
                  <span className="block text-white">Guidence</span>
                </p>
            </div>
            {/* short para */}
            <div className="w-full h-auto mt-[16px]">
                <p className="text-white text-[18px] sm:text-[20px] leading-[30px] sm:leading-[32.5px] font-normal">
                    From school tution to competitive exam preperation,get personalized online coaching that adapts to your learning style and schedule 
                </p>
            </div>
            {/* rating div */}
            <div className="w-full h-auto mt-[32px] flex flex-wrap gap-5">
                <h4 className="flex gap-2 text-white"><span className="text-yellow-400 text-xl"><FaRegStar /></span>  4.9/5 Rating</h4>
                <h4 className="flex gap-2 text-white"><span className="text-blue-500 text-xl mt-0.5"><LuUsers /></span>50,000+ Students </h4>
                <h4 className="flex gap-2 text-white"><span className="text-amber-600 text-xl mt-0.5"><FiBookOpen /></span>500+ Courses</h4>
            </div>
            {/* button div */}
            <div className="w-full h-auto mt-[32px] flex flex-col sm:flex-row gap-4">
                <button className="w-full sm:w-[174px] h-[44px] bg-blue-500 rounded-xl text-white hover:bg-white hover:text-blue-500">Explore Courses</button>
                <button className="w-full sm:w-[183.6px] h-[44px] bg-white rounded-xl text-blue-500 flex justify-center items-center gap-2 border border-blue-500 "><span className="text-blue-500 text-xl"><CiPlay1 /></span> Watch Demo</button>
            </div>
        </div>
        {/*  */}
     <div className="w-full max-w-[584px] lg:w-[1300px] h-[300px] sm:h-[350px] mx-auto lg:mx-13 lg:mr-36 relative mt-10 lg:mt-0">

  {/* Image container */}
  <div className="w-full h-full rounded-[20px] mt-[-10px] overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
      alt="Live Classes"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Live Classes badge — OUTSIDE image */}
  <div className="absolute -top-[18px] left-4 lg:left-[-22px] bg-white px-[16px] py-[10px] rounded-[12px] flex items-center gap-[10px]
    shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
    <span className="w-[10px] h-[10px] bg-green-500 rounded-full"></span>
    <span className="text-[14px] font-medium text-gray-800">
      Live Classes
    </span>
  </div>

  {/* Success Rate badge — OUTSIDE image */}
 <div className="absolute -bottom-[-4px] sm:-bottom-[18px]  right-4 lg:right-[-24px] bg-white px-[18px] py-[14px] rounded-[14px]
shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
  <p className="text-[28px] font-bold text-blue-600 leading-none">98%</p>
  <p className="text-[14px] text-gray-600 mt-[4px]">
    Success Rate
  </p>
</div>

</div>
     </div>

     {/* div 2 */}
    <div className="w-full h-[1187px] flex bg-white justify-center">
        <div className="w-[1280px] h-[984px] bg-white mt-15">
            <div className='w-[1216px] h-[112px]  mt-3 text-center'>
                <h1 className='text-4xl font-bold text-center'>Comprehensive Learning Programs</h1>
                <p className='text-xl mt-3 text-gray-600' ><span className='block'>Choose from our wide range of courses designed to help you achieve your</span> academic and career goals </p>
            </div>

            {/* tabs div */}
            <div className="w-[1216px] h-[808px] mt-13 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* card 1 */}
                 <div className="w-[384px] h-[388px] bg-white rounded-xl shadow-md p-6">
                 <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center text-white mb-4"><span className='text-2xl'><FiBookOpen/></span></div>
                 <h3 className="font-semibold text-lg mb-2">School Tuition</h3>
                 <p className="text-sm text-gray-500 mb-4">
                   <span className='block'>Classes 4-12 covering CBSE, ICSE, and</span> State syllabus
                 </p>
                 <ul className="text-sm text-gray-600 space-y-2 mb-6 list-disc list-inside marker:text-blue-500 marker:text-xl">
                   <li>Interactive Live Classes</li>
                   <li>Doubt Clearing Sessions</li>
                   <li>Regular Assessments</li>
                 </ul>
                 <button className="border border-gray-400 px-4 py-2 rounded-lg text-sm">Explore Courses</button>
               </div>
               {/* card 2 */}
                <div className="w-[384px] h-[388px] bg-white rounded-xl shadow-md p-6">
                 <div className="w-16 h-16 bg-[#A855F7] rounded-xl flex items-center justify-center text-white mb-4"><span className='text-2xl'><LuGraduationCap /></span></div>
                 <h3 className="font-semibold text-lg mb-2">Collage Tuition</h3>
                 <p className="text-sm text-gray-500 mb-4">
                   <span className='block'>Bsc,BCom,BA,BTech and other degree </span>
                   Programs
                 </p>
                 <ul className="text-sm text-gray-600 space-y-2 mb-6 list-disc list-inside marker:text-blue-500 marker:text-xl">
                   <li>Subject Experts</li>
                   <li>Practical Learning</li>
                   <li>Project Guidence</li>
                 </ul>
                 <button className="border border-gray-400 px-4 py-2 rounded-lg text-sm">Explore Courses</button>
               </div>
               {/* card 3 */}
                <div className="w-[384px] h-[388px] bg-white rounded-xl shadow-md p-6">
                 <div className="w-16 h-16 bg-[#22C55E] rounded-xl flex items-center justify-center text-white mb-4"><span className='text-2xl'><FiTarget /></span></div>
                 <h3 className="font-semibold text-lg mb-2">Entrance Coaching</h3>
                 <p className="text-sm text-gray-500 mb-4">
                  <span className='block'> NEET,JEE,KEAM,CUET</span> Preparation
                 </p>
                 <ul className="text-sm text-gray-600 space-y-2 mb-6 list-disc list-inside marker:text-blue-500 marker:text-xl">
                   <li>Mock Tests</li>
                   <li>Previous Year Papers</li>
                   <li>Rank Prediction</li>
                 </ul>
                 <button className="border border-gray-400 px-4 py-2 rounded-lg text-sm">Explore Courses</button>
               </div>
               {/* card 4 */}
                <div className="w-[384px] h-[388px] bg-white rounded-xl shadow-md p-6">
                 <div className="w-16 h-16 bg-[#F97316] rounded-xl flex items-center justify-center text-white mb-4"><span className='text-2xl'><GiAchievement /></span></div>
                 <h3 className="font-semibold text-lg mb-2">School Tuition</h3>
                 <p className="text-sm text-gray-500 mb-4">
                   Classes 4-12 covering CBSE, ICSE, and State syllabus
                 </p>
                 <ul className="text-sm text-gray-600 space-y-2 mb-6 list-disc list-inside marker:text-blue-500 marker:text-xl">
                   <li>Interactive Live Classes</li>
                   <li>Doubt Clearing Sessions</li>
                   <li>Regular Assessments</li>
                 </ul>
                 <button className="border border-gray-400  px-4 py-2 rounded-lg text-sm">Explore Courses</button>
               </div>
               {/* card 5 */}
                <div className="w-[384px] h-[388px] bg-white rounded-xl shadow-md p-6">
                 <div className="w-16 h-16 bg-[#EF4444] rounded-xl flex items-center justify-center text-white mb-4"><span className='text-2xl'><LuCrown /></span></div>
                 <h3 className="font-semibold text-lg mb-2">School Tuition</h3>
                 <p className="text-sm text-gray-500 mb-4">
                   Classes 4-12 covering CBSE, ICSE, and State syllabus
                 </p>
                 <ul className="text-sm text-gray-600 space-y-2 mb-6 list-disc list-inside marker:text-blue-500 marker:text-xl">
                   <li>Interactive Live Classes</li>
                   <li>Doubt Clearing Sessions</li>
                   <li>Regular Assessments</li>
                 </ul>
                 <button className="border border-gray-400 px-4 py-2 rounded-lg text-sm">Explore Courses</button>
               </div>
               {/* card 6 */}
                <div className="w-[384px] h-[388px] bg-white rounded-xl shadow-md p-6">
                 <div className="w-16 h-16 bg-[#14B8A6] rounded-xl flex items-center justify-center text-white mb-4"><span className='text-2xl'><LuUsers /></span></div>
                 <h3 className="font-semibold text-lg mb-2">School Tuition</h3>
                 <p className="text-sm text-gray-500 mb-4">
                   Classes 4-12 covering CBSE, ICSE, and State syllabus
                 </p>
                 <ul className="text-sm text-gray-600 space-y-2 mb-6 list-disc list-inside marker:text-blue-500 marker:text-xl">
                   <li>Interactive Live Classes</li>
                   <li>Doubt Clearing Sessions</li>
                   <li>Regular Assessments</li>
                 </ul>
                 <button className="border border-gray-400 px-4 py-2 rounded-lg text-sm">Explore Courses</button>
               </div>
            </div>
        </div>
    </div>


    {/* div 3 */}
    <div className=""></div>
    </>
  )
}   

export default Home
