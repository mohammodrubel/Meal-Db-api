const searchBtn = ()=>{
    const input = document.getElementById('input')
    const inputValue = input.value 

    if (inputValue == ''){
        alert('write food name')
    }else{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
            .then(Response => Response.json())
            .then(data => loadData(data.meals))
    }

    input.value='';
}

    const loadData = (result)=>{
        const foodContainer = document.getElementById('foodContainer')
        result.forEach(singleMeal =>{
            console.log(singleMeal)
            const div = document.createElement('div')
            div.classList.add('col')
            div.innerHTML=`
            <div class="card">
            <img src="${singleMeal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${singleMeal.strMeal.slice(0,32)}</h5>
              <a class="btn btn-info" href="${singleMeal.strYoutube}">go anyWhere..</a>
              <p class="card-text"> ${singleMeal.strInstructions.slice(0,100)}</p>
            </div>
          </div>
            `
            foodContainer.appendChild(div)
        })
    }