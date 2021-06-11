import styles from '../styles/Header.module.css'
import Image from 'next/image'
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function Headerbar({}){
    const [route, setRoute] = useState("app");
    const router = useRouter();
    useEffect(() => {
        setRoute(router.pathname.replace("/", "")===""?"app":router.pathname.replace("/", ""))
    })
    async function routeTo(rTo:string){
        if (rTo === route){
            console.log("You are already here")
        } else {
            await router.push(rTo)
        }
    }

    return (
        <div className={styles.Header}>
            <div className={styles.LogoWeb} onClick={() => routeTo("app")}>
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={60}
                    height={60}
                />
            </div>
            <div className={styles.NavList}>
                <div onClick={() => routeTo("notification")} className={route === "notification" ? styles.NavItemsSelected:styles.NavItems}>
                    <Image
                        src={route === "notification" ? "/bell_selected.svg":"/bell.svg"}
                        alt="Msg"
                        layout={"intrinsic"}
                        width={25}
                        height={25}
                    />
                </div>
            </div>
        </div>
    )
}
