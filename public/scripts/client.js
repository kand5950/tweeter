const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1665438266794
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1665524666794
  }
];

$(document).ready(function() {

  const renderTweets = (tweets) => {
  // loops through tweets
    for (let tweet of tweets) {
    // calls createTweetElement for each tweet
      let tweetContainer = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $('.tweets').append(tweetContainer);

    }
  };

  const createTweetElement = (data) => {
    let tweet = `
  <article>
    <header>
      <img src="${data.user.avatars}" alt="avatar"> 
      <span class="tweetName">${data.user.name}</span>
      <span class="tweetTag">${data.user.handle}</span>
    </header>
    <p>${data.content.text}</p>
    <footer>
      <span class="data">${data.created_at}</span>
      <div class="icons">
      <i class="fa-solid fa-heart"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-flag"></i>
      </div>
    </footer>
  </article>`;
    return tweet;

  };


  renderTweets(tweetData);

});