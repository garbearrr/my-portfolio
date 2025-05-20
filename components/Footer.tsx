'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link
        href="https://www.linkedin.com/in/gweav"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/linkedin.png"
          alt="LinkedIn"
          width={32}
          height={32}
        />
      </Link>

      <Link
        href="https://github.com/garbearrr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/github.png"
          alt="GitHub"
          width={32}
          height={32}
        />
      </Link>

      <Link href="mailto:garretthweaver2@gmail.com">
        <Image src="/images/mail.png" alt="Email" width={32} height={32} />
      </Link>
    </footer>
  );
}
