import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
// import Image from 'next/image'
import styles from '../../styles/components/NewsDetail.module.scss'

type Props = {
    id: number,
    src: string,
    alt: string,
    date: string,
    title: string
}

const NewsList: NextPage<Props> = ({ id, src, alt, date, title }: Props) => (
    <div className={styles.card}>
        <Link href={`/posts/${id}`}>
            <a>
                <img src={src} alt={alt} width="300" height="300" />
                {/*
                <Image
                    src={src}
                    alt={alt}
                    width={300}
                    height={300}
                />
                */}
                <p className={styles.date}>{ date }</p>
                <b className={styles.title}>{ title }</b>
            </a>
        </Link>
    </div>
)

export default NewsList