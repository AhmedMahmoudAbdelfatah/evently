import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='w-full border-b h-20 flex'>
      <div className='wrapper flex items-center justify-between'>
        <Link href={"/"} className='w-36'>
          <Image src={"/assets/images/logo.svg"} alt='evently logo' width={128} height={38}/>
        </Link>
        <SignedIn>
          <nav className='md:flex-between hidden w-full max-w-xs'>
            <NavItems />
          </nav>
          <div className='hidden w-12 md:block'>
            <UserButton afterSignOutUrl='/' />
          </div>
        </SignedIn>
        <SignedOut>
          <Button asChild className='rounded-full h-8 w-20 md:h-10 md:w-24'>
            <Link href={"/signin"}>Login</Link>
          </Button>
        </SignedOut>
        <SignedIn>
          <MobileNav />            
        </SignedIn>
        </div>
    </header>
  )
}

export default Header