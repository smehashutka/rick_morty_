import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Episodes() {
    const [episodes, setEpisodes] = useState([]);
    const router = useRouter();

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/episode")
            .then((response) => response.json())
            .then((data) => setEpisodes(data.results))
            .catch((error) => console.log(error));
    }, []);

    const handleEpisodeClick = (id) => {
        router.push(`/episodes/${id}`);
    };

    return (
        <div>
            <h1>Episodes</h1>
            <ul>
                {episodes.map((episode) => (
                    <li key={episode.id} onClick={() => handleEpisodeClick(episode.id)}>
                        <h2>{episode.name}</h2>
                        <p>{episode.air_date}</p>
                        <p>{episode.episode}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
