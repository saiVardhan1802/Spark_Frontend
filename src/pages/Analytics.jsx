import NavBar from "../components/NavBar"
import styles from "../styles/Analytics.module.css";
import linksIcon from "../assets/links_gray.png";
import appearanceIcon from "../assets/appearance_gray.png";
import analyticsIcon from "../assets/analytics_green.png";
import settingsIcon from "../assets/setting_gray.png";

export default function Analytics() {
    return (
        <div className={styles.analytics}>
            <NavBar
                appearanceClass={styles.linksBorder}
                imgLinks={linksIcon}
                imgAppearance={appearanceIcon}
                imgAnalytics={analyticsIcon}
                imgSettings={settingsIcon}
                settingsClass={styles.analyticsBorder}
                analyticsClass={styles.appearanceColor}
                sparkClass={styles.navBG}
                linksClass={styles.navBG}
            />
            <div className={styles.main}>
                <div className={styles.charts}>
                    <div className={styles.overview}>
                        <p>Overview</p>
                        <div className={styles.stats}>
                            <div className={styles.links}>
                                <p>Clicks on links</p>
                            </div>
                            <div className={styles.shop}>
                            <p>Clicks on shop</p>
                            </div>
                            <div className={styles.cta}>
                            <p>Clicks on cta</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}