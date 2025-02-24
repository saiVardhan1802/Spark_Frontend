import frame from "../assets/signFrame.png";
import Icon from "../components/Icon";
import Title from "../components/Title";
import { signUp } from "../services";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from 'react-hot-toast'
import "@fontsource/poppins"; // Defaults to 400 (Regular)
import "@fontsource/poppins/300.css"; // Light
import "@fontsource/poppins/500.css"; // Medium
import "@fontsource/poppins/700.css"; // Bold


export default function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false
    })
    
    const [error, setError] = useState(false);

    const handleSignUp = async (e) => {
        try {
            e.preventDefault();
            const response = await signUp({ data: formData });
            if(response.ok) {
                toast.success("Account created succesfully");
                navigate('/select-category');
            }
            else {
                toast.error("something went wrong");
            }
            
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!");
        }
    }

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
                    textAlign: 'center',
                    position: 'relative',
                    top: '10%',
                }}>Sign up to your Spark</p>

                <div style={{
                    position: 'relative',
                    top: '14%',
                    left: '30%',
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15%',
                        marginBottom: '1.8%',
                    }}>
                        <p style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: '1.2rem',
                            fontWeight: '400',
                        }}
                        >Create an account</p>
                        <p style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: '0.9375rem',
                            fontWeight: '400',
                            color: '#28A263',
                            textDecoration: 'underline',
                            cursor: 'pointer'
                        }}
                        onClick={() => navigate("/signin")}
                        >Sign in instead</p>
                    </div>
                    <form style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75vh'
                    }}>
                        <div >
                            <p style={{
                                fontFamily: 'Poppins',
                                color: '#666666'
                            }}>First Name</p>
                            <input style={{
                                width: '40%',
                                height: '4vh',
                                paddingLeft: '0.1%',
                                borderRadius: '0.3rem',
                                border: '0.1rem solid #ccc', 
                                fontSize: '1rem',
                                outline: 'none',
                            }} type="text" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})}/> 
                            {error && <p style={{
                                color: 'red',
                                fontSize: '0.75rem',
                                fontFamily: 'Poppins'
                            }}>First name required</p>}
                        </div>
                        <div>
                            <p style={{
                                fontFamily: 'Poppins',
                                color: '#666666'
                            }}>Last Name</p>
                            <input style={{
                                width: '40%',
                                height: '4vh',
                                paddingLeft: '0.1%',
                                borderRadius: '0.3rem',
                                border: '0.1rem solid #ccc', 
                                fontSize: '1rem',
                                outline: 'none',
                            }} type="text" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})}/> 
                            {error && <p style={{
                                color: 'red',
                                fontSize: '0.75rem',
                                fontFamily: 'Poppins'
                            }}>First name required</p>}
                        </div>
                        <div>
                            <p style={{
                                fontFamily: 'Poppins',
                                color: '#666666'
                            }}>Email</p>
                            <input style={{
                                width: '40%',
                                height: '4vh',
                                paddingLeft: '0.1%',
                                borderRadius: '0.3rem',
                                border: '0.1rem solid #ccc', 
                                fontSize: '1rem',
                                outline: 'none',
                            }} type="text" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/> 
                            {error && <p style={{
                                color: 'red',
                                fontSize: '0.75rem',
                                fontFamily: 'Poppins'
                            }}>First name required</p>}
                        </div>
                        <div>
                            <p style={{
                                fontFamily: 'Poppins',
                                color: '#666666'
                            }}>Password</p>
                            <input style={{
                                width: '40%',
                                height: '4vh',
                                paddingLeft: '0.1%',
                                borderRadius: '0.3rem',
                                border: '0.1rem solid #ccc', 
                                fontSize: '1rem',
                                outline: 'none',
                            }} type="password" /> 
                            {error && <p style={{
                                color: 'red',
                                fontSize: '0.75rem',
                                fontFamily: 'Poppins'
                            }}>First name required</p>}
                        </div>
                        <div>
                            <p style={{
                                fontFamily: 'Poppins',
                                color: '#666666'
                            }}>Confirm Password</p>
                            <input style={{
                                width: '40%',
                                height: '4vh',
                                paddingLeft: '0.1%',
                                borderRadius: '0.3rem',
                                border: '0.1rem solid #ccc', 
                                fontSize: '1rem',
                                outline: 'none',
                            }} type="password" value={formData.confirmPassword} onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}/>
                            {error && <p style={{
                                color: 'red',
                                fontSize: '0.75rem',
                                fontFamily: 'Poppins'
                            }}>First name required</p>}
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: 'center',
                            gap: "3%",
                            width: '30%'
                        }}>
                            <input type="checkbox" name="terms" id="terms" 
                            checked={formData.terms} onChange={(e) => setFormData({ ...formData, terms: e.target.checked })} 
                            style={{
                                color: "#525252"
                            }} />
                            <label style={{
                                marginTop: '5%',
                                fontFamily: 'Poppins',
                                fontSize: '0.8rem'
                            }} htmlFor="terms">By creating an account, I agree to our <span style={{textDecoration: 'underline'}}>terms of use</span> and <span style={{textDecoration: 'underline'}}>privacy policy</span>
                            </label>
                        </div>
                        {error && <p style={{
                                color: 'red',
                                fontSize: '0.75rem',
                                fontFamily: 'Poppins'
                            }}>First name required</p>}
                        <button type="submit" onClick={handleSignUp} style={{
                            width: '40%',
                            height: '4vh',
                            marginTop: '1.5vh',
                            paddingLeft: '0.1%',
                            borderRadius: '2rem',
                            fontSize: '1rem',
                            border: 'none',
                            fontFamily: 'Poppins',
                            backgroundColor: '#AAAAAA',
                            color: '#FFFFFF',
                        }}>Create an account</button>
                    </form>
                </div>
                <footer style={{
                    position: 'absolute',
                    bottom: '5%',
                    left: '13%',
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