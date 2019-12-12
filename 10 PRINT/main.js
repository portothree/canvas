const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const size = window.innerWidth;
const dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);

context.lineCap = 'square';
context.lineWidth = 2;
