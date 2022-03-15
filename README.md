# OVERVIEW

This template was made as a guide to ensure you cover assessment criteria in your second milestone write up. It is specific to the **PORTFOLIO 2: Javascript Essentials** project. It was based off the [loves maths_readmd.md](https://github.com/Code-Institute-Solutions/readme-love-maths) with a few additions to help elevate you to possible distinction status.

## Helpful tools

Markdown's not all that easy so sometimes you may want to use some tools to make tables. 

- [Markdown Cheatsheet](https://guides.github.com/features/mastering-markdown/)
- [markdown table generator](https://www.tablesgenerator.com/markdown_tables) - used to help with documentation table formatting
- [mardown table of contents generator](https://ecotrust-canada.github.io/markdown-toc/) - used to create table of contents (be weary it does have some bugs if you have dashes or trailing spaces in your headers)
- [readme.so](https://readme.so/) - if you don't want to learn markdown, this tool might help you

# Table of Contents
Copy your readme to http://ecotrust-canada.github.io/markdown-toc/ to make a table of contents.  This will help assessors to see the structure of your readme. Just test it out ast this tool isn't perfect. It tends to mess up with special characters like dashes.

====================================== The Sections you Fill in are below ==============================

# International Flag Game - Portforlio Project 2
An interactive Front-End web application built using HTML, CSS and JavaScript with a structured layout and navigation model that is accessibile and responsive.

Here is a screenshot of navigation of my mobile deployed site:
![image](https://user-images.githubusercontent.com/68662449/158280812-7967fbcb-49f6-47c3-befd-e8db3e1388d0.png)
 
- Include a link to deployed project with one line explanation of project

## Author
Obiageli Onyekpe

## Project Overview
Do You Know Your Flags? is the challenge of this online interactive fun quiz. Users of all ages can play and can test their knowledge of national flags in a fun way as their answers generate scores during the course of the game. The link to the online quiz is provided here: https://oonyekpe.github.io/international-flag-game/
On the landing page users are presented with a Heading that tells them what the quiz challenge is, followed by simple instructions on How To Play the quiz in three quick steps. Quiz players can select a button to play one of two categories - 10 randomly presented flags or All flags (there are 255 of them). The game has a music feature that can be turned on or off during play, as well as a score tracking feature that can facilitate competition and make the challenge so much fun!

- Include a picture of site that shows it in responsive states and links to deployed code: http://ami.responsivedesign.is/
 ![image](https://user-images.githubusercontent.com/68662449/158282727-96e2fa9c-e04d-4a64-8e26-ea400b88ba2e.png)

- One or two paragraphs providing an overview of your project.
- Write this as a sales pitch or commercial to entice users to interact with your site or how you want investors to purchase your website.
- Include a link to your deployed website

## Table of Contents
Generate after readme is complete for UX and below

## UX

### Project Goals
Use this section to provide insight into your UX process, focusing on who this website is for, calling out demographics, what it is that they want to achieve and how your project is the best way to help them achieve these things.

This online quiz game is designed for inquisitive people with good general knowledge and interest in countries across the world. Users' age range would be from primary school age to 100 years! Visitors to the site will enjoy the simplicity and accessibility of the layout and find it easy to play the quiz game. This site is designed to meet accessibilty guidelines for people of all abilities.

### Wireframes
To begin constructing the idea, I drafted a rough layout on PowerPoint in order to visualise my idea. Here is a PDF of my [wireframes](https://github.com/oonyekpe/international-flag-game/blob/main/assets/docs/flag-game-wireframe.pdf)

### Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so and how they tie into  your user stories.

#### Implemented Features

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

It's easiest to break this section down into the header, footer, and each page/layer of your website. Call out any differences for mobile vs desktop presentations, include a screenshot of the implemented feature.

Don't forget your 404 error page.

#### Future Features

Use this section to discuss plans for additional features to be implemented in the future:

If you end up not developing some features you hoped to implement, you can include those in this section.


## Testing

I tested the quiz idea with two children and two adults and was encouraged by their positive feedback. After I completed the site, I asked for them to test the game and the feedback on their experience was that it was fun, interactive and easy to play.

### Validation Testing
I validated my code with the following websites (see the screenshots below):

- [CSS Validator](https://jigsaw.w3.org/css-validator/) no error was found.
![image](https://user-images.githubusercontent.com/68662449/158278031-510924eb-c905-42fa-8a15-420445dc3ffb.png)

- [HTML Validator](https://validator.w3.org/)
I fixed two warnings and now I have no errors or warnings, see link below:
![image](https://user-images.githubusercontent.com/68662449/158299153-29917aba-8cc2-4445-8554-84039bb01e7b.png)

- [JS validation](https://jshint.com) I copied my Script.JS file and pasted this since I used ES6, at the top of the file. 
`/*jshint esversion: 6 */ `
![image](https://user-images.githubusercontent.com/68662449/158274993-8fead18f-94d8-43c7-853c-ed5407acc83f.png)




### Cross Browser and Cross Device Testing
Create a table that lists out what devices, browsers, and operating system you tested your application on and a brief description of why you chose the mixture you did. The point is to prove that you looked at the site across various browsers, operating systems, and viewport breakpoints.

| TOOL / Device                 | BROWSER     | OS         | SCREEN WIDTH  |
|-------------------------------|-------------|------------|---------------|
| real phone: motog6            | chrome      | android    | XS 360 x 640  |
| browser stack: iPhone5s       | safari      | iOs        | XS 320 x 568  |
| dev tools emulator: pixel 2   | firefox     | android    | SM 411 x 731  |
| browserstack: iPhone 10x      | Chrome      | iOs        | SM 375 x 812  |
| browserstack: nexus 7 - vert  | Chrome      | android    | M 600 x 960   |
| real tablet: ipad mini - vert | safari      | iOs        | M 768 x 1024  |
| browserstack: nexus 7 - horiz | firefox     | android    | LG 960 x 600  |
| chrome emulator: ipad - horiz | safari      | iOs        | LG 1024 x 768 |
| browserstack                  | Chrome      | windows    | XL 1920 x 946 |
| real computer: mac book pro   | safari 12.1 | Mohave     | XL 1400 x 766 |
| browserstack                  | IE Edge 88  | windows 10 | XL 1920 x 964 |

### Manual Testing

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. 

There are 3 ways you can document your testing:

**1. Markdown**

Describing your testing process is via scenarios, right here such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

**2. Use Spreadsheets**    

Here is a [Manual Testing Template](https://docs.google.com/spreadsheets/d/1vc1IVL-ydQwWeWMqnk_GRox6HE6qxDLpchGse8Crayo/edit#gid=296578096) that you can use as a starting point to keep track of your testing efforts. Make a copy of it in your own account and update as needed to reflect the browsers you are testing and features.  

**3.Use Github Agile Tools**

Create Custom Issue Template and A Pojrect Board in git hub.[Here's a brief overview](https://docs.google.com/document/d/1nDS5tZeMO77Dfq85IZGMSV6C41XaPm9FwcpR3k-UTVc/edit?usp=sharing) I put together on how to do this

It's ok to spot check specific functionality across devices and browsers but each page should be viewed as a whole for each device/browser combo at least once too.

A quick way to check if items are exceeding the screen width of a project is to run this javascript in the console for various screen emulations:

```
var docWidth = document.documentElement.offsetWidth;
[].forEach.call(document.querySelectorAll('*'),function(el){if(el.offsetWidth > docWidth){console.log(el);}});
```

### Defect Tracking

You should mention  any  bugs or problems you discovered during your testing, even if you haven't addressed them yet.
Again there are 3 different ways to do this, by your final project you should be using git hub tools.

**1. Markdown**

Desribe the issue in markdown. Include steps to reproduce, then what you did to resolve it.

1. Contact form allows anything for email collection, even blank.
   1. added pattern to HTML to make it have at least one character then the @ sybmol then a least one character and the . sign and at least one - 3 characters at the end.

**2. Use Spreadsheets**

Here is a [Defect Tracking Template](https://docs.google.com/spreadsheets/d/1tYB4X4wTCNEW_Y1no3hsGbclh2bLokl_I5Ev3s5EuJA/edit?usp=sharing) you use as a starting point to track defects. Make a copy of the sheet to your own account and update the Features sheet to match your project. 

**3. Use Github Agile Tools**

Create Custom Issue Template and a milestone in git hub.[Here's a brief overview](https://docs.google.com/document/d/1nDS5tZeMO77Dfq85IZGMSV6C41XaPm9FwcpR3k-UTVc/edit?usp=sharing) I put together on how to do this.

### Defects of Note
Some defects are more pesky than others. Highlight 3-5 of the bugs that drove you the most nuts and how you finally ended up resolving them.


### Outstanding Defects
It's ok to not resolve all the defects you found. If you know of something that isn't quite right, list it out and explain why you chose not to resolve it.

## Lighthouse Audits

You should run your deployed website pages through lighthouse's audit to check performance, accessibility, best practices and SEO scores. You should aim to get 85 or higher score. 
https://web.dev/measure/  If you have lower scores, read the report and follow the links to address the flagged issues. You can run this tool from Chrome Dev Tools too against your local machine, but the performance will the worst (I personally ignore my performance results unless it's deployed code. I hope for > 60 on that mark, but > 85 on the other 3)

## Deployment

1. Go to the repository and click on the Settings tab
![image](https://user-images.githubusercontent.com/68662449/158276068-c1f0d6dc-244a-428a-a0ca-bcbba973b612.png)
2. Click on the Pages link in the left navigation
![image](https://user-images.githubusercontent.com/68662449/158276279-df5e602e-1e6b-4046-89e6-4155c7bb75e7.png)
3. In the Sources section click on the NONE button and select MAIN from options:
![image](https://user-images.githubusercontent.com/68662449/158276523-2d582ec4-e085-4812-8773-aa6affb6da77.png)
4. Click the SAVE button and my blue area of the deployed URL shows up:
![image](https://user-images.githubusercontent.com/68662449/158276709-23a5f107-8602-4150-94db-c8952cad2322.png)




## Credits

To avoid plagiarism amd copyright infringement, you should mention any other projects, stackoverflow, videos, blogs, etc that you used to gather imagery or ideas for your code even if you used it as a starting point and modified things. Giving credit to other people's efforts and ideas that saved you time acknowledges the hard work others did. 

### Content

Use bullet points to list out sites you copied text from and cross-reference where those show up on your site

### Media

Make a list of sites you used images from. If you used several sites try to match up each image to the correct site. This includes attribution for icons if they came from font awesome or other sites, give them credit.

### Acknowledgments

This is the section where you refer to code examples, mentors, blogs, stack overflow answers and videos that helped you accomplish your end project. Even if it's an idea that you updated you should note the site and why it was important to your completed project.

If you used a CodeInstitute Example project as a starting point. Make note of that here.

