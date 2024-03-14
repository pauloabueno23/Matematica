import { Semana, DiaDaSemana } from "./enum_view";

let semana = new Semana();
semana.dia = DiaDaSemana.Segunda;

console.log("Hoje é segunda dia", semana.dia);

semana.grow();
console.log("Amanhã será terça dia", semana.dia);