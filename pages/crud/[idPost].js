import FormPost from "../../components/FormPost";
 
export default function EditPost(props) {
console.log("props data",props);
    // if(!props.data.attributes)
    return (
        <div>
             <div className="container mx-auto px-4 max-w-screen-sm">
                <FormPost action='update' dataPost={props.data}></FormPost>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    // const router = useRouter();
    const { idPost } = context.query;
    if (idPost) {
        const res = await fetch('http://localhost:1337/api/posts/' + idPost)
        console.log("asdasd",res);
        const dt = await res.json()
        console.log("Asd",dt);
        const data = dt.data;
        if (!data) {
            return {
                notFound: true,
            }
        }

        return {
            props: { data }, // will be passed to the page component as props
        }
    }

}