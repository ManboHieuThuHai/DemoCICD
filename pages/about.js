import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Giới thiệu - MyProject</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Giới thiệu về MyProject</h1>
        
        <p className={styles.description}>
          [RESOLVED] Hệ thống quản lý dự án với Git - Đã giải quyết xung đột từ stash:
          - Advanced conflict resolution strategies
          - Real-world Git workflow scenarios
          - Automated testing pipeline
          - Continuous integration/deployment
        </p>

        <ul style={{ textAlign: 'left', maxWidth: '600px' }}>
          <li>Git rebase conflicts</li>
          <li>Large merge conflicts</li>
          <li>Git stash in conflict scenarios</li>
          <li>Git rerere automation</li>
          <li>Branch protection rules</li>
          <li>Pull request templates</li>
          <li>Cherry-pick operations</li>
          <li>Interactive rebase workflows</li>
        </ul>

        <a href="/" className={styles.card}>
          ← Quay lại trang chủ
        </a>
      </main>
    </div>
  );
}
