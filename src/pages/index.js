import Layout, { siteTitle } from "../../components/Layout";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import utilStyle from "../styles/utils.module.css";
import { getPostsData } from "../../lib/post";
import Head from "next/head";

// SSGの場合、getStaticPropsをexportする
export async function getStaticProps() {
  const allPstsData = getPostsData(); // id, title, date, thumbnail
  return {
    props: {
      allPstsData,
    },
  };
}

export default function Home({ allPstsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyle.headingMd}>
        <p>初めまして！獣医学ノートです！！</p>
        <p>
          獣医学ノートは、獣医学生の皆さんが一度は感じたことがある「勉強のための問題集がない」という課題を解決するために立ち上がりました！
        </p>
      </section>

      <section>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPstsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} className={styles.thumbnailImage} />
              </Link>
              <Link href={`/posts/${id}`}>
                <text className={utilStyle.boldText}>{title}</text>
              </Link>
              <br />
              <small className={utilStyle.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
