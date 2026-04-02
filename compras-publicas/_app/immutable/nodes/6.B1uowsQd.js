import{s as Mt,d as u,i as m,a as mt,b as d,c as v,h as Ht,e as x,f as ct,g as lt,j as $,k as R,l as kt,m as Ft,o as St,n as Dt,p as It,q as tt,r as Lt,t as Qt,u as Vt}from"../chunks/scheduler.q7auac3b.js";import{S as Nt,i as jt,d as H,t as h,a as b,c as dt,m as F,b as S,e as D,g as pt}from"../chunks/index.B_vRVscZ.js";import{D as Ot,e as Ut,s as Bt,Q as vt,p as Pt,C as Z,a as qt,r as At,b as Gt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BdKGjBcs.js";import{w as zt}from"../chunks/entry.D_3g4xoz.js";import{h as nt,p as Kt}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Xt}from"../chunks/stores.D9WP5eWk.js";import{B as Yt,Q as gt}from"../chunks/BarChart.wW3IZlSb.js";import{L as $t}from"../chunks/LineChart.BPFmihZ1.js";function Jt(c){let e,s=p.title+"",a;return{c(){e=R("h1"),a=Vt(s),this.h()},l(i){e=x(i,"H1",{class:!0});var r=Lt(e);a=Qt(r,s),r.forEach(u),this.h()},h(){d(e,"class","title")},m(i,r){m(i,e,r),mt(e,a)},p:tt,d(i){i&&u(e)}}}function Wt(c){return{c(){this.h()},l(e){this.h()},h(){document.title="Evidence"},m:tt,p:tt,d:tt}}function Zt(c){let e,s,a,i,r;return document.title=e=p.title,{c(){s=$(),a=R("meta"),i=$(),r=R("meta"),this.h()},l(o){s=v(o),a=x(o,"META",{property:!0,content:!0}),i=v(o),r=x(o,"META",{name:!0,content:!0}),this.h()},h(){var o,_;d(a,"property","og:title"),d(a,"content",((o=p.og)==null?void 0:o.title)??p.title),d(r,"name","twitter:title"),d(r,"content",((_=p.og)==null?void 0:_.title)??p.title)},m(o,_){m(o,s,_),m(o,a,_),m(o,i,_),m(o,r,_)},p(o,_){_&0&&e!==(e=p.title)&&(document.title=e)},d(o){o&&(u(s),u(a),u(i),u(r))}}}function ta(c){var r,o;let e,s,a=(p.description||((r=p.og)==null?void 0:r.description))&&aa(),i=((o=p.og)==null?void 0:o.image)&&ea();return{c(){a&&a.c(),e=$(),i&&i.c(),s=ct()},l(_){a&&a.l(_),e=v(_),i&&i.l(_),s=ct()},m(_,y){a&&a.m(_,y),m(_,e,y),i&&i.m(_,y),m(_,s,y)},p(_,y){var w,j;(p.description||(w=p.og)!=null&&w.description)&&a.p(_,y),(j=p.og)!=null&&j.image&&i.p(_,y)},d(_){_&&(u(e),u(s)),a&&a.d(_),i&&i.d(_)}}}function aa(c){let e,s,a,i,r;return{c(){e=R("meta"),s=$(),a=R("meta"),i=$(),r=R("meta"),this.h()},l(o){e=x(o,"META",{name:!0,content:!0}),s=v(o),a=x(o,"META",{property:!0,content:!0}),i=v(o),r=x(o,"META",{name:!0,content:!0}),this.h()},h(){var o,_,y;d(e,"name","description"),d(e,"content",p.description??((o=p.og)==null?void 0:o.description)),d(a,"property","og:description"),d(a,"content",((_=p.og)==null?void 0:_.description)??p.description),d(r,"name","twitter:description"),d(r,"content",((y=p.og)==null?void 0:y.description)??p.description)},m(o,_){m(o,e,_),m(o,s,_),m(o,a,_),m(o,i,_),m(o,r,_)},p:tt,d(o){o&&(u(e),u(s),u(a),u(i),u(r))}}}function ea(c){let e,s,a;return{c(){e=R("meta"),s=$(),a=R("meta"),this.h()},l(i){e=x(i,"META",{property:!0,content:!0}),s=v(i),a=x(i,"META",{name:!0,content:!0}),this.h()},h(){var i,r;d(e,"property","og:image"),d(e,"content",qt((i=p.og)==null?void 0:i.image)),d(a,"name","twitter:image"),d(a,"content",qt((r=p.og)==null?void 0:r.image))},m(i,r){m(i,e,r),m(i,s,r),m(i,a,r)},p:tt,d(i){i&&(u(e),u(s),u(a))}}}function Et(c){let e,s;return e=new gt({props:{queryID:"evolucao_anual",queryResult:c[0]}}),{c(){D(e.$$.fragment)},l(a){S(e.$$.fragment,a)},m(a,i){F(e,a,i),s=!0},p(a,i){const r={};i&1&&(r.queryResult=a[0]),e.$set(r)},i(a){s||(b(e.$$.fragment,a),s=!0)},o(a){h(e.$$.fragment,a),s=!1},d(a){H(e,a)}}}function oa(c){let e,s,a,i,r,o,_,y,w,j,M,C,T,k,L,V;return e=new Z({props:{id:"ano",title:"Ano"}}),a=new Z({props:{id:"qt_contratos",title:"Contratos",fmt:"num0"}}),r=new Z({props:{id:"qt_fornecedores",title:"Fornecedores",fmt:"num0"}}),_=new Z({props:{id:"qt_orgaos",title:"Órgãos",fmt:"num0"}}),w=new Z({props:{id:"vl_total_original",title:"Valor Original",fmt:"num1b"}}),M=new Z({props:{id:"vl_total_atual",title:"Valor Atual",fmt:"num1b"}}),T=new Z({props:{id:"vl_total_aditado",title:"Valor Aditado",fmt:"num1b"}}),L=new Z({props:{id:"vl_medio",title:"Valor Médio",fmt:"num1k"}}),{c(){D(e.$$.fragment),s=$(),D(a.$$.fragment),i=$(),D(r.$$.fragment),o=$(),D(_.$$.fragment),y=$(),D(w.$$.fragment),j=$(),D(M.$$.fragment),C=$(),D(T.$$.fragment),k=$(),D(L.$$.fragment)},l(n){S(e.$$.fragment,n),s=v(n),S(a.$$.fragment,n),i=v(n),S(r.$$.fragment,n),o=v(n),S(_.$$.fragment,n),y=v(n),S(w.$$.fragment,n),j=v(n),S(M.$$.fragment,n),C=v(n),S(T.$$.fragment,n),k=v(n),S(L.$$.fragment,n)},m(n,f){F(e,n,f),m(n,s,f),F(a,n,f),m(n,i,f),F(r,n,f),m(n,o,f),F(_,n,f),m(n,y,f),F(w,n,f),m(n,j,f),F(M,n,f),m(n,C,f),F(T,n,f),m(n,k,f),F(L,n,f),V=!0},p:tt,i(n){V||(b(e.$$.fragment,n),b(a.$$.fragment,n),b(r.$$.fragment,n),b(_.$$.fragment,n),b(w.$$.fragment,n),b(M.$$.fragment,n),b(T.$$.fragment,n),b(L.$$.fragment,n),V=!0)},o(n){h(e.$$.fragment,n),h(a.$$.fragment,n),h(r.$$.fragment,n),h(_.$$.fragment,n),h(w.$$.fragment,n),h(M.$$.fragment,n),h(T.$$.fragment,n),h(L.$$.fragment,n),V=!1},d(n){n&&(u(s),u(i),u(o),u(y),u(j),u(C),u(k)),H(e,n),H(a,n),H(r,n),H(_,n),H(w,n),H(M,n),H(T,n),H(L,n)}}}function Ct(c){let e,s;return e=new gt({props:{queryID:"evolucao_mensal",queryResult:c[1]}}),{c(){D(e.$$.fragment)},l(a){S(e.$$.fragment,a)},m(a,i){F(e,a,i),s=!0},p(a,i){const r={};i&2&&(r.queryResult=a[1]),e.$set(r)},i(a){s||(b(e.$$.fragment,a),s=!0)},o(a){h(e.$$.fragment,a),s=!1},d(a){H(e,a)}}}function xt(c){let e,s;return e=new gt({props:{queryID:"aditivos_anual",queryResult:c[2]}}),{c(){D(e.$$.fragment)},l(a){S(e.$$.fragment,a)},m(a,i){F(e,a,i),s=!0},p(a,i){const r={};i&4&&(r.queryResult=a[2]),e.$set(r)},i(a){s||(b(e.$$.fragment,a),s=!0)},o(a){h(e.$$.fragment,a),s=!1},d(a){H(e,a)}}}function na(c){let e,s,a,i,r,o,_='<a href="#evolução-temporal">Evolução Temporal</a>',y,w,j="Análise da evolução dos contratos públicos de Santa Catarina ao longo do tempo.",M,C,T,k,L='<a href="#evolução-anual">Evolução Anual</a>',V,n,f,O,Q,X,U,Y,N,B,I,at='<a href="#evolução-mensal">Evolução Mensal</a>',J,P,g,et,st,rt,G,bt='<a href="#aditivos-ao-longo-do-tempo">Aditivos ao Longo do Tempo</a>',ut,ot,W,_t,z=typeof p<"u"&&p.title&&p.hide_title!==!0&&Jt();function Rt(t,l){return typeof p<"u"&&p.title?Zt:Wt}let it=Rt()(c),K=typeof p=="object"&&ta(),q=c[0]&&Et(c);f=new $t({props:{data:c[0],x:"ano",y:"qt_contratos",title:"Quantidade de Contratos por Ano",xAxisTitle:"Ano",yAxisTitle:"Quantidade",xType:"category"}}),Q=new $t({props:{data:c[0],x:"ano",y:"vl_total_atual",title:"Valor Total Contratado por Ano (R$)",xAxisTitle:"Ano",yAxisTitle:"Valor (R$)",xType:"category"}}),U=new Ot({props:{data:c[0],title:"Resumo Anual",$$slots:{default:[oa]},$$scope:{ctx:c}}});let A=c[1]&&Ct(c);g=new $t({props:{data:c[1],x:"ano_mes",y:"qt_contratos",title:"Quantidade de Contratos por Mês",xAxisTitle:"Mês",yAxisTitle:"Quantidade",xType:"category"}});let E=c[2]&&xt(c);return W=new Yt({props:{data:c[2],x:"ano",y:["com_aditivo","sem_aditivo"],title:"Contratos Com e Sem Aditivo por Ano",xAxisTitle:"Ano",yAxisTitle:"Quantidade",xType:"category",type:"stacked"}}),{c(){z&&z.c(),e=$(),it.c(),s=R("meta"),a=R("meta"),K&&K.c(),i=ct(),r=$(),o=R("h1"),o.innerHTML=_,y=$(),w=R("p"),w.textContent=j,M=$(),C=R("hr"),T=$(),k=R("h2"),k.innerHTML=L,V=$(),q&&q.c(),n=$(),D(f.$$.fragment),O=$(),D(Q.$$.fragment),X=$(),D(U.$$.fragment),Y=$(),N=R("hr"),B=$(),I=R("h2"),I.innerHTML=at,J=$(),A&&A.c(),P=$(),D(g.$$.fragment),et=$(),st=R("hr"),rt=$(),G=R("h2"),G.innerHTML=bt,ut=$(),E&&E.c(),ot=$(),D(W.$$.fragment),this.h()},l(t){z&&z.l(t),e=v(t);const l=Ht("svelte-2igo1p",document.head);it.l(l),s=x(l,"META",{name:!0,content:!0}),a=x(l,"META",{name:!0,content:!0}),K&&K.l(l),i=ct(),l.forEach(u),r=v(t),o=x(t,"H1",{class:!0,id:!0,"data-svelte-h":!0}),lt(o)!=="svelte-rxw1co"&&(o.innerHTML=_),y=v(t),w=x(t,"P",{class:!0,"data-svelte-h":!0}),lt(w)!=="svelte-cclsxb"&&(w.textContent=j),M=v(t),C=x(t,"HR",{class:!0}),T=v(t),k=x(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),lt(k)!=="svelte-1i7h9en"&&(k.innerHTML=L),V=v(t),q&&q.l(t),n=v(t),S(f.$$.fragment,t),O=v(t),S(Q.$$.fragment,t),X=v(t),S(U.$$.fragment,t),Y=v(t),N=x(t,"HR",{class:!0}),B=v(t),I=x(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),lt(I)!=="svelte-imqbu4"&&(I.innerHTML=at),J=v(t),A&&A.l(t),P=v(t),S(g.$$.fragment,t),et=v(t),st=x(t,"HR",{class:!0}),rt=v(t),G=x(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),lt(G)!=="svelte-1pz4jy6"&&(G.innerHTML=bt),ut=v(t),E&&E.l(t),ot=v(t),S(W.$$.fragment,t),this.h()},h(){d(s,"name","twitter:card"),d(s,"content","summary_large_image"),d(a,"name","twitter:site"),d(a,"content","@evidence_dev"),d(o,"class","markdown"),d(o,"id","evolução-temporal"),d(w,"class","markdown"),d(C,"class","markdown"),d(k,"class","markdown"),d(k,"id","evolução-anual"),d(N,"class","markdown"),d(I,"class","markdown"),d(I,"id","evolução-mensal"),d(st,"class","markdown"),d(G,"class","markdown"),d(G,"id","aditivos-ao-longo-do-tempo")},m(t,l){z&&z.m(t,l),m(t,e,l),it.m(document.head,null),mt(document.head,s),mt(document.head,a),K&&K.m(document.head,null),mt(document.head,i),m(t,r,l),m(t,o,l),m(t,y,l),m(t,w,l),m(t,M,l),m(t,C,l),m(t,T,l),m(t,k,l),m(t,V,l),q&&q.m(t,l),m(t,n,l),F(f,t,l),m(t,O,l),F(Q,t,l),m(t,X,l),F(U,t,l),m(t,Y,l),m(t,N,l),m(t,B,l),m(t,I,l),m(t,J,l),A&&A.m(t,l),m(t,P,l),F(g,t,l),m(t,et,l),m(t,st,l),m(t,rt,l),m(t,G,l),m(t,ut,l),E&&E.m(t,l),m(t,ot,l),F(W,t,l),_t=!0},p(t,[l]){typeof p<"u"&&p.title&&p.hide_title!==!0&&z.p(t,l),it.p(t,l),typeof p=="object"&&K.p(t,l),t[0]?q?(q.p(t,l),l&1&&b(q,1)):(q=Et(t),q.c(),b(q,1),q.m(n.parentNode,n)):q&&(pt(),h(q,1,1,()=>{q=null}),dt());const yt={};l&1&&(yt.data=t[0]),f.$set(yt);const wt={};l&1&&(wt.data=t[0]),Q.$set(wt);const ft={};l&1&&(ft.data=t[0]),l&1073741824&&(ft.$$scope={dirty:l,ctx:t}),U.$set(ft),t[1]?A?(A.p(t,l),l&2&&b(A,1)):(A=Ct(t),A.c(),b(A,1),A.m(P.parentNode,P)):A&&(pt(),h(A,1,1,()=>{A=null}),dt());const ht={};l&2&&(ht.data=t[1]),g.$set(ht),t[2]?E?(E.p(t,l),l&4&&b(E,1)):(E=xt(t),E.c(),b(E,1),E.m(ot.parentNode,ot)):E&&(pt(),h(E,1,1,()=>{E=null}),dt());const Tt={};l&4&&(Tt.data=t[2]),W.$set(Tt)},i(t){_t||(b(q),b(f.$$.fragment,t),b(Q.$$.fragment,t),b(U.$$.fragment,t),b(A),b(g.$$.fragment,t),b(E),b(W.$$.fragment,t),_t=!0)},o(t){h(q),h(f.$$.fragment,t),h(Q.$$.fragment,t),h(U.$$.fragment,t),h(A),h(g.$$.fragment,t),h(E),h(W.$$.fragment,t),_t=!1},d(t){t&&(u(e),u(r),u(o),u(y),u(w),u(M),u(C),u(T),u(k),u(V),u(n),u(O),u(X),u(Y),u(N),u(B),u(I),u(J),u(P),u(et),u(st),u(rt),u(G),u(ut),u(ot)),z&&z.d(t),it.d(t),u(s),u(a),K&&K.d(t),u(i),q&&q.d(t),H(f,t),H(Q,t),H(U,t),A&&A.d(t),H(g,t),E&&E.d(t),H(W,t)}}}const p={title:"Evolução Temporal"};function sa(c,e,s){let a,i;kt(c,Xt,g=>s(17,a=g)),kt(c,At,g=>s(23,i=g));let{data:r}=e,{data:o={},customFormattingSettings:_,__db:y,inputs:w}=r;Ft(At,i="8a22f3564b91795d24cf535add5d5d2b",i);let j=Ut(zt(w));St(j.subscribe(g=>w=g)),Dt(Gt,{getCustomFormats:()=>_.customFormats||[]});const M=(g,et)=>Kt(y.query,g,{query_name:et});Bt(M),a.params,It(()=>!0);let C={initialData:void 0,initialError:void 0},T=nt`select
    ano_assinatura::integer                     as ano,
    count(*)                                    as qt_contratos,
    count(distinct id_contratado)               as qt_fornecedores,
    count(distinct cod_unidade_gestora)         as qt_orgaos,
    sum(vl_original)                            as vl_total_original,
    sum(vl_atual)                               as vl_total_atual,
    sum(coalesce(vl_aditado, 0))                as vl_total_aditado,
    avg(vl_original)                            as vl_medio
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura
order by ano_assinatura`,k=`select
    ano_assinatura::integer                     as ano,
    count(*)                                    as qt_contratos,
    count(distinct id_contratado)               as qt_fornecedores,
    count(distinct cod_unidade_gestora)         as qt_orgaos,
    sum(vl_original)                            as vl_total_original,
    sum(vl_atual)                               as vl_total_atual,
    sum(coalesce(vl_aditado, 0))                as vl_total_aditado,
    avg(vl_original)                            as vl_medio
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura
order by ano_assinatura`;o.evolucao_anual_data&&(o.evolucao_anual_data instanceof Error?C.initialError=o.evolucao_anual_data:C.initialData=o.evolucao_anual_data,o.evolucao_anual_columns&&(C.knownColumns=o.evolucao_anual_columns));let L,V=!1;const n=vt.createReactive({callback:g=>{s(0,L=g)},execFn:M},{id:"evolucao_anual",...C});n(k,{noResolve:T,...C}),globalThis[Symbol.for("evolucao_anual")]={get value(){return L}};let f={initialData:void 0,initialError:void 0},O=nt`select
    ano_assinatura::integer || '-' || lpad(mes_assinatura::text, 2, '0') as ano_mes,
    ano_assinatura::integer             as ano,
    mes_assinatura::integer             as mes,
    count(*)                            as qt_contratos,
    sum(vl_atual)                       as vl_total_atual
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura, mes_assinatura
order by ano_assinatura, mes_assinatura`,Q=`select
    ano_assinatura::integer || '-' || lpad(mes_assinatura::text, 2, '0') as ano_mes,
    ano_assinatura::integer             as ano,
    mes_assinatura::integer             as mes,
    count(*)                            as qt_contratos,
    sum(vl_atual)                       as vl_total_atual
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura, mes_assinatura
order by ano_assinatura, mes_assinatura`;o.evolucao_mensal_data&&(o.evolucao_mensal_data instanceof Error?f.initialError=o.evolucao_mensal_data:f.initialData=o.evolucao_mensal_data,o.evolucao_mensal_columns&&(f.knownColumns=o.evolucao_mensal_columns));let X,U=!1;const Y=vt.createReactive({callback:g=>{s(1,X=g)},execFn:M},{id:"evolucao_mensal",...f});Y(Q,{noResolve:O,...f}),globalThis[Symbol.for("evolucao_mensal")]={get value(){return X}};let N={initialData:void 0,initialError:void 0},B=nt`select
    ano_assinatura::integer                                     as ano,
    count(case when fl_possui_aditivo then 1 end)               as com_aditivo,
    count(case when not fl_possui_aditivo then 1 end)           as sem_aditivo,
    sum(coalesce(vl_aditado, 0))                                as vl_total_aditado
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura
order by ano_assinatura`,I=`select
    ano_assinatura::integer                                     as ano,
    count(case when fl_possui_aditivo then 1 end)               as com_aditivo,
    count(case when not fl_possui_aditivo then 1 end)           as sem_aditivo,
    sum(coalesce(vl_aditado, 0))                                as vl_total_aditado
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura
order by ano_assinatura`;o.aditivos_anual_data&&(o.aditivos_anual_data instanceof Error?N.initialError=o.aditivos_anual_data:N.initialData=o.aditivos_anual_data,o.aditivos_anual_columns&&(N.knownColumns=o.aditivos_anual_columns));let at,J=!1;const P=vt.createReactive({callback:g=>{s(2,at=g)},execFn:M},{id:"aditivos_anual",...N});return P(I,{noResolve:B,...N}),globalThis[Symbol.for("aditivos_anual")]={get value(){return at}},c.$$set=g=>{"data"in g&&s(3,r=g.data)},c.$$.update=()=>{c.$$.dirty&8&&s(4,{data:o={},customFormattingSettings:_,__db:y}=r,o),c.$$.dirty&16&&Pt.set(Object.keys(o).length>0),c.$$.dirty&131072&&a.params,c.$$.dirty&480&&(T||!V?T||(n(k,{noResolve:T,...C}),s(8,V=!0)):n(k,{noResolve:T})),c.$$.dirty&7680&&(O||!U?O||(Y(Q,{noResolve:O,...f}),s(12,U=!0)):Y(Q,{noResolve:O})),c.$$.dirty&122880&&(B||!J?B||(P(I,{noResolve:B,...N}),s(16,J=!0)):P(I,{noResolve:B}))},s(6,T=nt`select
    ano_assinatura::integer                     as ano,
    count(*)                                    as qt_contratos,
    count(distinct id_contratado)               as qt_fornecedores,
    count(distinct cod_unidade_gestora)         as qt_orgaos,
    sum(vl_original)                            as vl_total_original,
    sum(vl_atual)                               as vl_total_atual,
    sum(coalesce(vl_aditado, 0))                as vl_total_aditado,
    avg(vl_original)                            as vl_medio
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura
order by ano_assinatura`),s(7,k=`select
    ano_assinatura::integer                     as ano,
    count(*)                                    as qt_contratos,
    count(distinct id_contratado)               as qt_fornecedores,
    count(distinct cod_unidade_gestora)         as qt_orgaos,
    sum(vl_original)                            as vl_total_original,
    sum(vl_atual)                               as vl_total_atual,
    sum(coalesce(vl_aditado, 0))                as vl_total_aditado,
    avg(vl_original)                            as vl_medio
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura
order by ano_assinatura`),s(10,O=nt`select
    ano_assinatura::integer || '-' || lpad(mes_assinatura::text, 2, '0') as ano_mes,
    ano_assinatura::integer             as ano,
    mes_assinatura::integer             as mes,
    count(*)                            as qt_contratos,
    sum(vl_atual)                       as vl_total_atual
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura, mes_assinatura
order by ano_assinatura, mes_assinatura`),s(11,Q=`select
    ano_assinatura::integer || '-' || lpad(mes_assinatura::text, 2, '0') as ano_mes,
    ano_assinatura::integer             as ano,
    mes_assinatura::integer             as mes,
    count(*)                            as qt_contratos,
    sum(vl_atual)                       as vl_total_atual
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura, mes_assinatura
order by ano_assinatura, mes_assinatura`),s(14,B=nt`select
    ano_assinatura::integer                                     as ano,
    count(case when fl_possui_aditivo then 1 end)               as com_aditivo,
    count(case when not fl_possui_aditivo then 1 end)           as sem_aditivo,
    sum(coalesce(vl_aditado, 0))                                as vl_total_aditado
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura
order by ano_assinatura`),s(15,I=`select
    ano_assinatura::integer                                     as ano,
    count(case when fl_possui_aditivo then 1 end)               as com_aditivo,
    count(case when not fl_possui_aditivo then 1 end)           as sem_aditivo,
    sum(coalesce(vl_aditado, 0))                                as vl_total_aditado
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura
order by ano_assinatura`),[L,X,at,r,o,C,T,k,V,f,O,Q,U,N,B,I,J,a]}class pa extends Nt{constructor(e){super(),jt(this,e,sa,na,Mt,{data:3})}}export{pa as component};
