import styles from "../../styles/ListFarm.module.css";
import {useState} from "react";
import Blog from "./Blog";

export default function ListFarms(){
    const [messages, setMessage] = useState([1,2,3]);
    return (
        <div className={styles.List}>
            {
                messages.map(message => {
                    return <Blog message={message}/>
                })
            }
        </div>
    )
}
