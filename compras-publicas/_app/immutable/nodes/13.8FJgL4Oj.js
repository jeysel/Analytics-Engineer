import{s as te,d as _,i as m,a as Ft,b as v,c as d,h as ee,e as H,f as jt,g as ct,j as p,k as M,l as Gt,m as oe,o as ae,n as re,p as se,q as at,r as ie,t as ne,u as le}from"../chunks/scheduler.DjHbl-jX.js";import{S as ue,i as _e,d as q,t as g,a as $,c as Ht,m as y,b as T,e as E,g as Mt}from"../chunks/index.DylIKcrZ.js";import{D as It,e as me,s as fe,Q as Ot,p as ce,C as h,a as Kt,r as Xt,b as de}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.C4ybX0RH.js";import{w as pe}from"../chunks/entry.C9z7pgeU.js";import{h as ft,p as $e}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as ge}from"../chunks/stores.CisT2OjB.js";import{Q as At}from"../chunks/QueryViewer.SFbHT3Ej.js";import{B as wt}from"../chunks/BigValue.3D8O99yE.js";function ve(c){let o,s=k.title+"",e;return{c(){o=M("h1"),e=le(s),this.h()},l(l){o=H(l,"H1",{class:!0});var u=ie(o);e=ne(u,s),u.forEach(_),this.h()},h(){v(o,"class","title")},m(l,u){m(l,o,u),Ft(o,e)},p:at,d(l){l&&_(o)}}}function be(c){return{c(){this.h()},l(o){this.h()},h(){document.title="Evidence"},m:at,p:at,d:at}}function we(c){let o,s,e,l,u;return document.title=o=k.title,{c(){s=p(),e=M("meta"),l=p(),u=M("meta"),this.h()},l(a){s=d(a),e=H(a,"META",{property:!0,content:!0}),l=d(a),u=H(a,"META",{name:!0,content:!0}),this.h()},h(){var a,f;v(e,"property","og:title"),v(e,"content",((a=k.og)==null?void 0:a.title)??k.title),v(u,"name","twitter:title"),v(u,"content",((f=k.og)==null?void 0:f.title)??k.title)},m(a,f){m(a,s,f),m(a,e,f),m(a,l,f),m(a,u,f)},p(a,f){f&0&&o!==(o=k.title)&&(document.title=o)},d(a){a&&(_(s),_(e),_(l),_(u))}}}function ke(c){var u,a;let o,s,e=(k.description||((u=k.og)==null?void 0:u.description))&&qe(),l=((a=k.og)==null?void 0:a.image)&&ye();return{c(){e&&e.c(),o=p(),l&&l.c(),s=jt()},l(f){e&&e.l(f),o=d(f),l&&l.l(f),s=jt()},m(f,b){e&&e.m(f,b),m(f,o,b),l&&l.m(f,b),m(f,s,b)},p(f,b){var r,R;(k.description||(r=k.og)!=null&&r.description)&&e.p(f,b),(R=k.og)!=null&&R.image&&l.p(f,b)},d(f){f&&(_(o),_(s)),e&&e.d(f),l&&l.d(f)}}}function qe(c){let o,s,e,l,u;return{c(){o=M("meta"),s=p(),e=M("meta"),l=p(),u=M("meta"),this.h()},l(a){o=H(a,"META",{name:!0,content:!0}),s=d(a),e=H(a,"META",{property:!0,content:!0}),l=d(a),u=H(a,"META",{name:!0,content:!0}),this.h()},h(){var a,f,b;v(o,"name","description"),v(o,"content",k.description??((a=k.og)==null?void 0:a.description)),v(e,"property","og:description"),v(e,"content",((f=k.og)==null?void 0:f.description)??k.description),v(u,"name","twitter:description"),v(u,"content",((b=k.og)==null?void 0:b.description)??k.description)},m(a,f){m(a,o,f),m(a,s,f),m(a,e,f),m(a,l,f),m(a,u,f)},p:at,d(a){a&&(_(o),_(s),_(e),_(l),_(u))}}}function ye(c){let o,s,e;return{c(){o=M("meta"),s=p(),e=M("meta"),this.h()},l(l){o=H(l,"META",{property:!0,content:!0}),s=d(l),e=H(l,"META",{name:!0,content:!0}),this.h()},h(){var l,u;v(o,"property","og:image"),v(o,"content",Kt((l=k.og)==null?void 0:l.image)),v(e,"name","twitter:image"),v(e,"content",Kt((u=k.og)==null?void 0:u.image))},m(l,u){m(l,o,u),m(l,s,u),m(l,e,u)},p:at,d(l){l&&(_(o),_(s),_(e))}}}function Yt(c){let o,s;return o=new At({props:{queryID:"kpis_outros",queryResult:c[0]}}),{c(){E(o.$$.fragment)},l(e){T(o.$$.fragment,e)},m(e,l){y(o,e,l),s=!0},p(e,l){const u={};l[0]&1&&(u.queryResult=e[0]),o.$set(u)},i(e){s||($(o.$$.fragment,e),s=!0)},o(e){g(o.$$.fragment,e),s=!1},d(e){q(o,e)}}}function Jt(c){let o,s;return o=new At({props:{queryID:"orgaos_outros",queryResult:c[1]}}),{c(){E(o.$$.fragment)},l(e){T(o.$$.fragment,e)},m(e,l){y(o,e,l),s=!0},p(e,l){const u={};l[0]&2&&(u.queryResult=e[1]),o.$set(u)},i(e){s||($(o.$$.fragment,e),s=!0)},o(e){g(o.$$.fragment,e),s=!1},d(e){q(o,e)}}}function Te(c){let o,s,e,l,u,a,f,b;return o=new h({props:{id:"orgao",title:"Órgão"}}),e=new h({props:{id:"qt_contratos",title:"Qtd. Contratos",fmt:"num0"}}),u=new h({props:{id:"qt_fornecedores",title:"Fornecedores",fmt:"num0"}}),f=new h({props:{id:"vl_total",title:"Valor Total",fmt:"num1b"}}),{c(){E(o.$$.fragment),s=p(),E(e.$$.fragment),l=p(),E(u.$$.fragment),a=p(),E(f.$$.fragment)},l(r){T(o.$$.fragment,r),s=d(r),T(e.$$.fragment,r),l=d(r),T(u.$$.fragment,r),a=d(r),T(f.$$.fragment,r)},m(r,R){y(o,r,R),m(r,s,R),y(e,r,R),m(r,l,R),y(u,r,R),m(r,a,R),y(f,r,R),b=!0},p:at,i(r){b||($(o.$$.fragment,r),$(e.$$.fragment,r),$(u.$$.fragment,r),$(f.$$.fragment,r),b=!0)},o(r){g(o.$$.fragment,r),g(e.$$.fragment,r),g(u.$$.fragment,r),g(f.$$.fragment,r),b=!1},d(r){r&&(_(s),_(l),_(a)),q(o,r),q(e,r),q(u,r),q(f,r)}}}function Wt(c){let o,s;return o=new At({props:{queryID:"fornecedores_outros",queryResult:c[2]}}),{c(){E(o.$$.fragment)},l(e){T(o.$$.fragment,e)},m(e,l){y(o,e,l),s=!0},p(e,l){const u={};l[0]&4&&(u.queryResult=e[2]),o.$set(u)},i(e){s||($(o.$$.fragment,e),s=!0)},o(e){g(o.$$.fragment,e),s=!1},d(e){q(o,e)}}}function Ee(c){let o,s,e,l,u,a,f,b;return o=new h({props:{id:"fornecedor",title:"Fornecedor"}}),e=new h({props:{id:"qt_contratos",title:"Qtd. Contratos",fmt:"num0"}}),u=new h({props:{id:"qt_orgaos",title:"Órgãos",fmt:"num0"}}),f=new h({props:{id:"vl_total",title:"Valor Total",fmt:"num1b"}}),{c(){E(o.$$.fragment),s=p(),E(e.$$.fragment),l=p(),E(u.$$.fragment),a=p(),E(f.$$.fragment)},l(r){T(o.$$.fragment,r),s=d(r),T(e.$$.fragment,r),l=d(r),T(u.$$.fragment,r),a=d(r),T(f.$$.fragment,r)},m(r,R){y(o,r,R),m(r,s,R),y(e,r,R),m(r,l,R),y(u,r,R),m(r,a,R),y(f,r,R),b=!0},p:at,i(r){b||($(o.$$.fragment,r),$(e.$$.fragment,r),$(u.$$.fragment,r),$(f.$$.fragment,r),b=!0)},o(r){g(o.$$.fragment,r),g(e.$$.fragment,r),g(u.$$.fragment,r),g(f.$$.fragment,r),b=!1},d(r){r&&(_(s),_(l),_(a)),q(o,r),q(e,r),q(u,r),q(f,r)}}}function Zt(c){let o,s;return o=new At({props:{queryID:"contratos_outros",queryResult:c[3]}}),{c(){E(o.$$.fragment)},l(e){T(o.$$.fragment,e)},m(e,l){y(o,e,l),s=!0},p(e,l){const u={};l[0]&8&&(u.queryResult=e[3]),o.$set(u)},i(e){s||($(o.$$.fragment,e),s=!0)},o(e){g(o.$$.fragment,e),s=!1},d(e){q(o,e)}}}function Re(c){let o,s,e,l,u,a,f,b,r,R,I,V,F,j,B,z,Q,O;return o=new h({props:{id:"nu_contrato",title:"Contrato"}}),e=new h({props:{id:"fornecedor",title:"Fornecedor"}}),u=new h({props:{id:"orgao",title:"Órgão"}}),f=new h({props:{id:"objeto",title:"Objeto"}}),r=new h({props:{id:"ano",title:"Ano"}}),I=new h({props:{id:"vl_original",title:"Valor Original",fmt:"num1b"}}),F=new h({props:{id:"vl_atual",title:"Valor Atual",fmt:"num1b"}}),B=new h({props:{id:"vl_aditado",title:"Aditivo",fmt:"num1b"}}),Q=new h({props:{id:"situacao",title:"Situação"}}),{c(){E(o.$$.fragment),s=p(),E(e.$$.fragment),l=p(),E(u.$$.fragment),a=p(),E(f.$$.fragment),b=p(),E(r.$$.fragment),R=p(),E(I.$$.fragment),V=p(),E(F.$$.fragment),j=p(),E(B.$$.fragment),z=p(),E(Q.$$.fragment)},l(n){T(o.$$.fragment,n),s=d(n),T(e.$$.fragment,n),l=d(n),T(u.$$.fragment,n),a=d(n),T(f.$$.fragment,n),b=d(n),T(r.$$.fragment,n),R=d(n),T(I.$$.fragment,n),V=d(n),T(F.$$.fragment,n),j=d(n),T(B.$$.fragment,n),z=d(n),T(Q.$$.fragment,n)},m(n,w){y(o,n,w),m(n,s,w),y(e,n,w),m(n,l,w),y(u,n,w),m(n,a,w),y(f,n,w),m(n,b,w),y(r,n,w),m(n,R,w),y(I,n,w),m(n,V,w),y(F,n,w),m(n,j,w),y(B,n,w),m(n,z,w),y(Q,n,w),O=!0},p:at,i(n){O||($(o.$$.fragment,n),$(e.$$.fragment,n),$(u.$$.fragment,n),$(f.$$.fragment,n),$(r.$$.fragment,n),$(I.$$.fragment,n),$(F.$$.fragment,n),$(B.$$.fragment,n),$(Q.$$.fragment,n),O=!0)},o(n){g(o.$$.fragment,n),g(e.$$.fragment,n),g(u.$$.fragment,n),g(f.$$.fragment,n),g(r.$$.fragment,n),g(I.$$.fragment,n),g(F.$$.fragment,n),g(B.$$.fragment,n),g(Q.$$.fragment,n),O=!1},d(n){n&&(_(s),_(l),_(a),_(b),_(R),_(V),_(j),_(z)),q(o,n),q(e,n),q(u,n),q(f,n),q(r,n),q(I,n),q(F,n),q(B,n),q(Q,n)}}}function Ce(c){let o,s,e,l,u,a,f='<p class="markdown">Esta página reúne os contratos cujo objeto não se enquadra nas categorias identificadas por palavras-chave. São contratos com descrições muito específicas, técnicas ou atípicas — que representam a diversidade e complexidade das contratações públicas estaduais.</p>',b,r,R='<strong class="markdown">Metodologia:</strong> A classificação por ramo é baseada em palavras-chave do campo objeto do contrato. Contratos com descrições que não correspondem a nenhuma categoria são agrupados aqui como &quot;Outros&quot;.',I,V,F,j,B='<a href="#panorama">Panorama</a>',z,Q,O,n,w,rt,G,st,U,K,P,it,Z,nt,N,Y='<a href="#quais-órgãos-mais-contratam-nesta-categoria">Quais órgãos mais contratam nesta categoria?</a>',J,W,X,lt,C,dt,x,Vt='<a href="#principais-fornecedores">Principais fornecedores</a>',kt,pt,ut,qt,gt,yt,tt,Qt='<a href="#contratos-top-100-por-valor">Contratos (Top 100 por Valor)</a>',Tt,$t,_t,Et,vt,Rt,mt,Nt='<p class="markdown">💡 Volte para os <a href="/Analytics-Engineer/compras-publicas/ramos" class="markdown">Ramos de Atividade</a>, <a href="/Analytics-Engineer/compras-publicas/fornecedores-ramo" class="markdown">Fornecedores por Ramo</a> ou para a <a href="/Analytics-Engineer/compras-publicas" class="markdown">Visão Geral</a>.</p>',Ct,et=typeof k<"u"&&k.title&&k.hide_title!==!0&&ve();function xt(t,i){return typeof k<"u"&&k.title?we:be}let bt=xt()(c),ot=typeof k=="object"&&ke(),A=c[0]&&Yt(c);O=new wt({props:{data:c[0],value:"qt_contratos",title:"Contratos",fmt:"num1k"}}),w=new wt({props:{data:c[0],value:"qt_fornecedores",title:"Fornecedores",fmt:"num1k"}}),G=new wt({props:{data:c[0],value:"qt_orgaos",title:"Órgãos",fmt:"num0"}}),U=new wt({props:{data:c[0],value:"vl_total_atual",title:"Valor Total",fmt:"num1b"}}),P=new wt({props:{data:c[0],value:"vl_total_aditado",title:"Total em Aditivos",fmt:"num1b"}});let L=c[1]&&Jt(c);X=new It({props:{data:c[1],title:"Top 15 Órgãos por Valor Total",index:"false",$$slots:{default:[Te]},$$scope:{ctx:c}}});let S=c[2]&&Wt(c);ut=new It({props:{data:c[2],title:"Top 20 Fornecedores por Valor Total",index:"false",$$slots:{default:[Ee]},$$scope:{ctx:c}}});let D=c[3]&&Zt(c);return _t=new It({props:{data:c[3],title:"Top 100 Contratos Não Classificados por Valor",index:"false",$$slots:{default:[Re]},$$scope:{ctx:c}}}),{c(){et&&et.c(),o=p(),bt.c(),s=M("meta"),e=M("meta"),ot&&ot.c(),l=jt(),u=p(),a=M("blockquote"),a.innerHTML=f,b=p(),r=M("p"),r.innerHTML=R,I=p(),V=M("hr"),F=p(),j=M("h2"),j.innerHTML=B,z=p(),A&&A.c(),Q=p(),E(O.$$.fragment),n=p(),E(w.$$.fragment),rt=p(),E(G.$$.fragment),st=p(),E(U.$$.fragment),K=p(),E(P.$$.fragment),it=p(),Z=M("hr"),nt=p(),N=M("h2"),N.innerHTML=Y,J=p(),L&&L.c(),W=p(),E(X.$$.fragment),lt=p(),C=M("hr"),dt=p(),x=M("h2"),x.innerHTML=Vt,kt=p(),S&&S.c(),pt=p(),E(ut.$$.fragment),qt=p(),gt=M("hr"),yt=p(),tt=M("h2"),tt.innerHTML=Qt,Tt=p(),D&&D.c(),$t=p(),E(_t.$$.fragment),Et=p(),vt=M("hr"),Rt=p(),mt=M("blockquote"),mt.innerHTML=Nt,this.h()},l(t){et&&et.l(t),o=d(t);const i=ee("svelte-2igo1p",document.head);bt.l(i),s=H(i,"META",{name:!0,content:!0}),e=H(i,"META",{name:!0,content:!0}),ot&&ot.l(i),l=jt(),i.forEach(_),u=d(t),a=H(t,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),ct(a)!=="svelte-1dg8tbs"&&(a.innerHTML=f),b=d(t),r=H(t,"P",{class:!0,"data-svelte-h":!0}),ct(r)!=="svelte-1226ohr"&&(r.innerHTML=R),I=d(t),V=H(t,"HR",{class:!0}),F=d(t),j=H(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ct(j)!=="svelte-hrphzl"&&(j.innerHTML=B),z=d(t),A&&A.l(t),Q=d(t),T(O.$$.fragment,t),n=d(t),T(w.$$.fragment,t),rt=d(t),T(G.$$.fragment,t),st=d(t),T(U.$$.fragment,t),K=d(t),T(P.$$.fragment,t),it=d(t),Z=H(t,"HR",{class:!0}),nt=d(t),N=H(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ct(N)!=="svelte-1wgf7ts"&&(N.innerHTML=Y),J=d(t),L&&L.l(t),W=d(t),T(X.$$.fragment,t),lt=d(t),C=H(t,"HR",{class:!0}),dt=d(t),x=H(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ct(x)!=="svelte-1yq6c9h"&&(x.innerHTML=Vt),kt=d(t),S&&S.l(t),pt=d(t),T(ut.$$.fragment,t),qt=d(t),gt=H(t,"HR",{class:!0}),yt=d(t),tt=H(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ct(tt)!=="svelte-pd7l2v"&&(tt.innerHTML=Qt),Tt=d(t),D&&D.l(t),$t=d(t),T(_t.$$.fragment,t),Et=d(t),vt=H(t,"HR",{class:!0}),Rt=d(t),mt=H(t,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),ct(mt)!=="svelte-yfguzz"&&(mt.innerHTML=Nt),this.h()},h(){v(s,"name","twitter:card"),v(s,"content","summary_large_image"),v(e,"name","twitter:site"),v(e,"content","@evidence_dev"),v(a,"class","markdown"),v(r,"class","markdown"),v(V,"class","markdown"),v(j,"class","markdown"),v(j,"id","panorama"),v(Z,"class","markdown"),v(N,"class","markdown"),v(N,"id","quais-órgãos-mais-contratam-nesta-categoria"),v(C,"class","markdown"),v(x,"class","markdown"),v(x,"id","principais-fornecedores"),v(gt,"class","markdown"),v(tt,"class","markdown"),v(tt,"id","contratos-top-100-por-valor"),v(vt,"class","markdown"),v(mt,"class","markdown")},m(t,i){et&&et.m(t,i),m(t,o,i),bt.m(document.head,null),Ft(document.head,s),Ft(document.head,e),ot&&ot.m(document.head,null),Ft(document.head,l),m(t,u,i),m(t,a,i),m(t,b,i),m(t,r,i),m(t,I,i),m(t,V,i),m(t,F,i),m(t,j,i),m(t,z,i),A&&A.m(t,i),m(t,Q,i),y(O,t,i),m(t,n,i),y(w,t,i),m(t,rt,i),y(G,t,i),m(t,st,i),y(U,t,i),m(t,K,i),y(P,t,i),m(t,it,i),m(t,Z,i),m(t,nt,i),m(t,N,i),m(t,J,i),L&&L.m(t,i),m(t,W,i),y(X,t,i),m(t,lt,i),m(t,C,i),m(t,dt,i),m(t,x,i),m(t,kt,i),S&&S.m(t,i),m(t,pt,i),y(ut,t,i),m(t,qt,i),m(t,gt,i),m(t,yt,i),m(t,tt,i),m(t,Tt,i),D&&D.m(t,i),m(t,$t,i),y(_t,t,i),m(t,Et,i),m(t,vt,i),m(t,Rt,i),m(t,mt,i),Ct=!0},p(t,i){typeof k<"u"&&k.title&&k.hide_title!==!0&&et.p(t,i),bt.p(t,i),typeof k=="object"&&ot.p(t,i),t[0]?A?(A.p(t,i),i[0]&1&&$(A,1)):(A=Yt(t),A.c(),$(A,1),A.m(Q.parentNode,Q)):A&&(Mt(),g(A,1,1,()=>{A=null}),Ht());const ht={};i[0]&1&&(ht.data=t[0]),O.$set(ht);const Ut={};i[0]&1&&(Ut.data=t[0]),w.$set(Ut);const Bt={};i[0]&1&&(Bt.data=t[0]),G.$set(Bt);const Pt={};i[0]&1&&(Pt.data=t[0]),U.$set(Pt);const zt={};i[0]&1&&(zt.data=t[0]),P.$set(zt),t[1]?L?(L.p(t,i),i[0]&2&&$(L,1)):(L=Jt(t),L.c(),$(L,1),L.m(W.parentNode,W)):L&&(Mt(),g(L,1,1,()=>{L=null}),Ht());const Lt={};i[0]&2&&(Lt.data=t[1]),i[1]&32&&(Lt.$$scope={dirty:i,ctx:t}),X.$set(Lt),t[2]?S?(S.p(t,i),i[0]&4&&$(S,1)):(S=Wt(t),S.c(),$(S,1),S.m(pt.parentNode,pt)):S&&(Mt(),g(S,1,1,()=>{S=null}),Ht());const St={};i[0]&4&&(St.data=t[2]),i[1]&32&&(St.$$scope={dirty:i,ctx:t}),ut.$set(St),t[3]?D?(D.p(t,i),i[0]&8&&$(D,1)):(D=Zt(t),D.c(),$(D,1),D.m($t.parentNode,$t)):D&&(Mt(),g(D,1,1,()=>{D=null}),Ht());const Dt={};i[0]&8&&(Dt.data=t[3]),i[1]&32&&(Dt.$$scope={dirty:i,ctx:t}),_t.$set(Dt)},i(t){Ct||($(A),$(O.$$.fragment,t),$(w.$$.fragment,t),$(G.$$.fragment,t),$(U.$$.fragment,t),$(P.$$.fragment,t),$(L),$(X.$$.fragment,t),$(S),$(ut.$$.fragment,t),$(D),$(_t.$$.fragment,t),Ct=!0)},o(t){g(A),g(O.$$.fragment,t),g(w.$$.fragment,t),g(G.$$.fragment,t),g(U.$$.fragment,t),g(P.$$.fragment,t),g(L),g(X.$$.fragment,t),g(S),g(ut.$$.fragment,t),g(D),g(_t.$$.fragment,t),Ct=!1},d(t){t&&(_(o),_(u),_(a),_(b),_(r),_(I),_(V),_(F),_(j),_(z),_(Q),_(n),_(rt),_(st),_(K),_(it),_(Z),_(nt),_(N),_(J),_(W),_(lt),_(C),_(dt),_(x),_(kt),_(pt),_(qt),_(gt),_(yt),_(tt),_(Tt),_($t),_(Et),_(vt),_(Rt),_(mt)),et&&et.d(t),bt.d(t),_(s),_(e),ot&&ot.d(t),_(l),A&&A.d(t),q(O,t),q(w,t),q(G,t),q(U,t),q(P,t),L&&L.d(t),q(X,t),S&&S.d(t),q(ut,t),D&&D.d(t),q(_t,t)}}}const k={title:"Contratos Não Classificados"};function He(c,o,s){let e,l;Gt(c,ge,C=>s(22,e=C)),Gt(c,Xt,C=>s(28,l=C));let{data:u}=o,{data:a={},customFormattingSettings:f,__db:b,inputs:r}=u;oe(Xt,l="28362723574771a62c81d5fddd5694bf",l);let R=me(pe(r));ae(R.subscribe(C=>r=C)),re(de,{getCustomFormats:()=>f.customFormats||[]});const I=(C,dt)=>$e(b.query,C,{query_name:dt});fe(I),e.params,se(()=>!0);let V={initialData:void 0,initialError:void 0},F=ft`select
    count(*)                            as qt_contratos,
    count(distinct id_contratado)       as qt_fornecedores,
    count(distinct cod_unidade_gestora) as qt_orgaos,
    sum(vl_original)                    as vl_total_original,
    sum(vl_atual)                       as vl_total_atual,
    sum(vl_aditado)                     as vl_total_aditado
from compras.fct_contratos_ramo
where ramo_atividade = 'Outros'`,j=`select
    count(*)                            as qt_contratos,
    count(distinct id_contratado)       as qt_fornecedores,
    count(distinct cod_unidade_gestora) as qt_orgaos,
    sum(vl_original)                    as vl_total_original,
    sum(vl_atual)                       as vl_total_atual,
    sum(vl_aditado)                     as vl_total_aditado
from compras.fct_contratos_ramo
where ramo_atividade = 'Outros'`;a.kpis_outros_data&&(a.kpis_outros_data instanceof Error?V.initialError=a.kpis_outros_data:V.initialData=a.kpis_outros_data,a.kpis_outros_columns&&(V.knownColumns=a.kpis_outros_columns));let B,z=!1;const Q=Ot.createReactive({callback:C=>{s(0,B=C)},execFn:I},{id:"kpis_outros",...V});Q(j,{noResolve:F,...V}),globalThis[Symbol.for("kpis_outros")]={get value(){return B}};let O={initialData:void 0,initialError:void 0},n=ft`select
    nm_unidade_gestora                  as orgao,
    count(*)                            as qt_contratos,
    count(distinct id_contratado)       as qt_fornecedores,
    sum(vl_atual)                       as vl_total
from compras.fct_contratos_ramo
where ramo_atividade = 'Outros'
group by 1
order by vl_total desc
limit 15`,w=`select
    nm_unidade_gestora                  as orgao,
    count(*)                            as qt_contratos,
    count(distinct id_contratado)       as qt_fornecedores,
    sum(vl_atual)                       as vl_total
from compras.fct_contratos_ramo
where ramo_atividade = 'Outros'
group by 1
order by vl_total desc
limit 15`;a.orgaos_outros_data&&(a.orgaos_outros_data instanceof Error?O.initialError=a.orgaos_outros_data:O.initialData=a.orgaos_outros_data,a.orgaos_outros_columns&&(O.knownColumns=a.orgaos_outros_columns));let rt,G=!1;const st=Ot.createReactive({callback:C=>{s(1,rt=C)},execFn:I},{id:"orgaos_outros",...O});st(w,{noResolve:n,...O}),globalThis[Symbol.for("orgaos_outros")]={get value(){return rt}};let U={initialData:void 0,initialError:void 0},K=ft`select
    nm_contratado                       as fornecedor,
    id_contratado                       as cnpj,
    count(*)                            as qt_contratos,
    count(distinct cod_unidade_gestora) as qt_orgaos,
    sum(vl_atual)                       as vl_total
from compras.fct_contratos_ramo
where ramo_atividade = 'Outros'
group by 1, 2
order by vl_total desc
limit 20`,P=`select
    nm_contratado                       as fornecedor,
    id_contratado                       as cnpj,
    count(*)                            as qt_contratos,
    count(distinct cod_unidade_gestora) as qt_orgaos,
    sum(vl_atual)                       as vl_total
from compras.fct_contratos_ramo
where ramo_atividade = 'Outros'
group by 1, 2
order by vl_total desc
limit 20`;a.fornecedores_outros_data&&(a.fornecedores_outros_data instanceof Error?U.initialError=a.fornecedores_outros_data:U.initialData=a.fornecedores_outros_data,a.fornecedores_outros_columns&&(U.knownColumns=a.fornecedores_outros_columns));let it,Z=!1;const nt=Ot.createReactive({callback:C=>{s(2,it=C)},execFn:I},{id:"fornecedores_outros",...U});nt(P,{noResolve:K,...U}),globalThis[Symbol.for("fornecedores_outros")]={get value(){return it}};let N={initialData:void 0,initialError:void 0},Y=ft`select
    nu_contrato,
    nm_contratado                       as fornecedor,
    nm_unidade_gestora                  as orgao,
    ds_objeto                           as objeto,
    ano_assinatura::integer             as ano,
    vl_original,
    vl_atual,
    vl_aditado,
    ds_situacao                         as situacao
from compras.fct_contratos_ramo
where ramo_atividade = 'Outros'
order by vl_atual desc
limit 100`,J=`select
    nu_contrato,
    nm_contratado                       as fornecedor,
    nm_unidade_gestora                  as orgao,
    ds_objeto                           as objeto,
    ano_assinatura::integer             as ano,
    vl_original,
    vl_atual,
    vl_aditado,
    ds_situacao                         as situacao
from compras.fct_contratos_ramo
where ramo_atividade = 'Outros'
order by vl_atual desc
limit 100`;a.contratos_outros_data&&(a.contratos_outros_data instanceof Error?N.initialError=a.contratos_outros_data:N.initialData=a.contratos_outros_data,a.contratos_outros_columns&&(N.knownColumns=a.contratos_outros_columns));let W,X=!1;const lt=Ot.createReactive({callback:C=>{s(3,W=C)},execFn:I},{id:"contratos_outros",...N});return lt(J,{noResolve:Y,...N}),globalThis[Symbol.for("contratos_outros")]={get value(){return W}},c.$$set=C=>{"data"in C&&s(4,u=C.data)},c.$$.update=()=>{c.$$.dirty[0]&16&&s(5,{data:a={},customFormattingSettings:f,__db:b}=u,a),c.$$.dirty[0]&32&&ce.set(Object.keys(a).length>0),c.$$.dirty[0]&4194304&&e.params,c.$$.dirty[0]&960&&(F||!z?F||(Q(j,{noResolve:F,...V}),s(9,z=!0)):Q(j,{noResolve:F})),c.$$.dirty[0]&15360&&(n||!G?n||(st(w,{noResolve:n,...O}),s(13,G=!0)):st(w,{noResolve:n})),c.$$.dirty[0]&245760&&(K||!Z?K||(nt(P,{noResolve:K,...U}),s(17,Z=!0)):nt(P,{noResolve:K})),c.$$.dirty[0]&3932160&&(Y||!X?Y||(lt(J,{noResolve:Y,...N}),s(21,X=!0)):lt(J,{noResolve:Y}))},s(7,F=ft`select
    count(*)                            as qt_contratos,
    count(distinct id_contratado)       as qt_fornecedores,
    count(distinct cod_unidade_gestora) as qt_orgaos,
    sum(vl_original)                    as vl_total_original,
    sum(vl_atual)                       as vl_total_atual,
    sum(vl_aditado)                     as vl_total_aditado
from compras.fct_contratos_ramo
where ramo_atividade = 'Outros'`),s(8,j=`select
    count(*)                            as qt_contratos,
    count(distinct id_contratado)       as qt_fornecedores,
    count(distinct cod_unidade_gestora) as qt_orgaos,
    sum(vl_original)                    as vl_total_original,
    sum(vl_atual)                       as vl_total_atual,
    sum(vl_aditado)                     as vl_total_aditado
from compras.fct_contratos_ramo
where ramo_atividade = 'Outros'`),s(11,n=ft`select
    nm_unidade_gestora                  as orgao,
    count(*)                            as qt_contratos,
    count(distinct id_contratado)       as qt_fornecedores,
    sum(vl_atual)                       as vl_total
from compras.fct_contratos_ramo
where ramo_atividade = 'Outros'
group by 1
order by vl_total desc
limit 15`),s(12,w=`select
    nm_unidade_gestora                  as orgao,
    count(*)                            as qt_contratos,
    count(distinct id_contratado)       as qt_fornecedores,
    sum(vl_atual)                       as vl_total
from compras.fct_contratos_ramo
where ramo_atividade = 'Outros'
group by 1
order by vl_total desc
limit 15`),s(15,K=ft`select
    nm_contratado                       as fornecedor,
    id_contratado                       as cnpj,
    count(*)                            as qt_contratos,
    count(distinct cod_unidade_gestora) as qt_orgaos,
    sum(vl_atual)                       as vl_total
from compras.fct_contratos_ramo
where ramo_atividade = 'Outros'
group by 1, 2
order by vl_total desc
limit 20`),s(16,P=`select
    nm_contratado                       as fornecedor,
    id_contratado                       as cnpj,
    count(*)                            as qt_contratos,
    count(distinct cod_unidade_gestora) as qt_orgaos,
    sum(vl_atual)                       as vl_total
from compras.fct_contratos_ramo
where ramo_atividade = 'Outros'
group by 1, 2
order by vl_total desc
limit 20`),s(19,Y=ft`select
    nu_contrato,
    nm_contratado                       as fornecedor,
    nm_unidade_gestora                  as orgao,
    ds_objeto                           as objeto,
    ano_assinatura::integer             as ano,
    vl_original,
    vl_atual,
    vl_aditado,
    ds_situacao                         as situacao
from compras.fct_contratos_ramo
where ramo_atividade = 'Outros'
order by vl_atual desc
limit 100`),s(20,J=`select
    nu_contrato,
    nm_contratado                       as fornecedor,
    nm_unidade_gestora                  as orgao,
    ds_objeto                           as objeto,
    ano_assinatura::integer             as ano,
    vl_original,
    vl_atual,
    vl_aditado,
    ds_situacao                         as situacao
from compras.fct_contratos_ramo
where ramo_atividade = 'Outros'
order by vl_atual desc
limit 100`),[B,rt,it,W,u,a,V,F,j,z,O,n,w,G,U,K,P,Z,N,Y,J,X,e]}class Ve extends ue{constructor(o){super(),_e(this,o,He,Ce,te,{data:4},null,[-1,-1])}}export{Ve as component};
