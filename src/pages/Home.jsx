import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate();

    const token = localStorage.getItem("token")
    if (token) {
        navigate("/links")
    }

    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5vh'
        }}>
            <button style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '10vw',
                height: '5vh',
            }}
                onClick={() => navigate('/signin')}
            >
                <p>Sign In</p>
            </button>
            <button style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '10vw',
                height: '5vh',
            }}
                onClick={() => navigate('/signup')}
            >
                <p>Sign Up</p>
            </button>
        </div>
    )
}