import styles from "./Toggle.module.css";

const ToggleSwitch = ({ onClick, checked, onChange, disabled }) => {
  return (
    <label onClick={onClick} className={`${styles.switch} ${disabled ? styles.disabled : ""}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={disabled ? undefined : onChange}
        disabled={disabled}
      />
      <span className={styles.slider}></span>
    </label>
  );
};

export default ToggleSwitch;