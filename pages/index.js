import Link from 'next/link'

export default function Home() {
  return (
      <div className="flex justify-center items-center flex-col pt-20 text-center font-bold lg:text-6xl text-6xl space-y-2">
        <h1 className="text-gray-900 pb-8">
          Belajar Membuat Website Pokemon <br />
          <span className="text-blue-500">
            Next.js</span> &{" "}
          <span className="text-blue-400">Tailwind.css</span>
        </h1>
        <div className="flex justify-center items-center cursor-pointer hover:shadow-lg  text-3xl font-semibold text-white bg-gray-900 rounded-lg w-64 h-16">
          <Link href="/listpokemon">
            <a>List Pokemon</a>
          </Link>
        </div>
      </div>
  )
}
