"use client"
import CtaBtns from '../components/cta-btns/ctaBtns';
import CareerBuilder from '../components/feature-teasers/builder/careerBuilder';
import JobHunter from '../components/feature-teasers/hunter/jobHunter';
import { FlipWordsDemo } from '../components/hero-flip/FlipWordsDemo';
import SignUpWaitList from '../components/signUpWaitList/signUpWaitList';
import Subheading from '../components/subheading/Subheading';

function LandingPage() {
    const imageHandshake = "/landingimages/handshake.jpg"

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex flex-row items-center justify-center w-full h-full mt-8">
                <div className='flex flex-col justify-between h-full'>
                    <FlipWordsDemo />
                    <Subheading />
                    <CtaBtns />
                </div>
                <img 
                    src={ imageHandshake }
                    alt="handshake"
                    className="md:w-1/3 h-auto max-w-sm rounded-lg shadow-lg mt-4 md:mt-0 md:ml-8">
                </img>
            </div>
            <SignUpWaitList />
            <div className="mx-20">
                <JobHunter />
                <CareerBuilder />
            </div>
        </div>
    );
}

export default LandingPage;