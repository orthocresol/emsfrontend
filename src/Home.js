import { useNavigate } from "react-router-dom"

export default function Home () {
    const navigate = useNavigate()
    return <>
            <h1> EMS </h1>
            <button onClick={() => navigate('/login')}>Go to the Login Page</button>
        </>
}