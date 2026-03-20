$('ul').on('click','li', function() {
    $(this).toggleClass('red')
})

$('ul').on('click','span', function(event) {
    $(this).parent().fadeOut(1000, function(){
        $(this).remove()
    })
    event.stopPropagation()
})

$('input').on('keypress', function(event){

    if(event.which === 13){
        let newTodo = $(this).val()
        $(this).val('')

        $('ul').append(`<li><span><i class="far fa-trash-alt"></i></span>${newTodo}</li>`)
    }
})


 // if li red
    // if($(this).css('color') === 'rgb(255, 0, 0)'){
    //     $(this).css({

    //         color: 'black',
    //         textDecoration: 'none',
            
    
    //     });
    // } else{
    //     $(this).css({

    //         color: 'red',
    //         textDecoration: 'line-through',
            
    
    //     });

    // }
