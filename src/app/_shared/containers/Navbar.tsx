import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react';
import { SignOutBtn } from '../components/SignOutBtn';

export async function Navbar() {
  const session = await getServerSession();

  return (
    <nav
      className='w-full'
    >
      <Link
        href='/'
      >
        Home
      </Link>
      {session && (
        <>
          <Link
            href='/reports'
            prefetch
          >
            Reports
          </Link>
          <Link
            href='/users'
            prefetch
          >
            Users
          </Link>
        </>
      )}
      {session ? (
        <SignOutBtn />
      ) : (
        <Link
          href='/login'
        >
          Log in
        </Link>
      )}
    </nav>
  )
}
