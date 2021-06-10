import styles from "../../styles/ListFarm.module.css";
import {useState} from "react";
import Message from "./Message";

export default function ListFarms(){
    const [messages, setMessage] = useState([1,2,3]);
    return (
        <div className={styles.List}>
            {
                messages.map(message => {
                    return <Message message={message}/>
                })
            }
        </div>
    )
}
