import styles from "../styles/components/EnterUrlField.module.css"
import ToggleSwitch from "./Toggle";
import trashIcon from "../assets/trash_icon.png";

export default function EnterUrlField(props) {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Enter URL</p>
            <div className={styles.inputField}>
                <div>
                    <input placeholder={props.titleHolder} value={props.titleValue} onChange={(e) => props.setModalTitle(e.target.value)}/>
                    <ToggleSwitch onClick={props.onClick}/>
                </div>
                <div>
                    <input placeholder={props.UrlHolder} value={props.urlValue} onChange={(e) => props.setModalUrl(e.target.value)}/>
                    <img src={trashIcon} />
                </div>
            </div>
            <hr></hr>
            <div className={styles.bottom}>
                {/*Import instagram icons, and edit icons */}
            </div>
        </div>
    )
}