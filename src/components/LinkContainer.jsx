import styles from "../styles/components/LinkContainer.module.css"
import dotsIcon from "../assets/dots_icon.png";
import editIcon from "../assets/edit_icon.png";
import barChartIcon from "../assets/bar_chart_icon.png";
import trashIcon from "../assets/trash_icon.png"
import Toggle from "./Toggle";

export default function LinkContainer(props) {
    return (
        <div  className={styles.container}>
            <div className={styles.dots}>
                <img src={dotsIcon} />
            </div>
            <div className={styles.middle}>
                <div className={styles.titleSection}>
                    <div>
                        <p className={styles.titleText}>{props.linkTitle}</p>
                        <img src={editIcon} />
                    </div>
                    <div>
                        <p className={styles.linkText}>{props.link}</p>
                        <img src={editIcon} />
                    </div>
                </div>
                <div className={styles.clicks}>
                    <img src={barChartIcon} />
                    <p>0 clicks</p>
                </div>
            </div>
            <div className={styles.right}>
                <Toggle disabled={true} checked={true} />
                <img src={trashIcon} />
            </div>
        </div>
    );
}