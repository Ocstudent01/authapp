import Head from "next/head"
import Layout from "../layout/layout"

import Link from 'next/link'
import styles from "../styles/Form.module.css";
import Image from 'next/image';
import { HiAtSymbol,HiFingerPrint } from "react-icons/hi";
import { useState } from "react";

export default function Login(){
    //esto es para asignarle un evento onclick al icono 
    const[show,setShow] = useState(false)
    return (
        <Layout>
            <Head>
                <title>Login</title>
            </Head>

            <section className="w-3/4 mx-auto flex flex-col gap-10">
                <div className="title">
                    <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
                    <p className="w-3/2 mx-auto text-gray-400">Inicia sesion de la manera correcta y accede a tu informacion  personal</p>
                </div>

                {/*form*/}
                <form className="flex flex-col gap-1">
                    <div className={styles.input_group}>
                        <input 
                        type="email"
                        name='email'
                        placeholder="Email"
                        className={styles.input_text}
                        />
                        <span className="icon flex items-center px-4" >
                            <HiAtSymbol size={25} />
                        </span>
                    </div>
                    <div className={styles.input_group}>
                        <input 
                        type={`${show ? "text":"password"}`}
                        name='password'
                        placeholder="Password"
                        className={styles.input_text}
                        />
                        <span className="icon flex items-center px-4" onClick={()=>setShow(!show)}>
                            <HiFingerPrint size={25} />
                        </span>
                    </div>

                    {/*Login bottons */}
                    <div className="input-button">
                        <button type="submit" className={styles.button}>
                            Login
                        </button>
                    </div>
                    <div className="input-button">
                        <button type="button" className={styles.button_custom}>
                            Sign In with Google<Image src={'/assets/google.svg'} width="20" height={20} alt="google_icono"></Image>
                        </button>
                    </div>
                    <div className="input-button">
                        <button type="button" className={styles.button_custom}>
                            Sign In with Github <Image src={'/assets/github.svg'} width="25" height={25} alt="github_icono"></Image>
                        </button>
                    </div>
                </form>
                {/* bottom*/}
                <p className="text-center text-gray-400">
                    don't have an account yet ?<Link href={'/register'} legacyBehavior><a className="text-blue-700"> Sign Up</a></Link>
                </p>
            </section>
        </Layout>
    )
}