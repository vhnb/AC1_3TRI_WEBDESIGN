import styles from './styles.module.css'

interface LightProps {
    color: "red" | "green" | "off"
}

export default function Light({ color }: LightProps) {
    const bgColor = color === "red" ? "#ef4444" : color === "green" ? "#22c55e" : "#1f2937"

    return (
        <div style={{ backgroundColor: bgColor }} className={styles.light}></div>
    )
}
