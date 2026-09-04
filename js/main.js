const menu = document.getElementById('menu');
const navLinks = document.getElementById('navLinks');
if (menu && navLinks) {
  menu.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? '✕' : '☰';
  });
}
document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>{
  navLinks?.classList.remove('open');
  if(menu){menu.setAttribute('aria-expanded','false');menu.textContent='☰';}
}));
const roles=['Full-Stack Developer','AI Enthusiast','Software Builder','Computer Science Student'];
const typed=document.getElementById('typed'); let role=0,i=0,del=false;
function typeRole(){if(!typed)return;const w=roles[role];typed.textContent=del?w.slice(0,Math.max(0,i-1)):w.slice(0,i+1);i+=del?-1:1;let d=del?55:82;if(!del&&i===w.length){del=true;d=1250;}if(del&&i===0){del=false;role=(role+1)%roles.length;d=280;}setTimeout(typeRole,d);} typeRole();
const reveals=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target);}}),{threshold:.12});reveals.forEach(x=>io.observe(x));}else reveals.forEach(x=>x.classList.add('show'));
const nav=document.querySelectorAll('.nav-links a'); const sections=[...document.querySelectorAll('main section[id]')];
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)nav.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id));}),{rootMargin:'-42% 0px -48% 0px',threshold:0}); sections.forEach(s=>so.observe(s));
const progress=document.getElementById('progress');
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(max>0?(window.scrollY/max)*100:0)+'%';},{passive:true});
