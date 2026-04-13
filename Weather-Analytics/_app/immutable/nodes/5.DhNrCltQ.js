import{s as ct,J as Ft,o as mt,K as zt,v as N,G as ot,w as Nt,d as c,x as Gt,y as Ut,z as jt,i as d,e as h,m as k,b as et,c as T,h as Qt,f as x,g as tt,j as Fe,n as B,p as Kt,q as Wt,r as Vt,u as Xt,k as Yt,l as Jt,t as Zt}from"../chunks/scheduler.BCLmrrz2.js";import{S as ut,i as dt,d as F,t as w,a as g,m as H,b as O,e as E,c as Re,g as De}from"../chunks/index.a3bxNApc.js";import{F as $t,n as ei,o as ti,j as It,q as ii,u as ai,v as li,t as ft,e as ri,s as si,Q as Je,p as ni,D as yt,a as Ht,C as X,r as Ot,b as oi}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.Dxa6Sle5.js";import{w as fi}from"../chunks/entry.sRiRMVYf.js";import{h as Pe,p as _i}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as mi}from"../chunks/stores.duVsGIv3.js";import{r as ci,g as ui,b as di,C as yi,Q as Ze,B as bi}from"../chunks/BarChart.CfQ2wOmd.js";import{B as _t}from"../chunks/BigValue.C8_ab9hs.js";function Et(a,e){let i={};if(typeof e=="object")for(let t=0;t<e.length;t++)i[e[t]]=0;else i[e]=0;return a=$t(a,ci(i)),a}function gi(a,e,i){let t,r,s,n,_,b,A,L,C,S,y,M,P,K,f=N,v=()=>(f(),f=ot(s,u=>i(38,K=u)),s),se,Y=N,Te=()=>(Y(),Y=ot(r,u=>i(39,se=u)),r),ne,we=N,me=()=>(we(),we=ot(t,u=>i(40,ne=u)),t),I;a.$$.on_destroy.push(()=>f()),a.$$.on_destroy.push(()=>Y()),a.$$.on_destroy.push(()=>we());let J=Ft(ei);mt(a,J,u=>i(41,I=u));let Ae=Ft(ti);const{resolveColor:he}=It();let{y:q=void 0}=e;const U=!!q;let{series:G=void 0}=e;const be=!!G;let{options:ge=void 0}=e,{name:V=void 0}=e,{type:Me="stacked"}=e,{fillColor:oe=void 0}=e,{lineColor:z=void 0}=e,{fillOpacity:j=void 0}=e,{line:Z=!0}=e,{markers:$=!1}=e,{markerShape:ke="circle"}=e,{markerSize:Q=8}=e,{handleMissing:ce="gap"}=e,{step:ee=!1}=e,{stepPosition:W="end"}=e,{labels:D=!1}=e,{labelSize:de=11}=e,{labelPosition:p="top"}=e,{labelColor:Se=void 0}=e,{labelFmt:ue=void 0}=e,Ne;ue&&(Ne=ii(ue));let{showAllLabels:He=!1}=e,{seriesOrder:fe=void 0}=e,{seriesLabelFmt:_e=void 0}=e,Le;const qe={above:"top",below:"bottom",middle:"inside"},xe={above:"right",below:"left",middle:"inside"};let Ce=b?"right":"top";return zt(()=>{Ae.update(u=>(u.tooltip={...u.tooltip,order:"seriesDesc"},b?(u.yAxis={...u.yAxis,...P.xAxis},u.xAxis={...u.xAxis,...P.yAxis}):(u.yAxis[0]={...u.yAxis[0],...P.yAxis},u.xAxis={...u.xAxis,...P.xAxis}),Me==="stacked100"&&(b?u.xAxis={...u.xAxis,max:1}:u.yAxis[0]={...u.yAxis[0],max:1}),D&&(u.axisPointer={triggerEmphasis:!1}),u))}),a.$$set=u=>{"y"in u&&i(4,q=u.y),"series"in u&&i(5,G=u.series),"options"in u&&i(12,ge=u.options),"name"in u&&i(6,V=u.name),"type"in u&&i(13,Me=u.type),"fillColor"in u&&i(14,oe=u.fillColor),"lineColor"in u&&i(15,z=u.lineColor),"fillOpacity"in u&&i(16,j=u.fillOpacity),"line"in u&&i(7,Z=u.line),"markers"in u&&i(8,$=u.markers),"markerShape"in u&&i(17,ke=u.markerShape),"markerSize"in u&&i(18,Q=u.markerSize),"handleMissing"in u&&i(19,ce=u.handleMissing),"step"in u&&i(9,ee=u.step),"stepPosition"in u&&i(20,W=u.stepPosition),"labels"in u&&i(10,D=u.labels),"labelSize"in u&&i(21,de=u.labelSize),"labelPosition"in u&&i(11,p=u.labelPosition),"labelColor"in u&&i(22,Se=u.labelColor),"labelFmt"in u&&i(23,ue=u.labelFmt),"showAllLabels"in u&&i(24,He=u.showAllLabels),"seriesOrder"in u&&i(25,fe=u.seriesOrder),"seriesLabelFmt"in u&&i(26,_e=u.seriesLabelFmt)},a.$$.update=()=>{a.$$.dirty[0]&16384&&me(i(2,t=he(oe))),a.$$.dirty[0]&32768&&Te(i(1,r=he(z))),a.$$.dirty[0]&128&&i(7,Z=Z==="true"||Z===!0),a.$$.dirty[0]&256&&i(8,$=$==="true"||$===!0),a.$$.dirty[0]&512&&i(9,ee=ee==="true"||ee===!0),a.$$.dirty[0]&1024&&i(10,D=D==="true"||D===!0),a.$$.dirty[0]&4194304&&v(i(0,s=he(Se))),a.$$.dirty[1]&1024&&i(36,n=I.data),a.$$.dirty[1]&1024&&i(35,_=I.x),a.$$.dirty[0]&16|a.$$.dirty[1]&1024&&i(4,q=U?q:I.y),a.$$.dirty[1]&1024&&i(29,b=I.swapXY),a.$$.dirty[1]&1024&&i(37,A=I.yFormat),a.$$.dirty[1]&1024&&i(30,L=I.xType),a.$$.dirty[1]&1024&&i(33,C=I.xMismatch),a.$$.dirty[1]&1024&&i(32,S=I.columnSummary),a.$$.dirty[0]&32|a.$$.dirty[1]&1024&&i(5,G=be?G:I.series),a.$$.dirty[0]&1073741936|a.$$.dirty[1]&50&&(!G&&typeof q!="object"?i(6,V=V??ai(q,S[q].title)):(i(28,Le="area"),i(36,n=ui(n,_,q,G,!1,L==="value")),i(36,n=Et(n,q)),i(30,L=L==="value"?"category":L))),a.$$.dirty[0]&524304|a.$$.dirty[1]&32&&ce==="zero"&&i(36,n=Et(n,q)),a.$$.dirty[0]&536872960&&i(11,p=(b?xe[p]:qe[p])??Ce),a.$$.dirty[0]&960434048|a.$$.dirty[1]&960&&i(34,y={type:"line",stack:Le,areaStyle:{color:ne,opacity:j},connectNulls:ce==="connect",lineStyle:{width:Z?1:0,color:se},label:{show:D,formatter(u){return u.value[b?0:1]===0?"":li(u.value[b?0:1],Ne??A)},fontSize:de,color:K,position:p,padding:3},labelLayout:{hideOverlap:!He},emphasis:{focus:"series"},showSymbol:D||$,symbol:ke,symbolSize:D&&!$?0:Q,step:ee?W:!1}),a.$$.dirty[0]&637534320|a.$$.dirty[1]&62&&i(31,M=di(n,_,q,G,b,y,V,C,S,fe,void 0,void 0,void 0,_e)),a.$$.dirty[1]&1&&Ae.update(u=>(u.series.push(...M),u.legend.data.push(...M.map(Be=>Be.name.toString())),u)),a.$$.dirty[0]&4096&&ge&&Ae.update(u=>({...u,...ge})),a.$$.dirty[0]&1073741824&&(P={yAxis:{boundaryGap:["0%","1%"]},xAxis:{boundaryGap:["4%","4%"],type:L}})},[s,r,t,J,q,G,V,Z,$,ee,D,p,ge,Me,oe,z,j,ke,Q,ce,W,de,Se,ue,He,fe,_e,Ne,Le,b,L,M,S,C,y,_,n,A,K,se,ne,I]}class wi extends ut{constructor(e){super(),dt(this,e,gi,null,ct,{y:4,series:5,options:12,name:6,type:13,fillColor:14,lineColor:15,fillOpacity:16,line:7,markers:8,markerShape:17,markerSize:18,handleMissing:19,step:9,stepPosition:20,labels:10,labelSize:21,labelPosition:11,labelColor:22,labelFmt:23,showAllLabels:24,seriesOrder:25,seriesLabelFmt:26},null,[-1,-1])}}function hi(a){let e,i,t;e=new wi({props:{line:a[28],fillColor:a[59],lineColor:a[58],fillOpacity:a[29],handleMissing:a[34],type:a[38],step:a[35],stepPosition:a[36],markers:a[31],markerShape:a[32],markerSize:a[33],labels:a[39],labelSize:a[40],labelPosition:a[41],labelColor:a[56],labelFmt:a[42],showAllLabels:a[43],seriesOrder:a[49],seriesLabelFmt:a[51]}});const r=a[66].default,s=Nt(r,a,a[67],null);return{c(){E(e.$$.fragment),i=k(),s&&s.c()},l(n){O(e.$$.fragment,n),i=h(n),s&&s.l(n)},m(n,_){H(e,n,_),d(n,i,_),s&&s.m(n,_),t=!0},p(n,_){const b={};_[0]&268435456&&(b.line=n[28]),_[1]&268435456&&(b.fillColor=n[59]),_[1]&134217728&&(b.lineColor=n[58]),_[0]&536870912&&(b.fillOpacity=n[29]),_[1]&8&&(b.handleMissing=n[34]),_[1]&128&&(b.type=n[38]),_[1]&16&&(b.step=n[35]),_[1]&32&&(b.stepPosition=n[36]),_[1]&1&&(b.markers=n[31]),_[1]&2&&(b.markerShape=n[32]),_[1]&4&&(b.markerSize=n[33]),_[1]&256&&(b.labels=n[39]),_[1]&512&&(b.labelSize=n[40]),_[1]&1024&&(b.labelPosition=n[41]),_[1]&33554432&&(b.labelColor=n[56]),_[1]&2048&&(b.labelFmt=n[42]),_[1]&4096&&(b.showAllLabels=n[43]),_[1]&262144&&(b.seriesOrder=n[49]),_[1]&1048576&&(b.seriesLabelFmt=n[51]),e.$set(b),s&&s.p&&(!t||_[2]&32)&&Gt(s,r,n,n[67],t?jt(r,n[67],_,null):Ut(n[67]),null)},i(n){t||(g(e.$$.fragment,n),g(s,n),t=!0)},o(n){w(e.$$.fragment,n),w(s,n),t=!1},d(n){n&&c(i),F(e,n),s&&s.d(n)}}}function ki(a){let e,i;return e=new yi({props:{data:a[3],x:a[4],y:a[5],xFmt:a[11],yFmt:a[10],series:a[6],xType:a[7],yLog:a[8],yLogBase:a[9],legend:a[14],xAxisTitle:a[15],yAxisTitle:a[16],xGridlines:a[17],yGridlines:a[18],xAxisLabels:a[19],yAxisLabels:a[20],xBaseline:a[21],yBaseline:a[22],xTickMarks:a[23],yTickMarks:a[24],yMin:a[25],yMax:a[26],yScale:a[27],title:a[12],subtitle:a[13],chartType:vi,sort:a[37],stackType:a[38],stacked100:a[60],chartAreaHeight:a[30],colorPalette:a[57],echartsOptions:a[44],seriesOptions:a[45],printEchartsConfig:a[0],emptySet:a[46],emptyMessage:a[47],renderer:a[48],downloadableData:a[1],downloadableImage:a[2],connectGroup:a[50],seriesColors:a[55],leftPadding:a[52],rightPadding:a[53],xLabelWrap:a[54],$$slots:{default:[hi]},$$scope:{ctx:a}}}),{c(){E(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,r){H(e,t,r),i=!0},p(t,r){const s={};r[0]&8&&(s.data=t[3]),r[0]&16&&(s.x=t[4]),r[0]&32&&(s.y=t[5]),r[0]&2048&&(s.xFmt=t[11]),r[0]&1024&&(s.yFmt=t[10]),r[0]&64&&(s.series=t[6]),r[0]&128&&(s.xType=t[7]),r[0]&256&&(s.yLog=t[8]),r[0]&512&&(s.yLogBase=t[9]),r[0]&16384&&(s.legend=t[14]),r[0]&32768&&(s.xAxisTitle=t[15]),r[0]&65536&&(s.yAxisTitle=t[16]),r[0]&131072&&(s.xGridlines=t[17]),r[0]&262144&&(s.yGridlines=t[18]),r[0]&524288&&(s.xAxisLabels=t[19]),r[0]&1048576&&(s.yAxisLabels=t[20]),r[0]&2097152&&(s.xBaseline=t[21]),r[0]&4194304&&(s.yBaseline=t[22]),r[0]&8388608&&(s.xTickMarks=t[23]),r[0]&16777216&&(s.yTickMarks=t[24]),r[0]&33554432&&(s.yMin=t[25]),r[0]&67108864&&(s.yMax=t[26]),r[0]&134217728&&(s.yScale=t[27]),r[0]&4096&&(s.title=t[12]),r[0]&8192&&(s.subtitle=t[13]),r[1]&64&&(s.sort=t[37]),r[1]&128&&(s.stackType=t[38]),r[0]&1073741824&&(s.chartAreaHeight=t[30]),r[1]&67108864&&(s.colorPalette=t[57]),r[1]&8192&&(s.echartsOptions=t[44]),r[1]&16384&&(s.seriesOptions=t[45]),r[0]&1&&(s.printEchartsConfig=t[0]),r[1]&32768&&(s.emptySet=t[46]),r[1]&65536&&(s.emptyMessage=t[47]),r[1]&131072&&(s.renderer=t[48]),r[0]&2&&(s.downloadableData=t[1]),r[0]&4&&(s.downloadableImage=t[2]),r[1]&524288&&(s.connectGroup=t[50]),r[1]&16777216&&(s.seriesColors=t[55]),r[1]&2097152&&(s.leftPadding=t[52]),r[1]&4194304&&(s.rightPadding=t[53]),r[1]&8388608&&(s.xLabelWrap=t[54]),r[0]&805306368|r[1]&437526463|r[2]&32&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){w(e.$$.fragment,t),i=!1},d(t){F(e,t)}}}let vi="Area Chart";function Ci(a,e,i){let t,r,s,n,_,{$$slots:b={},$$scope:A}=e;const{resolveColor:L,resolveColorsObject:C,resolveColorPalette:S}=It();let{data:y=void 0}=e,{x:M=void 0}=e,{y:P=void 0}=e,{series:K=void 0}=e,{xType:f=void 0}=e,{yLog:v=void 0}=e,{yLogBase:se=void 0}=e,{yFmt:Y=void 0}=e,{xFmt:Te=void 0}=e,{title:ne=void 0}=e,{subtitle:we=void 0}=e,{legend:me=void 0}=e,{xAxisTitle:I=void 0}=e,{yAxisTitle:J=void 0}=e,{xGridlines:Ae=void 0}=e,{yGridlines:he=void 0}=e,{xAxisLabels:q=void 0}=e,{yAxisLabels:U=void 0}=e,{xBaseline:G=void 0}=e,{yBaseline:be=void 0}=e,{xTickMarks:ge=void 0}=e,{yTickMarks:V=void 0}=e,{yMin:Me=void 0}=e,{yMax:oe=void 0}=e,{yScale:z=void 0}=e,{line:j=void 0}=e,{fillColor:Z=void 0}=e,{lineColor:$=void 0}=e,{fillOpacity:ke=void 0}=e,{chartAreaHeight:Q=void 0}=e,{markers:ce=void 0}=e,{markerShape:ee=void 0}=e,{markerSize:W=void 0}=e,{handleMissing:D=void 0}=e,{step:de=void 0}=e,{stepPosition:p=void 0}=e,{sort:Se=void 0}=e,{type:ue="stacked"}=e,Ne=ue==="stacked100",{colorPalette:He="default"}=e,{labels:fe=void 0}=e,{labelSize:_e=void 0}=e,{labelPosition:Le=void 0}=e,{labelColor:qe=void 0}=e,{labelFmt:xe=void 0}=e,{showAllLabels:Ce=void 0}=e,{echartsOptions:u=void 0}=e,{seriesOptions:Be=void 0}=e,{printEchartsConfig:ye=!1}=e,{emptySet:ve=void 0}=e,{emptyMessage:Ie=void 0}=e,{renderer:Ge=void 0}=e,{downloadableData:ze=void 0}=e,{downloadableImage:pe=void 0}=e,{seriesColors:Ye=void 0}=e,{seriesOrder:Xe=void 0}=e,{connectGroup:Oe=void 0}=e,{seriesLabelFmt:$e=void 0}=e,{leftPadding:it=void 0}=e,{rightPadding:Ue=void 0}=e,{xLabelWrap:Ee=void 0}=e;return a.$$set=o=>{"data"in o&&i(3,y=o.data),"x"in o&&i(4,M=o.x),"y"in o&&i(5,P=o.y),"series"in o&&i(6,K=o.series),"xType"in o&&i(7,f=o.xType),"yLog"in o&&i(8,v=o.yLog),"yLogBase"in o&&i(9,se=o.yLogBase),"yFmt"in o&&i(10,Y=o.yFmt),"xFmt"in o&&i(11,Te=o.xFmt),"title"in o&&i(12,ne=o.title),"subtitle"in o&&i(13,we=o.subtitle),"legend"in o&&i(14,me=o.legend),"xAxisTitle"in o&&i(15,I=o.xAxisTitle),"yAxisTitle"in o&&i(16,J=o.yAxisTitle),"xGridlines"in o&&i(17,Ae=o.xGridlines),"yGridlines"in o&&i(18,he=o.yGridlines),"xAxisLabels"in o&&i(19,q=o.xAxisLabels),"yAxisLabels"in o&&i(20,U=o.yAxisLabels),"xBaseline"in o&&i(21,G=o.xBaseline),"yBaseline"in o&&i(22,be=o.yBaseline),"xTickMarks"in o&&i(23,ge=o.xTickMarks),"yTickMarks"in o&&i(24,V=o.yTickMarks),"yMin"in o&&i(25,Me=o.yMin),"yMax"in o&&i(26,oe=o.yMax),"yScale"in o&&i(27,z=o.yScale),"line"in o&&i(28,j=o.line),"fillColor"in o&&i(61,Z=o.fillColor),"lineColor"in o&&i(62,$=o.lineColor),"fillOpacity"in o&&i(29,ke=o.fillOpacity),"chartAreaHeight"in o&&i(30,Q=o.chartAreaHeight),"markers"in o&&i(31,ce=o.markers),"markerShape"in o&&i(32,ee=o.markerShape),"markerSize"in o&&i(33,W=o.markerSize),"handleMissing"in o&&i(34,D=o.handleMissing),"step"in o&&i(35,de=o.step),"stepPosition"in o&&i(36,p=o.stepPosition),"sort"in o&&i(37,Se=o.sort),"type"in o&&i(38,ue=o.type),"colorPalette"in o&&i(63,He=o.colorPalette),"labels"in o&&i(39,fe=o.labels),"labelSize"in o&&i(40,_e=o.labelSize),"labelPosition"in o&&i(41,Le=o.labelPosition),"labelColor"in o&&i(64,qe=o.labelColor),"labelFmt"in o&&i(42,xe=o.labelFmt),"showAllLabels"in o&&i(43,Ce=o.showAllLabels),"echartsOptions"in o&&i(44,u=o.echartsOptions),"seriesOptions"in o&&i(45,Be=o.seriesOptions),"printEchartsConfig"in o&&i(0,ye=o.printEchartsConfig),"emptySet"in o&&i(46,ve=o.emptySet),"emptyMessage"in o&&i(47,Ie=o.emptyMessage),"renderer"in o&&i(48,Ge=o.renderer),"downloadableData"in o&&i(1,ze=o.downloadableData),"downloadableImage"in o&&i(2,pe=o.downloadableImage),"seriesColors"in o&&i(65,Ye=o.seriesColors),"seriesOrder"in o&&i(49,Xe=o.seriesOrder),"connectGroup"in o&&i(50,Oe=o.connectGroup),"seriesLabelFmt"in o&&i(51,$e=o.seriesLabelFmt),"leftPadding"in o&&i(52,it=o.leftPadding),"rightPadding"in o&&i(53,Ue=o.rightPadding),"xLabelWrap"in o&&i(54,Ee=o.xLabelWrap),"$$scope"in o&&i(67,A=o.$$scope)},a.$$.update=()=>{a.$$.dirty[1]&1073741824&&i(59,t=L(Z)),a.$$.dirty[2]&1&&i(58,r=L($)),a.$$.dirty[2]&2&&i(57,s=S(He)),a.$$.dirty[2]&4&&i(56,n=L(qe)),a.$$.dirty[0]&1&&i(0,ye=ft(ye)),a.$$.dirty[0]&2&&i(1,ze=ft(ze)),a.$$.dirty[0]&4&&i(2,pe=ft(pe)),a.$$.dirty[2]&8&&i(55,_=C(Ye))},[ye,ze,pe,y,M,P,K,f,v,se,Y,Te,ne,we,me,I,J,Ae,he,q,U,G,be,ge,V,Me,oe,z,j,ke,Q,ce,ee,W,D,de,p,Se,ue,fe,_e,Le,xe,Ce,u,Be,ve,Ie,Ge,Xe,Oe,$e,it,Ue,Ee,_,n,s,r,t,Ne,Z,$,He,qe,Ye,b,A]}class Ti extends ut{constructor(e){super(),dt(this,e,Ci,ki,ct,{data:3,x:4,y:5,series:6,xType:7,yLog:8,yLogBase:9,yFmt:10,xFmt:11,title:12,subtitle:13,legend:14,xAxisTitle:15,yAxisTitle:16,xGridlines:17,yGridlines:18,xAxisLabels:19,yAxisLabels:20,xBaseline:21,yBaseline:22,xTickMarks:23,yTickMarks:24,yMin:25,yMax:26,yScale:27,line:28,fillColor:61,lineColor:62,fillOpacity:29,chartAreaHeight:30,markers:31,markerShape:32,markerSize:33,handleMissing:34,step:35,stepPosition:36,sort:37,type:38,colorPalette:63,labels:39,labelSize:40,labelPosition:41,labelColor:64,labelFmt:42,showAllLabels:43,echartsOptions:44,seriesOptions:45,printEchartsConfig:0,emptySet:46,emptyMessage:47,renderer:48,downloadableData:1,downloadableImage:2,seriesColors:65,seriesOrder:49,connectGroup:50,seriesLabelFmt:51,leftPadding:52,rightPadding:53,xLabelWrap:54},null,[-1,-1,-1])}}function Ai(a){let e,i=R.title+"",t;return{c(){e=B("h1"),t=Zt(i),this.h()},l(r){e=x(r,"H1",{class:!0});var s=Yt(e);t=Jt(s,i),s.forEach(c),this.h()},h(){T(e,"class","title")},m(r,s){d(r,e,s),et(e,t)},p:N,d(r){r&&c(e)}}}function Mi(a){return{c(){this.h()},l(e){this.h()},h(){document.title="Evidence"},m:N,p:N,d:N}}function Si(a){let e,i,t,r,s;return document.title=e=R.title,{c(){i=k(),t=B("meta"),r=k(),s=B("meta"),this.h()},l(n){i=h(n),t=x(n,"META",{property:!0,content:!0}),r=h(n),s=x(n,"META",{name:!0,content:!0}),this.h()},h(){var n,_;T(t,"property","og:title"),T(t,"content",((n=R.og)==null?void 0:n.title)??R.title),T(s,"name","twitter:title"),T(s,"content",((_=R.og)==null?void 0:_.title)??R.title)},m(n,_){d(n,i,_),d(n,t,_),d(n,r,_),d(n,s,_)},p(n,_){_&0&&e!==(e=R.title)&&(document.title=e)},d(n){n&&(c(i),c(t),c(r),c(s))}}}function Li(a){var s,n;let e,i,t=(R.description||((s=R.og)==null?void 0:s.description))&&pi(),r=((n=R.og)==null?void 0:n.image)&&Fi();return{c(){t&&t.c(),e=k(),r&&r.c(),i=tt()},l(_){t&&t.l(_),e=h(_),r&&r.l(_),i=tt()},m(_,b){t&&t.m(_,b),d(_,e,b),r&&r.m(_,b),d(_,i,b)},p(_,b){var A,L;(R.description||(A=R.og)!=null&&A.description)&&t.p(_,b),(L=R.og)!=null&&L.image&&r.p(_,b)},d(_){_&&(c(e),c(i)),t&&t.d(_),r&&r.d(_)}}}function pi(a){let e,i,t,r,s;return{c(){e=B("meta"),i=k(),t=B("meta"),r=k(),s=B("meta"),this.h()},l(n){e=x(n,"META",{name:!0,content:!0}),i=h(n),t=x(n,"META",{property:!0,content:!0}),r=h(n),s=x(n,"META",{name:!0,content:!0}),this.h()},h(){var n,_,b;T(e,"name","description"),T(e,"content",R.description??((n=R.og)==null?void 0:n.description)),T(t,"property","og:description"),T(t,"content",((_=R.og)==null?void 0:_.description)??R.description),T(s,"name","twitter:description"),T(s,"content",((b=R.og)==null?void 0:b.description)??R.description)},m(n,_){d(n,e,_),d(n,i,_),d(n,t,_),d(n,r,_),d(n,s,_)},p:N,d(n){n&&(c(e),c(i),c(t),c(r),c(s))}}}function Fi(a){let e,i,t;return{c(){e=B("meta"),i=k(),t=B("meta"),this.h()},l(r){e=x(r,"META",{property:!0,content:!0}),i=h(r),t=x(r,"META",{name:!0,content:!0}),this.h()},h(){var r,s;T(e,"property","og:image"),T(e,"content",Ht((r=R.og)==null?void 0:r.image)),T(t,"name","twitter:image"),T(t,"content",Ht((s=R.og)==null?void 0:s.image))},m(r,s){d(r,e,s),d(r,i,s),d(r,t,s)},p:N,d(r){r&&(c(e),c(i),c(t))}}}function Pt(a){let e,i;return e=new Ze({props:{queryID:"alertas_recentes",queryResult:a[0]}}),{c(){E(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,r){H(e,t,r),i=!0},p(t,r){const s={};r[0]&1&&(s.queryResult=t[0]),e.$set(s)},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){w(e.$$.fragment,t),i=!1},d(t){F(e,t)}}}function qt(a){let e,i;return e=new Ze({props:{queryID:"contagem_por_tipo",queryResult:a[1]}}),{c(){E(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,r){H(e,t,r),i=!0},p(t,r){const s={};r[0]&2&&(s.queryResult=t[1]),e.$set(s)},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){w(e.$$.fragment,t),i=!1},d(t){F(e,t)}}}function Rt(a){let e,i;return e=new Ze({props:{queryID:"contagem_por_severidade",queryResult:a[2]}}),{c(){E(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,r){H(e,t,r),i=!0},p(t,r){const s={};r[0]&4&&(s.queryResult=t[2]),e.$set(s)},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){w(e.$$.fragment,t),i=!1},d(t){F(e,t)}}}function Dt(a){let e,i;return e=new Ze({props:{queryID:"historico_alertas_diario",queryResult:a[3]}}),{c(){E(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,r){H(e,t,r),i=!0},p(t,r){const s={};r[0]&8&&(s.queryResult=t[3]),e.$set(s)},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){w(e.$$.fragment,t),i=!1},d(t){F(e,t)}}}function xt(a){let e,i;return e=new Ze({props:{queryID:"cidades_mais_alertas",queryResult:a[4]}}),{c(){E(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,r){H(e,t,r),i=!0},p(t,r){const s={};r[0]&16&&(s.queryResult=t[4]),e.$set(s)},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){w(e.$$.fragment,t),i=!1},d(t){F(e,t)}}}function Bt(a){let e,i;return e=new Ze({props:{queryID:"alertas_criticos",queryResult:a[5]}}),{c(){E(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,r){H(e,t,r),i=!0},p(t,r){const s={};r[0]&32&&(s.queryResult=t[5]),e.$set(s)},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){w(e.$$.fragment,t),i=!1},d(t){F(e,t)}}}function Hi(a){let e,i='<p class="markdown">Nenhum alerta nos últimos 60 dias.</p>';return{c(){e=B("blockquote"),e.innerHTML=i,this.h()},l(t){e=x(t,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),Fe(e)!=="svelte-1mypk2m"&&(e.innerHTML=i),this.h()},h(){T(e,"class","markdown")},m(t,r){d(t,e,r)},p:N,i:N,o:N,d(t){t&&c(e)}}}function Oi(a){let e,i;return e=new Ti({props:{data:a[3],x:"date",y:["criticos","altos","total_alertas"],yAxisTitle:"Número de alertas",title:"Alertas por dia (últimos 60 dias)",xFmt:"dd/MM/yyyy"}}),{c(){E(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,r){H(e,t,r),i=!0},p(t,r){const s={};r[0]&8&&(s.data=t[3]),e.$set(s)},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){w(e.$$.fragment,t),i=!1},d(t){F(e,t)}}}function Ei(a){let e,i='<p class="markdown">Nenhum alerta por tipo nos últimos 30 dias.</p>';return{c(){e=B("blockquote"),e.innerHTML=i,this.h()},l(t){e=x(t,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),Fe(e)!=="svelte-12duc0i"&&(e.innerHTML=i),this.h()},h(){T(e,"class","markdown")},m(t,r){d(t,e,r)},p:N,i:N,o:N,d(t){t&&c(e)}}}function Pi(a){let e,i;return e=new bi({props:{data:a[1],x:"tipo_alerta",y:["criticos","altos","medios","baixos"],yAxisTitle:"Ocorrências",title:"Breakdown por severidade dentro de cada tipo",type:"stacked"}}),{c(){E(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,r){H(e,t,r),i=!0},p(t,r){const s={};r[0]&2&&(s.data=t[1]),e.$set(s)},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){w(e.$$.fragment,t),i=!1},d(t){F(e,t)}}}function qi(a){let e,i='<p class="markdown">Nenhuma cidade com alertas nos últimos 30 dias.</p>';return{c(){e=B("blockquote"),e.innerHTML=i,this.h()},l(t){e=x(t,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),Fe(e)!=="svelte-1dvag4m"&&(e.innerHTML=i),this.h()},h(){T(e,"class","markdown")},m(t,r){d(t,e,r)},p:N,i:N,o:N,d(t){t&&c(e)}}}function Ri(a){let e,i;return e=new yt({props:{data:a[4],$$slots:{default:[Di]},$$scope:{ctx:a}}}),{c(){E(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,r){H(e,t,r),i=!0},p(t,r){const s={};r[0]&16&&(s.data=t[4]),r[1]&131072&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){w(e.$$.fragment,t),i=!1},d(t){F(e,t)}}}function Di(a){let e,i,t,r,s,n,_,b,A,L,C,S;return e=new X({props:{id:"city_name",title:"Cidade"}}),t=new X({props:{id:"state_name",title:"UF"}}),s=new X({props:{id:"region",title:"Região"}}),_=new X({props:{id:"total_alertas",title:"Total"}}),A=new X({props:{id:"criticos",title:"Críticos",contentType:"colorscale"}}),C=new X({props:{id:"tipos_detectados",title:"Tipos Detectados"}}),{c(){E(e.$$.fragment),i=k(),E(t.$$.fragment),r=k(),E(s.$$.fragment),n=k(),E(_.$$.fragment),b=k(),E(A.$$.fragment),L=k(),E(C.$$.fragment)},l(y){O(e.$$.fragment,y),i=h(y),O(t.$$.fragment,y),r=h(y),O(s.$$.fragment,y),n=h(y),O(_.$$.fragment,y),b=h(y),O(A.$$.fragment,y),L=h(y),O(C.$$.fragment,y)},m(y,M){H(e,y,M),d(y,i,M),H(t,y,M),d(y,r,M),H(s,y,M),d(y,n,M),H(_,y,M),d(y,b,M),H(A,y,M),d(y,L,M),H(C,y,M),S=!0},p:N,i(y){S||(g(e.$$.fragment,y),g(t.$$.fragment,y),g(s.$$.fragment,y),g(_.$$.fragment,y),g(A.$$.fragment,y),g(C.$$.fragment,y),S=!0)},o(y){w(e.$$.fragment,y),w(t.$$.fragment,y),w(s.$$.fragment,y),w(_.$$.fragment,y),w(A.$$.fragment,y),w(C.$$.fragment,y),S=!1},d(y){y&&(c(i),c(r),c(n),c(b),c(L)),F(e,y),F(t,y),F(s,y),F(_,y),F(A,y),F(C,y)}}}function xi(a){let e,i='<p class="markdown">Nenhum alerta crítico nos últimos 30 dias.</p>';return{c(){e=B("blockquote"),e.innerHTML=i,this.h()},l(t){e=x(t,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),Fe(e)!=="svelte-dufugs"&&(e.innerHTML=i),this.h()},h(){T(e,"class","markdown")},m(t,r){d(t,e,r)},p:N,i:N,o:N,d(t){t&&c(e)}}}function Bi(a){let e,i;return e=new yt({props:{data:a[5],rows:"20",$$slots:{default:[Ii]},$$scope:{ctx:a}}}),{c(){E(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,r){H(e,t,r),i=!0},p(t,r){const s={};r[0]&32&&(s.data=t[5]),r[1]&131072&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){w(e.$$.fragment,t),i=!1},d(t){F(e,t)}}}function Ii(a){let e,i,t,r,s,n,_,b,A,L,C,S,y,M,P,K;return e=new X({props:{id:"date",title:"Data",fmt:"dd/MM/yyyy"}}),t=new X({props:{id:"city_name",title:"Cidade"}}),s=new X({props:{id:"state_name",title:"Estado"}}),_=new X({props:{id:"alert_type",title:"Tipo de Alerta"}}),A=new X({props:{id:"temp_max_c",title:"Temp. Máx (°C)",fmt:"0.0"}}),C=new X({props:{id:"precipitation_mm",title:"Precip. (mm)",fmt:"0.0"}}),y=new X({props:{id:"wind_speed_max_kmh",title:"Vento (km/h)",fmt:"0.0"}}),P=new X({props:{id:"uv_index_max",title:"UV Máx",fmt:"0.0"}}),{c(){E(e.$$.fragment),i=k(),E(t.$$.fragment),r=k(),E(s.$$.fragment),n=k(),E(_.$$.fragment),b=k(),E(A.$$.fragment),L=k(),E(C.$$.fragment),S=k(),E(y.$$.fragment),M=k(),E(P.$$.fragment)},l(f){O(e.$$.fragment,f),i=h(f),O(t.$$.fragment,f),r=h(f),O(s.$$.fragment,f),n=h(f),O(_.$$.fragment,f),b=h(f),O(A.$$.fragment,f),L=h(f),O(C.$$.fragment,f),S=h(f),O(y.$$.fragment,f),M=h(f),O(P.$$.fragment,f)},m(f,v){H(e,f,v),d(f,i,v),H(t,f,v),d(f,r,v),H(s,f,v),d(f,n,v),H(_,f,v),d(f,b,v),H(A,f,v),d(f,L,v),H(C,f,v),d(f,S,v),H(y,f,v),d(f,M,v),H(P,f,v),K=!0},p:N,i(f){K||(g(e.$$.fragment,f),g(t.$$.fragment,f),g(s.$$.fragment,f),g(_.$$.fragment,f),g(A.$$.fragment,f),g(C.$$.fragment,f),g(y.$$.fragment,f),g(P.$$.fragment,f),K=!0)},o(f){w(e.$$.fragment,f),w(t.$$.fragment,f),w(s.$$.fragment,f),w(_.$$.fragment,f),w(A.$$.fragment,f),w(C.$$.fragment,f),w(y.$$.fragment,f),w(P.$$.fragment,f),K=!1},d(f){f&&(c(i),c(r),c(n),c(b),c(L),c(S),c(M)),F(e,f),F(t,f),F(s,f),F(_,f),F(A,f),F(C,f),F(y,f),F(P,f)}}}function zi(a){let e,i='<p class="markdown">Nenhum alerta recente nos últimos 30 dias.</p>';return{c(){e=B("blockquote"),e.innerHTML=i,this.h()},l(t){e=x(t,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),Fe(e)!=="svelte-lbprst"&&(e.innerHTML=i),this.h()},h(){T(e,"class","markdown")},m(t,r){d(t,e,r)},p:N,i:N,o:N,d(t){t&&c(e)}}}function Ni(a){let e,i;return e=new yt({props:{data:a[0],rows:"30",search:"true",$$slots:{default:[Gi]},$$scope:{ctx:a}}}),{c(){E(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,r){H(e,t,r),i=!0},p(t,r){const s={};r[0]&1&&(s.data=t[0]),r[1]&131072&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){w(e.$$.fragment,t),i=!1},d(t){F(e,t)}}}function Gi(a){let e,i,t,r,s,n,_,b,A,L,C,S,y,M,P,K;return e=new X({props:{id:"date",title:"Data",fmt:"dd/MM/yyyy"}}),t=new X({props:{id:"city_name",title:"Cidade"}}),s=new X({props:{id:"region",title:"Região"}}),_=new X({props:{id:"alert_type",title:"Tipo"}}),A=new X({props:{id:"severity",title:"Severidade",contentType:"colorscale"}}),C=new X({props:{id:"temp_max_c",title:"Temp. Máx",fmt:"0.0"}}),y=new X({props:{id:"precipitation_mm",title:"Precip.",fmt:"0.0mm"}}),P=new X({props:{id:"wind_speed_max_kmh",title:"Vento",fmt:"0.0 km/h"}}),{c(){E(e.$$.fragment),i=k(),E(t.$$.fragment),r=k(),E(s.$$.fragment),n=k(),E(_.$$.fragment),b=k(),E(A.$$.fragment),L=k(),E(C.$$.fragment),S=k(),E(y.$$.fragment),M=k(),E(P.$$.fragment)},l(f){O(e.$$.fragment,f),i=h(f),O(t.$$.fragment,f),r=h(f),O(s.$$.fragment,f),n=h(f),O(_.$$.fragment,f),b=h(f),O(A.$$.fragment,f),L=h(f),O(C.$$.fragment,f),S=h(f),O(y.$$.fragment,f),M=h(f),O(P.$$.fragment,f)},m(f,v){H(e,f,v),d(f,i,v),H(t,f,v),d(f,r,v),H(s,f,v),d(f,n,v),H(_,f,v),d(f,b,v),H(A,f,v),d(f,L,v),H(C,f,v),d(f,S,v),H(y,f,v),d(f,M,v),H(P,f,v),K=!0},p:N,i(f){K||(g(e.$$.fragment,f),g(t.$$.fragment,f),g(s.$$.fragment,f),g(_.$$.fragment,f),g(A.$$.fragment,f),g(C.$$.fragment,f),g(y.$$.fragment,f),g(P.$$.fragment,f),K=!0)},o(f){w(e.$$.fragment,f),w(t.$$.fragment,f),w(s.$$.fragment,f),w(_.$$.fragment,f),w(A.$$.fragment,f),w(C.$$.fragment,f),w(y.$$.fragment,f),w(P.$$.fragment,f),K=!1},d(f){f&&(c(i),c(r),c(n),c(b),c(L),c(S),c(M)),F(e,f),F(t,f),F(s,f),F(_,f),F(A,f),F(C,f),F(y,f),F(P,f)}}}function Ui(a){let e,i,t,r,s,n,_,b,A,L,C,S,y='<a href="#alertas-climáticos">Alertas Climáticos</a>',M,P,K='Eventos climáticos extremos detectados nos <strong class="markdown">últimos 30 dias</strong>.',f,v,se,Y,Te,ne,we,me,I,J,Ae='<a href="#evolução-diária-de-alertas">Evolução Diária de Alertas</a>',he,q,U,G,be,ge,V,Me='<a href="#alertas-por-tipo">Alertas por Tipo</a>',oe,z,j,Z,$,ke,Q,ce='<a href="#cidades-com-mais-alertas">Cidades com Mais Alertas</a>',ee,W,D,de,p,Se,ue,Ne='<a href="#alertas-críticos--detalhes">Alertas Críticos — Detalhes</a>',He,fe,_e,Le,qe,xe,Ce,u='<a href="#todos-os-alertas-recentes">Todos os Alertas Recentes</a>',Be,ye,ve,Ie,Ge,ze,pe,Ye='<strong class="markdown">Navegação:</strong> <a href="/Analytics-Engineer/Weather-Analytics/" class="markdown">Início</a> · <a href="/Analytics-Engineer/Weather-Analytics/temperatura" class="markdown">Temperatura</a> · <a href="/Analytics-Engineer/Weather-Analytics/precipitacao" class="markdown">Precipitação</a>',Xe,Oe=typeof R<"u"&&R.title&&R.hide_title!==!0&&Ai();function $e(l,m){return typeof R<"u"&&R.title?Si:Mi}let Ue=$e()(a),Ee=typeof R=="object"&&Li(),o=a[0]&&Pt(a),te=a[1]&&qt(a),ie=a[2]&&Rt(a),ae=a[3]&&Dt(a),le=a[4]&&xt(a),re=a[5]&&Bt(a);v=new _t({props:{data:a[2],value:"total",title:"Alertas Críticos",filter:"severidade = 'critical'"}}),Y=new _t({props:{data:a[2],value:"total",title:"Alertas Altos",filter:"severidade = 'high'"}}),ne=new _t({props:{data:a[2],value:"total",title:"Alertas Médios",filter:"severidade = 'medium'"}});const bt=[Oi,Hi],je=[];function gt(l,m){return l[3].length>0?0:1}q=gt(a),U=je[q]=bt[q](a);const wt=[Pi,Ei],Qe=[];function ht(l,m){return l[1].length>0?0:1}z=ht(a),j=Qe[z]=wt[z](a);const kt=[Ri,qi],Ke=[];function vt(l,m){return l[4].length>0?0:1}W=vt(a),D=Ke[W]=kt[W](a);const Ct=[Bi,xi],We=[];function Tt(l,m){return l[5].length>0?0:1}fe=Tt(a),_e=We[fe]=Ct[fe](a);const At=[Ni,zi],Ve=[];function Mt(l,m){return l[0].length>0?0:1}return ye=Mt(a),ve=Ve[ye]=At[ye](a),{c(){Oe&&Oe.c(),e=k(),Ue.c(),i=B("meta"),t=B("meta"),Ee&&Ee.c(),r=tt(),s=k(),o&&o.c(),n=k(),te&&te.c(),_=k(),ie&&ie.c(),b=k(),ae&&ae.c(),A=k(),le&&le.c(),L=k(),re&&re.c(),C=k(),S=B("h1"),S.innerHTML=y,M=k(),P=B("p"),P.innerHTML=K,f=k(),E(v.$$.fragment),se=k(),E(Y.$$.fragment),Te=k(),E(ne.$$.fragment),we=k(),me=B("hr"),I=k(),J=B("h2"),J.innerHTML=Ae,he=k(),U.c(),G=k(),be=B("hr"),ge=k(),V=B("h2"),V.innerHTML=Me,oe=k(),j.c(),Z=k(),$=B("hr"),ke=k(),Q=B("h2"),Q.innerHTML=ce,ee=k(),D.c(),de=k(),p=B("hr"),Se=k(),ue=B("h2"),ue.innerHTML=Ne,He=k(),_e.c(),Le=k(),qe=B("hr"),xe=k(),Ce=B("h2"),Ce.innerHTML=u,Be=k(),ve.c(),Ie=k(),Ge=B("hr"),ze=k(),pe=B("p"),pe.innerHTML=Ye,this.h()},l(l){Oe&&Oe.l(l),e=h(l);const m=Qt("svelte-2igo1p",document.head);Ue.l(m),i=x(m,"META",{name:!0,content:!0}),t=x(m,"META",{name:!0,content:!0}),Ee&&Ee.l(m),r=tt(),m.forEach(c),s=h(l),o&&o.l(l),n=h(l),te&&te.l(l),_=h(l),ie&&ie.l(l),b=h(l),ae&&ae.l(l),A=h(l),le&&le.l(l),L=h(l),re&&re.l(l),C=h(l),S=x(l,"H1",{class:!0,id:!0,"data-svelte-h":!0}),Fe(S)!=="svelte-u08y0c"&&(S.innerHTML=y),M=h(l),P=x(l,"P",{class:!0,"data-svelte-h":!0}),Fe(P)!=="svelte-iwq7vm"&&(P.innerHTML=K),f=h(l),O(v.$$.fragment,l),se=h(l),O(Y.$$.fragment,l),Te=h(l),O(ne.$$.fragment,l),we=h(l),me=x(l,"HR",{class:!0}),I=h(l),J=x(l,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Fe(J)!=="svelte-19em2zf"&&(J.innerHTML=Ae),he=h(l),U.l(l),G=h(l),be=x(l,"HR",{class:!0}),ge=h(l),V=x(l,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Fe(V)!=="svelte-k4lt3h"&&(V.innerHTML=Me),oe=h(l),j.l(l),Z=h(l),$=x(l,"HR",{class:!0}),ke=h(l),Q=x(l,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Fe(Q)!=="svelte-ezpb4w"&&(Q.innerHTML=ce),ee=h(l),D.l(l),de=h(l),p=x(l,"HR",{class:!0}),Se=h(l),ue=x(l,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Fe(ue)!=="svelte-3pia6g"&&(ue.innerHTML=Ne),He=h(l),_e.l(l),Le=h(l),qe=x(l,"HR",{class:!0}),xe=h(l),Ce=x(l,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Fe(Ce)!=="svelte-106z7oc"&&(Ce.innerHTML=u),Be=h(l),ve.l(l),Ie=h(l),Ge=x(l,"HR",{class:!0}),ze=h(l),pe=x(l,"P",{class:!0,"data-svelte-h":!0}),Fe(pe)!=="svelte-4lcli2"&&(pe.innerHTML=Ye),this.h()},h(){T(i,"name","twitter:card"),T(i,"content","summary_large_image"),T(t,"name","twitter:site"),T(t,"content","@evidence_dev"),T(S,"class","markdown"),T(S,"id","alertas-climáticos"),T(P,"class","markdown"),T(me,"class","markdown"),T(J,"class","markdown"),T(J,"id","evolução-diária-de-alertas"),T(be,"class","markdown"),T(V,"class","markdown"),T(V,"id","alertas-por-tipo"),T($,"class","markdown"),T(Q,"class","markdown"),T(Q,"id","cidades-com-mais-alertas"),T(p,"class","markdown"),T(ue,"class","markdown"),T(ue,"id","alertas-críticos--detalhes"),T(qe,"class","markdown"),T(Ce,"class","markdown"),T(Ce,"id","todos-os-alertas-recentes"),T(Ge,"class","markdown"),T(pe,"class","markdown")},m(l,m){Oe&&Oe.m(l,m),d(l,e,m),Ue.m(document.head,null),et(document.head,i),et(document.head,t),Ee&&Ee.m(document.head,null),et(document.head,r),d(l,s,m),o&&o.m(l,m),d(l,n,m),te&&te.m(l,m),d(l,_,m),ie&&ie.m(l,m),d(l,b,m),ae&&ae.m(l,m),d(l,A,m),le&&le.m(l,m),d(l,L,m),re&&re.m(l,m),d(l,C,m),d(l,S,m),d(l,M,m),d(l,P,m),d(l,f,m),H(v,l,m),d(l,se,m),H(Y,l,m),d(l,Te,m),H(ne,l,m),d(l,we,m),d(l,me,m),d(l,I,m),d(l,J,m),d(l,he,m),je[q].m(l,m),d(l,G,m),d(l,be,m),d(l,ge,m),d(l,V,m),d(l,oe,m),Qe[z].m(l,m),d(l,Z,m),d(l,$,m),d(l,ke,m),d(l,Q,m),d(l,ee,m),Ke[W].m(l,m),d(l,de,m),d(l,p,m),d(l,Se,m),d(l,ue,m),d(l,He,m),We[fe].m(l,m),d(l,Le,m),d(l,qe,m),d(l,xe,m),d(l,Ce,m),d(l,Be,m),Ve[ye].m(l,m),d(l,Ie,m),d(l,Ge,m),d(l,ze,m),d(l,pe,m),Xe=!0},p(l,m){typeof R<"u"&&R.title&&R.hide_title!==!0&&Oe.p(l,m),Ue.p(l,m),typeof R=="object"&&Ee.p(l,m),l[0]?o?(o.p(l,m),m[0]&1&&g(o,1)):(o=Pt(l),o.c(),g(o,1),o.m(n.parentNode,n)):o&&(De(),w(o,1,1,()=>{o=null}),Re()),l[1]?te?(te.p(l,m),m[0]&2&&g(te,1)):(te=qt(l),te.c(),g(te,1),te.m(_.parentNode,_)):te&&(De(),w(te,1,1,()=>{te=null}),Re()),l[2]?ie?(ie.p(l,m),m[0]&4&&g(ie,1)):(ie=Rt(l),ie.c(),g(ie,1),ie.m(b.parentNode,b)):ie&&(De(),w(ie,1,1,()=>{ie=null}),Re()),l[3]?ae?(ae.p(l,m),m[0]&8&&g(ae,1)):(ae=Dt(l),ae.c(),g(ae,1),ae.m(A.parentNode,A)):ae&&(De(),w(ae,1,1,()=>{ae=null}),Re()),l[4]?le?(le.p(l,m),m[0]&16&&g(le,1)):(le=xt(l),le.c(),g(le,1),le.m(L.parentNode,L)):le&&(De(),w(le,1,1,()=>{le=null}),Re()),l[5]?re?(re.p(l,m),m[0]&32&&g(re,1)):(re=Bt(l),re.c(),g(re,1),re.m(C.parentNode,C)):re&&(De(),w(re,1,1,()=>{re=null}),Re());const St={};m[0]&4&&(St.data=l[2]),v.$set(St);const Lt={};m[0]&4&&(Lt.data=l[2]),Y.$set(Lt);const pt={};m[0]&4&&(pt.data=l[2]),ne.$set(pt);let at=q;q=gt(l),q===at?je[q].p(l,m):(De(),w(je[at],1,1,()=>{je[at]=null}),Re(),U=je[q],U?U.p(l,m):(U=je[q]=bt[q](l),U.c()),g(U,1),U.m(G.parentNode,G));let lt=z;z=ht(l),z===lt?Qe[z].p(l,m):(De(),w(Qe[lt],1,1,()=>{Qe[lt]=null}),Re(),j=Qe[z],j?j.p(l,m):(j=Qe[z]=wt[z](l),j.c()),g(j,1),j.m(Z.parentNode,Z));let rt=W;W=vt(l),W===rt?Ke[W].p(l,m):(De(),w(Ke[rt],1,1,()=>{Ke[rt]=null}),Re(),D=Ke[W],D?D.p(l,m):(D=Ke[W]=kt[W](l),D.c()),g(D,1),D.m(de.parentNode,de));let st=fe;fe=Tt(l),fe===st?We[fe].p(l,m):(De(),w(We[st],1,1,()=>{We[st]=null}),Re(),_e=We[fe],_e?_e.p(l,m):(_e=We[fe]=Ct[fe](l),_e.c()),g(_e,1),_e.m(Le.parentNode,Le));let nt=ye;ye=Mt(l),ye===nt?Ve[ye].p(l,m):(De(),w(Ve[nt],1,1,()=>{Ve[nt]=null}),Re(),ve=Ve[ye],ve?ve.p(l,m):(ve=Ve[ye]=At[ye](l),ve.c()),g(ve,1),ve.m(Ie.parentNode,Ie))},i(l){Xe||(g(o),g(te),g(ie),g(ae),g(le),g(re),g(v.$$.fragment,l),g(Y.$$.fragment,l),g(ne.$$.fragment,l),g(U),g(j),g(D),g(_e),g(ve),Xe=!0)},o(l){w(o),w(te),w(ie),w(ae),w(le),w(re),w(v.$$.fragment,l),w(Y.$$.fragment,l),w(ne.$$.fragment,l),w(U),w(j),w(D),w(_e),w(ve),Xe=!1},d(l){l&&(c(e),c(s),c(n),c(_),c(b),c(A),c(L),c(C),c(S),c(M),c(P),c(f),c(se),c(Te),c(we),c(me),c(I),c(J),c(he),c(G),c(be),c(ge),c(V),c(oe),c(Z),c($),c(ke),c(Q),c(ee),c(de),c(p),c(Se),c(ue),c(He),c(Le),c(qe),c(xe),c(Ce),c(Be),c(Ie),c(Ge),c(ze),c(pe)),Oe&&Oe.d(l),Ue.d(l),c(i),c(t),Ee&&Ee.d(l),c(r),o&&o.d(l),te&&te.d(l),ie&&ie.d(l),ae&&ae.d(l),le&&le.d(l),re&&re.d(l),F(v,l),F(Y,l),F(ne,l),je[q].d(l),Qe[z].d(l),Ke[W].d(l),We[fe].d(l),Ve[ye].d(l)}}}const R={title:"Alertas Climáticos"};function ji(a,e,i){let t,r;mt(a,mi,p=>i(32,t=p)),mt(a,Ot,p=>i(38,r=p));let{data:s}=e,{data:n={},customFormattingSettings:_,__db:b,inputs:A}=s;Kt(Ot,r="f26cd63c731a3d6ccf921a3dadb2a75e",r);let L=ri(fi(A));Wt(L.subscribe(p=>A=p)),Vt(oi,{getCustomFormats:()=>_.customFormats||[]});const C=(p,Se)=>_i(b.query,p,{query_name:Se});si(C),t.params,Xt(()=>!0);let S={initialData:void 0,initialError:void 0},y=Pe`select
  date,
  city_name,
  state_name,
  region,
  alert_type,
  severity,
  temp_max_c,
  temp_min_c,
  temp_anomaly_c,
  precipitation_mm,
  wind_speed_max_kmh,
  uv_index_max
from weather_dw.mart_climate__alerts
where date >= current_date - interval '30 days'
order by date desc, severity desc`,M=`select
  date,
  city_name,
  state_name,
  region,
  alert_type,
  severity,
  temp_max_c,
  temp_min_c,
  temp_anomaly_c,
  precipitation_mm,
  wind_speed_max_kmh,
  uv_index_max
from weather_dw.mart_climate__alerts
where date >= current_date - interval '30 days'
order by date desc, severity desc`;n.alertas_recentes_data&&(n.alertas_recentes_data instanceof Error?S.initialError=n.alertas_recentes_data:S.initialData=n.alertas_recentes_data,n.alertas_recentes_columns&&(S.knownColumns=n.alertas_recentes_columns));let P,K=!1;const f=Je.createReactive({callback:p=>{i(0,P=p)},execFn:C},{id:"alertas_recentes",...S});f(M,{noResolve:y,...S}),globalThis[Symbol.for("alertas_recentes")]={get value(){return P}};let v={initialData:void 0,initialError:void 0},se=Pe`select
  alert_type                                        as tipo_alerta,
  count(*)                                          as total,
  count(*) filter (where severity = 'critical')                    as criticos,
  count(*) filter (where severity = 'high')                        as altos,
  count(*) filter (where severity = 'medium')                      as medios,
  count(*) filter (where severity = 'low')                         as baixos
from weather_dw.mart_climate__alerts
where date >= current_date - interval '30 days'
group by alert_type
order by total desc`,Y=`select
  alert_type                                        as tipo_alerta,
  count(*)                                          as total,
  count(*) filter (where severity = 'critical')                    as criticos,
  count(*) filter (where severity = 'high')                        as altos,
  count(*) filter (where severity = 'medium')                      as medios,
  count(*) filter (where severity = 'low')                         as baixos
from weather_dw.mart_climate__alerts
where date >= current_date - interval '30 days'
group by alert_type
order by total desc`;n.contagem_por_tipo_data&&(n.contagem_por_tipo_data instanceof Error?v.initialError=n.contagem_por_tipo_data:v.initialData=n.contagem_por_tipo_data,n.contagem_por_tipo_columns&&(v.knownColumns=n.contagem_por_tipo_columns));let Te,ne=!1;const we=Je.createReactive({callback:p=>{i(1,Te=p)},execFn:C},{id:"contagem_por_tipo",...v});we(Y,{noResolve:se,...v}),globalThis[Symbol.for("contagem_por_tipo")]={get value(){return Te}};let me={initialData:void 0,initialError:void 0},I=Pe`with severidades as (
  select 'critical' as severidade, 1 as ord union all
  select 'high',   2 union all
  select 'medium', 3 union all
  select 'low',    4
),
atual as (
  select severity as severidade, count(*) as total
  from weather_dw.mart_climate__alerts
  where date >= current_date - interval '30 days'
    and alert_type != '__no_alerts__'
  group by severity
)
select s.severidade, coalesce(a.total, 0) as total
from severidades s
left join atual a on s.severidade = a.severidade
order by s.ord`,J=`with severidades as (
  select 'critical' as severidade, 1 as ord union all
  select 'high',   2 union all
  select 'medium', 3 union all
  select 'low',    4
),
atual as (
  select severity as severidade, count(*) as total
  from weather_dw.mart_climate__alerts
  where date >= current_date - interval '30 days'
    and alert_type != '__no_alerts__'
  group by severity
)
select s.severidade, coalesce(a.total, 0) as total
from severidades s
left join atual a on s.severidade = a.severidade
order by s.ord`;n.contagem_por_severidade_data&&(n.contagem_por_severidade_data instanceof Error?me.initialError=n.contagem_por_severidade_data:me.initialData=n.contagem_por_severidade_data,n.contagem_por_severidade_columns&&(me.knownColumns=n.contagem_por_severidade_columns));let Ae,he=!1;const q=Je.createReactive({callback:p=>{i(2,Ae=p)},execFn:C},{id:"contagem_por_severidade",...me});q(J,{noResolve:I,...me}),globalThis[Symbol.for("contagem_por_severidade")]={get value(){return Ae}};let U={initialData:void 0,initialError:void 0},G=Pe`select
  date,
  count(*)                                          as total_alertas,
  count(*) filter (where severity = 'critical')                    as criticos,
  count(*) filter (where severity = 'high')                        as altos
from weather_dw.mart_climate__alerts
where date >= current_date - interval '60 days'
group by date
order by date`,be=`select
  date,
  count(*)                                          as total_alertas,
  count(*) filter (where severity = 'critical')                    as criticos,
  count(*) filter (where severity = 'high')                        as altos
from weather_dw.mart_climate__alerts
where date >= current_date - interval '60 days'
group by date
order by date`;n.historico_alertas_diario_data&&(n.historico_alertas_diario_data instanceof Error?U.initialError=n.historico_alertas_diario_data:U.initialData=n.historico_alertas_diario_data,n.historico_alertas_diario_columns&&(U.knownColumns=n.historico_alertas_diario_columns));let ge,V=!1;const Me=Je.createReactive({callback:p=>{i(3,ge=p)},execFn:C},{id:"historico_alertas_diario",...U});Me(be,{noResolve:G,...U}),globalThis[Symbol.for("historico_alertas_diario")]={get value(){return ge}};let oe={initialData:void 0,initialError:void 0},z=Pe`select
  city_name,
  state_name,
  region,
  count(*)                                          as total_alertas,
  count(*) filter (where severity = 'critical')                    as criticos,
  string_agg(distinct alert_type, ', ')             as tipos_detectados
from weather_dw.mart_climate__alerts
where date >= current_date - interval '30 days'
group by city_name, state_name, region
order by total_alertas desc
limit 15`,j=`select
  city_name,
  state_name,
  region,
  count(*)                                          as total_alertas,
  count(*) filter (where severity = 'critical')                    as criticos,
  string_agg(distinct alert_type, ', ')             as tipos_detectados
from weather_dw.mart_climate__alerts
where date >= current_date - interval '30 days'
group by city_name, state_name, region
order by total_alertas desc
limit 15`;n.cidades_mais_alertas_data&&(n.cidades_mais_alertas_data instanceof Error?oe.initialError=n.cidades_mais_alertas_data:oe.initialData=n.cidades_mais_alertas_data,n.cidades_mais_alertas_columns&&(oe.knownColumns=n.cidades_mais_alertas_columns));let Z,$=!1;const ke=Je.createReactive({callback:p=>{i(4,Z=p)},execFn:C},{id:"cidades_mais_alertas",...oe});ke(j,{noResolve:z,...oe}),globalThis[Symbol.for("cidades_mais_alertas")]={get value(){return Z}};let Q={initialData:void 0,initialError:void 0},ce=Pe`select
  date,
  city_name,
  state_name,
  alert_type,
  temp_max_c,
  precipitation_mm,
  wind_speed_max_kmh,
  uv_index_max
from weather_dw.mart_climate__alerts
where severity = 'critical'
  and date >= current_date - interval '30 days'
order by date desc`,ee=`select
  date,
  city_name,
  state_name,
  alert_type,
  temp_max_c,
  precipitation_mm,
  wind_speed_max_kmh,
  uv_index_max
from weather_dw.mart_climate__alerts
where severity = 'critical'
  and date >= current_date - interval '30 days'
order by date desc`;n.alertas_criticos_data&&(n.alertas_criticos_data instanceof Error?Q.initialError=n.alertas_criticos_data:Q.initialData=n.alertas_criticos_data,n.alertas_criticos_columns&&(Q.knownColumns=n.alertas_criticos_columns));let W,D=!1;const de=Je.createReactive({callback:p=>{i(5,W=p)},execFn:C},{id:"alertas_criticos",...Q});return de(ee,{noResolve:ce,...Q}),globalThis[Symbol.for("alertas_criticos")]={get value(){return W}},a.$$set=p=>{"data"in p&&i(6,s=p.data)},a.$$.update=()=>{a.$$.dirty[0]&64&&i(7,{data:n={},customFormattingSettings:_,__db:b}=s,n),a.$$.dirty[0]&128&&ni.set(Object.keys(n).length>0),a.$$.dirty[1]&2&&t.params,a.$$.dirty[0]&3840&&(y||!K?y||(f(M,{noResolve:y,...S}),i(11,K=!0)):f(M,{noResolve:y})),a.$$.dirty[0]&61440&&(se||!ne?se||(we(Y,{noResolve:se,...v}),i(15,ne=!0)):we(Y,{noResolve:se})),a.$$.dirty[0]&983040&&(I||!he?I||(q(J,{noResolve:I,...me}),i(19,he=!0)):q(J,{noResolve:I})),a.$$.dirty[0]&15728640&&(G||!V?G||(Me(be,{noResolve:G,...U}),i(23,V=!0)):Me(be,{noResolve:G})),a.$$.dirty[0]&251658240&&(z||!$?z||(ke(j,{noResolve:z,...oe}),i(27,$=!0)):ke(j,{noResolve:z})),a.$$.dirty[0]&1879048192|a.$$.dirty[1]&1&&(ce||!D?ce||(de(ee,{noResolve:ce,...Q}),i(31,D=!0)):de(ee,{noResolve:ce}))},i(9,y=Pe`select
  date,
  city_name,
  state_name,
  region,
  alert_type,
  severity,
  temp_max_c,
  temp_min_c,
  temp_anomaly_c,
  precipitation_mm,
  wind_speed_max_kmh,
  uv_index_max
from weather_dw.mart_climate__alerts
where date >= current_date - interval '30 days'
order by date desc, severity desc`),i(10,M=`select
  date,
  city_name,
  state_name,
  region,
  alert_type,
  severity,
  temp_max_c,
  temp_min_c,
  temp_anomaly_c,
  precipitation_mm,
  wind_speed_max_kmh,
  uv_index_max
from weather_dw.mart_climate__alerts
where date >= current_date - interval '30 days'
order by date desc, severity desc`),i(13,se=Pe`select
  alert_type                                        as tipo_alerta,
  count(*)                                          as total,
  count(*) filter (where severity = 'critical')                    as criticos,
  count(*) filter (where severity = 'high')                        as altos,
  count(*) filter (where severity = 'medium')                      as medios,
  count(*) filter (where severity = 'low')                         as baixos
from weather_dw.mart_climate__alerts
where date >= current_date - interval '30 days'
group by alert_type
order by total desc`),i(14,Y=`select
  alert_type                                        as tipo_alerta,
  count(*)                                          as total,
  count(*) filter (where severity = 'critical')                    as criticos,
  count(*) filter (where severity = 'high')                        as altos,
  count(*) filter (where severity = 'medium')                      as medios,
  count(*) filter (where severity = 'low')                         as baixos
from weather_dw.mart_climate__alerts
where date >= current_date - interval '30 days'
group by alert_type
order by total desc`),i(17,I=Pe`with severidades as (
  select 'critical' as severidade, 1 as ord union all
  select 'high',   2 union all
  select 'medium', 3 union all
  select 'low',    4
),
atual as (
  select severity as severidade, count(*) as total
  from weather_dw.mart_climate__alerts
  where date >= current_date - interval '30 days'
    and alert_type != '__no_alerts__'
  group by severity
)
select s.severidade, coalesce(a.total, 0) as total
from severidades s
left join atual a on s.severidade = a.severidade
order by s.ord`),i(18,J=`with severidades as (
  select 'critical' as severidade, 1 as ord union all
  select 'high',   2 union all
  select 'medium', 3 union all
  select 'low',    4
),
atual as (
  select severity as severidade, count(*) as total
  from weather_dw.mart_climate__alerts
  where date >= current_date - interval '30 days'
    and alert_type != '__no_alerts__'
  group by severity
)
select s.severidade, coalesce(a.total, 0) as total
from severidades s
left join atual a on s.severidade = a.severidade
order by s.ord`),i(21,G=Pe`select
  date,
  count(*)                                          as total_alertas,
  count(*) filter (where severity = 'critical')                    as criticos,
  count(*) filter (where severity = 'high')                        as altos
from weather_dw.mart_climate__alerts
where date >= current_date - interval '60 days'
group by date
order by date`),i(22,be=`select
  date,
  count(*)                                          as total_alertas,
  count(*) filter (where severity = 'critical')                    as criticos,
  count(*) filter (where severity = 'high')                        as altos
from weather_dw.mart_climate__alerts
where date >= current_date - interval '60 days'
group by date
order by date`),i(25,z=Pe`select
  city_name,
  state_name,
  region,
  count(*)                                          as total_alertas,
  count(*) filter (where severity = 'critical')                    as criticos,
  string_agg(distinct alert_type, ', ')             as tipos_detectados
from weather_dw.mart_climate__alerts
where date >= current_date - interval '30 days'
group by city_name, state_name, region
order by total_alertas desc
limit 15`),i(26,j=`select
  city_name,
  state_name,
  region,
  count(*)                                          as total_alertas,
  count(*) filter (where severity = 'critical')                    as criticos,
  string_agg(distinct alert_type, ', ')             as tipos_detectados
from weather_dw.mart_climate__alerts
where date >= current_date - interval '30 days'
group by city_name, state_name, region
order by total_alertas desc
limit 15`),i(29,ce=Pe`select
  date,
  city_name,
  state_name,
  alert_type,
  temp_max_c,
  precipitation_mm,
  wind_speed_max_kmh,
  uv_index_max
from weather_dw.mart_climate__alerts
where severity = 'critical'
  and date >= current_date - interval '30 days'
order by date desc`),i(30,ee=`select
  date,
  city_name,
  state_name,
  alert_type,
  temp_max_c,
  precipitation_mm,
  wind_speed_max_kmh,
  uv_index_max
from weather_dw.mart_climate__alerts
where severity = 'critical'
  and date >= current_date - interval '30 days'
order by date desc`),[P,Te,Ae,ge,Z,W,s,n,S,y,M,K,v,se,Y,ne,me,I,J,he,U,G,be,V,oe,z,j,$,Q,ce,ee,D,t]}class $i extends ut{constructor(e){super(),dt(this,e,ji,Ui,ct,{data:6},null,[-1,-1])}}export{$i as component};
