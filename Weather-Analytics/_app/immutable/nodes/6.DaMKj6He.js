import{s as Nt,d as m,i as d,b as j,c as $,e as f,h as Ut,f as g,g as _t,j as Me,m as p,n as b,o as Tt,p as Pt,q as Ot,r as Qt,u as Bt,a as Se,k as Pe,l as le,t as me,v as ye}from"../chunks/scheduler.BCLmrrz2.js";import{S as Vt,i as jt,d as M,t as y,a as v,c as Ne,m as x,b as H,e as q,g as Ue}from"../chunks/index.a3bxNApc.js";import{D as It,e as zt,s as Gt,Q as Be,p as Kt,C as $e,a as Rt,r as Et,b as Xt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BwerghhW.js";import{w as Yt}from"../chunks/entry.CbCHf3Ot.js";import{h as pe,p as Jt}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Wt}from"../chunks/stores.Bglzfa1B.js";import{B as Mt,Q as je}from"../chunks/BarChart.C39ejiWJ.js";import{B as Ve}from"../chunks/BigValue.CJ6o_qCj.js";import{L as xt}from"../chunks/LineChart.DQ21YzSr.js";function Zt(n){let a,i=T.title+"",t;return{c(){a=b("h1"),t=me(i),this.h()},l(l){a=g(l,"H1",{class:!0});var s=Pe(a);t=le(s,i),s.forEach(m),this.h()},h(){$(a,"class","title")},m(l,s){d(l,a,s),j(a,t)},p:ye,d(l){l&&m(a)}}}function ea(n){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:ye,p:ye,d:ye}}function ta(n){let a,i,t,l,s;return document.title=a=T.title,{c(){i=p(),t=b("meta"),l=p(),s=b("meta"),this.h()},l(_){i=f(_),t=g(_,"META",{property:!0,content:!0}),l=f(_),s=g(_,"META",{name:!0,content:!0}),this.h()},h(){var _,c;$(t,"property","og:title"),$(t,"content",((_=T.og)==null?void 0:_.title)??T.title),$(s,"name","twitter:title"),$(s,"content",((c=T.og)==null?void 0:c.title)??T.title)},m(_,c){d(_,i,c),d(_,t,c),d(_,l,c),d(_,s,c)},p(_,c){c&0&&a!==(a=T.title)&&(document.title=a)},d(_){_&&(m(i),m(t),m(l),m(s))}}}function aa(n){var s,_;let a,i,t=(T.description||((s=T.og)==null?void 0:s.description))&&ia(),l=((_=T.og)==null?void 0:_.image)&&ra();return{c(){t&&t.c(),a=p(),l&&l.c(),i=_t()},l(c){t&&t.l(c),a=f(c),l&&l.l(c),i=_t()},m(c,h){t&&t.m(c,h),d(c,a,h),l&&l.m(c,h),d(c,i,h)},p(c,h){var u,C;(T.description||(u=T.og)!=null&&u.description)&&t.p(c,h),(C=T.og)!=null&&C.image&&l.p(c,h)},d(c){c&&(m(a),m(i)),t&&t.d(c),l&&l.d(c)}}}function ia(n){let a,i,t,l,s;return{c(){a=b("meta"),i=p(),t=b("meta"),l=p(),s=b("meta"),this.h()},l(_){a=g(_,"META",{name:!0,content:!0}),i=f(_),t=g(_,"META",{property:!0,content:!0}),l=f(_),s=g(_,"META",{name:!0,content:!0}),this.h()},h(){var _,c,h;$(a,"name","description"),$(a,"content",T.description??((_=T.og)==null?void 0:_.description)),$(t,"property","og:description"),$(t,"content",((c=T.og)==null?void 0:c.description)??T.description),$(s,"name","twitter:description"),$(s,"content",((h=T.og)==null?void 0:h.description)??T.description)},m(_,c){d(_,a,c),d(_,i,c),d(_,t,c),d(_,l,c),d(_,s,c)},p:ye,d(_){_&&(m(a),m(i),m(t),m(l),m(s))}}}function ra(n){let a,i,t;return{c(){a=b("meta"),i=p(),t=b("meta"),this.h()},l(l){a=g(l,"META",{property:!0,content:!0}),i=f(l),t=g(l,"META",{name:!0,content:!0}),this.h()},h(){var l,s;$(a,"property","og:image"),$(a,"content",Rt((l=T.og)==null?void 0:l.image)),$(t,"name","twitter:image"),$(t,"content",Rt((s=T.og)==null?void 0:s.image))},m(l,s){d(l,a,s),d(l,i,s),d(l,t,s)},p:ye,d(l){l&&(m(a),m(i),m(t))}}}function Ht(n){let a,i;return a=new je({props:{queryID:"info_cidade",queryResult:n[0]}}),{c(){q(a.$$.fragment)},l(t){H(a.$$.fragment,t)},m(t,l){x(a,t,l),i=!0},p(t,l){const s={};l[0]&1&&(s.queryResult=t[0]),a.$set(s)},i(t){i||(v(a.$$.fragment,t),i=!0)},o(t){y(a.$$.fragment,t),i=!1},d(t){M(a,t)}}}function qt(n){let a,i;return a=new je({props:{queryID:"serie_90d",queryResult:n[1]}}),{c(){q(a.$$.fragment)},l(t){H(a.$$.fragment,t)},m(t,l){x(a,t,l),i=!0},p(t,l){const s={};l[0]&2&&(s.queryResult=t[1]),a.$set(s)},i(t){i||(v(a.$$.fragment,t),i=!0)},o(t){y(a.$$.fragment,t),i=!1},d(t){M(a,t)}}}function Ct(n){let a,i;return a=new je({props:{queryID:"resumo_periodo",queryResult:n[2]}}),{c(){q(a.$$.fragment)},l(t){H(a.$$.fragment,t)},m(t,l){x(a,t,l),i=!0},p(t,l){const s={};l[0]&4&&(s.queryResult=t[2]),a.$set(s)},i(t){i||(v(a.$$.fragment,t),i=!0)},o(t){y(a.$$.fragment,t),i=!1},d(t){M(a,t)}}}function Ft(n){let a,i;return a=new je({props:{queryID:"alertas_cidade",queryResult:n[3]}}),{c(){q(a.$$.fragment)},l(t){H(a.$$.fragment,t)},m(t,l){x(a,t,l),i=!0},p(t,l){const s={};l[0]&8&&(s.queryResult=t[3]),a.$set(s)},i(t){i||(v(a.$$.fragment,t),i=!0)},o(t){y(a.$$.fragment,t),i=!1},d(t){M(a,t)}}}function Dt(n){let a,i;return a=new je({props:{queryID:"uv_distribuicao",queryResult:n[4]}}),{c(){q(a.$$.fragment)},l(t){H(a.$$.fragment,t)},m(t,l){x(a,t,l),i=!0},p(t,l){const s={};l[0]&16&&(s.queryResult=t[4]),a.$set(s)},i(t){i||(v(a.$$.fragment,t),i=!0)},o(t){y(a.$$.fragment,t),i=!1},d(t){M(a,t)}}}function At(n){let a,i;return a=new je({props:{queryID:"lista_todas_cidades",queryResult:n[5]}}),{c(){q(a.$$.fragment)},l(t){H(a.$$.fragment,t)},m(t,l){x(a,t,l),i=!0},p(t,l){const s={};l[0]&32&&(s.queryResult=t[5]),a.$set(s)},i(t){i||(v(a.$$.fragment,t),i=!0)},o(t){y(a.$$.fragment,t),i=!1},d(t){M(a,t)}}}function Lt(n){let a,i,t=n[0][0].city_name+"",l,s,_,c,h=n[0][0].state_name+"",u,C,F=n[0][0].region+"",w,D,N=n[0][0].country+"",o,k,W,L,Z,I=n[0][0].latitude+"",ie,ee,_e=n[0][0].longitude+"",K,te,S=n[0][0].altitude_m+"",re,ne;return{c(){a=b("h1"),i=b("a"),l=me(t),s=p(),_=b("p"),c=b("strong"),u=me(h),C=me(" · "),w=me(F),D=me(" · "),o=me(N),k=p(),W=b("blockquote"),L=b("p"),Z=me("Lat: "),ie=me(I),ee=me(" · Lon: "),K=me(_e),te=me(" · Altitude: "),re=me(S),ne=me(" m"),this.h()},l(R){a=g(R,"H1",{class:!0,id:!0});var E=Pe(a);i=g(E,"A",{href:!0});var se=Pe(i);l=le(se,t),se.forEach(m),E.forEach(m),s=f(R),_=g(R,"P",{class:!0});var z=Pe(_);c=g(z,"STRONG",{class:!0});var X=Pe(c);u=le(X,h),X.forEach(m),C=le(z," · "),w=le(z,F),D=le(z," · "),o=le(z,N),z.forEach(m),k=f(R),W=g(R,"BLOCKQUOTE",{class:!0});var ve=Pe(W);L=g(ve,"P",{class:!0});var G=Pe(L);Z=le(G,"Lat: "),ie=le(G,I),ee=le(G," · Lon: "),K=le(G,_e),te=le(G," · Altitude: "),re=le(G,S),ne=le(G," m"),G.forEach(m),ve.forEach(m),this.h()},h(){$(i,"href","#info_cidade0city_name"),$(a,"class","markdown"),$(a,"id","info_cidade0city_name"),$(c,"class","markdown"),$(_,"class","markdown"),$(L,"class","markdown"),$(W,"class","markdown")},m(R,E){d(R,a,E),j(a,i),j(i,l),d(R,s,E),d(R,_,E),j(_,c),j(c,u),j(_,C),j(_,w),j(_,D),j(_,o),d(R,k,E),d(R,W,E),j(W,L),j(L,Z),j(L,ie),j(L,ee),j(L,K),j(L,te),j(L,re),j(L,ne)},p(R,E){E[0]&1&&t!==(t=R[0][0].city_name+"")&&Se(l,t),E[0]&1&&h!==(h=R[0][0].state_name+"")&&Se(u,h),E[0]&1&&F!==(F=R[0][0].region+"")&&Se(w,F),E[0]&1&&N!==(N=R[0][0].country+"")&&Se(o,N),E[0]&1&&I!==(I=R[0][0].latitude+"")&&Se(ie,I),E[0]&1&&_e!==(_e=R[0][0].longitude+"")&&Se(K,_e),E[0]&1&&S!==(S=R[0][0].altitude_m+"")&&Se(re,S)},d(R){R&&(m(a),m(s),m(_),m(k),m(W))}}}function _a(n){let a,i='<p class="markdown">Nenhum alerta climático extremo nos últimos 90 dias.</p>';return{c(){a=b("blockquote"),a.innerHTML=i,this.h()},l(t){a=g(t,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),Me(a)!=="svelte-xjmz6k"&&(a.innerHTML=i),this.h()},h(){$(a,"class","markdown")},m(t,l){d(t,a,l)},p:ye,i:ye,o:ye,d(t){t&&m(a)}}}function la(n){let a,i;return a=new It({props:{data:n[3],rows:"10",$$slots:{default:[ma]},$$scope:{ctx:n}}}),{c(){q(a.$$.fragment)},l(t){H(a.$$.fragment,t)},m(t,l){x(a,t,l),i=!0},p(t,l){const s={};l[0]&8&&(s.data=t[3]),l[1]&131072&&(s.$$scope={dirty:l,ctx:t}),a.$set(s)},i(t){i||(v(a.$$.fragment,t),i=!0)},o(t){y(a.$$.fragment,t),i=!1},d(t){M(a,t)}}}function ma(n){let a,i,t,l,s,_,c,h,u,C,F,w,D,N;return a=new $e({props:{id:"date",title:"Data",fmt:"dd/MM/yyyy"}}),t=new $e({props:{id:"alert_type",title:"Tipo"}}),s=new $e({props:{id:"severity",title:"Severidade",contentType:"colorscale"}}),c=new $e({props:{id:"temp_max_c",title:"Temp. Máx (°C)",fmt:"0.0"}}),u=new $e({props:{id:"precipitation_mm",title:"Precip. (mm)",fmt:"0.0"}}),F=new $e({props:{id:"wind_speed_max_kmh",title:"Vento (km/h)",fmt:"0.0"}}),D=new $e({props:{id:"uv_index_max",title:"UV Máx",fmt:"0.0"}}),{c(){q(a.$$.fragment),i=p(),q(t.$$.fragment),l=p(),q(s.$$.fragment),_=p(),q(c.$$.fragment),h=p(),q(u.$$.fragment),C=p(),q(F.$$.fragment),w=p(),q(D.$$.fragment)},l(o){H(a.$$.fragment,o),i=f(o),H(t.$$.fragment,o),l=f(o),H(s.$$.fragment,o),_=f(o),H(c.$$.fragment,o),h=f(o),H(u.$$.fragment,o),C=f(o),H(F.$$.fragment,o),w=f(o),H(D.$$.fragment,o)},m(o,k){x(a,o,k),d(o,i,k),x(t,o,k),d(o,l,k),x(s,o,k),d(o,_,k),x(c,o,k),d(o,h,k),x(u,o,k),d(o,C,k),x(F,o,k),d(o,w,k),x(D,o,k),N=!0},p:ye,i(o){N||(v(a.$$.fragment,o),v(t.$$.fragment,o),v(s.$$.fragment,o),v(c.$$.fragment,o),v(u.$$.fragment,o),v(F.$$.fragment,o),v(D.$$.fragment,o),N=!0)},o(o){y(a.$$.fragment,o),y(t.$$.fragment,o),y(s.$$.fragment,o),y(c.$$.fragment,o),y(u.$$.fragment,o),y(F.$$.fragment,o),y(D.$$.fragment,o),N=!1},d(o){o&&(m(i),m(l),m(_),m(h),m(C),m(w)),M(a,o),M(t,o),M(s,o),M(c,o),M(u,o),M(F,o),M(D,o)}}}function na(n){let a,i,t,l,s,_,c,h;return a=new $e({props:{id:"city_name",title:"Cidade"}}),t=new $e({props:{id:"cidade",title:"ID"}}),s=new $e({props:{id:"state_name",title:"UF"}}),c=new $e({props:{id:"region",title:"Região"}}),{c(){q(a.$$.fragment),i=p(),q(t.$$.fragment),l=p(),q(s.$$.fragment),_=p(),q(c.$$.fragment)},l(u){H(a.$$.fragment,u),i=f(u),H(t.$$.fragment,u),l=f(u),H(s.$$.fragment,u),_=f(u),H(c.$$.fragment,u)},m(u,C){x(a,u,C),d(u,i,C),x(t,u,C),d(u,l,C),x(s,u,C),d(u,_,C),x(c,u,C),h=!0},p:ye,i(u){h||(v(a.$$.fragment,u),v(t.$$.fragment,u),v(s.$$.fragment,u),v(c.$$.fragment,u),h=!0)},o(u){y(a.$$.fragment,u),y(t.$$.fragment,u),y(s.$$.fragment,u),y(c.$$.fragment,u),h=!1},d(u){u&&(m(i),m(l),m(_)),M(a,u),M(t,u),M(s,u),M(c,u)}}}function sa(n){let a,i,t,l,s,_,c,h,u,C,F,w,D,N='<strong class="markdown">Período:</strong> últimos 90 dias',o,k,W,L,Z,I,ie,ee,_e,K,te,S,re,ne,R,E,se='<a href="#temperatura--série-temporal">Temperatura — Série Temporal</a>',z,X,ve,G,xe,Y,we='<a href="#precipitação-diária">Precipitação Diária</a>',he,de,He,ge,oe,J,qe='<a href="#anomalia-de-temperatura">Anomalia de Temperatura</a>',Ce,ce,Fe,A,Oe,be,nt='<a href="#distribuição-de-risco-uv">Distribuição de Risco UV</a>',Ye,De,Je,ze,We,ke,st='<a href="#alertas-recentes">Alertas Recentes</a>',Ze,ue,fe,Qe,Ge,et,Te,dt='<a href="#outras-cidades">Outras Cidades</a>',tt,Ae,at,Ke,it,Le,ot='<strong class="markdown">Navegação:</strong> <a href="/Analytics-Engineer/" class="markdown">Início</a> · <a href="/Analytics-Engineer/temperatura" class="markdown">Temperatura</a> · <a href="/Analytics-Engineer/precipitacao" class="markdown">Precipitação</a> · <a href="/Analytics-Engineer/alertas" class="markdown">Alertas</a>',rt,Re=typeof T<"u"&&T.title&&T.hide_title!==!0&&Zt();function St(e,r){return typeof T<"u"&&T.title?ta:ea}let Xe=St()(n),Ee=typeof T=="object"&&aa(),U=n[0]&&Ht(n),P=n[1]&&qt(n),O=n[2]&&Ct(n),Q=n[3]&&Ft(n),B=n[4]&&Dt(n),V=n[5]&&At(n),ae=n[0].length>0&&Lt(n);k=new Ve({props:{data:n[2],value:"media_temperatura",title:"Temp. Média",fmt:"0.0"}}),L=new Ve({props:{data:n[2],value:"recorde_calor",title:"Recorde de Calor",fmt:"0.0"}}),I=new Ve({props:{data:n[2],value:"recorde_frio",title:"Recorde de Frio",fmt:"0.0"}}),ee=new Ve({props:{data:n[2],value:"chuva_acumulada_mm",title:"Chuva Acumulada",fmt:"0mm"}}),K=new Ve({props:{data:n[2],value:"dias_com_chuva",title:"Dias com Chuva"}}),S=new Ve({props:{data:n[2],value:"anomalia_media_c",title:"Anomalia Média",fmt:"+0.00;-0.00"}}),X=new xt({props:{data:n[1],x:"date",y:["temp_max_c","temp_avg_c","temp_min_c","temp_avg_30d_c"],yAxisTitle:"Temperatura (°C)",xFmt:"dd/MM/yyyy",labels:!0}}),de=new Mt({props:{data:n[1],x:"date",y:"precipitation_mm",yAxisTitle:"Precipitação (mm)",colorPalette:["#3498db"],xFmt:"dd/MM/yyyy"}}),ce=new xt({props:{data:n[1],x:"date",y:"temp_anomaly_c",yAxisTitle:"Anomalia (°C)",yMin:-10,yMax:10,colorPalette:["#e74c3c"],xFmt:"dd/MM/yyyy"}}),De=new Mt({props:{data:n[4],x:"nivel_uv",y:"dias",yAxisTitle:"Número de dias",title:"Dias por nível de risco UV (OMS)"}});const ct=[la,_a],Ie=[];function ut(e,r){return e[3].length>0?0:1}return ue=ut(n),fe=Ie[ue]=ct[ue](n),Ae=new It({props:{data:n[5],rows:"10",search:"true",$$slots:{default:[na]},$$scope:{ctx:n}}}),{c(){Re&&Re.c(),a=p(),Xe.c(),i=b("meta"),t=b("meta"),Ee&&Ee.c(),l=_t(),s=p(),U&&U.c(),_=p(),P&&P.c(),c=p(),O&&O.c(),h=p(),Q&&Q.c(),u=p(),B&&B.c(),C=p(),V&&V.c(),F=p(),ae&&ae.c(),w=p(),D=b("p"),D.innerHTML=N,o=p(),q(k.$$.fragment),W=p(),q(L.$$.fragment),Z=p(),q(I.$$.fragment),ie=p(),q(ee.$$.fragment),_e=p(),q(K.$$.fragment),te=p(),q(S.$$.fragment),re=p(),ne=b("hr"),R=p(),E=b("h2"),E.innerHTML=se,z=p(),q(X.$$.fragment),ve=p(),G=b("hr"),xe=p(),Y=b("h2"),Y.innerHTML=we,he=p(),q(de.$$.fragment),He=p(),ge=b("hr"),oe=p(),J=b("h2"),J.innerHTML=qe,Ce=p(),q(ce.$$.fragment),Fe=p(),A=b("hr"),Oe=p(),be=b("h2"),be.innerHTML=nt,Ye=p(),q(De.$$.fragment),Je=p(),ze=b("hr"),We=p(),ke=b("h2"),ke.innerHTML=st,Ze=p(),fe.c(),Qe=p(),Ge=b("hr"),et=p(),Te=b("h2"),Te.innerHTML=dt,tt=p(),q(Ae.$$.fragment),at=p(),Ke=b("hr"),it=p(),Le=b("p"),Le.innerHTML=ot,this.h()},l(e){Re&&Re.l(e),a=f(e);const r=Ut("svelte-2igo1p",document.head);Xe.l(r),i=g(r,"META",{name:!0,content:!0}),t=g(r,"META",{name:!0,content:!0}),Ee&&Ee.l(r),l=_t(),r.forEach(m),s=f(e),U&&U.l(e),_=f(e),P&&P.l(e),c=f(e),O&&O.l(e),h=f(e),Q&&Q.l(e),u=f(e),B&&B.l(e),C=f(e),V&&V.l(e),F=f(e),ae&&ae.l(e),w=f(e),D=g(e,"P",{class:!0,"data-svelte-h":!0}),Me(D)!=="svelte-93wlox"&&(D.innerHTML=N),o=f(e),H(k.$$.fragment,e),W=f(e),H(L.$$.fragment,e),Z=f(e),H(I.$$.fragment,e),ie=f(e),H(ee.$$.fragment,e),_e=f(e),H(K.$$.fragment,e),te=f(e),H(S.$$.fragment,e),re=f(e),ne=g(e,"HR",{class:!0}),R=f(e),E=g(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Me(E)!=="svelte-1jqaeqm"&&(E.innerHTML=se),z=f(e),H(X.$$.fragment,e),ve=f(e),G=g(e,"HR",{class:!0}),xe=f(e),Y=g(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Me(Y)!=="svelte-xg83cw"&&(Y.innerHTML=we),he=f(e),H(de.$$.fragment,e),He=f(e),ge=g(e,"HR",{class:!0}),oe=f(e),J=g(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Me(J)!=="svelte-v4a29r"&&(J.innerHTML=qe),Ce=f(e),H(ce.$$.fragment,e),Fe=f(e),A=g(e,"HR",{class:!0}),Oe=f(e),be=g(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Me(be)!=="svelte-110kbfs"&&(be.innerHTML=nt),Ye=f(e),H(De.$$.fragment,e),Je=f(e),ze=g(e,"HR",{class:!0}),We=f(e),ke=g(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Me(ke)!=="svelte-1pbrty7"&&(ke.innerHTML=st),Ze=f(e),fe.l(e),Qe=f(e),Ge=g(e,"HR",{class:!0}),et=f(e),Te=g(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Me(Te)!=="svelte-4r1zhl"&&(Te.innerHTML=dt),tt=f(e),H(Ae.$$.fragment,e),at=f(e),Ke=g(e,"HR",{class:!0}),it=f(e),Le=g(e,"P",{class:!0,"data-svelte-h":!0}),Me(Le)!=="svelte-1hc1550"&&(Le.innerHTML=ot),this.h()},h(){$(i,"name","twitter:card"),$(i,"content","summary_large_image"),$(t,"name","twitter:site"),$(t,"content","@evidence_dev"),$(D,"class","markdown"),$(ne,"class","markdown"),$(E,"class","markdown"),$(E,"id","temperatura--série-temporal"),$(G,"class","markdown"),$(Y,"class","markdown"),$(Y,"id","precipitação-diária"),$(ge,"class","markdown"),$(J,"class","markdown"),$(J,"id","anomalia-de-temperatura"),$(A,"class","markdown"),$(be,"class","markdown"),$(be,"id","distribuição-de-risco-uv"),$(ze,"class","markdown"),$(ke,"class","markdown"),$(ke,"id","alertas-recentes"),$(Ge,"class","markdown"),$(Te,"class","markdown"),$(Te,"id","outras-cidades"),$(Ke,"class","markdown"),$(Le,"class","markdown")},m(e,r){Re&&Re.m(e,r),d(e,a,r),Xe.m(document.head,null),j(document.head,i),j(document.head,t),Ee&&Ee.m(document.head,null),j(document.head,l),d(e,s,r),U&&U.m(e,r),d(e,_,r),P&&P.m(e,r),d(e,c,r),O&&O.m(e,r),d(e,h,r),Q&&Q.m(e,r),d(e,u,r),B&&B.m(e,r),d(e,C,r),V&&V.m(e,r),d(e,F,r),ae&&ae.m(e,r),d(e,w,r),d(e,D,r),d(e,o,r),x(k,e,r),d(e,W,r),x(L,e,r),d(e,Z,r),x(I,e,r),d(e,ie,r),x(ee,e,r),d(e,_e,r),x(K,e,r),d(e,te,r),x(S,e,r),d(e,re,r),d(e,ne,r),d(e,R,r),d(e,E,r),d(e,z,r),x(X,e,r),d(e,ve,r),d(e,G,r),d(e,xe,r),d(e,Y,r),d(e,he,r),x(de,e,r),d(e,He,r),d(e,ge,r),d(e,oe,r),d(e,J,r),d(e,Ce,r),x(ce,e,r),d(e,Fe,r),d(e,A,r),d(e,Oe,r),d(e,be,r),d(e,Ye,r),x(De,e,r),d(e,Je,r),d(e,ze,r),d(e,We,r),d(e,ke,r),d(e,Ze,r),Ie[ue].m(e,r),d(e,Qe,r),d(e,Ge,r),d(e,et,r),d(e,Te,r),d(e,tt,r),x(Ae,e,r),d(e,at,r),d(e,Ke,r),d(e,it,r),d(e,Le,r),rt=!0},p(e,r){typeof T<"u"&&T.title&&T.hide_title!==!0&&Re.p(e,r),Xe.p(e,r),typeof T=="object"&&Ee.p(e,r),e[0]?U?(U.p(e,r),r[0]&1&&v(U,1)):(U=Ht(e),U.c(),v(U,1),U.m(_.parentNode,_)):U&&(Ue(),y(U,1,1,()=>{U=null}),Ne()),e[1]?P?(P.p(e,r),r[0]&2&&v(P,1)):(P=qt(e),P.c(),v(P,1),P.m(c.parentNode,c)):P&&(Ue(),y(P,1,1,()=>{P=null}),Ne()),e[2]?O?(O.p(e,r),r[0]&4&&v(O,1)):(O=Ct(e),O.c(),v(O,1),O.m(h.parentNode,h)):O&&(Ue(),y(O,1,1,()=>{O=null}),Ne()),e[3]?Q?(Q.p(e,r),r[0]&8&&v(Q,1)):(Q=Ft(e),Q.c(),v(Q,1),Q.m(u.parentNode,u)):Q&&(Ue(),y(Q,1,1,()=>{Q=null}),Ne()),e[4]?B?(B.p(e,r),r[0]&16&&v(B,1)):(B=Dt(e),B.c(),v(B,1),B.m(C.parentNode,C)):B&&(Ue(),y(B,1,1,()=>{B=null}),Ne()),e[5]?V?(V.p(e,r),r[0]&32&&v(V,1)):(V=At(e),V.c(),v(V,1),V.m(F.parentNode,F)):V&&(Ue(),y(V,1,1,()=>{V=null}),Ne()),e[0].length>0?ae?ae.p(e,r):(ae=Lt(e),ae.c(),ae.m(w.parentNode,w)):ae&&(ae.d(1),ae=null);const ft={};r[0]&4&&(ft.data=e[2]),k.$set(ft);const pt={};r[0]&4&&(pt.data=e[2]),L.$set(pt);const vt={};r[0]&4&&(vt.data=e[2]),I.$set(vt);const $t={};r[0]&4&&($t.data=e[2]),ee.$set($t);const yt={};r[0]&4&&(yt.data=e[2]),K.$set(yt);const wt={};r[0]&4&&(wt.data=e[2]),S.$set(wt);const ht={};r[0]&2&&(ht.data=e[1]),X.$set(ht);const gt={};r[0]&2&&(gt.data=e[1]),de.$set(gt);const bt={};r[0]&2&&(bt.data=e[1]),ce.$set(bt);const kt={};r[0]&16&&(kt.data=e[4]),De.$set(kt);let lt=ue;ue=ut(e),ue===lt?Ie[ue].p(e,r):(Ue(),y(Ie[lt],1,1,()=>{Ie[lt]=null}),Ne(),fe=Ie[ue],fe?fe.p(e,r):(fe=Ie[ue]=ct[ue](e),fe.c()),v(fe,1),fe.m(Qe.parentNode,Qe));const mt={};r[0]&32&&(mt.data=e[5]),r[1]&131072&&(mt.$$scope={dirty:r,ctx:e}),Ae.$set(mt)},i(e){rt||(v(U),v(P),v(O),v(Q),v(B),v(V),v(k.$$.fragment,e),v(L.$$.fragment,e),v(I.$$.fragment,e),v(ee.$$.fragment,e),v(K.$$.fragment,e),v(S.$$.fragment,e),v(X.$$.fragment,e),v(de.$$.fragment,e),v(ce.$$.fragment,e),v(De.$$.fragment,e),v(fe),v(Ae.$$.fragment,e),rt=!0)},o(e){y(U),y(P),y(O),y(Q),y(B),y(V),y(k.$$.fragment,e),y(L.$$.fragment,e),y(I.$$.fragment,e),y(ee.$$.fragment,e),y(K.$$.fragment,e),y(S.$$.fragment,e),y(X.$$.fragment,e),y(de.$$.fragment,e),y(ce.$$.fragment,e),y(De.$$.fragment,e),y(fe),y(Ae.$$.fragment,e),rt=!1},d(e){e&&(m(a),m(s),m(_),m(c),m(h),m(u),m(C),m(F),m(w),m(D),m(o),m(W),m(Z),m(ie),m(_e),m(te),m(re),m(ne),m(R),m(E),m(z),m(ve),m(G),m(xe),m(Y),m(he),m(He),m(ge),m(oe),m(J),m(Ce),m(Fe),m(A),m(Oe),m(be),m(Ye),m(Je),m(ze),m(We),m(ke),m(Ze),m(Qe),m(Ge),m(et),m(Te),m(tt),m(at),m(Ke),m(it),m(Le)),Re&&Re.d(e),Xe.d(e),m(i),m(t),Ee&&Ee.d(e),m(l),U&&U.d(e),P&&P.d(e),O&&O.d(e),Q&&Q.d(e),B&&B.d(e),V&&V.d(e),ae&&ae.d(e),M(k,e),M(L,e),M(I,e),M(ee,e),M(K,e),M(S,e),M(X,e),M(de,e),M(ce,e),M(De,e),Ie[ue].d(e),M(Ae,e)}}}const T={title:"Detalhes por Cidade"};function da(n,a,i){let t,l;Tt(n,Wt,A=>i(33,t=A)),Tt(n,Et,A=>i(38,l=A));let{data:s}=a,{data:_={},customFormattingSettings:c,__db:h,inputs:u}=s;Pt(Et,l="c3084fbb9712879ff79a0678595f96d7",l);let C=zt(Yt(u));Ot(C.subscribe(A=>u=A)),Qt(Xt,{getCustomFormats:()=>c.customFormats||[]});const F=(A,Oe)=>Jt(h.query,A,{query_name:Oe});Gt(F);let w=t.params;Bt(()=>!0);let D={initialData:void 0,initialError:void 0},N=pe`select distinct
  city_name,
  state_name,
  country,
  region,
  latitude,
  longitude,
  altitude_m
from weather_dw.mart_climate__daily_facts
where location_id = '${w.cidade}'
limit 1`,o=`select distinct
  city_name,
  state_name,
  country,
  region,
  latitude,
  longitude,
  altitude_m
from weather_dw.mart_climate__daily_facts
where location_id = '${w.cidade}'
limit 1`;_.info_cidade_data&&(_.info_cidade_data instanceof Error?D.initialError=_.info_cidade_data:D.initialData=_.info_cidade_data,_.info_cidade_columns&&(D.knownColumns=_.info_cidade_columns));let k,W=!1;const L=Be.createReactive({callback:A=>{i(0,k=A)},execFn:F},{id:"info_cidade",...D});L(o,{noResolve:N,...D}),globalThis[Symbol.for("info_cidade")]={get value(){return k}};let Z={initialData:void 0,initialError:void 0},I=pe`select
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
where location_id = '${w.cidade}'
  and date >= current_date - interval '90 days'
order by date`,ie=`select
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
where location_id = '${w.cidade}'
  and date >= current_date - interval '90 days'
order by date`;_.serie_90d_data&&(_.serie_90d_data instanceof Error?Z.initialError=_.serie_90d_data:Z.initialData=_.serie_90d_data,_.serie_90d_columns&&(Z.knownColumns=_.serie_90d_columns));let ee,_e=!1;const K=Be.createReactive({callback:A=>{i(1,ee=A)},execFn:F},{id:"serie_90d",...Z});K(ie,{noResolve:I,...Z}),globalThis[Symbol.for("serie_90d")]={get value(){return ee}};let te={initialData:void 0,initialError:void 0},S=pe`select
  round(avg(temp_max_c), 1)              as media_maxima,
  round(avg(temp_min_c), 1)             as media_minima,
  round(avg(temp_avg_c), 1)             as media_temperatura,
  round(max(temp_max_c), 1)             as recorde_calor,
  round(min(temp_min_c), 1)             as recorde_frio,
  round(sum(precipitation_mm), 0)       as chuva_acumulada_mm,
  count(*) filter (where precipitation_mm > 0)         as dias_com_chuva,
  round(avg(daylight_hours), 1)         as horas_luz_media,
  round(avg(temp_anomaly_c), 2)         as anomalia_media_c
from weather_dw.mart_climate__daily_facts
where location_id = '${w.cidade}'
  and date >= current_date - interval '90 days'`,re=`select
  round(avg(temp_max_c), 1)              as media_maxima,
  round(avg(temp_min_c), 1)             as media_minima,
  round(avg(temp_avg_c), 1)             as media_temperatura,
  round(max(temp_max_c), 1)             as recorde_calor,
  round(min(temp_min_c), 1)             as recorde_frio,
  round(sum(precipitation_mm), 0)       as chuva_acumulada_mm,
  count(*) filter (where precipitation_mm > 0)         as dias_com_chuva,
  round(avg(daylight_hours), 1)         as horas_luz_media,
  round(avg(temp_anomaly_c), 2)         as anomalia_media_c
from weather_dw.mart_climate__daily_facts
where location_id = '${w.cidade}'
  and date >= current_date - interval '90 days'`;_.resumo_periodo_data&&(_.resumo_periodo_data instanceof Error?te.initialError=_.resumo_periodo_data:te.initialData=_.resumo_periodo_data,_.resumo_periodo_columns&&(te.knownColumns=_.resumo_periodo_columns));let ne,R=!1;const E=Be.createReactive({callback:A=>{i(2,ne=A)},execFn:F},{id:"resumo_periodo",...te});E(re,{noResolve:S,...te}),globalThis[Symbol.for("resumo_periodo")]={get value(){return ne}};let se={initialData:void 0,initialError:void 0},z=pe`select
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
where location_id = '${w.cidade}'
  and date >= current_date - interval '90 days'
order by date desc`,X=`select
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
where location_id = '${w.cidade}'
  and date >= current_date - interval '90 days'
order by date desc`;_.alertas_cidade_data&&(_.alertas_cidade_data instanceof Error?se.initialError=_.alertas_cidade_data:se.initialData=_.alertas_cidade_data,_.alertas_cidade_columns&&(se.knownColumns=_.alertas_cidade_columns));let ve,G=!1;const xe=Be.createReactive({callback:A=>{i(3,ve=A)},execFn:F},{id:"alertas_cidade",...se});xe(X,{noResolve:z,...se}),globalThis[Symbol.for("alertas_cidade")]={get value(){return ve}};let Y={initialData:void 0,initialError:void 0},we=pe`select
  uv_risk_level                         as nivel_uv,
  count(*)                              as dias,
  round(avg(uv_index_max), 1)          as uv_medio
from weather_dw.mart_climate__daily_facts
where location_id = '${w.cidade}'
  and date >= current_date - interval '90 days'
group by uv_risk_level
order by
  case uv_risk_level
    when 'low'       then 1
    when 'moderate'  then 2
    when 'high'      then 3
    when 'very_high' then 4
    when 'extreme'   then 5
  end`,he=`select
  uv_risk_level                         as nivel_uv,
  count(*)                              as dias,
  round(avg(uv_index_max), 1)          as uv_medio
from weather_dw.mart_climate__daily_facts
where location_id = '${w.cidade}'
  and date >= current_date - interval '90 days'
group by uv_risk_level
order by
  case uv_risk_level
    when 'low'       then 1
    when 'moderate'  then 2
    when 'high'      then 3
    when 'very_high' then 4
    when 'extreme'   then 5
  end`;_.uv_distribuicao_data&&(_.uv_distribuicao_data instanceof Error?Y.initialError=_.uv_distribuicao_data:Y.initialData=_.uv_distribuicao_data,_.uv_distribuicao_columns&&(Y.knownColumns=_.uv_distribuicao_columns));let de,He=!1;const ge=Be.createReactive({callback:A=>{i(4,de=A)},execFn:F},{id:"uv_distribuicao",...Y});ge(he,{noResolve:we,...Y}),globalThis[Symbol.for("uv_distribuicao")]={get value(){return de}};let oe={initialData:void 0,initialError:void 0},J=pe`select
  location_id  as cidade,
  city_name,
  state_name,
  region
from weather_dw.mart_climate__daily_facts
group by location_id, city_name, state_name, region
order by region, city_name`,qe=`select
  location_id  as cidade,
  city_name,
  state_name,
  region
from weather_dw.mart_climate__daily_facts
group by location_id, city_name, state_name, region
order by region, city_name`;_.lista_todas_cidades_data&&(_.lista_todas_cidades_data instanceof Error?oe.initialError=_.lista_todas_cidades_data:oe.initialData=_.lista_todas_cidades_data,_.lista_todas_cidades_columns&&(oe.knownColumns=_.lista_todas_cidades_columns));let Ce,ce=!1;const Fe=Be.createReactive({callback:A=>{i(5,Ce=A)},execFn:F},{id:"lista_todas_cidades",...oe});return Fe(qe,{noResolve:J,...oe}),globalThis[Symbol.for("lista_todas_cidades")]={get value(){return Ce}},n.$$set=A=>{"data"in A&&i(6,s=A.data)},n.$$.update=()=>{n.$$.dirty[0]&64&&i(7,{data:_={},customFormattingSettings:c,__db:h}=s,_),n.$$.dirty[0]&128&&Kt.set(Object.keys(_).length>0),n.$$.dirty[1]&4&&i(8,w=t.params),n.$$.dirty[0]&256&&i(10,N=pe`select distinct
  city_name,
  state_name,
  country,
  region,
  latitude,
  longitude,
  altitude_m
from weather_dw.mart_climate__daily_facts
where location_id = '${w.cidade}'
limit 1`),n.$$.dirty[0]&256&&i(11,o=`select distinct
  city_name,
  state_name,
  country,
  region,
  latitude,
  longitude,
  altitude_m
from weather_dw.mart_climate__daily_facts
where location_id = '${w.cidade}'
limit 1`),n.$$.dirty[0]&7680&&(N||!W?N||(L(o,{noResolve:N,...D}),i(12,W=!0)):L(o,{noResolve:N})),n.$$.dirty[0]&256&&i(14,I=pe`select
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
where location_id = '${w.cidade}'
  and date >= current_date - interval '90 days'
order by date`),n.$$.dirty[0]&256&&i(15,ie=`select
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
where location_id = '${w.cidade}'
  and date >= current_date - interval '90 days'
order by date`),n.$$.dirty[0]&122880&&(I||!_e?I||(K(ie,{noResolve:I,...Z}),i(16,_e=!0)):K(ie,{noResolve:I})),n.$$.dirty[0]&256&&i(18,S=pe`select
  round(avg(temp_max_c), 1)              as media_maxima,
  round(avg(temp_min_c), 1)             as media_minima,
  round(avg(temp_avg_c), 1)             as media_temperatura,
  round(max(temp_max_c), 1)             as recorde_calor,
  round(min(temp_min_c), 1)             as recorde_frio,
  round(sum(precipitation_mm), 0)       as chuva_acumulada_mm,
  count(*) filter (where precipitation_mm > 0)         as dias_com_chuva,
  round(avg(daylight_hours), 1)         as horas_luz_media,
  round(avg(temp_anomaly_c), 2)         as anomalia_media_c
from weather_dw.mart_climate__daily_facts
where location_id = '${w.cidade}'
  and date >= current_date - interval '90 days'`),n.$$.dirty[0]&256&&i(19,re=`select
  round(avg(temp_max_c), 1)              as media_maxima,
  round(avg(temp_min_c), 1)             as media_minima,
  round(avg(temp_avg_c), 1)             as media_temperatura,
  round(max(temp_max_c), 1)             as recorde_calor,
  round(min(temp_min_c), 1)             as recorde_frio,
  round(sum(precipitation_mm), 0)       as chuva_acumulada_mm,
  count(*) filter (where precipitation_mm > 0)         as dias_com_chuva,
  round(avg(daylight_hours), 1)         as horas_luz_media,
  round(avg(temp_anomaly_c), 2)         as anomalia_media_c
from weather_dw.mart_climate__daily_facts
where location_id = '${w.cidade}'
  and date >= current_date - interval '90 days'`),n.$$.dirty[0]&1966080&&(S||!R?S||(E(re,{noResolve:S,...te}),i(20,R=!0)):E(re,{noResolve:S})),n.$$.dirty[0]&256&&i(22,z=pe`select
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
where location_id = '${w.cidade}'
  and date >= current_date - interval '90 days'
order by date desc`),n.$$.dirty[0]&256&&i(23,X=`select
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
where location_id = '${w.cidade}'
  and date >= current_date - interval '90 days'
order by date desc`),n.$$.dirty[0]&31457280&&(z||!G?z||(xe(X,{noResolve:z,...se}),i(24,G=!0)):xe(X,{noResolve:z})),n.$$.dirty[0]&256&&i(26,we=pe`select
  uv_risk_level                         as nivel_uv,
  count(*)                              as dias,
  round(avg(uv_index_max), 1)          as uv_medio
from weather_dw.mart_climate__daily_facts
where location_id = '${w.cidade}'
  and date >= current_date - interval '90 days'
group by uv_risk_level
order by
  case uv_risk_level
    when 'low'       then 1
    when 'moderate'  then 2
    when 'high'      then 3
    when 'very_high' then 4
    when 'extreme'   then 5
  end`),n.$$.dirty[0]&256&&i(27,he=`select
  uv_risk_level                         as nivel_uv,
  count(*)                              as dias,
  round(avg(uv_index_max), 1)          as uv_medio
from weather_dw.mart_climate__daily_facts
where location_id = '${w.cidade}'
  and date >= current_date - interval '90 days'
group by uv_risk_level
order by
  case uv_risk_level
    when 'low'       then 1
    when 'moderate'  then 2
    when 'high'      then 3
    when 'very_high' then 4
    when 'extreme'   then 5
  end`),n.$$.dirty[0]&503316480&&(we||!He?we||(ge(he,{noResolve:we,...Y}),i(28,He=!0)):ge(he,{noResolve:we})),n.$$.dirty[0]&1610612736|n.$$.dirty[1]&3&&(J||!ce?J||(Fe(qe,{noResolve:J,...oe}),i(32,ce=!0)):Fe(qe,{noResolve:J}))},i(30,J=pe`select
  location_id  as cidade,
  city_name,
  state_name,
  region
from weather_dw.mart_climate__daily_facts
group by location_id, city_name, state_name, region
order by region, city_name`),i(31,qe=`select
  location_id  as cidade,
  city_name,
  state_name,
  region
from weather_dw.mart_climate__daily_facts
group by location_id, city_name, state_name, region
order by region, city_name`),[k,ee,ne,ve,de,Ce,s,_,w,D,N,o,W,Z,I,ie,_e,te,S,re,R,se,z,X,G,Y,we,he,He,oe,J,qe,ce,t]}class ga extends Vt{constructor(a){super(),jt(this,a,da,sa,Nt,{data:6},null,[-1,-1])}}export{ga as component};
