    function newItem(){
    
            let li = $('<li></li>');
            let inputValue = $('#input').val();
            li.append(inputValue);

            if (inputValue === '') {
                alert("You must write something!");
            } else {
                $('#list').append(li);
            }

            function crossOut() {
                li.toggleClass("strike");
            }
            
            li.on("dblclick", function crossOut() {
                li.toggleClass("strike");
            });

            let crossOutButton = $('<crossOutButton></crossOutButton>');
            crossOutButton.append(document.createTextNode('X'));
            li.append(crossOutButton);
    
            crossOutButton.on("click", deleteListItem); 
            function deleteListItem (){
            li.addClass("delete");
            }


            $('#add-button').on('click', function() {
                $('#myModal').modal('show'); // Show the modal
            });
            
            // Modal add button functionality
            $('#modal-add-button').on('click', function() {
                let modalInputValue = $('#modal-input').val(); 
                newItem(modalInputValue); 
                $('#modal-input').val(''); 
                $('#myModal').modal('hide'); 
            });


            $('#list').sortable();

            $('#input').on('keypress', function(event) {
                if (event.which === 13) {
                  event.preventDefault(); 
                  newItem(); 
                }
              });
            }
