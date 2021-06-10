import styles from "../../styles/ListFarm.module.css";
import {useState} from "react";
import Farm from "./Farm";
import useAssetsDetails from "../data/useAssetsDetails";

export default function ListFarms({search, chain, sortBy, platform, amount}){
    const farms = useAssetsDetails({search, chain, sortBy, platform});

    return (
        <div className={styles.List}>
            {
                farms.map(farm => {
                    return <Farm key={farm.id} amount={amount} farm={farm}/>
                })
            }
        </div>
    )
}
