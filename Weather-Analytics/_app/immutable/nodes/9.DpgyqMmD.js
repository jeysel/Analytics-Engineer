import{s as We,d as o,i as _,b as Me,c as y,e as p,h as Ge,f as T,g as Ee,j as oe,m as $,n as H,o as Ie,p as Ke,q as Xe,r as Ye,u as ze,v as _e,k as Je,l as Ze,t as et}from"../chunks/scheduler.BCLmrrz2.js";import{S as tt,i as at,d as M,t as v,a as g,c as ke,m as E,b as C,e as R,g as Te}from"../chunks/index.a3bxNApc.js";import{D as Se,e as it,s as rt,Q as He,p as st,C as Q,a as Pe,r as je,b as lt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.Dxa6Sle5.js";import{w as mt}from"../chunks/entry.sRiRMVYf.js";import{h as ce,p as nt}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{D as ot}from"../chunks/Dropdown.BFuAo17T.js";import{p as ct}from"../chunks/stores.duVsGIv3.js";import{B as Ne,Q as Ce}from"../chunks/BarChart.CfQ2wOmd.js";function _t(u){let a,i=b.title+"",t;return{c(){a=H("h1"),t=et(i),this.h()},l(s){a=T(s,"H1",{class:!0});var n=Je(a);t=Ze(n,i),n.forEach(o),this.h()},h(){y(a,"class","title")},m(s,n){_(s,a,n),Me(a,t)},p:_e,d(s){s&&o(a)}}}function dt(u){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:_e,p:_e,d:_e}}function ut(u){let a,i,t,s,n;return document.title=a=b.title,{c(){i=$(),t=H("meta"),s=$(),n=H("meta"),this.h()},l(r){i=p(r),t=T(r,"META",{property:!0,content:!0}),s=p(r),n=T(r,"META",{name:!0,content:!0}),this.h()},h(){var r,c;y(t,"property","og:title"),y(t,"content",((r=b.og)==null?void 0:r.title)??b.title),y(n,"name","twitter:title"),y(n,"content",((c=b.og)==null?void 0:c.title)??b.title)},m(r,c){_(r,i,c),_(r,t,c),_(r,s,c),_(r,n,c)},p(r,c){c&0&&a!==(a=b.title)&&(document.title=a)},d(r){r&&(o(i),o(t),o(s),o(n))}}}function ft(u){var n,r;let a,i,t=(b.description||((n=b.og)==null?void 0:n.description))&&pt(),s=((r=b.og)==null?void 0:r.image)&&$t();return{c(){t&&t.c(),a=$(),s&&s.c(),i=Ee()},l(c){t&&t.l(c),a=p(c),s&&s.l(c),i=Ee()},m(c,k){t&&t.m(c,k),_(c,a,k),s&&s.m(c,k),_(c,i,k)},p(c,k){var f,A;(b.description||(f=b.og)!=null&&f.description)&&t.p(c,k),(A=b.og)!=null&&A.image&&s.p(c,k)},d(c){c&&(o(a),o(i)),t&&t.d(c),s&&s.d(c)}}}function pt(u){let a,i,t,s,n;return{c(){a=H("meta"),i=$(),t=H("meta"),s=$(),n=H("meta"),this.h()},l(r){a=T(r,"META",{name:!0,content:!0}),i=p(r),t=T(r,"META",{property:!0,content:!0}),s=p(r),n=T(r,"META",{name:!0,content:!0}),this.h()},h(){var r,c,k;y(a,"name","description"),y(a,"content",b.description??((r=b.og)==null?void 0:r.description)),y(t,"property","og:description"),y(t,"content",((c=b.og)==null?void 0:c.description)??b.description),y(n,"name","twitter:description"),y(n,"content",((k=b.og)==null?void 0:k.description)??b.description)},m(r,c){_(r,a,c),_(r,i,c),_(r,t,c),_(r,s,c),_(r,n,c)},p:_e,d(r){r&&(o(a),o(i),o(t),o(s),o(n))}}}function $t(u){let a,i,t;return{c(){a=H("meta"),i=$(),t=H("meta"),this.h()},l(s){a=T(s,"META",{property:!0,content:!0}),i=p(s),t=T(s,"META",{name:!0,content:!0}),this.h()},h(){var s,n;y(a,"property","og:image"),y(a,"content",Pe((s=b.og)==null?void 0:s.image)),y(t,"name","twitter:image"),y(t,"content",Pe((n=b.og)==null?void 0:n.image))},m(s,n){_(s,a,n),_(s,i,n),_(s,t,n)},p:_e,d(s){s&&(o(a),o(i),o(t))}}}function Ue(u){let a,i;return a=new Ce({props:{queryID:"regioes",queryResult:u[0]}}),{c(){R(a.$$.fragment)},l(t){C(a.$$.fragment,t)},m(t,s){E(a,t,s),i=!0},p(t,s){const n={};s[0]&1&&(n.queryResult=t[0]),a.$set(n)},i(t){i||(g(a.$$.fragment,t),i=!0)},o(t){v(a.$$.fragment,t),i=!1},d(t){M(a,t)}}}function Qe(u){let a,i;return a=new Ce({props:{queryID:"acumulado_por_cidade",queryResult:u[1]}}),{c(){R(a.$$.fragment)},l(t){C(a.$$.fragment,t)},m(t,s){E(a,t,s),i=!0},p(t,s){const n={};s[0]&2&&(n.queryResult=t[1]),a.$set(n)},i(t){i||(g(a.$$.fragment,t),i=!0)},o(t){v(a.$$.fragment,t),i=!1},d(t){M(a,t)}}}function Oe(u){let a,i;return a=new Ce({props:{queryID:"distribuicao_classes",queryResult:u[2]}}),{c(){R(a.$$.fragment)},l(t){C(a.$$.fragment,t)},m(t,s){E(a,t,s),i=!0},p(t,s){const n={};s[0]&4&&(n.queryResult=t[2]),a.$set(n)},i(t){i||(g(a.$$.fragment,t),i=!0)},o(t){v(a.$$.fragment,t),i=!1},d(t){M(a,t)}}}function Be(u){let a,i;return a=new Ce({props:{queryID:"anomalia_precipitacao",queryResult:u[3]}}),{c(){R(a.$$.fragment)},l(t){C(a.$$.fragment,t)},m(t,s){E(a,t,s),i=!0},p(t,s){const n={};s[0]&8&&(n.queryResult=t[3]),a.$set(n)},i(t){i||(g(a.$$.fragment,t),i=!0)},o(t){v(a.$$.fragment,t),i=!1},d(t){M(a,t)}}}function yt(u){let a,i,t,s,n,r,c,k,f,A,d,h,S,N,D,G;return a=new Q({props:{id:"city_name",title:"Cidade"}}),t=new Q({props:{id:"state_name",title:"UF"}}),n=new Q({props:{id:"acumulado_90d_mm",title:"Acumulado 90d (mm)",fmt:"0.0"}}),c=new Q({props:{id:"media_diaria_mm",title:"Média Diária (mm)",fmt:"0.0"}}),f=new Q({props:{id:"dias_com_chuva",title:"Dias c/ Chuva"}}),d=new Q({props:{id:"dias_chuva_forte",title:"Dias Forte"}}),S=new Q({props:{id:"dias_chuva_extrema",title:"Dias Extremo"}}),D=new Q({props:{id:"anomalia_media_mm",title:"Anomalia Média (mm)",fmt:"+0.0;-0.0",contentType:"colorscale"}}),{c(){R(a.$$.fragment),i=$(),R(t.$$.fragment),s=$(),R(n.$$.fragment),r=$(),R(c.$$.fragment),k=$(),R(f.$$.fragment),A=$(),R(d.$$.fragment),h=$(),R(S.$$.fragment),N=$(),R(D.$$.fragment)},l(m){C(a.$$.fragment,m),i=p(m),C(t.$$.fragment,m),s=p(m),C(n.$$.fragment,m),r=p(m),C(c.$$.fragment,m),k=p(m),C(f.$$.fragment,m),A=p(m),C(d.$$.fragment,m),h=p(m),C(S.$$.fragment,m),N=p(m),C(D.$$.fragment,m)},m(m,w){E(a,m,w),_(m,i,w),E(t,m,w),_(m,s,w),E(n,m,w),_(m,r,w),E(c,m,w),_(m,k,w),E(f,m,w),_(m,A,w),E(d,m,w),_(m,h,w),E(S,m,w),_(m,N,w),E(D,m,w),G=!0},p:_e,i(m){G||(g(a.$$.fragment,m),g(t.$$.fragment,m),g(n.$$.fragment,m),g(c.$$.fragment,m),g(f.$$.fragment,m),g(d.$$.fragment,m),g(S.$$.fragment,m),g(D.$$.fragment,m),G=!0)},o(m){v(a.$$.fragment,m),v(t.$$.fragment,m),v(n.$$.fragment,m),v(c.$$.fragment,m),v(f.$$.fragment,m),v(d.$$.fragment,m),v(S.$$.fragment,m),v(D.$$.fragment,m),G=!1},d(m){m&&(o(i),o(s),o(r),o(k),o(A),o(h),o(N)),M(a,m),M(t,m),M(n,m),M(c,m),M(f,m),M(d,m),M(S,m),M(D,m)}}}function gt(u){let a,i,t,s,n,r,c,k,f,A;return a=new Q({props:{id:"date",title:"Data",fmt:"dd/MM/yyyy"}}),t=new Q({props:{id:"city_name",title:"Cidade"}}),n=new Q({props:{id:"precipitation_mm",title:"Precipitação (mm)",fmt:"0.0"}}),c=new Q({props:{id:"precip_avg_30d_mm",title:"Média 30d (mm)",fmt:"0.0"}}),f=new Q({props:{id:"precip_anomaly_mm",title:"Anomalia (mm)",fmt:"+0.0;-0.0",contentType:"colorscale"}}),{c(){R(a.$$.fragment),i=$(),R(t.$$.fragment),s=$(),R(n.$$.fragment),r=$(),R(c.$$.fragment),k=$(),R(f.$$.fragment)},l(d){C(a.$$.fragment,d),i=p(d),C(t.$$.fragment,d),s=p(d),C(n.$$.fragment,d),r=p(d),C(c.$$.fragment,d),k=p(d),C(f.$$.fragment,d)},m(d,h){E(a,d,h),_(d,i,h),E(t,d,h),_(d,s,h),E(n,d,h),_(d,r,h),E(c,d,h),_(d,k,h),E(f,d,h),A=!0},p:_e,i(d){A||(g(a.$$.fragment,d),g(t.$$.fragment,d),g(n.$$.fragment,d),g(c.$$.fragment,d),g(f.$$.fragment,d),A=!0)},o(d){v(a.$$.fragment,d),v(t.$$.fragment,d),v(n.$$.fragment,d),v(c.$$.fragment,d),v(f.$$.fragment,d),A=!1},d(d){d&&(o(i),o(s),o(r),o(k)),M(a,d),M(t,d),M(n,d),M(c,d),M(f,d)}}}function wt(u){let a,i,t,s,n,r,c,k,f,A,d,h,S='<a href="#análise-de-precipitação">Análise de Precipitação</a>',N,D,G='Análise dos <strong class="markdown">últimos 90 dias</strong> para a região selecionada.',m,w,K='<a href="#acumulado-por-cidade">Acumulado por Cidade</a>',X,O,ae,z,B,P,ie='<a href="#distribuição-de-classificação-de-chuva">Distribuição de Classificação de Chuva</a>',re,V,de=`<p class="markdown">Classificação baseada na precipitação diária:
<strong class="markdown">dry</strong> = 0 mm · <strong class="markdown">light</strong> = 1–4 mm · <strong class="markdown">moderate</strong> = 5–19 mm · <strong class="markdown">heavy</strong> = 20–49 mm · <strong class="markdown">extreme</strong> ≥ 50 mm</p>`,W,j,Y,J,se,U,q='<a href="#tabela-detalhada-por-cidade">Tabela Detalhada por Cidade</a>',ue,le,ye,fe,ge,Z,qe='<a href="#dias-com-anomalia-de-precipitação-significativa--5-mm">Dias com Anomalia de Precipitação Significativa (&gt; 5 mm)</a>',we,me,he,pe,be,ne,De='<strong class="markdown">Navegação:</strong> <a href="/Analytics-Engineer/Weather-Analytics/" class="markdown">Início</a> · <a href="/Analytics-Engineer/Weather-Analytics/temperatura" class="markdown">Temperatura</a> · <a href="/Analytics-Engineer/Weather-Analytics/alertas" class="markdown">Alertas</a>',ve,ee=typeof b<"u"&&b.title&&b.hide_title!==!0&&_t();function Ve(e,l){return typeof b<"u"&&b.title?ut:dt}let $e=Ve()(u),te=typeof b=="object"&&ft(),F=u[0]&&Ue(u);c=new ot({props:{name:"regiao_selecionada",data:u[0],value:"value",label:"label",title:"Região",defaultValue:"Sul"}});let x=u[1]&&Qe(u),L=u[2]&&Oe(u),I=u[3]&&Be(u);return O=new Ne({props:{data:u[1],x:"city_name",y:"acumulado_90d_mm",yAxisTitle:"Precipitação acumulada (mm)",title:"Total acumulado nos últimos 90 dias",swapXY:"true"}}),j=new Ne({props:{data:u[2],x:"classe",y:"percentual",yAxisTitle:"% dos dias",title:"Proporção de dias por classificação"}}),le=new Se({props:{data:u[1],rows:"20",$$slots:{default:[yt]},$$scope:{ctx:u}}}),me=new Se({props:{data:u[3],rows:"20",$$slots:{default:[gt]},$$scope:{ctx:u}}}),{c(){ee&&ee.c(),a=$(),$e.c(),i=H("meta"),t=H("meta"),te&&te.c(),s=Ee(),n=$(),F&&F.c(),r=$(),R(c.$$.fragment),k=$(),x&&x.c(),f=$(),L&&L.c(),A=$(),I&&I.c(),d=$(),h=H("h1"),h.innerHTML=S,N=$(),D=H("p"),D.innerHTML=G,m=$(),w=H("h2"),w.innerHTML=K,X=$(),R(O.$$.fragment),ae=$(),z=H("hr"),B=$(),P=H("h2"),P.innerHTML=ie,re=$(),V=H("blockquote"),V.innerHTML=de,W=$(),R(j.$$.fragment),Y=$(),J=H("hr"),se=$(),U=H("h2"),U.innerHTML=q,ue=$(),R(le.$$.fragment),ye=$(),fe=H("hr"),ge=$(),Z=H("h2"),Z.innerHTML=qe,we=$(),R(me.$$.fragment),he=$(),pe=H("hr"),be=$(),ne=H("p"),ne.innerHTML=De,this.h()},l(e){ee&&ee.l(e),a=p(e);const l=Ge("svelte-2igo1p",document.head);$e.l(l),i=T(l,"META",{name:!0,content:!0}),t=T(l,"META",{name:!0,content:!0}),te&&te.l(l),s=Ee(),l.forEach(o),n=p(e),F&&F.l(e),r=p(e),C(c.$$.fragment,e),k=p(e),x&&x.l(e),f=p(e),L&&L.l(e),A=p(e),I&&I.l(e),d=p(e),h=T(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),oe(h)!=="svelte-1ocruoe"&&(h.innerHTML=S),N=p(e),D=T(e,"P",{class:!0,"data-svelte-h":!0}),oe(D)!=="svelte-1smsnxs"&&(D.innerHTML=G),m=p(e),w=T(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),oe(w)!=="svelte-7hxfm6"&&(w.innerHTML=K),X=p(e),C(O.$$.fragment,e),ae=p(e),z=T(e,"HR",{class:!0}),B=p(e),P=T(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),oe(P)!=="svelte-mkltis"&&(P.innerHTML=ie),re=p(e),V=T(e,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),oe(V)!=="svelte-u8sfmo"&&(V.innerHTML=de),W=p(e),C(j.$$.fragment,e),Y=p(e),J=T(e,"HR",{class:!0}),se=p(e),U=T(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),oe(U)!=="svelte-16n9v2u"&&(U.innerHTML=q),ue=p(e),C(le.$$.fragment,e),ye=p(e),fe=T(e,"HR",{class:!0}),ge=p(e),Z=T(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),oe(Z)!=="svelte-ac80ki"&&(Z.innerHTML=qe),we=p(e),C(me.$$.fragment,e),he=p(e),pe=T(e,"HR",{class:!0}),be=p(e),ne=T(e,"P",{class:!0,"data-svelte-h":!0}),oe(ne)!=="svelte-1k47d7s"&&(ne.innerHTML=De),this.h()},h(){y(i,"name","twitter:card"),y(i,"content","summary_large_image"),y(t,"name","twitter:site"),y(t,"content","@evidence_dev"),y(h,"class","markdown"),y(h,"id","análise-de-precipitação"),y(D,"class","markdown"),y(w,"class","markdown"),y(w,"id","acumulado-por-cidade"),y(z,"class","markdown"),y(P,"class","markdown"),y(P,"id","distribuição-de-classificação-de-chuva"),y(V,"class","markdown"),y(J,"class","markdown"),y(U,"class","markdown"),y(U,"id","tabela-detalhada-por-cidade"),y(fe,"class","markdown"),y(Z,"class","markdown"),y(Z,"id","dias-com-anomalia-de-precipitação-significativa--5-mm"),y(pe,"class","markdown"),y(ne,"class","markdown")},m(e,l){ee&&ee.m(e,l),_(e,a,l),$e.m(document.head,null),Me(document.head,i),Me(document.head,t),te&&te.m(document.head,null),Me(document.head,s),_(e,n,l),F&&F.m(e,l),_(e,r,l),E(c,e,l),_(e,k,l),x&&x.m(e,l),_(e,f,l),L&&L.m(e,l),_(e,A,l),I&&I.m(e,l),_(e,d,l),_(e,h,l),_(e,N,l),_(e,D,l),_(e,m,l),_(e,w,l),_(e,X,l),E(O,e,l),_(e,ae,l),_(e,z,l),_(e,B,l),_(e,P,l),_(e,re,l),_(e,V,l),_(e,W,l),E(j,e,l),_(e,Y,l),_(e,J,l),_(e,se,l),_(e,U,l),_(e,ue,l),E(le,e,l),_(e,ye,l),_(e,fe,l),_(e,ge,l),_(e,Z,l),_(e,we,l),E(me,e,l),_(e,he,l),_(e,pe,l),_(e,be,l),_(e,ne,l),ve=!0},p(e,l){typeof b<"u"&&b.title&&b.hide_title!==!0&&ee.p(e,l),$e.p(e,l),typeof b=="object"&&te.p(e,l),e[0]?F?(F.p(e,l),l[0]&1&&g(F,1)):(F=Ue(e),F.c(),g(F,1),F.m(r.parentNode,r)):F&&(Te(),v(F,1,1,()=>{F=null}),ke());const Fe={};l[0]&1&&(Fe.data=e[0]),c.$set(Fe),e[1]?x?(x.p(e,l),l[0]&2&&g(x,1)):(x=Qe(e),x.c(),g(x,1),x.m(f.parentNode,f)):x&&(Te(),v(x,1,1,()=>{x=null}),ke()),e[2]?L?(L.p(e,l),l[0]&4&&g(L,1)):(L=Oe(e),L.c(),g(L,1),L.m(A.parentNode,A)):L&&(Te(),v(L,1,1,()=>{L=null}),ke()),e[3]?I?(I.p(e,l),l[0]&8&&g(I,1)):(I=Be(e),I.c(),g(I,1),I.m(d.parentNode,d)):I&&(Te(),v(I,1,1,()=>{I=null}),ke());const xe={};l[0]&2&&(xe.data=e[1]),O.$set(xe);const Le={};l[0]&4&&(Le.data=e[2]),j.$set(Le);const Re={};l[0]&2&&(Re.data=e[1]),l[1]&32&&(Re.$$scope={dirty:l,ctx:e}),le.$set(Re);const Ae={};l[0]&8&&(Ae.data=e[3]),l[1]&32&&(Ae.$$scope={dirty:l,ctx:e}),me.$set(Ae)},i(e){ve||(g(F),g(c.$$.fragment,e),g(x),g(L),g(I),g(O.$$.fragment,e),g(j.$$.fragment,e),g(le.$$.fragment,e),g(me.$$.fragment,e),ve=!0)},o(e){v(F),v(c.$$.fragment,e),v(x),v(L),v(I),v(O.$$.fragment,e),v(j.$$.fragment,e),v(le.$$.fragment,e),v(me.$$.fragment,e),ve=!1},d(e){e&&(o(a),o(n),o(r),o(k),o(f),o(A),o(d),o(h),o(N),o(D),o(m),o(w),o(X),o(ae),o(z),o(B),o(P),o(re),o(V),o(W),o(Y),o(J),o(se),o(U),o(ue),o(ye),o(fe),o(ge),o(Z),o(we),o(he),o(pe),o(be),o(ne)),ee&&ee.d(e),$e.d(e),o(i),o(t),te&&te.d(e),o(s),F&&F.d(e),M(c,e),x&&x.d(e),L&&L.d(e),I&&I.d(e),M(O,e),M(j,e),M(le,e),M(me,e)}}}const b={title:"Análise de Precipitação"};function ht(u,a,i){let t,s;Ie(u,ct,q=>i(23,t=q)),Ie(u,je,q=>i(28,s=q));let{data:n}=a,{data:r={},customFormattingSettings:c,__db:k,inputs:f}=n;Ke(je,s="0989d4226bbbc337826602d0bace6dcd",s);let A=it(mt(f));Xe(A.subscribe(q=>i(6,f=q))),Ye(lt,{getCustomFormats:()=>c.customFormats||[]});const d=(q,ue)=>nt(k.query,q,{query_name:ue});rt(d),t.params,ze(()=>!0);let h={initialData:void 0,initialError:void 0},S=ce`select distinct region as value, region as label
from weather_dw.mart_climate__daily_facts
order by region`,N=`select distinct region as value, region as label
from weather_dw.mart_climate__daily_facts
order by region`;r.regioes_data&&(r.regioes_data instanceof Error?h.initialError=r.regioes_data:h.initialData=r.regioes_data,r.regioes_columns&&(h.knownColumns=r.regioes_columns));let D,G=!1;const m=He.createReactive({callback:q=>{i(0,D=q)},execFn:d},{id:"regioes",...h});m(N,{noResolve:S,...h}),globalThis[Symbol.for("regioes")]={get value(){return D}};let w={initialData:void 0,initialError:void 0},K=ce`select
  city_name,
  state_name,
  round(sum(precipitation_mm), 1)                as acumulado_90d_mm,
  round(avg(precipitation_mm), 1)                as media_diaria_mm,
  count(*) filter (where precipitation_mm > 0)                  as dias_com_chuva,
  count(*) filter (where precipitation_class = 'heavy')         as dias_chuva_forte,
  count(*) filter (where precipitation_class = 'extreme')       as dias_chuva_extrema,
  round(avg(precip_anomaly_mm), 2)               as anomalia_media_mm
from weather_dw.mart_climate__daily_facts
where region = '${f.regiao_selecionada.value}'
  and date >= current_date - interval '90 days'
group by city_name, state_name
order by acumulado_90d_mm desc`,X=`select
  city_name,
  state_name,
  round(sum(precipitation_mm), 1)                as acumulado_90d_mm,
  round(avg(precipitation_mm), 1)                as media_diaria_mm,
  count(*) filter (where precipitation_mm > 0)                  as dias_com_chuva,
  count(*) filter (where precipitation_class = 'heavy')         as dias_chuva_forte,
  count(*) filter (where precipitation_class = 'extreme')       as dias_chuva_extrema,
  round(avg(precip_anomaly_mm), 2)               as anomalia_media_mm
from weather_dw.mart_climate__daily_facts
where region = '${f.regiao_selecionada.value}'
  and date >= current_date - interval '90 days'
group by city_name, state_name
order by acumulado_90d_mm desc`;r.acumulado_por_cidade_data&&(r.acumulado_por_cidade_data instanceof Error?w.initialError=r.acumulado_por_cidade_data:w.initialData=r.acumulado_por_cidade_data,r.acumulado_por_cidade_columns&&(w.knownColumns=r.acumulado_por_cidade_columns));let O,ae=!1;const z=He.createReactive({callback:q=>{i(1,O=q)},execFn:d},{id:"acumulado_por_cidade",...w});z(X,{noResolve:K,...w}),globalThis[Symbol.for("acumulado_por_cidade")]={get value(){return O}};let B={initialData:void 0,initialError:void 0},P=ce`with contagem as (
  select
    precipitation_class as classe,
    count(*) as dias
  from weather_dw.mart_climate__daily_facts
  where region = '${f.regiao_selecionada.value}'
    and date >= current_date - interval '90 days'
  group by precipitation_class
),
total as (
  select sum(dias) as total_dias from contagem
)
select
  c.classe,
  c.dias,
  round(100.0 * c.dias / t.total_dias, 1) as percentual
from contagem c
cross join total t
order by
  case c.classe
    when 'dry'      then 1
    when 'light'    then 2
    when 'moderate' then 3
    when 'heavy'    then 4
    when 'extreme'  then 5
  end`,ie=`with contagem as (
  select
    precipitation_class as classe,
    count(*) as dias
  from weather_dw.mart_climate__daily_facts
  where region = '${f.regiao_selecionada.value}'
    and date >= current_date - interval '90 days'
  group by precipitation_class
),
total as (
  select sum(dias) as total_dias from contagem
)
select
  c.classe,
  c.dias,
  round(100.0 * c.dias / t.total_dias, 1) as percentual
from contagem c
cross join total t
order by
  case c.classe
    when 'dry'      then 1
    when 'light'    then 2
    when 'moderate' then 3
    when 'heavy'    then 4
    when 'extreme'  then 5
  end`;r.distribuicao_classes_data&&(r.distribuicao_classes_data instanceof Error?B.initialError=r.distribuicao_classes_data:B.initialData=r.distribuicao_classes_data,r.distribuicao_classes_columns&&(B.knownColumns=r.distribuicao_classes_columns));let re,V=!1;const de=He.createReactive({callback:q=>{i(2,re=q)},execFn:d},{id:"distribuicao_classes",...B});de(ie,{noResolve:P,...B}),globalThis[Symbol.for("distribuicao_classes")]={get value(){return re}};let W={initialData:void 0,initialError:void 0},j=ce`select
  date,
  city_name,
  precipitation_mm,
  precip_avg_30d_mm,
  precip_anomaly_mm
from weather_dw.mart_climate__daily_facts
where region = '${f.regiao_selecionada.value}'
  and date >= current_date - interval '60 days'
  and abs(precip_anomaly_mm) > 5
order by abs(precip_anomaly_mm) desc
limit 50`,Y=`select
  date,
  city_name,
  precipitation_mm,
  precip_avg_30d_mm,
  precip_anomaly_mm
from weather_dw.mart_climate__daily_facts
where region = '${f.regiao_selecionada.value}'
  and date >= current_date - interval '60 days'
  and abs(precip_anomaly_mm) > 5
order by abs(precip_anomaly_mm) desc
limit 50`;r.anomalia_precipitacao_data&&(r.anomalia_precipitacao_data instanceof Error?W.initialError=r.anomalia_precipitacao_data:W.initialData=r.anomalia_precipitacao_data,r.anomalia_precipitacao_columns&&(W.knownColumns=r.anomalia_precipitacao_columns));let J,se=!1;const U=He.createReactive({callback:q=>{i(3,J=q)},execFn:d},{id:"anomalia_precipitacao",...W});return U(Y,{noResolve:j,...W}),globalThis[Symbol.for("anomalia_precipitacao")]={get value(){return J}},u.$$set=q=>{"data"in q&&i(4,n=q.data)},u.$$.update=()=>{u.$$.dirty[0]&16&&i(5,{data:r={},customFormattingSettings:c,__db:k}=n,r),u.$$.dirty[0]&32&&st.set(Object.keys(r).length>0),u.$$.dirty[0]&8388608&&t.params,u.$$.dirty[0]&1920&&(S||!G?S||(m(N,{noResolve:S,...h}),i(10,G=!0)):m(N,{noResolve:S})),u.$$.dirty[0]&64&&i(12,K=ce`select
  city_name,
  state_name,
  round(sum(precipitation_mm), 1)                as acumulado_90d_mm,
  round(avg(precipitation_mm), 1)                as media_diaria_mm,
  count(*) filter (where precipitation_mm > 0)                  as dias_com_chuva,
  count(*) filter (where precipitation_class = 'heavy')         as dias_chuva_forte,
  count(*) filter (where precipitation_class = 'extreme')       as dias_chuva_extrema,
  round(avg(precip_anomaly_mm), 2)               as anomalia_media_mm
from weather_dw.mart_climate__daily_facts
where region = '${f.regiao_selecionada.value}'
  and date >= current_date - interval '90 days'
group by city_name, state_name
order by acumulado_90d_mm desc`),u.$$.dirty[0]&64&&i(13,X=`select
  city_name,
  state_name,
  round(sum(precipitation_mm), 1)                as acumulado_90d_mm,
  round(avg(precipitation_mm), 1)                as media_diaria_mm,
  count(*) filter (where precipitation_mm > 0)                  as dias_com_chuva,
  count(*) filter (where precipitation_class = 'heavy')         as dias_chuva_forte,
  count(*) filter (where precipitation_class = 'extreme')       as dias_chuva_extrema,
  round(avg(precip_anomaly_mm), 2)               as anomalia_media_mm
from weather_dw.mart_climate__daily_facts
where region = '${f.regiao_selecionada.value}'
  and date >= current_date - interval '90 days'
group by city_name, state_name
order by acumulado_90d_mm desc`),u.$$.dirty[0]&30720&&(K||!ae?K||(z(X,{noResolve:K,...w}),i(14,ae=!0)):z(X,{noResolve:K})),u.$$.dirty[0]&64&&i(16,P=ce`with contagem as (
  select
    precipitation_class as classe,
    count(*) as dias
  from weather_dw.mart_climate__daily_facts
  where region = '${f.regiao_selecionada.value}'
    and date >= current_date - interval '90 days'
  group by precipitation_class
),
total as (
  select sum(dias) as total_dias from contagem
)
select
  c.classe,
  c.dias,
  round(100.0 * c.dias / t.total_dias, 1) as percentual
from contagem c
cross join total t
order by
  case c.classe
    when 'dry'      then 1
    when 'light'    then 2
    when 'moderate' then 3
    when 'heavy'    then 4
    when 'extreme'  then 5
  end`),u.$$.dirty[0]&64&&i(17,ie=`with contagem as (
  select
    precipitation_class as classe,
    count(*) as dias
  from weather_dw.mart_climate__daily_facts
  where region = '${f.regiao_selecionada.value}'
    and date >= current_date - interval '90 days'
  group by precipitation_class
),
total as (
  select sum(dias) as total_dias from contagem
)
select
  c.classe,
  c.dias,
  round(100.0 * c.dias / t.total_dias, 1) as percentual
from contagem c
cross join total t
order by
  case c.classe
    when 'dry'      then 1
    when 'light'    then 2
    when 'moderate' then 3
    when 'heavy'    then 4
    when 'extreme'  then 5
  end`),u.$$.dirty[0]&491520&&(P||!V?P||(de(ie,{noResolve:P,...B}),i(18,V=!0)):de(ie,{noResolve:P})),u.$$.dirty[0]&64&&i(20,j=ce`select
  date,
  city_name,
  precipitation_mm,
  precip_avg_30d_mm,
  precip_anomaly_mm
from weather_dw.mart_climate__daily_facts
where region = '${f.regiao_selecionada.value}'
  and date >= current_date - interval '60 days'
  and abs(precip_anomaly_mm) > 5
order by abs(precip_anomaly_mm) desc
limit 50`),u.$$.dirty[0]&64&&i(21,Y=`select
  date,
  city_name,
  precipitation_mm,
  precip_avg_30d_mm,
  precip_anomaly_mm
from weather_dw.mart_climate__daily_facts
where region = '${f.regiao_selecionada.value}'
  and date >= current_date - interval '60 days'
  and abs(precip_anomaly_mm) > 5
order by abs(precip_anomaly_mm) desc
limit 50`),u.$$.dirty[0]&7864320&&(j||!se?j||(U(Y,{noResolve:j,...W}),i(22,se=!0)):U(Y,{noResolve:j}))},i(8,S=ce`select distinct region as value, region as label
from weather_dw.mart_climate__daily_facts
order by region`),i(9,N=`select distinct region as value, region as label
from weather_dw.mart_climate__daily_facts
order by region`),[D,O,re,J,n,r,f,h,S,N,G,w,K,X,ae,B,P,ie,V,W,j,Y,se,t]}class At extends tt{constructor(a){super(),at(this,a,ht,wt,We,{data:4},null,[-1,-1])}}export{At as component};
