import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Headerbar from "../src/Headerbar"
import FarmList from "../src/Farms/FarmList"
import Calculator from "../src/Calculator"
import {useState} from "react";

export default function Home() {
    const [search, setSearch] = useState(null);
    const [chain, setChain] = useState(null);
    const [platform, setPlatform] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const [amount, setAmount] = useState(0);
    const [loadSearch, setLoadSearch] = useState(false);
    const [timeInDays, setTimeInDays] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Be conservative in crypto.</title>
        <meta name="description" content="A stable vault aggregator for safety in crypto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.App}>
            <Headerbar />
            <FarmList amount={amount} timeInDays={timeInDays} chain={chain} setChain={setChain} platform={platform} sortBy={sortBy} setSortBy={setSortBy}
                      setPlatform={setPlatform} search={search} setSearch={setSearch} setLoadSearch={setLoadSearch} />
            <Calculator setAmount={setAmount} setTimeInDays={setTimeInDays} setLoadSearch={setLoadSearch} loadSearch={loadSearch} setChain={setChain}
                        setSearch={setSearch} />
        </div>
    </div>
  )
}
