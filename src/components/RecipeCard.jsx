
export default function RecipieCard({recipie}) {

    return (<div className = "RecipieCard">
        <img src={recipie.strMealThumb} alt={recipie.strMeal} width="200" />
        <h2>{recipie.strMeal}</h2>
        <p>{recipie.strCategory}</p>

    </div>)
}

