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
        return savedFormData ? JSON.parse(savedFormData) : {};  // Default to an empty object
    });
    
    const [links, setLinks] = useState(() => {
        const savedLinks = localStorage.getItem("links");
        return savedLinks ? JSON.parse(savedLinks) : [];  // Default to an empty array
    });

    const [selectedLink, setSelectedLink] = useState(true);

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
            />
            <div className={styles.appearanceSettings}>
                <div className={styles.layoutParent}>
                    <p className={styles.layoutTitle}>
                        Layout
                    </p>
                    <div className={styles.layout}>
                        <div className={styles.stack}>
                            <div className={styles.box}>
                                {[...Array(3)].map((_, index) => (
                                    <div key={index}></div>
                                ))}
                            </div>
                            <p>Stack</p>
                        </div>
                        <div className={styles.grid}>
                            <div className={styles.box}>
                            {[...Array(4)].map((_, index) => (
                                    <div key={index}></div>
                                ))}
                            </div>
                            <p>Grid</p>
                        </div>
                        <div className={styles.carousel}>
                            <div className={styles.box}>
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