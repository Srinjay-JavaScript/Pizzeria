    var menu_array = ["Double Cheese Margherita", "Farm House", "Veg Extravaganza", "Non Veg Supreme", "Indi Chicken Tikka", "Veg Supreme"];
    
    function menu_list(){
        var htmlCode;
        htmlCode = "<ol class = menu_item>";
        for (i = 0; i < menu_array.length; i++){
            htmlCode = htmlCode + "<li>" + menu_array[i] + "</li>" + "<br>"; 
        }
        htmlCode = htmlCode + "</ol>";
        document.getElementById("show_menu").innerHTML = htmlCode;
    }

    function recommend_list(){
        var htmlCode;
        htmlCode = "<section class=\"card\">";
        menu_array.sort();
        for (i = 0; i < menu_array.length; i++){
            htmlCode = htmlCode +  "<div style=\"width: 350px; float: left; margin-left: 15px; margin: 10px; background-color: black; color: white;\" class= \"card\">" + "<img src=\"pizzaRealMenu!.jpg\" height=\"100\" width=\"100\">" + menu_array[i] + "</div>";
        }
        htmlCode = htmlCode + "</section>";
        document.getElementById("pizzaslist").innerHTML = htmlCode;
    }

    function recommend_pizza() {
        var userPizza = document.getElementById("userAdd_toList").value;
        menu_array.push(userPizza);
        recommend_list();
    }
    function search_Value(pizzaName) {
        return pizzaName == document.getElementById("searchInput").value;
    }
    
    function search_Pizza(){
        document.getElementById("errorShow").innerHTML = "";
        var filteredArray = menu_array.filter(search_Value)
        if (filteredArray.length == 0) {
            document.getElementById("errorShow").innerHTML = "No matching results found for" + "\"" + document.getElementById("searchInput").value + "\""
            document.getElementById("pizzaslist").innerHTML = "";
        }
        else {
            htmlCode = "<section class=\"card\">";
            filteredArray.sort();
            for (i = 0; i < filteredArray.length; i++){
                htmlCode = htmlCode +  "<div style=\"width: 350px; float: left; margin-left: 15px; margin: 10px; background-color: black; color: white;\" class= \"card\">" + "<img src=\"pizzaRealMenu!.jpg\" height=\"100\" width=\"100\">" + filteredArray[i] + "</div>";
            }
            htmlCode = htmlCode + "</section>";
            document.getElementById("pizzaslist").innerHTML = htmlCode;
        }
    }
        
    


    