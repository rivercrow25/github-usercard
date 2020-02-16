/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createCard(object) {
  const card = document.createElement('div'),
    pic = document.createElement('img'),
    info = document.createElement('div'),
    name = document.createElement('h3'),
    username = document.createElement('p'),
    location = document.createElement('p'),
    profile = document.createElement('p'),
    profileurl = document.createElement('a'),
    followers = document.createElement('p'),
    following = document.createElement('p'),
    bio = document.createElement('p');

  card.classList.add('card')
  info.classList.add('card-info')
  name.classList.add('name')
  username.classList.add('username')

  card.append(pic)
  card.append(info)
  info.append(name)
  info.append(username)
  info.append(location)
  info.append(profile)
  info.append(profileurl)
  info.append(followers)
  info.append(following)
  info.append(bio)

  pic.src = object.avatar_url
  name.textContent = object.name
  username.textContent = object.login
  location.textContent = `Location: ${object.location}`
  profileurl.src = object.html_url
  profile.textContent = `Profile: ${this.profileurl}`
  followers.textContent = `Followers: ${object.followers}`
  following.textContent = `Following: ${object.following}`
  bio.textContent = `Bio: ${object.bio}`

  return card
}

const parent = document.querySelector('.cards')

axios.get('https://api.github.com/users/rivercrow25')
  .then(response => {
    console.log(response)
    parent.append(createCard(response.data))
  })
  .catch(error => {
    console.log(error)
  })
const followersArray = []
axios.get('https://api.github.com/users/rivercrow25/following')
  .then(response => {
    console.log(response)
    response.data.forEach(item => {
      parent.append(createCard(item))
    })

    return followersArray
  })
console.log(followersArray)


/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
