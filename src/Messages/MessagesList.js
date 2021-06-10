import styles from '../../styles/MessageList.module.css'
import ListMessage from "./ListMessage";
import Image from "next/image"

export default function FarmList(){
    return (
        <div className={styles.Main}>
            <div className={styles.Heading}>
                <h1>Notifications</h1>
                <Image alt={"Adjust"} width={24} height={24} src={"/sliders.svg"}/>
            </div>
            <ListMessage />
        </div>
    )
}
