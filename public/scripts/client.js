$(document).ready(function() {
  //GET method using ajax and jquery to renderTweets from /tweets to the page
  const loadTweets = () => {
    $.ajax(`/tweets`,{
      method: "GET",
    })
    .then(tweets => renderTweets(tweets));
  }
  loadTweets();

  
  $('.new-tweet form').submit(function (event) {
    event.preventDefault();
    
    const inputTextLength = $(this).children("textarea").val().length;
    //serialize the new-tweet data form input and submit post server
    $.ajax(`/tweets`,{
      data: $(this).serialize(),
      method: "POST"
    })
  })

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
    let tweets = `
  <article>
    <header>
      <img src="${data.user.avatars}" alt="avatar"> 
      <span class="tweetName">${data.user.name}</span>
      <span class="tweetTag">${data.user.handle}</span>
    </header>
    <p>${data.content.text}</p>
    <footer>
      <span class="data">${timeago.format(data.created_at)}</span>
      <div class="icons">
      <i class="fa-solid fa-heart"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-flag"></i>
      </div>
    </footer>
  </article>`;
    return tweets;
  };
});