import{s as ja,d,i as m,a as ua,b as g,c as v,h as Qa,e as C,f as ma,g as Ae,j as $,k as D,l as Ma,m as za,o as Oa,n as Ga,p as Wa,q as Ke,r as Xa,t as Ya,u as Ka}from"../chunks/scheduler.BiECNykD.js";import{S as Ja,i as Za,d as w,t as y,a as c,c as Fe,m as b,b as h,e as T,g as He}from"../chunks/index.DMIfMoOS.js";import{D as et,e as at,s as tt,Q as Ie,p as rt,b as he,a as Ca,r as Da,C as it}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.Dv51r1Xw.js";import{w as lt}from"../chunks/entry.Dq6lVjE5.js";import{h as z,p as ot}from"../chunks/button.DTlM0ogI.js";import{D as _a,Q as Se}from"../chunks/getCompletedData.Cmkm-dWJ.js";import{B as st,a as la}from"../chunks/ButtonGroup.vmimM2jU.js";import{p as nt}from"../chunks/stores.CPiwfCsI.js";import{B as Aa}from"../chunks/BarChart.BQNmjtVm.js";import{B as da}from"../chunks/BigValue.C1zD3xGY.js";function _t(n){let r,i=E.title+"",t;return{c(){r=D("h1"),t=Ka(i),this.h()},l(s){r=C(s,"H1",{class:!0});var u=Xa(r);t=Ya(u,i),u.forEach(d),this.h()},h(){g(r,"class","title")},m(s,u){m(s,r,u),ua(r,t)},p:Ke,d(s){s&&d(r)}}}function dt(n){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:Ke,p:Ke,d:Ke}}function ut(n){let r,i,t,s,u;return document.title=r=E.title,{c(){i=$(),t=D("meta"),s=$(),u=D("meta"),this.h()},l(o){i=v(o),t=C(o,"META",{property:!0,content:!0}),s=v(o),u=C(o,"META",{name:!0,content:!0}),this.h()},h(){var o,p;g(t,"property","og:title"),g(t,"content",((o=E.og)==null?void 0:o.title)??E.title),g(u,"name","twitter:title"),g(u,"content",((p=E.og)==null?void 0:p.title)??E.title)},m(o,p){m(o,i,p),m(o,t,p),m(o,s,p),m(o,u,p)},p(o,p){p&0&&r!==(r=E.title)&&(document.title=r)},d(o){o&&(d(i),d(t),d(s),d(u))}}}function mt(n){var u,o;let r,i,t=(E.description||((u=E.og)==null?void 0:u.description))&&ct(),s=((o=E.og)==null?void 0:o.image)&&ft();return{c(){t&&t.c(),r=$(),s&&s.c(),i=ma()},l(p){t&&t.l(p),r=v(p),s&&s.l(p),i=ma()},m(p,M){t&&t.m(p,M),m(p,r,M),s&&s.m(p,M),m(p,i,M)},p(p,M){var a,A;(E.description||(a=E.og)!=null&&a.description)&&t.p(p,M),(A=E.og)!=null&&A.image&&s.p(p,M)},d(p){p&&(d(r),d(i)),t&&t.d(p),s&&s.d(p)}}}function ct(n){let r,i,t,s,u;return{c(){r=D("meta"),i=$(),t=D("meta"),s=$(),u=D("meta"),this.h()},l(o){r=C(o,"META",{name:!0,content:!0}),i=v(o),t=C(o,"META",{property:!0,content:!0}),s=v(o),u=C(o,"META",{name:!0,content:!0}),this.h()},h(){var o,p,M;g(r,"name","description"),g(r,"content",E.description??((o=E.og)==null?void 0:o.description)),g(t,"property","og:description"),g(t,"content",((p=E.og)==null?void 0:p.description)??E.description),g(u,"name","twitter:description"),g(u,"content",((M=E.og)==null?void 0:M.description)??E.description)},m(o,p){m(o,r,p),m(o,i,p),m(o,t,p),m(o,s,p),m(o,u,p)},p:Ke,d(o){o&&(d(r),d(i),d(t),d(s),d(u))}}}function ft(n){let r,i,t;return{c(){r=D("meta"),i=$(),t=D("meta"),this.h()},l(s){r=C(s,"META",{property:!0,content:!0}),i=v(s),t=C(s,"META",{name:!0,content:!0}),this.h()},h(){var s,u;g(r,"property","og:image"),g(r,"content",Ca((s=E.og)==null?void 0:s.image)),g(t,"name","twitter:image"),g(t,"content",Ca((u=E.og)==null?void 0:u.image))},m(s,u){m(s,r,u),m(s,i,u),m(s,t,u)},p:Ke,d(s){s&&(d(r),d(i),d(t))}}}function Fa(n){let r,i;return r=new Se({props:{queryID:"periodos_disponiveis",queryResult:n[0]}}),{c(){T(r.$$.fragment)},l(t){h(r.$$.fragment,t)},m(t,s){b(r,t,s),i=!0},p(t,s){const u={};s[0]&1&&(u.queryResult=t[0]),r.$set(u)},i(t){i||(c(r.$$.fragment,t),i=!0)},o(t){y(r.$$.fragment,t),i=!1},d(t){w(r,t)}}}function Ha(n){let r,i;return r=new Se({props:{queryID:"periodo_mais_recente",queryResult:n[1]}}),{c(){T(r.$$.fragment)},l(t){h(r.$$.fragment,t)},m(t,s){b(r,t,s),i=!0},p(t,s){const u={};s[0]&2&&(u.queryResult=t[1]),r.$set(u)},i(t){i||(c(r.$$.fragment,t),i=!0)},o(t){y(r.$$.fragment,t),i=!1},d(t){w(r,t)}}}function Ia(n){let r,i;return r=new Se({props:{queryID:"mesorregioes",queryResult:n[2]}}),{c(){T(r.$$.fragment)},l(t){h(r.$$.fragment,t)},m(t,s){b(r,t,s),i=!0},p(t,s){const u={};s[0]&4&&(u.queryResult=t[2]),r.$set(u)},i(t){i||(c(r.$$.fragment,t),i=!0)},o(t){y(r.$$.fragment,t),i=!1},d(t){w(r,t)}}}function Sa(n){let r,i;return r=new Se({props:{queryID:"cidades_disponiveis",queryResult:n[3]}}),{c(){T(r.$$.fragment)},l(t){h(r.$$.fragment,t)},m(t,s){b(r,t,s),i=!0},p(t,s){const u={};s[0]&8&&(u.queryResult=t[3]),r.$set(u)},i(t){i||(c(r.$$.fragment,t),i=!0)},o(t){y(r.$$.fragment,t),i=!1},d(t){w(r,t)}}}function xa(n){let r,i;return r=new Se({props:{queryID:"tipos_alerta",queryResult:n[4]}}),{c(){T(r.$$.fragment)},l(t){h(r.$$.fragment,t)},m(t,s){b(r,t,s),i=!0},p(t,s){const u={};s[0]&16&&(u.queryResult=t[4]),r.$set(u)},i(t){i||(c(r.$$.fragment,t),i=!0)},o(t){y(r.$$.fragment,t),i=!1},d(t){w(r,t)}}}function La(n){let r,i;return r=new Se({props:{queryID:"severidades",queryResult:n[5]}}),{c(){T(r.$$.fragment)},l(t){h(r.$$.fragment,t)},m(t,s){b(r,t,s),i=!0},p(t,s){const u={};s[0]&32&&(u.queryResult=t[5]),r.$set(u)},i(t){i||(c(r.$$.fragment,t),i=!0)},o(t){y(r.$$.fragment,t),i=!1},d(t){w(r,t)}}}function pt(n){let r,i,t,s,u,o,p,M,a,A;return r=new la({props:{valueLabel:"Todas",value:"Todas",default:!0}}),t=new la({props:{valueLabel:"Crítico",value:"critical"}}),u=new la({props:{valueLabel:"Alto",value:"high"}}),p=new la({props:{valueLabel:"Médio",value:"medium"}}),a=new la({props:{valueLabel:"Baixo",value:"low"}}),{c(){T(r.$$.fragment),i=$(),T(t.$$.fragment),s=$(),T(u.$$.fragment),o=$(),T(p.$$.fragment),M=$(),T(a.$$.fragment)},l(f){h(r.$$.fragment,f),i=v(f),h(t.$$.fragment,f),s=v(f),h(u.$$.fragment,f),o=v(f),h(p.$$.fragment,f),M=v(f),h(a.$$.fragment,f)},m(f,R){b(r,f,R),m(f,i,R),b(t,f,R),m(f,s,R),b(u,f,R),m(f,o,R),b(p,f,R),m(f,M,R),b(a,f,R),A=!0},p:Ke,i(f){A||(c(r.$$.fragment,f),c(t.$$.fragment,f),c(u.$$.fragment,f),c(p.$$.fragment,f),c(a.$$.fragment,f),A=!0)},o(f){y(r.$$.fragment,f),y(t.$$.fragment,f),y(u.$$.fragment,f),y(p.$$.fragment,f),y(a.$$.fragment,f),A=!1},d(f){f&&(d(i),d(s),d(o),d(M)),w(r,f),w(t,f),w(u,f),w(p,f),w(a,f)}}}function Ba(n){let r,i;return r=new Se({props:{queryID:"scorecards",queryResult:n[6]}}),{c(){T(r.$$.fragment)},l(t){h(r.$$.fragment,t)},m(t,s){b(r,t,s),i=!0},p(t,s){const u={};s[0]&64&&(u.queryResult=t[6]),r.$set(u)},i(t){i||(c(r.$$.fragment,t),i=!0)},o(t){y(r.$$.fragment,t),i=!1},d(t){w(r,t)}}}function Na(n){let r,i;return r=new Se({props:{queryID:"frequencia_por_tipo",queryResult:n[7]}}),{c(){T(r.$$.fragment)},l(t){h(r.$$.fragment,t)},m(t,s){b(r,t,s),i=!0},p(t,s){const u={};s[0]&128&&(u.queryResult=t[7]),r.$set(u)},i(t){i||(c(r.$$.fragment,t),i=!0)},o(t){y(r.$$.fragment,t),i=!1},d(t){w(r,t)}}}function Ua(n){let r,i;return r=new Se({props:{queryID:"alertas_por_regiao",queryResult:n[8]}}),{c(){T(r.$$.fragment)},l(t){h(r.$$.fragment,t)},m(t,s){b(r,t,s),i=!0},p(t,s){const u={};s[0]&256&&(u.queryResult=t[8]),r.$set(u)},i(t){i||(c(r.$$.fragment,t),i=!0)},o(t){y(r.$$.fragment,t),i=!1},d(t){w(r,t)}}}function Pa(n){let r,i;return r=new Se({props:{queryID:"tabela_eventos",queryResult:n[9]}}),{c(){T(r.$$.fragment)},l(t){h(r.$$.fragment,t)},m(t,s){b(r,t,s),i=!0},p(t,s){const u={};s[0]&512&&(u.queryResult=t[9]),r.$set(u)},i(t){i||(c(r.$$.fragment,t),i=!0)},o(t){y(r.$$.fragment,t),i=!1},d(t){w(r,t)}}}function vt(n){let r,i,t,s,u,o,p,M,a,A,f,R,H,O,Y,W,K,F,I,G,J,te;return r=new he({props:{id:"date",title:"Data",fmt:"dd/MM/yyyy"}}),t=new he({props:{id:"city_name",title:"Município"}}),u=new he({props:{id:"mesoregion",title:"Região"}}),p=new he({props:{id:"alert_type",title:"Tipo de Alerta"}}),a=new he({props:{id:"severity",title:"Severidade",contentType:"colorscale"}}),f=new he({props:{id:"temp_max_c",title:"Temp. Máx (°C)",fmt:"0.0",contentType:"colorscale"}}),H=new he({props:{id:"temp_min_c",title:"Temp. Mín (°C)",fmt:"0.0"}}),Y=new he({props:{id:"temp_anomaly_c",title:"Anomalia (°C)",fmt:"+0.0;-0.0",contentType:"colorscale"}}),K=new he({props:{id:"precipitation_mm",title:"Precip. (mm)",fmt:"0.0",contentType:"colorscale"}}),I=new he({props:{id:"wind_speed_max_kmh",title:"Vento (km/h)",fmt:"0.0"}}),J=new he({props:{id:"uv_index_max",title:"UV Máx",fmt:"0"}}),{c(){T(r.$$.fragment),i=$(),T(t.$$.fragment),s=$(),T(u.$$.fragment),o=$(),T(p.$$.fragment),M=$(),T(a.$$.fragment),A=$(),T(f.$$.fragment),R=$(),T(H.$$.fragment),O=$(),T(Y.$$.fragment),W=$(),T(K.$$.fragment),F=$(),T(I.$$.fragment),G=$(),T(J.$$.fragment)},l(_){h(r.$$.fragment,_),i=v(_),h(t.$$.fragment,_),s=v(_),h(u.$$.fragment,_),o=v(_),h(p.$$.fragment,_),M=v(_),h(a.$$.fragment,_),A=v(_),h(f.$$.fragment,_),R=v(_),h(H.$$.fragment,_),O=v(_),h(Y.$$.fragment,_),W=v(_),h(K.$$.fragment,_),F=v(_),h(I.$$.fragment,_),G=v(_),h(J.$$.fragment,_)},m(_,k){b(r,_,k),m(_,i,k),b(t,_,k),m(_,s,k),b(u,_,k),m(_,o,k),b(p,_,k),m(_,M,k),b(a,_,k),m(_,A,k),b(f,_,k),m(_,R,k),b(H,_,k),m(_,O,k),b(Y,_,k),m(_,W,k),b(K,_,k),m(_,F,k),b(I,_,k),m(_,G,k),b(J,_,k),te=!0},p:Ke,i(_){te||(c(r.$$.fragment,_),c(t.$$.fragment,_),c(u.$$.fragment,_),c(p.$$.fragment,_),c(a.$$.fragment,_),c(f.$$.fragment,_),c(H.$$.fragment,_),c(Y.$$.fragment,_),c(K.$$.fragment,_),c(I.$$.fragment,_),c(J.$$.fragment,_),te=!0)},o(_){y(r.$$.fragment,_),y(t.$$.fragment,_),y(u.$$.fragment,_),y(p.$$.fragment,_),y(a.$$.fragment,_),y(f.$$.fragment,_),y(H.$$.fragment,_),y(Y.$$.fragment,_),y(K.$$.fragment,_),y(I.$$.fragment,_),y(J.$$.fragment,_),te=!1},d(_){_&&(d(i),d(s),d(o),d(M),d(A),d(R),d(O),d(W),d(F),d(G)),w(r,_),w(t,_),w(u,_),w(p,_),w(a,_),w(f,_),w(H,_),w(Y,_),w(K,_),w(I,_),w(J,_)}}}function $t(n){var va;let r,i,t,s,u,o,p,M,a,A,f,R,H,O,Y,W,K,F,I,G,J,te,_,k,ie,re,Je='<a href="#alertas-climáticos--santa-catarina">Alertas Climáticos — Santa Catarina</a>',Pe,de,Te='Geadas na Serra, chuvas torrenciais no Vale do Itajaí e ondas de calor no Oeste fazem parte do calendário catarinense. Esta página responde: <strong class="markdown">quais eventos aconteceram, onde, com que severidade, e quais valores os causaram?</strong>',ue,le,Ze='A diferença entre dados climáticos e alertas climáticos é a <strong class="markdown">ação</strong>. Enquanto as páginas anteriores descrevem o clima, esta identifica situações que ultrapassaram limiares definidos de risco. A página serve ao analista que quer entender padrões históricos e ao gestor que precisa acompanhar eventos recentes — basta ajustar o filtro de período.',Ve,xe,me,Z,ke,ce,je,fe,pe,ee,qe,Le,Qe,se,Re='<a href="#frequência-por-tipo-de-alerta">Frequência por Tipo de Alerta</a>',ve,oe,ea='Qual fenômeno extremo foi mais frequente no período? Em Santa Catarina, a distribuição entre <code class="markdown">frost</code>, <code class="markdown">heavy_rain</code> e <code class="markdown">heat_anomaly</code> varia bastante por estação — este gráfico torna essa sazonalidade visível e comparável entre períodos.',ze,$e,ye,ne,Ee,_e,aa='<a href="#alertas-por-região-e-severidade">Alertas por Região e Severidade</a>',Oe,ae,Me="Algumas regiões acumulam muitos alertas de baixa severidade; outras registram poucos eventos mas predominantemente críticos. Essa distinção é essencial para priorizar atenção — volume alto nem sempre significa risco alto.",Ce,ge,Ge,Be,we,X,We='<a href="#detalhamento-dos-eventos">Detalhamento dos Eventos</a>',Xe,be,ta="Cada linha é um evento climático extremo com os valores exatos que acionaram o alerta. Use esta tabela para verificar a origem de cada alerta, investigar casos específicos ou validar se os limiares do pipeline estão gerando alertas coerentes com a realidade observada.",q,De,oa,ra,sa,Ye,pa='<strong class="markdown">Navegação:</strong> <a href="/Analytics-Engineer/Weather-Analytics/" class="markdown">Início</a> · <a href="/Analytics-Engineer/Weather-Analytics/temperatura" class="markdown">Temperatura</a> · <a href="/Analytics-Engineer/Weather-Analytics/precipitacao" class="markdown">Precipitação</a> · <a href="/Analytics-Engineer/Weather-Analytics/horario" class="markdown">Horário</a>',na,Ne=typeof E<"u"&&E.title&&E.hide_title!==!0&&_t();function Va(e,l){return typeof E<"u"&&E.title?ut:dt}let ia=Va()(n),Ue=typeof E=="object"&&mt(),S=n[0]&&Fa(n),x=n[1]&&Ha(n),L=n[2]&&Ia(n),B=n[3]&&Sa(n),N=n[4]&&xa(n),U=n[5]&&La(n);R=new _a({props:{name:"ano_mes",data:n[0],value:"value",label:"label",title:"Mês/Ano",defaultValue:(va=n[1][0])==null?void 0:va.value}}),O=new _a({props:{name:"mesoregiao",data:n[2],value:"value",label:"label",title:"Mesorregião",defaultValue:"Todas"}}),W=new _a({props:{name:"cidade",data:n[3],value:"value",label:"label",title:"Município",defaultValue:"Todas"}}),F=new _a({props:{name:"tipo_alerta",data:n[4],value:"value",label:"label",title:"Tipo de Alerta",defaultValue:"Todos"}}),G=new st({props:{name:"severidade",title:"Severidade",$$slots:{default:[pt]},$$scope:{ctx:n}}});let P=n[6]&&Ba(n),V=n[7]&&Na(n),j=n[8]&&Ua(n),Q=n[9]&&Pa(n);return Z=new da({props:{data:n[6],value:"total_alertas",title:"Total de Alertas"}}),ce=new da({props:{data:n[6],value:"criticos",title:"Alertas Críticos"}}),fe=new da({props:{data:n[6],value:"altos",title:"Alertas Altos"}}),ee=new da({props:{data:n[6],value:"municipios_afetados",title:"Municípios Afetados"}}),$e=new Aa({props:{data:n[7],x:"tipo",y:["critico","alto","medio","baixo"],yAxisTitle:"Ocorrências",type:"stacked",colorPalette:["#B2182B","#EF8A62","#FDD49E","#D9F0D3"],labels:!0}}),ge=new Aa({props:{data:n[8],x:"regiao",y:["critico","alto","medio","baixo"],yAxisTitle:"Número de alertas",type:"stacked",swapXY:"true",colorPalette:["#B2182B","#EF8A62","#FDD49E","#D9F0D3"]}}),De=new et({props:{data:n[9],rows:"20",search:"true",$$slots:{default:[vt]},$$scope:{ctx:n}}}),{c(){Ne&&Ne.c(),r=$(),ia.c(),i=D("meta"),t=D("meta"),Ue&&Ue.c(),s=ma(),u=$(),S&&S.c(),o=$(),x&&x.c(),p=$(),L&&L.c(),M=$(),B&&B.c(),a=$(),N&&N.c(),A=$(),U&&U.c(),f=$(),T(R.$$.fragment),H=$(),T(O.$$.fragment),Y=$(),T(W.$$.fragment),K=$(),T(F.$$.fragment),I=$(),T(G.$$.fragment),J=$(),P&&P.c(),te=$(),V&&V.c(),_=$(),j&&j.c(),k=$(),Q&&Q.c(),ie=$(),re=D("h1"),re.innerHTML=Je,Pe=$(),de=D("p"),de.innerHTML=Te,ue=$(),le=D("p"),le.innerHTML=Ze,Ve=$(),xe=D("hr"),me=$(),T(Z.$$.fragment),ke=$(),T(ce.$$.fragment),je=$(),T(fe.$$.fragment),pe=$(),T(ee.$$.fragment),qe=$(),Le=D("hr"),Qe=$(),se=D("h2"),se.innerHTML=Re,ve=$(),oe=D("p"),oe.innerHTML=ea,ze=$(),T($e.$$.fragment),ye=$(),ne=D("hr"),Ee=$(),_e=D("h2"),_e.innerHTML=aa,Oe=$(),ae=D("p"),ae.textContent=Me,Ce=$(),T(ge.$$.fragment),Ge=$(),Be=D("hr"),we=$(),X=D("h2"),X.innerHTML=We,Xe=$(),be=D("p"),be.textContent=ta,q=$(),T(De.$$.fragment),oa=$(),ra=D("hr"),sa=$(),Ye=D("p"),Ye.innerHTML=pa,this.h()},l(e){Ne&&Ne.l(e),r=v(e);const l=Qa("svelte-2igo1p",document.head);ia.l(l),i=C(l,"META",{name:!0,content:!0}),t=C(l,"META",{name:!0,content:!0}),Ue&&Ue.l(l),s=ma(),l.forEach(d),u=v(e),S&&S.l(e),o=v(e),x&&x.l(e),p=v(e),L&&L.l(e),M=v(e),B&&B.l(e),a=v(e),N&&N.l(e),A=v(e),U&&U.l(e),f=v(e),h(R.$$.fragment,e),H=v(e),h(O.$$.fragment,e),Y=v(e),h(W.$$.fragment,e),K=v(e),h(F.$$.fragment,e),I=v(e),h(G.$$.fragment,e),J=v(e),P&&P.l(e),te=v(e),V&&V.l(e),_=v(e),j&&j.l(e),k=v(e),Q&&Q.l(e),ie=v(e),re=C(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),Ae(re)!=="svelte-16bbix0"&&(re.innerHTML=Je),Pe=v(e),de=C(e,"P",{class:!0,"data-svelte-h":!0}),Ae(de)!=="svelte-k4gpzt"&&(de.innerHTML=Te),ue=v(e),le=C(e,"P",{class:!0,"data-svelte-h":!0}),Ae(le)!=="svelte-ia2qo8"&&(le.innerHTML=Ze),Ve=v(e),xe=C(e,"HR",{class:!0}),me=v(e),h(Z.$$.fragment,e),ke=v(e),h(ce.$$.fragment,e),je=v(e),h(fe.$$.fragment,e),pe=v(e),h(ee.$$.fragment,e),qe=v(e),Le=C(e,"HR",{class:!0}),Qe=v(e),se=C(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ae(se)!=="svelte-1gl8trb"&&(se.innerHTML=Re),ve=v(e),oe=C(e,"P",{class:!0,"data-svelte-h":!0}),Ae(oe)!=="svelte-1as16ba"&&(oe.innerHTML=ea),ze=v(e),h($e.$$.fragment,e),ye=v(e),ne=C(e,"HR",{class:!0}),Ee=v(e),_e=C(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ae(_e)!=="svelte-18utict"&&(_e.innerHTML=aa),Oe=v(e),ae=C(e,"P",{class:!0,"data-svelte-h":!0}),Ae(ae)!=="svelte-6jd1j6"&&(ae.textContent=Me),Ce=v(e),h(ge.$$.fragment,e),Ge=v(e),Be=C(e,"HR",{class:!0}),we=v(e),X=C(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ae(X)!=="svelte-1gzmoqo"&&(X.innerHTML=We),Xe=v(e),be=C(e,"P",{class:!0,"data-svelte-h":!0}),Ae(be)!=="svelte-1cz3lm0"&&(be.textContent=ta),q=v(e),h(De.$$.fragment,e),oa=v(e),ra=C(e,"HR",{class:!0}),sa=v(e),Ye=C(e,"P",{class:!0,"data-svelte-h":!0}),Ae(Ye)!=="svelte-143jaik"&&(Ye.innerHTML=pa),this.h()},h(){g(i,"name","twitter:card"),g(i,"content","summary_large_image"),g(t,"name","twitter:site"),g(t,"content","@evidence_dev"),g(re,"class","markdown"),g(re,"id","alertas-climáticos--santa-catarina"),g(de,"class","markdown"),g(le,"class","markdown"),g(xe,"class","markdown"),g(Le,"class","markdown"),g(se,"class","markdown"),g(se,"id","frequência-por-tipo-de-alerta"),g(oe,"class","markdown"),g(ne,"class","markdown"),g(_e,"class","markdown"),g(_e,"id","alertas-por-região-e-severidade"),g(ae,"class","markdown"),g(Be,"class","markdown"),g(X,"class","markdown"),g(X,"id","detalhamento-dos-eventos"),g(be,"class","markdown"),g(ra,"class","markdown"),g(Ye,"class","markdown")},m(e,l){Ne&&Ne.m(e,l),m(e,r,l),ia.m(document.head,null),ua(document.head,i),ua(document.head,t),Ue&&Ue.m(document.head,null),ua(document.head,s),m(e,u,l),S&&S.m(e,l),m(e,o,l),x&&x.m(e,l),m(e,p,l),L&&L.m(e,l),m(e,M,l),B&&B.m(e,l),m(e,a,l),N&&N.m(e,l),m(e,A,l),U&&U.m(e,l),m(e,f,l),b(R,e,l),m(e,H,l),b(O,e,l),m(e,Y,l),b(W,e,l),m(e,K,l),b(F,e,l),m(e,I,l),b(G,e,l),m(e,J,l),P&&P.m(e,l),m(e,te,l),V&&V.m(e,l),m(e,_,l),j&&j.m(e,l),m(e,k,l),Q&&Q.m(e,l),m(e,ie,l),m(e,re,l),m(e,Pe,l),m(e,de,l),m(e,ue,l),m(e,le,l),m(e,Ve,l),m(e,xe,l),m(e,me,l),b(Z,e,l),m(e,ke,l),b(ce,e,l),m(e,je,l),b(fe,e,l),m(e,pe,l),b(ee,e,l),m(e,qe,l),m(e,Le,l),m(e,Qe,l),m(e,se,l),m(e,ve,l),m(e,oe,l),m(e,ze,l),b($e,e,l),m(e,ye,l),m(e,ne,l),m(e,Ee,l),m(e,_e,l),m(e,Oe,l),m(e,ae,l),m(e,Ce,l),b(ge,e,l),m(e,Ge,l),m(e,Be,l),m(e,we,l),m(e,X,l),m(e,Xe,l),m(e,be,l),m(e,q,l),b(De,e,l),m(e,oa,l),m(e,ra,l),m(e,sa,l),m(e,Ye,l),na=!0},p(e,l){var Ea;typeof E<"u"&&E.title&&E.hide_title!==!0&&Ne.p(e,l),ia.p(e,l),typeof E=="object"&&Ue.p(e,l),e[0]?S?(S.p(e,l),l[0]&1&&c(S,1)):(S=Fa(e),S.c(),c(S,1),S.m(o.parentNode,o)):S&&(He(),y(S,1,1,()=>{S=null}),Fe()),e[1]?x?(x.p(e,l),l[0]&2&&c(x,1)):(x=Ha(e),x.c(),c(x,1),x.m(p.parentNode,p)):x&&(He(),y(x,1,1,()=>{x=null}),Fe()),e[2]?L?(L.p(e,l),l[0]&4&&c(L,1)):(L=Ia(e),L.c(),c(L,1),L.m(M.parentNode,M)):L&&(He(),y(L,1,1,()=>{L=null}),Fe()),e[3]?B?(B.p(e,l),l[0]&8&&c(B,1)):(B=Sa(e),B.c(),c(B,1),B.m(a.parentNode,a)):B&&(He(),y(B,1,1,()=>{B=null}),Fe()),e[4]?N?(N.p(e,l),l[0]&16&&c(N,1)):(N=xa(e),N.c(),c(N,1),N.m(A.parentNode,A)):N&&(He(),y(N,1,1,()=>{N=null}),Fe()),e[5]?U?(U.p(e,l),l[0]&32&&c(U,1)):(U=La(e),U.c(),c(U,1),U.m(f.parentNode,f)):U&&(He(),y(U,1,1,()=>{U=null}),Fe());const ca={};l[0]&1&&(ca.data=e[0]),l[0]&2&&(ca.defaultValue=(Ea=e[1][0])==null?void 0:Ea.value),R.$set(ca);const $a={};l[0]&4&&($a.data=e[2]),O.$set($a);const ya={};l[0]&8&&(ya.data=e[3]),W.$set(ya);const ga={};l[0]&16&&(ga.data=e[4]),F.$set(ga);const wa={};l[2]&1024&&(wa.$$scope={dirty:l,ctx:e}),G.$set(wa),e[6]?P?(P.p(e,l),l[0]&64&&c(P,1)):(P=Ba(e),P.c(),c(P,1),P.m(te.parentNode,te)):P&&(He(),y(P,1,1,()=>{P=null}),Fe()),e[7]?V?(V.p(e,l),l[0]&128&&c(V,1)):(V=Na(e),V.c(),c(V,1),V.m(_.parentNode,_)):V&&(He(),y(V,1,1,()=>{V=null}),Fe()),e[8]?j?(j.p(e,l),l[0]&256&&c(j,1)):(j=Ua(e),j.c(),c(j,1),j.m(k.parentNode,k)):j&&(He(),y(j,1,1,()=>{j=null}),Fe()),e[9]?Q?(Q.p(e,l),l[0]&512&&c(Q,1)):(Q=Pa(e),Q.c(),c(Q,1),Q.m(ie.parentNode,ie)):Q&&(He(),y(Q,1,1,()=>{Q=null}),Fe());const ba={};l[0]&64&&(ba.data=e[6]),Z.$set(ba);const ha={};l[0]&64&&(ha.data=e[6]),ce.$set(ha);const Ta={};l[0]&64&&(Ta.data=e[6]),fe.$set(Ta);const ka={};l[0]&64&&(ka.data=e[6]),ee.$set(ka);const qa={};l[0]&128&&(qa.data=e[7]),$e.$set(qa);const Ra={};l[0]&256&&(Ra.data=e[8]),ge.$set(Ra);const fa={};l[0]&512&&(fa.data=e[9]),l[2]&1024&&(fa.$$scope={dirty:l,ctx:e}),De.$set(fa)},i(e){na||(c(S),c(x),c(L),c(B),c(N),c(U),c(R.$$.fragment,e),c(O.$$.fragment,e),c(W.$$.fragment,e),c(F.$$.fragment,e),c(G.$$.fragment,e),c(P),c(V),c(j),c(Q),c(Z.$$.fragment,e),c(ce.$$.fragment,e),c(fe.$$.fragment,e),c(ee.$$.fragment,e),c($e.$$.fragment,e),c(ge.$$.fragment,e),c(De.$$.fragment,e),na=!0)},o(e){y(S),y(x),y(L),y(B),y(N),y(U),y(R.$$.fragment,e),y(O.$$.fragment,e),y(W.$$.fragment,e),y(F.$$.fragment,e),y(G.$$.fragment,e),y(P),y(V),y(j),y(Q),y(Z.$$.fragment,e),y(ce.$$.fragment,e),y(fe.$$.fragment,e),y(ee.$$.fragment,e),y($e.$$.fragment,e),y(ge.$$.fragment,e),y(De.$$.fragment,e),na=!1},d(e){e&&(d(r),d(u),d(o),d(p),d(M),d(a),d(A),d(f),d(H),d(Y),d(K),d(I),d(J),d(te),d(_),d(k),d(ie),d(re),d(Pe),d(de),d(ue),d(le),d(Ve),d(xe),d(me),d(ke),d(je),d(pe),d(qe),d(Le),d(Qe),d(se),d(ve),d(oe),d(ze),d(ye),d(ne),d(Ee),d(_e),d(Oe),d(ae),d(Ce),d(Ge),d(Be),d(we),d(X),d(Xe),d(be),d(q),d(oa),d(ra),d(sa),d(Ye)),Ne&&Ne.d(e),ia.d(e),d(i),d(t),Ue&&Ue.d(e),d(s),S&&S.d(e),x&&x.d(e),L&&L.d(e),B&&B.d(e),N&&N.d(e),U&&U.d(e),w(R,e),w(O,e),w(W,e),w(F,e),w(G,e),P&&P.d(e),V&&V.d(e),j&&j.d(e),Q&&Q.d(e),w(Z,e),w(ce,e),w(fe,e),w(ee,e),w($e,e),w(ge,e),w(De,e)}}}const E={title:"Alertas Climáticos"};function yt(n,r,i){let t,s;Ma(n,nt,q=>i(53,t=q)),Ma(n,Da,q=>i(58,s=q));let{data:u}=r,{data:o={},customFormattingSettings:p,__db:M,inputs:a}=u;za(Da,s="f26cd63c731a3d6ccf921a3dadb2a75e",s);let A=at(lt(a));Oa(A.subscribe(q=>i(12,a=q))),Ga(it,{getCustomFormats:()=>p.customFormats||[]});const f=(q,De)=>ot(M.query,q,{query_name:De});tt(f),t.params,Wa(()=>!0);let R={initialData:void 0,initialError:void 0},H=z`select distinct
  year_month as value,
  year_month as label
from weather_dw.mart_climate__alerts
where alert_type != '__no_alerts__'
order by value desc
limit 24`,O=`select distinct
  year_month as value,
  year_month as label
from weather_dw.mart_climate__alerts
where alert_type != '__no_alerts__'
order by value desc
limit 24`;o.periodos_disponiveis_data&&(o.periodos_disponiveis_data instanceof Error?R.initialError=o.periodos_disponiveis_data:R.initialData=o.periodos_disponiveis_data,o.periodos_disponiveis_columns&&(R.knownColumns=o.periodos_disponiveis_columns));let Y,W=!1;const K=Ie.createReactive({callback:q=>{i(0,Y=q)},execFn:f},{id:"periodos_disponiveis",...R});K(O,{noResolve:H,...R}),globalThis[Symbol.for("periodos_disponiveis")]={get value(){return Y}};let F={initialData:void 0,initialError:void 0},I=z`select max(year_month) as value
from weather_dw.mart_climate__alerts
where alert_type != '__no_alerts__'`,G=`select max(year_month) as value
from weather_dw.mart_climate__alerts
where alert_type != '__no_alerts__'`;o.periodo_mais_recente_data&&(o.periodo_mais_recente_data instanceof Error?F.initialError=o.periodo_mais_recente_data:F.initialData=o.periodo_mais_recente_data,o.periodo_mais_recente_columns&&(F.knownColumns=o.periodo_mais_recente_columns));let J,te=!1;const _=Ie.createReactive({callback:q=>{i(1,J=q)},execFn:f},{id:"periodo_mais_recente",...F});_(G,{noResolve:I,...F}),globalThis[Symbol.for("periodo_mais_recente")]={get value(){return J}};let k={initialData:void 0,initialError:void 0},ie=z`select value, label from (
  select 'Todas' as value, 'Todas as Mesorregiões' as label, 0 as ord
  union all
  select distinct mesoregion as value, mesoregion as label, 1 as ord
  from weather_dw.mart_climate__alerts
  where alert_type != '__no_alerts__'
)
order by ord, label`,re=`select value, label from (
  select 'Todas' as value, 'Todas as Mesorregiões' as label, 0 as ord
  union all
  select distinct mesoregion as value, mesoregion as label, 1 as ord
  from weather_dw.mart_climate__alerts
  where alert_type != '__no_alerts__'
)
order by ord, label`;o.mesorregioes_data&&(o.mesorregioes_data instanceof Error?k.initialError=o.mesorregioes_data:k.initialData=o.mesorregioes_data,o.mesorregioes_columns&&(k.knownColumns=o.mesorregioes_columns));let Je,Pe=!1;const de=Ie.createReactive({callback:q=>{i(2,Je=q)},execFn:f},{id:"mesorregioes",...k});de(re,{noResolve:ie,...k}),globalThis[Symbol.for("mesorregioes")]={get value(){return Je}};let Te={initialData:void 0,initialError:void 0},ue=z`select value, label from (
  select 'Todas' as value, 'Todos os Municípios' as label, 0 as ord
  union all
  select distinct city_name as value, city_name as label, 1 as ord
  from weather_dw.mart_climate__alerts
  where alert_type != '__no_alerts__'
    and ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
)
order by ord, label`,le=`select value, label from (
  select 'Todas' as value, 'Todos os Municípios' as label, 0 as ord
  union all
  select distinct city_name as value, city_name as label, 1 as ord
  from weather_dw.mart_climate__alerts
  where alert_type != '__no_alerts__'
    and ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
)
order by ord, label`;o.cidades_disponiveis_data&&(o.cidades_disponiveis_data instanceof Error?Te.initialError=o.cidades_disponiveis_data:Te.initialData=o.cidades_disponiveis_data,o.cidades_disponiveis_columns&&(Te.knownColumns=o.cidades_disponiveis_columns));let Ze,Ve=!1;const xe=Ie.createReactive({callback:q=>{i(3,Ze=q)},execFn:f},{id:"cidades_disponiveis",...Te});xe(le,{noResolve:ue,...Te}),globalThis[Symbol.for("cidades_disponiveis")]={get value(){return Ze}};let me={initialData:void 0,initialError:void 0},Z=z`select value, label from (
  select 'Todos' as value, 'Todos os Tipos' as label, 0 as ord
  union all
  select distinct alert_type as value, alert_type as label, 1 as ord
  from weather_dw.mart_climate__alerts
  where alert_type != '__no_alerts__'
)
order by ord, label`,ke=`select value, label from (
  select 'Todos' as value, 'Todos os Tipos' as label, 0 as ord
  union all
  select distinct alert_type as value, alert_type as label, 1 as ord
  from weather_dw.mart_climate__alerts
  where alert_type != '__no_alerts__'
)
order by ord, label`;o.tipos_alerta_data&&(o.tipos_alerta_data instanceof Error?me.initialError=o.tipos_alerta_data:me.initialData=o.tipos_alerta_data,o.tipos_alerta_columns&&(me.knownColumns=o.tipos_alerta_columns));let ce,je=!1;const fe=Ie.createReactive({callback:q=>{i(4,ce=q)},execFn:f},{id:"tipos_alerta",...me});fe(ke,{noResolve:Z,...me}),globalThis[Symbol.for("tipos_alerta")]={get value(){return ce}};let pe={initialData:void 0,initialError:void 0},ee=z`select value, label from (
  select 'Todas'    as value, 'Todas as Severidades' as label, 0 as ord
  union all
  select 'critical' as value, 'Crítico'              as label, 1 as ord
  union all
  select 'high'     as value, 'Alto'                 as label, 2 as ord
  union all
  select 'medium'   as value, 'Médio'                as label, 3 as ord
  union all
  select 'low'      as value, 'Baixo'                as label, 4 as ord
)
order by ord`,qe=`select value, label from (
  select 'Todas'    as value, 'Todas as Severidades' as label, 0 as ord
  union all
  select 'critical' as value, 'Crítico'              as label, 1 as ord
  union all
  select 'high'     as value, 'Alto'                 as label, 2 as ord
  union all
  select 'medium'   as value, 'Médio'                as label, 3 as ord
  union all
  select 'low'      as value, 'Baixo'                as label, 4 as ord
)
order by ord`;o.severidades_data&&(o.severidades_data instanceof Error?pe.initialError=o.severidades_data:pe.initialData=o.severidades_data,o.severidades_columns&&(pe.knownColumns=o.severidades_columns));let Le,Qe=!1;const se=Ie.createReactive({callback:q=>{i(5,Le=q)},execFn:f},{id:"severidades",...pe});se(qe,{noResolve:ee,...pe}),globalThis[Symbol.for("severidades")]={get value(){return Le}};let Re={initialData:void 0,initialError:void 0},ve=z`select
  count(*)                                               as total_alertas,
  count(*) filter (where severity = 'critical')          as criticos,
  count(*) filter (where severity = 'high')              as altos,
  count(distinct city_name)                              as municipios_afetados
from weather_dw.mart_climate__alerts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and alert_type != '__no_alerts__'
  and ('${a.mesoregiao.value}'  in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'      in ('Todas', 'undefined', '') or city_name  = '${a.cidade.value}')
  and ('${a.tipo_alerta.value}' in ('Todos', 'undefined', '') or alert_type = '${a.tipo_alerta.value}')
  and ('${a.severidade.value}'  in ('Todas', 'undefined', '') or severity   = '${a.severidade.value}')`,oe=`select
  count(*)                                               as total_alertas,
  count(*) filter (where severity = 'critical')          as criticos,
  count(*) filter (where severity = 'high')              as altos,
  count(distinct city_name)                              as municipios_afetados
from weather_dw.mart_climate__alerts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and alert_type != '__no_alerts__'
  and ('${a.mesoregiao.value}'  in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'      in ('Todas', 'undefined', '') or city_name  = '${a.cidade.value}')
  and ('${a.tipo_alerta.value}' in ('Todos', 'undefined', '') or alert_type = '${a.tipo_alerta.value}')
  and ('${a.severidade.value}'  in ('Todas', 'undefined', '') or severity   = '${a.severidade.value}')`;o.scorecards_data&&(o.scorecards_data instanceof Error?Re.initialError=o.scorecards_data:Re.initialData=o.scorecards_data,o.scorecards_columns&&(Re.knownColumns=o.scorecards_columns));let ea,ze=!1;const $e=Ie.createReactive({callback:q=>{i(6,ea=q)},execFn:f},{id:"scorecards",...Re});$e(oe,{noResolve:ve,...Re}),globalThis[Symbol.for("scorecards")]={get value(){return ea}};let ye={initialData:void 0,initialError:void 0},ne=z`select
  alert_type                                             as tipo,
  count(*) filter (where severity = 'critical')          as critico,
  count(*) filter (where severity = 'high')              as alto,
  count(*) filter (where severity = 'medium')            as medio,
  count(*) filter (where severity = 'low')               as baixo,
  count(*)                                               as total
from weather_dw.mart_climate__alerts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and alert_type != '__no_alerts__'
  and ('${a.mesoregiao.value}'  in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'      in ('Todas', 'undefined', '') or city_name  = '${a.cidade.value}')
  and ('${a.tipo_alerta.value}' in ('Todos', 'undefined', '') or alert_type = '${a.tipo_alerta.value}')
  and ('${a.severidade.value}'  in ('Todas', 'undefined', '') or severity   = '${a.severidade.value}')
group by alert_type
order by total desc`,Ee=`select
  alert_type                                             as tipo,
  count(*) filter (where severity = 'critical')          as critico,
  count(*) filter (where severity = 'high')              as alto,
  count(*) filter (where severity = 'medium')            as medio,
  count(*) filter (where severity = 'low')               as baixo,
  count(*)                                               as total
from weather_dw.mart_climate__alerts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and alert_type != '__no_alerts__'
  and ('${a.mesoregiao.value}'  in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'      in ('Todas', 'undefined', '') or city_name  = '${a.cidade.value}')
  and ('${a.tipo_alerta.value}' in ('Todos', 'undefined', '') or alert_type = '${a.tipo_alerta.value}')
  and ('${a.severidade.value}'  in ('Todas', 'undefined', '') or severity   = '${a.severidade.value}')
group by alert_type
order by total desc`;o.frequencia_por_tipo_data&&(o.frequencia_por_tipo_data instanceof Error?ye.initialError=o.frequencia_por_tipo_data:ye.initialData=o.frequencia_por_tipo_data,o.frequencia_por_tipo_columns&&(ye.knownColumns=o.frequencia_por_tipo_columns));let _e,aa=!1;const Oe=Ie.createReactive({callback:q=>{i(7,_e=q)},execFn:f},{id:"frequencia_por_tipo",...ye});Oe(Ee,{noResolve:ne,...ye}),globalThis[Symbol.for("frequencia_por_tipo")]={get value(){return _e}};let ae={initialData:void 0,initialError:void 0},Me=z`select
  mesoregion                                             as regiao,
  count(*) filter (where severity = 'critical')          as critico,
  count(*) filter (where severity = 'high')              as alto,
  count(*) filter (where severity = 'medium')            as medio,
  count(*) filter (where severity = 'low')               as baixo,
  count(*)                                               as total
from weather_dw.mart_climate__alerts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and alert_type != '__no_alerts__'
  and ('${a.mesoregiao.value}'  in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'      in ('Todas', 'undefined', '') or city_name  = '${a.cidade.value}')
  and ('${a.tipo_alerta.value}' in ('Todos', 'undefined', '') or alert_type = '${a.tipo_alerta.value}')
  and ('${a.severidade.value}'  in ('Todas', 'undefined', '') or severity   = '${a.severidade.value}')
group by mesoregion
order by total desc`,Ce=`select
  mesoregion                                             as regiao,
  count(*) filter (where severity = 'critical')          as critico,
  count(*) filter (where severity = 'high')              as alto,
  count(*) filter (where severity = 'medium')            as medio,
  count(*) filter (where severity = 'low')               as baixo,
  count(*)                                               as total
from weather_dw.mart_climate__alerts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and alert_type != '__no_alerts__'
  and ('${a.mesoregiao.value}'  in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'      in ('Todas', 'undefined', '') or city_name  = '${a.cidade.value}')
  and ('${a.tipo_alerta.value}' in ('Todos', 'undefined', '') or alert_type = '${a.tipo_alerta.value}')
  and ('${a.severidade.value}'  in ('Todas', 'undefined', '') or severity   = '${a.severidade.value}')
group by mesoregion
order by total desc`;o.alertas_por_regiao_data&&(o.alertas_por_regiao_data instanceof Error?ae.initialError=o.alertas_por_regiao_data:ae.initialData=o.alertas_por_regiao_data,o.alertas_por_regiao_columns&&(ae.knownColumns=o.alertas_por_regiao_columns));let ge,Ge=!1;const Be=Ie.createReactive({callback:q=>{i(8,ge=q)},execFn:f},{id:"alertas_por_regiao",...ae});Be(Ce,{noResolve:Me,...ae}),globalThis[Symbol.for("alertas_por_regiao")]={get value(){return ge}};let we={initialData:void 0,initialError:void 0},X=z`select
  date,
  city_name,
  mesoregion,
  alert_type,
  severity,
  temp_max_c,
  temp_min_c,
  temp_anomaly_c,
  precipitation_mm,
  wind_speed_max_kmh,
  uv_index_max
from weather_dw.mart_climate__alerts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and alert_type != '__no_alerts__'
  and ('${a.mesoregiao.value}'  in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'      in ('Todas', 'undefined', '') or city_name  = '${a.cidade.value}')
  and ('${a.tipo_alerta.value}' in ('Todos', 'undefined', '') or alert_type = '${a.tipo_alerta.value}')
  and ('${a.severidade.value}'  in ('Todas', 'undefined', '') or severity   = '${a.severidade.value}')
order by date desc, severity`,We=`select
  date,
  city_name,
  mesoregion,
  alert_type,
  severity,
  temp_max_c,
  temp_min_c,
  temp_anomaly_c,
  precipitation_mm,
  wind_speed_max_kmh,
  uv_index_max
from weather_dw.mart_climate__alerts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and alert_type != '__no_alerts__'
  and ('${a.mesoregiao.value}'  in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'      in ('Todas', 'undefined', '') or city_name  = '${a.cidade.value}')
  and ('${a.tipo_alerta.value}' in ('Todos', 'undefined', '') or alert_type = '${a.tipo_alerta.value}')
  and ('${a.severidade.value}'  in ('Todas', 'undefined', '') or severity   = '${a.severidade.value}')
order by date desc, severity`;o.tabela_eventos_data&&(o.tabela_eventos_data instanceof Error?we.initialError=o.tabela_eventos_data:we.initialData=o.tabela_eventos_data,o.tabela_eventos_columns&&(we.knownColumns=o.tabela_eventos_columns));let Xe,be=!1;const ta=Ie.createReactive({callback:q=>{i(9,Xe=q)},execFn:f},{id:"tabela_eventos",...we});return ta(We,{noResolve:X,...we}),globalThis[Symbol.for("tabela_eventos")]={get value(){return Xe}},n.$$set=q=>{"data"in q&&i(10,u=q.data)},n.$$.update=()=>{n.$$.dirty[0]&1024&&i(11,{data:o={},customFormattingSettings:p,__db:M}=u,o),n.$$.dirty[0]&2048&&rt.set(Object.keys(o).length>0),n.$$.dirty[1]&4194304&&t.params,n.$$.dirty[0]&122880&&(H||!W?H||(K(O,{noResolve:H,...R}),i(16,W=!0)):K(O,{noResolve:H})),n.$$.dirty[0]&1966080&&(I||!te?I||(_(G,{noResolve:I,...F}),i(20,te=!0)):_(G,{noResolve:I})),n.$$.dirty[0]&31457280&&(ie||!Pe?ie||(de(re,{noResolve:ie,...k}),i(24,Pe=!0)):de(re,{noResolve:ie})),n.$$.dirty[0]&4096&&i(26,ue=z`select value, label from (
  select 'Todas' as value, 'Todos os Municípios' as label, 0 as ord
  union all
  select distinct city_name as value, city_name as label, 1 as ord
  from weather_dw.mart_climate__alerts
  where alert_type != '__no_alerts__'
    and ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
)
order by ord, label`),n.$$.dirty[0]&4096&&i(27,le=`select value, label from (
  select 'Todas' as value, 'Todos os Municípios' as label, 0 as ord
  union all
  select distinct city_name as value, city_name as label, 1 as ord
  from weather_dw.mart_climate__alerts
  where alert_type != '__no_alerts__'
    and ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
)
order by ord, label`),n.$$.dirty[0]&503316480&&(ue||!Ve?ue||(xe(le,{noResolve:ue,...Te}),i(28,Ve=!0)):xe(le,{noResolve:ue})),n.$$.dirty[0]&1610612736|n.$$.dirty[1]&3&&(Z||!je?Z||(fe(ke,{noResolve:Z,...me}),i(32,je=!0)):fe(ke,{noResolve:Z})),n.$$.dirty[1]&60&&(ee||!Qe?ee||(se(qe,{noResolve:ee,...pe}),i(36,Qe=!0)):se(qe,{noResolve:ee})),n.$$.dirty[0]&4096&&i(38,ve=z`select
  count(*)                                               as total_alertas,
  count(*) filter (where severity = 'critical')          as criticos,
  count(*) filter (where severity = 'high')              as altos,
  count(distinct city_name)                              as municipios_afetados
from weather_dw.mart_climate__alerts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and alert_type != '__no_alerts__'
  and ('${a.mesoregiao.value}'  in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'      in ('Todas', 'undefined', '') or city_name  = '${a.cidade.value}')
  and ('${a.tipo_alerta.value}' in ('Todos', 'undefined', '') or alert_type = '${a.tipo_alerta.value}')
  and ('${a.severidade.value}'  in ('Todas', 'undefined', '') or severity   = '${a.severidade.value}')`),n.$$.dirty[0]&4096&&i(39,oe=`select
  count(*)                                               as total_alertas,
  count(*) filter (where severity = 'critical')          as criticos,
  count(*) filter (where severity = 'high')              as altos,
  count(distinct city_name)                              as municipios_afetados
from weather_dw.mart_climate__alerts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and alert_type != '__no_alerts__'
  and ('${a.mesoregiao.value}'  in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'      in ('Todas', 'undefined', '') or city_name  = '${a.cidade.value}')
  and ('${a.tipo_alerta.value}' in ('Todos', 'undefined', '') or alert_type = '${a.tipo_alerta.value}')
  and ('${a.severidade.value}'  in ('Todas', 'undefined', '') or severity   = '${a.severidade.value}')`),n.$$.dirty[1]&960&&(ve||!ze?ve||($e(oe,{noResolve:ve,...Re}),i(40,ze=!0)):$e(oe,{noResolve:ve})),n.$$.dirty[0]&4096&&i(42,ne=z`select
  alert_type                                             as tipo,
  count(*) filter (where severity = 'critical')          as critico,
  count(*) filter (where severity = 'high')              as alto,
  count(*) filter (where severity = 'medium')            as medio,
  count(*) filter (where severity = 'low')               as baixo,
  count(*)                                               as total
from weather_dw.mart_climate__alerts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and alert_type != '__no_alerts__'
  and ('${a.mesoregiao.value}'  in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'      in ('Todas', 'undefined', '') or city_name  = '${a.cidade.value}')
  and ('${a.tipo_alerta.value}' in ('Todos', 'undefined', '') or alert_type = '${a.tipo_alerta.value}')
  and ('${a.severidade.value}'  in ('Todas', 'undefined', '') or severity   = '${a.severidade.value}')
group by alert_type
order by total desc`),n.$$.dirty[0]&4096&&i(43,Ee=`select
  alert_type                                             as tipo,
  count(*) filter (where severity = 'critical')          as critico,
  count(*) filter (where severity = 'high')              as alto,
  count(*) filter (where severity = 'medium')            as medio,
  count(*) filter (where severity = 'low')               as baixo,
  count(*)                                               as total
from weather_dw.mart_climate__alerts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and alert_type != '__no_alerts__'
  and ('${a.mesoregiao.value}'  in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'      in ('Todas', 'undefined', '') or city_name  = '${a.cidade.value}')
  and ('${a.tipo_alerta.value}' in ('Todos', 'undefined', '') or alert_type = '${a.tipo_alerta.value}')
  and ('${a.severidade.value}'  in ('Todas', 'undefined', '') or severity   = '${a.severidade.value}')
group by alert_type
order by total desc`),n.$$.dirty[1]&15360&&(ne||!aa?ne||(Oe(Ee,{noResolve:ne,...ye}),i(44,aa=!0)):Oe(Ee,{noResolve:ne})),n.$$.dirty[0]&4096&&i(46,Me=z`select
  mesoregion                                             as regiao,
  count(*) filter (where severity = 'critical')          as critico,
  count(*) filter (where severity = 'high')              as alto,
  count(*) filter (where severity = 'medium')            as medio,
  count(*) filter (where severity = 'low')               as baixo,
  count(*)                                               as total
from weather_dw.mart_climate__alerts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and alert_type != '__no_alerts__'
  and ('${a.mesoregiao.value}'  in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'      in ('Todas', 'undefined', '') or city_name  = '${a.cidade.value}')
  and ('${a.tipo_alerta.value}' in ('Todos', 'undefined', '') or alert_type = '${a.tipo_alerta.value}')
  and ('${a.severidade.value}'  in ('Todas', 'undefined', '') or severity   = '${a.severidade.value}')
group by mesoregion
order by total desc`),n.$$.dirty[0]&4096&&i(47,Ce=`select
  mesoregion                                             as regiao,
  count(*) filter (where severity = 'critical')          as critico,
  count(*) filter (where severity = 'high')              as alto,
  count(*) filter (where severity = 'medium')            as medio,
  count(*) filter (where severity = 'low')               as baixo,
  count(*)                                               as total
from weather_dw.mart_climate__alerts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and alert_type != '__no_alerts__'
  and ('${a.mesoregiao.value}'  in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'      in ('Todas', 'undefined', '') or city_name  = '${a.cidade.value}')
  and ('${a.tipo_alerta.value}' in ('Todos', 'undefined', '') or alert_type = '${a.tipo_alerta.value}')
  and ('${a.severidade.value}'  in ('Todas', 'undefined', '') or severity   = '${a.severidade.value}')
group by mesoregion
order by total desc`),n.$$.dirty[1]&245760&&(Me||!Ge?Me||(Be(Ce,{noResolve:Me,...ae}),i(48,Ge=!0)):Be(Ce,{noResolve:Me})),n.$$.dirty[0]&4096&&i(50,X=z`select
  date,
  city_name,
  mesoregion,
  alert_type,
  severity,
  temp_max_c,
  temp_min_c,
  temp_anomaly_c,
  precipitation_mm,
  wind_speed_max_kmh,
  uv_index_max
from weather_dw.mart_climate__alerts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and alert_type != '__no_alerts__'
  and ('${a.mesoregiao.value}'  in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'      in ('Todas', 'undefined', '') or city_name  = '${a.cidade.value}')
  and ('${a.tipo_alerta.value}' in ('Todos', 'undefined', '') or alert_type = '${a.tipo_alerta.value}')
  and ('${a.severidade.value}'  in ('Todas', 'undefined', '') or severity   = '${a.severidade.value}')
order by date desc, severity`),n.$$.dirty[0]&4096&&i(51,We=`select
  date,
  city_name,
  mesoregion,
  alert_type,
  severity,
  temp_max_c,
  temp_min_c,
  temp_anomaly_c,
  precipitation_mm,
  wind_speed_max_kmh,
  uv_index_max
from weather_dw.mart_climate__alerts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and alert_type != '__no_alerts__'
  and ('${a.mesoregiao.value}'  in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'      in ('Todas', 'undefined', '') or city_name  = '${a.cidade.value}')
  and ('${a.tipo_alerta.value}' in ('Todos', 'undefined', '') or alert_type = '${a.tipo_alerta.value}')
  and ('${a.severidade.value}'  in ('Todas', 'undefined', '') or severity   = '${a.severidade.value}')
order by date desc, severity`),n.$$.dirty[1]&3932160&&(X||!be?X||(ta(We,{noResolve:X,...we}),i(52,be=!0)):ta(We,{noResolve:X}))},i(14,H=z`select distinct
  year_month as value,
  year_month as label
from weather_dw.mart_climate__alerts
where alert_type != '__no_alerts__'
order by value desc
limit 24`),i(15,O=`select distinct
  year_month as value,
  year_month as label
from weather_dw.mart_climate__alerts
where alert_type != '__no_alerts__'
order by value desc
limit 24`),i(18,I=z`select max(year_month) as value
from weather_dw.mart_climate__alerts
where alert_type != '__no_alerts__'`),i(19,G=`select max(year_month) as value
from weather_dw.mart_climate__alerts
where alert_type != '__no_alerts__'`),i(22,ie=z`select value, label from (
  select 'Todas' as value, 'Todas as Mesorregiões' as label, 0 as ord
  union all
  select distinct mesoregion as value, mesoregion as label, 1 as ord
  from weather_dw.mart_climate__alerts
  where alert_type != '__no_alerts__'
)
order by ord, label`),i(23,re=`select value, label from (
  select 'Todas' as value, 'Todas as Mesorregiões' as label, 0 as ord
  union all
  select distinct mesoregion as value, mesoregion as label, 1 as ord
  from weather_dw.mart_climate__alerts
  where alert_type != '__no_alerts__'
)
order by ord, label`),i(30,Z=z`select value, label from (
  select 'Todos' as value, 'Todos os Tipos' as label, 0 as ord
  union all
  select distinct alert_type as value, alert_type as label, 1 as ord
  from weather_dw.mart_climate__alerts
  where alert_type != '__no_alerts__'
)
order by ord, label`),i(31,ke=`select value, label from (
  select 'Todos' as value, 'Todos os Tipos' as label, 0 as ord
  union all
  select distinct alert_type as value, alert_type as label, 1 as ord
  from weather_dw.mart_climate__alerts
  where alert_type != '__no_alerts__'
)
order by ord, label`),i(34,ee=z`select value, label from (
  select 'Todas'    as value, 'Todas as Severidades' as label, 0 as ord
  union all
  select 'critical' as value, 'Crítico'              as label, 1 as ord
  union all
  select 'high'     as value, 'Alto'                 as label, 2 as ord
  union all
  select 'medium'   as value, 'Médio'                as label, 3 as ord
  union all
  select 'low'      as value, 'Baixo'                as label, 4 as ord
)
order by ord`),i(35,qe=`select value, label from (
  select 'Todas'    as value, 'Todas as Severidades' as label, 0 as ord
  union all
  select 'critical' as value, 'Crítico'              as label, 1 as ord
  union all
  select 'high'     as value, 'Alto'                 as label, 2 as ord
  union all
  select 'medium'   as value, 'Médio'                as label, 3 as ord
  union all
  select 'low'      as value, 'Baixo'                as label, 4 as ord
)
order by ord`),[Y,J,Je,Ze,ce,Le,ea,_e,ge,Xe,u,o,a,R,H,O,W,F,I,G,te,k,ie,re,Pe,Te,ue,le,Ve,me,Z,ke,je,pe,ee,qe,Qe,Re,ve,oe,ze,ye,ne,Ee,aa,ae,Me,Ce,Ge,we,X,We,be,t]}class Dt extends Ja{constructor(r){super(),Za(this,r,yt,$t,ja,{data:10},null,[-1,-1,-1])}}export{Dt as component};
