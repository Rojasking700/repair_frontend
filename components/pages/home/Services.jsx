
import styles from '~/scss/pages/Home/Page.module.scss'
import Link from 'next/link';

export default function Services({ collection }) {

  return (
    <div>
      <div>
        <h2>Why Choose Rojas Repair & Refurbish?</h2>
        <h3>Transparent Pricing:</h3>
        <p>All repairs include a base service fee of <strong> $50 </strong> <strong> + </strong> cost of <strong>parts</strong></p>
        <p>This covers diagnostics, labor, cleaning, and full device testing.</p>
        <p>
          Fill out the
          <Link href={`#RequestQuote`}> Request a Quote form</Link>
          get the full price including parts
        </p>
      </div>
      <div>
        <h2>How It Works</h2>
        <ol>
          <li>
            Fill out the <Link href={`#RequestQuote`}> Request a Quote form</Link>.
          </li>
          <li>Schedule a drop off time.</li>
          <li>Repairs done carefully, tested thoroughly.</li>
          <li>Pick up your device good as new!</li>
        </ol>
      </div>
    </div>
  )
}