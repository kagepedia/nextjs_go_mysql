import React from 'react'
import { NextPage, GetServerSideProps } from 'next'
import Head from '../components/head'
import Header from '../components/header'
import NewsList from '../components/NewsList'
import styles from '../../styles/Home.module.scss'

type Props = {
  image: string,
  date: string,
  title: string
}

const Home: NextPage<Props> = (data) => {
  const posts = data['data']

  return (
    <>
      <Head title="aaaaa" description="bbbbb" keywords="cccc" />
      <Header />
      <div className="page__top">
        <section className={styles.news_list}>
          {posts.map((post) => 
            <NewsList id={post.id} src={post.image} alt={post.title} date={post.date} title={post.title} key={post.id}/>
          )}
        </section>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:8080/api/sever')
  const data = await res.json()
  console.log(data);
  
  return { props: { data } }
}

export default Home