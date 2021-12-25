import Head from 'next/head'
import React, {useState} from "react";

export default function Header(props) {
    const {children,plus} = props
    const [name,setName] = useState('farzam')
    return (
        <nav>
            <div>
                {children + " " + plus}
            </div>
            <button onClick={()=>setName(name==='farzam'?'kimia':'farzam')}>
                {name}
            </button>
        </nav>
    )
}
