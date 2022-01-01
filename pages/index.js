import React from "react";
import Image from 'next/image'
import Tab from '../components/Tab'
import MainLayout from "../layouts/MainLayout";
import WithoutHeader from "../layouts/WithoutHeader";
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    componentWillMount() {

    }
    componentDidMount() {
    }
    componentDidCatch(error, errorInfo) {

    }

    render() {
        return (
            <MainLayout>
                <div className="h-screen w-full bg-gray-50">
                    <div className=" flex h-full container mx-auto items-center justify-center">
                        <div
                            className="border shadow-sm bg-white border-black border-opacity-10 py-8 px-6 w-full md:w-4/12 rounded-lg">
                            <div className="flex justify-center mb-8">
                                <Image layout={"fixed"} height={41} width={154}
                                       src="https://www.digikala.com/static/files/bc60cf05.svg"/>
                            </div>
                            <h1 className="font-bold text-lg mb-3">ورود و ثبت نام</h1>
                            <div>
                                <label className="text-gray-500 text-sm">شماره موبایل یا پست الکترونیک خود را وارد
                                    کنید</label>
                                <input
                                    className="border mt-2 py-2 px-4 text-base outline-none border-black border-opacity-10 w-full rounded-md"/>
                            </div>
                            <button
                                className="bg-primary w-full rounded-md mt-3 py-2 px-4 text-white font-bold hover:bg-red-700 transition duration-300 ease-in-out">
                                ورود
                            </button>
                            <p className="text-gray-500 text-xs mt-3 text-center">
                                با ورود و یا ثبت نام در دیجی‌کالا شما
                                <a href="#" className="border-b mx-1 border-black border-opacity-50">
                                    شرایط و قوانین
                                </a>
                                استفاده از سرویس های سایت دیجی‌کالا و قوانین
                                <a href="#" className="border-b mx-1 border-black border-opacity-50">
                                    حریم خصوصی
                                </a>
                                آن را می‌پذیرید.
                            </p>
                        </div>
                    </div>
                </div>
            </MainLayout>
        );
    }
}


export default Index;
