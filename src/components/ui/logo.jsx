import { FaMountainSun } from "react-icons/fa6";

export default function Logo() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'var(--primary)', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'var(--secondary)', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <FaMountainSun fill="url(#gradient1)" />
        </svg>
    )
}