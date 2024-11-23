import banner from '../img/CurrierBanner.webp'

import styles from './Main.module.css'


export default function Main() {
  return <>
    <header>
      <img height={200} src={banner} alt="Currier Studios" />
    </header>
    
    <main>
      <section className={styles.hero}>
        <p className={styles.subtitle}>
          Making spiritware soft, firm, and hard.
        </p>
      </section>
      
      <section className={styles.features}>
        <div className={styles.feature}>
          <h2>Human Machine Interfaces</h2>
          
          <p>
            Seamless, remote-mobile interfaces for all applications.
            Continuously improving performance and usability.
          </p>
        </div>
        
        <div className={styles.feature}>
          <h2>Indie Software</h2>
          
          <p>
            Bringing creativity to life through story-driven indie software designed to captivate.
          </p>
        </div>
      </section>
      
      <section className={styles.cta}>
        <h2>Let’s Build Together</h2>
        <p>
          Whether you’re in need of cutting-edge HMI tech or immersive indie games, Currier Studios has you covered.
        </p>
        <button className={styles.button}>Contact Us</button>
      </section>
    </main>
  </>
}