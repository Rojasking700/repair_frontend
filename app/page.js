import Image from "next/image";
import Script from "next/script";
import Contact from "~/components/pages/home/Contact";
import FeaturedProducts from "~/components/pages/home/FeatruedProducts";
import Gallery from "~/components/pages/home/Gallery";
import Hero from "~/components/pages/home/Hero";
import Hero2 from "~/components/pages/home/Hero2";
import MainRepairCards from "~/components/pages/home/MainRepairCards";
import Services from "~/components/pages/home/Services";
import styles from '~/scss/pages/Home/Page.module.scss'

export default async function Home() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RepairService",
    name: "Rojas Repair & Refurbish",
    url: "https://www.rojasrepair.com/",
    image: "https://www.rojasrepair.com/logo/RRR_No_Bg.png",
    telephone: "+1-262-909-5892",
    priceRange: "$$",
    areaServed: ["Racine, WI", "Kenosha, WI", "Milwaukee, WI"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "1552 Kearney ave",
      addressLocality: "Racine",
      addressRegion: "WI",
      postalCode: "53403",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "10:00", closes: "20:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "20:00" },
    ],
    sameAs: [
      "https://www.facebook.com/profile.php?id=61582216487618",
      "https://www.instagram.com/rojasrepairrefurbish/",
      "https://www.youtube.com/@gabrielrojas2596/shorts",
      // "https://www.google.com/maps?cid=YOUR_GMB_CID"
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Smartphone Screen Replacement" },
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Battery Replacement" },
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Charging Port Repair" },
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Water Damage Diagnostics" },
        availability: "https://schema.org/InStock",
      },
    ],
  };

  return (
    <div className={styles.page}>
      <main className={`${styles.main}`}>

        <Hero2 />
        <MainRepairCards />
        <Services />
        {/* <Gallery /> */}

        <div id="RequestQuote">
          <h1>Request A Quote!</h1>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScPlf4PXQADIrYFPt_elmW0wYU52gmRkHg2GyB_leEzr-zzZw/viewform?usp=dialog"
            width="100%"
            height="500px"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading Form...
          </iframe>
        </div>
        {/* <Contact /> */}
        <br />
        {/* <div>
          <video
            controls
            preload="metadata"
            style={{ maxWidth: 300, borderRadius: 10 }}
            playsInline
            muted
          >
            <source src="/videos/video.mp4" type="video/mp4" />
            Sorry, your browser doesnt support embedded videos.
          </video>
          <video
            controls
            preload="metadata"
            style={{ maxWidth: 300, borderRadius: 10 }}
            playsInline
            muted
          >
            <source src="/videos/video1.mp4" type="video/mp4" />
            Sorry, your browser doesnt support embedded videos.
          </video>
          <video
            controls
            preload="metadata"
            style={{ maxWidth: 300, borderRadius: 10 }}
            playsInline
            muted
          >
            <source src="/videos/video2.mp4" type="video/mp4" />
            Sorry, your browser doesnt support embedded videos.
          </video>

        </div> */}



      </main>
      <Script
        id="rojas-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

    </div>
  );
}
