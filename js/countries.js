const viewCountries=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>updateData(data));
}

viewCountries();
const updateData=data=>{
    const countriesDiv=document.getElementById('countries');
    data.forEach(country=>{
        const div=document.createElement('div');
        div.classList.add('country');

        div.innerHTML=`
            <h3>${country.name.official}</h3>
            <p>${country.capital}</p>
            <button onclick="updateDetails('${country.name.official}')">Details</button>
        `;
        
                
        countriesDiv.appendChild(div);
            
       

    });
};

const updateDetails=(name)=>{
    const url=`https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>newupdate(data));
};

const newupdate=data=>{
    const newData=data[0];
    const section=document.getElementById('details');
  
    section.innerHTML=`
      <h3>Population:${newData.population}</h3>
      <h3>Name:${newData.name.common}</h3>
      <img src="${newData.flags.png}">
    `;
   
}