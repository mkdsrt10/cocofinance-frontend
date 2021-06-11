import styles from '../../../styles/FarmsList.module.css'
import SearchFilter from "../SearchFilter";
import ListFarms from "./ListFarms";
import Calculator from "../Calculator";
import {useState} from "react";
import useAssetsDetails from "../data/useAssetsDetails";

export default function FarmList({search, setAmount, setTimeInDays, loadSearch, amount, setSearch, chain, time, timeUnit, setTime,
                                     setTimeUnit, platform, sortBy, setChain, setPlatform, setSortBy, setLoadSearch, timeInDays}){
    const [hideCalc, setHide] = useState(false);
    const farms = useAssetsDetails({search, chain, sortBy, platform});
    return (
        <div className={styles.MainContainer}>
            <div className={styles.Main}>
                <div className={styles.Heading}>
                    <h1>Safe Farms</h1>
                    <p>Get best APR on stable coin farms so that you can grow your crypto safely.</p>
                </div>
                <Calculator setTimeUnit={setTimeUnit} hide={hideCalc} setHide={setHide} setAmount={setAmount}
                            setTimeInDays={setTimeInDays} setLoadSearch={setLoadSearch} loadSearch={loadSearch}
                            setChain={setChain} setSearch={setSearch} setTime={setTime} />
                {
                    hideCalc && (
                        <div>
                            <SearchFilter amount={amount} time={time} timeUnit={timeUnit} hide={hideCalc} setHide={setHide} chain={chain} setChain={setChain} platform={platform} sortBy={sortBy} setSortBy={setSortBy}
                                          setPlatform={setPlatform} search={search} setSearch={setSearch} />
                            <ListFarms timeInDays={timeInDays} amount={amount} search={search} chain={chain} platform={platform} sortBy={sortBy}/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
