// layout.js
$(() => {
    // header

    // footer fnb toggle js
    const fnbTitle = $('.fnb-title'),
        fnbItem = $('.fnb-item'),
        fnbList = $('.fnb-list');
    
    fnbTitle.on('click', function(){
        if(!$(this).parent(fnbItem).hasClass('active')){
            fnbItem.removeClass('active');
            $(this).parent(fnbItem).addClass('active');
        } else {
            $(this).parent(fnbItem).removeClass('active')
        }
    });

    
    
});