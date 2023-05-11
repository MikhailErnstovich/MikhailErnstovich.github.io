import{d as z,j as C,k as O,w as f,o as m,c as _,_ as I,l as k,h as Y,u as c,b as g,a as p,t as b,m as P,p as j,f as x,v as E,q as G,e as F}from"./index-9d06353e.js";import{c as U,a as A}from"./appear-animation-3fc7a563.js";import{c as H}from"./social-media-data-fa3a8e24.js";const N={id:"map"},V=z({__name:"Map",props:{positions:null},setup(a){const i=a,r=C("");O(async()=>{await fetch("/config.json").then(s=>s.json()).then(s=>r.value=s.mapApiKey)});const n={mounted:v};function v(s){const h=(o,d)=>{o.forEach(u=>{if(u.isIntersecting)y(),d.unobserve(s);else return})};window.IntersectionObserver?U(s,h):y()}const y=async()=>{let s=document.createElement("script");s.setAttribute("src",`https://api-maps.yandex.ru/2.1/?apikey=${r.value}&lang=en_US`),s.setAttribute("type","text/javascript"),document.head.appendChild(s),s.addEventListener("load",()=>{ymaps.ready(()=>{const h={center:i.positions.myPosition,zoom:4},o=new ymaps.Map("map",h);o.controls.remove("geolocationControl"),o.controls.remove("searchControl"),o.controls.remove("trafficControl"),o.controls.remove("typeSelector"),o.controls.remove("rulerControl");const d=new ymaps.GeoObject({geometry:{type:"Point",coordinates:i.positions.myPosition},properties:{iconContent:"Mikhail M"}},{preset:"islands#darkBlueStretchyIcon"});if(i.positions.userPosition[0]||i.positions.userPosition[1]){const u=new ymaps.GeoObject({geometry:{type:"Point",coordinates:i.positions.userPosition},properties:{iconContent:"You"}},{preset:"islands#redStretchyIcon"}),t=new ymaps.GeoObject({geometry:{type:"LineString",coordinates:[i.positions.myPosition,i.positions.userPosition]},properties:{balloonContent:"123"}},{geodesic:!0,strokeWidth:3,strokeColor:"#0062f5"});o.geoObjects.add(d).add(u).add(t),o.setBounds(o.geoObjects.getBounds(),{checkZoomRange:!0,zoomMargin:30})}else o.geoObjects.add(d)})})};return(s,h)=>f((m(),_("div",N,null,512)),[[n]])}});const q=I(V,[["__scopeId","data-v-8134585c"]]),K=a=>(j("data-v-dec8f8f1"),a=a(),x(),a),L={class:"timezones animation animation_opacity animation_drop start"},R={key:0,class:"timezones__difference"},W=["datetime"],Z={key:1,class:"timezones__difference"},J=["datetime"],Q={class:"timezones__clock"},X={key:0,class:"timezones__clock-name"},ee={key:1,class:"timezones__difference"},te=["datetime"],oe={key:2,class:"timezones__clock"},se=K(()=>p("p",{class:"timezones__clock-name"},"Mikhail's clock",-1)),ne=["datetime"],ae=z({__name:"Timezones",setup(a){const i={mounted:e=>A(e,"start")},r=C(0);O(async()=>{await fetch("/config.json").then(e=>e.json()).then(e=>r.value=+e.myUTCOffset*60*6e4)});const n=C(new Date),v=k(()=>{const e=new Date(n.value.getTime()-n.value.getTimezoneOffset()*6e4);return d(e)}),y=k(()=>{const e=new Date(n.value.getTime()-n.value.getTimezoneOffset()*6e4);return u(e)}),s=k(()=>{const e=new Date(n.value.getTime()-r.value);return d(e)}),h=k(()=>{const e=new Date(n.value.getTime()-r.value);return u(e)}),o=k(()=>{const e=new Date(n.value.getTime()-n.value.getTimezoneOffset()*6e4).getTime(),l=new Date(n.value.getTime()-r.value).getTime();return Math.round((e-l)/36e5)}),d=e=>{const l=t(e.getUTCHours()),w=t(e.getUTCMinutes()),$=t(e.getUTCSeconds()),M=t(e.getUTCDate()),D=t(e.getUTCMonth()+1),B=e.getUTCFullYear();return`${l}:${w}:${$} ${M}.${D}.${B}`},u=e=>{const l=t(e.getUTCHours()),w=t(e.getUTCMinutes()),$=t(e.getUTCDate()),M=t(e.getUTCMonth()+1);return`${e.getUTCFullYear()}-${M}-${$}T${l}:${w}`},t=e=>{const l=e.toString();return l.length===1?`0${l}`:l};Y(()=>T());const T=()=>{setTimeout(()=>{n.value=new Date,T()},1e3)};return(e,l)=>f((m(),_("article",L,[c(o)>0?(m(),_("p",R,[g(" Your clock is "),p("time",{datetime:c(o)+"h"},b(Math.abs(c(o))+"h"),9,W),g(" ahead Mikhail's ")])):c(o)<0?(m(),_("p",Z,[g(" Your clock is "),p("time",{datetime:Math.abs(c(o))+"h"},b(Math.abs(c(o))+"h"),9,J),g(" behind Mikhail's ")])):P("",!0),p("div",Q,[c(o)!==0?(m(),_("p",X,"Your clock")):(m(),_("p",ee," You are in the same time zone as Mikhail ")),p("time",{datetime:c(y),class:"timezones__clock-data"},b(c(v)),9,te)]),c(o)!==0?(m(),_("div",oe,[se,p("time",{datetime:c(h),class:"timezones__clock-data"},b(c(s)),9,ne)])):P("",!0)])),[[i]])}});const ie=I(ae,[["__scopeId","data-v-dec8f8f1"]]);function S(a,i,r={enableHighAccuracy:!0}){navigator.geolocation.getCurrentPosition(a,i,r)}const ce=a=>(j("data-v-158d9754"),a=a(),x(),a),re=["id"],le={class:"section__title-wrapper animation animation_opacity animation_drop start"},me={class:"section__title"},_e={class:"section__title-text"},de={class:"section__paragraph section__paragraph_center animation animation_opacity animation_rise start"},pe=["href"],ue={class:"tip-message"},he=ce(()=>p("a",{class:"link",href:"https://browserhow.com/how-to-enable-disable-geolocation-access-in-google-chrome/"},"Enable location services",-1)),ye=z({__name:"Contacts",props:{title:null},setup(a){const i=a,r={mounted:t=>A(t,"start")},n=[55.991892,37.214385],v=C([0,0]),y=k({get(){return{myPosition:n,userPosition:v.value}},set(t){v.value=t.userPosition}}),s=C(!1),h={mounted:o};function o(t){const T=(e,l)=>{e.forEach(w=>{if(w.isIntersecting)S(d,u),l.unobserve(t);else return})};window.IntersectionObserver?U(t,T):S(d,u)}const d=t=>{y.value={myPosition:n,userPosition:[t.coords.latitude,t.coords.longitude]},s.value=!0},u=t=>s.value=!1;return(t,T)=>f((m(),_("section",{class:"section section_numbered section",id:i.title.id},[f((m(),_("div",le,[p("h2",me,[p("span",_e,b(i.title.title),1)])])),[[r]]),f((m(),_("p",de,[g(" I am open to job offers (especially with relocation) and freelance work. However, feel free to contact me if you have any other questions. I'll try my best to answer you as soon as possible. ")])),[[r]]),f((m(),_("a",{class:"mail-link animation animation_opacity animation_drop start",target:"_blank",href:c(H).email.link},[g(" Send message ")],8,pe)),[[r]]),f(p("p",ue,[he,g(" and reload the page to see your location on the map. ")],512),[[E,!s.value]]),s.value?P("",!0):(m(),G(q,{key:0,positions:c(y)},null,8,["positions"])),F(ie)],8,re)),[[h]])}});const ke=I(ye,[["__scopeId","data-v-158d9754"]]);export{ke as default};
