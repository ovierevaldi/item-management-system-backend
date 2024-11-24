const itemCategory = {
    list: ["Food", "Drink",
    "Electronics",
    "Clothing",
    "Books",
    "Furniture",
    "Toys",
    "Sports",
    "Health & Beauty",
    "Stationery"],

    isInCategory: function(category_name){
        for (let i = 0; i < itemCategory.list.length; i++) {
            const category = itemCategory.list[i];
            
            if(areEqualIgnoreCase(category_name, category))
                return true;

        }
        return false
    }

}

function areEqualIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}

export default itemCategory;