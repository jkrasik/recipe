const adderState = {
    opened: false,
    ingredients: []
}


function toggleAdder() {
    const recipeAdder = document.querySelector('#recipe-adder')
    adderState.opened ? recipeAdder.setAttribute('style', 'display: none') : recipeAdder.setAttribute('style', 'display: block')
    adderState.opened = !adderState.opened
}

function saveIngredients() {
    const ingredients = document.querySelectorAll('.ingredient')
    ingredients.forEach((ingredient,index) => {
        if(ingredient.checked === true){
            adderState.ingredients.push(ingredientsList[index])
            ingredient.checked = false
        }
    })
}

function resetAdder() {
    adderState.opened = false
    adderState.ingredients = []
}

function createRecipe(e) {
    saveIngredients()
    const recipe = new Recipe(e.target.title.value, e.target.instructions.value, adderState.ingredients)
    recipes.push(recipe)
}

document.querySelector('#recipe-info').addEventListener('submit', (e) => {
    e.preventDefault()
    createRecipe(e)
    toggleAdder()
    resetAdder()
    e.target.title.value = ''
    e.target.instructions.value = ''
    renderRecipes(recipes)
})

document.querySelector('#close').addEventListener('click', () => {
    toggleAdder()
    resetAdder()
})