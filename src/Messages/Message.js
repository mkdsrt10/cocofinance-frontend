import styles from "../../styles/Message.module.css";

export default function Message({message}){
    return (
        <div className={styles.main}>
            <div className={styles.Heading}>
                <h2>Heading</h2>
            </div>
            <div className={styles.breif}>
                <p>Non arcu tellus est varius. Id porta auctor eu velit. Pellentesque quam tellus id sapien morbi malesuada. Justo, nisl mattis neque, euismod orci massa ut eu egestas.
                    Id placerat netus blandit purus, adipiscing. Justo, nisl mattis neque, euismod orci massa ut eu egestas. </p>
            </div>
            <div className={styles.time}>
                <p>22h ago</p>
            </div>
        </div>
    )
}
