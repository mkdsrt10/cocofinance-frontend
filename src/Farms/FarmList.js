import styles from '../../styles/FarmsList.module.css'
import SearchFilter from "../SearchFilter";
import ListFarms from "./ListFarms";
import {useState} from "react";

export default function FarmList({search, amount, setSearch, chain, platform, sortBy, setChain, setPlatform, setSortBy, setLoadSearch, timeInDays}){
    return (
        <div className={styles.MainContainer}>
            <div className={styles.Main}>
                <div className={styles.Heading}>
                    <h1>Safe Farms</h1>
                    <p>Get best APR on stable coin farms so that you can grow your crypto safely.</p>
                </div>
                <SearchFilter chain={chain} setChain={setChain} platform={platform} sortBy={sortBy} setSortBy={setSortBy}
                              setPlatform={setPlatform} search={search} setSearch={setSearch} />
                <ListFarms timeInDays={timeInDays} amount={amount} search={search} chain={chain} platform={platform} sortBy={sortBy}/>
            </div>
        </div>
    )
}
