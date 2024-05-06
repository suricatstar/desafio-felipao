function levelHero(wins=0, lose=0) {
    let saldoVitorias = lose - wins
    let nivel
    if (saldoVitorias <= 10) {
        nivel = 'Ferro'
    }
    else if (11 < saldoVitorias && saldoVitorias <= 20) {
        nivel = 'Bronze'
    }
    else if (21 < saldoVitorias && saldoVitorias <= 50) {
        nivel = 'Prata'
    }
    else if (51 < saldoVitorias && saldoVitorias <= 80) {
        nivel = 'Ouro'
    }
    else if (81 < saldoVitorias && saldoVitorias <= 90) {
        nivel = 'Diamante'
    }
    else if (91 < saldoVitorias && saldoVitorias <= 100) {
        nivel = 'Lendário'
    }
    else {
        nivel = 'Imortal'
    }

    return console.log(`O Herói tem de saldo de vitorias igual a ${saldoVitorias} e está no nivel de ${nivel}`)
}

levelHero(10, 100)