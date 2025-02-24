import frame from "../assets/signFrame.png";
import Icon from "../components/Icon";
import Title from "../components/Title";
import styles from "../styles/Category.module.css";
import { signUp } from "../services";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

export default function Category() {
    const [userName, setUserName] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const categories = ["🏢 \u00A0\u00A0Business", 
        "🎨 \u00A0\u00A0Creative", 
        '📚 \u00A0\u00A0Education',
        "🎶 \u00A0\u00A0Entertainment",
        "👗 \u00A0\u00A0Fashion & Beauty",
        "🍕 \u00A0\u00A0Food & Beverage",
        "⚖️ \u00A0\u00A0Government & Politics",
        "🍎 \u00A0\u00A0Health & Wellness",
        "💗 \u00A0\u00A0Non-Profit",
        "💗 \u00A0\u00A0Other",
        "🖥 \u00A0\u00A0Tech",
        "✈️ \u00A0\u00A0Travel & Tourism",
    ]

    const handleContinue = async (e) => {
        try {
            e.preventDefault();
            if(!userName) {
                toast.error("Please enter your username");
            }
            else if(!selectedCategory) {
                toast.error("Please select a category");
            }
            const response = await signUp({ data: userName });
            if(response.ok) {
                toast.success("Account created successfully");
                navigate('/links');
            }
            else {
                toast.error("something went wrong")
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!");
        }
    }
    return(
        <div className={styles.parent} style={{
            display: 'flex',
            width: '100vw',
            height: '100vh'
        }}>
            <div style={{
                width: '63vw',
                height: '100vh'
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

                <div className={styles.container}>
                    <p className={styles.yourself}>Tell us about yourself</p>
                    <p className={styles.caption}>For a personalized Spark experience</p>
                    <form className={styles.form}>
                        <input className={styles.input} placeholder="Tell us your username" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                    
                        <p>Select one category that best describes your Linktree:</p>
                        <div className={styles.categoryBox}>
                            {categories.map((cateogry) => (
                                <div className={styles.category}
                                    key={cateogry}
                                    onClick={() => setSelectedCategory(cateogry)}
                                    style={{
                                        border: selectedCategory === cateogry ? '0.1rem solid #252523' : '0.1rem solid #E0E2D9',
                                        background: selectedCategory === cateogry ? '#28A263' : 'inherit',
                                        color: selectedCategory === cateogry ? '#ECECEC' : 'black'
                                    }}
                                >{cateogry}</div>
                            ))}
                        </div>
                        <button className={styles.button} type="submit" onClick={handleContinue}>Continue</button>
                    </form>
                </div>
            </div>
            <img style={{
                width: '37vw',
                height: '100vh',
            }} src={frame} />
        </div>
    )
}