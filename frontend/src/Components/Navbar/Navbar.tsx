import React from 'react'
import logo from './logo.png'

interface Props {}

const Navbar = (props: Props) => {
  const user = null as { userName?: string } | null

  const isLoggedIn = (): boolean => !!user

  const logout = (): void => {
    // TODO: implement logout logic
  }

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <a href="/">
            <img src={logo} alt="" />
          </a>
          <div className="hidden font-bold lg:flex">
            <a href="/search" className="text-black hover:text-darkBlue">
              Search
            </a>
          </div>
        </div>
        {isLoggedIn() ? (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <div className="hover:text-darkBlue">Welcome, {user?.userName}</div>
            <a
              onClick={logout}
              className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
            >
              Logout
            </a>
          </div>
        ) : (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <a href="/login" className="hover:text-darkBlue">
              Login
            </a>
            <a
              href="/register"
              className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
            >
              Signup
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar