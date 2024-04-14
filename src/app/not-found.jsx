import Link from "next/link"

const NotFound = () => {
  return (
    <>
    <h2>NotFound</h2>
    <div>The page you are looking for does not exist.</div>
    <Link href="/">Return Home</Link>
    </>
  )
}

export default NotFound