'use client';

import React from 'react'
import { Button } from './Button'
import { signOut } from 'next-auth/react'

export const SignOutBtn = () => {
  return (
    <Button
      onClick={() => signOut({
        callbackUrl: '/'
      })}
    >
      Log Out
    </Button>
  )
}
