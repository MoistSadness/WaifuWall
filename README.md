# WaifuWall

This project was originally created by following the listed tutorials:  
 - https://www.youtube.com/watch?v=ngc9gnGgUdA&t=461s 
 - https://www.youtube.com/watch?v=aibtHnbeuio  

After completing the tutorial, I felt as though the project had more potential and decided to use it as the starting point for my own application  
This included the following
1. Converted the image upload from base64 to multipart-formdata to increase performance
2. Used cloudinary as a CDN to store images so the admin doesn't have to worry about storing files on the server
3. Rebuilding the UI from the ground up
    1. Changed the new post form to a clickable component that shows up when the + icon is clicked and removed when the user clicks outside of it
    2. Added a navbar
    3. Removed Material UI from the project entirely and used raw CSS to style the website

---

An interesting thing that happened while working on this project was that the tutorial's premade styles didn't work with the components; all the icons were in the wrong places and nothing worked like it did in the demo video. I spent about an hour trying to make everything work before I remembered MUI is basically what Bootstrap is for normal websites and made the cards myself using their documentation as reference. This ended up being pointless of course, as I ended up removing MUI in favor of doing it myself with CSS.



