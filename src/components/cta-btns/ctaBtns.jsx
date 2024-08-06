import ButtonWaitlist from './buttonWaitlist'

export default function CtaBtns() {
    return (
        <div className="cta-section text-center py-3 mt-8">
            <div className="cta-buttons space-x-4">
                <ButtonWaitlist />
                <a href="#learn-more" className="text-white border-2 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-100 transition-all"
                    style={{
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                        backgroundImage: "linear-gradient(to right, #3479b6, #d54bf8)",
                    }}>
                    Learn More
                </a>
            </div>
        </div>
    )
}