let audio = {
    gameActive: false,
    soundsOn: true,
    soundsOff: false,
    bestScoreLight: new Audio("assets/audio/strong-force.mp3"),
    goodScoreLight: new Audio("assets/audio/yoda-laugh.wav"),
    avScoreLight: new Audio("assets/audio/unfair.mp3"),
    worstScoreLight: new Audio("assets/audio/r2-scream.mp3"),
    bestScoreDark: new Audio("assets/audio/dark-power.mp3"),
    avScoreDark: new Audio("assets/audio/VictorySound.mp3"),
    worstScoreDark: new Audio("assets/audio/dark-fail.mp3"),
    vaderBreath: new Audio("v-breath.wav"),
    useForce: new Audio("use-force.mp3"),
    clickAudio: new Audio("assets/audio/blaster.mp3"),
    gameMusicDark: new Audio("assets/audio/imperial.mp3"),
    gameMusicLight: new Audio("assets/audio/themetune.mp3"),
    saberAudio: new Audio("assets/audio/saberdown.wav"),
    isSoundMuted: false,
    isMusicMuted: false,
    soundEffectBtn: document.getElementById("sound-btn"),
    musicBtn: document.getElementById("music-btn"),
};

//------Volume-button-----------------------------

$(volumeButton).click(function () {
    debugger;
   $(this).css("display", "none"); 
   $(volumeOff).css("display", "block");
   stopMusic();
   audio.soundsOff = true;
   audio.soundsOn = false;
});

$(volumeOff).click(function () {
    debugger;
   $(this).css("display", "none"); 
   $(volumeButton).css("display", "block");
   audio.soundsOn = true;
   audio.soundsOff = false;
});

// Play-music 

function playMusic() {
    isGameActive();
    if (audio.gameActive === true && audio.soundsOff === false) {
        audio.gameMusic.play();
        audio.gameMusic.loop = true;
    }
}

// Stop-music 

function stopMusic() {
    if (questions === darkQuestions) {
        audio.gameMusicDark.pause();
        audio.gameMusicDark.currentTime = 0;
    } else {
        audio.gameMusicLight.pause();
        audio.gameMusicLight.currentTime = 0;
    }
}

// Quiz-background-music.

function backgroundMusic() {
    if (questions === darkQuestions && audio.soundsOff === false) {
        audio.gameMusicDark.play();
    } else if (audio.soundsOff === false) {
        audio.gameMusicLight.play();
    }
}

// Function plays a click sound when buttons are pressed.

function clickSound() {
    if (audio.soundsOff === false) {
        audio.clickAudio.play();
    }
}

// Function for audio on side choosing buttons.

function darkChoiceAudio() {
    if (audio.soundsOff === false) {
        audio.vaderBreath.play();
    }
}

function lightChoiceAudio() {
    if (audio.soundsOff === false) {
        audio.useForce.play();
    }
}

// Function plays quiz completion music.

function quizCompleteAudio() {
    debugger;
    if (questions === darkQuestions && audio.soundsOff === false) {
        darkFinishAudio();
    } else if (audio.soundsOff === false) {
        lightFinishAudio();
    }
}

function lightFinishAudio() {
    debugger;
    if (score >= 9) {
        topScoreLight();
    } else if (score >= 7) {
        goodScoreLight();
    } else if (score >= 5) {
        avScoreLight();
    } else {
        badScoreLight();
    }
}

function topScoreLight() {
    stopMusic();
    if (audio.soundsOff === false) {
        audio.bestScoreLight.play();
    }
}

function goodScoreLight() {
    stopMusic();
    if (audio.soundsOff === false) {
        audio.goodScoreLight.play();
    }
}

function avScoreLight() {
    stopMusic();
    if (audio.soundsOff === false) {
        audio.avScoreLight.play();
    }
}

function badScoreLight() {
    if (audio.soundsOff === false) {
        audio.worstScoreLight.play();
    }
}