const streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];


const $$input = document.querySelector('[data-function="toFilterStreamers"]');
const $$button = document.querySelector('[data-function="toShowFilterStreamers"]');

const searchPlayer = () => {
    
const input = document.querySelector('[data-function="toFilterStreamers"]');
    const filterPlayer = streamers.filter((streamer) => {
        if (streamer.name.toLowerCase().includes(input.value.toLowerCase())) {
            return streamer;
        }
    })
    console.log(filterPlayer);
}

$$button.addEventListener('click', searchPlayer);
