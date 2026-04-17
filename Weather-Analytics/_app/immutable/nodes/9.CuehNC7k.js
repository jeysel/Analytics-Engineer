import{s as _t,d as m,v as Xa,i as d,a as Te,b as v,c as u,h as ut,e as w,f as Sa,g as Z,r as ga,t as ha,j as c,k as y,u as wa,l as Ja,m as ct,o as ft,n as pt,p as vt,q as aa}from"../chunks/scheduler.BiECNykD.js";import{S as gt,i as ht,d as T,t as g,a as p,c as De,m as k,b as q,e as R,g as Ae}from"../chunks/index.DMIfMoOS.js";import{D as wt,e as yt,s as $t,Q as Me,p as bt,b as Fa,a as Za,r as et,C as Tt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.Dv51r1Xw.js";import{w as kt}from"../chunks/entry.Dq6lVjE5.js";import{h as Y,p as qt}from"../chunks/button.DTlM0ogI.js";import{D as Ia,Q as Fe}from"../chunks/getCompletedData.Cmkm-dWJ.js";import{p as Rt}from"../chunks/stores.CPiwfCsI.js";import{B as Ct}from"../chunks/BarChart.BQNmjtVm.js";import{L as va}from"../chunks/LineChart.B6NPgl-E.js";import{B as Ht}from"../chunks/BubbleMap.D5tZN-hv.js";function Et(l){let r,o=$.title+"",a;return{c(){r=y("h1"),a=wa(o),this.h()},l(n){r=w(n,"H1",{class:!0});var _=ga(r);a=ha(_,o),_.forEach(m),this.h()},h(){v(r,"class","title")},m(n,_){d(n,r,_),Te(r,a)},p:aa,d(n){n&&m(r)}}}function Dt(l){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:aa,p:aa,d:aa}}function At(l){let r,o,a,n,_;return document.title=r=$.title,{c(){o=c(),a=y("meta"),n=c(),_=y("meta"),this.h()},l(s){o=u(s),a=w(s,"META",{property:!0,content:!0}),n=u(s),_=w(s,"META",{name:!0,content:!0}),this.h()},h(){var s,f;v(a,"property","og:title"),v(a,"content",((s=$.og)==null?void 0:s.title)??$.title),v(_,"name","twitter:title"),v(_,"content",((f=$.og)==null?void 0:f.title)??$.title)},m(s,f){d(s,o,f),d(s,a,f),d(s,n,f),d(s,_,f)},p(s,f){f&0&&r!==(r=$.title)&&(document.title=r)},d(s){s&&(m(o),m(a),m(n),m(_))}}}function Mt(l){var _,s;let r,o,a=($.description||((_=$.og)==null?void 0:_.description))&&Ft(),n=((s=$.og)==null?void 0:s.image)&&It();return{c(){a&&a.c(),r=c(),n&&n.c(),o=Sa()},l(f){a&&a.l(f),r=u(f),n&&n.l(f),o=Sa()},m(f,b){a&&a.m(f,b),d(f,r,b),n&&n.m(f,b),d(f,o,b)},p(f,b){var i,C;($.description||(i=$.og)!=null&&i.description)&&a.p(f,b),(C=$.og)!=null&&C.image&&n.p(f,b)},d(f){f&&(m(r),m(o)),a&&a.d(f),n&&n.d(f)}}}function Ft(l){let r,o,a,n,_;return{c(){r=y("meta"),o=c(),a=y("meta"),n=c(),_=y("meta"),this.h()},l(s){r=w(s,"META",{name:!0,content:!0}),o=u(s),a=w(s,"META",{property:!0,content:!0}),n=u(s),_=w(s,"META",{name:!0,content:!0}),this.h()},h(){var s,f,b;v(r,"name","description"),v(r,"content",$.description??((s=$.og)==null?void 0:s.description)),v(a,"property","og:description"),v(a,"content",((f=$.og)==null?void 0:f.description)??$.description),v(_,"name","twitter:description"),v(_,"content",((b=$.og)==null?void 0:b.description)??$.description)},m(s,f){d(s,r,f),d(s,o,f),d(s,a,f),d(s,n,f),d(s,_,f)},p:aa,d(s){s&&(m(r),m(o),m(a),m(n),m(_))}}}function It(l){let r,o,a;return{c(){r=y("meta"),o=c(),a=y("meta"),this.h()},l(n){r=w(n,"META",{property:!0,content:!0}),o=u(n),a=w(n,"META",{name:!0,content:!0}),this.h()},h(){var n,_;v(r,"property","og:image"),v(r,"content",Za((n=$.og)==null?void 0:n.image)),v(a,"name","twitter:image"),v(a,"content",Za((_=$.og)==null?void 0:_.image))},m(n,_){d(n,r,_),d(n,o,_),d(n,a,_)},p:aa,d(n){n&&(m(r),m(o),m(a))}}}function at(l){let r,o;return r=new Fe({props:{queryID:"regioes",queryResult:l[1]}}),{c(){R(r.$$.fragment)},l(a){q(r.$$.fragment,a)},m(a,n){k(r,a,n),o=!0},p(a,n){const _={};n[0]&2&&(_.queryResult=a[1]),r.$set(_)},i(a){o||(p(r.$$.fragment,a),o=!0)},o(a){g(r.$$.fragment,a),o=!1},d(a){T(r,a)}}}function tt(l){let r,o;return r=new Fe({props:{queryID:"mesorregioes",queryResult:l[2]}}),{c(){R(r.$$.fragment)},l(a){q(r.$$.fragment,a)},m(a,n){k(r,a,n),o=!0},p(a,n){const _={};n[0]&4&&(_.queryResult=a[2]),r.$set(_)},i(a){o||(p(r.$$.fragment,a),o=!0)},o(a){g(r.$$.fragment,a),o=!1},d(a){T(r,a)}}}function rt(l){let r,o;return r=new Fe({props:{queryID:"cidades_disponiveis",queryResult:l[3]}}),{c(){R(r.$$.fragment)},l(a){q(r.$$.fragment,a)},m(a,n){k(r,a,n),o=!0},p(a,n){const _={};n[0]&8&&(_.queryResult=a[3]),r.$set(_)},i(a){o||(p(r.$$.fragment,a),o=!0)},o(a){g(r.$$.fragment,a),o=!1},d(a){T(r,a)}}}function it(l){let r,o;return r=new Fe({props:{queryID:"datas_disponiveis",queryResult:l[4]}}),{c(){R(r.$$.fragment)},l(a){q(r.$$.fragment,a)},m(a,n){k(r,a,n),o=!0},p(a,n){const _={};n[0]&16&&(_.queryResult=a[4]),r.$set(_)},i(a){o||(p(r.$$.fragment,a),o=!0)},o(a){g(r.$$.fragment,a),o=!1},d(a){T(r,a)}}}function ot(l){let r,o;return r=new Fe({props:{queryID:"perfil_hora_regiao",queryResult:l[5]}}),{c(){R(r.$$.fragment)},l(a){q(r.$$.fragment,a)},m(a,n){k(r,a,n),o=!0},p(a,n){const _={};n[0]&32&&(_.queryResult=a[5]),r.$set(_)},i(a){o||(p(r.$$.fragment,a),o=!0)},o(a){g(r.$$.fragment,a),o=!1},d(a){T(r,a)}}}function st(l){let r,o;return r=new Fe({props:{queryID:"serie_dia_municipio",queryResult:l[6]}}),{c(){R(r.$$.fragment)},l(a){q(r.$$.fragment,a)},m(a,n){k(r,a,n),o=!0},p(a,n){const _={};n[0]&64&&(_.queryResult=a[6]),r.$set(_)},i(a){o||(p(r.$$.fragment,a),o=!0)},o(a){g(r.$$.fragment,a),o=!1},d(a){T(r,a)}}}function lt(l){let r,o;return r=new Fe({props:{queryID:"comparativo_dia_vs_media",queryResult:l[7]}}),{c(){R(r.$$.fragment)},l(a){q(r.$$.fragment,a)},m(a,n){k(r,a,n),o=!0},p(a,n){const _={};n[0]&128&&(_.queryResult=a[7]),r.$set(_)},i(a){o||(p(r.$$.fragment,a),o=!0)},o(a){g(r.$$.fragment,a),o=!1},d(a){T(r,a)}}}function mt(l){let r,o;return r=new Fe({props:{queryID:"condicao_mais_frequente",queryResult:l[8]}}),{c(){R(r.$$.fragment)},l(a){q(r.$$.fragment,a)},m(a,n){k(r,a,n),o=!0},p(a,n){const _={};n[0]&256&&(_.queryResult=a[8]),r.$set(_)},i(a){o||(p(r.$$.fragment,a),o=!0)},o(a){g(r.$$.fragment,a),o=!1},d(a){T(r,a)}}}function nt(l){let r,o;return r=new Fe({props:{queryID:"mapa_temperatura_atual",queryResult:l[9]}}),{c(){R(r.$$.fragment)},l(a){q(r.$$.fragment,a)},m(a,n){k(r,a,n),o=!0},p(a,n){const _={};n[0]&512&&(_.queryResult=a[9]),r.$set(_)},i(a){o||(p(r.$$.fragment,a),o=!0)},o(a){g(r.$$.fragment,a),o=!1},d(a){T(r,a)}}}function St(l){let r,o,a,n,_,s,f,b;return r=new Fa({props:{id:"condicao",title:"Condição"}}),a=new Fa({props:{id:"ocorrencias",title:"Horas registradas"}}),_=new Fa({props:{id:"temp_media",title:"Temp. Média (°C)",fmt:"0.0",contentType:"colorscale"}}),f=new Fa({props:{id:"umidade_media",title:"Umidade Média (%)",fmt:"0.0"}}),{c(){R(r.$$.fragment),o=c(),R(a.$$.fragment),n=c(),R(_.$$.fragment),s=c(),R(f.$$.fragment)},l(i){q(r.$$.fragment,i),o=u(i),q(a.$$.fragment,i),n=u(i),q(_.$$.fragment,i),s=u(i),q(f.$$.fragment,i)},m(i,C){k(r,i,C),d(i,o,C),k(a,i,C),d(i,n,C),k(_,i,C),d(i,s,C),k(f,i,C),b=!0},p:aa,i(i){b||(p(r.$$.fragment,i),p(a.$$.fragment,i),p(_.$$.fragment,i),p(f.$$.fragment,i),b=!0)},o(i){g(r.$$.fragment,i),g(a.$$.fragment,i),g(_.$$.fragment,i),g(f.$$.fragment,i),b=!1},d(i){i&&(m(o),m(n),m(s)),T(r,i),T(a,i),T(_,i),T(f,i)}}}function Pt(l){let r,o,a,n,_,s,f,b,i,C,V,N,ee,B,Ie,ae,Se,O,z,te,ve,ge,G,he='<a href="#análise-horária--santa-catarina">Análise Horária — Santa Catarina</a>',re,Q,ta='Os dados diários mostram o que aconteceu num dia. Os dados horários mostram <strong class="markdown">como</strong> aconteceu — o pico de calor foi às 14h ou às 16h? A umidade cai com o vento? A chuva foi pela manhã ou à noite? Esta página revela os padrões intradiários que ficam invisíveis nas médias diárias.',Pe,ke,ie,L,Ye='<a href="#perfil-de-temperatura-por-hora-do-dia">Perfil de Temperatura por Hora do Dia</a>',Le,oe,ra="Como a temperatura varia ao longo das 24 horas na região selecionada, considerando os últimos 30 dias. A banda entre mínima e máxima revela a amplitude típica de cada hora — horas da madrugada tendem a ter banda estreita; o início da tarde, a mais larga.",se,U,we,qe,Ne,K,ye='<a href="#umidade-média-por-hora-do-dia">Umidade Média por Hora do Dia</a>',le,j,ia="A umidade relativa segue um padrão inverso à temperatura — cai no período mais quente do dia e sobe à noite. Regiões costeiras tendem a manter umidade alta mesmo no período seco; o Oeste e o Planalto apresentam as maiores quedas diurnas.",Ue,me,ne,X,$e,de,pe,Je,J=l[0].cidade.label+"",_e,be,ue,oa="Curva horária completa do município selecionado no dia de referência: temperatura, umidade, precipitação, vento e nebulosidade hora a hora.",xe,x,ce,W,Ve,fe,Be,h,sa,Re,La='<a href="#dia-de-referência-vs-média-dos-últimos-30-dias">Dia de Referência vs Média dos Últimos 30 dias</a>',ya,Oe,Na="Compara a curva de temperatura do dia selecionado com a média histórica das mesmas horas nos últimos 30 dias para o mesmo município. Permite identificar se o dia foi atipicamente quente, frio ou dentro do padrão esperado para cada período do dia.",$a,ze,ba,na,Ta,Qe,Ze,Pa,da=l[0].cidade.label+"",ka,qa,je,Ua="Distribuição das condições atmosféricas registradas nos últimos 30 dias com temperatura e umidade média associadas a cada condição.",Ra,We,Ca,_a,Ha,Ce,xa='<a href="#temperatura-por-município-no-dia-selecionado">Temperatura por Município no Dia Selecionado</a>',Ea,Ge,Va="Mapa com a temperatura média de cada município no dia de referência, calculada sobre todas as horas disponíveis. Revela quais regiões foram mais quentes ou frias naquele dia específico.",Da,Ke,Aa,ua,Ma,Xe,Ba='<strong class="markdown">Navegação:</strong> <a href="/Analytics-Engineer/Weather-Analytics/" class="markdown">Início</a> · <a href="/Analytics-Engineer/Weather-Analytics/temperatura" class="markdown">Temperatura</a> · <a href="/Analytics-Engineer/Weather-Analytics/precipitacao" class="markdown">Precipitação</a> · <a href="/Analytics-Engineer/Weather-Analytics/alertas" class="markdown">Alertas</a>',la,He=typeof $<"u"&&$.title&&$.hide_title!==!0&&Et();function dt(e,t){return typeof $<"u"&&$.title?At:Dt}let ca=dt()(l),Ee=typeof $=="object"&&Mt(),H=l[1]&&at(l),E=l[2]&&tt(l),D=l[3]&&rt(l),A=l[4]&&it(l);C=new Ia({props:{name:"regiao",data:l[1],value:"value",label:"label",title:"Região",defaultValue:"Todas"}}),N=new Ia({props:{name:"mesoregiao",data:l[2],value:"value",label:"label",title:"Mesorregião",defaultValue:"Todas"}}),B=new Ia({props:{name:"cidade",data:l[3],value:"value",label:"label",title:"Município",defaultValue:"florianopolis"}}),ae=new Ia({props:{name:"data_ref",data:l[4],value:"value",label:"label",title:"Dia de referência",defaultValue:l[4][0].value}});let M=l[5]&&ot(l),F=l[6]&&st(l),I=l[7]&&lt(l),S=l[8]&&mt(l),P=l[9]&&nt(l);return U=new va({props:{data:l[5],x:"hora",y:["temp_max","temp_media","temp_min"],yAxisTitle:"Temperatura (°C)",xAxisTitle:"Hora do dia",colorPalette:["#D73027","#FC8D59","#4575B4"],labels:!0}}),me=new va({props:{data:l[5],x:"hora",y:"umidade_media",yAxisTitle:"Umidade relativa (%)",xAxisTitle:"Hora do dia",colorPalette:["#3182BD"]}}),x=new va({props:{data:l[6],x:"hora",y:["temperatura_c","umidade_pct"],yAxisTitle:"Temperatura (°C) / Umidade (%)",xAxisTitle:"Hora do dia",colorPalette:["#D73027","#3182BD"],labels:!0}}),W=new Ct({props:{data:l[6],x:"hora",y:"precipitacao_mm",yAxisTitle:"Precipitação (mm)",xAxisTitle:"Hora do dia",colorPalette:["#08519C"],title:"Precipitação por hora"}}),fe=new va({props:{data:l[6],x:"hora",y:["vento_kmh","nebulosidade_pct"],yAxisTitle:"Vento (km/h) / Nebulosidade (%)",xAxisTitle:"Hora do dia",colorPalette:["#74ADD1","#999999"],title:"Vento e Nebulosidade"}}),ze=new va({props:{data:l[7],x:"hora",y:["temp_dia_ref","temp_media_30d"],yAxisTitle:"Temperatura (°C)",xAxisTitle:"Hora do dia",colorPalette:["#D73027","#999999"],labels:!0}}),We=new wt({props:{data:l[8],$$slots:{default:[St]},$$scope:{ctx:l}}}),Ke=new Ht({props:{data:l[9],lat:"latitude",long:"longitude",size:"vento_medio",value:"temp_media",pointName:"city_name",valueFmt:"0.0°C",title:"Temperatura média do dia por município (tamanho = velocidade do vento)"}}),{c(){He&&He.c(),r=c(),ca.c(),o=y("meta"),a=y("meta"),Ee&&Ee.c(),n=Sa(),_=c(),H&&H.c(),s=c(),E&&E.c(),f=c(),D&&D.c(),b=c(),A&&A.c(),i=c(),R(C.$$.fragment),V=c(),R(N.$$.fragment),ee=c(),R(B.$$.fragment),Ie=c(),R(ae.$$.fragment),Se=c(),M&&M.c(),O=c(),F&&F.c(),z=c(),I&&I.c(),te=c(),S&&S.c(),ve=c(),P&&P.c(),ge=c(),G=y("h1"),G.innerHTML=he,re=c(),Q=y("p"),Q.innerHTML=ta,Pe=c(),ke=y("hr"),ie=c(),L=y("h2"),L.innerHTML=Ye,Le=c(),oe=y("p"),oe.textContent=ra,se=c(),R(U.$$.fragment),we=c(),qe=y("hr"),Ne=c(),K=y("h2"),K.innerHTML=ye,le=c(),j=y("p"),j.textContent=ia,Ue=c(),R(me.$$.fragment),ne=c(),X=y("hr"),$e=c(),de=y("h2"),pe=y("a"),Je=wa("Detalhamento do Dia — "),_e=wa(J),be=c(),ue=y("p"),ue.textContent=oa,xe=c(),R(x.$$.fragment),ce=c(),R(W.$$.fragment),Ve=c(),R(fe.$$.fragment),Be=c(),h=y("hr"),sa=c(),Re=y("h2"),Re.innerHTML=La,ya=c(),Oe=y("p"),Oe.textContent=Na,$a=c(),R(ze.$$.fragment),ba=c(),na=y("hr"),Ta=c(),Qe=y("h2"),Ze=y("a"),Pa=wa("Condições Climáticas mais Frequentes — "),ka=wa(da),qa=c(),je=y("p"),je.textContent=Ua,Ra=c(),R(We.$$.fragment),Ca=c(),_a=y("hr"),Ha=c(),Ce=y("h2"),Ce.innerHTML=xa,Ea=c(),Ge=y("p"),Ge.textContent=Va,Da=c(),R(Ke.$$.fragment),Aa=c(),ua=y("hr"),Ma=c(),Xe=y("p"),Xe.innerHTML=Ba,this.h()},l(e){He&&He.l(e),r=u(e);const t=ut("svelte-2igo1p",document.head);ca.l(t),o=w(t,"META",{name:!0,content:!0}),a=w(t,"META",{name:!0,content:!0}),Ee&&Ee.l(t),n=Sa(),t.forEach(m),_=u(e),H&&H.l(e),s=u(e),E&&E.l(e),f=u(e),D&&D.l(e),b=u(e),A&&A.l(e),i=u(e),q(C.$$.fragment,e),V=u(e),q(N.$$.fragment,e),ee=u(e),q(B.$$.fragment,e),Ie=u(e),q(ae.$$.fragment,e),Se=u(e),M&&M.l(e),O=u(e),F&&F.l(e),z=u(e),I&&I.l(e),te=u(e),S&&S.l(e),ve=u(e),P&&P.l(e),ge=u(e),G=w(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),Z(G)!=="svelte-1n3uigf"&&(G.innerHTML=he),re=u(e),Q=w(e,"P",{class:!0,"data-svelte-h":!0}),Z(Q)!=="svelte-z76kq0"&&(Q.innerHTML=ta),Pe=u(e),ke=w(e,"HR",{class:!0}),ie=u(e),L=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Z(L)!=="svelte-t0zjo9"&&(L.innerHTML=Ye),Le=u(e),oe=w(e,"P",{class:!0,"data-svelte-h":!0}),Z(oe)!=="svelte-1whq61k"&&(oe.textContent=ra),se=u(e),q(U.$$.fragment,e),we=u(e),qe=w(e,"HR",{class:!0}),Ne=u(e),K=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Z(K)!=="svelte-1u3fszb"&&(K.innerHTML=ye),le=u(e),j=w(e,"P",{class:!0,"data-svelte-h":!0}),Z(j)!=="svelte-1i680c9"&&(j.textContent=ia),Ue=u(e),q(me.$$.fragment,e),ne=u(e),X=w(e,"HR",{class:!0}),$e=u(e),de=w(e,"H2",{class:!0,id:!0});var fa=ga(de);pe=w(fa,"A",{href:!0});var ma=ga(pe);Je=ha(ma,"Detalhamento do Dia — "),_e=ha(ma,J),ma.forEach(m),fa.forEach(m),be=u(e),ue=w(e,"P",{class:!0,"data-svelte-h":!0}),Z(ue)!=="svelte-1vq3yrr"&&(ue.textContent=oa),xe=u(e),q(x.$$.fragment,e),ce=u(e),q(W.$$.fragment,e),Ve=u(e),q(fe.$$.fragment,e),Be=u(e),h=w(e,"HR",{class:!0}),sa=u(e),Re=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Z(Re)!=="svelte-ar1v13"&&(Re.innerHTML=La),ya=u(e),Oe=w(e,"P",{class:!0,"data-svelte-h":!0}),Z(Oe)!=="svelte-1i9lh2x"&&(Oe.textContent=Na),$a=u(e),q(ze.$$.fragment,e),ba=u(e),na=w(e,"HR",{class:!0}),Ta=u(e),Qe=w(e,"H2",{class:!0,id:!0});var pa=ga(Qe);Ze=w(pa,"A",{href:!0});var ea=ga(Ze);Pa=ha(ea,"Condições Climáticas mais Frequentes — "),ka=ha(ea,da),ea.forEach(m),pa.forEach(m),qa=u(e),je=w(e,"P",{class:!0,"data-svelte-h":!0}),Z(je)!=="svelte-14vw4w3"&&(je.textContent=Ua),Ra=u(e),q(We.$$.fragment,e),Ca=u(e),_a=w(e,"HR",{class:!0}),Ha=u(e),Ce=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Z(Ce)!=="svelte-1oz83qb"&&(Ce.innerHTML=xa),Ea=u(e),Ge=w(e,"P",{class:!0,"data-svelte-h":!0}),Z(Ge)!=="svelte-1uztm9t"&&(Ge.textContent=Va),Da=u(e),q(Ke.$$.fragment,e),Aa=u(e),ua=w(e,"HR",{class:!0}),Ma=u(e),Xe=w(e,"P",{class:!0,"data-svelte-h":!0}),Z(Xe)!=="svelte-16d680s"&&(Xe.innerHTML=Ba),this.h()},h(){v(o,"name","twitter:card"),v(o,"content","summary_large_image"),v(a,"name","twitter:site"),v(a,"content","@evidence_dev"),v(G,"class","markdown"),v(G,"id","análise-horária--santa-catarina"),v(Q,"class","markdown"),v(ke,"class","markdown"),v(L,"class","markdown"),v(L,"id","perfil-de-temperatura-por-hora-do-dia"),v(oe,"class","markdown"),v(qe,"class","markdown"),v(K,"class","markdown"),v(K,"id","umidade-média-por-hora-do-dia"),v(j,"class","markdown"),v(X,"class","markdown"),v(pe,"href","#detalhamento-do-dia--inputscidadelabel"),v(de,"class","markdown"),v(de,"id","detalhamento-do-dia--inputscidadelabel"),v(ue,"class","markdown"),v(h,"class","markdown"),v(Re,"class","markdown"),v(Re,"id","dia-de-referência-vs-média-dos-últimos-30-dias"),v(Oe,"class","markdown"),v(na,"class","markdown"),v(Ze,"href","#condições-climáticas-mais-frequentes--inputscidadelabel"),v(Qe,"class","markdown"),v(Qe,"id","condições-climáticas-mais-frequentes--inputscidadelabel"),v(je,"class","markdown"),v(_a,"class","markdown"),v(Ce,"class","markdown"),v(Ce,"id","temperatura-por-município-no-dia-selecionado"),v(Ge,"class","markdown"),v(ua,"class","markdown"),v(Xe,"class","markdown")},m(e,t){He&&He.m(e,t),d(e,r,t),ca.m(document.head,null),Te(document.head,o),Te(document.head,a),Ee&&Ee.m(document.head,null),Te(document.head,n),d(e,_,t),H&&H.m(e,t),d(e,s,t),E&&E.m(e,t),d(e,f,t),D&&D.m(e,t),d(e,b,t),A&&A.m(e,t),d(e,i,t),k(C,e,t),d(e,V,t),k(N,e,t),d(e,ee,t),k(B,e,t),d(e,Ie,t),k(ae,e,t),d(e,Se,t),M&&M.m(e,t),d(e,O,t),F&&F.m(e,t),d(e,z,t),I&&I.m(e,t),d(e,te,t),S&&S.m(e,t),d(e,ve,t),P&&P.m(e,t),d(e,ge,t),d(e,G,t),d(e,re,t),d(e,Q,t),d(e,Pe,t),d(e,ke,t),d(e,ie,t),d(e,L,t),d(e,Le,t),d(e,oe,t),d(e,se,t),k(U,e,t),d(e,we,t),d(e,qe,t),d(e,Ne,t),d(e,K,t),d(e,le,t),d(e,j,t),d(e,Ue,t),k(me,e,t),d(e,ne,t),d(e,X,t),d(e,$e,t),d(e,de,t),Te(de,pe),Te(pe,Je),Te(pe,_e),d(e,be,t),d(e,ue,t),d(e,xe,t),k(x,e,t),d(e,ce,t),k(W,e,t),d(e,Ve,t),k(fe,e,t),d(e,Be,t),d(e,h,t),d(e,sa,t),d(e,Re,t),d(e,ya,t),d(e,Oe,t),d(e,$a,t),k(ze,e,t),d(e,ba,t),d(e,na,t),d(e,Ta,t),d(e,Qe,t),Te(Qe,Ze),Te(Ze,Pa),Te(Ze,ka),d(e,qa,t),d(e,je,t),d(e,Ra,t),k(We,e,t),d(e,Ca,t),d(e,_a,t),d(e,Ha,t),d(e,Ce,t),d(e,Ea,t),d(e,Ge,t),d(e,Da,t),k(Ke,e,t),d(e,Aa,t),d(e,ua,t),d(e,Ma,t),d(e,Xe,t),la=!0},p(e,t){typeof $<"u"&&$.title&&$.hide_title!==!0&&He.p(e,t),ca.p(e,t),typeof $=="object"&&Ee.p(e,t),e[1]?H?(H.p(e,t),t[0]&2&&p(H,1)):(H=at(e),H.c(),p(H,1),H.m(s.parentNode,s)):H&&(Ae(),g(H,1,1,()=>{H=null}),De()),e[2]?E?(E.p(e,t),t[0]&4&&p(E,1)):(E=tt(e),E.c(),p(E,1),E.m(f.parentNode,f)):E&&(Ae(),g(E,1,1,()=>{E=null}),De()),e[3]?D?(D.p(e,t),t[0]&8&&p(D,1)):(D=rt(e),D.c(),p(D,1),D.m(b.parentNode,b)):D&&(Ae(),g(D,1,1,()=>{D=null}),De()),e[4]?A?(A.p(e,t),t[0]&16&&p(A,1)):(A=it(e),A.c(),p(A,1),A.m(i.parentNode,i)):A&&(Ae(),g(A,1,1,()=>{A=null}),De());const fa={};t[0]&2&&(fa.data=e[1]),C.$set(fa);const ma={};t[0]&4&&(ma.data=e[2]),N.$set(ma);const pa={};t[0]&8&&(pa.data=e[3]),B.$set(pa);const ea={};t[0]&16&&(ea.data=e[4]),t[0]&16&&(ea.defaultValue=e[4][0].value),ae.$set(ea),e[5]?M?(M.p(e,t),t[0]&32&&p(M,1)):(M=ot(e),M.c(),p(M,1),M.m(O.parentNode,O)):M&&(Ae(),g(M,1,1,()=>{M=null}),De()),e[6]?F?(F.p(e,t),t[0]&64&&p(F,1)):(F=st(e),F.c(),p(F,1),F.m(z.parentNode,z)):F&&(Ae(),g(F,1,1,()=>{F=null}),De()),e[7]?I?(I.p(e,t),t[0]&128&&p(I,1)):(I=lt(e),I.c(),p(I,1),I.m(te.parentNode,te)):I&&(Ae(),g(I,1,1,()=>{I=null}),De()),e[8]?S?(S.p(e,t),t[0]&256&&p(S,1)):(S=mt(e),S.c(),p(S,1),S.m(ve.parentNode,ve)):S&&(Ae(),g(S,1,1,()=>{S=null}),De()),e[9]?P?(P.p(e,t),t[0]&512&&p(P,1)):(P=nt(e),P.c(),p(P,1),P.m(ge.parentNode,ge)):P&&(Ae(),g(P,1,1,()=>{P=null}),De());const Oa={};t[0]&32&&(Oa.data=e[5]),U.$set(Oa);const za={};t[0]&32&&(za.data=e[5]),me.$set(za),(!la||t[0]&1)&&J!==(J=e[0].cidade.label+"")&&Xa(_e,J);const Qa={};t[0]&64&&(Qa.data=e[6]),x.$set(Qa);const ja={};t[0]&64&&(ja.data=e[6]),W.$set(ja);const Wa={};t[0]&64&&(Wa.data=e[6]),fe.$set(Wa);const Ga={};t[0]&128&&(Ga.data=e[7]),ze.$set(Ga),(!la||t[0]&1)&&da!==(da=e[0].cidade.label+"")&&Xa(ka,da);const Ya={};t[0]&256&&(Ya.data=e[8]),t[2]&16&&(Ya.$$scope={dirty:t,ctx:e}),We.$set(Ya);const Ka={};t[0]&512&&(Ka.data=e[9]),Ke.$set(Ka)},i(e){la||(p(H),p(E),p(D),p(A),p(C.$$.fragment,e),p(N.$$.fragment,e),p(B.$$.fragment,e),p(ae.$$.fragment,e),p(M),p(F),p(I),p(S),p(P),p(U.$$.fragment,e),p(me.$$.fragment,e),p(x.$$.fragment,e),p(W.$$.fragment,e),p(fe.$$.fragment,e),p(ze.$$.fragment,e),p(We.$$.fragment,e),p(Ke.$$.fragment,e),la=!0)},o(e){g(H),g(E),g(D),g(A),g(C.$$.fragment,e),g(N.$$.fragment,e),g(B.$$.fragment,e),g(ae.$$.fragment,e),g(M),g(F),g(I),g(S),g(P),g(U.$$.fragment,e),g(me.$$.fragment,e),g(x.$$.fragment,e),g(W.$$.fragment,e),g(fe.$$.fragment,e),g(ze.$$.fragment,e),g(We.$$.fragment,e),g(Ke.$$.fragment,e),la=!1},d(e){e&&(m(r),m(_),m(s),m(f),m(b),m(i),m(V),m(ee),m(Ie),m(Se),m(O),m(z),m(te),m(ve),m(ge),m(G),m(re),m(Q),m(Pe),m(ke),m(ie),m(L),m(Le),m(oe),m(se),m(we),m(qe),m(Ne),m(K),m(le),m(j),m(Ue),m(ne),m(X),m($e),m(de),m(be),m(ue),m(xe),m(ce),m(Ve),m(Be),m(h),m(sa),m(Re),m(ya),m(Oe),m($a),m(ba),m(na),m(Ta),m(Qe),m(qa),m(je),m(Ra),m(Ca),m(_a),m(Ha),m(Ce),m(Ea),m(Ge),m(Da),m(Aa),m(ua),m(Ma),m(Xe)),He&&He.d(e),ca.d(e),m(o),m(a),Ee&&Ee.d(e),m(n),H&&H.d(e),E&&E.d(e),D&&D.d(e),A&&A.d(e),T(C,e),T(N,e),T(B,e),T(ae,e),M&&M.d(e),F&&F.d(e),I&&I.d(e),S&&S.d(e),P&&P.d(e),T(U,e),T(me,e),T(x,e),T(W,e),T(fe,e),T(ze,e),T(We,e),T(Ke,e)}}}const $={title:"Análise Horária"};function Yt(l,r,o){let a,n;Ja(l,Rt,h=>o(48,a=h)),Ja(l,et,h=>o(53,n=h));let{data:_}=r,{data:s={},customFormattingSettings:f,__db:b,inputs:i}=_;ct(et,n="5257bfd60b793404b6c71009eebcea92",n);let C=yt(kt(i));ft(C.subscribe(h=>o(0,i=h))),pt(Tt,{getCustomFormats:()=>f.customFormats||[]});const V=(h,sa)=>qt(b.query,h,{query_name:sa});$t(V),a.params,vt(()=>!0);let N={initialData:void 0,initialError:void 0},ee=Y`select value, label from (
  select 'Todas' as value, 'Todas as Regiões' as label, 0 as ord
  union all
  select distinct region as value, region as label, 1 as ord
  from weather_dw.mart_climate__hourly_facts
)
order by ord, label`,B=`select value, label from (
  select 'Todas' as value, 'Todas as Regiões' as label, 0 as ord
  union all
  select distinct region as value, region as label, 1 as ord
  from weather_dw.mart_climate__hourly_facts
)
order by ord, label`;s.regioes_data&&(s.regioes_data instanceof Error?N.initialError=s.regioes_data:N.initialData=s.regioes_data,s.regioes_columns&&(N.knownColumns=s.regioes_columns));let Ie,ae=!1;const Se=Me.createReactive({callback:h=>{o(1,Ie=h)},execFn:V},{id:"regioes",...N});Se(B,{noResolve:ee,...N}),globalThis[Symbol.for("regioes")]={get value(){return Ie}};let O={initialData:void 0,initialError:void 0},z=Y`select value, label from (
  select 'Todas' as value, 'Todas as Mesorregiões' as label, 0 as ord
  union all
  select distinct mesoregion as value, mesoregion as label, 1 as ord
  from weather_dw.mart_climate__hourly_facts
  where ('${i.regiao.value}' = 'Todas' or region = '${i.regiao.value}')
)
order by ord, label`,te=`select value, label from (
  select 'Todas' as value, 'Todas as Mesorregiões' as label, 0 as ord
  union all
  select distinct mesoregion as value, mesoregion as label, 1 as ord
  from weather_dw.mart_climate__hourly_facts
  where ('${i.regiao.value}' = 'Todas' or region = '${i.regiao.value}')
)
order by ord, label`;s.mesorregioes_data&&(s.mesorregioes_data instanceof Error?O.initialError=s.mesorregioes_data:O.initialData=s.mesorregioes_data,s.mesorregioes_columns&&(O.knownColumns=s.mesorregioes_columns));let ve,ge=!1;const G=Me.createReactive({callback:h=>{o(2,ve=h)},execFn:V},{id:"mesorregioes",...O});G(te,{noResolve:z,...O}),globalThis[Symbol.for("mesorregioes")]={get value(){return ve}};let he={initialData:void 0,initialError:void 0},re=Y`select distinct
  location_id as value,
  city_name   as label
from weather_dw.mart_climate__hourly_facts
where ('${i.regiao.value}'    = 'Todas' or region      = '${i.regiao.value}')
  and ('${i.mesoregiao.value}' = 'Todas' or mesoregion = '${i.mesoregiao.value}')
order by city_name`,Q=`select distinct
  location_id as value,
  city_name   as label
from weather_dw.mart_climate__hourly_facts
where ('${i.regiao.value}'    = 'Todas' or region      = '${i.regiao.value}')
  and ('${i.mesoregiao.value}' = 'Todas' or mesoregion = '${i.mesoregiao.value}')
order by city_name`;s.cidades_disponiveis_data&&(s.cidades_disponiveis_data instanceof Error?he.initialError=s.cidades_disponiveis_data:he.initialData=s.cidades_disponiveis_data,s.cidades_disponiveis_columns&&(he.knownColumns=s.cidades_disponiveis_columns));let ta,Pe=!1;const ke=Me.createReactive({callback:h=>{o(3,ta=h)},execFn:V},{id:"cidades_disponiveis",...he});ke(Q,{noResolve:re,...he}),globalThis[Symbol.for("cidades_disponiveis")]={get value(){return ta}};let ie={initialData:void 0,initialError:void 0},L=Y`select distinct
  strftime(date, '%Y-%m-%d') as value,
  strftime(date, '%d/%m/%Y') as label
from weather_dw.mart_climate__hourly_facts
order by value desc
limit 30`,Ye=`select distinct
  strftime(date, '%Y-%m-%d') as value,
  strftime(date, '%d/%m/%Y') as label
from weather_dw.mart_climate__hourly_facts
order by value desc
limit 30`;s.datas_disponiveis_data&&(s.datas_disponiveis_data instanceof Error?ie.initialError=s.datas_disponiveis_data:ie.initialData=s.datas_disponiveis_data,s.datas_disponiveis_columns&&(ie.knownColumns=s.datas_disponiveis_columns));let Le,oe=!1;const ra=Me.createReactive({callback:h=>{o(4,Le=h)},execFn:V},{id:"datas_disponiveis",...ie});ra(Ye,{noResolve:L,...ie}),globalThis[Symbol.for("datas_disponiveis")]={get value(){return Le}};let se={initialData:void 0,initialError:void 0},U=Y`select
  hour                                   as hora,
  round(avg(temperature_c), 1)          as temp_media,
  round(min(temperature_c), 1)          as temp_min,
  round(max(temperature_c), 1)          as temp_max,
  round(avg(relative_humidity_pct), 1)  as umidade_media
from weather_dw.mart_climate__hourly_facts
where ('${i.regiao.value}'    = 'Todas' or region     = '${i.regiao.value}')
  and ('${i.mesoregiao.value}' = 'Todas' or mesoregion = '${i.mesoregiao.value}')
group by hour
order by hour`,we=`select
  hour                                   as hora,
  round(avg(temperature_c), 1)          as temp_media,
  round(min(temperature_c), 1)          as temp_min,
  round(max(temperature_c), 1)          as temp_max,
  round(avg(relative_humidity_pct), 1)  as umidade_media
from weather_dw.mart_climate__hourly_facts
where ('${i.regiao.value}'    = 'Todas' or region     = '${i.regiao.value}')
  and ('${i.mesoregiao.value}' = 'Todas' or mesoregion = '${i.mesoregiao.value}')
group by hour
order by hour`;s.perfil_hora_regiao_data&&(s.perfil_hora_regiao_data instanceof Error?se.initialError=s.perfil_hora_regiao_data:se.initialData=s.perfil_hora_regiao_data,s.perfil_hora_regiao_columns&&(se.knownColumns=s.perfil_hora_regiao_columns));let qe,Ne=!1;const K=Me.createReactive({callback:h=>{o(5,qe=h)},execFn:V},{id:"perfil_hora_regiao",...se});K(we,{noResolve:U,...se}),globalThis[Symbol.for("perfil_hora_regiao")]={get value(){return qe}};let ye={initialData:void 0,initialError:void 0},le=Y`select
  hour                                   as hora,
  round(avg(temperature_c), 1)          as temperatura_c,
  round(avg(relative_humidity_pct), 1)  as umidade_pct,
  round(avg(precipitation_mm), 2)       as precipitacao_mm,
  round(avg(wind_speed_kmh), 1)         as vento_kmh,
  round(avg(cloud_cover_pct), 1)        as nebulosidade_pct
from weather_dw.mart_climate__hourly_facts
where location_id = '${i.cidade.value}'
  and strftime(date, '%Y-%m-%d') = '${i.data_ref.value}'
group by hour
order by hour`,j=`select
  hour                                   as hora,
  round(avg(temperature_c), 1)          as temperatura_c,
  round(avg(relative_humidity_pct), 1)  as umidade_pct,
  round(avg(precipitation_mm), 2)       as precipitacao_mm,
  round(avg(wind_speed_kmh), 1)         as vento_kmh,
  round(avg(cloud_cover_pct), 1)        as nebulosidade_pct
from weather_dw.mart_climate__hourly_facts
where location_id = '${i.cidade.value}'
  and strftime(date, '%Y-%m-%d') = '${i.data_ref.value}'
group by hour
order by hour`;s.serie_dia_municipio_data&&(s.serie_dia_municipio_data instanceof Error?ye.initialError=s.serie_dia_municipio_data:ye.initialData=s.serie_dia_municipio_data,s.serie_dia_municipio_columns&&(ye.knownColumns=s.serie_dia_municipio_columns));let ia,Ue=!1;const me=Me.createReactive({callback:h=>{o(6,ia=h)},execFn:V},{id:"serie_dia_municipio",...ye});me(j,{noResolve:le,...ye}),globalThis[Symbol.for("serie_dia_municipio")]={get value(){return ia}};let ne={initialData:void 0,initialError:void 0},X=Y`select
  h.hour                                                                    as hora,
  round(avg(case when strftime(h.date, '%Y-%m-%d') = '${i.data_ref.value}'
    then h.temperature_c end), 1)                                           as temp_dia_ref,
  round(avg(h.temperature_c), 1)                                            as temp_media_30d
from weather_dw.mart_climate__hourly_facts h
where h.location_id = '${i.cidade.value}'
group by h.hour
order by h.hour`,$e=`select
  h.hour                                                                    as hora,
  round(avg(case when strftime(h.date, '%Y-%m-%d') = '${i.data_ref.value}'
    then h.temperature_c end), 1)                                           as temp_dia_ref,
  round(avg(h.temperature_c), 1)                                            as temp_media_30d
from weather_dw.mart_climate__hourly_facts h
where h.location_id = '${i.cidade.value}'
group by h.hour
order by h.hour`;s.comparativo_dia_vs_media_data&&(s.comparativo_dia_vs_media_data instanceof Error?ne.initialError=s.comparativo_dia_vs_media_data:ne.initialData=s.comparativo_dia_vs_media_data,s.comparativo_dia_vs_media_columns&&(ne.knownColumns=s.comparativo_dia_vs_media_columns));let de,pe=!1;const Je=Me.createReactive({callback:h=>{o(7,de=h)},execFn:V},{id:"comparativo_dia_vs_media",...ne});Je($e,{noResolve:X,...ne}),globalThis[Symbol.for("comparativo_dia_vs_media")]={get value(){return de}};let J={initialData:void 0,initialError:void 0},_e=Y`select
  wmo_weather_label                      as condicao,
  count(*)                               as ocorrencias,
  round(avg(temperature_c), 1)          as temp_media,
  round(avg(relative_humidity_pct), 1)  as umidade_media
from weather_dw.mart_climate__hourly_facts
where location_id = '${i.cidade.value}'
group by wmo_weather_label
order by ocorrencias desc
limit 10`,be=`select
  wmo_weather_label                      as condicao,
  count(*)                               as ocorrencias,
  round(avg(temperature_c), 1)          as temp_media,
  round(avg(relative_humidity_pct), 1)  as umidade_media
from weather_dw.mart_climate__hourly_facts
where location_id = '${i.cidade.value}'
group by wmo_weather_label
order by ocorrencias desc
limit 10`;s.condicao_mais_frequente_data&&(s.condicao_mais_frequente_data instanceof Error?J.initialError=s.condicao_mais_frequente_data:J.initialData=s.condicao_mais_frequente_data,s.condicao_mais_frequente_columns&&(J.knownColumns=s.condicao_mais_frequente_columns));let ue,oa=!1;const xe=Me.createReactive({callback:h=>{o(8,ue=h)},execFn:V},{id:"condicao_mais_frequente",...J});xe(be,{noResolve:_e,...J}),globalThis[Symbol.for("condicao_mais_frequente")]={get value(){return ue}};let x={initialData:void 0,initialError:void 0},ce=Y`select
  city_name,
  region,
  round(avg(latitude), 4)         as latitude,
  round(avg(longitude), 4)        as longitude,
  round(avg(temperature_c), 1)    as temp_media,
  round(avg(wind_speed_kmh), 1)   as vento_medio
from weather_dw.mart_climate__hourly_facts
where strftime(date, '%Y-%m-%d') = '${i.data_ref.value}'
  and ('${i.regiao.value}'    = 'Todas' or region     = '${i.regiao.value}')
  and ('${i.mesoregiao.value}' = 'Todas' or mesoregion = '${i.mesoregiao.value}')
group by city_name, region`,W=`select
  city_name,
  region,
  round(avg(latitude), 4)         as latitude,
  round(avg(longitude), 4)        as longitude,
  round(avg(temperature_c), 1)    as temp_media,
  round(avg(wind_speed_kmh), 1)   as vento_medio
from weather_dw.mart_climate__hourly_facts
where strftime(date, '%Y-%m-%d') = '${i.data_ref.value}'
  and ('${i.regiao.value}'    = 'Todas' or region     = '${i.regiao.value}')
  and ('${i.mesoregiao.value}' = 'Todas' or mesoregion = '${i.mesoregiao.value}')
group by city_name, region`;s.mapa_temperatura_atual_data&&(s.mapa_temperatura_atual_data instanceof Error?x.initialError=s.mapa_temperatura_atual_data:x.initialData=s.mapa_temperatura_atual_data,s.mapa_temperatura_atual_columns&&(x.knownColumns=s.mapa_temperatura_atual_columns));let Ve,fe=!1;const Be=Me.createReactive({callback:h=>{o(9,Ve=h)},execFn:V},{id:"mapa_temperatura_atual",...x});return Be(W,{noResolve:ce,...x}),globalThis[Symbol.for("mapa_temperatura_atual")]={get value(){return Ve}},l.$$set=h=>{"data"in h&&o(10,_=h.data)},l.$$.update=()=>{l.$$.dirty[0]&1024&&o(11,{data:s={},customFormattingSettings:f,__db:b}=_,s),l.$$.dirty[0]&2048&&bt.set(Object.keys(s).length>0),l.$$.dirty[1]&131072&&a.params,l.$$.dirty[0]&61440&&(ee||!ae?ee||(Se(B,{noResolve:ee,...N}),o(15,ae=!0)):Se(B,{noResolve:ee})),l.$$.dirty[0]&1&&o(17,z=Y`select value, label from (
  select 'Todas' as value, 'Todas as Mesorregiões' as label, 0 as ord
  union all
  select distinct mesoregion as value, mesoregion as label, 1 as ord
  from weather_dw.mart_climate__hourly_facts
  where ('${i.regiao.value}' = 'Todas' or region = '${i.regiao.value}')
)
order by ord, label`),l.$$.dirty[0]&1&&o(18,te=`select value, label from (
  select 'Todas' as value, 'Todas as Mesorregiões' as label, 0 as ord
  union all
  select distinct mesoregion as value, mesoregion as label, 1 as ord
  from weather_dw.mart_climate__hourly_facts
  where ('${i.regiao.value}' = 'Todas' or region = '${i.regiao.value}')
)
order by ord, label`),l.$$.dirty[0]&983040&&(z||!ge?z||(G(te,{noResolve:z,...O}),o(19,ge=!0)):G(te,{noResolve:z})),l.$$.dirty[0]&1&&o(21,re=Y`select distinct
  location_id as value,
  city_name   as label
from weather_dw.mart_climate__hourly_facts
where ('${i.regiao.value}'    = 'Todas' or region      = '${i.regiao.value}')
  and ('${i.mesoregiao.value}' = 'Todas' or mesoregion = '${i.mesoregiao.value}')
order by city_name`),l.$$.dirty[0]&1&&o(22,Q=`select distinct
  location_id as value,
  city_name   as label
from weather_dw.mart_climate__hourly_facts
where ('${i.regiao.value}'    = 'Todas' or region      = '${i.regiao.value}')
  and ('${i.mesoregiao.value}' = 'Todas' or mesoregion = '${i.mesoregiao.value}')
order by city_name`),l.$$.dirty[0]&15728640&&(re||!Pe?re||(ke(Q,{noResolve:re,...he}),o(23,Pe=!0)):ke(Q,{noResolve:re})),l.$$.dirty[0]&251658240&&(L||!oe?L||(ra(Ye,{noResolve:L,...ie}),o(27,oe=!0)):ra(Ye,{noResolve:L})),l.$$.dirty[0]&1&&o(29,U=Y`select
  hour                                   as hora,
  round(avg(temperature_c), 1)          as temp_media,
  round(min(temperature_c), 1)          as temp_min,
  round(max(temperature_c), 1)          as temp_max,
  round(avg(relative_humidity_pct), 1)  as umidade_media
from weather_dw.mart_climate__hourly_facts
where ('${i.regiao.value}'    = 'Todas' or region     = '${i.regiao.value}')
  and ('${i.mesoregiao.value}' = 'Todas' or mesoregion = '${i.mesoregiao.value}')
group by hour
order by hour`),l.$$.dirty[0]&1&&o(30,we=`select
  hour                                   as hora,
  round(avg(temperature_c), 1)          as temp_media,
  round(min(temperature_c), 1)          as temp_min,
  round(max(temperature_c), 1)          as temp_max,
  round(avg(relative_humidity_pct), 1)  as umidade_media
from weather_dw.mart_climate__hourly_facts
where ('${i.regiao.value}'    = 'Todas' or region     = '${i.regiao.value}')
  and ('${i.mesoregiao.value}' = 'Todas' or mesoregion = '${i.mesoregiao.value}')
group by hour
order by hour`),l.$$.dirty[0]&1879048192|l.$$.dirty[1]&1&&(U||!Ne?U||(K(we,{noResolve:U,...se}),o(31,Ne=!0)):K(we,{noResolve:U})),l.$$.dirty[0]&1&&o(33,le=Y`select
  hour                                   as hora,
  round(avg(temperature_c), 1)          as temperatura_c,
  round(avg(relative_humidity_pct), 1)  as umidade_pct,
  round(avg(precipitation_mm), 2)       as precipitacao_mm,
  round(avg(wind_speed_kmh), 1)         as vento_kmh,
  round(avg(cloud_cover_pct), 1)        as nebulosidade_pct
from weather_dw.mart_climate__hourly_facts
where location_id = '${i.cidade.value}'
  and strftime(date, '%Y-%m-%d') = '${i.data_ref.value}'
group by hour
order by hour`),l.$$.dirty[0]&1&&o(34,j=`select
  hour                                   as hora,
  round(avg(temperature_c), 1)          as temperatura_c,
  round(avg(relative_humidity_pct), 1)  as umidade_pct,
  round(avg(precipitation_mm), 2)       as precipitacao_mm,
  round(avg(wind_speed_kmh), 1)         as vento_kmh,
  round(avg(cloud_cover_pct), 1)        as nebulosidade_pct
from weather_dw.mart_climate__hourly_facts
where location_id = '${i.cidade.value}'
  and strftime(date, '%Y-%m-%d') = '${i.data_ref.value}'
group by hour
order by hour`),l.$$.dirty[1]&30&&(le||!Ue?le||(me(j,{noResolve:le,...ye}),o(35,Ue=!0)):me(j,{noResolve:le})),l.$$.dirty[0]&1&&o(37,X=Y`select
  h.hour                                                                    as hora,
  round(avg(case when strftime(h.date, '%Y-%m-%d') = '${i.data_ref.value}'
    then h.temperature_c end), 1)                                           as temp_dia_ref,
  round(avg(h.temperature_c), 1)                                            as temp_media_30d
from weather_dw.mart_climate__hourly_facts h
where h.location_id = '${i.cidade.value}'
group by h.hour
order by h.hour`),l.$$.dirty[0]&1&&o(38,$e=`select
  h.hour                                                                    as hora,
  round(avg(case when strftime(h.date, '%Y-%m-%d') = '${i.data_ref.value}'
    then h.temperature_c end), 1)                                           as temp_dia_ref,
  round(avg(h.temperature_c), 1)                                            as temp_media_30d
from weather_dw.mart_climate__hourly_facts h
where h.location_id = '${i.cidade.value}'
group by h.hour
order by h.hour`),l.$$.dirty[1]&480&&(X||!pe?X||(Je($e,{noResolve:X,...ne}),o(39,pe=!0)):Je($e,{noResolve:X})),l.$$.dirty[0]&1&&o(41,_e=Y`select
  wmo_weather_label                      as condicao,
  count(*)                               as ocorrencias,
  round(avg(temperature_c), 1)          as temp_media,
  round(avg(relative_humidity_pct), 1)  as umidade_media
from weather_dw.mart_climate__hourly_facts
where location_id = '${i.cidade.value}'
group by wmo_weather_label
order by ocorrencias desc
limit 10`),l.$$.dirty[0]&1&&o(42,be=`select
  wmo_weather_label                      as condicao,
  count(*)                               as ocorrencias,
  round(avg(temperature_c), 1)          as temp_media,
  round(avg(relative_humidity_pct), 1)  as umidade_media
from weather_dw.mart_climate__hourly_facts
where location_id = '${i.cidade.value}'
group by wmo_weather_label
order by ocorrencias desc
limit 10`),l.$$.dirty[1]&7680&&(_e||!oa?_e||(xe(be,{noResolve:_e,...J}),o(43,oa=!0)):xe(be,{noResolve:_e})),l.$$.dirty[0]&1&&o(45,ce=Y`select
  city_name,
  region,
  round(avg(latitude), 4)         as latitude,
  round(avg(longitude), 4)        as longitude,
  round(avg(temperature_c), 1)    as temp_media,
  round(avg(wind_speed_kmh), 1)   as vento_medio
from weather_dw.mart_climate__hourly_facts
where strftime(date, '%Y-%m-%d') = '${i.data_ref.value}'
  and ('${i.regiao.value}'    = 'Todas' or region     = '${i.regiao.value}')
  and ('${i.mesoregiao.value}' = 'Todas' or mesoregion = '${i.mesoregiao.value}')
group by city_name, region`),l.$$.dirty[0]&1&&o(46,W=`select
  city_name,
  region,
  round(avg(latitude), 4)         as latitude,
  round(avg(longitude), 4)        as longitude,
  round(avg(temperature_c), 1)    as temp_media,
  round(avg(wind_speed_kmh), 1)   as vento_medio
from weather_dw.mart_climate__hourly_facts
where strftime(date, '%Y-%m-%d') = '${i.data_ref.value}'
  and ('${i.regiao.value}'    = 'Todas' or region     = '${i.regiao.value}')
  and ('${i.mesoregiao.value}' = 'Todas' or mesoregion = '${i.mesoregiao.value}')
group by city_name, region`),l.$$.dirty[1]&122880&&(ce||!fe?ce||(Be(W,{noResolve:ce,...x}),o(47,fe=!0)):Be(W,{noResolve:ce}))},o(13,ee=Y`select value, label from (
  select 'Todas' as value, 'Todas as Regiões' as label, 0 as ord
  union all
  select distinct region as value, region as label, 1 as ord
  from weather_dw.mart_climate__hourly_facts
)
order by ord, label`),o(14,B=`select value, label from (
  select 'Todas' as value, 'Todas as Regiões' as label, 0 as ord
  union all
  select distinct region as value, region as label, 1 as ord
  from weather_dw.mart_climate__hourly_facts
)
order by ord, label`),o(25,L=Y`select distinct
  strftime(date, '%Y-%m-%d') as value,
  strftime(date, '%d/%m/%Y') as label
from weather_dw.mart_climate__hourly_facts
order by value desc
limit 30`),o(26,Ye=`select distinct
  strftime(date, '%Y-%m-%d') as value,
  strftime(date, '%d/%m/%Y') as label
from weather_dw.mart_climate__hourly_facts
order by value desc
limit 30`),[i,Ie,ve,ta,Le,qe,ia,de,ue,Ve,_,s,N,ee,B,ae,O,z,te,ge,he,re,Q,Pe,ie,L,Ye,oe,se,U,we,Ne,ye,le,j,Ue,ne,X,$e,pe,J,_e,be,oa,x,ce,W,fe,a]}class Gt extends gt{constructor(r){super(),ht(this,r,Yt,Pt,_t,{data:10},null,[-1,-1,-1])}}export{Gt as component};
