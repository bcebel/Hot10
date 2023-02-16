
const formYouTube = document.getElementById('search-form');
const nameYouTube = form.elements['search-input'];


const apiKey = "AIzaSyD_OontTe5oxGL6ubzggjNv1koAaRXjgNE";
//const searchTerm = '';
const base = `https://www.googleapis.com/youtube/v3/search/?part=snippet&key=${apiKey}&q=`;

const output = document.querySelector('.output');
output.textContent = 'Search Me :  '; 
const myInput = document.createElement('input');
output.append(myInput);
myInput.setAttribute('type','text');
myInput.value = 'Bosstones';

const btn = document.createElement('button');
btn.textContent = 'Get Data';
btn.style.display = 'block';
output.append(btn);

const myList = document.createElement('div');
output.append(myList);

//Add new eventListener for retrieving userinput
btn.addEventListener('click',(e)=>{
    const url = `${base}${searchTerm}&maxResults=10`
    fetch(url).then(rep=>rep.json())
    .then((data)=>{
        addData(data.items);
    })
})

function addData(arr){
    myList.innerHTML = '';
    const yt= 'https://youtu.be/';
    arr.forEach((res) => {
        if (res.id.videoId){
        const main = document.createElement('div');
        myList.append(main);
        // main.textContent = res.id.videoId;
        const myLink = document.createElement('a');
        myLink.textContent = res.id.videoId;
        myLink.setAttribute('href', yt+res.id.videoId)
        myLink.setAttribute('target','_blank');
       
        console.log(res.snippet.description);

        const thumb = document.createElement('img');
        main.append(thumb);
        thumb.setAttribute('src', res.snippet.thumbnails.default.url);
        const des = document.createElement('p');
        main.append(des);
        main.append(myLink);
        des.innerHTML = `<h3>${res.snippet.title}</h3><small>${res.snippet.description}</small>`;
    }

    });
}

formYouTube.addEventListener('submit', function(event){event.preventDefault();
    searchTerm = nameYouTube.value;}