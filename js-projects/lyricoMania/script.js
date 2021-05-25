// get the elements
const searchBtn = document.querySelector('button');
const searchInput = document.querySelector('input');
const result = document.getElementById('result');

// serch songs function
async function searchSongs(input) {
    let response = await fetch(`https://api.lyrics.ovh/suggest/${input}`);
    let result = await response.json();
    showData(result);
}

async function searchLyrics(artist, songTitle) {
    let response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${songTitle}`);
    let lyrics = await response.json();
    showLyrics(artist, songTitle, lyrics);
}

// show songs data in DOM
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

const showLyrics = (artist, songTitle, lyricsData) => {
    const lyrics = lyricsData.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
    result.innerHTML = `
    <h2><strong>${artist}</strong> - ${songTitle}</h2>
    <span>${lyrics}</span>`;
}

// search lyrics
searchBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    const userInput = searchInput.value.trim();
    if(!userInput) {
        alert('Plese provide an input');
    } else {
        searchSongs(userInput);
    }
});

result.addEventListener('click', (event) => {
    const element = event.target;
    if(element.tagName === 'BUTTON') {
        let artist = element.getAttribute('data-artist');
        let songTitle = element.getAttribute('data-songtitle');
        searchLyrics(artist, songTitle);
    }
})

