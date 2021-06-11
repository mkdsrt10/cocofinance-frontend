import styles from '../../../styles/Old/MessageList.module.css'
import ListBlog from "./ListBlog";
import Image from "next/image"

export default function BlogList(){
    return (
        <div className={styles.Main}>
            <div className={styles.Heading}>
                <h1>Blogs</h1>
            </div>
            <ListBlog />
        </div>
    )
}
