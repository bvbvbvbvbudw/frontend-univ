let hp = 100;
let whoFight = 1;
let warrior1 = {name: 'Artur', hp: hp};
let warrior2 = {name: 'Merlin', hp: hp};

function fight() {
    if (warrior1.hp >= 10 && warrior2.hp >= 10) {
        if (whoFight === 1) {
            console.log(`Warrior: ${warrior1.name} fights ${warrior2.name} and attacks for 10hp`);
            warrior2.hp -= 10;
        } else {
            console.log(`Warrior: ${warrior2.name} fights ${warrior1.name} and attacks for 10hp`);
            warrior1.hp -= 10;
        }
    } else {
        if (warrior1.hp < warrior2.hp) {
            lose(warrior1);
        } else {
            lose(warrior2);
        }
    }
    whoFight = 3 - whoFight;
}

function defend() {
    if ((whoFight === 1 && warrior1.hp >= 5) || (whoFight === 2 && warrior2.hp >= 5)) {
        if (whoFight === 1) {
            console.log(`Warrior: ${warrior1.name} defends, and loses 5 hp`);
            warrior1.hp -= 5;
        } else {
            console.log(`Warrior: ${warrior2.name} defends, and loses 5 hp`);
            warrior2.hp -= 5;
        }
    } else {
        if (warrior1.hp < warrior2.hp) {
            lose(warrior1);
        } else {
            lose(warrior2);
        }
    }
    whoFight = 3 - whoFight;
}

function skip() {
    console.log(`Warrior: ${whoFight === 1 ? warrior1.name : warrior2.name} skips their turn`);
    whoFight = 3 - whoFight;
}

function restoreHp() {
    if (whoFight === 1) {
        console.log(`Restoring 5 hp for ${warrior1.name}`);
        warrior1.hp += 5;
    } else {
        console.log(`Restoring 5 hp for ${warrior2.name}`);
        warrior2.hp += 5;
    }
    whoFight = 3 - whoFight;
}

function lose(warrior) {
    console.log(`Warrior ${warrior.name} loses the fight`);
}

do {
    let randomAction = Math.floor(Math.random() * 4);

    switch (randomAction) {
        case 0:
            fight();
            break;
        case 1:
            defend();
            break;
        case 2:
            skip();
            break;
        case 3:
            restoreHp();
            break;
    }

    console.log(`Warrior1 HP: ${warrior1.hp}, Warrior2 HP: ${warrior2.hp}`);
} while (warrior1.hp > 0 && warrior2.hp > 0);

if (warrior1.hp <= 0) {
    lose(warrior1);
} else {
    lose(warrior2);
}