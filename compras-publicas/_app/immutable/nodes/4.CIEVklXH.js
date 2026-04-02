import{s as Ye,d as l,i,a as $e,b as v,c,h as Je,e as T,f as ve,g as U,j as d,k as C,l as Oe,m as We,o as Ze,n as ta,p as ea,q as ut,r as aa,t as oa,u as ra}from"../chunks/scheduler.DjHbl-jX.js";import{S as sa,i as la,d as k,t as g,a as p,c as Ot,m as w,b as y,e as q,g as Vt}from"../chunks/index.DylIKcrZ.js";import{D as pe,e as na,s as ia,Q as Ut,p as ma,C as O,a as Ve,r as Ue,b as ua}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.DSFIo5A3.js";import{w as _a}from"../chunks/entry.Zfzfp1xp.js";import{h as rt,p as fa}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as ca}from"../chunks/stores.BoDLYOPP.js";import{Q as Nt}from"../chunks/QueryViewer.CHR4_CX6.js";import{B as Be}from"../chunks/BarChart.DK1ywQkt.js";import{B as Bt}from"../chunks/BigValue.CM6nO52y.js";import{L as da}from"../chunks/LineChart.BAVDScQW.js";function pa(f){let o,r=E.title+"",e;return{c(){o=C("h1"),e=ra(r),this.h()},l(n){o=T(n,"H1",{class:!0});var u=aa(o);e=oa(u,r),u.forEach(l),this.h()},h(){v(o,"class","title")},m(n,u){i(n,o,u),$e(o,e)},p:ut,d(n){n&&l(o)}}}function $a(f){return{c(){this.h()},l(o){this.h()},h(){document.title="Evidence"},m:ut,p:ut,d:ut}}function va(f){let o,r,e,n,u;return document.title=o=E.title,{c(){r=d(),e=C("meta"),n=d(),u=C("meta"),this.h()},l(s){r=c(s),e=T(s,"META",{property:!0,content:!0}),n=c(s),u=T(s,"META",{name:!0,content:!0}),this.h()},h(){var s,m;v(e,"property","og:title"),v(e,"content",((s=E.og)==null?void 0:s.title)??E.title),v(u,"name","twitter:title"),v(u,"content",((m=E.og)==null?void 0:m.title)??E.title)},m(s,m){i(s,r,m),i(s,e,m),i(s,n,m),i(s,u,m)},p(s,m){m&0&&o!==(o=E.title)&&(document.title=o)},d(s){s&&(l(r),l(e),l(n),l(u))}}}function ga(f){var u,s;let o,r,e=(E.description||((u=E.og)==null?void 0:u.description))&&ba(),n=((s=E.og)==null?void 0:s.image)&&ka();return{c(){e&&e.c(),o=d(),n&&n.c(),r=ve()},l(m){e&&e.l(m),o=c(m),n&&n.l(m),r=ve()},m(m,b){e&&e.m(m,b),i(m,o,b),n&&n.m(m,b),i(m,r,b)},p(m,b){var _,H;(E.description||(_=E.og)!=null&&_.description)&&e.p(m,b),(H=E.og)!=null&&H.image&&n.p(m,b)},d(m){m&&(l(o),l(r)),e&&e.d(m),n&&n.d(m)}}}function ba(f){let o,r,e,n,u;return{c(){o=C("meta"),r=d(),e=C("meta"),n=d(),u=C("meta"),this.h()},l(s){o=T(s,"META",{name:!0,content:!0}),r=c(s),e=T(s,"META",{property:!0,content:!0}),n=c(s),u=T(s,"META",{name:!0,content:!0}),this.h()},h(){var s,m,b;v(o,"name","description"),v(o,"content",E.description??((s=E.og)==null?void 0:s.description)),v(e,"property","og:description"),v(e,"content",((m=E.og)==null?void 0:m.description)??E.description),v(u,"name","twitter:description"),v(u,"content",((b=E.og)==null?void 0:b.description)??E.description)},m(s,m){i(s,o,m),i(s,r,m),i(s,e,m),i(s,n,m),i(s,u,m)},p:ut,d(s){s&&(l(o),l(r),l(e),l(n),l(u))}}}function ka(f){let o,r,e;return{c(){o=C("meta"),r=d(),e=C("meta"),this.h()},l(n){o=T(n,"META",{property:!0,content:!0}),r=c(n),e=T(n,"META",{name:!0,content:!0}),this.h()},h(){var n,u;v(o,"property","og:image"),v(o,"content",Ve((n=E.og)==null?void 0:n.image)),v(e,"name","twitter:image"),v(e,"content",Ve((u=E.og)==null?void 0:u.image))},m(n,u){i(n,o,u),i(n,r,u),i(n,e,u)},p:ut,d(n){n&&(l(o),l(r),l(e))}}}function Ne(f){let o,r;return o=new Nt({props:{queryID:"kpis",queryResult:f[0]}}),{c(){q(o.$$.fragment)},l(e){y(o.$$.fragment,e)},m(e,n){w(o,e,n),r=!0},p(e,n){const u={};n[0]&1&&(u.queryResult=e[0]),o.$set(u)},i(e){r||(p(o.$$.fragment,e),r=!0)},o(e){g(o.$$.fragment,e),r=!1},d(e){k(o,e)}}}function je(f){let o,r;return o=new Nt({props:{queryID:"evolucao_anual",queryResult:f[1]}}),{c(){q(o.$$.fragment)},l(e){y(o.$$.fragment,e)},m(e,n){w(o,e,n),r=!0},p(e,n){const u={};n[0]&2&&(u.queryResult=e[1]),o.$set(u)},i(e){r||(p(o.$$.fragment,e),r=!0)},o(e){g(o.$$.fragment,e),r=!1},d(e){k(o,e)}}}function wa(f){let o,r,e,n,u,s,m,b;return o=new O({props:{id:"ano",title:"Ano"}}),e=new O({props:{id:"qt_contratos",title:"Qtd. Contratos",fmt:"num0"}}),u=new O({props:{id:"vl_total_original",title:"Valor Inicial",fmt:"num1b"}}),m=new O({props:{id:"vl_total_atual",title:"Valor Atualizado",fmt:"num1b"}}),{c(){q(o.$$.fragment),r=d(),q(e.$$.fragment),n=d(),q(u.$$.fragment),s=d(),q(m.$$.fragment)},l(_){y(o.$$.fragment,_),r=c(_),y(e.$$.fragment,_),n=c(_),y(u.$$.fragment,_),s=c(_),y(m.$$.fragment,_)},m(_,H){w(o,_,H),i(_,r,H),w(e,_,H),i(_,n,H),w(u,_,H),i(_,s,H),w(m,_,H),b=!0},p:ut,i(_){b||(p(o.$$.fragment,_),p(e.$$.fragment,_),p(u.$$.fragment,_),p(m.$$.fragment,_),b=!0)},o(_){g(o.$$.fragment,_),g(e.$$.fragment,_),g(u.$$.fragment,_),g(m.$$.fragment,_),b=!1},d(_){_&&(l(r),l(n),l(s)),k(o,_),k(e,_),k(u,_),k(m,_)}}}function ze(f){let o,r;return o=new Nt({props:{queryID:"situacao_aditivo",queryResult:f[2]}}),{c(){q(o.$$.fragment)},l(e){y(o.$$.fragment,e)},m(e,n){w(o,e,n),r=!0},p(e,n){const u={};n[0]&4&&(u.queryResult=e[2]),o.$set(u)},i(e){r||(p(o.$$.fragment,e),r=!0)},o(e){g(o.$$.fragment,e),r=!1},d(e){k(o,e)}}}function ya(f){let o,r,e,n,u,s;return o=new O({props:{id:"situacao",title:"Situação"}}),e=new O({props:{id:"qt_contratos",title:"Contratos",fmt:"num0"}}),u=new O({props:{id:"vl_total",title:"Valor Total",fmt:"num1b"}}),{c(){q(o.$$.fragment),r=d(),q(e.$$.fragment),n=d(),q(u.$$.fragment)},l(m){y(o.$$.fragment,m),r=c(m),y(e.$$.fragment,m),n=c(m),y(u.$$.fragment,m)},m(m,b){w(o,m,b),i(m,r,b),w(e,m,b),i(m,n,b),w(u,m,b),s=!0},p:ut,i(m){s||(p(o.$$.fragment,m),p(e.$$.fragment,m),p(u.$$.fragment,m),s=!0)},o(m){g(o.$$.fragment,m),g(e.$$.fragment,m),g(u.$$.fragment,m),s=!1},d(m){m&&(l(r),l(n)),k(o,m),k(e,m),k(u,m)}}}function Ge(f){let o,r;return o=new Nt({props:{queryID:"top_modalidades",queryResult:f[3]}}),{c(){q(o.$$.fragment)},l(e){y(o.$$.fragment,e)},m(e,n){w(o,e,n),r=!0},p(e,n){const u={};n[0]&8&&(u.queryResult=e[3]),o.$set(u)},i(e){r||(p(o.$$.fragment,e),r=!0)},o(e){g(o.$$.fragment,e),r=!1},d(e){k(o,e)}}}function Ke(f){let o,r;return o=new Nt({props:{queryID:"top_orgaos",queryResult:f[4]}}),{c(){q(o.$$.fragment)},l(e){y(o.$$.fragment,e)},m(e,n){w(o,e,n),r=!0},p(e,n){const u={};n[0]&16&&(u.queryResult=e[4]),o.$set(u)},i(e){r||(p(o.$$.fragment,e),r=!0)},o(e){g(o.$$.fragment,e),r=!1},d(e){k(o,e)}}}function qa(f){let o,r,e,n,u,s,m,b;return o=new O({props:{id:"ranking",title:"Ranking"}}),e=new O({props:{id:"orgao",title:"Órgão"}}),u=new O({props:{id:"qt_contratos",title:"Qtd. Contratos",fmt:"num0"}}),m=new O({props:{id:"vl_total",title:"Valor Total",fmt:"num1b"}}),{c(){q(o.$$.fragment),r=d(),q(e.$$.fragment),n=d(),q(u.$$.fragment),s=d(),q(m.$$.fragment)},l(_){y(o.$$.fragment,_),r=c(_),y(e.$$.fragment,_),n=c(_),y(u.$$.fragment,_),s=c(_),y(m.$$.fragment,_)},m(_,H){w(o,_,H),i(_,r,H),w(e,_,H),i(_,n,H),w(u,_,H),i(_,s,H),w(m,_,H),b=!0},p:ut,i(_){b||(p(o.$$.fragment,_),p(e.$$.fragment,_),p(u.$$.fragment,_),p(m.$$.fragment,_),b=!0)},o(_){g(o.$$.fragment,_),g(e.$$.fragment,_),g(u.$$.fragment,_),g(m.$$.fragment,_),b=!1},d(_){_&&(l(r),l(n),l(s)),k(o,_),k(e,_),k(u,_),k(m,_)}}}function xe(f){let o,r;return o=new Nt({props:{queryID:"top_fornecedores",queryResult:f[5]}}),{c(){q(o.$$.fragment)},l(e){y(o.$$.fragment,e)},m(e,n){w(o,e,n),r=!0},p(e,n){const u={};n[0]&32&&(u.queryResult=e[5]),o.$set(u)},i(e){r||(p(o.$$.fragment,e),r=!0)},o(e){g(o.$$.fragment,e),r=!1},d(e){k(o,e)}}}function Ta(f){let o,r,e,n,u,s,m,b,_,H;return o=new O({props:{id:"ranking",title:"Ranking"}}),e=new O({props:{id:"fornecedor",title:"Fornecedor"}}),u=new O({props:{id:"porte",title:"Porte"}}),m=new O({props:{id:"qt_contratos",title:"Qtd. Contratos",fmt:"num0"}}),_=new O({props:{id:"vl_total",title:"Valor Total",fmt:"num1b"}}),{c(){q(o.$$.fragment),r=d(),q(e.$$.fragment),n=d(),q(u.$$.fragment),s=d(),q(m.$$.fragment),b=d(),q(_.$$.fragment)},l($){y(o.$$.fragment,$),r=c($),y(e.$$.fragment,$),n=c($),y(u.$$.fragment,$),s=c($),y(m.$$.fragment,$),b=c($),y(_.$$.fragment,$)},m($,M){w(o,$,M),i($,r,M),w(e,$,M),i($,n,M),w(u,$,M),i($,s,M),w(m,$,M),i($,b,M),w(_,$,M),H=!0},p:ut,i($){H||(p(o.$$.fragment,$),p(e.$$.fragment,$),p(u.$$.fragment,$),p(m.$$.fragment,$),p(_.$$.fragment,$),H=!0)},o($){g(o.$$.fragment,$),g(e.$$.fragment,$),g(u.$$.fragment,$),g(m.$$.fragment,$),g(_.$$.fragment,$),H=!1},d($){$&&(l(r),l(n),l(s),l(b)),k(o,$),k(e,$),k(u,$),k(m,$),k(_,$)}}}function Ca(f){let o,r,e,n,u,s,m='<p class="markdown">Quanto o governo do Estado de Santa Catarina contrata, com quem e como? Este painel analisa <strong class="markdown">10 anos de contratos públicos</strong> do estado, transformando dados brutos em informação estruturada e acessível.</p>',b,_,H='<strong class="markdown">Fonte:</strong> <a href="https://www.transparencia.sc.gov.br/" rel="nofollow" class="markdown">Portal de Transparência do Estado de Santa Catarina</a> | <strong class="markdown">Período:</strong> 01/01/2016 a 31/03/2026 | <strong class="markdown">Registros:</strong> ~76 mil contratos',$,M,z,V,St='<a href="#panorama-geral">Panorama Geral</a>',gt,G,st='Em 10 anos, o Estado de Santa Catarina firmou mais de <strong class="markdown">76 mil contratos</strong> com quase <strong class="markdown">11,5 mil fornecedores diferentes</strong>, movimentando cerca de <strong class="markdown">R$ 79,7 bilhões</strong>. Desse total, <strong class="markdown">R$ 1,6 bilhão</strong> corresponde a aditivos contratuais — alterações de valor ou prazo após a assinatura.',K,x,X,bt,Y,J,Q,lt,W,kt,Z,tt,P,nt,_t,wt,j,it='<a href="#como-evoluiu-o-volume-de-contratações">Como evoluiu o volume de contratações?</a>',et,B,Dt='O pico de contratações ocorreu em <strong class="markdown">2018</strong>, com quase 10 mil contratos. Após 2018 ocorreu uma queda entre 2019 e 2021, o volume voltou a crescer a partir de 2022 — possivelmente reflexo da retomada pós-pandemia e novos investimentos em infraestrutura.',yt,mt,h,at,N,qt,ot,Tt,R,Yt='<p class="markdown">📌 <strong class="markdown">Anos eleitorais:</strong> Em <strong class="markdown">2018</strong> e <strong class="markdown">2022</strong>, anos de eleição para o Governo do Estado, observa-se variação nos volumes contratados — especialmente em 2022, onde o valor original registrado (R$ 39,8B) contrasta com o valor atualizado (R$ 15,7B), indicando redução no valor dos contratos.</p>',Jt,jt,Wt,ft,ye='<a href="#os-contratos-sofreram-alterações">Os contratos sofreram alterações?</a>',Zt,Ct,qe='A grande maioria dos contratos (<strong class="markdown">97,6%</strong>) não sofreu aditivos. Dos que foram alterados, a maioria teve acréscimo de valor.',te,It,Rt,ee,zt,ae,ct,Te='<a href="#quais-modalidades-são-mais-usadas">Quais modalidades são mais usadas?</a>',oe,Et,Ce='O <strong class="markdown">Pregão Eletrônico</strong> domina amplamente as contratações — modalidade que promove maior competitividade por permitir disputas online entre fornecedores. A predominância dessa modalidade é um indicador positivo de transparência e eficiência no processo licitatório.',re,Qt,Ht,se,Gt,le,dt,Re='<a href="#quem-mais-contrata">Quem mais contrata?</a>',ne,Mt,Ee='A <strong class="markdown">Secretaria de Estado da Infraestrutura e Mobilidade</strong> lidera em valor total — esperado dado o alto custo de obras e serviços de engenharia. Já o <strong class="markdown">Fundo de Melhoria da Polícia Militar</strong> se destaca em quantidade de contratos, refletindo a capilaridade de suas operações.',ie,Pt,At,me,Kt,ue,pt,He='<a href="#quem-são-os-maiores-fornecedores">Quem são os maiores fornecedores?</a>',_e,ht,Lt,fe,xt,ce,Ft,Me='<p class="markdown">💡 <strong class="markdown">Explore as análises detalhadas</strong> nos painéis de <a href="/Analytics-Engineer/compras-publicas/orgaos" class="markdown">Órgãos</a>, <a href="/Analytics-Engineer/compras-publicas/fornecedores" class="markdown">Fornecedores</a>, <a href="/Analytics-Engineer/compras-publicas/modalidades" class="markdown">Modalidades</a>, <a href="/Analytics-Engineer/compras-publicas/evolucao" class="markdown">Evolução Temporal</a> e <a href="/Analytics-Engineer/compras-publicas/aditivos" class="markdown">Aditivos Contratuais</a>.</p>',de,$t=typeof E<"u"&&E.title&&E.hide_title!==!0&&pa();function Xe(t,a){return typeof E<"u"&&E.title?va:$a}let Xt=Xe()(f),vt=typeof E=="object"&&ga(),A=f[0]&&Ne(f);X=new Bt({props:{data:f[0],value:"total_contratos",title:"Contratos",fmt:"num1k"}}),Y=new Bt({props:{data:f[0],value:"total_fornecedores",title:"Fornecedores",fmt:"num1k"}}),Q=new Bt({props:{data:f[0],value:"total_orgaos",title:"Órgãos Públicos",fmt:"num0"}}),W=new Bt({props:{data:f[0],value:"vl_total_atual",title:"Valor Total Contratado",fmt:"num1b"}}),Z=new Bt({props:{data:f[0],value:"vl_total_aditado",title:"Total em Aditivos",fmt:"num1b"}}),P=new Bt({props:{data:f[0],value:"contratos_com_aditivo",title:"Contratos com Aditivo",fmt:"num1k"}});let L=f[1]&&je(f);h=new Be({props:{data:f[1],x:"ano",y:"qt_contratos",title:"Quantidade de Contratos por Ano",xAxisTitle:"Ano",yAxisTitle:"Quantidade",xType:"category"}}),N=new da({props:{data:f[1],x:"ano",y:"vl_total_atual",title:"Valor Total Contratado por Ano (R$)",xAxisTitle:"Ano",yAxisTitle:"Valor (R$)",xType:"category"}}),ot=new pe({props:{data:f[1],title:"Resumo por Ano",index:"false",$$slots:{default:[wa]},$$scope:{ctx:f}}});let F=f[2]&&ze(f);Rt=new pe({props:{data:f[2],title:"Contratos por Situação de Aditivo",index:"false",$$slots:{default:[ya]},$$scope:{ctx:f}}});let S=f[3]&&Ge(f);Ht=new Be({props:{data:f[3],x:"modalidade",y:"qt_contratos",title:"Top 10 Modalidades por Quantidade de Contratos",swapXY:"true"}});let D=f[4]&&Ke(f);At=new pe({props:{data:f[4],title:"Top 10 Órgãos por Valor Total Contratado",index:"false",$$slots:{default:[qa]},$$scope:{ctx:f}}});let I=f[5]&&xe(f);return Lt=new pe({props:{data:f[5],title:"Top 10 Fornecedores por Valor Total Contratado",index:"false",$$slots:{default:[Ta]},$$scope:{ctx:f}}}),{c(){$t&&$t.c(),o=d(),Xt.c(),r=C("meta"),e=C("meta"),vt&&vt.c(),n=ve(),u=d(),s=C("blockquote"),s.innerHTML=m,b=d(),_=C("p"),_.innerHTML=H,$=d(),M=C("hr"),z=d(),V=C("h2"),V.innerHTML=St,gt=d(),G=C("p"),G.innerHTML=st,K=d(),A&&A.c(),x=d(),q(X.$$.fragment),bt=d(),q(Y.$$.fragment),J=d(),q(Q.$$.fragment),lt=d(),q(W.$$.fragment),kt=d(),q(Z.$$.fragment),tt=d(),q(P.$$.fragment),nt=d(),_t=C("hr"),wt=d(),j=C("h2"),j.innerHTML=it,et=d(),B=C("p"),B.innerHTML=Dt,yt=d(),L&&L.c(),mt=d(),q(h.$$.fragment),at=d(),q(N.$$.fragment),qt=d(),q(ot.$$.fragment),Tt=d(),R=C("blockquote"),R.innerHTML=Yt,Jt=d(),jt=C("hr"),Wt=d(),ft=C("h2"),ft.innerHTML=ye,Zt=d(),Ct=C("p"),Ct.innerHTML=qe,te=d(),F&&F.c(),It=d(),q(Rt.$$.fragment),ee=d(),zt=C("hr"),ae=d(),ct=C("h2"),ct.innerHTML=Te,oe=d(),Et=C("p"),Et.innerHTML=Ce,re=d(),S&&S.c(),Qt=d(),q(Ht.$$.fragment),se=d(),Gt=C("hr"),le=d(),dt=C("h2"),dt.innerHTML=Re,ne=d(),Mt=C("p"),Mt.innerHTML=Ee,ie=d(),D&&D.c(),Pt=d(),q(At.$$.fragment),me=d(),Kt=C("hr"),ue=d(),pt=C("h2"),pt.innerHTML=He,_e=d(),I&&I.c(),ht=d(),q(Lt.$$.fragment),fe=d(),xt=C("hr"),ce=d(),Ft=C("blockquote"),Ft.innerHTML=Me,this.h()},l(t){$t&&$t.l(t),o=c(t);const a=Je("svelte-2igo1p",document.head);Xt.l(a),r=T(a,"META",{name:!0,content:!0}),e=T(a,"META",{name:!0,content:!0}),vt&&vt.l(a),n=ve(),a.forEach(l),u=c(t),s=T(t,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),U(s)!=="svelte-pj0glx"&&(s.innerHTML=m),b=c(t),_=T(t,"P",{class:!0,"data-svelte-h":!0}),U(_)!=="svelte-qgjp1y"&&(_.innerHTML=H),$=c(t),M=T(t,"HR",{class:!0}),z=c(t),V=T(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),U(V)!=="svelte-3y2fmk"&&(V.innerHTML=St),gt=c(t),G=T(t,"P",{class:!0,"data-svelte-h":!0}),U(G)!=="svelte-1tbq5wx"&&(G.innerHTML=st),K=c(t),A&&A.l(t),x=c(t),y(X.$$.fragment,t),bt=c(t),y(Y.$$.fragment,t),J=c(t),y(Q.$$.fragment,t),lt=c(t),y(W.$$.fragment,t),kt=c(t),y(Z.$$.fragment,t),tt=c(t),y(P.$$.fragment,t),nt=c(t),_t=T(t,"HR",{class:!0}),wt=c(t),j=T(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),U(j)!=="svelte-16ygm2g"&&(j.innerHTML=it),et=c(t),B=T(t,"P",{class:!0,"data-svelte-h":!0}),U(B)!=="svelte-126h5hc"&&(B.innerHTML=Dt),yt=c(t),L&&L.l(t),mt=c(t),y(h.$$.fragment,t),at=c(t),y(N.$$.fragment,t),qt=c(t),y(ot.$$.fragment,t),Tt=c(t),R=T(t,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),U(R)!=="svelte-1maykia"&&(R.innerHTML=Yt),Jt=c(t),jt=T(t,"HR",{class:!0}),Wt=c(t),ft=T(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),U(ft)!=="svelte-livrma"&&(ft.innerHTML=ye),Zt=c(t),Ct=T(t,"P",{class:!0,"data-svelte-h":!0}),U(Ct)!=="svelte-wjk5pq"&&(Ct.innerHTML=qe),te=c(t),F&&F.l(t),It=c(t),y(Rt.$$.fragment,t),ee=c(t),zt=T(t,"HR",{class:!0}),ae=c(t),ct=T(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),U(ct)!=="svelte-1preelj"&&(ct.innerHTML=Te),oe=c(t),Et=T(t,"P",{class:!0,"data-svelte-h":!0}),U(Et)!=="svelte-161fxab"&&(Et.innerHTML=Ce),re=c(t),S&&S.l(t),Qt=c(t),y(Ht.$$.fragment,t),se=c(t),Gt=T(t,"HR",{class:!0}),le=c(t),dt=T(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),U(dt)!=="svelte-rb99q5"&&(dt.innerHTML=Re),ne=c(t),Mt=T(t,"P",{class:!0,"data-svelte-h":!0}),U(Mt)!=="svelte-18srbdk"&&(Mt.innerHTML=Ee),ie=c(t),D&&D.l(t),Pt=c(t),y(At.$$.fragment,t),me=c(t),Kt=T(t,"HR",{class:!0}),ue=c(t),pt=T(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),U(pt)!=="svelte-wkqc6n"&&(pt.innerHTML=He),_e=c(t),I&&I.l(t),ht=c(t),y(Lt.$$.fragment,t),fe=c(t),xt=T(t,"HR",{class:!0}),ce=c(t),Ft=T(t,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),U(Ft)!=="svelte-8qzny5"&&(Ft.innerHTML=Me),this.h()},h(){v(r,"name","twitter:card"),v(r,"content","summary_large_image"),v(e,"name","twitter:site"),v(e,"content","@evidence_dev"),v(s,"class","markdown"),v(_,"class","markdown"),v(M,"class","markdown"),v(V,"class","markdown"),v(V,"id","panorama-geral"),v(G,"class","markdown"),v(_t,"class","markdown"),v(j,"class","markdown"),v(j,"id","como-evoluiu-o-volume-de-contratações"),v(B,"class","markdown"),v(R,"class","markdown"),v(jt,"class","markdown"),v(ft,"class","markdown"),v(ft,"id","os-contratos-sofreram-alterações"),v(Ct,"class","markdown"),v(zt,"class","markdown"),v(ct,"class","markdown"),v(ct,"id","quais-modalidades-são-mais-usadas"),v(Et,"class","markdown"),v(Gt,"class","markdown"),v(dt,"class","markdown"),v(dt,"id","quem-mais-contrata"),v(Mt,"class","markdown"),v(Kt,"class","markdown"),v(pt,"class","markdown"),v(pt,"id","quem-são-os-maiores-fornecedores"),v(xt,"class","markdown"),v(Ft,"class","markdown")},m(t,a){$t&&$t.m(t,a),i(t,o,a),Xt.m(document.head,null),$e(document.head,r),$e(document.head,e),vt&&vt.m(document.head,null),$e(document.head,n),i(t,u,a),i(t,s,a),i(t,b,a),i(t,_,a),i(t,$,a),i(t,M,a),i(t,z,a),i(t,V,a),i(t,gt,a),i(t,G,a),i(t,K,a),A&&A.m(t,a),i(t,x,a),w(X,t,a),i(t,bt,a),w(Y,t,a),i(t,J,a),w(Q,t,a),i(t,lt,a),w(W,t,a),i(t,kt,a),w(Z,t,a),i(t,tt,a),w(P,t,a),i(t,nt,a),i(t,_t,a),i(t,wt,a),i(t,j,a),i(t,et,a),i(t,B,a),i(t,yt,a),L&&L.m(t,a),i(t,mt,a),w(h,t,a),i(t,at,a),w(N,t,a),i(t,qt,a),w(ot,t,a),i(t,Tt,a),i(t,R,a),i(t,Jt,a),i(t,jt,a),i(t,Wt,a),i(t,ft,a),i(t,Zt,a),i(t,Ct,a),i(t,te,a),F&&F.m(t,a),i(t,It,a),w(Rt,t,a),i(t,ee,a),i(t,zt,a),i(t,ae,a),i(t,ct,a),i(t,oe,a),i(t,Et,a),i(t,re,a),S&&S.m(t,a),i(t,Qt,a),w(Ht,t,a),i(t,se,a),i(t,Gt,a),i(t,le,a),i(t,dt,a),i(t,ne,a),i(t,Mt,a),i(t,ie,a),D&&D.m(t,a),i(t,Pt,a),w(At,t,a),i(t,me,a),i(t,Kt,a),i(t,ue,a),i(t,pt,a),i(t,_e,a),I&&I.m(t,a),i(t,ht,a),w(Lt,t,a),i(t,fe,a),i(t,xt,a),i(t,ce,a),i(t,Ft,a),de=!0},p(t,a){typeof E<"u"&&E.title&&E.hide_title!==!0&&$t.p(t,a),Xt.p(t,a),typeof E=="object"&&vt.p(t,a),t[0]?A?(A.p(t,a),a[0]&1&&p(A,1)):(A=Ne(t),A.c(),p(A,1),A.m(x.parentNode,x)):A&&(Vt(),g(A,1,1,()=>{A=null}),Ot());const Ae={};a[0]&1&&(Ae.data=t[0]),X.$set(Ae);const Le={};a[0]&1&&(Le.data=t[0]),Y.$set(Le);const Fe={};a[0]&1&&(Fe.data=t[0]),Q.$set(Fe);const Se={};a[0]&1&&(Se.data=t[0]),W.$set(Se);const De={};a[0]&1&&(De.data=t[0]),Z.$set(De);const Ie={};a[0]&1&&(Ie.data=t[0]),P.$set(Ie),t[1]?L?(L.p(t,a),a[0]&2&&p(L,1)):(L=je(t),L.c(),p(L,1),L.m(mt.parentNode,mt)):L&&(Vt(),g(L,1,1,()=>{L=null}),Ot());const Qe={};a[0]&2&&(Qe.data=t[1]),h.$set(Qe);const Pe={};a[0]&2&&(Pe.data=t[1]),N.$set(Pe);const ge={};a[0]&2&&(ge.data=t[1]),a[1]&131072&&(ge.$$scope={dirty:a,ctx:t}),ot.$set(ge),t[2]?F?(F.p(t,a),a[0]&4&&p(F,1)):(F=ze(t),F.c(),p(F,1),F.m(It.parentNode,It)):F&&(Vt(),g(F,1,1,()=>{F=null}),Ot());const be={};a[0]&4&&(be.data=t[2]),a[1]&131072&&(be.$$scope={dirty:a,ctx:t}),Rt.$set(be),t[3]?S?(S.p(t,a),a[0]&8&&p(S,1)):(S=Ge(t),S.c(),p(S,1),S.m(Qt.parentNode,Qt)):S&&(Vt(),g(S,1,1,()=>{S=null}),Ot());const he={};a[0]&8&&(he.data=t[3]),Ht.$set(he),t[4]?D?(D.p(t,a),a[0]&16&&p(D,1)):(D=Ke(t),D.c(),p(D,1),D.m(Pt.parentNode,Pt)):D&&(Vt(),g(D,1,1,()=>{D=null}),Ot());const ke={};a[0]&16&&(ke.data=t[4]),a[1]&131072&&(ke.$$scope={dirty:a,ctx:t}),At.$set(ke),t[5]?I?(I.p(t,a),a[0]&32&&p(I,1)):(I=xe(t),I.c(),p(I,1),I.m(ht.parentNode,ht)):I&&(Vt(),g(I,1,1,()=>{I=null}),Ot());const we={};a[0]&32&&(we.data=t[5]),a[1]&131072&&(we.$$scope={dirty:a,ctx:t}),Lt.$set(we)},i(t){de||(p(A),p(X.$$.fragment,t),p(Y.$$.fragment,t),p(Q.$$.fragment,t),p(W.$$.fragment,t),p(Z.$$.fragment,t),p(P.$$.fragment,t),p(L),p(h.$$.fragment,t),p(N.$$.fragment,t),p(ot.$$.fragment,t),p(F),p(Rt.$$.fragment,t),p(S),p(Ht.$$.fragment,t),p(D),p(At.$$.fragment,t),p(I),p(Lt.$$.fragment,t),de=!0)},o(t){g(A),g(X.$$.fragment,t),g(Y.$$.fragment,t),g(Q.$$.fragment,t),g(W.$$.fragment,t),g(Z.$$.fragment,t),g(P.$$.fragment,t),g(L),g(h.$$.fragment,t),g(N.$$.fragment,t),g(ot.$$.fragment,t),g(F),g(Rt.$$.fragment,t),g(S),g(Ht.$$.fragment,t),g(D),g(At.$$.fragment,t),g(I),g(Lt.$$.fragment,t),de=!1},d(t){t&&(l(o),l(u),l(s),l(b),l(_),l($),l(M),l(z),l(V),l(gt),l(G),l(K),l(x),l(bt),l(J),l(lt),l(kt),l(tt),l(nt),l(_t),l(wt),l(j),l(et),l(B),l(yt),l(mt),l(at),l(qt),l(Tt),l(R),l(Jt),l(jt),l(Wt),l(ft),l(Zt),l(Ct),l(te),l(It),l(ee),l(zt),l(ae),l(ct),l(oe),l(Et),l(re),l(Qt),l(se),l(Gt),l(le),l(dt),l(ne),l(Mt),l(ie),l(Pt),l(me),l(Kt),l(ue),l(pt),l(_e),l(ht),l(fe),l(xt),l(ce),l(Ft)),$t&&$t.d(t),Xt.d(t),l(r),l(e),vt&&vt.d(t),l(n),A&&A.d(t),k(X,t),k(Y,t),k(Q,t),k(W,t),k(Z,t),k(P,t),L&&L.d(t),k(h,t),k(N,t),k(ot,t),F&&F.d(t),k(Rt,t),S&&S.d(t),k(Ht,t),D&&D.d(t),k(At,t),I&&I.d(t),k(Lt,t)}}}const E={title:"Análise das Compras Públicas do Estado de Santa Catarina"};function Ra(f,o,r){let e,n;Oe(f,ca,R=>r(32,e=R)),Oe(f,Ue,R=>r(38,n=R));let{data:u}=o,{data:s={},customFormattingSettings:m,__db:b,inputs:_}=u;We(Ue,n="6666cd76f96956469e7be39d750cc7d9",n);let H=na(_a(_));Ze(H.subscribe(R=>_=R)),ta(ua,{getCustomFormats:()=>m.customFormats||[]});const $=(R,Yt)=>fa(b.query,R,{query_name:Yt});ia($),e.params,ea(()=>!0);let M={initialData:void 0,initialError:void 0},z=rt`select
    count(*)                                            as total_contratos,
    count(distinct id_contratado)                       as total_fornecedores,
    count(distinct cod_unidade_gestora)                 as total_orgaos,
    sum(vl_original)                                    as vl_total_original,
    sum(vl_atual)                                       as vl_total_atual,
    sum(coalesce(vl_aditado, 0))                        as vl_total_aditado,
    count(case when fl_possui_aditivo then 1 end)       as contratos_com_aditivo
from compras.fct_contratos
where ano_assinatura between 2016 and 2025`,V=`select
    count(*)                                            as total_contratos,
    count(distinct id_contratado)                       as total_fornecedores,
    count(distinct cod_unidade_gestora)                 as total_orgaos,
    sum(vl_original)                                    as vl_total_original,
    sum(vl_atual)                                       as vl_total_atual,
    sum(coalesce(vl_aditado, 0))                        as vl_total_aditado,
    count(case when fl_possui_aditivo then 1 end)       as contratos_com_aditivo
from compras.fct_contratos
where ano_assinatura between 2016 and 2025`;s.kpis_data&&(s.kpis_data instanceof Error?M.initialError=s.kpis_data:M.initialData=s.kpis_data,s.kpis_columns&&(M.knownColumns=s.kpis_columns));let St,gt=!1;const G=Ut.createReactive({callback:R=>{r(0,St=R)},execFn:$},{id:"kpis",...M});G(V,{noResolve:z,...M}),globalThis[Symbol.for("kpis")]={get value(){return St}};let st={initialData:void 0,initialError:void 0},K=rt`select
    ano_assinatura::integer             as ano,
    count(*)                            as qt_contratos,
    sum(vl_original)                    as vl_total_original,
    sum(vl_atual)                       as vl_total_atual
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura
order by ano_assinatura`,x=`select
    ano_assinatura::integer             as ano,
    count(*)                            as qt_contratos,
    sum(vl_original)                    as vl_total_original,
    sum(vl_atual)                       as vl_total_atual
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura
order by ano_assinatura`;s.evolucao_anual_data&&(s.evolucao_anual_data instanceof Error?st.initialError=s.evolucao_anual_data:st.initialData=s.evolucao_anual_data,s.evolucao_anual_columns&&(st.knownColumns=s.evolucao_anual_columns));let X,bt=!1;const Y=Ut.createReactive({callback:R=>{r(1,X=R)},execFn:$},{id:"evolucao_anual",...st});Y(x,{noResolve:K,...st}),globalThis[Symbol.for("evolucao_anual")]={get value(){return X}};let J={initialData:void 0,initialError:void 0},Q=rt`select
    ds_situacao_aditivo     as situacao,
    count(*)                as qt_contratos,
    sum(vl_atual)           as vl_total
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by 1
order by 2 desc`,lt=`select
    ds_situacao_aditivo     as situacao,
    count(*)                as qt_contratos,
    sum(vl_atual)           as vl_total
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by 1
order by 2 desc`;s.situacao_aditivo_data&&(s.situacao_aditivo_data instanceof Error?J.initialError=s.situacao_aditivo_data:J.initialData=s.situacao_aditivo_data,s.situacao_aditivo_columns&&(J.knownColumns=s.situacao_aditivo_columns));let W,kt=!1;const Z=Ut.createReactive({callback:R=>{r(2,W=R)},execFn:$},{id:"situacao_aditivo",...J});Z(lt,{noResolve:Q,...J}),globalThis[Symbol.for("situacao_aditivo")]={get value(){return W}};let tt={initialData:void 0,initialError:void 0},P=rt`select
    nm_modalidade           as modalidade,
    qt_contratos,
    vl_total_atual          as vl_total
from compras.dim_modalidades
order by qt_contratos desc
limit 10`,nt=`select
    nm_modalidade           as modalidade,
    qt_contratos,
    vl_total_atual          as vl_total
from compras.dim_modalidades
order by qt_contratos desc
limit 10`;s.top_modalidades_data&&(s.top_modalidades_data instanceof Error?tt.initialError=s.top_modalidades_data:tt.initialData=s.top_modalidades_data,s.top_modalidades_columns&&(tt.knownColumns=s.top_modalidades_columns));let _t,wt=!1;const j=Ut.createReactive({callback:R=>{r(3,_t=R)},execFn:$},{id:"top_modalidades",...tt});j(nt,{noResolve:P,...tt}),globalThis[Symbol.for("top_modalidades")]={get value(){return _t}};let it={initialData:void 0,initialError:void 0},et=rt`select
    rank_por_valor          as ranking,
    nm_unidade_gestora      as orgao,
    qt_contratos,
    vl_total_atual          as vl_total
from compras.dim_orgaos
order by ranking
limit 10`,B=`select
    rank_por_valor          as ranking,
    nm_unidade_gestora      as orgao,
    qt_contratos,
    vl_total_atual          as vl_total
from compras.dim_orgaos
order by ranking
limit 10`;s.top_orgaos_data&&(s.top_orgaos_data instanceof Error?it.initialError=s.top_orgaos_data:it.initialData=s.top_orgaos_data,s.top_orgaos_columns&&(it.knownColumns=s.top_orgaos_columns));let Dt,yt=!1;const mt=Ut.createReactive({callback:R=>{r(4,Dt=R)},execFn:$},{id:"top_orgaos",...it});mt(B,{noResolve:et,...it}),globalThis[Symbol.for("top_orgaos")]={get value(){return Dt}};let h={initialData:void 0,initialError:void 0},at=rt`select
    rank_por_valor          as ranking,
    nm_contratado           as fornecedor,
    porte_fornecedor        as porte,
    qt_contratos,
    vl_total_atual          as vl_total
from compras.dim_fornecedores
order by ranking
limit 10`,N=`select
    rank_por_valor          as ranking,
    nm_contratado           as fornecedor,
    porte_fornecedor        as porte,
    qt_contratos,
    vl_total_atual          as vl_total
from compras.dim_fornecedores
order by ranking
limit 10`;s.top_fornecedores_data&&(s.top_fornecedores_data instanceof Error?h.initialError=s.top_fornecedores_data:h.initialData=s.top_fornecedores_data,s.top_fornecedores_columns&&(h.knownColumns=s.top_fornecedores_columns));let qt,ot=!1;const Tt=Ut.createReactive({callback:R=>{r(5,qt=R)},execFn:$},{id:"top_fornecedores",...h});return Tt(N,{noResolve:at,...h}),globalThis[Symbol.for("top_fornecedores")]={get value(){return qt}},f.$$set=R=>{"data"in R&&r(6,u=R.data)},f.$$.update=()=>{f.$$.dirty[0]&64&&r(7,{data:s={},customFormattingSettings:m,__db:b}=u,s),f.$$.dirty[0]&128&&ma.set(Object.keys(s).length>0),f.$$.dirty[1]&2&&e.params,f.$$.dirty[0]&3840&&(z||!gt?z||(G(V,{noResolve:z,...M}),r(11,gt=!0)):G(V,{noResolve:z})),f.$$.dirty[0]&61440&&(K||!bt?K||(Y(x,{noResolve:K,...st}),r(15,bt=!0)):Y(x,{noResolve:K})),f.$$.dirty[0]&983040&&(Q||!kt?Q||(Z(lt,{noResolve:Q,...J}),r(19,kt=!0)):Z(lt,{noResolve:Q})),f.$$.dirty[0]&15728640&&(P||!wt?P||(j(nt,{noResolve:P,...tt}),r(23,wt=!0)):j(nt,{noResolve:P})),f.$$.dirty[0]&251658240&&(et||!yt?et||(mt(B,{noResolve:et,...it}),r(27,yt=!0)):mt(B,{noResolve:et})),f.$$.dirty[0]&1879048192|f.$$.dirty[1]&1&&(at||!ot?at||(Tt(N,{noResolve:at,...h}),r(31,ot=!0)):Tt(N,{noResolve:at}))},r(9,z=rt`select
    count(*)                                            as total_contratos,
    count(distinct id_contratado)                       as total_fornecedores,
    count(distinct cod_unidade_gestora)                 as total_orgaos,
    sum(vl_original)                                    as vl_total_original,
    sum(vl_atual)                                       as vl_total_atual,
    sum(coalesce(vl_aditado, 0))                        as vl_total_aditado,
    count(case when fl_possui_aditivo then 1 end)       as contratos_com_aditivo
from compras.fct_contratos
where ano_assinatura between 2016 and 2025`),r(10,V=`select
    count(*)                                            as total_contratos,
    count(distinct id_contratado)                       as total_fornecedores,
    count(distinct cod_unidade_gestora)                 as total_orgaos,
    sum(vl_original)                                    as vl_total_original,
    sum(vl_atual)                                       as vl_total_atual,
    sum(coalesce(vl_aditado, 0))                        as vl_total_aditado,
    count(case when fl_possui_aditivo then 1 end)       as contratos_com_aditivo
from compras.fct_contratos
where ano_assinatura between 2016 and 2025`),r(13,K=rt`select
    ano_assinatura::integer             as ano,
    count(*)                            as qt_contratos,
    sum(vl_original)                    as vl_total_original,
    sum(vl_atual)                       as vl_total_atual
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura
order by ano_assinatura`),r(14,x=`select
    ano_assinatura::integer             as ano,
    count(*)                            as qt_contratos,
    sum(vl_original)                    as vl_total_original,
    sum(vl_atual)                       as vl_total_atual
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by ano_assinatura
order by ano_assinatura`),r(17,Q=rt`select
    ds_situacao_aditivo     as situacao,
    count(*)                as qt_contratos,
    sum(vl_atual)           as vl_total
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by 1
order by 2 desc`),r(18,lt=`select
    ds_situacao_aditivo     as situacao,
    count(*)                as qt_contratos,
    sum(vl_atual)           as vl_total
from compras.fct_contratos
where ano_assinatura between 2016 and 2025
group by 1
order by 2 desc`),r(21,P=rt`select
    nm_modalidade           as modalidade,
    qt_contratos,
    vl_total_atual          as vl_total
from compras.dim_modalidades
order by qt_contratos desc
limit 10`),r(22,nt=`select
    nm_modalidade           as modalidade,
    qt_contratos,
    vl_total_atual          as vl_total
from compras.dim_modalidades
order by qt_contratos desc
limit 10`),r(25,et=rt`select
    rank_por_valor          as ranking,
    nm_unidade_gestora      as orgao,
    qt_contratos,
    vl_total_atual          as vl_total
from compras.dim_orgaos
order by ranking
limit 10`),r(26,B=`select
    rank_por_valor          as ranking,
    nm_unidade_gestora      as orgao,
    qt_contratos,
    vl_total_atual          as vl_total
from compras.dim_orgaos
order by ranking
limit 10`),r(29,at=rt`select
    rank_por_valor          as ranking,
    nm_contratado           as fornecedor,
    porte_fornecedor        as porte,
    qt_contratos,
    vl_total_atual          as vl_total
from compras.dim_fornecedores
order by ranking
limit 10`),r(30,N=`select
    rank_por_valor          as ranking,
    nm_contratado           as fornecedor,
    porte_fornecedor        as porte,
    qt_contratos,
    vl_total_atual          as vl_total
from compras.dim_fornecedores
order by ranking
limit 10`),[St,X,W,_t,Dt,qt,u,s,M,z,V,gt,st,K,x,bt,J,Q,lt,kt,tt,P,nt,wt,it,et,B,yt,h,at,N,ot,e]}class ha extends sa{constructor(o){super(),la(this,o,Ra,Ca,Ye,{data:6},null,[-1,-1])}}export{ha as component};
