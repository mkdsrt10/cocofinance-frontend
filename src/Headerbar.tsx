import styles from '../styles/Header.module.css'
import Image from 'next/image'
import classname from 'classnames';
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function Headerbar({}){
    const [route, setRoute] = useState("app");
    const router = useRouter();

    useEffect(() => {
        console.debug("Debug", router.pathname.replace("/", "")===""?"app":router.pathname.replace("/", ""));
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
            <div>
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={60}
                    height={60}
                />
            </div>
            <div className={styles.NavList}>
                <div onClick={() => routeTo("app")} className={route === "app" ? styles.NavItemsSelected:styles.NavItems}>
                    <Image
                        src={route === "app" ? "/home_selected.svg":"/home.svg"}
                        alt="App"
                        width={25}
                        height={25}
                    />
                    <p>App</p>
                </div>
                {/*<div onClick={() => routeTo("blog")} className={route === "blog" ? styles.NavItemsSelected:styles.NavItems}>*/}
                {/*    <Image*/}
                {/*        src={route === "blog" ? "/map_selected.svg":"/map.svg"}*/}
                {/*        alt="Blog"*/}
                {/*        width={25}*/}
                {/*        height={25}*/}
                {/*    />*/}
                {/*    <p>Blog</p>*/}
                {/*</div>*/}
                <div onClick={() => routeTo("notification")} className={route === "notification" ? styles.NavItemsSelected:styles.NavItems}>
                    <Image
                        src={route === "notification" ? "/bell_selected.svg":"/bell.svg"}
                        alt="Msg"
                        width={25}
                        height={25}
                    />
                    <p>Message</p>
                </div>
            </div>
        </div>
    )
}
