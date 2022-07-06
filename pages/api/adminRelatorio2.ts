import { User } from "../../src/context/@types.App";

export default async function getAdminRelatorio2(user: User, city: string) {
  return fetch(`http://localhost:8000/api/relatorios/${encodeURI(city)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((v) => v.json())
    .then((res) =>
      res.relatorio_2.map((v: any) => [
        v.cidade,
        v.iatacode,
        v.Aeroporto,
        v.Cid_Aero,
        v.distancia,
        v.type,
      ])
    )
    .catch((err) => console.log(err));
}
