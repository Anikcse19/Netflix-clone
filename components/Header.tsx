import Image from 'next/image'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
//import useAuth from '../hooks/useAuth'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import useAuth from '../hooks/useAuth'
//import BasicMenu from './BasicMenu'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const { logout } = useAuth()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={`${isScrolled && 'bg-[#3a3a3a88]'}`}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <img
                    src="https://i.ibb.co/yNrsvhk/download.jpg"
                    width={100}
                    height={100}
                    className="cursor-pointer object-contain"
                />

                {/* <BasicMenu /> */}

                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink cursor-default font-semibold text-white hover:text-white">
                        Home
                    </li>
                    <li className="headerLink">TV Shows</li>
                    <li className="headerLink">Movies</li>
                    <li className="headerLink">New & Popular</li>
                    <li className="headerLink">My List</li>
                </ul>
            </div>
            <div className="flex items-center space-x-4 text-sm font-light">
                <SearchIcon className="sm hidden h-6 w-6 sm:inline" />
                <p className="hidden lg:inline">Kids</p>
                <BellIcon className="h-6 w-6" />
                {/* <Link href="/account"> */}
                <img
                    onClick={logout}
                    src="https://rb.gy/g1pwyx"
                    alt=""
                    className="cursor-pointer rounded"
                />
                {/* </Link> */}
            </div>
        </header>
    )
}

export default Header