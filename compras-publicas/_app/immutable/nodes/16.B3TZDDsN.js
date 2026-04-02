import{s as ba,d as l,i as _,a as je,b as H,c,h as wa,e as A,f as Ae,g as lt,j as $,k as L,l as sa,m as qa,o as ka,n as Ta,p as ya,q as _t,r as Ia,t as Ra,u as Ca}from"../chunks/scheduler.DjHbl-jX.js";import{S as Ea,i as Ha,d as w,t as g,a as u,c as At,m as q,b as k,e as T,g as Lt}from"../chunks/index.DylIKcrZ.js";import{D as re,e as Da,s as Sa,Q as Vt,p as Fa,C,a as ia,r as na,b as Ma}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.C4ybX0RH.js";import{w as ja}from"../chunks/entry.C9z7pgeU.js";import{h as W,p as Aa}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as La}from"../chunks/stores.CisT2OjB.js";import{Q as Ot}from"../chunks/QueryViewer.SFbHT3Ej.js";import{B as la}from"../chunks/BarChart.CLNE8QJl.js";import{B as Ct}from"../chunks/BigValue.3D8O99yE.js";function Va(p){let a,i=V.title+"",e;return{c(){a=L("h1"),e=Ca(i),this.h()},l(f){a=A(f,"H1",{class:!0});var m=Ia(a);e=Ra(m,i),m.forEach(l),this.h()},h(){H(a,"class","title")},m(f,m){_(f,a,m),je(a,e)},p:_t,d(f){f&&l(a)}}}function Oa(p){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:_t,p:_t,d:_t}}function Qa(p){let a,i,e,f,m;return document.title=a=V.title,{c(){i=$(),e=L("meta"),f=$(),m=L("meta"),this.h()},l(n){i=c(n),e=A(n,"META",{property:!0,content:!0}),f=c(n),m=A(n,"META",{name:!0,content:!0}),this.h()},h(){var n,v;H(e,"property","og:title"),H(e,"content",((n=V.og)==null?void 0:n.title)??V.title),H(m,"name","twitter:title"),H(m,"content",((v=V.og)==null?void 0:v.title)??V.title)},m(n,v){_(n,i,v),_(n,e,v),_(n,f,v),_(n,m,v)},p(n,v){v&0&&a!==(a=V.title)&&(document.title=a)},d(n){n&&(l(i),l(e),l(f),l(m))}}}function Na(p){var m,n;let a,i,e=(V.description||((m=V.og)==null?void 0:m.description))&&Ua(),f=((n=V.og)==null?void 0:n.image)&&za();return{c(){e&&e.c(),a=$(),f&&f.c(),i=Ae()},l(v){e&&e.l(v),a=c(v),f&&f.l(v),i=Ae()},m(v,I){e&&e.m(v,I),_(v,a,I),f&&f.m(v,I),_(v,i,I)},p(v,I){var b,E;(V.description||(b=V.og)!=null&&b.description)&&e.p(v,I),(E=V.og)!=null&&E.image&&f.p(v,I)},d(v){v&&(l(a),l(i)),e&&e.d(v),f&&f.d(v)}}}function Ua(p){let a,i,e,f,m;return{c(){a=L("meta"),i=$(),e=L("meta"),f=$(),m=L("meta"),this.h()},l(n){a=A(n,"META",{name:!0,content:!0}),i=c(n),e=A(n,"META",{property:!0,content:!0}),f=c(n),m=A(n,"META",{name:!0,content:!0}),this.h()},h(){var n,v,I;H(a,"name","description"),H(a,"content",V.description??((n=V.og)==null?void 0:n.description)),H(e,"property","og:description"),H(e,"content",((v=V.og)==null?void 0:v.description)??V.description),H(m,"name","twitter:description"),H(m,"content",((I=V.og)==null?void 0:I.description)??V.description)},m(n,v){_(n,a,v),_(n,i,v),_(n,e,v),_(n,f,v),_(n,m,v)},p:_t,d(n){n&&(l(a),l(i),l(e),l(f),l(m))}}}function za(p){let a,i,e;return{c(){a=L("meta"),i=$(),e=L("meta"),this.h()},l(f){a=A(f,"META",{property:!0,content:!0}),i=c(f),e=A(f,"META",{name:!0,content:!0}),this.h()},h(){var f,m;H(a,"property","og:image"),H(a,"content",ia((f=V.og)==null?void 0:f.image)),H(e,"name","twitter:image"),H(e,"content",ia((m=V.og)==null?void 0:m.image))},m(f,m){_(f,a,m),_(f,i,m),_(f,e,m)},p:_t,d(f){f&&(l(a),l(i),l(e))}}}function _a(p){let a,i;return a=new Ot({props:{queryID:"kpis_ti",queryResult:p[0]}}),{c(){T(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,f){q(a,e,f),i=!0},p(e,f){const m={};f[0]&1&&(m.queryResult=e[0]),a.$set(m)},i(e){i||(u(a.$$.fragment,e),i=!0)},o(e){g(a.$$.fragment,e),i=!1},d(e){w(a,e)}}}function ma(p){let a,i;return a=new Ot({props:{queryID:"ti_subcategorias",queryResult:p[1]}}),{c(){T(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,f){q(a,e,f),i=!0},p(e,f){const m={};f[0]&2&&(m.queryResult=e[1]),a.$set(m)},i(e){i||(u(a.$$.fragment,e),i=!0)},o(e){g(a.$$.fragment,e),i=!1},d(e){w(a,e)}}}function Ba(p){let a,i,e,f,m,n,v,I,b,E;return a=new C({props:{id:"subcategoria",title:"Subcategoria"}}),e=new C({props:{id:"qt_contratos",title:"Qtd. Contratos",fmt:"num0"}}),m=new C({props:{id:"qt_fornecedores",title:"Fornecedores",fmt:"num0"}}),v=new C({props:{id:"vl_total",title:"Valor Total",fmt:"num1m"}}),b=new C({props:{id:"vl_medio",title:"Valor Médio",fmt:"num1m"}}),{c(){T(a.$$.fragment),i=$(),T(e.$$.fragment),f=$(),T(m.$$.fragment),n=$(),T(v.$$.fragment),I=$(),T(b.$$.fragment)},l(r){k(a.$$.fragment,r),i=c(r),k(e.$$.fragment,r),f=c(r),k(m.$$.fragment,r),n=c(r),k(v.$$.fragment,r),I=c(r),k(b.$$.fragment,r)},m(r,y){q(a,r,y),_(r,i,y),q(e,r,y),_(r,f,y),q(m,r,y),_(r,n,y),q(v,r,y),_(r,I,y),q(b,r,y),E=!0},p:_t,i(r){E||(u(a.$$.fragment,r),u(e.$$.fragment,r),u(m.$$.fragment,r),u(v.$$.fragment,r),u(b.$$.fragment,r),E=!0)},o(r){g(a.$$.fragment,r),g(e.$$.fragment,r),g(m.$$.fragment,r),g(v.$$.fragment,r),g(b.$$.fragment,r),E=!1},d(r){r&&(l(i),l(f),l(n),l(I)),w(a,r),w(e,r),w(m,r),w(v,r),w(b,r)}}}function fa(p){let a,i;return a=new Ot({props:{queryID:"orgaos_ti",queryResult:p[2]}}),{c(){T(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,f){q(a,e,f),i=!0},p(e,f){const m={};f[0]&4&&(m.queryResult=e[2]),a.$set(m)},i(e){i||(u(a.$$.fragment,e),i=!0)},o(e){g(a.$$.fragment,e),i=!1},d(e){w(a,e)}}}function Pa(p){let a,i,e,f,m,n,v,I;return a=new C({props:{id:"orgao",title:"Órgão"}}),e=new C({props:{id:"qt_contratos",title:"Qtd. Contratos",fmt:"num0"}}),m=new C({props:{id:"qt_fornecedores",title:"Fornecedores",fmt:"num0"}}),v=new C({props:{id:"vl_total",title:"Valor Total",fmt:"num1m"}}),{c(){T(a.$$.fragment),i=$(),T(e.$$.fragment),f=$(),T(m.$$.fragment),n=$(),T(v.$$.fragment)},l(b){k(a.$$.fragment,b),i=c(b),k(e.$$.fragment,b),f=c(b),k(m.$$.fragment,b),n=c(b),k(v.$$.fragment,b)},m(b,E){q(a,b,E),_(b,i,E),q(e,b,E),_(b,f,E),q(m,b,E),_(b,n,E),q(v,b,E),I=!0},p:_t,i(b){I||(u(a.$$.fragment,b),u(e.$$.fragment,b),u(m.$$.fragment,b),u(v.$$.fragment,b),I=!0)},o(b){g(a.$$.fragment,b),g(e.$$.fragment,b),g(m.$$.fragment,b),g(v.$$.fragment,b),I=!1},d(b){b&&(l(i),l(f),l(n)),w(a,b),w(e,b),w(m,b),w(v,b)}}}function ua(p){let a,i;return a=new Ot({props:{queryID:"fornecedores_ti",queryResult:p[3]}}),{c(){T(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,f){q(a,e,f),i=!0},p(e,f){const m={};f[0]&8&&(m.queryResult=e[3]),a.$set(m)},i(e){i||(u(a.$$.fragment,e),i=!0)},o(e){g(a.$$.fragment,e),i=!1},d(e){w(a,e)}}}function Ga(p){let a,i,e,f,m,n,v,I,b,E;return a=new C({props:{id:"fornecedor",title:"Fornecedor"}}),e=new C({props:{id:"qt_contratos",title:"Qtd. Contratos",fmt:"num0"}}),m=new C({props:{id:"qt_orgaos",title:"Órgãos",fmt:"num0"}}),v=new C({props:{id:"vl_total",title:"Valor Total",fmt:"num1m"}}),b=new C({props:{id:"vl_aditado",title:"Aditivos",fmt:"num1m"}}),{c(){T(a.$$.fragment),i=$(),T(e.$$.fragment),f=$(),T(m.$$.fragment),n=$(),T(v.$$.fragment),I=$(),T(b.$$.fragment)},l(r){k(a.$$.fragment,r),i=c(r),k(e.$$.fragment,r),f=c(r),k(m.$$.fragment,r),n=c(r),k(v.$$.fragment,r),I=c(r),k(b.$$.fragment,r)},m(r,y){q(a,r,y),_(r,i,y),q(e,r,y),_(r,f,y),q(m,r,y),_(r,n,y),q(v,r,y),_(r,I,y),q(b,r,y),E=!0},p:_t,i(r){E||(u(a.$$.fragment,r),u(e.$$.fragment,r),u(m.$$.fragment,r),u(v.$$.fragment,r),u(b.$$.fragment,r),E=!0)},o(r){g(a.$$.fragment,r),g(e.$$.fragment,r),g(m.$$.fragment,r),g(v.$$.fragment,r),g(b.$$.fragment,r),E=!1},d(r){r&&(l(i),l(f),l(n),l(I)),w(a,r),w(e,r),w(m,r),w(v,r),w(b,r)}}}function da(p){let a,i;return a=new Ot({props:{queryID:"kpis_dev",queryResult:p[4]}}),{c(){T(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,f){q(a,e,f),i=!0},p(e,f){const m={};f[0]&16&&(m.queryResult=e[4]),a.$set(m)},i(e){i||(u(a.$$.fragment,e),i=!0)},o(e){g(a.$$.fragment,e),i=!1},d(e){w(a,e)}}}function ca(p){let a,i;return a=new Ot({props:{queryID:"fornecedores_dev",queryResult:p[5]}}),{c(){T(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,f){q(a,e,f),i=!0},p(e,f){const m={};f[0]&32&&(m.queryResult=e[5]),a.$set(m)},i(e){i||(u(a.$$.fragment,e),i=!0)},o(e){g(a.$$.fragment,e),i=!1},d(e){w(a,e)}}}function Ka(p){let a,i,e,f,m,n,v,I,b,E;return a=new C({props:{id:"fornecedor",title:"Fornecedor"}}),e=new C({props:{id:"qt_contratos",title:"Qtd. Contratos",fmt:"num0"}}),m=new C({props:{id:"qt_orgaos",title:"Órgãos",fmt:"num0"}}),v=new C({props:{id:"vl_total",title:"Valor Total",fmt:"num1m"}}),b=new C({props:{id:"vl_aditado",title:"Aditivos",fmt:"num1m"}}),{c(){T(a.$$.fragment),i=$(),T(e.$$.fragment),f=$(),T(m.$$.fragment),n=$(),T(v.$$.fragment),I=$(),T(b.$$.fragment)},l(r){k(a.$$.fragment,r),i=c(r),k(e.$$.fragment,r),f=c(r),k(m.$$.fragment,r),n=c(r),k(v.$$.fragment,r),I=c(r),k(b.$$.fragment,r)},m(r,y){q(a,r,y),_(r,i,y),q(e,r,y),_(r,f,y),q(m,r,y),_(r,n,y),q(v,r,y),_(r,I,y),q(b,r,y),E=!0},p:_t,i(r){E||(u(a.$$.fragment,r),u(e.$$.fragment,r),u(m.$$.fragment,r),u(v.$$.fragment,r),u(b.$$.fragment,r),E=!0)},o(r){g(a.$$.fragment,r),g(e.$$.fragment,r),g(m.$$.fragment,r),g(v.$$.fragment,r),g(b.$$.fragment,r),E=!1},d(r){r&&(l(i),l(f),l(n),l(I)),w(a,r),w(e,r),w(m,r),w(v,r),w(b,r)}}}function $a(p){let a,i;return a=new Ot({props:{queryID:"contratos_dev",queryResult:p[6]}}),{c(){T(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,f){q(a,e,f),i=!0},p(e,f){const m={};f[0]&64&&(m.queryResult=e[6]),a.$set(m)},i(e){i||(u(a.$$.fragment,e),i=!0)},o(e){g(a.$$.fragment,e),i=!1},d(e){w(a,e)}}}function Xa(p){let a,i,e,f,m,n,v,I,b,E,r,y,F,O,M,N,j,Q;return a=new C({props:{id:"fornecedor",title:"Fornecedor"}}),e=new C({props:{id:"ano",title:"Ano"}}),m=new C({props:{id:"vl_original",title:"Valor Original",fmt:"num1m"}}),v=new C({props:{id:"vl_atual",title:"Valor Atual",fmt:"num1m"}}),b=new C({props:{id:"vl_aditado",title:"Aditivo",fmt:"num1m"}}),r=new C({props:{id:"nu_contrato",title:"Contrato"}}),F=new C({props:{id:"situacao",title:"Situação"}}),M=new C({props:{id:"orgao",title:"Órgão"}}),j=new C({props:{id:"objeto",title:"Objeto"}}),{c(){T(a.$$.fragment),i=$(),T(e.$$.fragment),f=$(),T(m.$$.fragment),n=$(),T(v.$$.fragment),I=$(),T(b.$$.fragment),E=$(),T(r.$$.fragment),y=$(),T(F.$$.fragment),O=$(),T(M.$$.fragment),N=$(),T(j.$$.fragment)},l(d){k(a.$$.fragment,d),i=c(d),k(e.$$.fragment,d),f=c(d),k(m.$$.fragment,d),n=c(d),k(v.$$.fragment,d),I=c(d),k(b.$$.fragment,d),E=c(d),k(r.$$.fragment,d),y=c(d),k(F.$$.fragment,d),O=c(d),k(M.$$.fragment,d),N=c(d),k(j.$$.fragment,d)},m(d,D){q(a,d,D),_(d,i,D),q(e,d,D),_(d,f,D),q(m,d,D),_(d,n,D),q(v,d,D),_(d,I,D),q(b,d,D),_(d,E,D),q(r,d,D),_(d,y,D),q(F,d,D),_(d,O,D),q(M,d,D),_(d,N,D),q(j,d,D),Q=!0},p:_t,i(d){Q||(u(a.$$.fragment,d),u(e.$$.fragment,d),u(m.$$.fragment,d),u(v.$$.fragment,d),u(b.$$.fragment,d),u(r.$$.fragment,d),u(F.$$.fragment,d),u(M.$$.fragment,d),u(j.$$.fragment,d),Q=!0)},o(d){g(a.$$.fragment,d),g(e.$$.fragment,d),g(m.$$.fragment,d),g(v.$$.fragment,d),g(b.$$.fragment,d),g(r.$$.fragment,d),g(F.$$.fragment,d),g(M.$$.fragment,d),g(j.$$.fragment,d),Q=!1},d(d){d&&(l(i),l(f),l(n),l(I),l(E),l(y),l(O),l(N)),w(a,d),w(e,d),w(m,d),w(v,d),w(b,d),w(r,d),w(F,d),w(M,d),w(j,d)}}}function va(p){let a,i;return a=new Ot({props:{queryID:"contratos_ti",queryResult:p[7]}}),{c(){T(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,f){q(a,e,f),i=!0},p(e,f){const m={};f[0]&128&&(m.queryResult=e[7]),a.$set(m)},i(e){i||(u(a.$$.fragment,e),i=!0)},o(e){g(a.$$.fragment,e),i=!1},d(e){w(a,e)}}}function Ya(p){let a,i,e,f,m,n,v,I,b,E,r,y,F,O,M,N,j,Q,d,D;return a=new C({props:{id:"fornecedor",title:"Fornecedor"}}),e=new C({props:{id:"subcategoria",title:"Subcategoria"}}),m=new C({props:{id:"ano",title:"Ano"}}),v=new C({props:{id:"vl_original",title:"Valor Original",fmt:"num1m"}}),b=new C({props:{id:"vl_atual",title:"Valor Atual",fmt:"num1m"}}),r=new C({props:{id:"vl_aditado",title:"Aditivo",fmt:"num1m"}}),F=new C({props:{id:"nu_contrato",title:"Contrato"}}),M=new C({props:{id:"situacao",title:"Situação"}}),j=new C({props:{id:"orgao",title:"Órgão"}}),d=new C({props:{id:"objeto",title:"Objeto"}}),{c(){T(a.$$.fragment),i=$(),T(e.$$.fragment),f=$(),T(m.$$.fragment),n=$(),T(v.$$.fragment),I=$(),T(b.$$.fragment),E=$(),T(r.$$.fragment),y=$(),T(F.$$.fragment),O=$(),T(M.$$.fragment),N=$(),T(j.$$.fragment),Q=$(),T(d.$$.fragment)},l(s){k(a.$$.fragment,s),i=c(s),k(e.$$.fragment,s),f=c(s),k(m.$$.fragment,s),n=c(s),k(v.$$.fragment,s),I=c(s),k(b.$$.fragment,s),E=c(s),k(r.$$.fragment,s),y=c(s),k(F.$$.fragment,s),O=c(s),k(M.$$.fragment,s),N=c(s),k(j.$$.fragment,s),Q=c(s),k(d.$$.fragment,s)},m(s,R){q(a,s,R),_(s,i,R),q(e,s,R),_(s,f,R),q(m,s,R),_(s,n,R),q(v,s,R),_(s,I,R),q(b,s,R),_(s,E,R),q(r,s,R),_(s,y,R),q(F,s,R),_(s,O,R),q(M,s,R),_(s,N,R),q(j,s,R),_(s,Q,R),q(d,s,R),D=!0},p:_t,i(s){D||(u(a.$$.fragment,s),u(e.$$.fragment,s),u(m.$$.fragment,s),u(v.$$.fragment,s),u(b.$$.fragment,s),u(r.$$.fragment,s),u(F.$$.fragment,s),u(M.$$.fragment,s),u(j.$$.fragment,s),u(d.$$.fragment,s),D=!0)},o(s){g(a.$$.fragment,s),g(e.$$.fragment,s),g(m.$$.fragment,s),g(v.$$.fragment,s),g(b.$$.fragment,s),g(r.$$.fragment,s),g(F.$$.fragment,s),g(M.$$.fragment,s),g(j.$$.fragment,s),g(d.$$.fragment,s),D=!1},d(s){s&&(l(i),l(f),l(n),l(I),l(E),l(y),l(O),l(N),l(Q)),w(a,s),w(e,s),w(m,s),w(v,s),w(b,s),w(r,s),w(F,s),w(M,s),w(j,s),w(d,s)}}}function pa(p){let a,i;return a=new Ot({props:{queryID:"contratos_ti_por_fornecedor",queryResult:p[8]}}),{c(){T(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,f){q(a,e,f),i=!0},p(e,f){const m={};f[0]&256&&(m.queryResult=e[8]),a.$set(m)},i(e){i||(u(a.$$.fragment,e),i=!0)},o(e){g(a.$$.fragment,e),i=!1},d(e){w(a,e)}}}function Ja(p){let a,i,e,f,m,n,v,I,b,E,r,y,F,O,M,N,j,Q,d,D;return a=new C({props:{id:"fornecedor",title:"Fornecedor"}}),e=new C({props:{id:"subcategoria",title:"Subcategoria"}}),m=new C({props:{id:"vl_total_original",title:"Valor Original",fmt:"num1m"}}),v=new C({props:{id:"vl_total_atual",title:"Valor Total",fmt:"num1m"}}),b=new C({props:{id:"vl_total_aditado",title:"Aditivos",fmt:"num1m"}}),r=new C({props:{id:"qt_contratos",title:"Contratos",fmt:"num0"}}),F=new C({props:{id:"primeiro_ano",title:"Desde"}}),M=new C({props:{id:"ultimo_ano",title:"Até"}}),j=new C({props:{id:"qt_orgaos",title:"Órgãos",fmt:"num0"}}),d=new C({props:{id:"numeros_contrato",title:"Nº Contratos"}}),{c(){T(a.$$.fragment),i=$(),T(e.$$.fragment),f=$(),T(m.$$.fragment),n=$(),T(v.$$.fragment),I=$(),T(b.$$.fragment),E=$(),T(r.$$.fragment),y=$(),T(F.$$.fragment),O=$(),T(M.$$.fragment),N=$(),T(j.$$.fragment),Q=$(),T(d.$$.fragment)},l(s){k(a.$$.fragment,s),i=c(s),k(e.$$.fragment,s),f=c(s),k(m.$$.fragment,s),n=c(s),k(v.$$.fragment,s),I=c(s),k(b.$$.fragment,s),E=c(s),k(r.$$.fragment,s),y=c(s),k(F.$$.fragment,s),O=c(s),k(M.$$.fragment,s),N=c(s),k(j.$$.fragment,s),Q=c(s),k(d.$$.fragment,s)},m(s,R){q(a,s,R),_(s,i,R),q(e,s,R),_(s,f,R),q(m,s,R),_(s,n,R),q(v,s,R),_(s,I,R),q(b,s,R),_(s,E,R),q(r,s,R),_(s,y,R),q(F,s,R),_(s,O,R),q(M,s,R),_(s,N,R),q(j,s,R),_(s,Q,R),q(d,s,R),D=!0},p:_t,i(s){D||(u(a.$$.fragment,s),u(e.$$.fragment,s),u(m.$$.fragment,s),u(v.$$.fragment,s),u(b.$$.fragment,s),u(r.$$.fragment,s),u(F.$$.fragment,s),u(M.$$.fragment,s),u(j.$$.fragment,s),u(d.$$.fragment,s),D=!0)},o(s){g(a.$$.fragment,s),g(e.$$.fragment,s),g(m.$$.fragment,s),g(v.$$.fragment,s),g(b.$$.fragment,s),g(r.$$.fragment,s),g(F.$$.fragment,s),g(M.$$.fragment,s),g(j.$$.fragment,s),g(d.$$.fragment,s),D=!1},d(s){s&&(l(i),l(f),l(n),l(I),l(E),l(y),l(O),l(N),l(Q)),w(a,s),w(e,s),w(m,s),w(v,s),w(b,s),w(r,s),w(F,s),w(M,s),w(j,s),w(d,s)}}}function Wa(p){let a,i,e,f,m,n,v='<p class="markdown">O Estado de Santa Catarina investe significativamente em tecnologia — desde a aquisição de licenças de software até o desenvolvimento de sistemas próprios. Esta análise revela o perfil completo das contratações de TI, os principais fornecedores e os órgãos que mais investem em tecnologia.</p>',I,b,E,r,y='<a href="#panorama-geral-de-ti">Panorama Geral de TI</a>',F,O,M,N,j,Q,d,D,s,R,mt,ft,h,bt,Et,Qt,st,wt='<a href="#distribuição-por-subcategoria">Distribuição por Subcategoria</a>',ut,at,se='O setor de TI se divide em quatro subcategorias que refletem diferentes tipos de contratação. O <strong class="markdown">licenciamento</strong> representa a aquisição de produtos prontos, enquanto <strong class="markdown">manutenção, suporte e desenvolvimento</strong> indicam serviços especializados de maior complexidade e valor agregado.',Nt,qt,tt,dt,ot,Ut,Ht,zt,Z,kt='<a href="#quais-órgãos-mais-investem-em-ti">Quais órgãos mais investem em TI?</a>',Tt,ct,ie="A concentração de contratos de TI em poucos órgãos revela onde a transformação digital do estado está mais avançada. Órgãos com alto investimento em TI tendem a ter sistemas mais complexos e maior dependência de fornecedores especializados.",Bt,rt,et,yt,$t,Pt,Dt,vt,x,Gt='<a href="#quem-são-os-principais-fornecedores-de-ti">Quem são os principais fornecedores de TI?</a>',Kt,It,pt,gt,it,Rt,nt,ne='<a href="#desenvolvimento-de-software-em-detalhe">Desenvolvimento de Software em Detalhe</a>',Xt,S,pe='O desenvolvimento de software sob medida representa o nível mais estratégico das contratações de TI — o estado investe em sistemas próprios que atendem necessidades específicas da administração pública. Com apenas <strong class="markdown">34 contratos</strong>, são as contratações de maior complexidade e valor agregado por contrato.',ge,le,Yt,be,Jt,we,Wt,qe,Zt,ke,_e,xt,Te,me,ht,ye,de,Ie,St,Be='<a href="#todos-os-contratos-de-ti">Todos os Contratos de TI</a>',Re,fe,te,Ce,ce,Ee,Ft,Pe='<a href="#contratos-agrupados-por-fornecedor">Contratos Agrupados por Fornecedor</a>',He,ee,Ge="Esta visão consolida todos os contratos de TI por fornecedor, permitindo identificar empresas com relacionamento de longo prazo com o estado e o volume total de negócios de cada uma.",De,ue,ae,Se,$e,Fe,oe,Ke='<p class="markdown">💡 Volte para os <a href="/Analytics-Engineer/compras-publicas/ramos" class="markdown">Ramos de Atividade</a>, <a href="/Analytics-Engineer/compras-publicas/fornecedores-ramo" class="markdown">Fornecedores por Ramo</a> ou para a <a href="/Analytics-Engineer/compras-publicas" class="markdown">Visão Geral</a>.</p>',Me,Mt=typeof V<"u"&&V.title&&V.hide_title!==!0&&Va();function ga(t,o){return typeof V<"u"&&V.title?Qa:Oa}let ve=ga()(p),jt=typeof V=="object"&&Na(),U=p[0]&&_a(p);M=new Ct({props:{data:p[0],value:"qt_contratos",title:"Contratos de TI",fmt:"num0"}}),j=new Ct({props:{data:p[0],value:"qt_fornecedores",title:"Fornecedores",fmt:"num0"}}),d=new Ct({props:{data:p[0],value:"qt_orgaos",title:"Órgãos",fmt:"num0"}}),s=new Ct({props:{data:p[0],value:"vl_total_atual",title:"Valor Total",fmt:"num1b"}}),mt=new Ct({props:{data:p[0],value:"vl_medio",title:"Valor Médio",fmt:"num1m"}}),h=new Ct({props:{data:p[0],value:"vl_total_aditado",title:"Total em Aditivos",fmt:"num1m"}});let z=p[1]&&ma(p);tt=new la({props:{data:p[1],x:"subcategoria",y:"qt_contratos",title:"Contratos por Subcategoria de TI",swapXY:"true"}}),ot=new re({props:{data:p[1],title:"Resumo por Subcategoria",index:"false",$$slots:{default:[Ba]},$$scope:{ctx:p}}});let B=p[2]&&fa(p);et=new la({props:{data:p[2],x:"orgao",y:"vl_total",title:"Top 15 Órgãos por Valor Total em TI",swapXY:"true"}}),$t=new re({props:{data:p[2],title:"Top 15 Órgãos por Investimento em TI",index:"false",$$slots:{default:[Pa]},$$scope:{ctx:p}}});let P=p[3]&&ua(p);pt=new re({props:{data:p[3],title:"Top 20 Fornecedores de TI por Valor",index:"false",$$slots:{default:[Ga]},$$scope:{ctx:p}}});let G=p[4]&&da(p);Yt=new Ct({props:{data:p[4],value:"qt_contratos",title:"Contratos de Desenvolvimento",fmt:"num0"}}),Jt=new Ct({props:{data:p[4],value:"qt_fornecedores",title:"Fornecedores",fmt:"num0"}}),Wt=new Ct({props:{data:p[4],value:"vl_total",title:"Valor Total",fmt:"num1m"}}),Zt=new Ct({props:{data:p[4],value:"vl_medio",title:"Valor Médio por Contrato",fmt:"num1m"}});let K=p[5]&&ca(p);xt=new re({props:{data:p[5],title:"Fornecedores de Desenvolvimento de Software",index:"false",$$slots:{default:[Ka]},$$scope:{ctx:p}}});let X=p[6]&&$a(p);ht=new re({props:{data:p[6],title:"Todos os Contratos de Desenvolvimento de Software",index:"false",$$slots:{default:[Xa]},$$scope:{ctx:p}}});let Y=p[7]&&va(p);te=new re({props:{data:p[7],title:"Top 100 Contratos de TI por Valor",index:"false",$$slots:{default:[Ya]},$$scope:{ctx:p}}});let J=p[8]&&pa(p);return ae=new re({props:{data:p[8],title:"Fornecedores de TI — Consolidado",index:"false",$$slots:{default:[Ja]},$$scope:{ctx:p}}}),{c(){Mt&&Mt.c(),a=$(),ve.c(),i=L("meta"),e=L("meta"),jt&&jt.c(),f=Ae(),m=$(),n=L("blockquote"),n.innerHTML=v,I=$(),b=L("hr"),E=$(),r=L("h2"),r.innerHTML=y,F=$(),U&&U.c(),O=$(),T(M.$$.fragment),N=$(),T(j.$$.fragment),Q=$(),T(d.$$.fragment),D=$(),T(s.$$.fragment),R=$(),T(mt.$$.fragment),ft=$(),T(h.$$.fragment),bt=$(),Et=L("hr"),Qt=$(),st=L("h2"),st.innerHTML=wt,ut=$(),at=L("p"),at.innerHTML=se,Nt=$(),z&&z.c(),qt=$(),T(tt.$$.fragment),dt=$(),T(ot.$$.fragment),Ut=$(),Ht=L("hr"),zt=$(),Z=L("h2"),Z.innerHTML=kt,Tt=$(),ct=L("p"),ct.textContent=ie,Bt=$(),B&&B.c(),rt=$(),T(et.$$.fragment),yt=$(),T($t.$$.fragment),Pt=$(),Dt=L("hr"),vt=$(),x=L("h2"),x.innerHTML=Gt,Kt=$(),P&&P.c(),It=$(),T(pt.$$.fragment),gt=$(),it=L("hr"),Rt=$(),nt=L("h2"),nt.innerHTML=ne,Xt=$(),S=L("p"),S.innerHTML=pe,ge=$(),G&&G.c(),le=$(),T(Yt.$$.fragment),be=$(),T(Jt.$$.fragment),we=$(),T(Wt.$$.fragment),qe=$(),T(Zt.$$.fragment),ke=$(),K&&K.c(),_e=$(),T(xt.$$.fragment),Te=$(),X&&X.c(),me=$(),T(ht.$$.fragment),ye=$(),de=L("hr"),Ie=$(),St=L("h2"),St.innerHTML=Be,Re=$(),Y&&Y.c(),fe=$(),T(te.$$.fragment),Ce=$(),ce=L("hr"),Ee=$(),Ft=L("h2"),Ft.innerHTML=Pe,He=$(),ee=L("p"),ee.textContent=Ge,De=$(),J&&J.c(),ue=$(),T(ae.$$.fragment),Se=$(),$e=L("hr"),Fe=$(),oe=L("blockquote"),oe.innerHTML=Ke,this.h()},l(t){Mt&&Mt.l(t),a=c(t);const o=wa("svelte-2igo1p",document.head);ve.l(o),i=A(o,"META",{name:!0,content:!0}),e=A(o,"META",{name:!0,content:!0}),jt&&jt.l(o),f=Ae(),o.forEach(l),m=c(t),n=A(t,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),lt(n)!=="svelte-a7q6im"&&(n.innerHTML=v),I=c(t),b=A(t,"HR",{class:!0}),E=c(t),r=A(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),lt(r)!=="svelte-q5qxqm"&&(r.innerHTML=y),F=c(t),U&&U.l(t),O=c(t),k(M.$$.fragment,t),N=c(t),k(j.$$.fragment,t),Q=c(t),k(d.$$.fragment,t),D=c(t),k(s.$$.fragment,t),R=c(t),k(mt.$$.fragment,t),ft=c(t),k(h.$$.fragment,t),bt=c(t),Et=A(t,"HR",{class:!0}),Qt=c(t),st=A(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),lt(st)!=="svelte-ulm3ic"&&(st.innerHTML=wt),ut=c(t),at=A(t,"P",{class:!0,"data-svelte-h":!0}),lt(at)!=="svelte-1kldr4k"&&(at.innerHTML=se),Nt=c(t),z&&z.l(t),qt=c(t),k(tt.$$.fragment,t),dt=c(t),k(ot.$$.fragment,t),Ut=c(t),Ht=A(t,"HR",{class:!0}),zt=c(t),Z=A(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),lt(Z)!=="svelte-1jv03xz"&&(Z.innerHTML=kt),Tt=c(t),ct=A(t,"P",{class:!0,"data-svelte-h":!0}),lt(ct)!=="svelte-1j3190u"&&(ct.textContent=ie),Bt=c(t),B&&B.l(t),rt=c(t),k(et.$$.fragment,t),yt=c(t),k($t.$$.fragment,t),Pt=c(t),Dt=A(t,"HR",{class:!0}),vt=c(t),x=A(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),lt(x)!=="svelte-1fhf1q9"&&(x.innerHTML=Gt),Kt=c(t),P&&P.l(t),It=c(t),k(pt.$$.fragment,t),gt=c(t),it=A(t,"HR",{class:!0}),Rt=c(t),nt=A(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),lt(nt)!=="svelte-uuq6dz"&&(nt.innerHTML=ne),Xt=c(t),S=A(t,"P",{class:!0,"data-svelte-h":!0}),lt(S)!=="svelte-3t6ujm"&&(S.innerHTML=pe),ge=c(t),G&&G.l(t),le=c(t),k(Yt.$$.fragment,t),be=c(t),k(Jt.$$.fragment,t),we=c(t),k(Wt.$$.fragment,t),qe=c(t),k(Zt.$$.fragment,t),ke=c(t),K&&K.l(t),_e=c(t),k(xt.$$.fragment,t),Te=c(t),X&&X.l(t),me=c(t),k(ht.$$.fragment,t),ye=c(t),de=A(t,"HR",{class:!0}),Ie=c(t),St=A(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),lt(St)!=="svelte-2pm2hi"&&(St.innerHTML=Be),Re=c(t),Y&&Y.l(t),fe=c(t),k(te.$$.fragment,t),Ce=c(t),ce=A(t,"HR",{class:!0}),Ee=c(t),Ft=A(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),lt(Ft)!=="svelte-vpjg49"&&(Ft.innerHTML=Pe),He=c(t),ee=A(t,"P",{class:!0,"data-svelte-h":!0}),lt(ee)!=="svelte-1iwsrdn"&&(ee.textContent=Ge),De=c(t),J&&J.l(t),ue=c(t),k(ae.$$.fragment,t),Se=c(t),$e=A(t,"HR",{class:!0}),Fe=c(t),oe=A(t,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),lt(oe)!=="svelte-yfguzz"&&(oe.innerHTML=Ke),this.h()},h(){H(i,"name","twitter:card"),H(i,"content","summary_large_image"),H(e,"name","twitter:site"),H(e,"content","@evidence_dev"),H(n,"class","markdown"),H(b,"class","markdown"),H(r,"class","markdown"),H(r,"id","panorama-geral-de-ti"),H(Et,"class","markdown"),H(st,"class","markdown"),H(st,"id","distribuição-por-subcategoria"),H(at,"class","markdown"),H(Ht,"class","markdown"),H(Z,"class","markdown"),H(Z,"id","quais-órgãos-mais-investem-em-ti"),H(ct,"class","markdown"),H(Dt,"class","markdown"),H(x,"class","markdown"),H(x,"id","quem-são-os-principais-fornecedores-de-ti"),H(it,"class","markdown"),H(nt,"class","markdown"),H(nt,"id","desenvolvimento-de-software-em-detalhe"),H(S,"class","markdown"),H(de,"class","markdown"),H(St,"class","markdown"),H(St,"id","todos-os-contratos-de-ti"),H(ce,"class","markdown"),H(Ft,"class","markdown"),H(Ft,"id","contratos-agrupados-por-fornecedor"),H(ee,"class","markdown"),H($e,"class","markdown"),H(oe,"class","markdown")},m(t,o){Mt&&Mt.m(t,o),_(t,a,o),ve.m(document.head,null),je(document.head,i),je(document.head,e),jt&&jt.m(document.head,null),je(document.head,f),_(t,m,o),_(t,n,o),_(t,I,o),_(t,b,o),_(t,E,o),_(t,r,o),_(t,F,o),U&&U.m(t,o),_(t,O,o),q(M,t,o),_(t,N,o),q(j,t,o),_(t,Q,o),q(d,t,o),_(t,D,o),q(s,t,o),_(t,R,o),q(mt,t,o),_(t,ft,o),q(h,t,o),_(t,bt,o),_(t,Et,o),_(t,Qt,o),_(t,st,o),_(t,ut,o),_(t,at,o),_(t,Nt,o),z&&z.m(t,o),_(t,qt,o),q(tt,t,o),_(t,dt,o),q(ot,t,o),_(t,Ut,o),_(t,Ht,o),_(t,zt,o),_(t,Z,o),_(t,Tt,o),_(t,ct,o),_(t,Bt,o),B&&B.m(t,o),_(t,rt,o),q(et,t,o),_(t,yt,o),q($t,t,o),_(t,Pt,o),_(t,Dt,o),_(t,vt,o),_(t,x,o),_(t,Kt,o),P&&P.m(t,o),_(t,It,o),q(pt,t,o),_(t,gt,o),_(t,it,o),_(t,Rt,o),_(t,nt,o),_(t,Xt,o),_(t,S,o),_(t,ge,o),G&&G.m(t,o),_(t,le,o),q(Yt,t,o),_(t,be,o),q(Jt,t,o),_(t,we,o),q(Wt,t,o),_(t,qe,o),q(Zt,t,o),_(t,ke,o),K&&K.m(t,o),_(t,_e,o),q(xt,t,o),_(t,Te,o),X&&X.m(t,o),_(t,me,o),q(ht,t,o),_(t,ye,o),_(t,de,o),_(t,Ie,o),_(t,St,o),_(t,Re,o),Y&&Y.m(t,o),_(t,fe,o),q(te,t,o),_(t,Ce,o),_(t,ce,o),_(t,Ee,o),_(t,Ft,o),_(t,He,o),_(t,ee,o),_(t,De,o),J&&J.m(t,o),_(t,ue,o),q(ae,t,o),_(t,Se,o),_(t,$e,o),_(t,Fe,o),_(t,oe,o),Me=!0},p(t,o){typeof V<"u"&&V.title&&V.hide_title!==!0&&Mt.p(t,o),ve.p(t,o),typeof V=="object"&&jt.p(t,o),t[0]?U?(U.p(t,o),o[0]&1&&u(U,1)):(U=_a(t),U.c(),u(U,1),U.m(O.parentNode,O)):U&&(Lt(),g(U,1,1,()=>{U=null}),At());const Xe={};o[0]&1&&(Xe.data=t[0]),M.$set(Xe);const Ye={};o[0]&1&&(Ye.data=t[0]),j.$set(Ye);const Je={};o[0]&1&&(Je.data=t[0]),d.$set(Je);const We={};o[0]&1&&(We.data=t[0]),s.$set(We);const Ze={};o[0]&1&&(Ze.data=t[0]),mt.$set(Ze);const xe={};o[0]&1&&(xe.data=t[0]),h.$set(xe),t[1]?z?(z.p(t,o),o[0]&2&&u(z,1)):(z=ma(t),z.c(),u(z,1),z.m(qt.parentNode,qt)):z&&(Lt(),g(z,1,1,()=>{z=null}),At());const he={};o[0]&2&&(he.data=t[1]),tt.$set(he);const Le={};o[0]&2&&(Le.data=t[1]),o[2]&16&&(Le.$$scope={dirty:o,ctx:t}),ot.$set(Le),t[2]?B?(B.p(t,o),o[0]&4&&u(B,1)):(B=fa(t),B.c(),u(B,1),B.m(rt.parentNode,rt)):B&&(Lt(),g(B,1,1,()=>{B=null}),At());const ta={};o[0]&4&&(ta.data=t[2]),et.$set(ta);const Ve={};o[0]&4&&(Ve.data=t[2]),o[2]&16&&(Ve.$$scope={dirty:o,ctx:t}),$t.$set(Ve),t[3]?P?(P.p(t,o),o[0]&8&&u(P,1)):(P=ua(t),P.c(),u(P,1),P.m(It.parentNode,It)):P&&(Lt(),g(P,1,1,()=>{P=null}),At());const Oe={};o[0]&8&&(Oe.data=t[3]),o[2]&16&&(Oe.$$scope={dirty:o,ctx:t}),pt.$set(Oe),t[4]?G?(G.p(t,o),o[0]&16&&u(G,1)):(G=da(t),G.c(),u(G,1),G.m(le.parentNode,le)):G&&(Lt(),g(G,1,1,()=>{G=null}),At());const ea={};o[0]&16&&(ea.data=t[4]),Yt.$set(ea);const aa={};o[0]&16&&(aa.data=t[4]),Jt.$set(aa);const oa={};o[0]&16&&(oa.data=t[4]),Wt.$set(oa);const ra={};o[0]&16&&(ra.data=t[4]),Zt.$set(ra),t[5]?K?(K.p(t,o),o[0]&32&&u(K,1)):(K=ca(t),K.c(),u(K,1),K.m(_e.parentNode,_e)):K&&(Lt(),g(K,1,1,()=>{K=null}),At());const Qe={};o[0]&32&&(Qe.data=t[5]),o[2]&16&&(Qe.$$scope={dirty:o,ctx:t}),xt.$set(Qe),t[6]?X?(X.p(t,o),o[0]&64&&u(X,1)):(X=$a(t),X.c(),u(X,1),X.m(me.parentNode,me)):X&&(Lt(),g(X,1,1,()=>{X=null}),At());const Ne={};o[0]&64&&(Ne.data=t[6]),o[2]&16&&(Ne.$$scope={dirty:o,ctx:t}),ht.$set(Ne),t[7]?Y?(Y.p(t,o),o[0]&128&&u(Y,1)):(Y=va(t),Y.c(),u(Y,1),Y.m(fe.parentNode,fe)):Y&&(Lt(),g(Y,1,1,()=>{Y=null}),At());const Ue={};o[0]&128&&(Ue.data=t[7]),o[2]&16&&(Ue.$$scope={dirty:o,ctx:t}),te.$set(Ue),t[8]?J?(J.p(t,o),o[0]&256&&u(J,1)):(J=pa(t),J.c(),u(J,1),J.m(ue.parentNode,ue)):J&&(Lt(),g(J,1,1,()=>{J=null}),At());const ze={};o[0]&256&&(ze.data=t[8]),o[2]&16&&(ze.$$scope={dirty:o,ctx:t}),ae.$set(ze)},i(t){Me||(u(U),u(M.$$.fragment,t),u(j.$$.fragment,t),u(d.$$.fragment,t),u(s.$$.fragment,t),u(mt.$$.fragment,t),u(h.$$.fragment,t),u(z),u(tt.$$.fragment,t),u(ot.$$.fragment,t),u(B),u(et.$$.fragment,t),u($t.$$.fragment,t),u(P),u(pt.$$.fragment,t),u(G),u(Yt.$$.fragment,t),u(Jt.$$.fragment,t),u(Wt.$$.fragment,t),u(Zt.$$.fragment,t),u(K),u(xt.$$.fragment,t),u(X),u(ht.$$.fragment,t),u(Y),u(te.$$.fragment,t),u(J),u(ae.$$.fragment,t),Me=!0)},o(t){g(U),g(M.$$.fragment,t),g(j.$$.fragment,t),g(d.$$.fragment,t),g(s.$$.fragment,t),g(mt.$$.fragment,t),g(h.$$.fragment,t),g(z),g(tt.$$.fragment,t),g(ot.$$.fragment,t),g(B),g(et.$$.fragment,t),g($t.$$.fragment,t),g(P),g(pt.$$.fragment,t),g(G),g(Yt.$$.fragment,t),g(Jt.$$.fragment,t),g(Wt.$$.fragment,t),g(Zt.$$.fragment,t),g(K),g(xt.$$.fragment,t),g(X),g(ht.$$.fragment,t),g(Y),g(te.$$.fragment,t),g(J),g(ae.$$.fragment,t),Me=!1},d(t){t&&(l(a),l(m),l(n),l(I),l(b),l(E),l(r),l(F),l(O),l(N),l(Q),l(D),l(R),l(ft),l(bt),l(Et),l(Qt),l(st),l(ut),l(at),l(Nt),l(qt),l(dt),l(Ut),l(Ht),l(zt),l(Z),l(Tt),l(ct),l(Bt),l(rt),l(yt),l(Pt),l(Dt),l(vt),l(x),l(Kt),l(It),l(gt),l(it),l(Rt),l(nt),l(Xt),l(S),l(ge),l(le),l(be),l(we),l(qe),l(ke),l(_e),l(Te),l(me),l(ye),l(de),l(Ie),l(St),l(Re),l(fe),l(Ce),l(ce),l(Ee),l(Ft),l(He),l(ee),l(De),l(ue),l(Se),l($e),l(Fe),l(oe)),Mt&&Mt.d(t),ve.d(t),l(i),l(e),jt&&jt.d(t),l(f),U&&U.d(t),w(M,t),w(j,t),w(d,t),w(s,t),w(mt,t),w(h,t),z&&z.d(t),w(tt,t),w(ot,t),B&&B.d(t),w(et,t),w($t,t),P&&P.d(t),w(pt,t),G&&G.d(t),w(Yt,t),w(Jt,t),w(Wt,t),w(Zt,t),K&&K.d(t),w(xt,t),X&&X.d(t),w(ht,t),Y&&Y.d(t),w(te,t),J&&J.d(t),w(ae,t)}}}const V={title:"Tecnologia da Informação"};function Za(p,a,i){let e,f;sa(p,La,S=>i(47,e=S)),sa(p,na,S=>i(53,f=S));let{data:m}=a,{data:n={},customFormattingSettings:v,__db:I,inputs:b}=m;qa(na,f="359d3de603a7e11690cf4c15688ec8b0",f);let E=Da(ja(b));ka(E.subscribe(S=>b=S)),Ta(Ma,{getCustomFormats:()=>v.customFormats||[]});const r=(S,pe)=>Aa(I.query,S,{query_name:pe});Sa(r),e.params,ya(()=>!0);let y={initialData:void 0,initialError:void 0},F=W`select
    count(*)                            as qt_contratos,
    count(distinct id_contratado)       as qt_fornecedores,
    count(distinct cod_unidade_gestora) as qt_orgaos,
    sum(vl_original)                    as vl_total_original,
    sum(vl_atual)                       as vl_total_atual,
    sum(vl_aditado)                     as vl_total_aditado,
    avg(vl_original)                    as vl_medio
from compras.fct_contratos_ramo
where ramo_atividade like 'TI -%'`,O=`select
    count(*)                            as qt_contratos,
    count(distinct id_contratado)       as qt_fornecedores,
    count(distinct cod_unidade_gestora) as qt_orgaos,
    sum(vl_original)                    as vl_total_original,
    sum(vl_atual)                       as vl_total_atual,
    sum(vl_aditado)                     as vl_total_aditado,
    avg(vl_original)                    as vl_medio
from compras.fct_contratos_ramo
where ramo_atividade like 'TI -%'`;n.kpis_ti_data&&(n.kpis_ti_data instanceof Error?y.initialError=n.kpis_ti_data:y.initialData=n.kpis_ti_data,n.kpis_ti_columns&&(y.knownColumns=n.kpis_ti_columns));let M,N=!1;const j=Vt.createReactive({callback:S=>{i(0,M=S)},execFn:r},{id:"kpis_ti",...y});j(O,{noResolve:F,...y}),globalThis[Symbol.for("kpis_ti")]={get value(){return M}};let Q={initialData:void 0,initialError:void 0},d=W`select
    ramo_atividade                      as subcategoria,
    count(*)                            as qt_contratos,
    count(distinct id_contratado)       as qt_fornecedores,
    sum(vl_atual)                       as vl_total,
    avg(vl_original)                    as vl_medio
from compras.fct_contratos_ramo
where ramo_atividade like 'TI -%'
group by 1
order by qt_contratos desc`,D=`select
    ramo_atividade                      as subcategoria,
    count(*)                            as qt_contratos,
    count(distinct id_contratado)       as qt_fornecedores,
    sum(vl_atual)                       as vl_total,
    avg(vl_original)                    as vl_medio
from compras.fct_contratos_ramo
where ramo_atividade like 'TI -%'
group by 1
order by qt_contratos desc`;n.ti_subcategorias_data&&(n.ti_subcategorias_data instanceof Error?Q.initialError=n.ti_subcategorias_data:Q.initialData=n.ti_subcategorias_data,n.ti_subcategorias_columns&&(Q.knownColumns=n.ti_subcategorias_columns));let s,R=!1;const mt=Vt.createReactive({callback:S=>{i(1,s=S)},execFn:r},{id:"ti_subcategorias",...Q});mt(D,{noResolve:d,...Q}),globalThis[Symbol.for("ti_subcategorias")]={get value(){return s}};let ft={initialData:void 0,initialError:void 0},h=W`select
    nm_unidade_gestora                  as orgao,
    count(*)                            as qt_contratos,
    count(distinct id_contratado)       as qt_fornecedores,
    sum(vl_atual)                       as vl_total
from compras.fct_contratos_ramo
where ramo_atividade like 'TI -%'
group by 1
order by vl_total desc
limit 15`,bt=`select
    nm_unidade_gestora                  as orgao,
    count(*)                            as qt_contratos,
    count(distinct id_contratado)       as qt_fornecedores,
    sum(vl_atual)                       as vl_total
from compras.fct_contratos_ramo
where ramo_atividade like 'TI -%'
group by 1
order by vl_total desc
limit 15`;n.orgaos_ti_data&&(n.orgaos_ti_data instanceof Error?ft.initialError=n.orgaos_ti_data:ft.initialData=n.orgaos_ti_data,n.orgaos_ti_columns&&(ft.knownColumns=n.orgaos_ti_columns));let Et,Qt=!1;const st=Vt.createReactive({callback:S=>{i(2,Et=S)},execFn:r},{id:"orgaos_ti",...ft});st(bt,{noResolve:h,...ft}),globalThis[Symbol.for("orgaos_ti")]={get value(){return Et}};let wt={initialData:void 0,initialError:void 0},ut=W`select
    nm_contratado                       as fornecedor,
    count(*)                            as qt_contratos,
    count(distinct cod_unidade_gestora) as qt_orgaos,
    sum(vl_atual)                       as vl_total,
    sum(vl_aditado)                     as vl_aditado
from compras.fct_contratos_ramo
where ramo_atividade like 'TI -%'
group by 1
order by vl_total desc
limit 20`,at=`select
    nm_contratado                       as fornecedor,
    count(*)                            as qt_contratos,
    count(distinct cod_unidade_gestora) as qt_orgaos,
    sum(vl_atual)                       as vl_total,
    sum(vl_aditado)                     as vl_aditado
from compras.fct_contratos_ramo
where ramo_atividade like 'TI -%'
group by 1
order by vl_total desc
limit 20`;n.fornecedores_ti_data&&(n.fornecedores_ti_data instanceof Error?wt.initialError=n.fornecedores_ti_data:wt.initialData=n.fornecedores_ti_data,n.fornecedores_ti_columns&&(wt.knownColumns=n.fornecedores_ti_columns));let se,Nt=!1;const qt=Vt.createReactive({callback:S=>{i(3,se=S)},execFn:r},{id:"fornecedores_ti",...wt});qt(at,{noResolve:ut,...wt}),globalThis[Symbol.for("fornecedores_ti")]={get value(){return se}};let tt={initialData:void 0,initialError:void 0},dt=W`select
    count(*)                            as qt_contratos,
    count(distinct id_contratado)       as qt_fornecedores,
    sum(vl_atual)                       as vl_total,
    avg(vl_original)                    as vl_medio
from compras.fct_contratos_ramo
where ramo_atividade = 'TI - Desenvolvimento de Software'`,ot=`select
    count(*)                            as qt_contratos,
    count(distinct id_contratado)       as qt_fornecedores,
    sum(vl_atual)                       as vl_total,
    avg(vl_original)                    as vl_medio
from compras.fct_contratos_ramo
where ramo_atividade = 'TI - Desenvolvimento de Software'`;n.kpis_dev_data&&(n.kpis_dev_data instanceof Error?tt.initialError=n.kpis_dev_data:tt.initialData=n.kpis_dev_data,n.kpis_dev_columns&&(tt.knownColumns=n.kpis_dev_columns));let Ut,Ht=!1;const zt=Vt.createReactive({callback:S=>{i(4,Ut=S)},execFn:r},{id:"kpis_dev",...tt});zt(ot,{noResolve:dt,...tt}),globalThis[Symbol.for("kpis_dev")]={get value(){return Ut}};let Z={initialData:void 0,initialError:void 0},kt=W`select
    nm_contratado                       as fornecedor,
    count(*)                            as qt_contratos,
    count(distinct cod_unidade_gestora) as qt_orgaos,
    sum(vl_atual)                       as vl_total,
    sum(vl_aditado)                     as vl_aditado
from compras.fct_contratos_ramo
where ramo_atividade = 'TI - Desenvolvimento de Software'
group by 1
order by vl_total desc`,Tt=`select
    nm_contratado                       as fornecedor,
    count(*)                            as qt_contratos,
    count(distinct cod_unidade_gestora) as qt_orgaos,
    sum(vl_atual)                       as vl_total,
    sum(vl_aditado)                     as vl_aditado
from compras.fct_contratos_ramo
where ramo_atividade = 'TI - Desenvolvimento de Software'
group by 1
order by vl_total desc`;n.fornecedores_dev_data&&(n.fornecedores_dev_data instanceof Error?Z.initialError=n.fornecedores_dev_data:Z.initialData=n.fornecedores_dev_data,n.fornecedores_dev_columns&&(Z.knownColumns=n.fornecedores_dev_columns));let ct,ie=!1;const Bt=Vt.createReactive({callback:S=>{i(5,ct=S)},execFn:r},{id:"fornecedores_dev",...Z});Bt(Tt,{noResolve:kt,...Z}),globalThis[Symbol.for("fornecedores_dev")]={get value(){return ct}};let rt={initialData:void 0,initialError:void 0},et=W`select
    nu_contrato,
    nm_contratado                       as fornecedor,
    nm_unidade_gestora                  as orgao,
    ds_objeto                           as objeto,
    ano_assinatura::integer             as ano,
    vl_original,
    vl_atual,
    vl_aditado,
    ds_situacao                         as situacao
from compras.fct_contratos_ramo
where ramo_atividade = 'TI - Desenvolvimento de Software'
order by vl_atual desc`,yt=`select
    nu_contrato,
    nm_contratado                       as fornecedor,
    nm_unidade_gestora                  as orgao,
    ds_objeto                           as objeto,
    ano_assinatura::integer             as ano,
    vl_original,
    vl_atual,
    vl_aditado,
    ds_situacao                         as situacao
from compras.fct_contratos_ramo
where ramo_atividade = 'TI - Desenvolvimento de Software'
order by vl_atual desc`;n.contratos_dev_data&&(n.contratos_dev_data instanceof Error?rt.initialError=n.contratos_dev_data:rt.initialData=n.contratos_dev_data,n.contratos_dev_columns&&(rt.knownColumns=n.contratos_dev_columns));let $t,Pt=!1;const Dt=Vt.createReactive({callback:S=>{i(6,$t=S)},execFn:r},{id:"contratos_dev",...rt});Dt(yt,{noResolve:et,...rt}),globalThis[Symbol.for("contratos_dev")]={get value(){return $t}};let vt={initialData:void 0,initialError:void 0},x=W`select
    nu_contrato,
    ramo_atividade                      as subcategoria,
    nm_contratado                       as fornecedor,
    nm_unidade_gestora                  as orgao,
    ds_objeto                           as objeto,
    ano_assinatura::integer             as ano,
    vl_original,
    vl_atual,
    vl_aditado,
    ds_situacao                         as situacao
from compras.fct_contratos_ramo
where ramo_atividade like 'TI -%'
order by vl_atual desc
limit 100`,Gt=`select
    nu_contrato,
    ramo_atividade                      as subcategoria,
    nm_contratado                       as fornecedor,
    nm_unidade_gestora                  as orgao,
    ds_objeto                           as objeto,
    ano_assinatura::integer             as ano,
    vl_original,
    vl_atual,
    vl_aditado,
    ds_situacao                         as situacao
from compras.fct_contratos_ramo
where ramo_atividade like 'TI -%'
order by vl_atual desc
limit 100`;n.contratos_ti_data&&(n.contratos_ti_data instanceof Error?vt.initialError=n.contratos_ti_data:vt.initialData=n.contratos_ti_data,n.contratos_ti_columns&&(vt.knownColumns=n.contratos_ti_columns));let Kt,It=!1;const pt=Vt.createReactive({callback:S=>{i(7,Kt=S)},execFn:r},{id:"contratos_ti",...vt});pt(Gt,{noResolve:x,...vt}),globalThis[Symbol.for("contratos_ti")]={get value(){return Kt}};let gt={initialData:void 0,initialError:void 0},it=W`select
    nm_contratado                               as fornecedor,
    ramo_atividade                              as subcategoria,
    string_agg(nu_contrato, ', ' order by ano_assinatura) as numeros_contrato,
    count(*)                                    as qt_contratos,
    min(ano_assinatura::integer)                as primeiro_ano,
    max(ano_assinatura::integer)                as ultimo_ano,
    count(distinct cod_unidade_gestora)         as qt_orgaos,
    sum(vl_original)                            as vl_total_original,
    sum(vl_atual)                               as vl_total_atual,
    sum(vl_aditado)                             as vl_total_aditado
from compras.fct_contratos_ramo
where ramo_atividade like 'TI -%'
group by 1, 2
order by vl_total_atual desc`,Rt=`select
    nm_contratado                               as fornecedor,
    ramo_atividade                              as subcategoria,
    string_agg(nu_contrato, ', ' order by ano_assinatura) as numeros_contrato,
    count(*)                                    as qt_contratos,
    min(ano_assinatura::integer)                as primeiro_ano,
    max(ano_assinatura::integer)                as ultimo_ano,
    count(distinct cod_unidade_gestora)         as qt_orgaos,
    sum(vl_original)                            as vl_total_original,
    sum(vl_atual)                               as vl_total_atual,
    sum(vl_aditado)                             as vl_total_aditado
from compras.fct_contratos_ramo
where ramo_atividade like 'TI -%'
group by 1, 2
order by vl_total_atual desc`;n.contratos_ti_por_fornecedor_data&&(n.contratos_ti_por_fornecedor_data instanceof Error?gt.initialError=n.contratos_ti_por_fornecedor_data:gt.initialData=n.contratos_ti_por_fornecedor_data,n.contratos_ti_por_fornecedor_columns&&(gt.knownColumns=n.contratos_ti_por_fornecedor_columns));let nt,ne=!1;const Xt=Vt.createReactive({callback:S=>{i(8,nt=S)},execFn:r},{id:"contratos_ti_por_fornecedor",...gt});return Xt(Rt,{noResolve:it,...gt}),globalThis[Symbol.for("contratos_ti_por_fornecedor")]={get value(){return nt}},p.$$set=S=>{"data"in S&&i(9,m=S.data)},p.$$.update=()=>{p.$$.dirty[0]&512&&i(10,{data:n={},customFormattingSettings:v,__db:I}=m,n),p.$$.dirty[0]&1024&&Fa.set(Object.keys(n).length>0),p.$$.dirty[1]&65536&&e.params,p.$$.dirty[0]&30720&&(F||!N?F||(j(O,{noResolve:F,...y}),i(14,N=!0)):j(O,{noResolve:F})),p.$$.dirty[0]&491520&&(d||!R?d||(mt(D,{noResolve:d,...Q}),i(18,R=!0)):mt(D,{noResolve:d})),p.$$.dirty[0]&7864320&&(h||!Qt?h||(st(bt,{noResolve:h,...ft}),i(22,Qt=!0)):st(bt,{noResolve:h})),p.$$.dirty[0]&125829120&&(ut||!Nt?ut||(qt(at,{noResolve:ut,...wt}),i(26,Nt=!0)):qt(at,{noResolve:ut})),p.$$.dirty[0]&2013265920&&(dt||!Ht?dt||(zt(ot,{noResolve:dt,...tt}),i(30,Ht=!0)):zt(ot,{noResolve:dt})),p.$$.dirty[1]&15&&(kt||!ie?kt||(Bt(Tt,{noResolve:kt,...Z}),i(34,ie=!0)):Bt(Tt,{noResolve:kt})),p.$$.dirty[1]&240&&(et||!Pt?et||(Dt(yt,{noResolve:et,...rt}),i(38,Pt=!0)):Dt(yt,{noResolve:et})),p.$$.dirty[1]&3840&&(x||!It?x||(pt(Gt,{noResolve:x,...vt}),i(42,It=!0)):pt(Gt,{noResolve:x})),p.$$.dirty[1]&61440&&(it||!ne?it||(Xt(Rt,{noResolve:it,...gt}),i(46,ne=!0)):Xt(Rt,{noResolve:it}))},i(12,F=W`select
    count(*)                            as qt_contratos,
    count(distinct id_contratado)       as qt_fornecedores,
    count(distinct cod_unidade_gestora) as qt_orgaos,
    sum(vl_original)                    as vl_total_original,
    sum(vl_atual)                       as vl_total_atual,
    sum(vl_aditado)                     as vl_total_aditado,
    avg(vl_original)                    as vl_medio
from compras.fct_contratos_ramo
where ramo_atividade like 'TI -%'`),i(13,O=`select
    count(*)                            as qt_contratos,
    count(distinct id_contratado)       as qt_fornecedores,
    count(distinct cod_unidade_gestora) as qt_orgaos,
    sum(vl_original)                    as vl_total_original,
    sum(vl_atual)                       as vl_total_atual,
    sum(vl_aditado)                     as vl_total_aditado,
    avg(vl_original)                    as vl_medio
from compras.fct_contratos_ramo
where ramo_atividade like 'TI -%'`),i(16,d=W`select
    ramo_atividade                      as subcategoria,
    count(*)                            as qt_contratos,
    count(distinct id_contratado)       as qt_fornecedores,
    sum(vl_atual)                       as vl_total,
    avg(vl_original)                    as vl_medio
from compras.fct_contratos_ramo
where ramo_atividade like 'TI -%'
group by 1
order by qt_contratos desc`),i(17,D=`select
    ramo_atividade                      as subcategoria,
    count(*)                            as qt_contratos,
    count(distinct id_contratado)       as qt_fornecedores,
    sum(vl_atual)                       as vl_total,
    avg(vl_original)                    as vl_medio
from compras.fct_contratos_ramo
where ramo_atividade like 'TI -%'
group by 1
order by qt_contratos desc`),i(20,h=W`select
    nm_unidade_gestora                  as orgao,
    count(*)                            as qt_contratos,
    count(distinct id_contratado)       as qt_fornecedores,
    sum(vl_atual)                       as vl_total
from compras.fct_contratos_ramo
where ramo_atividade like 'TI -%'
group by 1
order by vl_total desc
limit 15`),i(21,bt=`select
    nm_unidade_gestora                  as orgao,
    count(*)                            as qt_contratos,
    count(distinct id_contratado)       as qt_fornecedores,
    sum(vl_atual)                       as vl_total
from compras.fct_contratos_ramo
where ramo_atividade like 'TI -%'
group by 1
order by vl_total desc
limit 15`),i(24,ut=W`select
    nm_contratado                       as fornecedor,
    count(*)                            as qt_contratos,
    count(distinct cod_unidade_gestora) as qt_orgaos,
    sum(vl_atual)                       as vl_total,
    sum(vl_aditado)                     as vl_aditado
from compras.fct_contratos_ramo
where ramo_atividade like 'TI -%'
group by 1
order by vl_total desc
limit 20`),i(25,at=`select
    nm_contratado                       as fornecedor,
    count(*)                            as qt_contratos,
    count(distinct cod_unidade_gestora) as qt_orgaos,
    sum(vl_atual)                       as vl_total,
    sum(vl_aditado)                     as vl_aditado
from compras.fct_contratos_ramo
where ramo_atividade like 'TI -%'
group by 1
order by vl_total desc
limit 20`),i(28,dt=W`select
    count(*)                            as qt_contratos,
    count(distinct id_contratado)       as qt_fornecedores,
    sum(vl_atual)                       as vl_total,
    avg(vl_original)                    as vl_medio
from compras.fct_contratos_ramo
where ramo_atividade = 'TI - Desenvolvimento de Software'`),i(29,ot=`select
    count(*)                            as qt_contratos,
    count(distinct id_contratado)       as qt_fornecedores,
    sum(vl_atual)                       as vl_total,
    avg(vl_original)                    as vl_medio
from compras.fct_contratos_ramo
where ramo_atividade = 'TI - Desenvolvimento de Software'`),i(32,kt=W`select
    nm_contratado                       as fornecedor,
    count(*)                            as qt_contratos,
    count(distinct cod_unidade_gestora) as qt_orgaos,
    sum(vl_atual)                       as vl_total,
    sum(vl_aditado)                     as vl_aditado
from compras.fct_contratos_ramo
where ramo_atividade = 'TI - Desenvolvimento de Software'
group by 1
order by vl_total desc`),i(33,Tt=`select
    nm_contratado                       as fornecedor,
    count(*)                            as qt_contratos,
    count(distinct cod_unidade_gestora) as qt_orgaos,
    sum(vl_atual)                       as vl_total,
    sum(vl_aditado)                     as vl_aditado
from compras.fct_contratos_ramo
where ramo_atividade = 'TI - Desenvolvimento de Software'
group by 1
order by vl_total desc`),i(36,et=W`select
    nu_contrato,
    nm_contratado                       as fornecedor,
    nm_unidade_gestora                  as orgao,
    ds_objeto                           as objeto,
    ano_assinatura::integer             as ano,
    vl_original,
    vl_atual,
    vl_aditado,
    ds_situacao                         as situacao
from compras.fct_contratos_ramo
where ramo_atividade = 'TI - Desenvolvimento de Software'
order by vl_atual desc`),i(37,yt=`select
    nu_contrato,
    nm_contratado                       as fornecedor,
    nm_unidade_gestora                  as orgao,
    ds_objeto                           as objeto,
    ano_assinatura::integer             as ano,
    vl_original,
    vl_atual,
    vl_aditado,
    ds_situacao                         as situacao
from compras.fct_contratos_ramo
where ramo_atividade = 'TI - Desenvolvimento de Software'
order by vl_atual desc`),i(40,x=W`select
    nu_contrato,
    ramo_atividade                      as subcategoria,
    nm_contratado                       as fornecedor,
    nm_unidade_gestora                  as orgao,
    ds_objeto                           as objeto,
    ano_assinatura::integer             as ano,
    vl_original,
    vl_atual,
    vl_aditado,
    ds_situacao                         as situacao
from compras.fct_contratos_ramo
where ramo_atividade like 'TI -%'
order by vl_atual desc
limit 100`),i(41,Gt=`select
    nu_contrato,
    ramo_atividade                      as subcategoria,
    nm_contratado                       as fornecedor,
    nm_unidade_gestora                  as orgao,
    ds_objeto                           as objeto,
    ano_assinatura::integer             as ano,
    vl_original,
    vl_atual,
    vl_aditado,
    ds_situacao                         as situacao
from compras.fct_contratos_ramo
where ramo_atividade like 'TI -%'
order by vl_atual desc
limit 100`),i(44,it=W`select
    nm_contratado                               as fornecedor,
    ramo_atividade                              as subcategoria,
    string_agg(nu_contrato, ', ' order by ano_assinatura) as numeros_contrato,
    count(*)                                    as qt_contratos,
    min(ano_assinatura::integer)                as primeiro_ano,
    max(ano_assinatura::integer)                as ultimo_ano,
    count(distinct cod_unidade_gestora)         as qt_orgaos,
    sum(vl_original)                            as vl_total_original,
    sum(vl_atual)                               as vl_total_atual,
    sum(vl_aditado)                             as vl_total_aditado
from compras.fct_contratos_ramo
where ramo_atividade like 'TI -%'
group by 1, 2
order by vl_total_atual desc`),i(45,Rt=`select
    nm_contratado                               as fornecedor,
    ramo_atividade                              as subcategoria,
    string_agg(nu_contrato, ', ' order by ano_assinatura) as numeros_contrato,
    count(*)                                    as qt_contratos,
    min(ano_assinatura::integer)                as primeiro_ano,
    max(ano_assinatura::integer)                as ultimo_ano,
    count(distinct cod_unidade_gestora)         as qt_orgaos,
    sum(vl_original)                            as vl_total_original,
    sum(vl_atual)                               as vl_total_atual,
    sum(vl_aditado)                             as vl_total_aditado
from compras.fct_contratos_ramo
where ramo_atividade like 'TI -%'
group by 1, 2
order by vl_total_atual desc`),[M,s,Et,se,Ut,ct,$t,Kt,nt,m,n,y,F,O,N,Q,d,D,R,ft,h,bt,Qt,wt,ut,at,Nt,tt,dt,ot,Ht,Z,kt,Tt,ie,rt,et,yt,Pt,vt,x,Gt,It,gt,it,Rt,ne,e]}class lo extends Ea{constructor(a){super(),Ha(this,a,Za,Wa,ba,{data:9},null,[-1,-1,-1])}}export{lo as component};
