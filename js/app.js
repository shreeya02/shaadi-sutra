const IMG = {
  mehendi:"images/mehendi.jpg",
  haldi:"images/haldi.jpg",
  phool:"images/phool.jpg",
  sangeet:"images/sangeet.jpg",
  shaadi:"images/shaadi.jpg",
  mehendi_fig:"images/mehendi_fig.jpg",
  haldi_fig:"images/haldi_fig.jpg",
  phool_fig:"images/phool_fig.jpg",
  sangeet_fig:"images/sangeet_fig.jpg",
  shaadi_fig:"images/shaadi_fig.jpg",
  cover:"images/cover.jpg"
};

const GOLD="radial-gradient(circle at 30% 30%,#F6E2A4,#C9A04A 55%,#9C7426)";
const SILVER="radial-gradient(circle at 30% 30%,#FFFFFF,#C9CBD1 50%,#8E9097)";

const EVENTS=[
 {id:"mehendi",name:"Mehendi",sub:"Hari Mehfil",day:"3",mon:"Dec",when:"3 December",slot:"",theme:"Green theme",fx:"leaf",fo:"50% 35%",
  deep:"#2E5A2F",tint:"#E8EFDB",
  note:"<b>Open dress code.</b> Wear what you love, a touch of green is a bonus!",small:"We'll be in green and yellow all day.",
  women:"Lehenga, saree or anarkali in any shade of green",men:"Green kurta or bandhgala with white pyjama",
  pal:[["#1F4D2B","Bottle green"],["#8FA878","Sage"],["#A9C25A","Pista"],["#6E8B3D","Olive"],[GOLD,"Gold"]]},
 {id:"haldi",name:"Marathi Haldi",sub:"Haldicha Sohla",day:"3",mon:"Dec",when:"3 December",slot:"",theme:"Yellow theme",fx:"marigold",fo:"50% 28%",
  deep:"#9A6400",tint:"#FBEDC4",
  note:"<b>Open dress code.</b> Yellow is very welcome, the turmeric will be flying!",small:"Skip delicate fabrics for this one.",
  women:"Yellow or rani pink saree with a contrast border",men:"Yellow kurta, or ivory kurta with dhoti",
  pal:[["#C2185B","Rani pink"],["#F2B01E","Turmeric"],["#3E7A2E","Leaf green"],["#EFE6D2","Ivory"],[GOLD,"Gold"]]},
 {id:"phool",name:"Phoolon ki Haldi",sub:"Phoolon ki Baarish",day:"4",mon:"Dec",when:"4 December",slot:"Morning",theme:"Floral yellow",fx:"petal",fo:"50% 22%",
  deep:"#B03F6E",tint:"#FDF0CC",
  note:"<b>Yellow only, please!</b> Florals and prints are perfect.",small:"",
  women:"Yellow lehenga, sharara or saree",men:"Yellow or floral kurta with white pyjama",
  pal:[["#F6C324","Sunflower"],["#F8DE7E","Champa"],["#D9C7A6","Sand"],["#8E9A3A","Olive"],["#EFE3C7","Cream"]]},
 {id:"sangeet",name:"Sangeet",sub:"Nach, Gaana & Thoda Sa Glitter",day:"4",mon:"Dec",when:"4 December",slot:"Night",theme:"Glam & glitter",fx:"glitter",fo:"24% 40%",
  deep:"#4B2A6B",tint:"#EEE5F4",
  note:"<b>Glitter is mandatory.</b> Dress up and bring your dancing shoes.",small:"",
  women:"Sequin gown or shimmer saree",men:"Tuxedo or blazer, velvet and sparkle welcome",
  pal:[["#3D1B3F","Plum"],["#A97C8E","Mauve"],[SILVER,"Silver"],["#1B2440","Midnight"],["#222226","Black"]]},
 {id:"shaadi",name:"Shaadi",sub:"Paithani & Parampara",day:"5",mon:"Dec",when:"5 December",slot:"Morning",theme:"Traditional Marathi",fx:"rose",fo:"50% 28%",
  deep:"#8E1838",tint:"#F8E1E4",
  note:"<b>Traditional Marathi.</b> Our favourite dress code of all.",small:"",
  women:"Paithani saree",men:"Traditional kurta with dhoti or pyjama and a stole",
  pal:[["#7A1428","Maroon"],["#7B2C7E","Purple"],["#1F6B2E","Green"],["#C0182E","Kumkum red"],[GOLD,"Gold"]]}
];

const arrow='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 5l7 7-7 7"/></svg>';
const when=e=>e.slot?`${e.when} · ${e.slot}`:e.when;

const cover=`<section class="screen cover" id="cover" aria-label="Cover">
  <div class="top">
    <h1 class="script">Shaadi<br>Sutra</h1>
    <p class="edit">The Wedding Wardrobe Edit</p>
    <div class="rule"></div>
    <p class="names">Kalpak &amp; Shreeyas</p>
    <p class="lede">3 to 5 December 2026. What to wear, when to wear it, and how to slay it with us.</p>
  </div>
  <div class="photo" style="--fo:50% 32%"><img src="${IMG.cover}" alt="Kalpak and Shreeyas" style="object-position:50% 32%"><canvas data-fx="rose"></canvas></div>
  <div class="cta"><button class="btn" data-go="itinerary">Explore the lookbook ${arrow}</button></div>
</section>`;

const itin=`<section class="screen" id="itinerary" aria-label="Itinerary"><div class="itin">
  <header><h2>Wedding Itinerary</h2><p>Mark your calendars and plan your looks</p></header>
  ${EVENTS.map(e=>`<button class="row" data-go="${e.id}" style="--deep:${e.deep};--tint:${e.tint}">
     <span class="d"><b>${e.day}</b>${e.mon}${e.slot?`<br><small>${e.slot}</small>`:""}</span>
     <span><h3>${e.name}</h3><p>${e.sub}</p><span class="chips">${e.pal.map(p=>`<i style="--c:${p[0]}"></i>`).join("")}</span></span>
     ${arrow}</button>`).join("")}
  <p class="foot">Swipe through for every look</p>
</div></section>`;

const evs=EVENTS.map(e=>`<section class="screen" id="${e.id}" aria-label="${e.name}" style="--deep:${e.deep};--tint:${e.tint}">
  <div class="photo"><img src="${IMG[e.id]}" alt="${e.name}" style="object-position:${e.fo};--fo:${e.fo}"><canvas data-fx="${e.fx}"></canvas></div>
  <div class="panel">
    <div><h2 class="script">${e.name}</h2><p class="subt">${e.sub}</p></div>
    <span class="pill">${when(e)}</span>
    <h3 class="orn">Dress Code for Guests</h3>
    <p class="note">${e.note}${e.small?`<small>${e.small}</small>`:""}</p>
    <div class="look"><img src="${IMG[e.id+"_fig"]}" alt="Guest outfit ideas for ${e.name}" loading="lazy"></div>
    <div class="who"><div><h3>For Women</h3><p>${e.women}</p></div><div><h3>For Men</h3><p>${e.men}</p></div></div>
    <h3 class="orn">Colour Palette</h3>
    <div class="pal">${e.pal.map(p=>`<div><i style="--c:${p[0]}"></i><span>${p[1]}</span></div>`).join("")}</div>
  </div>
</section>`).join("");

const deck=document.getElementById("deck");
deck.innerHTML=cover+itin+evs;
const screens=[...deck.querySelectorAll(".screen")];
const dots=document.getElementById("dots");
dots.innerHTML=screens.map((s,i)=>`<button aria-label="${s.getAttribute("aria-label")}" data-i="${i}"></button>`).join("");

let cur=0;
function go(i){i=Math.max(0,Math.min(screens.length-1,i));screens[i].scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",inline:"center",block:"nearest"});}
function setCur(i){cur=i;[...dots.children].forEach((d,k)=>d.setAttribute("aria-current",k===i?"true":"false"));
  document.getElementById("prev").disabled=i===0;document.getElementById("next").disabled=i===screens.length-1;
  try{history.replaceState(null,"","#"+screens[i].id)}catch(e){}}
dots.addEventListener("click",e=>{const b=e.target.closest("button");if(b)go(+b.dataset.i)});
document.getElementById("prev").onclick=()=>go(cur-1);
document.getElementById("next").onclick=()=>go(cur+1);
deck.addEventListener("click",e=>{const b=e.target.closest("[data-go]");if(b)go(screens.findIndex(s=>s.id===b.dataset.go))});
let t;deck.addEventListener("scroll",()=>{clearTimeout(t);t=setTimeout(()=>{
  const mid=deck.scrollLeft+deck.clientWidth/2;let best=0,bd=1e9;
  screens.forEach((s,i)=>{const c=s.offsetLeft+s.offsetWidth/2,d=Math.abs(c-mid);if(d<bd){bd=d;best=i}});setCur(best);},60)},{passive:true});
document.addEventListener("keydown",e=>{if(e.key==="ArrowRight")go(cur+1);if(e.key==="ArrowLeft")go(cur-1)});
const start=screens.findIndex(s=>"#"+s.id===location.hash);
setCur(Math.max(0,start)); if(start>0) requestAnimationFrame(()=>go(start));
addEventListener("hashchange",()=>{const i=screens.findIndex(s=>"#"+s.id===location.hash);if(i>=0&&i!==cur)go(i)});

/* ---------- Falling leaves, marigolds, petals, glitter over each photo ---------- */
const PAL={leaf:["#7FA84A","#A7C76A","#4F7A2E","#D9C46A"],marigold:["#F5A21B","#F7C531","#E8771A","#FFFFFF"],
  petal:["#F2A7C3","#E0628F","#F7D04A","#FFFFFF"],glitter:["#F4E3A1","#FFFFFF","#D4AF37","#C9CDD8"],rose:["#C21E3A","#E85A7A","#F6B8C8","#D9AE4F"]};
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
const fx=[];
document.querySelectorAll("canvas[data-fx]").forEach(cv=>{
  const type=cv.dataset.fx,ctx=cv.getContext("2d"),st={cv,ctx,type,on:false,w:0,h:0,p:[]};
  const size=()=>{const r=cv.getBoundingClientRect(),dpr=Math.min(2,devicePixelRatio||1);st.w=r.width;st.h=r.height;
    cv.width=Math.max(1,r.width*dpr);cv.height=Math.max(1,r.height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0)};
  size();new ResizeObserver(size).observe(cv);
  st.spawn=init=>({x:Math.random()*st.w,y:init?Math.random()*st.h:-12,vy:(type==="glitter"?.15:.4)+Math.random()*.5,vx:(Math.random()-.5)*.3,
    r:Math.random()*6.28,vr:(Math.random()-.5)*.05,s:type==="glitter"?2+Math.random()*3.5:4+Math.random()*4.5,c:PAL[type][Math.random()*PAL[type].length|0],ph:Math.random()*6.28});
  for(let i=0;i<(type==="glitter"?30:18);i++)st.p.push(st.spawn(true));
  fx.push(st);new IntersectionObserver(es=>es.forEach(en=>st.on=en.isIntersecting)).observe(cv);
});
function drawP(ctx,type,p,t){ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r);ctx.fillStyle=p.c;
  if(type==="leaf"){ctx.beginPath();ctx.ellipse(0,0,p.s*.45,p.s*1.2,0,0,6.28);ctx.fill();}
  else if(type==="marigold"){for(let k=0;k<7;k++){ctx.beginPath();ctx.arc(Math.cos(k*.9)*p.s*.45,Math.sin(k*.9)*p.s*.45,p.s*.42,0,6.28);ctx.fill();}
    ctx.fillStyle="rgba(150,70,0,.45)";ctx.beginPath();ctx.arc(0,0,p.s*.25,0,6.28);ctx.fill();}
  else if(type==="glitter"){ctx.globalAlpha=.4+.6*Math.abs(Math.sin(t*.003+p.ph));const z=p.s;ctx.beginPath();
    ctx.moveTo(0,-z);ctx.lineTo(z*.22,-z*.22);ctx.lineTo(z,0);ctx.lineTo(z*.22,z*.22);ctx.lineTo(0,z);ctx.lineTo(-z*.22,z*.22);ctx.lineTo(-z,0);ctx.lineTo(-z*.22,-z*.22);ctx.closePath();ctx.fill();}
  else{ctx.globalAlpha=.92;ctx.beginPath();ctx.moveTo(0,-p.s);ctx.bezierCurveTo(p.s*.9,-p.s*.6,p.s*.7,p.s*.9,0,p.s);ctx.bezierCurveTo(-p.s*.7,p.s*.9,-p.s*.9,-p.s*.6,0,-p.s);ctx.fill();}
  ctx.restore();}
function frame(t){for(const st of fx){if(!st.on)continue;st.ctx.clearRect(0,0,st.w,st.h);
  st.p.forEach((p,i)=>{p.y+=p.vy;p.x+=p.vx+Math.sin(t*.0012+p.ph)*.35;p.r+=p.vr;if(p.y>st.h+14)st.p[i]=st.spawn(false);drawP(st.ctx,st.type,p,t)});}
  requestAnimationFrame(frame);}
if(reduce)setTimeout(()=>fx.forEach(st=>st.p.forEach(p=>drawP(st.ctx,st.type,p,0))),80);else requestAnimationFrame(frame);
