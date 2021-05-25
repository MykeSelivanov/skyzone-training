// get the elements
const searchBtn = document.querySelector('button');
const searchInput = document.querySelector('input');

//serch songs function
async function searchSongs(input) {
    let response = await fetch(`https://api.lyrics.ovh/suggest/${input}`);
    let result = await response.json();
    
    
}

// show data
const showData = (data) => {
    result.innerHTML = `
        <ul class="songs">
        ${data.data
            .map(
            song => `<li>
        <span><strong>${song.artist.name}</strong> - ${song.title}</span>
        <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
        </li>`
            )
            .join('')}
        </ul>
    `;
}

    // search lyrics
searchBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    const userInput = searchInput.value;
    if(!userInput) {
        alert('Plese provide an input');
    } else {
        searchSongs(userInput);
    }
});