import Link from 'next/link'
import styles from '../styles/Home.module.css'

import useSWR from 'swr'

import Llama from '../components/Llama'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Head from '../components/Head'
import Navbar from '../components/Navbar'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function ForSale() {
  const { data, error } = useSWR('/api/llamas/forSale', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  
  return (
    <div className={styles.container}>
      <Head />
      <Header />
      <Navbar />

      <main className={styles.main}>
        <h3 className={styles.title}>
          Llamas for Sale
        </h3>

        <ul className={styles.llama_pen}>
          {data.map((l, i) => (
            <Llama key={i} llama={l} />
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  )
}
