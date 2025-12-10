// 'use client'
// import ProductCard from "~/components/shared/products/productCard";
import styles from '~/scss/pages/Home/Page.module.scss'

export default function VideosComponent() {

  let vidsArr = [
    {
      url: `https://xmp8qga3xf0pw7me.public.blob.vercel-storage.com/videos/612e6dc528d6b624e572d23666163345.mp4`,
      title: '$50 charing port replacement',
      subText: 'iPhone 13 Midnight',
    },
    {
      url: `https://xmp8qga3xf0pw7me.public.blob.vercel-storage.com/videos/1707ce84d5a8374d0d91cc22d3bd40c4.MP4`,
      title: '$120 back glass replacement',
      subText: 'iPhone 15 Blue',
    },
    {
      url: `https://xmp8qga3xf0pw7me.public.blob.vercel-storage.com/videos/3399fb3e5e4ba7d5ef9908f25524393b.MP4`,
      title: '$100 back glass replacement',
      subText: 'iPhone 15 Green',
    },
    {
      url: `https://xmp8qga3xf0pw7me.public.blob.vercel-storage.com/videos/77EDE777-4E06-44F8-AB49-863295889466segment_video_2.MP4`,
      title: '$120 housing replacement',
      subText: 'iPhone 13 Midnight',
    },
  ]

  return (
    <div>
      <h2>Recent Repairs</h2>
      <div className={`${styles.homeCollection} `}>
        {
          vidsArr.map((vid, index) => (
            <div  key={index}>
              <video
              
                controls
                preload="auto"
                style={{ maxWidth: 290, borderRadius: 10 }}
                playsInline
                muted
              >
                <source src={vid.url} type="video/mp4"  />
                Sorry, your browser doesnt support embedded videos.
              </video>
              <h4>{vid.title}</h4>
              <p>{vid.subText}</p>
              <p className={styles.smallDisclaimer} >(Prices vary)</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}