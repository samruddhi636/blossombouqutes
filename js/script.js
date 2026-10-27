// ▼ Replace with the seller's real WhatsApp number (country code + number, digits only)
const WA_NUMBER="919322543203";
const wa=t=>"https://wa.me/"+WA_NUMBER+"?text="+encodeURIComponent(t);
const HI="Hi! I'd like to enquire about a ribbon bouquet. I'd love to know more about the available designs and customization options.";
document.querySelectorAll("[data-wa]").forEach(a=>{a.href=wa(HI);a.target="_blank";a.rel="noopener"});

const B=[
["Butterfly Blush","Pink and blush roses with delicate silver butterflies.","images/bouquet-1.jpg"],
["Wine Velvet","Deep burgundy satin roses in smoky wrap.","images/bouquet-2.jpg"],
["Ruby Sparkle","Glittering red roses for a little drama.","images/bouquet-3.jpg"],
["Midnight Navy","Navy satin roses in kraft paper, gift-note ready.","images/bouquet-4.jpg"],
["Violet Dream","A full, lush bouquet in rich purple.","images/bouquet-5.jpg"],
["Love Letter","Red roses around a cream heart of blooms.","images/bouquet-6.jpg"],
["Rose Garden","Candy pink and magenta roses together.","images/bouquet-7.jpg"],
["Golden Butterflies","Rose and blush roses with golden butterflies.","images/bouquet-8.jpg"],
["Baby Pink","Soft, tonal pink roses in pastel wrap.","images/bouquet-9.jpg"],
["Blush & Cream","Dusty rose and cream roses, soft and classic.","images/bouquet-10.jpg"],
["Heartfull Bliss","Dusty rose and pearl white in a heart bliss.","images/bouquet-11.jpg"]];
const g=document.getElementById("grid"),sel=document.querySelector("[name=type]");
sel.innerHTML='<option value="">Custom / not sure yet</option>'+B.map(b=>`<option>${b[0]}</option>`).join("");
B.forEach((b,i)=>{const c=document.createElement("article");c.className="card";
c.innerHTML=`<button class="img" aria-label="View ${b[0]} larger"><img src="${b[2]}" alt="${b[0]} ribbon rose bouquet" loading="lazy"></button><div class="body"><h3>${b[0]}</h3><p>${b[1]}</p><div class="row"><small>Custom pricing</small><a class="btn btn-primary" target="_blank" rel="noopener" href="${wa(`Hi! I'd like to enquire about the "${b[0]}" ribbon bouquet. Can we customize the flowers and colours?`)}">Enquire</a></div></div>`;
c.querySelector(".img").onclick=()=>open(i);g.appendChild(c)});

const lb=document.getElementById("lb"),li=lb.querySelector("img"),cap=lb.querySelector("figcaption");let cur=0;
function open(i){cur=(i+B.length)%B.length;li.src=B[cur][2];li.alt=B[cur][0];cap.textContent=B[cur][0];lb.classList.add("on")}
lb.querySelector(".x").onclick=()=>lb.classList.remove("on");
lb.querySelector(".p").onclick=()=>open(cur-1);lb.querySelector(".n").onclick=()=>open(cur+1);
lb.onclick=e=>{if(e.target===lb)lb.classList.remove("on")};
addEventListener("keydown",e=>{if(!lb.classList.contains("on"))return;if(e.key=="Escape")lb.classList.remove("on");if(e.key=="ArrowLeft")open(cur-1);if(e.key=="ArrowRight")open(cur+1)});
let sx=0;lb.addEventListener("touchstart",e=>sx=e.touches[0].clientX,{passive:true});
lb.addEventListener("touchend",e=>{const d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>50)open(cur+(d<0?1:-1))});

document.getElementById("f").addEventListener("submit",e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.target));
const v=k=>d[k]&&d[k].trim()?d[k].trim():"-";
window.open(wa(`Hi! I'd like to customize a bouquet.\n\nName: ${v("name")}\nBouquet: ${v("type")}\nNumber of flowers: ${v("count")}\nColours: ${v("colours")}\nSize: ${v("size")}\nAdd-ons: ${v("addons")}\nBudget: ${v("budget")}\nSpecial request: ${v("msg")}\nReference: ${v("ref")}`),"_blank")});

const bg=document.getElementById("bg"),lk=document.getElementById("lk");
bg.onclick=()=>{const o=lk.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
lk.querySelectorAll("a").forEach(a=>a.onclick=()=>{lk.classList.remove("open");bg.setAttribute("aria-expanded",false)});
const nl=[...lk.querySelectorAll("a")];
function spy(){const y=innerHeight*.35;let best=nl[0];nl.forEach(a=>{const h=a.getAttribute("href");const t=h=="#home"?document.querySelector(".hero"):document.querySelector(h);if(t&&t.getBoundingClientRect().top<=y)best=a});if(innerHeight+scrollY>=document.body.scrollHeight-4)best=nl[nl.length-1];nl.forEach(a=>a.classList.toggle("active",a===best))}
addEventListener("scroll",spy,{passive:true});addEventListener("resize",spy);spy();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));
