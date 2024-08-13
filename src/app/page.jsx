"use client"
import CtaBtns from '../components/cta-btns/ctaBtns';
import CareerBuilder from '../components/feature-teasers/careerBuilder';
import JobHunter from '../components/feature-teasers/jobHunter';
import { FlipWordsDemo } from '../components/hero-flip/FlipWordsDemo';
import SignUpWaitList from '../components/signUpWaitList/signUpWaitList';
import Subheading from '../components/subheading/Subheading';

function Home() {
    const imageHandshake = "/landingimages/handshake.jpg"

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full overflow-x-hidden">
            <div className="flex flex-col md:flex-row items-center justify-center w-full h-full mt-8 px-4">
                <div className='flex flex-col justify-between h-full w-full md:w-1/2'>
                    <FlipWordsDemo />
                    <img 
                        src={ imageHandshake }
                        alt="handshake"
                        className="w-full h-auto xs:max-w-xs max-w-sm rounded-lg shadow-lg mt-4 mb-8 md:hidden mx-auto">
                    </img>
                    <Subheading />
                    <div className="hidden md:block">
                        <CtaBtns />
                    </div>
                </div>
                <img 
                    src={ imageHandshake }
                    alt="handshake"
                    className="hidden md:block w-full md:w-1/3 h-auto max-w-sm rounded-lg shadow-lg mt-4 md:mt-0 md:ml-8">
                </img>
            </div>
            <div id="signup" className='w-full'>
                <SignUpWaitList />
            </div>
            <div id="features" className="w-full relative min-h-screen bg-gradient-to-b from-gray-300 via-gray-100 to-gray-100">
                <JobHunter />
            </div>
            <div className="w-full relative min-h-screen bg-gradient-to-b from-gray-300 via-gray-100 to-gray-100">
                <CareerBuilder />
            </div>
        </div>
    );
}

export default Home;