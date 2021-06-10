import styles from '../styles/Calculator.module.css'
import Select from "react-select";
import useAssetsDetails, {useTokensSearch} from "./data/useAssetsDetails";
import {useState} from "react";

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'white' : 'black',
        // backgroundColor: state.isSelected ? "#593dff" : "white",
        padding: "10px 1vw",
    }),
    container: (provided) => ({
        ...provided,
        flex: 1,
        margin: "1.5rem 0"
    }),
    placeholder: (provided) => ({
        ...provided,
        fontFamily: "Poppins, sans-serif",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        lineHeight: "24px",
        color: "#979BB0"
    }),
    control: () => ({
        // none of react-select's styles are passed to <Control />
        borderBottom: "1px solid #979BB0",
        display: "flex",
        flexDirection:"row",
        padding: "0.5vh 0",
    }),
    valueContainer: (provided) => ({
        ...provided,
        padding: 0
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
    }
}

export default function Calculator({setSearch, setAmount, setChain, setTimeInDays, loadSearch, setLoadSearch }){
    const [amountI, setAmountI] = useState("");
    const [chainI, setChainI] = useState(null);
    const [tokenI, setTokenI] = useState("");
    const [timeI, setTimeI] = useState("");
    const [timeUnit, setTimeUnit] = useState("D");
    const [hide, setHide] = useState(false);

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
        console.log(amountI, chainI, timeI, timeUnit)
        if (amountI > 10 && ["D", "M", "Y"].includes(timeUnit) && timeI > 0 ){
            setAmount(amountI)
            setTimeInDays(timeI*getDayConversion(timeUnit))
            setChain(chainI)
            setSearch(tokenI)
            setLoadSearch(true)
            setTimeout(() => setLoadSearch(false), 5000)
        }
    }

    const farmOption = useTokensSearch({search:"", chain: chainI, sortBy:"apr", platform:null})

    return (
        <div className={styles.MainCont}>
            <div className={styles.Main} style={{display:(hide?"none":"flex")}}>
                <div className={styles.Heading}>
                    <h1>Calculate</h1>
                    <p>Get best APR on stable coin farms so that you can grow your crypto safely.</p>
                    {/*<Select onChange={(selectedOption) => {*/}
                    {/*    setTokenI(selectedOption);*/}
                    {/*}}*/}
                    {/*        isMulti isSearchable styles={customStyles}*/}
                    {/*        options={farmOption}*/}
                    {/*        placeholder={"Token"}/>*/}
                    {/*<Select onChange={(selectedOption) => setChainI(selectedOption)}*/}
                    {/*        isMulti isSearchable styles={customStyles} value={chainI}*/}
                    {/*        options={[{label:"Any", value: -1}, {label:"BSC", value:56}, {label:"ETH Mainnet", value:97}]}*/}
                    {/*        placeholder={"Chain"}/>*/}
                    <input className={styles.Input} value={amountI} onChange={(e) => {
                        setAmountI(e.target.value)
                    }} placeholder={"Amount (in USD)"}/>
                    <div className={styles.timeBox}>
                        <input className={styles.Input} value={timeI} onChange={(e) => {
                            setTimeI(e.target.value)
                        }} placeholder={"Timeframe "}/>
                        <p onClick={() => setTimeUnit("D")} style={{fontWeight:timeUnit==="D"?"900":"500", color:timeUnit==="D"?"#5d42fe":""}}>D</p>
                        <p onClick={() => setTimeUnit("M")} style={{fontWeight:timeUnit==="M"?"900":"500", color:timeUnit==="M"?"#5d42fe":""}}>M</p>
                        <p onClick={() => setTimeUnit("Y")} style={{fontWeight:timeUnit==="Y"?"900":"500", color:timeUnit==="Y"?"#5d42fe":""}}>Y</p>
                    </div>
                </div>
                <div className={styles.Footing}>
                    <button disabled={loadSearch} onClick={calculate} className={styles.Button}>Calculate</button>
                </div>
            </div>
            <div onClick={() => {setHide(!hide)}} className={styles.Hide} style={{right:(hide?0:"30vw")}}>
                {
                    !hide ?
                        <img alt={"hide"} src={"/chevron-right.svg"} />
                        :
                        <img alt={"show"} src={"/chevron-left.svg"} />
                }
            </div>
        </div>
    )
}
