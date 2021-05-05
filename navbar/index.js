import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="navbar">
      <Link href="/">
        <div className="navbutton"> Home </div>
      </Link>
      <Link href="/about">
        <div className="navbutton"> About Us </div>
      </Link>
      <Link href="/promotions">
        <div className="navbutton"> Promotions </div>
      </Link>
      <Link href="/appointments">
        <div className="navbutton"> Make an Appointment Today </div>
      </Link>
    </div>
  )
}
