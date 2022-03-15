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
Here is a link to my deployed project: (https://oonyekpe.github.io/international-flag-game/).

Here is a screenshot of navigation of my mobile deployed site:
![image](https://user-images.githubusercontent.com/68662449/158313360-f9e0b9d2-c065-453f-8329-64d34720cba3.png)

## Author
Obiageli Onyekpe

## Project Overview
Do You Know Your Flags? is the challenge of this online interactive fun quiz. Users of all ages can play and test their knowledge of national flags in a fun way as their answers generate scores during the course of the game. The link to the online quiz is provided here: (https://oonyekpe.github.io/international-flag-game/).
On the Home page users are presented with a Heading that tells them what the quiz challenge is, followed by simple instructions on How To Play the quiz in three quick steps. Quiz players can select a button to play one of two categories - 10 randomly presented flags or All flags (there are 255 of them). The game has a music feature that can be turned on or off during play, as well as a score tracking feature that can facilitate competition and make the challenge so much fun!

Picture of site that shows it in responsive states and links to deployed code: http://ami.responsivedesign.is/
 ![image](https://user-images.githubusercontent.com/68662449/158282727-96e2fa9c-e04d-4a64-8e26-ea400b88ba2e.png)

## UX

### Project Goals
This online quiz game is designed for inquisitive people with good general knowledge and interest in countries across the world. Users' age range would be from primary school age to 100 years! Visitors to the site will enjoy the simplicity and accessibility of the layout and find it easy to play the quiz game. This site is designed to meet accessibilty guidelines for people of all abilities, including for the visually impaired.

### Wireframes
To begin constructing the idea, I drafted a rough layout on PowerPoint in order to visualise my idea. Here is a PDF of my [wireframes](https://github.com/oonyekpe/international-flag-game/blob/main/assets/docs/flag-game-wireframe.pdf)

### Features
- 
In this section, you should go over the different parts of your project, and describe each in a sentence or so and how they tie into  your user stories.

#### Implemented Features

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

It's easiest to break this section down into the header, footer, and each page/layer of your website. Call out any differences for mobile vs desktop presentations, include a screenshot of the implemented feature.

Don't forget your 404 error page.

#### Future Features
One HTML Home page with interactive and functional features.
- Game coded to generate two types of quiz games which the player can access by selecting one of two buttons.
- Sound: button at the top of page can be clicked to turn music on or off during play.
- Heading at top of the page clearly stating what the quiz game is about.
- Heading "How to Play" with short list of 3 instructions to play the game.
- Two play buttons named "10 random flags" and "All flags " for the player to select a quiz.
- Your Score count display - starting with 0/10 or 0/255 replaces previous headings at top of the page once quiz is initiated.
Here is a screenshot showing this feature: ![image](https://user-images.githubusercontent.com/68662449/158320354-71f6719b-bbb4-482a-8700-cde2d9a2b0a7.png)

- Images - Flag images from all countries; game coded to randomly select for each of the two quiz categories.
- SELECT Option Buttons - three buttons under each flag presented (select the name of the country whose flag appears).
- CHECK answer Button -  click to check you answer
- Pop up flash phrases - 'CORRECT!" or "SORRY! The correct answer is:" in response to player's selected answer.
- NEXT Question Button - alligned under 3 answer selection options.
- Position of CORRECT answer changes with each new flag option. In the two screenshots below, correct answer is top and then middle option:
![image](https://user-images.githubusercontent.com/68662449/158320812-00137ba8-253e-4ae2-a7dd-06ab47887221.png)

![image](https://user-images.githubusercontent.com/68662449/158321042-b486ba2d-5ed5-4195-977d-1da429a5f433.png)


- Your FINAL Score is 10/10 etc. at he end of each game. 
- Play again BUTTON appears at the end of each round. Here is a screenshot demonstrating this feature:
![image](https://user-images.githubusercontent.com/68662449/158319626-845a84d0-7dde-4a05-97b7-ccc636fa3126.png)
 
- Refresh page in browser to return to Home page at any point.


Use this section to discuss plans for additional features to be implemented in the future:

- In future, I would like to improve the design of the Home page, spread the visible features out more
- I would like to add more design feature for a more aesthetic presentation
- I would include a navigation panel for the Home button and perhaps a Forward and Back.
- I would complete the development for the "All flags" quiz
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

- DELL Latitutde E7440, ACER Swift 1 - Windows 10 OS- Microsoft Edge and Google Chrome : no issues encountered. 
These browswers are most commonly used in my network of family and friends, I tested on laptops and  Tablets within my circles of interaction.
- Huawei P10 and Nokia X20 - all funtions and features worked well.
### Manual Testing

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. 


### Defect Tracking

You should mention  any  bugs or problems you discovered during your testing, even if you haven't addressed them yet.
Again there are 3 different ways to do this, by your final project you should be using git hub tools.


### Outstanding Defects
It's ok to not resolve all the defects you found. If you know of something that isn't quite right, list it out and explain why you chose not to resolve it.

## Lighthouse Audits

I ran an audit at [web.dev](https://web.dev/measure/)
![image](https://user-images.githubusercontent.com/68662449/158301462-4450c0c5-c3d7-4381-a0e1-1fc839957dd4.png)

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

