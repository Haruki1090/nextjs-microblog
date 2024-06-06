import Head from "next/head";
import Link from "next/link";

export default function firstPost() {
    return (
        <div>
            <Head>
                <title>初めての投稿</title>
            </Head>
            <main>
                <h1>初めての投稿</h1>
                <h2>
                    <Link href="/">ホームへ戻る</Link>
                </h2>
            </main>
        </div>
    );
}