# Swolr
### Brent Hanover (@brenthanover) 
### Oliver Yan Li (@Oliverlee1003)
### Albert Park (@Wohlte)
### Eric Wang (@ewang998)

#### Swolr is deployed at: http://swolr.herokuapp.com/

Swolr is a web application that introduces users to local gyms and personal trainers. It allows users to search for gyms and trainers based on preferences, book appointments with trainers, and leave reviews after their training sessions.




# Application structure

### Gyms Page:
* In a three-pane design, the application features a list of gyms with its picture, information, and location on a map using the Google Maps API.  
* At the top of the gyms page, there is an option in the search bar to filter results by tag (e.g. yoga, weightlifting) or by gym name. 
* For each listed gym, users can pull up a list of all trainers registered at that location. 


### Trainers page:
* In a single-card design, the application features trainer cards with a picture, a description, associated gym, and associated tags.
* Also featured is a dynamic rating of each trainer, averaged from the scores of all user reviews. Registered users who are logged in can leave a review and a rating of their trainers. 
* Clicking on the trainer pulls up the trainer page (see **Trainer Page** below). 
* Trainers can be filtered by workout type (yoga, bodybuilding etc), location, Price, and Gender. 

### myTrainers page:
* Features a trainer that is associated with a registered user's account. 

### Accounts Pages:
* The application features several features for registered members who are logged in.
* Users who are Gym Owners have the option to add new gyms. 
* Users who are Trainers may sign up as a trainer, and modify their existing trainer information. 




# Project task requirements

### Split up requirements into minimum, standard, and stretch requirements

#### Minimum requirements (3-5 will definitely complete):
- Filter function on trainer (after selecting gym, price low to high etc)
  - Completed, users can filter gyms and trainers by tags and search by name
- A trainer page (with dummy trainners’ information), profile page, and a gym page
  - Completed, there is a page with all trainers, a detailed page for each trainer, a page where trainers can edit their info, and a page with all of the gyms.
- Pop-up/page when selecting trainer, showing trainer’s information
  - Completed, a separate page was implemented when a trainer on the trainers page is clicked. That page has all of the detailed information for the trainer

#### Standard requirements (3-7 will most likely complete):
- Ability to create a profile for a user
  - Completed, users can sign in and create a trainer profile. Once they have created the profile they can edit their information on the trainer form page.
- Rating system for users, trainers, gyms
  - Completed for trainers, users can comment and rate trainers
- Map to show locations of gyms
  - Completed, Google maps API was integrated with the project to show the gyms location on a map
- Ability to leave reviews on pages
  - Completed for trainers, users can comment on trainers
- Have the admin account and limit user from updating the trainer’s information
  - Completed, when user signs up as a trainer a custom field - Trainer is updated to differentiate regular user and trainer. Trainer has the ability to update its own information
- Use Google maps API to find closest gyms and present that info in our app.
  - Not completed. Google maps API was implemented and GPS coordinates are stored in the block of data for each gym, but we did not implement an algorithm to sort gyms by location.

#### Stretch requirements (2-3, hope to complete 1):
- Matching system to give recommended lifting partners/trainers to members
  - Not implemented
- Paypal/Bitcoin
  - Not implemented


### Pick 2 minimum requirements and break each of them down into ~2-5 smaller tasks

#### Gyms page, Trainers page, Trainer page, profile page, Gyms page
- [x] List of Gym with information
- [x] Types of equipment
- [x] Hours, location

#### Trainers Page 
- [x] List of trainer with its brief bio (Picture, Name, Gym Locations, Introduction, workout tags)

#### Trainer page
- [ ] Availability (Text at first, Calendar format in the second phase)
- [x] Workout type, tags( eg. Arms, legs, Chest)
- [x] Bio 

#### User Profile page
- [ ] Your physical attributes
- [ ] List of gyms visited, workouts tried (tags), trainers/members trained with

#### Filter function on trainer
- [x] Workout type (yoga, bodybuilding etc), location, etc
- [ ] Location.
- [ ] Price (from low to high, high to low)
- [ ] Gender





# Challenges, learning, and future directions:
A few challenges appeared in our projects:

### Deployment
#### Issue:
Deployment was a significant challenge for us because we mixed Meteor with the MERN-stack application. We had backend calls working in both meteor and express. When we deployed, it failed and it was difficult to see exactly which part was causing the problem. We solved the problem by deploying the backend part separately as an API. This method made it easier to debug and deploy the app.

#### What did we learn?
We learned that it is a good idea to deploy the app early during development. This way, we know exactly which steps/parts have the problem for deployment. If the app is huge, we can to separate back end and front end and deploy separately.

### Styling:
#### Issue:
Our goal was to make the app as aesthetically pleasing as possible. When dealing with the header, we aimed to make it moving around and make sure that it would invite users to try the app. After cropping the image, changing the brightness of the picture and editing the CSS, we made our header moving up and down. 

We also had discussions on how the pages would look. For example, when we initially designed the layout of trainers page, we were debating whether to use card or rows to display the trainers. We mocked up the page by rows and cards separately and compared them together, and then agreed to use cards instead. 

#### What did we learn?
Team work, conflict resolution, and how to use semantic UI and CSS. In the future, those design ideas and css knowledge can help us. 


### Image storing in MongoDB:
#### Issue:
Originally, we were simply inputting image URLs to the database. We realized that this would be an issue if a user wanted to upload a new picture. So, we changed the forms to uploading a picture instead of the URL, converted the picture into a base64 string, and stored that string in our database. Then, there is a simple parser in the GymCard and TrainerCard components that parses the string into an image. This method has a limitation of only being able to upload pictures that are below ~50kb.

#### What did we learn?
New technologies can help us to store images. In the future, we can store an image using a base64 string and a parser.

### Action-reducer interface
#### Issue:
The trainer page data was not successfully rendered even when the action was called successfully, meaning that reducers were not called properly. After debugging for a while, we realized that it’s because we did not include reducers in the combined root reducers. 

#### What did we learn?
We gained a better understanding of the redux lifecycle more, and how every single part is connected to each other. 




# Initiative and additional contributions:

### Authentication
The authentication functionalities went beyond the features. Our original goal was simply to allow trainers to update their information, which would likely have been done by scrolling through and selecting which trainer to update. We then wanted to improve functionality to only allow the trainer to update their own data. After brainstorming, we realized that we can get meteor to assign each trainer a userID when the trainer signs up.  We then allowed trainers to access only their own trainer information only by the userID they were assigned with, when they created their profile. When a user signs up as a trainer, they will be assigned 'true' in the custom user field 'trainer', allowing us to separate standard users from trainers.

### Google Map API: 
We successfully incorporated Google Maps API into our application to show the location of gyms. To avoid misuse of the API key (which could end up in charges for us) we removed the key from the final project, only showing it in the presentation. The API allows us to input an address as a string and return GPS coordinates, and we store those coordinates as a string in our database. Then we embedded a map window in each gym card, centred the map on the coordinates for each gym, and dropped a marker at the coordinates.

### Dropdown for tags:
To get the list of tags associated with all gyms and trainers, we created a backend call that populates an array with the tags and stores it in redux. When we are filtering the gyms and trainers by tags, those tags appear as prompts in the form field.

### Search gyms and trainers by name
This was not part of our original goals. We created functionality to store the list of gym and trainers names in redux, and connected it to the search bar at the top of the gyms and trainers pages. Clicking on the search bar makes a list of all gym or trainer names pop up. As the user types, the options narrow down until the user can select the gym or trainer they're looking for. When they hit enter, the page will only show that gym or trainer.

### Loaded, loading, and not loaded features
To show the user that the website is loading and not just stalled, we wanted to implement a loading spinner. The spinner itself was downloaded through npm but the functionality implemented with redux. Right after the fetch data action is sent, we send an action to make the spinner component appear.  When the data is successfully fetched, we send a successful load action that removes the spinner component and puts in all of the cards populated with the data. If the data never loads, the spinner spins for a few seconds and then times out, and the spinner is removed and the page shows an error message in place of any component. These are all done with actions, redux, and switch statements.

### Frontend/backend split
The express backend in backend/api was later deployed separately as Swolr’s API and allowed us to separate Swolr’s Front-end and Back-end into 2 modules. This structure gave us the ability to work on both modules simultaneously and independently. As long as both the frontend and backend developers maintain the same standard of data between the RESTful API and meteor application, teams can work on only front or back end. This allows us to scale up our application more rapidly when needed. 

