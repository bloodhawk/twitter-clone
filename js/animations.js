$(document).ready(function(){
	$twitterStream = $('#stream');
	$tweetContent = $('#tweet-content');
	$tweetCompose = $('#compose');
	$tweetControls = $('#tweet-controls');
	$charCount = $('#char-count');
	$tweetSubmit = $('#tweet-submit');
	$tweets = $('.tweet');
	$tweetActions = $('.tweet-actions')

	$tweetContent.hover(function(){
		$tweetControls.show();
		$tweetCompose.css({height: "4.5em"});
		}, function(){
		$tweetCompose.css({height: "2.5em"});
		$tweetControls.hide();
	});

	$tweetCompose.on("keyup", function(){
		var value = (140 - $tweetCompose.val().length);
		$charCount.text(value);
		if(value < 11){
			$charCount.css({color: "red"});
		} else {
			$charCount.css({color: ""});
		}
		if ($tweetCompose.val().length > 140) {
            $tweetSubmit.prop('disabled', true);
        } else {
            $tweetSubmit.prop('disabled', false);
        }
	});

	$tweetSubmit.on("click", function(){
		$twitterStream.prepend('<div class = "tweet"> <div class="content"> <img class ="avatar" src="img/alagoon.jpg" /> <strong class = "fullname">Aaron Rumery</strong> <span class="username">@bloodhawk</span> <p class = "tweet-text">' + $tweetCompose.val() + '</p> <div class="tweet-actions"> <ul> <li><span class="icon action-reply"></span> Reply </li> <li><span class="icon action-retweet"></span> Retweet </li> <li><span class="icon action-favorite"></span> Favorite </li> <li><span class="icon action-more"></span> More </li> </ul> </div> <div class="stats"> <div class="retweets"> <p class="num-retweets">0</p> <p> RETWEETS </p> </div> <div class = "favorites"> <p class = "num-favorites"> 0 </p> <p>FAVORITES</p> </div> <div class="users-interact"> <div> <img src="img/alagoon.jpg" /> </div> </div> <div class="time">1:04 PM - 19 Sep 13</div> </div> <div class="reply"> <img class="avatar" src="img/alagoon.jpg" /> <textarea class="tweet-compose" placeholder="Reply to @bloodhawk"/></textarea></div></div></div>');
		$tweets = $('.tweet');
		$tweets.first().click(function(){
		$(this).find('.stats').toggle("slow");
		$(this).find('.reply').toggle("slow");
		});
		$tweets.first().hover(function(){
		$(this).find('.tweet-actions').show();
		}, function(){
		$(this).find('.tweet-actions').hide();
		});
		$tweetCompose.val('');
		$charCount.text('140');
	});

	$tweets.hover(function(){
		$(this).children().children('.tweet-actions').show();
	}, function(){
		$(this).children().children('.tweet-actions').hide();
	});
	$tweets.click(function(){
		$(this).find('.stats').toggle("slow");
		$(this).find('.reply').toggle("slow");
	});
});