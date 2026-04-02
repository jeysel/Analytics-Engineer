import{s as It,d as m,i as n,a as ft,b as $,c,h as Lt,e as F,f as ct,g as dt,j as p,k as A,l as Et,m as Nt,o as Qt,n as Vt,p as jt,q as et,r as Bt,t as Ut,u as xt}from"../chunks/scheduler.q7auac3b.js";import{S as Ot,i as Gt,d as S,t as q,a as b,c as $t,m as D,b as I,e as L,g as vt}from"../chunks/index.B_vRVscZ.js";import{D as Pt,e as Xt,s as Yt,Q as bt,p as zt,C as z,a as Rt,r as Ht,b as Kt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BdKGjBcs.js";import{w as Jt}from"../chunks/entry.D_3g4xoz.js";import{h as rt,p as Wt}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Zt}from"../chunks/stores.D9WP5eWk.js";import{B as ht,Q as qt}from"../chunks/BarChart.wW3IZlSb.js";import{B as kt}from"../chunks/BigValue.3NODOlWv.js";function te(u){let i,r=v.title+"",e;return{c(){i=A("h1"),e=xt(r),this.h()},l(l){i=F(l,"H1",{class:!0});var d=Bt(i);e=Ut(d,r),d.forEach(m),this.h()},h(){$(i,"class","title")},m(l,d){n(l,i,d),ft(i,e)},p:et,d(l){l&&m(i)}}}function ee(u){return{c(){this.h()},l(i){this.h()},h(){document.title="Evidence"},m:et,p:et,d:et}}function ae(u){let i,r,e,l,d;return document.title=i=v.title,{c(){r=p(),e=A("meta"),l=p(),d=A("meta"),this.h()},l(o){r=c(o),e=F(o,"META",{property:!0,content:!0}),l=c(o),d=F(o,"META",{name:!0,content:!0}),this.h()},h(){var o,_;$(e,"property","og:title"),$(e,"content",((o=v.og)==null?void 0:o.title)??v.title),$(d,"name","twitter:title"),$(d,"content",((_=v.og)==null?void 0:_.title)??v.title)},m(o,_){n(o,r,_),n(o,e,_),n(o,l,_),n(o,d,_)},p(o,_){_&0&&i!==(i=v.title)&&(document.title=i)},d(o){o&&(m(r),m(e),m(l),m(d))}}}function ie(u){var d,o;let i,r,e=(v.description||((d=v.og)==null?void 0:d.description))&&oe(),l=((o=v.og)==null?void 0:o.image)&&re();return{c(){e&&e.c(),i=p(),l&&l.c(),r=ct()},l(_){e&&e.l(_),i=c(_),l&&l.l(_),r=ct()},m(_,g){e&&e.m(_,g),n(_,i,g),l&&l.m(_,g),n(_,r,g)},p(_,g){var y,U;(v.description||(y=v.og)!=null&&y.description)&&e.p(_,g),(U=v.og)!=null&&U.image&&l.p(_,g)},d(_){_&&(m(i),m(r)),e&&e.d(_),l&&l.d(_)}}}function oe(u){let i,r,e,l,d;return{c(){i=A("meta"),r=p(),e=A("meta"),l=p(),d=A("meta"),this.h()},l(o){i=F(o,"META",{name:!0,content:!0}),r=c(o),e=F(o,"META",{property:!0,content:!0}),l=c(o),d=F(o,"META",{name:!0,content:!0}),this.h()},h(){var o,_,g;$(i,"name","description"),$(i,"content",v.description??((o=v.og)==null?void 0:o.description)),$(e,"property","og:description"),$(e,"content",((_=v.og)==null?void 0:_.description)??v.description),$(d,"name","twitter:description"),$(d,"content",((g=v.og)==null?void 0:g.description)??v.description)},m(o,_){n(o,i,_),n(o,r,_),n(o,e,_),n(o,l,_),n(o,d,_)},p:et,d(o){o&&(m(i),m(r),m(e),m(l),m(d))}}}function re(u){let i,r,e;return{c(){i=A("meta"),r=p(),e=A("meta"),this.h()},l(l){i=F(l,"META",{property:!0,content:!0}),r=c(l),e=F(l,"META",{name:!0,content:!0}),this.h()},h(){var l,d;$(i,"property","og:image"),$(i,"content",Rt((l=v.og)==null?void 0:l.image)),$(e,"name","twitter:image"),$(e,"content",Rt((d=v.og)==null?void 0:d.image))},m(l,d){n(l,i,d),n(l,r,d),n(l,e,d)},p:et,d(l){l&&(m(i),m(r),m(e))}}}function Ft(u){let i,r;return i=new qt({props:{queryID:"kpis_modalidades",queryResult:u[0]}}),{c(){L(i.$$.fragment)},l(e){I(i.$$.fragment,e)},m(e,l){D(i,e,l),r=!0},p(e,l){const d={};l&1&&(d.queryResult=e[0]),i.$set(d)},i(e){r||(b(i.$$.fragment,e),r=!0)},o(e){q(i.$$.fragment,e),r=!1},d(e){S(i,e)}}}function At(u){let i,r;return i=new qt({props:{queryID:"modalidades_qt",queryResult:u[1]}}),{c(){L(i.$$.fragment)},l(e){I(i.$$.fragment,e)},m(e,l){D(i,e,l),r=!0},p(e,l){const d={};l&2&&(d.queryResult=e[1]),i.$set(d)},i(e){r||(b(i.$$.fragment,e),r=!0)},o(e){q(i.$$.fragment,e),r=!1},d(e){S(i,e)}}}function le(u){let i,r,e,l,d,o,_,g,y,U,N,H,T,M,V,j,h,w;return i=new z({props:{id:"ranking",title:"#"}}),e=new z({props:{id:"modalidade",title:"Modalidade"}}),d=new z({props:{id:"qt_contratos",title:"Contratos",fmt:"num0"}}),_=new z({props:{id:"orgaos",title:"Órgãos",fmt:"num0"}}),y=new z({props:{id:"fornecedores",title:"Fornecedores",fmt:"num0"}}),N=new z({props:{id:"vl_total",title:"Valor Total",fmt:"num1b"}}),T=new z({props:{id:"perc_qt",title:"% Contratos",fmt:"num2"}}),V=new z({props:{id:"perc_valor",title:"% Valor",fmt:"num2"}}),h=new z({props:{id:"perc_aditivo",title:"% Com Aditivo",fmt:"num2"}}),{c(){L(i.$$.fragment),r=p(),L(e.$$.fragment),l=p(),L(d.$$.fragment),o=p(),L(_.$$.fragment),g=p(),L(y.$$.fragment),U=p(),L(N.$$.fragment),H=p(),L(T.$$.fragment),M=p(),L(V.$$.fragment),j=p(),L(h.$$.fragment)},l(a){I(i.$$.fragment,a),r=c(a),I(e.$$.fragment,a),l=c(a),I(d.$$.fragment,a),o=c(a),I(_.$$.fragment,a),g=c(a),I(y.$$.fragment,a),U=c(a),I(N.$$.fragment,a),H=c(a),I(T.$$.fragment,a),M=c(a),I(V.$$.fragment,a),j=c(a),I(h.$$.fragment,a)},m(a,f){D(i,a,f),n(a,r,f),D(e,a,f),n(a,l,f),D(d,a,f),n(a,o,f),D(_,a,f),n(a,g,f),D(y,a,f),n(a,U,f),D(N,a,f),n(a,H,f),D(T,a,f),n(a,M,f),D(V,a,f),n(a,j,f),D(h,a,f),w=!0},p:et,i(a){w||(b(i.$$.fragment,a),b(e.$$.fragment,a),b(d.$$.fragment,a),b(_.$$.fragment,a),b(y.$$.fragment,a),b(N.$$.fragment,a),b(T.$$.fragment,a),b(V.$$.fragment,a),b(h.$$.fragment,a),w=!0)},o(a){q(i.$$.fragment,a),q(e.$$.fragment,a),q(d.$$.fragment,a),q(_.$$.fragment,a),q(y.$$.fragment,a),q(N.$$.fragment,a),q(T.$$.fragment,a),q(V.$$.fragment,a),q(h.$$.fragment,a),w=!1},d(a){a&&(m(r),m(l),m(o),m(g),m(U),m(H),m(M),m(j)),S(i,a),S(e,a),S(d,a),S(_,a),S(y,a),S(N,a),S(T,a),S(V,a),S(h,a)}}}function St(u){let i,r;return i=new qt({props:{queryID:"aditivos_modalidade",queryResult:u[2]}}),{c(){L(i.$$.fragment)},l(e){I(i.$$.fragment,e)},m(e,l){D(i,e,l),r=!0},p(e,l){const d={};l&4&&(d.queryResult=e[2]),i.$set(d)},i(e){r||(b(i.$$.fragment,e),r=!0)},o(e){q(i.$$.fragment,e),r=!1},d(e){S(i,e)}}}function se(u){let i,r,e,l,d,o,_='<a href="#modalidades-de-licitação">Modalidades de Licitação</a>',g,y,U="Análise das modalidades utilizadas nas contratações públicas de Santa Catarina.",N,H,T,M,V='<a href="#visão-geral">Visão Geral</a>',j,h,w,a,f,K,x,J,B,O,Q,at='<a href="#ranking-por-quantidade">Ranking por Quantidade</a>',W,G,k,it,Z,mt,lt,nt,P,gt='<a href="#taxa-de-aditivos-por-modalidade">Taxa de Aditivos por Modalidade</a>',_t,ot,tt,ut,X=typeof v<"u"&&v.title&&v.hide_title!==!0&&te();function Dt(t,s){return typeof v<"u"&&v.title?ae:ee}let st=Dt()(u),Y=typeof v=="object"&&ie(),C=u[0]&&Ft(u);w=new kt({props:{data:u[0],value:"total_modalidades",title:"Total de Modalidades",fmt:"num0"}}),f=new kt({props:{data:u[0],value:"total_contratos",title:"Total de Contratos",fmt:"num1k"}}),x=new kt({props:{data:u[0],value:"vl_total",title:"Valor Total",fmt:"num1b"}});let E=u[1]&&At(u);k=new ht({props:{data:u[1],x:"modalidade",y:"qt_contratos",title:"Modalidades por Quantidade de Contratos",swapXY:"true"}}),Z=new Pt({props:{data:u[1],title:"Ranking Completo de Modalidades",$$slots:{default:[le]},$$scope:{ctx:u}}});let R=u[2]&&St(u);return tt=new ht({props:{data:u[2],x:"modalidade",y:"perc_aditivo",title:"% de Contratos com Aditivo por Modalidade",swapXY:"true"}}),{c(){X&&X.c(),i=p(),st.c(),r=A("meta"),e=A("meta"),Y&&Y.c(),l=ct(),d=p(),o=A("h1"),o.innerHTML=_,g=p(),y=A("p"),y.textContent=U,N=p(),H=A("hr"),T=p(),M=A("h2"),M.innerHTML=V,j=p(),C&&C.c(),h=p(),L(w.$$.fragment),a=p(),L(f.$$.fragment),K=p(),L(x.$$.fragment),J=p(),B=A("hr"),O=p(),Q=A("h2"),Q.innerHTML=at,W=p(),E&&E.c(),G=p(),L(k.$$.fragment),it=p(),L(Z.$$.fragment),mt=p(),lt=A("hr"),nt=p(),P=A("h2"),P.innerHTML=gt,_t=p(),R&&R.c(),ot=p(),L(tt.$$.fragment),this.h()},l(t){X&&X.l(t),i=c(t);const s=Lt("svelte-2igo1p",document.head);st.l(s),r=F(s,"META",{name:!0,content:!0}),e=F(s,"META",{name:!0,content:!0}),Y&&Y.l(s),l=ct(),s.forEach(m),d=c(t),o=F(t,"H1",{class:!0,id:!0,"data-svelte-h":!0}),dt(o)!=="svelte-1t3q6bl"&&(o.innerHTML=_),g=c(t),y=F(t,"P",{class:!0,"data-svelte-h":!0}),dt(y)!=="svelte-sevu1v"&&(y.textContent=U),N=c(t),H=F(t,"HR",{class:!0}),T=c(t),M=F(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),dt(M)!=="svelte-1nrswfb"&&(M.innerHTML=V),j=c(t),C&&C.l(t),h=c(t),I(w.$$.fragment,t),a=c(t),I(f.$$.fragment,t),K=c(t),I(x.$$.fragment,t),J=c(t),B=F(t,"HR",{class:!0}),O=c(t),Q=F(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),dt(Q)!=="svelte-hza9vx"&&(Q.innerHTML=at),W=c(t),E&&E.l(t),G=c(t),I(k.$$.fragment,t),it=c(t),I(Z.$$.fragment,t),mt=c(t),lt=F(t,"HR",{class:!0}),nt=c(t),P=F(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),dt(P)!=="svelte-jaay4x"&&(P.innerHTML=gt),_t=c(t),R&&R.l(t),ot=c(t),I(tt.$$.fragment,t),this.h()},h(){$(r,"name","twitter:card"),$(r,"content","summary_large_image"),$(e,"name","twitter:site"),$(e,"content","@evidence_dev"),$(o,"class","markdown"),$(o,"id","modalidades-de-licitação"),$(y,"class","markdown"),$(H,"class","markdown"),$(M,"class","markdown"),$(M,"id","visão-geral"),$(B,"class","markdown"),$(Q,"class","markdown"),$(Q,"id","ranking-por-quantidade"),$(lt,"class","markdown"),$(P,"class","markdown"),$(P,"id","taxa-de-aditivos-por-modalidade")},m(t,s){X&&X.m(t,s),n(t,i,s),st.m(document.head,null),ft(document.head,r),ft(document.head,e),Y&&Y.m(document.head,null),ft(document.head,l),n(t,d,s),n(t,o,s),n(t,g,s),n(t,y,s),n(t,N,s),n(t,H,s),n(t,T,s),n(t,M,s),n(t,j,s),C&&C.m(t,s),n(t,h,s),D(w,t,s),n(t,a,s),D(f,t,s),n(t,K,s),D(x,t,s),n(t,J,s),n(t,B,s),n(t,O,s),n(t,Q,s),n(t,W,s),E&&E.m(t,s),n(t,G,s),D(k,t,s),n(t,it,s),D(Z,t,s),n(t,mt,s),n(t,lt,s),n(t,nt,s),n(t,P,s),n(t,_t,s),R&&R.m(t,s),n(t,ot,s),D(tt,t,s),ut=!0},p(t,[s]){typeof v<"u"&&v.title&&v.hide_title!==!0&&X.p(t,s),st.p(t,s),typeof v=="object"&&Y.p(t,s),t[0]?C?(C.p(t,s),s&1&&b(C,1)):(C=Ft(t),C.c(),b(C,1),C.m(h.parentNode,h)):C&&(vt(),q(C,1,1,()=>{C=null}),$t());const yt={};s&1&&(yt.data=t[0]),w.$set(yt);const wt={};s&1&&(wt.data=t[0]),f.$set(wt);const Tt={};s&1&&(Tt.data=t[0]),x.$set(Tt),t[1]?E?(E.p(t,s),s&2&&b(E,1)):(E=At(t),E.c(),b(E,1),E.m(G.parentNode,G)):E&&(vt(),q(E,1,1,()=>{E=null}),$t());const Mt={};s&2&&(Mt.data=t[1]),k.$set(Mt);const pt={};s&2&&(pt.data=t[1]),s&1073741824&&(pt.$$scope={dirty:s,ctx:t}),Z.$set(pt),t[2]?R?(R.p(t,s),s&4&&b(R,1)):(R=St(t),R.c(),b(R,1),R.m(ot.parentNode,ot)):R&&(vt(),q(R,1,1,()=>{R=null}),$t());const Ct={};s&4&&(Ct.data=t[2]),tt.$set(Ct)},i(t){ut||(b(C),b(w.$$.fragment,t),b(f.$$.fragment,t),b(x.$$.fragment,t),b(E),b(k.$$.fragment,t),b(Z.$$.fragment,t),b(R),b(tt.$$.fragment,t),ut=!0)},o(t){q(C),q(w.$$.fragment,t),q(f.$$.fragment,t),q(x.$$.fragment,t),q(E),q(k.$$.fragment,t),q(Z.$$.fragment,t),q(R),q(tt.$$.fragment,t),ut=!1},d(t){t&&(m(i),m(d),m(o),m(g),m(y),m(N),m(H),m(T),m(M),m(j),m(h),m(a),m(K),m(J),m(B),m(O),m(Q),m(W),m(G),m(it),m(mt),m(lt),m(nt),m(P),m(_t),m(ot)),X&&X.d(t),st.d(t),m(r),m(e),Y&&Y.d(t),m(l),C&&C.d(t),S(w,t),S(f,t),S(x,t),E&&E.d(t),S(k,t),S(Z,t),R&&R.d(t),S(tt,t)}}}const v={title:"Modalidades de Licitação"};function de(u,i,r){let e,l;Et(u,Zt,k=>r(17,e=k)),Et(u,Ht,k=>r(23,l=k));let{data:d}=i,{data:o={},customFormattingSettings:_,__db:g,inputs:y}=d;Nt(Ht,l="a86f17ea9a88991c14851c0ef716a3e1",l);let U=Xt(Jt(y));Qt(U.subscribe(k=>y=k)),Vt(Kt,{getCustomFormats:()=>_.customFormats||[]});const N=(k,it)=>Wt(g.query,k,{query_name:it});Yt(N),e.params,jt(()=>!0);let H={initialData:void 0,initialError:void 0},T=rt`select
    count(*)                    as total_modalidades,
    sum(qt_contratos)           as total_contratos,
    sum(vl_total_atual)         as vl_total
from compras.dim_modalidades`,M=`select
    count(*)                    as total_modalidades,
    sum(qt_contratos)           as total_contratos,
    sum(vl_total_atual)         as vl_total
from compras.dim_modalidades`;o.kpis_modalidades_data&&(o.kpis_modalidades_data instanceof Error?H.initialError=o.kpis_modalidades_data:H.initialData=o.kpis_modalidades_data,o.kpis_modalidades_columns&&(H.knownColumns=o.kpis_modalidades_columns));let V,j=!1;const h=bt.createReactive({callback:k=>{r(0,V=k)},execFn:N},{id:"kpis_modalidades",...H});h(M,{noResolve:T,...H}),globalThis[Symbol.for("kpis_modalidades")]={get value(){return V}};let w={initialData:void 0,initialError:void 0},a=rt`select
    rank_por_quantidade                             as ranking,
    nm_modalidade                                   as modalidade,
    qt_contratos,
    qt_orgaos_distintos                             as orgaos,
    qt_fornecedores_distintos                       as fornecedores,
    vl_total_atual                                  as vl_total,
    round(perc_sobre_total_qt::numeric, 2)          as perc_qt,
    round(perc_sobre_total_valor::numeric, 2)       as perc_valor,
    round(perc_contratos_com_aditivo::numeric, 2)   as perc_aditivo
from compras.dim_modalidades
order by ranking`,f=`select
    rank_por_quantidade                             as ranking,
    nm_modalidade                                   as modalidade,
    qt_contratos,
    qt_orgaos_distintos                             as orgaos,
    qt_fornecedores_distintos                       as fornecedores,
    vl_total_atual                                  as vl_total,
    round(perc_sobre_total_qt::numeric, 2)          as perc_qt,
    round(perc_sobre_total_valor::numeric, 2)       as perc_valor,
    round(perc_contratos_com_aditivo::numeric, 2)   as perc_aditivo
from compras.dim_modalidades
order by ranking`;o.modalidades_qt_data&&(o.modalidades_qt_data instanceof Error?w.initialError=o.modalidades_qt_data:w.initialData=o.modalidades_qt_data,o.modalidades_qt_columns&&(w.knownColumns=o.modalidades_qt_columns));let K,x=!1;const J=bt.createReactive({callback:k=>{r(1,K=k)},execFn:N},{id:"modalidades_qt",...w});J(f,{noResolve:a,...w}),globalThis[Symbol.for("modalidades_qt")]={get value(){return K}};let B={initialData:void 0,initialError:void 0},O=rt`select
    nm_modalidade                                       as modalidade,
    round(perc_contratos_com_aditivo::numeric, 2)       as perc_aditivo,
    qt_contratos,
    vl_total_aditado                                    as vl_aditado
from compras.dim_modalidades
where nm_modalidade != 'Não informado'
order by perc_aditivo desc`,Q=`select
    nm_modalidade                                       as modalidade,
    round(perc_contratos_com_aditivo::numeric, 2)       as perc_aditivo,
    qt_contratos,
    vl_total_aditado                                    as vl_aditado
from compras.dim_modalidades
where nm_modalidade != 'Não informado'
order by perc_aditivo desc`;o.aditivos_modalidade_data&&(o.aditivos_modalidade_data instanceof Error?B.initialError=o.aditivos_modalidade_data:B.initialData=o.aditivos_modalidade_data,o.aditivos_modalidade_columns&&(B.knownColumns=o.aditivos_modalidade_columns));let at,W=!1;const G=bt.createReactive({callback:k=>{r(2,at=k)},execFn:N},{id:"aditivos_modalidade",...B});return G(Q,{noResolve:O,...B}),globalThis[Symbol.for("aditivos_modalidade")]={get value(){return at}},u.$$set=k=>{"data"in k&&r(3,d=k.data)},u.$$.update=()=>{u.$$.dirty&8&&r(4,{data:o={},customFormattingSettings:_,__db:g}=d,o),u.$$.dirty&16&&zt.set(Object.keys(o).length>0),u.$$.dirty&131072&&e.params,u.$$.dirty&480&&(T||!j?T||(h(M,{noResolve:T,...H}),r(8,j=!0)):h(M,{noResolve:T})),u.$$.dirty&7680&&(a||!x?a||(J(f,{noResolve:a,...w}),r(12,x=!0)):J(f,{noResolve:a})),u.$$.dirty&122880&&(O||!W?O||(G(Q,{noResolve:O,...B}),r(16,W=!0)):G(Q,{noResolve:O}))},r(6,T=rt`select
    count(*)                    as total_modalidades,
    sum(qt_contratos)           as total_contratos,
    sum(vl_total_atual)         as vl_total
from compras.dim_modalidades`),r(7,M=`select
    count(*)                    as total_modalidades,
    sum(qt_contratos)           as total_contratos,
    sum(vl_total_atual)         as vl_total
from compras.dim_modalidades`),r(10,a=rt`select
    rank_por_quantidade                             as ranking,
    nm_modalidade                                   as modalidade,
    qt_contratos,
    qt_orgaos_distintos                             as orgaos,
    qt_fornecedores_distintos                       as fornecedores,
    vl_total_atual                                  as vl_total,
    round(perc_sobre_total_qt::numeric, 2)          as perc_qt,
    round(perc_sobre_total_valor::numeric, 2)       as perc_valor,
    round(perc_contratos_com_aditivo::numeric, 2)   as perc_aditivo
from compras.dim_modalidades
order by ranking`),r(11,f=`select
    rank_por_quantidade                             as ranking,
    nm_modalidade                                   as modalidade,
    qt_contratos,
    qt_orgaos_distintos                             as orgaos,
    qt_fornecedores_distintos                       as fornecedores,
    vl_total_atual                                  as vl_total,
    round(perc_sobre_total_qt::numeric, 2)          as perc_qt,
    round(perc_sobre_total_valor::numeric, 2)       as perc_valor,
    round(perc_contratos_com_aditivo::numeric, 2)   as perc_aditivo
from compras.dim_modalidades
order by ranking`),r(14,O=rt`select
    nm_modalidade                                       as modalidade,
    round(perc_contratos_com_aditivo::numeric, 2)       as perc_aditivo,
    qt_contratos,
    vl_total_aditado                                    as vl_aditado
from compras.dim_modalidades
where nm_modalidade != 'Não informado'
order by perc_aditivo desc`),r(15,Q=`select
    nm_modalidade                                       as modalidade,
    round(perc_contratos_com_aditivo::numeric, 2)       as perc_aditivo,
    qt_contratos,
    vl_total_aditado                                    as vl_aditado
from compras.dim_modalidades
where nm_modalidade != 'Não informado'
order by perc_aditivo desc`),[V,K,at,d,o,H,T,M,j,w,a,f,x,B,O,Q,W,e]}class be extends Ot{constructor(i){super(),Gt(this,i,de,se,It,{data:3})}}export{be as component};
