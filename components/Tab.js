import Head from 'next/head'
import React, {useState} from "react";

export default function Tab(props) {
    const [selectedTab,setSelectedTab] = useState('specification')
    return (
        <ul className={"flex items-center"}>
            <li onClick={()=>setSelectedTab('specification')} className={`py-4 px-12 cursor-pointer font-bold rounded-full ml-4 ${selectedTab==='specification'?'bg-white shadow-sm text-black border border-black border-opacity-10 ':'text-gray-500'}`}>
                مشخصات
            </li>
            <li onClick={()=>setSelectedTab('information')} className={`py-4 px-12 cursor-pointer font-bold rounded-full ml-4 ${selectedTab==='information'?'bg-white font-bold text-black border border-black border-opacity-10 ':'text-gray-500'}`}>

            توضیحات
            </li>
        </ul>
    )
}
