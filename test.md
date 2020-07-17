<div id="readme" class="Box-body readme blob js-code-block-container p-5 p-xl-6">
    <article class="markdown-body entry-content container-lg" itemprop="text"><h1><a id="user-content-dwarf-match-testing" class="anchor" aria-hidden="true" href="#dwarf-match-testing"></a>Star Wars Quiz Testing</h1>
<p>The build of Star Wars Quiz has been tested through manual process during each stage and on a wide range browsers &amp; devices.</p>
<h2><a id="user-content-table-of-contents" class="anchor" aria-hidden="true" href="#table-of-contents"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Table of Contents</h2>
<ol>
<li>
<p><a href="#code-validation"><strong>Code Validation</strong></a></p>
</li>
<li>
<p><a href="#testing-against-user-stories"><strong>Testing Against User Stories</strong></a></p>
</li>
<li>
<p><a href="#manual-testing"><strong>Manual Testing</strong></a></p>
<ul>
<li>
<p><a href="#responsive-design-testing"><strong>Responsive Design Testing</strong></a></p>
<ul>
<li><a href="#overview"><strong>Overview</strong></a>
<ul>
<li><a href="#landing-page"><strong>Landing Page</strong></a></li>
<li><a href="#modals"><strong>Modals</strong></a></li>
<li><a href="#game-area"><strong>Game Area</strong></a>
<ul>
<li><a href="#google-dev-tools---lighthouse-audit"><strong>Google Dev tools</strong></a>
<ul>
<li><a href="#desktop-audit-result"><strong>Desktop Audit Result</strong></a></li>
<li><a href="#mobile-audit-result"><strong>Mobile Audit Result</strong></a></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p><a href="#functionality-testing"><strong>Functionality Testing</strong></a></p>
<ul>
<li><a href="#overview"><strong>Modal Testing Overview</strong></a></li>
<li><a href="#individual-modal-testing"><strong>Individual Modal Testing</strong></a></li>
<li><a href="#audio-and-music-testing"><strong>Audio and Music Testing</strong></a></li>
<li><a href="#game-functionality-testing"><strong>Game Functionality Testing</strong></a></li>
</ul>
</li>
<li>
<p><a href="#additional-testing"><strong>Additional Testing</strong></a></p>
</li>
</ul>
</li>
</ol>
<h2><a id="user-content-code-validation" class="anchor" aria-hidden="true" href="#code-validation"></a>Code Validation</h2>
<p>All code written has been thoroughly validated and passed through the following online validators:</p>
<ul>
<li>
<p>HTML - All code was run through the <a href="https://validator.w3.org/" rel="nofollow">W3C HTML Validator</a> to ensure it was valid code and no errors were made.</p>
</li>
<li>
<p>CSS - All styling was run through the <a href="https://jigsaw.w3.org/css-validator/" rel="nofollow">W3C CSS Validator</a> to ensure it was valid and no errors were made.</p>
</li>
<li>
<p>JavaScript - All my script was run through the <a href="https://jshint.com/" rel="nofollow">JSHint</a> validator to ensure full functionality without errors.</p>
</li>
</ul>
<h2><a id="user-content-testing-against-user-stories" class="anchor" aria-hidden="true" href="#testing-against-user-stories"></a>Testing Against User Stories</h2>
<p>The below goes through of of the user stores listed in the UX section of the <a href="https://github.com/lewejuice/starwars-quiz/blob/master/README.md">README.md</a>.</p>
<p><strong>As a user, I want:</strong></p>
<ol>
<li>
<p>I want the landing page to engage me instantly, as this will encourage me to go on further and actually play the game.</p>
<ul>
<li>The landing page is an introduction to the game which instantly relates the game to star wars with it's star wars crawling text. For users returning to the game there is an optional skip button so they dont have to sit through this every time</li>
<li>The background image on the home page has been animated through the use of JavaScript to give the user the feel of flying through stars which was done to again, build the star wars feel.</li>
<li>The colour scheme used is consistent throughout, and matches the star wars colours.</li>
<li>The use of the lightsaber images programed to appear when the button is hovered on, along with lightsaber sound effects, is a fun interactive take on simply pressing a button.</li>
</ul>
</li>
<li>
<p>Manouvering around the site needs to be made clear and instructive wihtout any confusion.</p>
<ul>
<li>All buttons are clearly marked with either text or an icon.</li>
<li>Once the quiz has started it has a clear, understandable structure, with a timer letting the user know how long they have to answer the question.</li>
</ul>
</li>
<li>
<p>The quiz needs to be accessible and straightforward, with instructions and a mute button if needed.</p>
<ul>
<li>All options and instructions are accessible in clear manor, with a simple to follow structure.</li>
<li>The audio control has been kept as basic as possible, with a speaker icon with either sound or an 'X' for mute, to visually tell the user if the sound is on or off.</li>
</ul>
</li>
<li>
<p>I want to make the game personal to myself, so it gives me a unique experience.</p>
<ul>
<li>This is acomplished through an optional pathway between light and dark(good or evil), which will completely change the audio, images and questions.</li>
<li>It also randomises the questions each time, so users will get different questions each time.</li>
<li>Also depending on the users choices previously and the score they obtain, will asign the user with a star wars character that matches their choices.</li>
</ul>
</li>
<li>
<p>I want to be able to share my score with my friends, and compare.</p>
<ul>
<li>This has been acomplished via a social media sharing API from <a href="https://www.shareaholic.com/">Shareaholic</a>. Their API provides buttons to easily transfer the user to their chosen social platform, with a shared post made up.</li>
</ul>
</li>
<li>
<p>I want to be able to stay updated with my correct and wrong answers during the quiz &amp; also how long I have to answer a question.</p>
<ul>
<li>Throughout the quiz it has star wars style icons, that represent each question, which turn blue or red depending on the right or wrong answer.</li>
<li>A timer counting down from twenty is also clearly shown, which restarts with each question and when the timer ends, it will render the question wrong and move on.</li>
</ul>
</li>
<li>
<p>I want the questions to be randomised so they are not the same as previous games.</p>
<ul>
<li>Through JavaScript, the quiz has been programed to pick at random, ten questions from fifty on each side(light or dark), to ensure the user doesn't repeat the same questions each time.</li>
</ul>
</li>
</ol>
<h2><a id="user-content-manual-testing" class="anchor" aria-hidden="true" href="#manual-testing"></a>Manual Testing</h2>
<p>I have included the manual testing processes which took place during the development stage to ensure that all aspects of the quiz work as intended.</p>
<h3><a id="user-content-responsive-design-testing" class="anchor" aria-hidden="true" href="#responsive-design-testing"></a>Responsive Design Testing</h3>
<p>During the development and testing phase of the site, I used Google Chrome Dev Tools to test the layout as I built my code and viewed each stage on different screen displays to makesure the quiz worked across multiple platforms.</p>
<p>All testing was performed using:</p>
<ul>
<li>Google Chrome</li>
<li>Explorer</li>
<li>Mozilla Firefox</li>
<li>Safari</li>
<li>Desktop - Two different screen sizes.</li>
<li>Mobile Phones - All inclusive devices provided by Chrome dev tools and on an actual iPhone 11 pro.</li>
<li>Tablets - All inclusive devices provided by Chrome Dev Tools as well as an iPad Air.</li>
</ul>
<h4><a id="user-content-overview" class="anchor" aria-hidden="true" href="#overview"></a>Overview</h4>
<p>Star Wars Quiz was designed and built to be displayed and used on multiple devices such as mobile phones, tablets, desktops.</p>
<p>Throughout the testing I made notes on what elements needed work and altered them accordingly.</p>
<p>The main quiz page was designed using the Bootstrap Framework, which was extremely useful in honing the sites full flexibility. Some elements had to be made to measure, instead of letting the element size changing itself to adapt to a new space.</p>
<h5><a id="user-content-landing-page" class="anchor" aria-hidden="true" href="#landing-page"></a>Landing Page</h5>
<p>The landing page was a tricky obstical, due to it's animated text, I had to makesure the time span wasn't too long for the user, while also making sure the full text displayed, I managed to change the letter and line spacing to achieve the desired outcome.</p>
<ul>
<li>
<p>I tested all text and buttons on the landing and home page so that it remained clearly visible on multiple platforms.</p>
</li>
<li>
<p>Another tool which improved the sites responsiveness to multiple screen sizes was the online CSS <a href="https://autoprefixer.github.io/" rel="nofollow">Autoprefixer</a>.</p>
</ul>
<ul>
<li>
<p>Bug Identified - <strong>Lightsaber Button Glitch</strong></p>
<li>The animation used for the 'light' and 'dark' buttons had a problem on screens smaller than desktop, where the light saber would travel out of alignment.</li>
<p>Fix Applied:</p>
<p>In order to correct this issue I had to remove them on smaller screen sizes, while increasing the button size using the CSS <code>@media (min-width:)</code> which although, did make the smalller screen version a little less interactive, but it was more functional and asthetically pleasing.</li>
</ul>
<h5><a id="user-content-modals" class="anchor" aria-hidden="true" href="#modals"></a>Instruction Modal</h5>
<p>I tested the instruction modal on a variety of screen sizes, and found on a mobile phone, it worked better filling the entire screen, instead of just a pop up.</p>
<p>Bug Discovered - <strong>A large ammount of blank space at the bottom of the modal on larger screen sizes</strong></p>
<ul>
<li>The ammount of space is obvious to user, as the text was small and hard to read and would need to zoom in to see it.</li>
</ul>
</ul>
<p>Fix Applied:</p>
<ul>
<li>This issue was fixed by creating a custome screen width in dev tools to resemble a large monitor, and adjusting the size with css so the text was easier to read and filled up more space on the screen.</li>
</ul>
</ul>
<h4><a id="user-content-game-area" class="anchor" aria-hidden="true" href="#game-area"></a>Game Area</h4>
<p>The game area is main feature of the site and I thoroughly tested that each level displays correctly on the various devices as well as ensuring the game play is smooth and easily viewable by the user no matter the orientation of the device.</p>
<ul>
<li>
<p>Bug Discovered - <strong>Wrong or Right Answer Sound &amp; Score Audio</strong>:</p>
<ul>
<li>On the last question, when clicking your answer, sound of the answer would overlap the sound given for the score structure. This caused the user not being able to hear either sound which resulted in mixture of noises.</li>
</ul>
</li>
<li>
<p>Fix Applied:</p>
<ul>
<li>Too fix this issue I had to go into my audio.js file and add an if statement <code>if (currentQuestion <= 8)</code> too the answer sound, so it would only play if it was on the second to last question or less.</li>
</ul>
</li>
</ul>
<h4><a id="user-content-google-dev-tools---lighthouse-audit" class="anchor" aria-hidden="true" href="#google-dev-tools---lighthouse-audit"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Google Dev tools - Lighthouse Audit</h4>
<p>The below screenshots have been taken use the Google Chrome Dev Tools Lighthouse Audit functionality that shows I have almost 100% for all their scoring criteria.</p>
<h5><a id="user-content-desktop-audit-result" class="anchor" aria-hidden="true" href="#desktop-audit-result"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Desktop Audit Result</h5>
<p><a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/ee5d4672b270421bae8e6f3b443b2aebc1936eb7/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f616e64792d6f73626f726e652f696d6167652f75706c6f61642f76313538383038353431382f44776172662532304d617463682f496d616765732f4c69676874686f7573655f41756469745f2d5f4465736b746f705f53746174735f6f756731306b2e706e67"><img src="https://camo.githubusercontent.com/ee5d4672b270421bae8e6f3b443b2aebc1936eb7/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f616e64792d6f73626f726e652f696d6167652f75706c6f61642f76313538383038353431382f44776172662532304d617463682f496d616765732f4c69676874686f7573655f41756469745f2d5f4465736b746f705f53746174735f6f756731306b2e706e67" alt="Google Chrome Light House Audit - Desktop Result" data-canonical-src="https://res.cloudinary.com/andy-osborne/image/upload/v1588085418/Dwarf%20Match/Images/Lighthouse_Audit_-_Desktop_Stats_oug10k.png" style="max-width:100%;"></a></p>
<h5><a id="user-content-mobile-audit-result" class="anchor" aria-hidden="true" href="#mobile-audit-result"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Mobile Audit Result</h5>
<p><a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/5388707ace3abb5bce62c360be4aa4ad79ff9931/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f616e64792d6f73626f726e652f696d6167652f75706c6f61642f76313538383038353431382f44776172662532304d617463682f496d616765732f4c69676874686f7573655f41756469745f2d5f4d6f62696c655f53746174735f72387a6463782e706e67"><img src="https://camo.githubusercontent.com/5388707ace3abb5bce62c360be4aa4ad79ff9931/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f616e64792d6f73626f726e652f696d6167652f75706c6f61642f76313538383038353431382f44776172662532304d617463682f496d616765732f4c69676874686f7573655f41756469745f2d5f4d6f62696c655f53746174735f72387a6463782e706e67" alt="Google Chrome Light House Audit - Mobile Result" data-canonical-src="https://res.cloudinary.com/andy-osborne/image/upload/v1588085418/Dwarf%20Match/Images/Lighthouse_Audit_-_Mobile_Stats_r8zdcx.png" style="max-width:100%;"></a></p>
<h3><a id="user-content-functionality-testing" class="anchor" aria-hidden="true" href="#functionality-testing"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Functionality Testing</h3>
<h4><a id="user-content-modal-testing-overview" class="anchor" aria-hidden="true" href="#modal-testing-overview"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Modal Testing Overview</h4>
<p>I performed manual tests on all the modals to ensure they could open and close correctly. All modals opened and closed as expected, no bugs discovered with this functionality.</p>
<ul>
<li>
<p>Bug Discovered - <strong>Multiple Modals Open At Once</strong>:</p>
<p>During the testing of the modals, I discovered that I could launch multiple modals at the same time. For example, when the Audio Modal was open, I could also open the Tutorial Modal and this would open up behind the Audio Modal. This was not an intended function.</p>
</li>
<li>
<p>Fix Applied:</p>
<p>In order to fix this unintended bug, I created the below function which is executed when either the Tutorial or Audio Modal is opened and it closes the other one:</p>
<div class="highlight highlight-source-js"><pre>    <span class="pl-k">function</span> <span class="pl-en">closeActiveModal</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
        <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">getElementById</span><span class="pl-kos">(</span><span class="pl-s">"tutorial"</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-c1">classList</span><span class="pl-kos">.</span><span class="pl-en">remove</span><span class="pl-kos">(</span><span class="pl-s">"d-block"</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
        <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">getElementById</span><span class="pl-kos">(</span><span class="pl-s">"tutorial"</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-c1">classList</span><span class="pl-kos">.</span><span class="pl-en">add</span><span class="pl-kos">(</span><span class="pl-s">"d-none"</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
        <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">getElementById</span><span class="pl-kos">(</span><span class="pl-s">"soundModal"</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-c1">classList</span><span class="pl-kos">.</span><span class="pl-en">remove</span><span class="pl-kos">(</span><span class="pl-s">"d-block"</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
        <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">getElementById</span><span class="pl-kos">(</span><span class="pl-s">"soundModal"</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-c1">classList</span><span class="pl-kos">.</span><span class="pl-en">add</span><span class="pl-kos">(</span><span class="pl-s">"d-none"</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
    <span class="pl-kos">}</span></pre></div>
</li>
</ul>
<h4><a id="user-content-individual-modal-testing" class="anchor" aria-hidden="true" href="#individual-modal-testing"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Individual Modal Testing</h4>
<p>All tests were performed multiple times using a Desktop, Mobile phone, and tables. In addition, they were tested on Google Chrome, Google Canary, Mozilla Firefox and Microsoft Edge.</p>
<p>The physical mobile/tablet devices tested on were a Samsung S9, iPhone X, and an iPad Pro as well as using the emulated devices available in Google Chrome and Mozilla Firefox Dev tools.</p>
<ol>
<li>
<p><strong>Audio Modal</strong></p>
<ol>
<li>
<p>Sound Effect and Music Level Slider</p>
<ul>
<li>
<p>I tested the slider to ensure that it updated the volume level correctly. I initially included the console.log to report to the console the volume level after any change in the audio level was made.</p>
</li>
<li>
<p>I tested that once the volume had been adjusted, the audio levels would remain at that level throughout the users journey in the game and until they adjusted it again.</p>
</li>
<li>
<p>I tested that the text within the ON/OFF button correctly updated to reflect the current status of whether the audio was ON/OFF.</p>
</li>
<li>
<p>No bugs were discovered with the slider functionality and it correctly adjusted the volume levels.</p>
</li>
</ul>
</li>
<li>
<p>Sound Effect and Music ON/OFF Button</p>
<ul>
<li>
<p>I tested the functionality of the buttons one by one to ensure that they muted the right aspect they were assigned and once they were turned on again, Sound Effects and Music would play.</p>
</li>
<li>
<p>In addition to toggling the buttons ON/OFF in the same session, I commenced a game, played a few cards, toggled the both audio's OFF, played a few more cards, then exited to the landing page and then re-entered a game to ensure that sounds/music would commence until the Sound Effects/Music were turned back on.</p>
</li>
<li>
<p>No bugs were discovered with the mute button functionality and all sound effects and music remained muted until they were turned on again.</p>
</li>
</ul>
</li>
</ol>
</li>
<li>
<p><strong>Level Selection Modal</strong></p>
<ol>
<li>
<p>I tested each button individually to ensure that the <code>levelChoice</code> function was correctly grabbing the ID of the button pressed by logging it to the console as well as logging the current value of the variable <code>app.difficultyLevel</code>.</p>
<ul>
<li>
<p>After ascertaining that the correct value was saved to the variable and I had linked it to the relevant functions of creating the game area, I tested it further to ensure the right amount of cards were generated according to that level.</p>
</li>
<li>
<p>No bugs were discovered with the level button functionality and the correct values were passed through to the variable.</p>
</li>
</ul>
</li>
</ol>
</li>
<li>
<p><strong>Tutorial Modal</strong></p>
<ol>
<li>
<p>The Tutorial Modal primarily holds text to explain to the user how to play the game, the only functionality to test was that it launches and closes as expected.</p>
<ul>
<li>No bugs were discovered with the functionality of the Tutorial Modal.</li>
</ul>
</li>
</ol>
</li>
<li>
<p><strong>Victory Modal</strong></p>
<ol>
<li>
<p><strong>Victory Modal and Sound Effect</strong></p>
<ul>
<li>
<p>I tested that the Victory Modal would launch at the end of each game once the user completed their current level and play the victory sound (as long as the user had not muted the audio).</p>
</li>
<li>
<p>No bugs were discovered with the functionality of the Victory Modal pop-up appearing.</p>
</li>
<li>
<p>I tested whether the buttons within the play area would impact the Victory Modal. Aside from the issues mentioned previously about the Sound and Tutorial Modal there was one further element that impacted it.</p>
</li>
<li>
<p>Bug Discovered:</p>
<ul>
<li>If the user presses the "Restart Button" associated with the game area, the game would restart however; the Victory Modal would remain open.</li>
</ul>
</li>
<li>
<p>Fix Applied:</p>
<ul>
<li>
<p>To fix this bug, I created a function that would close the Victory Modal and associated it with the in-game "Restart Button" so that it would be executed upon that button being pressed.</p>
<div class="highlight highlight-source-js"><pre>    <span class="pl-k">function</span> <span class="pl-en">closeVictoryModal</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
        <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">getElementById</span><span class="pl-kos">(</span><span class="pl-s">"victory"</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-c1">classList</span><span class="pl-kos">.</span><span class="pl-en">add</span><span class="pl-kos">(</span><span class="pl-s">"d-none"</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
        <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">getElementById</span><span class="pl-kos">(</span><span class="pl-s">"victory"</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-c1">classList</span><span class="pl-kos">.</span><span class="pl-en">remove</span><span class="pl-kos">(</span><span class="pl-s">"d-block"</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
    <span class="pl-kos">}</span></pre></div>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>InnerText: Displaying Time Taken and Flip Count</strong></p>
<ul>
<li>
<p>I tested that the Victory Modal correctly displayed the amount of flips and time it took the user to complete the level. It correctly displayed the amount of flips taken.</p>
</li>
<li>
<p>Bug Discovered:</p>
<ul>
<li>
<p>When it came to displaying the time taken for the user to complete the level, it initially updated the HTML text to say that it took the user <code>0 minutes and XX seconds</code> to complete the level however; if the game took less than a minute to complete then it should only show the amount of seconds to complete.</p>
</li>
<li>
<p>In addition, if it only took the user 1 minute to complete the level, then the HTML text should state <code>1 minute and XX seconds</code>.</p>
</li>
</ul>
</li>
<li>
<p>Fix Applied:</p>
<ul>
<li>
<p>To fix this, I added in an if statement as follows:</p>
<div class="highlight highlight-source-js"><pre>    <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">app</span><span class="pl-kos">.</span><span class="pl-c1">timer</span><span class="pl-kos">.</span><span class="pl-c1">minutesTimer</span> <span class="pl-c1">===</span> <span class="pl-c1">0</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>  
        <span class="pl-s1">app</span><span class="pl-kos">.</span><span class="pl-c1">victory</span><span class="pl-kos">.</span><span class="pl-c1">timeModal</span><span class="pl-kos">.</span><span class="pl-c1">innerText</span> <span class="pl-c1">=</span> <span class="pl-s">`<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">app</span><span class="pl-kos">.</span><span class="pl-c1">timer</span><span class="pl-kos">.</span><span class="pl-c1">secondsTimer</span><span class="pl-kos">}</span></span> seconds to do it!`</span><span class="pl-kos">;</span>
        <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">app</span><span class="pl-kos">.</span><span class="pl-c1">timer</span><span class="pl-kos">.</span><span class="pl-c1">minutesTimer</span> <span class="pl-c1">===</span> <span class="pl-c1">1</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
        <span class="pl-s1">app</span><span class="pl-kos">.</span><span class="pl-c1">victory</span><span class="pl-kos">.</span><span class="pl-c1">timeModal</span><span class="pl-kos">.</span><span class="pl-c1">innerText</span> <span class="pl-c1">=</span> <span class="pl-s">`<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">app</span><span class="pl-kos">.</span><span class="pl-c1">timer</span><span class="pl-kos">.</span><span class="pl-c1">minutesTimer</span><span class="pl-kos">}</span></span> minute and <span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">app</span><span class="pl-kos">.</span><span class="pl-c1">timer</span><span class="pl-kos">.</span><span class="pl-c1">secondsTimer</span><span class="pl-kos">}</span></span> seconds to do it!`</span><span class="pl-kos">;</span>
        <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span>
        <span class="pl-s1">app</span><span class="pl-kos">.</span><span class="pl-c1">victory</span><span class="pl-kos">.</span><span class="pl-c1">timeModal</span><span class="pl-kos">.</span><span class="pl-c1">innerText</span> <span class="pl-c1">=</span> <span class="pl-s">`<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">app</span><span class="pl-kos">.</span><span class="pl-c1">timer</span><span class="pl-kos">.</span><span class="pl-c1">minutesTimer</span><span class="pl-kos">}</span></span> minutes and <span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">app</span><span class="pl-kos">.</span><span class="pl-c1">timer</span><span class="pl-kos">.</span><span class="pl-c1">secondsTimer</span><span class="pl-kos">}</span></span> seconds to do it!`</span><span class="pl-kos">;</span>
    <span class="pl-kos">}</span></pre></div>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>Restart Level</strong></p>
<ul>
<li>
<p>I tested the functionality of the "Restart" level button during each level to ensure it worked as intended.</p>
</li>
<li>
<p>No bugs were discovered with the functionality of the "Restart" level button and it correctly restarted the level at the same difficulty the user was playing at and reset the counter and time to 0.</p>
</li>
</ul>
</li>
<li>
<p><strong>Next Level</strong></p>
<ul>
<li>
<p>I tested that the "Next Level" button works correctly and generates a new game on the next highest difficulty. The functionality worked as intended if the user was on either Easy or Normal.</p>
</li>
<li>
<p>Bug Discovered:</p>
<ul>
<li>When the user was playing at the Hard difficulty, the Next Level button would show however; it caused an error as the user was already on the highest difficulty.</li>
</ul>
</li>
<li>
<p>Fix Applied:</p>
<ul>
<li>
<p>To fix this, I created the below function that runs an if statement as follows and displays the "Next Level" button if the user is not already on the hard level:</p>
<div class="highlight highlight-source-js"><pre>    <span class="pl-k">function</span> <span class="pl-en">showNextDifficulty</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">app</span><span class="pl-kos">.</span><span class="pl-c1">difficultyLevel</span> !== <span class="pl-s">"hard"</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
            <span class="pl-s1">app</span><span class="pl-kos">.</span><span class="pl-c1">victory</span><span class="pl-kos">.</span><span class="pl-c1">nextLevel</span><span class="pl-kos">.</span><span class="pl-c1">classList</span><span class="pl-kos">.</span><span class="pl-en">remove</span><span class="pl-kos">(</span><span class="pl-s">"d-none"</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
        <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span>
            <span class="pl-s1">app</span><span class="pl-kos">.</span><span class="pl-c1">victory</span><span class="pl-kos">.</span><span class="pl-c1">nextLevel</span><span class="pl-kos">.</span><span class="pl-c1">classList</span><span class="pl-kos">.</span><span class="pl-en">add</span><span class="pl-kos">(</span><span class="pl-s">"d-none"</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
       <span class="pl-kos">}</span>
    <span class="pl-kos">}</span></pre></div>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>Exit Function</strong></p>
<ul>
<li>
<p>I tested that the "Take me home" button works correctly and completes the functionality of clearing the game board and taking the user to the landing page.</p>
</li>
<li>
<p>No bugs were discovered with this functionality and it works as intended.</p>
</li>
</ul>
</li>
</ol>
</li>
</ol>
<h4><a id="user-content-audio-and-music-testing" class="anchor" aria-hidden="true" href="#audio-and-music-testing"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Audio and Music Testing</h4>
<p>All tests were performed multiple times using a Desktop, Mobile phone, and tables. In addition, they were tested on Google Chrome, Google Canary, Mozilla Firefox and Microsoft Edge.</p>
<p>The physical mobile/tablet devices tested on were a Samsung S9, iPhone X, and an iPad Pro as well as using the emulated devices available in Google Chrome and Mozilla Firefox Dev tools.</p>
<ol>
<li>
<p>Audio &amp; Music</p>
<ol>
<li>
<p><strong>Clicking Sound Effect Function</strong></p>
<ul>
<li>
<p>I tested that the function gets called whenever a button is clicked however; I decided not to include the function when the "Close" modal button is clicked.</p>
</li>
<li>
<p>I tested that the function does not play when the volume has been muted and that it plays at corresponding level that the Sound Effect slider is set at.</p>
</li>
<li>
<p>The original audio clip was a bit too long so I edited it and reduced the length of the clip and compressed it to reduce the size of the file.</p>
</li>
<li>
<p>No bugs were discovered with this function.</p>
</li>
</ul>
</li>
<li>
<p><strong>Card Match Sound Effect Function</strong></p>
<ul>
<li>
<p>I tested that the function  gets called whenever a matching pair is found. This function worked as intended however; there I did come across a bug.</p>
</li>
<li>
<p>Bug Discovered:</p>
<ul>
<li>When the user finds a second pair within quick succession of finding the first one, the Card Match function does not play on the second match as it hasn't finished executing on the first match.</li>
</ul>
</li>
<li>
<p>Fix Applied:</p>
<ul>
<li>To fix this, I edited the length of the audio to around 0.50 seconds and resolved the issue. <strong>Note: I did consider including an additional line of code within the <code>cardMatchEffect()</code> function to reset the currentTime of the audio to 0 so it could be played immediately but discounted it as the audio file length was suitable to reduce in length.</strong></li>
</ul>
</li>
<li>
<p>I tested that the function does not play when the volume has been muted and that the sound effect plays at corresponding level that the Sound Effect slider is set at.</p>
</li>
<li>
<p>No bugs were discovered with this function.</p>
</li>
</ul>
</li>
<li>
<p><strong>Card Flip Sound Effect Function</strong></p>
<ul>
<li>
<p>I tested that the function gets called whenever a card is clicked on in the game board and it works as intended.</p>
</li>
<li>
<p>I tested that the function does not play when the volume has been muted and that it plays at corresponding level that the Sound Effect slider is set at.</p>
</li>
<li>
<p>No bugs were discovered with this function. I had initially reduced the length of the audio prior to using within the game.</p>
</li>
</ul>
</li>
<li>
<p><strong>Victory Sound Function</strong></p>
<ul>
<li>
<p>I tested that the function gets called once the level has been completed and the Victory Modal has been launched.</p>
</li>
<li>
<p>No bugs were discovered with this function. I had initially reduced the length of the audio prior to using within the game.</p>
</li>
<li>
<p>The sound of the victory audio was very loud which led me to introduce a default volume level function that gets called on page load, and sets the volume of this to a max of 20%:</p>
<div class="highlight highlight-source-js"><pre>    <span class="pl-k">function</span> <span class="pl-en">defaultVolume</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
        <span class="pl-s1">audio</span><span class="pl-kos">.</span><span class="pl-c1">gameMusic</span><span class="pl-kos">.</span><span class="pl-c1">volume</span> <span class="pl-c1">=</span> <span class="pl-s1">audio</span><span class="pl-kos">.</span><span class="pl-c1">musicVolumeSlider</span><span class="pl-kos">.</span><span class="pl-c1">defaultValue</span> / <span class="pl-c1">100</span><span class="pl-kos">;</span>
        <span class="pl-s1">audio</span><span class="pl-kos">.</span><span class="pl-c1">clickAudio</span><span class="pl-kos">.</span><span class="pl-c1">volume</span> <span class="pl-c1">=</span> <span class="pl-s1">audio</span><span class="pl-kos">.</span><span class="pl-c1">soundVolumeSlider</span><span class="pl-kos">.</span><span class="pl-c1">defaultValue</span> / <span class="pl-c1">100</span><span class="pl-kos">;</span>
        <span class="pl-s1">audio</span><span class="pl-kos">.</span><span class="pl-c1">cardMatchAudio</span><span class="pl-kos">.</span><span class="pl-c1">volume</span> <span class="pl-c1">=</span> <span class="pl-s1">audio</span><span class="pl-kos">.</span><span class="pl-c1">soundVolumeSlider</span><span class="pl-kos">.</span><span class="pl-c1">defaultValue</span> / <span class="pl-c1">100</span><span class="pl-kos">;</span>
        <span class="pl-s1">audio</span><span class="pl-kos">.</span><span class="pl-c1">cardFlipAudio</span><span class="pl-kos">.</span><span class="pl-c1">volume</span> <span class="pl-c1">=</span> <span class="pl-s1">audio</span><span class="pl-kos">.</span><span class="pl-c1">soundVolumeSlider</span><span class="pl-kos">.</span><span class="pl-c1">defaultValue</span> / <span class="pl-c1">100</span><span class="pl-kos">;</span>
        <span class="pl-s1">audio</span><span class="pl-kos">.</span><span class="pl-c1">victoryAudio</span><span class="pl-kos">.</span><span class="pl-c1">volume</span> <span class="pl-c1">=</span> <span class="pl-c1">0.20</span><span class="pl-kos">;</span>
    <span class="pl-kos">}</span></pre></div>
</li>
<li>
<p>In addition to this, I introduced the following if statement within the event listener to ensure that the victory audio remains between 0% and 20%:</p>
<div class="highlight highlight-source-js"><pre>    <span class="pl-s1">audio</span><span class="pl-kos">.</span><span class="pl-c1">soundVolumeSlider</span><span class="pl-kos">.</span><span class="pl-en">addEventListener</span><span class="pl-kos">(</span><span class="pl-s">"change"</span><span class="pl-kos">,</span> <span class="pl-s1">event</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
        <span class="pl-s1">audio</span><span class="pl-kos">.</span><span class="pl-c1">clickAudio</span><span class="pl-kos">.</span><span class="pl-c1">volume</span> <span class="pl-c1">=</span> <span class="pl-s1">audio</span><span class="pl-kos">.</span><span class="pl-c1">soundVolumeSlider</span><span class="pl-kos">.</span><span class="pl-c1">value</span> / <span class="pl-c1">100</span><span class="pl-kos">;</span>
        <span class="pl-s1">audio</span><span class="pl-kos">.</span><span class="pl-c1">cardMatchAudio</span><span class="pl-kos">.</span><span class="pl-c1">volume</span> <span class="pl-c1">=</span> <span class="pl-s1">audio</span><span class="pl-kos">.</span><span class="pl-c1">soundVolumeSlider</span><span class="pl-kos">.</span><span class="pl-c1">value</span> / <span class="pl-c1">100</span><span class="pl-kos">;</span>
        <span class="pl-s1">audio</span><span class="pl-kos">.</span><span class="pl-c1">cardFlipAudio</span><span class="pl-kos">.</span><span class="pl-c1">volume</span> <span class="pl-c1">=</span> <span class="pl-s1">audio</span><span class="pl-kos">.</span><span class="pl-c1">soundVolumeSlider</span><span class="pl-kos">.</span><span class="pl-c1">value</span> / <span class="pl-c1">100</span><span class="pl-kos">;</span>

        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">audio</span><span class="pl-kos">.</span><span class="pl-c1">soundVolumeSlider</span><span class="pl-kos">.</span><span class="pl-c1">value</span> <span class="pl-c1">==</span> <span class="pl-c1">0</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
            <span class="pl-s1">audio</span><span class="pl-kos">.</span><span class="pl-c1">victoryAudio</span><span class="pl-kos">.</span><span class="pl-c1">volume</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span><span class="pl-kos">;</span>
        <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">audio</span><span class="pl-kos">.</span><span class="pl-c1">soundVolumeSlider</span><span class="pl-kos">.</span><span class="pl-c1">value</span> <span class="pl-c1">&gt;</span> <span class="pl-c1">0</span> <span class="pl-c1">&amp;&amp;</span> <span class="pl-s1">audio</span><span class="pl-kos">.</span><span class="pl-c1">soundVolumeSlider</span><span class="pl-kos">.</span><span class="pl-c1">value</span> &lt;= <span class="pl-c1">20</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
            <span class="pl-s1">audio</span><span class="pl-kos">.</span><span class="pl-c1">victoryAudio</span><span class="pl-kos">.</span><span class="pl-c1">volume</span> <span class="pl-c1">=</span> <span class="pl-s1">audio</span><span class="pl-kos">.</span><span class="pl-c1">soundVolumeSlider</span><span class="pl-kos">.</span><span class="pl-c1">value</span> / <span class="pl-c1">100</span><span class="pl-kos">;</span>
        <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span>
            <span class="pl-s1">audio</span><span class="pl-kos">.</span><span class="pl-c1">victoryAudio</span><span class="pl-kos">.</span><span class="pl-c1">volume</span> <span class="pl-c1">=</span> <span class="pl-c1">0.2</span><span class="pl-kos">;</span>
        <span class="pl-kos">}</span>
    <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre></div>
</li>
</ul>
</li>
<li>
<p><strong>Game Music</strong></p>
<ul>
<li>
<p>I tested that the function gets called at the start of a game and stops playing the moment the user exits the game.</p>
</li>
<li>
<p>No bugs were discovered with the above functionality.</p>
</li>
<li>
<p>I tested that the volume of the game music adjusts accordingly to the Music Slider within audio settings and that it pauses should the user turn it off and that it starts again once the turn it back.</p>
</li>
<li>
<p>Bug Discovered:</p>
<ul>
<li>When the user was not in a game and they went to the audio settings and turned the music off, then on, the game music would start playing which was unintended.</li>
</ul>
</li>
<li>
<p>Fix Applied:</p>
<ul>
<li>
<p>To fix this, I created the below function to check whether a game was currently active or not and saves a boolean value to a variable. When the <code>playMusic()</code> function gets called, it calls the <code>isGameActive()</code> function and then uses an if statement to determine whether the conditions to play music are met.</p>
<div class="highlight highlight-source-js"><pre>    <span class="pl-k">function</span> <span class="pl-en">isGameActive</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">app</span><span class="pl-kos">.</span><span class="pl-c1">difficultyLevel</span> !== <span class="pl-s">""</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
            <span class="pl-s1">audio</span><span class="pl-kos">.</span><span class="pl-c1">gameActive</span> <span class="pl-c1">=</span> <span class="pl-c1">true</span><span class="pl-kos">;</span>
        <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span>
            <span class="pl-s1">audio</span><span class="pl-kos">.</span><span class="pl-c1">gameActive</span> <span class="pl-c1">=</span> <span class="pl-c1">false</span><span class="pl-kos">;</span>
        <span class="pl-kos">}</span>
    <span class="pl-kos">}</span></pre></div>
</li>
</ul>
</li>
</ul>
</li>
</ol>
</li>
</ol>
<h4><a id="user-content-game-functionality-testing" class="anchor" aria-hidden="true" href="#game-functionality-testing"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Game Functionality Testing</h4>
<p>All tests were performed multiple times using a Desktop, Mobile phone, and tables. In addition, they were tested on Google Chrome, Google Canary, Mozilla Firefox and Microsoft Edge.</p>
<p>The physical mobile/tablet devices tested on were a Samsung S9, iPhone X, and an iPad Pro as well as using the emulated devices available in Google Chrome and Mozilla Firefox Dev tools.</p>
<ol>
<li>
<p>Game Functionality</p>
<ol>
<li>
<p><strong>Card Flipping Function</strong></p>
<ul>
<li>
<p>I tested that the <code>cardFlip()</code> function is called when the a card is flipped on the game board assuming that the conditions for the function call have been met and this it removes the class <code>faceDown</code> from the target card.</p>
</li>
<li>
<p>No bugs were discovered with the above functionality.</p>
</li>
<li>
<p>I tested that the user was not able to flip more than two cards over at the same time and that the if statement used within the event listener was working correctly and that the <code>app.flip.timesFlipped</code> correctly recorded the amount of flips by logging the result to the console.</p>
</li>
<li>
<p>No bugs were discovered with the above functionality.</p>
</li>
<li>
<p>I tested that a flip attempt would not be recorded in <code>app.flip.timesFlipped</code> if the user clicked on an element that was not a card with the <code>faceDown</code> class.</p>
</li>
<li>
<p>No bugs were discovered with the above functionality.</p>
</li>
</ul>
</li>
<li>
<p><strong>Card Matching Function</strong></p>
<ul>
<li>
<p>I tested that the function gets called correctly when the user has clicked on two cards within the game board and that if they match, then they are correctly pushed into the <code>app.gameComplete</code> array and if they did not match, they were re-assigned the <code>faceDown</code> CSS class.</p>
</li>
<li>
<p>Bug Discovered:</p>
<ul>
<li>During the testing phase, I discovered that the <code>faceDown</code> class got added back onto the card too quickly if they were not a matching pair and the user needed time to absorb what the card face was.</li>
</ul>
</li>
<li>
<p>Fix Applied:</p>
<ul>
<li>
<p>To fix this, I added a <code>setTimeout()</code> function that delays the <code>faceDown</code> class being added back on by 800 milliseconds.</p>
<div class="highlight highlight-source-js"><pre>    <span class="pl-en">setTimeout</span><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
        <span class="pl-s1">app</span><span class="pl-kos">.</span><span class="pl-c1">firstGuess</span><span class="pl-kos">.</span><span class="pl-c1">classList</span><span class="pl-kos">.</span><span class="pl-en">add</span><span class="pl-kos">(</span><span class="pl-s">"faceDown"</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
        <span class="pl-s1">app</span><span class="pl-kos">.</span><span class="pl-c1">secondGuess</span><span class="pl-kos">.</span><span class="pl-c1">classList</span><span class="pl-kos">.</span><span class="pl-en">add</span><span class="pl-kos">(</span><span class="pl-s">"faceDown"</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
        <span class="pl-en">matchCheckerReset</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
        <span class="pl-kos">}</span><span class="pl-kos">,</span> <span class="pl-c1">800</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
    <span class="pl-kos">}</span></pre></div>
</li>
</ul>
</li>
<li>
<p>I tested that the <code>matchCheckerReset()</code> correctly clears the corresponding variables at the end of the <code>matchCheck()</code> function so there is no conflicting information stored to skew further match checks.</p>
</li>
<li>
<p>No bugs were discovered with the above functionality.</p>
</li>
</ul>
</li>
<li>
<p><strong>Flip Counter</strong></p>
<ul>
<li>
<p>I tested that the amount of flips that user has done in the game is correctly recorded and that the innerHTML of the flip counter is updated to display this information to the user.</p>
</li>
<li>
<p>I tested that if the user clicked on the same card in quick succession, the flip counter would not record the second click and increment its count.</p>
</li>
<li>
<p>I tested that if the user clicked on a matched pair and any other element within the game screen, the flip counter would not be incremented.</p>
</li>
<li>
<p>No bugs were discovered with the above functionality.</p>
</li>
</ul>
</li>
<li>
<p><strong>Time Counter</strong></p>
<ul>
<li>
<p>I tested that the function starts correctly when the game starts and correctly displays the users current time in game and updates the innerText of the HTML element it is linked with.</p>
</li>
<li>
<p>I tested that the timer value and innerHTML reset to 0 on game exit or game restart.</p>
</li>
<li>
<p>The timer functionality worked as intended however; I did discover a couple bugs as listed below:</p>
</li>
<li>
<p>Bug Discovered:</p>
<ul>
<li>When the user completed the game and the Victory Modal launched, the game timer didn't stop incrementing in value.</li>
</ul>
</li>
<li>
<p>Fix Applied:</p>
<ul>
<li>
<p>To fix this, I added the <code>clearInterval()</code> call to the <code>gameComplete()</code> function so that the timer stops when the game has been completed.</p>
<div class="highlight highlight-source-js"><pre>    <span class="pl-en">clearInterval</span><span class="pl-kos">(</span><span class="pl-s1">app</span><span class="pl-kos">.</span><span class="pl-c1">timer</span><span class="pl-kos">.</span><span class="pl-c1">gameTimer</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre></div>
</li>
</ul>
</li>
<li>
<p>Bug Discovered:</p>
<ul>
<li>I discovered that whilst the timer was working as anticipated, it did not display correctly to the user if the seconds counter was below 10 seconds. For example, I expected the innerText from the timer when representing 9 seconds to display as 00:09 however; it displayed it as 00:9.</li>
</ul>
</li>
<li>
<p>Fix Applied:</p>
<ul>
<li>
<p>To fix this, I added an if statement and used a template literal in the <code>gameTimerStart()</code> so that if the timer was below 10 seconds, it would add a 0 before the <code>app.timer.secondsTimer</code> thus allowing it to correctly display the seconds to the user in an easy to read format.</p>
<div class="highlight highlight-source-js"><pre>    <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">app</span><span class="pl-kos">.</span><span class="pl-c1">timer</span><span class="pl-kos">.</span><span class="pl-c1">secondsTimer</span> <span class="pl-c1">&lt;</span> <span class="pl-c1">9</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
        <span class="pl-c1">++</span><span class="pl-s1">app</span><span class="pl-kos">.</span><span class="pl-c1">timer</span><span class="pl-kos">.</span><span class="pl-c1">secondsTimer</span><span class="pl-kos">;</span>
        <span class="pl-s1">app</span><span class="pl-kos">.</span><span class="pl-c1">timer</span><span class="pl-kos">.</span><span class="pl-c1">seconds</span><span class="pl-kos">.</span><span class="pl-c1">innerText</span> <span class="pl-c1">=</span> <span class="pl-s">`0<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">app</span><span class="pl-kos">.</span><span class="pl-c1">timer</span><span class="pl-kos">.</span><span class="pl-c1">secondsTimer</span><span class="pl-kos">}</span></span>`</span><span class="pl-kos">;</span><span class="pl-kos"></span></pre></div>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>Game Restart Function</strong></p>
<ul>
<li>
<p>I tested that the function gets called correctly when the user clicks on the restart button within the game and it restarts the level at the same difficulty setting that the user was on.</p>
</li>
<li>
<p>I further tested this functionality by playing a few rounds from start to finish on each difficulty and used the restart functionality to ensure that all cards were reset and that the shuffle was applied each time to randomise the card layout.</p>
</li>
<li>
<p>No bugs were discovered with the above functionality.</p>
</li>
<li>
<p>I tested that the restart function resets both the flip counter and game timer to 0.</p>
</li>
<li>
<p>No bugs were discovered with the above functionality.</p>
</li>
</ul>
</li>
<li>
<p><strong>Game Complete Function</strong></p>
<ul>
<li>
<p>I tested the <code>gameComplete()</code> function for each level of the game to ensure that the function works as intended.</p>
</li>
<li>
<p>No bugs were discovered with the function however; please refer to the bugs listed for the individual components:</p>
<ul>
<li>Individual Modal Testing -&gt; 4. Victory Modal - Next Level button - Button being shown when player is already at final difficulty.</li>
<li>Game Functionality Testing -&gt; 4. Time Counter - Time not stopping on game complete.</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>Level Choice Function</strong></p>
<ul>
<li>
<p>I tested that the correct level is recorded when the user interacts with the Level Choice button and the correct value is assigned to the <code>app.difficultyLevel</code> variable.</p>
</li>
<li>
<p>No bugs were discovered with the above functionality.</p>
</li>
</ul>
</li>
<li>
<p><strong>Game Play / Card Creation Function</strong></p>
<ul>
<li>
<p>I tested that the <code>determineGameCards()</code> function correctly assigns the right value to <code>app.gameCards</code> based on the level difficulty chosen by the user.</p>
</li>
<li>
<p>No bugs were discovered with the above functionality.</p>
</li>
<li>
<p>I tested that the <code>createCardLayout()</code> function correctly assigned the right amount of div's to the <code>app.cardHolder</code> variable based on the value of <code>app.gameCards</code> and the correct classes were applied.</p>
</li>
<li>
<p>No bugs were discovered with the above functionality.</p>
</li>
<li>
<p>I tested that the <code>shuffleArray()</code> function shuffled the contents of <code>app.cardHolder</code> in a randomised order and then assigned this to a new variable <code>cardShuffle</code>. After this, contents of the <code>cardShuffle</code> array was appended correctly onto the game board.</p>
</li>
<li>
<p>No bugs were discovered with the above functionality.</p>
</li>
</ul>
</li>
<li>
<p><strong>Game Background Function</strong></p>
<ul>
<li>
<p>I tested that the <code>gameBackground()</code> function correctly assigns the right class to the game board background based on the user difficulty and before assigning the new background class it removes any previous background classes.</p>
</li>
<li>
<p>No bugs were discovered with the above functionality.</p>
</li>
</ul>
</li>
<li>
<p><strong>Clear Game Area/Exit Function</strong></p>
<ul>
<li>
<p>I tested that when the user exits the game area, either by the button in the Navbar or within the Victory Modal that the <code>clearGameArea()</code> function correctly clears:</p>
<ul>
<li>
<p>Game board of all cards by removing the children div's of the game board.</p>
</li>
<li>
<p>Clears all variables used for the game components.</p>
</li>
<li>
<p>Resets/ Stops all counters to 0.</p>
</li>
<li>
<p>Stops game music</p>
</li>
</ul>
</li>
<li>
<p>No bugs were discovered with the above functionality.</p>
</li>
</ul>
</li>
<li>
<p><strong>Next Difficulty Function</strong></p>
<ul>
<li>
<p>I thoroughly tested that the button worked as intended and increased the difficulty of the previous level the user was on, as long as it was not the hard level.</p>
</li>
<li>
<p>Bug Discovered:</p>
<ul>
<li>When the user completed the easy difficulty and then clicked to the <code>Next difficulty</code> button, the normal level will be generated as anticipated. The issue appeared where the user then exited the level, then restarted easy difficulty and completed it then pressed the <code>Next difficulty</code> button again. The function would execute twice and generate the hard level.</li>
</ul>
</li>
<li>
<p>Fix Applied:</p>
<ul>
<li>To fix this, I moved the <code>EventListener</code> outside of the <code>gameComplete()</code> function and repeated the initial bug process multiple times to ensure that the bug was resolved.</li>
</ul>
</li>
</ul>
</li>
</ol>
</li>
</ol>
<h3><a id="user-content-additional-testing" class="anchor" aria-hidden="true" href="#additional-testing"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Additional Testing</h3>
<p>I asked my friends and family to try the game out on their various devices and they could not find any errors within the game or the responsiveness of the site.</p>
</article>
  </div>