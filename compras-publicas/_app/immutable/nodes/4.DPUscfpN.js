import{s as qe,d as _,i as u,a as Kt,b as g,c as d,h as Re,e as C,f as Jt,g as Ct,j as p,k as H,l as ce,m as Ce,o as He,n as Ee,p as Me,q as ct,r as Fe,t as Se,u as Ae}from"../chunks/scheduler.q7auac3b.js";import{S as De,i as Ie,d as w,t as $,a as v,c as Dt,m as y,b as T,e as q,g as It}from"../chunks/index.B_vRVscZ.js";import{D as te,e as Le,s as he,Q as Lt,p as Ve,C as et,a as de,r as pe,b as Pe}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BdKGjBcs.js";import{w as Qe}from"../chunks/entry.D_3g4xoz.js";import{h as tt,p as Ne}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Ue}from"../chunks/stores.D9WP5eWk.js";import{B as ve,Q as Vt}from"../chunks/BarChart.wW3IZlSb.js";import{B as ht}from"../chunks/BigValue.3NODOlWv.js";import{L as Be}from"../chunks/LineChart.BPFmihZ1.js";function je(m){let a,r=k.title+"",e;return{c(){a=H("h1"),e=Ae(r),this.h()},l(s){a=C(s,"H1",{class:!0});var n=Fe(a);e=Se(n,r),n.forEach(_),this.h()},h(){g(a,"class","title")},m(s,n){u(s,a,n),Kt(a,e)},p:ct,d(s){s&&_(a)}}}function Oe(m){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:ct,p:ct,d:ct}}function Ge(m){let a,r,e,s,n;return document.title=a=k.title,{c(){r=p(),e=H("meta"),s=p(),n=H("meta"),this.h()},l(l){r=d(l),e=C(l,"META",{property:!0,content:!0}),s=d(l),n=C(l,"META",{name:!0,content:!0}),this.h()},h(){var l,i;g(e,"property","og:title"),g(e,"content",((l=k.og)==null?void 0:l.title)??k.title),g(n,"name","twitter:title"),g(n,"content",((i=k.og)==null?void 0:i.title)??k.title)},m(l,i){u(l,r,i),u(l,e,i),u(l,s,i),u(l,n,i)},p(l,i){i&0&&a!==(a=k.title)&&(document.title=a)},d(l){l&&(_(r),_(e),_(s),_(n))}}}function Xe(m){var n,l;let a,r,e=(k.description||((n=k.og)==null?void 0:n.description))&&Ye(),s=((l=k.og)==null?void 0:l.image)&&ze();return{c(){e&&e.c(),a=p(),s&&s.c(),r=Jt()},l(i){e&&e.l(i),a=d(i),s&&s.l(i),r=Jt()},m(i,b){e&&e.m(i,b),u(i,a,b),s&&s.m(i,b),u(i,r,b)},p(i,b){var f,M;(k.description||(f=k.og)!=null&&f.description)&&e.p(i,b),(M=k.og)!=null&&M.image&&s.p(i,b)},d(i){i&&(_(a),_(r)),e&&e.d(i),s&&s.d(i)}}}function Ye(m){let a,r,e,s,n;return{c(){a=H("meta"),r=p(),e=H("meta"),s=p(),n=H("meta"),this.h()},l(l){a=C(l,"META",{name:!0,content:!0}),r=d(l),e=C(l,"META",{property:!0,content:!0}),s=d(l),n=C(l,"META",{name:!0,content:!0}),this.h()},h(){var l,i,b;g(a,"name","description"),g(a,"content",k.description??((l=k.og)==null?void 0:l.description)),g(e,"property","og:description"),g(e,"content",((i=k.og)==null?void 0:i.description)??k.description),g(n,"name","twitter:description"),g(n,"content",((b=k.og)==null?void 0:b.description)??k.description)},m(l,i){u(l,a,i),u(l,r,i),u(l,e,i),u(l,s,i),u(l,n,i)},p:ct,d(l){l&&(_(a),_(r),_(e),_(s),_(n))}}}function ze(m){let a,r,e;return{c(){a=H("meta"),r=p(),e=H("meta"),this.h()},l(s){a=C(s,"META",{property:!0,content:!0}),r=d(s),e=C(s,"META",{name:!0,content:!0}),this.h()},h(){var s,n;g(a,"property","og:image"),g(a,"content",de((s=k.og)==null?void 0:s.image)),g(e,"name","twitter:image"),g(e,"content",de((n=k.og)==null?void 0:n.image))},m(s,n){u(s,a,n),u(s,r,n),u(s,e,n)},p:ct,d(s){s&&(_(a),_(r),_(e))}}}function $e(m){let a,r;return a=new Vt({props:{queryID:"kpis",queryResult:m[0]}}),{c(){q(a.$$.fragment)},l(e){T(a.$$.fragment,e)},m(e,s){y(a,e,s),r=!0},p(e,s){const n={};s[0]&1&&(n.queryResult=e[0]),a.$set(n)},i(e){r||(v(a.$$.fragment,e),r=!0)},o(e){$(a.$$.fragment,e),r=!1},d(e){w(a,e)}}}function ge(m){let a,r;return a=new Vt({props:{queryID:"evolucao_anual",queryResult:m[1]}}),{c(){q(a.$$.fragment)},l(e){T(a.$$.fragment,e)},m(e,s){y(a,e,s),r=!0},p(e,s){const n={};s[0]&2&&(n.queryResult=e[1]),a.$set(n)},i(e){r||(v(a.$$.fragment,e),r=!0)},o(e){$(a.$$.fragment,e),r=!1},d(e){w(a,e)}}}function be(m){let a,r;return a=new Vt({props:{queryID:"situacao_aditivo",queryResult:m[2]}}),{c(){q(a.$$.fragment)},l(e){T(a.$$.fragment,e)},m(e,s){y(a,e,s),r=!0},p(e,s){const n={};s[0]&4&&(n.queryResult=e[2]),a.$set(n)},i(e){r||(v(a.$$.fragment,e),r=!0)},o(e){$(a.$$.fragment,e),r=!1},d(e){w(a,e)}}}function Ke(m){let a,r,e,s,n,l;return a=new et({props:{id:"situacao",title:"Situação"}}),e=new et({props:{id:"qt_contratos",title:"Qtd. Contratos",fmt:"num0"}}),n=new et({props:{id:"vl_total",title:"Valor Total",fmt:"num1b"}}),{c(){q(a.$$.fragment),r=p(),q(e.$$.fragment),s=p(),q(n.$$.fragment)},l(i){T(a.$$.fragment,i),r=d(i),T(e.$$.fragment,i),s=d(i),T(n.$$.fragment,i)},m(i,b){y(a,i,b),u(i,r,b),y(e,i,b),u(i,s,b),y(n,i,b),l=!0},p:ct,i(i){l||(v(a.$$.fragment,i),v(e.$$.fragment,i),v(n.$$.fragment,i),l=!0)},o(i){$(a.$$.fragment,i),$(e.$$.fragment,i),$(n.$$.fragment,i),l=!1},d(i){i&&(_(r),_(s)),w(a,i),w(e,i),w(n,i)}}}function ke(m){let a,r;return a=new Vt({props:{queryID:"top_modalidades",queryResult:m[3]}}),{c(){q(a.$$.fragment)},l(e){T(a.$$.fragment,e)},m(e,s){y(a,e,s),r=!0},p(e,s){const n={};s[0]&8&&(n.queryResult=e[3]),a.$set(n)},i(e){r||(v(a.$$.fragment,e),r=!0)},o(e){$(a.$$.fragment,e),r=!1},d(e){w(a,e)}}}function we(m){let a,r;return a=new Vt({props:{queryID:"top_orgaos",queryResult:m[4]}}),{c(){q(a.$$.fragment)},l(e){T(a.$$.fragment,e)},m(e,s){y(a,e,s),r=!0},p(e,s){const n={};s[0]&16&&(n.queryResult=e[4]),a.$set(n)},i(e){r||(v(a.$$.fragment,e),r=!0)},o(e){$(a.$$.fragment,e),r=!1},d(e){w(a,e)}}}function Je(m){let a,r,e,s,n,l,i,b;return a=new et({props:{id:"ranking",title:"#"}}),e=new et({props:{id:"orgao",title:"Órgão"}}),n=new et({props:{id:"qt_contratos",title:"Contratos",fmt:"num0"}}),i=new et({props:{id:"vl_total",title:"Valor Total",fmt:"num1b"}}),{c(){q(a.$$.fragment),r=p(),q(e.$$.fragment),s=p(),q(n.$$.fragment),l=p(),q(i.$$.fragment)},l(f){T(a.$$.fragment,f),r=d(f),T(e.$$.fragment,f),s=d(f),T(n.$$.fragment,f),l=d(f),T(i.$$.fragment,f)},m(f,M){y(a,f,M),u(f,r,M),y(e,f,M),u(f,s,M),y(n,f,M),u(f,l,M),y(i,f,M),b=!0},p:ct,i(f){b||(v(a.$$.fragment,f),v(e.$$.fragment,f),v(n.$$.fragment,f),v(i.$$.fragment,f),b=!0)},o(f){$(a.$$.fragment,f),$(e.$$.fragment,f),$(n.$$.fragment,f),$(i.$$.fragment,f),b=!1},d(f){f&&(_(r),_(s),_(l)),w(a,f),w(e,f),w(n,f),w(i,f)}}}function ye(m){let a,r;return a=new Vt({props:{queryID:"top_fornecedores",queryResult:m[5]}}),{c(){q(a.$$.fragment)},l(e){T(a.$$.fragment,e)},m(e,s){y(a,e,s),r=!0},p(e,s){const n={};s[0]&32&&(n.queryResult=e[5]),a.$set(n)},i(e){r||(v(a.$$.fragment,e),r=!0)},o(e){$(a.$$.fragment,e),r=!1},d(e){w(a,e)}}}function We(m){let a,r,e,s,n,l,i,b,f,M;return a=new et({props:{id:"ranking",title:"#"}}),e=new et({props:{id:"fornecedor",title:"Fornecedor"}}),n=new et({props:{id:"porte",title:"Porte"}}),i=new et({props:{id:"qt_contratos",title:"Contratos",fmt:"num0"}}),f=new et({props:{id:"vl_total",title:"Valor Total",fmt:"num1b"}}),{c(){q(a.$$.fragment),r=p(),q(e.$$.fragment),s=p(),q(n.$$.fragment),l=p(),q(i.$$.fragment),b=p(),q(f.$$.fragment)},l(c){T(a.$$.fragment,c),r=d(c),T(e.$$.fragment,c),s=d(c),T(n.$$.fragment,c),l=d(c),T(i.$$.fragment,c),b=d(c),T(f.$$.fragment,c)},m(c,E){y(a,c,E),u(c,r,E),y(e,c,E),u(c,s,E),y(n,c,E),u(c,l,E),y(i,c,E),u(c,b,E),y(f,c,E),M=!0},p:ct,i(c){M||(v(a.$$.fragment,c),v(e.$$.fragment,c),v(n.$$.fragment,c),v(i.$$.fragment,c),v(f.$$.fragment,c),M=!0)},o(c){$(a.$$.fragment,c),$(e.$$.fragment,c),$(n.$$.fragment,c),$(i.$$.fragment,c),$(f.$$.fragment,c),M=!1},d(c){c&&(_(r),_(s),_(l),_(b)),w(a,c),w(e,c),w(n,c),w(i,c),w(f,c)}}}function Ze(m){let a,r,e,s,n,l,i='<a href="#compras-públicas-de-santa-catarina">Compras Públicas de Santa Catarina</a>',b,f,M=`Pipeline de dados analíticos sobre contratos públicos do estado de Santa Catarina.
<strong class="markdown">Fonte:</strong> <a href="https://www.transparencia.sc.gov.br/" rel="nofollow" class="markdown">Portal Transparência SC</a> | <strong class="markdown">Período:</strong> 2016 a 2026`,c,E,X,N,Ht='<a href="#visão-geral">Visão Geral</a>',dt,at,V,Y,B,pt,z,vt,P,K,j,$t,J,gt,G,W,U,Et='<a href="#evolução-anual-de-contratos">Evolução Anual de Contratos</a>',bt,ot,Q,Z,O,kt,it,wt,h,rt='<a href="#distribuição-por-situação-de-aditivo">Distribuição por Situação de Aditivo</a>',lt,st,x,yt,R,Mt,nt,ee='<a href="#top-10-modalidades">Top 10 Modalidades</a>',Ut,Ft,Tt,Bt,Pt,jt,_t,ae='<a href="#top-10-órgãos-por-valor">Top 10 Órgãos por Valor</a>',Ot,St,qt,Gt,Qt,Xt,ut,oe='<a href="#top-10-fornecedores-por-valor">Top 10 Fornecedores por Valor</a>',Yt,At,Rt,zt,mt=typeof k<"u"&&k.title&&k.hide_title!==!0&&je();function Te(t,o){return typeof k<"u"&&k.title?Ge:Oe}let Nt=Te()(m),ft=typeof k=="object"&&Xe(),F=m[0]&&$e(m);V=new ht({props:{data:m[0],value:"total_contratos",title:"Total de Contratos",fmt:"num1k"}}),B=new ht({props:{data:m[0],value:"total_fornecedores",title:"Fornecedores",fmt:"num1k"}}),z=new ht({props:{data:m[0],value:"total_orgaos",title:"Órgãos Públicos",fmt:"num0"}}),P=new ht({props:{data:m[0],value:"vl_total_atual",title:"Valor Total Contratado",fmt:"num1b"}}),j=new ht({props:{data:m[0],value:"vl_total_aditado",title:"Total em Aditivos",fmt:"num1b"}}),J=new ht({props:{data:m[0],value:"contratos_com_aditivo",title:"Contratos com Aditivo",fmt:"num1k"}});let S=m[1]&&ge(m);Q=new ve({props:{data:m[1],x:"ano",y:"qt_contratos",title:"Quantidade de Contratos por Ano",xAxisTitle:"Ano",yAxisTitle:"Quantidade",xType:"category"}}),O=new Be({props:{data:m[1],x:"ano",y:"vl_total_atual",title:"Valor Total Contratado por Ano (R$)",xAxisTitle:"Ano",yAxisTitle:"Valor (R$)",xType:"category"}});let A=m[2]&&be(m);x=new te({props:{data:m[2],title:"Contratos por Situação de Aditivo",$$slots:{default:[Ke]},$$scope:{ctx:m}}});let D=m[3]&&ke(m);Tt=new ve({props:{data:m[3],x:"modalidade",y:"qt_contratos",title:"Top 10 Modalidades por Quantidade de Contratos",swapXY:"true"}});let I=m[4]&&we(m);qt=new te({props:{data:m[4],title:"Top 10 Órgãos por Valor Total Contratado",$$slots:{default:[Je]},$$scope:{ctx:m}}});let L=m[5]&&ye(m);return Rt=new te({props:{data:m[5],title:"Top 10 Fornecedores por Valor Total Contratado",$$slots:{default:[We]},$$scope:{ctx:m}}}),{c(){mt&&mt.c(),a=p(),Nt.c(),r=H("meta"),e=H("meta"),ft&&ft.c(),s=Jt(),n=p(),l=H("h1"),l.innerHTML=i,b=p(),f=H("p"),f.innerHTML=M,c=p(),E=H("hr"),X=p(),N=H("h2"),N.innerHTML=Ht,dt=p(),F&&F.c(),at=p(),q(V.$$.fragment),Y=p(),q(B.$$.fragment),pt=p(),q(z.$$.fragment),vt=p(),q(P.$$.fragment),K=p(),q(j.$$.fragment),$t=p(),q(J.$$.fragment),gt=p(),G=H("hr"),W=p(),U=H("h2"),U.innerHTML=Et,bt=p(),S&&S.c(),ot=p(),q(Q.$$.fragment),Z=p(),q(O.$$.fragment),kt=p(),it=H("hr"),wt=p(),h=H("h2"),h.innerHTML=rt,lt=p(),A&&A.c(),st=p(),q(x.$$.fragment),yt=p(),R=H("hr"),Mt=p(),nt=H("h2"),nt.innerHTML=ee,Ut=p(),D&&D.c(),Ft=p(),q(Tt.$$.fragment),Bt=p(),Pt=H("hr"),jt=p(),_t=H("h2"),_t.innerHTML=ae,Ot=p(),I&&I.c(),St=p(),q(qt.$$.fragment),Gt=p(),Qt=H("hr"),Xt=p(),ut=H("h2"),ut.innerHTML=oe,Yt=p(),L&&L.c(),At=p(),q(Rt.$$.fragment),this.h()},l(t){mt&&mt.l(t),a=d(t);const o=Re("svelte-2igo1p",document.head);Nt.l(o),r=C(o,"META",{name:!0,content:!0}),e=C(o,"META",{name:!0,content:!0}),ft&&ft.l(o),s=Jt(),o.forEach(_),n=d(t),l=C(t,"H1",{class:!0,id:!0,"data-svelte-h":!0}),Ct(l)!=="svelte-7p5ilo"&&(l.innerHTML=i),b=d(t),f=C(t,"P",{class:!0,"data-svelte-h":!0}),Ct(f)!=="svelte-1ucldag"&&(f.innerHTML=M),c=d(t),E=C(t,"HR",{class:!0}),X=d(t),N=C(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ct(N)!=="svelte-1nrswfb"&&(N.innerHTML=Ht),dt=d(t),F&&F.l(t),at=d(t),T(V.$$.fragment,t),Y=d(t),T(B.$$.fragment,t),pt=d(t),T(z.$$.fragment,t),vt=d(t),T(P.$$.fragment,t),K=d(t),T(j.$$.fragment,t),$t=d(t),T(J.$$.fragment,t),gt=d(t),G=C(t,"HR",{class:!0}),W=d(t),U=C(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ct(U)!=="svelte-gn41x"&&(U.innerHTML=Et),bt=d(t),S&&S.l(t),ot=d(t),T(Q.$$.fragment,t),Z=d(t),T(O.$$.fragment,t),kt=d(t),it=C(t,"HR",{class:!0}),wt=d(t),h=C(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ct(h)!=="svelte-1r1dpvr"&&(h.innerHTML=rt),lt=d(t),A&&A.l(t),st=d(t),T(x.$$.fragment,t),yt=d(t),R=C(t,"HR",{class:!0}),Mt=d(t),nt=C(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ct(nt)!=="svelte-1gqz8mf"&&(nt.innerHTML=ee),Ut=d(t),D&&D.l(t),Ft=d(t),T(Tt.$$.fragment,t),Bt=d(t),Pt=C(t,"HR",{class:!0}),jt=d(t),_t=C(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ct(_t)!=="svelte-12715qy"&&(_t.innerHTML=ae),Ot=d(t),I&&I.l(t),St=d(t),T(qt.$$.fragment,t),Gt=d(t),Qt=C(t,"HR",{class:!0}),Xt=d(t),ut=C(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ct(ut)!=="svelte-ila0q8"&&(ut.innerHTML=oe),Yt=d(t),L&&L.l(t),At=d(t),T(Rt.$$.fragment,t),this.h()},h(){g(r,"name","twitter:card"),g(r,"content","summary_large_image"),g(e,"name","twitter:site"),g(e,"content","@evidence_dev"),g(l,"class","markdown"),g(l,"id","compras-públicas-de-santa-catarina"),g(f,"class","markdown"),g(E,"class","markdown"),g(N,"class","markdown"),g(N,"id","visão-geral"),g(G,"class","markdown"),g(U,"class","markdown"),g(U,"id","evolução-anual-de-contratos"),g(it,"class","markdown"),g(h,"class","markdown"),g(h,"id","distribuição-por-situação-de-aditivo"),g(R,"class","markdown"),g(nt,"class","markdown"),g(nt,"id","top-10-modalidades"),g(Pt,"class","markdown"),g(_t,"class","markdown"),g(_t,"id","top-10-órgãos-por-valor"),g(Qt,"class","markdown"),g(ut,"class","markdown"),g(ut,"id","top-10-fornecedores-por-valor")},m(t,o){mt&&mt.m(t,o),u(t,a,o),Nt.m(document.head,null),Kt(document.head,r),Kt(document.head,e),ft&&ft.m(document.head,null),Kt(document.head,s),u(t,n,o),u(t,l,o),u(t,b,o),u(t,f,o),u(t,c,o),u(t,E,o),u(t,X,o),u(t,N,o),u(t,dt,o),F&&F.m(t,o),u(t,at,o),y(V,t,o),u(t,Y,o),y(B,t,o),u(t,pt,o),y(z,t,o),u(t,vt,o),y(P,t,o),u(t,K,o),y(j,t,o),u(t,$t,o),y(J,t,o),u(t,gt,o),u(t,G,o),u(t,W,o),u(t,U,o),u(t,bt,o),S&&S.m(t,o),u(t,ot,o),y(Q,t,o),u(t,Z,o),y(O,t,o),u(t,kt,o),u(t,it,o),u(t,wt,o),u(t,h,o),u(t,lt,o),A&&A.m(t,o),u(t,st,o),y(x,t,o),u(t,yt,o),u(t,R,o),u(t,Mt,o),u(t,nt,o),u(t,Ut,o),D&&D.m(t,o),u(t,Ft,o),y(Tt,t,o),u(t,Bt,o),u(t,Pt,o),u(t,jt,o),u(t,_t,o),u(t,Ot,o),I&&I.m(t,o),u(t,St,o),y(qt,t,o),u(t,Gt,o),u(t,Qt,o),u(t,Xt,o),u(t,ut,o),u(t,Yt,o),L&&L.m(t,o),u(t,At,o),y(Rt,t,o),zt=!0},p(t,o){typeof k<"u"&&k.title&&k.hide_title!==!0&&mt.p(t,o),Nt.p(t,o),typeof k=="object"&&ft.p(t,o),t[0]?F?(F.p(t,o),o[0]&1&&v(F,1)):(F=$e(t),F.c(),v(F,1),F.m(at.parentNode,at)):F&&(It(),$(F,1,1,()=>{F=null}),Dt());const re={};o[0]&1&&(re.data=t[0]),V.$set(re);const le={};o[0]&1&&(le.data=t[0]),B.$set(le);const se={};o[0]&1&&(se.data=t[0]),z.$set(se);const ie={};o[0]&1&&(ie.data=t[0]),P.$set(ie);const ne={};o[0]&1&&(ne.data=t[0]),j.$set(ne);const _e={};o[0]&1&&(_e.data=t[0]),J.$set(_e),t[1]?S?(S.p(t,o),o[0]&2&&v(S,1)):(S=ge(t),S.c(),v(S,1),S.m(ot.parentNode,ot)):S&&(It(),$(S,1,1,()=>{S=null}),Dt());const ue={};o[0]&2&&(ue.data=t[1]),Q.$set(ue);const me={};o[0]&2&&(me.data=t[1]),O.$set(me),t[2]?A?(A.p(t,o),o[0]&4&&v(A,1)):(A=be(t),A.c(),v(A,1),A.m(st.parentNode,st)):A&&(It(),$(A,1,1,()=>{A=null}),Dt());const Wt={};o[0]&4&&(Wt.data=t[2]),o[1]&131072&&(Wt.$$scope={dirty:o,ctx:t}),x.$set(Wt),t[3]?D?(D.p(t,o),o[0]&8&&v(D,1)):(D=ke(t),D.c(),v(D,1),D.m(Ft.parentNode,Ft)):D&&(It(),$(D,1,1,()=>{D=null}),Dt());const fe={};o[0]&8&&(fe.data=t[3]),Tt.$set(fe),t[4]?I?(I.p(t,o),o[0]&16&&v(I,1)):(I=we(t),I.c(),v(I,1),I.m(St.parentNode,St)):I&&(It(),$(I,1,1,()=>{I=null}),Dt());const Zt={};o[0]&16&&(Zt.data=t[4]),o[1]&131072&&(Zt.$$scope={dirty:o,ctx:t}),qt.$set(Zt),t[5]?L?(L.p(t,o),o[0]&32&&v(L,1)):(L=ye(t),L.c(),v(L,1),L.m(At.parentNode,At)):L&&(It(),$(L,1,1,()=>{L=null}),Dt());const xt={};o[0]&32&&(xt.data=t[5]),o[1]&131072&&(xt.$$scope={dirty:o,ctx:t}),Rt.$set(xt)},i(t){zt||(v(F),v(V.$$.fragment,t),v(B.$$.fragment,t),v(z.$$.fragment,t),v(P.$$.fragment,t),v(j.$$.fragment,t),v(J.$$.fragment,t),v(S),v(Q.$$.fragment,t),v(O.$$.fragment,t),v(A),v(x.$$.fragment,t),v(D),v(Tt.$$.fragment,t),v(I),v(qt.$$.fragment,t),v(L),v(Rt.$$.fragment,t),zt=!0)},o(t){$(F),$(V.$$.fragment,t),$(B.$$.fragment,t),$(z.$$.fragment,t),$(P.$$.fragment,t),$(j.$$.fragment,t),$(J.$$.fragment,t),$(S),$(Q.$$.fragment,t),$(O.$$.fragment,t),$(A),$(x.$$.fragment,t),$(D),$(Tt.$$.fragment,t),$(I),$(qt.$$.fragment,t),$(L),$(Rt.$$.fragment,t),zt=!1},d(t){t&&(_(a),_(n),_(l),_(b),_(f),_(c),_(E),_(X),_(N),_(dt),_(at),_(Y),_(pt),_(vt),_(K),_($t),_(gt),_(G),_(W),_(U),_(bt),_(ot),_(Z),_(kt),_(it),_(wt),_(h),_(lt),_(st),_(yt),_(R),_(Mt),_(nt),_(Ut),_(Ft),_(Bt),_(Pt),_(jt),_(_t),_(Ot),_(St),_(Gt),_(Qt),_(Xt),_(ut),_(Yt),_(At)),mt&&mt.d(t),Nt.d(t),_(r),_(e),ft&&ft.d(t),_(s),F&&F.d(t),w(V,t),w(B,t),w(z,t),w(P,t),w(j,t),w(J,t),S&&S.d(t),w(Q,t),w(O,t),A&&A.d(t),w(x,t),D&&D.d(t),w(Tt,t),I&&I.d(t),w(qt,t),L&&L.d(t),w(Rt,t)}}}const k={title:"Compras Públicas SC"};function xe(m,a,r){let e,s;ce(m,Ue,R=>r(32,e=R)),ce(m,pe,R=>r(38,s=R));let{data:n}=a,{data:l={},customFormattingSettings:i,__db:b,inputs:f}=n;Ce(pe,s="6666cd76f96956469e7be39d750cc7d9",s);let M=Le(Qe(f));He(M.subscribe(R=>f=R)),Ee(Pe,{getCustomFormats:()=>i.customFormats||[]});const c=(R,Mt)=>Ne(b.query,R,{query_name:Mt});he(c),e.params,Me(()=>!0);let E={initialData:void 0,initialError:void 0},X=tt`select
    count(*)                                            as total_contratos,
    count(distinct id_contratado)                       as total_fornecedores,
    count(distinct cod_unidade_gestora)                 as total_orgaos,
    sum(vl_original)                                    as vl_total_original,
    sum(vl_atual)                                       as vl_total_atual,
    sum(coalesce(vl_aditado, 0))                        as vl_total_aditado,
    count(case when fl_possui_aditivo then 1 end)       as contratos_com_aditivo
from compras.fct_contratos`,N=`select
    count(*)                                            as total_contratos,
    count(distinct id_contratado)                       as total_fornecedores,
    count(distinct cod_unidade_gestora)                 as total_orgaos,
    sum(vl_original)                                    as vl_total_original,
    sum(vl_atual)                                       as vl_total_atual,
    sum(coalesce(vl_aditado, 0))                        as vl_total_aditado,
    count(case when fl_possui_aditivo then 1 end)       as contratos_com_aditivo
from compras.fct_contratos`;l.kpis_data&&(l.kpis_data instanceof Error?E.initialError=l.kpis_data:E.initialData=l.kpis_data,l.kpis_columns&&(E.knownColumns=l.kpis_columns));let Ht,dt=!1;const at=Lt.createReactive({callback:R=>{r(0,Ht=R)},execFn:c},{id:"kpis",...E});at(N,{noResolve:X,...E}),globalThis[Symbol.for("kpis")]={get value(){return Ht}};let V={initialData:void 0,initialError:void 0},Y=tt`select
    ano_assinatura::integer             as ano,
    count(*)                            as qt_contratos,
    sum(vl_original)                    as vl_total_original,
    sum(vl_atual)                       as vl_total_atual
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura
order by ano_assinatura`,B=`select
    ano_assinatura::integer             as ano,
    count(*)                            as qt_contratos,
    sum(vl_original)                    as vl_total_original,
    sum(vl_atual)                       as vl_total_atual
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura
order by ano_assinatura`;l.evolucao_anual_data&&(l.evolucao_anual_data instanceof Error?V.initialError=l.evolucao_anual_data:V.initialData=l.evolucao_anual_data,l.evolucao_anual_columns&&(V.knownColumns=l.evolucao_anual_columns));let pt,z=!1;const vt=Lt.createReactive({callback:R=>{r(1,pt=R)},execFn:c},{id:"evolucao_anual",...V});vt(B,{noResolve:Y,...V}),globalThis[Symbol.for("evolucao_anual")]={get value(){return pt}};let P={initialData:void 0,initialError:void 0},K=tt`select
    ds_situacao_aditivo     as situacao,
    count(*)                as qt_contratos,
    sum(vl_atual)           as vl_total
from compras.fct_contratos
group by 1
order by 2 desc`,j=`select
    ds_situacao_aditivo     as situacao,
    count(*)                as qt_contratos,
    sum(vl_atual)           as vl_total
from compras.fct_contratos
group by 1
order by 2 desc`;l.situacao_aditivo_data&&(l.situacao_aditivo_data instanceof Error?P.initialError=l.situacao_aditivo_data:P.initialData=l.situacao_aditivo_data,l.situacao_aditivo_columns&&(P.knownColumns=l.situacao_aditivo_columns));let $t,J=!1;const gt=Lt.createReactive({callback:R=>{r(2,$t=R)},execFn:c},{id:"situacao_aditivo",...P});gt(j,{noResolve:K,...P}),globalThis[Symbol.for("situacao_aditivo")]={get value(){return $t}};let G={initialData:void 0,initialError:void 0},W=tt`select
    nm_modalidade           as modalidade,
    qt_contratos,
    vl_total_atual          as vl_total
from compras.dim_modalidades
order by qt_contratos desc
limit 10`,U=`select
    nm_modalidade           as modalidade,
    qt_contratos,
    vl_total_atual          as vl_total
from compras.dim_modalidades
order by qt_contratos desc
limit 10`;l.top_modalidades_data&&(l.top_modalidades_data instanceof Error?G.initialError=l.top_modalidades_data:G.initialData=l.top_modalidades_data,l.top_modalidades_columns&&(G.knownColumns=l.top_modalidades_columns));let Et,bt=!1;const ot=Lt.createReactive({callback:R=>{r(3,Et=R)},execFn:c},{id:"top_modalidades",...G});ot(U,{noResolve:W,...G}),globalThis[Symbol.for("top_modalidades")]={get value(){return Et}};let Q={initialData:void 0,initialError:void 0},Z=tt`select
    rank_por_valor          as ranking,
    nm_unidade_gestora      as orgao,
    qt_contratos,
    vl_total_atual          as vl_total
from compras.dim_orgaos
order by ranking
limit 10`,O=`select
    rank_por_valor          as ranking,
    nm_unidade_gestora      as orgao,
    qt_contratos,
    vl_total_atual          as vl_total
from compras.dim_orgaos
order by ranking
limit 10`;l.top_orgaos_data&&(l.top_orgaos_data instanceof Error?Q.initialError=l.top_orgaos_data:Q.initialData=l.top_orgaos_data,l.top_orgaos_columns&&(Q.knownColumns=l.top_orgaos_columns));let kt,it=!1;const wt=Lt.createReactive({callback:R=>{r(4,kt=R)},execFn:c},{id:"top_orgaos",...Q});wt(O,{noResolve:Z,...Q}),globalThis[Symbol.for("top_orgaos")]={get value(){return kt}};let h={initialData:void 0,initialError:void 0},rt=tt`select
    rank_por_valor          as ranking,
    nm_contratado           as fornecedor,
    porte_fornecedor        as porte,
    qt_contratos,
    vl_total_atual          as vl_total
from compras.dim_fornecedores
order by ranking
limit 10`,lt=`select
    rank_por_valor          as ranking,
    nm_contratado           as fornecedor,
    porte_fornecedor        as porte,
    qt_contratos,
    vl_total_atual          as vl_total
from compras.dim_fornecedores
order by ranking
limit 10`;l.top_fornecedores_data&&(l.top_fornecedores_data instanceof Error?h.initialError=l.top_fornecedores_data:h.initialData=l.top_fornecedores_data,l.top_fornecedores_columns&&(h.knownColumns=l.top_fornecedores_columns));let st,x=!1;const yt=Lt.createReactive({callback:R=>{r(5,st=R)},execFn:c},{id:"top_fornecedores",...h});return yt(lt,{noResolve:rt,...h}),globalThis[Symbol.for("top_fornecedores")]={get value(){return st}},m.$$set=R=>{"data"in R&&r(6,n=R.data)},m.$$.update=()=>{m.$$.dirty[0]&64&&r(7,{data:l={},customFormattingSettings:i,__db:b}=n,l),m.$$.dirty[0]&128&&Ve.set(Object.keys(l).length>0),m.$$.dirty[1]&2&&e.params,m.$$.dirty[0]&3840&&(X||!dt?X||(at(N,{noResolve:X,...E}),r(11,dt=!0)):at(N,{noResolve:X})),m.$$.dirty[0]&61440&&(Y||!z?Y||(vt(B,{noResolve:Y,...V}),r(15,z=!0)):vt(B,{noResolve:Y})),m.$$.dirty[0]&983040&&(K||!J?K||(gt(j,{noResolve:K,...P}),r(19,J=!0)):gt(j,{noResolve:K})),m.$$.dirty[0]&15728640&&(W||!bt?W||(ot(U,{noResolve:W,...G}),r(23,bt=!0)):ot(U,{noResolve:W})),m.$$.dirty[0]&251658240&&(Z||!it?Z||(wt(O,{noResolve:Z,...Q}),r(27,it=!0)):wt(O,{noResolve:Z})),m.$$.dirty[0]&1879048192|m.$$.dirty[1]&1&&(rt||!x?rt||(yt(lt,{noResolve:rt,...h}),r(31,x=!0)):yt(lt,{noResolve:rt}))},r(9,X=tt`select
    count(*)                                            as total_contratos,
    count(distinct id_contratado)                       as total_fornecedores,
    count(distinct cod_unidade_gestora)                 as total_orgaos,
    sum(vl_original)                                    as vl_total_original,
    sum(vl_atual)                                       as vl_total_atual,
    sum(coalesce(vl_aditado, 0))                        as vl_total_aditado,
    count(case when fl_possui_aditivo then 1 end)       as contratos_com_aditivo
from compras.fct_contratos`),r(10,N=`select
    count(*)                                            as total_contratos,
    count(distinct id_contratado)                       as total_fornecedores,
    count(distinct cod_unidade_gestora)                 as total_orgaos,
    sum(vl_original)                                    as vl_total_original,
    sum(vl_atual)                                       as vl_total_atual,
    sum(coalesce(vl_aditado, 0))                        as vl_total_aditado,
    count(case when fl_possui_aditivo then 1 end)       as contratos_com_aditivo
from compras.fct_contratos`),r(13,Y=tt`select
    ano_assinatura::integer             as ano,
    count(*)                            as qt_contratos,
    sum(vl_original)                    as vl_total_original,
    sum(vl_atual)                       as vl_total_atual
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura
order by ano_assinatura`),r(14,B=`select
    ano_assinatura::integer             as ano,
    count(*)                            as qt_contratos,
    sum(vl_original)                    as vl_total_original,
    sum(vl_atual)                       as vl_total_atual
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura
order by ano_assinatura`),r(17,K=tt`select
    ds_situacao_aditivo     as situacao,
    count(*)                as qt_contratos,
    sum(vl_atual)           as vl_total
from compras.fct_contratos
group by 1
order by 2 desc`),r(18,j=`select
    ds_situacao_aditivo     as situacao,
    count(*)                as qt_contratos,
    sum(vl_atual)           as vl_total
from compras.fct_contratos
group by 1
order by 2 desc`),r(21,W=tt`select
    nm_modalidade           as modalidade,
    qt_contratos,
    vl_total_atual          as vl_total
from compras.dim_modalidades
order by qt_contratos desc
limit 10`),r(22,U=`select
    nm_modalidade           as modalidade,
    qt_contratos,
    vl_total_atual          as vl_total
from compras.dim_modalidades
order by qt_contratos desc
limit 10`),r(25,Z=tt`select
    rank_por_valor          as ranking,
    nm_unidade_gestora      as orgao,
    qt_contratos,
    vl_total_atual          as vl_total
from compras.dim_orgaos
order by ranking
limit 10`),r(26,O=`select
    rank_por_valor          as ranking,
    nm_unidade_gestora      as orgao,
    qt_contratos,
    vl_total_atual          as vl_total
from compras.dim_orgaos
order by ranking
limit 10`),r(29,rt=tt`select
    rank_por_valor          as ranking,
    nm_contratado           as fornecedor,
    porte_fornecedor        as porte,
    qt_contratos,
    vl_total_atual          as vl_total
from compras.dim_fornecedores
order by ranking
limit 10`),r(30,lt=`select
    rank_por_valor          as ranking,
    nm_contratado           as fornecedor,
    porte_fornecedor        as porte,
    qt_contratos,
    vl_total_atual          as vl_total
from compras.dim_fornecedores
order by ranking
limit 10`),[Ht,pt,$t,Et,kt,st,n,l,E,X,N,dt,V,Y,B,z,P,K,j,J,G,W,U,bt,Q,Z,O,it,h,rt,lt,x,e]}class ua extends De{constructor(a){super(),Ie(this,a,xe,Ze,qe,{data:6},null,[-1,-1])}}export{ua as component};
