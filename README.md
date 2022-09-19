# shay-lightbox-module
A simple jQuery dependent plugin for handling image lightboxes. This plugin can be used easily as a standalone solution or in tandem with WordPress!

Demo: https://codepen.io/pezbruh/full/WNJjGgV

## How to use...
The plugin is designed to work with both img tags that have a src specified AND div tags that have a background-image specified.
  - For img tags: Add the class 'shay-lightbox-img' to your image.
  - For div tags: Add the class 'shay-lightbox-div' to your div.
    
  
### If using as a standadlone plugin
Make sure jQuery is installed on the site before you include the script for this module. If using WordPress, jQuery comes out of the box so there's no need to worry about this step. 
- Move the files from the assets folders into an appropriate place in your project. (Feel free to rename them, just remember to reference them correctly in the html)
- Make sure to call whichever of the 2 functions you need (shay_lightbox_init_divs() for divs and shay_lightbox_init_imgs() for images, just in case that wasn't obvious).
- Add the specified classes mentioned above to any images that you wish to create a lightbox for.

### As a WordPress plugin
- Install the plugin zip file and activate it.
- Inside any page or post when an image is selected: add the specified classes mentiond above to any images that you wish to create a lightbox for.
