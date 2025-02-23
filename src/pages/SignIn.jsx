import frame from "../assets/signFrame.png";
import Icon from "../components/Icon";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
    const navigate = useNavigate();

    return (
        <div style={{
                    display: 'flex',
                    width: '100vw',
                    height: '100vh',
                }}>
                    <div style={{
                        width: '63vw',
                        height: '100vh',
                        backgroundColor: 'EFF0EC'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            position: 'fixed',
                            left: '2%',
                            top: '4%'
                        }}>
                            <Icon />
                            <Title style={{
                                fontSize: '1.5rem',
                            }}/>
                        </div>
        
                        <p style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: '3.2rem', 
                            fontWeight: '700',
                            float: 'left',
                            position: 'relative',
                            top: '13%',
                            left: '15%',
                        }}>Sign in to your Spark</p>
        
                        <div style={{
                            height: '60vh',
                            width: '50vh',
                            position: 'relative',
                            left: '15%',
                            top: '17%',
                        }}>
                            <form style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                width: '100%',
                                gap: '8%'
                            }}>
                                <div >
                                    <input style={{
                                        width: '150%',
                                        height: '200%',
                                        paddingLeft: '3%',
                                        borderRadius: '0.3rem',
                                        border: 'none', 
                                        fontSize: '1rem',
                                        outline: 'none',
                                        background: '#EFF0EC',
                                        fontFamily: 'Poppins'
                                    }} type="text"
                                    placeholder="Email" /> 
                                </div>
                                <div>
                                    <input style={{
                                        width: '150%',
                                        height: '200%',
                                        paddingLeft: '3%',
                                        paddingRight: '20%',
                                        borderRadius: '0.3rem',
                                        border: 'none', 
                                        fontSize: '1rem',
                                        outline: 'none',
                                        background: '#EFF0EC',
                                        fontFamily: 'Poppins'
                                    }} type="password"
                                    placeholder="Password" /> 
                                </div>
                                
                                <button style={{
                                    width: '150%',
                                    height: '9%',
                                    paddingLeft: '3%',
                                    marginTop: '10%',
                                    borderRadius: '2rem',
                                    border: 'none', 
                                    fontSize: '1rem',
                                    outline: 'none',
                                    background: '#E0E2D9',
                                    fontFamily: 'Poppins',
                                    color: '#A8AAA2',
                                }}>Log in</button>

                                <p style={{
                                    textDecoration: 'underline',
                                    fontFamily: 'Poppins',
                                    textAlign: 'center',
                                    color: '#28A263',
                                    fontSize: '0.9rem',
                                    marginLeft: '51%'
                                }}>
                                    Forgot password?
                                </p>
                                <p style={{
                                    fontFamily: 'Poppins',
                                    textAlign: 'center',
                                    fontSize: '0.8rem',
                                    marginLeft: '51%',
                                }}>
                                    Don&apos;t have an account? <span onClick={() => navigate('/signup')} style={{
                                        color: '#28A263',
                                        textDecoration: 'underline',
                                        cursor: 'pointer'
                                    }}>Sign up</span>
                                </p>
                            </form>
                        </div>
                        <footer style={{
                            position: 'absolute',
                            bottom: '5%',
                            left: '11%',
                            fontFamily: 'Inter, sans-serif'
                        }}>This site is protected by reCAPTCHA and the <span style={{textDecoration: 'underline'}}>Google Privacy Policy</span> and <span style={{textDecoration: 'underline'}}>Terms of Service</span> apply.</footer>
                    </div>
                    <img style={{
                        width: '37vw',
                        height: '100vh',
                    }} src={frame} />
                </div>
    )
}