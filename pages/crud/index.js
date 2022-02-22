import { useState } from "react"
import Link from 'next/link'

export default function post(props) {
  const [post, setPost] = useState(props.data);

  const getAll = async () => {
    const res = await fetch('http://localhost:1337/api/posts')
    console.log("response", res);
    const dt = await res.json()
    const data = dt.data;
    setPost(data)
  }


  const deletePost = async (id) => {
    console.log('tes',id)
    await fetch('http://localhost:1337/api/posts/' + id, {
      method: 'DELETE',
    });
    getAll();
  }

  const loppPost = (post) => {
    console.log(post)
    return post.map((item, index) => {
      return (
        <div key={item.id}>
          <div className="bg-gray-100 shadow-md px-4 py-2 rounded-md">
            <div>
              <h1 className="text-xl font-medium">{item.attributes.title}</h1>
              <p className="text-sm">{item.attributes.author}</p>
            </div>
            <div className="my-2">
              <Link href={`/crud/${encodeURIComponent(item.id)}`}>
                <button className="px-2 py-1 bg-blue-800 rounded-sm text-white outline-none focus:ring-4 shadow-lg text-sm mr-1">
                  Edit
                </button>
              </Link>
              <button onClick={(e) => deletePost(item.id)} className="px-2 py-1 bg-red-800 rounded-sm text-white outline-none focus:ring-4 shadow-lg text-sm mr-1">Hapus</button>
            </div>
          </div>
          <br />
        </div>
      )
    })
  }

  return (
    <div>
      <div className="container mx-auto px-4 max-w-screen-sm">
        <div>
          <Link href="/crud/create">
            <a className="bg-red-600 text-center text-white px-4  py-2 my-4 inline-block">
              Tambah Post
            </a>
          </Link>
        </div>
        <div>

          {loppPost(post)}

        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:1337/api/posts')
  const dt = await res.json()
  const data = dt.data;
  console.log("data", data);
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }

}