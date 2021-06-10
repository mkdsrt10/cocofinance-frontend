import {useEffect, useState} from "react";
import useSWR from 'swr';

function AprSort(a, b){return b.apr-a.apr}
function TvlSort(a, b){return b.apr-a.apr}

export default function useAssetsDetails({search, chain, sortBy, platform}){
    const [dataF, setDataF] = useState([]);
    const fetcher = async (url) => {
        const res = await fetch("https://coco-finance.herokuapp.com/tvl")
        return res.json()
    }
    const { data, error } = useSWR('getAprTvl', fetcher)

    useEffect(() => {
        console.log("FilterArray:", search, chain, sortBy, platform)
        if (error) return (setDataF([]))
        if (!data) return (setDataF([]))
        const filterChain = chain === null || chain.value===-1 ? {...data["56"], ...data["128"], ...data["137"], ...data["250"], ...data["43114"]} : {...data[[chain.value]]}
        const filtered = Object.keys(filterChain).filter(farmDa => {
            const farmdata = filterChain[farmDa];
            if (
                (platform === null || platform.value === -1 || farmdata.aggregatedFrom.includes(platform.value))
            ){
                return (search === null || search === "" || search.length === 0 || search.map(s => farmdata.name.toLowerCase().includes(s.value.toLowerCase())).some((data) => data === true))
            }
            return false
        })
        const farms = filtered.map(key => {
            return filterChain[key]
        })
        let sortedFarm = farms.sort((a, b) => (b.apr - a.apr))
        if (sortBy !== null && sortBy.value === "tvl"){
            sortedFarm = farms.sort((a, b) => (b.tvl - a.tvl))
        }
        console.log(sortedFarm)
        setDataF(sortedFarm)
    }, [search, chain, sortBy, platform, error, data])

    return (dataF)
}


export function useTokensSearch({farms}){
    let data = [];
    farms.map(farm => {
        data.push(...farm.assets)
    })
    const uniqueArray = data.filter(function(item, pos) {
        return data.indexOf(item) == pos;
    })
    console.log(uniqueArray)
    return uniqueArray.map(dat => ({label:dat, value: dat}))
}
