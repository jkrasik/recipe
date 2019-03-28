const recipes = []

const ingredientsList = ['Meat', 'Pasta', 'Cheese', 'Fruits', 'Vegetables', 'Eggs', 'Rice']

class Recipe {
    constructor(title, steps, ingredients = []){
        this.title = title
        this.steps = steps
        this.ingredients = ingredients
    }

    renderRecipe() {
        const recipesList = document.querySelector('#recipesList')
        const recipe = document.createElement('div')
        const title = document.createElement('h1')
        const instructions = document.createElement('p')
        const ingredients = document.createElement('p')

        title.textContent = this.title
        instructions.textContent = this.steps
        ingredients.textContent = this.ingredients
        
        recipe.append(title, instructions, ingredients)
        recipesList.appendChild(recipe)
    }

    canBeMade(filters) {
        
    }
}




function renderRecipes(recipes) {
    const recipesList = document.querySelector('#recipesList')
    recipesList.textContent = ''
    recipes.forEach((recipe) => {
        recipe.renderRecipe()
    })
}

document.querySelector('#add-recipe').addEventListener('click', toggleAdder)