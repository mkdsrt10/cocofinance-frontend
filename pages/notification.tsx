import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Headerbar from "../src/Headerbar"
import Messages from "../src/Messages/MessagesList";

export default function Notification() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Be conservative in crypto.</title>
                <meta name="description" content="A stable vault aggregator for safety in crypto" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.App}>
                <Headerbar />
                <Messages />
            </div>
        </div>
    )
}
