if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let l={};const c=s=>i(s,a),o={module:{uri:a},exports:l,require:c};e[a]=Promise.all(n.map((s=>o[s]||c(s)))).then((s=>(r(...s),l)))}}define(["./workbox-f78b6354"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/About-08d99c3b.css",revision:null},{url:"assets/About-c7635105.js",revision:null},{url:"assets/appear-animation-f23b2288.js",revision:null},{url:"assets/book-c668bab3.svg",revision:null},{url:"assets/chip-6289cdb6.svg",revision:null},{url:"assets/Contacts-22389cc2.js",revision:null},{url:"assets/Contacts-38d8e025.css",revision:null},{url:"assets/cross-25c5bd34.svg",revision:null},{url:"assets/Experience-275ce328.js",revision:null},{url:"assets/Experience-ec6558f3.css",revision:null},{url:"assets/favicon/android-chrome-192x192.png",revision:"368ccbb453ab4f40d95ea4ff4f6bbc6a"},{url:"assets/favicon/android-chrome-512x512.png",revision:"543086c74a463b31d406173981202504"},{url:"assets/favicon/apple-touch-icon.png",revision:"33956f2ca1c4e0d1d07c862f3a87e888"},{url:"assets/favicon/favicon-16x16.png",revision:"f073a58a1f1df3e80a640dd09d6ce629"},{url:"assets/favicon/favicon-32x32.png",revision:"72b9d3f16b0e08cb358a29e511924316"},{url:"assets/favicon/favicon.ico",revision:"4ebce9c6d8c520e2bc4b6b5691f9901f"},{url:"assets/favicon/mstile-144x144.png",revision:"b26cd03935d0b03bebde3c5f1649b1ea"},{url:"assets/favicon/mstile-150x150.png",revision:"55caff9aaa37eb67ac9cbe1c7cc8fb6a"},{url:"assets/favicon/mstile-310x150.png",revision:"498537d2b1ea30a05021091af304a188"},{url:"assets/favicon/mstile-310x310.png",revision:"a9bf79ed2c1138e8c03efb5fd15b9d7f"},{url:"assets/favicon/mstile-70x70.png",revision:"d82a44d9146f1f08a391badc24db49cb"},{url:"assets/favicon/safari-pinned-tab.svg",revision:"62cd281253e58d7c1493550dec4ee607"},{url:"assets/Footer-67902e3e.js",revision:null},{url:"assets/Footer-857a7d6e.css",revision:null},{url:"assets/github-d7e3765b.svg",revision:null},{url:"assets/hamburger-e270db0b.svg",revision:null},{url:"assets/icons/angle-down.svg",revision:"4cb37e636a338ff0cd0ca865515a560d"},{url:"assets/icons/tick.svg",revision:"105d84088443214d8f5ca92598b65883"},{url:"assets/index-a41aff4b.js",revision:null},{url:"assets/index-c01fbbd3.css",revision:null},{url:"assets/linkedin-6dc858c4.svg",revision:null},{url:"assets/logo-f73ec55c.svg",revision:null},{url:"assets/mail-3635ad9b.svg",revision:null},{url:"assets/me-f0a7693e.webp",revision:null},{url:"assets/me-md-f5f1a147.webp",revision:null},{url:"assets/me-sm-407be241.webp",revision:null},{url:"assets/pc-e0036745.svg",revision:null},{url:"assets/research-gate-bbc30e58.svg",revision:null},{url:"assets/social-media-data-fa3a8e24.js",revision:null},{url:"assets/telegram-47838f6e.svg",revision:null},{url:"CV.pdf",revision:"e4f3c80b8c05244570380fdf6b4d4c41"},{url:"index.html",revision:"f12c8c4e5df23d57edce2d42554bea02"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/favicon/android-chrome-192x192.png",revision:"368ccbb453ab4f40d95ea4ff4f6bbc6a"},{url:"manifest.webmanifest",revision:"58cb42dbe5d39f1a6a4a7ecb0e06a218"}],{}),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
