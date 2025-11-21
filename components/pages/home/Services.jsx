
import styles from '~/scss/pages/Home/Page.module.scss'
import Link from 'next/link';

export default function Services() {

  return (
    <div className={styles.ServiceComponent}>
      <div className={styles.ServiceComponentLeft}>
        <h2>Why Choose Rojas Repair & Refurbish?</h2>
        <h3>Transparent Pricing:</h3>
        <ul>
        <li>All repairs include a base service fee of <strong> $50 </strong> <strong> + </strong> cost of <strong>parts</strong></li>
        <li>This covers diagnostics, labor, cleaning, and full device testing.</li>
        <li>
          Fill out the
          <Link href={`#RequestQuote`} className={styles.ServiceComponentLink}> Request a Quote form </Link>
          and get the full price including parts
        </li>

        </ul>
      </div>
      <div className={styles.ServiceComponentRight}>
        <h2>How It Works</h2>
        <ol>
          <li>
            Fill out the <Link href={`#RequestQuote`} className={styles.ServiceComponentLink}> Request a Quote form</Link>.
          </li>
          <li>Schedule a drop off time.</li>
          <li>Repairs done carefully, tested thoroughly.</li>
          <li>Pick up your device good as new!</li>
        </ol>
      </div>
    </div>
  )
}