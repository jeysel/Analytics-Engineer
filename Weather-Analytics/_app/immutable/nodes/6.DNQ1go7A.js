import{s as Gt,d as m,i as d,a as W,b as y,c as p,h as Kt,e as k,f as ut,g as Ge,j as v,k as T,l as Ft,m as Xt,o as Yt,n as Jt,p as Zt,v as Xe,r as Ye,t as se,u as oe,q as Ee}from"../chunks/scheduler.BiECNykD.js";import{S as ea,i as ta,d as R,t as $,a as c,c as Le,m as E,b as q,e as C,g as Ne}from"../chunks/index.DMIfMoOS.js";import{D as zt,e as aa,s as ia,Q as We,p as ra,b as Me,a as At,r as xt,C as _a}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BJBNz7OY.js";import{w as la}from"../chunks/entry.Bbs89ys7.js";import{h as ne,p as na}from"../chunks/button.DqjGl4eC.js";import{D as ma,Q as Ke}from"../chunks/getCompletedData.DH_oERSc.js";import{p as sa}from"../chunks/stores.B8_LoWM1.js";import{B as It}from"../chunks/BarChart.DfXFXSyp.js";import{B as tt}from"../chunks/BigValue.BT8vwZVe.js";import{L as St}from"../chunks/LineChart.BvMYc717.js";function oa(l){let a,i=H.title+"",t;return{c(){a=T("h1"),t=oe(i),this.h()},l(n){a=k(n,"H1",{class:!0});var s=Ye(a);t=se(s,i),s.forEach(m),this.h()},h(){y(a,"class","title")},m(n,s){d(n,a,s),W(a,t)},p:Ee,d(n){n&&m(a)}}}function da(l){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:Ee,p:Ee,d:Ee}}function ua(l){let a,i,t,n,s;return document.title=a=H.title,{c(){i=v(),t=T("meta"),n=v(),s=T("meta"),this.h()},l(_){i=p(_),t=k(_,"META",{property:!0,content:!0}),n=p(_),s=k(_,"META",{name:!0,content:!0}),this.h()},h(){var _,o;y(t,"property","og:title"),y(t,"content",((_=H.og)==null?void 0:_.title)??H.title),y(s,"name","twitter:title"),y(s,"content",((o=H.og)==null?void 0:o.title)??H.title)},m(_,o){d(_,i,o),d(_,t,o),d(_,n,o),d(_,s,o)},p(_,o){o&0&&a!==(a=H.title)&&(document.title=a)},d(_){_&&(m(i),m(t),m(n),m(s))}}}function ca(l){var s,_;let a,i,t=(H.description||((s=H.og)==null?void 0:s.description))&&fa(),n=((_=H.og)==null?void 0:_.image)&&pa();return{c(){t&&t.c(),a=v(),n&&n.c(),i=ut()},l(o){t&&t.l(o),a=p(o),n&&n.l(o),i=ut()},m(o,w){t&&t.m(o,w),d(o,a,w),n&&n.m(o,w),d(o,i,w)},p(o,w){var f,S;(H.description||(f=H.og)!=null&&f.description)&&t.p(o,w),(S=H.og)!=null&&S.image&&n.p(o,w)},d(o){o&&(m(a),m(i)),t&&t.d(o),n&&n.d(o)}}}function fa(l){let a,i,t,n,s;return{c(){a=T("meta"),i=v(),t=T("meta"),n=v(),s=T("meta"),this.h()},l(_){a=k(_,"META",{name:!0,content:!0}),i=p(_),t=k(_,"META",{property:!0,content:!0}),n=p(_),s=k(_,"META",{name:!0,content:!0}),this.h()},h(){var _,o,w;y(a,"name","description"),y(a,"content",H.description??((_=H.og)==null?void 0:_.description)),y(t,"property","og:description"),y(t,"content",((o=H.og)==null?void 0:o.description)??H.description),y(s,"name","twitter:description"),y(s,"content",((w=H.og)==null?void 0:w.description)??H.description)},m(_,o){d(_,a,o),d(_,i,o),d(_,t,o),d(_,n,o),d(_,s,o)},p:Ee,d(_){_&&(m(a),m(i),m(t),m(n),m(s))}}}function pa(l){let a,i,t;return{c(){a=T("meta"),i=v(),t=T("meta"),this.h()},l(n){a=k(n,"META",{property:!0,content:!0}),i=p(n),t=k(n,"META",{name:!0,content:!0}),this.h()},h(){var n,s;y(a,"property","og:image"),y(a,"content",At((n=H.og)==null?void 0:n.image)),y(t,"name","twitter:image"),y(t,"content",At((s=H.og)==null?void 0:s.image))},m(n,s){d(n,a,s),d(n,i,s),d(n,t,s)},p:Ee,d(n){n&&(m(a),m(i),m(t))}}}function Lt(l){let a,i;return a=new Ke({props:{queryID:"meses_disponiveis",queryResult:l[0]}}),{c(){C(a.$$.fragment)},l(t){q(a.$$.fragment,t)},m(t,n){E(a,t,n),i=!0},p(t,n){const s={};n[0]&1&&(s.queryResult=t[0]),a.$set(s)},i(t){i||(c(a.$$.fragment,t),i=!0)},o(t){$(a.$$.fragment,t),i=!1},d(t){R(a,t)}}}function Nt(l){let a,i;return a=new Ke({props:{queryID:"mes_mais_recente",queryResult:l[1]}}),{c(){C(a.$$.fragment)},l(t){q(a.$$.fragment,t)},m(t,n){E(a,t,n),i=!0},p(t,n){const s={};n[0]&2&&(s.queryResult=t[1]),a.$set(s)},i(t){i||(c(a.$$.fragment,t),i=!0)},o(t){$(a.$$.fragment,t),i=!1},d(t){R(a,t)}}}function Ut(l){let a,i;return a=new Ke({props:{queryID:"info_cidade",queryResult:l[2]}}),{c(){C(a.$$.fragment)},l(t){q(a.$$.fragment,t)},m(t,n){E(a,t,n),i=!0},p(t,n){const s={};n[0]&4&&(s.queryResult=t[2]),a.$set(s)},i(t){i||(c(a.$$.fragment,t),i=!0)},o(t){$(a.$$.fragment,t),i=!1},d(t){R(a,t)}}}function Pt(l){let a,i;return a=new Ke({props:{queryID:"serie_mensal",queryResult:l[3]}}),{c(){C(a.$$.fragment)},l(t){q(a.$$.fragment,t)},m(t,n){E(a,t,n),i=!0},p(t,n){const s={};n[0]&8&&(s.queryResult=t[3]),a.$set(s)},i(t){i||(c(a.$$.fragment,t),i=!0)},o(t){$(a.$$.fragment,t),i=!1},d(t){R(a,t)}}}function Ot(l){let a,i;return a=new Ke({props:{queryID:"resumo_periodo",queryResult:l[4]}}),{c(){C(a.$$.fragment)},l(t){q(a.$$.fragment,t)},m(t,n){E(a,t,n),i=!0},p(t,n){const s={};n[0]&16&&(s.queryResult=t[4]),a.$set(s)},i(t){i||(c(a.$$.fragment,t),i=!0)},o(t){$(a.$$.fragment,t),i=!1},d(t){R(a,t)}}}function Bt(l){let a,i;return a=new Ke({props:{queryID:"alertas_cidade",queryResult:l[5]}}),{c(){C(a.$$.fragment)},l(t){q(a.$$.fragment,t)},m(t,n){E(a,t,n),i=!0},p(t,n){const s={};n[0]&32&&(s.queryResult=t[5]),a.$set(s)},i(t){i||(c(a.$$.fragment,t),i=!0)},o(t){$(a.$$.fragment,t),i=!1},d(t){R(a,t)}}}function Vt(l){let a,i;return a=new Ke({props:{queryID:"uv_distribuicao",queryResult:l[6]}}),{c(){C(a.$$.fragment)},l(t){q(a.$$.fragment,t)},m(t,n){E(a,t,n),i=!0},p(t,n){const s={};n[0]&64&&(s.queryResult=t[6]),a.$set(s)},i(t){i||(c(a.$$.fragment,t),i=!0)},o(t){$(a.$$.fragment,t),i=!1},d(t){R(a,t)}}}function Qt(l){let a,i;return a=new Ke({props:{queryID:"lista_todas_cidades",queryResult:l[7]}}),{c(){C(a.$$.fragment)},l(t){q(a.$$.fragment,t)},m(t,n){E(a,t,n),i=!0},p(t,n){const s={};n[0]&128&&(s.queryResult=t[7]),a.$set(s)},i(t){i||(c(a.$$.fragment,t),i=!0)},o(t){$(a.$$.fragment,t),i=!1},d(t){R(a,t)}}}function jt(l){let a,i,t=l[2][0].city_name+"",n,s,_,o,w=l[2][0].state_name+"",f,S,M=l[2][0].region+"",h,F,A=l[2][0].country+"",u,D,te,I,L,Y=l[2][0].latitude+"",G,ve,J=l[2][0].longitude+"",de,N,Z=l[2][0].altitude_m+"",K,$e;return{c(){a=T("h1"),i=T("a"),n=oe(t),s=v(),_=T("p"),o=T("strong"),f=oe(w),S=oe(" · "),h=oe(M),F=oe(" · "),u=oe(A),D=v(),te=T("blockquote"),I=T("p"),L=oe("Lat: "),G=oe(Y),ve=oe(" · Lon: "),de=oe(J),N=oe(" · Altitude: "),K=oe(Z),$e=oe(" m"),this.h()},l(b){a=k(b,"H1",{class:!0,id:!0});var x=Ye(a);i=k(x,"A",{href:!0});var ie=Ye(i);n=se(ie,t),ie.forEach(m),x.forEach(m),s=p(b),_=k(b,"P",{class:!0});var X=Ye(_);o=k(X,"STRONG",{class:!0});var ee=Ye(o);f=se(ee,w),ee.forEach(m),S=se(X," · "),h=se(X,M),F=se(X," · "),u=se(X,A),X.forEach(m),D=p(b),te=k(b,"BLOCKQUOTE",{class:!0});var De=Ye(te);I=k(De,"P",{class:!0});var ae=Ye(I);L=se(ae,"Lat: "),G=se(ae,Y),ve=se(ae," · Lon: "),de=se(ae,J),N=se(ae," · Altitude: "),K=se(ae,Z),$e=se(ae," m"),ae.forEach(m),De.forEach(m),this.h()},h(){y(i,"href","#info_cidade0city_name"),y(a,"class","markdown"),y(a,"id","info_cidade0city_name"),y(o,"class","markdown"),y(_,"class","markdown"),y(I,"class","markdown"),y(te,"class","markdown")},m(b,x){d(b,a,x),W(a,i),W(i,n),d(b,s,x),d(b,_,x),W(_,o),W(o,f),W(_,S),W(_,h),W(_,F),W(_,u),d(b,D,x),d(b,te,x),W(te,I),W(I,L),W(I,G),W(I,ve),W(I,de),W(I,N),W(I,K),W(I,$e)},p(b,x){x[0]&4&&t!==(t=b[2][0].city_name+"")&&Xe(n,t),x[0]&4&&w!==(w=b[2][0].state_name+"")&&Xe(f,w),x[0]&4&&M!==(M=b[2][0].region+"")&&Xe(h,M),x[0]&4&&A!==(A=b[2][0].country+"")&&Xe(u,A),x[0]&4&&Y!==(Y=b[2][0].latitude+"")&&Xe(G,Y),x[0]&4&&J!==(J=b[2][0].longitude+"")&&Xe(de,J),x[0]&4&&Z!==(Z=b[2][0].altitude_m+"")&&Xe(K,Z)},d(b){b&&(m(a),m(s),m(_),m(D),m(te))}}}function va(l){let a,i='<p class="markdown">Nenhum alerta climático extremo no período selecionado.</p>';return{c(){a=T("blockquote"),a.innerHTML=i,this.h()},l(t){a=k(t,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),Ge(a)!=="svelte-zambqf"&&(a.innerHTML=i),this.h()},h(){y(a,"class","markdown")},m(t,n){d(t,a,n)},p:Ee,i:Ee,o:Ee,d(t){t&&m(a)}}}function $a(l){let a,i;return a=new zt({props:{data:l[5],rows:"10",$$slots:{default:[ya]},$$scope:{ctx:l}}}),{c(){C(a.$$.fragment)},l(t){q(a.$$.fragment,t)},m(t,n){E(a,t,n),i=!0},p(t,n){const s={};n[0]&32&&(s.data=t[5]),n[1]&536870912&&(s.$$scope={dirty:n,ctx:t}),a.$set(s)},i(t){i||(c(a.$$.fragment,t),i=!0)},o(t){$(a.$$.fragment,t),i=!1},d(t){R(a,t)}}}function ya(l){let a,i,t,n,s,_,o,w,f,S,M,h,F,A;return a=new Me({props:{id:"date",title:"Data",fmt:"dd/MM/yyyy"}}),t=new Me({props:{id:"alert_type",title:"Tipo"}}),s=new Me({props:{id:"severity",title:"Severidade",contentType:"colorscale"}}),o=new Me({props:{id:"temp_max_c",title:"Temp. Máx (°C)",fmt:"0.0"}}),f=new Me({props:{id:"precipitation_mm",title:"Precip. (mm)",fmt:"0.0"}}),M=new Me({props:{id:"wind_speed_max_kmh",title:"Vento (km/h)",fmt:"0.0"}}),F=new Me({props:{id:"uv_index_max",title:"UV Máx",fmt:"0.0"}}),{c(){C(a.$$.fragment),i=v(),C(t.$$.fragment),n=v(),C(s.$$.fragment),_=v(),C(o.$$.fragment),w=v(),C(f.$$.fragment),S=v(),C(M.$$.fragment),h=v(),C(F.$$.fragment)},l(u){q(a.$$.fragment,u),i=p(u),q(t.$$.fragment,u),n=p(u),q(s.$$.fragment,u),_=p(u),q(o.$$.fragment,u),w=p(u),q(f.$$.fragment,u),S=p(u),q(M.$$.fragment,u),h=p(u),q(F.$$.fragment,u)},m(u,D){E(a,u,D),d(u,i,D),E(t,u,D),d(u,n,D),E(s,u,D),d(u,_,D),E(o,u,D),d(u,w,D),E(f,u,D),d(u,S,D),E(M,u,D),d(u,h,D),E(F,u,D),A=!0},p:Ee,i(u){A||(c(a.$$.fragment,u),c(t.$$.fragment,u),c(s.$$.fragment,u),c(o.$$.fragment,u),c(f.$$.fragment,u),c(M.$$.fragment,u),c(F.$$.fragment,u),A=!0)},o(u){$(a.$$.fragment,u),$(t.$$.fragment,u),$(s.$$.fragment,u),$(o.$$.fragment,u),$(f.$$.fragment,u),$(M.$$.fragment,u),$(F.$$.fragment,u),A=!1},d(u){u&&(m(i),m(n),m(_),m(w),m(S),m(h)),R(a,u),R(t,u),R(s,u),R(o,u),R(f,u),R(M,u),R(F,u)}}}function ha(l){let a,i,t,n,s,_;return a=new Me({props:{id:"city_name",title:"Cidade"}}),t=new Me({props:{id:"state_name",title:"UF"}}),s=new Me({props:{id:"region",title:"Região"}}),{c(){C(a.$$.fragment),i=v(),C(t.$$.fragment),n=v(),C(s.$$.fragment)},l(o){q(a.$$.fragment,o),i=p(o),q(t.$$.fragment,o),n=p(o),q(s.$$.fragment,o)},m(o,w){E(a,o,w),d(o,i,w),E(t,o,w),d(o,n,w),E(s,o,w),_=!0},p:Ee,i(o){_||(c(a.$$.fragment,o),c(t.$$.fragment,o),c(s.$$.fragment,o),_=!0)},o(o){$(a.$$.fragment,o),$(t.$$.fragment,o),$(s.$$.fragment,o),_=!1},d(o){o&&(m(i),m(n)),R(a,o),R(t,o),R(s,o)}}}function wa(l){var wt;let a,i,t,n,s,_,o,w,f,S,M,h,F,A,u,D,te,I,L,Y,G,ve,J,de,N,Z,K,$e,b,x,ie,X,ee,De='<a href="#temperatura--série-temporal">Temperatura — Série Temporal</a>',ae,ye,he,ue,qe,ce,Je='<a href="#precipitação-diária">Precipitação Diária</a>',Ue,re,we,Re,Pe,fe,Ze='<a href="#anomalia-de-temperatura">Anomalia de Temperatura</a>',ge,_e,Ce,Fe,Oe,pe,He='<a href="#distribuição-de-risco-uv">Distribuição de Risco UV</a>',be,me,Be,Ae,Ve,g,_t='<a href="#alertas-do-período">Alertas do Período</a>',lt,ke,Te,et,at,nt,xe,vt='<a href="#outras-cidades">Outras Cidades</a>',mt,Qe,st,it,ot,je,$t='<strong class="markdown">Navegação:</strong> <a href="/Analytics-Engineer/Weather-Analytics/" class="markdown">Início</a> · <a href="/Analytics-Engineer/Weather-Analytics/temperatura" class="markdown">Temperatura</a> · <a href="/Analytics-Engineer/Weather-Analytics/precipitacao" class="markdown">Precipitação</a> · <a href="/Analytics-Engineer/Weather-Analytics/alertas" class="markdown">Alertas</a> · <a href="/Analytics-Engineer/Weather-Analytics/horario" class="markdown">Horário</a>',dt,Ie=typeof H<"u"&&H.title&&H.hide_title!==!0&&oa();function Wt(e,r){return typeof H<"u"&&H.title?ua:da}let rt=Wt()(l),Se=typeof H=="object"&&ca(),U=l[0]&&Lt(l),P=l[1]&&Nt(l);w=new ma({props:{name:"ano_mes",data:l[0],value:"value",label:"label",title:"Mês/Ano",defaultValue:(wt=l[1][0])==null?void 0:wt.value}});let O=l[2]&&Ut(l),B=l[3]&&Pt(l),V=l[4]&&Ot(l),Q=l[5]&&Bt(l),j=l[6]&&Vt(l),z=l[7]&&Qt(l),le=l[2].length>0&&jt(l);L=new tt({props:{data:l[4],value:"media_temperatura",title:"Temp. Média",fmt:"0.0°C"}}),G=new tt({props:{data:l[4],value:"recorde_calor",title:"Recorde de Calor",fmt:"0.0°C"}}),J=new tt({props:{data:l[4],value:"recorde_frio",title:"Recorde de Frio",fmt:"0.0°C"}}),N=new tt({props:{data:l[4],value:"chuva_acumulada_mm",title:"Chuva Acumulada",fmt:"0mm"}}),K=new tt({props:{data:l[4],value:"dias_com_chuva",title:"Dias com Chuva"}}),b=new tt({props:{data:l[4],value:"anomalia_media_c",title:"Anomalia Média",fmt:"+0.00;-0.00°C"}}),ye=new St({props:{data:l[3],x:"date",y:["temp_max_c","temp_avg_c","temp_min_c","temp_avg_30d_c"],yAxisTitle:"Temperatura (°C)",xFmt:"dd/MM/yyyy",colorPalette:["#D73027","#FC8D59","#4575B4","#999999"],labels:!0}}),re=new It({props:{data:l[3],x:"date",y:"precipitation_mm",yAxisTitle:"Precipitação (mm)",colorPalette:["#3182BD"],xFmt:"dd/MM/yyyy"}}),_e=new St({props:{data:l[3],x:"date",y:"temp_anomaly_c",yAxisTitle:"Anomalia (°C)",colorPalette:["#E74C3C"],xFmt:"dd/MM/yyyy"}}),me=new It({props:{data:l[6],x:"nivel_uv",y:"dias",yAxisTitle:"Número de dias",title:"Dias por nível de risco UV (OMS)",colorPalette:["#2ECC71","#F1C40F","#E67E22","#E74C3C","#8E44AD"]}});const yt=[$a,va],ze=[];function ht(e,r){return e[5].length>0?0:1}return ke=ht(l),Te=ze[ke]=yt[ke](l),Qe=new zt({props:{data:l[7],rows:"10",search:"true",$$slots:{default:[ha]},$$scope:{ctx:l}}}),{c(){Ie&&Ie.c(),a=v(),rt.c(),i=T("meta"),t=T("meta"),Se&&Se.c(),n=ut(),s=v(),U&&U.c(),_=v(),P&&P.c(),o=v(),C(w.$$.fragment),f=v(),O&&O.c(),S=v(),B&&B.c(),M=v(),V&&V.c(),h=v(),Q&&Q.c(),F=v(),j&&j.c(),A=v(),z&&z.c(),u=v(),le&&le.c(),D=v(),te=T("hr"),I=v(),C(L.$$.fragment),Y=v(),C(G.$$.fragment),ve=v(),C(J.$$.fragment),de=v(),C(N.$$.fragment),Z=v(),C(K.$$.fragment),$e=v(),C(b.$$.fragment),x=v(),ie=T("hr"),X=v(),ee=T("h2"),ee.innerHTML=De,ae=v(),C(ye.$$.fragment),he=v(),ue=T("hr"),qe=v(),ce=T("h2"),ce.innerHTML=Je,Ue=v(),C(re.$$.fragment),we=v(),Re=T("hr"),Pe=v(),fe=T("h2"),fe.innerHTML=Ze,ge=v(),C(_e.$$.fragment),Ce=v(),Fe=T("hr"),Oe=v(),pe=T("h2"),pe.innerHTML=He,be=v(),C(me.$$.fragment),Be=v(),Ae=T("hr"),Ve=v(),g=T("h2"),g.innerHTML=_t,lt=v(),Te.c(),et=v(),at=T("hr"),nt=v(),xe=T("h2"),xe.innerHTML=vt,mt=v(),C(Qe.$$.fragment),st=v(),it=T("hr"),ot=v(),je=T("p"),je.innerHTML=$t,this.h()},l(e){Ie&&Ie.l(e),a=p(e);const r=Kt("svelte-2igo1p",document.head);rt.l(r),i=k(r,"META",{name:!0,content:!0}),t=k(r,"META",{name:!0,content:!0}),Se&&Se.l(r),n=ut(),r.forEach(m),s=p(e),U&&U.l(e),_=p(e),P&&P.l(e),o=p(e),q(w.$$.fragment,e),f=p(e),O&&O.l(e),S=p(e),B&&B.l(e),M=p(e),V&&V.l(e),h=p(e),Q&&Q.l(e),F=p(e),j&&j.l(e),A=p(e),z&&z.l(e),u=p(e),le&&le.l(e),D=p(e),te=k(e,"HR",{class:!0}),I=p(e),q(L.$$.fragment,e),Y=p(e),q(G.$$.fragment,e),ve=p(e),q(J.$$.fragment,e),de=p(e),q(N.$$.fragment,e),Z=p(e),q(K.$$.fragment,e),$e=p(e),q(b.$$.fragment,e),x=p(e),ie=k(e,"HR",{class:!0}),X=p(e),ee=k(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ge(ee)!=="svelte-1jqaeqm"&&(ee.innerHTML=De),ae=p(e),q(ye.$$.fragment,e),he=p(e),ue=k(e,"HR",{class:!0}),qe=p(e),ce=k(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ge(ce)!=="svelte-xg83cw"&&(ce.innerHTML=Je),Ue=p(e),q(re.$$.fragment,e),we=p(e),Re=k(e,"HR",{class:!0}),Pe=p(e),fe=k(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ge(fe)!=="svelte-v4a29r"&&(fe.innerHTML=Ze),ge=p(e),q(_e.$$.fragment,e),Ce=p(e),Fe=k(e,"HR",{class:!0}),Oe=p(e),pe=k(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ge(pe)!=="svelte-110kbfs"&&(pe.innerHTML=He),be=p(e),q(me.$$.fragment,e),Be=p(e),Ae=k(e,"HR",{class:!0}),Ve=p(e),g=k(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ge(g)!=="svelte-2h7j9f"&&(g.innerHTML=_t),lt=p(e),Te.l(e),et=p(e),at=k(e,"HR",{class:!0}),nt=p(e),xe=k(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ge(xe)!=="svelte-4r1zhl"&&(xe.innerHTML=vt),mt=p(e),q(Qe.$$.fragment,e),st=p(e),it=k(e,"HR",{class:!0}),ot=p(e),je=k(e,"P",{class:!0,"data-svelte-h":!0}),Ge(je)!=="svelte-31aigm"&&(je.innerHTML=$t),this.h()},h(){y(i,"name","twitter:card"),y(i,"content","summary_large_image"),y(t,"name","twitter:site"),y(t,"content","@evidence_dev"),y(te,"class","markdown"),y(ie,"class","markdown"),y(ee,"class","markdown"),y(ee,"id","temperatura--série-temporal"),y(ue,"class","markdown"),y(ce,"class","markdown"),y(ce,"id","precipitação-diária"),y(Re,"class","markdown"),y(fe,"class","markdown"),y(fe,"id","anomalia-de-temperatura"),y(Fe,"class","markdown"),y(pe,"class","markdown"),y(pe,"id","distribuição-de-risco-uv"),y(Ae,"class","markdown"),y(g,"class","markdown"),y(g,"id","alertas-do-período"),y(at,"class","markdown"),y(xe,"class","markdown"),y(xe,"id","outras-cidades"),y(it,"class","markdown"),y(je,"class","markdown")},m(e,r){Ie&&Ie.m(e,r),d(e,a,r),rt.m(document.head,null),W(document.head,i),W(document.head,t),Se&&Se.m(document.head,null),W(document.head,n),d(e,s,r),U&&U.m(e,r),d(e,_,r),P&&P.m(e,r),d(e,o,r),E(w,e,r),d(e,f,r),O&&O.m(e,r),d(e,S,r),B&&B.m(e,r),d(e,M,r),V&&V.m(e,r),d(e,h,r),Q&&Q.m(e,r),d(e,F,r),j&&j.m(e,r),d(e,A,r),z&&z.m(e,r),d(e,u,r),le&&le.m(e,r),d(e,D,r),d(e,te,r),d(e,I,r),E(L,e,r),d(e,Y,r),E(G,e,r),d(e,ve,r),E(J,e,r),d(e,de,r),E(N,e,r),d(e,Z,r),E(K,e,r),d(e,$e,r),E(b,e,r),d(e,x,r),d(e,ie,r),d(e,X,r),d(e,ee,r),d(e,ae,r),E(ye,e,r),d(e,he,r),d(e,ue,r),d(e,qe,r),d(e,ce,r),d(e,Ue,r),E(re,e,r),d(e,we,r),d(e,Re,r),d(e,Pe,r),d(e,fe,r),d(e,ge,r),E(_e,e,r),d(e,Ce,r),d(e,Fe,r),d(e,Oe,r),d(e,pe,r),d(e,be,r),E(me,e,r),d(e,Be,r),d(e,Ae,r),d(e,Ve,r),d(e,g,r),d(e,lt,r),ze[ke].m(e,r),d(e,et,r),d(e,at,r),d(e,nt,r),d(e,xe,r),d(e,mt,r),E(Qe,e,r),d(e,st,r),d(e,it,r),d(e,ot,r),d(e,je,r),dt=!0},p(e,r){var Dt;typeof H<"u"&&H.title&&H.hide_title!==!0&&Ie.p(e,r),rt.p(e,r),typeof H=="object"&&Se.p(e,r),e[0]?U?(U.p(e,r),r[0]&1&&c(U,1)):(U=Lt(e),U.c(),c(U,1),U.m(_.parentNode,_)):U&&(Ne(),$(U,1,1,()=>{U=null}),Le()),e[1]?P?(P.p(e,r),r[0]&2&&c(P,1)):(P=Nt(e),P.c(),c(P,1),P.m(o.parentNode,o)):P&&(Ne(),$(P,1,1,()=>{P=null}),Le());const ct={};r[0]&1&&(ct.data=e[0]),r[0]&2&&(ct.defaultValue=(Dt=e[1][0])==null?void 0:Dt.value),w.$set(ct),e[2]?O?(O.p(e,r),r[0]&4&&c(O,1)):(O=Ut(e),O.c(),c(O,1),O.m(S.parentNode,S)):O&&(Ne(),$(O,1,1,()=>{O=null}),Le()),e[3]?B?(B.p(e,r),r[0]&8&&c(B,1)):(B=Pt(e),B.c(),c(B,1),B.m(M.parentNode,M)):B&&(Ne(),$(B,1,1,()=>{B=null}),Le()),e[4]?V?(V.p(e,r),r[0]&16&&c(V,1)):(V=Ot(e),V.c(),c(V,1),V.m(h.parentNode,h)):V&&(Ne(),$(V,1,1,()=>{V=null}),Le()),e[5]?Q?(Q.p(e,r),r[0]&32&&c(Q,1)):(Q=Bt(e),Q.c(),c(Q,1),Q.m(F.parentNode,F)):Q&&(Ne(),$(Q,1,1,()=>{Q=null}),Le()),e[6]?j?(j.p(e,r),r[0]&64&&c(j,1)):(j=Vt(e),j.c(),c(j,1),j.m(A.parentNode,A)):j&&(Ne(),$(j,1,1,()=>{j=null}),Le()),e[7]?z?(z.p(e,r),r[0]&128&&c(z,1)):(z=Qt(e),z.c(),c(z,1),z.m(u.parentNode,u)):z&&(Ne(),$(z,1,1,()=>{z=null}),Le()),e[2].length>0?le?le.p(e,r):(le=jt(e),le.c(),le.m(D.parentNode,D)):le&&(le.d(1),le=null);const gt={};r[0]&16&&(gt.data=e[4]),L.$set(gt);const bt={};r[0]&16&&(bt.data=e[4]),G.$set(bt);const kt={};r[0]&16&&(kt.data=e[4]),J.$set(kt);const Tt={};r[0]&16&&(Tt.data=e[4]),N.$set(Tt);const Rt={};r[0]&16&&(Rt.data=e[4]),K.$set(Rt);const Et={};r[0]&16&&(Et.data=e[4]),b.$set(Et);const qt={};r[0]&8&&(qt.data=e[3]),ye.$set(qt);const Ct={};r[0]&8&&(Ct.data=e[3]),re.$set(Ct);const Ht={};r[0]&8&&(Ht.data=e[3]),_e.$set(Ht);const Mt={};r[0]&64&&(Mt.data=e[6]),me.$set(Mt);let ft=ke;ke=ht(e),ke===ft?ze[ke].p(e,r):(Ne(),$(ze[ft],1,1,()=>{ze[ft]=null}),Le(),Te=ze[ke],Te?Te.p(e,r):(Te=ze[ke]=yt[ke](e),Te.c()),c(Te,1),Te.m(et.parentNode,et));const pt={};r[0]&128&&(pt.data=e[7]),r[1]&536870912&&(pt.$$scope={dirty:r,ctx:e}),Qe.$set(pt)},i(e){dt||(c(U),c(P),c(w.$$.fragment,e),c(O),c(B),c(V),c(Q),c(j),c(z),c(L.$$.fragment,e),c(G.$$.fragment,e),c(J.$$.fragment,e),c(N.$$.fragment,e),c(K.$$.fragment,e),c(b.$$.fragment,e),c(ye.$$.fragment,e),c(re.$$.fragment,e),c(_e.$$.fragment,e),c(me.$$.fragment,e),c(Te),c(Qe.$$.fragment,e),dt=!0)},o(e){$(U),$(P),$(w.$$.fragment,e),$(O),$(B),$(V),$(Q),$(j),$(z),$(L.$$.fragment,e),$(G.$$.fragment,e),$(J.$$.fragment,e),$(N.$$.fragment,e),$(K.$$.fragment,e),$(b.$$.fragment,e),$(ye.$$.fragment,e),$(re.$$.fragment,e),$(_e.$$.fragment,e),$(me.$$.fragment,e),$(Te),$(Qe.$$.fragment,e),dt=!1},d(e){e&&(m(a),m(s),m(_),m(o),m(f),m(S),m(M),m(h),m(F),m(A),m(u),m(D),m(te),m(I),m(Y),m(ve),m(de),m(Z),m($e),m(x),m(ie),m(X),m(ee),m(ae),m(he),m(ue),m(qe),m(ce),m(Ue),m(we),m(Re),m(Pe),m(fe),m(ge),m(Ce),m(Fe),m(Oe),m(pe),m(be),m(Be),m(Ae),m(Ve),m(g),m(lt),m(et),m(at),m(nt),m(xe),m(mt),m(st),m(it),m(ot),m(je)),Ie&&Ie.d(e),rt.d(e),m(i),m(t),Se&&Se.d(e),m(n),U&&U.d(e),P&&P.d(e),R(w,e),O&&O.d(e),B&&B.d(e),V&&V.d(e),Q&&Q.d(e),j&&j.d(e),z&&z.d(e),le&&le.d(e),R(L,e),R(G,e),R(J,e),R(N,e),R(K,e),R(b,e),R(ye,e),R(re,e),R(_e,e),R(me,e),ze[ke].d(e),R(Qe,e)}}}const H={title:"Detalhes por Cidade"};function ga(l,a,i){let t,n;Ft(l,sa,g=>i(44,t=g)),Ft(l,xt,g=>i(48,n=g));let{data:s}=a,{data:_={},customFormattingSettings:o,__db:w,inputs:f}=s;Xt(xt,n="c3084fbb9712879ff79a0678595f96d7",n);let S=aa(la(f));Yt(S.subscribe(g=>i(10,f=g))),Jt(_a,{getCustomFormats:()=>o.customFormats||[]});const M=(g,_t)=>na(w.query,g,{query_name:_t});ia(M);let h=t.params;Zt(()=>!0);let F={initialData:void 0,initialError:void 0},A=ne`select distinct
  year_month as value,
  year_month as label
from weather_dw.mart_climate__daily_facts
where location_id = '${h.cidade}'
order by year_month desc
limit 60`,u=`select distinct
  year_month as value,
  year_month as label
from weather_dw.mart_climate__daily_facts
where location_id = '${h.cidade}'
order by year_month desc
limit 60`;_.meses_disponiveis_data&&(_.meses_disponiveis_data instanceof Error?F.initialError=_.meses_disponiveis_data:F.initialData=_.meses_disponiveis_data,_.meses_disponiveis_columns&&(F.knownColumns=_.meses_disponiveis_columns));let D,te=!1;const I=We.createReactive({callback:g=>{i(0,D=g)},execFn:M},{id:"meses_disponiveis",...F});I(u,{noResolve:A,...F}),globalThis[Symbol.for("meses_disponiveis")]={get value(){return D}};let L={initialData:void 0,initialError:void 0},Y=ne`select max(year_month) as value
from weather_dw.mart_climate__daily_facts
where location_id = '${h.cidade}'`,G=`select max(year_month) as value
from weather_dw.mart_climate__daily_facts
where location_id = '${h.cidade}'`;_.mes_mais_recente_data&&(_.mes_mais_recente_data instanceof Error?L.initialError=_.mes_mais_recente_data:L.initialData=_.mes_mais_recente_data,_.mes_mais_recente_columns&&(L.knownColumns=_.mes_mais_recente_columns));let ve,J=!1;const de=We.createReactive({callback:g=>{i(1,ve=g)},execFn:M},{id:"mes_mais_recente",...L});de(G,{noResolve:Y,...L}),globalThis[Symbol.for("mes_mais_recente")]={get value(){return ve}};let N={initialData:void 0,initialError:void 0},Z=ne`select distinct
  city_name,
  state_name,
  country,
  region,
  latitude,
  longitude,
  altitude_m
from weather_dw.mart_climate__daily_facts
where location_id = '${h.cidade}'
limit 1`,K=`select distinct
  city_name,
  state_name,
  country,
  region,
  latitude,
  longitude,
  altitude_m
from weather_dw.mart_climate__daily_facts
where location_id = '${h.cidade}'
limit 1`;_.info_cidade_data&&(_.info_cidade_data instanceof Error?N.initialError=_.info_cidade_data:N.initialData=_.info_cidade_data,_.info_cidade_columns&&(N.knownColumns=_.info_cidade_columns));let $e,b=!1;const x=We.createReactive({callback:g=>{i(2,$e=g)},execFn:M},{id:"info_cidade",...N});x(K,{noResolve:Z,...N}),globalThis[Symbol.for("info_cidade")]={get value(){return $e}};let ie={initialData:void 0,initialError:void 0},X=ne`select
  date,
  temp_max_c,
  temp_avg_c,
  temp_min_c,
  temp_avg_30d_c,
  temp_anomaly_c,
  temp_amplitude_c,
  precipitation_mm,
  precip_avg_30d_mm,
  precipitation_class,
  wind_speed_max_kmh,
  uv_index_max,
  uv_risk_level,
  daylight_hours,
  is_weekend
from weather_dw.mart_climate__daily_facts
where location_id = '${h.cidade}'
  and (year_month = '${f.ano_mes.value}' or '${f.ano_mes.value}' in ('undefined', ''))
order by date`,ee=`select
  date,
  temp_max_c,
  temp_avg_c,
  temp_min_c,
  temp_avg_30d_c,
  temp_anomaly_c,
  temp_amplitude_c,
  precipitation_mm,
  precip_avg_30d_mm,
  precipitation_class,
  wind_speed_max_kmh,
  uv_index_max,
  uv_risk_level,
  daylight_hours,
  is_weekend
from weather_dw.mart_climate__daily_facts
where location_id = '${h.cidade}'
  and (year_month = '${f.ano_mes.value}' or '${f.ano_mes.value}' in ('undefined', ''))
order by date`;_.serie_mensal_data&&(_.serie_mensal_data instanceof Error?ie.initialError=_.serie_mensal_data:ie.initialData=_.serie_mensal_data,_.serie_mensal_columns&&(ie.knownColumns=_.serie_mensal_columns));let De,ae=!1;const ye=We.createReactive({callback:g=>{i(3,De=g)},execFn:M},{id:"serie_mensal",...ie});ye(ee,{noResolve:X,...ie}),globalThis[Symbol.for("serie_mensal")]={get value(){return De}};let he={initialData:void 0,initialError:void 0},ue=ne`select
  round(avg(temp_max_c), 1)         as media_maxima,
  round(avg(temp_min_c), 1)         as media_minima,
  round(avg(temp_avg_c), 1)         as media_temperatura,
  round(max(temp_max_c), 1)         as recorde_calor,
  round(min(temp_min_c), 1)         as recorde_frio,
  round(sum(precipitation_mm), 0)   as chuva_acumulada_mm,
  count(*) filter (where precipitation_mm > 0) as dias_com_chuva,
  round(avg(daylight_hours), 1)     as horas_luz_media,
  round(avg(temp_anomaly_c), 2)     as anomalia_media_c
from weather_dw.mart_climate__daily_facts
where location_id = '${h.cidade}'
  and (year_month = '${f.ano_mes.value}' or '${f.ano_mes.value}' in ('undefined', ''))`,qe=`select
  round(avg(temp_max_c), 1)         as media_maxima,
  round(avg(temp_min_c), 1)         as media_minima,
  round(avg(temp_avg_c), 1)         as media_temperatura,
  round(max(temp_max_c), 1)         as recorde_calor,
  round(min(temp_min_c), 1)         as recorde_frio,
  round(sum(precipitation_mm), 0)   as chuva_acumulada_mm,
  count(*) filter (where precipitation_mm > 0) as dias_com_chuva,
  round(avg(daylight_hours), 1)     as horas_luz_media,
  round(avg(temp_anomaly_c), 2)     as anomalia_media_c
from weather_dw.mart_climate__daily_facts
where location_id = '${h.cidade}'
  and (year_month = '${f.ano_mes.value}' or '${f.ano_mes.value}' in ('undefined', ''))`;_.resumo_periodo_data&&(_.resumo_periodo_data instanceof Error?he.initialError=_.resumo_periodo_data:he.initialData=_.resumo_periodo_data,_.resumo_periodo_columns&&(he.knownColumns=_.resumo_periodo_columns));let ce,Je=!1;const Ue=We.createReactive({callback:g=>{i(4,ce=g)},execFn:M},{id:"resumo_periodo",...he});Ue(qe,{noResolve:ue,...he}),globalThis[Symbol.for("resumo_periodo")]={get value(){return ce}};let re={initialData:void 0,initialError:void 0},we=ne`select
  date,
  alert_type,
  severity,
  temp_max_c,
  temp_min_c,
  temp_anomaly_c,
  precipitation_mm,
  wind_speed_max_kmh,
  uv_index_max
from weather_dw.mart_climate__alerts
where location_id = '${h.cidade}'
  and (year_month = '${f.ano_mes.value}' or '${f.ano_mes.value}' in ('undefined', ''))
  and alert_type != '__no_alerts__'
order by date desc`,Re=`select
  date,
  alert_type,
  severity,
  temp_max_c,
  temp_min_c,
  temp_anomaly_c,
  precipitation_mm,
  wind_speed_max_kmh,
  uv_index_max
from weather_dw.mart_climate__alerts
where location_id = '${h.cidade}'
  and (year_month = '${f.ano_mes.value}' or '${f.ano_mes.value}' in ('undefined', ''))
  and alert_type != '__no_alerts__'
order by date desc`;_.alertas_cidade_data&&(_.alertas_cidade_data instanceof Error?re.initialError=_.alertas_cidade_data:re.initialData=_.alertas_cidade_data,_.alertas_cidade_columns&&(re.knownColumns=_.alertas_cidade_columns));let Pe,fe=!1;const Ze=We.createReactive({callback:g=>{i(5,Pe=g)},execFn:M},{id:"alertas_cidade",...re});Ze(Re,{noResolve:we,...re}),globalThis[Symbol.for("alertas_cidade")]={get value(){return Pe}};let ge={initialData:void 0,initialError:void 0},_e=ne`select
  uv_risk_level                        as nivel_uv,
  count(*)                             as dias,
  round(avg(uv_index_max), 1)         as uv_medio
from weather_dw.mart_climate__daily_facts
where location_id = '${h.cidade}'
  and (year_month = '${f.ano_mes.value}' or '${f.ano_mes.value}' in ('undefined', ''))
group by uv_risk_level
order by
  case uv_risk_level
    when 'low'       then 1
    when 'moderate'  then 2
    when 'high'      then 3
    when 'very_high' then 4
    when 'extreme'   then 5
  end`,Ce=`select
  uv_risk_level                        as nivel_uv,
  count(*)                             as dias,
  round(avg(uv_index_max), 1)         as uv_medio
from weather_dw.mart_climate__daily_facts
where location_id = '${h.cidade}'
  and (year_month = '${f.ano_mes.value}' or '${f.ano_mes.value}' in ('undefined', ''))
group by uv_risk_level
order by
  case uv_risk_level
    when 'low'       then 1
    when 'moderate'  then 2
    when 'high'      then 3
    when 'very_high' then 4
    when 'extreme'   then 5
  end`;_.uv_distribuicao_data&&(_.uv_distribuicao_data instanceof Error?ge.initialError=_.uv_distribuicao_data:ge.initialData=_.uv_distribuicao_data,_.uv_distribuicao_columns&&(ge.knownColumns=_.uv_distribuicao_columns));let Fe,Oe=!1;const pe=We.createReactive({callback:g=>{i(6,Fe=g)},execFn:M},{id:"uv_distribuicao",...ge});pe(Ce,{noResolve:_e,...ge}),globalThis[Symbol.for("uv_distribuicao")]={get value(){return Fe}};let He={initialData:void 0,initialError:void 0},be=ne`select
  location_id as cidade,
  city_name,
  state_name,
  region
from weather_dw.mart_climate__daily_facts
group by location_id, city_name, state_name, region
order by region, city_name`,me=`select
  location_id as cidade,
  city_name,
  state_name,
  region
from weather_dw.mart_climate__daily_facts
group by location_id, city_name, state_name, region
order by region, city_name`;_.lista_todas_cidades_data&&(_.lista_todas_cidades_data instanceof Error?He.initialError=_.lista_todas_cidades_data:He.initialData=_.lista_todas_cidades_data,_.lista_todas_cidades_columns&&(He.knownColumns=_.lista_todas_cidades_columns));let Be,Ae=!1;const Ve=We.createReactive({callback:g=>{i(7,Be=g)},execFn:M},{id:"lista_todas_cidades",...He});return Ve(me,{noResolve:be,...He}),globalThis[Symbol.for("lista_todas_cidades")]={get value(){return Be}},l.$$set=g=>{"data"in g&&i(8,s=g.data)},l.$$.update=()=>{l.$$.dirty[0]&256&&i(9,{data:_={},customFormattingSettings:o,__db:w}=s,_),l.$$.dirty[0]&512&&ra.set(Object.keys(_).length>0),l.$$.dirty[1]&8192&&i(11,h=t.params),l.$$.dirty[0]&2048&&i(13,A=ne`select distinct
  year_month as value,
  year_month as label
from weather_dw.mart_climate__daily_facts
where location_id = '${h.cidade}'
order by year_month desc
limit 60`),l.$$.dirty[0]&2048&&i(14,u=`select distinct
  year_month as value,
  year_month as label
from weather_dw.mart_climate__daily_facts
where location_id = '${h.cidade}'
order by year_month desc
limit 60`),l.$$.dirty[0]&61440&&(A||!te?A||(I(u,{noResolve:A,...F}),i(15,te=!0)):I(u,{noResolve:A})),l.$$.dirty[0]&2048&&i(17,Y=ne`select max(year_month) as value
from weather_dw.mart_climate__daily_facts
where location_id = '${h.cidade}'`),l.$$.dirty[0]&2048&&i(18,G=`select max(year_month) as value
from weather_dw.mart_climate__daily_facts
where location_id = '${h.cidade}'`),l.$$.dirty[0]&983040&&(Y||!J?Y||(de(G,{noResolve:Y,...L}),i(19,J=!0)):de(G,{noResolve:Y})),l.$$.dirty[0]&2048&&i(21,Z=ne`select distinct
  city_name,
  state_name,
  country,
  region,
  latitude,
  longitude,
  altitude_m
from weather_dw.mart_climate__daily_facts
where location_id = '${h.cidade}'
limit 1`),l.$$.dirty[0]&2048&&i(22,K=`select distinct
  city_name,
  state_name,
  country,
  region,
  latitude,
  longitude,
  altitude_m
from weather_dw.mart_climate__daily_facts
where location_id = '${h.cidade}'
limit 1`),l.$$.dirty[0]&15728640&&(Z||!b?Z||(x(K,{noResolve:Z,...N}),i(23,b=!0)):x(K,{noResolve:Z})),l.$$.dirty[0]&3072&&i(25,X=ne`select
  date,
  temp_max_c,
  temp_avg_c,
  temp_min_c,
  temp_avg_30d_c,
  temp_anomaly_c,
  temp_amplitude_c,
  precipitation_mm,
  precip_avg_30d_mm,
  precipitation_class,
  wind_speed_max_kmh,
  uv_index_max,
  uv_risk_level,
  daylight_hours,
  is_weekend
from weather_dw.mart_climate__daily_facts
where location_id = '${h.cidade}'
  and (year_month = '${f.ano_mes.value}' or '${f.ano_mes.value}' in ('undefined', ''))
order by date`),l.$$.dirty[0]&3072&&i(26,ee=`select
  date,
  temp_max_c,
  temp_avg_c,
  temp_min_c,
  temp_avg_30d_c,
  temp_anomaly_c,
  temp_amplitude_c,
  precipitation_mm,
  precip_avg_30d_mm,
  precipitation_class,
  wind_speed_max_kmh,
  uv_index_max,
  uv_risk_level,
  daylight_hours,
  is_weekend
from weather_dw.mart_climate__daily_facts
where location_id = '${h.cidade}'
  and (year_month = '${f.ano_mes.value}' or '${f.ano_mes.value}' in ('undefined', ''))
order by date`),l.$$.dirty[0]&251658240&&(X||!ae?X||(ye(ee,{noResolve:X,...ie}),i(27,ae=!0)):ye(ee,{noResolve:X})),l.$$.dirty[0]&3072&&i(29,ue=ne`select
  round(avg(temp_max_c), 1)         as media_maxima,
  round(avg(temp_min_c), 1)         as media_minima,
  round(avg(temp_avg_c), 1)         as media_temperatura,
  round(max(temp_max_c), 1)         as recorde_calor,
  round(min(temp_min_c), 1)         as recorde_frio,
  round(sum(precipitation_mm), 0)   as chuva_acumulada_mm,
  count(*) filter (where precipitation_mm > 0) as dias_com_chuva,
  round(avg(daylight_hours), 1)     as horas_luz_media,
  round(avg(temp_anomaly_c), 2)     as anomalia_media_c
from weather_dw.mart_climate__daily_facts
where location_id = '${h.cidade}'
  and (year_month = '${f.ano_mes.value}' or '${f.ano_mes.value}' in ('undefined', ''))`),l.$$.dirty[0]&3072&&i(30,qe=`select
  round(avg(temp_max_c), 1)         as media_maxima,
  round(avg(temp_min_c), 1)         as media_minima,
  round(avg(temp_avg_c), 1)         as media_temperatura,
  round(max(temp_max_c), 1)         as recorde_calor,
  round(min(temp_min_c), 1)         as recorde_frio,
  round(sum(precipitation_mm), 0)   as chuva_acumulada_mm,
  count(*) filter (where precipitation_mm > 0) as dias_com_chuva,
  round(avg(daylight_hours), 1)     as horas_luz_media,
  round(avg(temp_anomaly_c), 2)     as anomalia_media_c
from weather_dw.mart_climate__daily_facts
where location_id = '${h.cidade}'
  and (year_month = '${f.ano_mes.value}' or '${f.ano_mes.value}' in ('undefined', ''))`),l.$$.dirty[0]&1879048192|l.$$.dirty[1]&1&&(ue||!Je?ue||(Ue(qe,{noResolve:ue,...he}),i(31,Je=!0)):Ue(qe,{noResolve:ue})),l.$$.dirty[0]&3072&&i(33,we=ne`select
  date,
  alert_type,
  severity,
  temp_max_c,
  temp_min_c,
  temp_anomaly_c,
  precipitation_mm,
  wind_speed_max_kmh,
  uv_index_max
from weather_dw.mart_climate__alerts
where location_id = '${h.cidade}'
  and (year_month = '${f.ano_mes.value}' or '${f.ano_mes.value}' in ('undefined', ''))
  and alert_type != '__no_alerts__'
order by date desc`),l.$$.dirty[0]&3072&&i(34,Re=`select
  date,
  alert_type,
  severity,
  temp_max_c,
  temp_min_c,
  temp_anomaly_c,
  precipitation_mm,
  wind_speed_max_kmh,
  uv_index_max
from weather_dw.mart_climate__alerts
where location_id = '${h.cidade}'
  and (year_month = '${f.ano_mes.value}' or '${f.ano_mes.value}' in ('undefined', ''))
  and alert_type != '__no_alerts__'
order by date desc`),l.$$.dirty[1]&30&&(we||!fe?we||(Ze(Re,{noResolve:we,...re}),i(35,fe=!0)):Ze(Re,{noResolve:we})),l.$$.dirty[0]&3072&&i(37,_e=ne`select
  uv_risk_level                        as nivel_uv,
  count(*)                             as dias,
  round(avg(uv_index_max), 1)         as uv_medio
from weather_dw.mart_climate__daily_facts
where location_id = '${h.cidade}'
  and (year_month = '${f.ano_mes.value}' or '${f.ano_mes.value}' in ('undefined', ''))
group by uv_risk_level
order by
  case uv_risk_level
    when 'low'       then 1
    when 'moderate'  then 2
    when 'high'      then 3
    when 'very_high' then 4
    when 'extreme'   then 5
  end`),l.$$.dirty[0]&3072&&i(38,Ce=`select
  uv_risk_level                        as nivel_uv,
  count(*)                             as dias,
  round(avg(uv_index_max), 1)         as uv_medio
from weather_dw.mart_climate__daily_facts
where location_id = '${h.cidade}'
  and (year_month = '${f.ano_mes.value}' or '${f.ano_mes.value}' in ('undefined', ''))
group by uv_risk_level
order by
  case uv_risk_level
    when 'low'       then 1
    when 'moderate'  then 2
    when 'high'      then 3
    when 'very_high' then 4
    when 'extreme'   then 5
  end`),l.$$.dirty[1]&480&&(_e||!Oe?_e||(pe(Ce,{noResolve:_e,...ge}),i(39,Oe=!0)):pe(Ce,{noResolve:_e})),l.$$.dirty[1]&7680&&(be||!Ae?be||(Ve(me,{noResolve:be,...He}),i(43,Ae=!0)):Ve(me,{noResolve:be}))},i(41,be=ne`select
  location_id as cidade,
  city_name,
  state_name,
  region
from weather_dw.mart_climate__daily_facts
group by location_id, city_name, state_name, region
order by region, city_name`),i(42,me=`select
  location_id as cidade,
  city_name,
  state_name,
  region
from weather_dw.mart_climate__daily_facts
group by location_id, city_name, state_name, region
order by region, city_name`),[D,ve,$e,De,ce,Pe,Fe,Be,s,_,f,h,F,A,u,te,L,Y,G,J,N,Z,K,b,ie,X,ee,ae,he,ue,qe,Je,re,we,Re,fe,ge,_e,Ce,Oe,He,be,me,Ae,t]}class Aa extends ea{constructor(a){super(),ta(this,a,ga,wa,Gt,{data:8},null,[-1,-1])}}export{Aa as component};
