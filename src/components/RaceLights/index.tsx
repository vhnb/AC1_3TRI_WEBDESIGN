import { useState, useEffect } from "react";
import Light from "../Light";
import styles from './styles.module.css'

export default function LightsSequence() {
    const totalLights = 5
    const [activeIndex, setActiveIndex] = useState(-1)
    const [phase, setPhase] = useState<"stopped" | "running" | "go">("stopped")

    useEffect(() => {
        let interval: NodeJS.Timeout

        if (phase === "running") {
            interval = setInterval(() => {
                setActiveIndex((prev) => {
                    if (prev + 1 < totalLights) {
                        return prev + 1
                    } else {
                        setPhase("go")
                        clearInterval(interval)
                        setTimeout(() => {
                            setActiveIndex(-1)
                            setPhase("stopped")
                        }, 1000)
                        return prev
                    }
                })
            }, 500)
        }

        return () => clearInterval(interval)
    }, [phase])

    return (
        <div className={styles.main}>
            <div className={styles.content}>
                {Array.from({ length: totalLights }).map((_, i) => (
                    <Light
                        key={i}
                        color={phase === "go" ? "green" : i <= activeIndex ? "red" : "off"}
                    />
                ))}
            </div>
            <button
                className={styles.btn}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1d4ed8")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
                onClick={() => {
                    setActiveIndex(-1)
                    setPhase("running")
                }}
            >
                Iniciar Corrida
            </button>
            {phase === "go" && (
                <h2 className={styles.alert}>
                    GO!
                </h2>
            )}
        </div>
    )
}

