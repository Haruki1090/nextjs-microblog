import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '/src/styles/utils.module.css';
import Link from 'next/link';

const name = "獣医学ノート";
export const siteTitle = "Next.js Blog";

function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img src="/images/logo.jpg" className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`} />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <img src="/images/logo.jpg" className={`${utilStyles.borderCircle} ${styles.headerImage}`} />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <Link href="/">
                    Homeへ戻る
                </Link>
            )}
        </div>
    );
}

export default Layout;