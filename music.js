// ========================================
// Persistent Birthday Song Player
// Plays HBDAudio.mpeg across ALL pages
// Loops forever, resumes position on navigation
// ========================================
(function() {
  const AUDIO_KEY = 'bday_audio_time';
  const AUDIO_PLAYING_KEY = 'bday_audio_playing';

  // Create audio element
  const audio = document.createElement('audio');
  audio.id = 'persistent-bday-song';
  audio.loop = true;
  audio.preload = 'auto';
  audio.volume = 1;
  audio.src = 'HBDAudio.mpeg';
  document.body.appendChild(audio);

  // Restore position from last page
  const savedTime = parseFloat(sessionStorage.getItem(AUDIO_KEY) || '0');
  if (savedTime > 0) {
    audio.currentTime = savedTime;
  }

  // Save position every 500ms so next page can resume
  setInterval(function() {
    if (!audio.paused) {
      sessionStorage.setItem(AUDIO_KEY, audio.currentTime.toString());
      sessionStorage.setItem(AUDIO_PLAYING_KEY, 'true');
    }
  }, 500);

  // Save position before navigating away
  window.addEventListener('beforeunload', function() {
    if (!audio.paused) {
      sessionStorage.setItem(AUDIO_KEY, audio.currentTime.toString());
      sessionStorage.setItem(AUDIO_PLAYING_KEY, 'true');
    }
  });

  // Only auto-play if song was already playing on a previous page
  // (NOT on splash.html — song starts only on button click there)
  if (sessionStorage.getItem(AUDIO_PLAYING_KEY) === 'true') {
    audio.play().catch(function() {
      // If autoplay blocked, start on first interaction
      function resumeOnInteraction() {
        audio.play().catch(function() {});
        document.removeEventListener('click', resumeOnInteraction);
        document.removeEventListener('touchstart', resumeOnInteraction);
      }
      document.addEventListener('click', resumeOnInteraction, { once: false });
      document.addEventListener('touchstart', resumeOnInteraction, { once: false });
    });
  }

  // Expose globally so splash.html button can start it
  window.bdaySong = audio;
  window.startBdaySong = function() {
    audio.currentTime = 0;
    sessionStorage.setItem(AUDIO_KEY, '0');
    audio.play().then(function() {
      sessionStorage.setItem(AUDIO_PLAYING_KEY, 'true');
    }).catch(function() {});
  };
})();
