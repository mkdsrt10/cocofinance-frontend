import Select from "react-select";
import styles from "../styles/SearchFilter.module.css";
import useAssetsDetails, {useTokensSearch} from "./data/useAssetsDetails";

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'white' : 'black',
        // backgroundColor: state.isSelected ? "#593dff" : "white",
        padding: "10px 1vw",
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
        fontSize: "16px",
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
        padding: 0
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
    }
}

export default function SearchFilter({search, setSearch, chain, platform, sortBy, setChain, setPlatform, setSortBy}){
    const farms = useAssetsDetails({search, chain, sortBy, platform});
    const farmOption = useTokensSearch({farms:farms})
    return (
        <div>
            <div className={styles.SearchAssets}>
                <Select onChange={(selectedOption) => setSearch(selectedOption)}
                        isMulti isSearchable styles={customStyles}
                        options={farmOption}
                        placeholder={"Search with name of asset/token"}/>
                <button className={styles.Button}>Search</button>
            </div>
            <div className={styles.FilterSort}>
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
