import{s as Dt,d as o,a as st,i as m,b as z,c as g,e as p,h as Ct,f as k,g as ot,j as Ne,k as Xe,l as le,m as y,n as T,t as se,o as $t,p as Ft,q as St,r as At,u as Lt,v as _e}from"../chunks/scheduler.BCLmrrz2.js";import{S as It,i as zt,d as E,t as v,a as f,c as Ie,m as M,b as q,e as H,g as ze}from"../chunks/index.a3bxNApc.js";import{D as wt,e as Nt,s as Pt,Q as xe,p as Bt,C as we,a as bt,r as ht,b as Ot}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.DIqYBoWu.js";import{w as xt}from"../chunks/entry.pO2G62hW.js";import{h as ae,p as Ut}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Gt}from"../chunks/stores.3MyIEqHK.js";import{Q as Ue,B as Qt}from"../chunks/BarChart.BU9Pm3vM.js";import{B as _t}from"../chunks/BigValue.kMdosjd_.js";import{L as jt}from"../chunks/LineChart.DM7zOkBh.js";function Wt(n){let a,i=$.title+"",t;return{c(){a=T("h1"),t=se(i),this.h()},l(s){a=k(s,"H1",{class:!0});var _=Xe(a);t=le(_,i),_.forEach(o),this.h()},h(){g(a,"class","title")},m(s,_){m(s,a,_),z(a,t)},p:_e,d(s){s&&o(a)}}}function Vt(n){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:_e,p:_e,d:_e}}function Kt(n){let a,i,t,s,_;return document.title=a=$.title,{c(){i=y(),t=T("meta"),s=y(),_=T("meta"),this.h()},l(l){i=p(l),t=k(l,"META",{property:!0,content:!0}),s=p(l),_=k(l,"META",{name:!0,content:!0}),this.h()},h(){var l,c;g(t,"property","og:title"),g(t,"content",((l=$.og)==null?void 0:l.title)??$.title),g(_,"name","twitter:title"),g(_,"content",((c=$.og)==null?void 0:c.title)??$.title)},m(l,c){m(l,i,c),m(l,t,c),m(l,s,c),m(l,_,c)},p(l,c){c&0&&a!==(a=$.title)&&(document.title=a)},d(l){l&&(o(i),o(t),o(s),o(_))}}}function Xt(n){var _,l;let a,i,t=($.description||((_=$.og)==null?void 0:_.description))&&Yt(),s=((l=$.og)==null?void 0:l.image)&&Jt();return{c(){t&&t.c(),a=y(),s&&s.c(),i=ot()},l(c){t&&t.l(c),a=p(c),s&&s.l(c),i=ot()},m(c,w){t&&t.m(c,w),m(c,a,w),s&&s.m(c,w),m(c,i,w)},p(c,w){var d,R;($.description||(d=$.og)!=null&&d.description)&&t.p(c,w),(R=$.og)!=null&&R.image&&s.p(c,w)},d(c){c&&(o(a),o(i)),t&&t.d(c),s&&s.d(c)}}}function Yt(n){let a,i,t,s,_;return{c(){a=T("meta"),i=y(),t=T("meta"),s=y(),_=T("meta"),this.h()},l(l){a=k(l,"META",{name:!0,content:!0}),i=p(l),t=k(l,"META",{property:!0,content:!0}),s=p(l),_=k(l,"META",{name:!0,content:!0}),this.h()},h(){var l,c,w;g(a,"name","description"),g(a,"content",$.description??((l=$.og)==null?void 0:l.description)),g(t,"property","og:description"),g(t,"content",((c=$.og)==null?void 0:c.description)??$.description),g(_,"name","twitter:description"),g(_,"content",((w=$.og)==null?void 0:w.description)??$.description)},m(l,c){m(l,a,c),m(l,i,c),m(l,t,c),m(l,s,c),m(l,_,c)},p:_e,d(l){l&&(o(a),o(i),o(t),o(s),o(_))}}}function Jt(n){let a,i,t;return{c(){a=T("meta"),i=y(),t=T("meta"),this.h()},l(s){a=k(s,"META",{property:!0,content:!0}),i=p(s),t=k(s,"META",{name:!0,content:!0}),this.h()},h(){var s,_;g(a,"property","og:image"),g(a,"content",bt((s=$.og)==null?void 0:s.image)),g(t,"name","twitter:image"),g(t,"content",bt((_=$.og)==null?void 0:_.image))},m(s,_){m(s,a,_),m(s,i,_),m(s,t,_)},p:_e,d(s){s&&(o(a),o(i),o(t))}}}function kt(n){let a,i;return a=new Ue({props:{queryID:"totais",queryResult:n[0]}}),{c(){H(a.$$.fragment)},l(t){q(a.$$.fragment,t)},m(t,s){M(a,t,s),i=!0},p(t,s){const _={};s[0]&1&&(_.queryResult=t[0]),a.$set(_)},i(t){i||(f(a.$$.fragment,t),i=!0)},o(t){v(a.$$.fragment,t),i=!1},d(t){E(a,t)}}}function Tt(n){let a,i;return a=new Ue({props:{queryID:"alertas_ativos",queryResult:n[1]}}),{c(){H(a.$$.fragment)},l(t){q(a.$$.fragment,t)},m(t,s){M(a,t,s),i=!0},p(t,s){const _={};s[0]&2&&(_.queryResult=t[1]),a.$set(_)},i(t){i||(f(a.$$.fragment,t),i=!0)},o(t){v(a.$$.fragment,t),i=!1},d(t){E(a,t)}}}function Rt(n){let a,i;return a=new Ue({props:{queryID:"temperatura_nacional_30d",queryResult:n[2]}}),{c(){H(a.$$.fragment)},l(t){q(a.$$.fragment,t)},m(t,s){M(a,t,s),i=!0},p(t,s){const _={};s[0]&4&&(_.queryResult=t[2]),a.$set(_)},i(t){i||(f(a.$$.fragment,t),i=!0)},o(t){v(a.$$.fragment,t),i=!1},d(t){E(a,t)}}}function Et(n){let a,i;return a=new Ue({props:{queryID:"alertas_por_tipo_30d",queryResult:n[3]}}),{c(){H(a.$$.fragment)},l(t){q(a.$$.fragment,t)},m(t,s){M(a,t,s),i=!0},p(t,s){const _={};s[0]&8&&(_.queryResult=t[3]),a.$set(_)},i(t){i||(f(a.$$.fragment,t),i=!0)},o(t){v(a.$$.fragment,t),i=!1},d(t){E(a,t)}}}function Mt(n){let a,i;return a=new Ue({props:{queryID:"resumo_por_regiao",queryResult:n[4]}}),{c(){H(a.$$.fragment)},l(t){q(a.$$.fragment,t)},m(t,s){M(a,t,s),i=!0},p(t,s){const _={};s[0]&16&&(_.queryResult=t[4]),a.$set(_)},i(t){i||(f(a.$$.fragment,t),i=!0)},o(t){v(a.$$.fragment,t),i=!1},d(t){E(a,t)}}}function qt(n){let a,i;return a=new Ue({props:{queryID:"ultimas_atualizacoes",queryResult:n[5]}}),{c(){H(a.$$.fragment)},l(t){q(a.$$.fragment,t)},m(t,s){M(a,t,s),i=!0},p(t,s){const _={};s[0]&32&&(_.queryResult=t[5]),a.$set(_)},i(t){i||(f(a.$$.fragment,t),i=!0)},o(t){v(a.$$.fragment,t),i=!1},d(t){E(a,t)}}}function Zt(n){let a,i='<p class="markdown">Não há alertas climáticos nos últimos 30 dias.</p>';return{c(){a=T("blockquote"),a.innerHTML=i,this.h()},l(t){a=k(t,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),Ne(a)!=="svelte-j617ry"&&(a.innerHTML=i),this.h()},h(){g(a,"class","markdown")},m(t,s){m(t,a,s)},p:_e,i:_e,o:_e,d(t){t&&o(a)}}}function ea(n){let a,i;return a=new Qt({props:{data:n[3],x:"tipo",y:"ocorrencias",yAxisTitle:"Ocorrências",title:"Eventos climáticos extremos detectados",colorPalette:["#e74c3c","#e67e22"]}}),{c(){H(a.$$.fragment)},l(t){q(a.$$.fragment,t)},m(t,s){M(a,t,s),i=!0},p(t,s){const _={};s[0]&8&&(_.data=t[3]),a.$set(_)},i(t){i||(f(a.$$.fragment,t),i=!0)},o(t){v(a.$$.fragment,t),i=!1},d(t){E(a,t)}}}function ta(n){let a,i,t,s,_,l,c,w,d,R;return a=new we({props:{id:"regiao",title:"Região"}}),t=new we({props:{id:"cidades",title:"Cidades"}}),_=new we({props:{id:"temp_media_c",title:"Temp. Média (°C)",fmt:"0.0"}}),c=new we({props:{id:"precip_media_mm",title:"Precip. Média (mm)",fmt:"0.0"}}),d=new we({props:{id:"anomalia_media_c",title:"Anomalia Temp. (°C)",fmt:"+0.00;-0.00",contentType:"colorscale"}}),{c(){H(a.$$.fragment),i=y(),H(t.$$.fragment),s=y(),H(_.$$.fragment),l=y(),H(c.$$.fragment),w=y(),H(d.$$.fragment)},l(u){q(a.$$.fragment,u),i=p(u),q(t.$$.fragment,u),s=p(u),q(_.$$.fragment,u),l=p(u),q(c.$$.fragment,u),w=p(u),q(d.$$.fragment,u)},m(u,b){M(a,u,b),m(u,i,b),M(t,u,b),m(u,s,b),M(_,u,b),m(u,l,b),M(c,u,b),m(u,w,b),M(d,u,b),R=!0},p:_e,i(u){R||(f(a.$$.fragment,u),f(t.$$.fragment,u),f(_.$$.fragment,u),f(c.$$.fragment,u),f(d.$$.fragment,u),R=!0)},o(u){v(a.$$.fragment,u),v(t.$$.fragment,u),v(_.$$.fragment,u),v(c.$$.fragment,u),v(d.$$.fragment,u),R=!1},d(u){u&&(o(i),o(s),o(l),o(w)),E(a,u),E(t,u),E(_,u),E(c,u),E(d,u)}}}function aa(n){let a,i,t,s,_,l,c,w;return a=new we({props:{id:"cidade",title:"Cidade"}}),t=new we({props:{id:"state_name",title:"Estado"}}),_=new we({props:{id:"ultimo_dado",title:"Último Dado",fmt:"dd/MM/yyyy"}}),c=new we({props:{id:"ultima_coleta",title:"Última Coleta",fmt:"dd/MM/yyyy"}}),{c(){H(a.$$.fragment),i=y(),H(t.$$.fragment),s=y(),H(_.$$.fragment),l=y(),H(c.$$.fragment)},l(d){q(a.$$.fragment,d),i=p(d),q(t.$$.fragment,d),s=p(d),q(_.$$.fragment,d),l=p(d),q(c.$$.fragment,d)},m(d,R){M(a,d,R),m(d,i,R),M(t,d,R),m(d,s,R),M(_,d,R),m(d,l,R),M(c,d,R),w=!0},p:_e,i(d){w||(f(a.$$.fragment,d),f(t.$$.fragment,d),f(_.$$.fragment,d),f(c.$$.fragment,d),w=!0)},o(d){v(a.$$.fragment,d),v(t.$$.fragment,d),v(_.$$.fragment,d),v(c.$$.fragment,d),w=!1},d(d){d&&(o(i),o(s),o(l)),E(a,d),E(t,d),E(_,d),E(c,d)}}}function ia(n){let a,i,t,s,_,l,c,w,d,R,u,b,oe='<a href="#weather-analytics-pipeline">Weather Analytics Pipeline</a>',ne,I,Fe,ie,O=n[0][0].total_locais+"",Q,ce,Se,me,ue=new Date(n[0][0].data_inicial).toLocaleDateString("pt-BR")+"",j,re,W,de=new Date(n[0][0].data_final).toLocaleDateString("pt-BR")+"",be,Ae,x=n[0][0].total_dias+"",V,fe,he,K,ke,N,X,B,Te,Y,Re,U,J,P,Pe='<a href="#temperatura-nacional--últimos-30-dias">Temperatura Nacional — Últimos 30 dias</a>',Ee,Z,h,Le,Ye,pe,ut='<a href="#alertas-por-tipo--últimos-30-dias">Alertas por Tipo — Últimos 30 dias</a>',Je,ee,te,Be,Ge,Ze,ye,dt='<a href="#resumo-por-região">Resumo por Região</a>',et,Me,tt,Qe,at,ge,ft='<a href="#frescos-de-pipeline">Frescos de Pipeline</a>',it,qe,rt,je,lt,He,pt='<strong class="markdown">Navegação:</strong> <a href="/Analytics-Engineer/Weather-Analytics/temperatura" class="markdown">Temperatura</a> · <a href="/Analytics-Engineer/Weather-Analytics/precipitacao" class="markdown">Precipitação</a> · <a href="/Analytics-Engineer/Weather-Analytics/alertas" class="markdown">Alertas</a>',De,ve=typeof $<"u"&&$.title&&$.hide_title!==!0&&Wt();function Ht(e,r){return typeof $<"u"&&$.title?Kt:Vt}let We=Ht()(n),$e=typeof $=="object"&&Xt(),D=n[0]&&kt(n),C=n[1]&&Tt(n),F=n[2]&&Rt(n),S=n[3]&&Et(n),A=n[4]&&Mt(n),L=n[5]&&qt(n);K=new _t({props:{data:n[0],value:"total_locais",title:"Localidades Monitoradas"}}),N=new _t({props:{data:n[0],value:"total_dias",title:"Dias de Histórico"}}),B=new _t({props:{data:n[0],value:"temp_media_geral_c",title:"Temp. Média Geral",fmt:"0.0"}}),Y=new _t({props:{data:n[1],value:"total_alertas",title:"Alertas (últimos 7 dias)"}}),Z=new jt({props:{data:n[2],x:"date",y:["temp_max","temp_media","temp_min"],yAxisTitle:"Temperatura (°C)",title:"Máxima / Média / Mínima diária (média entre todas as localidades)",xFmt:"dd/MM/yyyy",labels:!0}});const yt=[ea,Zt],Ce=[];function gt(e,r){return e[3].length>0?0:1}return ee=gt(n),te=Ce[ee]=yt[ee](n),Me=new wt({props:{data:n[4],$$slots:{default:[ta]},$$scope:{ctx:n}}}),qe=new wt({props:{data:n[5],title:"Últimas coletas por cidade",$$slots:{default:[aa]},$$scope:{ctx:n}}}),{c(){ve&&ve.c(),a=y(),We.c(),i=T("meta"),t=T("meta"),$e&&$e.c(),s=ot(),_=y(),D&&D.c(),l=y(),C&&C.c(),c=y(),F&&F.c(),w=y(),S&&S.c(),d=y(),A&&A.c(),R=y(),L&&L.c(),u=y(),b=T("h1"),b.innerHTML=oe,ne=y(),I=T("p"),Fe=se("Pipeline de dados climáticos cobrindo "),ie=T("strong"),Q=se(O),ce=se(" localidades"),Se=se(` brasileiras,
com dados históricos de `),me=T("strong"),j=se(ue),re=se(" a "),W=T("strong"),be=se(de),Ae=se(`
(`),V=se(x),fe=se(" dias de série temporal)."),he=y(),H(K.$$.fragment),ke=y(),H(N.$$.fragment),X=y(),H(B.$$.fragment),Te=y(),H(Y.$$.fragment),Re=y(),U=T("hr"),J=y(),P=T("h2"),P.innerHTML=Pe,Ee=y(),H(Z.$$.fragment),h=y(),Le=T("hr"),Ye=y(),pe=T("h2"),pe.innerHTML=ut,Je=y(),te.c(),Be=y(),Ge=T("hr"),Ze=y(),ye=T("h2"),ye.innerHTML=dt,et=y(),H(Me.$$.fragment),tt=y(),Qe=T("hr"),at=y(),ge=T("h2"),ge.innerHTML=ft,it=y(),H(qe.$$.fragment),rt=y(),je=T("hr"),lt=y(),He=T("p"),He.innerHTML=pt,this.h()},l(e){ve&&ve.l(e),a=p(e);const r=Ct("svelte-2igo1p",document.head);We.l(r),i=k(r,"META",{name:!0,content:!0}),t=k(r,"META",{name:!0,content:!0}),$e&&$e.l(r),s=ot(),r.forEach(o),_=p(e),D&&D.l(e),l=p(e),C&&C.l(e),c=p(e),F&&F.l(e),w=p(e),S&&S.l(e),d=p(e),A&&A.l(e),R=p(e),L&&L.l(e),u=p(e),b=k(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),Ne(b)!=="svelte-11ut3vi"&&(b.innerHTML=oe),ne=p(e),I=k(e,"P",{class:!0});var G=Xe(I);Fe=le(G,"Pipeline de dados climáticos cobrindo "),ie=k(G,"STRONG",{class:!0});var Oe=Xe(ie);Q=le(Oe,O),ce=le(Oe," localidades"),Oe.forEach(o),Se=le(G,` brasileiras,
com dados históricos de `),me=k(G,"STRONG",{class:!0});var Ve=Xe(me);j=le(Ve,ue),Ve.forEach(o),re=le(G," a "),W=k(G,"STRONG",{class:!0});var Ke=Xe(W);be=le(Ke,de),Ke.forEach(o),Ae=le(G,`
(`),V=le(G,x),fe=le(G," dias de série temporal)."),G.forEach(o),he=p(e),q(K.$$.fragment,e),ke=p(e),q(N.$$.fragment,e),X=p(e),q(B.$$.fragment,e),Te=p(e),q(Y.$$.fragment,e),Re=p(e),U=k(e,"HR",{class:!0}),J=p(e),P=k(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ne(P)!=="svelte-1gl88wv"&&(P.innerHTML=Pe),Ee=p(e),q(Z.$$.fragment,e),h=p(e),Le=k(e,"HR",{class:!0}),Ye=p(e),pe=k(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ne(pe)!=="svelte-124ez77"&&(pe.innerHTML=ut),Je=p(e),te.l(e),Be=p(e),Ge=k(e,"HR",{class:!0}),Ze=p(e),ye=k(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ne(ye)!=="svelte-hxbh65"&&(ye.innerHTML=dt),et=p(e),q(Me.$$.fragment,e),tt=p(e),Qe=k(e,"HR",{class:!0}),at=p(e),ge=k(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ne(ge)!=="svelte-1qc5xg0"&&(ge.innerHTML=ft),it=p(e),q(qe.$$.fragment,e),rt=p(e),je=k(e,"HR",{class:!0}),lt=p(e),He=k(e,"P",{class:!0,"data-svelte-h":!0}),Ne(He)!=="svelte-177d2yz"&&(He.innerHTML=pt),this.h()},h(){g(i,"name","twitter:card"),g(i,"content","summary_large_image"),g(t,"name","twitter:site"),g(t,"content","@evidence_dev"),g(b,"class","markdown"),g(b,"id","weather-analytics-pipeline"),g(ie,"class","markdown"),g(me,"class","markdown"),g(W,"class","markdown"),g(I,"class","markdown"),g(U,"class","markdown"),g(P,"class","markdown"),g(P,"id","temperatura-nacional--últimos-30-dias"),g(Le,"class","markdown"),g(pe,"class","markdown"),g(pe,"id","alertas-por-tipo--últimos-30-dias"),g(Ge,"class","markdown"),g(ye,"class","markdown"),g(ye,"id","resumo-por-região"),g(Qe,"class","markdown"),g(ge,"class","markdown"),g(ge,"id","frescos-de-pipeline"),g(je,"class","markdown"),g(He,"class","markdown")},m(e,r){ve&&ve.m(e,r),m(e,a,r),We.m(document.head,null),z(document.head,i),z(document.head,t),$e&&$e.m(document.head,null),z(document.head,s),m(e,_,r),D&&D.m(e,r),m(e,l,r),C&&C.m(e,r),m(e,c,r),F&&F.m(e,r),m(e,w,r),S&&S.m(e,r),m(e,d,r),A&&A.m(e,r),m(e,R,r),L&&L.m(e,r),m(e,u,r),m(e,b,r),m(e,ne,r),m(e,I,r),z(I,Fe),z(I,ie),z(ie,Q),z(ie,ce),z(I,Se),z(I,me),z(me,j),z(I,re),z(I,W),z(W,be),z(I,Ae),z(I,V),z(I,fe),m(e,he,r),M(K,e,r),m(e,ke,r),M(N,e,r),m(e,X,r),M(B,e,r),m(e,Te,r),M(Y,e,r),m(e,Re,r),m(e,U,r),m(e,J,r),m(e,P,r),m(e,Ee,r),M(Z,e,r),m(e,h,r),m(e,Le,r),m(e,Ye,r),m(e,pe,r),m(e,Je,r),Ce[ee].m(e,r),m(e,Be,r),m(e,Ge,r),m(e,Ze,r),m(e,ye,r),m(e,et,r),M(Me,e,r),m(e,tt,r),m(e,Qe,r),m(e,at,r),m(e,ge,r),m(e,it,r),M(qe,e,r),m(e,rt,r),m(e,je,r),m(e,lt,r),m(e,He,r),De=!0},p(e,r){typeof $<"u"&&$.title&&$.hide_title!==!0&&ve.p(e,r),We.p(e,r),typeof $=="object"&&$e.p(e,r),e[0]?D?(D.p(e,r),r[0]&1&&f(D,1)):(D=kt(e),D.c(),f(D,1),D.m(l.parentNode,l)):D&&(ze(),v(D,1,1,()=>{D=null}),Ie()),e[1]?C?(C.p(e,r),r[0]&2&&f(C,1)):(C=Tt(e),C.c(),f(C,1),C.m(c.parentNode,c)):C&&(ze(),v(C,1,1,()=>{C=null}),Ie()),e[2]?F?(F.p(e,r),r[0]&4&&f(F,1)):(F=Rt(e),F.c(),f(F,1),F.m(w.parentNode,w)):F&&(ze(),v(F,1,1,()=>{F=null}),Ie()),e[3]?S?(S.p(e,r),r[0]&8&&f(S,1)):(S=Et(e),S.c(),f(S,1),S.m(d.parentNode,d)):S&&(ze(),v(S,1,1,()=>{S=null}),Ie()),e[4]?A?(A.p(e,r),r[0]&16&&f(A,1)):(A=Mt(e),A.c(),f(A,1),A.m(R.parentNode,R)):A&&(ze(),v(A,1,1,()=>{A=null}),Ie()),e[5]?L?(L.p(e,r),r[0]&32&&f(L,1)):(L=qt(e),L.c(),f(L,1),L.m(u.parentNode,u)):L&&(ze(),v(L,1,1,()=>{L=null}),Ie()),(!De||r[0]&1)&&O!==(O=e[0][0].total_locais+"")&&st(Q,O),(!De||r[0]&1)&&ue!==(ue=new Date(e[0][0].data_inicial).toLocaleDateString("pt-BR")+"")&&st(j,ue),(!De||r[0]&1)&&de!==(de=new Date(e[0][0].data_final).toLocaleDateString("pt-BR")+"")&&st(be,de),(!De||r[0]&1)&&x!==(x=e[0][0].total_dias+"")&&st(V,x);const G={};r[0]&1&&(G.data=e[0]),K.$set(G);const Oe={};r[0]&1&&(Oe.data=e[0]),N.$set(Oe);const Ve={};r[0]&1&&(Ve.data=e[0]),B.$set(Ve);const Ke={};r[0]&2&&(Ke.data=e[1]),Y.$set(Ke);const vt={};r[0]&4&&(vt.data=e[2]),Z.$set(vt);let nt=ee;ee=gt(e),ee===nt?Ce[ee].p(e,r):(ze(),v(Ce[nt],1,1,()=>{Ce[nt]=null}),Ie(),te=Ce[ee],te?te.p(e,r):(te=Ce[ee]=yt[ee](e),te.c()),f(te,1),te.m(Be.parentNode,Be));const mt={};r[0]&16&&(mt.data=e[4]),r[1]&131072&&(mt.$$scope={dirty:r,ctx:e}),Me.$set(mt);const ct={};r[0]&32&&(ct.data=e[5]),r[1]&131072&&(ct.$$scope={dirty:r,ctx:e}),qe.$set(ct)},i(e){De||(f(D),f(C),f(F),f(S),f(A),f(L),f(K.$$.fragment,e),f(N.$$.fragment,e),f(B.$$.fragment,e),f(Y.$$.fragment,e),f(Z.$$.fragment,e),f(te),f(Me.$$.fragment,e),f(qe.$$.fragment,e),De=!0)},o(e){v(D),v(C),v(F),v(S),v(A),v(L),v(K.$$.fragment,e),v(N.$$.fragment,e),v(B.$$.fragment,e),v(Y.$$.fragment,e),v(Z.$$.fragment,e),v(te),v(Me.$$.fragment,e),v(qe.$$.fragment,e),De=!1},d(e){e&&(o(a),o(_),o(l),o(c),o(w),o(d),o(R),o(u),o(b),o(ne),o(I),o(he),o(ke),o(X),o(Te),o(Re),o(U),o(J),o(P),o(Ee),o(h),o(Le),o(Ye),o(pe),o(Je),o(Be),o(Ge),o(Ze),o(ye),o(et),o(tt),o(Qe),o(at),o(ge),o(it),o(rt),o(je),o(lt),o(He)),ve&&ve.d(e),We.d(e),o(i),o(t),$e&&$e.d(e),o(s),D&&D.d(e),C&&C.d(e),F&&F.d(e),S&&S.d(e),A&&A.d(e),L&&L.d(e),E(K,e),E(N,e),E(B,e),E(Y,e),E(Z,e),Ce[ee].d(e),E(Me,e),E(qe,e)}}}const $={title:"Weather Analytics — Visão Geral"};function ra(n,a,i){let t,s;$t(n,Gt,h=>i(32,t=h)),$t(n,ht,h=>i(38,s=h));let{data:_}=a,{data:l={},customFormattingSettings:c,__db:w,inputs:d}=_;Ft(ht,s="6666cd76f96956469e7be39d750cc7d9",s);let R=Nt(xt(d));St(R.subscribe(h=>d=h)),At(Ot,{getCustomFormats:()=>c.customFormats||[]});const u=(h,Le)=>Ut(w.query,h,{query_name:Le});Pt(u),t.params,Lt(()=>!0);let b={initialData:void 0,initialError:void 0},oe=ae`select
  count(distinct location_id)                          as total_locais,
  count(distinct date)                                 as total_dias,
  min(date)                                            as data_inicial,
  max(date)                                            as data_final,
  round(avg(temp_avg_c), 1)                            as temp_media_geral_c,
  round(avg(precipitation_mm), 1)                      as precip_media_diaria_mm
from weather_dw.mart_climate__daily_facts`,ne=`select
  count(distinct location_id)                          as total_locais,
  count(distinct date)                                 as total_dias,
  min(date)                                            as data_inicial,
  max(date)                                            as data_final,
  round(avg(temp_avg_c), 1)                            as temp_media_geral_c,
  round(avg(precipitation_mm), 1)                      as precip_media_diaria_mm
from weather_dw.mart_climate__daily_facts`;l.totais_data&&(l.totais_data instanceof Error?b.initialError=l.totais_data:b.initialData=l.totais_data,l.totais_columns&&(b.knownColumns=l.totais_columns));let I,Fe=!1;const ie=xe.createReactive({callback:h=>{i(0,I=h)},execFn:u},{id:"totais",...b});ie(ne,{noResolve:oe,...b}),globalThis[Symbol.for("totais")]={get value(){return I}};let O={initialData:void 0,initialError:void 0},Q=ae`select count(*) as total_alertas
from weather_dw.mart_climate__alerts
where date >= current_date - interval '7 days'
  and alert_type != '__no_alerts__'`,ce=`select count(*) as total_alertas
from weather_dw.mart_climate__alerts
where date >= current_date - interval '7 days'
  and alert_type != '__no_alerts__'`;l.alertas_ativos_data&&(l.alertas_ativos_data instanceof Error?O.initialError=l.alertas_ativos_data:O.initialData=l.alertas_ativos_data,l.alertas_ativos_columns&&(O.knownColumns=l.alertas_ativos_columns));let Se,me=!1;const ue=xe.createReactive({callback:h=>{i(1,Se=h)},execFn:u},{id:"alertas_ativos",...O});ue(ce,{noResolve:Q,...O}),globalThis[Symbol.for("alertas_ativos")]={get value(){return Se}};let j={initialData:void 0,initialError:void 0},re=ae`select
  date,
  round(avg(temp_max_c), 1)   as temp_max,
  round(avg(temp_avg_c), 1)   as temp_media,
  round(avg(temp_min_c), 1)   as temp_min
from weather_dw.mart_climate__daily_facts
where date >= current_date - interval '30 days'
group by date
order by date`,W=`select
  date,
  round(avg(temp_max_c), 1)   as temp_max,
  round(avg(temp_avg_c), 1)   as temp_media,
  round(avg(temp_min_c), 1)   as temp_min
from weather_dw.mart_climate__daily_facts
where date >= current_date - interval '30 days'
group by date
order by date`;l.temperatura_nacional_30d_data&&(l.temperatura_nacional_30d_data instanceof Error?j.initialError=l.temperatura_nacional_30d_data:j.initialData=l.temperatura_nacional_30d_data,l.temperatura_nacional_30d_columns&&(j.knownColumns=l.temperatura_nacional_30d_columns));let de,be=!1;const Ae=xe.createReactive({callback:h=>{i(2,de=h)},execFn:u},{id:"temperatura_nacional_30d",...j});Ae(W,{noResolve:re,...j}),globalThis[Symbol.for("temperatura_nacional_30d")]={get value(){return de}};let x={initialData:void 0,initialError:void 0},V=ae`select
  alert_type                    as tipo,
  count(*)                      as ocorrencias,
  count(*) filter (where severity = 'critical') as criticos,
  count(*) filter (where severity = 'high')    as altos
from weather_dw.mart_climate__alerts
where date >= current_date - interval '30 days'
  and alert_type != '__no_alerts__'
group by alert_type
order by ocorrencias desc`,fe=`select
  alert_type                    as tipo,
  count(*)                      as ocorrencias,
  count(*) filter (where severity = 'critical') as criticos,
  count(*) filter (where severity = 'high')    as altos
from weather_dw.mart_climate__alerts
where date >= current_date - interval '30 days'
  and alert_type != '__no_alerts__'
group by alert_type
order by ocorrencias desc`;l.alertas_por_tipo_30d_data&&(l.alertas_por_tipo_30d_data instanceof Error?x.initialError=l.alertas_por_tipo_30d_data:x.initialData=l.alertas_por_tipo_30d_data,l.alertas_por_tipo_30d_columns&&(x.knownColumns=l.alertas_por_tipo_30d_columns));let he,K=!1;const ke=xe.createReactive({callback:h=>{i(3,he=h)},execFn:u},{id:"alertas_por_tipo_30d",...x});ke(fe,{noResolve:V,...x}),globalThis[Symbol.for("alertas_por_tipo_30d")]={get value(){return he}};let N={initialData:void 0,initialError:void 0},X=ae`select
  region                                              as regiao,
  count(distinct location_id)                         as cidades,
  round(avg(temp_avg_c), 1)                           as temp_media_c,
  round(avg(precipitation_mm), 1)                     as precip_media_mm,
  round(avg(temp_anomaly_c), 2)                       as anomalia_media_c
from weather_dw.mart_climate__daily_facts
where date >= current_date - interval '30 days'
group by region
order by temp_media_c desc`,B=`select
  region                                              as regiao,
  count(distinct location_id)                         as cidades,
  round(avg(temp_avg_c), 1)                           as temp_media_c,
  round(avg(precipitation_mm), 1)                     as precip_media_mm,
  round(avg(temp_anomaly_c), 2)                       as anomalia_media_c
from weather_dw.mart_climate__daily_facts
where date >= current_date - interval '30 days'
group by region
order by temp_media_c desc`;l.resumo_por_regiao_data&&(l.resumo_por_regiao_data instanceof Error?N.initialError=l.resumo_por_regiao_data:N.initialData=l.resumo_por_regiao_data,l.resumo_por_regiao_columns&&(N.knownColumns=l.resumo_por_regiao_columns));let Te,Y=!1;const Re=xe.createReactive({callback:h=>{i(4,Te=h)},execFn:u},{id:"resumo_por_regiao",...N});Re(B,{noResolve:X,...N}),globalThis[Symbol.for("resumo_por_regiao")]={get value(){return Te}};let U={initialData:void 0,initialError:void 0},J=ae`select
  city_name                                           as cidade,
  state_name,
  max(date)                                           as ultimo_dado,
  max(_extracted_at)                                  as ultima_coleta
from weather_dw.mart_climate__daily_facts
group by city_name, state_name
order by ultima_coleta desc
limit 10`,P=`select
  city_name                                           as cidade,
  state_name,
  max(date)                                           as ultimo_dado,
  max(_extracted_at)                                  as ultima_coleta
from weather_dw.mart_climate__daily_facts
group by city_name, state_name
order by ultima_coleta desc
limit 10`;l.ultimas_atualizacoes_data&&(l.ultimas_atualizacoes_data instanceof Error?U.initialError=l.ultimas_atualizacoes_data:U.initialData=l.ultimas_atualizacoes_data,l.ultimas_atualizacoes_columns&&(U.knownColumns=l.ultimas_atualizacoes_columns));let Pe,Ee=!1;const Z=xe.createReactive({callback:h=>{i(5,Pe=h)},execFn:u},{id:"ultimas_atualizacoes",...U});return Z(P,{noResolve:J,...U}),globalThis[Symbol.for("ultimas_atualizacoes")]={get value(){return Pe}},n.$$set=h=>{"data"in h&&i(6,_=h.data)},n.$$.update=()=>{n.$$.dirty[0]&64&&i(7,{data:l={},customFormattingSettings:c,__db:w}=_,l),n.$$.dirty[0]&128&&Bt.set(Object.keys(l).length>0),n.$$.dirty[1]&2&&t.params,n.$$.dirty[0]&3840&&(oe||!Fe?oe||(ie(ne,{noResolve:oe,...b}),i(11,Fe=!0)):ie(ne,{noResolve:oe})),n.$$.dirty[0]&61440&&(Q||!me?Q||(ue(ce,{noResolve:Q,...O}),i(15,me=!0)):ue(ce,{noResolve:Q})),n.$$.dirty[0]&983040&&(re||!be?re||(Ae(W,{noResolve:re,...j}),i(19,be=!0)):Ae(W,{noResolve:re})),n.$$.dirty[0]&15728640&&(V||!K?V||(ke(fe,{noResolve:V,...x}),i(23,K=!0)):ke(fe,{noResolve:V})),n.$$.dirty[0]&251658240&&(X||!Y?X||(Re(B,{noResolve:X,...N}),i(27,Y=!0)):Re(B,{noResolve:X})),n.$$.dirty[0]&1879048192|n.$$.dirty[1]&1&&(J||!Ee?J||(Z(P,{noResolve:J,...U}),i(31,Ee=!0)):Z(P,{noResolve:J}))},i(9,oe=ae`select
  count(distinct location_id)                          as total_locais,
  count(distinct date)                                 as total_dias,
  min(date)                                            as data_inicial,
  max(date)                                            as data_final,
  round(avg(temp_avg_c), 1)                            as temp_media_geral_c,
  round(avg(precipitation_mm), 1)                      as precip_media_diaria_mm
from weather_dw.mart_climate__daily_facts`),i(10,ne=`select
  count(distinct location_id)                          as total_locais,
  count(distinct date)                                 as total_dias,
  min(date)                                            as data_inicial,
  max(date)                                            as data_final,
  round(avg(temp_avg_c), 1)                            as temp_media_geral_c,
  round(avg(precipitation_mm), 1)                      as precip_media_diaria_mm
from weather_dw.mart_climate__daily_facts`),i(13,Q=ae`select count(*) as total_alertas
from weather_dw.mart_climate__alerts
where date >= current_date - interval '7 days'
  and alert_type != '__no_alerts__'`),i(14,ce=`select count(*) as total_alertas
from weather_dw.mart_climate__alerts
where date >= current_date - interval '7 days'
  and alert_type != '__no_alerts__'`),i(17,re=ae`select
  date,
  round(avg(temp_max_c), 1)   as temp_max,
  round(avg(temp_avg_c), 1)   as temp_media,
  round(avg(temp_min_c), 1)   as temp_min
from weather_dw.mart_climate__daily_facts
where date >= current_date - interval '30 days'
group by date
order by date`),i(18,W=`select
  date,
  round(avg(temp_max_c), 1)   as temp_max,
  round(avg(temp_avg_c), 1)   as temp_media,
  round(avg(temp_min_c), 1)   as temp_min
from weather_dw.mart_climate__daily_facts
where date >= current_date - interval '30 days'
group by date
order by date`),i(21,V=ae`select
  alert_type                    as tipo,
  count(*)                      as ocorrencias,
  count(*) filter (where severity = 'critical') as criticos,
  count(*) filter (where severity = 'high')    as altos
from weather_dw.mart_climate__alerts
where date >= current_date - interval '30 days'
  and alert_type != '__no_alerts__'
group by alert_type
order by ocorrencias desc`),i(22,fe=`select
  alert_type                    as tipo,
  count(*)                      as ocorrencias,
  count(*) filter (where severity = 'critical') as criticos,
  count(*) filter (where severity = 'high')    as altos
from weather_dw.mart_climate__alerts
where date >= current_date - interval '30 days'
  and alert_type != '__no_alerts__'
group by alert_type
order by ocorrencias desc`),i(25,X=ae`select
  region                                              as regiao,
  count(distinct location_id)                         as cidades,
  round(avg(temp_avg_c), 1)                           as temp_media_c,
  round(avg(precipitation_mm), 1)                     as precip_media_mm,
  round(avg(temp_anomaly_c), 2)                       as anomalia_media_c
from weather_dw.mart_climate__daily_facts
where date >= current_date - interval '30 days'
group by region
order by temp_media_c desc`),i(26,B=`select
  region                                              as regiao,
  count(distinct location_id)                         as cidades,
  round(avg(temp_avg_c), 1)                           as temp_media_c,
  round(avg(precipitation_mm), 1)                     as precip_media_mm,
  round(avg(temp_anomaly_c), 2)                       as anomalia_media_c
from weather_dw.mart_climate__daily_facts
where date >= current_date - interval '30 days'
group by region
order by temp_media_c desc`),i(29,J=ae`select
  city_name                                           as cidade,
  state_name,
  max(date)                                           as ultimo_dado,
  max(_extracted_at)                                  as ultima_coleta
from weather_dw.mart_climate__daily_facts
group by city_name, state_name
order by ultima_coleta desc
limit 10`),i(30,P=`select
  city_name                                           as cidade,
  state_name,
  max(date)                                           as ultimo_dado,
  max(_extracted_at)                                  as ultima_coleta
from weather_dw.mart_climate__daily_facts
group by city_name, state_name
order by ultima_coleta desc
limit 10`),[I,Se,de,he,Te,Pe,_,l,b,oe,ne,Fe,O,Q,ce,me,j,re,W,be,x,V,fe,K,N,X,B,Y,U,J,P,Ee,t]}class pa extends It{constructor(a){super(),zt(this,a,ra,ia,Dt,{data:6},null,[-1,-1])}}export{pa as component};
