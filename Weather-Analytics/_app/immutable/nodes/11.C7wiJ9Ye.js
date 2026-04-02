import{s as oa,d as l,i as o,b as se,c as g,e as p,h as da,f as q,g as Be,j as fe,m as y,n as E,o as We,p as ca,q as ua,r as fa,u as pa,a as Qe,k as ze,l as Ae,t as Fe,v as Re}from"../chunks/scheduler.BCLmrrz2.js";import{S as ya,i as va,d as C,t as $,a as v,c as Te,m as D,b as A,e as F,g as Me}from"../chunks/index.a3bxNApc.js";import{D as ga,e as wa,s as $a,Q as Ce,p as ba,C as De,a as Ze,r as ea,b as ha}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BwerghhW.js";import{w as ka}from"../chunks/entry.CbCHf3Ot.js";import{h as re,p as Ta}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{D as Ma}from"../chunks/Dropdown.Cly2UtN9.js";import{p as Ra}from"../chunks/stores.Bglzfa1B.js";import{B as qa,Q as Ie}from"../chunks/BarChart.C39ejiWJ.js";import{B as Oe}from"../chunks/BigValue.CJ6o_qCj.js";import{L as aa}from"../chunks/LineChart.DQ21YzSr.js";function Ea(n){let t,i=h.title+"",a;return{c(){t=E("h1"),a=Fe(i),this.h()},l(m){t=q(m,"H1",{class:!0});var s=ze(t);a=Ae(s,i),s.forEach(l),this.h()},h(){g(t,"class","title")},m(m,s){o(m,t,s),se(t,a)},p:Re,d(m){m&&l(t)}}}function Ha(n){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:Re,p:Re,d:Re}}function Ca(n){let t,i,a,m,s;return document.title=t=h.title,{c(){i=y(),a=E("meta"),m=y(),s=E("meta"),this.h()},l(r){i=p(r),a=q(r,"META",{property:!0,content:!0}),m=p(r),s=q(r,"META",{name:!0,content:!0}),this.h()},h(){var r,c;g(a,"property","og:title"),g(a,"content",((r=h.og)==null?void 0:r.title)??h.title),g(s,"name","twitter:title"),g(s,"content",((c=h.og)==null?void 0:c.title)??h.title)},m(r,c){o(r,i,c),o(r,a,c),o(r,m,c),o(r,s,c)},p(r,c){c&0&&t!==(t=h.title)&&(document.title=t)},d(r){r&&(l(i),l(a),l(m),l(s))}}}function Da(n){var s,r;let t,i,a=(h.description||((s=h.og)==null?void 0:s.description))&&Aa(),m=((r=h.og)==null?void 0:r.image)&&Fa();return{c(){a&&a.c(),t=y(),m&&m.c(),i=Be()},l(c){a&&a.l(c),t=p(c),m&&m.l(c),i=Be()},m(c,M){a&&a.m(c,M),o(c,t,M),m&&m.m(c,M),o(c,i,M)},p(c,M){var f,H;(h.description||(f=h.og)!=null&&f.description)&&a.p(c,M),(H=h.og)!=null&&H.image&&m.p(c,M)},d(c){c&&(l(t),l(i)),a&&a.d(c),m&&m.d(c)}}}function Aa(n){let t,i,a,m,s;return{c(){t=E("meta"),i=y(),a=E("meta"),m=y(),s=E("meta"),this.h()},l(r){t=q(r,"META",{name:!0,content:!0}),i=p(r),a=q(r,"META",{property:!0,content:!0}),m=p(r),s=q(r,"META",{name:!0,content:!0}),this.h()},h(){var r,c,M;g(t,"name","description"),g(t,"content",h.description??((r=h.og)==null?void 0:r.description)),g(a,"property","og:description"),g(a,"content",((c=h.og)==null?void 0:c.description)??h.description),g(s,"name","twitter:description"),g(s,"content",((M=h.og)==null?void 0:M.description)??h.description)},m(r,c){o(r,t,c),o(r,i,c),o(r,a,c),o(r,m,c),o(r,s,c)},p:Re,d(r){r&&(l(t),l(i),l(a),l(m),l(s))}}}function Fa(n){let t,i,a;return{c(){t=E("meta"),i=y(),a=E("meta"),this.h()},l(m){t=q(m,"META",{property:!0,content:!0}),i=p(m),a=q(m,"META",{name:!0,content:!0}),this.h()},h(){var m,s;g(t,"property","og:image"),g(t,"content",Ze((m=h.og)==null?void 0:m.image)),g(a,"name","twitter:image"),g(a,"content",Ze((s=h.og)==null?void 0:s.image))},m(m,s){o(m,t,s),o(m,i,s),o(m,a,s)},p:Re,d(m){m&&(l(t),l(i),l(a))}}}function ta(n){let t,i;return t=new Ie({props:{queryID:"cidades_disponiveis",queryResult:n[0]}}),{c(){F(t.$$.fragment)},l(a){A(t.$$.fragment,a)},m(a,m){D(t,a,m),i=!0},p(a,m){const s={};m[0]&1&&(s.queryResult=a[0]),t.$set(s)},i(a){i||(v(t.$$.fragment,a),i=!0)},o(a){$(t.$$.fragment,a),i=!1},d(a){C(t,a)}}}function ia(n){let t,i;return t=new Ie({props:{queryID:"serie_temperatura",queryResult:n[1]}}),{c(){F(t.$$.fragment)},l(a){A(t.$$.fragment,a)},m(a,m){D(t,a,m),i=!0},p(a,m){const s={};m[0]&2&&(s.queryResult=a[1]),t.$set(s)},i(a){i||(v(t.$$.fragment,a),i=!0)},o(a){$(t.$$.fragment,a),i=!1},d(a){C(t,a)}}}function ra(n){let t,i;return t=new Ie({props:{queryID:"resumo_cidade",queryResult:n[2]}}),{c(){F(t.$$.fragment)},l(a){A(t.$$.fragment,a)},m(a,m){D(t,a,m),i=!0},p(a,m){const s={};m[0]&4&&(s.queryResult=a[2]),t.$set(s)},i(a){i||(v(t.$$.fragment,a),i=!0)},o(a){$(t.$$.fragment,a),i=!1},d(a){C(t,a)}}}function _a(n){let t,i;return t=new Ie({props:{queryID:"anomalia_por_mes",queryResult:n[3]}}),{c(){F(t.$$.fragment)},l(a){A(t.$$.fragment,a)},m(a,m){D(t,a,m),i=!0},p(a,m){const s={};m[0]&8&&(s.queryResult=a[3]),t.$set(s)},i(a){i||(v(t.$$.fragment,a),i=!0)},o(a){$(t.$$.fragment,a),i=!1},d(a){C(t,a)}}}function ma(n){let t,i;return t=new Ie({props:{queryID:"amplitude_termica",queryResult:n[4]}}),{c(){F(t.$$.fragment)},l(a){A(t.$$.fragment,a)},m(a,m){D(t,a,m),i=!0},p(a,m){const s={};m[0]&16&&(s.queryResult=a[4]),t.$set(s)},i(a){i||(v(t.$$.fragment,a),i=!0)},o(a){$(t.$$.fragment,a),i=!1},d(a){C(t,a)}}}function la(n){let t,i;return t=new Ie({props:{queryID:"ranking_anomalia_hoje",queryResult:n[5]}}),{c(){F(t.$$.fragment)},l(a){A(t.$$.fragment,a)},m(a,m){D(t,a,m),i=!0},p(a,m){const s={};m[0]&32&&(s.queryResult=a[5]),t.$set(s)},i(a){i||(v(t.$$.fragment,a),i=!0)},o(a){$(t.$$.fragment,a),i=!1},d(a){C(t,a)}}}function na(n){let t,i,a=n[2][0].city_name+"",m,s,r=n[2][0].state_name+"",c,M,f=n[2][0].region+"",H,R,k,d,w,_e,P,Q,B,I;return k=new Oe({props:{data:n[2],value:"media_temperatura",title:"Temp. Média",fmt:"0.0"}}),w=new Oe({props:{data:n[2],value:"media_maxima",title:"Máxima Média",fmt:"0.0"}}),P=new Oe({props:{data:n[2],value:"media_minima",title:"Mínima Média",fmt:"0.0"}}),B=new Oe({props:{data:n[2],value:"anomalia_media",title:"Anomalia Média",fmt:"+0.00;-0.00"}}),{c(){t=E("p"),i=E("strong"),m=Fe(a),s=Fe(" — "),c=Fe(r),M=Fe(" · "),H=Fe(f),R=y(),F(k.$$.fragment),d=y(),F(w.$$.fragment),_e=y(),F(P.$$.fragment),Q=y(),F(B.$$.fragment),this.h()},l(u){t=q(u,"P",{class:!0});var b=ze(t);i=q(b,"STRONG",{class:!0});var Y=ze(i);m=Ae(Y,a),Y.forEach(l),s=Ae(b," — "),c=Ae(b,r),M=Ae(b," · "),H=Ae(b,f),b.forEach(l),R=p(u),A(k.$$.fragment,u),d=p(u),A(w.$$.fragment,u),_e=p(u),A(P.$$.fragment,u),Q=p(u),A(B.$$.fragment,u),this.h()},h(){g(i,"class","markdown"),g(t,"class","markdown")},m(u,b){o(u,t,b),se(t,i),se(i,m),se(t,s),se(t,c),se(t,M),se(t,H),o(u,R,b),D(k,u,b),o(u,d,b),D(w,u,b),o(u,_e,b),D(P,u,b),o(u,Q,b),D(B,u,b),I=!0},p(u,b){(!I||b[0]&4)&&a!==(a=u[2][0].city_name+"")&&Qe(m,a),(!I||b[0]&4)&&r!==(r=u[2][0].state_name+"")&&Qe(c,r),(!I||b[0]&4)&&f!==(f=u[2][0].region+"")&&Qe(H,f);const Y={};b[0]&4&&(Y.data=u[2]),k.$set(Y);const V={};b[0]&4&&(V.data=u[2]),w.$set(V);const W={};b[0]&4&&(W.data=u[2]),P.$set(W);const X={};b[0]&4&&(X.data=u[2]),B.$set(X)},i(u){I||(v(k.$$.fragment,u),v(w.$$.fragment,u),v(P.$$.fragment,u),v(B.$$.fragment,u),I=!0)},o(u){$(k.$$.fragment,u),$(w.$$.fragment,u),$(P.$$.fragment,u),$(B.$$.fragment,u),I=!1},d(u){u&&(l(t),l(R),l(d),l(_e),l(Q)),C(k,u),C(w,u),C(P,u),C(B,u)}}}function Ia(n){let t,i,a,m,s,r,c,M,f,H,R,k;return t=new De({props:{id:"city_name",title:"Cidade"}}),a=new De({props:{id:"state_name",title:"UF"}}),s=new De({props:{id:"region",title:"Região"}}),c=new De({props:{id:"temp_avg_c",title:"Temp. Média (°C)",fmt:"0.0"}}),f=new De({props:{id:"temp_avg_30d_c",title:"Baseline 30d (°C)",fmt:"0.0"}}),R=new De({props:{id:"temp_anomaly_c",title:"Anomalia (°C)",fmt:"+0.00;-0.00",contentType:"colorscale"}}),{c(){F(t.$$.fragment),i=y(),F(a.$$.fragment),m=y(),F(s.$$.fragment),r=y(),F(c.$$.fragment),M=y(),F(f.$$.fragment),H=y(),F(R.$$.fragment)},l(d){A(t.$$.fragment,d),i=p(d),A(a.$$.fragment,d),m=p(d),A(s.$$.fragment,d),r=p(d),A(c.$$.fragment,d),M=p(d),A(f.$$.fragment,d),H=p(d),A(R.$$.fragment,d)},m(d,w){D(t,d,w),o(d,i,w),D(a,d,w),o(d,m,w),D(s,d,w),o(d,r,w),D(c,d,w),o(d,M,w),D(f,d,w),o(d,H,w),D(R,d,w),k=!0},p:Re,i(d){k||(v(t.$$.fragment,d),v(a.$$.fragment,d),v(s.$$.fragment,d),v(c.$$.fragment,d),v(f.$$.fragment,d),v(R.$$.fragment,d),k=!0)},o(d){$(t.$$.fragment,d),$(a.$$.fragment,d),$(s.$$.fragment,d),$(c.$$.fragment,d),$(f.$$.fragment,d),$(R.$$.fragment,d),k=!1},d(d){d&&(l(i),l(m),l(r),l(M),l(H)),C(t,d),C(a,d),C(s,d),C(c,d),C(f,d),C(R,d)}}}function La(n){let t,i,a,m,s,r,c,M,f,H,R,k,d,w,_e='<a href="#análise-de-temperatura">Análise de Temperatura</a>',P,Q,B='Série dos <strong class="markdown">últimos 90 dias</strong> para a cidade selecionada.',I,u,b,Y,V,W='<a href="#série-temporal--máxima--média--mínima">Série Temporal — Máxima / Média / Mínima</a>',X,J,pe,oe,ye,z,le='<a href="#anomalia-de-temperatura-por-mês">Anomalia de Temperatura por Mês</a>',ne,ee,qe=`<p class="markdown">Desvio da temperatura média em relação à rolling average de 30 dias.
Positivo = mais quente que o normal; negativo = mais frio.</p>`,ve,G,ae,me,ge,Z,Ee='<a href="#amplitude-térmica-diária">Amplitude Térmica Diária</a>',te,K,we=`<p class="markdown">Diferença entre temperatura máxima e mínima em cada dia.
Amplitudes maiores indicam clima mais seco e continental.</p>`,$e,ie,be,T,He,de,Ve='<a href="#ranking-de-anomalia--último-dia-disponível">Ranking de Anomalia — Último Dia Disponível</a>',je,he,xe,Le,Ne,ke,Ge='<strong class="markdown">Navegação:</strong> <a href="/Analytics-Engineer/" class="markdown">Início</a> · <a href="/Analytics-Engineer/precipitacao" class="markdown">Precipitação</a> · <a href="/Analytics-Engineer/alertas" class="markdown">Alertas</a>',Ue,ce=typeof h<"u"&&h.title&&h.hide_title!==!0&&Ea();function sa(e,_){return typeof h<"u"&&h.title?Ca:Ha}let Se=sa()(n),ue=typeof h=="object"&&Da(),L=n[0]&&ta(n);c=new Ma({props:{name:"cidade_selecionada",data:n[0],value:"value",label:"label",title:"Cidade",defaultValue:"florianopolis"}});let S=n[1]&&ia(n),j=n[2]&&ra(n),x=n[3]&&_a(n),N=n[4]&&ma(n),U=n[5]&&la(n),O=n[2].length>0&&na(n);return J=new aa({props:{data:n[1],x:"date",y:["temp_max_c","temp_avg_c","temp_min_c","temp_avg_30d_c"],yAxisTitle:"Temperatura (°C)",xFmt:"dd/MM/yyyy",labels:!0}}),G=new qa({props:{data:n[3],x:"year_month",y:"anomalia_media",yAxisTitle:"Anomalia (°C)",colorPalette:["#e74c3c"]}}),ie=new aa({props:{data:n[4],x:"date",y:"temp_amplitude_c",yAxisTitle:"Amplitude (°C)",xFmt:"dd/MM/yyyy"}}),he=new ga({props:{data:n[5],rows:"32",$$slots:{default:[Ia]},$$scope:{ctx:n}}}),{c(){ce&&ce.c(),t=y(),Se.c(),i=E("meta"),a=E("meta"),ue&&ue.c(),m=Be(),s=y(),L&&L.c(),r=y(),F(c.$$.fragment),M=y(),S&&S.c(),f=y(),j&&j.c(),H=y(),x&&x.c(),R=y(),N&&N.c(),k=y(),U&&U.c(),d=y(),w=E("h1"),w.innerHTML=_e,P=y(),Q=E("p"),Q.innerHTML=B,I=y(),O&&O.c(),u=y(),b=E("hr"),Y=y(),V=E("h2"),V.innerHTML=W,X=y(),F(J.$$.fragment),pe=y(),oe=E("hr"),ye=y(),z=E("h2"),z.innerHTML=le,ne=y(),ee=E("blockquote"),ee.innerHTML=qe,ve=y(),F(G.$$.fragment),ae=y(),me=E("hr"),ge=y(),Z=E("h2"),Z.innerHTML=Ee,te=y(),K=E("blockquote"),K.innerHTML=we,$e=y(),F(ie.$$.fragment),be=y(),T=E("hr"),He=y(),de=E("h2"),de.innerHTML=Ve,je=y(),F(he.$$.fragment),xe=y(),Le=E("hr"),Ne=y(),ke=E("p"),ke.innerHTML=Ge,this.h()},l(e){ce&&ce.l(e),t=p(e);const _=da("svelte-2igo1p",document.head);Se.l(_),i=q(_,"META",{name:!0,content:!0}),a=q(_,"META",{name:!0,content:!0}),ue&&ue.l(_),m=Be(),_.forEach(l),s=p(e),L&&L.l(e),r=p(e),A(c.$$.fragment,e),M=p(e),S&&S.l(e),f=p(e),j&&j.l(e),H=p(e),x&&x.l(e),R=p(e),N&&N.l(e),k=p(e),U&&U.l(e),d=p(e),w=q(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),fe(w)!=="svelte-19z2ri"&&(w.innerHTML=_e),P=p(e),Q=q(e,"P",{class:!0,"data-svelte-h":!0}),fe(Q)!=="svelte-v027di"&&(Q.innerHTML=B),I=p(e),O&&O.l(e),u=p(e),b=q(e,"HR",{class:!0}),Y=p(e),V=q(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fe(V)!=="svelte-1i90g04"&&(V.innerHTML=W),X=p(e),A(J.$$.fragment,e),pe=p(e),oe=q(e,"HR",{class:!0}),ye=p(e),z=q(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fe(z)!=="svelte-ginu4o"&&(z.innerHTML=le),ne=p(e),ee=q(e,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),fe(ee)!=="svelte-wvpg4y"&&(ee.innerHTML=qe),ve=p(e),A(G.$$.fragment,e),ae=p(e),me=q(e,"HR",{class:!0}),ge=p(e),Z=q(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fe(Z)!=="svelte-33gbei"&&(Z.innerHTML=Ee),te=p(e),K=q(e,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),fe(K)!=="svelte-zui9hl"&&(K.innerHTML=we),$e=p(e),A(ie.$$.fragment,e),be=p(e),T=q(e,"HR",{class:!0}),He=p(e),de=q(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fe(de)!=="svelte-hk2x0j"&&(de.innerHTML=Ve),je=p(e),A(he.$$.fragment,e),xe=p(e),Le=q(e,"HR",{class:!0}),Ne=p(e),ke=q(e,"P",{class:!0,"data-svelte-h":!0}),fe(ke)!=="svelte-e264v4"&&(ke.innerHTML=Ge),this.h()},h(){g(i,"name","twitter:card"),g(i,"content","summary_large_image"),g(a,"name","twitter:site"),g(a,"content","@evidence_dev"),g(w,"class","markdown"),g(w,"id","análise-de-temperatura"),g(Q,"class","markdown"),g(b,"class","markdown"),g(V,"class","markdown"),g(V,"id","série-temporal--máxima--média--mínima"),g(oe,"class","markdown"),g(z,"class","markdown"),g(z,"id","anomalia-de-temperatura-por-mês"),g(ee,"class","markdown"),g(me,"class","markdown"),g(Z,"class","markdown"),g(Z,"id","amplitude-térmica-diária"),g(K,"class","markdown"),g(T,"class","markdown"),g(de,"class","markdown"),g(de,"id","ranking-de-anomalia--último-dia-disponível"),g(Le,"class","markdown"),g(ke,"class","markdown")},m(e,_){ce&&ce.m(e,_),o(e,t,_),Se.m(document.head,null),se(document.head,i),se(document.head,a),ue&&ue.m(document.head,null),se(document.head,m),o(e,s,_),L&&L.m(e,_),o(e,r,_),D(c,e,_),o(e,M,_),S&&S.m(e,_),o(e,f,_),j&&j.m(e,_),o(e,H,_),x&&x.m(e,_),o(e,R,_),N&&N.m(e,_),o(e,k,_),U&&U.m(e,_),o(e,d,_),o(e,w,_),o(e,P,_),o(e,Q,_),o(e,I,_),O&&O.m(e,_),o(e,u,_),o(e,b,_),o(e,Y,_),o(e,V,_),o(e,X,_),D(J,e,_),o(e,pe,_),o(e,oe,_),o(e,ye,_),o(e,z,_),o(e,ne,_),o(e,ee,_),o(e,ve,_),D(G,e,_),o(e,ae,_),o(e,me,_),o(e,ge,_),o(e,Z,_),o(e,te,_),o(e,K,_),o(e,$e,_),D(ie,e,_),o(e,be,_),o(e,T,_),o(e,He,_),o(e,de,_),o(e,je,_),D(he,e,_),o(e,xe,_),o(e,Le,_),o(e,Ne,_),o(e,ke,_),Ue=!0},p(e,_){typeof h<"u"&&h.title&&h.hide_title!==!0&&ce.p(e,_),Se.p(e,_),typeof h=="object"&&ue.p(e,_),e[0]?L?(L.p(e,_),_[0]&1&&v(L,1)):(L=ta(e),L.c(),v(L,1),L.m(r.parentNode,r)):L&&(Me(),$(L,1,1,()=>{L=null}),Te());const Ke={};_[0]&1&&(Ke.data=e[0]),c.$set(Ke),e[1]?S?(S.p(e,_),_[0]&2&&v(S,1)):(S=ia(e),S.c(),v(S,1),S.m(f.parentNode,f)):S&&(Me(),$(S,1,1,()=>{S=null}),Te()),e[2]?j?(j.p(e,_),_[0]&4&&v(j,1)):(j=ra(e),j.c(),v(j,1),j.m(H.parentNode,H)):j&&(Me(),$(j,1,1,()=>{j=null}),Te()),e[3]?x?(x.p(e,_),_[0]&8&&v(x,1)):(x=_a(e),x.c(),v(x,1),x.m(R.parentNode,R)):x&&(Me(),$(x,1,1,()=>{x=null}),Te()),e[4]?N?(N.p(e,_),_[0]&16&&v(N,1)):(N=ma(e),N.c(),v(N,1),N.m(k.parentNode,k)):N&&(Me(),$(N,1,1,()=>{N=null}),Te()),e[5]?U?(U.p(e,_),_[0]&32&&v(U,1)):(U=la(e),U.c(),v(U,1),U.m(d.parentNode,d)):U&&(Me(),$(U,1,1,()=>{U=null}),Te()),e[2].length>0?O?(O.p(e,_),_[0]&4&&v(O,1)):(O=na(e),O.c(),v(O,1),O.m(u.parentNode,u)):O&&(Me(),$(O,1,1,()=>{O=null}),Te());const Xe={};_[0]&2&&(Xe.data=e[1]),J.$set(Xe);const Ye={};_[0]&8&&(Ye.data=e[3]),G.$set(Ye);const Je={};_[0]&16&&(Je.data=e[4]),ie.$set(Je);const Pe={};_[0]&32&&(Pe.data=e[5]),_[1]&131072&&(Pe.$$scope={dirty:_,ctx:e}),he.$set(Pe)},i(e){Ue||(v(L),v(c.$$.fragment,e),v(S),v(j),v(x),v(N),v(U),v(O),v(J.$$.fragment,e),v(G.$$.fragment,e),v(ie.$$.fragment,e),v(he.$$.fragment,e),Ue=!0)},o(e){$(L),$(c.$$.fragment,e),$(S),$(j),$(x),$(N),$(U),$(O),$(J.$$.fragment,e),$(G.$$.fragment,e),$(ie.$$.fragment,e),$(he.$$.fragment,e),Ue=!1},d(e){e&&(l(t),l(s),l(r),l(M),l(f),l(H),l(R),l(k),l(d),l(w),l(P),l(Q),l(I),l(u),l(b),l(Y),l(V),l(X),l(pe),l(oe),l(ye),l(z),l(ne),l(ee),l(ve),l(ae),l(me),l(ge),l(Z),l(te),l(K),l($e),l(be),l(T),l(He),l(de),l(je),l(xe),l(Le),l(Ne),l(ke)),ce&&ce.d(e),Se.d(e),l(i),l(a),ue&&ue.d(e),l(m),L&&L.d(e),C(c,e),S&&S.d(e),j&&j.d(e),x&&x.d(e),N&&N.d(e),U&&U.d(e),O&&O.d(e),C(J,e),C(G,e),C(ie,e),C(he,e)}}}const h={title:"Análise de Temperatura"};function Sa(n,t,i){let a,m;We(n,Ra,T=>i(33,a=T)),We(n,ea,T=>i(38,m=T));let{data:s}=t,{data:r={},customFormattingSettings:c,__db:M,inputs:f}=s;ca(ea,m="8acc3e62f15dffd2ecc87f0f6697e033",m);let H=wa(ka(f));ua(H.subscribe(T=>i(8,f=T))),fa(ha,{getCustomFormats:()=>c.customFormats||[]});const R=(T,He)=>Ta(M.query,T,{query_name:He});$a(R),a.params,pa(()=>!0);let k={initialData:void 0,initialError:void 0},d=re`select distinct
  location_id  as value,
  city_name    as label
from weather_dw.mart_climate__daily_facts
order by city_name`,w=`select distinct
  location_id  as value,
  city_name    as label
from weather_dw.mart_climate__daily_facts
order by city_name`;r.cidades_disponiveis_data&&(r.cidades_disponiveis_data instanceof Error?k.initialError=r.cidades_disponiveis_data:k.initialData=r.cidades_disponiveis_data,r.cidades_disponiveis_columns&&(k.knownColumns=r.cidades_disponiveis_columns));let _e,P=!1;const Q=Ce.createReactive({callback:T=>{i(0,_e=T)},execFn:R},{id:"cidades_disponiveis",...k});Q(w,{noResolve:d,...k}),globalThis[Symbol.for("cidades_disponiveis")]={get value(){return _e}};let B={initialData:void 0,initialError:void 0},I=re`select
  date,
  temp_max_c,
  temp_avg_c,
  temp_min_c,
  temp_avg_30d_c,
  temp_anomaly_c,
  temp_amplitude_c
from weather_dw.mart_climate__daily_facts
where location_id = '${f.cidade_selecionada.value}'
  and date >= current_date - interval '90 days'
order by date`,u=`select
  date,
  temp_max_c,
  temp_avg_c,
  temp_min_c,
  temp_avg_30d_c,
  temp_anomaly_c,
  temp_amplitude_c
from weather_dw.mart_climate__daily_facts
where location_id = '${f.cidade_selecionada.value}'
  and date >= current_date - interval '90 days'
order by date`;r.serie_temperatura_data&&(r.serie_temperatura_data instanceof Error?B.initialError=r.serie_temperatura_data:B.initialData=r.serie_temperatura_data,r.serie_temperatura_columns&&(B.knownColumns=r.serie_temperatura_columns));let b,Y=!1;const V=Ce.createReactive({callback:T=>{i(1,b=T)},execFn:R},{id:"serie_temperatura",...B});V(u,{noResolve:I,...B}),globalThis[Symbol.for("serie_temperatura")]={get value(){return b}};let W={initialData:void 0,initialError:void 0},X=re`select
  city_name,
  state_name,
  region,
  round(avg(temp_max_c), 1)         as media_maxima,
  round(avg(temp_min_c), 1)         as media_minima,
  round(avg(temp_avg_c), 1)         as media_temperatura,
  round(max(temp_max_c), 1)         as recorde_max,
  round(min(temp_min_c), 1)         as recorde_min,
  round(avg(temp_anomaly_c), 2)     as anomalia_media,
  round(avg(daylight_hours), 1)     as horas_luz_media
from weather_dw.mart_climate__daily_facts
where location_id = '${f.cidade_selecionada.value}'
  and date >= current_date - interval '90 days'
group by city_name, state_name, region`,J=`select
  city_name,
  state_name,
  region,
  round(avg(temp_max_c), 1)         as media_maxima,
  round(avg(temp_min_c), 1)         as media_minima,
  round(avg(temp_avg_c), 1)         as media_temperatura,
  round(max(temp_max_c), 1)         as recorde_max,
  round(min(temp_min_c), 1)         as recorde_min,
  round(avg(temp_anomaly_c), 2)     as anomalia_media,
  round(avg(daylight_hours), 1)     as horas_luz_media
from weather_dw.mart_climate__daily_facts
where location_id = '${f.cidade_selecionada.value}'
  and date >= current_date - interval '90 days'
group by city_name, state_name, region`;r.resumo_cidade_data&&(r.resumo_cidade_data instanceof Error?W.initialError=r.resumo_cidade_data:W.initialData=r.resumo_cidade_data,r.resumo_cidade_columns&&(W.knownColumns=r.resumo_cidade_columns));let pe,oe=!1;const ye=Ce.createReactive({callback:T=>{i(2,pe=T)},execFn:R},{id:"resumo_cidade",...W});ye(J,{noResolve:X,...W}),globalThis[Symbol.for("resumo_cidade")]={get value(){return pe}};let z={initialData:void 0,initialError:void 0},le=re`select
  year_month,
  round(avg(temp_anomaly_c), 2)     as anomalia_media,
  round(avg(temp_avg_c), 1)         as temp_media,
  round(avg(temp_avg_30d_c), 1)     as baseline_30d
from weather_dw.mart_climate__daily_facts
where location_id = '${f.cidade_selecionada.value}'
group by year_month
order by year_month`,ne=`select
  year_month,
  round(avg(temp_anomaly_c), 2)     as anomalia_media,
  round(avg(temp_avg_c), 1)         as temp_media,
  round(avg(temp_avg_30d_c), 1)     as baseline_30d
from weather_dw.mart_climate__daily_facts
where location_id = '${f.cidade_selecionada.value}'
group by year_month
order by year_month`;r.anomalia_por_mes_data&&(r.anomalia_por_mes_data instanceof Error?z.initialError=r.anomalia_por_mes_data:z.initialData=r.anomalia_por_mes_data,r.anomalia_por_mes_columns&&(z.knownColumns=r.anomalia_por_mes_columns));let ee,qe=!1;const ve=Ce.createReactive({callback:T=>{i(3,ee=T)},execFn:R},{id:"anomalia_por_mes",...z});ve(ne,{noResolve:le,...z}),globalThis[Symbol.for("anomalia_por_mes")]={get value(){return ee}};let G={initialData:void 0,initialError:void 0},ae=re`select
  date,
  temp_amplitude_c,
  is_weekend
from weather_dw.mart_climate__daily_facts
where location_id = '${f.cidade_selecionada.value}'
  and date >= current_date - interval '90 days'
order by date`,me=`select
  date,
  temp_amplitude_c,
  is_weekend
from weather_dw.mart_climate__daily_facts
where location_id = '${f.cidade_selecionada.value}'
  and date >= current_date - interval '90 days'
order by date`;r.amplitude_termica_data&&(r.amplitude_termica_data instanceof Error?G.initialError=r.amplitude_termica_data:G.initialData=r.amplitude_termica_data,r.amplitude_termica_columns&&(G.knownColumns=r.amplitude_termica_columns));let ge,Z=!1;const Ee=Ce.createReactive({callback:T=>{i(4,ge=T)},execFn:R},{id:"amplitude_termica",...G});Ee(me,{noResolve:ae,...G}),globalThis[Symbol.for("amplitude_termica")]={get value(){return ge}};let te={initialData:void 0,initialError:void 0},K=re`select
  city_name,
  state_name,
  region,
  temp_avg_c,
  temp_anomaly_c,
  temp_avg_30d_c
from weather_dw.mart_climate__daily_facts
where date = (
    select max(date) from weather_dw.mart_climate__daily_facts
)
order by temp_anomaly_c desc`,we=`select
  city_name,
  state_name,
  region,
  temp_avg_c,
  temp_anomaly_c,
  temp_avg_30d_c
from weather_dw.mart_climate__daily_facts
where date = (
    select max(date) from weather_dw.mart_climate__daily_facts
)
order by temp_anomaly_c desc`;r.ranking_anomalia_hoje_data&&(r.ranking_anomalia_hoje_data instanceof Error?te.initialError=r.ranking_anomalia_hoje_data:te.initialData=r.ranking_anomalia_hoje_data,r.ranking_anomalia_hoje_columns&&(te.knownColumns=r.ranking_anomalia_hoje_columns));let $e,ie=!1;const be=Ce.createReactive({callback:T=>{i(5,$e=T)},execFn:R},{id:"ranking_anomalia_hoje",...te});return be(we,{noResolve:K,...te}),globalThis[Symbol.for("ranking_anomalia_hoje")]={get value(){return $e}},n.$$set=T=>{"data"in T&&i(6,s=T.data)},n.$$.update=()=>{n.$$.dirty[0]&64&&i(7,{data:r={},customFormattingSettings:c,__db:M}=s,r),n.$$.dirty[0]&128&&ba.set(Object.keys(r).length>0),n.$$.dirty[1]&4&&a.params,n.$$.dirty[0]&7680&&(d||!P?d||(Q(w,{noResolve:d,...k}),i(12,P=!0)):Q(w,{noResolve:d})),n.$$.dirty[0]&256&&i(14,I=re`select
  date,
  temp_max_c,
  temp_avg_c,
  temp_min_c,
  temp_avg_30d_c,
  temp_anomaly_c,
  temp_amplitude_c
from weather_dw.mart_climate__daily_facts
where location_id = '${f.cidade_selecionada.value}'
  and date >= current_date - interval '90 days'
order by date`),n.$$.dirty[0]&256&&i(15,u=`select
  date,
  temp_max_c,
  temp_avg_c,
  temp_min_c,
  temp_avg_30d_c,
  temp_anomaly_c,
  temp_amplitude_c
from weather_dw.mart_climate__daily_facts
where location_id = '${f.cidade_selecionada.value}'
  and date >= current_date - interval '90 days'
order by date`),n.$$.dirty[0]&122880&&(I||!Y?I||(V(u,{noResolve:I,...B}),i(16,Y=!0)):V(u,{noResolve:I})),n.$$.dirty[0]&256&&i(18,X=re`select
  city_name,
  state_name,
  region,
  round(avg(temp_max_c), 1)         as media_maxima,
  round(avg(temp_min_c), 1)         as media_minima,
  round(avg(temp_avg_c), 1)         as media_temperatura,
  round(max(temp_max_c), 1)         as recorde_max,
  round(min(temp_min_c), 1)         as recorde_min,
  round(avg(temp_anomaly_c), 2)     as anomalia_media,
  round(avg(daylight_hours), 1)     as horas_luz_media
from weather_dw.mart_climate__daily_facts
where location_id = '${f.cidade_selecionada.value}'
  and date >= current_date - interval '90 days'
group by city_name, state_name, region`),n.$$.dirty[0]&256&&i(19,J=`select
  city_name,
  state_name,
  region,
  round(avg(temp_max_c), 1)         as media_maxima,
  round(avg(temp_min_c), 1)         as media_minima,
  round(avg(temp_avg_c), 1)         as media_temperatura,
  round(max(temp_max_c), 1)         as recorde_max,
  round(min(temp_min_c), 1)         as recorde_min,
  round(avg(temp_anomaly_c), 2)     as anomalia_media,
  round(avg(daylight_hours), 1)     as horas_luz_media
from weather_dw.mart_climate__daily_facts
where location_id = '${f.cidade_selecionada.value}'
  and date >= current_date - interval '90 days'
group by city_name, state_name, region`),n.$$.dirty[0]&1966080&&(X||!oe?X||(ye(J,{noResolve:X,...W}),i(20,oe=!0)):ye(J,{noResolve:X})),n.$$.dirty[0]&256&&i(22,le=re`select
  year_month,
  round(avg(temp_anomaly_c), 2)     as anomalia_media,
  round(avg(temp_avg_c), 1)         as temp_media,
  round(avg(temp_avg_30d_c), 1)     as baseline_30d
from weather_dw.mart_climate__daily_facts
where location_id = '${f.cidade_selecionada.value}'
group by year_month
order by year_month`),n.$$.dirty[0]&256&&i(23,ne=`select
  year_month,
  round(avg(temp_anomaly_c), 2)     as anomalia_media,
  round(avg(temp_avg_c), 1)         as temp_media,
  round(avg(temp_avg_30d_c), 1)     as baseline_30d
from weather_dw.mart_climate__daily_facts
where location_id = '${f.cidade_selecionada.value}'
group by year_month
order by year_month`),n.$$.dirty[0]&31457280&&(le||!qe?le||(ve(ne,{noResolve:le,...z}),i(24,qe=!0)):ve(ne,{noResolve:le})),n.$$.dirty[0]&256&&i(26,ae=re`select
  date,
  temp_amplitude_c,
  is_weekend
from weather_dw.mart_climate__daily_facts
where location_id = '${f.cidade_selecionada.value}'
  and date >= current_date - interval '90 days'
order by date`),n.$$.dirty[0]&256&&i(27,me=`select
  date,
  temp_amplitude_c,
  is_weekend
from weather_dw.mart_climate__daily_facts
where location_id = '${f.cidade_selecionada.value}'
  and date >= current_date - interval '90 days'
order by date`),n.$$.dirty[0]&503316480&&(ae||!Z?ae||(Ee(me,{noResolve:ae,...G}),i(28,Z=!0)):Ee(me,{noResolve:ae})),n.$$.dirty[0]&1610612736|n.$$.dirty[1]&3&&(K||!ie?K||(be(we,{noResolve:K,...te}),i(32,ie=!0)):be(we,{noResolve:K}))},i(10,d=re`select distinct
  location_id  as value,
  city_name    as label
from weather_dw.mart_climate__daily_facts
order by city_name`),i(11,w=`select distinct
  location_id  as value,
  city_name    as label
from weather_dw.mart_climate__daily_facts
order by city_name`),i(30,K=re`select
  city_name,
  state_name,
  region,
  temp_avg_c,
  temp_anomaly_c,
  temp_avg_30d_c
from weather_dw.mart_climate__daily_facts
where date = (
    select max(date) from weather_dw.mart_climate__daily_facts
)
order by temp_anomaly_c desc`),i(31,we=`select
  city_name,
  state_name,
  region,
  temp_avg_c,
  temp_anomaly_c,
  temp_avg_30d_c
from weather_dw.mart_climate__daily_facts
where date = (
    select max(date) from weather_dw.mart_climate__daily_facts
)
order by temp_anomaly_c desc`),[_e,b,pe,ee,ge,$e,s,r,f,k,d,w,P,B,I,u,Y,W,X,J,oe,z,le,ne,qe,G,ae,me,Z,te,K,we,ie,a]}class Ka extends ya{constructor(t){super(),va(this,t,Sa,La,oa,{data:6},null,[-1,-1])}}export{Ka as component};
