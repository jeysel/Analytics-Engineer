import{s as fa,d as m,i as d,a as Oe,b as v,c as f,h as pa,e as b,f as je,g as qe,j as p,k as w,l as ia,m as va,o as ga,n as ya,p as $a,q as Ie,r as ba,t as wa,u as ha}from"../chunks/scheduler.BiECNykD.js";import{S as Ta,i as ka,d as A,t as g,a as c,c as Me,m as D,b as I,e as S,g as Ee}from"../chunks/index.DMIfMoOS.js";import{e as Ra,s as qa,Q as Ce,p as Ma,a as ra,r as sa,C as Ea}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.Dv51r1Xw.js";import{w as Ca}from"../chunks/entry.Dq6lVjE5.js";import{h as O,p as Fa}from"../chunks/button.DTlM0ogI.js";import{D as Qe,Q as Fe}from"../chunks/getCompletedData.Cmkm-dWJ.js";import{p as Ha}from"../chunks/stores.CPiwfCsI.js";import{B as Ne}from"../chunks/BigValue.C1zD3xGY.js";import{L as Aa}from"../chunks/LineChart.B6NPgl-E.js";import{B as Da}from"../chunks/BubbleMap.D5tZN-hv.js";function Ia(n){let t,i=y.title+"",a;return{c(){t=w("h1"),a=ha(i),this.h()},l(l){t=b(l,"H1",{class:!0});var _=ba(t);a=wa(_,i),_.forEach(m),this.h()},h(){v(t,"class","title")},m(l,_){d(l,t,_),Oe(t,a)},p:Ie,d(l){l&&m(t)}}}function Sa(n){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:Ie,p:Ie,d:Ie}}function La(n){let t,i,a,l,_;return document.title=t=y.title,{c(){i=p(),a=w("meta"),l=p(),_=w("meta"),this.h()},l(s){i=f(s),a=b(s,"META",{property:!0,content:!0}),l=f(s),_=b(s,"META",{name:!0,content:!0}),this.h()},h(){var s,u;v(a,"property","og:title"),v(a,"content",((s=y.og)==null?void 0:s.title)??y.title),v(_,"name","twitter:title"),v(_,"content",((u=y.og)==null?void 0:u.title)??y.title)},m(s,u){d(s,i,u),d(s,a,u),d(s,l,u),d(s,_,u)},p(s,u){u&0&&t!==(t=y.title)&&(document.title=t)},d(s){s&&(m(i),m(a),m(l),m(_))}}}function Na(n){var _,s;let t,i,a=(y.description||((_=y.og)==null?void 0:_.description))&&Va(),l=((s=y.og)==null?void 0:s.image)&&Pa();return{c(){a&&a.c(),t=p(),l&&l.c(),i=je()},l(u){a&&a.l(u),t=f(u),l&&l.l(u),i=je()},m(u,h){a&&a.m(u,h),d(u,t,h),l&&l.m(u,h),d(u,i,h)},p(u,h){var o,j;(y.description||(o=y.og)!=null&&o.description)&&a.p(u,h),(j=y.og)!=null&&j.image&&l.p(u,h)},d(u){u&&(m(t),m(i)),a&&a.d(u),l&&l.d(u)}}}function Va(n){let t,i,a,l,_;return{c(){t=w("meta"),i=p(),a=w("meta"),l=p(),_=w("meta"),this.h()},l(s){t=b(s,"META",{name:!0,content:!0}),i=f(s),a=b(s,"META",{property:!0,content:!0}),l=f(s),_=b(s,"META",{name:!0,content:!0}),this.h()},h(){var s,u,h;v(t,"name","description"),v(t,"content",y.description??((s=y.og)==null?void 0:s.description)),v(a,"property","og:description"),v(a,"content",((u=y.og)==null?void 0:u.description)??y.description),v(_,"name","twitter:description"),v(_,"content",((h=y.og)==null?void 0:h.description)??y.description)},m(s,u){d(s,t,u),d(s,i,u),d(s,a,u),d(s,l,u),d(s,_,u)},p:Ie,d(s){s&&(m(t),m(i),m(a),m(l),m(_))}}}function Pa(n){let t,i,a;return{c(){t=w("meta"),i=p(),a=w("meta"),this.h()},l(l){t=b(l,"META",{property:!0,content:!0}),i=f(l),a=b(l,"META",{name:!0,content:!0}),this.h()},h(){var l,_;v(t,"property","og:image"),v(t,"content",ra((l=y.og)==null?void 0:l.image)),v(a,"name","twitter:image"),v(a,"content",ra((_=y.og)==null?void 0:_.image))},m(l,_){d(l,t,_),d(l,i,_),d(l,a,_)},p:Ie,d(l){l&&(m(t),m(i),m(a))}}}function oa(n){let t,i;return t=new Fe({props:{queryID:"mesorregioes",queryResult:n[0]}}),{c(){S(t.$$.fragment)},l(a){I(t.$$.fragment,a)},m(a,l){D(t,a,l),i=!0},p(a,l){const _={};l[0]&1&&(_.queryResult=a[0]),t.$set(_)},i(a){i||(c(t.$$.fragment,a),i=!0)},o(a){g(t.$$.fragment,a),i=!1},d(a){A(t,a)}}}function la(n){let t,i;return t=new Fe({props:{queryID:"cidades_disponiveis",queryResult:n[1]}}),{c(){S(t.$$.fragment)},l(a){I(t.$$.fragment,a)},m(a,l){D(t,a,l),i=!0},p(a,l){const _={};l[0]&2&&(_.queryResult=a[1]),t.$set(_)},i(a){i||(c(t.$$.fragment,a),i=!0)},o(a){g(t.$$.fragment,a),i=!1},d(a){A(t,a)}}}function na(n){let t,i;return t=new Fe({props:{queryID:"meses_disponiveis",queryResult:n[2]}}),{c(){S(t.$$.fragment)},l(a){I(t.$$.fragment,a)},m(a,l){D(t,a,l),i=!0},p(a,l){const _={};l[0]&4&&(_.queryResult=a[2]),t.$set(_)},i(a){i||(c(t.$$.fragment,a),i=!0)},o(a){g(t.$$.fragment,a),i=!1},d(a){A(t,a)}}}function ma(n){let t,i;return t=new Fe({props:{queryID:"mes_mais_recente",queryResult:n[3]}}),{c(){S(t.$$.fragment)},l(a){I(t.$$.fragment,a)},m(a,l){D(t,a,l),i=!0},p(a,l){const _={};l[0]&8&&(_.queryResult=a[3]),t.$set(_)},i(a){i||(c(t.$$.fragment,a),i=!0)},o(a){g(t.$$.fragment,a),i=!1},d(a){A(t,a)}}}function _a(n){let t,i;return t=new Fe({props:{queryID:"scorecards",queryResult:n[4]}}),{c(){S(t.$$.fragment)},l(a){I(t.$$.fragment,a)},m(a,l){D(t,a,l),i=!0},p(a,l){const _={};l[0]&16&&(_.queryResult=a[4]),t.$set(_)},i(a){i||(c(t.$$.fragment,a),i=!0)},o(a){g(t.$$.fragment,a),i=!1},d(a){A(t,a)}}}function da(n){let t,i;return t=new Fe({props:{queryID:"serie_diaria",queryResult:n[5]}}),{c(){S(t.$$.fragment)},l(a){I(t.$$.fragment,a)},m(a,l){D(t,a,l),i=!0},p(a,l){const _={};l[0]&32&&(_.queryResult=a[5]),t.$set(_)},i(a){i||(c(t.$$.fragment,a),i=!0)},o(a){g(t.$$.fragment,a),i=!1},d(a){A(t,a)}}}function ua(n){let t,i;return t=new Fe({props:{queryID:"mapa_municipios",queryResult:n[6]}}),{c(){S(t.$$.fragment)},l(a){I(t.$$.fragment,a)},m(a,l){D(t,a,l),i=!0},p(a,l){const _={};l[0]&64&&(_.queryResult=a[6]),t.$set(_)},i(a){i||(c(t.$$.fragment,a),i=!0)},o(a){g(t.$$.fragment,a),i=!1},d(a){A(t,a)}}}function Ua(n){var ze;let t,i,a,l,_,s,u,h,o,j,B,L,G,P,ve,se,oe,U,F,ge='<a href="#visão-geral-climática--santa-catarina">Visão Geral Climática — Santa Catarina</a>',ye,x,He='Santa Catarina concentra ao mesmo tempo alguns dos municípios mais frios do Brasil e regiões de calor intenso no Oeste e no Vale do Itajaí. Esta página responde uma pergunta simples: <strong class="markdown">como está o clima no mês selecionado, comparado ao que é esperado para esta época?</strong>',K,Q,le,X,$e,Y,J,N,ne,Z,be,ee,ae,W,me,z,Ae='<a href="#temperatura-média-diária-e-desvio-histórico">Temperatura Média Diária e Desvio Histórico</a>',we,V,_e="A linha azul mostra a temperatura média diária no período. A linha laranja indica o desvio em relação à média dos últimos 30 dias — valores positivos significam dias mais quentes que o normal histórico recente; negativos, mais frios.",de,te,he,ce,ie,H,Te='<a href="#temperatura-média-por-município">Temperatura Média por Município</a>',ke,re,De="O mapa mostra onde está mais quente ou mais frio no estado. O tamanho de cada bolha representa a amplitude térmica do município — quão diferente foi a temperatura entre máxima e mínima no período. A Serra Catarinense e o Oeste costumam apresentar os maiores contrastes.",$,ue,Ve,Se,Pe,Re,We='<strong class="markdown">Navegação:</strong> <a href="/Analytics-Engineer/Weather-Analytics/temperatura" class="markdown">Temperatura</a> · <a href="/Analytics-Engineer/Weather-Analytics/precipitacao" class="markdown">Precipitação</a> · <a href="/Analytics-Engineer/Weather-Analytics/alertas" class="markdown">Alertas</a> · <a href="/Analytics-Engineer/Weather-Analytics/horario" class="markdown">Horário</a>',Ue,fe=typeof y<"u"&&y.title&&y.hide_title!==!0&&Ia();function ca(e,r){return typeof y<"u"&&y.title?La:Sa}let Le=ca()(n),pe=typeof y=="object"&&Na(),T=n[0]&&oa(n),k=n[1]&&la(n),R=n[2]&&na(n),q=n[3]&&ma(n);j=new Qe({props:{name:"mesoregiao",data:n[0],value:"value",label:"label",title:"Mesorregião",defaultValue:"Todas"}}),L=new Qe({props:{name:"cidade",data:n[1],value:"value",label:"label",title:"Município",defaultValue:"Todas"}}),P=new Qe({props:{name:"ano_mes",data:n[2],value:"value",label:"label",title:"Mês/Ano",defaultValue:(ze=n[3][0])==null?void 0:ze.value}});let M=n[4]&&_a(n),E=n[5]&&da(n),C=n[6]&&ua(n);return X=new Ne({props:{data:n[4],value:"temp_maxima",title:"Temperatura Máxima",fmt:"0.0°C"}}),Y=new Ne({props:{data:n[4],value:"temp_minima",title:"Temperatura Mínima",fmt:"0.0°C"}}),N=new Ne({props:{data:n[4],value:"temp_media",title:"Temperatura Média",fmt:"0.0°C"}}),Z=new Ne({props:{data:n[4],value:"precip_acumulada_mm",title:"Precipitação Acumulada",fmt:"0.0mm"}}),ee=new Ne({props:{data:n[4],value:"anomalia_media",title:"Anomalia Média",fmt:"+0.00;-0.00°C"}}),te=new Aa({props:{data:n[5],x:"date",y:["temp_media_c","anomalia_c"],yAxisTitle:"Temperatura (°C)",xFmt:"dd/MM/yyyy",labels:!0,colorPalette:["#4A90D9","#FF6B35"]}}),ue=new Da({props:{data:n[6],lat:"latitude",long:"longitude",size:"amplitude_media_c",value:"temp_media_c",pointName:"city_name",valueFmt:"0.0°C",title:"Temperatura média por município (tamanho = amplitude térmica)"}}),{c(){fe&&fe.c(),t=p(),Le.c(),i=w("meta"),a=w("meta"),pe&&pe.c(),l=je(),_=p(),T&&T.c(),s=p(),k&&k.c(),u=p(),R&&R.c(),h=p(),q&&q.c(),o=p(),S(j.$$.fragment),B=p(),S(L.$$.fragment),G=p(),S(P.$$.fragment),ve=p(),M&&M.c(),se=p(),E&&E.c(),oe=p(),C&&C.c(),U=p(),F=w("h1"),F.innerHTML=ge,ye=p(),x=w("p"),x.innerHTML=He,K=p(),Q=w("hr"),le=p(),S(X.$$.fragment),$e=p(),S(Y.$$.fragment),J=p(),S(N.$$.fragment),ne=p(),S(Z.$$.fragment),be=p(),S(ee.$$.fragment),ae=p(),W=w("hr"),me=p(),z=w("h2"),z.innerHTML=Ae,we=p(),V=w("p"),V.textContent=_e,de=p(),S(te.$$.fragment),he=p(),ce=w("hr"),ie=p(),H=w("h2"),H.innerHTML=Te,ke=p(),re=w("p"),re.textContent=De,$=p(),S(ue.$$.fragment),Ve=p(),Se=w("hr"),Pe=p(),Re=w("p"),Re.innerHTML=We,this.h()},l(e){fe&&fe.l(e),t=f(e);const r=pa("svelte-2igo1p",document.head);Le.l(r),i=b(r,"META",{name:!0,content:!0}),a=b(r,"META",{name:!0,content:!0}),pe&&pe.l(r),l=je(),r.forEach(m),_=f(e),T&&T.l(e),s=f(e),k&&k.l(e),u=f(e),R&&R.l(e),h=f(e),q&&q.l(e),o=f(e),I(j.$$.fragment,e),B=f(e),I(L.$$.fragment,e),G=f(e),I(P.$$.fragment,e),ve=f(e),M&&M.l(e),se=f(e),E&&E.l(e),oe=f(e),C&&C.l(e),U=f(e),F=b(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),qe(F)!=="svelte-1x6zj0c"&&(F.innerHTML=ge),ye=f(e),x=b(e,"P",{class:!0,"data-svelte-h":!0}),qe(x)!=="svelte-w5kfsr"&&(x.innerHTML=He),K=f(e),Q=b(e,"HR",{class:!0}),le=f(e),I(X.$$.fragment,e),$e=f(e),I(Y.$$.fragment,e),J=f(e),I(N.$$.fragment,e),ne=f(e),I(Z.$$.fragment,e),be=f(e),I(ee.$$.fragment,e),ae=f(e),W=b(e,"HR",{class:!0}),me=f(e),z=b(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),qe(z)!=="svelte-a5lw17"&&(z.innerHTML=Ae),we=f(e),V=b(e,"P",{class:!0,"data-svelte-h":!0}),qe(V)!=="svelte-trmk92"&&(V.textContent=_e),de=f(e),I(te.$$.fragment,e),he=f(e),ce=b(e,"HR",{class:!0}),ie=f(e),H=b(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),qe(H)!=="svelte-1sy42e4"&&(H.innerHTML=Te),ke=f(e),re=b(e,"P",{class:!0,"data-svelte-h":!0}),qe(re)!=="svelte-1eesus5"&&(re.textContent=De),$=f(e),I(ue.$$.fragment,e),Ve=f(e),Se=b(e,"HR",{class:!0}),Pe=f(e),Re=b(e,"P",{class:!0,"data-svelte-h":!0}),qe(Re)!=="svelte-1fkzg89"&&(Re.innerHTML=We),this.h()},h(){v(i,"name","twitter:card"),v(i,"content","summary_large_image"),v(a,"name","twitter:site"),v(a,"content","@evidence_dev"),v(F,"class","markdown"),v(F,"id","visão-geral-climática--santa-catarina"),v(x,"class","markdown"),v(Q,"class","markdown"),v(W,"class","markdown"),v(z,"class","markdown"),v(z,"id","temperatura-média-diária-e-desvio-histórico"),v(V,"class","markdown"),v(ce,"class","markdown"),v(H,"class","markdown"),v(H,"id","temperatura-média-por-município"),v(re,"class","markdown"),v(Se,"class","markdown"),v(Re,"class","markdown")},m(e,r){fe&&fe.m(e,r),d(e,t,r),Le.m(document.head,null),Oe(document.head,i),Oe(document.head,a),pe&&pe.m(document.head,null),Oe(document.head,l),d(e,_,r),T&&T.m(e,r),d(e,s,r),k&&k.m(e,r),d(e,u,r),R&&R.m(e,r),d(e,h,r),q&&q.m(e,r),d(e,o,r),D(j,e,r),d(e,B,r),D(L,e,r),d(e,G,r),D(P,e,r),d(e,ve,r),M&&M.m(e,r),d(e,se,r),E&&E.m(e,r),d(e,oe,r),C&&C.m(e,r),d(e,U,r),d(e,F,r),d(e,ye,r),d(e,x,r),d(e,K,r),d(e,Q,r),d(e,le,r),D(X,e,r),d(e,$e,r),D(Y,e,r),d(e,J,r),D(N,e,r),d(e,ne,r),D(Z,e,r),d(e,be,r),D(ee,e,r),d(e,ae,r),d(e,W,r),d(e,me,r),d(e,z,r),d(e,we,r),d(e,V,r),d(e,de,r),D(te,e,r),d(e,he,r),d(e,ce,r),d(e,ie,r),d(e,H,r),d(e,ke,r),d(e,re,r),d(e,$,r),D(ue,e,r),d(e,Ve,r),d(e,Se,r),d(e,Pe,r),d(e,Re,r),Ue=!0},p(e,r){var ta;typeof y<"u"&&y.title&&y.hide_title!==!0&&fe.p(e,r),Le.p(e,r),typeof y=="object"&&pe.p(e,r),e[0]?T?(T.p(e,r),r[0]&1&&c(T,1)):(T=oa(e),T.c(),c(T,1),T.m(s.parentNode,s)):T&&(Ee(),g(T,1,1,()=>{T=null}),Me()),e[1]?k?(k.p(e,r),r[0]&2&&c(k,1)):(k=la(e),k.c(),c(k,1),k.m(u.parentNode,u)):k&&(Ee(),g(k,1,1,()=>{k=null}),Me()),e[2]?R?(R.p(e,r),r[0]&4&&c(R,1)):(R=na(e),R.c(),c(R,1),R.m(h.parentNode,h)):R&&(Ee(),g(R,1,1,()=>{R=null}),Me()),e[3]?q?(q.p(e,r),r[0]&8&&c(q,1)):(q=ma(e),q.c(),c(q,1),q.m(o.parentNode,o)):q&&(Ee(),g(q,1,1,()=>{q=null}),Me());const Ge={};r[0]&1&&(Ge.data=e[0]),j.$set(Ge);const xe={};r[0]&2&&(xe.data=e[1]),L.$set(xe);const Be={};r[0]&4&&(Be.data=e[2]),r[0]&8&&(Be.defaultValue=(ta=e[3][0])==null?void 0:ta.value),P.$set(Be),e[4]?M?(M.p(e,r),r[0]&16&&c(M,1)):(M=_a(e),M.c(),c(M,1),M.m(se.parentNode,se)):M&&(Ee(),g(M,1,1,()=>{M=null}),Me()),e[5]?E?(E.p(e,r),r[0]&32&&c(E,1)):(E=da(e),E.c(),c(E,1),E.m(oe.parentNode,oe)):E&&(Ee(),g(E,1,1,()=>{E=null}),Me()),e[6]?C?(C.p(e,r),r[0]&64&&c(C,1)):(C=ua(e),C.c(),c(C,1),C.m(U.parentNode,U)):C&&(Ee(),g(C,1,1,()=>{C=null}),Me());const Ke={};r[0]&16&&(Ke.data=e[4]),X.$set(Ke);const Xe={};r[0]&16&&(Xe.data=e[4]),Y.$set(Xe);const Ye={};r[0]&16&&(Ye.data=e[4]),N.$set(Ye);const Je={};r[0]&16&&(Je.data=e[4]),Z.$set(Je);const Ze={};r[0]&16&&(Ze.data=e[4]),ee.$set(Ze);const ea={};r[0]&32&&(ea.data=e[5]),te.$set(ea);const aa={};r[0]&64&&(aa.data=e[6]),ue.$set(aa)},i(e){Ue||(c(T),c(k),c(R),c(q),c(j.$$.fragment,e),c(L.$$.fragment,e),c(P.$$.fragment,e),c(M),c(E),c(C),c(X.$$.fragment,e),c(Y.$$.fragment,e),c(N.$$.fragment,e),c(Z.$$.fragment,e),c(ee.$$.fragment,e),c(te.$$.fragment,e),c(ue.$$.fragment,e),Ue=!0)},o(e){g(T),g(k),g(R),g(q),g(j.$$.fragment,e),g(L.$$.fragment,e),g(P.$$.fragment,e),g(M),g(E),g(C),g(X.$$.fragment,e),g(Y.$$.fragment,e),g(N.$$.fragment,e),g(Z.$$.fragment,e),g(ee.$$.fragment,e),g(te.$$.fragment,e),g(ue.$$.fragment,e),Ue=!1},d(e){e&&(m(t),m(_),m(s),m(u),m(h),m(o),m(B),m(G),m(ve),m(se),m(oe),m(U),m(F),m(ye),m(x),m(K),m(Q),m(le),m($e),m(J),m(ne),m(be),m(ae),m(W),m(me),m(z),m(we),m(V),m(de),m(he),m(ce),m(ie),m(H),m(ke),m(re),m($),m(Ve),m(Se),m(Pe),m(Re)),fe&&fe.d(e),Le.d(e),m(i),m(a),pe&&pe.d(e),m(l),T&&T.d(e),k&&k.d(e),R&&R.d(e),q&&q.d(e),A(j,e),A(L,e),A(P,e),M&&M.d(e),E&&E.d(e),C&&C.d(e),A(X,e),A(Y,e),A(N,e),A(Z,e),A(ee,e),A(te,e),A(ue,e)}}}const y={title:"Weather Analytics — Visão Geral"};function Oa(n,t,i){let a,l;ia(n,Ha,$=>i(38,a=$)),ia(n,sa,$=>i(43,l=$));let{data:_}=t,{data:s={},customFormattingSettings:u,__db:h,inputs:o}=_;va(sa,l="6666cd76f96956469e7be39d750cc7d9",l);let j=Ra(Ca(o));ga(j.subscribe($=>i(9,o=$))),ya(Ea,{getCustomFormats:()=>u.customFormats||[]});const B=($,ue)=>Fa(h.query,$,{query_name:ue});qa(B),a.params,$a(()=>!0);let L={initialData:void 0,initialError:void 0},G=O`select value, label from (
  select 'Todas' as value, 'Todas as Mesorregiões' as label, 0 as ord
  union all
  select distinct mesoregion as value, mesoregion as label, 1 as ord
  from weather_dw.mart_climate__daily_facts
)
order by ord, label`,P=`select value, label from (
  select 'Todas' as value, 'Todas as Mesorregiões' as label, 0 as ord
  union all
  select distinct mesoregion as value, mesoregion as label, 1 as ord
  from weather_dw.mart_climate__daily_facts
)
order by ord, label`;s.mesorregioes_data&&(s.mesorregioes_data instanceof Error?L.initialError=s.mesorregioes_data:L.initialData=s.mesorregioes_data,s.mesorregioes_columns&&(L.knownColumns=s.mesorregioes_columns));let ve,se=!1;const oe=Ce.createReactive({callback:$=>{i(0,ve=$)},execFn:B},{id:"mesorregioes",...L});oe(P,{noResolve:G,...L}),globalThis[Symbol.for("mesorregioes")]={get value(){return ve}};let U={initialData:void 0,initialError:void 0},F=O`select value, label from (
  select 'Todas' as value, 'Todos os Municípios' as label, 0 as ord
  union all
  select distinct location_id as value, city_name as label, 1 as ord
  from weather_dw.mart_climate__daily_facts
  where ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
)
order by ord, label`,ge=`select value, label from (
  select 'Todas' as value, 'Todos os Municípios' as label, 0 as ord
  union all
  select distinct location_id as value, city_name as label, 1 as ord
  from weather_dw.mart_climate__daily_facts
  where ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
)
order by ord, label`;s.cidades_disponiveis_data&&(s.cidades_disponiveis_data instanceof Error?U.initialError=s.cidades_disponiveis_data:U.initialData=s.cidades_disponiveis_data,s.cidades_disponiveis_columns&&(U.knownColumns=s.cidades_disponiveis_columns));let ye,x=!1;const He=Ce.createReactive({callback:$=>{i(1,ye=$)},execFn:B},{id:"cidades_disponiveis",...U});He(ge,{noResolve:F,...U}),globalThis[Symbol.for("cidades_disponiveis")]={get value(){return ye}};let K={initialData:void 0,initialError:void 0},Q=O`select distinct
  year_month as value,
  year_month as label
from weather_dw.mart_climate__daily_facts
order by year_month desc
limit 24`,le=`select distinct
  year_month as value,
  year_month as label
from weather_dw.mart_climate__daily_facts
order by year_month desc
limit 24`;s.meses_disponiveis_data&&(s.meses_disponiveis_data instanceof Error?K.initialError=s.meses_disponiveis_data:K.initialData=s.meses_disponiveis_data,s.meses_disponiveis_columns&&(K.knownColumns=s.meses_disponiveis_columns));let X,$e=!1;const Y=Ce.createReactive({callback:$=>{i(2,X=$)},execFn:B},{id:"meses_disponiveis",...K});Y(le,{noResolve:Q,...K}),globalThis[Symbol.for("meses_disponiveis")]={get value(){return X}};let J={initialData:void 0,initialError:void 0},N=O`select max(year_month) as value
from weather_dw.mart_climate__daily_facts`,ne=`select max(year_month) as value
from weather_dw.mart_climate__daily_facts`;s.mes_mais_recente_data&&(s.mes_mais_recente_data instanceof Error?J.initialError=s.mes_mais_recente_data:J.initialData=s.mes_mais_recente_data,s.mes_mais_recente_columns&&(J.knownColumns=s.mes_mais_recente_columns));let Z,be=!1;const ee=Ce.createReactive({callback:$=>{i(3,Z=$)},execFn:B},{id:"mes_mais_recente",...J});ee(ne,{noResolve:N,...J}),globalThis[Symbol.for("mes_mais_recente")]={get value(){return Z}};let ae={initialData:void 0,initialError:void 0},W=O`select
  round(max(temp_max_c), 1)        as temp_maxima,
  round(min(temp_min_c), 1)        as temp_minima,
  round(avg(temp_avg_c), 1)        as temp_media,
  round(sum(precipitation_mm), 1)  as precip_acumulada_mm,
  round(avg(temp_anomaly_c), 2)    as anomalia_media
from weather_dw.mart_climate__daily_facts
where (year_month = '${o.ano_mes.value}' or length('${o.ano_mes.value}') != 7)
  and ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
  and ('${o.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${o.cidade.value}')`,me=`select
  round(max(temp_max_c), 1)        as temp_maxima,
  round(min(temp_min_c), 1)        as temp_minima,
  round(avg(temp_avg_c), 1)        as temp_media,
  round(sum(precipitation_mm), 1)  as precip_acumulada_mm,
  round(avg(temp_anomaly_c), 2)    as anomalia_media
from weather_dw.mart_climate__daily_facts
where (year_month = '${o.ano_mes.value}' or length('${o.ano_mes.value}') != 7)
  and ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
  and ('${o.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${o.cidade.value}')`;s.scorecards_data&&(s.scorecards_data instanceof Error?ae.initialError=s.scorecards_data:ae.initialData=s.scorecards_data,s.scorecards_columns&&(ae.knownColumns=s.scorecards_columns));let z,Ae=!1;const we=Ce.createReactive({callback:$=>{i(4,z=$)},execFn:B},{id:"scorecards",...ae});we(me,{noResolve:W,...ae}),globalThis[Symbol.for("scorecards")]={get value(){return z}};let V={initialData:void 0,initialError:void 0},_e=O`select
  date,
  round(avg(temp_avg_c), 1)     as temp_media_c,
  round(avg(temp_anomaly_c), 2) as anomalia_c
from weather_dw.mart_climate__daily_facts
where (year_month = '${o.ano_mes.value}' or length('${o.ano_mes.value}') != 7)
  and ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
  and ('${o.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${o.cidade.value}')
group by date
order by date`,de=`select
  date,
  round(avg(temp_avg_c), 1)     as temp_media_c,
  round(avg(temp_anomaly_c), 2) as anomalia_c
from weather_dw.mart_climate__daily_facts
where (year_month = '${o.ano_mes.value}' or length('${o.ano_mes.value}') != 7)
  and ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
  and ('${o.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${o.cidade.value}')
group by date
order by date`;s.serie_diaria_data&&(s.serie_diaria_data instanceof Error?V.initialError=s.serie_diaria_data:V.initialData=s.serie_diaria_data,s.serie_diaria_columns&&(V.knownColumns=s.serie_diaria_columns));let te,he=!1;const ce=Ce.createReactive({callback:$=>{i(5,te=$)},execFn:B},{id:"serie_diaria",...V});ce(de,{noResolve:_e,...V}),globalThis[Symbol.for("serie_diaria")]={get value(){return te}};let ie={initialData:void 0,initialError:void 0},H=O`select
  city_name,
  mesoregion,
  round(avg(latitude), 4)          as latitude,
  round(avg(longitude), 4)         as longitude,
  round(avg(temp_avg_c), 1)        as temp_media_c,
  round(avg(temp_amplitude_c), 1)  as amplitude_media_c
from weather_dw.mart_climate__daily_facts
where (year_month = '${o.ano_mes.value}' or length('${o.ano_mes.value}') != 7)
  and ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
group by city_name, mesoregion`,Te=`select
  city_name,
  mesoregion,
  round(avg(latitude), 4)          as latitude,
  round(avg(longitude), 4)         as longitude,
  round(avg(temp_avg_c), 1)        as temp_media_c,
  round(avg(temp_amplitude_c), 1)  as amplitude_media_c
from weather_dw.mart_climate__daily_facts
where (year_month = '${o.ano_mes.value}' or length('${o.ano_mes.value}') != 7)
  and ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
group by city_name, mesoregion`;s.mapa_municipios_data&&(s.mapa_municipios_data instanceof Error?ie.initialError=s.mapa_municipios_data:ie.initialData=s.mapa_municipios_data,s.mapa_municipios_columns&&(ie.knownColumns=s.mapa_municipios_columns));let ke,re=!1;const De=Ce.createReactive({callback:$=>{i(6,ke=$)},execFn:B},{id:"mapa_municipios",...ie});return De(Te,{noResolve:H,...ie}),globalThis[Symbol.for("mapa_municipios")]={get value(){return ke}},n.$$set=$=>{"data"in $&&i(7,_=$.data)},n.$$.update=()=>{n.$$.dirty[0]&128&&i(8,{data:s={},customFormattingSettings:u,__db:h}=_,s),n.$$.dirty[0]&256&&Ma.set(Object.keys(s).length>0),n.$$.dirty[1]&128&&a.params,n.$$.dirty[0]&15360&&(G||!se?G||(oe(P,{noResolve:G,...L}),i(13,se=!0)):oe(P,{noResolve:G})),n.$$.dirty[0]&512&&i(15,F=O`select value, label from (
  select 'Todas' as value, 'Todos os Municípios' as label, 0 as ord
  union all
  select distinct location_id as value, city_name as label, 1 as ord
  from weather_dw.mart_climate__daily_facts
  where ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
)
order by ord, label`),n.$$.dirty[0]&512&&i(16,ge=`select value, label from (
  select 'Todas' as value, 'Todos os Municípios' as label, 0 as ord
  union all
  select distinct location_id as value, city_name as label, 1 as ord
  from weather_dw.mart_climate__daily_facts
  where ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
)
order by ord, label`),n.$$.dirty[0]&245760&&(F||!x?F||(He(ge,{noResolve:F,...U}),i(17,x=!0)):He(ge,{noResolve:F})),n.$$.dirty[0]&3932160&&(Q||!$e?Q||(Y(le,{noResolve:Q,...K}),i(21,$e=!0)):Y(le,{noResolve:Q})),n.$$.dirty[0]&62914560&&(N||!be?N||(ee(ne,{noResolve:N,...J}),i(25,be=!0)):ee(ne,{noResolve:N})),n.$$.dirty[0]&512&&i(27,W=O`select
  round(max(temp_max_c), 1)        as temp_maxima,
  round(min(temp_min_c), 1)        as temp_minima,
  round(avg(temp_avg_c), 1)        as temp_media,
  round(sum(precipitation_mm), 1)  as precip_acumulada_mm,
  round(avg(temp_anomaly_c), 2)    as anomalia_media
from weather_dw.mart_climate__daily_facts
where (year_month = '${o.ano_mes.value}' or length('${o.ano_mes.value}') != 7)
  and ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
  and ('${o.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${o.cidade.value}')`),n.$$.dirty[0]&512&&i(28,me=`select
  round(max(temp_max_c), 1)        as temp_maxima,
  round(min(temp_min_c), 1)        as temp_minima,
  round(avg(temp_avg_c), 1)        as temp_media,
  round(sum(precipitation_mm), 1)  as precip_acumulada_mm,
  round(avg(temp_anomaly_c), 2)    as anomalia_media
from weather_dw.mart_climate__daily_facts
where (year_month = '${o.ano_mes.value}' or length('${o.ano_mes.value}') != 7)
  and ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
  and ('${o.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${o.cidade.value}')`),n.$$.dirty[0]&1006632960&&(W||!Ae?W||(we(me,{noResolve:W,...ae}),i(29,Ae=!0)):we(me,{noResolve:W})),n.$$.dirty[0]&512&&i(31,_e=O`select
  date,
  round(avg(temp_avg_c), 1)     as temp_media_c,
  round(avg(temp_anomaly_c), 2) as anomalia_c
from weather_dw.mart_climate__daily_facts
where (year_month = '${o.ano_mes.value}' or length('${o.ano_mes.value}') != 7)
  and ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
  and ('${o.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${o.cidade.value}')
group by date
order by date`),n.$$.dirty[0]&512&&i(32,de=`select
  date,
  round(avg(temp_avg_c), 1)     as temp_media_c,
  round(avg(temp_anomaly_c), 2) as anomalia_c
from weather_dw.mart_climate__daily_facts
where (year_month = '${o.ano_mes.value}' or length('${o.ano_mes.value}') != 7)
  and ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
  and ('${o.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${o.cidade.value}')
group by date
order by date`),n.$$.dirty[0]&1073741824|n.$$.dirty[1]&7&&(_e||!he?_e||(ce(de,{noResolve:_e,...V}),i(33,he=!0)):ce(de,{noResolve:_e})),n.$$.dirty[0]&512&&i(35,H=O`select
  city_name,
  mesoregion,
  round(avg(latitude), 4)          as latitude,
  round(avg(longitude), 4)         as longitude,
  round(avg(temp_avg_c), 1)        as temp_media_c,
  round(avg(temp_amplitude_c), 1)  as amplitude_media_c
from weather_dw.mart_climate__daily_facts
where (year_month = '${o.ano_mes.value}' or length('${o.ano_mes.value}') != 7)
  and ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
group by city_name, mesoregion`),n.$$.dirty[0]&512&&i(36,Te=`select
  city_name,
  mesoregion,
  round(avg(latitude), 4)          as latitude,
  round(avg(longitude), 4)         as longitude,
  round(avg(temp_avg_c), 1)        as temp_media_c,
  round(avg(temp_amplitude_c), 1)  as amplitude_media_c
from weather_dw.mart_climate__daily_facts
where (year_month = '${o.ano_mes.value}' or length('${o.ano_mes.value}') != 7)
  and ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
group by city_name, mesoregion`),n.$$.dirty[1]&120&&(H||!re?H||(De(Te,{noResolve:H,...ie}),i(37,re=!0)):De(Te,{noResolve:H}))},i(11,G=O`select value, label from (
  select 'Todas' as value, 'Todas as Mesorregiões' as label, 0 as ord
  union all
  select distinct mesoregion as value, mesoregion as label, 1 as ord
  from weather_dw.mart_climate__daily_facts
)
order by ord, label`),i(12,P=`select value, label from (
  select 'Todas' as value, 'Todas as Mesorregiões' as label, 0 as ord
  union all
  select distinct mesoregion as value, mesoregion as label, 1 as ord
  from weather_dw.mart_climate__daily_facts
)
order by ord, label`),i(19,Q=O`select distinct
  year_month as value,
  year_month as label
from weather_dw.mart_climate__daily_facts
order by year_month desc
limit 24`),i(20,le=`select distinct
  year_month as value,
  year_month as label
from weather_dw.mart_climate__daily_facts
order by year_month desc
limit 24`),i(23,N=O`select max(year_month) as value
from weather_dw.mart_climate__daily_facts`),i(24,ne=`select max(year_month) as value
from weather_dw.mart_climate__daily_facts`),[ve,ye,X,Z,z,te,ke,_,s,o,L,G,P,se,U,F,ge,x,K,Q,le,$e,J,N,ne,be,ae,W,me,Ae,V,_e,de,he,ie,H,Te,re,a]}class Za extends Ta{constructor(t){super(),ka(this,t,Oa,Ua,fa,{data:7},null,[-1,-1])}}export{Za as component};
