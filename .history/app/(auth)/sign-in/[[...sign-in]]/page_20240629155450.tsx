import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <main className='flex h-screen w-full items-center justify-center bg-dark-2'>
        <SignIn />
    </main>
)
}

export default SignInPage