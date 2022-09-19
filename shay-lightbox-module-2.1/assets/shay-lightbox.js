/*
     Shay Lightbox Module
     A simple solution for handling lightboxes on both image tags and divs with a background image set
*/

// config_obj hasnt been fully integrated yet
const config_obj = {
     captions: {
          using_captions: false,
          caption_location: "bottom" // will accept top or bottom
          
     },
     custom_lightbox: false
}



// Attach the lightbox handler to divs with a class of "shay-lightbox-div". Background image is required
function shay_lightbox_init_divs(){
     jQuery('.shay-lightbox-div').click( (e) => {
          let selected_image = e.target;
          let image_url = getComputedStyle(selected_image).getPropertyValue("background-image");          
          let actual_url = (image_url.match( /url\([^\)]+\)/gi ) || [""])[0].split(/[()'"]+/)[1]; 
          let caption = jQuery(e.target).attr("data-shay-lightbox-caption") ?? "";
          
          create_shay_lightboxes(actual_url, caption);
          
     })
}

// Attach the lightbox handler to image tags with a class of "shay-lightbox-img". src attribute is required
function shay_lightbox_init_imgs(){
     
     jQuery('.shay-lightbox-img').click( (e) => {
          let selected_image = e.target;
          let image_url = jQuery(e.target).attr("src");
          let caption = jQuery(e.target).attr("data-shay-lightbox-caption") ?? "";
          create_shay_lightboxes(image_url, caption);          
     });
     
}

/* 1. Builds the lightbox element and prepends it to the document body
* 2. Builds an image tag using the src url of the image clicked on. Appends this to the lightbox element
* 3. Initialises a handler for removing the lightbox from the DOM
*/
function create_shay_lightboxes(url, caption){
    // Create a main lightbox container 
    let lightbox = '<div class="shay-lightbox-container"></div>';
    jQuery('body').prepend(lightbox);     
     
    // Create any elements you want to add to that container (this will eventually be togglable so users can add their own elements/css)
    let lightbox_image = `<img class="shay-zoomed-image"/>`;  
    let lightbox_caption = `<div class="shay-lightbox-caption-area"></div>`;
     
    // Append the lightbox elements to the lightbox container
    jQuery('.shay-lightbox-container').append(lightbox_image);
     
    // Set up the elements as needed
    jQuery('.shay-zoomed-image').attr('src', url);
     
     if(caption){          
          jQuery('.shay-lightbox-container').append(lightbox_caption);
          jQuery('.shay-lightbox-caption-area').text(caption);
     }
     
    
     
    // Enable the lightbox to be removed
    init_removal_handler();
     
}


/*
* Destroys the lightbox when clicked
 This needs to happen AFTER the lightbox has been created (ie NOT on DOM load) -> otherwise no handler is attached
*/
function init_removal_handler(){
      jQuery('.shay-lightbox-container').click( () => {
          jQuery('.shay-lightbox-container').remove();
      });     
}


// Now just initialise both types of handler (or just use the one you need!)
shay_lightbox_init_divs(); 
shay_lightbox_init_imgs();