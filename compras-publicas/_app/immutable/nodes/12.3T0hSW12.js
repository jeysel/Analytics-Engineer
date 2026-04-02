import{s as ba,d as l,i as _,a as Yt,b as $,c as d,h as qa,e as C,f as Jt,g as tt,j as p,k as R,l as fa,m as wa,o as ya,n as Ta,p as Ha,q as _t,r as Ma,t as Ea,u as Ca}from"../chunks/scheduler.DjHbl-jX.js";import{S as Ra,i as Aa,d as T,t as v,a as g,c as Ft,m as H,b as M,e as E,g as Lt}from"../chunks/index.DylIKcrZ.js";import{D as ta,e as Fa,s as La,Q as St,p as Sa,C as U,a as ua,r as ca,b as Ia}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.C4ybX0RH.js";import{w as Da}from"../chunks/entry.C9z7pgeU.js";import{h as rt,p as Pa}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Oa}from"../chunks/stores.CisT2OjB.js";import{Q as It}from"../chunks/QueryViewer.SFbHT3Ej.js";import{B as Qa}from"../chunks/BarChart.CLNE8QJl.js";import{B as Xt}from"../chunks/BigValue.3D8O99yE.js";function Va(c){let e,r=q.title+"",a;return{c(){e=R("h1"),a=Ca(r),this.h()},l(n){e=C(n,"H1",{class:!0});var m=Ma(e);a=Ea(m,r),m.forEach(l),this.h()},h(){$(e,"class","title")},m(n,m){_(n,e,m),Yt(e,a)},p:_t,d(n){n&&l(e)}}}function Ua(c){return{c(){this.h()},l(e){this.h()},h(){document.title="Evidence"},m:_t,p:_t,d:_t}}function Ba(c){let e,r,a,n,m;return document.title=e=q.title,{c(){r=p(),a=R("meta"),n=p(),m=R("meta"),this.h()},l(s){r=d(s),a=C(s,"META",{property:!0,content:!0}),n=d(s),m=C(s,"META",{name:!0,content:!0}),this.h()},h(){var s,u;$(a,"property","og:title"),$(a,"content",((s=q.og)==null?void 0:s.title)??q.title),$(m,"name","twitter:title"),$(m,"content",((u=q.og)==null?void 0:u.title)??q.title)},m(s,u){_(s,r,u),_(s,a,u),_(s,n,u),_(s,m,u)},p(s,u){u&0&&e!==(e=q.title)&&(document.title=e)},d(s){s&&(l(r),l(a),l(n),l(m))}}}function Na(c){var m,s;let e,r,a=(q.description||((m=q.og)==null?void 0:m.description))&&ja(),n=((s=q.og)==null?void 0:s.image)&&za();return{c(){a&&a.c(),e=p(),n&&n.c(),r=Jt()},l(u){a&&a.l(u),e=d(u),n&&n.l(u),r=Jt()},m(u,k){a&&a.m(u,k),_(u,e,k),n&&n.m(u,k),_(u,r,k)},p(u,k){var i,w;(q.description||(i=q.og)!=null&&i.description)&&a.p(u,k),(w=q.og)!=null&&w.image&&n.p(u,k)},d(u){u&&(l(e),l(r)),a&&a.d(u),n&&n.d(u)}}}function ja(c){let e,r,a,n,m;return{c(){e=R("meta"),r=p(),a=R("meta"),n=p(),m=R("meta"),this.h()},l(s){e=C(s,"META",{name:!0,content:!0}),r=d(s),a=C(s,"META",{property:!0,content:!0}),n=d(s),m=C(s,"META",{name:!0,content:!0}),this.h()},h(){var s,u,k;$(e,"name","description"),$(e,"content",q.description??((s=q.og)==null?void 0:s.description)),$(a,"property","og:description"),$(a,"content",((u=q.og)==null?void 0:u.description)??q.description),$(m,"name","twitter:description"),$(m,"content",((k=q.og)==null?void 0:k.description)??q.description)},m(s,u){_(s,e,u),_(s,r,u),_(s,a,u),_(s,n,u),_(s,m,u)},p:_t,d(s){s&&(l(e),l(r),l(a),l(n),l(m))}}}function za(c){let e,r,a;return{c(){e=R("meta"),r=p(),a=R("meta"),this.h()},l(n){e=C(n,"META",{property:!0,content:!0}),r=d(n),a=C(n,"META",{name:!0,content:!0}),this.h()},h(){var n,m;$(e,"property","og:image"),$(e,"content",ua((n=q.og)==null?void 0:n.image)),$(a,"name","twitter:image"),$(a,"content",ua((m=q.og)==null?void 0:m.image))},m(n,m){_(n,e,m),_(n,r,m),_(n,a,m)},p:_t,d(n){n&&(l(e),l(r),l(a))}}}function da(c){let e,r;return e=new It({props:{queryID:"kpis_orgaos",queryResult:c[0]}}),{c(){E(e.$$.fragment)},l(a){M(e.$$.fragment,a)},m(a,n){H(e,a,n),r=!0},p(a,n){const m={};n[0]&1&&(m.queryResult=a[0]),e.$set(m)},i(a){r||(g(e.$$.fragment,a),r=!0)},o(a){v(e.$$.fragment,a),r=!1},d(a){T(e,a)}}}function pa(c){let e,r;return e=new It({props:{queryID:"ranking_orgaos_valor",queryResult:c[1]}}),{c(){E(e.$$.fragment)},l(a){M(e.$$.fragment,a)},m(a,n){H(e,a,n),r=!0},p(a,n){const m={};n[0]&2&&(m.queryResult=a[1]),e.$set(m)},i(a){r||(g(e.$$.fragment,a),r=!0)},o(a){v(e.$$.fragment,a),r=!1},d(a){T(e,a)}}}function Ga(c){let e,r,a,n,m,s,u,k,i,w,A,B,F,O,N,z;return e=new U({props:{id:"ranking",title:"Ranking"}}),a=new U({props:{id:"orgao",title:"Órgão"}}),m=new U({props:{id:"qt_contratos",title:"Qtd. Contratos",fmt:"num0"}}),u=new U({props:{id:"fornecedores",title:"Fornecedores",fmt:"num0"}}),i=new U({props:{id:"vl_atual",title:"Valor Atual",fmt:"num1b"}}),A=new U({props:{id:"vl_aditado",title:"Aditivos",fmt:"num1b"}}),F=new U({props:{id:"situacao_aditivo",title:"Situação Aditivo"}}),N=new U({props:{id:"perfil",title:"Perfil"}}),{c(){E(e.$$.fragment),r=p(),E(a.$$.fragment),n=p(),E(m.$$.fragment),s=p(),E(u.$$.fragment),k=p(),E(i.$$.fragment),w=p(),E(A.$$.fragment),B=p(),E(F.$$.fragment),O=p(),E(N.$$.fragment)},l(f){M(e.$$.fragment,f),r=d(f),M(a.$$.fragment,f),n=d(f),M(m.$$.fragment,f),s=d(f),M(u.$$.fragment,f),k=d(f),M(i.$$.fragment,f),w=d(f),M(A.$$.fragment,f),B=d(f),M(F.$$.fragment,f),O=d(f),M(N.$$.fragment,f)},m(f,b){H(e,f,b),_(f,r,b),H(a,f,b),_(f,n,b),H(m,f,b),_(f,s,b),H(u,f,b),_(f,k,b),H(i,f,b),_(f,w,b),H(A,f,b),_(f,B,b),H(F,f,b),_(f,O,b),H(N,f,b),z=!0},p:_t,i(f){z||(g(e.$$.fragment,f),g(a.$$.fragment,f),g(m.$$.fragment,f),g(u.$$.fragment,f),g(i.$$.fragment,f),g(A.$$.fragment,f),g(F.$$.fragment,f),g(N.$$.fragment,f),z=!0)},o(f){v(e.$$.fragment,f),v(a.$$.fragment,f),v(m.$$.fragment,f),v(u.$$.fragment,f),v(i.$$.fragment,f),v(A.$$.fragment,f),v(F.$$.fragment,f),v(N.$$.fragment,f),z=!1},d(f){f&&(l(r),l(n),l(s),l(k),l(w),l(B),l(O)),T(e,f),T(a,f),T(m,f),T(u,f),T(i,f),T(A,f),T(F,f),T(N,f)}}}function ga(c){let e,r;return e=new It({props:{queryID:"ranking_orgaos_qt",queryResult:c[2]}}),{c(){E(e.$$.fragment)},l(a){M(e.$$.fragment,a)},m(a,n){H(e,a,n),r=!0},p(a,n){const m={};n[0]&4&&(m.queryResult=a[2]),e.$set(m)},i(a){r||(g(e.$$.fragment,a),r=!0)},o(a){v(e.$$.fragment,a),r=!1},d(a){T(e,a)}}}function $a(c){let e,r;return e=new It({props:{queryID:"perfil_contratacao",queryResult:c[3]}}),{c(){E(e.$$.fragment)},l(a){M(e.$$.fragment,a)},m(a,n){H(e,a,n),r=!0},p(a,n){const m={};n[0]&8&&(m.queryResult=a[3]),e.$set(m)},i(a){r||(g(e.$$.fragment,a),r=!0)},o(a){v(e.$$.fragment,a),r=!1},d(a){T(e,a)}}}function Ka(c){let e,r,a,n,m,s,u,k;return e=new U({props:{id:"perfil",title:"Perfil"}}),a=new U({props:{id:"qt_orgaos",title:"Órgãos",fmt:"num0"}}),m=new U({props:{id:"qt_contratos",title:"Contratos",fmt:"num0"}}),u=new U({props:{id:"vl_total",title:"Valor Total",fmt:"num1b"}}),{c(){E(e.$$.fragment),r=p(),E(a.$$.fragment),n=p(),E(m.$$.fragment),s=p(),E(u.$$.fragment)},l(i){M(e.$$.fragment,i),r=d(i),M(a.$$.fragment,i),n=d(i),M(m.$$.fragment,i),s=d(i),M(u.$$.fragment,i)},m(i,w){H(e,i,w),_(i,r,w),H(a,i,w),_(i,n,w),H(m,i,w),_(i,s,w),H(u,i,w),k=!0},p:_t,i(i){k||(g(e.$$.fragment,i),g(a.$$.fragment,i),g(m.$$.fragment,i),g(u.$$.fragment,i),k=!0)},o(i){v(e.$$.fragment,i),v(a.$$.fragment,i),v(m.$$.fragment,i),v(u.$$.fragment,i),k=!1},d(i){i&&(l(r),l(n),l(s)),T(e,i),T(a,i),T(m,i),T(u,i)}}}function va(c){let e,r;return e=new It({props:{queryID:"aditivos_orgaos",queryResult:c[4]}}),{c(){E(e.$$.fragment)},l(a){M(e.$$.fragment,a)},m(a,n){H(e,a,n),r=!0},p(a,n){const m={};n[0]&16&&(m.queryResult=a[4]),e.$set(m)},i(a){r||(g(e.$$.fragment,a),r=!0)},o(a){v(e.$$.fragment,a),r=!1},d(a){T(e,a)}}}function xa(c){let e,r,a,n,m,s,u,k;return e=new U({props:{id:"situacao",title:"Situação"}}),a=new U({props:{id:"qt_orgaos",title:"Órgãos",fmt:"num0"}}),m=new U({props:{id:"qt_contratos",title:"Contratos",fmt:"num0"}}),u=new U({props:{id:"vl_total_aditado",title:"Valor Aditado",fmt:"num1b"}}),{c(){E(e.$$.fragment),r=p(),E(a.$$.fragment),n=p(),E(m.$$.fragment),s=p(),E(u.$$.fragment)},l(i){M(e.$$.fragment,i),r=d(i),M(a.$$.fragment,i),n=d(i),M(m.$$.fragment,i),s=d(i),M(u.$$.fragment,i)},m(i,w){H(e,i,w),_(i,r,w),H(a,i,w),_(i,n,w),H(m,i,w),_(i,s,w),H(u,i,w),k=!0},p:_t,i(i){k||(g(e.$$.fragment,i),g(a.$$.fragment,i),g(m.$$.fragment,i),g(u.$$.fragment,i),k=!0)},o(i){v(e.$$.fragment,i),v(a.$$.fragment,i),v(m.$$.fragment,i),v(u.$$.fragment,i),k=!1},d(i){i&&(l(r),l(n),l(s)),T(e,i),T(a,i),T(m,i),T(u,i)}}}function Xa(c){let e,r,a,n,m,s,u='<p class="markdown">Quais órgãos do governo de Santa Catarina mais contratam e quanto gastam? Esta análise revela o perfil de cada unidade gestora — desde os grandes contratantes de infraestrutura até os órgãos com contratações mais pontuais.</p>',k,i,w,A,B='<a href="#panorama-dos-órgãos">Panorama dos Órgãos</a>',F,O,N='O estado conta com <strong class="markdown">187 unidades gestoras</strong> ativas no período analisado. A distribuição é bastante concentrada: poucos órgãos respondem pela maior parte do valor contratado, enquanto a maioria realiza contratações de menor porte.',z,f,b,X,j,mt,Y,ft,Q,J,at,ut,G,wt='<a href="#quem-gasta-mais">Quem gasta mais?</a>',W,V,ct='A <strong class="markdown">Secretaria de Estado da Infraestrutura e Mobilidade</strong> lidera com folga em valor total — reflexo direto do alto custo de obras viárias e de engenharia. O <strong class="markdown">Fundo Penitenciário</strong> e o <strong class="markdown">Fundo Rotativo da Penitenciária Industrial de Joinville</strong> também se destacam, indicando investimentos significativos no sistema prisional do estado.',dt,et,Z,h,K,ot,x,yt='<a href="#quem-contrata-com-mais-frequência">Quem contrata com mais frequência?</a>',pt,y,Dt='Órgãos com alto volume de contratos e valor médio menor geralmente atuam em <strong class="markdown">compras recorrentes de insumos</strong> — como medicamentos, material escolar e peças de reposição. O <strong class="markdown">Fundo de Melhoria da Polícia Militar</strong> lidera nessa categoria, refletindo a capilaridade de suas operações em todo o estado.',Pt,Tt,gt,Ot,Et,Qt,st,aa='<a href="#como-se-classificam-por-perfil">Como se classificam por perfil?</a>',Vt,$t,ea='O perfil de contratação classifica os órgãos pelo volume de contratos firmados: <strong class="markdown">Alto volume</strong> (1.000+), <strong class="markdown">Médio volume</strong> (100 a 999), <strong class="markdown">Baixo volume</strong> (10 a 99) e <strong class="markdown">Esporádico</strong> (menos de 10). A maioria dos órgãos realiza contratações de baixo a médio volume.',Ut,Ht,vt,Bt,Ct,Nt,it,oa='<a href="#os-órgãos-utilizam-aditivos">Os órgãos utilizam aditivos?</a>',jt,kt,ra='A maioria dos órgãos opera contratos <strong class="markdown">sem aditivos</strong> — o que é positivo do ponto de vista da gestão contratual. Os órgãos com aditivos de acréscimo merecem atenção para verificar se as alterações estão dentro dos limites legais e devidamente justificadas.',zt,Mt,bt,Gt,Rt,Kt,qt,sa='<p class="markdown">💡 Volte para a <a href="/Analytics-Engineer/compras-publicas" class="markdown">Visão Geral</a> ou explore os <a href="/Analytics-Engineer/compras-publicas/fornecedores" class="markdown">Fornecedores</a>, <a href="/Analytics-Engineer/compras-publicas/modalidades" class="markdown">Modalidades</a>, <a href="/Analytics-Engineer/compras-publicas/evolucao" class="markdown">Evolução Temporal</a> e <a href="/Analytics-Engineer/compras-publicas/aditivos" class="markdown">Aditivos Contratuais</a>.</p>',xt,lt=typeof q<"u"&&q.title&&q.hide_title!==!0&&Va();function ka(t,o){return typeof q<"u"&&q.title?Ba:Ua}let At=ka()(c),nt=typeof q=="object"&&Na(),L=c[0]&&da(c);b=new Xt({props:{data:c[0],value:"total_orgaos",title:"Total de Órgãos",fmt:"num0"}}),j=new Xt({props:{data:c[0],value:"total_contratos",title:"Total de Contratos",fmt:"num1k"}}),Y=new Xt({props:{data:c[0],value:"vl_total",title:"Valor Total Contratado",fmt:"num1b"}}),Q=new Xt({props:{data:c[0],value:"vl_medio",title:"Valor Médio por Contrato",fmt:"num1k"}});let S=c[1]&&pa(c);Z=new ta({props:{data:c[1],title:"Top 20 Órgãos por Valor Total Contratado",index:"false",$$slots:{default:[Ga]},$$scope:{ctx:c}}});let I=c[2]&&ga(c);gt=new Qa({props:{data:c[2],x:"orgao",y:"qt_contratos",title:"Top 20 Órgãos por Quantidade de Contratos",swapXY:"true"}});let D=c[3]&&$a(c);vt=new ta({props:{data:c[3],title:"Distribuição por Perfil de Contratação",index:"false",$$slots:{default:[Ka]},$$scope:{ctx:c}}});let P=c[4]&&va(c);return bt=new ta({props:{data:c[4],title:"Situação de Aditivos por Órgão",index:"false",$$slots:{default:[xa]},$$scope:{ctx:c}}}),{c(){lt&&lt.c(),e=p(),At.c(),r=R("meta"),a=R("meta"),nt&&nt.c(),n=Jt(),m=p(),s=R("blockquote"),s.innerHTML=u,k=p(),i=R("hr"),w=p(),A=R("h2"),A.innerHTML=B,F=p(),O=R("p"),O.innerHTML=N,z=p(),L&&L.c(),f=p(),E(b.$$.fragment),X=p(),E(j.$$.fragment),mt=p(),E(Y.$$.fragment),ft=p(),E(Q.$$.fragment),J=p(),at=R("hr"),ut=p(),G=R("h2"),G.innerHTML=wt,W=p(),V=R("p"),V.innerHTML=ct,dt=p(),S&&S.c(),et=p(),E(Z.$$.fragment),h=p(),K=R("hr"),ot=p(),x=R("h2"),x.innerHTML=yt,pt=p(),y=R("p"),y.innerHTML=Dt,Pt=p(),I&&I.c(),Tt=p(),E(gt.$$.fragment),Ot=p(),Et=R("hr"),Qt=p(),st=R("h2"),st.innerHTML=aa,Vt=p(),$t=R("p"),$t.innerHTML=ea,Ut=p(),D&&D.c(),Ht=p(),E(vt.$$.fragment),Bt=p(),Ct=R("hr"),Nt=p(),it=R("h2"),it.innerHTML=oa,jt=p(),kt=R("p"),kt.innerHTML=ra,zt=p(),P&&P.c(),Mt=p(),E(bt.$$.fragment),Gt=p(),Rt=R("hr"),Kt=p(),qt=R("blockquote"),qt.innerHTML=sa,this.h()},l(t){lt&&lt.l(t),e=d(t);const o=qa("svelte-2igo1p",document.head);At.l(o),r=C(o,"META",{name:!0,content:!0}),a=C(o,"META",{name:!0,content:!0}),nt&&nt.l(o),n=Jt(),o.forEach(l),m=d(t),s=C(t,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),tt(s)!=="svelte-hctjti"&&(s.innerHTML=u),k=d(t),i=C(t,"HR",{class:!0}),w=d(t),A=C(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),tt(A)!=="svelte-1fq5tri"&&(A.innerHTML=B),F=d(t),O=C(t,"P",{class:!0,"data-svelte-h":!0}),tt(O)!=="svelte-1txg03d"&&(O.innerHTML=N),z=d(t),L&&L.l(t),f=d(t),M(b.$$.fragment,t),X=d(t),M(j.$$.fragment,t),mt=d(t),M(Y.$$.fragment,t),ft=d(t),M(Q.$$.fragment,t),J=d(t),at=C(t,"HR",{class:!0}),ut=d(t),G=C(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),tt(G)!=="svelte-1ap3oyj"&&(G.innerHTML=wt),W=d(t),V=C(t,"P",{class:!0,"data-svelte-h":!0}),tt(V)!=="svelte-12f31py"&&(V.innerHTML=ct),dt=d(t),S&&S.l(t),et=d(t),M(Z.$$.fragment,t),h=d(t),K=C(t,"HR",{class:!0}),ot=d(t),x=C(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),tt(x)!=="svelte-11nkb2c"&&(x.innerHTML=yt),pt=d(t),y=C(t,"P",{class:!0,"data-svelte-h":!0}),tt(y)!=="svelte-hzoxpw"&&(y.innerHTML=Dt),Pt=d(t),I&&I.l(t),Tt=d(t),M(gt.$$.fragment,t),Ot=d(t),Et=C(t,"HR",{class:!0}),Qt=d(t),st=C(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),tt(st)!=="svelte-s2lnq1"&&(st.innerHTML=aa),Vt=d(t),$t=C(t,"P",{class:!0,"data-svelte-h":!0}),tt($t)!=="svelte-1agsz8u"&&($t.innerHTML=ea),Ut=d(t),D&&D.l(t),Ht=d(t),M(vt.$$.fragment,t),Bt=d(t),Ct=C(t,"HR",{class:!0}),Nt=d(t),it=C(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),tt(it)!=="svelte-vcqwo2"&&(it.innerHTML=oa),jt=d(t),kt=C(t,"P",{class:!0,"data-svelte-h":!0}),tt(kt)!=="svelte-5du2t"&&(kt.innerHTML=ra),zt=d(t),P&&P.l(t),Mt=d(t),M(bt.$$.fragment,t),Gt=d(t),Rt=C(t,"HR",{class:!0}),Kt=d(t),qt=C(t,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),tt(qt)!=="svelte-17s92kk"&&(qt.innerHTML=sa),this.h()},h(){$(r,"name","twitter:card"),$(r,"content","summary_large_image"),$(a,"name","twitter:site"),$(a,"content","@evidence_dev"),$(s,"class","markdown"),$(i,"class","markdown"),$(A,"class","markdown"),$(A,"id","panorama-dos-órgãos"),$(O,"class","markdown"),$(at,"class","markdown"),$(G,"class","markdown"),$(G,"id","quem-gasta-mais"),$(V,"class","markdown"),$(K,"class","markdown"),$(x,"class","markdown"),$(x,"id","quem-contrata-com-mais-frequência"),$(y,"class","markdown"),$(Et,"class","markdown"),$(st,"class","markdown"),$(st,"id","como-se-classificam-por-perfil"),$($t,"class","markdown"),$(Ct,"class","markdown"),$(it,"class","markdown"),$(it,"id","os-órgãos-utilizam-aditivos"),$(kt,"class","markdown"),$(Rt,"class","markdown"),$(qt,"class","markdown")},m(t,o){lt&&lt.m(t,o),_(t,e,o),At.m(document.head,null),Yt(document.head,r),Yt(document.head,a),nt&&nt.m(document.head,null),Yt(document.head,n),_(t,m,o),_(t,s,o),_(t,k,o),_(t,i,o),_(t,w,o),_(t,A,o),_(t,F,o),_(t,O,o),_(t,z,o),L&&L.m(t,o),_(t,f,o),H(b,t,o),_(t,X,o),H(j,t,o),_(t,mt,o),H(Y,t,o),_(t,ft,o),H(Q,t,o),_(t,J,o),_(t,at,o),_(t,ut,o),_(t,G,o),_(t,W,o),_(t,V,o),_(t,dt,o),S&&S.m(t,o),_(t,et,o),H(Z,t,o),_(t,h,o),_(t,K,o),_(t,ot,o),_(t,x,o),_(t,pt,o),_(t,y,o),_(t,Pt,o),I&&I.m(t,o),_(t,Tt,o),H(gt,t,o),_(t,Ot,o),_(t,Et,o),_(t,Qt,o),_(t,st,o),_(t,Vt,o),_(t,$t,o),_(t,Ut,o),D&&D.m(t,o),_(t,Ht,o),H(vt,t,o),_(t,Bt,o),_(t,Ct,o),_(t,Nt,o),_(t,it,o),_(t,jt,o),_(t,kt,o),_(t,zt,o),P&&P.m(t,o),_(t,Mt,o),H(bt,t,o),_(t,Gt,o),_(t,Rt,o),_(t,Kt,o),_(t,qt,o),xt=!0},p(t,o){typeof q<"u"&&q.title&&q.hide_title!==!0&&lt.p(t,o),At.p(t,o),typeof q=="object"&&nt.p(t,o),t[0]?L?(L.p(t,o),o[0]&1&&g(L,1)):(L=da(t),L.c(),g(L,1),L.m(f.parentNode,f)):L&&(Lt(),v(L,1,1,()=>{L=null}),Ft());const ia={};o[0]&1&&(ia.data=t[0]),b.$set(ia);const la={};o[0]&1&&(la.data=t[0]),j.$set(la);const na={};o[0]&1&&(na.data=t[0]),Y.$set(na);const _a={};o[0]&1&&(_a.data=t[0]),Q.$set(_a),t[1]?S?(S.p(t,o),o[0]&2&&g(S,1)):(S=pa(t),S.c(),g(S,1),S.m(et.parentNode,et)):S&&(Lt(),v(S,1,1,()=>{S=null}),Ft());const Wt={};o[0]&2&&(Wt.data=t[1]),o[1]&2048&&(Wt.$$scope={dirty:o,ctx:t}),Z.$set(Wt),t[2]?I?(I.p(t,o),o[0]&4&&g(I,1)):(I=ga(t),I.c(),g(I,1),I.m(Tt.parentNode,Tt)):I&&(Lt(),v(I,1,1,()=>{I=null}),Ft());const ma={};o[0]&4&&(ma.data=t[2]),gt.$set(ma),t[3]?D?(D.p(t,o),o[0]&8&&g(D,1)):(D=$a(t),D.c(),g(D,1),D.m(Ht.parentNode,Ht)):D&&(Lt(),v(D,1,1,()=>{D=null}),Ft());const Zt={};o[0]&8&&(Zt.data=t[3]),o[1]&2048&&(Zt.$$scope={dirty:o,ctx:t}),vt.$set(Zt),t[4]?P?(P.p(t,o),o[0]&16&&g(P,1)):(P=va(t),P.c(),g(P,1),P.m(Mt.parentNode,Mt)):P&&(Lt(),v(P,1,1,()=>{P=null}),Ft());const ht={};o[0]&16&&(ht.data=t[4]),o[1]&2048&&(ht.$$scope={dirty:o,ctx:t}),bt.$set(ht)},i(t){xt||(g(L),g(b.$$.fragment,t),g(j.$$.fragment,t),g(Y.$$.fragment,t),g(Q.$$.fragment,t),g(S),g(Z.$$.fragment,t),g(I),g(gt.$$.fragment,t),g(D),g(vt.$$.fragment,t),g(P),g(bt.$$.fragment,t),xt=!0)},o(t){v(L),v(b.$$.fragment,t),v(j.$$.fragment,t),v(Y.$$.fragment,t),v(Q.$$.fragment,t),v(S),v(Z.$$.fragment,t),v(I),v(gt.$$.fragment,t),v(D),v(vt.$$.fragment,t),v(P),v(bt.$$.fragment,t),xt=!1},d(t){t&&(l(e),l(m),l(s),l(k),l(i),l(w),l(A),l(F),l(O),l(z),l(f),l(X),l(mt),l(ft),l(J),l(at),l(ut),l(G),l(W),l(V),l(dt),l(et),l(h),l(K),l(ot),l(x),l(pt),l(y),l(Pt),l(Tt),l(Ot),l(Et),l(Qt),l(st),l(Vt),l($t),l(Ut),l(Ht),l(Bt),l(Ct),l(Nt),l(it),l(jt),l(kt),l(zt),l(Mt),l(Gt),l(Rt),l(Kt),l(qt)),lt&&lt.d(t),At.d(t),l(r),l(a),nt&&nt.d(t),l(n),L&&L.d(t),T(b,t),T(j,t),T(Y,t),T(Q,t),S&&S.d(t),T(Z,t),I&&I.d(t),T(gt,t),D&&D.d(t),T(vt,t),P&&P.d(t),T(bt,t)}}}const q={title:"Órgãos Públicos"};function Ya(c,e,r){let a,n;fa(c,Oa,y=>r(27,a=y)),fa(c,ca,y=>r(33,n=y));let{data:m}=e,{data:s={},customFormattingSettings:u,__db:k,inputs:i}=m;wa(ca,n="fc3bc8a761a67c230cb83196f26a5bcb",n);let w=Fa(Da(i));ya(w.subscribe(y=>i=y)),Ta(Ia,{getCustomFormats:()=>u.customFormats||[]});const A=(y,Dt)=>Pa(k.query,y,{query_name:Dt});La(A),a.params,Ha(()=>!0);let B={initialData:void 0,initialError:void 0},F=rt`select
    count(*)                    as total_orgaos,
    sum(qt_contratos)           as total_contratos,
    sum(vl_total_atual)         as vl_total,
    avg(vl_medio_contrato)      as vl_medio
from compras.dim_orgaos`,O=`select
    count(*)                    as total_orgaos,
    sum(qt_contratos)           as total_contratos,
    sum(vl_total_atual)         as vl_total,
    avg(vl_medio_contrato)      as vl_medio
from compras.dim_orgaos`;s.kpis_orgaos_data&&(s.kpis_orgaos_data instanceof Error?B.initialError=s.kpis_orgaos_data:B.initialData=s.kpis_orgaos_data,s.kpis_orgaos_columns&&(B.knownColumns=s.kpis_orgaos_columns));let N,z=!1;const f=St.createReactive({callback:y=>{r(0,N=y)},execFn:A},{id:"kpis_orgaos",...B});f(O,{noResolve:F,...B}),globalThis[Symbol.for("kpis_orgaos")]={get value(){return N}};let b={initialData:void 0,initialError:void 0},X=rt`select
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
limit 20`,j=`select
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
limit 20`;s.ranking_orgaos_valor_data&&(s.ranking_orgaos_valor_data instanceof Error?b.initialError=s.ranking_orgaos_valor_data:b.initialData=s.ranking_orgaos_valor_data,s.ranking_orgaos_valor_columns&&(b.knownColumns=s.ranking_orgaos_valor_columns));let mt,Y=!1;const ft=St.createReactive({callback:y=>{r(1,mt=y)},execFn:A},{id:"ranking_orgaos_valor",...b});ft(j,{noResolve:X,...b}),globalThis[Symbol.for("ranking_orgaos_valor")]={get value(){return mt}};let Q={initialData:void 0,initialError:void 0},J=rt`select
    rank_por_quantidade         as ranking,
    nm_unidade_gestora          as orgao,
    qt_contratos,
    ds_perfil_contratacao       as perfil
from compras.dim_orgaos
order by ranking
limit 20`,at=`select
    rank_por_quantidade         as ranking,
    nm_unidade_gestora          as orgao,
    qt_contratos,
    ds_perfil_contratacao       as perfil
from compras.dim_orgaos
order by ranking
limit 20`;s.ranking_orgaos_qt_data&&(s.ranking_orgaos_qt_data instanceof Error?Q.initialError=s.ranking_orgaos_qt_data:Q.initialData=s.ranking_orgaos_qt_data,s.ranking_orgaos_qt_columns&&(Q.knownColumns=s.ranking_orgaos_qt_columns));let ut,G=!1;const wt=St.createReactive({callback:y=>{r(2,ut=y)},execFn:A},{id:"ranking_orgaos_qt",...Q});wt(at,{noResolve:J,...Q}),globalThis[Symbol.for("ranking_orgaos_qt")]={get value(){return ut}};let W={initialData:void 0,initialError:void 0},V=rt`select
    ds_perfil_contratacao       as perfil,
    count(*)                    as qt_orgaos,
    sum(qt_contratos)           as qt_contratos,
    sum(vl_total_atual)         as vl_total
from compras.dim_orgaos
group by 1
order by sum(qt_contratos) desc`,ct=`select
    ds_perfil_contratacao       as perfil,
    count(*)                    as qt_orgaos,
    sum(qt_contratos)           as qt_contratos,
    sum(vl_total_atual)         as vl_total
from compras.dim_orgaos
group by 1
order by sum(qt_contratos) desc`;s.perfil_contratacao_data&&(s.perfil_contratacao_data instanceof Error?W.initialError=s.perfil_contratacao_data:W.initialData=s.perfil_contratacao_data,s.perfil_contratacao_columns&&(W.knownColumns=s.perfil_contratacao_columns));let dt,et=!1;const Z=St.createReactive({callback:y=>{r(3,dt=y)},execFn:A},{id:"perfil_contratacao",...W});Z(ct,{noResolve:V,...W}),globalThis[Symbol.for("perfil_contratacao")]={get value(){return dt}};let h={initialData:void 0,initialError:void 0},K=rt`select
    ds_situacao_aditivo         as situacao,
    count(*)                    as qt_orgaos,
    sum(qt_contratos)           as qt_contratos,
    sum(vl_total_aditado)       as vl_total_aditado
from compras.dim_orgaos
group by 1
order by qt_orgaos desc`,ot=`select
    ds_situacao_aditivo         as situacao,
    count(*)                    as qt_orgaos,
    sum(qt_contratos)           as qt_contratos,
    sum(vl_total_aditado)       as vl_total_aditado
from compras.dim_orgaos
group by 1
order by qt_orgaos desc`;s.aditivos_orgaos_data&&(s.aditivos_orgaos_data instanceof Error?h.initialError=s.aditivos_orgaos_data:h.initialData=s.aditivos_orgaos_data,s.aditivos_orgaos_columns&&(h.knownColumns=s.aditivos_orgaos_columns));let x,yt=!1;const pt=St.createReactive({callback:y=>{r(4,x=y)},execFn:A},{id:"aditivos_orgaos",...h});return pt(ot,{noResolve:K,...h}),globalThis[Symbol.for("aditivos_orgaos")]={get value(){return x}},c.$$set=y=>{"data"in y&&r(5,m=y.data)},c.$$.update=()=>{c.$$.dirty[0]&32&&r(6,{data:s={},customFormattingSettings:u,__db:k}=m,s),c.$$.dirty[0]&64&&Sa.set(Object.keys(s).length>0),c.$$.dirty[0]&134217728&&a.params,c.$$.dirty[0]&1920&&(F||!z?F||(f(O,{noResolve:F,...B}),r(10,z=!0)):f(O,{noResolve:F})),c.$$.dirty[0]&30720&&(X||!Y?X||(ft(j,{noResolve:X,...b}),r(14,Y=!0)):ft(j,{noResolve:X})),c.$$.dirty[0]&491520&&(J||!G?J||(wt(at,{noResolve:J,...Q}),r(18,G=!0)):wt(at,{noResolve:J})),c.$$.dirty[0]&7864320&&(V||!et?V||(Z(ct,{noResolve:V,...W}),r(22,et=!0)):Z(ct,{noResolve:V})),c.$$.dirty[0]&125829120&&(K||!yt?K||(pt(ot,{noResolve:K,...h}),r(26,yt=!0)):pt(ot,{noResolve:K}))},r(8,F=rt`select
    count(*)                    as total_orgaos,
    sum(qt_contratos)           as total_contratos,
    sum(vl_total_atual)         as vl_total,
    avg(vl_medio_contrato)      as vl_medio
from compras.dim_orgaos`),r(9,O=`select
    count(*)                    as total_orgaos,
    sum(qt_contratos)           as total_contratos,
    sum(vl_total_atual)         as vl_total,
    avg(vl_medio_contrato)      as vl_medio
from compras.dim_orgaos`),r(12,X=rt`select
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
limit 20`),r(13,j=`select
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
limit 20`),r(16,J=rt`select
    rank_por_quantidade         as ranking,
    nm_unidade_gestora          as orgao,
    qt_contratos,
    ds_perfil_contratacao       as perfil
from compras.dim_orgaos
order by ranking
limit 20`),r(17,at=`select
    rank_por_quantidade         as ranking,
    nm_unidade_gestora          as orgao,
    qt_contratos,
    ds_perfil_contratacao       as perfil
from compras.dim_orgaos
order by ranking
limit 20`),r(20,V=rt`select
    ds_perfil_contratacao       as perfil,
    count(*)                    as qt_orgaos,
    sum(qt_contratos)           as qt_contratos,
    sum(vl_total_atual)         as vl_total
from compras.dim_orgaos
group by 1
order by sum(qt_contratos) desc`),r(21,ct=`select
    ds_perfil_contratacao       as perfil,
    count(*)                    as qt_orgaos,
    sum(qt_contratos)           as qt_contratos,
    sum(vl_total_atual)         as vl_total
from compras.dim_orgaos
group by 1
order by sum(qt_contratos) desc`),r(24,K=rt`select
    ds_situacao_aditivo         as situacao,
    count(*)                    as qt_orgaos,
    sum(qt_contratos)           as qt_contratos,
    sum(vl_total_aditado)       as vl_total_aditado
from compras.dim_orgaos
group by 1
order by qt_orgaos desc`),r(25,ot=`select
    ds_situacao_aditivo         as situacao,
    count(*)                    as qt_orgaos,
    sum(qt_contratos)           as qt_contratos,
    sum(vl_total_aditado)       as vl_total_aditado
from compras.dim_orgaos
group by 1
order by qt_orgaos desc`),[N,mt,ut,dt,x,m,s,B,F,O,z,b,X,j,Y,Q,J,at,G,W,V,ct,et,h,K,ot,yt,a]}class ie extends Ra{constructor(e){super(),Aa(this,e,Ya,Xa,ba,{data:5},null,[-1,-1])}}export{ie as component};
