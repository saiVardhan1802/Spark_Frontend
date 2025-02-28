import styles from "../styles/components/Profile.module.css";
import darkSpark from "../assets/dark_spark.png"

export default function Profile({ formData, setFormData }) {

    const handleImageUpload = (e) => {
        const imageFile = e.target.files[0];
        if(imageFile) {
            setFormData((prevFormData => ({...prevFormData, image: URL.createObjectURL(imageFile)})));
        }
    }

    const handleRemove = () => {
            setFormData((prevFormData => ({...prevFormData, image: URL.createObjectURL(darkSpark)})))
        }

    return (
        <div>
            <p className={styles.heading}>Profile</p>
            <div className={styles.profile}>
                <div className={styles.profileImg}>
                    {formData.image && <img src={formData.image} alt="Profile" />}
                    <div className={styles.imageUpload}>
                        <input 
                            type="file" 
                            accept="image/*" 
                            style={{ display: "none" }} 
                            id="imageUpload"
                            onChange={handleImageUpload} 
                        />
                        <label htmlFor="imageUpload" className={styles.pickImage}>Pick an image</label>
                        <button 
                            className={styles.removeImg} 
                            onClick={handleRemove}
                        >
                            <p>Remove</p>
                        </button>
                    </div>
                </div>
                <div className={styles.profileInfo}>
                    <p className={styles.profLabel}>Profile Title</p>
                    <input 
                        className={styles.profInput} 
                        type="text" 
                        value={formData.profileTitle} 
                        onChange={(e) => 
                            setFormData(prev => ({ ...prev, profileTitle: e.target.value }))
                        } 
                    />
                    <p className={styles.biolabel}>Bio</p>
                    <textarea 
                        className={styles.bioInput} 
                        maxLength="80"
                        value={formData.bio}
                        onChange={(e) => 
                            setFormData(prev => ({ ...prev, bio: e.target.value }))
                        } 
                    />
                </div>
            </div>
        </div>
    );
}
