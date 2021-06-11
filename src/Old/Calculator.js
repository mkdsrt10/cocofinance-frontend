import styles from '../../styles/Calculator.module.css'
import {useState} from "react";

export default function Calculator({ hide, setHide, setTime, setTimeUnit, setAmount, setTimeInDays, loadSearch, setLoadSearch }){
    const [amountI, setAmountI] = useState("");
    const [timeI, setTimeI] = useState("");
    const [timeUnit, setTimeUnitI] = useState("D");

    function getDayConversion(tu){
        switch (tu){
            case "D":
                return 1
            case "M":
                return 30
            case "Y":
                return 365
            default:
                return 1
        }
    }

    function calculate(){
        if (amountI > 10 && ["D", "M", "Y"].includes(timeUnit) && timeI > 0 ){
            setAmount(amountI)
            setTime(timeI)
            setTimeUnit(timeUnit)
            setTimeInDays(timeI*getDayConversion(timeUnit))
            setLoadSearch(true)
            setTimeout(() => (setLoadSearch(false), setHide(true)), 1000)
        }
    }

    return (
            <div className={styles.Main} style={{display:hide ? "none":"flex"}}>
                <div className={styles.Heading}>
                    <h1>Calculate how much money you can make</h1>
                    <div className={styles.Calculator}>
                        <p>How much you want to invest? </p>
                        <div className={styles.inputBox}>
                            <p>$ </p>
                            <input className={styles.Input} value={(amountI)} onChange={(e) => {
                                setAmountI(e.target.value)
                            }} placeholder={"Amount (in USD)"}/>
                        </div>
                        <p>For how long you want to invest? </p>
                        <div className={styles.inputBoxTime}>
                            <div className={styles.inputBox} style={{marginBottom: 0}}>
                                <input className={styles.Input} value={timeI} onChange={(e) => {
                                    setTimeI(e.target.value)
                                }} placeholder={"Timeframe (in Days, Months or Years)"}/>
                            </div>
                            <div className={styles.timeFrame}>
                                <p onClick={() => setTimeUnitI("D")} style={{fontWeight:timeUnit==="D"?"900":"normal", color:timeUnit==="D"?"#5d42fe":""}}>D</p>
                                <p onClick={() => setTimeUnitI("M")} style={{fontWeight:timeUnit==="M"?"900":"normal", color:timeUnit==="M"?"#5d42fe":""}}>M</p>
                                <p onClick={() => setTimeUnitI("Y")} style={{fontWeight:timeUnit==="Y"?"900":"normal", color:timeUnit==="Y"?"#5d42fe":""}}>Y</p>
                            </div>
                        </div>
                        <div className={styles.Footing}>
                            <button disabled={loadSearch} onClick={calculate} className={styles.Button}>Calculate</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}
