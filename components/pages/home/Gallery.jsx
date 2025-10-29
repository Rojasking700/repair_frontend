import Image from 'next/image'
import styles from '~/scss/pages/Home/Page.module.scss'

export default function Gallery({ collection }) {

  return (
    <div>
      {/* <h2>Quality boards.</h2> */}
      {/* <h2>Lasting material</h2> */}
      {/* <h2>Lasting memories</h2> */}
      <h2>Quality adventures</h2>
      <div className={styles.Gallery} >
        <Image
          src={'/stockImgs/pexels-tiffany-bui-1263477-2405062.jpg'}
          alt='pexels-tiffany-bui'
          width={375}
          height={500}
        />
        <Image
          src={'/stockImgs/pexels-visitalmaty-848594.jpg'}
          alt='pexels-tiffany-bui'
          width={750}
          height={500}
        />
        <Image
          src={'/stockImgs/pexels-dennisleinarts-1748597.jpg'}
          alt='pexels-dennisleinarts'
          width={375}
          height={500}
        />
        <Image
          src={'/stockImgs/mattias-olsson-nQz49efZEFs-unsplash.jpg'}
          alt='pexels-tiffany-bui'
          width={750}
          height={500}
        />
        <Image
          src={'/stockImgs/johannes-waibel-WdBQHcIiSIw-unsplash.jpg'}
          alt='pexels-tiffany-bui'
          width={750}
          height={500}
        />
      </div>
      {/* <div className={styles.Gallery} >
        <Image
          src={'/stockImgs/pexels-evgenia-kirpichnikova-1007758-1973293.jpg'}
          alt='pexels-tiffany-bui'
          width={750}
          height={500}
        />
        <Image
          src={'/stockImgs/pexels-melvinwahlin-2433363.jpg'}
          alt='pexels-tiffany-bui'
          width={375}
          height={500}
        />
        <Image
          src={'/stockImgs/pexels-visitalmaty-848594.jpg'}
          alt='pexels-tiffany-bui'
          width={750}
          height={500}
        />
      </div> */}
    </div>
  )
}