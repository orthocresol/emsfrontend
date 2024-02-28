import { useNavigate } from "react-router-dom"

export default function Home () {
    const navigate = useNavigate()
    return <>
            <h1> Hello Everyone </h1>
            <button onClick={() => navigate('/userlogin')}>Go to the Login Page</button>
        </>
}