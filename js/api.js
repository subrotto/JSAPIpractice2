const kanye=()=>{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data=>update(data));
}

const update=quote=>{
    const block=document.getElementById('quote');
    block.innerText=quote.quote;
}

const randomUser=()=>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res=>res.json())
    .then(data=>updateUser(data));
}
randomUser();

const updateUser=data=>{
    const infos=data.results;
    const div=document.getElementById('div');
    for(const info of infos){
        const p=document.createElement('p');
        p.innerText=info.name.first;

        div.appendChild(p);
    }
}