'use client';
import Link from 'next/link';
import styles from './NavLink.module.css';
import { usePathname } from 'next/navigation';

export default function NavLink({
  item,
}: {
  item: { title: string; path: string };
}) {
  const pathName = usePathname();
  return (
    <>
      <Link
        href={item.path}
        className={`${styles.container} ${
          pathName === item.path && styles.active
        }`}
      >
        {item.title}
      </Link>
    </>
  );
}
