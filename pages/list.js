import Link from "next/link";
import styles from "../styles/List.module.css";

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { pokemons: data}
    }
}
const List = ({pokemons}) => { 
    return (     
        <div>
            <h1>All</h1>
            {pokemons.map(pokemon => (
                <Link href={"/pokemon/" + pokemon.id} key={pokemon.id}>
                    <a className={styles.single}>
                        <h3>{pokemon.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
     );
}
 
export default List;