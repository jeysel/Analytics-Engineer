import{s as Je,d as _,i as f,a as Ce,b as v,c as p,h as We,e as A,f as Ee,g as de,j as d,k as L,l as je,m as Ze,o as xe,n as et,p as tt,q as fe,r as ot,t as rt,u as at}from"../chunks/scheduler.q7auac3b.js";import{S as st,i as nt,d as w,t as b,a as $,c as we,m as T,b as R,e as F,g as Te}from"../chunks/index.B_vRVscZ.js";import{D as Ue,e as lt,s as it,Q as Re,p as _t,C as J,a as Be,r as he,b as ft}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BdKGjBcs.js";import{w as mt}from"../chunks/entry.D_3g4xoz.js";import{h as _e,p as ct}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as ut}from"../chunks/stores.D9WP5eWk.js";import{B as Oe,Q as He}from"../chunks/BarChart.wW3IZlSb.js";import{B as Fe}from"../chunks/BigValue.3NODOlWv.js";function pt(u){let o,a=k.title+"",t;return{c(){o=L("h1"),t=at(a),this.h()},l(n){o=A(n,"H1",{class:!0});var i=ot(o);t=rt(i,a),i.forEach(_),this.h()},h(){v(o,"class","title")},m(n,i){f(n,o,i),Ce(o,t)},p:fe,d(n){n&&_(o)}}}function dt(u){return{c(){this.h()},l(o){this.h()},h(){document.title="Evidence"},m:fe,p:fe,d:fe}}function $t(u){let o,a,t,n,i;return document.title=o=k.title,{c(){a=d(),t=L("meta"),n=d(),i=L("meta"),this.h()},l(r){a=p(r),t=A(r,"META",{property:!0,content:!0}),n=p(r),i=A(r,"META",{name:!0,content:!0}),this.h()},h(){var r,m;v(t,"property","og:title"),v(t,"content",((r=k.og)==null?void 0:r.title)??k.title),v(i,"name","twitter:title"),v(i,"content",((m=k.og)==null?void 0:m.title)??k.title)},m(r,m){f(r,a,m),f(r,t,m),f(r,n,m),f(r,i,m)},p(r,m){m&0&&o!==(o=k.title)&&(document.title=o)},d(r){r&&(_(a),_(t),_(n),_(i))}}}function vt(u){var i,r;let o,a,t=(k.description||((i=k.og)==null?void 0:i.description))&&gt(),n=((r=k.og)==null?void 0:r.image)&&bt();return{c(){t&&t.c(),o=d(),n&&n.c(),a=Ee()},l(m){t&&t.l(m),o=p(m),n&&n.l(m),a=Ee()},m(m,q){t&&t.m(m,q),f(m,o,q),n&&n.m(m,q),f(m,a,q)},p(m,q){var c,C;(k.description||(c=k.og)!=null&&c.description)&&t.p(m,q),(C=k.og)!=null&&C.image&&n.p(m,q)},d(m){m&&(_(o),_(a)),t&&t.d(m),n&&n.d(m)}}}function gt(u){let o,a,t,n,i;return{c(){o=L("meta"),a=d(),t=L("meta"),n=d(),i=L("meta"),this.h()},l(r){o=A(r,"META",{name:!0,content:!0}),a=p(r),t=A(r,"META",{property:!0,content:!0}),n=p(r),i=A(r,"META",{name:!0,content:!0}),this.h()},h(){var r,m,q;v(o,"name","description"),v(o,"content",k.description??((r=k.og)==null?void 0:r.description)),v(t,"property","og:description"),v(t,"content",((m=k.og)==null?void 0:m.description)??k.description),v(i,"name","twitter:description"),v(i,"content",((q=k.og)==null?void 0:q.description)??k.description)},m(r,m){f(r,o,m),f(r,a,m),f(r,t,m),f(r,n,m),f(r,i,m)},p:fe,d(r){r&&(_(o),_(a),_(t),_(n),_(i))}}}function bt(u){let o,a,t;return{c(){o=L("meta"),a=d(),t=L("meta"),this.h()},l(n){o=A(n,"META",{property:!0,content:!0}),a=p(n),t=A(n,"META",{name:!0,content:!0}),this.h()},h(){var n,i;v(o,"property","og:image"),v(o,"content",Be((n=k.og)==null?void 0:n.image)),v(t,"name","twitter:image"),v(t,"content",Be((i=k.og)==null?void 0:i.image))},m(n,i){f(n,o,i),f(n,a,i),f(n,t,i)},p:fe,d(n){n&&(_(o),_(a),_(t))}}}function Ge(u){let o,a;return o=new He({props:{queryID:"kpis_fornecedores",queryResult:u[0]}}),{c(){F(o.$$.fragment)},l(t){R(o.$$.fragment,t)},m(t,n){T(o,t,n),a=!0},p(t,n){const i={};n[0]&1&&(i.queryResult=t[0]),o.$set(i)},i(t){a||($(o.$$.fragment,t),a=!0)},o(t){b(o.$$.fragment,t),a=!1},d(t){w(o,t)}}}function Xe(u){let o,a;return o=new He({props:{queryID:"porte_fornecedor",queryResult:u[1]}}),{c(){F(o.$$.fragment)},l(t){R(o.$$.fragment,t)},m(t,n){T(o,t,n),a=!0},p(t,n){const i={};n[0]&2&&(i.queryResult=t[1]),o.$set(i)},i(t){a||($(o.$$.fragment,t),a=!0)},o(t){b(o.$$.fragment,t),a=!1},d(t){w(o,t)}}}function kt(u){let o,a,t,n,i,r,m,q;return o=new J({props:{id:"porte",title:"Porte"}}),t=new J({props:{id:"qt_fornecedores",title:"Fornecedores",fmt:"num0"}}),i=new J({props:{id:"qt_contratos",title:"Contratos",fmt:"num0"}}),m=new J({props:{id:"vl_total",title:"Valor Total",fmt:"num1b"}}),{c(){F(o.$$.fragment),a=d(),F(t.$$.fragment),n=d(),F(i.$$.fragment),r=d(),F(m.$$.fragment)},l(c){R(o.$$.fragment,c),a=p(c),R(t.$$.fragment,c),n=p(c),R(i.$$.fragment,c),r=p(c),R(m.$$.fragment,c)},m(c,C){T(o,c,C),f(c,a,C),T(t,c,C),f(c,n,C),T(i,c,C),f(c,r,C),T(m,c,C),q=!0},p:fe,i(c){q||($(o.$$.fragment,c),$(t.$$.fragment,c),$(i.$$.fragment,c),$(m.$$.fragment,c),q=!0)},o(c){b(o.$$.fragment,c),b(t.$$.fragment,c),b(i.$$.fragment,c),b(m.$$.fragment,c),q=!1},d(c){c&&(_(a),_(n),_(r)),w(o,c),w(t,c),w(i,c),w(m,c)}}}function Ye(u){let o,a;return o=new He({props:{queryID:"top_fornecedores",queryResult:u[2]}}),{c(){F(o.$$.fragment)},l(t){R(o.$$.fragment,t)},m(t,n){T(o,t,n),a=!0},p(t,n){const i={};n[0]&4&&(i.queryResult=t[2]),o.$set(i)},i(t){a||($(o.$$.fragment,t),a=!0)},o(t){b(o.$$.fragment,t),a=!1},d(t){w(o,t)}}}function qt(u){let o,a,t,n,i,r,m,q,c,C,Q,V,E,H,N,h;return o=new J({props:{id:"ranking",title:"#"}}),t=new J({props:{id:"fornecedor",title:"Fornecedor"}}),i=new J({props:{id:"porte",title:"Porte"}}),m=new J({props:{id:"qt_contratos",title:"Contratos",fmt:"num0"}}),c=new J({props:{id:"orgaos",title:"Órgãos",fmt:"num0"}}),Q=new J({props:{id:"vl_total",title:"Valor Total",fmt:"num1b"}}),E=new J({props:{id:"vl_aditado",title:"Aditivos",fmt:"num1b"}}),N=new J({props:{id:"situacao_aditivo",title:"Situação Aditivo"}}),{c(){F(o.$$.fragment),a=d(),F(t.$$.fragment),n=d(),F(i.$$.fragment),r=d(),F(m.$$.fragment),q=d(),F(c.$$.fragment),C=d(),F(Q.$$.fragment),V=d(),F(E.$$.fragment),H=d(),F(N.$$.fragment)},l(l){R(o.$$.fragment,l),a=p(l),R(t.$$.fragment,l),n=p(l),R(i.$$.fragment,l),r=p(l),R(m.$$.fragment,l),q=p(l),R(c.$$.fragment,l),C=p(l),R(Q.$$.fragment,l),V=p(l),R(E.$$.fragment,l),H=p(l),R(N.$$.fragment,l)},m(l,g){T(o,l,g),f(l,a,g),T(t,l,g),f(l,n,g),T(i,l,g),f(l,r,g),T(m,l,g),f(l,q,g),T(c,l,g),f(l,C,g),T(Q,l,g),f(l,V,g),T(E,l,g),f(l,H,g),T(N,l,g),h=!0},p:fe,i(l){h||($(o.$$.fragment,l),$(t.$$.fragment,l),$(i.$$.fragment,l),$(m.$$.fragment,l),$(c.$$.fragment,l),$(Q.$$.fragment,l),$(E.$$.fragment,l),$(N.$$.fragment,l),h=!0)},o(l){b(o.$$.fragment,l),b(t.$$.fragment,l),b(i.$$.fragment,l),b(m.$$.fragment,l),b(c.$$.fragment,l),b(Q.$$.fragment,l),b(E.$$.fragment,l),b(N.$$.fragment,l),h=!1},d(l){l&&(_(a),_(n),_(r),_(q),_(C),_(V),_(H)),w(o,l),w(t,l),w(i,l),w(m,l),w(c,l),w(Q,l),w(E,l),w(N,l)}}}function Ke(u){let o,a;return o=new He({props:{queryID:"top_fornecedores_qt",queryResult:u[3]}}),{c(){F(o.$$.fragment)},l(t){R(o.$$.fragment,t)},m(t,n){T(o,t,n),a=!0},p(t,n){const i={};n[0]&8&&(i.queryResult=t[3]),o.$set(i)},i(t){a||($(o.$$.fragment,t),a=!0)},o(t){b(o.$$.fragment,t),a=!1},d(t){w(o,t)}}}function yt(u){let o,a,t,n,i,r,m='<a href="#fornecedores">Fornecedores</a>',q,c,C="Análise dos fornecedores contratados pelo estado de Santa Catarina.",Q,V,E,H,N='<a href="#visão-geral">Visão Geral</a>',h,l,g,G,j,oe,X,re,P,Y,W,ae,O,me='<a href="#distribuição-por-porte">Distribuição por Porte</a>',K,U,B,se,z,ne,y,ce,Z,Se='<a href="#top-20-fornecedores-por-valor">Top 20 Fornecedores por Valor</a>',ge,ue,le,be,$e,ke,x,Ie='<a href="#top-20-por-quantidade-de-contratos">Top 20 por Quantidade de Contratos</a>',qe,pe,ie,ye,ee=typeof k<"u"&&k.title&&k.hide_title!==!0&&pt();function ze(e,s){return typeof k<"u"&&k.title?$t:dt}let ve=ze()(u),te=typeof k=="object"&&vt(),M=u[0]&&Ge(u);g=new Fe({props:{data:u[0],value:"total_fornecedores",title:"Total de Fornecedores",fmt:"num1k"}}),j=new Fe({props:{data:u[0],value:"total_contratos",title:"Total de Contratos",fmt:"num1k"}}),X=new Fe({props:{data:u[0],value:"vl_total",title:"Valor Total",fmt:"num1b"}}),P=new Fe({props:{data:u[0],value:"vl_maior",title:"Maior Fornecedor",fmt:"num1b"}});let D=u[1]&&Xe(u);B=new Oe({props:{data:u[1],x:"porte",y:"qt_fornecedores",title:"Quantidade de Fornecedores por Porte"}}),z=new Ue({props:{data:u[1],title:"Distribuição por Porte",$$slots:{default:[kt]},$$scope:{ctx:u}}});let S=u[2]&&Ye(u);le=new Ue({props:{data:u[2],title:"Top 20 Fornecedores por Valor Total",$$slots:{default:[qt]},$$scope:{ctx:u}}});let I=u[3]&&Ke(u);return ie=new Oe({props:{data:u[3],x:"fornecedor",y:"qt_contratos",title:"Top 20 Fornecedores por Quantidade de Contratos",swapXY:"true"}}),{c(){ee&&ee.c(),o=d(),ve.c(),a=L("meta"),t=L("meta"),te&&te.c(),n=Ee(),i=d(),r=L("h1"),r.innerHTML=m,q=d(),c=L("p"),c.textContent=C,Q=d(),V=L("hr"),E=d(),H=L("h2"),H.innerHTML=N,h=d(),M&&M.c(),l=d(),F(g.$$.fragment),G=d(),F(j.$$.fragment),oe=d(),F(X.$$.fragment),re=d(),F(P.$$.fragment),Y=d(),W=L("hr"),ae=d(),O=L("h2"),O.innerHTML=me,K=d(),D&&D.c(),U=d(),F(B.$$.fragment),se=d(),F(z.$$.fragment),ne=d(),y=L("hr"),ce=d(),Z=L("h2"),Z.innerHTML=Se,ge=d(),S&&S.c(),ue=d(),F(le.$$.fragment),be=d(),$e=L("hr"),ke=d(),x=L("h2"),x.innerHTML=Ie,qe=d(),I&&I.c(),pe=d(),F(ie.$$.fragment),this.h()},l(e){ee&&ee.l(e),o=p(e);const s=We("svelte-2igo1p",document.head);ve.l(s),a=A(s,"META",{name:!0,content:!0}),t=A(s,"META",{name:!0,content:!0}),te&&te.l(s),n=Ee(),s.forEach(_),i=p(e),r=A(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),de(r)!=="svelte-78anxd"&&(r.innerHTML=m),q=p(e),c=A(e,"P",{class:!0,"data-svelte-h":!0}),de(c)!=="svelte-i4jdef"&&(c.textContent=C),Q=p(e),V=A(e,"HR",{class:!0}),E=p(e),H=A(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),de(H)!=="svelte-1nrswfb"&&(H.innerHTML=N),h=p(e),M&&M.l(e),l=p(e),R(g.$$.fragment,e),G=p(e),R(j.$$.fragment,e),oe=p(e),R(X.$$.fragment,e),re=p(e),R(P.$$.fragment,e),Y=p(e),W=A(e,"HR",{class:!0}),ae=p(e),O=A(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),de(O)!=="svelte-1c41o7"&&(O.innerHTML=me),K=p(e),D&&D.l(e),U=p(e),R(B.$$.fragment,e),se=p(e),R(z.$$.fragment,e),ne=p(e),y=A(e,"HR",{class:!0}),ce=p(e),Z=A(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),de(Z)!=="svelte-elwj2n"&&(Z.innerHTML=Se),ge=p(e),S&&S.l(e),ue=p(e),R(le.$$.fragment,e),be=p(e),$e=A(e,"HR",{class:!0}),ke=p(e),x=A(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),de(x)!=="svelte-pgawd2"&&(x.innerHTML=Ie),qe=p(e),I&&I.l(e),pe=p(e),R(ie.$$.fragment,e),this.h()},h(){v(a,"name","twitter:card"),v(a,"content","summary_large_image"),v(t,"name","twitter:site"),v(t,"content","@evidence_dev"),v(r,"class","markdown"),v(r,"id","fornecedores"),v(c,"class","markdown"),v(V,"class","markdown"),v(H,"class","markdown"),v(H,"id","visão-geral"),v(W,"class","markdown"),v(O,"class","markdown"),v(O,"id","distribuição-por-porte"),v(y,"class","markdown"),v(Z,"class","markdown"),v(Z,"id","top-20-fornecedores-por-valor"),v($e,"class","markdown"),v(x,"class","markdown"),v(x,"id","top-20-por-quantidade-de-contratos")},m(e,s){ee&&ee.m(e,s),f(e,o,s),ve.m(document.head,null),Ce(document.head,a),Ce(document.head,t),te&&te.m(document.head,null),Ce(document.head,n),f(e,i,s),f(e,r,s),f(e,q,s),f(e,c,s),f(e,Q,s),f(e,V,s),f(e,E,s),f(e,H,s),f(e,h,s),M&&M.m(e,s),f(e,l,s),T(g,e,s),f(e,G,s),T(j,e,s),f(e,oe,s),T(X,e,s),f(e,re,s),T(P,e,s),f(e,Y,s),f(e,W,s),f(e,ae,s),f(e,O,s),f(e,K,s),D&&D.m(e,s),f(e,U,s),T(B,e,s),f(e,se,s),T(z,e,s),f(e,ne,s),f(e,y,s),f(e,ce,s),f(e,Z,s),f(e,ge,s),S&&S.m(e,s),f(e,ue,s),T(le,e,s),f(e,be,s),f(e,$e,s),f(e,ke,s),f(e,x,s),f(e,qe,s),I&&I.m(e,s),f(e,pe,s),T(ie,e,s),ye=!0},p(e,s){typeof k<"u"&&k.title&&k.hide_title!==!0&&ee.p(e,s),ve.p(e,s),typeof k=="object"&&te.p(e,s),e[0]?M?(M.p(e,s),s[0]&1&&$(M,1)):(M=Ge(e),M.c(),$(M,1),M.m(l.parentNode,l)):M&&(Te(),b(M,1,1,()=>{M=null}),we());const Ae={};s[0]&1&&(Ae.data=e[0]),g.$set(Ae);const Le={};s[0]&1&&(Le.data=e[0]),j.$set(Le);const Qe={};s[0]&1&&(Qe.data=e[0]),X.$set(Qe);const Ve={};s[0]&1&&(Ve.data=e[0]),P.$set(Ve),e[1]?D?(D.p(e,s),s[0]&2&&$(D,1)):(D=Xe(e),D.c(),$(D,1),D.m(U.parentNode,U)):D&&(Te(),b(D,1,1,()=>{D=null}),we());const Pe={};s[0]&2&&(Pe.data=e[1]),B.$set(Pe);const Me={};s[0]&2&&(Me.data=e[1]),s[1]&32&&(Me.$$scope={dirty:s,ctx:e}),z.$set(Me),e[2]?S?(S.p(e,s),s[0]&4&&$(S,1)):(S=Ye(e),S.c(),$(S,1),S.m(ue.parentNode,ue)):S&&(Te(),b(S,1,1,()=>{S=null}),we());const De={};s[0]&4&&(De.data=e[2]),s[1]&32&&(De.$$scope={dirty:s,ctx:e}),le.$set(De),e[3]?I?(I.p(e,s),s[0]&8&&$(I,1)):(I=Ke(e),I.c(),$(I,1),I.m(pe.parentNode,pe)):I&&(Te(),b(I,1,1,()=>{I=null}),we());const Ne={};s[0]&8&&(Ne.data=e[3]),ie.$set(Ne)},i(e){ye||($(M),$(g.$$.fragment,e),$(j.$$.fragment,e),$(X.$$.fragment,e),$(P.$$.fragment,e),$(D),$(B.$$.fragment,e),$(z.$$.fragment,e),$(S),$(le.$$.fragment,e),$(I),$(ie.$$.fragment,e),ye=!0)},o(e){b(M),b(g.$$.fragment,e),b(j.$$.fragment,e),b(X.$$.fragment,e),b(P.$$.fragment,e),b(D),b(B.$$.fragment,e),b(z.$$.fragment,e),b(S),b(le.$$.fragment,e),b(I),b(ie.$$.fragment,e),ye=!1},d(e){e&&(_(o),_(i),_(r),_(q),_(c),_(Q),_(V),_(E),_(H),_(h),_(l),_(G),_(oe),_(re),_(Y),_(W),_(ae),_(O),_(K),_(U),_(se),_(ne),_(y),_(ce),_(Z),_(ge),_(ue),_(be),_($e),_(ke),_(x),_(qe),_(pe)),ee&&ee.d(e),ve.d(e),_(a),_(t),te&&te.d(e),_(n),M&&M.d(e),w(g,e),w(j,e),w(X,e),w(P,e),D&&D.d(e),w(B,e),w(z,e),S&&S.d(e),w(le,e),I&&I.d(e),w(ie,e)}}}const k={title:"Fornecedores"};function wt(u,o,a){let t,n;je(u,ut,y=>a(22,t=y)),je(u,he,y=>a(28,n=y));let{data:i}=o,{data:r={},customFormattingSettings:m,__db:q,inputs:c}=i;Ze(he,n="718ee10aaaa21c635812fbbdfb5d10e7",n);let C=lt(mt(c));xe(C.subscribe(y=>c=y)),et(ft,{getCustomFormats:()=>m.customFormats||[]});const Q=(y,ce)=>ct(q.query,y,{query_name:ce});it(Q),t.params,tt(()=>!0);let V={initialData:void 0,initialError:void 0},E=_e`select
    count(*)                    as total_fornecedores,
    sum(qt_contratos)           as total_contratos,
    sum(vl_total_atual)         as vl_total,
    max(vl_total_atual)         as vl_maior
from compras.dim_fornecedores`,H=`select
    count(*)                    as total_fornecedores,
    sum(qt_contratos)           as total_contratos,
    sum(vl_total_atual)         as vl_total,
    max(vl_total_atual)         as vl_maior
from compras.dim_fornecedores`;r.kpis_fornecedores_data&&(r.kpis_fornecedores_data instanceof Error?V.initialError=r.kpis_fornecedores_data:V.initialData=r.kpis_fornecedores_data,r.kpis_fornecedores_columns&&(V.knownColumns=r.kpis_fornecedores_columns));let N,h=!1;const l=Re.createReactive({callback:y=>{a(0,N=y)},execFn:Q},{id:"kpis_fornecedores",...V});l(H,{noResolve:E,...V}),globalThis[Symbol.for("kpis_fornecedores")]={get value(){return N}};let g={initialData:void 0,initialError:void 0},G=_e`select
    porte_fornecedor            as porte,
    count(*)                    as qt_fornecedores,
    sum(qt_contratos)           as qt_contratos,
    sum(vl_total_atual)         as vl_total
from compras.dim_fornecedores
group by 1
order by vl_total desc`,j=`select
    porte_fornecedor            as porte,
    count(*)                    as qt_fornecedores,
    sum(qt_contratos)           as qt_contratos,
    sum(vl_total_atual)         as vl_total
from compras.dim_fornecedores
group by 1
order by vl_total desc`;r.porte_fornecedor_data&&(r.porte_fornecedor_data instanceof Error?g.initialError=r.porte_fornecedor_data:g.initialData=r.porte_fornecedor_data,r.porte_fornecedor_columns&&(g.knownColumns=r.porte_fornecedor_columns));let oe,X=!1;const re=Re.createReactive({callback:y=>{a(1,oe=y)},execFn:Q},{id:"porte_fornecedor",...g});re(j,{noResolve:G,...g}),globalThis[Symbol.for("porte_fornecedor")]={get value(){return oe}};let P={initialData:void 0,initialError:void 0},Y=_e`select
    rank_por_valor              as ranking,
    nm_contratado               as fornecedor,
    porte_fornecedor            as porte,
    qt_contratos,
    qt_orgaos_distintos         as orgaos,
    vl_total_atual              as vl_total,
    vl_total_aditado            as vl_aditado,
    ds_situacao_aditivo         as situacao_aditivo
from compras.dim_fornecedores
order by ranking
limit 20`,W=`select
    rank_por_valor              as ranking,
    nm_contratado               as fornecedor,
    porte_fornecedor            as porte,
    qt_contratos,
    qt_orgaos_distintos         as orgaos,
    vl_total_atual              as vl_total,
    vl_total_aditado            as vl_aditado,
    ds_situacao_aditivo         as situacao_aditivo
from compras.dim_fornecedores
order by ranking
limit 20`;r.top_fornecedores_data&&(r.top_fornecedores_data instanceof Error?P.initialError=r.top_fornecedores_data:P.initialData=r.top_fornecedores_data,r.top_fornecedores_columns&&(P.knownColumns=r.top_fornecedores_columns));let ae,O=!1;const me=Re.createReactive({callback:y=>{a(2,ae=y)},execFn:Q},{id:"top_fornecedores",...P});me(W,{noResolve:Y,...P}),globalThis[Symbol.for("top_fornecedores")]={get value(){return ae}};let K={initialData:void 0,initialError:void 0},U=_e`select
    rank_por_quantidade         as ranking,
    nm_contratado               as fornecedor,
    porte_fornecedor            as porte,
    qt_contratos,
    qt_orgaos_distintos         as orgaos,
    vl_total_atual              as vl_total
from compras.dim_fornecedores
order by ranking
limit 20`,B=`select
    rank_por_quantidade         as ranking,
    nm_contratado               as fornecedor,
    porte_fornecedor            as porte,
    qt_contratos,
    qt_orgaos_distintos         as orgaos,
    vl_total_atual              as vl_total
from compras.dim_fornecedores
order by ranking
limit 20`;r.top_fornecedores_qt_data&&(r.top_fornecedores_qt_data instanceof Error?K.initialError=r.top_fornecedores_qt_data:K.initialData=r.top_fornecedores_qt_data,r.top_fornecedores_qt_columns&&(K.knownColumns=r.top_fornecedores_qt_columns));let se,z=!1;const ne=Re.createReactive({callback:y=>{a(3,se=y)},execFn:Q},{id:"top_fornecedores_qt",...K});return ne(B,{noResolve:U,...K}),globalThis[Symbol.for("top_fornecedores_qt")]={get value(){return se}},u.$$set=y=>{"data"in y&&a(4,i=y.data)},u.$$.update=()=>{u.$$.dirty[0]&16&&a(5,{data:r={},customFormattingSettings:m,__db:q}=i,r),u.$$.dirty[0]&32&&_t.set(Object.keys(r).length>0),u.$$.dirty[0]&4194304&&t.params,u.$$.dirty[0]&960&&(E||!h?E||(l(H,{noResolve:E,...V}),a(9,h=!0)):l(H,{noResolve:E})),u.$$.dirty[0]&15360&&(G||!X?G||(re(j,{noResolve:G,...g}),a(13,X=!0)):re(j,{noResolve:G})),u.$$.dirty[0]&245760&&(Y||!O?Y||(me(W,{noResolve:Y,...P}),a(17,O=!0)):me(W,{noResolve:Y})),u.$$.dirty[0]&3932160&&(U||!z?U||(ne(B,{noResolve:U,...K}),a(21,z=!0)):ne(B,{noResolve:U}))},a(7,E=_e`select
    count(*)                    as total_fornecedores,
    sum(qt_contratos)           as total_contratos,
    sum(vl_total_atual)         as vl_total,
    max(vl_total_atual)         as vl_maior
from compras.dim_fornecedores`),a(8,H=`select
    count(*)                    as total_fornecedores,
    sum(qt_contratos)           as total_contratos,
    sum(vl_total_atual)         as vl_total,
    max(vl_total_atual)         as vl_maior
from compras.dim_fornecedores`),a(11,G=_e`select
    porte_fornecedor            as porte,
    count(*)                    as qt_fornecedores,
    sum(qt_contratos)           as qt_contratos,
    sum(vl_total_atual)         as vl_total
from compras.dim_fornecedores
group by 1
order by vl_total desc`),a(12,j=`select
    porte_fornecedor            as porte,
    count(*)                    as qt_fornecedores,
    sum(qt_contratos)           as qt_contratos,
    sum(vl_total_atual)         as vl_total
from compras.dim_fornecedores
group by 1
order by vl_total desc`),a(15,Y=_e`select
    rank_por_valor              as ranking,
    nm_contratado               as fornecedor,
    porte_fornecedor            as porte,
    qt_contratos,
    qt_orgaos_distintos         as orgaos,
    vl_total_atual              as vl_total,
    vl_total_aditado            as vl_aditado,
    ds_situacao_aditivo         as situacao_aditivo
from compras.dim_fornecedores
order by ranking
limit 20`),a(16,W=`select
    rank_por_valor              as ranking,
    nm_contratado               as fornecedor,
    porte_fornecedor            as porte,
    qt_contratos,
    qt_orgaos_distintos         as orgaos,
    vl_total_atual              as vl_total,
    vl_total_aditado            as vl_aditado,
    ds_situacao_aditivo         as situacao_aditivo
from compras.dim_fornecedores
order by ranking
limit 20`),a(19,U=_e`select
    rank_por_quantidade         as ranking,
    nm_contratado               as fornecedor,
    porte_fornecedor            as porte,
    qt_contratos,
    qt_orgaos_distintos         as orgaos,
    vl_total_atual              as vl_total
from compras.dim_fornecedores
order by ranking
limit 20`),a(20,B=`select
    rank_por_quantidade         as ranking,
    nm_contratado               as fornecedor,
    porte_fornecedor            as porte,
    qt_contratos,
    qt_orgaos_distintos         as orgaos,
    vl_total_atual              as vl_total
from compras.dim_fornecedores
order by ranking
limit 20`),[N,oe,ae,se,i,r,V,E,H,h,g,G,j,X,P,Y,W,O,K,U,B,z,t]}class It extends st{constructor(o){super(),nt(this,o,wt,yt,Je,{data:4},null,[-1,-1])}}export{It as component};
