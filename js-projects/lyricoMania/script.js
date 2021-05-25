// get the elements
const searchBtn = document.querySelector('button');
const searchInput = document.querySelector('input');

//serch songs function
async function searchSongs(input) {
    let response = await fetch(`https://api.lyrics.ovh/suggest/${input}`);
    let result = await response.json();
    return result.data;
}

// search lyrics
searchBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    const userInput = searchInput.value;
    if(!userInput) {
        alert('Plese provide an input');
    } else {
        let data = await searchSongs(userInput);
        console.log(data);
    }
});
