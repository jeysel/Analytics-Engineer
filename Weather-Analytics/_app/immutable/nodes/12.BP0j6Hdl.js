import{s as Ya,d as n,i as _,a as ua,b as $,c as p,h as Ga,e as C,f as ca,g as $e,j as g,k as q,l as Ha,m as Ja,o as Ka,n as Za,p as et,q as Xe,r as at,t as tt,u as it}from"../chunks/scheduler.BiECNykD.js";import{S as rt,i as mt,d as b,t as v,a as u,c as ke,m as h,b as T,e as k,g as xe}from"../chunks/index.DMIfMoOS.js";import{D as ot,e as st,s as lt,Q as Re,p as nt,b as ta,a as Ia,r as Sa,C as _t}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.Dv51r1Xw.js";import{w as dt}from"../chunks/entry.Dq6lVjE5.js";import{h as P,p as ut}from"../chunks/button.DTlM0ogI.js";import{D as ia,Q as Ce}from"../chunks/getCompletedData.Cmkm-dWJ.js";import{p as ct}from"../chunks/stores.CPiwfCsI.js";import{B as La}from"../chunks/BarChart.BQNmjtVm.js";import{B as ra}from"../chunks/BigValue.C1zD3xGY.js";import{L as Na}from"../chunks/LineChart.B6NPgl-E.js";function ft(s){let t,r=w.title+"",a;return{c(){t=q("h1"),a=it(r),this.h()},l(l){t=C(l,"H1",{class:!0});var d=at(t);a=tt(d,r),d.forEach(n),this.h()},h(){$(t,"class","title")},m(l,d){_(l,t,d),ua(t,a)},p:Xe,d(l){l&&n(t)}}}function pt(s){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:Xe,p:Xe,d:Xe}}function gt(s){let t,r,a,l,d;return document.title=t=w.title,{c(){r=g(),a=q("meta"),l=g(),d=q("meta"),this.h()},l(o){r=p(o),a=C(o,"META",{property:!0,content:!0}),l=p(o),d=C(o,"META",{name:!0,content:!0}),this.h()},h(){var o,f;$(a,"property","og:title"),$(a,"content",((o=w.og)==null?void 0:o.title)??w.title),$(d,"name","twitter:title"),$(d,"content",((f=w.og)==null?void 0:f.title)??w.title)},m(o,f){_(o,r,f),_(o,a,f),_(o,l,f),_(o,d,f)},p(o,f){f&0&&t!==(t=w.title)&&(document.title=t)},d(o){o&&(n(r),n(a),n(l),n(d))}}}function vt(s){var d,o;let t,r,a=(w.description||((d=w.og)==null?void 0:d.description))&&$t(),l=((o=w.og)==null?void 0:o.image)&&yt();return{c(){a&&a.c(),t=g(),l&&l.c(),r=ca()},l(f){a&&a.l(f),t=p(f),l&&l.l(f),r=ca()},m(f,R){a&&a.m(f,R),_(f,t,R),l&&l.m(f,R),_(f,r,R)},p(f,R){var m,N;(w.description||(m=w.og)!=null&&m.description)&&a.p(f,R),(N=w.og)!=null&&N.image&&l.p(f,R)},d(f){f&&(n(t),n(r)),a&&a.d(f),l&&l.d(f)}}}function $t(s){let t,r,a,l,d;return{c(){t=q("meta"),r=g(),a=q("meta"),l=g(),d=q("meta"),this.h()},l(o){t=C(o,"META",{name:!0,content:!0}),r=p(o),a=C(o,"META",{property:!0,content:!0}),l=p(o),d=C(o,"META",{name:!0,content:!0}),this.h()},h(){var o,f,R;$(t,"name","description"),$(t,"content",w.description??((o=w.og)==null?void 0:o.description)),$(a,"property","og:description"),$(a,"content",((f=w.og)==null?void 0:f.description)??w.description),$(d,"name","twitter:description"),$(d,"content",((R=w.og)==null?void 0:R.description)??w.description)},m(o,f){_(o,t,f),_(o,r,f),_(o,a,f),_(o,l,f),_(o,d,f)},p:Xe,d(o){o&&(n(t),n(r),n(a),n(l),n(d))}}}function yt(s){let t,r,a;return{c(){t=q("meta"),r=g(),a=q("meta"),this.h()},l(l){t=C(l,"META",{property:!0,content:!0}),r=p(l),a=C(l,"META",{name:!0,content:!0}),this.h()},h(){var l,d;$(t,"property","og:image"),$(t,"content",Ia((l=w.og)==null?void 0:l.image)),$(a,"name","twitter:image"),$(a,"content",Ia((d=w.og)==null?void 0:d.image))},m(l,d){_(l,t,d),_(l,r,d),_(l,a,d)},p:Xe,d(l){l&&(n(t),n(r),n(a))}}}function Pa(s){let t,r;return t=new Ce({props:{queryID:"mesorregioes",queryResult:s[0]}}),{c(){k(t.$$.fragment)},l(a){T(t.$$.fragment,a)},m(a,l){h(t,a,l),r=!0},p(a,l){const d={};l[0]&1&&(d.queryResult=a[0]),t.$set(d)},i(a){r||(u(t.$$.fragment,a),r=!0)},o(a){v(t.$$.fragment,a),r=!1},d(a){b(t,a)}}}function Ua(s){let t,r;return t=new Ce({props:{queryID:"cidades_disponiveis",queryResult:s[1]}}),{c(){k(t.$$.fragment)},l(a){T(t.$$.fragment,a)},m(a,l){h(t,a,l),r=!0},p(a,l){const d={};l[0]&2&&(d.queryResult=a[1]),t.$set(d)},i(a){r||(u(t.$$.fragment,a),r=!0)},o(a){v(t.$$.fragment,a),r=!1},d(a){b(t,a)}}}function Va(s){let t,r;return t=new Ce({props:{queryID:"meses_disponiveis",queryResult:s[2]}}),{c(){k(t.$$.fragment)},l(a){T(t.$$.fragment,a)},m(a,l){h(t,a,l),r=!0},p(a,l){const d={};l[0]&4&&(d.queryResult=a[2]),t.$set(d)},i(a){r||(u(t.$$.fragment,a),r=!0)},o(a){v(t.$$.fragment,a),r=!1},d(a){b(t,a)}}}function Ba(s){let t,r;return t=new Ce({props:{queryID:"mes_mais_recente",queryResult:s[3]}}),{c(){k(t.$$.fragment)},l(a){T(t.$$.fragment,a)},m(a,l){h(t,a,l),r=!0},p(a,l){const d={};l[0]&8&&(d.queryResult=a[3]),t.$set(d)},i(a){r||(u(t.$$.fragment,a),r=!0)},o(a){v(t.$$.fragment,a),r=!1},d(a){b(t,a)}}}function ja(s){let t,r;return t=new Ce({props:{queryID:"scorecards",queryResult:s[4]}}),{c(){k(t.$$.fragment)},l(a){T(t.$$.fragment,a)},m(a,l){h(t,a,l),r=!0},p(a,l){const d={};l[0]&16&&(d.queryResult=a[4]),t.$set(d)},i(a){r||(u(t.$$.fragment,a),r=!0)},o(a){v(t.$$.fragment,a),r=!1},d(a){b(t,a)}}}function Oa(s){let t,r;return t=new Ce({props:{queryID:"ranking_por_regiao",queryResult:s[5]}}),{c(){k(t.$$.fragment)},l(a){T(t.$$.fragment,a)},m(a,l){h(t,a,l),r=!0},p(a,l){const d={};l[0]&32&&(d.queryResult=a[5]),t.$set(d)},i(a){r||(u(t.$$.fragment,a),r=!0)},o(a){v(t.$$.fragment,a),r=!1},d(a){b(t,a)}}}function Qa(s){let t,r;return t=new Ce({props:{queryID:"amplitude_por_regiao",queryResult:s[6]}}),{c(){k(t.$$.fragment)},l(a){T(t.$$.fragment,a)},m(a,l){h(t,a,l),r=!0},p(a,l){const d={};l[0]&64&&(d.queryResult=a[6]),t.$set(d)},i(a){r||(u(t.$$.fragment,a),r=!0)},o(a){v(t.$$.fragment,a),r=!1},d(a){b(t,a)}}}function Wa(s){let t,r;return t=new Ce({props:{queryID:"serie_comparativa",queryResult:s[7]}}),{c(){k(t.$$.fragment)},l(a){T(t.$$.fragment,a)},m(a,l){h(t,a,l),r=!0},p(a,l){const d={};l[0]&128&&(d.queryResult=a[7]),t.$set(d)},i(a){r||(u(t.$$.fragment,a),r=!0)},o(a){v(t.$$.fragment,a),r=!1},d(a){b(t,a)}}}function za(s){let t,r;return t=new Ce({props:{queryID:"media_geral_sc",queryResult:s[8]}}),{c(){k(t.$$.fragment)},l(a){T(t.$$.fragment,a)},m(a,l){h(t,a,l),r=!0},p(a,l){const d={};l[0]&256&&(d.queryResult=a[8]),t.$set(d)},i(a){r||(u(t.$$.fragment,a),r=!0)},o(a){v(t.$$.fragment,a),r=!1},d(a){b(t,a)}}}function wt(s){let t,r,a,l,d,o,f,R,m,N;return t=new ta({props:{id:"regiao",title:"Região"}}),a=new ta({props:{id:"temp_minima",title:"Mínima (°C)",fmt:"0.0"}}),d=new ta({props:{id:"temp_media",title:"Média (°C)",fmt:"0.0"}}),f=new ta({props:{id:"temp_maxima",title:"Máxima (°C)",fmt:"0.0",contentType:"colorscale"}}),m=new ta({props:{id:"amplitude_media",title:"Amplitude (°C)",fmt:"0.0",contentType:"colorscale"}}),{c(){k(t.$$.fragment),r=g(),k(a.$$.fragment),l=g(),k(d.$$.fragment),o=g(),k(f.$$.fragment),R=g(),k(m.$$.fragment)},l(c){T(t.$$.fragment,c),r=p(c),T(a.$$.fragment,c),l=p(c),T(d.$$.fragment,c),o=p(c),T(f.$$.fragment,c),R=p(c),T(m.$$.fragment,c)},m(c,x){h(t,c,x),_(c,r,x),h(a,c,x),_(c,l,x),h(d,c,x),_(c,o,x),h(f,c,x),_(c,R,x),h(m,c,x),N=!0},p:Xe,i(c){N||(u(t.$$.fragment,c),u(a.$$.fragment,c),u(d.$$.fragment,c),u(f.$$.fragment,c),u(m.$$.fragment,c),N=!0)},o(c){v(t.$$.fragment,c),v(a.$$.fragment,c),v(d.$$.fragment,c),v(f.$$.fragment,c),v(m.$$.fragment,c),N=!1},d(c){c&&(n(r),n(l),n(o),n(R)),b(t,c),b(a,c),b(d,c),b(f,c),b(m,c)}}}function bt(s){var ya;let t,r,a,l,d,o,f,R,m,N,c,x,Z,X,qe,ee,Me,B,ae,te,ce,fe,pe,Y,U,Ee='<a href="#análise-de-temperatura--santa-catarina">Análise de Temperatura — Santa Catarina</a>',Fe,ie,Ye='A temperatura define o conforto térmico, o risco à saúde, a produção agrícola e o consumo de energia. Mas entendê-la exige mais do que saber o máximo do dia: é preciso ver <strong class="markdown">onde está quente, quanto varia e como cada município se comporta ao longo do tempo</strong>.',re,j,De="Santa Catarina é um caso único no Brasil — concentra municípios como São Joaquim e Urupema, entre os mais frios do país, e ao mesmo tempo regiões de calor intenso no Oeste e no Vale do Itajaí. Essa heterogeneidade torna a análise de amplitude térmica especialmente relevante aqui.",Ae,ye,He,O,me,G,Ie,oe,Se,Q,se,J,Le,we,Ne,V,ge='<a href="#temperaturas-máximas-por-região">Temperaturas Máximas por Região</a>',ve,le,Ge="O ranking de regiões é o ponto de partida: quais áreas de Santa Catarina registraram os maiores picos de calor? A distância entre a máxima e a média de cada região revela se o calor foi pontual — um dia de pico isolado — ou se representou um período sustentado de temperaturas elevadas.",Pe,W,ne,ue,Ue,K,Je='<a href="#amplitude-térmica-por-região">Amplitude Térmica por Região</a>',_e,z,Ve="A amplitude térmica — diferença entre máxima e mínima no período — é o indicador de heterogeneidade climática interna. Regiões com alta amplitude têm clima mais continental: noites frias e dias quentes. A Serra Catarinense costuma liderar esse indicador, com impacto direto na agricultura (risco de geada após dias quentes), na saúde pública e no planejamento urbano.",Be,de,je,y,Ke,Ze,ma,be,ga='<a href="#temperatura-máxima-diária--comparativo-por-município">Temperatura Máxima Diária — Comparativo por Município</a>',oa,Oe,va="Selecione até três municípios nos filtros acima para comparar como a temperatura máxima evoluiu ao longo do mês. É possível identificar divergências entre localidades próximas, detectar episódios de calor intenso localizados e acompanhar se a tendência de um município acompanha ou se distancia da média geral do estado.",sa,Qe,la,We,na,ea,_a,ze,$a='<strong class="markdown">Navegação:</strong> <a href="/Analytics-Engineer/Weather-Analytics/" class="markdown">Início</a> · <a href="/Analytics-Engineer/Weather-Analytics/precipitacao" class="markdown">Precipitação</a> · <a href="/Analytics-Engineer/Weather-Analytics/alertas" class="markdown">Alertas</a> · <a href="/Analytics-Engineer/Weather-Analytics/horario" class="markdown">Horário</a>',da,he=typeof w<"u"&&w.title&&w.hide_title!==!0&&ft();function Xa(e,i){return typeof w<"u"&&w.title?gt:pt}let aa=Xa()(s),Te=typeof w=="object"&&vt(),M=s[0]&&Pa(s),E=s[1]&&Ua(s),F=s[2]&&Va(s),D=s[3]&&Ba(s);N=new ia({props:{name:"mesoregiao",data:s[0],value:"value",label:"label",title:"Mesorregião",defaultValue:"Todas"}}),x=new ia({props:{name:"ano_mes",data:s[2],value:"value",label:"label",title:"Mês/Ano",defaultValue:(ya=s[3][0])==null?void 0:ya.value}}),X=new ia({props:{name:"cidade_a",data:s[1],value:"value",label:"label",title:"Município A",defaultValue:"florianopolis"}}),ee=new ia({props:{name:"cidade_b",data:s[1],value:"value",label:"label",title:"Município B",defaultValue:"lages"}}),B=new ia({props:{name:"cidade_c",data:s[1],value:"value",label:"label",title:"Município C (opcional)",defaultValue:"chapeco"}});let A=s[4]&&ja(s),H=s[5]&&Oa(s),I=s[6]&&Qa(s),S=s[7]&&Wa(s),L=s[8]&&za(s);return O=new ra({props:{data:s[4],value:"temp_maxima_abs",title:"Temperatura Máxima",fmt:"0.0°C"}}),G=new ra({props:{data:s[4],value:"temp_minima_abs",title:"Temperatura Mínima",fmt:"0.0°C"}}),oe=new ra({props:{data:s[4],value:"temp_media",title:"Temperatura Média",fmt:"0.0°C"}}),Q=new ra({props:{data:s[4],value:"maior_amplitude",title:"Maior Amplitude",fmt:"0.0°C"}}),J=new ra({props:{data:s[4],value:"municipios_acima_38",title:"Municípios acima de 38°C"}}),W=new La({props:{data:s[5],x:"regiao",y:["temp_maxima","temp_media","temp_minima"],yAxisTitle:"Temperatura (°C)",swapXY:"true",type:"grouped",colorPalette:["#D73027","#FC8D59","#4575B4"]}}),de=new La({props:{data:s[6],x:"regiao",y:"amplitude_media",yAxisTitle:"Amplitude térmica média (°C)",swapXY:"true",colorPalette:["#FC8D59"],labels:!0}}),y=new ot({props:{data:s[6],$$slots:{default:[wt]},$$scope:{ctx:s}}}),Qe=new Na({props:{data:s[7],x:"date",y:"temp_max_c",series:"city_name",yAxisTitle:"Temperatura Máxima (°C)",xFmt:"dd/MM/yyyy",labels:!0}}),We=new Na({props:{data:s[8],x:"date",y:"media_sc",yAxisTitle:"Temperatura Máxima Média — SC (°C)",xFmt:"dd/MM/yyyy",colorPalette:["#999999"],title:"Média geral de Santa Catarina no período"}}),{c(){he&&he.c(),t=g(),aa.c(),r=q("meta"),a=q("meta"),Te&&Te.c(),l=ca(),d=g(),M&&M.c(),o=g(),E&&E.c(),f=g(),F&&F.c(),R=g(),D&&D.c(),m=g(),k(N.$$.fragment),c=g(),k(x.$$.fragment),Z=g(),k(X.$$.fragment),qe=g(),k(ee.$$.fragment),Me=g(),k(B.$$.fragment),ae=g(),A&&A.c(),te=g(),H&&H.c(),ce=g(),I&&I.c(),fe=g(),S&&S.c(),pe=g(),L&&L.c(),Y=g(),U=q("h1"),U.innerHTML=Ee,Fe=g(),ie=q("p"),ie.innerHTML=Ye,re=g(),j=q("p"),j.textContent=De,Ae=g(),ye=q("hr"),He=g(),k(O.$$.fragment),me=g(),k(G.$$.fragment),Ie=g(),k(oe.$$.fragment),Se=g(),k(Q.$$.fragment),se=g(),k(J.$$.fragment),Le=g(),we=q("hr"),Ne=g(),V=q("h2"),V.innerHTML=ge,ve=g(),le=q("p"),le.textContent=Ge,Pe=g(),k(W.$$.fragment),ne=g(),ue=q("hr"),Ue=g(),K=q("h2"),K.innerHTML=Je,_e=g(),z=q("p"),z.textContent=Ve,Be=g(),k(de.$$.fragment),je=g(),k(y.$$.fragment),Ke=g(),Ze=q("hr"),ma=g(),be=q("h2"),be.innerHTML=ga,oa=g(),Oe=q("p"),Oe.textContent=va,sa=g(),k(Qe.$$.fragment),la=g(),k(We.$$.fragment),na=g(),ea=q("hr"),_a=g(),ze=q("p"),ze.innerHTML=$a,this.h()},l(e){he&&he.l(e),t=p(e);const i=Ga("svelte-2igo1p",document.head);aa.l(i),r=C(i,"META",{name:!0,content:!0}),a=C(i,"META",{name:!0,content:!0}),Te&&Te.l(i),l=ca(),i.forEach(n),d=p(e),M&&M.l(e),o=p(e),E&&E.l(e),f=p(e),F&&F.l(e),R=p(e),D&&D.l(e),m=p(e),T(N.$$.fragment,e),c=p(e),T(x.$$.fragment,e),Z=p(e),T(X.$$.fragment,e),qe=p(e),T(ee.$$.fragment,e),Me=p(e),T(B.$$.fragment,e),ae=p(e),A&&A.l(e),te=p(e),H&&H.l(e),ce=p(e),I&&I.l(e),fe=p(e),S&&S.l(e),pe=p(e),L&&L.l(e),Y=p(e),U=C(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),$e(U)!=="svelte-191it1y"&&(U.innerHTML=Ee),Fe=p(e),ie=C(e,"P",{class:!0,"data-svelte-h":!0}),$e(ie)!=="svelte-gciun4"&&(ie.innerHTML=Ye),re=p(e),j=C(e,"P",{class:!0,"data-svelte-h":!0}),$e(j)!=="svelte-1ybssld"&&(j.textContent=De),Ae=p(e),ye=C(e,"HR",{class:!0}),He=p(e),T(O.$$.fragment,e),me=p(e),T(G.$$.fragment,e),Ie=p(e),T(oe.$$.fragment,e),Se=p(e),T(Q.$$.fragment,e),se=p(e),T(J.$$.fragment,e),Le=p(e),we=C(e,"HR",{class:!0}),Ne=p(e),V=C(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),$e(V)!=="svelte-yoy085"&&(V.innerHTML=ge),ve=p(e),le=C(e,"P",{class:!0,"data-svelte-h":!0}),$e(le)!=="svelte-e0zwlb"&&(le.textContent=Ge),Pe=p(e),T(W.$$.fragment,e),ne=p(e),ue=C(e,"HR",{class:!0}),Ue=p(e),K=C(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),$e(K)!=="svelte-abchqs"&&(K.innerHTML=Je),_e=p(e),z=C(e,"P",{class:!0,"data-svelte-h":!0}),$e(z)!=="svelte-u3wl6o"&&(z.textContent=Ve),Be=p(e),T(de.$$.fragment,e),je=p(e),T(y.$$.fragment,e),Ke=p(e),Ze=C(e,"HR",{class:!0}),ma=p(e),be=C(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),$e(be)!=="svelte-1yc3ugm"&&(be.innerHTML=ga),oa=p(e),Oe=C(e,"P",{class:!0,"data-svelte-h":!0}),$e(Oe)!=="svelte-hta4z8"&&(Oe.textContent=va),sa=p(e),T(Qe.$$.fragment,e),la=p(e),T(We.$$.fragment,e),na=p(e),ea=C(e,"HR",{class:!0}),_a=p(e),ze=C(e,"P",{class:!0,"data-svelte-h":!0}),$e(ze)!=="svelte-ibchj4"&&(ze.innerHTML=$a),this.h()},h(){$(r,"name","twitter:card"),$(r,"content","summary_large_image"),$(a,"name","twitter:site"),$(a,"content","@evidence_dev"),$(U,"class","markdown"),$(U,"id","análise-de-temperatura--santa-catarina"),$(ie,"class","markdown"),$(j,"class","markdown"),$(ye,"class","markdown"),$(we,"class","markdown"),$(V,"class","markdown"),$(V,"id","temperaturas-máximas-por-região"),$(le,"class","markdown"),$(ue,"class","markdown"),$(K,"class","markdown"),$(K,"id","amplitude-térmica-por-região"),$(z,"class","markdown"),$(Ze,"class","markdown"),$(be,"class","markdown"),$(be,"id","temperatura-máxima-diária--comparativo-por-município"),$(Oe,"class","markdown"),$(ea,"class","markdown"),$(ze,"class","markdown")},m(e,i){he&&he.m(e,i),_(e,t,i),aa.m(document.head,null),ua(document.head,r),ua(document.head,a),Te&&Te.m(document.head,null),ua(document.head,l),_(e,d,i),M&&M.m(e,i),_(e,o,i),E&&E.m(e,i),_(e,f,i),F&&F.m(e,i),_(e,R,i),D&&D.m(e,i),_(e,m,i),h(N,e,i),_(e,c,i),h(x,e,i),_(e,Z,i),h(X,e,i),_(e,qe,i),h(ee,e,i),_(e,Me,i),h(B,e,i),_(e,ae,i),A&&A.m(e,i),_(e,te,i),H&&H.m(e,i),_(e,ce,i),I&&I.m(e,i),_(e,fe,i),S&&S.m(e,i),_(e,pe,i),L&&L.m(e,i),_(e,Y,i),_(e,U,i),_(e,Fe,i),_(e,ie,i),_(e,re,i),_(e,j,i),_(e,Ae,i),_(e,ye,i),_(e,He,i),h(O,e,i),_(e,me,i),h(G,e,i),_(e,Ie,i),h(oe,e,i),_(e,Se,i),h(Q,e,i),_(e,se,i),h(J,e,i),_(e,Le,i),_(e,we,i),_(e,Ne,i),_(e,V,i),_(e,ve,i),_(e,le,i),_(e,Pe,i),h(W,e,i),_(e,ne,i),_(e,ue,i),_(e,Ue,i),_(e,K,i),_(e,_e,i),_(e,z,i),_(e,Be,i),h(de,e,i),_(e,je,i),h(y,e,i),_(e,Ke,i),_(e,Ze,i),_(e,ma,i),_(e,be,i),_(e,oa,i),_(e,Oe,i),_(e,sa,i),h(Qe,e,i),_(e,la,i),h(We,e,i),_(e,na,i),_(e,ea,i),_(e,_a,i),_(e,ze,i),da=!0},p(e,i){var Aa;typeof w<"u"&&w.title&&w.hide_title!==!0&&he.p(e,i),aa.p(e,i),typeof w=="object"&&Te.p(e,i),e[0]?M?(M.p(e,i),i[0]&1&&u(M,1)):(M=Pa(e),M.c(),u(M,1),M.m(o.parentNode,o)):M&&(xe(),v(M,1,1,()=>{M=null}),ke()),e[1]?E?(E.p(e,i),i[0]&2&&u(E,1)):(E=Ua(e),E.c(),u(E,1),E.m(f.parentNode,f)):E&&(xe(),v(E,1,1,()=>{E=null}),ke()),e[2]?F?(F.p(e,i),i[0]&4&&u(F,1)):(F=Va(e),F.c(),u(F,1),F.m(R.parentNode,R)):F&&(xe(),v(F,1,1,()=>{F=null}),ke()),e[3]?D?(D.p(e,i),i[0]&8&&u(D,1)):(D=Ba(e),D.c(),u(D,1),D.m(m.parentNode,m)):D&&(xe(),v(D,1,1,()=>{D=null}),ke());const wa={};i[0]&1&&(wa.data=e[0]),N.$set(wa);const fa={};i[0]&4&&(fa.data=e[2]),i[0]&8&&(fa.defaultValue=(Aa=e[3][0])==null?void 0:Aa.value),x.$set(fa);const ba={};i[0]&2&&(ba.data=e[1]),X.$set(ba);const ha={};i[0]&2&&(ha.data=e[1]),ee.$set(ha);const Ta={};i[0]&2&&(Ta.data=e[1]),B.$set(Ta),e[4]?A?(A.p(e,i),i[0]&16&&u(A,1)):(A=ja(e),A.c(),u(A,1),A.m(te.parentNode,te)):A&&(xe(),v(A,1,1,()=>{A=null}),ke()),e[5]?H?(H.p(e,i),i[0]&32&&u(H,1)):(H=Oa(e),H.c(),u(H,1),H.m(ce.parentNode,ce)):H&&(xe(),v(H,1,1,()=>{H=null}),ke()),e[6]?I?(I.p(e,i),i[0]&64&&u(I,1)):(I=Qa(e),I.c(),u(I,1),I.m(fe.parentNode,fe)):I&&(xe(),v(I,1,1,()=>{I=null}),ke()),e[7]?S?(S.p(e,i),i[0]&128&&u(S,1)):(S=Wa(e),S.c(),u(S,1),S.m(pe.parentNode,pe)):S&&(xe(),v(S,1,1,()=>{S=null}),ke()),e[8]?L?(L.p(e,i),i[0]&256&&u(L,1)):(L=za(e),L.c(),u(L,1),L.m(Y.parentNode,Y)):L&&(xe(),v(L,1,1,()=>{L=null}),ke());const ka={};i[0]&16&&(ka.data=e[4]),O.$set(ka);const xa={};i[0]&16&&(xa.data=e[4]),G.$set(xa);const Ra={};i[0]&16&&(Ra.data=e[4]),oe.$set(Ra);const Ca={};i[0]&16&&(Ca.data=e[4]),Q.$set(Ca);const qa={};i[0]&16&&(qa.data=e[4]),J.$set(qa);const Ma={};i[0]&32&&(Ma.data=e[5]),W.$set(Ma);const Ea={};i[0]&64&&(Ea.data=e[6]),de.$set(Ea);const pa={};i[0]&64&&(pa.data=e[6]),i[2]&16&&(pa.$$scope={dirty:i,ctx:e}),y.$set(pa);const Fa={};i[0]&128&&(Fa.data=e[7]),Qe.$set(Fa);const Da={};i[0]&256&&(Da.data=e[8]),We.$set(Da)},i(e){da||(u(M),u(E),u(F),u(D),u(N.$$.fragment,e),u(x.$$.fragment,e),u(X.$$.fragment,e),u(ee.$$.fragment,e),u(B.$$.fragment,e),u(A),u(H),u(I),u(S),u(L),u(O.$$.fragment,e),u(G.$$.fragment,e),u(oe.$$.fragment,e),u(Q.$$.fragment,e),u(J.$$.fragment,e),u(W.$$.fragment,e),u(de.$$.fragment,e),u(y.$$.fragment,e),u(Qe.$$.fragment,e),u(We.$$.fragment,e),da=!0)},o(e){v(M),v(E),v(F),v(D),v(N.$$.fragment,e),v(x.$$.fragment,e),v(X.$$.fragment,e),v(ee.$$.fragment,e),v(B.$$.fragment,e),v(A),v(H),v(I),v(S),v(L),v(O.$$.fragment,e),v(G.$$.fragment,e),v(oe.$$.fragment,e),v(Q.$$.fragment,e),v(J.$$.fragment,e),v(W.$$.fragment,e),v(de.$$.fragment,e),v(y.$$.fragment,e),v(Qe.$$.fragment,e),v(We.$$.fragment,e),da=!1},d(e){e&&(n(t),n(d),n(o),n(f),n(R),n(m),n(c),n(Z),n(qe),n(Me),n(ae),n(te),n(ce),n(fe),n(pe),n(Y),n(U),n(Fe),n(ie),n(re),n(j),n(Ae),n(ye),n(He),n(me),n(Ie),n(Se),n(se),n(Le),n(we),n(Ne),n(V),n(ve),n(le),n(Pe),n(ne),n(ue),n(Ue),n(K),n(_e),n(z),n(Be),n(je),n(Ke),n(Ze),n(ma),n(be),n(oa),n(Oe),n(sa),n(la),n(na),n(ea),n(_a),n(ze)),he&&he.d(e),aa.d(e),n(r),n(a),Te&&Te.d(e),n(l),M&&M.d(e),E&&E.d(e),F&&F.d(e),D&&D.d(e),b(N,e),b(x,e),b(X,e),b(ee,e),b(B,e),A&&A.d(e),H&&H.d(e),I&&I.d(e),S&&S.d(e),L&&L.d(e),b(O,e),b(G,e),b(oe,e),b(Q,e),b(J,e),b(W,e),b(de,e),b(y,e),b(Qe,e),b(We,e)}}}const w={title:"Análise de Temperatura"};function ht(s,t,r){let a,l;Ha(s,ct,y=>r(48,a=y)),Ha(s,Sa,y=>r(53,l=y));let{data:d}=t,{data:o={},customFormattingSettings:f,__db:R,inputs:m}=d;Ja(Sa,l="8acc3e62f15dffd2ecc87f0f6697e033",l);let N=st(dt(m));Ka(N.subscribe(y=>r(11,m=y))),Za(_t,{getCustomFormats:()=>f.customFormats||[]});const c=(y,Ke)=>ut(R.query,y,{query_name:Ke});lt(c),a.params,et(()=>!0);let x={initialData:void 0,initialError:void 0},Z=P`select value, label from (
  select 'Todas' as value, 'Todas as Mesorregiões' as label, 0 as ord
  union all
  select distinct mesoregion as value, mesoregion as label, 1 as ord
  from weather_dw.mart_climate__daily_facts
)
order by ord, label`,X=`select value, label from (
  select 'Todas' as value, 'Todas as Mesorregiões' as label, 0 as ord
  union all
  select distinct mesoregion as value, mesoregion as label, 1 as ord
  from weather_dw.mart_climate__daily_facts
)
order by ord, label`;o.mesorregioes_data&&(o.mesorregioes_data instanceof Error?x.initialError=o.mesorregioes_data:x.initialData=o.mesorregioes_data,o.mesorregioes_columns&&(x.knownColumns=o.mesorregioes_columns));let qe,ee=!1;const Me=Re.createReactive({callback:y=>{r(0,qe=y)},execFn:c},{id:"mesorregioes",...x});Me(X,{noResolve:Z,...x}),globalThis[Symbol.for("mesorregioes")]={get value(){return qe}};let B={initialData:void 0,initialError:void 0},ae=P`select distinct
  location_id as value,
  city_name   as label
from weather_dw.mart_climate__daily_facts
where ('${m.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${m.mesoregiao.value}')
order by city_name`,te=`select distinct
  location_id as value,
  city_name   as label
from weather_dw.mart_climate__daily_facts
where ('${m.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${m.mesoregiao.value}')
order by city_name`;o.cidades_disponiveis_data&&(o.cidades_disponiveis_data instanceof Error?B.initialError=o.cidades_disponiveis_data:B.initialData=o.cidades_disponiveis_data,o.cidades_disponiveis_columns&&(B.knownColumns=o.cidades_disponiveis_columns));let ce,fe=!1;const pe=Re.createReactive({callback:y=>{r(1,ce=y)},execFn:c},{id:"cidades_disponiveis",...B});pe(te,{noResolve:ae,...B}),globalThis[Symbol.for("cidades_disponiveis")]={get value(){return ce}};let Y={initialData:void 0,initialError:void 0},U=P`select distinct
  year_month as value,
  year_month as label
from weather_dw.mart_climate__daily_facts
order by year_month desc
limit 24`,Ee=`select distinct
  year_month as value,
  year_month as label
from weather_dw.mart_climate__daily_facts
order by year_month desc
limit 24`;o.meses_disponiveis_data&&(o.meses_disponiveis_data instanceof Error?Y.initialError=o.meses_disponiveis_data:Y.initialData=o.meses_disponiveis_data,o.meses_disponiveis_columns&&(Y.knownColumns=o.meses_disponiveis_columns));let Fe,ie=!1;const Ye=Re.createReactive({callback:y=>{r(2,Fe=y)},execFn:c},{id:"meses_disponiveis",...Y});Ye(Ee,{noResolve:U,...Y}),globalThis[Symbol.for("meses_disponiveis")]={get value(){return Fe}};let re={initialData:void 0,initialError:void 0},j=P`select max(year_month) as value
from weather_dw.mart_climate__daily_facts`,De=`select max(year_month) as value
from weather_dw.mart_climate__daily_facts`;o.mes_mais_recente_data&&(o.mes_mais_recente_data instanceof Error?re.initialError=o.mes_mais_recente_data:re.initialData=o.mes_mais_recente_data,o.mes_mais_recente_columns&&(re.knownColumns=o.mes_mais_recente_columns));let Ae,ye=!1;const He=Re.createReactive({callback:y=>{r(3,Ae=y)},execFn:c},{id:"mes_mais_recente",...re});He(De,{noResolve:j,...re}),globalThis[Symbol.for("mes_mais_recente")]={get value(){return Ae}};let O={initialData:void 0,initialError:void 0},me=P`select
  round(max(temp_max_c), 1)                                              as temp_maxima_abs,
  round(min(temp_min_c), 1)                                              as temp_minima_abs,
  round(avg(temp_avg_c), 1)                                              as temp_media,
  round(max(temp_amplitude_c), 1)                                        as maior_amplitude,
  count(distinct city_name) filter (where temp_max_c > 38)               as municipios_acima_38
from weather_dw.mart_climate__daily_facts
where (year_month = '${m.ano_mes.value}' or length('${m.ano_mes.value}') != 7)
  and ('${m.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${m.mesoregiao.value}')`,G=`select
  round(max(temp_max_c), 1)                                              as temp_maxima_abs,
  round(min(temp_min_c), 1)                                              as temp_minima_abs,
  round(avg(temp_avg_c), 1)                                              as temp_media,
  round(max(temp_amplitude_c), 1)                                        as maior_amplitude,
  count(distinct city_name) filter (where temp_max_c > 38)               as municipios_acima_38
from weather_dw.mart_climate__daily_facts
where (year_month = '${m.ano_mes.value}' or length('${m.ano_mes.value}') != 7)
  and ('${m.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${m.mesoregiao.value}')`;o.scorecards_data&&(o.scorecards_data instanceof Error?O.initialError=o.scorecards_data:O.initialData=o.scorecards_data,o.scorecards_columns&&(O.knownColumns=o.scorecards_columns));let Ie,oe=!1;const Se=Re.createReactive({callback:y=>{r(4,Ie=y)},execFn:c},{id:"scorecards",...O});Se(G,{noResolve:me,...O}),globalThis[Symbol.for("scorecards")]={get value(){return Ie}};let Q={initialData:void 0,initialError:void 0},se=P`select
  mesoregion                        as regiao,
  round(max(temp_max_c), 1)        as temp_maxima,
  round(avg(temp_avg_c), 1)        as temp_media,
  round(min(temp_min_c), 1)        as temp_minima,
  round(avg(temp_amplitude_c), 1)  as amplitude_media
from weather_dw.mart_climate__daily_facts
where (year_month = '${m.ano_mes.value}' or length('${m.ano_mes.value}') != 7)
  and ('${m.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${m.mesoregiao.value}')
group by mesoregion
order by temp_maxima desc`,J=`select
  mesoregion                        as regiao,
  round(max(temp_max_c), 1)        as temp_maxima,
  round(avg(temp_avg_c), 1)        as temp_media,
  round(min(temp_min_c), 1)        as temp_minima,
  round(avg(temp_amplitude_c), 1)  as amplitude_media
from weather_dw.mart_climate__daily_facts
where (year_month = '${m.ano_mes.value}' or length('${m.ano_mes.value}') != 7)
  and ('${m.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${m.mesoregiao.value}')
group by mesoregion
order by temp_maxima desc`;o.ranking_por_regiao_data&&(o.ranking_por_regiao_data instanceof Error?Q.initialError=o.ranking_por_regiao_data:Q.initialData=o.ranking_por_regiao_data,o.ranking_por_regiao_columns&&(Q.knownColumns=o.ranking_por_regiao_columns));let Le,we=!1;const Ne=Re.createReactive({callback:y=>{r(5,Le=y)},execFn:c},{id:"ranking_por_regiao",...Q});Ne(J,{noResolve:se,...Q}),globalThis[Symbol.for("ranking_por_regiao")]={get value(){return Le}};let V={initialData:void 0,initialError:void 0},ge=P`select
  mesoregion                        as regiao,
  round(avg(temp_amplitude_c), 1)  as amplitude_media,
  round(max(temp_max_c), 1)        as temp_maxima,
  round(avg(temp_avg_c), 1)        as temp_media,
  round(min(temp_min_c), 1)        as temp_minima
from weather_dw.mart_climate__daily_facts
where (year_month = '${m.ano_mes.value}' or length('${m.ano_mes.value}') != 7)
  and ('${m.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${m.mesoregiao.value}')
group by mesoregion
order by amplitude_media desc`,ve=`select
  mesoregion                        as regiao,
  round(avg(temp_amplitude_c), 1)  as amplitude_media,
  round(max(temp_max_c), 1)        as temp_maxima,
  round(avg(temp_avg_c), 1)        as temp_media,
  round(min(temp_min_c), 1)        as temp_minima
from weather_dw.mart_climate__daily_facts
where (year_month = '${m.ano_mes.value}' or length('${m.ano_mes.value}') != 7)
  and ('${m.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${m.mesoregiao.value}')
group by mesoregion
order by amplitude_media desc`;o.amplitude_por_regiao_data&&(o.amplitude_por_regiao_data instanceof Error?V.initialError=o.amplitude_por_regiao_data:V.initialData=o.amplitude_por_regiao_data,o.amplitude_por_regiao_columns&&(V.knownColumns=o.amplitude_por_regiao_columns));let le,Ge=!1;const Pe=Re.createReactive({callback:y=>{r(6,le=y)},execFn:c},{id:"amplitude_por_regiao",...V});Pe(ve,{noResolve:ge,...V}),globalThis[Symbol.for("amplitude_por_regiao")]={get value(){return le}};let W={initialData:void 0,initialError:void 0},ne=P`select
  date,
  city_name,
  round(avg(temp_max_c), 1) as temp_max_c
from weather_dw.mart_climate__daily_facts
where (year_month = '${m.ano_mes.value}' or length('${m.ano_mes.value}') != 7)
  and location_id in (
    '${m.cidade_a.value}',
    '${m.cidade_b.value}',
    '${m.cidade_c.value}'
  )
group by date, city_name
order by date, city_name`,ue=`select
  date,
  city_name,
  round(avg(temp_max_c), 1) as temp_max_c
from weather_dw.mart_climate__daily_facts
where (year_month = '${m.ano_mes.value}' or length('${m.ano_mes.value}') != 7)
  and location_id in (
    '${m.cidade_a.value}',
    '${m.cidade_b.value}',
    '${m.cidade_c.value}'
  )
group by date, city_name
order by date, city_name`;o.serie_comparativa_data&&(o.serie_comparativa_data instanceof Error?W.initialError=o.serie_comparativa_data:W.initialData=o.serie_comparativa_data,o.serie_comparativa_columns&&(W.knownColumns=o.serie_comparativa_columns));let Ue,K=!1;const Je=Re.createReactive({callback:y=>{r(7,Ue=y)},execFn:c},{id:"serie_comparativa",...W});Je(ue,{noResolve:ne,...W}),globalThis[Symbol.for("serie_comparativa")]={get value(){return Ue}};let _e={initialData:void 0,initialError:void 0},z=P`select
  date,
  round(avg(temp_max_c), 1) as media_sc
from weather_dw.mart_climate__daily_facts
where (year_month = '${m.ano_mes.value}' or length('${m.ano_mes.value}') != 7)
  and ('${m.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${m.mesoregiao.value}')
group by date
order by date`,Ve=`select
  date,
  round(avg(temp_max_c), 1) as media_sc
from weather_dw.mart_climate__daily_facts
where (year_month = '${m.ano_mes.value}' or length('${m.ano_mes.value}') != 7)
  and ('${m.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${m.mesoregiao.value}')
group by date
order by date`;o.media_geral_sc_data&&(o.media_geral_sc_data instanceof Error?_e.initialError=o.media_geral_sc_data:_e.initialData=o.media_geral_sc_data,o.media_geral_sc_columns&&(_e.knownColumns=o.media_geral_sc_columns));let Be,de=!1;const je=Re.createReactive({callback:y=>{r(8,Be=y)},execFn:c},{id:"media_geral_sc",..._e});return je(Ve,{noResolve:z,..._e}),globalThis[Symbol.for("media_geral_sc")]={get value(){return Be}},s.$$set=y=>{"data"in y&&r(9,d=y.data)},s.$$.update=()=>{s.$$.dirty[0]&512&&r(10,{data:o={},customFormattingSettings:f,__db:R}=d,o),s.$$.dirty[0]&1024&&nt.set(Object.keys(o).length>0),s.$$.dirty[1]&131072&&a.params,s.$$.dirty[0]&61440&&(Z||!ee?Z||(Me(X,{noResolve:Z,...x}),r(15,ee=!0)):Me(X,{noResolve:Z})),s.$$.dirty[0]&2048&&r(17,ae=P`select distinct
  location_id as value,
  city_name   as label
from weather_dw.mart_climate__daily_facts
where ('${m.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${m.mesoregiao.value}')
order by city_name`),s.$$.dirty[0]&2048&&r(18,te=`select distinct
  location_id as value,
  city_name   as label
from weather_dw.mart_climate__daily_facts
where ('${m.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${m.mesoregiao.value}')
order by city_name`),s.$$.dirty[0]&983040&&(ae||!fe?ae||(pe(te,{noResolve:ae,...B}),r(19,fe=!0)):pe(te,{noResolve:ae})),s.$$.dirty[0]&15728640&&(U||!ie?U||(Ye(Ee,{noResolve:U,...Y}),r(23,ie=!0)):Ye(Ee,{noResolve:U})),s.$$.dirty[0]&251658240&&(j||!ye?j||(He(De,{noResolve:j,...re}),r(27,ye=!0)):He(De,{noResolve:j})),s.$$.dirty[0]&2048&&r(29,me=P`select
  round(max(temp_max_c), 1)                                              as temp_maxima_abs,
  round(min(temp_min_c), 1)                                              as temp_minima_abs,
  round(avg(temp_avg_c), 1)                                              as temp_media,
  round(max(temp_amplitude_c), 1)                                        as maior_amplitude,
  count(distinct city_name) filter (where temp_max_c > 38)               as municipios_acima_38
from weather_dw.mart_climate__daily_facts
where (year_month = '${m.ano_mes.value}' or length('${m.ano_mes.value}') != 7)
  and ('${m.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${m.mesoregiao.value}')`),s.$$.dirty[0]&2048&&r(30,G=`select
  round(max(temp_max_c), 1)                                              as temp_maxima_abs,
  round(min(temp_min_c), 1)                                              as temp_minima_abs,
  round(avg(temp_avg_c), 1)                                              as temp_media,
  round(max(temp_amplitude_c), 1)                                        as maior_amplitude,
  count(distinct city_name) filter (where temp_max_c > 38)               as municipios_acima_38
from weather_dw.mart_climate__daily_facts
where (year_month = '${m.ano_mes.value}' or length('${m.ano_mes.value}') != 7)
  and ('${m.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${m.mesoregiao.value}')`),s.$$.dirty[0]&1879048192|s.$$.dirty[1]&1&&(me||!oe?me||(Se(G,{noResolve:me,...O}),r(31,oe=!0)):Se(G,{noResolve:me})),s.$$.dirty[0]&2048&&r(33,se=P`select
  mesoregion                        as regiao,
  round(max(temp_max_c), 1)        as temp_maxima,
  round(avg(temp_avg_c), 1)        as temp_media,
  round(min(temp_min_c), 1)        as temp_minima,
  round(avg(temp_amplitude_c), 1)  as amplitude_media
from weather_dw.mart_climate__daily_facts
where (year_month = '${m.ano_mes.value}' or length('${m.ano_mes.value}') != 7)
  and ('${m.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${m.mesoregiao.value}')
group by mesoregion
order by temp_maxima desc`),s.$$.dirty[0]&2048&&r(34,J=`select
  mesoregion                        as regiao,
  round(max(temp_max_c), 1)        as temp_maxima,
  round(avg(temp_avg_c), 1)        as temp_media,
  round(min(temp_min_c), 1)        as temp_minima,
  round(avg(temp_amplitude_c), 1)  as amplitude_media
from weather_dw.mart_climate__daily_facts
where (year_month = '${m.ano_mes.value}' or length('${m.ano_mes.value}') != 7)
  and ('${m.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${m.mesoregiao.value}')
group by mesoregion
order by temp_maxima desc`),s.$$.dirty[1]&30&&(se||!we?se||(Ne(J,{noResolve:se,...Q}),r(35,we=!0)):Ne(J,{noResolve:se})),s.$$.dirty[0]&2048&&r(37,ge=P`select
  mesoregion                        as regiao,
  round(avg(temp_amplitude_c), 1)  as amplitude_media,
  round(max(temp_max_c), 1)        as temp_maxima,
  round(avg(temp_avg_c), 1)        as temp_media,
  round(min(temp_min_c), 1)        as temp_minima
from weather_dw.mart_climate__daily_facts
where (year_month = '${m.ano_mes.value}' or length('${m.ano_mes.value}') != 7)
  and ('${m.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${m.mesoregiao.value}')
group by mesoregion
order by amplitude_media desc`),s.$$.dirty[0]&2048&&r(38,ve=`select
  mesoregion                        as regiao,
  round(avg(temp_amplitude_c), 1)  as amplitude_media,
  round(max(temp_max_c), 1)        as temp_maxima,
  round(avg(temp_avg_c), 1)        as temp_media,
  round(min(temp_min_c), 1)        as temp_minima
from weather_dw.mart_climate__daily_facts
where (year_month = '${m.ano_mes.value}' or length('${m.ano_mes.value}') != 7)
  and ('${m.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${m.mesoregiao.value}')
group by mesoregion
order by amplitude_media desc`),s.$$.dirty[1]&480&&(ge||!Ge?ge||(Pe(ve,{noResolve:ge,...V}),r(39,Ge=!0)):Pe(ve,{noResolve:ge})),s.$$.dirty[0]&2048&&r(41,ne=P`select
  date,
  city_name,
  round(avg(temp_max_c), 1) as temp_max_c
from weather_dw.mart_climate__daily_facts
where (year_month = '${m.ano_mes.value}' or length('${m.ano_mes.value}') != 7)
  and location_id in (
    '${m.cidade_a.value}',
    '${m.cidade_b.value}',
    '${m.cidade_c.value}'
  )
group by date, city_name
order by date, city_name`),s.$$.dirty[0]&2048&&r(42,ue=`select
  date,
  city_name,
  round(avg(temp_max_c), 1) as temp_max_c
from weather_dw.mart_climate__daily_facts
where (year_month = '${m.ano_mes.value}' or length('${m.ano_mes.value}') != 7)
  and location_id in (
    '${m.cidade_a.value}',
    '${m.cidade_b.value}',
    '${m.cidade_c.value}'
  )
group by date, city_name
order by date, city_name`),s.$$.dirty[1]&7680&&(ne||!K?ne||(Je(ue,{noResolve:ne,...W}),r(43,K=!0)):Je(ue,{noResolve:ne})),s.$$.dirty[0]&2048&&r(45,z=P`select
  date,
  round(avg(temp_max_c), 1) as media_sc
from weather_dw.mart_climate__daily_facts
where (year_month = '${m.ano_mes.value}' or length('${m.ano_mes.value}') != 7)
  and ('${m.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${m.mesoregiao.value}')
group by date
order by date`),s.$$.dirty[0]&2048&&r(46,Ve=`select
  date,
  round(avg(temp_max_c), 1) as media_sc
from weather_dw.mart_climate__daily_facts
where (year_month = '${m.ano_mes.value}' or length('${m.ano_mes.value}') != 7)
  and ('${m.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${m.mesoregiao.value}')
group by date
order by date`),s.$$.dirty[1]&122880&&(z||!de?z||(je(Ve,{noResolve:z,..._e}),r(47,de=!0)):je(Ve,{noResolve:z}))},r(13,Z=P`select value, label from (
  select 'Todas' as value, 'Todas as Mesorregiões' as label, 0 as ord
  union all
  select distinct mesoregion as value, mesoregion as label, 1 as ord
  from weather_dw.mart_climate__daily_facts
)
order by ord, label`),r(14,X=`select value, label from (
  select 'Todas' as value, 'Todas as Mesorregiões' as label, 0 as ord
  union all
  select distinct mesoregion as value, mesoregion as label, 1 as ord
  from weather_dw.mart_climate__daily_facts
)
order by ord, label`),r(21,U=P`select distinct
  year_month as value,
  year_month as label
from weather_dw.mart_climate__daily_facts
order by year_month desc
limit 24`),r(22,Ee=`select distinct
  year_month as value,
  year_month as label
from weather_dw.mart_climate__daily_facts
order by year_month desc
limit 24`),r(25,j=P`select max(year_month) as value
from weather_dw.mart_climate__daily_facts`),r(26,De=`select max(year_month) as value
from weather_dw.mart_climate__daily_facts`),[qe,ce,Fe,Ae,Ie,Le,le,Ue,Be,d,o,m,x,Z,X,ee,B,ae,te,fe,Y,U,Ee,ie,re,j,De,ye,O,me,G,oe,Q,se,J,we,V,ge,ve,Ge,W,ne,ue,K,_e,z,Ve,de,a]}class Ht extends rt{constructor(t){super(),mt(this,t,ht,bt,Ya,{data:9},null,[-1,-1,-1])}}export{Ht as component};
