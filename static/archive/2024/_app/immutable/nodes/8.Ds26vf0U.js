import{g as Ie,F as ke,f as ye,a as Te}from"../chunks/index.DiksSbSM.js";import{s as Le,e as v,a as T,t as C,c as b,b as E,g as L,d as N,f as d,i as _,C as ce,j as X,k as f,l as P,m as Se}from"../chunks/scheduler.CKeg0i-H.js";import{S as Ce,i as Ne,b as de,d as ge,m as ve,a as O,t as V,c as be,e as $e,g as we}from"../chunks/index.Df2JD2DI.js";import{e as R,u as Ee,o as Pe,d as Ae}from"../chunks/each.DdnPTYds.js";import{$ as Me}from"../chunks/runtime.Cgz1_hax.js";import{f as je,a as He}from"../chunks/index.DeOPegWn.js";import{b as ae}from"../chunks/paths.bAlMjhru.js";const Oe=async({fetch:r,params:a})=>({speaker:await Ie(r,a.id)}),Je=Object.freeze(Object.defineProperty({__proto__:null,load:Oe},Symbol.toStringTag,{value:"Module"}));var le=(r=>(r.CompanyWebsite="Company_Website",r.LinkedIn="LinkedIn",r.Twitter="Twitter",r))(le||{});function ue(r,a,t){const l=r.slice();return l[3]=a[t],l}function he(r,a,t){const l=r.slice();return l[6]=a[t],l}function _e(r){let a,t=[],l=new Map,h,o=R(r[0].speaker.links);const i=e=>e[6].linkType;for(let e=0;e<o.length;e+=1){let s=he(r,o,e),c=i(s);l.set(c,t[e]=pe(c,s))}return{c(){a=v("ul");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){a=b(e,"UL",{class:!0});var s=E(a);for(let c=0;c<t.length;c+=1)t[c].l(s);s.forEach(d),this.h()},h(){_(a,"class","list mb-12")},m(e,s){X(e,a,s);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(a,null);h=!0},p(e,s){s&5&&(o=R(e[0].speaker.links),we(),t=Ee(t,s,i,1,e,o,l,a,Pe,pe,null,he),be())},i(e){if(!h){for(let s=0;s<o.length;s+=1)O(t[s]);h=!0}},o(e){for(let s=0;s<t.length;s+=1)V(t[s]);h=!1},d(e){e&&d(a);for(let s=0;s<t.length;s+=1)t[s].d()}}}function pe(r,a){let t,l,h,o,i=a[6].title+"",e,s,c,y;return l=new ke({props:{icon:a[2](a[6].linkType)}}),{key:r,first:null,c(){t=v("li"),de(l.$$.fragment),h=T(),o=v("a"),e=C(i),c=T(),this.h()},l(m){t=b(m,"LI",{});var k=E(t);ge(l.$$.fragment,k),h=L(k),o=b(k,"A",{href:!0,class:!0});var S=E(o);e=N(S,i),S.forEach(d),c=L(k),k.forEach(d),this.h()},h(){_(o,"href",s=a[6].url),_(o,"class","flex-auto"),this.first=t},m(m,k){X(m,t,k),ve(l,t,null),f(t,h),f(t,o),f(o,e),f(t,c),y=!0},p(m,k){a=m;const S={};k&1&&(S.icon=a[2](a[6].linkType)),l.$set(S),(!y||k&1)&&i!==(i=a[6].title+"")&&P(e,i),(!y||k&1&&s!==(s=a[6].url))&&_(o,"href",s)},i(m){y||(O(l.$$.fragment,m),y=!0)},o(m){V(l.$$.fragment,m),y=!1},d(m){m&&d(t),$e(l)}}}function me(r,a){let t,l=a[3].name+"",h,o;return{key:r,first:null,c(){t=v("a"),h=C(l),this.h()},l(i){t=b(i,"A",{href:!0,class:!0});var e=E(t);h=N(e,l),e.forEach(d),this.h()},h(){_(t,"href",o=ae+"/sessions/"+a[3].id),_(t,"class","text-blue-700 hover:text-indigo-700"),this.first=t},m(i,e){X(i,t,e),f(t,h)},p(i,e){a=i,e&1&&l!==(l=a[3].name+"")&&P(h,l),e&1&&o!==(o=ae+"/sessions/"+a[3].id)&&_(t,"href",o)},d(i){i&&d(t)}}}function qe(r){let a,t,l,h,o,i,e,s,c,y,m=r[1]("speaker.back")+"",k,S,A,q=r[0].speaker.fullName+"",W,Y,M,D=r[0].speaker.tagLine+"",z,Z,j,F=r[0].speaker.bio+"",U,x,B,H,G=r[1]("speaker.sessions")+"",J,ee,$=[],se=new Map,I;c=new ke({props:{icon:ye}});let p=r[0].speaker.links&&_e(r),K=R(r[0].speaker.sessions);const re=n=>n[3].id;for(let n=0;n<K.length;n+=1){let u=ue(r,K,n),w=re(u);se.set(w,$[n]=me(w,u))}return{c(){a=v("div"),t=v("section"),l=v("img"),i=T(),e=v("div"),s=v("a"),de(c.$$.fragment),y=T(),k=C(m),S=T(),A=v("h1"),W=C(q),Y=T(),M=v("h4"),z=C(D),Z=T(),j=v("p"),U=C(F),x=T(),p&&p.c(),B=T(),H=v("h2"),J=C(G),ee=T();for(let n=0;n<$.length;n+=1)$[n].c();this.h()},l(n){a=b(n,"DIV",{class:!0});var u=E(a);t=b(u,"SECTION",{class:!0});var w=E(t);l=b(w,"IMG",{class:!0,src:!0,alt:!0}),i=L(w),e=b(w,"DIV",{class:!0});var g=E(e);s=b(g,"A",{href:!0,class:!0});var Q=E(s);ge(c.$$.fragment,Q),y=L(Q),k=N(Q,m),Q.forEach(d),S=L(g),A=b(g,"H1",{class:!0});var ne=E(A);W=N(ne,q),ne.forEach(d),Y=L(g),M=b(g,"H4",{class:!0});var ie=E(M);z=N(ie,D),ie.forEach(d),Z=L(g),j=b(g,"P",{class:!0});var oe=E(j);U=N(oe,F),oe.forEach(d),x=L(g),p&&p.l(g),B=L(g),H=b(g,"H2",{class:!0});var fe=E(H);J=N(fe,G),fe.forEach(d),ee=L(g);for(let te=0;te<$.length;te+=1)$[te].l(g);g.forEach(d),w.forEach(d),u.forEach(d),this.h()},h(){_(l,"class","rounded-lg"),ce(l.src,h=r[0].speaker.profilePicture)||_(l,"src",h),_(l,"alt",o=r[0].speaker.fullName),_(s,"href",ae+"/#speakers"),_(s,"class","mb-12 flex gap-2 items-center text-blue-700 hover:text-indigo-700"),_(A,"class","h1"),_(M,"class","h4 mt-4"),_(j,"class","my-8 whitespace-pre-wrap"),_(H,"class","h3 mb-4"),_(e,"class","md:col-span-2"),_(t,"class","container mx-auto max-w-5xl grid md:grid-cols-3 gap-24"),_(a,"class","w-full px-8 py-16")},m(n,u){X(n,a,u),f(a,t),f(t,l),f(t,i),f(t,e),f(e,s),ve(c,s,null),f(s,y),f(s,k),f(e,S),f(e,A),f(A,W),f(e,Y),f(e,M),f(M,z),f(e,Z),f(e,j),f(j,U),f(e,x),p&&p.m(e,null),f(e,B),f(e,H),f(H,J),f(e,ee);for(let w=0;w<$.length;w+=1)$[w]&&$[w].m(e,null);I=!0},p(n,[u]){(!I||u&1&&!ce(l.src,h=n[0].speaker.profilePicture))&&_(l,"src",h),(!I||u&1&&o!==(o=n[0].speaker.fullName))&&_(l,"alt",o),(!I||u&2)&&m!==(m=n[1]("speaker.back")+"")&&P(k,m),(!I||u&1)&&q!==(q=n[0].speaker.fullName+"")&&P(W,q),(!I||u&1)&&D!==(D=n[0].speaker.tagLine+"")&&P(z,D),(!I||u&1)&&F!==(F=n[0].speaker.bio+"")&&P(U,F),n[0].speaker.links?p?(p.p(n,u),u&1&&O(p,1)):(p=_e(n),p.c(),O(p,1),p.m(e,B)):p&&(we(),V(p,1,1,()=>{p=null}),be()),(!I||u&2)&&G!==(G=n[1]("speaker.sessions")+"")&&P(J,G),u&1&&(K=R(n[0].speaker.sessions),$=Ee($,u,re,1,n,K,se,e,Ae,me,null,ue))},i(n){I||(O(c.$$.fragment,n),O(p),I=!0)},o(n){V(c.$$.fragment,n),V(p),I=!1},d(n){n&&d(a),$e(c),p&&p.d();for(let u=0;u<$.length;u+=1)$[u].d()}}}function De(r,a,t){let l;Se(r,Me,i=>t(1,l=i));let{data:h}=a;const o=i=>{switch(i){case le.Twitter:return He;case le.LinkedIn:return je;default:return Te}};return r.$$set=i=>{"data"in i&&t(0,h=i.data)},[h,l,o]}class Ke extends Ce{constructor(a){super(),Ne(this,a,De,qe,Le,{data:0})}}export{Ke as component,Je as universal};