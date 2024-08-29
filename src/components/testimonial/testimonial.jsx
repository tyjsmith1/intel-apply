import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

export default function Testimonial() {
    return (
    <motion.div 
        className="my-12 p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
    >
        <FaQuoteLeft className="text-4xl mb-4" />
        <p className="text-lg italic">
            "Hire Ground has revolutionized the way I manage my job search. It's not just a tool; it's a career companion."
        </p>
        <p className="text-right mt-2">- Sarah J., Software Engineer</p>
    </motion.div>

    )
}