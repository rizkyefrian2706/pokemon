import Image from "next/image";
import styles from "../../styles/Content.module.css";
import { useState, useEffect } from 'react';
import axios from "axios";

export const getStaticPaths = async () => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const data = await res.data;
    const dtmap = data.results;

    const paths = dtmap.map((pokemon, index) => {
        return {
            params: { id: (index + 1).toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/' + id);
    const data = await res.data;

    const resev = await axios.get('https://pokeapi.co/api/v2/evolution-chain/' + id);
    const dataev = await resev.data;

    const resspec = await axios.get('https://pokeapi.co/api/v2/pokemon-species/' + id);
    const dataspec = await resspec.data;
    // const dtev = JSON.stringify(dataev);

    const gender_rate = dataspec.gender_rate;
    const resgender = await axios.get('https://pokeapi.co/api/v2/gender/' + gender_rate);
    const datagender = await resgender.data;

    const allablty = data.abilities.map((ab, index) => (
        ab.ability.url
    ));

    const resability = await axios.get(allablty[0]);
    const ability1 = await resability.data;

    const resability2 = await axios.get(allablty[1]);
    const ability2 = await resability2.data;

    return {
        props: {
            pokemon: data,
            evolutions: dataev.chain,
            species: dataspec,
            gender: datagender,
            id: id,
            ab1: ability1,
            ab2: ability2
        }
    }
}

const Detail = ({ pokemon, evolutions, id, species, gender, ab1, ab2 }) => {
    // console.log("asdasd", ab);
    const id2 = parseInt(id) + 1;
    const id3 = parseInt(id2) + 1;
    const [showStat, setShowStat] = useState(true);
    const [showEvo, setShowEvo] = useState(false);
    function btnStat() {
        if (showStat != true) {
            setShowStat(!showStat);
            setShowEvo(!showEvo);
        }
    }
    function btnEvo() {
        if (showEvo != true) {
            setShowStat(!showStat);
            setShowEvo(!showEvo);
        }
    }

    return (
        <>
            <div className="bg-blue-300">
                <div className="container mx-auto px-10 bg-white m-10 ">
                    <div className="flex flex-col py-10 text-center font-bold ">
                        <div className="justify-center items-center content-center">
                            <div className="card hover:shadow-lg">
                                <img src={pokemon.sprites.front_default} alt="" className="w-full object-contain h-40" />
                                <div className="m-4">
                                    <h1 className="uppercase text-lg">{pokemon.name}</h1>
                                    <div className="grid grid-cols-2 gap-2 ">
                                        {pokemon.types.map((tp, index) => (
                                            <div key={index} className="flex space-x-2 justify-center">
                                                <button type="button" className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">{tp.type.name}</button>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="py-4">{species.flavor_text_entries[7].flavor_text}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 py-3 ">
                                <div className="flex space-x-2 justify-center">
                                    <button type="button" className="btn text-secondary-100 border-blue-500 md:border-2 hover:bg-blue-500 hover:text-white transition ease-out duration-500" onClick={btnStat}>STATS</button>
                                </div>
                                <div className="flex space-x-2 justify-center">
                                    <button type="button" className="btn text-secondary-100 border-blue-500 md:border-2 hover:bg-blue-500 hover:text-white transition ease-out duration-500" onClick={btnEvo}>EVOLUTIONS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="hidden" style={{
                            display: showStat ? "block" : "none"
                        }}>
                            <div className="grid grid-cols-6">
                                {pokemon.stats.map((st, index) => (
                                    <>
                                        <div key={index}>
                                            <p className="uppercase">{st.stat.name}</p>
                                        </div>
                                        <div className="col-span-5">
                                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: (st.base_stat + "%") }}>{st.base_stat}</div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                            <div className="text-center">
                                Weaknesses
                            </div>
                            <div className="text-center mt-4">
                                <h2>Abilities</h2>
                            </div>
                            <div className="grid grid-cols-2 gap-7">
                                <div className="card hover:shadow-lg">
                                    <div className="m-4">
                                        <h1 className="uppercase text-lg">{ab1.name}</h1>
                                        <p className="py-4">{ab1.effect_entries[1].short_effect}</p>
                                    </div>
                                </div>
                                <div className="card hover:shadow-lg">
                                    <div className="m-4">
                                        <h1 className="uppercase text-lg">{ab2.name}</h1>
                                        <p className="py-4">{ab2.effect_entries[1].short_effect}</p>
                                    </div>
                                </div>
                            </div>
                            {/* {pokemon.abilities.map((pka) => (
                                <p>{pka.ability.name}</p>
                            ))} */}
                            <div className="text-center my-4">
                                <h3 className="text-blue-500">Breeding</h3>
                                <div className="grid grid-cols-3">
                                    <div>
                                        <p className="text-blue-400">Egg Group</p>
                                        {species.egg_groups.map((egg, index) => (
                                            <div key={index}>
                                                <p>{egg.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <p className="text-blue-400">Hatch time</p>
                                        <p>{species.hatch_counter}</p>
                                    </div>
                                    <div>
                                        <p className="text-blue-400">Gender</p>
                                        <p>{gender.name}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center my-4">
                                <h3 className="text-blue-500">Capture</h3>
                                {/* <div class="flex flex-col">
                                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                            <div class="overflow-hidden">
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <table className="w-full">
                                    <thead className="bg-white border">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-11 py-4 text-center">
                                                Habitat
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                                Generation
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                                Capture Rate
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-gray-100 border-b">
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {species.habitat.name}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {species.generation.name}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {species.capture_rate}
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <h3 className="text-center uppercase">Sprites</h3>
                            <div className="grid grid-cols-2">
                                <img className="w-full content-center object-contain h-40" src={pokemon.sprites.front_default} />
                                <img className="w-full content-center object-contain h-40" src={pokemon.sprites.front_shiny} />
                            </div>
                        </div>

                        <div className="hidden" style={{
                            display: showEvo ? "block" : "none"
                        }}>
                            {evolutions.evolves_to.map((ev, index) => (
                                <div key={index} className="grid grid-cols-3 justify-center text-center items-center py-3 content-center ">
                                    <div>
                                        <img className="w-full content-center object-contain h-40" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"} />
                                        <p>{pokemon.name}</p>
                                    </div>
                                    <div>
                                        <p>Level {ev.evolution_details[0].min_level}
                                            <hr></hr></p>
                                    </div>
                                    <div>
                                        <img className="w-full content-center object-contain h-40" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id2 + ".png"} />
                                        <p>{ev.species.name}</p>
                                    </div>
                                    {ev.evolves_to.map((ev2, index) => (
                                        <>
                                            <div key={index}>
                                                <img className="w-full content-center object-contain h-40" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id2 + ".png"} />
                                                <p>{ev.species.name}</p>
                                            </div>
                                            <div>
                                                <p>Level {ev2.evolution_details[0].min_level}
                                                    <hr></hr></p>
                                            </div>
                                            <div>    <img className="w-full content-center object-contain h-40" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id3 + ".png"} />
                                                <p>{ev2.species.name}</p>
                                            </div>
                                        </>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}



export default Detail;