const attack = prompt("Nome do atacante: ")
const power = prompt("Força do personagem: ")
const defense = prompt("Nome do defensor: ")
const lifepoints = prompt("Vida total do personagem: ")
const shield = prompt("O personagem tem escudo? insira (Sim/Não): ")

let dano = 0

if (power < lifepoints && shield === "Não") {
    dano =  lifepoints - power
} else if (power < lifepoints && shield === "Sim"){
    dano = lifepoints - (power/2)
}

alert(defense + " possui " + dano + " pontos de vida ")