import Icon from "./Icon";
import NavBox from "./NavBox";
import Title from "./Title";
import styles from "../styles/components/Navbar.module.css";

export default function NavBar(props) {
    return (
        <div className={styles.container}>
            <div className={`${styles.spark} ${props.sparkClass}`}>
                <Icon />
                <Title style={{
                    fontSize: '2rem',
                    fontFamily: 'Poppins'
                }}/>
            </div>
            <NavBox borderClass={props.linksClass} text="Links" img={props.imgLinks}/>
            <NavBox borderClass={props.appearanceClass} text="Appearance" img={props.imgAppearance}/>
            <NavBox borderClass={props.analyticsClass} text="Analytics" img={props.imgAnalytics}/>
            <NavBox borderClass={props.settingsClass} text="Settings" img={props.imgSettings}/>
            <div className="empty">
                
            </div>
        </div>
    )
}