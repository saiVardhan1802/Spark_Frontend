import NavBar from "../components/NavBar"
import styles from "../styles/Appearance.module.css";
import linksIcon from "../assets/links_gray.png";
import appearanceIcon from "../assets/appearance_green.png";
import analyticsIcon from "../assets/analytics_gray.png";
import settingsIcon from "../assets/setting_gray.png";
import { useState } from "react";
import MobileView from "../components/MobileView";
import shareIcon from "../assets/share_icon.png";
import darkSpark from "../assets/dark_spark.png";
import { useEffect } from "react";
import { getUser, updateUser } from "../services";

export default function Appearance() {
    const [profileData, setProfileData] = useState(() => {
        const savedFormData = localStorage.getItem("formData");
        return savedFormData ? JSON.parse(savedFormData) : {}; 
    });
    
    const [links, setLinks] = useState(() => {
        const savedLinks = localStorage.getItem("links");
        return savedLinks ? JSON.parse(savedLinks) : [];  
    });

    const [selectedLink, setSelectedLink] = useState(true);
    const [layout, setLayout] = useState("carousel");

    useEffect(() => {
        async function fetchUserData() {
            const token = localStorage.getItem("token");
            if (!token) return;

            try {
                const userData = await getUser(token);
                if (userData && userData.layout) {
                    setLayout(userData.layout);
                }
            } catch (error) {
                console.error("Failed to fetch user layout:", error);
            }
        }

        fetchUserData();
    }, []);

    const handleLayoutChange = async (event) => {
        event.preventDefault(); // Prevent any default behavior if it's from a form
    
        const newLayout = layout // Ensure you get the correct value
    
        const token = localStorage.getItem("token");
        const updates = { layout: newLayout };
    
        console.log("Updating user with:", updates); // Debugging log
    
        try {
            const response = await updateUser(token, updates);
            console.log("Update successful:", response);
        } catch (error) {
            console.error("Failed to update layout:", error);
        }
    };

    return (
        <div className={styles.appearance}>
            <NavBar
                linksClass={styles.linksBorder}
                imgLinks={linksIcon}
                imgAppearance={appearanceIcon}
                imgAnalytics={analyticsIcon}
                imgSettings={settingsIcon}
                analyticsClass={styles.analyticsBorder}
                appearanceClass={styles.appearanceColor}
                sparkClass={styles.navBG}
                settingsClass={styles.navBG}
            />
            <div className={styles.main}>
                <MobileView
                formData={profileData}
                selectedLink={selectedLink}
                setSelectedLink={setSelectedLink}
                links={links}
                shareIcon={shareIcon}
                darkSpark={darkSpark}
                tree={layout}
            />
            <div className={styles.appearanceSettings}>
                <div className={styles.layoutParent}>
                    <p className={styles.layoutTitle}>
                        Layout
                    </p>
                    <div className={styles.layout}>
                        <div className={styles.stackBox}
                            onClick={() => setLayout("stack")}    
                            >
                            <div className={styles.box}
                                style={{
                                    backgroundColor: layout === "stack" ? "#F6F7F5" : "",
                                    border: layout === "stack" ? "none" : "0.1rem solid black"
                                }}
                            >
                                {[...Array(3)].map((_, index) => (
                                    <div key={index}></div>
                                ))}
                            </div>
                            <p>Stack</p>
                        </div>
                        <div className={styles.gridBox}
                            onClick={() => setLayout("grid")}
                        >
                            <div className={styles.box}
                                style={{
                                    backgroundColor: layout === "grid" ? "#F6F7F5" : "",
                                    border: layout === "grid" ? "none" : "0.1rem solid black"
                                }}
                            >
                            {[...Array(4)].map((_, index) => (
                                    <div key={index}></div>
                                ))}
                            </div>
                            <p>Grid</p>
                        </div>
                        <div className={styles.carouselBox}
                            onClick={() => setLayout("carousel")}
                        >
                            <div className={styles.box}
                                style={{
                                    backgroundColor: layout === "carousel" ? "#F6F7F5" : "",
                                    border: layout === "carousel" ? "none" : "0.1rem solid black"
                                }}
                            >
                                <div className={styles.full}></div>
                                <div className={styles.half}></div>
                            </div>
                            <p>Carousel</p>
                        </div>
                    </div>
                </div>
                <button onClick={handleLayoutChange}>
                    <p>Save</p>
                </button>
            </div>
            </div>
        </div>
    )
}