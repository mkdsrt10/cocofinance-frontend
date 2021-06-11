import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "../src/Header"
import FarmList from "../src/Old/Farms/FarmList"
import Calculator from "../src/Old/Calculator"
import {useState} from "react";

export default function Home() {
    const [search, setSearch] = useState(null);
    const [chain, setChain] = useState({label:"Any",value:-1});
    const [platform, setPlatform] = useState({label:"Any",value:-1});
    const [sortBy, setSortBy] = useState({label:"APR", value:"apr"});
    const [amount, setAmount] = useState(0);
    const [loadSearch, setLoadSearch] = useState(false);
    const [time, setTime] = useState(null)
    const [timeUnit, setTimeUnit] = useState(null)
    const [timeInDays, setTimeInDays] = useState("");

    return (
        <div className={styles.container}>
            <Head>
                <title>Grow multifold safely</title>
                <meta name="description" content="A stable vault aggregator for safety in crypto" />
                <link rel="icon" href="/logo.svg" />
            </Head>
            <div className={styles.App}>
                <Header />
                <FarmList time={time} setTime={setTime} timeUnit={timeUnit} setTimeUnit={setTimeUnit}
                          setTimeInDays={setTimeInDays} loadSearch={loadSearch} setAmount={setAmount}
                          amount={amount} timeInDays={timeInDays} chain={chain} setChain={setChain}
                          platform={platform} sortBy={sortBy} setSortBy={setSortBy}
                          setPlatform={setPlatform} search={search} setSearch={setSearch} setLoadSearch={setLoadSearch} />
            </div>
        </div>
    )
}
