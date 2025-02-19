import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-pink-100 p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link href="/" className="text-pink-600 hover:text-pink-800">
            Welcome
          </Link>
        </li>
        <li>
          <Link href="/cake" className="text-pink-600 hover:text-pink-800">
            Cake
          </Link>
        </li>
        <li>
          <Link href="/cats" className="text-pink-600 hover:text-pink-800">
            Cats
          </Link>
        </li>
        <li>
          <Link href="/poetry" className="text-pink-600 hover:text-pink-800">
            Poetry
          </Link>
        </li>
        <li>
          <Link href="/seasons" className="text-pink-600 hover:text-pink-800">
            Seasons
          </Link>
        </li>
        <li>
          <Link href="/message" className="text-pink-600 hover:text-pink-800">
            Message
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

