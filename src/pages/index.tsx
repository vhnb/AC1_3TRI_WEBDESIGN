import LightsSequence from "@/components/RaceLights";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.main} >
      <h1>
        AC 1 | 3 Trimestre – Luzes da Largada
      </h1>
      <LightsSequence />
    </div>

  )
}
