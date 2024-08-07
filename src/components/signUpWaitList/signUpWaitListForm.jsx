import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";


export default function SignUpWaitListForm() {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Email submitted: ", email)
        try {
            const response = await axios.post(loopsSoEndpoint, {
                email: email,
            }, {
                headers: {
                    "Authorization": `Bearer ${process.env.NEXT_PUBLIC_LOOPS_API_KEY}`,
                    "Content-Type": "application/json"
                }
            })
            if (response.status === 200) {
                setMessage("Thank you for signing up!");
            } else {
                setMessage("There was an issue with your signup. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting email: ", error)
            setMessage("There was an issue with your signup. Please try again.");
        }
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-row align-middle justify-center'>
            <Input
                type="email"
                className='max-w-80 p-2 border border-gray-300 rounded-md'
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <Button type="submit" className="gradient-background-button gradient-background-button:hover ml-4">
                Join
            </Button>
            {message && <p className="mt-4 text-green-500">{message}</p>}
        </form>
    )
}