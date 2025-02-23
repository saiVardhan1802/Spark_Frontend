import NavBar from "../components/NavBar";
import linksIcon from "../assets/links_green.png";
import appearanceIcon from "../assets/appearance_gray.png";
import analyticsIcon from "../assets/analytics_gray.png";
import settingsIcon from "../assets/setting_gray.png";
import styles from "../styles/Links.module.css";

export default function Links() {
    return (
        <div className={styles.links}>
            <NavBar
                imgLinks={linksIcon}
                imgAppearance={appearanceIcon}
                imgAnalytics={analyticsIcon}
                imgSettings={settingsIcon}
                sparkClass={styles.sparkBorder}
                appearanceClass={styles.appearanceBorder}
                linksClass={styles.linksColor}
                analyticsClass={styles.navBG}
                settingsClass={styles.navBG}
            />

            <div className={styles.main}>

            </div>
        </div>
    )
}