import{s as mt,d as l,v as Ka,i as m,a as we,b as v,c,h as _t,e as y,f as Fa,g as ae,r as pa,t as va,j as f,k as w,u as ha,l as Xa,m as ut,o as ct,n as ft,p as pt,q as ea}from"../chunks/scheduler.BiECNykD.js";import{S as vt,i as ht,d as k,t as h,a as p,c as He,m as T,b as q,e as R,g as Ee}from"../chunks/index.DMIfMoOS.js";import{D as gt,e as yt,s as wt,Q as De,p as $t,b as Ma,a as Ja,r as Za,C as bt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BJBNz7OY.js";import{w as kt}from"../chunks/entry.Bbs89ys7.js";import{h as P,p as Tt}from"../chunks/button.DqjGl4eC.js";import{D as Ya,Q as Ae}from"../chunks/getCompletedData.DH_oERSc.js";import{p as qt}from"../chunks/stores.B8_LoWM1.js";import{B as Rt}from"../chunks/BarChart.DfXFXSyp.js";import{L as fa}from"../chunks/LineChart.BvMYc717.js";import{B as Ct}from"../chunks/BubbleMap.DFUH2WIA.js";function Ht(n){let i,r=$.title+"",a;return{c(){i=w("h1"),a=ha(r),this.h()},l(d){i=y(d,"H1",{class:!0});var _=pa(i);a=va(_,r),_.forEach(l),this.h()},h(){v(i,"class","title")},m(d,_){m(d,i,_),we(i,a)},p:ea,d(d){d&&l(i)}}}function Et(n){return{c(){this.h()},l(i){this.h()},h(){document.title="Evidence"},m:ea,p:ea,d:ea}}function Dt(n){let i,r,a,d,_;return document.title=i=$.title,{c(){r=f(),a=w("meta"),d=f(),_=w("meta"),this.h()},l(s){r=c(s),a=y(s,"META",{property:!0,content:!0}),d=c(s),_=y(s,"META",{name:!0,content:!0}),this.h()},h(){var s,u;v(a,"property","og:title"),v(a,"content",((s=$.og)==null?void 0:s.title)??$.title),v(_,"name","twitter:title"),v(_,"content",((u=$.og)==null?void 0:u.title)??$.title)},m(s,u){m(s,r,u),m(s,a,u),m(s,d,u),m(s,_,u)},p(s,u){u&0&&i!==(i=$.title)&&(document.title=i)},d(s){s&&(l(r),l(a),l(d),l(_))}}}function At(n){var _,s;let i,r,a=($.description||((_=$.og)==null?void 0:_.description))&&Mt(),d=((s=$.og)==null?void 0:s.image)&&Ft();return{c(){a&&a.c(),i=f(),d&&d.c(),r=Fa()},l(u){a&&a.l(u),i=c(u),d&&d.l(u),r=Fa()},m(u,b){a&&a.m(u,b),m(u,i,b),d&&d.m(u,b),m(u,r,b)},p(u,b){var o,C;($.description||(o=$.og)!=null&&o.description)&&a.p(u,b),(C=$.og)!=null&&C.image&&d.p(u,b)},d(u){u&&(l(i),l(r)),a&&a.d(u),d&&d.d(u)}}}function Mt(n){let i,r,a,d,_;return{c(){i=w("meta"),r=f(),a=w("meta"),d=f(),_=w("meta"),this.h()},l(s){i=y(s,"META",{name:!0,content:!0}),r=c(s),a=y(s,"META",{property:!0,content:!0}),d=c(s),_=y(s,"META",{name:!0,content:!0}),this.h()},h(){var s,u,b;v(i,"name","description"),v(i,"content",$.description??((s=$.og)==null?void 0:s.description)),v(a,"property","og:description"),v(a,"content",((u=$.og)==null?void 0:u.description)??$.description),v(_,"name","twitter:description"),v(_,"content",((b=$.og)==null?void 0:b.description)??$.description)},m(s,u){m(s,i,u),m(s,r,u),m(s,a,u),m(s,d,u),m(s,_,u)},p:ea,d(s){s&&(l(i),l(r),l(a),l(d),l(_))}}}function Ft(n){let i,r,a;return{c(){i=w("meta"),r=f(),a=w("meta"),this.h()},l(d){i=y(d,"META",{property:!0,content:!0}),r=c(d),a=y(d,"META",{name:!0,content:!0}),this.h()},h(){var d,_;v(i,"property","og:image"),v(i,"content",Ja((d=$.og)==null?void 0:d.image)),v(a,"name","twitter:image"),v(a,"content",Ja((_=$.og)==null?void 0:_.image))},m(d,_){m(d,i,_),m(d,r,_),m(d,a,_)},p:ea,d(d){d&&(l(i),l(r),l(a))}}}function et(n){let i,r;return i=new Ae({props:{queryID:"mesorregioes",queryResult:n[1]}}),{c(){R(i.$$.fragment)},l(a){q(i.$$.fragment,a)},m(a,d){T(i,a,d),r=!0},p(a,d){const _={};d[0]&2&&(_.queryResult=a[1]),i.$set(_)},i(a){r||(p(i.$$.fragment,a),r=!0)},o(a){h(i.$$.fragment,a),r=!1},d(a){k(i,a)}}}function at(n){let i,r;return i=new Ae({props:{queryID:"cidades_disponiveis",queryResult:n[2]}}),{c(){R(i.$$.fragment)},l(a){q(i.$$.fragment,a)},m(a,d){T(i,a,d),r=!0},p(a,d){const _={};d[0]&4&&(_.queryResult=a[2]),i.$set(_)},i(a){r||(p(i.$$.fragment,a),r=!0)},o(a){h(i.$$.fragment,a),r=!1},d(a){k(i,a)}}}function tt(n){let i,r;return i=new Ae({props:{queryID:"datas_disponiveis",queryResult:n[3]}}),{c(){R(i.$$.fragment)},l(a){q(i.$$.fragment,a)},m(a,d){T(i,a,d),r=!0},p(a,d){const _={};d[0]&8&&(_.queryResult=a[3]),i.$set(_)},i(a){r||(p(i.$$.fragment,a),r=!0)},o(a){h(i.$$.fragment,a),r=!1},d(a){k(i,a)}}}function it(n){let i,r;return i=new Ae({props:{queryID:"data_mais_recente",queryResult:n[4]}}),{c(){R(i.$$.fragment)},l(a){q(i.$$.fragment,a)},m(a,d){T(i,a,d),r=!0},p(a,d){const _={};d[0]&16&&(_.queryResult=a[4]),i.$set(_)},i(a){r||(p(i.$$.fragment,a),r=!0)},o(a){h(i.$$.fragment,a),r=!1},d(a){k(i,a)}}}function rt(n){let i,r;return i=new Ae({props:{queryID:"perfil_hora_regiao",queryResult:n[5]}}),{c(){R(i.$$.fragment)},l(a){q(i.$$.fragment,a)},m(a,d){T(i,a,d),r=!0},p(a,d){const _={};d[0]&32&&(_.queryResult=a[5]),i.$set(_)},i(a){r||(p(i.$$.fragment,a),r=!0)},o(a){h(i.$$.fragment,a),r=!1},d(a){k(i,a)}}}function ot(n){let i,r;return i=new Ae({props:{queryID:"serie_dia_municipio",queryResult:n[6]}}),{c(){R(i.$$.fragment)},l(a){q(i.$$.fragment,a)},m(a,d){T(i,a,d),r=!0},p(a,d){const _={};d[0]&64&&(_.queryResult=a[6]),i.$set(_)},i(a){r||(p(i.$$.fragment,a),r=!0)},o(a){h(i.$$.fragment,a),r=!1},d(a){k(i,a)}}}function st(n){let i,r;return i=new Ae({props:{queryID:"comparativo_dia_vs_media",queryResult:n[7]}}),{c(){R(i.$$.fragment)},l(a){q(i.$$.fragment,a)},m(a,d){T(i,a,d),r=!0},p(a,d){const _={};d[0]&128&&(_.queryResult=a[7]),i.$set(_)},i(a){r||(p(i.$$.fragment,a),r=!0)},o(a){h(i.$$.fragment,a),r=!1},d(a){k(i,a)}}}function lt(n){let i,r;return i=new Ae({props:{queryID:"condicao_mais_frequente",queryResult:n[8]}}),{c(){R(i.$$.fragment)},l(a){q(i.$$.fragment,a)},m(a,d){T(i,a,d),r=!0},p(a,d){const _={};d[0]&256&&(_.queryResult=a[8]),i.$set(_)},i(a){r||(p(i.$$.fragment,a),r=!0)},o(a){h(i.$$.fragment,a),r=!1},d(a){k(i,a)}}}function nt(n){let i,r;return i=new Ae({props:{queryID:"mapa_temperatura_atual",queryResult:n[9]}}),{c(){R(i.$$.fragment)},l(a){q(i.$$.fragment,a)},m(a,d){T(i,a,d),r=!0},p(a,d){const _={};d[0]&512&&(_.queryResult=a[9]),i.$set(_)},i(a){r||(p(i.$$.fragment,a),r=!0)},o(a){h(i.$$.fragment,a),r=!1},d(a){k(i,a)}}}function It(n){let i,r,a,d,_,s,u,b;return i=new Ma({props:{id:"condicao",title:"Condição"}}),a=new Ma({props:{id:"ocorrencias",title:"Horas registradas"}}),_=new Ma({props:{id:"temp_media",title:"Temp. Média (°C)",fmt:"0.0",contentType:"colorscale"}}),u=new Ma({props:{id:"umidade_media",title:"Umidade Média (%)",fmt:"0.0"}}),{c(){R(i.$$.fragment),r=f(),R(a.$$.fragment),d=f(),R(_.$$.fragment),s=f(),R(u.$$.fragment)},l(o){q(i.$$.fragment,o),r=c(o),q(a.$$.fragment,o),d=c(o),q(_.$$.fragment,o),s=c(o),q(u.$$.fragment,o)},m(o,C){T(i,o,C),m(o,r,C),T(a,o,C),m(o,d,C),T(_,o,C),m(o,s,C),T(u,o,C),b=!0},p:ea,i(o){b||(p(i.$$.fragment,o),p(a.$$.fragment,o),p(_.$$.fragment,o),p(u.$$.fragment,o),b=!0)},o(o){h(i.$$.fragment,o),h(a.$$.fragment,o),h(_.$$.fragment,o),h(u.$$.fragment,o),b=!1},d(o){o&&(l(r),l(d),l(s)),k(i,o),k(a,o),k(_,o),k(u,o)}}}function St(n){var Ba;let i,r,a,d,_,s,u,b,o,C,O,x,te,j,Me,ue,ce,z,Q,ie,K,aa='<a href="#análise-horária--santa-catarina">Análise Horária — Santa Catarina</a>',Fe,L,fe='Os dados diários mostram o que aconteceu num dia. Os dados horários mostram <strong class="markdown">como</strong> aconteceu — o pico de calor foi às 14h ou às 16h? A umidade cai com o vento? A chuva foi pela manhã ou à noite? Esta página revela os padrões intradiários que ficam invisíveis nas médias diárias.',pe,$e,Ie,X,ve='<a href="#perfil-de-temperatura-por-hora-do-dia">Perfil de Temperatura por Hora do Dia</a>',re,W,ta="Como a temperatura varia ao longo das 24 horas na mesorregião selecionada, considerando os últimos 30 dias. A banda entre mínima e máxima revela a amplitude típica de cada hora — horas da madrugada tendem a ter banda estreita; o início da tarde, a mais larga.",Se,oe,se,J,he,Z,ia='<a href="#umidade-média-por-hora-do-dia">Umidade Média por Hora do Dia</a>',Ye,N,ge="A umidade relativa segue um padrão inverso à temperatura — cai no período mais quente do dia e sobe à noite. Regiões costeiras tendem a manter umidade alta mesmo no período seco; o Oeste e o Planalto apresentam as maiores quedas diurnas.",ye,le,Pe,be,ne,U,ee,Je,ke=n[0].cidade.label+"",xe,de,B,Le="Curva horária completa do município selecionado no dia de referência: temperatura, umidade, precipitação, vento e nebulosidade hora a hora.",Ne,me,Ue,V,_e,G,Be,Te,Ve,g,ga='<a href="#dia-de-referência-vs-média-dos-últimos-30-dias">Dia de Referência vs Média dos Últimos 30 dias</a>',ya,Oe,Pa="Compara a curva de temperatura do dia selecionado com a média histórica das mesmas horas nos últimos 30 dias para o mesmo município. Permite identificar se o dia foi atipicamente quente, frio ou dentro do padrão esperado para cada período do dia.",wa,je,$a,na,ba,ze,Ze,Ia,da=n[0].cidade.label+"",ka,Ta,Qe,xa="Distribuição das condições atmosféricas registradas nos últimos 30 dias com temperatura e umidade média associadas a cada condição.",qa,We,Ra,ma,Ca,qe,La='<a href="#temperatura-por-município-no-dia-selecionado">Temperatura por Município no Dia Selecionado</a>',Ha,Ge,Na="Mapa com a temperatura média de cada município no dia de referência, calculada sobre todas as horas disponíveis. Revela quais regiões foram mais quentes ou frias naquele dia específico.",Ea,Ke,Da,_a,Aa,Xe,Ua='<strong class="markdown">Navegação:</strong> <a href="/Analytics-Engineer/Weather-Analytics/" class="markdown">Início</a> · <a href="/Analytics-Engineer/Weather-Analytics/temperatura" class="markdown">Temperatura</a> · <a href="/Analytics-Engineer/Weather-Analytics/precipitacao" class="markdown">Precipitação</a> · <a href="/Analytics-Engineer/Weather-Analytics/alertas" class="markdown">Alertas</a>',ra,Re=typeof $<"u"&&$.title&&$.hide_title!==!0&&Ht();function dt(e,t){return typeof $<"u"&&$.title?Dt:Et}let ua=dt()(n),Ce=typeof $=="object"&&At(),H=n[1]&&et(n),E=n[2]&&at(n),D=n[3]&&tt(n),A=n[4]&&it(n);C=new Ya({props:{name:"mesoregiao",data:n[1],value:"value",label:"label",title:"Mesorregião",defaultValue:"Todas"}}),x=new Ya({props:{name:"cidade",data:n[2],value:"value",label:"label",title:"Município",defaultValue:"florianopolis"}}),j=new Ya({props:{name:"data_ref",data:n[3],value:"value",label:"label",title:"Dia de referência",defaultValue:(Ba=n[4][0])==null?void 0:Ba.value}});let M=n[5]&&rt(n),F=n[6]&&ot(n),I=n[7]&&st(n),S=n[8]&&lt(n),Y=n[9]&&nt(n);return oe=new fa({props:{data:n[5],x:"hora",y:["temp_max","temp_media","temp_min"],yAxisTitle:"Temperatura (°C)",xAxisTitle:"Hora do dia",colorPalette:["#D73027","#FC8D59","#4575B4"],labels:!0}}),le=new fa({props:{data:n[5],x:"hora",y:"umidade_media",yAxisTitle:"Umidade relativa (%)",xAxisTitle:"Hora do dia",colorPalette:["#3182BD"]}}),me=new fa({props:{data:n[6],x:"hora",y:["temperatura_c","umidade_pct"],yAxisTitle:"Temperatura (°C) / Umidade (%)",xAxisTitle:"Hora do dia",colorPalette:["#D73027","#3182BD"],labels:!0}}),V=new Rt({props:{data:n[6],x:"hora",y:"precipitacao_mm",yAxisTitle:"Precipitação (mm)",xAxisTitle:"Hora do dia",colorPalette:["#08519C"],title:"Precipitação por hora"}}),G=new fa({props:{data:n[6],x:"hora",y:["vento_kmh","nebulosidade_pct"],yAxisTitle:"Vento (km/h) / Nebulosidade (%)",xAxisTitle:"Hora do dia",colorPalette:["#74ADD1","#999999"],title:"Vento e Nebulosidade"}}),je=new fa({props:{data:n[7],x:"hora",y:["temp_dia_ref","temp_media_30d"],yAxisTitle:"Temperatura (°C)",xAxisTitle:"Hora do dia",colorPalette:["#D73027","#999999"],labels:!0}}),We=new gt({props:{data:n[8],$$slots:{default:[It]},$$scope:{ctx:n}}}),Ke=new Ct({props:{data:n[9],lat:"latitude",long:"longitude",size:"vento_medio",value:"temp_media",pointName:"city_name",valueFmt:"0.0°C",title:"Temperatura média do dia por município (tamanho = velocidade do vento)"}}),{c(){Re&&Re.c(),i=f(),ua.c(),r=w("meta"),a=w("meta"),Ce&&Ce.c(),d=Fa(),_=f(),H&&H.c(),s=f(),E&&E.c(),u=f(),D&&D.c(),b=f(),A&&A.c(),o=f(),R(C.$$.fragment),O=f(),R(x.$$.fragment),te=f(),R(j.$$.fragment),Me=f(),M&&M.c(),ue=f(),F&&F.c(),ce=f(),I&&I.c(),z=f(),S&&S.c(),Q=f(),Y&&Y.c(),ie=f(),K=w("h1"),K.innerHTML=aa,Fe=f(),L=w("p"),L.innerHTML=fe,pe=f(),$e=w("hr"),Ie=f(),X=w("h2"),X.innerHTML=ve,re=f(),W=w("p"),W.textContent=ta,Se=f(),R(oe.$$.fragment),se=f(),J=w("hr"),he=f(),Z=w("h2"),Z.innerHTML=ia,Ye=f(),N=w("p"),N.textContent=ge,ye=f(),R(le.$$.fragment),Pe=f(),be=w("hr"),ne=f(),U=w("h2"),ee=w("a"),Je=ha("Detalhamento do Dia — "),xe=ha(ke),de=f(),B=w("p"),B.textContent=Le,Ne=f(),R(me.$$.fragment),Ue=f(),R(V.$$.fragment),_e=f(),R(G.$$.fragment),Be=f(),Te=w("hr"),Ve=f(),g=w("h2"),g.innerHTML=ga,ya=f(),Oe=w("p"),Oe.textContent=Pa,wa=f(),R(je.$$.fragment),$a=f(),na=w("hr"),ba=f(),ze=w("h2"),Ze=w("a"),Ia=ha("Condições Climáticas mais Frequentes — "),ka=ha(da),Ta=f(),Qe=w("p"),Qe.textContent=xa,qa=f(),R(We.$$.fragment),Ra=f(),ma=w("hr"),Ca=f(),qe=w("h2"),qe.innerHTML=La,Ha=f(),Ge=w("p"),Ge.textContent=Na,Ea=f(),R(Ke.$$.fragment),Da=f(),_a=w("hr"),Aa=f(),Xe=w("p"),Xe.innerHTML=Ua,this.h()},l(e){Re&&Re.l(e),i=c(e);const t=_t("svelte-2igo1p",document.head);ua.l(t),r=y(t,"META",{name:!0,content:!0}),a=y(t,"META",{name:!0,content:!0}),Ce&&Ce.l(t),d=Fa(),t.forEach(l),_=c(e),H&&H.l(e),s=c(e),E&&E.l(e),u=c(e),D&&D.l(e),b=c(e),A&&A.l(e),o=c(e),q(C.$$.fragment,e),O=c(e),q(x.$$.fragment,e),te=c(e),q(j.$$.fragment,e),Me=c(e),M&&M.l(e),ue=c(e),F&&F.l(e),ce=c(e),I&&I.l(e),z=c(e),S&&S.l(e),Q=c(e),Y&&Y.l(e),ie=c(e),K=y(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),ae(K)!=="svelte-1n3uigf"&&(K.innerHTML=aa),Fe=c(e),L=y(e,"P",{class:!0,"data-svelte-h":!0}),ae(L)!=="svelte-z76kq0"&&(L.innerHTML=fe),pe=c(e),$e=y(e,"HR",{class:!0}),Ie=c(e),X=y(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ae(X)!=="svelte-t0zjo9"&&(X.innerHTML=ve),re=c(e),W=y(e,"P",{class:!0,"data-svelte-h":!0}),ae(W)!=="svelte-1amf4jk"&&(W.textContent=ta),Se=c(e),q(oe.$$.fragment,e),se=c(e),J=y(e,"HR",{class:!0}),he=c(e),Z=y(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ae(Z)!=="svelte-1u3fszb"&&(Z.innerHTML=ia),Ye=c(e),N=y(e,"P",{class:!0,"data-svelte-h":!0}),ae(N)!=="svelte-1i680c9"&&(N.textContent=ge),ye=c(e),q(le.$$.fragment,e),Pe=c(e),be=y(e,"HR",{class:!0}),ne=c(e),U=y(e,"H2",{class:!0,id:!0});var ca=pa(U);ee=y(ca,"A",{href:!0});var oa=pa(ee);Je=va(oa,"Detalhamento do Dia — "),xe=va(oa,ke),oa.forEach(l),ca.forEach(l),de=c(e),B=y(e,"P",{class:!0,"data-svelte-h":!0}),ae(B)!=="svelte-1vq3yrr"&&(B.textContent=Le),Ne=c(e),q(me.$$.fragment,e),Ue=c(e),q(V.$$.fragment,e),_e=c(e),q(G.$$.fragment,e),Be=c(e),Te=y(e,"HR",{class:!0}),Ve=c(e),g=y(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ae(g)!=="svelte-ar1v13"&&(g.innerHTML=ga),ya=c(e),Oe=y(e,"P",{class:!0,"data-svelte-h":!0}),ae(Oe)!=="svelte-1i9lh2x"&&(Oe.textContent=Pa),wa=c(e),q(je.$$.fragment,e),$a=c(e),na=y(e,"HR",{class:!0}),ba=c(e),ze=y(e,"H2",{class:!0,id:!0});var sa=pa(ze);Ze=y(sa,"A",{href:!0});var la=pa(Ze);Ia=va(la,"Condições Climáticas mais Frequentes — "),ka=va(la,da),la.forEach(l),sa.forEach(l),Ta=c(e),Qe=y(e,"P",{class:!0,"data-svelte-h":!0}),ae(Qe)!=="svelte-14vw4w3"&&(Qe.textContent=xa),qa=c(e),q(We.$$.fragment,e),Ra=c(e),ma=y(e,"HR",{class:!0}),Ca=c(e),qe=y(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ae(qe)!=="svelte-1oz83qb"&&(qe.innerHTML=La),Ha=c(e),Ge=y(e,"P",{class:!0,"data-svelte-h":!0}),ae(Ge)!=="svelte-1uztm9t"&&(Ge.textContent=Na),Ea=c(e),q(Ke.$$.fragment,e),Da=c(e),_a=y(e,"HR",{class:!0}),Aa=c(e),Xe=y(e,"P",{class:!0,"data-svelte-h":!0}),ae(Xe)!=="svelte-16d680s"&&(Xe.innerHTML=Ua),this.h()},h(){v(r,"name","twitter:card"),v(r,"content","summary_large_image"),v(a,"name","twitter:site"),v(a,"content","@evidence_dev"),v(K,"class","markdown"),v(K,"id","análise-horária--santa-catarina"),v(L,"class","markdown"),v($e,"class","markdown"),v(X,"class","markdown"),v(X,"id","perfil-de-temperatura-por-hora-do-dia"),v(W,"class","markdown"),v(J,"class","markdown"),v(Z,"class","markdown"),v(Z,"id","umidade-média-por-hora-do-dia"),v(N,"class","markdown"),v(be,"class","markdown"),v(ee,"href","#detalhamento-do-dia--inputscidadelabel"),v(U,"class","markdown"),v(U,"id","detalhamento-do-dia--inputscidadelabel"),v(B,"class","markdown"),v(Te,"class","markdown"),v(g,"class","markdown"),v(g,"id","dia-de-referência-vs-média-dos-últimos-30-dias"),v(Oe,"class","markdown"),v(na,"class","markdown"),v(Ze,"href","#condições-climáticas-mais-frequentes--inputscidadelabel"),v(ze,"class","markdown"),v(ze,"id","condições-climáticas-mais-frequentes--inputscidadelabel"),v(Qe,"class","markdown"),v(ma,"class","markdown"),v(qe,"class","markdown"),v(qe,"id","temperatura-por-município-no-dia-selecionado"),v(Ge,"class","markdown"),v(_a,"class","markdown"),v(Xe,"class","markdown")},m(e,t){Re&&Re.m(e,t),m(e,i,t),ua.m(document.head,null),we(document.head,r),we(document.head,a),Ce&&Ce.m(document.head,null),we(document.head,d),m(e,_,t),H&&H.m(e,t),m(e,s,t),E&&E.m(e,t),m(e,u,t),D&&D.m(e,t),m(e,b,t),A&&A.m(e,t),m(e,o,t),T(C,e,t),m(e,O,t),T(x,e,t),m(e,te,t),T(j,e,t),m(e,Me,t),M&&M.m(e,t),m(e,ue,t),F&&F.m(e,t),m(e,ce,t),I&&I.m(e,t),m(e,z,t),S&&S.m(e,t),m(e,Q,t),Y&&Y.m(e,t),m(e,ie,t),m(e,K,t),m(e,Fe,t),m(e,L,t),m(e,pe,t),m(e,$e,t),m(e,Ie,t),m(e,X,t),m(e,re,t),m(e,W,t),m(e,Se,t),T(oe,e,t),m(e,se,t),m(e,J,t),m(e,he,t),m(e,Z,t),m(e,Ye,t),m(e,N,t),m(e,ye,t),T(le,e,t),m(e,Pe,t),m(e,be,t),m(e,ne,t),m(e,U,t),we(U,ee),we(ee,Je),we(ee,xe),m(e,de,t),m(e,B,t),m(e,Ne,t),T(me,e,t),m(e,Ue,t),T(V,e,t),m(e,_e,t),T(G,e,t),m(e,Be,t),m(e,Te,t),m(e,Ve,t),m(e,g,t),m(e,ya,t),m(e,Oe,t),m(e,wa,t),T(je,e,t),m(e,$a,t),m(e,na,t),m(e,ba,t),m(e,ze,t),we(ze,Ze),we(Ze,Ia),we(Ze,ka),m(e,Ta,t),m(e,Qe,t),m(e,qa,t),T(We,e,t),m(e,Ra,t),m(e,ma,t),m(e,Ca,t),m(e,qe,t),m(e,Ha,t),m(e,Ge,t),m(e,Ea,t),T(Ke,e,t),m(e,Da,t),m(e,_a,t),m(e,Aa,t),m(e,Xe,t),ra=!0},p(e,t){var Ga;typeof $<"u"&&$.title&&$.hide_title!==!0&&Re.p(e,t),ua.p(e,t),typeof $=="object"&&Ce.p(e,t),e[1]?H?(H.p(e,t),t[0]&2&&p(H,1)):(H=et(e),H.c(),p(H,1),H.m(s.parentNode,s)):H&&(Ee(),h(H,1,1,()=>{H=null}),He()),e[2]?E?(E.p(e,t),t[0]&4&&p(E,1)):(E=at(e),E.c(),p(E,1),E.m(u.parentNode,u)):E&&(Ee(),h(E,1,1,()=>{E=null}),He()),e[3]?D?(D.p(e,t),t[0]&8&&p(D,1)):(D=tt(e),D.c(),p(D,1),D.m(b.parentNode,b)):D&&(Ee(),h(D,1,1,()=>{D=null}),He()),e[4]?A?(A.p(e,t),t[0]&16&&p(A,1)):(A=it(e),A.c(),p(A,1),A.m(o.parentNode,o)):A&&(Ee(),h(A,1,1,()=>{A=null}),He());const ca={};t[0]&2&&(ca.data=e[1]),C.$set(ca);const oa={};t[0]&4&&(oa.data=e[2]),x.$set(oa);const sa={};t[0]&8&&(sa.data=e[3]),t[0]&16&&(sa.defaultValue=(Ga=e[4][0])==null?void 0:Ga.value),j.$set(sa),e[5]?M?(M.p(e,t),t[0]&32&&p(M,1)):(M=rt(e),M.c(),p(M,1),M.m(ue.parentNode,ue)):M&&(Ee(),h(M,1,1,()=>{M=null}),He()),e[6]?F?(F.p(e,t),t[0]&64&&p(F,1)):(F=ot(e),F.c(),p(F,1),F.m(ce.parentNode,ce)):F&&(Ee(),h(F,1,1,()=>{F=null}),He()),e[7]?I?(I.p(e,t),t[0]&128&&p(I,1)):(I=st(e),I.c(),p(I,1),I.m(z.parentNode,z)):I&&(Ee(),h(I,1,1,()=>{I=null}),He()),e[8]?S?(S.p(e,t),t[0]&256&&p(S,1)):(S=lt(e),S.c(),p(S,1),S.m(Q.parentNode,Q)):S&&(Ee(),h(S,1,1,()=>{S=null}),He()),e[9]?Y?(Y.p(e,t),t[0]&512&&p(Y,1)):(Y=nt(e),Y.c(),p(Y,1),Y.m(ie.parentNode,ie)):Y&&(Ee(),h(Y,1,1,()=>{Y=null}),He());const la={};t[0]&32&&(la.data=e[5]),oe.$set(la);const Va={};t[0]&32&&(Va.data=e[5]),le.$set(Va),(!ra||t[0]&1)&&ke!==(ke=e[0].cidade.label+"")&&Ka(xe,ke);const Oa={};t[0]&64&&(Oa.data=e[6]),me.$set(Oa);const ja={};t[0]&64&&(ja.data=e[6]),V.$set(ja);const za={};t[0]&64&&(za.data=e[6]),G.$set(za);const Qa={};t[0]&128&&(Qa.data=e[7]),je.$set(Qa),(!ra||t[0]&1)&&da!==(da=e[0].cidade.label+"")&&Ka(ka,da);const Sa={};t[0]&256&&(Sa.data=e[8]),t[2]&16&&(Sa.$$scope={dirty:t,ctx:e}),We.$set(Sa);const Wa={};t[0]&512&&(Wa.data=e[9]),Ke.$set(Wa)},i(e){ra||(p(H),p(E),p(D),p(A),p(C.$$.fragment,e),p(x.$$.fragment,e),p(j.$$.fragment,e),p(M),p(F),p(I),p(S),p(Y),p(oe.$$.fragment,e),p(le.$$.fragment,e),p(me.$$.fragment,e),p(V.$$.fragment,e),p(G.$$.fragment,e),p(je.$$.fragment,e),p(We.$$.fragment,e),p(Ke.$$.fragment,e),ra=!0)},o(e){h(H),h(E),h(D),h(A),h(C.$$.fragment,e),h(x.$$.fragment,e),h(j.$$.fragment,e),h(M),h(F),h(I),h(S),h(Y),h(oe.$$.fragment,e),h(le.$$.fragment,e),h(me.$$.fragment,e),h(V.$$.fragment,e),h(G.$$.fragment,e),h(je.$$.fragment,e),h(We.$$.fragment,e),h(Ke.$$.fragment,e),ra=!1},d(e){e&&(l(i),l(_),l(s),l(u),l(b),l(o),l(O),l(te),l(Me),l(ue),l(ce),l(z),l(Q),l(ie),l(K),l(Fe),l(L),l(pe),l($e),l(Ie),l(X),l(re),l(W),l(Se),l(se),l(J),l(he),l(Z),l(Ye),l(N),l(ye),l(Pe),l(be),l(ne),l(U),l(de),l(B),l(Ne),l(Ue),l(_e),l(Be),l(Te),l(Ve),l(g),l(ya),l(Oe),l(wa),l($a),l(na),l(ba),l(ze),l(Ta),l(Qe),l(qa),l(Ra),l(ma),l(Ca),l(qe),l(Ha),l(Ge),l(Ea),l(Da),l(_a),l(Aa),l(Xe)),Re&&Re.d(e),ua.d(e),l(r),l(a),Ce&&Ce.d(e),l(d),H&&H.d(e),E&&E.d(e),D&&D.d(e),A&&A.d(e),k(C,e),k(x,e),k(j,e),M&&M.d(e),F&&F.d(e),I&&I.d(e),S&&S.d(e),Y&&Y.d(e),k(oe,e),k(le,e),k(me,e),k(V,e),k(G,e),k(je,e),k(We,e),k(Ke,e)}}}const $={title:"Análise Horária"};function Yt(n,i,r){let a,d;Xa(n,qt,g=>r(48,a=g)),Xa(n,Za,g=>r(53,d=g));let{data:_}=i,{data:s={},customFormattingSettings:u,__db:b,inputs:o}=_;ut(Za,d="5257bfd60b793404b6c71009eebcea92",d);let C=yt(kt(o));ct(C.subscribe(g=>r(0,o=g))),ft(bt,{getCustomFormats:()=>u.customFormats||[]});const O=(g,ga)=>Tt(b.query,g,{query_name:ga});wt(O),a.params,pt(()=>!0);let x={initialData:void 0,initialError:void 0},te=P`select value, label from (
  select 'Todas' as value, 'Todas as Mesorregiões' as label, 0 as ord
  union all
  select distinct mesoregion as value, mesoregion as label, 1 as ord
  from weather_dw.mart_climate__hourly_facts
)
order by ord, label`,j=`select value, label from (
  select 'Todas' as value, 'Todas as Mesorregiões' as label, 0 as ord
  union all
  select distinct mesoregion as value, mesoregion as label, 1 as ord
  from weather_dw.mart_climate__hourly_facts
)
order by ord, label`;s.mesorregioes_data&&(s.mesorregioes_data instanceof Error?x.initialError=s.mesorregioes_data:x.initialData=s.mesorregioes_data,s.mesorregioes_columns&&(x.knownColumns=s.mesorregioes_columns));let Me,ue=!1;const ce=De.createReactive({callback:g=>{r(1,Me=g)},execFn:O},{id:"mesorregioes",...x});ce(j,{noResolve:te,...x}),globalThis[Symbol.for("mesorregioes")]={get value(){return Me}};let z={initialData:void 0,initialError:void 0},Q=P`select distinct
  location_id as value,
  city_name   as label
from weather_dw.mart_climate__hourly_facts
where ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
order by city_name`,ie=`select distinct
  location_id as value,
  city_name   as label
from weather_dw.mart_climate__hourly_facts
where ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
order by city_name`;s.cidades_disponiveis_data&&(s.cidades_disponiveis_data instanceof Error?z.initialError=s.cidades_disponiveis_data:z.initialData=s.cidades_disponiveis_data,s.cidades_disponiveis_columns&&(z.knownColumns=s.cidades_disponiveis_columns));let K,aa=!1;const Fe=De.createReactive({callback:g=>{r(2,K=g)},execFn:O},{id:"cidades_disponiveis",...z});Fe(ie,{noResolve:Q,...z}),globalThis[Symbol.for("cidades_disponiveis")]={get value(){return K}};let L={initialData:void 0,initialError:void 0},fe=P`select distinct
  strftime(date, '%Y-%m-%d') as value,
  strftime(date, '%d/%m/%Y') as label
from weather_dw.mart_climate__hourly_facts
order by value desc
limit 30`,pe=`select distinct
  strftime(date, '%Y-%m-%d') as value,
  strftime(date, '%d/%m/%Y') as label
from weather_dw.mart_climate__hourly_facts
order by value desc
limit 30`;s.datas_disponiveis_data&&(s.datas_disponiveis_data instanceof Error?L.initialError=s.datas_disponiveis_data:L.initialData=s.datas_disponiveis_data,s.datas_disponiveis_columns&&(L.knownColumns=s.datas_disponiveis_columns));let $e,Ie=!1;const X=De.createReactive({callback:g=>{r(3,$e=g)},execFn:O},{id:"datas_disponiveis",...L});X(pe,{noResolve:fe,...L}),globalThis[Symbol.for("datas_disponiveis")]={get value(){return $e}};let ve={initialData:void 0,initialError:void 0},re=P`select max(strftime(date, '%Y-%m-%d')) as value
from weather_dw.mart_climate__hourly_facts`,W=`select max(strftime(date, '%Y-%m-%d')) as value
from weather_dw.mart_climate__hourly_facts`;s.data_mais_recente_data&&(s.data_mais_recente_data instanceof Error?ve.initialError=s.data_mais_recente_data:ve.initialData=s.data_mais_recente_data,s.data_mais_recente_columns&&(ve.knownColumns=s.data_mais_recente_columns));let ta,Se=!1;const oe=De.createReactive({callback:g=>{r(4,ta=g)},execFn:O},{id:"data_mais_recente",...ve});oe(W,{noResolve:re,...ve}),globalThis[Symbol.for("data_mais_recente")]={get value(){return ta}};let se={initialData:void 0,initialError:void 0},J=P`select
  hour                                   as hora,
  round(avg(temperature_c), 1)          as temp_media,
  round(min(temperature_c), 1)          as temp_min,
  round(max(temperature_c), 1)          as temp_max,
  round(avg(relative_humidity_pct), 1)  as umidade_media
from weather_dw.mart_climate__hourly_facts
where ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
group by hour
order by hour`,he=`select
  hour                                   as hora,
  round(avg(temperature_c), 1)          as temp_media,
  round(min(temperature_c), 1)          as temp_min,
  round(max(temperature_c), 1)          as temp_max,
  round(avg(relative_humidity_pct), 1)  as umidade_media
from weather_dw.mart_climate__hourly_facts
where ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
group by hour
order by hour`;s.perfil_hora_regiao_data&&(s.perfil_hora_regiao_data instanceof Error?se.initialError=s.perfil_hora_regiao_data:se.initialData=s.perfil_hora_regiao_data,s.perfil_hora_regiao_columns&&(se.knownColumns=s.perfil_hora_regiao_columns));let Z,ia=!1;const Ye=De.createReactive({callback:g=>{r(5,Z=g)},execFn:O},{id:"perfil_hora_regiao",...se});Ye(he,{noResolve:J,...se}),globalThis[Symbol.for("perfil_hora_regiao")]={get value(){return Z}};let N={initialData:void 0,initialError:void 0},ge=P`select
  hour                                   as hora,
  round(avg(temperature_c), 1)          as temperatura_c,
  round(avg(relative_humidity_pct), 1)  as umidade_pct,
  round(avg(precipitation_mm), 2)       as precipitacao_mm,
  round(avg(wind_speed_kmh), 1)         as vento_kmh,
  round(avg(cloud_cover_pct), 1)        as nebulosidade_pct
from weather_dw.mart_climate__hourly_facts
where ('${o.cidade.value}' in ('undefined', '') or location_id = '${o.cidade.value}')
  and (strftime(date, '%Y-%m-%d') = '${o.data_ref.value}' or '${o.data_ref.value}' in ('undefined', ''))
group by hour
order by hour`,ye=`select
  hour                                   as hora,
  round(avg(temperature_c), 1)          as temperatura_c,
  round(avg(relative_humidity_pct), 1)  as umidade_pct,
  round(avg(precipitation_mm), 2)       as precipitacao_mm,
  round(avg(wind_speed_kmh), 1)         as vento_kmh,
  round(avg(cloud_cover_pct), 1)        as nebulosidade_pct
from weather_dw.mart_climate__hourly_facts
where ('${o.cidade.value}' in ('undefined', '') or location_id = '${o.cidade.value}')
  and (strftime(date, '%Y-%m-%d') = '${o.data_ref.value}' or '${o.data_ref.value}' in ('undefined', ''))
group by hour
order by hour`;s.serie_dia_municipio_data&&(s.serie_dia_municipio_data instanceof Error?N.initialError=s.serie_dia_municipio_data:N.initialData=s.serie_dia_municipio_data,s.serie_dia_municipio_columns&&(N.knownColumns=s.serie_dia_municipio_columns));let le,Pe=!1;const be=De.createReactive({callback:g=>{r(6,le=g)},execFn:O},{id:"serie_dia_municipio",...N});be(ye,{noResolve:ge,...N}),globalThis[Symbol.for("serie_dia_municipio")]={get value(){return le}};let ne={initialData:void 0,initialError:void 0},U=P`select
  h.hour                                                                    as hora,
  round(avg(case when strftime(h.date, '%Y-%m-%d') = '${o.data_ref.value}'
    then h.temperature_c end), 1)                                           as temp_dia_ref,
  round(avg(h.temperature_c), 1)                                            as temp_media_30d
from weather_dw.mart_climate__hourly_facts h
where ('${o.cidade.value}' in ('undefined', '') or h.location_id = '${o.cidade.value}')
group by h.hour
order by h.hour`,ee=`select
  h.hour                                                                    as hora,
  round(avg(case when strftime(h.date, '%Y-%m-%d') = '${o.data_ref.value}'
    then h.temperature_c end), 1)                                           as temp_dia_ref,
  round(avg(h.temperature_c), 1)                                            as temp_media_30d
from weather_dw.mart_climate__hourly_facts h
where ('${o.cidade.value}' in ('undefined', '') or h.location_id = '${o.cidade.value}')
group by h.hour
order by h.hour`;s.comparativo_dia_vs_media_data&&(s.comparativo_dia_vs_media_data instanceof Error?ne.initialError=s.comparativo_dia_vs_media_data:ne.initialData=s.comparativo_dia_vs_media_data,s.comparativo_dia_vs_media_columns&&(ne.knownColumns=s.comparativo_dia_vs_media_columns));let Je,ke=!1;const xe=De.createReactive({callback:g=>{r(7,Je=g)},execFn:O},{id:"comparativo_dia_vs_media",...ne});xe(ee,{noResolve:U,...ne}),globalThis[Symbol.for("comparativo_dia_vs_media")]={get value(){return Je}};let de={initialData:void 0,initialError:void 0},B=P`select
  wmo_weather_label                      as condicao,
  count(*)                               as ocorrencias,
  round(avg(temperature_c), 1)          as temp_media,
  round(avg(relative_humidity_pct), 1)  as umidade_media
from weather_dw.mart_climate__hourly_facts
where ('${o.cidade.value}' in ('undefined', '') or location_id = '${o.cidade.value}')
group by wmo_weather_label
order by ocorrencias desc
limit 10`,Le=`select
  wmo_weather_label                      as condicao,
  count(*)                               as ocorrencias,
  round(avg(temperature_c), 1)          as temp_media,
  round(avg(relative_humidity_pct), 1)  as umidade_media
from weather_dw.mart_climate__hourly_facts
where ('${o.cidade.value}' in ('undefined', '') or location_id = '${o.cidade.value}')
group by wmo_weather_label
order by ocorrencias desc
limit 10`;s.condicao_mais_frequente_data&&(s.condicao_mais_frequente_data instanceof Error?de.initialError=s.condicao_mais_frequente_data:de.initialData=s.condicao_mais_frequente_data,s.condicao_mais_frequente_columns&&(de.knownColumns=s.condicao_mais_frequente_columns));let Ne,me=!1;const Ue=De.createReactive({callback:g=>{r(8,Ne=g)},execFn:O},{id:"condicao_mais_frequente",...de});Ue(Le,{noResolve:B,...de}),globalThis[Symbol.for("condicao_mais_frequente")]={get value(){return Ne}};let V={initialData:void 0,initialError:void 0},_e=P`select
  city_name,
  mesoregion,
  round(avg(latitude), 4)         as latitude,
  round(avg(longitude), 4)        as longitude,
  round(avg(temperature_c), 1)    as temp_media,
  round(avg(wind_speed_kmh), 1)   as vento_medio
from weather_dw.mart_climate__hourly_facts
where (strftime(date, '%Y-%m-%d') = '${o.data_ref.value}' or '${o.data_ref.value}' in ('undefined', ''))
  and ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
group by city_name, mesoregion`,G=`select
  city_name,
  mesoregion,
  round(avg(latitude), 4)         as latitude,
  round(avg(longitude), 4)        as longitude,
  round(avg(temperature_c), 1)    as temp_media,
  round(avg(wind_speed_kmh), 1)   as vento_medio
from weather_dw.mart_climate__hourly_facts
where (strftime(date, '%Y-%m-%d') = '${o.data_ref.value}' or '${o.data_ref.value}' in ('undefined', ''))
  and ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
group by city_name, mesoregion`;s.mapa_temperatura_atual_data&&(s.mapa_temperatura_atual_data instanceof Error?V.initialError=s.mapa_temperatura_atual_data:V.initialData=s.mapa_temperatura_atual_data,s.mapa_temperatura_atual_columns&&(V.knownColumns=s.mapa_temperatura_atual_columns));let Be,Te=!1;const Ve=De.createReactive({callback:g=>{r(9,Be=g)},execFn:O},{id:"mapa_temperatura_atual",...V});return Ve(G,{noResolve:_e,...V}),globalThis[Symbol.for("mapa_temperatura_atual")]={get value(){return Be}},n.$$set=g=>{"data"in g&&r(10,_=g.data)},n.$$.update=()=>{n.$$.dirty[0]&1024&&r(11,{data:s={},customFormattingSettings:u,__db:b}=_,s),n.$$.dirty[0]&2048&&$t.set(Object.keys(s).length>0),n.$$.dirty[1]&131072&&a.params,n.$$.dirty[0]&61440&&(te||!ue?te||(ce(j,{noResolve:te,...x}),r(15,ue=!0)):ce(j,{noResolve:te})),n.$$.dirty[0]&1&&r(17,Q=P`select distinct
  location_id as value,
  city_name   as label
from weather_dw.mart_climate__hourly_facts
where ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
order by city_name`),n.$$.dirty[0]&1&&r(18,ie=`select distinct
  location_id as value,
  city_name   as label
from weather_dw.mart_climate__hourly_facts
where ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
order by city_name`),n.$$.dirty[0]&983040&&(Q||!aa?Q||(Fe(ie,{noResolve:Q,...z}),r(19,aa=!0)):Fe(ie,{noResolve:Q})),n.$$.dirty[0]&15728640&&(fe||!Ie?fe||(X(pe,{noResolve:fe,...L}),r(23,Ie=!0)):X(pe,{noResolve:fe})),n.$$.dirty[0]&251658240&&(re||!Se?re||(oe(W,{noResolve:re,...ve}),r(27,Se=!0)):oe(W,{noResolve:re})),n.$$.dirty[0]&1&&r(29,J=P`select
  hour                                   as hora,
  round(avg(temperature_c), 1)          as temp_media,
  round(min(temperature_c), 1)          as temp_min,
  round(max(temperature_c), 1)          as temp_max,
  round(avg(relative_humidity_pct), 1)  as umidade_media
from weather_dw.mart_climate__hourly_facts
where ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
group by hour
order by hour`),n.$$.dirty[0]&1&&r(30,he=`select
  hour                                   as hora,
  round(avg(temperature_c), 1)          as temp_media,
  round(min(temperature_c), 1)          as temp_min,
  round(max(temperature_c), 1)          as temp_max,
  round(avg(relative_humidity_pct), 1)  as umidade_media
from weather_dw.mart_climate__hourly_facts
where ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
group by hour
order by hour`),n.$$.dirty[0]&1879048192|n.$$.dirty[1]&1&&(J||!ia?J||(Ye(he,{noResolve:J,...se}),r(31,ia=!0)):Ye(he,{noResolve:J})),n.$$.dirty[0]&1&&r(33,ge=P`select
  hour                                   as hora,
  round(avg(temperature_c), 1)          as temperatura_c,
  round(avg(relative_humidity_pct), 1)  as umidade_pct,
  round(avg(precipitation_mm), 2)       as precipitacao_mm,
  round(avg(wind_speed_kmh), 1)         as vento_kmh,
  round(avg(cloud_cover_pct), 1)        as nebulosidade_pct
from weather_dw.mart_climate__hourly_facts
where ('${o.cidade.value}' in ('undefined', '') or location_id = '${o.cidade.value}')
  and (strftime(date, '%Y-%m-%d') = '${o.data_ref.value}' or '${o.data_ref.value}' in ('undefined', ''))
group by hour
order by hour`),n.$$.dirty[0]&1&&r(34,ye=`select
  hour                                   as hora,
  round(avg(temperature_c), 1)          as temperatura_c,
  round(avg(relative_humidity_pct), 1)  as umidade_pct,
  round(avg(precipitation_mm), 2)       as precipitacao_mm,
  round(avg(wind_speed_kmh), 1)         as vento_kmh,
  round(avg(cloud_cover_pct), 1)        as nebulosidade_pct
from weather_dw.mart_climate__hourly_facts
where ('${o.cidade.value}' in ('undefined', '') or location_id = '${o.cidade.value}')
  and (strftime(date, '%Y-%m-%d') = '${o.data_ref.value}' or '${o.data_ref.value}' in ('undefined', ''))
group by hour
order by hour`),n.$$.dirty[1]&30&&(ge||!Pe?ge||(be(ye,{noResolve:ge,...N}),r(35,Pe=!0)):be(ye,{noResolve:ge})),n.$$.dirty[0]&1&&r(37,U=P`select
  h.hour                                                                    as hora,
  round(avg(case when strftime(h.date, '%Y-%m-%d') = '${o.data_ref.value}'
    then h.temperature_c end), 1)                                           as temp_dia_ref,
  round(avg(h.temperature_c), 1)                                            as temp_media_30d
from weather_dw.mart_climate__hourly_facts h
where ('${o.cidade.value}' in ('undefined', '') or h.location_id = '${o.cidade.value}')
group by h.hour
order by h.hour`),n.$$.dirty[0]&1&&r(38,ee=`select
  h.hour                                                                    as hora,
  round(avg(case when strftime(h.date, '%Y-%m-%d') = '${o.data_ref.value}'
    then h.temperature_c end), 1)                                           as temp_dia_ref,
  round(avg(h.temperature_c), 1)                                            as temp_media_30d
from weather_dw.mart_climate__hourly_facts h
where ('${o.cidade.value}' in ('undefined', '') or h.location_id = '${o.cidade.value}')
group by h.hour
order by h.hour`),n.$$.dirty[1]&480&&(U||!ke?U||(xe(ee,{noResolve:U,...ne}),r(39,ke=!0)):xe(ee,{noResolve:U})),n.$$.dirty[0]&1&&r(41,B=P`select
  wmo_weather_label                      as condicao,
  count(*)                               as ocorrencias,
  round(avg(temperature_c), 1)          as temp_media,
  round(avg(relative_humidity_pct), 1)  as umidade_media
from weather_dw.mart_climate__hourly_facts
where ('${o.cidade.value}' in ('undefined', '') or location_id = '${o.cidade.value}')
group by wmo_weather_label
order by ocorrencias desc
limit 10`),n.$$.dirty[0]&1&&r(42,Le=`select
  wmo_weather_label                      as condicao,
  count(*)                               as ocorrencias,
  round(avg(temperature_c), 1)          as temp_media,
  round(avg(relative_humidity_pct), 1)  as umidade_media
from weather_dw.mart_climate__hourly_facts
where ('${o.cidade.value}' in ('undefined', '') or location_id = '${o.cidade.value}')
group by wmo_weather_label
order by ocorrencias desc
limit 10`),n.$$.dirty[1]&7680&&(B||!me?B||(Ue(Le,{noResolve:B,...de}),r(43,me=!0)):Ue(Le,{noResolve:B})),n.$$.dirty[0]&1&&r(45,_e=P`select
  city_name,
  mesoregion,
  round(avg(latitude), 4)         as latitude,
  round(avg(longitude), 4)        as longitude,
  round(avg(temperature_c), 1)    as temp_media,
  round(avg(wind_speed_kmh), 1)   as vento_medio
from weather_dw.mart_climate__hourly_facts
where (strftime(date, '%Y-%m-%d') = '${o.data_ref.value}' or '${o.data_ref.value}' in ('undefined', ''))
  and ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
group by city_name, mesoregion`),n.$$.dirty[0]&1&&r(46,G=`select
  city_name,
  mesoregion,
  round(avg(latitude), 4)         as latitude,
  round(avg(longitude), 4)        as longitude,
  round(avg(temperature_c), 1)    as temp_media,
  round(avg(wind_speed_kmh), 1)   as vento_medio
from weather_dw.mart_climate__hourly_facts
where (strftime(date, '%Y-%m-%d') = '${o.data_ref.value}' or '${o.data_ref.value}' in ('undefined', ''))
  and ('${o.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${o.mesoregiao.value}')
group by city_name, mesoregion`),n.$$.dirty[1]&122880&&(_e||!Te?_e||(Ve(G,{noResolve:_e,...V}),r(47,Te=!0)):Ve(G,{noResolve:_e}))},r(13,te=P`select value, label from (
  select 'Todas' as value, 'Todas as Mesorregiões' as label, 0 as ord
  union all
  select distinct mesoregion as value, mesoregion as label, 1 as ord
  from weather_dw.mart_climate__hourly_facts
)
order by ord, label`),r(14,j=`select value, label from (
  select 'Todas' as value, 'Todas as Mesorregiões' as label, 0 as ord
  union all
  select distinct mesoregion as value, mesoregion as label, 1 as ord
  from weather_dw.mart_climate__hourly_facts
)
order by ord, label`),r(21,fe=P`select distinct
  strftime(date, '%Y-%m-%d') as value,
  strftime(date, '%d/%m/%Y') as label
from weather_dw.mart_climate__hourly_facts
order by value desc
limit 30`),r(22,pe=`select distinct
  strftime(date, '%Y-%m-%d') as value,
  strftime(date, '%d/%m/%Y') as label
from weather_dw.mart_climate__hourly_facts
order by value desc
limit 30`),r(25,re=P`select max(strftime(date, '%Y-%m-%d')) as value
from weather_dw.mart_climate__hourly_facts`),r(26,W=`select max(strftime(date, '%Y-%m-%d')) as value
from weather_dw.mart_climate__hourly_facts`),[o,Me,K,$e,ta,Z,le,Je,Ne,Be,_,s,x,te,j,ue,z,Q,ie,aa,L,fe,pe,Ie,ve,re,W,Se,se,J,he,ia,N,ge,ye,Pe,ne,U,ee,ke,de,B,Le,me,V,_e,G,Te,a]}class Wt extends vt{constructor(i){super(),ht(this,i,Yt,St,mt,{data:10},null,[-1,-1,-1])}}export{Wt as component};
