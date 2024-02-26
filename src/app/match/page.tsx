import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.matchContainer}>
        <div className={styles.matchContainer}>
          <h1>Event Name</h1>
          <div className={styles.matchStats}>
            <div>
              <span>Game Name</span>
              <span>Date</span>
            </div>
            <div className="game-length-stats">
              <span>Time Elapsed</span>
            </div>
          </div>
        </div>
        <div className={styles.center}>
          <div>
            <div>
              <img
                height={128}
                src="https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Toronto_Raptors_logo.svg/200px-Toronto_Raptors_logo.svg.png"
              />
              <span>Score1</span>
            </div>
            <div className={`${styles.teamInfo} ${styles.left}`}>
              <span>Team Name 1</span>
              <span>Origin 1</span>
            </div>
          </div>
          <div>
            <div>
              <span>Score2</span>
              <img
                height={128}
                src="https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Toronto_Raptors_logo.svg/200px-Toronto_Raptors_logo.svg.png"
              />
            </div>
            <div className={`${styles.teamInfo} ${styles.right}`}>
              <span>Team Name 2</span>
              <span>Origin 2</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
