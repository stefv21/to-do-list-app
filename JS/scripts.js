function newItem() {
    let inputValue = $('#input').val().trim(); // Trim whitespace

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        // Create the list item and button with jQuery
        let li = $('<li></li>').text(inputValue);
        let deleteButton = $('<button class="crossOutButton"></button>').text('X');
        
        // Append the button to the list item
        li.append(deleteButton);

        // Append the list item to the list
        $('#list').append(li);
        
        // Clear the input field after adding
        $('#input').val('');

        // Make the list sortable
        $('#list').sortable();

        // Event handler to remove the item
        deleteButton.on("click", function() {
            li.remove(); // Remove the list item when the button is clicked
        });
    }
}
