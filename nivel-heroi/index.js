function levelHero(name='player',level=0) {
    let ranking
    if (level <= 1000) {
        ranking = 'Ferro'
    }
    else if (1001 < level && level <= 2000) {
        ranking = 'Bronze'
    }
    else if (2001 < level && level <= 5000) {
        ranking = 'Prata'
    }
    else if (5001 < level && level <= 7000) {
        ranking = 'Ouro'
    }
    else if (7001 < level && level <= 8000) {
        ranking = 'Platina'
    }
    else if (8001 < level && level <= 9000) {
        ranking = 'Ascendente'
    }
    else if (9001 < level && level < 10000) {
        ranking = 'Imortal'
    }
    else {
        ranking = 'Radiante'
    }

    return console.log(`O Héroi de nome ${name} e de level ${level} está no ranking ${ranking}`)
}

levelHero('besta', 9999)