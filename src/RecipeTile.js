import React from 'react'
import './index.css'
import { v4 as uuidv4 } from "uuid"

export default function RecipeTile({recipe}) {
    return (
        <div className="recipeTile" onClick={() => window.open(recipe["recipe"]["url"])}>
            <img className="recipeTile__img" src={recipe["recipe"]["image"]} alt="recipe poster"/>
            <p className="recipeTile__name" key={uuidv4()}>
                {recipe["recipe"]["label"]}
            </p>
        </div>
    )
}
