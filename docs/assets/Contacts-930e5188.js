import{d as w,l as k,q as S,o as m,c as _,x as M,_ as P,y as A,k as f,n as B,w as $,a as r,t as i,z as x,b as O,A as G,f as D,u as I,e as U,B as F}from"./index-926effef.js";import{c as E}from"./social-media-data-a27bbe80.js";const H={key:0,id:"map"},N=w({__name:"Map",props:{positions:{},geoPermission:{type:Boolean}},setup(v){const u=v,l=k(!1),s=c=>{l.value||(l.value=!0,M(c.currentTarget,u.positions,g))};let t=null;const h=k();S(()=>u.geoPermission,()=>{t&&(t==null||t.destroy(),M(h.value,u.positions,g))});async function g(c){fetch("/config.json").then(n=>n.json()).then(n=>{let d=document.createElement("script");d.setAttribute("src",`https://api-maps.yandex.ru/2.1/?apikey=${n.mapApiKey}&lang=en_US`),d.setAttribute("type","text/javascript"),document.head.appendChild(d),d.addEventListener("load",()=>{ymaps.ready(()=>{const o={center:c.myPosition,zoom:4};t=new ymaps.Map("map",o),t.controls.remove("geolocationControl"),t.controls.remove("searchControl"),t.controls.remove("trafficControl"),t.controls.remove("typeSelector"),t.controls.remove("rulerControl");const a=new ymaps.GeoObject({geometry:{type:"Point",coordinates:c.myPosition},properties:{iconContent:"Mikhail M"}},{preset:"islands#darkBlueStretchyIcon"});if(c.userPosition[0]||c.userPosition[1]){const y=new ymaps.GeoObject({geometry:{type:"Point",coordinates:c.userPosition},properties:{iconContent:"You"}},{preset:"islands#redStretchyIcon"}),e=new ymaps.GeoObject({geometry:{type:"LineString",coordinates:[c.myPosition,c.userPosition]},properties:{balloonContent:""}},{geodesic:!0,strokeWidth:3,strokeColor:"#0062f5"});t.geoObjects.add(a).add(y).add(e),t.setBounds(t.geoObjects.getBounds(),{checkZoomRange:!0,zoomMargin:30})}else t.geoObjects.add(a)})})})}return(c,n)=>(m(),_("div",{id:"map-wrapper",onClick:s,ref_key:"wrapper",ref:h},[l.value?(m(),_("div",H)):(m(),_("a",{key:1,id:"map-toggle",onClick:n[0]||(n[0]=d=>c.$emit("geoPermission"))},"Show map"))],512))}});const V=P(N,[["__scopeId","data-v-d5ee6070"]]),Y={class:"timezones animation animation_opacity animation_drop start"},L={key:0,class:"timezones__difference"},q={class:"timezones__text-1"},K=["datetime"],R={class:"timezones__text-2"},W={key:1,class:"timezones__difference"},Z={class:"timezones__text-1"},J=["datetime"],Q={class:"timezones__text-3"},X={key:2,class:"timezones__difference timezones__text-4"},ee={class:"timezones__clock"},te={key:0,class:"timezones__clock-name timezones__text-5"},oe=["datetime"],se={key:3,class:"timezones__clock"},ne={class:"timezones__clock-name timezones__text-6"},ae=["datetime"],ie=w({__name:"Timezones",setup(v){const u={mounted:e=>O(e,"start")},l=k(0);A(async()=>{await fetch("/config.json").then(e=>e.json()).then(e=>l.value=+e.myUTCOffset*60*6e4)});const s=k(new Date),t=f(()=>{const e=new Date(s.value.getTime()-s.value.getTimezoneOffset()*6e4);return d(e)}),h=f(()=>{const e=new Date(s.value.getTime()-s.value.getTimezoneOffset()*6e4);return o(e)}),g=f(()=>{const e=new Date(s.value.getTime()-l.value);return d(e)}),c=f(()=>{const e=new Date(s.value.getTime()-l.value);return o(e)}),n=f(()=>{const e=new Date(s.value.getTime()-s.value.getTimezoneOffset()*6e4).getTime(),p=new Date(s.value.getTime()-l.value).getTime();return Math.round((e-p)/36e5)}),d=e=>{const p=a(e.getUTCHours()),z=a(e.getUTCMinutes()),T=a(e.getUTCSeconds()),C=a(e.getUTCDate()),b=a(e.getUTCMonth()+1),j=e.getUTCFullYear();return`${p}:${z}:${T} ${C}.${b}.${j}`},o=e=>{const p=a(e.getUTCHours()),z=a(e.getUTCMinutes()),T=a(e.getUTCDate()),C=a(e.getUTCMonth()+1);return`${e.getUTCFullYear()}-${C}-${T}T${p}:${z}`},a=e=>{const p=e.toString();return p.length===1?`0${p}`:p};B(()=>y());const y=()=>{setTimeout(()=>{s.value=new Date,y()},1e3)};return(e,p)=>$((m(),_("article",Y,[n.value>0?(m(),_("p",L,[r("span",q,i(e.$t("timezones.text-1")),1),r("time",{datetime:n.value+"h"},i(Math.abs(n.value)+e.$t("timezones.hour")),9,K),r("span",R,i(e.$t("timezones.text-2")),1)])):n.value<0?(m(),_("p",W,[r("span",Z,i(e.$t("timezones.text-1")),1),r("time",{datetime:Math.abs(n.value)+"h"},i(Math.abs(n.value)+e.$t("timezones.hour")),9,J),r("span",Q,i(e.$t("timezones.text-3")),1)])):(m(),_("p",X,i(e.$t("timezones.text-4")),1)),r("div",ee,[n.value!==0?(m(),_("p",te,i(e.$t("timezones.text-5")),1)):x("",!0),r("time",{datetime:h.value,class:"timezones__clock-data"},i(t.value),9,oe)]),n.value!==0?(m(),_("div",se,[r("p",ne,i(e.$t("timezones.text-6")),1),r("time",{datetime:c.value,class:"timezones__clock-data"},i(g.value),9,ae)])):x("",!0)])),[[u]])}});const ce=P(ie,[["__scopeId","data-v-c3334957"]]);function re(v={enableHighAccuracy:!0,timeout:1/0}){const u="navigator"in window&&"geolocation"in navigator;return new Promise((l,s)=>{if(u)return navigator.geolocation.getCurrentPosition(t=>l(t),t=>s(t),v)})}const le=["id"],me={class:"section__title-wrapper animation animation_opacity animation_drop start"},_e={class:"section__title"},ue={class:"section__title-text"},de={class:"section__paragraph section__paragraph_center contacts__text-1 animation animation_opacity animation_rise start"},pe=["href"],ge={class:"tip-message"},he={class:"link contacts__tip-message-link",href:"https://browserhow.com/how-to-enable-disable-geolocation-access-in-google-chrome/"},ve={class:"contacts__tip-message-text"},ye=w({__name:"Contacts",props:{title:{}},setup(v){const u=v,l={mounted:o=>O(o,"start")},s=[55.991892,37.214385],t=k([0,0]),h=f({get(){return{myPosition:s,userPosition:t.value}},set(o){t.value=o.userPosition}}),g=k(!1),c=(o,a)=>{re().then(o).catch(a)},n=o=>{"coords"in o&&(h.value={myPosition:s,userPosition:[o.coords.latitude,o.coords.longitude]},g.value=!0)},d=o=>{g.value=!1};return(o,a)=>{const y=G("geolocation");return $((m(),_("section",{class:"section section_numbered section",id:u.title.id},[$((m(),_("div",me,[r("h2",_e,[r("span",ue,i(u.title.title),1)])])),[[l]]),$((m(),_("p",de,[D(i(o.$t("contacts.text-1")),1)])),[[l]]),$((m(),_("a",{class:"mail-link animation animation_opacity animation_drop start",target:"_blank",href:I(E).email.link},[D(i(o.$t("contacts.mail-link")),1)],8,pe)),[[l]]),U(V,{positions:h.value,geoPermission:g.value,onGeoPermissionOnce:a[0]||(a[0]=()=>c(n,d))},null,8,["positions","geoPermission"]),$(r("p",ge,[r("a",he,i(o.$t("contacts.tip-message-link")),1),r("span",ve,i(o.$t("contacts.tip-message-text")),1)],512),[[F,!g.value]]),U(ce)],8,le)),[[y]])}}});const ke=P(ye,[["__scopeId","data-v-1b68afb1"]]);export{ke as default};
