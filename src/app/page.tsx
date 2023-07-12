import Link from 'next/link';

import { Feed } from '@/components';

export default async function Home() {
  return (
    <main>
      <h1>Ideas</h1>
      <Link href="/create">Create</Link>
      <Feed />
    </main>
  );
}
