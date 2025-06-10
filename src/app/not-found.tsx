import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="m-auto max-w-4xl text-center">
      <h2 className="uppercase font-bold text-8xl">404</h2>
      <h2 className="uppercase font-medium text-5xl py-4">Oops</h2>
      <p className="text-4xl py-4">We have many other pages that might interest you.</p>
      <Link href="/" className="mt-8 min-w-[640px] rounded-md inline-block py-8 px-16 bg-gray-300 font-medium uppercase text-2xl transition duration-300 hover:opacity-50 self-center">Return Home</Link>
    </div>
  )
}