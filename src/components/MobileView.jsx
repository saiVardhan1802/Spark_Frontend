import styles from "../styles/components/MobileView.module.css"

export default function MobileView({ formData, setSelectedLink, selectedLink, links, shareIcon, darkSpark }) {
    return (
        <div className={styles.mobile}>
            <div className={styles.header}>
                <div className={styles.share}>
                    <img src={shareIcon} alt="profile share icon" />
                </div>
                <div className={styles.profileDisplay}>
                    <img src={formData.image}  />
                    <p>{formData.profileTitle}</p>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.bar}>
                    <div onClick={() => setSelectedLink(true)} className={selectedLink? styles.selected : styles.notSelected}>
                        <p>link</p>
                    </div>
                    <div onClick={() => setSelectedLink(false)} className={selectedLink? styles.notSelected : styles.selected}>
                        <p>Shop</p>
                    </div>
                </div>
                <div className={styles.tree}>
                    {links.map((link, index) => (
                        <div className={styles.treeBox} key={index}
                        onClick={() => window.open(link.url, "_blank")}
                        >
                            <img src={shareIcon} />
                            <p>{link.title}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.connect}>
                    <p>Get Connected</p>
                </div>
                <div className={styles.bottomSpark}>
                    <img src={darkSpark} />
                    <p>SPARK<sup style={{
                        fontSize: '0.3em',
                        fontWeight: '400'}}>TM</sup></p>
                    
                </div>
            </div>
        </div>
    )
}