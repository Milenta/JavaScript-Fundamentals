
/*************************
 *  ---  Functions  ---  *
 *************************/

// 1 napravi funkcuju koja ce da prihvata 3 argumenta. zove se lunch machine
// i treba da ispise koliko je koje hrane je upotrebljeno.
// za svaku obradjenu hranu treba neko vreme. treba da izbaci ukupno vreme za ceo rucak

const prepTime = function (food) {
    if (food === 'kolac') {
        console.log('First if')
        return 20
    }
    if (food === 'supa') {
        console.log('Second if')
        return 20
    }
    if (food === 'meso') {
        console.log('Third if')
        return 45
    }
    else {
        console.log('Else statemant')
        return 15
    }
}

/************************************************************************
 *  ---  napravljena funkcija koja ispisuje podatke u consol logu  ---  *
 ************************************************************************/

const lunchMachine = function (meal1, meal2, meal3) {
    console.log(`You oredered lunch with next meals: ${meal1}, ${meal2}, ${meal3}`)
    console.log(`Preparation time of your meal is ${prepTime(meal1) + prepTime(meal2) + prepTime(meal3)} min`)
}

lunchMachine('supa', 'meso', 'pomfrit')

/**************************************************************************
 *  ---  napravljena funkcija koja pise podatke u h1 tagu dokumenta  ---  *
 **************************************************************************/

/*const lunchMachine2 = function (meal1, meal2, meal3) {
    return (`You oredered lunch with next meals: ${meal1}, ${meal2}, ${meal3}
    Preparation time of your meal is ${prepTime(meal1) + prepTime(meal2) + prepTime(meal3)} min`)
}

document.getElementById('h1element').innerText = lunchMachine2('supa', 'meso', 'pomfrit')

/*****************************************************************************************************
 *  ---  napravljena funkcija koja uzima podatke iz prompta i pise podatke u h1 tagu dokumenta  ---  *
 *****************************************************************************************************/

const prompt1 = prompt('Koje jelo zelite da narucite kao meze?')
const prompt2 = prompt('Koje je glavno jelo koje zelite da narucite?')
const prompt3 = prompt('Koji dezert zelite da narucite?')
const lunchMachine3 = function (meal1, meal2, meal3) {
    return (`You oredered lunch with next meals: ${meal1}, ${meal2}, ${meal3}
    Preparation time of your meal is ${prepTime(meal1) + prepTime(meal2) + prepTime(meal3)} min`)
}

document.getElementById('h1element').innerText = lunchMachine3(prompt1, prompt2, prompt3)