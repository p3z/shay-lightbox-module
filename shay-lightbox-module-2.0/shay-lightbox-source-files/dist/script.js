function shay_lightbox_init_divs(){
     $('.shay-lightbox-div').click( (e) => {
          let selected_image = e.target;
          let image_url = getComputedStyle(selected_image).getPropertyValue("background-image");
          
          let actual_url = (image_url.match( /url\([^\)]+\)/gi ) || [""])[0].split(/[()'"]+/)[1];
          
          create_shay_lightboxes(actual_url);
          
     })
}

function create_shay_lightboxes(url){
    let lightbox = '<div class="shay-lightbox-container"></div>';
     $('body').prepend(lightbox);     
     
    let lightbox_image = `<img class="shay-zoomed-image"/>`;
    $('.shay-lightbox-container').append(lightbox_image);
     
    $('.shay-zoomed-image').attr('src', url);
    init_removal_handler();
     
}



// This needs to happen AFTER the lightbox has been created -> otherwise no handler is attached
function init_removal_handler(){
      $('.shay-lightbox-container').click( () => {
          $('.shay-lightbox-container').remove();
      });     
}


shay_lightbox_init_divs(); // Remember to init