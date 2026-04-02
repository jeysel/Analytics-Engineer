import{s as ft,d as l,i as m,a as Oe,b as $,c as d,h as _t,e as w,f as xe,g as Z,j as p,k as y,l as et,m as ct,o as ut,n as dt,p as pt,q as pe,r as $t,t as vt,u as gt}from"../chunks/scheduler.DjHbl-jX.js";import{S as bt,i as kt,d as T,t as b,a as v,c as Se,m as M,b as E,e as R,g as Ie}from"../chunks/index.DylIKcrZ.js";import{D as tt,e as qt,s as wt,Q as Qe,p as yt,C as Y,a as ot,r as rt,b as Tt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BG4f4HOm.js";import{w as Mt}from"../chunks/entry.DgWsGJnI.js";import{h as de,p as Et}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Rt}from"../chunks/stores.Cj8JOjv9.js";import{Q as Ve}from"../chunks/QueryViewer.Cu5QwZw_.js";import{B as at}from"../chunks/BarChart.DITXDaNa.js";import{B as Pe}from"../chunks/BigValue._T5yXOIy.js";function Ht(u){let o,s=k.title+"",t;return{c(){o=y("h1"),t=gt(s),this.h()},l(n){o=w(n,"H1",{class:!0});var f=$t(o);t=vt(f,s),f.forEach(l),this.h()},h(){$(o,"class","title")},m(n,f){m(n,o,f),Oe(o,t)},p:pe,d(n){n&&l(o)}}}function Ct(u){return{c(){this.h()},l(o){this.h()},h(){document.title="Evidence"},m:pe,p:pe,d:pe}}function Ft(u){let o,s,t,n,f;return document.title=o=k.title,{c(){s=p(),t=y("meta"),n=p(),f=y("meta"),this.h()},l(a){s=d(a),t=w(a,"META",{property:!0,content:!0}),n=d(a),f=w(a,"META",{name:!0,content:!0}),this.h()},h(){var a,_;$(t,"property","og:title"),$(t,"content",((a=k.og)==null?void 0:a.title)??k.title),$(f,"name","twitter:title"),$(f,"content",((_=k.og)==null?void 0:_.title)??k.title)},m(a,_){m(a,s,_),m(a,t,_),m(a,n,_),m(a,f,_)},p(a,_){_&0&&o!==(o=k.title)&&(document.title=o)},d(a){a&&(l(s),l(t),l(n),l(f))}}}function At(u){var f,a;let o,s,t=(k.description||((f=k.og)==null?void 0:f.description))&&Lt(),n=((a=k.og)==null?void 0:a.image)&&Dt();return{c(){t&&t.c(),o=p(),n&&n.c(),s=xe()},l(_){t&&t.l(_),o=d(_),n&&n.l(_),s=xe()},m(_,q){t&&t.m(_,q),m(_,o,q),n&&n.m(_,q),m(_,s,q)},p(_,q){var c,F;(k.description||(c=k.og)!=null&&c.description)&&t.p(_,q),(F=k.og)!=null&&F.image&&n.p(_,q)},d(_){_&&(l(o),l(s)),t&&t.d(_),n&&n.d(_)}}}function Lt(u){let o,s,t,n,f;return{c(){o=y("meta"),s=p(),t=y("meta"),n=p(),f=y("meta"),this.h()},l(a){o=w(a,"META",{name:!0,content:!0}),s=d(a),t=w(a,"META",{property:!0,content:!0}),n=d(a),f=w(a,"META",{name:!0,content:!0}),this.h()},h(){var a,_,q;$(o,"name","description"),$(o,"content",k.description??((a=k.og)==null?void 0:a.description)),$(t,"property","og:description"),$(t,"content",((_=k.og)==null?void 0:_.description)??k.description),$(f,"name","twitter:description"),$(f,"content",((q=k.og)==null?void 0:q.description)??k.description)},m(a,_){m(a,o,_),m(a,s,_),m(a,t,_),m(a,n,_),m(a,f,_)},p:pe,d(a){a&&(l(o),l(s),l(t),l(n),l(f))}}}function Dt(u){let o,s,t;return{c(){o=y("meta"),s=p(),t=y("meta"),this.h()},l(n){o=w(n,"META",{property:!0,content:!0}),s=d(n),t=w(n,"META",{name:!0,content:!0}),this.h()},h(){var n,f;$(o,"property","og:image"),$(o,"content",ot((n=k.og)==null?void 0:n.image)),$(t,"name","twitter:image"),$(t,"content",ot((f=k.og)==null?void 0:f.image))},m(n,f){m(n,o,f),m(n,s,f),m(n,t,f)},p:pe,d(n){n&&(l(o),l(s),l(t))}}}function st(u){let o,s;return o=new Ve({props:{queryID:"kpis_fornecedores",queryResult:u[0]}}),{c(){R(o.$$.fragment)},l(t){E(o.$$.fragment,t)},m(t,n){M(o,t,n),s=!0},p(t,n){const f={};n[0]&1&&(f.queryResult=t[0]),o.$set(f)},i(t){s||(v(o.$$.fragment,t),s=!0)},o(t){b(o.$$.fragment,t),s=!1},d(t){T(o,t)}}}function nt(u){let o,s;return o=new Ve({props:{queryID:"porte_fornecedor",queryResult:u[1]}}),{c(){R(o.$$.fragment)},l(t){E(o.$$.fragment,t)},m(t,n){M(o,t,n),s=!0},p(t,n){const f={};n[0]&2&&(f.queryResult=t[1]),o.$set(f)},i(t){s||(v(o.$$.fragment,t),s=!0)},o(t){b(o.$$.fragment,t),s=!1},d(t){T(o,t)}}}function St(u){let o,s,t,n,f,a,_,q;return o=new Y({props:{id:"porte",title:"Porte"}}),t=new Y({props:{id:"qt_fornecedores",title:"Fornecedores",fmt:"num0"}}),f=new Y({props:{id:"qt_contratos",title:"Contratos",fmt:"num0"}}),_=new Y({props:{id:"vl_total",title:"Valor Total",fmt:"num1b"}}),{c(){R(o.$$.fragment),s=p(),R(t.$$.fragment),n=p(),R(f.$$.fragment),a=p(),R(_.$$.fragment)},l(c){E(o.$$.fragment,c),s=d(c),E(t.$$.fragment,c),n=d(c),E(f.$$.fragment,c),a=d(c),E(_.$$.fragment,c)},m(c,F){M(o,c,F),m(c,s,F),M(t,c,F),m(c,n,F),M(f,c,F),m(c,a,F),M(_,c,F),q=!0},p:pe,i(c){q||(v(o.$$.fragment,c),v(t.$$.fragment,c),v(f.$$.fragment,c),v(_.$$.fragment,c),q=!0)},o(c){b(o.$$.fragment,c),b(t.$$.fragment,c),b(f.$$.fragment,c),b(_.$$.fragment,c),q=!1},d(c){c&&(l(s),l(n),l(a)),T(o,c),T(t,c),T(f,c),T(_,c)}}}function lt(u){let o,s;return o=new Ve({props:{queryID:"top_fornecedores",queryResult:u[2]}}),{c(){R(o.$$.fragment)},l(t){E(o.$$.fragment,t)},m(t,n){M(o,t,n),s=!0},p(t,n){const f={};n[0]&4&&(f.queryResult=t[2]),o.$set(f)},i(t){s||(v(o.$$.fragment,t),s=!0)},o(t){b(o.$$.fragment,t),s=!1},d(t){T(o,t)}}}function It(u){let o,s,t,n,f,a,_,q,c,F,H,x,A,Q,V,U;return o=new Y({props:{id:"ranking",title:"Ranking"}}),t=new Y({props:{id:"fornecedor",title:"Fornecedor"}}),f=new Y({props:{id:"porte",title:"Porte"}}),_=new Y({props:{id:"qt_contratos",title:"Qtd. Contratos",fmt:"num0"}}),c=new Y({props:{id:"orgaos",title:"Órgãos",fmt:"num0"}}),H=new Y({props:{id:"vl_total",title:"Valor Total",fmt:"num1b"}}),A=new Y({props:{id:"vl_aditado",title:"Aditivos",fmt:"num1b"}}),V=new Y({props:{id:"situacao_aditivo",title:"Situação Aditivo"}}),{c(){R(o.$$.fragment),s=p(),R(t.$$.fragment),n=p(),R(f.$$.fragment),a=p(),R(_.$$.fragment),q=p(),R(c.$$.fragment),F=p(),R(H.$$.fragment),x=p(),R(A.$$.fragment),Q=p(),R(V.$$.fragment)},l(i){E(o.$$.fragment,i),s=d(i),E(t.$$.fragment,i),n=d(i),E(f.$$.fragment,i),a=d(i),E(_.$$.fragment,i),q=d(i),E(c.$$.fragment,i),F=d(i),E(H.$$.fragment,i),x=d(i),E(A.$$.fragment,i),Q=d(i),E(V.$$.fragment,i)},m(i,g){M(o,i,g),m(i,s,g),M(t,i,g),m(i,n,g),M(f,i,g),m(i,a,g),M(_,i,g),m(i,q,g),M(c,i,g),m(i,F,g),M(H,i,g),m(i,x,g),M(A,i,g),m(i,Q,g),M(V,i,g),U=!0},p:pe,i(i){U||(v(o.$$.fragment,i),v(t.$$.fragment,i),v(f.$$.fragment,i),v(_.$$.fragment,i),v(c.$$.fragment,i),v(H.$$.fragment,i),v(A.$$.fragment,i),v(V.$$.fragment,i),U=!0)},o(i){b(o.$$.fragment,i),b(t.$$.fragment,i),b(f.$$.fragment,i),b(_.$$.fragment,i),b(c.$$.fragment,i),b(H.$$.fragment,i),b(A.$$.fragment,i),b(V.$$.fragment,i),U=!1},d(i){i&&(l(s),l(n),l(a),l(q),l(F),l(x),l(Q)),T(o,i),T(t,i),T(f,i),T(_,i),T(c,i),T(H,i),T(A,i),T(V,i)}}}function it(u){let o,s;return o=new Ve({props:{queryID:"top_fornecedores_qt",queryResult:u[3]}}),{c(){R(o.$$.fragment)},l(t){E(o.$$.fragment,t)},m(t,n){M(o,t,n),s=!0},p(t,n){const f={};n[0]&8&&(f.queryResult=t[3]),o.$set(f)},i(t){s||(v(o.$$.fragment,t),s=!0)},o(t){b(o.$$.fragment,t),s=!1},d(t){T(o,t)}}}function Qt(u){let o,s,t,n,f,a,_='<p class="markdown">Quem são as empresas e organizações que mais fornecem ao governo de Santa Catarina? Esta análise revela a concentração do mercado fornecedor, o perfil por porte e os principais parceiros comerciais do estado.</p>',q,c,F,H,x='<a href="#panorama-dos-fornecedores">Panorama dos Fornecedores</a>',A,Q,V='O estado contratou <strong class="markdown">11,4 mil fornecedores distintos</strong> no período analisado — uma base relativamente diversa. No entanto, como veremos, uma pequena parcela concentra a maior parte do valor contratado, o que é um padrão comum em compras governamentais.',U,i,g,h,N,ae,j,se,P,K,z,ne,B,$e='<a href="#como-se-distribuem-por-porte">Como se distribuem por porte?</a>',G,O,le='A classificação por porte é baseada no valor total contratado: <strong class="markdown">Grande</strong> (acima de R$ 10M), <strong class="markdown">Médio</strong> (R$ 1M a R$ 10M), <strong class="markdown">Pequeno</strong> (R$ 100K a R$ 1M) e <strong class="markdown">Micro</strong> (abaixo de R$ 100K). Fornecedores de grande porte concentram a maior parcela do valor total, enquanto micro e pequenos fornecedores representam a maior quantidade de empresas.',ie,J,X,C,W,ye,be,Te,ee,Be='<a href="#quem-recebeu-mais-recursos">Quem recebeu mais recursos?</a>',Me,me,he="Os 20 maiores fornecedores por valor revelam empresas que mantêm relacionamento contínuo com múltiplos órgãos do estado. A presença de fornecedores com poucos contratos e alto valor total indica contratos de grande escala — típicos de obras de infraestrutura e serviços continuados.",Ee,ve,fe,Re,ke,He,te,je='<a href="#quem-tem-mais-contratos">Quem tem mais contratos?</a>',Ce,_e,Ke='Fornecedores com alto volume de contratos e valor médio baixo geralmente atuam em <strong class="markdown">compras de insumos e materiais</strong> — como peças, medicamentos e material de escritório. Esse perfil é diferente dos grandes contratos de obras e serviços continuados.',Fe,ge,ce,Ae,qe,Le,ue,Ge='<p class="markdown">💡 Volte para a <a href="/Analytics-Engineer/compras-publicas" class="markdown">Visão Geral</a> ou explore os <a href="/Analytics-Engineer/compras-publicas/orgaos" class="markdown">Órgãos</a>, <a href="/Analytics-Engineer/compras-publicas/modalidades" class="markdown">Modalidades</a>, <a href="/Analytics-Engineer/compras-publicas/evolucao" class="markdown">Evolução Temporal</a> e <a href="/Analytics-Engineer/compras-publicas/aditivos" class="markdown">Aditivos Contratuais</a>.</p>',De,oe=typeof k<"u"&&k.title&&k.hide_title!==!0&&Ht();function mt(e,r){return typeof k<"u"&&k.title?Ft:Ct}let we=mt()(u),re=typeof k=="object"&&At(),L=u[0]&&st(u);g=new Pe({props:{data:u[0],value:"total_fornecedores",title:"Total de Fornecedores",fmt:"num1k"}}),N=new Pe({props:{data:u[0],value:"total_contratos",title:"Total de Contratos",fmt:"num1k"}}),j=new Pe({props:{data:u[0],value:"vl_total",title:"Valor Total",fmt:"num1b"}}),P=new Pe({props:{data:u[0],value:"vl_maior",title:"Maior Fornecedor",fmt:"num1b"}});let D=u[1]&&nt(u);X=new at({props:{data:u[1],x:"porte",y:"qt_fornecedores",title:"Quantidade de Fornecedores por Porte",xAxisTitle:"Porte",yAxisTitle:"Quantidade"}}),W=new tt({props:{data:u[1],title:"Distribuição por Porte",index:"false",$$slots:{default:[St]},$$scope:{ctx:u}}});let S=u[2]&&lt(u);fe=new tt({props:{data:u[2],title:"Top 20 Fornecedores por Valor Total",index:"false",$$slots:{default:[It]},$$scope:{ctx:u}}});let I=u[3]&&it(u);return ce=new at({props:{data:u[3],x:"fornecedor",y:"qt_contratos",title:"Top 20 Fornecedores por Quantidade de Contratos",swapXY:"true"}}),{c(){oe&&oe.c(),o=p(),we.c(),s=y("meta"),t=y("meta"),re&&re.c(),n=xe(),f=p(),a=y("blockquote"),a.innerHTML=_,q=p(),c=y("hr"),F=p(),H=y("h2"),H.innerHTML=x,A=p(),Q=y("p"),Q.innerHTML=V,U=p(),L&&L.c(),i=p(),R(g.$$.fragment),h=p(),R(N.$$.fragment),ae=p(),R(j.$$.fragment),se=p(),R(P.$$.fragment),K=p(),z=y("hr"),ne=p(),B=y("h2"),B.innerHTML=$e,G=p(),O=y("p"),O.innerHTML=le,ie=p(),D&&D.c(),J=p(),R(X.$$.fragment),C=p(),R(W.$$.fragment),ye=p(),be=y("hr"),Te=p(),ee=y("h2"),ee.innerHTML=Be,Me=p(),me=y("p"),me.textContent=he,Ee=p(),S&&S.c(),ve=p(),R(fe.$$.fragment),Re=p(),ke=y("hr"),He=p(),te=y("h2"),te.innerHTML=je,Ce=p(),_e=y("p"),_e.innerHTML=Ke,Fe=p(),I&&I.c(),ge=p(),R(ce.$$.fragment),Ae=p(),qe=y("hr"),Le=p(),ue=y("blockquote"),ue.innerHTML=Ge,this.h()},l(e){oe&&oe.l(e),o=d(e);const r=_t("svelte-2igo1p",document.head);we.l(r),s=w(r,"META",{name:!0,content:!0}),t=w(r,"META",{name:!0,content:!0}),re&&re.l(r),n=xe(),r.forEach(l),f=d(e),a=w(e,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),Z(a)!=="svelte-v5kq0"&&(a.innerHTML=_),q=d(e),c=w(e,"HR",{class:!0}),F=d(e),H=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Z(H)!=="svelte-198bww4"&&(H.innerHTML=x),A=d(e),Q=w(e,"P",{class:!0,"data-svelte-h":!0}),Z(Q)!=="svelte-lufqq3"&&(Q.innerHTML=V),U=d(e),L&&L.l(e),i=d(e),E(g.$$.fragment,e),h=d(e),E(N.$$.fragment,e),ae=d(e),E(j.$$.fragment,e),se=d(e),E(P.$$.fragment,e),K=d(e),z=w(e,"HR",{class:!0}),ne=d(e),B=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Z(B)!=="svelte-3echio"&&(B.innerHTML=$e),G=d(e),O=w(e,"P",{class:!0,"data-svelte-h":!0}),Z(O)!=="svelte-1nrndqr"&&(O.innerHTML=le),ie=d(e),D&&D.l(e),J=d(e),E(X.$$.fragment,e),C=d(e),E(W.$$.fragment,e),ye=d(e),be=w(e,"HR",{class:!0}),Te=d(e),ee=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Z(ee)!=="svelte-18k3906"&&(ee.innerHTML=Be),Me=d(e),me=w(e,"P",{class:!0,"data-svelte-h":!0}),Z(me)!=="svelte-9hfyji"&&(me.textContent=he),Ee=d(e),S&&S.l(e),ve=d(e),E(fe.$$.fragment,e),Re=d(e),ke=w(e,"HR",{class:!0}),He=d(e),te=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Z(te)!=="svelte-19t49hm"&&(te.innerHTML=je),Ce=d(e),_e=w(e,"P",{class:!0,"data-svelte-h":!0}),Z(_e)!=="svelte-1d7vane"&&(_e.innerHTML=Ke),Fe=d(e),I&&I.l(e),ge=d(e),E(ce.$$.fragment,e),Ae=d(e),qe=w(e,"HR",{class:!0}),Le=d(e),ue=w(e,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),Z(ue)!=="svelte-10h33gu"&&(ue.innerHTML=Ge),this.h()},h(){$(s,"name","twitter:card"),$(s,"content","summary_large_image"),$(t,"name","twitter:site"),$(t,"content","@evidence_dev"),$(a,"class","markdown"),$(c,"class","markdown"),$(H,"class","markdown"),$(H,"id","panorama-dos-fornecedores"),$(Q,"class","markdown"),$(z,"class","markdown"),$(B,"class","markdown"),$(B,"id","como-se-distribuem-por-porte"),$(O,"class","markdown"),$(be,"class","markdown"),$(ee,"class","markdown"),$(ee,"id","quem-recebeu-mais-recursos"),$(me,"class","markdown"),$(ke,"class","markdown"),$(te,"class","markdown"),$(te,"id","quem-tem-mais-contratos"),$(_e,"class","markdown"),$(qe,"class","markdown"),$(ue,"class","markdown")},m(e,r){oe&&oe.m(e,r),m(e,o,r),we.m(document.head,null),Oe(document.head,s),Oe(document.head,t),re&&re.m(document.head,null),Oe(document.head,n),m(e,f,r),m(e,a,r),m(e,q,r),m(e,c,r),m(e,F,r),m(e,H,r),m(e,A,r),m(e,Q,r),m(e,U,r),L&&L.m(e,r),m(e,i,r),M(g,e,r),m(e,h,r),M(N,e,r),m(e,ae,r),M(j,e,r),m(e,se,r),M(P,e,r),m(e,K,r),m(e,z,r),m(e,ne,r),m(e,B,r),m(e,G,r),m(e,O,r),m(e,ie,r),D&&D.m(e,r),m(e,J,r),M(X,e,r),m(e,C,r),M(W,e,r),m(e,ye,r),m(e,be,r),m(e,Te,r),m(e,ee,r),m(e,Me,r),m(e,me,r),m(e,Ee,r),S&&S.m(e,r),m(e,ve,r),M(fe,e,r),m(e,Re,r),m(e,ke,r),m(e,He,r),m(e,te,r),m(e,Ce,r),m(e,_e,r),m(e,Fe,r),I&&I.m(e,r),m(e,ge,r),M(ce,e,r),m(e,Ae,r),m(e,qe,r),m(e,Le,r),m(e,ue,r),De=!0},p(e,r){typeof k<"u"&&k.title&&k.hide_title!==!0&&oe.p(e,r),we.p(e,r),typeof k=="object"&&re.p(e,r),e[0]?L?(L.p(e,r),r[0]&1&&v(L,1)):(L=st(e),L.c(),v(L,1),L.m(i.parentNode,i)):L&&(Ie(),b(L,1,1,()=>{L=null}),Se());const Xe={};r[0]&1&&(Xe.data=e[0]),g.$set(Xe);const Ye={};r[0]&1&&(Ye.data=e[0]),N.$set(Ye);const ze={};r[0]&1&&(ze.data=e[0]),j.$set(ze);const Je={};r[0]&1&&(Je.data=e[0]),P.$set(Je),e[1]?D?(D.p(e,r),r[0]&2&&v(D,1)):(D=nt(e),D.c(),v(D,1),D.m(J.parentNode,J)):D&&(Ie(),b(D,1,1,()=>{D=null}),Se());const We={};r[0]&2&&(We.data=e[1]),X.$set(We);const Ne={};r[0]&2&&(Ne.data=e[1]),r[1]&32&&(Ne.$$scope={dirty:r,ctx:e}),W.$set(Ne),e[2]?S?(S.p(e,r),r[0]&4&&v(S,1)):(S=lt(e),S.c(),v(S,1),S.m(ve.parentNode,ve)):S&&(Ie(),b(S,1,1,()=>{S=null}),Se());const Ue={};r[0]&4&&(Ue.data=e[2]),r[1]&32&&(Ue.$$scope={dirty:r,ctx:e}),fe.$set(Ue),e[3]?I?(I.p(e,r),r[0]&8&&v(I,1)):(I=it(e),I.c(),v(I,1),I.m(ge.parentNode,ge)):I&&(Ie(),b(I,1,1,()=>{I=null}),Se());const Ze={};r[0]&8&&(Ze.data=e[3]),ce.$set(Ze)},i(e){De||(v(L),v(g.$$.fragment,e),v(N.$$.fragment,e),v(j.$$.fragment,e),v(P.$$.fragment,e),v(D),v(X.$$.fragment,e),v(W.$$.fragment,e),v(S),v(fe.$$.fragment,e),v(I),v(ce.$$.fragment,e),De=!0)},o(e){b(L),b(g.$$.fragment,e),b(N.$$.fragment,e),b(j.$$.fragment,e),b(P.$$.fragment,e),b(D),b(X.$$.fragment,e),b(W.$$.fragment,e),b(S),b(fe.$$.fragment,e),b(I),b(ce.$$.fragment,e),De=!1},d(e){e&&(l(o),l(f),l(a),l(q),l(c),l(F),l(H),l(A),l(Q),l(U),l(i),l(h),l(ae),l(se),l(K),l(z),l(ne),l(B),l(G),l(O),l(ie),l(J),l(C),l(ye),l(be),l(Te),l(ee),l(Me),l(me),l(Ee),l(ve),l(Re),l(ke),l(He),l(te),l(Ce),l(_e),l(Fe),l(ge),l(Ae),l(qe),l(Le),l(ue)),oe&&oe.d(e),we.d(e),l(s),l(t),re&&re.d(e),l(n),L&&L.d(e),T(g,e),T(N,e),T(j,e),T(P,e),D&&D.d(e),T(X,e),T(W,e),S&&S.d(e),T(fe,e),I&&I.d(e),T(ce,e)}}}const k={title:"Fornecedores"};function Pt(u,o,s){let t,n;et(u,Rt,C=>s(22,t=C)),et(u,rt,C=>s(28,n=C));let{data:f}=o,{data:a={},customFormattingSettings:_,__db:q,inputs:c}=f;ct(rt,n="718ee10aaaa21c635812fbbdfb5d10e7",n);let F=qt(Mt(c));ut(F.subscribe(C=>c=C)),dt(Tt,{getCustomFormats:()=>_.customFormats||[]});const H=(C,W)=>Et(q.query,C,{query_name:W});wt(H),t.params,pt(()=>!0);let x={initialData:void 0,initialError:void 0},A=de`select
    count(*)                    as total_fornecedores,
    sum(qt_contratos)           as total_contratos,
    sum(vl_total_atual)         as vl_total,
    max(vl_total_atual)         as vl_maior
from compras.dim_fornecedores`,Q=`select
    count(*)                    as total_fornecedores,
    sum(qt_contratos)           as total_contratos,
    sum(vl_total_atual)         as vl_total,
    max(vl_total_atual)         as vl_maior
from compras.dim_fornecedores`;a.kpis_fornecedores_data&&(a.kpis_fornecedores_data instanceof Error?x.initialError=a.kpis_fornecedores_data:x.initialData=a.kpis_fornecedores_data,a.kpis_fornecedores_columns&&(x.knownColumns=a.kpis_fornecedores_columns));let V,U=!1;const i=Qe.createReactive({callback:C=>{s(0,V=C)},execFn:H},{id:"kpis_fornecedores",...x});i(Q,{noResolve:A,...x}),globalThis[Symbol.for("kpis_fornecedores")]={get value(){return V}};let g={initialData:void 0,initialError:void 0},h=de`select
    porte_fornecedor            as porte,
    count(*)                    as qt_fornecedores,
    sum(qt_contratos)           as qt_contratos,
    sum(vl_total_atual)         as vl_total
from compras.dim_fornecedores
group by 1
order by vl_total desc`,N=`select
    porte_fornecedor            as porte,
    count(*)                    as qt_fornecedores,
    sum(qt_contratos)           as qt_contratos,
    sum(vl_total_atual)         as vl_total
from compras.dim_fornecedores
group by 1
order by vl_total desc`;a.porte_fornecedor_data&&(a.porte_fornecedor_data instanceof Error?g.initialError=a.porte_fornecedor_data:g.initialData=a.porte_fornecedor_data,a.porte_fornecedor_columns&&(g.knownColumns=a.porte_fornecedor_columns));let ae,j=!1;const se=Qe.createReactive({callback:C=>{s(1,ae=C)},execFn:H},{id:"porte_fornecedor",...g});se(N,{noResolve:h,...g}),globalThis[Symbol.for("porte_fornecedor")]={get value(){return ae}};let P={initialData:void 0,initialError:void 0},K=de`select
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
limit 20`,z=`select
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
limit 20`;a.top_fornecedores_data&&(a.top_fornecedores_data instanceof Error?P.initialError=a.top_fornecedores_data:P.initialData=a.top_fornecedores_data,a.top_fornecedores_columns&&(P.knownColumns=a.top_fornecedores_columns));let ne,B=!1;const $e=Qe.createReactive({callback:C=>{s(2,ne=C)},execFn:H},{id:"top_fornecedores",...P});$e(z,{noResolve:K,...P}),globalThis[Symbol.for("top_fornecedores")]={get value(){return ne}};let G={initialData:void 0,initialError:void 0},O=de`select
    rank_por_quantidade         as ranking,
    nm_contratado               as fornecedor,
    porte_fornecedor            as porte,
    qt_contratos,
    qt_orgaos_distintos         as orgaos,
    vl_total_atual              as vl_total
from compras.dim_fornecedores
order by ranking
limit 20`,le=`select
    rank_por_quantidade         as ranking,
    nm_contratado               as fornecedor,
    porte_fornecedor            as porte,
    qt_contratos,
    qt_orgaos_distintos         as orgaos,
    vl_total_atual              as vl_total
from compras.dim_fornecedores
order by ranking
limit 20`;a.top_fornecedores_qt_data&&(a.top_fornecedores_qt_data instanceof Error?G.initialError=a.top_fornecedores_qt_data:G.initialData=a.top_fornecedores_qt_data,a.top_fornecedores_qt_columns&&(G.knownColumns=a.top_fornecedores_qt_columns));let ie,J=!1;const X=Qe.createReactive({callback:C=>{s(3,ie=C)},execFn:H},{id:"top_fornecedores_qt",...G});return X(le,{noResolve:O,...G}),globalThis[Symbol.for("top_fornecedores_qt")]={get value(){return ie}},u.$$set=C=>{"data"in C&&s(4,f=C.data)},u.$$.update=()=>{u.$$.dirty[0]&16&&s(5,{data:a={},customFormattingSettings:_,__db:q}=f,a),u.$$.dirty[0]&32&&yt.set(Object.keys(a).length>0),u.$$.dirty[0]&4194304&&t.params,u.$$.dirty[0]&960&&(A||!U?A||(i(Q,{noResolve:A,...x}),s(9,U=!0)):i(Q,{noResolve:A})),u.$$.dirty[0]&15360&&(h||!j?h||(se(N,{noResolve:h,...g}),s(13,j=!0)):se(N,{noResolve:h})),u.$$.dirty[0]&245760&&(K||!B?K||($e(z,{noResolve:K,...P}),s(17,B=!0)):$e(z,{noResolve:K})),u.$$.dirty[0]&3932160&&(O||!J?O||(X(le,{noResolve:O,...G}),s(21,J=!0)):X(le,{noResolve:O}))},s(7,A=de`select
    count(*)                    as total_fornecedores,
    sum(qt_contratos)           as total_contratos,
    sum(vl_total_atual)         as vl_total,
    max(vl_total_atual)         as vl_maior
from compras.dim_fornecedores`),s(8,Q=`select
    count(*)                    as total_fornecedores,
    sum(qt_contratos)           as total_contratos,
    sum(vl_total_atual)         as vl_total,
    max(vl_total_atual)         as vl_maior
from compras.dim_fornecedores`),s(11,h=de`select
    porte_fornecedor            as porte,
    count(*)                    as qt_fornecedores,
    sum(qt_contratos)           as qt_contratos,
    sum(vl_total_atual)         as vl_total
from compras.dim_fornecedores
group by 1
order by vl_total desc`),s(12,N=`select
    porte_fornecedor            as porte,
    count(*)                    as qt_fornecedores,
    sum(qt_contratos)           as qt_contratos,
    sum(vl_total_atual)         as vl_total
from compras.dim_fornecedores
group by 1
order by vl_total desc`),s(15,K=de`select
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
limit 20`),s(16,z=`select
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
limit 20`),s(19,O=de`select
    rank_por_quantidade         as ranking,
    nm_contratado               as fornecedor,
    porte_fornecedor            as porte,
    qt_contratos,
    qt_orgaos_distintos         as orgaos,
    vl_total_atual              as vl_total
from compras.dim_fornecedores
order by ranking
limit 20`),s(20,le=`select
    rank_por_quantidade         as ranking,
    nm_contratado               as fornecedor,
    porte_fornecedor            as porte,
    qt_contratos,
    qt_orgaos_distintos         as orgaos,
    vl_total_atual              as vl_total
from compras.dim_fornecedores
order by ranking
limit 20`),[V,ae,ne,ie,f,a,x,A,Q,U,g,h,N,j,P,K,z,B,G,O,le,J,t]}class Xt extends bt{constructor(o){super(),kt(this,o,Pt,Qt,ft,{data:4},null,[-1,-1])}}export{Xt as component};
