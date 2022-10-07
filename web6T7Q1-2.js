console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

    const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });
    const getPopcorn = new Promise((resolve, reject) => {
         resolve('popcorn');
    });

    const addButter = new Promise((resolve, reject) => {
        resolve('butter');
    });

    const getColdDrinks = new Promise((resolve,reject)=>{
        resolve('cold drinks');
    })

    let ticket = await person3PromiseToShowTicketWhenWifeArrives;

    console.log(`got the ${ticket}`);
    console.log(`Husband:we should go in now`);
    console.log(`Wife: "i am hungry"`);

    let popcorn = await getPopcorn;     
    console.log(`Husband: here is ${popcorn}`);
    console.log(`Husband:we should go in now`);
    console.log(`Wife: "I dont like popcorn without butter!"`);

    let butter = await addButter;
    console.log(`Husband:added ${butter}`);

    let drinks = await getColdDrinks;
    console.log(`Husband: here is ${drinks}`);
    console.log(`Husband:Anything else darling`);
    console.log(`Wife: lets go we are going to miss the preivew`);
    console.log(`Husband: thanks for the reminder `);

    return ticket;

};

preMovie().then((t) => console.log(`person3 shows ${t}`));

console.log('person4 shows ticket');
console.log('person5 shows ticket');
