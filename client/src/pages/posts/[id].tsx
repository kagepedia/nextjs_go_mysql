import React from 'react'
import { NextPage, GetServerSideProps } from 'next'
import Head from '../../components/head'
import Header from '../../components/header'
import NewsDetail from '../../components/NewsDetail'
import styles from '../../../styles/Posts.module.scss'

type Props = {
  image: string,
  date: string,
  title: string
}

const PostsDetail: NextPage<Props> = (data) => {
    const post = data['data'][0]
    
    return (
        <>
            <Head title="detail" description="detail" keywords="detail" />
            <Header />
            <div className="page__top">
                <section className={styles.news_list}>
                    <NewsDetail id={post.id} src={post.image} alt={post.title} date={post.date} title={post.title} key={post.id} />
                </section>
            </div>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const pid = context.params.id
    const res = await fetch(`http://localhost:8080/api/sever/posts/${pid}`)
    let data = await res.json()

    return { props: { data } }
}

export default PostsDetail