import NavBar from "../components/NavBar";
import linksIcon from "../assets/links_green.png";
import appearanceIcon from "../assets/appearance_gray.png";
import analyticsIcon from "../assets/analytics_gray.png";
import settingsIcon from "../assets/setting_gray.png";
import shareIcon from "../assets/share_icon.png";
import styles from "../styles/Links.module.css";
import { useState } from "react";
import darkSpark from "../assets/dark_spark.png";
import whiteShop from "../assets/white_shop.png"
import darkShop from "../assets/dark_shop.png"
import Profile from "../components/Profile";
import LinkContainer from "../components/LinkContainer";
import SectionSelector from "../components/SectionSelector";
import MobileView from "../components/MobileView";
import EnterUrlField from "../components/EnterUrlField";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { getUser, updateUser } from "../services";

export default function Links() {
    const [links, setLinks] = useState([
        { title: "Instagram Latest Video", url: "https://www.instagram.com/" },
        { title: "YouTube", url: "https://www.youtube.com" },
        { title: "YouTube", url: "https://www.youtube.com" },
        { title: "Instagram", url: "https://www.instagram.com/" },
        { title: "YouTube", url: "https://www.youtube.com" },
        { title: "YouTube", url: "https://www.youtube.com" },
    ]);
    const [selectedLink, setSelectedLink] = useState(true);
    const [selAddLink, setSelAddLink] = useState(true);
    const [selModalLink, setSelModalLink] = useState(true);
    const [selectedModal, setSelectedModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalUrl, setModalUrl] = useState("");

    const [formData, setFormData] = useState({
        image: darkSpark,
        profileTitle: "",
        bio: "",
    });

    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData));
    }, [formData]);
    
    useEffect(() => {
        localStorage.setItem("links", JSON.stringify(links));
    }, [links]);

    useEffect(() => {
            async function fetchUserData() {
                const token = localStorage.getItem("token");
                if (!token) return;
    
                try {
                    const userData = await getUser(token);
                    if (userData && userData.profileTitle) {
                        setFormData(prevState => ({ ...prevState, profileTitle: userData.profileTitle }));
                    }
                    if (userData && userData.bio) {
                        setFormData(prevState => ({ ...prevState, bio: userData.bio }));
                    }
                    if (userData && userData.profileImg) {
                        setFormData(prevState => ({ ...prevState, img : userData.profileImg }));
                    }
                    if (userData && userData.links) {
                        setLinks(userData.links);
                    }
                } catch (error) {
                    console.error("Failed to fetch user layout:", error);
                }
            }
    
            fetchUserData();
        }, []);

    async function HandleSubmit(e) {
        try {
            e.preventDefault();
            const newFormData = formData;
            const newLinks = links;

            const token = localStorage.getItem('token');
            const updates = {
                profileTitle: newFormData.profileTitle,
                bio: newFormData.bio,
                profileImg: newFormData.image,
                links: newLinks
            }

            try {
                const response = await updateUser(token, updates);
                console.log("Update successful:", response);
            } catch (error) {
                console.error("Failed to update layout:", error);
            }
            if(!formData.profileTitle) {
                toast.error("Please enter your profile title")
            }
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
    }

    return selectedModal? (
        <div className={styles.modalOverlay}>
            <div className={`${styles.modal}`}> 
                {/* ${selectedModal ? `${styles.show}` : ""} */}
                    <SectionSelector
                        selAddLink={selModalLink}
                        setSelAddLink={setSelModalLink}
                        darkShop={darkShop}
                        whiteShop={whiteShop}
                        style={{marginBottom: '5%'}}
                    />
                    <EnterUrlField
                        titleHolder="Link title"
                        UrlHolder="Link Url"
                        titleValue={modalTitle}
                        urlValue={modalUrl}
                        setModalTitle={setModalTitle}
                        setModalUrl={setModalUrl}
                        onClick={() => {
                            setLinks(prevLinks => [...prevLinks, { title: modalTitle, url: modalUrl }]);
                            setSelectedModal(!selectedModal);
                        }}                        
                    />
            </div>
        </div>    
    ):(
        
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
                <MobileView
                    formData={formData}
                    selectedLink={selectedLink}
                    setSelectedLink={setSelectedLink}
                    links={links}
                    shareIcon={shareIcon}
                    darkSpark={darkSpark}
                />
                <div className={styles.info}>
                    <form>
                    <Profile formData={formData} setFormData={setFormData} />
                    <div className={styles.addContainer}>
                        <SectionSelector
                            selAddLink={selAddLink}
                            setSelAddLink={setSelAddLink}
                            darkShop={darkShop}
                            whiteShop={whiteShop}
                        />
                        <div className={styles.addLinkSection}>
                            <button type="button" onClick={() => setSelectedModal(true)}> {console.log(selectedModal)}
                                <p className={styles.plus}>+</p> <p className={styles.textAdd}>Add</p>
                            </button>
                            <div className={styles.linksDisplay}>
                                {links && links.map((link, index) => (
                                    <LinkContainer 
                                        key={index} 
                                        linkTitle={link.title}
                                        link={link.url}
                                        />
                                ))}
                            </div>
                        </div>
                    </div>
                    <button className={styles.submitButton} type="submit" onClick={HandleSubmit}>
                        <p>Save</p>
                    </button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

{/* 
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
    */}