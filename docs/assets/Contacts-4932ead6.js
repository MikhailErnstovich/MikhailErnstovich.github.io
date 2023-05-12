import{d as M,j as b,k as P,w as k,o as m,c as _,_ as z,l as v,h as Y,u as c,b as f,a as p,t as T,m as S,p as x,f as O,v as B,e as j}from"./index-544e0314.js";import{c as E,a as U}from"./appear-animation-3fc7a563.js";import{c as F}from"./social-media-data-fa3a8e24.js";const G={id:"map"},H=M({__name:"Map",props:{positions:null},setup(a){const i=a,r=b("");P(async()=>{await fetch("/config.json").then(o=>o.json()).then(o=>r.value=o.mapApiKey)});const n={mounted:g};function g(o){const u=(t,s)=>{t.forEach(y=>{if(y.isIntersecting)h(),s.unobserve(o);else return})};window.IntersectionObserver?E(o,u):h()}const h=async()=>{let o=document.createElement("script");o.setAttribute("src",`https://api-maps.yandex.ru/2.1/?apikey=${r.value}&lang=en_US`),o.setAttribute("type","text/javascript"),document.head.appendChild(o),o.addEventListener("load",()=>{ymaps.ready(()=>{const u={center:i.positions.myPosition,zoom:4},t=new ymaps.Map("map",u);t.controls.remove("geolocationControl"),t.controls.remove("searchControl"),t.controls.remove("trafficControl"),t.controls.remove("typeSelector"),t.controls.remove("rulerControl");const s=new ymaps.GeoObject({geometry:{type:"Point",coordinates:i.positions.myPosition},properties:{iconContent:"Mikhail M"}},{preset:"islands#darkBlueStretchyIcon"});if(i.positions.userPosition[0]||i.positions.userPosition[1]){const y=new ymaps.GeoObject({geometry:{type:"Point",coordinates:i.positions.userPosition},properties:{iconContent:"You"}},{preset:"islands#redStretchyIcon"}),l=new ymaps.GeoObject({geometry:{type:"LineString",coordinates:[i.positions.myPosition,i.positions.userPosition]},properties:{balloonContent:"123"}},{geodesic:!0,strokeWidth:3,strokeColor:"#0062f5"});t.geoObjects.add(s).add(y).add(l),t.setBounds(t.geoObjects.getBounds(),{checkZoomRange:!0,zoomMargin:30})}else t.geoObjects.add(s)})})};return(o,u)=>k((m(),_("div",G,null,512)),[[n]])}});const N=z(H,[["__scopeId","data-v-8134585c"]]),V=a=>(x("data-v-dec8f8f1"),a=a(),O(),a),K={class:"timezones animation animation_opacity animation_drop start"},L={key:0,class:"timezones__difference"},q=["datetime"],R={key:1,class:"timezones__difference"},W=["datetime"],Z={class:"timezones__clock"},J={key:0,class:"timezones__clock-name"},Q={key:1,class:"timezones__difference"},X=["datetime"],ee={key:2,class:"timezones__clock"},te=V(()=>p("p",{class:"timezones__clock-name"},"Mikhail's clock",-1)),oe=["datetime"],se=M({__name:"Timezones",setup(a){const i={mounted:e=>U(e,"start")},r=b(0);P(async()=>{await fetch("/config.json").then(e=>e.json()).then(e=>r.value=+e.myUTCOffset*60*6e4)});const n=b(new Date),g=v(()=>{const e=new Date(n.value.getTime()-n.value.getTimezoneOffset()*6e4);return s(e)}),h=v(()=>{const e=new Date(n.value.getTime()-n.value.getTimezoneOffset()*6e4);return y(e)}),o=v(()=>{const e=new Date(n.value.getTime()-r.value);return s(e)}),u=v(()=>{const e=new Date(n.value.getTime()-r.value);return y(e)}),t=v(()=>{const e=new Date(n.value.getTime()-n.value.getTimezoneOffset()*6e4).getTime(),d=new Date(n.value.getTime()-r.value).getTime();return Math.round((e-d)/36e5)}),s=e=>{const d=l(e.getUTCHours()),C=l(e.getUTCMinutes()),w=l(e.getUTCSeconds()),$=l(e.getUTCDate()),I=l(e.getUTCMonth()+1),A=e.getUTCFullYear();return`${d}:${C}:${w} ${$}.${I}.${A}`},y=e=>{const d=l(e.getUTCHours()),C=l(e.getUTCMinutes()),w=l(e.getUTCDate()),$=l(e.getUTCMonth()+1);return`${e.getUTCFullYear()}-${$}-${w}T${d}:${C}`},l=e=>{const d=e.toString();return d.length===1?`0${d}`:d};Y(()=>D());const D=()=>{setTimeout(()=>{n.value=new Date,D()},1e3)};return(e,d)=>k((m(),_("article",K,[c(t)>0?(m(),_("p",L,[f(" Your clock is "),p("time",{datetime:c(t)+"h"},T(Math.abs(c(t))+"h"),9,q),f(" ahead Mikhail's ")])):c(t)<0?(m(),_("p",R,[f(" Your clock is "),p("time",{datetime:Math.abs(c(t))+"h"},T(Math.abs(c(t))+"h"),9,W),f(" behind Mikhail's ")])):S("",!0),p("div",Z,[c(t)!==0?(m(),_("p",J,"Your clock")):(m(),_("p",Q," You are in the same time zone as Mikhail ")),p("time",{datetime:c(h),class:"timezones__clock-data"},T(c(g)),9,X)]),c(t)!==0?(m(),_("div",ee,[te,p("time",{datetime:c(u),class:"timezones__clock-data"},T(c(o)),9,oe)])):S("",!0)])),[[i]])}});const ne=z(se,[["__scopeId","data-v-dec8f8f1"]]);function ae(a,i,r={enableHighAccuracy:!0,timeout:2e3}){navigator.geolocation.getCurrentPosition(a,i,r)}const ie=a=>(x("data-v-dfb0eea8"),a=a(),O(),a),ce=["id"],re={class:"section__title-wrapper animation animation_opacity animation_drop start"},le={class:"section__title"},me={class:"section__title-text"},_e={class:"section__paragraph section__paragraph_center animation animation_opacity animation_rise start"},de=["href"],pe={class:"tip-message"},ue=ie(()=>p("a",{class:"link",href:"https://browserhow.com/how-to-enable-disable-geolocation-access-in-google-chrome/"},"Enable location services",-1)),he=M({__name:"Contacts",props:{title:null},setup(a){const i=a,r={mounted:s=>U(s,"start")},n=[55.991892,37.214385],g=b([0,0]),h=v({get(){return{myPosition:n,userPosition:g.value}},set(s){g.value=s.userPosition}}),o=b(!1);P(()=>ae(u,t));const u=s=>{h.value={myPosition:n,userPosition:[s.coords.latitude,s.coords.longitude]},o.value=!0},t=s=>o.value=!1;return(s,y)=>(m(),_("section",{class:"section section_numbered section",id:i.title.id},[k((m(),_("div",re,[p("h2",le,[p("span",me,T(i.title.title),1)])])),[[r]]),k((m(),_("p",_e,[f(" I am open to job offers (especially with relocation) and freelance work. However, feel free to contact me if you have any other questions. I'll try my best to answer you as soon as possible. ")])),[[r]]),k((m(),_("a",{class:"mail-link animation animation_opacity animation_drop start",target:"_blank",href:c(F).email.link},[f(" Send message ")],8,de)),[[r]]),k(p("p",pe,[ue,f(" and reload the page to see your location on the map. ")],512),[[B,!o.value]]),j(N,{positions:c(h)},null,8,["positions"]),j(ne)],8,ce))}});const ve=z(he,[["__scopeId","data-v-dfb0eea8"]]);export{ve as default};