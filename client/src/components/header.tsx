import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import styles from '../../styles/components/header.module.scss'

const Header: NextPage = () => (
    <>
        <header className={styles.header}>
            <h1 className={styles.title}><Link href="/"><a>LOVE TRIP</a></Link></h1>
            <nav className={styles.nav}>
                <ul className={styles.header_menu}>
                    <li className={styles.menu_item}><Link href="/posts"><a>POST</a></Link></li>
                    <li className={styles.menu_item}><Link href="/contact"><a>CONTACT</a></Link></li>
                </ul>
            </nav>
        </header>
    </>
)

export default Header