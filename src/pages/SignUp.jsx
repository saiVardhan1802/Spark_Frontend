import frame from "../assets/signFrame.png";
import Icon from "../components/Icon";
import Title from "../components/Title";
import { signUp } from "../services";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from 'react-hot-toast';
import styles from "../styles/signup.module.css";
import "@fontsource/poppins";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

export default function SignUp() {
    const navigate = useNavigate();

    const token = localStorage.getItem("token")
    console.log(token)
    if (token) {
        navigate("/links")
    }
    
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false
    });
    
    const [error, setError] = useState({
        firstName: false,
        email: "",
        password: [],
        confirmPassword: false,
        terms: false,
    });

    const handleSignUp = async (e) => {
        try {
            e.preventDefault();
            const newErrors = {
                firstName: !formData.firstName,
                email: validateEmail(formData.email),
                password: validatePassword(formData.password),
                confirmPassword: formData.password !== formData.confirmPassword ? "Passwords do not match" : "",
                terms: !formData.terms
            };

            setError(newErrors);

            if (error.firstName || error.email || (Array.isArray(error.password) && error.password.length > 0) || error.terms) {
                return;
            }
          
            const response = await signUp({ data: formData });
            if(response.ok) {
                const data = await response.json();
                localStorage.setItem("token", data.token);
                localStorage.setItem("userId", data._id);
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
    };

    return (
        <div className={styles.signUpContainer}>
            <div className={styles.formWrapper}>
                <div className={styles.header}>
                    <Icon />
                    <Title className={styles.title} />
                </div>

                <p className={styles.signUpText}>Sign up to your Spark</p>

                <div className={styles.formSection}>
                    <div className={styles.accountOptions}>
                        <p className={styles.createAccountText}>Create an account</p>
                        <p className={styles.signInLink} onClick={() => navigate("/signin")}>
                            Sign in instead
                        </p>
                    </div>

                    <form className={styles.form}>
                        <div className={styles.inputGroup}>
                            <p className={styles.inputLabel}>First Name</p>
                            <input className={styles.input} type="text" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})}/> 
                            {error.firstName && <p className={styles.errorText}>First name required</p>}
                        </div>

                        <div className={styles.inputGroup}>
                            <p className={styles.inputLabel}>Last Name</p>
                            <input className={styles.input} type="text" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})}/> 
                        </div>

                        <div className={styles.inputGroup}>
                            <p className={styles.inputLabel}>Email</p>
                            <input className={styles.input} type="text" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/> 
                            {error.email && <p className={styles.errorText}>{error.email}</p>}
                        </div>

                        <div className={styles.inputGroup}>
                            <p className={styles.inputLabel}>Password</p>
                            <input className={styles.input} type="password" onChange={(e) => setFormData({...formData, password: e.target.value})} /> 
                            {error.password.length > 0 && error.password.map((msg, index) => (
                                <p key={index} className={styles.errorText}>{msg}</p>
                            ))}
                        </div>

                        <div className={styles.inputGroup}>
                            <p className={styles.inputLabel}>Confirm Password</p>
                            <input className={styles.input} type="password" value={formData.confirmPassword} onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}/>
                            {error.confirmPassword && <p className={styles.errorText}>{error.confirmPassword}</p>}
                        </div>

                        <div className={styles.checkboxContainer}>
                            <input type="checkbox" name="terms" id="terms" 
                            checked={formData.terms} onChange={(e) => setFormData({ ...formData, terms: e.target.checked })} 
                            className={styles.checkbox} />
                            <label className={styles.checkboxLabel} htmlFor="terms">
                                By creating an account, I agree to our <span className={styles.underline}>terms of use</span> and <span className={styles.underline}>privacy policy</span>
                            </label>
                        </div>
                        {error.terms && <p className={styles.errorText}>Accept terms and conditions</p>}

                        <button type="submit" onClick={handleSignUp} className={styles.submitButton}>Create an account</button>
                    </form>
                </div>
                <footer className={styles.footer}>This site is protected by reCAPTCHA and the <span className={styles.underline}>Google Privacy Policy</span> and <span className={styles.underline}>Terms of Service</span> apply.</footer>
            </div>
            <img className={styles.image} src={frame} alt="Sign-up frame" />
        </div>
    );
}

function validatePassword(password) {
    if (!password) {
        return ["Password cannot be empty."]; // Handle null or undefined case
    }

    const errors = [];

    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain at least one uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
        errors.push("Password must contain at least one lowercase letter.");
    }
    if (!/\d/.test(password)) {
        errors.push("Password must contain at least one number.");
    }
    if (!/[@$!%*?&]/.test(password)) {
        errors.push("Password must contain at least one special character (@$!%*?&).");
    }

    console.log("Errors found:", errors);

    return errors.length > 0 ? errors : [];
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Invalid email";
    return null;
}

console.log(validatePassword("Hogrider@7"))