let message = '';

const random = Math.floor(Math.random()*3) +1;

console.log(random);


function slumpen(num) {
    if (random === 1) {
        return('Hejhej jag är först');
    } else if (random === 2) {
        return('Jag ör tvåa');
    } else {
        return('jag ör treeeeeeeeeeeaaaaaaaa');
    }
}

console.log(slumpen(random));