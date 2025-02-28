import NavBar from "../components/NavBar"
import styles from "../styles/Appearance.module.css";
import linksIcon from "../assets/links_gray.png";
import appearanceIcon from "../assets/appearance_green.png";
import analyticsIcon from "../assets/analytics_gray.png";
import settingsIcon from "../assets/setting_gray.png";

export default function Appearance() {
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
            </div>
        </div>
    )
}