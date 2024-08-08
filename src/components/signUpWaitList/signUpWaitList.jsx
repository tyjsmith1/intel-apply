import SignUpWaitListForm from './signUpWaitListForm'

export default function SignUpWaitList() {
    return (
        <div className='relative px-6 pb-14 pt-20 sm:px-10 sm:pb-20 lg:px-[4.5rem]'>
            <h1 className='font-bold text-gradient text-5xl md:text-8xl pb-4 text-center'>
                Launching Fall 2024.
            </h1>
            <h2 className='my- text-center text-balance mx-auto text-3xl md:text-5xl font-semibold tracking-[-0.015em] text-gray-500'>
                Claim your spot!
            </h2>
            <div className='mt-16 w-full justify-center'>
                <SignUpWaitListForm />
            </div>
        </div>
    )
}

