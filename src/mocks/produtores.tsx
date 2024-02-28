import green from "../assets/produtores/green.png";
import grow from "../assets/produtores/grow.png";
import jenny_jack from "../assets/produtores/jenny-jack.png";
import potager from "../assets/produtores/potager.png";
import salad from "../assets/produtores/salad.png";

const numRandom = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const produtores = {
  titulo: "Produtores",
  lista: [
    {
      nome: "Green",
      imagem: green,
      distancia: numRandom(1, 500),
      estrelas: numRandom(1, 5),
    },

    {
      nome: "Grow",
      imagem: grow,
      distancia: numRandom(1, 500),
      estrelas: numRandom(1, 5),
    },

    {
      nome: "Jenny Jack Farm",
      imagem: jenny_jack,
      distancia: numRandom(1, 500),
      estrelas: numRandom(1, 5),
    },

    {
      nome: "Potager",
      imagem: potager,
      distancia: numRandom(1, 500),
      estrelas: numRandom(1, 5),
    },

    {
      nome: "Salad",
      imagem: salad,
      distancia: numRandom(1, 500),
      estrelas: numRandom(1, 5),
    }
  ]
}

export default produtores