// ===== Language Switcher =====
const langBtns = document.querySelectorAll('.lang-btn');
const langBlocks = document.querySelectorAll('.lang');

function setLang(lang){
  langBtns.forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === lang));
  langBlocks.forEach(el => {
    if(el.classList.contains(lang)){ el.removeAttribute('hidden'); }
    else{ el.setAttribute('hidden',''); }
  });
  localStorage.setItem('tivco_lang', lang);
}

langBtns.forEach(btn => btn.addEventListener('click', () => setLang(btn.dataset.lang)));
setLang(localStorage.getItem('tivco_lang') || 'es');

// ===== Playlist & Player =====
// 1) Reemplazar los nombres de archivo en 'src' por tus MP3 o WAV en /audio
//    Podés mantener ambos (mp3 y wav) y el navegador elegirá.
// 2) Las duraciones se completan automáticamente cuando se cargan los metadatos.
// 3) Todos los tracks se precargan al iniciar (preload 'auto').

const tracks = [
  { title: '01 Anfang', src: ['audio/01-anfang.mp3','audio/01-anfang.wav'] },
  { title: '02 Mgla', src: ['audio/02-mgla.mp3','audio/02-mgla.wav'] },
  { title: '03 Sakana', src: ['audio/03-sakana.mp3','audio/03-sakana.wav'] },
  { title: '04 Mirall', src: ['audio/04-mirall.mp3','audio/04-mirall.wav'] },
  { title: '05 Il ricordo dell’ombra', src: ['audio/05-il-ricordo-dell-ombra.mp3','audio/05-il-ricordo-dell-ombra.wav'] },
  { title: '06 Cendres', src: ['audio/06-cendres.mp3','audio/06-cendres.wav'] },
  { title: '07 Syklin loppu', src: ['audio/07-syklin-loppu.mp3','audio/07-syklin-loppu.wav'] },
];


const mainPlayer = document.getElementById('mainPlayer');
const playlistEl = document.getElementById('playlist');
const nowIdxEl = document.getElementById('nowPlayingIndex');
const nowTitleEl = document.getElementById('nowPlayingTitle');

// Preload all tracks into hidden Audio elements
const preloaded = tracks.map((t, i) => {
  const a = new Audio();
  a.preload = 'auto';
  // add both sources (browser picks supported)
  // We'll just set one src; browsers don't support multiple src on Audio object directly.
// Instead, prefer MP3 by default; change here if you prefer WAV first.
  a.src = t.src[0];
  a.load();
  a.addEventListener('loadedmetadata', () => {
    // Fill duration text in playlist if present
    const item = playlistEl.querySelector(`li[data-index="${i}"] .duration`);
    if(item){
      const d = formatTime(a.duration);
      item.textContent = d ? d : '';
    }
  });
  return a;
});

let currentIndex = 0;
function playIndex(i){
  if(i < 0 || i >= tracks.length) return;
  currentIndex = i;
  // update UI
  playlistEl.querySelectorAll('li').forEach(li => li.classList.remove('active'));
  const active = playlistEl.querySelector(`li[data-index="${i}"]`);
  if(active) active.classList.add('active');
  nowIdxEl.textContent = String(i+1).padStart(2,'0');
  nowTitleEl.textContent = tracks[i].title;
  // set main player to current preloaded src and play
  mainPlayer.src = preloaded[i].src;
  mainPlayer.play().catch(()=>{});
}

playlistEl.addEventListener('click', (e) => {
  const li = e.target.closest('li[data-index]');
  if(li){
    playIndex(parseInt(li.dataset.index,10));
  }
});

mainPlayer.addEventListener('ended', () => {
  if(currentIndex < tracks.length - 1) playIndex(currentIndex + 1);
});

function formatTime(sec){
  if(!isFinite(sec)) return '';
  const m = Math.floor(sec/60);
  const s = Math.floor(sec%60);
  return `${m}:${String(s).padStart(2,'0')}`;
}

// Init
playIndex(0);
