import{s as Ba,d as c,i as _,a as na,b as y,c as p,h as Qa,e as D,f as la,g as Te,j as v,k as H,l as Ra,m as Va,o as ja,n as Oa,p as za,q as Ce,r as Ga,t as Wa,u as Xa}from"../chunks/scheduler.BiECNykD.js";import{S as Ya,i as Ka,d as h,t as $,a as f,c as Ee,m as b,b as T,e as k,g as Me}from"../chunks/index.DMIfMoOS.js";import{D as Ea,e as Ja,s as Za,Q as De,p as et,b as He,a as Ma,r as Da,C as at}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BJBNz7OY.js";import{w as tt}from"../chunks/entry.Bbs89ys7.js";import{h as B,p as it}from"../chunks/button.DqjGl4eC.js";import{D as _a,Q as Fe}from"../chunks/getCompletedData.DH_oERSc.js";import{B as st,a as Je}from"../chunks/ButtonGroup.1dZvbagc.js";import{p as rt}from"../chunks/stores.B8_LoWM1.js";import{B as Ha}from"../chunks/BarChart.DfXFXSyp.js";import{B as oa}from"../chunks/BigValue.BT8vwZVe.js";function ot(m){let i,s=E.title+"",t;return{c(){i=H("h1"),t=Xa(s),this.h()},l(l){i=D(l,"H1",{class:!0});var d=Ga(i);t=Wa(d,s),d.forEach(c),this.h()},h(){y(i,"class","title")},m(l,d){_(l,i,d),na(i,t)},p:Ce,d(l){l&&c(i)}}}function nt(m){return{c(){this.h()},l(i){this.h()},h(){document.title="Evidence"},m:Ce,p:Ce,d:Ce}}function lt(m){let i,s,t,l,d;return document.title=i=E.title,{c(){s=v(),t=H("meta"),l=v(),d=H("meta"),this.h()},l(o){s=p(o),t=D(o,"META",{property:!0,content:!0}),l=p(o),d=D(o,"META",{name:!0,content:!0}),this.h()},h(){var o,u;y(t,"property","og:title"),y(t,"content",((o=E.og)==null?void 0:o.title)??E.title),y(d,"name","twitter:title"),y(d,"content",((u=E.og)==null?void 0:u.title)??E.title)},m(o,u){_(o,s,u),_(o,t,u),_(o,l,u),_(o,d,u)},p(o,u){u&0&&i!==(i=E.title)&&(document.title=i)},d(o){o&&(c(s),c(t),c(l),c(d))}}}function mt(m){var d,o;let i,s,t=(E.description||((d=E.og)==null?void 0:d.description))&&dt(),l=((o=E.og)==null?void 0:o.image)&&ut();return{c(){t&&t.c(),i=v(),l&&l.c(),s=la()},l(u){t&&t.l(u),i=p(u),l&&l.l(u),s=la()},m(u,w){t&&t.m(u,w),_(u,i,w),l&&l.m(u,w),_(u,s,w)},p(u,w){var a,C;(E.description||(a=E.og)!=null&&a.description)&&t.p(u,w),(C=E.og)!=null&&C.image&&l.p(u,w)},d(u){u&&(c(i),c(s)),t&&t.d(u),l&&l.d(u)}}}function dt(m){let i,s,t,l,d;return{c(){i=H("meta"),s=v(),t=H("meta"),l=v(),d=H("meta"),this.h()},l(o){i=D(o,"META",{name:!0,content:!0}),s=p(o),t=D(o,"META",{property:!0,content:!0}),l=p(o),d=D(o,"META",{name:!0,content:!0}),this.h()},h(){var o,u,w;y(i,"name","description"),y(i,"content",E.description??((o=E.og)==null?void 0:o.description)),y(t,"property","og:description"),y(t,"content",((u=E.og)==null?void 0:u.description)??E.description),y(d,"name","twitter:description"),y(d,"content",((w=E.og)==null?void 0:w.description)??E.description)},m(o,u){_(o,i,u),_(o,s,u),_(o,t,u),_(o,l,u),_(o,d,u)},p:Ce,d(o){o&&(c(i),c(s),c(t),c(l),c(d))}}}function ut(m){let i,s,t;return{c(){i=H("meta"),s=v(),t=H("meta"),this.h()},l(l){i=D(l,"META",{property:!0,content:!0}),s=p(l),t=D(l,"META",{name:!0,content:!0}),this.h()},h(){var l,d;y(i,"property","og:image"),y(i,"content",Ma((l=E.og)==null?void 0:l.image)),y(t,"name","twitter:image"),y(t,"content",Ma((d=E.og)==null?void 0:d.image))},m(l,d){_(l,i,d),_(l,s,d),_(l,t,d)},p:Ce,d(l){l&&(c(i),c(s),c(t))}}}function Ca(m){let i,s;return i=new Fe({props:{queryID:"mesorregioes",queryResult:m[0]}}),{c(){k(i.$$.fragment)},l(t){T(i.$$.fragment,t)},m(t,l){b(i,t,l),s=!0},p(t,l){const d={};l[0]&1&&(d.queryResult=t[0]),i.$set(d)},i(t){s||(f(i.$$.fragment,t),s=!0)},o(t){$(i.$$.fragment,t),s=!1},d(t){h(i,t)}}}function Fa(m){let i,s;return i=new Fe({props:{queryID:"cidades_disponiveis",queryResult:m[1]}}),{c(){k(i.$$.fragment)},l(t){T(i.$$.fragment,t)},m(t,l){b(i,t,l),s=!0},p(t,l){const d={};l[0]&2&&(d.queryResult=t[1]),i.$set(d)},i(t){s||(f(i.$$.fragment,t),s=!0)},o(t){$(i.$$.fragment,t),s=!1},d(t){h(i,t)}}}function Ia(m){let i,s;return i=new Fe({props:{queryID:"meses_disponiveis",queryResult:m[2]}}),{c(){k(i.$$.fragment)},l(t){T(i.$$.fragment,t)},m(t,l){b(i,t,l),s=!0},p(t,l){const d={};l[0]&4&&(d.queryResult=t[2]),i.$set(d)},i(t){s||(f(i.$$.fragment,t),s=!0)},o(t){$(i.$$.fragment,t),s=!1},d(t){h(i,t)}}}function Aa(m){let i,s;return i=new Fe({props:{queryID:"mes_mais_recente",queryResult:m[3]}}),{c(){k(i.$$.fragment)},l(t){T(i.$$.fragment,t)},m(t,l){b(i,t,l),s=!0},p(t,l){const d={};l[0]&8&&(d.queryResult=t[3]),i.$set(d)},i(t){s||(f(i.$$.fragment,t),s=!0)},o(t){$(i.$$.fragment,t),s=!1},d(t){h(i,t)}}}function ct(m){let i,s,t,l,d,o,u,w,a,C,R,M;return i=new Je({props:{valueLabel:"Todas",value:"Todas",default:!0}}),t=new Je({props:{valueLabel:"Seco",value:"dry"}}),d=new Je({props:{valueLabel:"Leve",value:"light"}}),u=new Je({props:{valueLabel:"Moderado",value:"moderate"}}),a=new Je({props:{valueLabel:"Forte",value:"heavy"}}),R=new Je({props:{valueLabel:"Extremo",value:"extreme"}}),{c(){k(i.$$.fragment),s=v(),k(t.$$.fragment),l=v(),k(d.$$.fragment),o=v(),k(u.$$.fragment),w=v(),k(a.$$.fragment),C=v(),k(R.$$.fragment)},l(n){T(i.$$.fragment,n),s=p(n),T(t.$$.fragment,n),l=p(n),T(d.$$.fragment,n),o=p(n),T(u.$$.fragment,n),w=p(n),T(a.$$.fragment,n),C=p(n),T(R.$$.fragment,n)},m(n,g){b(i,n,g),_(n,s,g),b(t,n,g),_(n,l,g),b(d,n,g),_(n,o,g),b(u,n,g),_(n,w,g),b(a,n,g),_(n,C,g),b(R,n,g),M=!0},p:Ce,i(n){M||(f(i.$$.fragment,n),f(t.$$.fragment,n),f(d.$$.fragment,n),f(u.$$.fragment,n),f(a.$$.fragment,n),f(R.$$.fragment,n),M=!0)},o(n){$(i.$$.fragment,n),$(t.$$.fragment,n),$(d.$$.fragment,n),$(u.$$.fragment,n),$(a.$$.fragment,n),$(R.$$.fragment,n),M=!1},d(n){n&&(c(s),c(l),c(o),c(w),c(C)),h(i,n),h(t,n),h(d,n),h(u,n),h(a,n),h(R,n)}}}function La(m){let i,s;return i=new Fe({props:{queryID:"scorecards",queryResult:m[4]}}),{c(){k(i.$$.fragment)},l(t){T(i.$$.fragment,t)},m(t,l){b(i,t,l),s=!0},p(t,l){const d={};l[0]&16&&(d.queryResult=t[4]),i.$set(d)},i(t){s||(f(i.$$.fragment,t),s=!0)},o(t){$(i.$$.fragment,t),s=!1},d(t){h(i,t)}}}function Sa(m){let i,s;return i=new Fe({props:{queryID:"precip_por_municipio",queryResult:m[5]}}),{c(){k(i.$$.fragment)},l(t){T(i.$$.fragment,t)},m(t,l){b(i,t,l),s=!0},p(t,l){const d={};l[0]&32&&(d.queryResult=t[5]),i.$set(d)},i(t){s||(f(i.$$.fragment,t),s=!0)},o(t){$(i.$$.fragment,t),s=!1},d(t){h(i,t)}}}function xa(m){let i,s;return i=new Fe({props:{queryID:"media_estadual",queryResult:m[6]}}),{c(){k(i.$$.fragment)},l(t){T(i.$$.fragment,t)},m(t,l){b(i,t,l),s=!0},p(t,l){const d={};l[0]&64&&(d.queryResult=t[6]),i.$set(d)},i(t){s||(f(i.$$.fragment,t),s=!0)},o(t){$(i.$$.fragment,t),s=!1},d(t){h(i,t)}}}function Pa(m){let i,s;return i=new Fe({props:{queryID:"heatmap_intensidade",queryResult:m[7]}}),{c(){k(i.$$.fragment)},l(t){T(i.$$.fragment,t)},m(t,l){b(i,t,l),s=!0},p(t,l){const d={};l[0]&128&&(d.queryResult=t[7]),i.$set(d)},i(t){s||(f(i.$$.fragment,t),s=!0)},o(t){$(i.$$.fragment,t),s=!1},d(t){h(i,t)}}}function Ua(m){let i,s;return i=new Fe({props:{queryID:"distribuicao_classes",queryResult:m[8]}}),{c(){k(i.$$.fragment)},l(t){T(i.$$.fragment,t)},m(t,l){b(i,t,l),s=!0},p(t,l){const d={};l[0]&256&&(d.queryResult=t[8]),i.$set(d)},i(t){s||(f(i.$$.fragment,t),s=!0)},o(t){$(i.$$.fragment,t),s=!1},d(t){h(i,t)}}}function _t(m){let i,s,t,l,d,o,u,w,a,C,R,M;return i=new He({props:{id:"dia",title:"Dia"}}),t=new He({props:{id:"seco",title:"Seco",contentType:"colorscale",colorScale:"negative"}}),d=new He({props:{id:"leve",title:"Leve",contentType:"colorscale"}}),u=new He({props:{id:"moderado",title:"Moderado",contentType:"colorscale"}}),a=new He({props:{id:"forte",title:"Forte",contentType:"colorscale"}}),R=new He({props:{id:"extremo",title:"Extremo",contentType:"colorscale"}}),{c(){k(i.$$.fragment),s=v(),k(t.$$.fragment),l=v(),k(d.$$.fragment),o=v(),k(u.$$.fragment),w=v(),k(a.$$.fragment),C=v(),k(R.$$.fragment)},l(n){T(i.$$.fragment,n),s=p(n),T(t.$$.fragment,n),l=p(n),T(d.$$.fragment,n),o=p(n),T(u.$$.fragment,n),w=p(n),T(a.$$.fragment,n),C=p(n),T(R.$$.fragment,n)},m(n,g){b(i,n,g),_(n,s,g),b(t,n,g),_(n,l,g),b(d,n,g),_(n,o,g),b(u,n,g),_(n,w,g),b(a,n,g),_(n,C,g),b(R,n,g),M=!0},p:Ce,i(n){M||(f(i.$$.fragment,n),f(t.$$.fragment,n),f(d.$$.fragment,n),f(u.$$.fragment,n),f(a.$$.fragment,n),f(R.$$.fragment,n),M=!0)},o(n){$(i.$$.fragment,n),$(t.$$.fragment,n),$(d.$$.fragment,n),$(u.$$.fragment,n),$(a.$$.fragment,n),$(R.$$.fragment,n),M=!1},d(n){n&&(c(s),c(l),c(o),c(w),c(C)),h(i,n),h(t,n),h(d,n),h(u,n),h(a,n),h(R,n)}}}function ft(m){let i,s,t,l,d,o;return i=new He({props:{id:"classe",title:"Intensidade"}}),t=new He({props:{id:"registros",title:"Registros"}}),d=new He({props:{id:"percentual",title:"%",fmt:"0.0",contentType:"colorscale"}}),{c(){k(i.$$.fragment),s=v(),k(t.$$.fragment),l=v(),k(d.$$.fragment)},l(u){T(i.$$.fragment,u),s=p(u),T(t.$$.fragment,u),l=p(u),T(d.$$.fragment,u)},m(u,w){b(i,u,w),_(u,s,w),b(t,u,w),_(u,l,w),b(d,u,w),o=!0},p:Ce,i(u){o||(f(i.$$.fragment,u),f(t.$$.fragment,u),f(d.$$.fragment,u),o=!0)},o(u){$(i.$$.fragment,u),$(t.$$.fragment,u),$(d.$$.fragment,u),o=!1},d(u){u&&(c(s),c(l)),h(i,u),h(t,u),h(d,u)}}}function pt(m){var va;let i,s,t,l,d,o,u,w,a,C,R,M,n,g,Ie,ee,Ae,z,G,ae,pe,ve,K,$e='<a href="#análise-de-precipitação--santa-catarina">Análise de Precipitação — Santa Catarina</a>',te,W,We='Das enchentes no Vale do Itajaí ao déficit hídrico no Oeste, a chuva é o fenômeno com maior impacto direto na vida da população catarinense. Esta página responde três perguntas em sequência: <strong class="markdown">onde choveu mais, quando choveu, e com que intensidade?</strong>',Le,ie,ge='A leitura conjunta dessas três dimensões revela algo que nenhuma isolada consegue — o <em class="markdown">perfil</em> da chuva no período. Um mês com chuvas concentradas em dois dias intensos e um mês com chuvas distribuídas podem ter o mesmo total acumulado, mas consequências completamente diferentes para drenagem, agricultura e risco de desastre.',se,_e,Se,re,xe,V,oe,X,Pe,ne,Ue,J,le,O,Xe='<a href="#precipitação-acumulada-por-município">Precipitação Acumulada por Município</a>',Ne,me,ye="Municípios ordenados do mais chuvoso ao mais seco no período. A linha de referência marca a média estadual — barras acima indicam municípios com precipitação extraordinária; abaixo, comportamento mais seco que o padrão de Santa Catarina no mesmo período.",de,Y,Be,ke,Qe,Q,we='<a href="#quando-choveu--intensidade-por-dia">Quando Choveu — Intensidade por Dia</a>',he,ue,Ye='Cada linha é um dia do mês. As colunas mostram quantos municípios registraram cada intensidade de chuva naquele dia. Dias com muitos municípios em <strong class="markdown">forte</strong> ou <strong class="markdown">extremo</strong> sinalizam eventos generalizados — o tipo de situação que sobrecarrega sistemas de drenagem em todo o estado. Dias isolados com cores intensas revelam eventos localizados.',Ve,j,ce,fe,je,Z,Ke='<a href="#perfil-do-período--distribuição-por-intensidade">Perfil do Período — Distribuição por Intensidade</a>',q,be,fa='Qual foi o perfil dominante das chuvas no mês? Um perfil saudável tem predominância de dias <code class="markdown">seco</code> e <code class="markdown">leve</code>. Uma fatia relevante de <code class="markdown">forte</code> ou <code class="markdown">extremo</code> indica que as chuvas não foram apenas volumosas, mas concentradas em eventos de alta intensidade — o que eleva o risco independentemente do total acumulado.',aa,Oe,ta,ze,ia,Ze,sa,Ge,pa='<strong class="markdown">Navegação:</strong> <a href="/Analytics-Engineer/Weather-Analytics/" class="markdown">Início</a> · <a href="/Analytics-Engineer/Weather-Analytics/temperatura" class="markdown">Temperatura</a> · <a href="/Analytics-Engineer/Weather-Analytics/alertas" class="markdown">Alertas</a> · <a href="/Analytics-Engineer/Weather-Analytics/horario" class="markdown">Horário</a>',ra,qe=typeof E<"u"&&E.title&&E.hide_title!==!0&&ot();function Na(e,r){return typeof E<"u"&&E.title?lt:nt}let ea=Na()(m),Re=typeof E=="object"&&mt(),F=m[0]&&Ca(m),I=m[1]&&Fa(m),A=m[2]&&Ia(m),L=m[3]&&Aa(m);C=new _a({props:{name:"mesoregiao",data:m[0],value:"value",label:"label",title:"Mesorregião",defaultValue:"Todas"}}),M=new _a({props:{name:"cidade",data:m[1],value:"value",label:"label",title:"Município",defaultValue:"Todas"}}),g=new _a({props:{name:"ano_mes",data:m[2],value:"value",label:"label",title:"Mês/Ano",defaultValue:(va=m[3][0])==null?void 0:va.value}}),ee=new st({props:{name:"classe",title:"Intensidade de Chuva",$$slots:{default:[ct]},$$scope:{ctx:m}}});let S=m[4]&&La(m),x=m[5]&&Sa(m),P=m[6]&&xa(m),U=m[7]&&Pa(m),N=m[8]&&Ua(m);return re=new oa({props:{data:m[4],value:"precip_total_mm",title:"Precipitação Total",fmt:"0.0mm"}}),V=new oa({props:{data:m[4],value:"anomalia_media_mm",title:"Anomalia Média",fmt:"+0.0;-0.0mm"}}),X=new oa({props:{data:m[4],value:"dias_com_chuva",title:"Dias com Chuva"}}),ne=new oa({props:{data:m[4],value:"municipios_extremo",title:"Municípios com Chuva Extrema"}}),Y=new Ha({props:{data:m[5],x:"city_name",y:"acumulado_mm",yAxisTitle:"Precipitação acumulada (mm)",swapXY:"true",colorPalette:["#3182BD"],referenceLine:m[6][0].media_sc_mm,referenceLineLabel:"Média SC"}}),j=new Ea({props:{data:m[7],rows:"31",$$slots:{default:[_t]},$$scope:{ctx:m}}}),Oe=new Ha({props:{data:m[8],x:"classe",y:"percentual",yAxisTitle:"% dos dias (município × dia)",labels:!0,colorPalette:["#F5F5F5","#DEEBF7","#9ECAE1","#3182BD","#08519C"]}}),ze=new Ea({props:{data:m[8],$$slots:{default:[ft]},$$scope:{ctx:m}}}),{c(){qe&&qe.c(),i=v(),ea.c(),s=H("meta"),t=H("meta"),Re&&Re.c(),l=la(),d=v(),F&&F.c(),o=v(),I&&I.c(),u=v(),A&&A.c(),w=v(),L&&L.c(),a=v(),k(C.$$.fragment),R=v(),k(M.$$.fragment),n=v(),k(g.$$.fragment),Ie=v(),k(ee.$$.fragment),Ae=v(),S&&S.c(),z=v(),x&&x.c(),G=v(),P&&P.c(),ae=v(),U&&U.c(),pe=v(),N&&N.c(),ve=v(),K=H("h1"),K.innerHTML=$e,te=v(),W=H("p"),W.innerHTML=We,Le=v(),ie=H("p"),ie.innerHTML=ge,se=v(),_e=H("hr"),Se=v(),k(re.$$.fragment),xe=v(),k(V.$$.fragment),oe=v(),k(X.$$.fragment),Pe=v(),k(ne.$$.fragment),Ue=v(),J=H("hr"),le=v(),O=H("h2"),O.innerHTML=Xe,Ne=v(),me=H("p"),me.textContent=ye,de=v(),k(Y.$$.fragment),Be=v(),ke=H("hr"),Qe=v(),Q=H("h2"),Q.innerHTML=we,he=v(),ue=H("p"),ue.innerHTML=Ye,Ve=v(),k(j.$$.fragment),ce=v(),fe=H("hr"),je=v(),Z=H("h2"),Z.innerHTML=Ke,q=v(),be=H("p"),be.innerHTML=fa,aa=v(),k(Oe.$$.fragment),ta=v(),k(ze.$$.fragment),ia=v(),Ze=H("hr"),sa=v(),Ge=H("p"),Ge.innerHTML=pa,this.h()},l(e){qe&&qe.l(e),i=p(e);const r=Qa("svelte-2igo1p",document.head);ea.l(r),s=D(r,"META",{name:!0,content:!0}),t=D(r,"META",{name:!0,content:!0}),Re&&Re.l(r),l=la(),r.forEach(c),d=p(e),F&&F.l(e),o=p(e),I&&I.l(e),u=p(e),A&&A.l(e),w=p(e),L&&L.l(e),a=p(e),T(C.$$.fragment,e),R=p(e),T(M.$$.fragment,e),n=p(e),T(g.$$.fragment,e),Ie=p(e),T(ee.$$.fragment,e),Ae=p(e),S&&S.l(e),z=p(e),x&&x.l(e),G=p(e),P&&P.l(e),ae=p(e),U&&U.l(e),pe=p(e),N&&N.l(e),ve=p(e),K=D(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),Te(K)!=="svelte-2g6hwo"&&(K.innerHTML=$e),te=p(e),W=D(e,"P",{class:!0,"data-svelte-h":!0}),Te(W)!=="svelte-1wz3p0r"&&(W.innerHTML=We),Le=p(e),ie=D(e,"P",{class:!0,"data-svelte-h":!0}),Te(ie)!=="svelte-1n0piq2"&&(ie.innerHTML=ge),se=p(e),_e=D(e,"HR",{class:!0}),Se=p(e),T(re.$$.fragment,e),xe=p(e),T(V.$$.fragment,e),oe=p(e),T(X.$$.fragment,e),Pe=p(e),T(ne.$$.fragment,e),Ue=p(e),J=D(e,"HR",{class:!0}),le=p(e),O=D(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Te(O)!=="svelte-i2bysh"&&(O.innerHTML=Xe),Ne=p(e),me=D(e,"P",{class:!0,"data-svelte-h":!0}),Te(me)!=="svelte-f8a3h"&&(me.textContent=ye),de=p(e),T(Y.$$.fragment,e),Be=p(e),ke=D(e,"HR",{class:!0}),Qe=p(e),Q=D(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Te(Q)!=="svelte-9xndf3"&&(Q.innerHTML=we),he=p(e),ue=D(e,"P",{class:!0,"data-svelte-h":!0}),Te(ue)!=="svelte-nmgf76"&&(ue.innerHTML=Ye),Ve=p(e),T(j.$$.fragment,e),ce=p(e),fe=D(e,"HR",{class:!0}),je=p(e),Z=D(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Te(Z)!=="svelte-1g4uvhy"&&(Z.innerHTML=Ke),q=p(e),be=D(e,"P",{class:!0,"data-svelte-h":!0}),Te(be)!=="svelte-1ikdx4r"&&(be.innerHTML=fa),aa=p(e),T(Oe.$$.fragment,e),ta=p(e),T(ze.$$.fragment,e),ia=p(e),Ze=D(e,"HR",{class:!0}),sa=p(e),Ge=D(e,"P",{class:!0,"data-svelte-h":!0}),Te(Ge)!=="svelte-1r1tj5y"&&(Ge.innerHTML=pa),this.h()},h(){y(s,"name","twitter:card"),y(s,"content","summary_large_image"),y(t,"name","twitter:site"),y(t,"content","@evidence_dev"),y(K,"class","markdown"),y(K,"id","análise-de-precipitação--santa-catarina"),y(W,"class","markdown"),y(ie,"class","markdown"),y(_e,"class","markdown"),y(J,"class","markdown"),y(O,"class","markdown"),y(O,"id","precipitação-acumulada-por-município"),y(me,"class","markdown"),y(ke,"class","markdown"),y(Q,"class","markdown"),y(Q,"id","quando-choveu--intensidade-por-dia"),y(ue,"class","markdown"),y(fe,"class","markdown"),y(Z,"class","markdown"),y(Z,"id","perfil-do-período--distribuição-por-intensidade"),y(be,"class","markdown"),y(Ze,"class","markdown"),y(Ge,"class","markdown")},m(e,r){qe&&qe.m(e,r),_(e,i,r),ea.m(document.head,null),na(document.head,s),na(document.head,t),Re&&Re.m(document.head,null),na(document.head,l),_(e,d,r),F&&F.m(e,r),_(e,o,r),I&&I.m(e,r),_(e,u,r),A&&A.m(e,r),_(e,w,r),L&&L.m(e,r),_(e,a,r),b(C,e,r),_(e,R,r),b(M,e,r),_(e,n,r),b(g,e,r),_(e,Ie,r),b(ee,e,r),_(e,Ae,r),S&&S.m(e,r),_(e,z,r),x&&x.m(e,r),_(e,G,r),P&&P.m(e,r),_(e,ae,r),U&&U.m(e,r),_(e,pe,r),N&&N.m(e,r),_(e,ve,r),_(e,K,r),_(e,te,r),_(e,W,r),_(e,Le,r),_(e,ie,r),_(e,se,r),_(e,_e,r),_(e,Se,r),b(re,e,r),_(e,xe,r),b(V,e,r),_(e,oe,r),b(X,e,r),_(e,Pe,r),b(ne,e,r),_(e,Ue,r),_(e,J,r),_(e,le,r),_(e,O,r),_(e,Ne,r),_(e,me,r),_(e,de,r),b(Y,e,r),_(e,Be,r),_(e,ke,r),_(e,Qe,r),_(e,Q,r),_(e,he,r),_(e,ue,r),_(e,Ve,r),b(j,e,r),_(e,ce,r),_(e,fe,r),_(e,je,r),_(e,Z,r),_(e,q,r),_(e,be,r),_(e,aa,r),b(Oe,e,r),_(e,ta,r),b(ze,e,r),_(e,ia,r),_(e,Ze,r),_(e,sa,r),_(e,Ge,r),ra=!0},p(e,r){var qa;typeof E<"u"&&E.title&&E.hide_title!==!0&&qe.p(e,r),ea.p(e,r),typeof E=="object"&&Re.p(e,r),e[0]?F?(F.p(e,r),r[0]&1&&f(F,1)):(F=Ca(e),F.c(),f(F,1),F.m(o.parentNode,o)):F&&(Me(),$(F,1,1,()=>{F=null}),Ee()),e[1]?I?(I.p(e,r),r[0]&2&&f(I,1)):(I=Fa(e),I.c(),f(I,1),I.m(u.parentNode,u)):I&&(Me(),$(I,1,1,()=>{I=null}),Ee()),e[2]?A?(A.p(e,r),r[0]&4&&f(A,1)):(A=Ia(e),A.c(),f(A,1),A.m(w.parentNode,w)):A&&(Me(),$(A,1,1,()=>{A=null}),Ee()),e[3]?L?(L.p(e,r),r[0]&8&&f(L,1)):(L=Aa(e),L.c(),f(L,1),L.m(a.parentNode,a)):L&&(Me(),$(L,1,1,()=>{L=null}),Ee());const $a={};r[0]&1&&($a.data=e[0]),C.$set($a);const ga={};r[0]&2&&(ga.data=e[1]),M.$set(ga);const ma={};r[0]&4&&(ma.data=e[2]),r[0]&8&&(ma.defaultValue=(qa=e[3][0])==null?void 0:qa.value),g.$set(ma);const ya={};r[2]&16&&(ya.$$scope={dirty:r,ctx:e}),ee.$set(ya),e[4]?S?(S.p(e,r),r[0]&16&&f(S,1)):(S=La(e),S.c(),f(S,1),S.m(z.parentNode,z)):S&&(Me(),$(S,1,1,()=>{S=null}),Ee()),e[5]?x?(x.p(e,r),r[0]&32&&f(x,1)):(x=Sa(e),x.c(),f(x,1),x.m(G.parentNode,G)):x&&(Me(),$(x,1,1,()=>{x=null}),Ee()),e[6]?P?(P.p(e,r),r[0]&64&&f(P,1)):(P=xa(e),P.c(),f(P,1),P.m(ae.parentNode,ae)):P&&(Me(),$(P,1,1,()=>{P=null}),Ee()),e[7]?U?(U.p(e,r),r[0]&128&&f(U,1)):(U=Pa(e),U.c(),f(U,1),U.m(pe.parentNode,pe)):U&&(Me(),$(U,1,1,()=>{U=null}),Ee()),e[8]?N?(N.p(e,r),r[0]&256&&f(N,1)):(N=Ua(e),N.c(),f(N,1),N.m(ve.parentNode,ve)):N&&(Me(),$(N,1,1,()=>{N=null}),Ee());const wa={};r[0]&16&&(wa.data=e[4]),re.$set(wa);const ha={};r[0]&16&&(ha.data=e[4]),V.$set(ha);const ba={};r[0]&16&&(ba.data=e[4]),X.$set(ba);const Ta={};r[0]&16&&(Ta.data=e[4]),ne.$set(Ta);const da={};r[0]&32&&(da.data=e[5]),r[0]&64&&(da.referenceLine=e[6][0].media_sc_mm),Y.$set(da);const ua={};r[0]&128&&(ua.data=e[7]),r[2]&16&&(ua.$$scope={dirty:r,ctx:e}),j.$set(ua);const ka={};r[0]&256&&(ka.data=e[8]),Oe.$set(ka);const ca={};r[0]&256&&(ca.data=e[8]),r[2]&16&&(ca.$$scope={dirty:r,ctx:e}),ze.$set(ca)},i(e){ra||(f(F),f(I),f(A),f(L),f(C.$$.fragment,e),f(M.$$.fragment,e),f(g.$$.fragment,e),f(ee.$$.fragment,e),f(S),f(x),f(P),f(U),f(N),f(re.$$.fragment,e),f(V.$$.fragment,e),f(X.$$.fragment,e),f(ne.$$.fragment,e),f(Y.$$.fragment,e),f(j.$$.fragment,e),f(Oe.$$.fragment,e),f(ze.$$.fragment,e),ra=!0)},o(e){$(F),$(I),$(A),$(L),$(C.$$.fragment,e),$(M.$$.fragment,e),$(g.$$.fragment,e),$(ee.$$.fragment,e),$(S),$(x),$(P),$(U),$(N),$(re.$$.fragment,e),$(V.$$.fragment,e),$(X.$$.fragment,e),$(ne.$$.fragment,e),$(Y.$$.fragment,e),$(j.$$.fragment,e),$(Oe.$$.fragment,e),$(ze.$$.fragment,e),ra=!1},d(e){e&&(c(i),c(d),c(o),c(u),c(w),c(a),c(R),c(n),c(Ie),c(Ae),c(z),c(G),c(ae),c(pe),c(ve),c(K),c(te),c(W),c(Le),c(ie),c(se),c(_e),c(Se),c(xe),c(oe),c(Pe),c(Ue),c(J),c(le),c(O),c(Ne),c(me),c(de),c(Be),c(ke),c(Qe),c(Q),c(he),c(ue),c(Ve),c(ce),c(fe),c(je),c(Z),c(q),c(be),c(aa),c(ta),c(ia),c(Ze),c(sa),c(Ge)),qe&&qe.d(e),ea.d(e),c(s),c(t),Re&&Re.d(e),c(l),F&&F.d(e),I&&I.d(e),A&&A.d(e),L&&L.d(e),h(C,e),h(M,e),h(g,e),h(ee,e),S&&S.d(e),x&&x.d(e),P&&P.d(e),U&&U.d(e),N&&N.d(e),h(re,e),h(V,e),h(X,e),h(ne,e),h(Y,e),h(j,e),h(Oe,e),h(ze,e)}}}const E={title:"Análise de Precipitação"};function vt(m,i,s){let t,l;Ra(m,rt,q=>s(48,t=q)),Ra(m,Da,q=>s(53,l=q));let{data:d}=i,{data:o={},customFormattingSettings:u,__db:w,inputs:a}=d;Va(Da,l="0989d4226bbbc337826602d0bace6dcd",l);let C=Ja(tt(a));ja(C.subscribe(q=>s(11,a=q))),Oa(at,{getCustomFormats:()=>u.customFormats||[]});const R=(q,be)=>it(w.query,q,{query_name:be});Za(R),t.params,za(()=>!0);let M={initialData:void 0,initialError:void 0},n=B`select value, label from (
  select 'Todas' as value, 'Todas as Mesorregiões' as label, 0 as ord
  union all
  select distinct mesoregion as value, mesoregion as label, 1 as ord
  from weather_dw.mart_climate__daily_facts
)
order by ord, label`,g=`select value, label from (
  select 'Todas' as value, 'Todas as Mesorregiões' as label, 0 as ord
  union all
  select distinct mesoregion as value, mesoregion as label, 1 as ord
  from weather_dw.mart_climate__daily_facts
)
order by ord, label`;o.mesorregioes_data&&(o.mesorregioes_data instanceof Error?M.initialError=o.mesorregioes_data:M.initialData=o.mesorregioes_data,o.mesorregioes_columns&&(M.knownColumns=o.mesorregioes_columns));let Ie,ee=!1;const Ae=De.createReactive({callback:q=>{s(0,Ie=q)},execFn:R},{id:"mesorregioes",...M});Ae(g,{noResolve:n,...M}),globalThis[Symbol.for("mesorregioes")]={get value(){return Ie}};let z={initialData:void 0,initialError:void 0},G=B`select value, label from (
  select 'Todas' as value, 'Todos os Municípios' as label, 0 as ord
  union all
  select distinct location_id as value, city_name as label, 1 as ord
  from weather_dw.mart_climate__daily_facts
  where ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
)
order by ord, label`,ae=`select value, label from (
  select 'Todas' as value, 'Todos os Municípios' as label, 0 as ord
  union all
  select distinct location_id as value, city_name as label, 1 as ord
  from weather_dw.mart_climate__daily_facts
  where ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
)
order by ord, label`;o.cidades_disponiveis_data&&(o.cidades_disponiveis_data instanceof Error?z.initialError=o.cidades_disponiveis_data:z.initialData=o.cidades_disponiveis_data,o.cidades_disponiveis_columns&&(z.knownColumns=o.cidades_disponiveis_columns));let pe,ve=!1;const K=De.createReactive({callback:q=>{s(1,pe=q)},execFn:R},{id:"cidades_disponiveis",...z});K(ae,{noResolve:G,...z}),globalThis[Symbol.for("cidades_disponiveis")]={get value(){return pe}};let $e={initialData:void 0,initialError:void 0},te=B`select distinct
  year_month as value,
  year_month as label
from weather_dw.mart_climate__daily_facts
order by year_month desc
limit 24`,W=`select distinct
  year_month as value,
  year_month as label
from weather_dw.mart_climate__daily_facts
order by year_month desc
limit 24`;o.meses_disponiveis_data&&(o.meses_disponiveis_data instanceof Error?$e.initialError=o.meses_disponiveis_data:$e.initialData=o.meses_disponiveis_data,o.meses_disponiveis_columns&&($e.knownColumns=o.meses_disponiveis_columns));let We,Le=!1;const ie=De.createReactive({callback:q=>{s(2,We=q)},execFn:R},{id:"meses_disponiveis",...$e});ie(W,{noResolve:te,...$e}),globalThis[Symbol.for("meses_disponiveis")]={get value(){return We}};let ge={initialData:void 0,initialError:void 0},se=B`select max(year_month) as value
from weather_dw.mart_climate__daily_facts`,_e=`select max(year_month) as value
from weather_dw.mart_climate__daily_facts`;o.mes_mais_recente_data&&(o.mes_mais_recente_data instanceof Error?ge.initialError=o.mes_mais_recente_data:ge.initialData=o.mes_mais_recente_data,o.mes_mais_recente_columns&&(ge.knownColumns=o.mes_mais_recente_columns));let Se,re=!1;const xe=De.createReactive({callback:q=>{s(3,Se=q)},execFn:R},{id:"mes_mais_recente",...ge});xe(_e,{noResolve:se,...ge}),globalThis[Symbol.for("mes_mais_recente")]={get value(){return Se}};let V={initialData:void 0,initialError:void 0},oe=B`select
  round(sum(precipitation_mm), 1)                                           as precip_total_mm,
  round(avg(precip_anomaly_mm), 1)                                          as anomalia_media_mm,
  count(*) filter (where precipitation_mm > 0)                              as dias_com_chuva,
  count(distinct city_name) filter (where precipitation_class = 'extreme')  as municipios_extremo
from weather_dw.mart_climate__daily_facts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${a.cidade.value}')
  and ('${a.classe.value}'  in ('Todas', 'undefined', '') or precipitation_class = '${a.classe.value}')`,X=`select
  round(sum(precipitation_mm), 1)                                           as precip_total_mm,
  round(avg(precip_anomaly_mm), 1)                                          as anomalia_media_mm,
  count(*) filter (where precipitation_mm > 0)                              as dias_com_chuva,
  count(distinct city_name) filter (where precipitation_class = 'extreme')  as municipios_extremo
from weather_dw.mart_climate__daily_facts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${a.cidade.value}')
  and ('${a.classe.value}'  in ('Todas', 'undefined', '') or precipitation_class = '${a.classe.value}')`;o.scorecards_data&&(o.scorecards_data instanceof Error?V.initialError=o.scorecards_data:V.initialData=o.scorecards_data,o.scorecards_columns&&(V.knownColumns=o.scorecards_columns));let Pe,ne=!1;const Ue=De.createReactive({callback:q=>{s(4,Pe=q)},execFn:R},{id:"scorecards",...V});Ue(X,{noResolve:oe,...V}),globalThis[Symbol.for("scorecards")]={get value(){return Pe}};let J={initialData:void 0,initialError:void 0},le=B`select
  city_name,
  round(sum(precipitation_mm), 1)                                as acumulado_mm,
  round(avg(precip_anomaly_mm), 1)                               as anomalia_media_mm,
  count(*) filter (where precipitation_mm > 0)                   as dias_com_chuva,
  count(*) filter (where precipitation_class = 'heavy')          as dias_forte,
  count(*) filter (where precipitation_class = 'extreme')        as dias_extremo
from weather_dw.mart_climate__daily_facts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${a.cidade.value}')
  and ('${a.classe.value}'  in ('Todas', 'undefined', '') or precipitation_class = '${a.classe.value}')
group by city_name
order by acumulado_mm desc`,O=`select
  city_name,
  round(sum(precipitation_mm), 1)                                as acumulado_mm,
  round(avg(precip_anomaly_mm), 1)                               as anomalia_media_mm,
  count(*) filter (where precipitation_mm > 0)                   as dias_com_chuva,
  count(*) filter (where precipitation_class = 'heavy')          as dias_forte,
  count(*) filter (where precipitation_class = 'extreme')        as dias_extremo
from weather_dw.mart_climate__daily_facts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${a.cidade.value}')
  and ('${a.classe.value}'  in ('Todas', 'undefined', '') or precipitation_class = '${a.classe.value}')
group by city_name
order by acumulado_mm desc`;o.precip_por_municipio_data&&(o.precip_por_municipio_data instanceof Error?J.initialError=o.precip_por_municipio_data:J.initialData=o.precip_por_municipio_data,o.precip_por_municipio_columns&&(J.knownColumns=o.precip_por_municipio_columns));let Xe,Ne=!1;const me=De.createReactive({callback:q=>{s(5,Xe=q)},execFn:R},{id:"precip_por_municipio",...J});me(O,{noResolve:le,...J}),globalThis[Symbol.for("precip_por_municipio")]={get value(){return Xe}};let ye={initialData:void 0,initialError:void 0},de=B`select
  round(avg(acumulado_mm), 1) as media_sc_mm
from (
  select
    city_name,
    sum(precipitation_mm) as acumulado_mm
  from weather_dw.mart_climate__daily_facts
  where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
    and ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
    and ('${a.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${a.cidade.value}')
  group by city_name
)`,Y=`select
  round(avg(acumulado_mm), 1) as media_sc_mm
from (
  select
    city_name,
    sum(precipitation_mm) as acumulado_mm
  from weather_dw.mart_climate__daily_facts
  where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
    and ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
    and ('${a.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${a.cidade.value}')
  group by city_name
)`;o.media_estadual_data&&(o.media_estadual_data instanceof Error?ye.initialError=o.media_estadual_data:ye.initialData=o.media_estadual_data,o.media_estadual_columns&&(ye.knownColumns=o.media_estadual_columns));let Be,ke=!1;const Qe=De.createReactive({callback:q=>{s(6,Be=q)},execFn:R},{id:"media_estadual",...ye});Qe(Y,{noResolve:de,...ye}),globalThis[Symbol.for("media_estadual")]={get value(){return Be}};let Q={initialData:void 0,initialError:void 0},we=B`select
  strftime(date, '%d/%m')                                        as dia,
  date,
  count(*) filter (where precipitation_class = 'dry')            as seco,
  count(*) filter (where precipitation_class = 'light')          as leve,
  count(*) filter (where precipitation_class = 'moderate')       as moderado,
  count(*) filter (where precipitation_class = 'heavy')          as forte,
  count(*) filter (where precipitation_class = 'extreme')        as extremo
from weather_dw.mart_climate__daily_facts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${a.cidade.value}')
group by date, dia
order by date`,he=`select
  strftime(date, '%d/%m')                                        as dia,
  date,
  count(*) filter (where precipitation_class = 'dry')            as seco,
  count(*) filter (where precipitation_class = 'light')          as leve,
  count(*) filter (where precipitation_class = 'moderate')       as moderado,
  count(*) filter (where precipitation_class = 'heavy')          as forte,
  count(*) filter (where precipitation_class = 'extreme')        as extremo
from weather_dw.mart_climate__daily_facts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${a.cidade.value}')
group by date, dia
order by date`;o.heatmap_intensidade_data&&(o.heatmap_intensidade_data instanceof Error?Q.initialError=o.heatmap_intensidade_data:Q.initialData=o.heatmap_intensidade_data,o.heatmap_intensidade_columns&&(Q.knownColumns=o.heatmap_intensidade_columns));let ue,Ye=!1;const Ve=De.createReactive({callback:q=>{s(7,ue=q)},execFn:R},{id:"heatmap_intensidade",...Q});Ve(he,{noResolve:we,...Q}),globalThis[Symbol.for("heatmap_intensidade")]={get value(){return ue}};let j={initialData:void 0,initialError:void 0},ce=B`select
  precipitation_class                                                      as classe,
  count(*)                                                                 as registros,
  round(100.0 * count(*) / sum(count(*)) over (), 1)                      as percentual
from weather_dw.mart_climate__daily_facts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${a.cidade.value}')
  and ('${a.classe.value}'  in ('Todas', 'undefined', '') or precipitation_class = '${a.classe.value}')
group by precipitation_class
order by
  case precipitation_class
    when 'dry'      then 1
    when 'light'    then 2
    when 'moderate' then 3
    when 'heavy'    then 4
    when 'extreme'  then 5
  end`,fe=`select
  precipitation_class                                                      as classe,
  count(*)                                                                 as registros,
  round(100.0 * count(*) / sum(count(*)) over (), 1)                      as percentual
from weather_dw.mart_climate__daily_facts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${a.cidade.value}')
  and ('${a.classe.value}'  in ('Todas', 'undefined', '') or precipitation_class = '${a.classe.value}')
group by precipitation_class
order by
  case precipitation_class
    when 'dry'      then 1
    when 'light'    then 2
    when 'moderate' then 3
    when 'heavy'    then 4
    when 'extreme'  then 5
  end`;o.distribuicao_classes_data&&(o.distribuicao_classes_data instanceof Error?j.initialError=o.distribuicao_classes_data:j.initialData=o.distribuicao_classes_data,o.distribuicao_classes_columns&&(j.knownColumns=o.distribuicao_classes_columns));let je,Z=!1;const Ke=De.createReactive({callback:q=>{s(8,je=q)},execFn:R},{id:"distribuicao_classes",...j});return Ke(fe,{noResolve:ce,...j}),globalThis[Symbol.for("distribuicao_classes")]={get value(){return je}},m.$$set=q=>{"data"in q&&s(9,d=q.data)},m.$$.update=()=>{m.$$.dirty[0]&512&&s(10,{data:o={},customFormattingSettings:u,__db:w}=d,o),m.$$.dirty[0]&1024&&et.set(Object.keys(o).length>0),m.$$.dirty[1]&131072&&t.params,m.$$.dirty[0]&61440&&(n||!ee?n||(Ae(g,{noResolve:n,...M}),s(15,ee=!0)):Ae(g,{noResolve:n})),m.$$.dirty[0]&2048&&s(17,G=B`select value, label from (
  select 'Todas' as value, 'Todos os Municípios' as label, 0 as ord
  union all
  select distinct location_id as value, city_name as label, 1 as ord
  from weather_dw.mart_climate__daily_facts
  where ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
)
order by ord, label`),m.$$.dirty[0]&2048&&s(18,ae=`select value, label from (
  select 'Todas' as value, 'Todos os Municípios' as label, 0 as ord
  union all
  select distinct location_id as value, city_name as label, 1 as ord
  from weather_dw.mart_climate__daily_facts
  where ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
)
order by ord, label`),m.$$.dirty[0]&983040&&(G||!ve?G||(K(ae,{noResolve:G,...z}),s(19,ve=!0)):K(ae,{noResolve:G})),m.$$.dirty[0]&15728640&&(te||!Le?te||(ie(W,{noResolve:te,...$e}),s(23,Le=!0)):ie(W,{noResolve:te})),m.$$.dirty[0]&251658240&&(se||!re?se||(xe(_e,{noResolve:se,...ge}),s(27,re=!0)):xe(_e,{noResolve:se})),m.$$.dirty[0]&2048&&s(29,oe=B`select
  round(sum(precipitation_mm), 1)                                           as precip_total_mm,
  round(avg(precip_anomaly_mm), 1)                                          as anomalia_media_mm,
  count(*) filter (where precipitation_mm > 0)                              as dias_com_chuva,
  count(distinct city_name) filter (where precipitation_class = 'extreme')  as municipios_extremo
from weather_dw.mart_climate__daily_facts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${a.cidade.value}')
  and ('${a.classe.value}'  in ('Todas', 'undefined', '') or precipitation_class = '${a.classe.value}')`),m.$$.dirty[0]&2048&&s(30,X=`select
  round(sum(precipitation_mm), 1)                                           as precip_total_mm,
  round(avg(precip_anomaly_mm), 1)                                          as anomalia_media_mm,
  count(*) filter (where precipitation_mm > 0)                              as dias_com_chuva,
  count(distinct city_name) filter (where precipitation_class = 'extreme')  as municipios_extremo
from weather_dw.mart_climate__daily_facts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${a.cidade.value}')
  and ('${a.classe.value}'  in ('Todas', 'undefined', '') or precipitation_class = '${a.classe.value}')`),m.$$.dirty[0]&1879048192|m.$$.dirty[1]&1&&(oe||!ne?oe||(Ue(X,{noResolve:oe,...V}),s(31,ne=!0)):Ue(X,{noResolve:oe})),m.$$.dirty[0]&2048&&s(33,le=B`select
  city_name,
  round(sum(precipitation_mm), 1)                                as acumulado_mm,
  round(avg(precip_anomaly_mm), 1)                               as anomalia_media_mm,
  count(*) filter (where precipitation_mm > 0)                   as dias_com_chuva,
  count(*) filter (where precipitation_class = 'heavy')          as dias_forte,
  count(*) filter (where precipitation_class = 'extreme')        as dias_extremo
from weather_dw.mart_climate__daily_facts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${a.cidade.value}')
  and ('${a.classe.value}'  in ('Todas', 'undefined', '') or precipitation_class = '${a.classe.value}')
group by city_name
order by acumulado_mm desc`),m.$$.dirty[0]&2048&&s(34,O=`select
  city_name,
  round(sum(precipitation_mm), 1)                                as acumulado_mm,
  round(avg(precip_anomaly_mm), 1)                               as anomalia_media_mm,
  count(*) filter (where precipitation_mm > 0)                   as dias_com_chuva,
  count(*) filter (where precipitation_class = 'heavy')          as dias_forte,
  count(*) filter (where precipitation_class = 'extreme')        as dias_extremo
from weather_dw.mart_climate__daily_facts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${a.cidade.value}')
  and ('${a.classe.value}'  in ('Todas', 'undefined', '') or precipitation_class = '${a.classe.value}')
group by city_name
order by acumulado_mm desc`),m.$$.dirty[1]&30&&(le||!Ne?le||(me(O,{noResolve:le,...J}),s(35,Ne=!0)):me(O,{noResolve:le})),m.$$.dirty[0]&2048&&s(37,de=B`select
  round(avg(acumulado_mm), 1) as media_sc_mm
from (
  select
    city_name,
    sum(precipitation_mm) as acumulado_mm
  from weather_dw.mart_climate__daily_facts
  where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
    and ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
    and ('${a.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${a.cidade.value}')
  group by city_name
)`),m.$$.dirty[0]&2048&&s(38,Y=`select
  round(avg(acumulado_mm), 1) as media_sc_mm
from (
  select
    city_name,
    sum(precipitation_mm) as acumulado_mm
  from weather_dw.mart_climate__daily_facts
  where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
    and ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
    and ('${a.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${a.cidade.value}')
  group by city_name
)`),m.$$.dirty[1]&480&&(de||!ke?de||(Qe(Y,{noResolve:de,...ye}),s(39,ke=!0)):Qe(Y,{noResolve:de})),m.$$.dirty[0]&2048&&s(41,we=B`select
  strftime(date, '%d/%m')                                        as dia,
  date,
  count(*) filter (where precipitation_class = 'dry')            as seco,
  count(*) filter (where precipitation_class = 'light')          as leve,
  count(*) filter (where precipitation_class = 'moderate')       as moderado,
  count(*) filter (where precipitation_class = 'heavy')          as forte,
  count(*) filter (where precipitation_class = 'extreme')        as extremo
from weather_dw.mart_climate__daily_facts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${a.cidade.value}')
group by date, dia
order by date`),m.$$.dirty[0]&2048&&s(42,he=`select
  strftime(date, '%d/%m')                                        as dia,
  date,
  count(*) filter (where precipitation_class = 'dry')            as seco,
  count(*) filter (where precipitation_class = 'light')          as leve,
  count(*) filter (where precipitation_class = 'moderate')       as moderado,
  count(*) filter (where precipitation_class = 'heavy')          as forte,
  count(*) filter (where precipitation_class = 'extreme')        as extremo
from weather_dw.mart_climate__daily_facts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${a.cidade.value}')
group by date, dia
order by date`),m.$$.dirty[1]&7680&&(we||!Ye?we||(Ve(he,{noResolve:we,...Q}),s(43,Ye=!0)):Ve(he,{noResolve:we})),m.$$.dirty[0]&2048&&s(45,ce=B`select
  precipitation_class                                                      as classe,
  count(*)                                                                 as registros,
  round(100.0 * count(*) / sum(count(*)) over (), 1)                      as percentual
from weather_dw.mart_climate__daily_facts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${a.cidade.value}')
  and ('${a.classe.value}'  in ('Todas', 'undefined', '') or precipitation_class = '${a.classe.value}')
group by precipitation_class
order by
  case precipitation_class
    when 'dry'      then 1
    when 'light'    then 2
    when 'moderate' then 3
    when 'heavy'    then 4
    when 'extreme'  then 5
  end`),m.$$.dirty[0]&2048&&s(46,fe=`select
  precipitation_class                                                      as classe,
  count(*)                                                                 as registros,
  round(100.0 * count(*) / sum(count(*)) over (), 1)                      as percentual
from weather_dw.mart_climate__daily_facts
where (year_month = '${a.ano_mes.value}' or length('${a.ano_mes.value}') != 7)
  and ('${a.mesoregiao.value}' in ('Todas', 'undefined', '') or mesoregion = '${a.mesoregiao.value}')
  and ('${a.cidade.value}'  in ('Todas', 'undefined', '') or location_id = '${a.cidade.value}')
  and ('${a.classe.value}'  in ('Todas', 'undefined', '') or precipitation_class = '${a.classe.value}')
group by precipitation_class
order by
  case precipitation_class
    when 'dry'      then 1
    when 'light'    then 2
    when 'moderate' then 3
    when 'heavy'    then 4
    when 'extreme'  then 5
  end`),m.$$.dirty[1]&122880&&(ce||!Z?ce||(Ke(fe,{noResolve:ce,...j}),s(47,Z=!0)):Ke(fe,{noResolve:ce}))},s(13,n=B`select value, label from (
  select 'Todas' as value, 'Todas as Mesorregiões' as label, 0 as ord
  union all
  select distinct mesoregion as value, mesoregion as label, 1 as ord
  from weather_dw.mart_climate__daily_facts
)
order by ord, label`),s(14,g=`select value, label from (
  select 'Todas' as value, 'Todas as Mesorregiões' as label, 0 as ord
  union all
  select distinct mesoregion as value, mesoregion as label, 1 as ord
  from weather_dw.mart_climate__daily_facts
)
order by ord, label`),s(21,te=B`select distinct
  year_month as value,
  year_month as label
from weather_dw.mart_climate__daily_facts
order by year_month desc
limit 24`),s(22,W=`select distinct
  year_month as value,
  year_month as label
from weather_dw.mart_climate__daily_facts
order by year_month desc
limit 24`),s(25,se=B`select max(year_month) as value
from weather_dw.mart_climate__daily_facts`),s(26,_e=`select max(year_month) as value
from weather_dw.mart_climate__daily_facts`),[Ie,pe,We,Se,Pe,Xe,Be,ue,je,d,o,a,M,n,g,ee,z,G,ae,ve,$e,te,W,Le,ge,se,_e,re,V,oe,X,ne,J,le,O,Ne,ye,de,Y,ke,Q,we,he,Ye,j,ce,fe,Z,t]}class Mt extends Ya{constructor(i){super(),Ka(this,i,vt,pt,Ba,{data:9},null,[-1,-1,-1])}}export{Mt as component};
