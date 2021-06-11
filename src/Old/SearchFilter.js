import Select from "react-select";
import styles from "../../styles/Old/SearchFilter.module.css";
import {useTokensSearch} from "./data/useAssetsDetails";
import Image from "next/image"

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'white' : 'black',
        // backgroundColor: state.isSelected ? "#593dff" : "white",
        padding: "5px 1vw",
    }),
    container: (provided) => ({
        ...provided,
        flex: 5,
    }),
    placeholder: (provided) => ({
        ...provided,
        fontFamily: "Poppins, sans-serif",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "0.9rem",
        color: "#979BB0"
    }),
    control: () => ({
        // none of react-select's styles are passed to <Control />
        borderBottom: "1px solid #979BB0",
        display: "flex",
        flexDirection:"row",
        padding: "0.3vh 0",
    }),
    valueContainer: (provided) => ({
        ...provided,
        padding: 0,
        fontSize: "0.9rem"
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
    }
}
const customStylesItems = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'white' : 'black',
        // backgroundColor: state.isSelected ? "#593dff" : "white",
        padding: "10px 1vw",
    }),
    container: (provided) => ({
        ...provided,
        width: "100%",
    }),
    placeholder: (provided) => ({
        ...provided,
        fontFamily: "Poppins, sans-serif",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "0.9rem",
        color: "#979BB0"
    }),
    control: () => ({
        // none of react-select's styles are passed to <Control />
        borderBottom: "1px solid #979BB0",
        display: "flex",
        flexDirection:"row",
        padding: "0.1vh 0",
    }),
    valueContainer: (provided) => ({
        ...provided,
        padding: 0,
        fontSize: "0.9rem"
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
    }
}

const customStylesMobile = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'white' : 'black',
        // backgroundColor: state.isSelected ? "#593dff" : "white",
        padding: "10px 10px",
    }),
    container: (provided) => ({
        ...provided,
        flex: 5,
        width: "100%",
        marginBottom: 10,
    }),
    placeholder: (provided) => ({
        ...provided,
        fontFamily: "Poppins, sans-serif",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "1rem",
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
        padding: 0,
        fontSize: "1.2rem"
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
    }
}
const customStylesItemsMobile = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'white' : 'black',
        // backgroundColor: state.isSelected ? "#593dff" : "white",
        padding: "10px 10px",
    }),
    container: (provided) => ({
        ...provided,
        width: "100%",
    }),
    placeholder: (provided) => ({
        ...provided,
        fontFamily: "Poppins, sans-serif",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "1rem",
        lineHeight: "24px",
        color: "#979BB0"
    }),
    control: () => ({
        // none of react-select's styles are passed to <Control />
        borderBottom: "1px solid #979BB0",
        display: "flex",
        flexDirection:"row",
        padding: "0.2vh 0",
    }),
    valueContainer: (provided) => ({
        ...provided,
        padding: 0,
        fontSize: "1rem"
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
    }
}

export default function SearchFilter({hide, amount, time, timeUnit, setHide, search, setSearch, chain, platform, sortBy, setChain, setPlatform, setSortBy}){
    const farmOption = useTokensSearch({search, chain, sortBy, platform})
    return (
        <div className={styles.SearchComp}>
            {
                hide && (
                    <div className={styles.AmountBar}>
                        <h1>If you invest <span>${amount}</span> for <span>
                                    {time}
                            {timeUnit === "D"? " Days ":timeUnit === "M"? " Months ":timeUnit === "Y"? " Years ":" "}
                                </span>
                            you can get best returns in the following order.
                        </h1>
                        <div className={styles.AmountBarEdit} onClick={() => setHide(false)}>
                            <Image
                            alt={"reconfigure"}
                            src={"/edit.svg"}
                            width={20}
                            height={20}/>
                        </div>
                    </div>
                )
            }
            <div className={styles.FilterSort}>
                <div className={styles.FilterSortItem}>
                    <p>Filter by tokens</p>
                    <Select onChange={(selectedOption) => setSearch(selectedOption)}
                            isMulti isSearchable styles={customStylesItems}
                            options={farmOption}
                            placeholder={"Search"}/>
                </div>
                <div className={styles.FilterSortItem}>
                    <p>Filter by chain</p>
                    <Select onChange={(selectedOption) => setChain(selectedOption)}
                            styles={customStylesItems} value={chain}
                            options={[{label:"Any", value: -1}, {label:"BSC", value:56}, {label:"ETH Mainnet", value:97}]}
                            placeholder={"Filter by chain"}/>
                </div>
                <div className={styles.FilterSortItem}>
                    <p>Filter by platform</p>
                    <Select onChange={(selectedOption) => setPlatform(selectedOption)}
                            styles={customStylesItems} value={platform}
                            options={[{label:"Any", value: -1}, {label:"Beefy", value:"Beefy"}, {label:"PancakeSwap", value:"Pancake"}, {label:"Dopple", value:"Dopple"}, {label:"Belt", value:"Belt"}]}
                            placeholder={"Filter by platform"}/>
                </div>
                <div className={styles.FilterSortItem}>
                    <p>Sort by</p>
                    <Select onChange={(selectedOption) => setSortBy(selectedOption)}
                            styles={customStylesItems} value={sortBy}
                            options={[{label:"APR", value:"apr"}, {label:"Total Value Locked", value:"tvl"}]}
                            placeholder={"Sort by"}/>
                </div>
            </div>
        </div>
    )
}
