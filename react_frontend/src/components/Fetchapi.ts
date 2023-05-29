import type api from "../interfaces/api";

export default async function search(changeState: React.Dispatch<React.SetStateAction<api[]>>) {
    const res = await fetch(`http://localhost:7777/`);

    const data = await res.json();

    /*console.log(data);*/

    changeState(data)
}