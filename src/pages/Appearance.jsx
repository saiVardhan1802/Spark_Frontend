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
            </div>
            </div>
        </div>
    )
}