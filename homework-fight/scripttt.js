let Team1 = [
    {name: 'Archer1', hp: 75, defense: 0.3, attack: 8},
    {name: 'Knight1', hp: 100, defense: 0.5, attack: 5},
    {name: 'Mage1', hp: 120, defense: 0, attack: 12}
];

let Team2 = [
    {name: 'Archer2', hp: 75, defense: 0.3, attack: 8},
    {name: 'Knight2', hp: 100, defense: 0.5, attack: 5},
    {name: 'Mage2', hp: 120, defense: 0, attack: 12}
];

function fight(attacker, defender) {
    let damage = attacker.attack * (1 - defender.defense);
    defender.hp = Math.max(0, defender.hp - damage);
}
function skip(warrior) {
    console.log(`${warrior.name} skips their turn.`);
}
function defend(warrior) {
    console.log(`${warrior.name} defends and takes reduced damage.`);
    warrior.defense = 0.5;
}
function restoreHp(warrior) {
    console.log(`Restoring 5 hp for ${warrior.name}`);
    warrior.hp += 5;
}
function battle(teamA, teamB) {
    let currentAttacker = teamA[Math.floor(Math.random() * teamA.length)];
    let currentDefender = teamB[Math.floor(Math.random() * teamB.length)];

    let randomAction = Math.floor(Math.random() * 4);

    switch(randomAction) {
        case 0:
            fight(currentAttacker, currentDefender);
            console.log(`${currentAttacker.name} attacks ${currentDefender.name} for ${currentAttacker.attack} damage.`);
            break;
        case 1:
            defend(currentDefender);
            break;
        case 2:
            skip(currentAttacker);
            break;
        case 3:
            restoreHp(currentDefender);
            break;
    }

    if (currentDefender.hp === 0) {
        console.log(`${currentDefender.name} is defeated!`);
    }
}

function isTeamDefeated(team) {
    return team.every(warrior => warrior.hp === 0);
}

do {
    battle(Team1, Team2);
    battle(Team2, Team1);
} while (!isTeamDefeated(Team1) && !isTeamDefeated(Team2));

if (isTeamDefeated(Team1)) {
    console.log('Team 1 is defeated!');
} else {
    console.log('Team 2 is defeated!');
}