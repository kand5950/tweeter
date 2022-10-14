$(document).ready(function() {

  //GET method using ajax and jquery to renderTweets from /tweets to the page
  const loadTweets = () => {
    $.ajax(`/tweets`,{
      method: "GET",
    })
      .then(tweets => renderTweets(tweets));
  };
  loadTweets();

  //Validation first before using POST to submit tweet to server
  $('.new-tweet form').submit(function(event) {
    event.preventDefault();

    const inputTextLength = $(this).children("textarea").val().length;
    const $errorMsg = $(this).children("h5");
    $errorMsg.slideUp(60);

    if (inputTextLength > 140) {
      $('.new-tweet h5 span').text("Over 140 character limit!");
      $errorMsg.slideDown(350);

    } else if (inputTextLength === 0) {
      $('.new-tweet h5 span').text("You cannot post an empty text");
      $errorMsg.slideDown(350);
    

    } else {
    //serialize the new-tweet data form input and submit post server
      $.ajax(`/tweets`,{
        data: $(this).serialize(),
        method: "POST",
        success: function(tweets) {
          $('.tweets').empty();
          loadTweets();
          $('.new-tweet textarea').val('');
          $('.counter').text('140');
        }
      });
    }
  });

  //Renders an arguement of tweets and posts it in tweet container
  const renderTweets = (tweets) => {
  //order of tweets reversed
    tweets.reverse();
    // loops through tweets
    for (let tweet of tweets) {
    // calls createTweetElement for each tweet
      let tweetContainer = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $('.tweets').append(tweetContainer);

    }
  };

  //Preventing XSS with escape function
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  //Create a HTML skeleton for a new Tweet
  const createTweetElement = (data) => {
    let tweets = `
      <article>
        <header>
          <img src="${escape(data.user.avatars)}" alt="avatar"> 
          <span class="tweetName">${escape(data.user.name)}</span>
          <span class="tweetTag">${escape(data.user.handle)}</span>
        </header>
        <p>${escape(data.content.text)}</p>
        <footer>
          <span class="data">${escape(timeago.format(data.created_at))}</span>
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