/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1665363013863
}

const $tweet = createTweetElement(tweetData);


        // <article>
        //   <header>
        //     <img src="/images/profile-hex.png" alt="avatar"> 
        //     <span class="tweetName">Your Name</span>
        //     <span class="tweetTag">@YourName</span>

        //   </header>
        //   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        //   <footer>
        //     10 days ago
        //     <div class="icons">
        //     <i class="fa-solid fa-heart"></i>
        //     <i class="fa-solid fa-retweet"></i>
        //     <i class="fa-solid fa-flag"></i>
        //     </div>
        //   </footer>
        // </article>


console.log($tweet);
$('.tweets').append($tweet);

});