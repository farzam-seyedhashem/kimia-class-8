import Head from 'next/head'
import React, {useState} from "react";
import Link from 'next/link'
const Menu = [
    {name:"صفحه اصلی",link:'#'},
    {name:"بلاگ",link:'#'}
]
export default function Header(props) {

    return (
        <nav className={"fixed top-0 right-0 bg-white border-b border-black border-opacity-10 py-3 w-full"}>
            <div className="container mx-auto">
                <ul className={"flex items-center"}>
                    {Menu.map(item=><li className={"ml-2"}>
                        <Link href={item.link}>
                        <a className="py-2 px-4 hover:bg-black hover:bg-opacity-4 rounded-lg transition duration-300 ease-in-out cursor-pointer">
                            {item.name}
                        </a>
                        </Link>
                    </li>)}

                </ul>

            </div>
        </nav>
    )
}
