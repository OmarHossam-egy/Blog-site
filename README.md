
# DECI- roject 

## Requirements

You will be creating a Personal Blog website that includes:

- A home page that displays two or more summaries of featured blog posts.

- At least one blog post page.

### Page Requirements

- You can use placeholder images (see Unsplash(opens in a new tab) or Lorem Picsum(opens in a new tab)) or you can use your own custom images. Similarly, you can use either placeholder text (see Lorem Ipsum Generator(opens in a new tab)) or your own written blog posts.

### Your home page must include:
- A navigation bar using anchor elements (these can use fake links for pages not created for this project).

#### At least two blog post cards for featured blog posts:

- Card content should include the post title and a short summary of post.

- The card should be linked to the blog post page for that post. You are only required to create one actual post page so the link to any other posts can be fake links.

- A footer

### Your blog post page must include:

- A header with the blog post title

#### Information about the author:

- name
- title or school affiliation
- short bio
- avatar image
- Post content (can be placeholder text)

- Links to one or more social media site (e.g. Facebook, Twitter, Instagram, LinkedIn) to encourage users to share your post
- All HTML must follow best practices. 


## Styling Requirements

You will create custom styling for the home page and the blog post page. Do not reference any external CSS frameworks (e.g. Bootstrap).

### Your styling must use:

- Flexbox to create at least two components or pattern
    Grid to create the layout for each page
- Custom typography with at least three properties for each selector, e.g. font-size, color, font-family
- At least three different colors used in any combination for for text, borders and backgrounds
- Your styling should allow your site to display correctly on on mobile, desktop and tablet devices. You can use Chrome Dev Tools(opens in a new tab) to simulate a tablet or a mobile device.

#### All CSS must follow best practices

## Project Structure
#### Your Blog Website must include:

- At least two HTML files (one for the main page and one for the blog post page)
- At least three CSS files (each page should have its own CSS file that is imported into the primary CSS file)

# Development Strategy

In this project, you'll write code across a handful of HTML and CSS files. Note that it's very important that you plan your project before you start writing any code! Break your project down into small pieces of work and strategize your approach to each one. With these bite-sized amounts, it'll be easier to debug and fix any issues that appear.

Feel free to implement your own design workflow, but if you get stuck -- this will get you up and running!

Set up the file structure of your project.
You'll need separate HTML files and related CSS files for the home page and the blog post. These files should be organized into subdirectories.

If you use any image files rather than links to image urls for your avatars and any other images, you'll also need to add folders for those.


You should end up with a structure that looks similar to this:

├── index.html
├── assets
│   ├── css
│   │   ├── style.css
│   │   ├── home.css
│   │   └── post.css
│   └── images // if needed
│       ├── ?
│       └── ?
└── blog-posts
        └── post1.html


2. Draw mock pages for the website.
Make a quick sketch of the different headers, boxes, etc. to help you think through how you want to organize the page layout.

3. Build out the HTML for the home page.
Build out each section of the page focusing on the elements you need to use for each section. Don't worry about styling yet!

🤔 If you need a refresher on how HTML should be structured, review the Udacity Front End Web Development Cheat Sheet(opens in a new tab).


Build the HTML for your example blog post.
You can use the HTML you built for the home page as a starter, and then change the parts that need to be different on the blog post page.

Style your pages with CSS.
You should have one primary CSS file that is linked to from each of the HTML pages, and then import separate CSS files(opens in a new tab) for each page into the primary CSS file. Remember that you need to both Flexbox and Grid and your design needs to usable on devices of all sizes!

Add links between pages.
If your project structure is set up correctly and you add the appropriate links within your HTML, a user should be able to click on those links to go between the main page and the blog post(s) you have created. Note that it is fine to have some fake links for items you haven't built out.

Test and iterate!
Make sure that everything on each page is working and looks the way you want it to look.
Validate your HTML(opens in a new tab) and CSS(opens in a new tab).
Check for responsivness using the Chrome Dev Tools(opens in a new tab) device simulator.
Review the project rubric(opens in a new tab) to confirm that you have met all of the requirements.

[OPTIONAL] Add extra features
If you have extra time you can add features or functionality to make your project standout! Here are some suggestions:
Deploy your project to Github Pages(opens in a new tab) so you can share it with friends and others.
Write one or more real blog posts to replace the placeholder text.
Replace the placeholder images with custom images.
Add more pages to the site -- maybe an "About the Author" page?
