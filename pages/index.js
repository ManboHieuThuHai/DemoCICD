import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MyProject - Next.js</title>
        <meta name="description" content="Simple Next.js website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Chào mừng đến với <span className={styles.highlight}>MyProject</span>
        </h1>

        <p className={styles.description}>
          Develop: Cải thiện hiệu suất và tối ưu hóa database queries
        </p>

        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h2>Giới thiệu &rarr;</h2>
            <p>Tìm hiểu thêm về dự án này</p>
          </a>

          <a href="/api/hello" className={styles.card}>
            <h2>API Route &rarr;</h2>
            <p>Kiểm tra API endpoint mẫu</p>
          </a>

          <a
            href="https://nextjs.org/docs"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Tài liệu &rarr;</h2>
            <p>Tìm hiểu về Next.js</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>MyProject © 2025 - Git Conflict Demo</p>
      </footer>
    </div>
  );
}
