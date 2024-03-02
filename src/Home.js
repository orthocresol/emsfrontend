import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Home () {
    const navigate = useNavigate()


    useEffect(() => {
        document.title = "Homepage"
    })
    return <>
            <h1> Hello Everyone </h1>
            <button className="button" onClick={() => navigate('/userlogin')}>Go to the Login Page</button>
        </>
}