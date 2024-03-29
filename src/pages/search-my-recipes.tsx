import React from "react";

import SavedRecipeComponent from "../components/SavedSearchResult";
import SearchComponent from "../components/Search"; // Assuming this is the file name of your search component

const MyRecipesPage = () => {
    // Example recipes data
    const recipes = [
        {title: "Recipe 1", description: "This is a description for Recipe 1."},
        {title: "Recipe 2", description: "This is a description for Recipe 2."},
        {title: "Recipe 3", description: "This is a description for Recipe 3."},
    // ...other recipes
    ];

    const handleDoubleClick = title => {
        console.log("Recipe was clicked");
    // Here you can add your logic to navigate to the recipe details page
    };

    return (
        <div className="container mx-auto p-6">
            <SearchComponent />
            <div className="mt-6">
                {recipes.map((recipe, index) => (
                    <SavedRecipeComponent
                        key={index}
                        title={recipe.title}
                        description={recipe.description}
                        onDoubleClick={handleDoubleClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyRecipesPage;
