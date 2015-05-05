<?
$app_base	=	dirname(__FILE__);
include($app_base . '/config/local.php');
?>
<!-- You have reached my site in error -->
<html>
	<head>
		<title>Jeff Lyon's amazing web site</title>
		<meta type="LIVE" value="<?=LIVE?>"/>
		<style type="text/css">
			html, body, div, span, applet, object, iframe,
			h1, h2, h3, h4, h5, h6, p, blockquote, pre,
			a, abbr, acronym, address, big, cite, code,
			del, dfn, em, img, ins, kbd, q, s, samp,
			small, strike, strong, sub, sup, tt, var,
			b, u, i, center,
			dl, dt, dd, ol, ul, li,
			fieldset, form, label, legend,
			table, caption, tbody, tfoot, thead, tr, th, td,
			article, aside, canvas, details, embed, 
			figure, figcaption, footer, header, hgroup, 
			menu, nav, output, ruby, section, summary,
			time, mark, audio, video {
				margin: 0;
				padding: 0;
				border: 0;
				font-size: 100%;
				font: inherit;
				vertical-align: baseline;
			}
			/* HTML5 display-role reset for older browsers */
			article, aside, details, figcaption, figure, 
			footer, header, hgroup, menu, nav, section {
				display: block;
			}
			body {
				line-height: 1;
			}
			ol, ul {
				list-style: none;
			}
			blockquote, q {
				quotes: none;
			}
			blockquote:before, blockquote:after,
			q:before, q:after {
				content: '';
				content: none;
			}
			table {
				border-collapse: collapse;
				border-spacing: 0;
			}

			.clear:after {content: "."; display: block; height: 0; clear: both; visibility: hidden;}
			.clear {display: inline-block;}
			/* hide IE mac \*/
			* html .clear {height: 1%;}
			.clear {display: block;}
			/* */
			body {
				padding: 0px;
				margin: 0px;
				font-family: arial;
				background-color: #633;
			}
			.splash {
				width: 1024px;
				height: 622px;
				margin: 40px auto 0px auto;
				background: #000 url(/images/playground.png);
				position: relative;
			}
			.splash h1 {
				position: absolute;
				left: 42px;
				top: 340px;
				font-size: 50px;
				font-weight: normal;
				color: white;
				text-shadow: 0px 1px 5px black;
			}
			.splash h1 small {
				font-size: 24px;
			}
			.splash ul.projects {
				position: absolute;
				bottom: 0px;
				left: 0px;
				padding: 0px;
				margin: 0px 0px 0px 0px;
				list-style-type: none;
				background-color: rgba(0,0,0,.3);
				width: 100%;
			}
			.splash ul.projects li {
				width: 130px;
				float: left;
				margin: 0px 00px 0px 0px;
				padding: 40px 20px;
				-webkit-transition: background-color .2s linear;
				-moz-transition: background-color .2s linear;
				transition: background-color .2s linear;
			}
			.splash ul.projects li:last-child {
				padding-right: 24px;
			}
			.splash ul.projects li:hover {
				background-color: rgba(0,0,0,.2);
			}
			.splash ul.projects li a:first-child {
				display: block;
				margin: 0px auto 15px auto;
				width: 75px;
				height: 75px;
				background-size: 75px auto;
				background-repeat: no-repeat;
				background-position: center center;
				border-radius: 10px;
				-webkit-border-radius: 10px;
				-moz-border-radius: 10px;
			}
			.splash ul.projects li a {
				text-decoration: none;
			}
			.splash ul.projects li a:last-child {
				display: block;
				text-align: center;
				color: #eee;
				font-size: 18px;
				text-shadow: 0px 1px 2px black;
			}
			#shemale {
				display: block;
				text-align: right;
				width: 1000px;
				padding-top: 15px;
				color: white;
				opacity: .3;
				font-family: "Courier New";
				text-decoration: none;			
			}
			#shemale:hover {
				opacity: .5;
			}
			a {
				color: white;
			}
		</style>


	</head>
	<body>
		<div class="splash">
			<h1>Welcome to my playground.</h1>
			<ul class="projects clear">
				<li>
					<a style="background-image: url(/images/twitter.png)" href="http://twitter.com/rubbingalcohol"></a>
					<a href="http://twitter.com/rubbingalcohol">@rubbingalcohol</a>
				</li>
				<li>
					<a style="background-image: url(/images/tumblr.png)" href="http://blog.rubbingalcoholic.com"></a>
					<a href="http://blog.rubbingalcoholic.com">tumblr blog</a>
				</li>
				<li>
					<a style="background-image: url(/images/soundcloud.png); opacity: .7;" href="https://soundcloud.com/rubbingalcoholic"></a>
					<a href="https://soundcloud.com/rubbingalcoholic">SoundCloud</a>
				</li>
				<li>
					<a style="background-image: url(/images/github.png)" href="https://github.com/rubbingalcoholic"></a>
					<a href="https://github.com/rubbingalcoholic">GitHub</a>
				</li>
				<li>
					<a style="background-image: url(/images/cowcrypt.png)" href="http://rubbingalcoholic.github.io/cowcrypt/"></a>
					<a href="http://rubbingalcoholic.github.io/cowcrypt/">CowCrypt</a>
				</li>
				<li>
					<a style="background-image: url(/images/flagger.png)" href="http://flagger.io"></a>
					<a href="http://flagger.io">Flagger</a>
				</li>
				<!--
				<li>
					<a style="background-image: url(/images/sharemyshit.png)" href="http://sharemyshit.com"></a>
					<a href="http://sharemyshit.com">Share My Shit</a>
				</li>
				-->
			</ul>
			<a id="shemale" href="/lol">lol</a>
		</div>
		
		<script type="text/javascript">
			var pwn = 'c.com';
			var lol = 'f@rub';
			var omg = 'jef';
			var wtf = 'bingalcoholi';
			var lto = 'mai';
			// hopefully the bots don't have some sort of node.js powered scraper
			document.getElementById('shemale').href = lto + 'lto:' + omg + lol + wtf + pwn;
			document.getElementById('shemale').innerHTML = omg + lol + wtf + pwn;
		</script>
		<? if (LIVE) { ?>
			<!-- Piwik -->
			<script type="text/javascript">
				var _paq = _paq || [];
				_paq.push(['trackPageView']);
				_paq.push(['enableLinkTracking']);
				(function() {
					var u="//piwik.rubbingalcoholic.com/";
					_paq.push(['setTrackerUrl', u+'piwik.php']);
					_paq.push(['setSiteId', 3]);
					var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
					g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
				})();
			</script>
			<noscript><p><img src="//piwik.rubbingalcoholic.com/piwik.php?idsite=3" style="border:0;" alt="" /></p></noscript>
			<!-- End Piwik Code -->
		<? } ?>
	</body>

</html>
