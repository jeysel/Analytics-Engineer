import{s as Tt,d as l,i as n,a as Je,b as v,c as d,h as Rt,e as y,f as We,g as Z,j as p,k as T,l as dt,m as ht,o as Ht,n as Ct,p as Mt,q as ye,r as Et,t as Ot,u as Lt}from"../chunks/scheduler.DjHbl-jX.js";import{S as Ft,i as It,d as R,t as k,a as $,c as Fe,m as h,b as H,e as C,g as Ie}from"../chunks/index.DylIKcrZ.js";import{D as pt,e as At,s as St,Q as Ae,p as Dt,C as x,a as vt,r as $t,b as Qt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.C4ybX0RH.js";import{w as Vt}from"../chunks/entry.C9z7pgeU.js";import{h as oe,p as Pt}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Ut}from"../chunks/stores.CisT2OjB.js";import{Q as Se}from"../chunks/QueryViewer.SFbHT3Ej.js";import{B as et}from"../chunks/BarChart.CLNE8QJl.js";import{B as ze}from"../chunks/BigValue.3D8O99yE.js";function jt(u){let a,o=q.title+"",t;return{c(){a=T("h1"),t=Lt(o),this.h()},l(i){a=y(i,"H1",{class:!0});var m=Et(a);t=Ot(m,o),m.forEach(l),this.h()},h(){v(a,"class","title")},m(i,m){n(i,a,m),Je(a,t)},p:ye,d(i){i&&l(a)}}}function Nt(u){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:ye,p:ye,d:ye}}function Bt(u){let a,o,t,i,m;return document.title=a=q.title,{c(){o=p(),t=T("meta"),i=p(),m=T("meta"),this.h()},l(s){o=d(s),t=y(s,"META",{property:!0,content:!0}),i=d(s),m=y(s,"META",{name:!0,content:!0}),this.h()},h(){var s,c;v(t,"property","og:title"),v(t,"content",((s=q.og)==null?void 0:s.title)??q.title),v(m,"name","twitter:title"),v(m,"content",((c=q.og)==null?void 0:c.title)??q.title)},m(s,c){n(s,o,c),n(s,t,c),n(s,i,c),n(s,m,c)},p(s,c){c&0&&a!==(a=q.title)&&(document.title=a)},d(s){s&&(l(o),l(t),l(i),l(m))}}}function Xt(u){var m,s;let a,o,t=(q.description||((m=q.og)==null?void 0:m.description))&&Yt(),i=((s=q.og)==null?void 0:s.image)&&Gt();return{c(){t&&t.c(),a=p(),i&&i.c(),o=We()},l(c){t&&t.l(c),a=d(c),i&&i.l(c),o=We()},m(c,g){t&&t.m(c,g),n(c,a,g),i&&i.m(c,g),n(c,o,g)},p(c,g){var b,Q;(q.description||(b=q.og)!=null&&b.description)&&t.p(c,g),(Q=q.og)!=null&&Q.image&&i.p(c,g)},d(c){c&&(l(a),l(o)),t&&t.d(c),i&&i.d(c)}}}function Yt(u){let a,o,t,i,m;return{c(){a=T("meta"),o=p(),t=T("meta"),i=p(),m=T("meta"),this.h()},l(s){a=y(s,"META",{name:!0,content:!0}),o=d(s),t=y(s,"META",{property:!0,content:!0}),i=d(s),m=y(s,"META",{name:!0,content:!0}),this.h()},h(){var s,c,g;v(a,"name","description"),v(a,"content",q.description??((s=q.og)==null?void 0:s.description)),v(t,"property","og:description"),v(t,"content",((c=q.og)==null?void 0:c.description)??q.description),v(m,"name","twitter:description"),v(m,"content",((g=q.og)==null?void 0:g.description)??q.description)},m(s,c){n(s,a,c),n(s,o,c),n(s,t,c),n(s,i,c),n(s,m,c)},p:ye,d(s){s&&(l(a),l(o),l(t),l(i),l(m))}}}function Gt(u){let a,o,t;return{c(){a=T("meta"),o=p(),t=T("meta"),this.h()},l(i){a=y(i,"META",{property:!0,content:!0}),o=d(i),t=y(i,"META",{name:!0,content:!0}),this.h()},h(){var i,m;v(a,"property","og:image"),v(a,"content",vt((i=q.og)==null?void 0:i.image)),v(t,"name","twitter:image"),v(t,"content",vt((m=q.og)==null?void 0:m.image))},m(i,m){n(i,a,m),n(i,o,m),n(i,t,m)},p:ye,d(i){i&&(l(a),l(o),l(t))}}}function kt(u){let a,o;return a=new Se({props:{queryID:"kpis_ramos",queryResult:u[0]}}),{c(){C(a.$$.fragment)},l(t){H(a.$$.fragment,t)},m(t,i){h(a,t,i),o=!0},p(t,i){const m={};i[0]&1&&(m.queryResult=t[0]),a.$set(m)},i(t){o||($(a.$$.fragment,t),o=!0)},o(t){k(a.$$.fragment,t),o=!1},d(t){R(a,t)}}}function qt(u){let a,o;return a=new Se({props:{queryID:"ramos_qt",queryResult:u[1]}}),{c(){C(a.$$.fragment)},l(t){H(a.$$.fragment,t)},m(t,i){h(a,t,i),o=!0},p(t,i){const m={};i[0]&2&&(m.queryResult=t[1]),a.$set(m)},i(t){o||($(a.$$.fragment,t),o=!0)},o(t){k(a.$$.fragment,t),o=!1},d(t){R(a,t)}}}function Kt(u){let a,o,t,i,m,s,c,g,b,Q,f,w,O,L;return a=new x({props:{id:"ranking",title:"Ranking"}}),t=new x({props:{id:"ramo",title:"Ramo de Atividade"}}),m=new x({props:{id:"qt_contratos",title:"Qtd. Contratos",fmt:"num0"}}),c=new x({props:{id:"fornecedores",title:"Fornecedores",fmt:"num0"}}),b=new x({props:{id:"vl_total",title:"Valor Total",fmt:"num1b"}}),f=new x({props:{id:"perc_qt",title:"% Contratos",fmt:"num2"}}),O=new x({props:{id:"perc_valor",title:"% Valor",fmt:"num2"}}),{c(){C(a.$$.fragment),o=p(),C(t.$$.fragment),i=p(),C(m.$$.fragment),s=p(),C(c.$$.fragment),g=p(),C(b.$$.fragment),Q=p(),C(f.$$.fragment),w=p(),C(O.$$.fragment)},l(_){H(a.$$.fragment,_),o=d(_),H(t.$$.fragment,_),i=d(_),H(m.$$.fragment,_),s=d(_),H(c.$$.fragment,_),g=d(_),H(b.$$.fragment,_),Q=d(_),H(f.$$.fragment,_),w=d(_),H(O.$$.fragment,_)},m(_,E){h(a,_,E),n(_,o,E),h(t,_,E),n(_,i,E),h(m,_,E),n(_,s,E),h(c,_,E),n(_,g,E),h(b,_,E),n(_,Q,E),h(f,_,E),n(_,w,E),h(O,_,E),L=!0},p:ye,i(_){L||($(a.$$.fragment,_),$(t.$$.fragment,_),$(m.$$.fragment,_),$(c.$$.fragment,_),$(b.$$.fragment,_),$(f.$$.fragment,_),$(O.$$.fragment,_),L=!0)},o(_){k(a.$$.fragment,_),k(t.$$.fragment,_),k(m.$$.fragment,_),k(c.$$.fragment,_),k(b.$$.fragment,_),k(f.$$.fragment,_),k(O.$$.fragment,_),L=!1},d(_){_&&(l(o),l(i),l(s),l(g),l(Q),l(w)),R(a,_),R(t,_),R(m,_),R(c,_),R(b,_),R(f,_),R(O,_)}}}function bt(u){let a,o;return a=new Se({props:{queryID:"ramos_valor",queryResult:u[2]}}),{c(){C(a.$$.fragment)},l(t){H(a.$$.fragment,t)},m(t,i){h(a,t,i),o=!0},p(t,i){const m={};i[0]&4&&(m.queryResult=t[2]),a.$set(m)},i(t){o||($(a.$$.fragment,t),o=!0)},o(t){k(a.$$.fragment,t),o=!1},d(t){R(a,t)}}}function gt(u){let a,o;return a=new Se({props:{queryID:"ti_detalhe",queryResult:u[3]}}),{c(){C(a.$$.fragment)},l(t){H(a.$$.fragment,t)},m(t,i){h(a,t,i),o=!0},p(t,i){const m={};i[0]&8&&(m.queryResult=t[3]),a.$set(m)},i(t){o||($(a.$$.fragment,t),o=!0)},o(t){k(a.$$.fragment,t),o=!1},d(t){R(a,t)}}}function zt(u){let a,o,t,i,m,s,c,g,b,Q;return a=new x({props:{id:"subcategoria",title:"Subcategoria"}}),t=new x({props:{id:"qt_contratos",title:"Qtd. Contratos",fmt:"num0"}}),m=new x({props:{id:"fornecedores",title:"Fornecedores",fmt:"num0"}}),c=new x({props:{id:"vl_total",title:"Valor Total",fmt:"num1b"}}),b=new x({props:{id:"vl_medio",title:"Valor Médio",fmt:"num1k"}}),{c(){C(a.$$.fragment),o=p(),C(t.$$.fragment),i=p(),C(m.$$.fragment),s=p(),C(c.$$.fragment),g=p(),C(b.$$.fragment)},l(f){H(a.$$.fragment,f),o=d(f),H(t.$$.fragment,f),i=d(f),H(m.$$.fragment,f),s=d(f),H(c.$$.fragment,f),g=d(f),H(b.$$.fragment,f)},m(f,w){h(a,f,w),n(f,o,w),h(t,f,w),n(f,i,w),h(m,f,w),n(f,s,w),h(c,f,w),n(f,g,w),h(b,f,w),Q=!0},p:ye,i(f){Q||($(a.$$.fragment,f),$(t.$$.fragment,f),$(m.$$.fragment,f),$(c.$$.fragment,f),$(b.$$.fragment,f),Q=!0)},o(f){k(a.$$.fragment,f),k(t.$$.fragment,f),k(m.$$.fragment,f),k(c.$$.fragment,f),k(b.$$.fragment,f),Q=!1},d(f){f&&(l(o),l(i),l(s),l(g)),R(a,f),R(t,f),R(m,f),R(c,f),R(b,f)}}}function wt(u){let a,o;return a=new Se({props:{queryID:"ramos_fornecedores",queryResult:u[4]}}),{c(){C(a.$$.fragment)},l(t){H(a.$$.fragment,t)},m(t,i){h(a,t,i),o=!0},p(t,i){const m={};i[0]&16&&(m.queryResult=t[4]),a.$set(m)},i(t){o||($(a.$$.fragment,t),o=!0)},o(t){k(a.$$.fragment,t),o=!1},d(t){R(a,t)}}}function Jt(u){let a,o,t,i,m,s,c='<p class="markdown">Qual é o perfil do fornecedor do Estado de Santa Catarina? Esta análise classifica os contratos por ramo de atividade com base no objeto contratado, revelando em quais setores o governo mais investe e quantos fornecedores atendem cada segmento.</p>',g,b,Q='<strong class="markdown">Metodologia:</strong> A classificação por ramo é baseada em palavras-chave do campo <strong class="markdown">objeto do contrato</strong>. Contratos com descrições muito específicas ou atípicas são agrupados em &quot;Outros&quot;.',f,w,O,L,_='<a href="#panorama-por-ramo">Panorama por Ramo</a>',E,te,V,Y,N,_e,G,fe,P,K,ee,ce,B,Te='<a href="#quais-ramos-têm-mais-contratos">Quais ramos têm mais contratos?</a>',z,U,ue='<strong class="markdown">Alimentação</strong> lidera em quantidade — reflexo das compras recorrentes de gêneros alimentícios para a Polícia Militar, merenda escolar e alimentação institucional. <strong class="markdown">Combustíveis e Energia</strong> e <strong class="markdown">Veículos e Manutenção</strong> também se destacam, evidenciando o alto custo operacional da frota estadual.',de,ae,J,W,j,re,se,pe,X,M='<a href="#quais-ramos-movimentam-mais-recursos">Quais ramos movimentam mais recursos?</a>',Re,ve,tt='<strong class="markdown">Obras e Construção</strong> lidera em valor apesar de ter relativamente poucos contratos — o que revela o alto valor médio por contrato nesse setor. <strong class="markdown">Alimentação</strong> e <strong class="markdown">Combustíveis</strong> também são significativos pelo volume e frequência das contratações.',De,he,$e,Qe,Me,Ve,le,at='<a href="#tecnologia-da-informação-em-detalhe">Tecnologia da Informação em detalhe</a>',Pe,ke,rt='O setor de TI aparece segmentado em quatro subcategorias, revelando o perfil das contratações tecnológicas do estado. O <strong class="markdown">Licenciamento de Software</strong> representa aquisição de produtos, enquanto <strong class="markdown">Manutenção e Suporte</strong> e <strong class="markdown">Desenvolvimento</strong> refletem serviços especializados.',Ue,He,qe,je,Ee,Ne,ie,ot='<a href="#quantos-fornecedores-atendem-cada-ramo">Quantos fornecedores atendem cada ramo?</a>',Be,be,st='A relação entre contratos e fornecedores revela a <strong class="markdown">concentração de mercado</strong> em cada setor. Ramos com poucos fornecedores e muitos contratos indicam maior dependência de um grupo restrito de empresas.',Xe,Ce,ge,Ye,Oe,Ge,we,lt='<p class="markdown">💡 Volte para a <a href="/Analytics-Engineer/compras-publicas" class="markdown">Visão Geral</a> ou explore os <a href="/Analytics-Engineer/compras-publicas/orgaos" class="markdown">Órgãos</a>, <a href="/Analytics-Engineer/compras-publicas/fornecedores" class="markdown">Fornecedores</a>, <a href="/Analytics-Engineer/compras-publicas/modalidades" class="markdown">Modalidades</a>, <a href="/Analytics-Engineer/compras-publicas/evolucao" class="markdown">Evolução Temporal</a> e <a href="/Analytics-Engineer/compras-publicas/aditivos" class="markdown">Aditivos Contratuais</a>.</p>',Ke,ne=typeof q<"u"&&q.title&&q.hide_title!==!0&&jt();function yt(e,r){return typeof q<"u"&&q.title?Bt:Nt}let Le=yt()(u),me=typeof q=="object"&&Xt(),F=u[0]&&kt(u);V=new ze({props:{data:u[0],value:"total_ramos",title:"Ramos Identificados",fmt:"num0"}}),N=new ze({props:{data:u[0],value:"total_contratos",title:"Contratos Classificados",fmt:"num1k"}}),G=new ze({props:{data:u[0],value:"total_fornecedores",title:"Fornecedores",fmt:"num1k"}}),P=new ze({props:{data:u[0],value:"vl_total",title:"Valor Total",fmt:"num1b"}});let I=u[1]&&qt(u);J=new et({props:{data:u[1],x:"ramo",y:"qt_contratos",title:"Quantidade de Contratos por Ramo de Atividade",swapXY:"true"}}),j=new pt({props:{data:u[1],title:"Ranking por Quantidade de Contratos",index:"false",$$slots:{default:[Kt]},$$scope:{ctx:u}}});let A=u[2]&&bt(u);$e=new et({props:{data:u[2],x:"ramo",y:"vl_total",title:"Valor Total Contratado por Ramo de Atividade (R$)",swapXY:"true"}});let S=u[3]&&gt(u);qe=new pt({props:{data:u[3],title:"Detalhamento do Setor de TI",index:"false",$$slots:{default:[zt]},$$scope:{ctx:u}}});let D=u[4]&&wt(u);return ge=new et({props:{data:u[4],x:"ramo",y:"contratos_por_fornecedor",title:"Média de Contratos por Fornecedor",swapXY:"true"}}),{c(){ne&&ne.c(),a=p(),Le.c(),o=T("meta"),t=T("meta"),me&&me.c(),i=We(),m=p(),s=T("blockquote"),s.innerHTML=c,g=p(),b=T("p"),b.innerHTML=Q,f=p(),w=T("hr"),O=p(),L=T("h2"),L.innerHTML=_,E=p(),F&&F.c(),te=p(),C(V.$$.fragment),Y=p(),C(N.$$.fragment),_e=p(),C(G.$$.fragment),fe=p(),C(P.$$.fragment),K=p(),ee=T("hr"),ce=p(),B=T("h2"),B.innerHTML=Te,z=p(),U=T("p"),U.innerHTML=ue,de=p(),I&&I.c(),ae=p(),C(J.$$.fragment),W=p(),C(j.$$.fragment),re=p(),se=T("hr"),pe=p(),X=T("h2"),X.innerHTML=M,Re=p(),ve=T("p"),ve.innerHTML=tt,De=p(),A&&A.c(),he=p(),C($e.$$.fragment),Qe=p(),Me=T("hr"),Ve=p(),le=T("h2"),le.innerHTML=at,Pe=p(),ke=T("p"),ke.innerHTML=rt,Ue=p(),S&&S.c(),He=p(),C(qe.$$.fragment),je=p(),Ee=T("hr"),Ne=p(),ie=T("h2"),ie.innerHTML=ot,Be=p(),be=T("p"),be.innerHTML=st,Xe=p(),D&&D.c(),Ce=p(),C(ge.$$.fragment),Ye=p(),Oe=T("hr"),Ge=p(),we=T("blockquote"),we.innerHTML=lt,this.h()},l(e){ne&&ne.l(e),a=d(e);const r=Rt("svelte-2igo1p",document.head);Le.l(r),o=y(r,"META",{name:!0,content:!0}),t=y(r,"META",{name:!0,content:!0}),me&&me.l(r),i=We(),r.forEach(l),m=d(e),s=y(e,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),Z(s)!=="svelte-1876br8"&&(s.innerHTML=c),g=d(e),b=y(e,"P",{class:!0,"data-svelte-h":!0}),Z(b)!=="svelte-8is72l"&&(b.innerHTML=Q),f=d(e),w=y(e,"HR",{class:!0}),O=d(e),L=y(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Z(L)!=="svelte-10fnnb9"&&(L.innerHTML=_),E=d(e),F&&F.l(e),te=d(e),H(V.$$.fragment,e),Y=d(e),H(N.$$.fragment,e),_e=d(e),H(G.$$.fragment,e),fe=d(e),H(P.$$.fragment,e),K=d(e),ee=y(e,"HR",{class:!0}),ce=d(e),B=y(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Z(B)!=="svelte-iw43q"&&(B.innerHTML=Te),z=d(e),U=y(e,"P",{class:!0,"data-svelte-h":!0}),Z(U)!=="svelte-1ujpke1"&&(U.innerHTML=ue),de=d(e),I&&I.l(e),ae=d(e),H(J.$$.fragment,e),W=d(e),H(j.$$.fragment,e),re=d(e),se=y(e,"HR",{class:!0}),pe=d(e),X=y(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Z(X)!=="svelte-gn6v9r"&&(X.innerHTML=M),Re=d(e),ve=y(e,"P",{class:!0,"data-svelte-h":!0}),Z(ve)!=="svelte-d6jvxg"&&(ve.innerHTML=tt),De=d(e),A&&A.l(e),he=d(e),H($e.$$.fragment,e),Qe=d(e),Me=y(e,"HR",{class:!0}),Ve=d(e),le=y(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Z(le)!=="svelte-fwp5x4"&&(le.innerHTML=at),Pe=d(e),ke=y(e,"P",{class:!0,"data-svelte-h":!0}),Z(ke)!=="svelte-1sl9osf"&&(ke.innerHTML=rt),Ue=d(e),S&&S.l(e),He=d(e),H(qe.$$.fragment,e),je=d(e),Ee=y(e,"HR",{class:!0}),Ne=d(e),ie=y(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Z(ie)!=="svelte-dh6063"&&(ie.innerHTML=ot),Be=d(e),be=y(e,"P",{class:!0,"data-svelte-h":!0}),Z(be)!=="svelte-9i5zbv"&&(be.innerHTML=st),Xe=d(e),D&&D.l(e),Ce=d(e),H(ge.$$.fragment,e),Ye=d(e),Oe=y(e,"HR",{class:!0}),Ge=d(e),we=y(e,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),Z(we)!=="svelte-i3t39t"&&(we.innerHTML=lt),this.h()},h(){v(o,"name","twitter:card"),v(o,"content","summary_large_image"),v(t,"name","twitter:site"),v(t,"content","@evidence_dev"),v(s,"class","markdown"),v(b,"class","markdown"),v(w,"class","markdown"),v(L,"class","markdown"),v(L,"id","panorama-por-ramo"),v(ee,"class","markdown"),v(B,"class","markdown"),v(B,"id","quais-ramos-têm-mais-contratos"),v(U,"class","markdown"),v(se,"class","markdown"),v(X,"class","markdown"),v(X,"id","quais-ramos-movimentam-mais-recursos"),v(ve,"class","markdown"),v(Me,"class","markdown"),v(le,"class","markdown"),v(le,"id","tecnologia-da-informação-em-detalhe"),v(ke,"class","markdown"),v(Ee,"class","markdown"),v(ie,"class","markdown"),v(ie,"id","quantos-fornecedores-atendem-cada-ramo"),v(be,"class","markdown"),v(Oe,"class","markdown"),v(we,"class","markdown")},m(e,r){ne&&ne.m(e,r),n(e,a,r),Le.m(document.head,null),Je(document.head,o),Je(document.head,t),me&&me.m(document.head,null),Je(document.head,i),n(e,m,r),n(e,s,r),n(e,g,r),n(e,b,r),n(e,f,r),n(e,w,r),n(e,O,r),n(e,L,r),n(e,E,r),F&&F.m(e,r),n(e,te,r),h(V,e,r),n(e,Y,r),h(N,e,r),n(e,_e,r),h(G,e,r),n(e,fe,r),h(P,e,r),n(e,K,r),n(e,ee,r),n(e,ce,r),n(e,B,r),n(e,z,r),n(e,U,r),n(e,de,r),I&&I.m(e,r),n(e,ae,r),h(J,e,r),n(e,W,r),h(j,e,r),n(e,re,r),n(e,se,r),n(e,pe,r),n(e,X,r),n(e,Re,r),n(e,ve,r),n(e,De,r),A&&A.m(e,r),n(e,he,r),h($e,e,r),n(e,Qe,r),n(e,Me,r),n(e,Ve,r),n(e,le,r),n(e,Pe,r),n(e,ke,r),n(e,Ue,r),S&&S.m(e,r),n(e,He,r),h(qe,e,r),n(e,je,r),n(e,Ee,r),n(e,Ne,r),n(e,ie,r),n(e,Be,r),n(e,be,r),n(e,Xe,r),D&&D.m(e,r),n(e,Ce,r),h(ge,e,r),n(e,Ye,r),n(e,Oe,r),n(e,Ge,r),n(e,we,r),Ke=!0},p(e,r){typeof q<"u"&&q.title&&q.hide_title!==!0&&ne.p(e,r),Le.p(e,r),typeof q=="object"&&me.p(e,r),e[0]?F?(F.p(e,r),r[0]&1&&$(F,1)):(F=kt(e),F.c(),$(F,1),F.m(te.parentNode,te)):F&&(Ie(),k(F,1,1,()=>{F=null}),Fe());const it={};r[0]&1&&(it.data=e[0]),V.$set(it);const nt={};r[0]&1&&(nt.data=e[0]),N.$set(nt);const mt={};r[0]&1&&(mt.data=e[0]),G.$set(mt);const _t={};r[0]&1&&(_t.data=e[0]),P.$set(_t),e[1]?I?(I.p(e,r),r[0]&2&&$(I,1)):(I=qt(e),I.c(),$(I,1),I.m(ae.parentNode,ae)):I&&(Ie(),k(I,1,1,()=>{I=null}),Fe());const ft={};r[0]&2&&(ft.data=e[1]),J.$set(ft);const Ze={};r[0]&2&&(Ze.data=e[1]),r[1]&2048&&(Ze.$$scope={dirty:r,ctx:e}),j.$set(Ze),e[2]?A?(A.p(e,r),r[0]&4&&$(A,1)):(A=bt(e),A.c(),$(A,1),A.m(he.parentNode,he)):A&&(Ie(),k(A,1,1,()=>{A=null}),Fe());const ct={};r[0]&4&&(ct.data=e[2]),$e.$set(ct),e[3]?S?(S.p(e,r),r[0]&8&&$(S,1)):(S=gt(e),S.c(),$(S,1),S.m(He.parentNode,He)):S&&(Ie(),k(S,1,1,()=>{S=null}),Fe());const xe={};r[0]&8&&(xe.data=e[3]),r[1]&2048&&(xe.$$scope={dirty:r,ctx:e}),qe.$set(xe),e[4]?D?(D.p(e,r),r[0]&16&&$(D,1)):(D=wt(e),D.c(),$(D,1),D.m(Ce.parentNode,Ce)):D&&(Ie(),k(D,1,1,()=>{D=null}),Fe());const ut={};r[0]&16&&(ut.data=e[4]),ge.$set(ut)},i(e){Ke||($(F),$(V.$$.fragment,e),$(N.$$.fragment,e),$(G.$$.fragment,e),$(P.$$.fragment,e),$(I),$(J.$$.fragment,e),$(j.$$.fragment,e),$(A),$($e.$$.fragment,e),$(S),$(qe.$$.fragment,e),$(D),$(ge.$$.fragment,e),Ke=!0)},o(e){k(F),k(V.$$.fragment,e),k(N.$$.fragment,e),k(G.$$.fragment,e),k(P.$$.fragment,e),k(I),k(J.$$.fragment,e),k(j.$$.fragment,e),k(A),k($e.$$.fragment,e),k(S),k(qe.$$.fragment,e),k(D),k(ge.$$.fragment,e),Ke=!1},d(e){e&&(l(a),l(m),l(s),l(g),l(b),l(f),l(w),l(O),l(L),l(E),l(te),l(Y),l(_e),l(fe),l(K),l(ee),l(ce),l(B),l(z),l(U),l(de),l(ae),l(W),l(re),l(se),l(pe),l(X),l(Re),l(ve),l(De),l(he),l(Qe),l(Me),l(Ve),l(le),l(Pe),l(ke),l(Ue),l(He),l(je),l(Ee),l(Ne),l(ie),l(Be),l(be),l(Xe),l(Ce),l(Ye),l(Oe),l(Ge),l(we)),ne&&ne.d(e),Le.d(e),l(o),l(t),me&&me.d(e),l(i),F&&F.d(e),R(V,e),R(N,e),R(G,e),R(P,e),I&&I.d(e),R(J,e),R(j,e),A&&A.d(e),R($e,e),S&&S.d(e),R(qe,e),D&&D.d(e),R(ge,e)}}}const q={title:"Ramos de Atividade"};function Wt(u,a,o){let t,i;dt(u,Ut,M=>o(27,t=M)),dt(u,$t,M=>o(33,i=M));let{data:m}=a,{data:s={},customFormattingSettings:c,__db:g,inputs:b}=m;ht($t,i="a57987638f9590c31ab98f108150a655",i);let Q=At(Vt(b));Ht(Q.subscribe(M=>b=M)),Ct(Qt,{getCustomFormats:()=>c.customFormats||[]});const f=(M,Re)=>Pt(g.query,M,{query_name:Re});St(f),t.params,Mt(()=>!0);let w={initialData:void 0,initialError:void 0},O=oe`select
    count(*)                    as total_ramos,
    sum(qt_contratos)           as total_contratos,
    sum(qt_fornecedores)        as total_fornecedores,
    sum(vl_total_atual)         as vl_total
from compras.dim_ramos
where ramo_atividade != 'Outros'`,L=`select
    count(*)                    as total_ramos,
    sum(qt_contratos)           as total_contratos,
    sum(qt_fornecedores)        as total_fornecedores,
    sum(vl_total_atual)         as vl_total
from compras.dim_ramos
where ramo_atividade != 'Outros'`;s.kpis_ramos_data&&(s.kpis_ramos_data instanceof Error?w.initialError=s.kpis_ramos_data:w.initialData=s.kpis_ramos_data,s.kpis_ramos_columns&&(w.knownColumns=s.kpis_ramos_columns));let _,E=!1;const te=Ae.createReactive({callback:M=>{o(0,_=M)},execFn:f},{id:"kpis_ramos",...w});te(L,{noResolve:O,...w}),globalThis[Symbol.for("kpis_ramos")]={get value(){return _}};let V={initialData:void 0,initialError:void 0},Y=oe`select
    ramo_atividade              as ramo,
    qt_contratos,
    qt_fornecedores             as fornecedores,
    vl_total_atual              as vl_total,
    perc_sobre_total_qt         as perc_qt,
    perc_sobre_total_valor      as perc_valor,
    rank_por_quantidade         as ranking
from compras.dim_ramos
where ramo_atividade != 'Outros'
order by rank_por_quantidade`,N=`select
    ramo_atividade              as ramo,
    qt_contratos,
    qt_fornecedores             as fornecedores,
    vl_total_atual              as vl_total,
    perc_sobre_total_qt         as perc_qt,
    perc_sobre_total_valor      as perc_valor,
    rank_por_quantidade         as ranking
from compras.dim_ramos
where ramo_atividade != 'Outros'
order by rank_por_quantidade`;s.ramos_qt_data&&(s.ramos_qt_data instanceof Error?V.initialError=s.ramos_qt_data:V.initialData=s.ramos_qt_data,s.ramos_qt_columns&&(V.knownColumns=s.ramos_qt_columns));let _e,G=!1;const fe=Ae.createReactive({callback:M=>{o(1,_e=M)},execFn:f},{id:"ramos_qt",...V});fe(N,{noResolve:Y,...V}),globalThis[Symbol.for("ramos_qt")]={get value(){return _e}};let P={initialData:void 0,initialError:void 0},K=oe`select
    ramo_atividade              as ramo,
    vl_total_atual              as vl_total,
    qt_contratos,
    vl_medio_contrato           as vl_medio,
    rank_por_valor              as ranking
from compras.dim_ramos
where ramo_atividade != 'Outros'
order by rank_por_valor`,ee=`select
    ramo_atividade              as ramo,
    vl_total_atual              as vl_total,
    qt_contratos,
    vl_medio_contrato           as vl_medio,
    rank_por_valor              as ranking
from compras.dim_ramos
where ramo_atividade != 'Outros'
order by rank_por_valor`;s.ramos_valor_data&&(s.ramos_valor_data instanceof Error?P.initialError=s.ramos_valor_data:P.initialData=s.ramos_valor_data,s.ramos_valor_columns&&(P.knownColumns=s.ramos_valor_columns));let ce,B=!1;const Te=Ae.createReactive({callback:M=>{o(2,ce=M)},execFn:f},{id:"ramos_valor",...P});Te(ee,{noResolve:K,...P}),globalThis[Symbol.for("ramos_valor")]={get value(){return ce}};let z={initialData:void 0,initialError:void 0},U=oe`select
    ramo_atividade              as subcategoria,
    qt_contratos,
    qt_fornecedores             as fornecedores,
    vl_total_atual              as vl_total,
    vl_medio_contrato           as vl_medio,
    rank_por_valor              as ranking
from compras.dim_ramos
where ramo_atividade like 'TI -%'
order by qt_contratos desc`,ue=`select
    ramo_atividade              as subcategoria,
    qt_contratos,
    qt_fornecedores             as fornecedores,
    vl_total_atual              as vl_total,
    vl_medio_contrato           as vl_medio,
    rank_por_valor              as ranking
from compras.dim_ramos
where ramo_atividade like 'TI -%'
order by qt_contratos desc`;s.ti_detalhe_data&&(s.ti_detalhe_data instanceof Error?z.initialError=s.ti_detalhe_data:z.initialData=s.ti_detalhe_data,s.ti_detalhe_columns&&(z.knownColumns=s.ti_detalhe_columns));let de,ae=!1;const J=Ae.createReactive({callback:M=>{o(3,de=M)},execFn:f},{id:"ti_detalhe",...z});J(ue,{noResolve:U,...z}),globalThis[Symbol.for("ti_detalhe")]={get value(){return de}};let W={initialData:void 0,initialError:void 0},j=oe`select
    ramo_atividade              as ramo,
    qt_fornecedores             as fornecedores,
    qt_contratos,
    round(qt_contratos::numeric / nullif(qt_fornecedores, 0), 1) as contratos_por_fornecedor
from compras.dim_ramos
where ramo_atividade != 'Outros'
order by contratos_por_fornecedor desc`,re=`select
    ramo_atividade              as ramo,
    qt_fornecedores             as fornecedores,
    qt_contratos,
    round(qt_contratos::numeric / nullif(qt_fornecedores, 0), 1) as contratos_por_fornecedor
from compras.dim_ramos
where ramo_atividade != 'Outros'
order by contratos_por_fornecedor desc`;s.ramos_fornecedores_data&&(s.ramos_fornecedores_data instanceof Error?W.initialError=s.ramos_fornecedores_data:W.initialData=s.ramos_fornecedores_data,s.ramos_fornecedores_columns&&(W.knownColumns=s.ramos_fornecedores_columns));let se,pe=!1;const X=Ae.createReactive({callback:M=>{o(4,se=M)},execFn:f},{id:"ramos_fornecedores",...W});return X(re,{noResolve:j,...W}),globalThis[Symbol.for("ramos_fornecedores")]={get value(){return se}},u.$$set=M=>{"data"in M&&o(5,m=M.data)},u.$$.update=()=>{u.$$.dirty[0]&32&&o(6,{data:s={},customFormattingSettings:c,__db:g}=m,s),u.$$.dirty[0]&64&&Dt.set(Object.keys(s).length>0),u.$$.dirty[0]&134217728&&t.params,u.$$.dirty[0]&1920&&(O||!E?O||(te(L,{noResolve:O,...w}),o(10,E=!0)):te(L,{noResolve:O})),u.$$.dirty[0]&30720&&(Y||!G?Y||(fe(N,{noResolve:Y,...V}),o(14,G=!0)):fe(N,{noResolve:Y})),u.$$.dirty[0]&491520&&(K||!B?K||(Te(ee,{noResolve:K,...P}),o(18,B=!0)):Te(ee,{noResolve:K})),u.$$.dirty[0]&7864320&&(U||!ae?U||(J(ue,{noResolve:U,...z}),o(22,ae=!0)):J(ue,{noResolve:U})),u.$$.dirty[0]&125829120&&(j||!pe?j||(X(re,{noResolve:j,...W}),o(26,pe=!0)):X(re,{noResolve:j}))},o(8,O=oe`select
    count(*)                    as total_ramos,
    sum(qt_contratos)           as total_contratos,
    sum(qt_fornecedores)        as total_fornecedores,
    sum(vl_total_atual)         as vl_total
from compras.dim_ramos
where ramo_atividade != 'Outros'`),o(9,L=`select
    count(*)                    as total_ramos,
    sum(qt_contratos)           as total_contratos,
    sum(qt_fornecedores)        as total_fornecedores,
    sum(vl_total_atual)         as vl_total
from compras.dim_ramos
where ramo_atividade != 'Outros'`),o(12,Y=oe`select
    ramo_atividade              as ramo,
    qt_contratos,
    qt_fornecedores             as fornecedores,
    vl_total_atual              as vl_total,
    perc_sobre_total_qt         as perc_qt,
    perc_sobre_total_valor      as perc_valor,
    rank_por_quantidade         as ranking
from compras.dim_ramos
where ramo_atividade != 'Outros'
order by rank_por_quantidade`),o(13,N=`select
    ramo_atividade              as ramo,
    qt_contratos,
    qt_fornecedores             as fornecedores,
    vl_total_atual              as vl_total,
    perc_sobre_total_qt         as perc_qt,
    perc_sobre_total_valor      as perc_valor,
    rank_por_quantidade         as ranking
from compras.dim_ramos
where ramo_atividade != 'Outros'
order by rank_por_quantidade`),o(16,K=oe`select
    ramo_atividade              as ramo,
    vl_total_atual              as vl_total,
    qt_contratos,
    vl_medio_contrato           as vl_medio,
    rank_por_valor              as ranking
from compras.dim_ramos
where ramo_atividade != 'Outros'
order by rank_por_valor`),o(17,ee=`select
    ramo_atividade              as ramo,
    vl_total_atual              as vl_total,
    qt_contratos,
    vl_medio_contrato           as vl_medio,
    rank_por_valor              as ranking
from compras.dim_ramos
where ramo_atividade != 'Outros'
order by rank_por_valor`),o(20,U=oe`select
    ramo_atividade              as subcategoria,
    qt_contratos,
    qt_fornecedores             as fornecedores,
    vl_total_atual              as vl_total,
    vl_medio_contrato           as vl_medio,
    rank_por_valor              as ranking
from compras.dim_ramos
where ramo_atividade like 'TI -%'
order by qt_contratos desc`),o(21,ue=`select
    ramo_atividade              as subcategoria,
    qt_contratos,
    qt_fornecedores             as fornecedores,
    vl_total_atual              as vl_total,
    vl_medio_contrato           as vl_medio,
    rank_por_valor              as ranking
from compras.dim_ramos
where ramo_atividade like 'TI -%'
order by qt_contratos desc`),o(24,j=oe`select
    ramo_atividade              as ramo,
    qt_fornecedores             as fornecedores,
    qt_contratos,
    round(qt_contratos::numeric / nullif(qt_fornecedores, 0), 1) as contratos_por_fornecedor
from compras.dim_ramos
where ramo_atividade != 'Outros'
order by contratos_por_fornecedor desc`),o(25,re=`select
    ramo_atividade              as ramo,
    qt_fornecedores             as fornecedores,
    qt_contratos,
    round(qt_contratos::numeric / nullif(qt_fornecedores, 0), 1) as contratos_por_fornecedor
from compras.dim_ramos
where ramo_atividade != 'Outros'
order by contratos_por_fornecedor desc`),[_,_e,ce,de,se,m,s,w,O,L,E,V,Y,N,G,P,K,ee,B,z,U,ue,ae,W,j,re,pe,t]}class na extends Ft{constructor(a){super(),It(this,a,Wt,Jt,Tt,{data:5},null,[-1,-1])}}export{na as component};
