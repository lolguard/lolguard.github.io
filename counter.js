event = new Date("26 May 2014 18:00 UTC+5:30");

function update() {
  cur = new Date();
  cd = 24 * 60 * 60 * 1000;
  ch = 60 * 60 * 1000;
  cm = 60000;
  t = cur - event;
  d = Math.floor(t/cd);
  h = Math.floor((t-d*cd)/ch);
  m = Math.floor((t-d*cd-h*ch)/cm);
  s = Math.floor((t-d*cd-h*ch-m*cm)/1000);
  document.getElementById("d1").innerHTML=d;
  document.getElementById("h1").innerHTML=h;
  document.getElementById("m1").innerHTML=m;
  document.getElementById("s1").innerHTML=s;
}

window.setInterval(update,500);
