'use client';

import React, { useState } from 'react';
import { TextInput } from '../_shared/components/TextInput';
import { Button } from '../_shared/components/Button';
import { signIn } from 'next-auth/react';
import { redirect, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { revalidatePathFromClient } from '../_shared/utils/revalidatePathFromClient';

interface LoginCredentialsState {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [loginCredentialsState, setLoginCredentialsState] = useState<LoginCredentialsState>({
    email: '',
    password: ''
  });

  const router = useRouter();

  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get('callbackUrl');

  function handleModifyLoginCredential<T extends keyof LoginCredentialsState>(property: T, value: LoginCredentialsState[T]) {
    setLoginCredentialsState(currCredentials => ({
      ...currCredentials,
      [property]: value
    }));
  };

  const handleLogin = () => {
    // TODO: maybe toast?
    signIn('credentials', {
      email: loginCredentialsState.email,
      password: loginCredentialsState.password,
      redirect: false
    })
      .then(data => {
        if (data?.ok) {
          revalidatePathFromClient('/');
          router.replace(callbackUrl ? callbackUrl : '/');
        } else {
          // TODO: add toast here
        }
      })
  };

  return (
    <div
      className='flex items-center justify-center flex-col gap-2 w-fit p-4 m-auto bg-white rounded-md'
    >
      <h1>
        Sign In
      </h1>
      <TextInput
        label='Email'
        placeholder='johndoe@gmail.com'
        onChange={({ target }) => handleModifyLoginCredential('email', target.value)}
      />
      <TextInput
        label='Password'
        placeholder='johndoe@gmail.com'
        onChange={({ target }) => handleModifyLoginCredential('password', target.value)}
      />
      <Button
        onClick={handleLogin}
      >
        Login
      </Button>
    </div>
  )
}
