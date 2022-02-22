import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Counter from "./counter";

const shop = ({ pokemons, error }) => {
    return (
        <div className=" bg-slate-200">
            <div className="m-8 grid lg:grid-cols-4 gap-10 ">
                {pokemons.map((pokemon, index) => (
                    <div>
                        {/* <Link href={"/shop/" + (index + 1)} key={index + 1}> */}
                            <div className="card hover:shadow-lg cursor-pointer">
                                <Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (index + 1) + ".png"} className="w-full object-contain h-40 sm:h-48 " width={500} height={300} />
                                <div className="m-4">
                                    <span className="font-bold">{pokemon.name}</span>
                                    <span className="block text-gray-500 text-sm"> {(index + 1) > 1000 ? 'false' : ((index + 1) < 1000 && (index + 1) > 99 ? '$' + (index + 1) : ((index + 1) < 100 && (index + 1) > 9 ? ('$' + (index + 1)) : ('$' + (index + 1))))}
                                    </span>
                                </div>
                                <div className="badge">
                                    <span>{(index + 1) > 1000 ? 'false' : ((index + 1) < 1000 && (index + 1) > 99 ? '#' + (index + 1) : ((index + 1) < 100 && (index + 1) > 9 ? ('#0' + (index + 1)) : ('#00' + (index + 1))))}
                                    </span>
                                </div>
                                <Counter />
                            </div>
                        {/* </Link> */}
                    </div>

                ))}
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const pokemons = res.data.results;
        return { props: { pokemons } };
    } catch (error) {
        return { error };
    }
}

export default shop;