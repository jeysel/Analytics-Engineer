import{s as Pa,d as l,i as u,a as ka,b as p,c as d,h as ja,e as w,f as Ta,g as Y,j as f,k as y,l as Da,m as Ga,o as Ka,n as Xa,p as Ya,q as ia,r as Ja,t as Wa,u as Za}from"../chunks/scheduler.DjHbl-jX.js";import{S as at,i as tt,d as R,t as T,a as $,c as ha,m as L,b as F,e as Q,g as Aa}from"../chunks/index.DylIKcrZ.js";import{D as et,e as ot,s as st,Q as Ca,p as nt,C as na,a as Ia,r as Va,b as it}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.DSFIo5A3.js";import{w as rt}from"../chunks/entry.Zfzfp1xp.js";import{h as _a,p as lt}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as ut}from"../chunks/stores.BoDLYOPP.js";import{Q as xa}from"../chunks/QueryViewer.CHR4_CX6.js";import{B as _t}from"../chunks/BarChart.DK1ywQkt.js";import{L as Ea}from"../chunks/LineChart.BAVDScQW.js";function mt(c){let e,i=g.title+"",t;return{c(){e=y("h1"),t=Za(i),this.h()},l(r){e=w(r,"H1",{class:!0});var _=Ja(e);t=Wa(_,i),_.forEach(l),this.h()},h(){p(e,"class","title")},m(r,_){u(r,e,_),ka(e,t)},p:ia,d(r){r&&l(e)}}}function ct(c){return{c(){this.h()},l(e){this.h()},h(){document.title="Evidence"},m:ia,p:ia,d:ia}}function dt(c){let e,i,t,r,_;return document.title=e=g.title,{c(){i=f(),t=y("meta"),r=f(),_=y("meta"),this.h()},l(o){i=d(o),t=w(o,"META",{property:!0,content:!0}),r=d(o),_=w(o,"META",{name:!0,content:!0}),this.h()},h(){var o,m;p(t,"property","og:title"),p(t,"content",((o=g.og)==null?void 0:o.title)??g.title),p(_,"name","twitter:title"),p(_,"content",((m=g.og)==null?void 0:m.title)??g.title)},m(o,m){u(o,i,m),u(o,t,m),u(o,r,m),u(o,_,m)},p(o,m){m&0&&e!==(e=g.title)&&(document.title=e)},d(o){o&&(l(i),l(t),l(r),l(_))}}}function ft(c){var _,o;let e,i,t=(g.description||((_=g.og)==null?void 0:_.description))&&pt(),r=((o=g.og)==null?void 0:o.image)&&vt();return{c(){t&&t.c(),e=f(),r&&r.c(),i=Ta()},l(m){t&&t.l(m),e=d(m),r&&r.l(m),i=Ta()},m(m,b){t&&t.m(m,b),u(m,e,b),r&&r.m(m,b),u(m,i,b)},p(m,b){var E,S;(g.description||(E=g.og)!=null&&E.description)&&t.p(m,b),(S=g.og)!=null&&S.image&&r.p(m,b)},d(m){m&&(l(e),l(i)),t&&t.d(m),r&&r.d(m)}}}function pt(c){let e,i,t,r,_;return{c(){e=y("meta"),i=f(),t=y("meta"),r=f(),_=y("meta"),this.h()},l(o){e=w(o,"META",{name:!0,content:!0}),i=d(o),t=w(o,"META",{property:!0,content:!0}),r=d(o),_=w(o,"META",{name:!0,content:!0}),this.h()},h(){var o,m,b;p(e,"name","description"),p(e,"content",g.description??((o=g.og)==null?void 0:o.description)),p(t,"property","og:description"),p(t,"content",((m=g.og)==null?void 0:m.description)??g.description),p(_,"name","twitter:description"),p(_,"content",((b=g.og)==null?void 0:b.description)??g.description)},m(o,m){u(o,e,m),u(o,i,m),u(o,t,m),u(o,r,m),u(o,_,m)},p:ia,d(o){o&&(l(e),l(i),l(t),l(r),l(_))}}}function vt(c){let e,i,t;return{c(){e=y("meta"),i=f(),t=y("meta"),this.h()},l(r){e=w(r,"META",{property:!0,content:!0}),i=d(r),t=w(r,"META",{name:!0,content:!0}),this.h()},h(){var r,_;p(e,"property","og:image"),p(e,"content",Ia((r=g.og)==null?void 0:r.image)),p(t,"name","twitter:image"),p(t,"content",Ia((_=g.og)==null?void 0:_.image))},m(r,_){u(r,e,_),u(r,i,_),u(r,t,_)},p:ia,d(r){r&&(l(e),l(i),l(t))}}}function Ba(c){let e,i;return e=new xa({props:{queryID:"evolucao_anual",queryResult:c[0]}}),{c(){Q(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,r){L(e,t,r),i=!0},p(t,r){const _={};r&1&&(_.queryResult=t[0]),e.$set(_)},i(t){i||($(e.$$.fragment,t),i=!0)},o(t){T(e.$$.fragment,t),i=!1},d(t){R(e,t)}}}function gt(c){let e,i,t,r,_,o,m,b,E,S,k,O,q,x,D,V;return e=new na({props:{id:"ano",title:"Ano"}}),t=new na({props:{id:"qt_contratos",title:"Qtd. Contratos",fmt:"num0"}}),_=new na({props:{id:"qt_fornecedores",title:"Fornecedores",fmt:"num0"}}),m=new na({props:{id:"qt_orgaos",title:"Órgãos",fmt:"num0"}}),E=new na({props:{id:"vl_total_original",title:"Valor Original",fmt:"num1b"}}),k=new na({props:{id:"vl_total_atual",title:"Valor Atual",fmt:"num1b"}}),q=new na({props:{id:"vl_total_aditado",title:"Valor Aditado",fmt:"num1b"}}),D=new na({props:{id:"vl_medio",title:"Valor Médio",fmt:"num1k"}}),{c(){Q(e.$$.fragment),i=f(),Q(t.$$.fragment),r=f(),Q(_.$$.fragment),o=f(),Q(m.$$.fragment),b=f(),Q(E.$$.fragment),S=f(),Q(k.$$.fragment),O=f(),Q(q.$$.fragment),x=f(),Q(D.$$.fragment)},l(s){F(e.$$.fragment,s),i=d(s),F(t.$$.fragment,s),r=d(s),F(_.$$.fragment,s),o=d(s),F(m.$$.fragment,s),b=d(s),F(E.$$.fragment,s),S=d(s),F(k.$$.fragment,s),O=d(s),F(q.$$.fragment,s),x=d(s),F(D.$$.fragment,s)},m(s,v){L(e,s,v),u(s,i,v),L(t,s,v),u(s,r,v),L(_,s,v),u(s,o,v),L(m,s,v),u(s,b,v),L(E,s,v),u(s,S,v),L(k,s,v),u(s,O,v),L(q,s,v),u(s,x,v),L(D,s,v),V=!0},p:ia,i(s){V||($(e.$$.fragment,s),$(t.$$.fragment,s),$(_.$$.fragment,s),$(m.$$.fragment,s),$(E.$$.fragment,s),$(k.$$.fragment,s),$(q.$$.fragment,s),$(D.$$.fragment,s),V=!0)},o(s){T(e.$$.fragment,s),T(t.$$.fragment,s),T(_.$$.fragment,s),T(m.$$.fragment,s),T(E.$$.fragment,s),T(k.$$.fragment,s),T(q.$$.fragment,s),T(D.$$.fragment,s),V=!1},d(s){s&&(l(i),l(r),l(o),l(b),l(S),l(O),l(x)),R(e,s),R(t,s),R(_,s),R(m,s),R(E,s),R(k,s),R(q,s),R(D,s)}}}function Ua(c){let e,i;return e=new xa({props:{queryID:"evolucao_mensal",queryResult:c[1]}}),{c(){Q(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,r){L(e,t,r),i=!0},p(t,r){const _={};r&2&&(_.queryResult=t[1]),e.$set(_)},i(t){i||($(e.$$.fragment,t),i=!0)},o(t){T(e.$$.fragment,t),i=!1},d(t){R(e,t)}}}function za(c){let e,i;return e=new xa({props:{queryID:"aditivos_anual",queryResult:c[2]}}),{c(){Q(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,r){L(e,t,r),i=!0},p(t,r){const _={};r&4&&(_.queryResult=t[2]),e.$set(_)},i(t){i||($(e.$$.fragment,t),i=!0)},o(t){T(e.$$.fragment,t),i=!1},d(t){R(e,t)}}}function $t(c){let e,i,t,r,_,o,m='<p class="markdown">Como o volume e o valor das contratações públicas de Santa Catarina mudaram ao longo de 10 anos? Esta análise revela os ciclos de expansão e retração, os impactos de eventos externos e os padrões sazonais das compras governamentais.</p>',b,E,S,k,O='<a href="#como-evoluiu-o-volume-de-contratações">Como evoluiu o volume de contratações?</a>',q,x,D='O período analisado revela três fases distintas: <strong class="markdown">crescimento</strong> entre 2016 e 2018, <strong class="markdown">retração</strong> entre 2019 e 2021 — influenciada pela pandemia de COVID-19 — e <strong class="markdown">recuperação</strong> a partir de 2022, com novo pico em 2025.',V,s,v,U,I,J,z,W,H,N='<p class="markdown">📌 <strong class="markdown">Anos eleitorais:</strong> Em <strong class="markdown">2018</strong> e <strong class="markdown">2022</strong>, anos de eleição para o Governo do Estado, observa-se variação nos volumes contratados. Em 2022, o valor original registrado (R$ 39,8B) contrasta fortemente com o valor atualizado (R$ 15,7B), indicando possível concentração de contratos de longo prazo assinados no período pré-eleitoral.</p>',P,j,Z,B,M='<a href="#existe-sazonalidade-nas-contratações">Existe sazonalidade nas contratações?</a>',ra,aa,Ma='A análise mensal revela padrões recorrentes ao longo do ano. Meses como <strong class="markdown">março e outubro</strong> tendem a concentrar mais contratos — coincidindo com o início do ano fiscal e o período pré-eleitoral em anos de eleição.',fa,la,ta,pa,ma,va,G,Ha='<a href="#os-aditivos-cresceram-ao-longo-do-tempo">Os aditivos cresceram ao longo do tempo?</a>',ga,ea,Ra="A proporção de contratos com aditivos se mantém estável ao longo dos anos — o que indica que a prática de alteração contratual não aumentou proporcionalmente ao volume de contratos. A maioria absoluta dos contratos é encerrada sem qualquer modificação.",$a,ua,oa,ba,ca,wa,sa,La='<p class="markdown">💡 Volte para a <a href="/Analytics-Engineer/compras-publicas" class="markdown">Visão Geral</a> ou explore os <a href="/Analytics-Engineer/compras-publicas/orgaos" class="markdown">Órgãos</a>, <a href="/Analytics-Engineer/compras-publicas/fornecedores" class="markdown">Fornecedores</a>, <a href="/Analytics-Engineer/compras-publicas/modalidades" class="markdown">Modalidades</a> e <a href="/Analytics-Engineer/compras-publicas/aditivos" class="markdown">Aditivos Contratuais</a>.</p>',ya,K=typeof g<"u"&&g.title&&g.hide_title!==!0&&mt();function Na(a,n){return typeof g<"u"&&g.title?dt:ct}let da=Na()(c),X=typeof g=="object"&&ft(),h=c[0]&&Ba(c);v=new Ea({props:{data:c[0],x:"ano",y:"qt_contratos",title:"Quantidade de Contratos por Ano",xAxisTitle:"Ano",yAxisTitle:"Quantidade",xType:"category"}}),I=new Ea({props:{data:c[0],x:"ano",y:"vl_total_atual",title:"Valor Total Contratado por Ano (R$)",xAxisTitle:"Ano",yAxisTitle:"Valor (R$)",xType:"category"}}),z=new et({props:{data:c[0],title:"Resumo Anual",index:"false",$$slots:{default:[gt]},$$scope:{ctx:c}}});let A=c[1]&&Ua(c);ta=new Ea({props:{data:c[1],x:"ano_mes",y:"qt_contratos",title:"Quantidade de Contratos por Mês",xAxisTitle:"Mês",yAxisTitle:"Quantidade",xType:"category"}});let C=c[2]&&za(c);return oa=new _t({props:{data:c[2],x:"ano",y:["com_aditivo","sem_aditivo"],title:"Contratos Com e Sem Aditivo por Ano",xAxisTitle:"Ano",yAxisTitle:"Quantidade",xType:"category",type:"stacked"}}),{c(){K&&K.c(),e=f(),da.c(),i=y("meta"),t=y("meta"),X&&X.c(),r=Ta(),_=f(),o=y("blockquote"),o.innerHTML=m,b=f(),E=y("hr"),S=f(),k=y("h2"),k.innerHTML=O,q=f(),x=y("p"),x.innerHTML=D,V=f(),h&&h.c(),s=f(),Q(v.$$.fragment),U=f(),Q(I.$$.fragment),J=f(),Q(z.$$.fragment),W=f(),H=y("blockquote"),H.innerHTML=N,P=f(),j=y("hr"),Z=f(),B=y("h2"),B.innerHTML=M,ra=f(),aa=y("p"),aa.innerHTML=Ma,fa=f(),A&&A.c(),la=f(),Q(ta.$$.fragment),pa=f(),ma=y("hr"),va=f(),G=y("h2"),G.innerHTML=Ha,ga=f(),ea=y("p"),ea.textContent=Ra,$a=f(),C&&C.c(),ua=f(),Q(oa.$$.fragment),ba=f(),ca=y("hr"),wa=f(),sa=y("blockquote"),sa.innerHTML=La,this.h()},l(a){K&&K.l(a),e=d(a);const n=ja("svelte-2igo1p",document.head);da.l(n),i=w(n,"META",{name:!0,content:!0}),t=w(n,"META",{name:!0,content:!0}),X&&X.l(n),r=Ta(),n.forEach(l),_=d(a),o=w(a,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),Y(o)!=="svelte-1hx59k3"&&(o.innerHTML=m),b=d(a),E=w(a,"HR",{class:!0}),S=d(a),k=w(a,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Y(k)!=="svelte-16ygm2g"&&(k.innerHTML=O),q=d(a),x=w(a,"P",{class:!0,"data-svelte-h":!0}),Y(x)!=="svelte-bcg1pu"&&(x.innerHTML=D),V=d(a),h&&h.l(a),s=d(a),F(v.$$.fragment,a),U=d(a),F(I.$$.fragment,a),J=d(a),F(z.$$.fragment,a),W=d(a),H=w(a,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),Y(H)!=="svelte-gze3vn"&&(H.innerHTML=N),P=d(a),j=w(a,"HR",{class:!0}),Z=d(a),B=w(a,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Y(B)!=="svelte-4tgqoq"&&(B.innerHTML=M),ra=d(a),aa=w(a,"P",{class:!0,"data-svelte-h":!0}),Y(aa)!=="svelte-m21lag"&&(aa.innerHTML=Ma),fa=d(a),A&&A.l(a),la=d(a),F(ta.$$.fragment,a),pa=d(a),ma=w(a,"HR",{class:!0}),va=d(a),G=w(a,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Y(G)!=="svelte-ul8cxu"&&(G.innerHTML=Ha),ga=d(a),ea=w(a,"P",{class:!0,"data-svelte-h":!0}),Y(ea)!=="svelte-p3m0m4"&&(ea.textContent=Ra),$a=d(a),C&&C.l(a),ua=d(a),F(oa.$$.fragment,a),ba=d(a),ca=w(a,"HR",{class:!0}),wa=d(a),sa=w(a,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),Y(sa)!=="svelte-1t0i0kk"&&(sa.innerHTML=La),this.h()},h(){p(i,"name","twitter:card"),p(i,"content","summary_large_image"),p(t,"name","twitter:site"),p(t,"content","@evidence_dev"),p(o,"class","markdown"),p(E,"class","markdown"),p(k,"class","markdown"),p(k,"id","como-evoluiu-o-volume-de-contratações"),p(x,"class","markdown"),p(H,"class","markdown"),p(j,"class","markdown"),p(B,"class","markdown"),p(B,"id","existe-sazonalidade-nas-contratações"),p(aa,"class","markdown"),p(ma,"class","markdown"),p(G,"class","markdown"),p(G,"id","os-aditivos-cresceram-ao-longo-do-tempo"),p(ea,"class","markdown"),p(ca,"class","markdown"),p(sa,"class","markdown")},m(a,n){K&&K.m(a,n),u(a,e,n),da.m(document.head,null),ka(document.head,i),ka(document.head,t),X&&X.m(document.head,null),ka(document.head,r),u(a,_,n),u(a,o,n),u(a,b,n),u(a,E,n),u(a,S,n),u(a,k,n),u(a,q,n),u(a,x,n),u(a,V,n),h&&h.m(a,n),u(a,s,n),L(v,a,n),u(a,U,n),L(I,a,n),u(a,J,n),L(z,a,n),u(a,W,n),u(a,H,n),u(a,P,n),u(a,j,n),u(a,Z,n),u(a,B,n),u(a,ra,n),u(a,aa,n),u(a,fa,n),A&&A.m(a,n),u(a,la,n),L(ta,a,n),u(a,pa,n),u(a,ma,n),u(a,va,n),u(a,G,n),u(a,ga,n),u(a,ea,n),u(a,$a,n),C&&C.m(a,n),u(a,ua,n),L(oa,a,n),u(a,ba,n),u(a,ca,n),u(a,wa,n),u(a,sa,n),ya=!0},p(a,[n]){typeof g<"u"&&g.title&&g.hide_title!==!0&&K.p(a,n),da.p(a,n),typeof g=="object"&&X.p(a,n),a[0]?h?(h.p(a,n),n&1&&$(h,1)):(h=Ba(a),h.c(),$(h,1),h.m(s.parentNode,s)):h&&(Aa(),T(h,1,1,()=>{h=null}),ha());const Fa={};n&1&&(Fa.data=a[0]),v.$set(Fa);const Qa={};n&1&&(Qa.data=a[0]),I.$set(Qa);const qa={};n&1&&(qa.data=a[0]),n&1073741824&&(qa.$$scope={dirty:n,ctx:a}),z.$set(qa),a[1]?A?(A.p(a,n),n&2&&$(A,1)):(A=Ua(a),A.c(),$(A,1),A.m(la.parentNode,la)):A&&(Aa(),T(A,1,1,()=>{A=null}),ha());const Oa={};n&2&&(Oa.data=a[1]),ta.$set(Oa),a[2]?C?(C.p(a,n),n&4&&$(C,1)):(C=za(a),C.c(),$(C,1),C.m(ua.parentNode,ua)):C&&(Aa(),T(C,1,1,()=>{C=null}),ha());const Sa={};n&4&&(Sa.data=a[2]),oa.$set(Sa)},i(a){ya||($(h),$(v.$$.fragment,a),$(I.$$.fragment,a),$(z.$$.fragment,a),$(A),$(ta.$$.fragment,a),$(C),$(oa.$$.fragment,a),ya=!0)},o(a){T(h),T(v.$$.fragment,a),T(I.$$.fragment,a),T(z.$$.fragment,a),T(A),T(ta.$$.fragment,a),T(C),T(oa.$$.fragment,a),ya=!1},d(a){a&&(l(e),l(_),l(o),l(b),l(E),l(S),l(k),l(q),l(x),l(V),l(s),l(U),l(J),l(W),l(H),l(P),l(j),l(Z),l(B),l(ra),l(aa),l(fa),l(la),l(pa),l(ma),l(va),l(G),l(ga),l(ea),l($a),l(ua),l(ba),l(ca),l(wa),l(sa)),K&&K.d(a),da.d(a),l(i),l(t),X&&X.d(a),l(r),h&&h.d(a),R(v,a),R(I,a),R(z,a),A&&A.d(a),R(ta,a),C&&C.d(a),R(oa,a)}}}const g={title:"Evolução Temporal"};function bt(c,e,i){let t,r;Da(c,ut,M=>i(17,t=M)),Da(c,Va,M=>i(23,r=M));let{data:_}=e,{data:o={},customFormattingSettings:m,__db:b,inputs:E}=_;Ga(Va,r="8a22f3564b91795d24cf535add5d5d2b",r);let S=ot(rt(E));Ka(S.subscribe(M=>E=M)),Xa(it,{getCustomFormats:()=>m.customFormats||[]});const k=(M,ra)=>lt(b.query,M,{query_name:ra});st(k),t.params,Ya(()=>!0);let O={initialData:void 0,initialError:void 0},q=_a`select
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
order by ano_assinatura`,x=`select
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
order by ano_assinatura`;o.evolucao_anual_data&&(o.evolucao_anual_data instanceof Error?O.initialError=o.evolucao_anual_data:O.initialData=o.evolucao_anual_data,o.evolucao_anual_columns&&(O.knownColumns=o.evolucao_anual_columns));let D,V=!1;const s=Ca.createReactive({callback:M=>{i(0,D=M)},execFn:k},{id:"evolucao_anual",...O});s(x,{noResolve:q,...O}),globalThis[Symbol.for("evolucao_anual")]={get value(){return D}};let v={initialData:void 0,initialError:void 0},U=_a`select
    ano_assinatura::integer || '-' || lpad(mes_assinatura::text, 2, '0') as ano_mes,
    ano_assinatura::integer             as ano,
    mes_assinatura::integer             as mes,
    count(*)                            as qt_contratos,
    sum(vl_atual)                       as vl_total_atual
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura, mes_assinatura
order by ano_assinatura, mes_assinatura`,I=`select
    ano_assinatura::integer || '-' || lpad(mes_assinatura::text, 2, '0') as ano_mes,
    ano_assinatura::integer             as ano,
    mes_assinatura::integer             as mes,
    count(*)                            as qt_contratos,
    sum(vl_atual)                       as vl_total_atual
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura, mes_assinatura
order by ano_assinatura, mes_assinatura`;o.evolucao_mensal_data&&(o.evolucao_mensal_data instanceof Error?v.initialError=o.evolucao_mensal_data:v.initialData=o.evolucao_mensal_data,o.evolucao_mensal_columns&&(v.knownColumns=o.evolucao_mensal_columns));let J,z=!1;const W=Ca.createReactive({callback:M=>{i(1,J=M)},execFn:k},{id:"evolucao_mensal",...v});W(I,{noResolve:U,...v}),globalThis[Symbol.for("evolucao_mensal")]={get value(){return J}};let H={initialData:void 0,initialError:void 0},N=_a`select
    ano_assinatura::integer                                     as ano,
    count(case when fl_possui_aditivo then 1 end)               as com_aditivo,
    count(case when not fl_possui_aditivo then 1 end)           as sem_aditivo,
    sum(coalesce(vl_aditado, 0))                                as vl_total_aditado
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura
order by ano_assinatura`,P=`select
    ano_assinatura::integer                                     as ano,
    count(case when fl_possui_aditivo then 1 end)               as com_aditivo,
    count(case when not fl_possui_aditivo then 1 end)           as sem_aditivo,
    sum(coalesce(vl_aditado, 0))                                as vl_total_aditado
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura
order by ano_assinatura`;o.aditivos_anual_data&&(o.aditivos_anual_data instanceof Error?H.initialError=o.aditivos_anual_data:H.initialData=o.aditivos_anual_data,o.aditivos_anual_columns&&(H.knownColumns=o.aditivos_anual_columns));let j,Z=!1;const B=Ca.createReactive({callback:M=>{i(2,j=M)},execFn:k},{id:"aditivos_anual",...H});return B(P,{noResolve:N,...H}),globalThis[Symbol.for("aditivos_anual")]={get value(){return j}},c.$$set=M=>{"data"in M&&i(3,_=M.data)},c.$$.update=()=>{c.$$.dirty&8&&i(4,{data:o={},customFormattingSettings:m,__db:b}=_,o),c.$$.dirty&16&&nt.set(Object.keys(o).length>0),c.$$.dirty&131072&&t.params,c.$$.dirty&480&&(q||!V?q||(s(x,{noResolve:q,...O}),i(8,V=!0)):s(x,{noResolve:q})),c.$$.dirty&7680&&(U||!z?U||(W(I,{noResolve:U,...v}),i(12,z=!0)):W(I,{noResolve:U})),c.$$.dirty&122880&&(N||!Z?N||(B(P,{noResolve:N,...H}),i(16,Z=!0)):B(P,{noResolve:N}))},i(6,q=_a`select
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
order by ano_assinatura`),i(7,x=`select
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
order by ano_assinatura`),i(10,U=_a`select
    ano_assinatura::integer || '-' || lpad(mes_assinatura::text, 2, '0') as ano_mes,
    ano_assinatura::integer             as ano,
    mes_assinatura::integer             as mes,
    count(*)                            as qt_contratos,
    sum(vl_atual)                       as vl_total_atual
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura, mes_assinatura
order by ano_assinatura, mes_assinatura`),i(11,I=`select
    ano_assinatura::integer || '-' || lpad(mes_assinatura::text, 2, '0') as ano_mes,
    ano_assinatura::integer             as ano,
    mes_assinatura::integer             as mes,
    count(*)                            as qt_contratos,
    sum(vl_atual)                       as vl_total_atual
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura, mes_assinatura
order by ano_assinatura, mes_assinatura`),i(14,N=_a`select
    ano_assinatura::integer                                     as ano,
    count(case when fl_possui_aditivo then 1 end)               as com_aditivo,
    count(case when not fl_possui_aditivo then 1 end)           as sem_aditivo,
    sum(coalesce(vl_aditado, 0))                                as vl_total_aditado
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura
order by ano_assinatura`),i(15,P=`select
    ano_assinatura::integer                                     as ano,
    count(case when fl_possui_aditivo then 1 end)               as com_aditivo,
    count(case when not fl_possui_aditivo then 1 end)           as sem_aditivo,
    sum(coalesce(vl_aditado, 0))                                as vl_total_aditado
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura
order by ano_assinatura`),[D,J,j,_,o,O,q,x,V,v,U,I,z,H,N,P,Z,t]}class Mt extends at{constructor(e){super(),tt(this,e,bt,$t,Pa,{data:3})}}export{Mt as component};
