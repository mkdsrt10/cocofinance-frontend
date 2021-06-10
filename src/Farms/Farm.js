import styles from "../../styles/Farm.module.css";
import {useState} from "react";
import Image from "next/image";

function dailyAPr(yApr){

}

const calcDaily = apy => {
    if (!apy) return `???`;

    const g = Math.pow(10, Math.log10(apy + 1) / 365) - 1;
    if (isNaN(g)) {
        return '- %';
    }

    return `${(g * 100).toFixed(2)}%`;
};
const units = ['', 'k', 'M', 'B', 'T', 'Q', 'Q', 'S', 'S'];
export const formatTvl = (tvl) => {
    let order = Math.floor(Math.log10(tvl) / 3);
    if (order < 0) { order = 0 }

    const num = tvl / 1000 ** order;

    return '$' + num.toFixed(2) + units[order];
};
export const formatApy = apy => {
    if (!apy) return `???`;

    apy *= 100;

    const order = apy < 1 ? 0 : Math.floor(Math.log10(apy) / 3);
    if (order >= units.length - 1) return `🔥`;

    const num = apy / 1000 ** order;
    return `${num.toFixed(2)}${units[order]}%`;
};

export default function Farm({farm, amount}){
    const [showDetails, setshowDetails] = useState(false);
    return (
        <div onClick={() => {setshowDetails(!showDetails)}} className={styles.main}>
            <div className={styles.summary}>
                <div className={styles.summaryIcon}>
                    <Image src={"/"+farm.logo} width={50} height={50}/>
                    <h4>{farm.name}</h4>
                </div>
                <div className={styles.summaryValue}>
                    <h4>{formatApy(farm.apr)}</h4>
                    <p>APR</p>
                </div>
                <div className={styles.summaryValue}>
                    <h4>{calcDaily(farm.apr)}</h4>
                    <p>Daily APR</p>
                </div>
                <div className={styles.summaryValue}>
                    <h4>{formatTvl(farm.tvl)}</h4>
                    <p>TVL</p>
                </div>
                {
                    amount > 1 &&
                    <div className={styles.summaryValue}>
                        <h4>1000</h4>
                        <p>Expected Interest</p>
                    </div>
                }
            </div>
            <div className={styles.desciptionBox}>
                <div className={styles.desciptionBoxBreif}>
                    <p>Platform: Beefy</p>
                    <p>Details
                        {showDetails?<img src={"/chevron-up.svg"}/>:<img src={"/chevron-down.svg"}/>}</p>
                </div>
                {
                    showDetails &&
                    <div className={styles.desciptionBoxDetails}>
                        <div className={styles.desciptionBoxDetailsInstruction}>
                            <h3>Instruction</h3>
                            <p>Non arcu tellus est varius. Id porta auctor eu velit. Pellentesque quam tellus id sapien morbi malesuada.
                                Justo, nisl mattis neque, euismod orci massa ut eu egestas. Id placerat netus blandit purus, adipiscing. </p>
                        </div>
                        <div className={styles.desciptionBoxDetailsLinks}>
                            <button className={styles.Button}>Buy tokens</button>
                            <button className={styles.Button}>Farm them</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
