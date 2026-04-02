import{s as oa,d as _,i as m,a as Lt,b as v,c as p,h as ra,e as E,f as Vt,g as vt,j as d,k as M,l as Kt,m as sa,o as ia,n as la,p as na,q as _t,r as _a,t as fa,u as ma}from"../chunks/scheduler.q7auac3b.js";import{S as ua,i as ca,d as y,t as $,a as g,c as Rt,m as w,b as T,e as R,g as Ct}from"../chunks/index.B_vRVscZ.js";import{D as Ut,e as pa,s as da,Q as Ht,p as ga,C as B,a as Jt,r as Wt,b as $a}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BdKGjBcs.js";import{w as va}from"../chunks/entry.D_3g4xoz.js";import{h as ot,p as ka}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as ba}from"../chunks/stores.D9WP5eWk.js";import{B as qa,Q as Et}from"../chunks/BarChart.wW3IZlSb.js";import{B as At}from"../chunks/BigValue.3NODOlWv.js";function ya(c){let e,r=q.title+"",a;return{c(){e=M("h1"),a=ma(r),this.h()},l(l){e=E(l,"H1",{class:!0});var n=_a(e);a=fa(n,r),n.forEach(_),this.h()},h(){v(e,"class","title")},m(l,n){m(l,e,n),Lt(e,a)},p:_t,d(l){l&&_(e)}}}function wa(c){return{c(){this.h()},l(e){this.h()},h(){document.title="Evidence"},m:_t,p:_t,d:_t}}function Ta(c){let e,r,a,l,n;return document.title=e=q.title,{c(){r=d(),a=M("meta"),l=d(),n=M("meta"),this.h()},l(o){r=p(o),a=E(o,"META",{property:!0,content:!0}),l=p(o),n=E(o,"META",{name:!0,content:!0}),this.h()},h(){var o,u;v(a,"property","og:title"),v(a,"content",((o=q.og)==null?void 0:o.title)??q.title),v(n,"name","twitter:title"),v(n,"content",((u=q.og)==null?void 0:u.title)??q.title)},m(o,u){m(o,r,u),m(o,a,u),m(o,l,u),m(o,n,u)},p(o,u){u&0&&e!==(e=q.title)&&(document.title=e)},d(o){o&&(_(r),_(a),_(l),_(n))}}}function Ra(c){var n,o;let e,r,a=(q.description||((n=q.og)==null?void 0:n.description))&&Ca(),l=((o=q.og)==null?void 0:o.image)&&Ha();return{c(){a&&a.c(),e=d(),l&&l.c(),r=Vt()},l(u){a&&a.l(u),e=p(u),l&&l.l(u),r=Vt()},m(u,k){a&&a.m(u,k),m(u,e,k),l&&l.m(u,k),m(u,r,k)},p(u,k){var i,C;(q.description||(i=q.og)!=null&&i.description)&&a.p(u,k),(C=q.og)!=null&&C.image&&l.p(u,k)},d(u){u&&(_(e),_(r)),a&&a.d(u),l&&l.d(u)}}}function Ca(c){let e,r,a,l,n;return{c(){e=M("meta"),r=d(),a=M("meta"),l=d(),n=M("meta"),this.h()},l(o){e=E(o,"META",{name:!0,content:!0}),r=p(o),a=E(o,"META",{property:!0,content:!0}),l=p(o),n=E(o,"META",{name:!0,content:!0}),this.h()},h(){var o,u,k;v(e,"name","description"),v(e,"content",q.description??((o=q.og)==null?void 0:o.description)),v(a,"property","og:description"),v(a,"content",((u=q.og)==null?void 0:u.description)??q.description),v(n,"name","twitter:description"),v(n,"content",((k=q.og)==null?void 0:k.description)??q.description)},m(o,u){m(o,e,u),m(o,r,u),m(o,a,u),m(o,l,u),m(o,n,u)},p:_t,d(o){o&&(_(e),_(r),_(a),_(l),_(n))}}}function Ha(c){let e,r,a;return{c(){e=M("meta"),r=d(),a=M("meta"),this.h()},l(l){e=E(l,"META",{property:!0,content:!0}),r=p(l),a=E(l,"META",{name:!0,content:!0}),this.h()},h(){var l,n;v(e,"property","og:image"),v(e,"content",Jt((l=q.og)==null?void 0:l.image)),v(a,"name","twitter:image"),v(a,"content",Jt((n=q.og)==null?void 0:n.image))},m(l,n){m(l,e,n),m(l,r,n),m(l,a,n)},p:_t,d(l){l&&(_(e),_(r),_(a))}}}function Zt(c){let e,r;return e=new Et({props:{queryID:"kpis_orgaos",queryResult:c[0]}}),{c(){R(e.$$.fragment)},l(a){T(e.$$.fragment,a)},m(a,l){w(e,a,l),r=!0},p(a,l){const n={};l[0]&1&&(n.queryResult=a[0]),e.$set(n)},i(a){r||(g(e.$$.fragment,a),r=!0)},o(a){$(e.$$.fragment,a),r=!1},d(a){y(e,a)}}}function ht(c){let e,r;return e=new Et({props:{queryID:"ranking_orgaos_valor",queryResult:c[1]}}),{c(){R(e.$$.fragment)},l(a){T(e.$$.fragment,a)},m(a,l){w(e,a,l),r=!0},p(a,l){const n={};l[0]&2&&(n.queryResult=a[1]),e.$set(n)},i(a){r||(g(e.$$.fragment,a),r=!0)},o(a){$(e.$$.fragment,a),r=!1},d(a){y(e,a)}}}function Ea(c){let e,r,a,l,n,o,u,k,i,C,P,N,F,S,j,Y;return e=new B({props:{id:"ranking",title:"#"}}),a=new B({props:{id:"orgao",title:"Órgão"}}),n=new B({props:{id:"qt_contratos",title:"Contratos",fmt:"num0"}}),u=new B({props:{id:"fornecedores",title:"Fornecedores",fmt:"num0"}}),i=new B({props:{id:"vl_atual",title:"Valor Atual",fmt:"num1b"}}),P=new B({props:{id:"vl_aditado",title:"Aditivos",fmt:"num1b"}}),F=new B({props:{id:"situacao_aditivo",title:"Situação Aditivo"}}),j=new B({props:{id:"perfil",title:"Perfil"}}),{c(){R(e.$$.fragment),r=d(),R(a.$$.fragment),l=d(),R(n.$$.fragment),o=d(),R(u.$$.fragment),k=d(),R(i.$$.fragment),C=d(),R(P.$$.fragment),N=d(),R(F.$$.fragment),S=d(),R(j.$$.fragment)},l(f){T(e.$$.fragment,f),r=p(f),T(a.$$.fragment,f),l=p(f),T(n.$$.fragment,f),o=p(f),T(u.$$.fragment,f),k=p(f),T(i.$$.fragment,f),C=p(f),T(P.$$.fragment,f),N=p(f),T(F.$$.fragment,f),S=p(f),T(j.$$.fragment,f)},m(f,b){w(e,f,b),m(f,r,b),w(a,f,b),m(f,l,b),w(n,f,b),m(f,o,b),w(u,f,b),m(f,k,b),w(i,f,b),m(f,C,b),w(P,f,b),m(f,N,b),w(F,f,b),m(f,S,b),w(j,f,b),Y=!0},p:_t,i(f){Y||(g(e.$$.fragment,f),g(a.$$.fragment,f),g(n.$$.fragment,f),g(u.$$.fragment,f),g(i.$$.fragment,f),g(P.$$.fragment,f),g(F.$$.fragment,f),g(j.$$.fragment,f),Y=!0)},o(f){$(e.$$.fragment,f),$(a.$$.fragment,f),$(n.$$.fragment,f),$(u.$$.fragment,f),$(i.$$.fragment,f),$(P.$$.fragment,f),$(F.$$.fragment,f),$(j.$$.fragment,f),Y=!1},d(f){f&&(_(r),_(l),_(o),_(k),_(C),_(N),_(S)),y(e,f),y(a,f),y(n,f),y(u,f),y(i,f),y(P,f),y(F,f),y(j,f)}}}function xt(c){let e,r;return e=new Et({props:{queryID:"ranking_orgaos_qt",queryResult:c[2]}}),{c(){R(e.$$.fragment)},l(a){T(e.$$.fragment,a)},m(a,l){w(e,a,l),r=!0},p(a,l){const n={};l[0]&4&&(n.queryResult=a[2]),e.$set(n)},i(a){r||(g(e.$$.fragment,a),r=!0)},o(a){$(e.$$.fragment,a),r=!1},d(a){y(e,a)}}}function ta(c){let e,r;return e=new Et({props:{queryID:"perfil_contratacao",queryResult:c[3]}}),{c(){R(e.$$.fragment)},l(a){T(e.$$.fragment,a)},m(a,l){w(e,a,l),r=!0},p(a,l){const n={};l[0]&8&&(n.queryResult=a[3]),e.$set(n)},i(a){r||(g(e.$$.fragment,a),r=!0)},o(a){$(e.$$.fragment,a),r=!1},d(a){y(e,a)}}}function Ma(c){let e,r,a,l,n,o,u,k;return e=new B({props:{id:"perfil",title:"Perfil"}}),a=new B({props:{id:"qt_orgaos",title:"Órgãos",fmt:"num0"}}),n=new B({props:{id:"qt_contratos",title:"Contratos",fmt:"num0"}}),u=new B({props:{id:"vl_total",title:"Valor Total",fmt:"num1b"}}),{c(){R(e.$$.fragment),r=d(),R(a.$$.fragment),l=d(),R(n.$$.fragment),o=d(),R(u.$$.fragment)},l(i){T(e.$$.fragment,i),r=p(i),T(a.$$.fragment,i),l=p(i),T(n.$$.fragment,i),o=p(i),T(u.$$.fragment,i)},m(i,C){w(e,i,C),m(i,r,C),w(a,i,C),m(i,l,C),w(n,i,C),m(i,o,C),w(u,i,C),k=!0},p:_t,i(i){k||(g(e.$$.fragment,i),g(a.$$.fragment,i),g(n.$$.fragment,i),g(u.$$.fragment,i),k=!0)},o(i){$(e.$$.fragment,i),$(a.$$.fragment,i),$(n.$$.fragment,i),$(u.$$.fragment,i),k=!1},d(i){i&&(_(r),_(l),_(o)),y(e,i),y(a,i),y(n,i),y(u,i)}}}function aa(c){let e,r;return e=new Et({props:{queryID:"aditivos_orgaos",queryResult:c[4]}}),{c(){R(e.$$.fragment)},l(a){T(e.$$.fragment,a)},m(a,l){w(e,a,l),r=!0},p(a,l){const n={};l[0]&16&&(n.queryResult=a[4]),e.$set(n)},i(a){r||(g(e.$$.fragment,a),r=!0)},o(a){$(e.$$.fragment,a),r=!1},d(a){y(e,a)}}}function Fa(c){let e,r,a,l,n,o,u,k;return e=new B({props:{id:"situacao",title:"Situação"}}),a=new B({props:{id:"qt_orgaos",title:"Órgãos",fmt:"num0"}}),n=new B({props:{id:"qt_contratos",title:"Contratos",fmt:"num0"}}),u=new B({props:{id:"vl_total_aditado",title:"Valor Aditado",fmt:"num1b"}}),{c(){R(e.$$.fragment),r=d(),R(a.$$.fragment),l=d(),R(n.$$.fragment),o=d(),R(u.$$.fragment)},l(i){T(e.$$.fragment,i),r=p(i),T(a.$$.fragment,i),l=p(i),T(n.$$.fragment,i),o=p(i),T(u.$$.fragment,i)},m(i,C){w(e,i,C),m(i,r,C),w(a,i,C),m(i,l,C),w(n,i,C),m(i,o,C),w(u,i,C),k=!0},p:_t,i(i){k||(g(e.$$.fragment,i),g(a.$$.fragment,i),g(n.$$.fragment,i),g(u.$$.fragment,i),k=!0)},o(i){$(e.$$.fragment,i),$(a.$$.fragment,i),$(n.$$.fragment,i),$(u.$$.fragment,i),k=!1},d(i){i&&(_(r),_(l),_(o)),y(e,i),y(a,i),y(n,i),y(u,i)}}}function Sa(c){let e,r,a,l,n,o,u='<a href="#órgãos-públicos">Órgãos Públicos</a>',k,i,C="Análise das unidades gestoras responsáveis pelos contratos públicos de Santa Catarina.",P,N,F,S,j='<a href="#visão-geral">Visão Geral</a>',Y,f,b,K,O,ft,J,mt,U,W,x,ut,z,kt='<a href="#ranking-por-valor-total">Ranking por Valor Total</a>',Z,G,X,ct,rt,pt,Q,tt='<a href="#ranking-por-quantidade-de-contratos">Ranking por Quantidade de Contratos</a>',at,et,h,dt,H,bt,st,Bt='<a href="#perfil-de-contratação">Perfil de Contratação</a>',Mt,qt,gt,Ft,wt,St,it,jt='<a href="#situação-de-aditivos">Situação de Aditivos</a>',Dt,yt,$t,It,lt=typeof q<"u"&&q.title&&q.hide_title!==!0&&ya();function ea(t,s){return typeof q<"u"&&q.title?Ta:wa}let Tt=ea()(c),nt=typeof q=="object"&&Ra(),D=c[0]&&Zt(c);b=new At({props:{data:c[0],value:"total_orgaos",title:"Total de Órgãos",fmt:"num0"}}),O=new At({props:{data:c[0],value:"total_contratos",title:"Total de Contratos",fmt:"num1k"}}),J=new At({props:{data:c[0],value:"vl_total",title:"Valor Total Contratado",fmt:"num1b"}}),U=new At({props:{data:c[0],value:"vl_medio",title:"Valor Médio por Contrato",fmt:"num1k"}});let I=c[1]&&ht(c);X=new Ut({props:{data:c[1],title:"Top 20 Órgãos por Valor Total Contratado",$$slots:{default:[Ea]},$$scope:{ctx:c}}});let A=c[2]&&xt(c);h=new qa({props:{data:c[2],x:"orgao",y:"qt_contratos",title:"Top 20 Órgãos por Quantidade de Contratos",swapXY:"true"}});let L=c[3]&&ta(c);gt=new Ut({props:{data:c[3],title:"Distribuição por Perfil de Contratação",$$slots:{default:[Ma]},$$scope:{ctx:c}}});let V=c[4]&&aa(c);return $t=new Ut({props:{data:c[4],title:"Situação de Aditivos por Órgão",$$slots:{default:[Fa]},$$scope:{ctx:c}}}),{c(){lt&&lt.c(),e=d(),Tt.c(),r=M("meta"),a=M("meta"),nt&&nt.c(),l=Vt(),n=d(),o=M("h1"),o.innerHTML=u,k=d(),i=M("p"),i.textContent=C,P=d(),N=M("hr"),F=d(),S=M("h2"),S.innerHTML=j,Y=d(),D&&D.c(),f=d(),R(b.$$.fragment),K=d(),R(O.$$.fragment),ft=d(),R(J.$$.fragment),mt=d(),R(U.$$.fragment),W=d(),x=M("hr"),ut=d(),z=M("h2"),z.innerHTML=kt,Z=d(),I&&I.c(),G=d(),R(X.$$.fragment),ct=d(),rt=M("hr"),pt=d(),Q=M("h2"),Q.innerHTML=tt,at=d(),A&&A.c(),et=d(),R(h.$$.fragment),dt=d(),H=M("hr"),bt=d(),st=M("h2"),st.innerHTML=Bt,Mt=d(),L&&L.c(),qt=d(),R(gt.$$.fragment),Ft=d(),wt=M("hr"),St=d(),it=M("h2"),it.innerHTML=jt,Dt=d(),V&&V.c(),yt=d(),R($t.$$.fragment),this.h()},l(t){lt&&lt.l(t),e=p(t);const s=ra("svelte-2igo1p",document.head);Tt.l(s),r=E(s,"META",{name:!0,content:!0}),a=E(s,"META",{name:!0,content:!0}),nt&&nt.l(s),l=Vt(),s.forEach(_),n=p(t),o=E(t,"H1",{class:!0,id:!0,"data-svelte-h":!0}),vt(o)!=="svelte-vmdkv3"&&(o.innerHTML=u),k=p(t),i=E(t,"P",{class:!0,"data-svelte-h":!0}),vt(i)!=="svelte-10bb5oz"&&(i.textContent=C),P=p(t),N=E(t,"HR",{class:!0}),F=p(t),S=E(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),vt(S)!=="svelte-1nrswfb"&&(S.innerHTML=j),Y=p(t),D&&D.l(t),f=p(t),T(b.$$.fragment,t),K=p(t),T(O.$$.fragment,t),ft=p(t),T(J.$$.fragment,t),mt=p(t),T(U.$$.fragment,t),W=p(t),x=E(t,"HR",{class:!0}),ut=p(t),z=E(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),vt(z)!=="svelte-eucs2n"&&(z.innerHTML=kt),Z=p(t),I&&I.l(t),G=p(t),T(X.$$.fragment,t),ct=p(t),rt=E(t,"HR",{class:!0}),pt=p(t),Q=E(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),vt(Q)!=="svelte-ch618f"&&(Q.innerHTML=tt),at=p(t),A&&A.l(t),et=p(t),T(h.$$.fragment,t),dt=p(t),H=E(t,"HR",{class:!0}),bt=p(t),st=E(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),vt(st)!=="svelte-12qpry0"&&(st.innerHTML=Bt),Mt=p(t),L&&L.l(t),qt=p(t),T(gt.$$.fragment,t),Ft=p(t),wt=E(t,"HR",{class:!0}),St=p(t),it=E(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),vt(it)!=="svelte-1tuqd13"&&(it.innerHTML=jt),Dt=p(t),V&&V.l(t),yt=p(t),T($t.$$.fragment,t),this.h()},h(){v(r,"name","twitter:card"),v(r,"content","summary_large_image"),v(a,"name","twitter:site"),v(a,"content","@evidence_dev"),v(o,"class","markdown"),v(o,"id","órgãos-públicos"),v(i,"class","markdown"),v(N,"class","markdown"),v(S,"class","markdown"),v(S,"id","visão-geral"),v(x,"class","markdown"),v(z,"class","markdown"),v(z,"id","ranking-por-valor-total"),v(rt,"class","markdown"),v(Q,"class","markdown"),v(Q,"id","ranking-por-quantidade-de-contratos"),v(H,"class","markdown"),v(st,"class","markdown"),v(st,"id","perfil-de-contratação"),v(wt,"class","markdown"),v(it,"class","markdown"),v(it,"id","situação-de-aditivos")},m(t,s){lt&&lt.m(t,s),m(t,e,s),Tt.m(document.head,null),Lt(document.head,r),Lt(document.head,a),nt&&nt.m(document.head,null),Lt(document.head,l),m(t,n,s),m(t,o,s),m(t,k,s),m(t,i,s),m(t,P,s),m(t,N,s),m(t,F,s),m(t,S,s),m(t,Y,s),D&&D.m(t,s),m(t,f,s),w(b,t,s),m(t,K,s),w(O,t,s),m(t,ft,s),w(J,t,s),m(t,mt,s),w(U,t,s),m(t,W,s),m(t,x,s),m(t,ut,s),m(t,z,s),m(t,Z,s),I&&I.m(t,s),m(t,G,s),w(X,t,s),m(t,ct,s),m(t,rt,s),m(t,pt,s),m(t,Q,s),m(t,at,s),A&&A.m(t,s),m(t,et,s),w(h,t,s),m(t,dt,s),m(t,H,s),m(t,bt,s),m(t,st,s),m(t,Mt,s),L&&L.m(t,s),m(t,qt,s),w(gt,t,s),m(t,Ft,s),m(t,wt,s),m(t,St,s),m(t,it,s),m(t,Dt,s),V&&V.m(t,s),m(t,yt,s),w($t,t,s),It=!0},p(t,s){typeof q<"u"&&q.title&&q.hide_title!==!0&&lt.p(t,s),Tt.p(t,s),typeof q=="object"&&nt.p(t,s),t[0]?D?(D.p(t,s),s[0]&1&&g(D,1)):(D=Zt(t),D.c(),g(D,1),D.m(f.parentNode,f)):D&&(Ct(),$(D,1,1,()=>{D=null}),Rt());const Ot={};s[0]&1&&(Ot.data=t[0]),b.$set(Ot);const Gt={};s[0]&1&&(Gt.data=t[0]),O.$set(Gt);const Xt={};s[0]&1&&(Xt.data=t[0]),J.$set(Xt);const Yt={};s[0]&1&&(Yt.data=t[0]),U.$set(Yt),t[1]?I?(I.p(t,s),s[0]&2&&g(I,1)):(I=ht(t),I.c(),g(I,1),I.m(G.parentNode,G)):I&&(Ct(),$(I,1,1,()=>{I=null}),Rt());const Pt={};s[0]&2&&(Pt.data=t[1]),s[1]&2048&&(Pt.$$scope={dirty:s,ctx:t}),X.$set(Pt),t[2]?A?(A.p(t,s),s[0]&4&&g(A,1)):(A=xt(t),A.c(),g(A,1),A.m(et.parentNode,et)):A&&(Ct(),$(A,1,1,()=>{A=null}),Rt());const zt={};s[0]&4&&(zt.data=t[2]),h.$set(zt),t[3]?L?(L.p(t,s),s[0]&8&&g(L,1)):(L=ta(t),L.c(),g(L,1),L.m(qt.parentNode,qt)):L&&(Ct(),$(L,1,1,()=>{L=null}),Rt());const Nt={};s[0]&8&&(Nt.data=t[3]),s[1]&2048&&(Nt.$$scope={dirty:s,ctx:t}),gt.$set(Nt),t[4]?V?(V.p(t,s),s[0]&16&&g(V,1)):(V=aa(t),V.c(),g(V,1),V.m(yt.parentNode,yt)):V&&(Ct(),$(V,1,1,()=>{V=null}),Rt());const Qt={};s[0]&16&&(Qt.data=t[4]),s[1]&2048&&(Qt.$$scope={dirty:s,ctx:t}),$t.$set(Qt)},i(t){It||(g(D),g(b.$$.fragment,t),g(O.$$.fragment,t),g(J.$$.fragment,t),g(U.$$.fragment,t),g(I),g(X.$$.fragment,t),g(A),g(h.$$.fragment,t),g(L),g(gt.$$.fragment,t),g(V),g($t.$$.fragment,t),It=!0)},o(t){$(D),$(b.$$.fragment,t),$(O.$$.fragment,t),$(J.$$.fragment,t),$(U.$$.fragment,t),$(I),$(X.$$.fragment,t),$(A),$(h.$$.fragment,t),$(L),$(gt.$$.fragment,t),$(V),$($t.$$.fragment,t),It=!1},d(t){t&&(_(e),_(n),_(o),_(k),_(i),_(P),_(N),_(F),_(S),_(Y),_(f),_(K),_(ft),_(mt),_(W),_(x),_(ut),_(z),_(Z),_(G),_(ct),_(rt),_(pt),_(Q),_(at),_(et),_(dt),_(H),_(bt),_(st),_(Mt),_(qt),_(Ft),_(wt),_(St),_(it),_(Dt),_(yt)),lt&&lt.d(t),Tt.d(t),_(r),_(a),nt&&nt.d(t),_(l),D&&D.d(t),y(b,t),y(O,t),y(J,t),y(U,t),I&&I.d(t),y(X,t),A&&A.d(t),y(h,t),L&&L.d(t),y(gt,t),V&&V.d(t),y($t,t)}}}const q={title:"Órgãos Públicos"};function Da(c,e,r){let a,l;Kt(c,ba,H=>r(27,a=H)),Kt(c,Wt,H=>r(33,l=H));let{data:n}=e,{data:o={},customFormattingSettings:u,__db:k,inputs:i}=n;sa(Wt,l="fc3bc8a761a67c230cb83196f26a5bcb",l);let C=pa(va(i));ia(C.subscribe(H=>i=H)),la($a,{getCustomFormats:()=>u.customFormats||[]});const P=(H,bt)=>ka(k.query,H,{query_name:bt});da(P),a.params,na(()=>!0);let N={initialData:void 0,initialError:void 0},F=ot`select
    count(*)                    as total_orgaos,
    sum(qt_contratos)           as total_contratos,
    sum(vl_total_atual)         as vl_total,
    avg(vl_medio_contrato)      as vl_medio
from compras.dim_orgaos`,S=`select
    count(*)                    as total_orgaos,
    sum(qt_contratos)           as total_contratos,
    sum(vl_total_atual)         as vl_total,
    avg(vl_medio_contrato)      as vl_medio
from compras.dim_orgaos`;o.kpis_orgaos_data&&(o.kpis_orgaos_data instanceof Error?N.initialError=o.kpis_orgaos_data:N.initialData=o.kpis_orgaos_data,o.kpis_orgaos_columns&&(N.knownColumns=o.kpis_orgaos_columns));let j,Y=!1;const f=Ht.createReactive({callback:H=>{r(0,j=H)},execFn:P},{id:"kpis_orgaos",...N});f(S,{noResolve:F,...N}),globalThis[Symbol.for("kpis_orgaos")]={get value(){return j}};let b={initialData:void 0,initialError:void 0},K=ot`select
    rank_por_valor              as ranking,
    nm_unidade_gestora          as orgao,
    qt_contratos,
    qt_fornecedores_distintos   as fornecedores,
    vl_total_atual              as vl_atual,
    vl_total_aditado            as vl_aditado,
    ds_situacao_aditivo         as situacao_aditivo,
    ds_perfil_contratacao       as perfil
from compras.dim_orgaos
order by ranking
limit 20`,O=`select
    rank_por_valor              as ranking,
    nm_unidade_gestora          as orgao,
    qt_contratos,
    qt_fornecedores_distintos   as fornecedores,
    vl_total_atual              as vl_atual,
    vl_total_aditado            as vl_aditado,
    ds_situacao_aditivo         as situacao_aditivo,
    ds_perfil_contratacao       as perfil
from compras.dim_orgaos
order by ranking
limit 20`;o.ranking_orgaos_valor_data&&(o.ranking_orgaos_valor_data instanceof Error?b.initialError=o.ranking_orgaos_valor_data:b.initialData=o.ranking_orgaos_valor_data,o.ranking_orgaos_valor_columns&&(b.knownColumns=o.ranking_orgaos_valor_columns));let ft,J=!1;const mt=Ht.createReactive({callback:H=>{r(1,ft=H)},execFn:P},{id:"ranking_orgaos_valor",...b});mt(O,{noResolve:K,...b}),globalThis[Symbol.for("ranking_orgaos_valor")]={get value(){return ft}};let U={initialData:void 0,initialError:void 0},W=ot`select
    rank_por_quantidade         as ranking,
    nm_unidade_gestora          as orgao,
    qt_contratos,
    ds_perfil_contratacao       as perfil
from compras.dim_orgaos
order by ranking
limit 20`,x=`select
    rank_por_quantidade         as ranking,
    nm_unidade_gestora          as orgao,
    qt_contratos,
    ds_perfil_contratacao       as perfil
from compras.dim_orgaos
order by ranking
limit 20`;o.ranking_orgaos_qt_data&&(o.ranking_orgaos_qt_data instanceof Error?U.initialError=o.ranking_orgaos_qt_data:U.initialData=o.ranking_orgaos_qt_data,o.ranking_orgaos_qt_columns&&(U.knownColumns=o.ranking_orgaos_qt_columns));let ut,z=!1;const kt=Ht.createReactive({callback:H=>{r(2,ut=H)},execFn:P},{id:"ranking_orgaos_qt",...U});kt(x,{noResolve:W,...U}),globalThis[Symbol.for("ranking_orgaos_qt")]={get value(){return ut}};let Z={initialData:void 0,initialError:void 0},G=ot`select
    ds_perfil_contratacao       as perfil,
    count(*)                    as qt_orgaos,
    sum(qt_contratos)           as qt_contratos,
    sum(vl_total_atual)         as vl_total
from compras.dim_orgaos
group by 1
order by sum(qt_contratos) desc`,X=`select
    ds_perfil_contratacao       as perfil,
    count(*)                    as qt_orgaos,
    sum(qt_contratos)           as qt_contratos,
    sum(vl_total_atual)         as vl_total
from compras.dim_orgaos
group by 1
order by sum(qt_contratos) desc`;o.perfil_contratacao_data&&(o.perfil_contratacao_data instanceof Error?Z.initialError=o.perfil_contratacao_data:Z.initialData=o.perfil_contratacao_data,o.perfil_contratacao_columns&&(Z.knownColumns=o.perfil_contratacao_columns));let ct,rt=!1;const pt=Ht.createReactive({callback:H=>{r(3,ct=H)},execFn:P},{id:"perfil_contratacao",...Z});pt(X,{noResolve:G,...Z}),globalThis[Symbol.for("perfil_contratacao")]={get value(){return ct}};let Q={initialData:void 0,initialError:void 0},tt=ot`select
    ds_situacao_aditivo         as situacao,
    count(*)                    as qt_orgaos,
    sum(qt_contratos)           as qt_contratos,
    sum(vl_total_aditado)       as vl_total_aditado
from compras.dim_orgaos
group by 1
order by qt_orgaos desc`,at=`select
    ds_situacao_aditivo         as situacao,
    count(*)                    as qt_orgaos,
    sum(qt_contratos)           as qt_contratos,
    sum(vl_total_aditado)       as vl_total_aditado
from compras.dim_orgaos
group by 1
order by qt_orgaos desc`;o.aditivos_orgaos_data&&(o.aditivos_orgaos_data instanceof Error?Q.initialError=o.aditivos_orgaos_data:Q.initialData=o.aditivos_orgaos_data,o.aditivos_orgaos_columns&&(Q.knownColumns=o.aditivos_orgaos_columns));let et,h=!1;const dt=Ht.createReactive({callback:H=>{r(4,et=H)},execFn:P},{id:"aditivos_orgaos",...Q});return dt(at,{noResolve:tt,...Q}),globalThis[Symbol.for("aditivos_orgaos")]={get value(){return et}},c.$$set=H=>{"data"in H&&r(5,n=H.data)},c.$$.update=()=>{c.$$.dirty[0]&32&&r(6,{data:o={},customFormattingSettings:u,__db:k}=n,o),c.$$.dirty[0]&64&&ga.set(Object.keys(o).length>0),c.$$.dirty[0]&134217728&&a.params,c.$$.dirty[0]&1920&&(F||!Y?F||(f(S,{noResolve:F,...N}),r(10,Y=!0)):f(S,{noResolve:F})),c.$$.dirty[0]&30720&&(K||!J?K||(mt(O,{noResolve:K,...b}),r(14,J=!0)):mt(O,{noResolve:K})),c.$$.dirty[0]&491520&&(W||!z?W||(kt(x,{noResolve:W,...U}),r(18,z=!0)):kt(x,{noResolve:W})),c.$$.dirty[0]&7864320&&(G||!rt?G||(pt(X,{noResolve:G,...Z}),r(22,rt=!0)):pt(X,{noResolve:G})),c.$$.dirty[0]&125829120&&(tt||!h?tt||(dt(at,{noResolve:tt,...Q}),r(26,h=!0)):dt(at,{noResolve:tt}))},r(8,F=ot`select
    count(*)                    as total_orgaos,
    sum(qt_contratos)           as total_contratos,
    sum(vl_total_atual)         as vl_total,
    avg(vl_medio_contrato)      as vl_medio
from compras.dim_orgaos`),r(9,S=`select
    count(*)                    as total_orgaos,
    sum(qt_contratos)           as total_contratos,
    sum(vl_total_atual)         as vl_total,
    avg(vl_medio_contrato)      as vl_medio
from compras.dim_orgaos`),r(12,K=ot`select
    rank_por_valor              as ranking,
    nm_unidade_gestora          as orgao,
    qt_contratos,
    qt_fornecedores_distintos   as fornecedores,
    vl_total_atual              as vl_atual,
    vl_total_aditado            as vl_aditado,
    ds_situacao_aditivo         as situacao_aditivo,
    ds_perfil_contratacao       as perfil
from compras.dim_orgaos
order by ranking
limit 20`),r(13,O=`select
    rank_por_valor              as ranking,
    nm_unidade_gestora          as orgao,
    qt_contratos,
    qt_fornecedores_distintos   as fornecedores,
    vl_total_atual              as vl_atual,
    vl_total_aditado            as vl_aditado,
    ds_situacao_aditivo         as situacao_aditivo,
    ds_perfil_contratacao       as perfil
from compras.dim_orgaos
order by ranking
limit 20`),r(16,W=ot`select
    rank_por_quantidade         as ranking,
    nm_unidade_gestora          as orgao,
    qt_contratos,
    ds_perfil_contratacao       as perfil
from compras.dim_orgaos
order by ranking
limit 20`),r(17,x=`select
    rank_por_quantidade         as ranking,
    nm_unidade_gestora          as orgao,
    qt_contratos,
    ds_perfil_contratacao       as perfil
from compras.dim_orgaos
order by ranking
limit 20`),r(20,G=ot`select
    ds_perfil_contratacao       as perfil,
    count(*)                    as qt_orgaos,
    sum(qt_contratos)           as qt_contratos,
    sum(vl_total_atual)         as vl_total
from compras.dim_orgaos
group by 1
order by sum(qt_contratos) desc`),r(21,X=`select
    ds_perfil_contratacao       as perfil,
    count(*)                    as qt_orgaos,
    sum(qt_contratos)           as qt_contratos,
    sum(vl_total_atual)         as vl_total
from compras.dim_orgaos
group by 1
order by sum(qt_contratos) desc`),r(24,tt=ot`select
    ds_situacao_aditivo         as situacao,
    count(*)                    as qt_orgaos,
    sum(qt_contratos)           as qt_contratos,
    sum(vl_total_aditado)       as vl_total_aditado
from compras.dim_orgaos
group by 1
order by qt_orgaos desc`),r(25,at=`select
    ds_situacao_aditivo         as situacao,
    count(*)                    as qt_orgaos,
    sum(qt_contratos)           as qt_contratos,
    sum(vl_total_aditado)       as vl_total_aditado
from compras.dim_orgaos
group by 1
order by qt_orgaos desc`),[j,ft,ut,ct,et,n,o,N,F,S,Y,b,K,O,J,U,W,x,z,Z,G,X,rt,Q,tt,at,h,a]}class ja extends ua{constructor(e){super(),ca(this,e,Da,Sa,oa,{data:5},null,[-1,-1])}}export{ja as component};
