import styles from "../styles/components/SectionSelector.module.css"

export default function SectionSelector(props) {
    return (
        <div style={{...props.style}} className={styles.addBar}>
            <div className={props.selAddLink ? styles.selected : styles.notSelected}
                onClick={() => props.setSelAddLink(true)}>
                <img src={props.selAddLink ? props.whiteShop : props.darkShop} />
                <p>Add Link</p>
            </div>
            <div className={props.selAddLink ? styles.notSelected : styles.selected}
                onClick={() => props.setSelAddLink(false)}>
                <img src={props.selAddLink ? props.darkShop : props.whiteShop} />
                <p>Add Shop</p>
            </div>
        </div>
    )
}

/* 
    <div className={styles.addBar}>
                                <div className={selAddLink ? styles.selected : styles.notSelected}
                                    onClick={() => setSelAddLink(true)}>
                                    <img src={selAddLink ? whiteShop : darkShop} />
                                    <p>Add Link</p>
                                </div>
                                <div className={selAddLink ? styles.notSelected : styles.selected}
                                    onClick={() => setSelAddLink(false)}>
                                    <img src={selAddLink ? darkShop : whiteShop} />
                                    <p>Add Shop</p>
                                </div>
                            </div>
*/