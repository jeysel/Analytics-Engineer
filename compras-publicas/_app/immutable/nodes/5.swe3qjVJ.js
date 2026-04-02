import{s as Zt,d as f,i as m,a as Mt,b as $,c as d,h as ht,e as H,f as xt,g as ct,j as p,k as E,l as zt,m as te,o as ee,n as ae,p as ie,q as rt,r as oe,t as re,u as le}from"../chunks/scheduler.q7auac3b.js";import{S as se,i as ne,d as w,t as g,a as v,c as Rt,m as y,b as q,e as T,g as At}from"../chunks/index.B_vRVscZ.js";import{D as St,e as _e,s as fe,Q as Ht,p as me,C as U,a as Gt,r as Pt,b as ue}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BKv83QBO.js";import{w as ce}from"../chunks/entry.CSzNGMhQ.js";import{h as ut,p as de}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as pe}from"../chunks/stores.BmhktN-N.js";import{B as ve,Q as Ft}from"../chunks/BarChart.ebJMbKUA.js";import{B as Et}from"../chunks/BigValue.BAO51fFJ.js";function $e(c){let a,o=k.title+"",e;return{c(){a=E("h1"),e=le(o),this.h()},l(s){a=H(s,"H1",{class:!0});var n=oe(a);e=re(n,o),n.forEach(f),this.h()},h(){$(a,"class","title")},m(s,n){m(s,a,n),Mt(a,e)},p:rt,d(s){s&&f(a)}}}function ge(c){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:rt,p:rt,d:rt}}function be(c){let a,o,e,s,n;return document.title=a=k.title,{c(){o=p(),e=E("meta"),s=p(),n=E("meta"),this.h()},l(i){o=d(i),e=H(i,"META",{property:!0,content:!0}),s=d(i),n=H(i,"META",{name:!0,content:!0}),this.h()},h(){var i,r;$(e,"property","og:title"),$(e,"content",((i=k.og)==null?void 0:i.title)??k.title),$(n,"name","twitter:title"),$(n,"content",((r=k.og)==null?void 0:r.title)??k.title)},m(i,r){m(i,o,r),m(i,e,r),m(i,s,r),m(i,n,r)},p(i,r){r&0&&a!==(a=k.title)&&(document.title=a)},d(i){i&&(f(o),f(e),f(s),f(n))}}}function ke(c){var n,i;let a,o,e=(k.description||((n=k.og)==null?void 0:n.description))&&we(),s=((i=k.og)==null?void 0:i.image)&&ye();return{c(){e&&e.c(),a=p(),s&&s.c(),o=xt()},l(r){e&&e.l(r),a=d(r),s&&s.l(r),o=xt()},m(r,b){e&&e.m(r,b),m(r,a,b),s&&s.m(r,b),m(r,o,b)},p(r,b){var u,M;(k.description||(u=k.og)!=null&&u.description)&&e.p(r,b),(M=k.og)!=null&&M.image&&s.p(r,b)},d(r){r&&(f(a),f(o)),e&&e.d(r),s&&s.d(r)}}}function we(c){let a,o,e,s,n;return{c(){a=E("meta"),o=p(),e=E("meta"),s=p(),n=E("meta"),this.h()},l(i){a=H(i,"META",{name:!0,content:!0}),o=d(i),e=H(i,"META",{property:!0,content:!0}),s=d(i),n=H(i,"META",{name:!0,content:!0}),this.h()},h(){var i,r,b;$(a,"name","description"),$(a,"content",k.description??((i=k.og)==null?void 0:i.description)),$(e,"property","og:description"),$(e,"content",((r=k.og)==null?void 0:r.description)??k.description),$(n,"name","twitter:description"),$(n,"content",((b=k.og)==null?void 0:b.description)??k.description)},m(i,r){m(i,a,r),m(i,o,r),m(i,e,r),m(i,s,r),m(i,n,r)},p:rt,d(i){i&&(f(a),f(o),f(e),f(s),f(n))}}}function ye(c){let a,o,e;return{c(){a=E("meta"),o=p(),e=E("meta"),this.h()},l(s){a=H(s,"META",{property:!0,content:!0}),o=d(s),e=H(s,"META",{name:!0,content:!0}),this.h()},h(){var s,n;$(a,"property","og:image"),$(a,"content",Gt((s=k.og)==null?void 0:s.image)),$(e,"name","twitter:image"),$(e,"content",Gt((n=k.og)==null?void 0:n.image))},m(s,n){m(s,a,n),m(s,o,n),m(s,e,n)},p:rt,d(s){s&&(f(a),f(o),f(e))}}}function Kt(c){let a,o;return a=new Ft({props:{queryID:"kpis_aditivos",queryResult:c[0]}}),{c(){T(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,s){y(a,e,s),o=!0},p(e,s){const n={};s[0]&1&&(n.queryResult=e[0]),a.$set(n)},i(e){o||(v(a.$$.fragment,e),o=!0)},o(e){g(a.$$.fragment,e),o=!1},d(e){w(a,e)}}}function Xt(c){let a,o;return a=new Ft({props:{queryID:"tipo_aditivo",queryResult:c[1]}}),{c(){T(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,s){y(a,e,s),o=!0},p(e,s){const n={};s[0]&2&&(n.queryResult=e[1]),a.$set(n)},i(e){o||(v(a.$$.fragment,e),o=!0)},o(e){g(a.$$.fragment,e),o=!1},d(e){w(a,e)}}}function qe(c){let a,o,e,s,n,i;return a=new U({props:{id:"tipo",title:"Tipo"}}),e=new U({props:{id:"qt_contratos",title:"Contratos",fmt:"num0"}}),n=new U({props:{id:"vl_total_aditado",title:"Valor Aditado",fmt:"num1b"}}),{c(){T(a.$$.fragment),o=p(),T(e.$$.fragment),s=p(),T(n.$$.fragment)},l(r){q(a.$$.fragment,r),o=d(r),q(e.$$.fragment,r),s=d(r),q(n.$$.fragment,r)},m(r,b){y(a,r,b),m(r,o,b),y(e,r,b),m(r,s,b),y(n,r,b),i=!0},p:rt,i(r){i||(v(a.$$.fragment,r),v(e.$$.fragment,r),v(n.$$.fragment,r),i=!0)},o(r){g(a.$$.fragment,r),g(e.$$.fragment,r),g(n.$$.fragment,r),i=!1},d(r){r&&(f(o),f(s)),w(a,r),w(e,r),w(n,r)}}}function Yt(c){let a,o;return a=new Ft({props:{queryID:"faixa_variacao",queryResult:c[2]}}),{c(){T(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,s){y(a,e,s),o=!0},p(e,s){const n={};s[0]&4&&(n.queryResult=e[2]),a.$set(n)},i(e){o||(v(a.$$.fragment,e),o=!0)},o(e){g(a.$$.fragment,e),o=!1},d(e){w(a,e)}}}function Te(c){let a,o,e,s,n,i,r,b;return a=new U({props:{id:"faixa",title:"Faixa"}}),e=new U({props:{id:"qt_contratos",title:"Contratos",fmt:"num0"}}),n=new U({props:{id:"vl_total_aditado",title:"Valor Aditado",fmt:"num1b"}}),r=new U({props:{id:"perc_medio",title:"% Médio de Alteração",fmt:"num2"}}),{c(){T(a.$$.fragment),o=p(),T(e.$$.fragment),s=p(),T(n.$$.fragment),i=p(),T(r.$$.fragment)},l(u){q(a.$$.fragment,u),o=d(u),q(e.$$.fragment,u),s=d(u),q(n.$$.fragment,u),i=d(u),q(r.$$.fragment,u)},m(u,M){y(a,u,M),m(u,o,M),y(e,u,M),m(u,s,M),y(n,u,M),m(u,i,M),y(r,u,M),b=!0},p:rt,i(u){b||(v(a.$$.fragment,u),v(e.$$.fragment,u),v(n.$$.fragment,u),v(r.$$.fragment,u),b=!0)},o(u){g(a.$$.fragment,u),g(e.$$.fragment,u),g(n.$$.fragment,u),g(r.$$.fragment,u),b=!1},d(u){u&&(f(o),f(s),f(i)),w(a,u),w(e,u),w(n,u),w(r,u)}}}function Jt(c){let a,o;return a=new Ft({props:{queryID:"top_aditivos",queryResult:c[3]}}),{c(){T(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,s){y(a,e,s),o=!0},p(e,s){const n={};s[0]&8&&(n.queryResult=e[3]),a.$set(n)},i(e){o||(v(a.$$.fragment,e),o=!0)},o(e){g(a.$$.fragment,e),o=!1},d(e){w(a,e)}}}function Ce(c){let a,o,e,s,n,i,r,b,u,M,I,A,S,Q,L,B;return a=new U({props:{id:"nu_contrato",title:"Contrato"}}),e=new U({props:{id:"fornecedor",title:"Fornecedor"}}),n=new U({props:{id:"orgao",title:"Órgão"}}),r=new U({props:{id:"vl_original",title:"Valor Original",fmt:"num1b"}}),u=new U({props:{id:"vl_aditado",title:"Valor Aditado",fmt:"num1b"}}),I=new U({props:{id:"vl_atual",title:"Valor Atual",fmt:"num1b"}}),S=new U({props:{id:"perc_alteracao",title:"% Alteração",fmt:"num2"}}),L=new U({props:{id:"tipo",title:"Tipo"}}),{c(){T(a.$$.fragment),o=p(),T(e.$$.fragment),s=p(),T(n.$$.fragment),i=p(),T(r.$$.fragment),b=p(),T(u.$$.fragment),M=p(),T(I.$$.fragment),A=p(),T(S.$$.fragment),Q=p(),T(L.$$.fragment)},l(_){q(a.$$.fragment,_),o=d(_),q(e.$$.fragment,_),s=d(_),q(n.$$.fragment,_),i=d(_),q(r.$$.fragment,_),b=d(_),q(u.$$.fragment,_),M=d(_),q(I.$$.fragment,_),A=d(_),q(S.$$.fragment,_),Q=d(_),q(L.$$.fragment,_)},m(_,C){y(a,_,C),m(_,o,C),y(e,_,C),m(_,s,C),y(n,_,C),m(_,i,C),y(r,_,C),m(_,b,C),y(u,_,C),m(_,M,C),y(I,_,C),m(_,A,C),y(S,_,C),m(_,Q,C),y(L,_,C),B=!0},p:rt,i(_){B||(v(a.$$.fragment,_),v(e.$$.fragment,_),v(n.$$.fragment,_),v(r.$$.fragment,_),v(u.$$.fragment,_),v(I.$$.fragment,_),v(S.$$.fragment,_),v(L.$$.fragment,_),B=!0)},o(_){g(a.$$.fragment,_),g(e.$$.fragment,_),g(n.$$.fragment,_),g(r.$$.fragment,_),g(u.$$.fragment,_),g(I.$$.fragment,_),g(S.$$.fragment,_),g(L.$$.fragment,_),B=!1},d(_){_&&(f(o),f(s),f(i),f(b),f(M),f(A),f(Q)),w(a,_),w(e,_),w(n,_),w(r,_),w(u,_),w(I,_),w(S,_),w(L,_)}}}function Re(c){let a,o,e,s,n,i,r='<a href="#aditivos-contratuais">Aditivos Contratuais</a>',b,u,M="Análise dos contratos que sofreram alterações de valor ou prazo.",I,A,S='<p class="markdown"><strong class="markdown">Regra de negócio:</strong> Valor econômico real = Valor Original + Valor Aditado = Valor Atual</p>',Q,L,B,_,C='<a href="#visão-geral">Visão Geral</a>',j,z,G,lt,P,K,N,W,X,st,tt,Y,O,nt='<a href="#tipo-de-aditivo">Tipo de Aditivo</a>',_t,Z,J,R,h,bt,vt,kt,et,Lt='<a href="#faixa-de-variação">Faixa de Variação</a>',wt,dt,ft,yt,$t,qt,at,Ot='<a href="#top-20-maiores-aditivos">Top 20 Maiores Aditivos</a>',Tt,pt,mt,Ct,it=typeof k<"u"&&k.title&&k.hide_title!==!0&&$e();function Wt(t,l){return typeof k<"u"&&k.title?be:ge}let gt=Wt()(c),ot=typeof k=="object"&&ke(),x=c[0]&&Kt(c);G=new Et({props:{data:c[0],value:"total_com_aditivo",title:"Contratos com Aditivo",fmt:"num0"}}),P=new Et({props:{data:c[0],value:"vl_total_original",title:"Valor Original Total",fmt:"num1b"}}),N=new Et({props:{data:c[0],value:"vl_total_aditado",title:"Valor Total Aditado",fmt:"num1b"}}),X=new Et({props:{data:c[0],value:"vl_total_atual",title:"Valor Atual Total",fmt:"num1b"}});let F=c[1]&&Xt(c);J=new ve({props:{data:c[1],x:"tipo",y:"qt_contratos",title:"Contratos por Tipo de Aditivo"}}),h=new St({props:{data:c[1],title:"Tipo de Aditivo",$$slots:{default:[qe]},$$scope:{ctx:c}}});let V=c[2]&&Yt(c);ft=new St({props:{data:c[2],title:"Faixa de Variação de Valor",$$slots:{default:[Te]},$$scope:{ctx:c}}});let D=c[3]&&Jt(c);return mt=new St({props:{data:c[3],title:"Top 20 Maiores Aditivos por Valor",$$slots:{default:[Ce]},$$scope:{ctx:c}}}),{c(){it&&it.c(),a=p(),gt.c(),o=E("meta"),e=E("meta"),ot&&ot.c(),s=xt(),n=p(),i=E("h1"),i.innerHTML=r,b=p(),u=E("p"),u.textContent=M,I=p(),A=E("blockquote"),A.innerHTML=S,Q=p(),L=E("hr"),B=p(),_=E("h2"),_.innerHTML=C,j=p(),x&&x.c(),z=p(),T(G.$$.fragment),lt=p(),T(P.$$.fragment),K=p(),T(N.$$.fragment),W=p(),T(X.$$.fragment),st=p(),tt=E("hr"),Y=p(),O=E("h2"),O.innerHTML=nt,_t=p(),F&&F.c(),Z=p(),T(J.$$.fragment),R=p(),T(h.$$.fragment),bt=p(),vt=E("hr"),kt=p(),et=E("h2"),et.innerHTML=Lt,wt=p(),V&&V.c(),dt=p(),T(ft.$$.fragment),yt=p(),$t=E("hr"),qt=p(),at=E("h2"),at.innerHTML=Ot,Tt=p(),D&&D.c(),pt=p(),T(mt.$$.fragment),this.h()},l(t){it&&it.l(t),a=d(t);const l=ht("svelte-2igo1p",document.head);gt.l(l),o=H(l,"META",{name:!0,content:!0}),e=H(l,"META",{name:!0,content:!0}),ot&&ot.l(l),s=xt(),l.forEach(f),n=d(t),i=H(t,"H1",{class:!0,id:!0,"data-svelte-h":!0}),ct(i)!=="svelte-13omz48"&&(i.innerHTML=r),b=d(t),u=H(t,"P",{class:!0,"data-svelte-h":!0}),ct(u)!=="svelte-1x188qu"&&(u.textContent=M),I=d(t),A=H(t,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),ct(A)!=="svelte-1lqow5c"&&(A.innerHTML=S),Q=d(t),L=H(t,"HR",{class:!0}),B=d(t),_=H(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ct(_)!=="svelte-1nrswfb"&&(_.innerHTML=C),j=d(t),x&&x.l(t),z=d(t),q(G.$$.fragment,t),lt=d(t),q(P.$$.fragment,t),K=d(t),q(N.$$.fragment,t),W=d(t),q(X.$$.fragment,t),st=d(t),tt=H(t,"HR",{class:!0}),Y=d(t),O=H(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ct(O)!=="svelte-1gzgg0z"&&(O.innerHTML=nt),_t=d(t),F&&F.l(t),Z=d(t),q(J.$$.fragment,t),R=d(t),q(h.$$.fragment,t),bt=d(t),vt=H(t,"HR",{class:!0}),kt=d(t),et=H(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ct(et)!=="svelte-scmnpw"&&(et.innerHTML=Lt),wt=d(t),V&&V.l(t),dt=d(t),q(ft.$$.fragment,t),yt=d(t),$t=H(t,"HR",{class:!0}),qt=d(t),at=H(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ct(at)!=="svelte-10nye2e"&&(at.innerHTML=Ot),Tt=d(t),D&&D.l(t),pt=d(t),q(mt.$$.fragment,t),this.h()},h(){$(o,"name","twitter:card"),$(o,"content","summary_large_image"),$(e,"name","twitter:site"),$(e,"content","@evidence_dev"),$(i,"class","markdown"),$(i,"id","aditivos-contratuais"),$(u,"class","markdown"),$(A,"class","markdown"),$(L,"class","markdown"),$(_,"class","markdown"),$(_,"id","visão-geral"),$(tt,"class","markdown"),$(O,"class","markdown"),$(O,"id","tipo-de-aditivo"),$(vt,"class","markdown"),$(et,"class","markdown"),$(et,"id","faixa-de-variação"),$($t,"class","markdown"),$(at,"class","markdown"),$(at,"id","top-20-maiores-aditivos")},m(t,l){it&&it.m(t,l),m(t,a,l),gt.m(document.head,null),Mt(document.head,o),Mt(document.head,e),ot&&ot.m(document.head,null),Mt(document.head,s),m(t,n,l),m(t,i,l),m(t,b,l),m(t,u,l),m(t,I,l),m(t,A,l),m(t,Q,l),m(t,L,l),m(t,B,l),m(t,_,l),m(t,j,l),x&&x.m(t,l),m(t,z,l),y(G,t,l),m(t,lt,l),y(P,t,l),m(t,K,l),y(N,t,l),m(t,W,l),y(X,t,l),m(t,st,l),m(t,tt,l),m(t,Y,l),m(t,O,l),m(t,_t,l),F&&F.m(t,l),m(t,Z,l),y(J,t,l),m(t,R,l),y(h,t,l),m(t,bt,l),m(t,vt,l),m(t,kt,l),m(t,et,l),m(t,wt,l),V&&V.m(t,l),m(t,dt,l),y(ft,t,l),m(t,yt,l),m(t,$t,l),m(t,qt,l),m(t,at,l),m(t,Tt,l),D&&D.m(t,l),m(t,pt,l),y(mt,t,l),Ct=!0},p(t,l){typeof k<"u"&&k.title&&k.hide_title!==!0&&it.p(t,l),gt.p(t,l),typeof k=="object"&&ot.p(t,l),t[0]?x?(x.p(t,l),l[0]&1&&v(x,1)):(x=Kt(t),x.c(),v(x,1),x.m(z.parentNode,z)):x&&(At(),g(x,1,1,()=>{x=null}),Rt());const Nt={};l[0]&1&&(Nt.data=t[0]),G.$set(Nt);const Qt={};l[0]&1&&(Qt.data=t[0]),P.$set(Qt);const Ut={};l[0]&1&&(Ut.data=t[0]),N.$set(Ut);const Bt={};l[0]&1&&(Bt.data=t[0]),X.$set(Bt),t[1]?F?(F.p(t,l),l[0]&2&&v(F,1)):(F=Xt(t),F.c(),v(F,1),F.m(Z.parentNode,Z)):F&&(At(),g(F,1,1,()=>{F=null}),Rt());const jt={};l[0]&2&&(jt.data=t[1]),J.$set(jt);const Vt={};l[0]&2&&(Vt.data=t[1]),l[1]&32&&(Vt.$$scope={dirty:l,ctx:t}),h.$set(Vt),t[2]?V?(V.p(t,l),l[0]&4&&v(V,1)):(V=Yt(t),V.c(),v(V,1),V.m(dt.parentNode,dt)):V&&(At(),g(V,1,1,()=>{V=null}),Rt());const Dt={};l[0]&4&&(Dt.data=t[2]),l[1]&32&&(Dt.$$scope={dirty:l,ctx:t}),ft.$set(Dt),t[3]?D?(D.p(t,l),l[0]&8&&v(D,1)):(D=Jt(t),D.c(),v(D,1),D.m(pt.parentNode,pt)):D&&(At(),g(D,1,1,()=>{D=null}),Rt());const It={};l[0]&8&&(It.data=t[3]),l[1]&32&&(It.$$scope={dirty:l,ctx:t}),mt.$set(It)},i(t){Ct||(v(x),v(G.$$.fragment,t),v(P.$$.fragment,t),v(N.$$.fragment,t),v(X.$$.fragment,t),v(F),v(J.$$.fragment,t),v(h.$$.fragment,t),v(V),v(ft.$$.fragment,t),v(D),v(mt.$$.fragment,t),Ct=!0)},o(t){g(x),g(G.$$.fragment,t),g(P.$$.fragment,t),g(N.$$.fragment,t),g(X.$$.fragment,t),g(F),g(J.$$.fragment,t),g(h.$$.fragment,t),g(V),g(ft.$$.fragment,t),g(D),g(mt.$$.fragment,t),Ct=!1},d(t){t&&(f(a),f(n),f(i),f(b),f(u),f(I),f(A),f(Q),f(L),f(B),f(_),f(j),f(z),f(lt),f(K),f(W),f(st),f(tt),f(Y),f(O),f(_t),f(Z),f(R),f(bt),f(vt),f(kt),f(et),f(wt),f(dt),f(yt),f($t),f(qt),f(at),f(Tt),f(pt)),it&&it.d(t),gt.d(t),f(o),f(e),ot&&ot.d(t),f(s),x&&x.d(t),w(G,t),w(P,t),w(N,t),w(X,t),F&&F.d(t),w(J,t),w(h,t),V&&V.d(t),w(ft,t),D&&D.d(t),w(mt,t)}}}const k={title:"Aditivos Contratuais"};function Ae(c,a,o){let e,s;zt(c,pe,R=>o(22,e=R)),zt(c,Pt,R=>o(28,s=R));let{data:n}=a,{data:i={},customFormattingSettings:r,__db:b,inputs:u}=n;te(Pt,s="2f6aaff37df9094795cfb25e62785a31",s);let M=_e(ce(u));ee(M.subscribe(R=>u=R)),ae(ue,{getCustomFormats:()=>r.customFormats||[]});const I=(R,h)=>de(b.query,R,{query_name:h});fe(I),e.params,ie(()=>!0);let A={initialData:void 0,initialError:void 0},S=ut`select
    count(*)                    as total_com_aditivo,
    sum(vl_original)            as vl_total_original,
    sum(vl_aditado)             as vl_total_aditado,
    sum(vl_atual)               as vl_total_atual
from compras.fct_aditivos`,Q=`select
    count(*)                    as total_com_aditivo,
    sum(vl_original)            as vl_total_original,
    sum(vl_aditado)             as vl_total_aditado,
    sum(vl_atual)               as vl_total_atual
from compras.fct_aditivos`;i.kpis_aditivos_data&&(i.kpis_aditivos_data instanceof Error?A.initialError=i.kpis_aditivos_data:A.initialData=i.kpis_aditivos_data,i.kpis_aditivos_columns&&(A.knownColumns=i.kpis_aditivos_columns));let L,B=!1;const _=Ht.createReactive({callback:R=>{o(0,L=R)},execFn:I},{id:"kpis_aditivos",...A});_(Q,{noResolve:S,...A}),globalThis[Symbol.for("kpis_aditivos")]={get value(){return L}};let C={initialData:void 0,initialError:void 0},j=ut`select
    tp_aditivo              as tipo,
    count(*)                as qt_contratos,
    sum(vl_aditado)         as vl_total_aditado
from compras.fct_aditivos
group by 1
order by qt_contratos desc`,z=`select
    tp_aditivo              as tipo,
    count(*)                as qt_contratos,
    sum(vl_aditado)         as vl_total_aditado
from compras.fct_aditivos
group by 1
order by qt_contratos desc`;i.tipo_aditivo_data&&(i.tipo_aditivo_data instanceof Error?C.initialError=i.tipo_aditivo_data:C.initialData=i.tipo_aditivo_data,i.tipo_aditivo_columns&&(C.knownColumns=i.tipo_aditivo_columns));let G,lt=!1;const P=Ht.createReactive({callback:R=>{o(1,G=R)},execFn:I},{id:"tipo_aditivo",...C});P(z,{noResolve:j,...C}),globalThis[Symbol.for("tipo_aditivo")]={get value(){return G}};let K={initialData:void 0,initialError:void 0},N=ut`select
    faixa_variacao                                  as faixa,
    count(*)                                        as qt_contratos,
    sum(vl_aditado)                                 as vl_total_aditado,
    round(avg(perc_alteracao_valor)::numeric, 2)    as perc_medio
from compras.fct_aditivos
group by 1
order by qt_contratos desc`,W=`select
    faixa_variacao                                  as faixa,
    count(*)                                        as qt_contratos,
    sum(vl_aditado)                                 as vl_total_aditado,
    round(avg(perc_alteracao_valor)::numeric, 2)    as perc_medio
from compras.fct_aditivos
group by 1
order by qt_contratos desc`;i.faixa_variacao_data&&(i.faixa_variacao_data instanceof Error?K.initialError=i.faixa_variacao_data:K.initialData=i.faixa_variacao_data,i.faixa_variacao_columns&&(K.knownColumns=i.faixa_variacao_columns));let X,st=!1;const tt=Ht.createReactive({callback:R=>{o(2,X=R)},execFn:I},{id:"faixa_variacao",...K});tt(W,{noResolve:N,...K}),globalThis[Symbol.for("faixa_variacao")]={get value(){return X}};let Y={initialData:void 0,initialError:void 0},O=ut`select
    nu_contrato,
    nm_contratado                                   as fornecedor,
    nm_unidade_gestora                              as orgao,
    vl_original,
    vl_aditado,
    vl_atual,
    round(perc_alteracao_valor::numeric, 2)         as perc_alteracao,
    tp_aditivo                                      as tipo
from compras.fct_aditivos
order by vl_aditado desc
limit 20`,nt=`select
    nu_contrato,
    nm_contratado                                   as fornecedor,
    nm_unidade_gestora                              as orgao,
    vl_original,
    vl_aditado,
    vl_atual,
    round(perc_alteracao_valor::numeric, 2)         as perc_alteracao,
    tp_aditivo                                      as tipo
from compras.fct_aditivos
order by vl_aditado desc
limit 20`;i.top_aditivos_data&&(i.top_aditivos_data instanceof Error?Y.initialError=i.top_aditivos_data:Y.initialData=i.top_aditivos_data,i.top_aditivos_columns&&(Y.knownColumns=i.top_aditivos_columns));let _t,Z=!1;const J=Ht.createReactive({callback:R=>{o(3,_t=R)},execFn:I},{id:"top_aditivos",...Y});return J(nt,{noResolve:O,...Y}),globalThis[Symbol.for("top_aditivos")]={get value(){return _t}},c.$$set=R=>{"data"in R&&o(4,n=R.data)},c.$$.update=()=>{c.$$.dirty[0]&16&&o(5,{data:i={},customFormattingSettings:r,__db:b}=n,i),c.$$.dirty[0]&32&&me.set(Object.keys(i).length>0),c.$$.dirty[0]&4194304&&e.params,c.$$.dirty[0]&960&&(S||!B?S||(_(Q,{noResolve:S,...A}),o(9,B=!0)):_(Q,{noResolve:S})),c.$$.dirty[0]&15360&&(j||!lt?j||(P(z,{noResolve:j,...C}),o(13,lt=!0)):P(z,{noResolve:j})),c.$$.dirty[0]&245760&&(N||!st?N||(tt(W,{noResolve:N,...K}),o(17,st=!0)):tt(W,{noResolve:N})),c.$$.dirty[0]&3932160&&(O||!Z?O||(J(nt,{noResolve:O,...Y}),o(21,Z=!0)):J(nt,{noResolve:O}))},o(7,S=ut`select
    count(*)                    as total_com_aditivo,
    sum(vl_original)            as vl_total_original,
    sum(vl_aditado)             as vl_total_aditado,
    sum(vl_atual)               as vl_total_atual
from compras.fct_aditivos`),o(8,Q=`select
    count(*)                    as total_com_aditivo,
    sum(vl_original)            as vl_total_original,
    sum(vl_aditado)             as vl_total_aditado,
    sum(vl_atual)               as vl_total_atual
from compras.fct_aditivos`),o(11,j=ut`select
    tp_aditivo              as tipo,
    count(*)                as qt_contratos,
    sum(vl_aditado)         as vl_total_aditado
from compras.fct_aditivos
group by 1
order by qt_contratos desc`),o(12,z=`select
    tp_aditivo              as tipo,
    count(*)                as qt_contratos,
    sum(vl_aditado)         as vl_total_aditado
from compras.fct_aditivos
group by 1
order by qt_contratos desc`),o(15,N=ut`select
    faixa_variacao                                  as faixa,
    count(*)                                        as qt_contratos,
    sum(vl_aditado)                                 as vl_total_aditado,
    round(avg(perc_alteracao_valor)::numeric, 2)    as perc_medio
from compras.fct_aditivos
group by 1
order by qt_contratos desc`),o(16,W=`select
    faixa_variacao                                  as faixa,
    count(*)                                        as qt_contratos,
    sum(vl_aditado)                                 as vl_total_aditado,
    round(avg(perc_alteracao_valor)::numeric, 2)    as perc_medio
from compras.fct_aditivos
group by 1
order by qt_contratos desc`),o(19,O=ut`select
    nu_contrato,
    nm_contratado                                   as fornecedor,
    nm_unidade_gestora                              as orgao,
    vl_original,
    vl_aditado,
    vl_atual,
    round(perc_alteracao_valor::numeric, 2)         as perc_alteracao,
    tp_aditivo                                      as tipo
from compras.fct_aditivos
order by vl_aditado desc
limit 20`),o(20,nt=`select
    nu_contrato,
    nm_contratado                                   as fornecedor,
    nm_unidade_gestora                              as orgao,
    vl_original,
    vl_aditado,
    vl_atual,
    round(perc_alteracao_valor::numeric, 2)         as perc_alteracao,
    tp_aditivo                                      as tipo
from compras.fct_aditivos
order by vl_aditado desc
limit 20`),[L,G,X,_t,n,i,A,S,Q,B,C,j,z,lt,K,N,W,st,Y,O,nt,Z,e]}class Le extends se{constructor(a){super(),ne(this,a,Ae,Re,Zt,{data:4},null,[-1,-1])}}export{Le as component};
