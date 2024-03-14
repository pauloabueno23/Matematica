enum DiaDaSemana {
    Domingo = 1,
    Segunda = 2,
    Terça = 3,
    Quarta = 4,
    Quinta = 5,
    Sexta = 6,
    Sábado = 7
}

class Semana{
    dia: number;
    grow(){
        this.dia += 1;
    }
}

export {
    DiaDaSemana,
    Semana
}