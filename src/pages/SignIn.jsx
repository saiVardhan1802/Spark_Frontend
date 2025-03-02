import frame from "../assets/signFrame.png";
import Icon from "../components/Icon";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import { login } from "../services";
import styles from "../styles/signin.module.css";

export default function SignIn() {
    const navigate = useNavigate();

    const token = localStorage.getItem("token")
    console.log(token)
    if (token) {
        navigate("/links")
    }

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    async function HandleClick(e) {
        try {
            e.preventDefault();
            const response = await login({ data: formData });
            if (response.ok) {
                toast.success("Login successful")
                const data = await response.json()
                localStorage.setItem("token", data.token)
                navigate("/links")
            }
            else {
                toast.error("response not okay");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        } 
    }

    return (
        <div className={styles.signin}>
                    <div className={styles.main}>
                        <div className={styles.header}>
                            <Icon />
                            <Title className={styles.title}/>
                        </div>
        
                        <p className={styles.signInText}>Sign in to your Spark</p>
        
                        <div className={styles.formContainer}>
                        <form className={styles.form}>
                        <div className={styles.inputWrapper}>
                            <input
                                className={styles.input}
                                type="text"
                                placeholder="Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <input
                                className={styles.input}
                                type="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>

                        <button type="submit" onClick={HandleClick} className={styles.loginButton}>
                            Log in
                        </button>

                        <p className={styles.forgotPassword}>Forgot password?</p>
                        <p className={styles.signUpText}>
                            Don&apos;t have an account?{" "}
                            <span onClick={() => navigate("/signup")} className={styles.signUpLink}>
                                Sign up
                            </span>
                        </p>
                    </form>
                </div>

                <footer className={styles.footer}>
                    This site is protected by reCAPTCHA and the{" "}
                    <span className={styles.underline}>Google Privacy Policy</span> and{" "}
                    <span className={styles.underline}>Terms of Service</span> apply.
                </footer>
            </div>
            <img className={styles.image} src={frame} alt="Sign-in frame" />
        </div>
    );
}