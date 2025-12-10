
import styles from '~/scss/pages/Home/Page.module.scss'
import Link from 'next/link';

export default function Services() {

  return (
    <div>
      <div className={styles.ServiceComponent}>
        <div className={styles.ServiceComponentLeft}>
          <h2>Why Repair Your Device Instead of Replacing It</h2>
          <ul>
            <li><b>Save Money</b> - Repairs cost a fraction of what you'd pay for a new phone or laptop.</li>
            <li><b>Eco-Friendly Choice</b> - Repairing reduces electronic waste and helps protect the environment.</li>
            <li><b>Extend Device Lifespan</b> - A simple screen or battery replacement can add years of reliable use.</li>
            <li><b>Support Local Business</b> - Your repair helps small, local technicians rather than big corporations.</li>
            {/* <li><b>Warranty-Backed Confidence</b> - Enjoy peace of mind knowing your repair is guaranteed.</li> */}
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

      {/* </div>
      <div className={styles.ServiceComponent}> */}
        <div className={styles.ServiceComponentLeft}>
          <h2>Transparent Pricing:</h2>
          <ul>
            <li>All repairs include a base service fee of <strong> $50 </strong> <strong> + </strong> cost of <strong>parts</strong></li>
            <li>This covers diagnostics, labor, cleaning, and full device testing.</li>
            <li>
              Fill out the
              <Link href={`#RequestQuote`} className={styles.ServiceComponentLink}> Request a Quote form </Link>
              and get the full price including parts
            </li>
            <li>We explain every cost before we touch your device.</li>
          </ul>
        </div>
        <div className={styles.ServiceComponentRight}>
          <h2>Why Choose Rojas Repair & Refurbish</h2>
          <ul>
            <li><b>Honest, Upfront Pricing</b> - No surprises. A flat $50 repair fee + parts, with full transparency before any work begins.</li>
            <li><b>Premium Parts Only</b> - We use high-quality components you can trust — no cheap knockoffs, no shortcuts.</li>
            <li><b>Personalized Service</b> - You aren't dealing with a big storefront. You get direct, responsive communication and real care.</li>
            <li><b>No Pushy Upsells</b> - Just honest recommendations focused on what's best for you, not our profit.</li>
            {/* <li><b>Save</b> - Repairs cost a fraction of what you'd pay for a new phone or laptop.</li> */}
          </ul>
        </div>

      </div>
    </div>
  )
}