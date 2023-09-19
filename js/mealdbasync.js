const meal=async ()=>{
    const inputField=document.getElementById('input-field');
    const inputText=inputField.value;
    // if(inputText==''){
    //     noData();
    // }
    // else{
        inputField.value='';
        const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
    
const res=await fetch(url);
const data=(await res).json();
mealresult(data.meals);

        // fetch(url)
        // .then(res=>res.json())
        // .then(data=>mealresult(data.meals));
    // }
   
};

const noData=()=>{
    const cards=document.getElementById('cards');
    const div=document.createElement('div');
    div.classList.add('col');
    div.innerHTML=`
    <h1>You Have not Entered Anything</h1>
    `;
    cards.appendChild(div);
}

const mealresult=meals=>{
    const cards=document.getElementById('cards');
    cards.textContent='';
    for(const meal of meals){
        const div=document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div  onclick="mealDetails(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb
        }" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
        </div>
      </div>
        `;
        cards.appendChild(div);
    }
};

const mealDetails=mealid=>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`;

    fetch(url)
    .then(res=>res.json())
    .then(data=>updateDetails(data.meals[0]));
};

const updateDetails=meal=>{
    const newCard=document.getElementById('details');
    newCard.textContent='';
    const div=document.createElement('div');
    div.innerHTML=`
    <img src="${meal.strMealThumb
    }" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
          <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
    newCard.appendChild(div);
};