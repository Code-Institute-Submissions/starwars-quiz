let audio = {
    gameActive: false,
    soundsOn: true,
    soundsOff: false,
    bestScoreLight: new Audio("assets/audio/strong-force.mp3"),
    goodScoreLight: new Audio("assets/audio/yoda-laugh.wav"),
    avScoreLight: new Audio("assets/audio/unfair.mp3"),
    worstScoreLight: new Audio("assets/audio/r2-scream.mp3"),
    bestScoreDark: new Audio("assets/audio/dark-power.mp3"),
    goodScoreDark: new Audio("assets/audio/unfair.mp3"),
    avScoreDark: new Audio("assets/audio/jabba.wav"),
    worstScoreDark: new Audio("assets/audio/dark-fail.mp3"),
    vaderBreath: new Audio("vader.wav"),
    useForce: new Audio("use-force.mp3"),
    clickAudio: new Audio("assets/audio/blaster.mp3"),
    closeClickAudio: new Audio("assets/audio/blast-door.mp3"),
    gameMusicDark: new Audio("assets/audio/imperial.mp3"),
    gameMusicLight: new Audio("assets/audio/themetune.mp3"),
    saberAudio: new Audio("assets/audio/saberdown.wav"),
    wrongClick: new Audio("assets/audio/chewy.wav"),
    rightClick: new Audio("assets/audio/all-easy.wav"),
};

//------Volume-button-----------------------------

$(volumeButton).click(function () {
   $(this).css("display", "none"); 
   $(volumeOff).css("display", "block");
   stopMusic();
   audio.soundsOff = true;
   audio.soundsOn = false;
});

$(volumeOff).click(function () {
   $(this).css("display", "none"); 
   $(volumeButton).css("display", "block");
   audio.soundsOn = true;
   audio.soundsOff = false;
   playMusic();
});

// Play-music 

function playMusic() {
    if (questions === darkQuestions && audio.gameActive === true && audio.soundsOff === false) {
        audio.gameMusicDark.play();
    } else if (audio.gameActive === true && audio.soundsOff === false) {
        audio.gameMusicLight.play();
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

let darkChooserButton = document.getElementsByClassName("dark-button");

$(darkChooserButton).click(function () {
    darkChooser();
})

function darkChooser() {
    if (audio.soundsOff === false) {
        audio.clickAudio.play();
    }
}

let lightChooserButton = document.getElementsByClassName("light-button");

$(lightChooserButton).click(function () {
    lightChooser();
})

function lightChooser() {
    if (audio.soundsOff === false) {
        audio.clickAudio.play();
    }
}


// Function plays quiz completion music.

function quizCompleteAudio() {
    if (questions === darkQuestions && audio.soundsOff === false) {
        darkFinishAudio();
    } else if (questions === questions && audio.soundsOff === false) {
        lightFinishAudio();
    }
}

// Light-side-score-audio

function lightFinishAudio() {
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
    stopMusic();
    if (audio.soundsOff === false) {
        audio.worstScoreLight.play();
    }
}

// Dark-side-score-audio

function darkFinishAudio() {
    if (score >= 9) {
        topScoreDark();
    } else if (score >= 7) {
        goodScoreDark();
    } else if (score >= 5) {
        avScoreDark();
    } else {
        badScoreDark();
    }
}

function topScoreDark() {
    stopMusic();
    if (audio.soundsOff === false) {
        audio.bestScoreDark.play();
    }
}

function goodScoreDark() {
    stopMusic();
    if (audio.soundsOff === false) {
        audio.goodScoreDark.play();
    }
}

function avScoreDark() {
    stopMusic();
    if (audio.soundsOff === false) {
        audio.avScoreDark.play();
    }
}

function badScoreDark() {
    stopMusic();
    if (audio.soundsOff === false) {
        audio.worstScoreDark.play();
    }
}

// Saber-hover-audio

function saberHover() {
    if (audio.soundsOff === false) {
        audio.saberAudio.play();
    }
}

// Button-click-sound-effects

function laserButton() {
    if (audio.soundsOff === false) {
        audio.clickAudio.play();
    }
}

function closeButton() {
    if (audio.soundsOff === false) {
        audio.closeClickAudio.play();
    }
}

// Wrong-or-right-click-audio

function rightAudio() {
    if (audio.soundsOff === false && currentQuestion <= 8) {
        audio.rightClick.play();
    }
}

function wrongAudio() {
    if (audio.soundsOff === false && currentQuestion <= 8) {
        audio.wrongClick.play();
    }
}