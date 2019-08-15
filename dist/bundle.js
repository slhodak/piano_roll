const host = 'http://localhost:4000';

const scripts = [
  '/piano_roll/lib/helpers.js',
  '/piano_roll/rollSocket.js',
  '/piano_roll/views/views.js',
  '/piano_roll/model.js',
  '/piano_roll/controller/controllers.js',
  '/piano_roll/editor.js',
  '/piano_roll/index.js',
];

let reference = document.getElementsByClassName('scripts')[0];

function addScripts(scripts, reference) {
  scripts.forEach(title => {
    let script = document.createElement('script');
    script.src = host + title;
    script.type = "module"
    document.body.insertBefore(script, reference);
  });
}

addScripts(scripts, reference);
