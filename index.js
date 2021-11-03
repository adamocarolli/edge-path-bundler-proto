(()=>{var e1=Object.create,vo=Object.defineProperty,t1=Object.getPrototypeOf,r1=Object.prototype.hasOwnProperty,n1=Object.getOwnPropertyNames,a1=Object.getOwnPropertyDescriptor;var o1=e=>vo(e,"__esModule",{value:!0});var Pn=(e,t)=>()=>(t||(t={exports:{}},e(t.exports,t)),t.exports),fn=(e,t)=>{for(var r in t)vo(e,r,{get:t[r],enumerable:!0})},i1=(e,t,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of n1(t))!r1.call(e,n)&&n!=="default"&&vo(e,n,{get:()=>t[n],enumerable:!(r=a1(t,n))||r.enumerable});return e},Ir=e=>i1(o1(vo(e!=null?e1(t1(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var rc=Pn((Zi,tc)=>{"use strict";(function(e,t){typeof define=="function"&&define.amd?define([],t):typeof Zi=="object"?tc.exports=t():e.typed=t()})(Zi,function(){function e(){return!0}function t(){return!1}function r(){}function n(){var a=[{name:"number",test:function(H){return typeof H=="number"}},{name:"string",test:function(H){return typeof H=="string"}},{name:"boolean",test:function(H){return typeof H=="boolean"}},{name:"Function",test:function(H){return typeof H=="function"}},{name:"Array",test:Array.isArray},{name:"Date",test:function(H){return H instanceof Date}},{name:"RegExp",test:function(H){return H instanceof RegExp}},{name:"Object",test:function(H){return typeof H=="object"&&H!==null&&H.constructor===Object}},{name:"null",test:function(H){return H===null}},{name:"undefined",test:function(H){return H===void 0}}],s={name:"any",test:e},f=[],h=[],g={types:a,conversions:h,ignore:f};function l(H){var ne=lt(g.types,function(J){return J.name===H});if(ne)return ne;if(H==="any")return s;var ie=lt(g.types,function(J){return J.name.toLowerCase()===H.toLowerCase()});throw new TypeError('Unknown type "'+H+'"'+(ie?'. Did you mean "'+ie.name+'"?':""))}function u(H){return H===s?999:g.types.indexOf(H)}function d(H){var ne=lt(g.types,function(ie){return ie.test(H)});if(ne)return ne.name;throw new TypeError("Value has unknown type. Value: "+H)}function C(H,ne){if(!H.signatures)throw new TypeError("Function is no typed-function");var ie;if(typeof ne=="string"){ie=ne.split(",");for(var J=0;J<ie.length;J++)ie[J]=ie[J].trim()}else if(Array.isArray(ne))ie=ne;else throw new TypeError("String array or a comma separated string expected");var Ee=ie.join(","),Re=H.signatures[Ee];if(Re)return Re;throw new TypeError("Signature not found (signature: "+(H.name||"unnamed")+"("+ie.join(", ")+"))")}function M(H,ne){var ie=d(H);if(ne===ie)return H;for(var J=0;J<g.conversions.length;J++){var Ee=g.conversions[J];if(Ee.from===ie&&Ee.to===ne)return Ee.convert(H)}throw new Error("Cannot convert from "+ie+" to "+ne)}function L(H){return H.map(function(ne){var ie=ne.types.map(K);return(ne.restParam?"...":"")+ie.join("|")}).join(",")}function v(H,ne){var ie=H.indexOf("...")===0,J=ie?H.length>3?H.slice(3):"any":H,Ee=J.split("|").map(Ue).filter(ht).filter(Xe),Re=Me(ne,Ee),Le=Ee.map(function(we){var De=l(we);return{name:we,typeIndex:u(De),test:De.test,conversion:null,conversionIndex:-1}}),Se=Re.map(function(we){var De=l(we.from);return{name:we.from,typeIndex:u(De),test:De.test,conversion:we,conversionIndex:ne.indexOf(we)}});return{types:Le.concat(Se),restParam:ie}}function y(H,ne,ie){var J=[];return H.trim()!==""&&(J=H.split(",").map(Ue).map(function(Ee,Re,Le){var Se=v(Ee,ie);if(Se.restParam&&Re!==Le.length-1)throw new SyntaxError('Unexpected rest parameter "'+Ee+'": only allowed for the last parameter');return Se})),J.some(ct)?null:{params:J,fn:ne}}function I(H){var ne=ut(H);return ne?ne.restParam:!1}function P(H){return H.types.some(function(ne){return ne.conversion!=null})}function D(H){if(!H||H.types.length===0)return e;if(H.types.length===1)return l(H.types[0].name).test;if(H.types.length===2){var ne=l(H.types[0].name).test,ie=l(H.types[1].name).test;return function(Re){return ne(Re)||ie(Re)}}else{var J=H.types.map(function(Ee){return l(Ee.name).test});return function(Re){for(var Le=0;Le<J.length;Le++)if(J[Le](Re))return!0;return!1}}}function Z(H){var ne,ie,J;if(I(H)){ne=ot(H).map(D);var Ee=ne.length,Re=D(ut(H)),Le=function(Se){for(var we=Ee;we<Se.length;we++)if(!Re(Se[we]))return!1;return!0};return function(we){for(var De=0;De<ne.length;De++)if(!ne[De](we[De]))return!1;return Le(we)&&we.length>=Ee+1}}else return H.length===0?function(we){return we.length===0}:H.length===1?(ie=D(H[0]),function(we){return ie(we[0])&&we.length===1}):H.length===2?(ie=D(H[0]),J=D(H[1]),function(we){return ie(we[0])&&J(we[1])&&we.length===2}):(ne=H.map(D),function(we){for(var De=0;De<ne.length;De++)if(!ne[De](we[De]))return!1;return we.length===ne.length})}function O(H,ne){return ne<H.params.length?H.params[ne]:I(H.params)?ut(H.params):null}function B(H,ne,ie){var J=O(H,ne),Ee=J?ie?J.types.filter(V):J.types:[];return Ee.map(K)}function K(H){return H.name}function V(H){return H.conversion===null||H.conversion===void 0}function X(H,ne){var ie=rt(xt(H,function(J){return B(J,ne,!1)}));return ie.indexOf("any")!==-1?["any"]:ie}function Q(H,ne,ie){var J,Ee,Re=H||"unnamed",Le=ie,Se;for(Se=0;Se<ne.length;Se++){var we=Le.filter(function(tr){var zr=D(O(tr,Se));return(Se<tr.params.length||I(tr.params))&&zr(ne[Se])});if(we.length===0){if(Ee=X(Le,Se),Ee.length>0){var De=d(ne[Se]);return J=new TypeError("Unexpected type of argument in function "+Re+" (expected: "+Ee.join(" or ")+", actual: "+De+", index: "+Se+")"),J.data={category:"wrongType",fn:Re,index:Se,actual:De,expected:Ee},J}}else Le=we}var zt=Le.map(function(tr){return I(tr.params)?Infinity:tr.params.length});if(ne.length<Math.min.apply(null,zt))return Ee=X(Le,Se),J=new TypeError("Too few arguments in function "+Re+" (expected: "+Ee.join(" or ")+", index: "+ne.length+")"),J.data={category:"tooFewArgs",fn:Re,index:ne.length,expected:Ee},J;var Kt=Math.max.apply(null,zt);return ne.length>Kt?(J=new TypeError("Too many arguments in function "+Re+" (expected: "+Kt+", actual: "+ne.length+")"),J.data={category:"tooManyArgs",fn:Re,index:ne.length,expectedLength:Kt},J):(J=new TypeError('Arguments of type "'+ne.join(", ")+'" do not match any of the defined signatures of function '+Re+"."),J.data={category:"mismatch",actual:ne.map(d)},J)}function ge(H){for(var ne=999,ie=0;ie<H.types.length;ie++)V(H.types[ie])&&(ne=Math.min(ne,H.types[ie].typeIndex));return ne}function q(H){for(var ne=999,ie=0;ie<H.types.length;ie++)V(H.types[ie])||(ne=Math.min(ne,H.types[ie].conversionIndex));return ne}function ve(H,ne){var ie;return ie=H.restParam-ne.restParam,ie!==0||(ie=P(H)-P(ne),ie!==0)||(ie=ge(H)-ge(ne),ie!==0)?ie:q(H)-q(ne)}function de(H,ne){var ie=Math.min(H.params.length,ne.params.length),J,Ee;if(Ee=H.params.some(P)-ne.params.some(P),Ee!==0)return Ee;for(J=0;J<ie;J++)if(Ee=P(H.params[J])-P(ne.params[J]),Ee!==0)return Ee;for(J=0;J<ie;J++)if(Ee=ve(H.params[J],ne.params[J]),Ee!==0)return Ee;return H.params.length-ne.params.length}function Me(H,ne){var ie={};return H.forEach(function(J){ne.indexOf(J.from)===-1&&ne.indexOf(J.to)!==-1&&!ie[J.from]&&(ie[J.from]=J)}),Object.keys(ie).map(function(J){return ie[J]})}function _e(H,ne){var ie=ne;if(H.some(P)){var J=I(H),Ee=H.map(Te);ie=function(){for(var we=[],De=J?arguments.length-1:arguments.length,zt=0;zt<De;zt++)we[zt]=Ee[zt](arguments[zt]);return J&&(we[De]=arguments[De].map(Ee[De])),ne.apply(this,we)}}var Re=ie;if(I(H)){var Le=H.length-1;Re=function(){return ie.apply(this,it(arguments,0,Le).concat([it(arguments,Le)]))}}return Re}function Te(H){var ne,ie,J,Ee,Re=[],Le=[];switch(H.types.forEach(function(Se){Se.conversion&&(Re.push(l(Se.conversion.from).test),Le.push(Se.conversion.convert))}),Le.length){case 0:return function(we){return we};case 1:return ne=Re[0],J=Le[0],function(we){return ne(we)?J(we):we};case 2:return ne=Re[0],ie=Re[1],J=Le[0],Ee=Le[1],function(we){return ne(we)?J(we):ie(we)?Ee(we):we};default:return function(we){for(var De=0;De<Le.length;De++)if(Re[De](we))return Le[De](we);return we}}}function me(H){var ne={};return H.forEach(function(ie){ie.params.some(P)||ce(ie.params,!0).forEach(function(J){ne[L(J)]=ie.fn})}),ne}function ce(H,ne){function ie(J,Ee,Re){if(Ee<J.length){var Le=J[Ee],Se=ne?Le.types.filter(V):Le.types,we;if(Le.restParam){var De=Se.filter(V);we=De.length<Se.length?[De,Se]:[Se]}else we=Se.map(function(Kt){return[Kt]});return xt(we,function(Kt){return ie(J,Ee+1,Re.concat([Kt]))})}else{var zt=Re.map(function(Kt,tr){return{types:Kt,restParam:tr===J.length-1&&I(J)}});return[zt]}}return ie(H,0,[])}function Ie(H,ne){for(var ie=Math.max(H.params.length,ne.params.length),J=0;J<ie;J++){var Ee=B(H,J,!0),Re=B(ne,J,!0);if(!Pt(Ee,Re))return!1}var Le=H.params.length,Se=ne.params.length,we=I(H.params),De=I(ne.params);return we?De?Le===Se:Se>=Le:De?Le>=Se:Le===Se}function je(H,ne){if(Object.keys(ne).length===0)throw new SyntaxError("No signatures provided");var ie=[];Object.keys(ne).map(function(Pe){return y(Pe,ne[Pe],g.conversions)}).filter(tt).forEach(function(Pe){var Mt=lt(ie,function(Xt){return Ie(Xt,Pe)});if(Mt)throw new TypeError('Conflicting signatures "'+L(Mt.params)+'" and "'+L(Pe.params)+'".');ie.push(Pe)});var J=xt(ie,function(Pe){var Mt=Pe?ce(Pe.params,!1):[];return Mt.map(function(Xt){return{params:Xt,fn:Pe.fn}})}).filter(tt);J.sort(de);var Ee=J[0]&&J[0].params.length<=2&&!I(J[0].params),Re=J[1]&&J[1].params.length<=2&&!I(J[1].params),Le=J[2]&&J[2].params.length<=2&&!I(J[2].params),Se=J[3]&&J[3].params.length<=2&&!I(J[3].params),we=J[4]&&J[4].params.length<=2&&!I(J[4].params),De=J[5]&&J[5].params.length<=2&&!I(J[5].params),zt=Ee&&Re&&Le&&Se&&we&&De,Kt=J.map(function(Pe){return Z(Pe.params)}),tr=Ee?D(J[0].params[0]):t,zr=Re?D(J[1].params[0]):t,Dr=Le?D(J[2].params[0]):t,_n=Se?D(J[3].params[0]):t,en=we?D(J[4].params[0]):t,bn=De?D(J[5].params[0]):t,tn=Ee?D(J[0].params[1]):t,rn=Re?D(J[1].params[1]):t,Hr=Le?D(J[2].params[1]):t,nn=Se?D(J[3].params[1]):t,kr=we?D(J[4].params[1]):t,qr=De?D(J[5].params[1]):t,dr=J.map(function(Pe){return _e(Pe.params,Pe.fn)}),En=Ee?dr[0]:r,Wr=Re?dr[1]:r,Cr=Le?dr[2]:r,wn=Se?dr[3]:r,Cn=we?dr[4]:r,jr=De?dr[5]:r,$t=Ee?J[0].params.length:-1,Zt=Re?J[1].params.length:-1,jt=Le?J[2].params.length:-1,an=Se?J[3].params.length:-1,Xr=we?J[4].params.length:-1,on=De?J[5].params.length:-1,Ar=zt?6:0,Mr=J.length,gt=function(){"use strict";for(var Mt=Ar;Mt<Mr;Mt++)if(Kt[Mt](arguments))return dr[Mt].apply(this,arguments);throw Q(H,arguments,J)},Or=function Pe(Mt,Xt){"use strict";return arguments.length===$t&&tr(Mt)&&tn(Xt)?En.apply(Pe,arguments):arguments.length===Zt&&zr(Mt)&&rn(Xt)?Wr.apply(Pe,arguments):arguments.length===jt&&Dr(Mt)&&Hr(Xt)?Cr.apply(Pe,arguments):arguments.length===an&&_n(Mt)&&nn(Xt)?wn.apply(Pe,arguments):arguments.length===Xr&&en(Mt)&&kr(Xt)?Cn.apply(Pe,arguments):arguments.length===on&&bn(Mt)&&qr(Xt)?jr.apply(Pe,arguments):gt.apply(Pe,arguments)};try{Object.defineProperty(Or,"name",{value:H})}catch(Pe){}return Or.signatures=me(J),Or}function Xe(H){return g.ignore.indexOf(H)===-1}function Ue(H){return H.trim()}function ht(H){return!!H}function tt(H){return H!==null}function ct(H){return H.types.length===0}function ot(H){return H.slice(0,H.length-1)}function ut(H){return H[H.length-1]}function it(H,ne,ie){return Array.prototype.slice.call(H,ne,ie)}function He(H,ne){return H.indexOf(ne)!==-1}function Pt(H,ne){for(var ie=0;ie<H.length;ie++)if(He(ne,H[ie]))return!0;return!1}function lt(H,ne){for(var ie=0;ie<H.length;ie++)if(ne(H[ie]))return H[ie]}function rt(H){for(var ne={},ie=0;ie<H.length;ie++)ne[H[ie]]=!0;return Object.keys(ne)}function xt(H,ne){return Array.prototype.concat.apply([],H.map(ne))}function At(H){for(var ne="",ie=0;ie<H.length;ie++){var J=H[ie];if((typeof J.signatures=="object"||typeof J.signature=="string")&&J.name!==""){if(ne==="")ne=J.name;else if(ne!==J.name){var Ee=new Error("Function names do not match (expected: "+ne+", actual: "+J.name+")");throw Ee.data={actual:J.name,expected:ne},Ee}}}return ne}function Vt(H){var ne,ie={};function J(Se,we){if(ie.hasOwnProperty(Se)&&we!==ie[Se])throw ne=new Error('Signature "'+Se+'" is defined twice'),ne.data={signature:Se},ne}for(var Ee=0;Ee<H.length;Ee++){var Re=H[Ee];if(typeof Re.signatures=="object")for(var Le in Re.signatures)Re.signatures.hasOwnProperty(Le)&&(J(Le,Re.signatures[Le]),ie[Le]=Re.signatures[Le]);else if(typeof Re.signature=="string")J(Re.signature,Re),ie[Re.signature]=Re;else throw ne=new TypeError("Function is no typed-function (index: "+Ee+")"),ne.data={index:Ee},ne}return ie}return g=je("typed",{"string, Object":je,Object:function(H){var ne=[];for(var ie in H)H.hasOwnProperty(ie)&&ne.push(H[ie]);var J=At(ne);return je(J,H)},"...Function":function(H){return je(At(H),Vt(H))},"string, ...Function":function(H,ne){return je(H,Vt(ne))}}),g.create=n,g.types=a,g.conversions=h,g.ignore=f,g.convert=M,g.find=C,g.addType=function(H,ne){if(!H||typeof H.name!="string"||typeof H.test!="function")throw new TypeError("Object with properties {name: string, test: function} expected");if(ne!==!1){for(var ie=0;ie<g.types.length;ie++)if(g.types[ie].name==="Object"){g.types.splice(ie,0,H);return}}g.types.push(H)},g.addConversion=function(H){if(!H||typeof H.from!="string"||typeof H.to!="string"||typeof H.convert!="function")throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");g.conversions.push(H)},g}return n()})});var Tc=Pn((Sc,Co)=>{(function(e){"use strict";var t=9e15,r=1e9,n="0123456789abcdef",a="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",s="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",f={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-t,maxE:t,crypto:!1},h,g,l,u,d=!0,C="[DecimalError] ",M=C+"Invalid argument: ",L=C+"Precision limit exceeded",v=C+"crypto unavailable",y="[object Decimal]",I=Math.floor,P=Math.pow,D=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,Z=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,O=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,B=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,K=1e7,V=7,X=9007199254740991,Q=a.length-1,ge=s.length-1,q={toStringTag:y};q.absoluteValue=q.abs=function(){var m=new this.constructor(this);return m.s<0&&(m.s=1),ce(m)},q.ceil=function(){return ce(new this.constructor(this),this.e+1,2)},q.clampedTo=q.clamp=function(m,b){var w,A=this,S=A.constructor;if(m=new S(m),b=new S(b),!m.s||!b.s)return new S(NaN);if(m.gt(b))throw Error(M+b);return w=A.cmp(m),w<0?m:A.cmp(b)>0?b:new S(A)},q.comparedTo=q.cmp=function(m){var b,w,A,S,T=this,F=T.d,G=(m=new T.constructor(m)).d,$=T.s,W=m.s;if(!F||!G)return!$||!W?NaN:$!==W?$:F===G?0:!F^$<0?1:-1;if(!F[0]||!G[0])return F[0]?$:G[0]?-W:0;if($!==W)return $;if(T.e!==m.e)return T.e>m.e^$<0?1:-1;for(A=F.length,S=G.length,b=0,w=A<S?A:S;b<w;++b)if(F[b]!==G[b])return F[b]>G[b]^$<0?1:-1;return A===S?0:A>S^$<0?1:-1},q.cosine=q.cos=function(){var m,b,w=this,A=w.constructor;return w.d?w.d[0]?(m=A.precision,b=A.rounding,A.precision=m+Math.max(w.e,w.sd())+V,A.rounding=1,w=Te(A,H(A,w)),A.precision=m,A.rounding=b,ce(u==2||u==3?w.neg():w,m,b,!0)):new A(1):new A(NaN)},q.cubeRoot=q.cbrt=function(){var m,b,w,A,S,T,F,G,$,W,ae=this,se=ae.constructor;if(!ae.isFinite()||ae.isZero())return new se(ae);for(d=!1,T=ae.s*P(ae.s*ae,1/3),!T||Math.abs(T)==1/0?(w=ve(ae.d),m=ae.e,(T=(m-w.length+1)%3)&&(w+=T==1||T==-2?"0":"00"),T=P(w,1/3),m=I((m+1)/3)-(m%3==(m<0?-1:2)),T==1/0?w="5e"+m:(w=T.toExponential(),w=w.slice(0,w.indexOf("e")+1)+m),A=new se(w),A.s=ae.s):A=new se(T.toString()),F=(m=se.precision)+3;;)if(G=A,$=G.times(G).times(G),W=$.plus(ae),A=me(W.plus(ae).times(G),W.plus($),F+2,1),ve(G.d).slice(0,F)===(w=ve(A.d)).slice(0,F))if(w=w.slice(F-3,F+1),w=="9999"||!S&&w=="4999"){if(!S&&(ce(G,m+1,0),G.times(G).times(G).eq(ae))){A=G;break}F+=4,S=1}else{(!+w||!+w.slice(1)&&w.charAt(0)=="5")&&(ce(A,m+1,1),b=!A.times(A).times(A).eq(ae));break}return d=!0,ce(A,m,se.rounding,b)},q.decimalPlaces=q.dp=function(){var m,b=this.d,w=NaN;if(b){if(m=b.length-1,w=(m-I(this.e/V))*V,m=b[m],m)for(;m%10==0;m/=10)w--;w<0&&(w=0)}return w},q.dividedBy=q.div=function(m){return me(this,new this.constructor(m))},q.dividedToIntegerBy=q.divToInt=function(m){var b=this,w=b.constructor;return ce(me(b,new w(m),0,1,1),w.precision,w.rounding)},q.equals=q.eq=function(m){return this.cmp(m)===0},q.floor=function(){return ce(new this.constructor(this),this.e+1,3)},q.greaterThan=q.gt=function(m){return this.cmp(m)>0},q.greaterThanOrEqualTo=q.gte=function(m){var b=this.cmp(m);return b==1||b===0},q.hyperbolicCosine=q.cosh=function(){var m,b,w,A,S,T=this,F=T.constructor,G=new F(1);if(!T.isFinite())return new F(T.s?1/0:NaN);if(T.isZero())return G;w=F.precision,A=F.rounding,F.precision=w+Math.max(T.e,T.sd())+4,F.rounding=1,S=T.d.length,S<32?(m=Math.ceil(S/3),b=(1/Vt(4,m)).toString()):(m=16,b="2.3283064365386962890625e-10"),T=At(F,1,T.times(b),new F(1),!0);for(var $,W=m,ae=new F(8);W--;)$=T.times(T),T=G.minus($.times(ae.minus($.times(ae))));return ce(T,F.precision=w,F.rounding=A,!0)},q.hyperbolicSine=q.sinh=function(){var m,b,w,A,S=this,T=S.constructor;if(!S.isFinite()||S.isZero())return new T(S);if(b=T.precision,w=T.rounding,T.precision=b+Math.max(S.e,S.sd())+4,T.rounding=1,A=S.d.length,A<3)S=At(T,2,S,S,!0);else{m=1.4*Math.sqrt(A),m=m>16?16:m|0,S=S.times(1/Vt(5,m)),S=At(T,2,S,S,!0);for(var F,G=new T(5),$=new T(16),W=new T(20);m--;)F=S.times(S),S=S.times(G.plus(F.times($.times(F).plus(W))))}return T.precision=b,T.rounding=w,ce(S,b,w,!0)},q.hyperbolicTangent=q.tanh=function(){var m,b,w=this,A=w.constructor;return w.isFinite()?w.isZero()?new A(w):(m=A.precision,b=A.rounding,A.precision=m+7,A.rounding=1,me(w.sinh(),w.cosh(),A.precision=m,A.rounding=b)):new A(w.s)},q.inverseCosine=q.acos=function(){var m,b=this,w=b.constructor,A=b.abs().cmp(1),S=w.precision,T=w.rounding;return A!==-1?A===0?b.isNeg()?Ue(w,S,T):new w(0):new w(NaN):b.isZero()?Ue(w,S+4,T).times(.5):(w.precision=S+6,w.rounding=1,b=b.asin(),m=Ue(w,S+4,T).times(.5),w.precision=S,w.rounding=T,m.minus(b))},q.inverseHyperbolicCosine=q.acosh=function(){var m,b,w=this,A=w.constructor;return w.lte(1)?new A(w.eq(1)?0:NaN):w.isFinite()?(m=A.precision,b=A.rounding,A.precision=m+Math.max(Math.abs(w.e),w.sd())+4,A.rounding=1,d=!1,w=w.times(w).minus(1).sqrt().plus(w),d=!0,A.precision=m,A.rounding=b,w.ln()):new A(w)},q.inverseHyperbolicSine=q.asinh=function(){var m,b,w=this,A=w.constructor;return!w.isFinite()||w.isZero()?new A(w):(m=A.precision,b=A.rounding,A.precision=m+2*Math.max(Math.abs(w.e),w.sd())+6,A.rounding=1,d=!1,w=w.times(w).plus(1).sqrt().plus(w),d=!0,A.precision=m,A.rounding=b,w.ln())},q.inverseHyperbolicTangent=q.atanh=function(){var m,b,w,A,S=this,T=S.constructor;return S.isFinite()?S.e>=0?new T(S.abs().eq(1)?S.s/0:S.isZero()?S:NaN):(m=T.precision,b=T.rounding,A=S.sd(),Math.max(A,m)<2*-S.e-1?ce(new T(S),m,b,!0):(T.precision=w=A-S.e,S=me(S.plus(1),new T(1).minus(S),w+m,1),T.precision=m+4,T.rounding=1,S=S.ln(),T.precision=m,T.rounding=b,S.times(.5))):new T(NaN)},q.inverseSine=q.asin=function(){var m,b,w,A,S=this,T=S.constructor;return S.isZero()?new T(S):(b=S.abs().cmp(1),w=T.precision,A=T.rounding,b!==-1?b===0?(m=Ue(T,w+4,A).times(.5),m.s=S.s,m):new T(NaN):(T.precision=w+6,T.rounding=1,S=S.div(new T(1).minus(S.times(S)).sqrt().plus(1)).atan(),T.precision=w,T.rounding=A,S.times(2)))},q.inverseTangent=q.atan=function(){var m,b,w,A,S,T,F,G,$,W=this,ae=W.constructor,se=ae.precision,ue=ae.rounding;if(W.isFinite()){if(W.isZero())return new ae(W);if(W.abs().eq(1)&&se+4<=ge)return F=Ue(ae,se+4,ue).times(.25),F.s=W.s,F}else{if(!W.s)return new ae(NaN);if(se+4<=ge)return F=Ue(ae,se+4,ue).times(.5),F.s=W.s,F}for(ae.precision=G=se+10,ae.rounding=1,w=Math.min(28,G/V+2|0),m=w;m;--m)W=W.div(W.times(W).plus(1).sqrt().plus(1));for(d=!1,b=Math.ceil(G/V),A=1,$=W.times(W),F=new ae(W),S=W;m!==-1;)if(S=S.times($),T=F.minus(S.div(A+=2)),S=S.times($),F=T.plus(S.div(A+=2)),F.d[b]!==void 0)for(m=b;F.d[m]===T.d[m]&&m--;);return w&&(F=F.times(2<<w-1)),d=!0,ce(F,ae.precision=se,ae.rounding=ue,!0)},q.isFinite=function(){return!!this.d},q.isInteger=q.isInt=function(){return!!this.d&&I(this.e/V)>this.d.length-2},q.isNaN=function(){return!this.s},q.isNegative=q.isNeg=function(){return this.s<0},q.isPositive=q.isPos=function(){return this.s>0},q.isZero=function(){return!!this.d&&this.d[0]===0},q.lessThan=q.lt=function(m){return this.cmp(m)<0},q.lessThanOrEqualTo=q.lte=function(m){return this.cmp(m)<1},q.logarithm=q.log=function(m){var b,w,A,S,T,F,G,$,W=this,ae=W.constructor,se=ae.precision,ue=ae.rounding,Ne=5;if(m==null)m=new ae(10),b=!0;else{if(m=new ae(m),w=m.d,m.s<0||!w||!w[0]||m.eq(1))return new ae(NaN);b=m.eq(10)}if(w=W.d,W.s<0||!w||!w[0]||W.eq(1))return new ae(w&&!w[0]?-1/0:W.s!=1?NaN:w?0:1/0);if(b)if(w.length>1)T=!0;else{for(S=w[0];S%10==0;)S/=10;T=S!==1}if(d=!1,G=se+Ne,F=He(W,G),A=b?Xe(ae,G+10):He(m,G),$=me(F,A,G,1),Me($.d,S=se,ue))do if(G+=10,F=He(W,G),A=b?Xe(ae,G+10):He(m,G),$=me(F,A,G,1),!T){+ve($.d).slice(S+1,S+15)+1==1e14&&($=ce($,se+1,0));break}while(Me($.d,S+=10,ue));return d=!0,ce($,se,ue)},q.minus=q.sub=function(m){var b,w,A,S,T,F,G,$,W,ae,se,ue,Ne=this,Ze=Ne.constructor;if(m=new Ze(m),!Ne.d||!m.d)return!Ne.s||!m.s?m=new Ze(NaN):Ne.d?m.s=-m.s:m=new Ze(m.d||Ne.s!==m.s?Ne:NaN),m;if(Ne.s!=m.s)return m.s=-m.s,Ne.plus(m);if(W=Ne.d,ue=m.d,G=Ze.precision,$=Ze.rounding,!W[0]||!ue[0]){if(ue[0])m.s=-m.s;else if(W[0])m=new Ze(Ne);else return new Ze(-0);return d?ce(m,G,$):m}if(w=I(m.e/V),ae=I(Ne.e/V),W=W.slice(),T=ae-w,T){for(se=T<0,se?(b=W,T=-T,F=ue.length):(b=ue,w=ae,F=W.length),A=Math.max(Math.ceil(G/V),F)+2,T>A&&(T=A,b.length=1),b.reverse(),A=T;A--;)b.push(0);b.reverse()}else{for(A=W.length,F=ue.length,se=A<F,se&&(F=A),A=0;A<F;A++)if(W[A]!=ue[A]){se=W[A]<ue[A];break}T=0}for(se&&(b=W,W=ue,ue=b,m.s=-m.s),F=W.length,A=ue.length-F;A>0;--A)W[F++]=0;for(A=ue.length;A>T;){if(W[--A]<ue[A]){for(S=A;S&&W[--S]===0;)W[S]=K-1;--W[S],W[A]+=K}W[A]-=ue[A]}for(;W[--F]===0;)W.pop();for(;W[0]===0;W.shift())--w;return W[0]?(m.d=W,m.e=je(W,w),d?ce(m,G,$):m):new Ze(-0)},q.modulo=q.mod=function(m){var b,w=this,A=w.constructor;return m=new A(m),!w.d||!m.s||m.d&&!m.d[0]?new A(NaN):!m.d||w.d&&!w.d[0]?ce(new A(w),A.precision,A.rounding):(d=!1,A.modulo==9?(b=me(w,m.abs(),0,3,1),b.s*=m.s):b=me(w,m,0,A.modulo,1),b=b.times(m),d=!0,w.minus(b))},q.naturalExponential=q.exp=function(){return it(this)},q.naturalLogarithm=q.ln=function(){return He(this)},q.negated=q.neg=function(){var m=new this.constructor(this);return m.s=-m.s,ce(m)},q.plus=q.add=function(m){var b,w,A,S,T,F,G,$,W,ae,se=this,ue=se.constructor;if(m=new ue(m),!se.d||!m.d)return!se.s||!m.s?m=new ue(NaN):se.d||(m=new ue(m.d||se.s===m.s?se:NaN)),m;if(se.s!=m.s)return m.s=-m.s,se.minus(m);if(W=se.d,ae=m.d,G=ue.precision,$=ue.rounding,!W[0]||!ae[0])return ae[0]||(m=new ue(se)),d?ce(m,G,$):m;if(T=I(se.e/V),A=I(m.e/V),W=W.slice(),S=T-A,S){for(S<0?(w=W,S=-S,F=ae.length):(w=ae,A=T,F=W.length),T=Math.ceil(G/V),F=T>F?T+1:F+1,S>F&&(S=F,w.length=1),w.reverse();S--;)w.push(0);w.reverse()}for(F=W.length,S=ae.length,F-S<0&&(S=F,w=ae,ae=W,W=w),b=0;S;)b=(W[--S]=W[S]+ae[S]+b)/K|0,W[S]%=K;for(b&&(W.unshift(b),++A),F=W.length;W[--F]==0;)W.pop();return m.d=W,m.e=je(W,A),d?ce(m,G,$):m},q.precision=q.sd=function(m){var b,w=this;if(m!==void 0&&m!==!!m&&m!==1&&m!==0)throw Error(M+m);return w.d?(b=ht(w.d),m&&w.e+1>b&&(b=w.e+1)):b=NaN,b},q.round=function(){var m=this,b=m.constructor;return ce(new b(m),m.e+1,b.rounding)},q.sine=q.sin=function(){var m,b,w=this,A=w.constructor;return w.isFinite()?w.isZero()?new A(w):(m=A.precision,b=A.rounding,A.precision=m+Math.max(w.e,w.sd())+V,A.rounding=1,w=xt(A,H(A,w)),A.precision=m,A.rounding=b,ce(u>2?w.neg():w,m,b,!0)):new A(NaN)},q.squareRoot=q.sqrt=function(){var m,b,w,A,S,T,F=this,G=F.d,$=F.e,W=F.s,ae=F.constructor;if(W!==1||!G||!G[0])return new ae(!W||W<0&&(!G||G[0])?NaN:G?F:1/0);for(d=!1,W=Math.sqrt(+F),W==0||W==1/0?(b=ve(G),(b.length+$)%2==0&&(b+="0"),W=Math.sqrt(b),$=I(($+1)/2)-($<0||$%2),W==1/0?b="5e"+$:(b=W.toExponential(),b=b.slice(0,b.indexOf("e")+1)+$),A=new ae(b)):A=new ae(W.toString()),w=($=ae.precision)+3;;)if(T=A,A=T.plus(me(F,T,w+2,1)).times(.5),ve(T.d).slice(0,w)===(b=ve(A.d)).slice(0,w))if(b=b.slice(w-3,w+1),b=="9999"||!S&&b=="4999"){if(!S&&(ce(T,$+1,0),T.times(T).eq(F))){A=T;break}w+=4,S=1}else{(!+b||!+b.slice(1)&&b.charAt(0)=="5")&&(ce(A,$+1,1),m=!A.times(A).eq(F));break}return d=!0,ce(A,$,ae.rounding,m)},q.tangent=q.tan=function(){var m,b,w=this,A=w.constructor;return w.isFinite()?w.isZero()?new A(w):(m=A.precision,b=A.rounding,A.precision=m+10,A.rounding=1,w=w.sin(),w.s=1,w=me(w,new A(1).minus(w.times(w)).sqrt(),m+10,0),A.precision=m,A.rounding=b,ce(u==2||u==4?w.neg():w,m,b,!0)):new A(NaN)},q.times=q.mul=function(m){var b,w,A,S,T,F,G,$,W,ae=this,se=ae.constructor,ue=ae.d,Ne=(m=new se(m)).d;if(m.s*=ae.s,!ue||!ue[0]||!Ne||!Ne[0])return new se(!m.s||ue&&!ue[0]&&!Ne||Ne&&!Ne[0]&&!ue?NaN:!ue||!Ne?m.s/0:m.s*0);for(w=I(ae.e/V)+I(m.e/V),$=ue.length,W=Ne.length,$<W&&(T=ue,ue=Ne,Ne=T,F=$,$=W,W=F),T=[],F=$+W,A=F;A--;)T.push(0);for(A=W;--A>=0;){for(b=0,S=$+A;S>A;)G=T[S]+Ne[A]*ue[S-A-1]+b,T[S--]=G%K|0,b=G/K|0;T[S]=(T[S]+b)%K|0}for(;!T[--F];)T.pop();return b?++w:T.shift(),m.d=T,m.e=je(T,w),d?ce(m,se.precision,se.rounding):m},q.toBinary=function(m,b){return ne(this,2,m,b)},q.toDecimalPlaces=q.toDP=function(m,b){var w=this,A=w.constructor;return w=new A(w),m===void 0?w:(de(m,0,r),b===void 0?b=A.rounding:de(b,0,8),ce(w,m+w.e+1,b))},q.toExponential=function(m,b){var w,A=this,S=A.constructor;return m===void 0?w=Ie(A,!0):(de(m,0,r),b===void 0?b=S.rounding:de(b,0,8),A=ce(new S(A),m+1,b),w=Ie(A,!0,m+1)),A.isNeg()&&!A.isZero()?"-"+w:w},q.toFixed=function(m,b){var w,A,S=this,T=S.constructor;return m===void 0?w=Ie(S):(de(m,0,r),b===void 0?b=T.rounding:de(b,0,8),A=ce(new T(S),m+S.e+1,b),w=Ie(A,!1,m+A.e+1)),S.isNeg()&&!S.isZero()?"-"+w:w},q.toFraction=function(m){var b,w,A,S,T,F,G,$,W,ae,se,ue,Ne=this,Ze=Ne.d,ke=Ne.constructor;if(!Ze)return new ke(Ne);if(W=w=new ke(1),A=$=new ke(0),b=new ke(A),T=b.e=ht(Ze)-Ne.e-1,F=T%V,b.d[0]=P(10,F<0?V+F:F),m==null)m=T>0?b:W;else{if(G=new ke(m),!G.isInt()||G.lt(W))throw Error(M+G);m=G.gt(b)?T>0?b:W:G}for(d=!1,G=new ke(ve(Ze)),ae=ke.precision,ke.precision=T=Ze.length*V*2;se=me(G,b,0,1,1),S=w.plus(se.times(A)),S.cmp(m)!=1;)w=A,A=S,S=W,W=$.plus(se.times(S)),$=S,S=b,b=G.minus(se.times(S)),G=S;return S=me(m.minus(w),A,0,1,1),$=$.plus(S.times(W)),w=w.plus(S.times(A)),$.s=W.s=Ne.s,ue=me(W,A,T,1).minus(Ne).abs().cmp(me($,w,T,1).minus(Ne).abs())<1?[W,A]:[$,w],ke.precision=ae,d=!0,ue},q.toHexadecimal=q.toHex=function(m,b){return ne(this,16,m,b)},q.toNearest=function(m,b){var w=this,A=w.constructor;if(w=new A(w),m==null){if(!w.d)return w;m=new A(1),b=A.rounding}else{if(m=new A(m),b===void 0?b=A.rounding:de(b,0,8),!w.d)return m.s?w:m;if(!m.d)return m.s&&(m.s=w.s),m}return m.d[0]?(d=!1,w=me(w,m,0,b,1).times(m),d=!0,ce(w)):(m.s=w.s,w=m),w},q.toNumber=function(){return+this},q.toOctal=function(m,b){return ne(this,8,m,b)},q.toPower=q.pow=function(m){var b,w,A,S,T,F,G=this,$=G.constructor,W=+(m=new $(m));if(!G.d||!m.d||!G.d[0]||!m.d[0])return new $(P(+G,W));if(G=new $(G),G.eq(1))return G;if(A=$.precision,T=$.rounding,m.eq(1))return ce(G,A,T);if(b=I(m.e/V),b>=m.d.length-1&&(w=W<0?-W:W)<=X)return S=ct($,G,w,A),m.s<0?new $(1).div(S):ce(S,A,T);if(F=G.s,F<0){if(b<m.d.length-1)return new $(NaN);if((m.d[b]&1)==0&&(F=1),G.e==0&&G.d[0]==1&&G.d.length==1)return G.s=F,G}return w=P(+G,W),b=w==0||!isFinite(w)?I(W*(Math.log("0."+ve(G.d))/Math.LN10+G.e+1)):new $(w+"").e,b>$.maxE+1||b<$.minE-1?new $(b>0?F/0:0):(d=!1,$.rounding=G.s=1,w=Math.min(12,(b+"").length),S=it(m.times(He(G,A+w)),A),S.d&&(S=ce(S,A+5,1),Me(S.d,A,T)&&(b=A+10,S=ce(it(m.times(He(G,b+w)),b),b+5,1),+ve(S.d).slice(A+1,A+15)+1==1e14&&(S=ce(S,A+1,0)))),S.s=F,d=!0,$.rounding=T,ce(S,A,T))},q.toPrecision=function(m,b){var w,A=this,S=A.constructor;return m===void 0?w=Ie(A,A.e<=S.toExpNeg||A.e>=S.toExpPos):(de(m,1,r),b===void 0?b=S.rounding:de(b,0,8),A=ce(new S(A),m,b),w=Ie(A,m<=A.e||A.e<=S.toExpNeg,m)),A.isNeg()&&!A.isZero()?"-"+w:w},q.toSignificantDigits=q.toSD=function(m,b){var w=this,A=w.constructor;return m===void 0?(m=A.precision,b=A.rounding):(de(m,1,r),b===void 0?b=A.rounding:de(b,0,8)),ce(new A(w),m,b)},q.toString=function(){var m=this,b=m.constructor,w=Ie(m,m.e<=b.toExpNeg||m.e>=b.toExpPos);return m.isNeg()&&!m.isZero()?"-"+w:w},q.truncated=q.trunc=function(){return ce(new this.constructor(this),this.e+1,1)},q.valueOf=q.toJSON=function(){var m=this,b=m.constructor,w=Ie(m,m.e<=b.toExpNeg||m.e>=b.toExpPos);return m.isNeg()?"-"+w:w};function ve(m){var b,w,A,S=m.length-1,T="",F=m[0];if(S>0){for(T+=F,b=1;b<S;b++)A=m[b]+"",w=V-A.length,w&&(T+=tt(w)),T+=A;F=m[b],A=F+"",w=V-A.length,w&&(T+=tt(w))}else if(F===0)return"0";for(;F%10==0;)F/=10;return T+F}function de(m,b,w){if(m!==~~m||m<b||m>w)throw Error(M+m)}function Me(m,b,w,A){var S,T,F,G;for(T=m[0];T>=10;T/=10)--b;return--b<0?(b+=V,S=0):(S=Math.ceil((b+1)/V),b%=V),T=P(10,V-b),G=m[S]%T|0,A==null?b<3?(b==0?G=G/100|0:b==1&&(G=G/10|0),F=w<4&&G==99999||w>3&&G==49999||G==5e4||G==0):F=(w<4&&G+1==T||w>3&&G+1==T/2)&&(m[S+1]/T/100|0)==P(10,b-2)-1||(G==T/2||G==0)&&(m[S+1]/T/100|0)==0:b<4?(b==0?G=G/1e3|0:b==1?G=G/100|0:b==2&&(G=G/10|0),F=(A||w<4)&&G==9999||!A&&w>3&&G==4999):F=((A||w<4)&&G+1==T||!A&&w>3&&G+1==T/2)&&(m[S+1]/T/1e3|0)==P(10,b-3)-1,F}function _e(m,b,w){for(var A,S=[0],T,F=0,G=m.length;F<G;){for(T=S.length;T--;)S[T]*=b;for(S[0]+=n.indexOf(m.charAt(F++)),A=0;A<S.length;A++)S[A]>w-1&&(S[A+1]===void 0&&(S[A+1]=0),S[A+1]+=S[A]/w|0,S[A]%=w)}return S.reverse()}function Te(m,b){var w,A,S;if(b.isZero())return b;A=b.d.length,A<32?(w=Math.ceil(A/3),S=(1/Vt(4,w)).toString()):(w=16,S="2.3283064365386962890625e-10"),m.precision+=w,b=At(m,1,b.times(S),new m(1));for(var T=w;T--;){var F=b.times(b);b=F.times(F).minus(F).times(8).plus(1)}return m.precision-=w,b}var me=function(){function m(A,S,T){var F,G=0,$=A.length;for(A=A.slice();$--;)F=A[$]*S+G,A[$]=F%T|0,G=F/T|0;return G&&A.unshift(G),A}function b(A,S,T,F){var G,$;if(T!=F)$=T>F?1:-1;else for(G=$=0;G<T;G++)if(A[G]!=S[G]){$=A[G]>S[G]?1:-1;break}return $}function w(A,S,T,F){for(var G=0;T--;)A[T]-=G,G=A[T]<S[T]?1:0,A[T]=G*F+A[T]-S[T];for(;!A[0]&&A.length>1;)A.shift()}return function(A,S,T,F,G,$){var W,ae,se,ue,Ne,Ze,ke,Dt,yt,Qt,Ye,Tt,sn,_t,An,Sr,Fr,cn,rr,Br,yr=A.constructor,Mn=A.s==S.s?1:-1,Ft=A.d,st=S.d;if(!Ft||!Ft[0]||!st||!st[0])return new yr(!A.s||!S.s||(Ft?st&&Ft[0]==st[0]:!st)?NaN:Ft&&Ft[0]==0||!st?Mn*0:Mn/0);for($?(Ne=1,ae=A.e-S.e):($=K,Ne=V,ae=I(A.e/Ne)-I(S.e/Ne)),rr=st.length,Fr=Ft.length,yt=new yr(Mn),Qt=yt.d=[],se=0;st[se]==(Ft[se]||0);se++);if(st[se]>(Ft[se]||0)&&ae--,T==null?(_t=T=yr.precision,F=yr.rounding):G?_t=T+(A.e-S.e)+1:_t=T,_t<0)Qt.push(1),Ze=!0;else{if(_t=_t/Ne+2|0,se=0,rr==1){for(ue=0,st=st[0],_t++;(se<Fr||ue)&&_t--;se++)An=ue*$+(Ft[se]||0),Qt[se]=An/st|0,ue=An%st|0;Ze=ue||se<Fr}else{for(ue=$/(st[0]+1)|0,ue>1&&(st=m(st,ue,$),Ft=m(Ft,ue,$),rr=st.length,Fr=Ft.length),Sr=rr,Ye=Ft.slice(0,rr),Tt=Ye.length;Tt<rr;)Ye[Tt++]=0;Br=st.slice(),Br.unshift(0),cn=st[0],st[1]>=$/2&&++cn;do ue=0,W=b(st,Ye,rr,Tt),W<0?(sn=Ye[0],rr!=Tt&&(sn=sn*$+(Ye[1]||0)),ue=sn/cn|0,ue>1?(ue>=$&&(ue=$-1),ke=m(st,ue,$),Dt=ke.length,Tt=Ye.length,W=b(ke,Ye,Dt,Tt),W==1&&(ue--,w(ke,rr<Dt?Br:st,Dt,$))):(ue==0&&(W=ue=1),ke=st.slice()),Dt=ke.length,Dt<Tt&&ke.unshift(0),w(Ye,ke,Tt,$),W==-1&&(Tt=Ye.length,W=b(st,Ye,rr,Tt),W<1&&(ue++,w(Ye,rr<Tt?Br:st,Tt,$))),Tt=Ye.length):W===0&&(ue++,Ye=[0]),Qt[se++]=ue,W&&Ye[0]?Ye[Tt++]=Ft[Sr]||0:(Ye=[Ft[Sr]],Tt=1);while((Sr++<Fr||Ye[0]!==void 0)&&_t--);Ze=Ye[0]!==void 0}Qt[0]||Qt.shift()}if(Ne==1)yt.e=ae,g=Ze;else{for(se=1,ue=Qt[0];ue>=10;ue/=10)se++;yt.e=se+ae*Ne-1,ce(yt,G?T+yt.e+1:T,F,Ze)}return yt}}();function ce(m,b,w,A){var S,T,F,G,$,W,ae,se,ue,Ne=m.constructor;e:if(b!=null){if(se=m.d,!se)return m;for(S=1,G=se[0];G>=10;G/=10)S++;if(T=b-S,T<0)T+=V,F=b,ae=se[ue=0],$=ae/P(10,S-F-1)%10|0;else if(ue=Math.ceil((T+1)/V),G=se.length,ue>=G)if(A){for(;G++<=ue;)se.push(0);ae=$=0,S=1,T%=V,F=T-V+1}else break e;else{for(ae=G=se[ue],S=1;G>=10;G/=10)S++;T%=V,F=T-V+S,$=F<0?0:ae/P(10,S-F-1)%10|0}if(A=A||b<0||se[ue+1]!==void 0||(F<0?ae:ae%P(10,S-F-1)),W=w<4?($||A)&&(w==0||w==(m.s<0?3:2)):$>5||$==5&&(w==4||A||w==6&&(T>0?F>0?ae/P(10,S-F):0:se[ue-1])%10&1||w==(m.s<0?8:7)),b<1||!se[0])return se.length=0,W?(b-=m.e+1,se[0]=P(10,(V-b%V)%V),m.e=-b||0):se[0]=m.e=0,m;if(T==0?(se.length=ue,G=1,ue--):(se.length=ue+1,G=P(10,V-T),se[ue]=F>0?(ae/P(10,S-F)%P(10,F)|0)*G:0),W)for(;;)if(ue==0){for(T=1,F=se[0];F>=10;F/=10)T++;for(F=se[0]+=G,G=1;F>=10;F/=10)G++;T!=G&&(m.e++,se[0]==K&&(se[0]=1));break}else{if(se[ue]+=G,se[ue]!=K)break;se[ue--]=0,G=1}for(T=se.length;se[--T]===0;)se.pop()}return d&&(m.e>Ne.maxE?(m.d=null,m.e=NaN):m.e<Ne.minE&&(m.e=0,m.d=[0])),m}function Ie(m,b,w){if(!m.isFinite())return Pt(m);var A,S=m.e,T=ve(m.d),F=T.length;return b?(w&&(A=w-F)>0?T=T.charAt(0)+"."+T.slice(1)+tt(A):F>1&&(T=T.charAt(0)+"."+T.slice(1)),T=T+(m.e<0?"e":"e+")+m.e):S<0?(T="0."+tt(-S-1)+T,w&&(A=w-F)>0&&(T+=tt(A))):S>=F?(T+=tt(S+1-F),w&&(A=w-S-1)>0&&(T=T+"."+tt(A))):((A=S+1)<F&&(T=T.slice(0,A)+"."+T.slice(A)),w&&(A=w-F)>0&&(S+1===F&&(T+="."),T+=tt(A))),T}function je(m,b){var w=m[0];for(b*=V;w>=10;w/=10)b++;return b}function Xe(m,b,w){if(b>Q)throw d=!0,w&&(m.precision=w),Error(L);return ce(new m(a),b,1,!0)}function Ue(m,b,w){if(b>ge)throw Error(L);return ce(new m(s),b,w,!0)}function ht(m){var b=m.length-1,w=b*V+1;if(b=m[b],b){for(;b%10==0;b/=10)w--;for(b=m[0];b>=10;b/=10)w++}return w}function tt(m){for(var b="";m--;)b+="0";return b}function ct(m,b,w,A){var S,T=new m(1),F=Math.ceil(A/V+4);for(d=!1;;){if(w%2&&(T=T.times(b),ie(T.d,F)&&(S=!0)),w=I(w/2),w===0){w=T.d.length-1,S&&T.d[w]===0&&++T.d[w];break}b=b.times(b),ie(b.d,F)}return d=!0,T}function ot(m){return m.d[m.d.length-1]&1}function ut(m,b,w){for(var A,S=new m(b[0]),T=0;++T<b.length;)if(A=new m(b[T]),A.s)S[w](A)&&(S=A);else{S=A;break}return S}function it(m,b){var w,A,S,T,F,G,$,W=0,ae=0,se=0,ue=m.constructor,Ne=ue.rounding,Ze=ue.precision;if(!m.d||!m.d[0]||m.e>17)return new ue(m.d?m.d[0]?m.s<0?0:1/0:1:m.s?m.s<0?0:m:0/0);for(b==null?(d=!1,$=Ze):$=b,G=new ue(.03125);m.e>-2;)m=m.times(G),se+=5;for(A=Math.log(P(2,se))/Math.LN10*2+5|0,$+=A,w=T=F=new ue(1),ue.precision=$;;){if(T=ce(T.times(m),$,1),w=w.times(++ae),G=F.plus(me(T,w,$,1)),ve(G.d).slice(0,$)===ve(F.d).slice(0,$)){for(S=se;S--;)F=ce(F.times(F),$,1);if(b==null)if(W<3&&Me(F.d,$-A,Ne,W))ue.precision=$+=10,w=T=G=new ue(1),ae=0,W++;else return ce(F,ue.precision=Ze,Ne,d=!0);else return ue.precision=Ze,F}F=G}}function He(m,b){var w,A,S,T,F,G,$,W,ae,se,ue,Ne=1,Ze=10,ke=m,Dt=ke.d,yt=ke.constructor,Qt=yt.rounding,Ye=yt.precision;if(ke.s<0||!Dt||!Dt[0]||!ke.e&&Dt[0]==1&&Dt.length==1)return new yt(Dt&&!Dt[0]?-1/0:ke.s!=1?NaN:Dt?0:ke);if(b==null?(d=!1,ae=Ye):ae=b,yt.precision=ae+=Ze,w=ve(Dt),A=w.charAt(0),Math.abs(T=ke.e)<15e14){for(;A<7&&A!=1||A==1&&w.charAt(1)>3;)ke=ke.times(m),w=ve(ke.d),A=w.charAt(0),Ne++;T=ke.e,A>1?(ke=new yt("0."+w),T++):ke=new yt(A+"."+w.slice(1))}else return W=Xe(yt,ae+2,Ye).times(T+""),ke=He(new yt(A+"."+w.slice(1)),ae-Ze).plus(W),yt.precision=Ye,b==null?ce(ke,Ye,Qt,d=!0):ke;for(se=ke,$=F=ke=me(ke.minus(1),ke.plus(1),ae,1),ue=ce(ke.times(ke),ae,1),S=3;;){if(F=ce(F.times(ue),ae,1),W=$.plus(me(F,new yt(S),ae,1)),ve(W.d).slice(0,ae)===ve($.d).slice(0,ae))if($=$.times(2),T!==0&&($=$.plus(Xe(yt,ae+2,Ye).times(T+""))),$=me($,new yt(Ne),ae,1),b==null)if(Me($.d,ae-Ze,Qt,G))yt.precision=ae+=Ze,W=F=ke=me(se.minus(1),se.plus(1),ae,1),ue=ce(ke.times(ke),ae,1),S=G=1;else return ce($,yt.precision=Ye,Qt,d=!0);else return yt.precision=Ye,$;$=W,S+=2}}function Pt(m){return String(m.s*m.s/0)}function lt(m,b){var w,A,S;for((w=b.indexOf("."))>-1&&(b=b.replace(".","")),(A=b.search(/e/i))>0?(w<0&&(w=A),w+=+b.slice(A+1),b=b.substring(0,A)):w<0&&(w=b.length),A=0;b.charCodeAt(A)===48;A++);for(S=b.length;b.charCodeAt(S-1)===48;--S);if(b=b.slice(A,S),b){if(S-=A,m.e=w=w-A-1,m.d=[],A=(w+1)%V,w<0&&(A+=V),A<S){for(A&&m.d.push(+b.slice(0,A)),S-=V;A<S;)m.d.push(+b.slice(A,A+=V));b=b.slice(A),A=V-b.length}else A-=S;for(;A--;)b+="0";m.d.push(+b),d&&(m.e>m.constructor.maxE?(m.d=null,m.e=NaN):m.e<m.constructor.minE&&(m.e=0,m.d=[0]))}else m.e=0,m.d=[0];return m}function rt(m,b){var w,A,S,T,F,G,$,W,ae;if(b.indexOf("_")>-1){if(b=b.replace(/(\d)_(?=\d)/g,"$1"),B.test(b))return lt(m,b)}else if(b==="Infinity"||b==="NaN")return+b||(m.s=NaN),m.e=NaN,m.d=null,m;if(Z.test(b))w=16,b=b.toLowerCase();else if(D.test(b))w=2;else if(O.test(b))w=8;else throw Error(M+b);for(T=b.search(/p/i),T>0?($=+b.slice(T+1),b=b.substring(2,T)):b=b.slice(2),T=b.indexOf("."),F=T>=0,A=m.constructor,F&&(b=b.replace(".",""),G=b.length,T=G-T,S=ct(A,new A(w),T,T*2)),W=_e(b,w,K),ae=W.length-1,T=ae;W[T]===0;--T)W.pop();return T<0?new A(m.s*0):(m.e=je(W,ae),m.d=W,d=!1,F&&(m=me(m,S,G*4)),$&&(m=m.times(Math.abs($)<54?P(2,$):h.pow(2,$))),d=!0,m)}function xt(m,b){var w,A=b.d.length;if(A<3)return b.isZero()?b:At(m,2,b,b);w=1.4*Math.sqrt(A),w=w>16?16:w|0,b=b.times(1/Vt(5,w)),b=At(m,2,b,b);for(var S,T=new m(5),F=new m(16),G=new m(20);w--;)S=b.times(b),b=b.times(T.plus(S.times(F.times(S).minus(G))));return b}function At(m,b,w,A,S){var T,F,G,$,W=1,ae=m.precision,se=Math.ceil(ae/V);for(d=!1,$=w.times(w),G=new m(A);;){if(F=me(G.times($),new m(b++*b++),ae,1),G=S?A.plus(F):A.minus(F),A=me(F.times($),new m(b++*b++),ae,1),F=G.plus(A),F.d[se]!==void 0){for(T=se;F.d[T]===G.d[T]&&T--;);if(T==-1)break}T=G,G=A,A=F,F=T,W++}return d=!0,F.d.length=se+1,F}function Vt(m,b){for(var w=m;--b;)w*=m;return w}function H(m,b){var w,A=b.s<0,S=Ue(m,m.precision,1),T=S.times(.5);if(b=b.abs(),b.lte(T))return u=A?4:1,b;if(w=b.divToInt(S),w.isZero())u=A?3:2;else{if(b=b.minus(w.times(S)),b.lte(T))return u=ot(w)?A?2:3:A?4:1,b;u=ot(w)?A?1:4:A?3:2}return b.minus(S).abs()}function ne(m,b,w,A){var S,T,F,G,$,W,ae,se,ue,Ne=m.constructor,Ze=w!==void 0;if(Ze?(de(w,1,r),A===void 0?A=Ne.rounding:de(A,0,8)):(w=Ne.precision,A=Ne.rounding),!m.isFinite())ae=Pt(m);else{for(ae=Ie(m),F=ae.indexOf("."),Ze?(S=2,b==16?w=w*4-3:b==8&&(w=w*3-2)):S=b,F>=0&&(ae=ae.replace(".",""),ue=new Ne(1),ue.e=ae.length-F,ue.d=_e(Ie(ue),10,S),ue.e=ue.d.length),se=_e(ae,10,S),T=$=se.length;se[--$]==0;)se.pop();if(!se[0])ae=Ze?"0p+0":"0";else{if(F<0?T--:(m=new Ne(m),m.d=se,m.e=T,m=me(m,ue,w,A,0,S),se=m.d,T=m.e,W=g),F=se[w],G=S/2,W=W||se[w+1]!==void 0,W=A<4?(F!==void 0||W)&&(A===0||A===(m.s<0?3:2)):F>G||F===G&&(A===4||W||A===6&&se[w-1]&1||A===(m.s<0?8:7)),se.length=w,W)for(;++se[--w]>S-1;)se[w]=0,w||(++T,se.unshift(1));for($=se.length;!se[$-1];--$);for(F=0,ae="";F<$;F++)ae+=n.charAt(se[F]);if(Ze){if($>1)if(b==16||b==8){for(F=b==16?4:3,--$;$%F;$++)ae+="0";for(se=_e(ae,S,b),$=se.length;!se[$-1];--$);for(F=1,ae="1.";F<$;F++)ae+=n.charAt(se[F])}else ae=ae.charAt(0)+"."+ae.slice(1);ae=ae+(T<0?"p":"p+")+T}else if(T<0){for(;++T;)ae="0"+ae;ae="0."+ae}else if(++T>$)for(T-=$;T--;)ae+="0";else T<$&&(ae=ae.slice(0,T)+"."+ae.slice(T))}ae=(b==16?"0x":b==2?"0b":b==8?"0o":"")+ae}return m.s<0?"-"+ae:ae}function ie(m,b){if(m.length>b)return m.length=b,!0}function J(m){return new this(m).abs()}function Ee(m){return new this(m).acos()}function Re(m){return new this(m).acosh()}function Le(m,b){return new this(m).plus(b)}function Se(m){return new this(m).asin()}function we(m){return new this(m).asinh()}function De(m){return new this(m).atan()}function zt(m){return new this(m).atanh()}function Kt(m,b){m=new this(m),b=new this(b);var w,A=this.precision,S=this.rounding,T=A+4;return!m.s||!b.s?w=new this(NaN):!m.d&&!b.d?(w=Ue(this,T,1).times(b.s>0?.25:.75),w.s=m.s):!b.d||m.isZero()?(w=b.s<0?Ue(this,A,S):new this(0),w.s=m.s):!m.d||b.isZero()?(w=Ue(this,T,1).times(.5),w.s=m.s):b.s<0?(this.precision=T,this.rounding=1,w=this.atan(me(m,b,T,1)),b=Ue(this,T,1),this.precision=A,this.rounding=S,w=m.s<0?w.minus(b):w.plus(b)):w=this.atan(me(m,b,T,1)),w}function tr(m){return new this(m).cbrt()}function zr(m){return ce(m=new this(m),m.e+1,2)}function Dr(m,b,w){return new this(m).clamp(b,w)}function _n(m){if(!m||typeof m!="object")throw Error(C+"Object expected");var b,w,A,S=m.defaults===!0,T=["precision",1,r,"rounding",0,8,"toExpNeg",-t,0,"toExpPos",0,t,"maxE",0,t,"minE",-t,0,"modulo",0,9];for(b=0;b<T.length;b+=3)if(w=T[b],S&&(this[w]=f[w]),(A=m[w])!==void 0)if(I(A)===A&&A>=T[b+1]&&A<=T[b+2])this[w]=A;else throw Error(M+w+": "+A);if(w="crypto",S&&(this[w]=f[w]),(A=m[w])!==void 0)if(A===!0||A===!1||A===0||A===1)if(A)if(typeof crypto!="undefined"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[w]=!0;else throw Error(v);else this[w]=!1;else throw Error(M+w+": "+A);return this}function en(m){return new this(m).cos()}function bn(m){return new this(m).cosh()}function tn(m){var b,w,A;function S(T){var F,G,$,W=this;if(!(W instanceof S))return new S(T);if(W.constructor=S,qr(T)){W.s=T.s,d?!T.d||T.e>S.maxE?(W.e=NaN,W.d=null):T.e<S.minE?(W.e=0,W.d=[0]):(W.e=T.e,W.d=T.d.slice()):(W.e=T.e,W.d=T.d?T.d.slice():T.d);return}if($=typeof T,$==="number"){if(T===0){W.s=1/T<0?-1:1,W.e=0,W.d=[0];return}if(T<0?(T=-T,W.s=-1):W.s=1,T===~~T&&T<1e7){for(F=0,G=T;G>=10;G/=10)F++;d?F>S.maxE?(W.e=NaN,W.d=null):F<S.minE?(W.e=0,W.d=[0]):(W.e=F,W.d=[T]):(W.e=F,W.d=[T]);return}else if(T*0!=0){T||(W.s=NaN),W.e=NaN,W.d=null;return}return lt(W,T.toString())}else if($!=="string")throw Error(M+T);return(G=T.charCodeAt(0))===45?(T=T.slice(1),W.s=-1):(G===43&&(T=T.slice(1)),W.s=1),B.test(T)?lt(W,T):rt(W,T)}if(S.prototype=q,S.ROUND_UP=0,S.ROUND_DOWN=1,S.ROUND_CEIL=2,S.ROUND_FLOOR=3,S.ROUND_HALF_UP=4,S.ROUND_HALF_DOWN=5,S.ROUND_HALF_EVEN=6,S.ROUND_HALF_CEIL=7,S.ROUND_HALF_FLOOR=8,S.EUCLID=9,S.config=S.set=_n,S.clone=tn,S.isDecimal=qr,S.abs=J,S.acos=Ee,S.acosh=Re,S.add=Le,S.asin=Se,S.asinh=we,S.atan=De,S.atanh=zt,S.atan2=Kt,S.cbrt=tr,S.ceil=zr,S.clamp=Dr,S.cos=en,S.cosh=bn,S.div=rn,S.exp=Hr,S.floor=nn,S.hypot=kr,S.ln=dr,S.log=En,S.log10=Cr,S.log2=Wr,S.max=wn,S.min=Cn,S.mod=jr,S.mul=$t,S.pow=Zt,S.random=jt,S.round=an,S.sign=Xr,S.sin=on,S.sinh=Ar,S.sqrt=Mr,S.sub=gt,S.sum=Or,S.tan=Pe,S.tanh=Mt,S.trunc=Xt,m===void 0&&(m={}),m&&m.defaults!==!0)for(A=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],b=0;b<A.length;)m.hasOwnProperty(w=A[b++])||(m[w]=this[w]);return S.config(m),S}function rn(m,b){return new this(m).div(b)}function Hr(m){return new this(m).exp()}function nn(m){return ce(m=new this(m),m.e+1,3)}function kr(){var m,b,w=new this(0);for(d=!1,m=0;m<arguments.length;)if(b=new this(arguments[m++]),b.d)w.d&&(w=w.plus(b.times(b)));else{if(b.s)return d=!0,new this(1/0);w=b}return d=!0,w.sqrt()}function qr(m){return m instanceof h||m&&m.toStringTag===y||!1}function dr(m){return new this(m).ln()}function En(m,b){return new this(m).log(b)}function Wr(m){return new this(m).log(2)}function Cr(m){return new this(m).log(10)}function wn(){return ut(this,arguments,"lt")}function Cn(){return ut(this,arguments,"gt")}function jr(m,b){return new this(m).mod(b)}function $t(m,b){return new this(m).mul(b)}function Zt(m,b){return new this(m).pow(b)}function jt(m){var b,w,A,S,T=0,F=new this(1),G=[];if(m===void 0?m=this.precision:de(m,1,r),A=Math.ceil(m/V),this.crypto)if(crypto.getRandomValues)for(b=crypto.getRandomValues(new Uint32Array(A));T<A;)S=b[T],S>=429e7?b[T]=crypto.getRandomValues(new Uint32Array(1))[0]:G[T++]=S%1e7;else if(crypto.randomBytes){for(b=crypto.randomBytes(A*=4);T<A;)S=b[T]+(b[T+1]<<8)+(b[T+2]<<16)+((b[T+3]&127)<<24),S>=214e7?crypto.randomBytes(4).copy(b,T):(G.push(S%1e7),T+=4);T=A/4}else throw Error(v);else for(;T<A;)G[T++]=Math.random()*1e7|0;for(A=G[--T],m%=V,A&&m&&(S=P(10,V-m),G[T]=(A/S|0)*S);G[T]===0;T--)G.pop();if(T<0)w=0,G=[0];else{for(w=-1;G[0]===0;w-=V)G.shift();for(A=1,S=G[0];S>=10;S/=10)A++;A<V&&(w-=V-A)}return F.e=w,F.d=G,F}function an(m){return ce(m=new this(m),m.e+1,this.rounding)}function Xr(m){return m=new this(m),m.d?m.d[0]?m.s:0*m.s:m.s||NaN}function on(m){return new this(m).sin()}function Ar(m){return new this(m).sinh()}function Mr(m){return new this(m).sqrt()}function gt(m,b){return new this(m).sub(b)}function Or(){var m=0,b=arguments,w=new this(b[m]);for(d=!1;w.s&&++m<b.length;)w=w.plus(b[m]);return d=!0,ce(w,this.precision,this.rounding)}function Pe(m){return new this(m).tan()}function Mt(m){return new this(m).tanh()}function Xt(m){return ce(m=new this(m),m.e+1,1)}h=tn(f),h.prototype.constructor=h,h.default=h.Decimal=h,a=new h(a),s=new h(s),typeof define=="function"&&define.amd?define(function(){return h}):typeof Co!="undefined"&&Co.exports?(typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"&&(q[Symbol.for("nodejs.util.inspect.custom")]=q.toString,q[Symbol.toStringTag]="Decimal"),Co.exports=h):(e||(e=typeof self!="undefined"&&self&&self.self==self?self:window),l=e.Decimal,h.noConflict=function(){return e.Decimal=l,h},e.Decimal=h)})(Sc)});var Ic=Pn((ss,Nc)=>{(function(e){"use strict";var t=function(l){return(Math.exp(l)+Math.exp(-l))*.5},r=function(l){return(Math.exp(l)-Math.exp(-l))*.5},n=function(l){var u=Math.PI/4;if(-u>l||l>u)return Math.cos(l)-1;var d=l*l;return d*(d*(d*(d*(d*(d*(d*(d/20922789888e3-1/87178291200)+1/479001600)-1/3628800)+1/40320)-1/720)+1/24)-1/2)},a=function(l,u){var d=Math.abs(l),C=Math.abs(u);return d<3e3&&C<3e3?Math.sqrt(d*d+C*C):(d<C?(d=C,C=l/u):C=u/l,d*Math.sqrt(1+C*C))},s=function(){throw SyntaxError("Invalid Param")};function f(l,u){var d=Math.abs(l),C=Math.abs(u);return l===0?Math.log(C):u===0?Math.log(d):d<3e3&&C<3e3?Math.log(l*l+u*u)*.5:Math.log(l/Math.cos(Math.atan2(u,l)))}var h=function(l,u){var d={re:0,im:0};if(l==null)d.re=d.im=0;else if(u!==void 0)d.re=l,d.im=u;else switch(typeof l){case"object":if("im"in l&&"re"in l)d.re=l.re,d.im=l.im;else if("abs"in l&&"arg"in l){if(!Number.isFinite(l.abs)&&Number.isFinite(l.arg))return g.INFINITY;d.re=l.abs*Math.cos(l.arg),d.im=l.abs*Math.sin(l.arg)}else if("r"in l&&"phi"in l){if(!Number.isFinite(l.r)&&Number.isFinite(l.phi))return g.INFINITY;d.re=l.r*Math.cos(l.phi),d.im=l.r*Math.sin(l.phi)}else l.length===2?(d.re=l[0],d.im=l[1]):s();break;case"string":d.im=d.re=0;var C=l.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g),M=1,L=0;C===null&&s();for(var v=0;v<C.length;v++){var y=C[v];y===" "||y==="	"||y===`
`||(y==="+"?M++:y==="-"?L++:y==="i"||y==="I"?(M+L===0&&s(),C[v+1]!==" "&&!isNaN(C[v+1])?(d.im+=parseFloat((L%2?"-":"")+C[v+1]),v++):d.im+=parseFloat((L%2?"-":"")+"1"),M=L=0):((M+L===0||isNaN(y))&&s(),C[v+1]==="i"||C[v+1]==="I"?(d.im+=parseFloat((L%2?"-":"")+y),v++):d.re+=parseFloat((L%2?"-":"")+y),M=L=0))}M+L>0&&s();break;case"number":d.im=0,d.re=l;break;default:s()}return isNaN(d.re)||isNaN(d.im),d};function g(l,u){if(!(this instanceof g))return new g(l,u);var d=h(l,u);this.re=d.re,this.im=d.im}g.prototype={re:0,im:0,sign:function(){var l=this.abs();return new g(this.re/l,this.im/l)},add:function(l,u){var d=new g(l,u);return this.isInfinite()&&d.isInfinite()?g.NAN:this.isInfinite()||d.isInfinite()?g.INFINITY:new g(this.re+d.re,this.im+d.im)},sub:function(l,u){var d=new g(l,u);return this.isInfinite()&&d.isInfinite()?g.NAN:this.isInfinite()||d.isInfinite()?g.INFINITY:new g(this.re-d.re,this.im-d.im)},mul:function(l,u){var d=new g(l,u);return this.isInfinite()&&d.isZero()||this.isZero()&&d.isInfinite()?g.NAN:this.isInfinite()||d.isInfinite()?g.INFINITY:d.im===0&&this.im===0?new g(this.re*d.re,0):new g(this.re*d.re-this.im*d.im,this.re*d.im+this.im*d.re)},div:function(l,u){var d=new g(l,u);if(this.isZero()&&d.isZero()||this.isInfinite()&&d.isInfinite())return g.NAN;if(this.isInfinite()||d.isZero())return g.INFINITY;if(this.isZero()||d.isInfinite())return g.ZERO;l=this.re,u=this.im;var C=d.re,M=d.im,L,v;return M===0?new g(l/C,u/C):Math.abs(C)<Math.abs(M)?(v=C/M,L=C*v+M,new g((l*v+u)/L,(u*v-l)/L)):(v=M/C,L=M*v+C,new g((l+u*v)/L,(u-l*v)/L))},pow:function(l,u){var d=new g(l,u);if(l=this.re,u=this.im,d.isZero())return g.ONE;if(d.im===0){if(u===0&&l>0)return new g(Math.pow(l,d.re),0);if(l===0)switch((d.re%4+4)%4){case 0:return new g(Math.pow(u,d.re),0);case 1:return new g(0,Math.pow(u,d.re));case 2:return new g(-Math.pow(u,d.re),0);case 3:return new g(0,-Math.pow(u,d.re))}}if(l===0&&u===0&&d.re>0&&d.im>=0)return g.ZERO;var C=Math.atan2(u,l),M=f(l,u);return l=Math.exp(d.re*M-d.im*C),u=d.im*M+d.re*C,new g(l*Math.cos(u),l*Math.sin(u))},sqrt:function(){var l=this.re,u=this.im,d=this.abs(),C,M;if(l>=0){if(u===0)return new g(Math.sqrt(l),0);C=.5*Math.sqrt(2*(d+l))}else C=Math.abs(u)/Math.sqrt(2*(d-l));return l<=0?M=.5*Math.sqrt(2*(d-l)):M=Math.abs(u)/Math.sqrt(2*(d+l)),new g(C,u<0?-M:M)},exp:function(){var l=Math.exp(this.re);return this.im===0,new g(l*Math.cos(this.im),l*Math.sin(this.im))},expm1:function(){var l=this.re,u=this.im;return new g(Math.expm1(l)*Math.cos(u)+n(u),Math.exp(l)*Math.sin(u))},log:function(){var l=this.re,u=this.im;return u===0&&l>0,new g(f(l,u),Math.atan2(u,l))},abs:function(){return a(this.re,this.im)},arg:function(){return Math.atan2(this.im,this.re)},sin:function(){var l=this.re,u=this.im;return new g(Math.sin(l)*t(u),Math.cos(l)*r(u))},cos:function(){var l=this.re,u=this.im;return new g(Math.cos(l)*t(u),-Math.sin(l)*r(u))},tan:function(){var l=2*this.re,u=2*this.im,d=Math.cos(l)+t(u);return new g(Math.sin(l)/d,r(u)/d)},cot:function(){var l=2*this.re,u=2*this.im,d=Math.cos(l)-t(u);return new g(-Math.sin(l)/d,r(u)/d)},sec:function(){var l=this.re,u=this.im,d=.5*t(2*u)+.5*Math.cos(2*l);return new g(Math.cos(l)*t(u)/d,Math.sin(l)*r(u)/d)},csc:function(){var l=this.re,u=this.im,d=.5*t(2*u)-.5*Math.cos(2*l);return new g(Math.sin(l)*t(u)/d,-Math.cos(l)*r(u)/d)},asin:function(){var l=this.re,u=this.im,d=new g(u*u-l*l+1,-2*l*u).sqrt(),C=new g(d.re-u,d.im+l).log();return new g(C.im,-C.re)},acos:function(){var l=this.re,u=this.im,d=new g(u*u-l*l+1,-2*l*u).sqrt(),C=new g(d.re-u,d.im+l).log();return new g(Math.PI/2-C.im,C.re)},atan:function(){var l=this.re,u=this.im;if(l===0){if(u===1)return new g(0,Infinity);if(u===-1)return new g(0,-Infinity)}var d=l*l+(1-u)*(1-u),C=new g((1-u*u-l*l)/d,-2*l/d).log();return new g(-.5*C.im,.5*C.re)},acot:function(){var l=this.re,u=this.im;if(u===0)return new g(Math.atan2(1,l),0);var d=l*l+u*u;return d!==0?new g(l/d,-u/d).atan():new g(l!==0?l/0:0,u!==0?-u/0:0).atan()},asec:function(){var l=this.re,u=this.im;if(l===0&&u===0)return new g(0,Infinity);var d=l*l+u*u;return d!==0?new g(l/d,-u/d).acos():new g(l!==0?l/0:0,u!==0?-u/0:0).acos()},acsc:function(){var l=this.re,u=this.im;if(l===0&&u===0)return new g(Math.PI/2,Infinity);var d=l*l+u*u;return d!==0?new g(l/d,-u/d).asin():new g(l!==0?l/0:0,u!==0?-u/0:0).asin()},sinh:function(){var l=this.re,u=this.im;return new g(r(l)*Math.cos(u),t(l)*Math.sin(u))},cosh:function(){var l=this.re,u=this.im;return new g(t(l)*Math.cos(u),r(l)*Math.sin(u))},tanh:function(){var l=2*this.re,u=2*this.im,d=t(l)+Math.cos(u);return new g(r(l)/d,Math.sin(u)/d)},coth:function(){var l=2*this.re,u=2*this.im,d=t(l)-Math.cos(u);return new g(r(l)/d,-Math.sin(u)/d)},csch:function(){var l=this.re,u=this.im,d=Math.cos(2*u)-t(2*l);return new g(-2*r(l)*Math.cos(u)/d,2*t(l)*Math.sin(u)/d)},sech:function(){var l=this.re,u=this.im,d=Math.cos(2*u)+t(2*l);return new g(2*t(l)*Math.cos(u)/d,-2*r(l)*Math.sin(u)/d)},asinh:function(){var l=this.im;this.im=-this.re,this.re=l;var u=this.asin();return this.re=-this.im,this.im=l,l=u.re,u.re=-u.im,u.im=l,u},acosh:function(){var l=this.acos();if(l.im<=0){var u=l.re;l.re=-l.im,l.im=u}else{var u=l.im;l.im=-l.re,l.re=u}return l},atanh:function(){var l=this.re,u=this.im,d=l>1&&u===0,C=1-l,M=1+l,L=C*C+u*u,v=L!==0?new g((M*C-u*u)/L,(u*C+M*u)/L):new g(l!==-1?l/0:0,u!==0?u/0:0),y=v.re;return v.re=f(v.re,v.im)/2,v.im=Math.atan2(v.im,y)/2,d&&(v.im=-v.im),v},acoth:function(){var l=this.re,u=this.im;if(l===0&&u===0)return new g(0,Math.PI/2);var d=l*l+u*u;return d!==0?new g(l/d,-u/d).atanh():new g(l!==0?l/0:0,u!==0?-u/0:0).atanh()},acsch:function(){var l=this.re,u=this.im;if(u===0)return new g(l!==0?Math.log(l+Math.sqrt(l*l+1)):Infinity,0);var d=l*l+u*u;return d!==0?new g(l/d,-u/d).asinh():new g(l!==0?l/0:0,u!==0?-u/0:0).asinh()},asech:function(){var l=this.re,u=this.im;if(this.isZero())return g.INFINITY;var d=l*l+u*u;return d!==0?new g(l/d,-u/d).acosh():new g(l!==0?l/0:0,u!==0?-u/0:0).acosh()},inverse:function(){if(this.isZero())return g.INFINITY;if(this.isInfinite())return g.ZERO;var l=this.re,u=this.im,d=l*l+u*u;return new g(l/d,-u/d)},conjugate:function(){return new g(this.re,-this.im)},neg:function(){return new g(-this.re,-this.im)},ceil:function(l){return l=Math.pow(10,l||0),new g(Math.ceil(this.re*l)/l,Math.ceil(this.im*l)/l)},floor:function(l){return l=Math.pow(10,l||0),new g(Math.floor(this.re*l)/l,Math.floor(this.im*l)/l)},round:function(l){return l=Math.pow(10,l||0),new g(Math.round(this.re*l)/l,Math.round(this.im*l)/l)},equals:function(l,u){var d=new g(l,u);return Math.abs(d.re-this.re)<=g.EPSILON&&Math.abs(d.im-this.im)<=g.EPSILON},clone:function(){return new g(this.re,this.im)},toString:function(){var l=this.re,u=this.im,d="";return this.isNaN()?"NaN":this.isInfinite()?"Infinity":(Math.abs(l)<g.EPSILON&&(l=0),Math.abs(u)<g.EPSILON&&(u=0),u===0?d+l:(l!==0?(d+=l,d+=" ",u<0?(u=-u,d+="-"):d+="+",d+=" "):u<0&&(u=-u,d+="-"),u!==1&&(d+=u),d+"i"))},toVector:function(){return[this.re,this.im]},valueOf:function(){return this.im===0?this.re:null},isNaN:function(){return isNaN(this.re)||isNaN(this.im)},isZero:function(){return this.im===0&&this.re===0},isFinite:function(){return isFinite(this.re)&&isFinite(this.im)},isInfinite:function(){return!(this.isNaN()||this.isFinite())}},g.ZERO=new g(0,0),g.ONE=new g(1,0),g.I=new g(0,1),g.PI=new g(Math.PI,0),g.E=new g(Math.E,0),g.INFINITY=new g(Infinity,Infinity),g.NAN=new g(NaN,NaN),g.EPSILON=1e-15,typeof define=="function"&&define.amd?define([],function(){return g}):typeof ss=="object"?(Object.defineProperty(g,"__esModule",{value:!0}),g.default=g,g.Complex=g,Nc.exports=g):e.Complex=g})(ss)});var Dc=Pn((cs,Pc)=>{(function(e){"use strict";var t=2e3,r={s:1,n:0,d:1};function n(v){function y(){var P=Error.apply(this,arguments);P.name=this.name=v,this.stack=P.stack,this.message=P.message}function I(){}return I.prototype=Error.prototype,y.prototype=new I,y}var a=L.DivisionByZero=n("DivisionByZero"),s=L.InvalidParameter=n("InvalidParameter");function f(v,y){return isNaN(v=parseInt(v,10))&&h(),v*y}function h(){throw new s}function g(v){for(var y={},I=v,P=2,D=4;D<=I;){for(;I%P==0;)I/=P,y[P]=(y[P]||0)+1;D+=1+2*P++}return I!==v?I>1&&(y[I]=(y[I]||0)+1):y[v]=(y[v]||0)+1,y}var l=function(v,y){var I=0,P=1,D=1,Z=0,O=0,B=0,K=1,V=1,X=0,Q=1,ge=1,q=1,ve=1e7,de;if(v!=null)if(y!==void 0)I=v,P=y,D=I*P;else switch(typeof v){case"object":{"d"in v&&"n"in v?(I=v.n,P=v.d,"s"in v&&(I*=v.s)):0 in v?(I=v[0],1 in v&&(P=v[1])):h(),D=I*P;break}case"number":{if(v<0&&(D=v,v=-v),v%1==0)I=v;else if(v>0){for(v>=1&&(V=Math.pow(10,Math.floor(1+Math.log(v)/Math.LN10)),v/=V);Q<=ve&&q<=ve;)if(de=(X+ge)/(Q+q),v===de){Q+q<=ve?(I=X+ge,P=Q+q):q>Q?(I=ge,P=q):(I=X,P=Q);break}else v>de?(X+=ge,Q+=q):(ge+=X,q+=Q),Q>ve?(I=ge,P=q):(I=X,P=Q);I*=V}else(isNaN(v)||isNaN(y))&&(P=I=NaN);break}case"string":if(Q=v.match(/\d+|./g),Q===null&&h(),Q[X]==="-"?(D=-1,X++):Q[X]==="+"&&X++,Q.length===X+1?O=f(Q[X++],D):Q[X+1]==="."||Q[X]==="."?(Q[X]!=="."&&(Z=f(Q[X++],D)),X++,(X+1===Q.length||Q[X+1]==="("&&Q[X+3]===")"||Q[X+1]==="'"&&Q[X+3]==="'")&&(O=f(Q[X],D),K=Math.pow(10,Q[X].length),X++),(Q[X]==="("&&Q[X+2]===")"||Q[X]==="'"&&Q[X+2]==="'")&&(B=f(Q[X+1],D),V=Math.pow(10,Q[X+1].length)-1,X+=3)):Q[X+1]==="/"||Q[X+1]===":"?(O=f(Q[X],D),K=f(Q[X+2],1),X+=3):Q[X+3]==="/"&&Q[X+1]===" "&&(Z=f(Q[X],D),O=f(Q[X+2],D),K=f(Q[X+4],1),X+=5),Q.length<=X){P=K*V,D=I=B+P*Z+V*O;break}default:h()}if(P===0)throw new a;r.s=D<0?-1:1,r.n=Math.abs(I),r.d=Math.abs(P)};function u(v,y,I){for(var P=1;y>0;v=v*v%I,y>>=1)y&1&&(P=P*v%I);return P}function d(v,y){for(;y%2==0;y/=2);for(;y%5==0;y/=5);if(y===1)return 0;for(var I=10%y,P=1;I!==1;P++)if(I=I*10%y,P>t)return 0;return P}function C(v,y,I){for(var P=1,D=u(10,I,y),Z=0;Z<300;Z++){if(P===D)return Z;P=P*10%y,D=D*10%y}return 0}function M(v,y){if(!v)return y;if(!y)return v;for(;;){if(v%=y,!v)return y;if(y%=v,!y)return v}}function L(v,y){if(!(this instanceof L))return new L(v,y);l(v,y),L.REDUCE?v=M(r.d,r.n):v=1,this.s=r.s,this.n=r.n/v,this.d=r.d/v}L.REDUCE=1,L.prototype={s:1,n:0,d:1,abs:function(){return new L(this.n,this.d)},neg:function(){return new L(-this.s*this.n,this.d)},add:function(v,y){return l(v,y),new L(this.s*this.n*r.d+r.s*this.d*r.n,this.d*r.d)},sub:function(v,y){return l(v,y),new L(this.s*this.n*r.d-r.s*this.d*r.n,this.d*r.d)},mul:function(v,y){return l(v,y),new L(this.s*r.s*this.n*r.n,this.d*r.d)},div:function(v,y){return l(v,y),new L(this.s*r.s*this.n*r.d,this.d*r.n)},clone:function(){return new L(this)},mod:function(v,y){return isNaN(this.n)||isNaN(this.d)?new L(NaN):v===void 0?new L(this.s*this.n%this.d,1):(l(v,y),r.n===0&&this.d===0&&L(0,0),new L(this.s*(r.d*this.n)%(r.n*this.d),r.d*this.d))},gcd:function(v,y){return l(v,y),new L(M(r.n,this.n)*M(r.d,this.d),r.d*this.d)},lcm:function(v,y){return l(v,y),r.n===0&&this.n===0?new L:new L(r.n*this.n,M(r.n,this.n)*M(r.d,this.d))},ceil:function(v){return v=Math.pow(10,v||0),isNaN(this.n)||isNaN(this.d)?new L(NaN):new L(Math.ceil(v*this.s*this.n/this.d),v)},floor:function(v){return v=Math.pow(10,v||0),isNaN(this.n)||isNaN(this.d)?new L(NaN):new L(Math.floor(v*this.s*this.n/this.d),v)},round:function(v){return v=Math.pow(10,v||0),isNaN(this.n)||isNaN(this.d)?new L(NaN):new L(Math.round(v*this.s*this.n/this.d),v)},inverse:function(){return new L(this.s*this.d,this.n)},pow:function(v,y){if(l(v,y),r.d===1)return r.s<0?new L(Math.pow(this.s*this.d,r.n),Math.pow(this.n,r.n)):new L(Math.pow(this.s*this.n,r.n),Math.pow(this.d,r.n));if(this.s<0)return null;var I=g(this.n),P=g(this.d),D=1,Z=1;for(var O in I)if(O!=="1"){if(O==="0"){D=0;break}if(I[O]*=r.n,I[O]%r.d==0)I[O]/=r.d;else return null;D*=Math.pow(O,I[O])}for(var O in P)if(O!=="1"){if(P[O]*=r.n,P[O]%r.d==0)P[O]/=r.d;else return null;Z*=Math.pow(O,P[O])}return r.s<0?new L(Z,D):new L(D,Z)},equals:function(v,y){return l(v,y),this.s*this.n*r.d==r.s*r.n*this.d},compare:function(v,y){l(v,y);var I=this.s*this.n*r.d-r.s*r.n*this.d;return(0<I)-(I<0)},simplify:function(v){if(isNaN(this.n)||isNaN(this.d))return this;var y=this.abs().toContinued();v=v||.001;function I(Z){return Z.length===1?new L(Z[0]):I(Z.slice(1)).inverse().add(Z[0])}for(var P=0;P<y.length;P++){var D=I(y.slice(0,P+1));if(D.sub(this.abs()).abs().valueOf()<v)return D.mul(this.s)}return this},divisible:function(v,y){return l(v,y),!(!(r.n*this.d)||this.n*r.d%(r.n*this.d))},valueOf:function(){return this.s*this.n/this.d},toFraction:function(v){var y,I="",P=this.n,D=this.d;return this.s<0&&(I+="-"),D===1?I+=P:(v&&(y=Math.floor(P/D))>0&&(I+=y,I+=" ",P%=D),I+=P,I+="/",I+=D),I},toLatex:function(v){var y,I="",P=this.n,D=this.d;return this.s<0&&(I+="-"),D===1?I+=P:(v&&(y=Math.floor(P/D))>0&&(I+=y,P%=D),I+="\\frac{",I+=P,I+="}{",I+=D,I+="}"),I},toContinued:function(){var v,y=this.n,I=this.d,P=[];if(isNaN(y)||isNaN(I))return P;do P.push(Math.floor(y/I)),v=y%I,y=I,I=v;while(y!==1);return P},toString:function(v){var y,I=this.n,P=this.d;if(isNaN(I)||isNaN(P))return"NaN";L.REDUCE||(y=M(I,P),I/=y,P/=y),v=v||15;var D=d(I,P),Z=C(I,P,D),O=this.s===-1?"-":"";if(O+=I/P|0,I%=P,I*=10,I&&(O+="."),D){for(var B=Z;B--;)O+=I/P|0,I%=P,I*=10;O+="(";for(var B=D;B--;)O+=I/P|0,I%=P,I*=10;O+=")"}else for(var B=v;I&&B--;)O+=I/P|0,I%=P,I*=10;return O}},typeof define=="function"&&define.amd?define([],function(){return L}):typeof cs=="object"?(Object.defineProperty(L,"__esModule",{value:!0}),L.default=L,L.Fraction=L,Pc.exports=L):e.Fraction=L})(cs)});var t0=Pn((Js,e0)=>{(function(e,t){typeof Js=="object"&&typeof e0!="undefined"?e0.exports=t():typeof define=="function"&&define.amd?define(t):e.chroma=t()})(Js,function(){"use strict";for(var e=function(x,E,R){return E===void 0&&(E=0),R===void 0&&(R=1),x<E?E:x>R?R:x},t=function(x){x._clipped=!1,x._unclipped=x.slice(0);for(var E=0;E<=3;E++)E<3?((x[E]<0||x[E]>255)&&(x._clipped=!0),x[E]=e(x[E],0,255)):E===3&&(x[E]=e(x[E],0,1));return x},r={},n=0,a=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];n<a.length;n+=1){var s=a[n];r["[object "+s+"]"]=s.toLowerCase()}var f=function(x){return r[Object.prototype.toString.call(x)]||"object"},h=function(x,E){return E===void 0&&(E=null),x.length>=3?Array.prototype.slice.call(x):f(x[0])=="object"&&E?E.split("").filter(function(R){return x[0][R]!==void 0}).map(function(R){return x[0][R]}):x[0]},g=function(x){if(x.length<2)return null;var E=x.length-1;return f(x[E])=="string"?x[E].toLowerCase():null},l=Math.PI,u={clip_rgb:t,limit:e,type:f,unpack:h,last:g,PI:l,TWOPI:l*2,PITHIRD:l/3,DEG2RAD:l/180,RAD2DEG:180/l},d={format:{},autodetect:[]},C=u.last,M=u.clip_rgb,L=u.type,v=function(){for(var E=[],R=arguments.length;R--;)E[R]=arguments[R];var k=this;if(L(E[0])==="object"&&E[0].constructor&&E[0].constructor===this.constructor)return E[0];var j=C(E),Y=!1;if(!j){Y=!0,d.sorted||(d.autodetect=d.autodetect.sort(function(pe,he){return he.p-pe.p}),d.sorted=!0);for(var z=0,ee=d.autodetect;z<ee.length;z+=1){var te=ee[z];if(j=te.test.apply(te,E),j)break}}if(d.format[j]){var le=d.format[j].apply(null,Y?E:E.slice(0,-1));k._rgb=M(le)}else throw new Error("unknown format: "+E);k._rgb.length===3&&k._rgb.push(1)};v.prototype.toString=function(){return L(this.hex)=="function"?this.hex():"["+this._rgb.join(",")+"]"};var y=v,I=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];return new(Function.prototype.bind.apply(I.Color,[null].concat(x)))};I.Color=y,I.version="2.1.2";var P=I,D=u.unpack,Z=Math.max,O=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];var R=D(x,"rgb"),k=R[0],j=R[1],Y=R[2];k=k/255,j=j/255,Y=Y/255;var z=1-Z(k,Z(j,Y)),ee=z<1?1/(1-z):0,te=(1-k-z)*ee,le=(1-j-z)*ee,pe=(1-Y-z)*ee;return[te,le,pe,z]},B=O,K=u.unpack,V=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];x=K(x,"cmyk");var R=x[0],k=x[1],j=x[2],Y=x[3],z=x.length>4?x[4]:1;return Y===1?[0,0,0,z]:[R>=1?0:255*(1-R)*(1-Y),k>=1?0:255*(1-k)*(1-Y),j>=1?0:255*(1-j)*(1-Y),z]},X=V,Q=u.unpack,ge=u.type;y.prototype.cmyk=function(){return B(this._rgb)},P.cmyk=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];return new(Function.prototype.bind.apply(y,[null].concat(x,["cmyk"])))},d.format.cmyk=X,d.autodetect.push({p:2,test:function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];if(x=Q(x,"cmyk"),ge(x)==="array"&&x.length===4)return"cmyk"}});var q=u.unpack,ve=u.last,de=function(x){return Math.round(x*100)/100},Me=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];var R=q(x,"hsla"),k=ve(x)||"lsa";return R[0]=de(R[0]||0),R[1]=de(R[1]*100)+"%",R[2]=de(R[2]*100)+"%",k==="hsla"||R.length>3&&R[3]<1?(R[3]=R.length>3?R[3]:1,k="hsla"):R.length=3,k+"("+R.join(",")+")"},_e=Me,Te=u.unpack,me=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];x=Te(x,"rgba");var R=x[0],k=x[1],j=x[2];R/=255,k/=255,j/=255;var Y=Math.min(R,k,j),z=Math.max(R,k,j),ee=(z+Y)/2,te,le;return z===Y?(te=0,le=Number.NaN):te=ee<.5?(z-Y)/(z+Y):(z-Y)/(2-z-Y),R==z?le=(k-j)/(z-Y):k==z?le=2+(j-R)/(z-Y):j==z&&(le=4+(R-k)/(z-Y)),le*=60,le<0&&(le+=360),x.length>3&&x[3]!==void 0?[le,te,ee,x[3]]:[le,te,ee]},ce=me,Ie=u.unpack,je=u.last,Xe=Math.round,Ue=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];var R=Ie(x,"rgba"),k=je(x)||"rgb";return k.substr(0,3)=="hsl"?_e(ce(R),k):(R[0]=Xe(R[0]),R[1]=Xe(R[1]),R[2]=Xe(R[2]),(k==="rgba"||R.length>3&&R[3]<1)&&(R[3]=R.length>3?R[3]:1,k="rgba"),k+"("+R.slice(0,k==="rgb"?3:4).join(",")+")")},ht=Ue,tt=u.unpack,ct=Math.round,ot=function(){for(var x,E=[],R=arguments.length;R--;)E[R]=arguments[R];E=tt(E,"hsl");var k=E[0],j=E[1],Y=E[2],z,ee,te;if(j===0)z=ee=te=Y*255;else{var le=[0,0,0],pe=[0,0,0],he=Y<.5?Y*(1+j):Y+j-Y*j,Ae=2*Y-he,Ce=k/360;le[0]=Ce+1/3,le[1]=Ce,le[2]=Ce-1/3;for(var Oe=0;Oe<3;Oe++)le[Oe]<0&&(le[Oe]+=1),le[Oe]>1&&(le[Oe]-=1),6*le[Oe]<1?pe[Oe]=Ae+(he-Ae)*6*le[Oe]:2*le[Oe]<1?pe[Oe]=he:3*le[Oe]<2?pe[Oe]=Ae+(he-Ae)*(2/3-le[Oe])*6:pe[Oe]=Ae;x=[ct(pe[0]*255),ct(pe[1]*255),ct(pe[2]*255)],z=x[0],ee=x[1],te=x[2]}return E.length>3?[z,ee,te,E[3]]:[z,ee,te,1]},ut=ot,it=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,He=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,Pt=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,lt=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,rt=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,xt=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,At=Math.round,Vt=function(x){x=x.toLowerCase().trim();var E;if(d.format.named)try{return d.format.named(x)}catch(Oe){}if(E=x.match(it)){for(var R=E.slice(1,4),k=0;k<3;k++)R[k]=+R[k];return R[3]=1,R}if(E=x.match(He)){for(var j=E.slice(1,5),Y=0;Y<4;Y++)j[Y]=+j[Y];return j}if(E=x.match(Pt)){for(var z=E.slice(1,4),ee=0;ee<3;ee++)z[ee]=At(z[ee]*2.55);return z[3]=1,z}if(E=x.match(lt)){for(var te=E.slice(1,5),le=0;le<3;le++)te[le]=At(te[le]*2.55);return te[3]=+te[3],te}if(E=x.match(rt)){var pe=E.slice(1,4);pe[1]*=.01,pe[2]*=.01;var he=ut(pe);return he[3]=1,he}if(E=x.match(xt)){var Ae=E.slice(1,4);Ae[1]*=.01,Ae[2]*=.01;var Ce=ut(Ae);return Ce[3]=+E[4],Ce}};Vt.test=function(x){return it.test(x)||He.test(x)||Pt.test(x)||lt.test(x)||rt.test(x)||xt.test(x)};var H=Vt,ne=u.type;y.prototype.css=function(x){return ht(this._rgb,x)},P.css=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];return new(Function.prototype.bind.apply(y,[null].concat(x,["css"])))},d.format.css=H,d.autodetect.push({p:5,test:function(x){for(var E=[],R=arguments.length-1;R-- >0;)E[R]=arguments[R+1];if(!E.length&&ne(x)==="string"&&H.test(x))return"css"}});var ie=u.unpack;d.format.gl=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];var R=ie(x,"rgba");return R[0]*=255,R[1]*=255,R[2]*=255,R},P.gl=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];return new(Function.prototype.bind.apply(y,[null].concat(x,["gl"])))},y.prototype.gl=function(){var x=this._rgb;return[x[0]/255,x[1]/255,x[2]/255,x[3]]};var J=u.unpack,Ee=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];var R=J(x,"rgb"),k=R[0],j=R[1],Y=R[2],z=Math.min(k,j,Y),ee=Math.max(k,j,Y),te=ee-z,le=te*100/255,pe=z/(255-te)*100,he;return te===0?he=Number.NaN:(k===ee&&(he=(j-Y)/te),j===ee&&(he=2+(Y-k)/te),Y===ee&&(he=4+(k-j)/te),he*=60,he<0&&(he+=360)),[he,le,pe]},Re=Ee,Le=u.unpack,Se=Math.floor,we=function(){for(var x,E,R,k,j,Y,z=[],ee=arguments.length;ee--;)z[ee]=arguments[ee];z=Le(z,"hcg");var te=z[0],le=z[1],pe=z[2],he,Ae,Ce;pe=pe*255;var Oe=le*255;if(le===0)he=Ae=Ce=pe;else{te===360&&(te=0),te>360&&(te-=360),te<0&&(te+=360),te/=60;var Ke=Se(te),qe=te-Ke,at=pe*(1-le),ft=at+Oe*(1-qe),Bt=at+Oe*qe,Ht=at+Oe;switch(Ke){case 0:x=[Ht,Bt,at],he=x[0],Ae=x[1],Ce=x[2];break;case 1:E=[ft,Ht,at],he=E[0],Ae=E[1],Ce=E[2];break;case 2:R=[at,Ht,Bt],he=R[0],Ae=R[1],Ce=R[2];break;case 3:k=[at,ft,Ht],he=k[0],Ae=k[1],Ce=k[2];break;case 4:j=[Bt,at,Ht],he=j[0],Ae=j[1],Ce=j[2];break;case 5:Y=[Ht,at,ft],he=Y[0],Ae=Y[1],Ce=Y[2];break}}return[he,Ae,Ce,z.length>3?z[3]:1]},De=we,zt=u.unpack,Kt=u.type;y.prototype.hcg=function(){return Re(this._rgb)},P.hcg=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];return new(Function.prototype.bind.apply(y,[null].concat(x,["hcg"])))},d.format.hcg=De,d.autodetect.push({p:1,test:function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];if(x=zt(x,"hcg"),Kt(x)==="array"&&x.length===3)return"hcg"}});var tr=u.unpack,zr=u.last,Dr=Math.round,_n=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];var R=tr(x,"rgba"),k=R[0],j=R[1],Y=R[2],z=R[3],ee=zr(x)||"auto";z===void 0&&(z=1),ee==="auto"&&(ee=z<1?"rgba":"rgb"),k=Dr(k),j=Dr(j),Y=Dr(Y);var te=k<<16|j<<8|Y,le="000000"+te.toString(16);le=le.substr(le.length-6);var pe="0"+Dr(z*255).toString(16);switch(pe=pe.substr(pe.length-2),ee.toLowerCase()){case"rgba":return"#"+le+pe;case"argb":return"#"+pe+le;default:return"#"+le}},en=_n,bn=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,tn=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,rn=function(x){if(x.match(bn)){(x.length===4||x.length===7)&&(x=x.substr(1)),x.length===3&&(x=x.split(""),x=x[0]+x[0]+x[1]+x[1]+x[2]+x[2]);var E=parseInt(x,16),R=E>>16,k=E>>8&255,j=E&255;return[R,k,j,1]}if(x.match(tn)){(x.length===5||x.length===9)&&(x=x.substr(1)),x.length===4&&(x=x.split(""),x=x[0]+x[0]+x[1]+x[1]+x[2]+x[2]+x[3]+x[3]);var Y=parseInt(x,16),z=Y>>24&255,ee=Y>>16&255,te=Y>>8&255,le=Math.round((Y&255)/255*100)/100;return[z,ee,te,le]}throw new Error("unknown hex color: "+x)},Hr=rn,nn=u.type;y.prototype.hex=function(x){return en(this._rgb,x)},P.hex=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];return new(Function.prototype.bind.apply(y,[null].concat(x,["hex"])))},d.format.hex=Hr,d.autodetect.push({p:4,test:function(x){for(var E=[],R=arguments.length-1;R-- >0;)E[R]=arguments[R+1];if(!E.length&&nn(x)==="string"&&[3,4,5,6,7,8,9].indexOf(x.length)>=0)return"hex"}});var kr=u.unpack,qr=u.TWOPI,dr=Math.min,En=Math.sqrt,Wr=Math.acos,Cr=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];var R=kr(x,"rgb"),k=R[0],j=R[1],Y=R[2];k/=255,j/=255,Y/=255;var z,ee=dr(k,j,Y),te=(k+j+Y)/3,le=te>0?1-ee/te:0;return le===0?z=NaN:(z=(k-j+(k-Y))/2,z/=En((k-j)*(k-j)+(k-Y)*(j-Y)),z=Wr(z),Y>j&&(z=qr-z),z/=qr),[z*360,le,te]},wn=Cr,Cn=u.unpack,jr=u.limit,$t=u.TWOPI,Zt=u.PITHIRD,jt=Math.cos,an=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];x=Cn(x,"hsi");var R=x[0],k=x[1],j=x[2],Y,z,ee;return isNaN(R)&&(R=0),isNaN(k)&&(k=0),R>360&&(R-=360),R<0&&(R+=360),R/=360,R<1/3?(ee=(1-k)/3,Y=(1+k*jt($t*R)/jt(Zt-$t*R))/3,z=1-(ee+Y)):R<2/3?(R-=1/3,Y=(1-k)/3,z=(1+k*jt($t*R)/jt(Zt-$t*R))/3,ee=1-(Y+z)):(R-=2/3,z=(1-k)/3,ee=(1+k*jt($t*R)/jt(Zt-$t*R))/3,Y=1-(z+ee)),Y=jr(j*Y*3),z=jr(j*z*3),ee=jr(j*ee*3),[Y*255,z*255,ee*255,x.length>3?x[3]:1]},Xr=an,on=u.unpack,Ar=u.type;y.prototype.hsi=function(){return wn(this._rgb)},P.hsi=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];return new(Function.prototype.bind.apply(y,[null].concat(x,["hsi"])))},d.format.hsi=Xr,d.autodetect.push({p:2,test:function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];if(x=on(x,"hsi"),Ar(x)==="array"&&x.length===3)return"hsi"}});var Mr=u.unpack,gt=u.type;y.prototype.hsl=function(){return ce(this._rgb)},P.hsl=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];return new(Function.prototype.bind.apply(y,[null].concat(x,["hsl"])))},d.format.hsl=ut,d.autodetect.push({p:2,test:function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];if(x=Mr(x,"hsl"),gt(x)==="array"&&x.length===3)return"hsl"}});var Or=u.unpack,Pe=Math.min,Mt=Math.max,Xt=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];x=Or(x,"rgb");var R=x[0],k=x[1],j=x[2],Y=Pe(R,k,j),z=Mt(R,k,j),ee=z-Y,te,le,pe;return pe=z/255,z===0?(te=Number.NaN,le=0):(le=ee/z,R===z&&(te=(k-j)/ee),k===z&&(te=2+(j-R)/ee),j===z&&(te=4+(R-k)/ee),te*=60,te<0&&(te+=360)),[te,le,pe]},m=Xt,b=u.unpack,w=Math.floor,A=function(){for(var x,E,R,k,j,Y,z=[],ee=arguments.length;ee--;)z[ee]=arguments[ee];z=b(z,"hsv");var te=z[0],le=z[1],pe=z[2],he,Ae,Ce;if(pe*=255,le===0)he=Ae=Ce=pe;else{te===360&&(te=0),te>360&&(te-=360),te<0&&(te+=360),te/=60;var Oe=w(te),Ke=te-Oe,qe=pe*(1-le),at=pe*(1-le*Ke),ft=pe*(1-le*(1-Ke));switch(Oe){case 0:x=[pe,ft,qe],he=x[0],Ae=x[1],Ce=x[2];break;case 1:E=[at,pe,qe],he=E[0],Ae=E[1],Ce=E[2];break;case 2:R=[qe,pe,ft],he=R[0],Ae=R[1],Ce=R[2];break;case 3:k=[qe,at,pe],he=k[0],Ae=k[1],Ce=k[2];break;case 4:j=[ft,qe,pe],he=j[0],Ae=j[1],Ce=j[2];break;case 5:Y=[pe,qe,at],he=Y[0],Ae=Y[1],Ce=Y[2];break}}return[he,Ae,Ce,z.length>3?z[3]:1]},S=A,T=u.unpack,F=u.type;y.prototype.hsv=function(){return m(this._rgb)},P.hsv=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];return new(Function.prototype.bind.apply(y,[null].concat(x,["hsv"])))},d.format.hsv=S,d.autodetect.push({p:2,test:function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];if(x=T(x,"hsv"),F(x)==="array"&&x.length===3)return"hsv"}});var G={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},$=u.unpack,W=Math.pow,ae=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];var R=$(x,"rgb"),k=R[0],j=R[1],Y=R[2],z=Ne(k,j,Y),ee=z[0],te=z[1],le=z[2],pe=116*te-16;return[pe<0?0:pe,500*(ee-te),200*(te-le)]},se=function(x){return(x/=255)<=.04045?x/12.92:W((x+.055)/1.055,2.4)},ue=function(x){return x>G.t3?W(x,1/3):x/G.t2+G.t0},Ne=function(x,E,R){x=se(x),E=se(E),R=se(R);var k=ue((.4124564*x+.3575761*E+.1804375*R)/G.Xn),j=ue((.2126729*x+.7151522*E+.072175*R)/G.Yn),Y=ue((.0193339*x+.119192*E+.9503041*R)/G.Zn);return[k,j,Y]},Ze=ae,ke=u.unpack,Dt=Math.pow,yt=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];x=ke(x,"lab");var R=x[0],k=x[1],j=x[2],Y,z,ee,te,le,pe;return z=(R+16)/116,Y=isNaN(k)?z:z+k/500,ee=isNaN(j)?z:z-j/200,z=G.Yn*Ye(z),Y=G.Xn*Ye(Y),ee=G.Zn*Ye(ee),te=Qt(3.2404542*Y-1.5371385*z-.4985314*ee),le=Qt(-.969266*Y+1.8760108*z+.041556*ee),pe=Qt(.0556434*Y-.2040259*z+1.0572252*ee),[te,le,pe,x.length>3?x[3]:1]},Qt=function(x){return 255*(x<=.00304?12.92*x:1.055*Dt(x,1/2.4)-.055)},Ye=function(x){return x>G.t1?x*x*x:G.t2*(x-G.t0)},Tt=yt,sn=u.unpack,_t=u.type;y.prototype.lab=function(){return Ze(this._rgb)},P.lab=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];return new(Function.prototype.bind.apply(y,[null].concat(x,["lab"])))},d.format.lab=Tt,d.autodetect.push({p:2,test:function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];if(x=sn(x,"lab"),_t(x)==="array"&&x.length===3)return"lab"}});var An=u.unpack,Sr=u.RAD2DEG,Fr=Math.sqrt,cn=Math.atan2,rr=Math.round,Br=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];var R=An(x,"lab"),k=R[0],j=R[1],Y=R[2],z=Fr(j*j+Y*Y),ee=(cn(Y,j)*Sr+360)%360;return rr(z*1e4)===0&&(ee=Number.NaN),[k,z,ee]},yr=Br,Mn=u.unpack,Ft=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];var R=Mn(x,"rgb"),k=R[0],j=R[1],Y=R[2],z=Ze(k,j,Y),ee=z[0],te=z[1],le=z[2];return yr(ee,te,le)},st=Ft,$o=u.unpack,zn=u.DEG2RAD,nt=Math.sin,ur=Math.cos,Zo=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];var R=$o(x,"lch"),k=R[0],j=R[1],Y=R[2];return isNaN(Y)&&(Y=0),Y=Y*zn,[k,ur(Y)*j,nt(Y)*j]},Qa=Zo,xa=u.unpack,Hn=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];x=xa(x,"lch");var R=x[0],k=x[1],j=x[2],Y=Qa(R,k,j),z=Y[0],ee=Y[1],te=Y[2],le=Tt(z,ee,te),pe=le[0],he=le[1],Ae=le[2];return[pe,he,Ae,x.length>3?x[3]:1]},Sn=Hn,Qo=u.unpack,Jo=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];var R=Qo(x,"hcl").reverse();return Sn.apply(void 0,R)},Ja=Jo,ya=u.unpack,qn=u.type;y.prototype.lch=function(){return st(this._rgb)},y.prototype.hcl=function(){return st(this._rgb).reverse()},P.lch=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];return new(Function.prototype.bind.apply(y,[null].concat(x,["lch"])))},P.hcl=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];return new(Function.prototype.bind.apply(y,[null].concat(x,["hcl"])))},d.format.lch=Sn,d.format.hcl=Ja,["lch","hcl"].forEach(function(x){return d.autodetect.push({p:2,test:function(){for(var E=[],R=arguments.length;R--;)E[R]=arguments[R];if(E=ya(E,x),qn(E)==="array"&&E.length===3)return x}})});var eo={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},Tr=eo,ei=u.type;y.prototype.name=function(){for(var x=en(this._rgb,"rgb"),E=0,R=Object.keys(Tr);E<R.length;E+=1){var k=R[E];if(Tr[k]===x)return k.toLowerCase()}return x},d.format.named=function(x){if(x=x.toLowerCase(),Tr[x])return Hr(Tr[x]);throw new Error("unknown color name: "+x)},d.autodetect.push({p:5,test:function(x){for(var E=[],R=arguments.length-1;R-- >0;)E[R]=arguments[R+1];if(!E.length&&ei(x)==="string"&&Tr[x.toLowerCase()])return"named"}});var ti=u.unpack,ri=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];var R=ti(x,"rgb"),k=R[0],j=R[1],Y=R[2];return(k<<16)+(j<<8)+Y},to=ri,Wn=u.type,ni=function(x){if(Wn(x)=="number"&&x>=0&&x<=16777215){var E=x>>16,R=x>>8&255,k=x&255;return[E,R,k,1]}throw new Error("unknown num color: "+x)},ro=ni,ai=u.type;y.prototype.num=function(){return to(this._rgb)},P.num=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];return new(Function.prototype.bind.apply(y,[null].concat(x,["num"])))},d.format.num=ro,d.autodetect.push({p:5,test:function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];if(x.length===1&&ai(x[0])==="number"&&x[0]>=0&&x[0]<=16777215)return"num"}});var lr=u.unpack,Yr=u.type,un=Math.round;y.prototype.rgb=function(x){return x===void 0&&(x=!0),x===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(un)},y.prototype.rgba=function(x){return x===void 0&&(x=!0),this._rgb.slice(0,4).map(function(E,R){return R<3?x===!1?E:un(E):E})},P.rgb=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];return new(Function.prototype.bind.apply(y,[null].concat(x,["rgb"])))},d.format.rgb=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];var R=lr(x,"rgba");return R[3]===void 0&&(R[3]=1),R},d.autodetect.push({p:3,test:function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];if(x=lr(x,"rgba"),Yr(x)==="array"&&(x.length===3||x.length===4&&Yr(x[3])=="number"&&x[3]>=0&&x[3]<=1))return"rgb"}});var jn=Math.log,no=function(x){var E=x/100,R,k,j;return E<66?(R=255,k=-155.25485562709179-.44596950469579133*(k=E-2)+104.49216199393888*jn(k),j=E<20?0:-254.76935184120902+.8274096064007395*(j=E-10)+115.67994401066147*jn(j)):(R=351.97690566805693+.114206453784165*(R=E-55)-40.25366309332127*jn(R),k=325.4494125711974+.07943456536662342*(k=E-50)-28.0852963507957*jn(k),j=255),[R,k,j,1]},Xn=no,_r=u.unpack,oi=Math.round,_a=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];for(var R=_r(x,"rgb"),k=R[0],j=R[2],Y=1e3,z=4e4,ee=.4,te;z-Y>ee;){te=(z+Y)*.5;var le=Xn(te);le[2]/le[0]>=j/k?z=te:Y=te}return oi(te)},Tn=_a;y.prototype.temp=y.prototype.kelvin=y.prototype.temperature=function(){return Tn(this._rgb)},P.temp=P.kelvin=P.temperature=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];return new(Function.prototype.bind.apply(y,[null].concat(x,["temp"])))},d.format.temp=d.format.kelvin=d.format.temperature=Xn;var Yn=u.type;y.prototype.alpha=function(x,E){return E===void 0&&(E=!1),x!==void 0&&Yn(x)==="number"?E?(this._rgb[3]=x,this):new y([this._rgb[0],this._rgb[1],this._rgb[2],x],"rgb"):this._rgb[3]},y.prototype.clipped=function(){return this._rgb._clipped||!1},y.prototype.darken=function(x){x===void 0&&(x=1);var E=this,R=E.lab();return R[0]-=G.Kn*x,new y(R,"lab").alpha(E.alpha(),!0)},y.prototype.brighten=function(x){return x===void 0&&(x=1),this.darken(-x)},y.prototype.darker=y.prototype.darken,y.prototype.brighter=y.prototype.brighten,y.prototype.get=function(x){var E=x.split("."),R=E[0],k=E[1],j=this[R]();if(k){var Y=R.indexOf(k);if(Y>-1)return j[Y];throw new Error("unknown channel "+k+" in mode "+R)}else return j};var Rn=u.type,ii=Math.pow,si=1e-7,ln=20;y.prototype.luminance=function(x){if(x!==void 0&&Rn(x)==="number"){if(x===0)return new y([0,0,0,this._rgb[3]],"rgb");if(x===1)return new y([255,255,255,this._rgb[3]],"rgb");var E=this.luminance(),R="rgb",k=ln,j=function(z,ee){var te=z.interpolate(ee,.5,R),le=te.luminance();return Math.abs(x-le)<si||!k--?te:le>x?j(z,te):j(te,ee)},Y=(E>x?j(new y([0,0,0]),this):j(this,new y([255,255,255]))).rgb();return new y(Y.concat([this._rgb[3]]))}return ci.apply(void 0,this._rgb.slice(0,3))};var ci=function(x,E,R){return x=ba(x),E=ba(E),R=ba(R),.2126*x+.7152*E+.0722*R},ba=function(x){return x/=255,x<=.03928?x/12.92:ii((x+.055)/1.055,2.4)},nr={},ao=u.type,Kn=function(x,E,R){R===void 0&&(R=.5);for(var k=[],j=arguments.length-3;j-- >0;)k[j]=arguments[j+3];var Y=k[0]||"lrgb";if(!nr[Y]&&!k.length&&(Y=Object.keys(nr)[0]),!nr[Y])throw new Error("interpolation mode "+Y+" is not defined");return ao(x)!=="object"&&(x=new y(x)),ao(E)!=="object"&&(E=new y(E)),nr[Y](x,E,R).alpha(x.alpha()+R*(E.alpha()-x.alpha()))};y.prototype.mix=y.prototype.interpolate=function(x,E){E===void 0&&(E=.5);for(var R=[],k=arguments.length-2;k-- >0;)R[k]=arguments[k+2];return Kn.apply(void 0,[this,x,E].concat(R))},y.prototype.premultiply=function(x){x===void 0&&(x=!1);var E=this._rgb,R=E[3];return x?(this._rgb=[E[0]*R,E[1]*R,E[2]*R,R],this):new y([E[0]*R,E[1]*R,E[2]*R,R],"rgb")},y.prototype.saturate=function(x){x===void 0&&(x=1);var E=this,R=E.lch();return R[1]+=G.Kn*x,R[1]<0&&(R[1]=0),new y(R,"lch").alpha(E.alpha(),!0)},y.prototype.desaturate=function(x){return x===void 0&&(x=1),this.saturate(-x)};var oo=u.type;y.prototype.set=function(x,E,R){R===void 0&&(R=!1);var k=x.split("."),j=k[0],Y=k[1],z=this[j]();if(Y){var ee=j.indexOf(Y);if(ee>-1){if(oo(E)=="string")switch(E.charAt(0)){case"+":z[ee]+=+E;break;case"-":z[ee]+=+E;break;case"*":z[ee]*=+E.substr(1);break;case"/":z[ee]/=+E.substr(1);break;default:z[ee]=+E}else if(oo(E)==="number")z[ee]=E;else throw new Error("unsupported value for Color.set");var te=new y(z,j);return R?(this._rgb=te._rgb,this):te}throw new Error("unknown channel "+Y+" in mode "+j)}else return z};var ui=function(x,E,R){var k=x._rgb,j=E._rgb;return new y(k[0]+R*(j[0]-k[0]),k[1]+R*(j[1]-k[1]),k[2]+R*(j[2]-k[2]),"rgb")};nr.rgb=ui;var Nn=Math.sqrt,Kr=Math.pow,li=function(x,E,R){var k=x._rgb,j=k[0],Y=k[1],z=k[2],ee=E._rgb,te=ee[0],le=ee[1],pe=ee[2];return new y(Nn(Kr(j,2)*(1-R)+Kr(te,2)*R),Nn(Kr(Y,2)*(1-R)+Kr(le,2)*R),Nn(Kr(z,2)*(1-R)+Kr(pe,2)*R),"rgb")};nr.lrgb=li;var gi=function(x,E,R){var k=x.lab(),j=E.lab();return new y(k[0]+R*(j[0]-k[0]),k[1]+R*(j[1]-k[1]),k[2]+R*(j[2]-k[2]),"lab")};nr.lab=gi;var In=function(x,E,R,k){var j,Y,z,ee;k==="hsl"?(z=x.hsl(),ee=E.hsl()):k==="hsv"?(z=x.hsv(),ee=E.hsv()):k==="hcg"?(z=x.hcg(),ee=E.hcg()):k==="hsi"?(z=x.hsi(),ee=E.hsi()):(k==="lch"||k==="hcl")&&(k="hcl",z=x.hcl(),ee=E.hcl());var te,le,pe,he,Ae,Ce;k.substr(0,1)==="h"&&(j=z,te=j[0],pe=j[1],Ae=j[2],Y=ee,le=Y[0],he=Y[1],Ce=Y[2]);var Oe,Ke,qe,at;return!isNaN(te)&&!isNaN(le)?(le>te&&le-te>180?at=le-(te+360):le<te&&te-le>180?at=le+360-te:at=le-te,Ke=te+R*at):isNaN(te)?isNaN(le)?Ke=Number.NaN:(Ke=le,(Ae==1||Ae==0)&&k!="hsv"&&(Oe=he)):(Ke=te,(Ce==1||Ce==0)&&k!="hsv"&&(Oe=pe)),Oe===void 0&&(Oe=pe+R*(he-pe)),qe=Ae+R*(Ce-Ae),new y([Ke,Oe,qe],k)},io=function(x,E,R){return In(x,E,R,"lch")};nr.lch=io,nr.hcl=io;var Ea=function(x,E,R){var k=x.num(),j=E.num();return new y(k+R*(j-k),"num")};nr.num=Ea;var fi=function(x,E,R){return In(x,E,R,"hcg")};nr.hcg=fi;var di=function(x,E,R){return In(x,E,R,"hsi")};nr.hsi=di;var hi=function(x,E,R){return In(x,E,R,"hsl")};nr.hsl=hi;var pi=function(x,E,R){return In(x,E,R,"hsv")};nr.hsv=pi;var vi=u.clip_rgb,wa=Math.pow,Ca=Math.sqrt,Aa=Math.PI,so=Math.cos,co=Math.sin,mi=Math.atan2,xi=function(x,E,R){E===void 0&&(E="lrgb"),R===void 0&&(R=null);var k=x.length;R||(R=Array.from(new Array(k)).map(function(){return 1}));var j=k/R.reduce(function(Ke,qe){return Ke+qe});if(R.forEach(function(Ke,qe){R[qe]*=j}),x=x.map(function(Ke){return new y(Ke)}),E==="lrgb")return Ma(x,R);for(var Y=x.shift(),z=Y.get(E),ee=[],te=0,le=0,pe=0;pe<z.length;pe++)if(z[pe]=(z[pe]||0)*R[0],ee.push(isNaN(z[pe])?0:R[0]),E.charAt(pe)==="h"&&!isNaN(z[pe])){var he=z[pe]/180*Aa;te+=so(he)*R[0],le+=co(he)*R[0]}var Ae=Y.alpha()*R[0];x.forEach(function(Ke,qe){var at=Ke.get(E);Ae+=Ke.alpha()*R[qe+1];for(var ft=0;ft<z.length;ft++)if(!isNaN(at[ft]))if(ee[ft]+=R[qe+1],E.charAt(ft)==="h"){var Bt=at[ft]/180*Aa;te+=so(Bt)*R[qe+1],le+=co(Bt)*R[qe+1]}else z[ft]+=at[ft]*R[qe+1]});for(var Ce=0;Ce<z.length;Ce++)if(E.charAt(Ce)==="h"){for(var Oe=mi(le/ee[Ce],te/ee[Ce])/Aa*180;Oe<0;)Oe+=360;for(;Oe>=360;)Oe-=360;z[Ce]=Oe}else z[Ce]=z[Ce]/ee[Ce];return Ae/=k,new y(z,E).alpha(Ae>.99999?1:Ae,!0)},Ma=function(x,E){for(var R=x.length,k=[0,0,0,0],j=0;j<x.length;j++){var Y=x[j],z=E[j]/R,ee=Y._rgb;k[0]+=wa(ee[0],2)*z,k[1]+=wa(ee[1],2)*z,k[2]+=wa(ee[2],2)*z,k[3]+=ee[3]*z}return k[0]=Ca(k[0]),k[1]=Ca(k[1]),k[2]=Ca(k[2]),k[3]>.9999999&&(k[3]=1),new y(vi(k))},gn=u.type,yi=Math.pow,$n=function(x){var E="rgb",R=P("#ccc"),k=0,j=[0,1],Y=[],z=[0,0],ee=!1,te=[],le=!1,pe=0,he=1,Ae=!1,Ce={},Oe=!0,Ke=1,qe=function(i){if(i=i||["#fff","#000"],i&&gn(i)==="string"&&P.brewer&&P.brewer[i.toLowerCase()]&&(i=P.brewer[i.toLowerCase()]),gn(i)==="array"){i.length===1&&(i=[i[0],i[0]]),i=i.slice(0);for(var o=0;o<i.length;o++)i[o]=P(i[o]);Y.length=0;for(var c=0;c<i.length;c++)Y.push(c/(i.length-1))}return or(),te=i},at=function(i){if(ee!=null){for(var o=ee.length-1,c=0;c<o&&i>=ee[c];)c++;return c-1}return 0},ft=function(i){return i},Bt=function(i){return i},Ht=function(i,o){var c,_;if(o==null&&(o=!1),isNaN(i)||i===null)return R;if(o)_=i;else if(ee&&ee.length>2){var N=at(i);_=N/(ee.length-2)}else he!==pe?_=(i-pe)/(he-pe):_=1;_=Bt(_),o||(_=ft(_)),Ke!==1&&(_=yi(_,Ke)),_=z[0]+_*(1-z[0]-z[1]),_=Math.min(1,Math.max(0,_));var U=Math.floor(_*1e4);if(Oe&&Ce[U])c=Ce[U];else{if(gn(te)==="array")for(var re=0;re<Y.length;re++){var fe=Y[re];if(_<=fe){c=te[re];break}if(_>=fe&&re===Y.length-1){c=te[re];break}if(_>fe&&_<Y[re+1]){_=(_-fe)/(Y[re+1]-fe),c=P.interpolate(te[re],te[re+1],_,E);break}}else gn(te)==="function"&&(c=te(_));Oe&&(Ce[U]=c)}return c},or=function(){return Ce={}};qe(x);var Je=function(i){var o=P(Ht(i));return le&&o[le]?o[le]():o};return Je.classes=function(i){if(i!=null){if(gn(i)==="array")ee=i,j=[i[0],i[i.length-1]];else{var o=P.analyze(j);i===0?ee=[o.min,o.max]:ee=P.limits(o,"e",i)}return Je}return ee},Je.domain=function(i){if(!arguments.length)return j;pe=i[0],he=i[i.length-1],Y=[];var o=te.length;if(i.length===o&&pe!==he)for(var c=0,_=Array.from(i);c<_.length;c+=1){var N=_[c];Y.push((N-pe)/(he-pe))}else{for(var U=0;U<o;U++)Y.push(U/(o-1));if(i.length>2){var re=i.map(function(be,ye){return ye/(i.length-1)}),fe=i.map(function(be){return(be-pe)/(he-pe)});fe.every(function(be,ye){return re[ye]===be})||(Bt=function(be){if(be<=0||be>=1)return be;for(var ye=0;be>=fe[ye+1];)ye++;var It=(be-fe[ye])/(fe[ye+1]-fe[ye]),kt=re[ye]+It*(re[ye+1]-re[ye]);return kt})}}return j=[pe,he],Je},Je.mode=function(i){return arguments.length?(E=i,or(),Je):E},Je.range=function(i,o){return qe(i,o),Je},Je.out=function(i){return le=i,Je},Je.spread=function(i){return arguments.length?(k=i,Je):k},Je.correctLightness=function(i){return i==null&&(i=!0),Ae=i,or(),Ae?ft=function(o){for(var c=Ht(0,!0).lab()[0],_=Ht(1,!0).lab()[0],N=c>_,U=Ht(o,!0).lab()[0],re=c+(_-c)*o,fe=U-re,be=0,ye=1,It=20;Math.abs(fe)>.01&&It-- >0;)(function(){return N&&(fe*=-1),fe<0?(be=o,o+=(ye-o)*.5):(ye=o,o+=(be-o)*.5),U=Ht(o,!0).lab()[0],fe=U-re})();return o}:ft=function(o){return o},Je},Je.padding=function(i){return i!=null?(gn(i)==="number"&&(i=[i,i]),z=i,Je):z},Je.colors=function(i,o){arguments.length<2&&(o="hex");var c=[];if(arguments.length===0)c=te.slice(0);else if(i===1)c=[Je(.5)];else if(i>1){var _=j[0],N=j[1]-_;c=_i(0,i,!1).map(function(ye){return Je(_+ye/(i-1)*N)})}else{x=[];var U=[];if(ee&&ee.length>2)for(var re=1,fe=ee.length,be=1<=fe;be?re<fe:re>fe;be?re++:re--)U.push((ee[re-1]+ee[re])*.5);else U=j;c=U.map(function(ye){return Je(ye)})}return P[o]&&(c=c.map(function(ye){return ye[o]()})),c},Je.cache=function(i){return i!=null?(Oe=i,Je):Oe},Je.gamma=function(i){return i!=null?(Ke=i,Je):Ke},Je.nodata=function(i){return i!=null?(R=P(i),Je):R},Je};function _i(x,E,R){for(var k=[],j=x<E,Y=R?j?E+1:E-1:E,z=x;j?z<Y:z>Y;j?z++:z--)k.push(z);return k}var Ur=function(x){var E,R,k,j,Y,z,ee;if(x=x.map(function(he){return new y(he)}),x.length===2)E=x.map(function(he){return he.lab()}),Y=E[0],z=E[1],j=function(he){var Ae=[0,1,2].map(function(Ce){return Y[Ce]+he*(z[Ce]-Y[Ce])});return new y(Ae,"lab")};else if(x.length===3)R=x.map(function(he){return he.lab()}),Y=R[0],z=R[1],ee=R[2],j=function(he){var Ae=[0,1,2].map(function(Ce){return(1-he)*(1-he)*Y[Ce]+2*(1-he)*he*z[Ce]+he*he*ee[Ce]});return new y(Ae,"lab")};else if(x.length===4){var te;k=x.map(function(he){return he.lab()}),Y=k[0],z=k[1],ee=k[2],te=k[3],j=function(he){var Ae=[0,1,2].map(function(Ce){return(1-he)*(1-he)*(1-he)*Y[Ce]+3*(1-he)*(1-he)*he*z[Ce]+3*(1-he)*he*he*ee[Ce]+he*he*he*te[Ce]});return new y(Ae,"lab")}}else if(x.length===5){var le=Ur(x.slice(0,3)),pe=Ur(x.slice(2,5));j=function(he){return he<.5?le(he*2):pe((he-.5)*2)}}return j},Sa=function(x){var E=Ur(x);return E.scale=function(){return $n(E)},E},hr=function(x,E,R){if(!hr[R])throw new Error("unknown blend mode "+R);return hr[R](x,E)},br=function(x){return function(E,R){var k=P(R).rgb(),j=P(E).rgb();return P.rgb(x(k,j))}},Gr=function(x){return function(E,R){var k=[];return k[0]=x(E[0],R[0]),k[1]=x(E[1],R[1]),k[2]=x(E[2],R[2]),k}},bi=function(x){return x},Ei=function(x,E){return x*E/255},wi=function(x,E){return x>E?E:x},Ci=function(x,E){return x>E?x:E},Ai=function(x,E){return 255*(1-(1-x/255)*(1-E/255))},Mi=function(x,E){return E<128?2*x*E/255:255*(1-2*(1-x/255)*(1-E/255))},Si=function(x,E){return 255*(1-(1-E/255)/(x/255))},Rr=function(x,E){return x===255?255:(x=255*(E/255)/(1-x/255),x>255?255:x)};hr.normal=br(Gr(bi)),hr.multiply=br(Gr(Ei)),hr.screen=br(Gr(Ai)),hr.overlay=br(Gr(Mi)),hr.darken=br(Gr(wi)),hr.lighten=br(Gr(Ci)),hr.dodge=br(Gr(Rr)),hr.burn=br(Gr(Si));for(var Zn=hr,$r=u.type,Ti=u.clip_rgb,Nr=u.TWOPI,Ri=Math.pow,Ni=Math.sin,Ta=Math.cos,Ii=function(x,E,R,k,j){x===void 0&&(x=300),E===void 0&&(E=-1.5),R===void 0&&(R=1),k===void 0&&(k=1),j===void 0&&(j=[0,1]);var Y=0,z;$r(j)==="array"?z=j[1]-j[0]:(z=0,j=[j,j]);var ee=function(te){var le=Nr*((x+120)/360+E*te),pe=Ri(j[0]+z*te,k),he=Y!==0?R[0]+te*Y:R,Ae=he*pe*(1-pe)/2,Ce=Ta(le),Oe=Ni(le),Ke=pe+Ae*(-.14861*Ce+1.78277*Oe),qe=pe+Ae*(-.29227*Ce-.90649*Oe),at=pe+Ae*(1.97294*Ce);return P(Ti([Ke*255,qe*255,at*255,1]))};return ee.start=function(te){return te==null?x:(x=te,ee)},ee.rotations=function(te){return te==null?E:(E=te,ee)},ee.gamma=function(te){return te==null?k:(k=te,ee)},ee.hue=function(te){return te==null?R:(R=te,$r(R)==="array"?(Y=R[1]-R[0],Y===0&&(R=R[1])):Y=0,ee)},ee.lightness=function(te){return te==null?j:($r(te)==="array"?(j=te,z=te[1]-te[0]):(j=[te,te],z=0),ee)},ee.scale=function(){return P.scale(ee)},ee.hue(R),ee},Li="0123456789abcdef",Pi=Math.floor,Di=Math.random,ki=function(){for(var x="#",E=0;E<6;E++)x+=Li.charAt(Pi(Di()*16));return new y(x,"hex")},Ra=Math.log,Oi=Math.pow,uo=Math.floor,Fi=Math.abs,lo=function(x,E){E===void 0&&(E=null);var R={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return f(x)==="object"&&(x=Object.values(x)),x.forEach(function(k){E&&f(k)==="object"&&(k=k[E]),k!=null&&!isNaN(k)&&(R.values.push(k),R.sum+=k,k<R.min&&(R.min=k),k>R.max&&(R.max=k),R.count+=1)}),R.domain=[R.min,R.max],R.limits=function(k,j){return go(R,k,j)},R},go=function(x,E,R){E===void 0&&(E="equal"),R===void 0&&(R=7),f(x)=="array"&&(x=lo(x));var k=x.min,j=x.max,Y=x.values.sort(function(Hi,qi){return Hi-qi});if(R===1)return[k,j];var z=[];if(E.substr(0,1)==="c"&&(z.push(k),z.push(j)),E.substr(0,1)==="e"){z.push(k);for(var ee=1;ee<R;ee++)z.push(k+ee/R*(j-k));z.push(j)}else if(E.substr(0,1)==="l"){if(k<=0)throw new Error("Logarithmic scales are only possible for values > 0");var te=Math.LOG10E*Ra(k),le=Math.LOG10E*Ra(j);z.push(k);for(var pe=1;pe<R;pe++)z.push(Oi(10,te+pe/R*(le-te)));z.push(j)}else if(E.substr(0,1)==="q"){z.push(k);for(var he=1;he<R;he++){var Ae=(Y.length-1)*he/R,Ce=uo(Ae);if(Ce===Ae)z.push(Y[Ce]);else{var Oe=Ae-Ce;z.push(Y[Ce]*(1-Oe)+Y[Ce+1]*Oe)}}z.push(j)}else if(E.substr(0,1)==="k"){var Ke,qe=Y.length,at=new Array(qe),ft=new Array(R),Bt=!0,Ht=0,or=null;or=[],or.push(k);for(var Je=1;Je<R;Je++)or.push(k+Je/R*(j-k));for(or.push(j);Bt;){for(var i=0;i<R;i++)ft[i]=0;for(var o=0;o<qe;o++)for(var c=Y[o],_=Number.MAX_VALUE,N=void 0,U=0;U<R;U++){var re=Fi(or[U]-c);re<_&&(_=re,N=U),ft[N]++,at[o]=N}for(var fe=new Array(R),be=0;be<R;be++)fe[be]=null;for(var ye=0;ye<qe;ye++)Ke=at[ye],fe[Ke]===null?fe[Ke]=Y[ye]:fe[Ke]+=Y[ye];for(var It=0;It<R;It++)fe[It]*=1/ft[It];Bt=!1;for(var kt=0;kt<R;kt++)if(fe[kt]!==or[kt]){Bt=!0;break}or=fe,Ht++,Ht>200&&(Bt=!1)}for(var dt={},St=0;St<R;St++)dt[St]=[];for(var gr=0;gr<qe;gr++)Ke=at[gr],dt[Ke].push(Y[gr]);for(var Ct=[],Ot=0;Ot<R;Ot++)Ct.push(dt[Ot][0]),Ct.push(dt[Ot][dt[Ot].length-1]);Ct=Ct.sort(function(Hi,qi){return Hi-qi}),z.push(Ct[0]);for(var qt=1;qt<Ct.length;qt+=2){var zi=Ct[qt];!isNaN(zi)&&z.indexOf(zi)===-1&&z.push(zi)}}return z},fo={analyze:lo,limits:go},Zr=function(x,E){x=new y(x),E=new y(E);var R=x.luminance(),k=E.luminance();return R>k?(R+.05)/(k+.05):(k+.05)/(R+.05)},Ln=Math.sqrt,Na=Math.atan2,ho=Math.abs,po=Math.cos,Ia=Math.PI,Bi=function(x,E,R,k){R===void 0&&(R=1),k===void 0&&(k=1),x=new y(x),E=new y(E);for(var j=Array.from(x.lab()),Y=j[0],z=j[1],ee=j[2],te=Array.from(E.lab()),le=te[0],pe=te[1],he=te[2],Ae=Ln(z*z+ee*ee),Ce=Ln(pe*pe+he*he),Oe=Y<16?.511:.040975*Y/(1+.01765*Y),Ke=.0638*Ae/(1+.0131*Ae)+.638,qe=Ae<1e-6?0:Na(ee,z)*180/Ia;qe<0;)qe+=360;for(;qe>=360;)qe-=360;var at=qe>=164&&qe<=345?.56+ho(.2*po(Ia*(qe+168)/180)):.36+ho(.4*po(Ia*(qe+35)/180)),ft=Ae*Ae*Ae*Ae,Bt=Ln(ft/(ft+1900)),Ht=Ke*(Bt*at+1-Bt),or=Y-le,Je=Ae-Ce,i=z-pe,o=ee-he,c=i*i+o*o-Je*Je,_=or/(R*Oe),N=Je/(k*Ke),U=Ht;return Ln(_*_+N*N+c/(U*U))},La=function(x,E,R){R===void 0&&(R="lab"),x=new y(x),E=new y(E);var k=x.get(R),j=E.get(R),Y=0;for(var z in k){var ee=(k[z]||0)-(j[z]||0);Y+=ee*ee}return Math.sqrt(Y)},Ui=function(){for(var x=[],E=arguments.length;E--;)x[E]=arguments[E];try{return new(Function.prototype.bind.apply(y,[null].concat(x))),!0}catch(R){return!1}},Pa={cool:function(){return $n([P.hsl(180,1,.9),P.hsl(250,.7,.4)])},hot:function(){return $n(["#000","#f00","#ff0","#fff"],[0,.25,.75,1]).mode("rgb")}},Qn={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},Da=0,Jn=Object.keys(Qn);Da<Jn.length;Da+=1){var ea=Jn[Da];Qn[ea.toLowerCase()]=Qn[ea]}var Gi=Qn;P.average=xi,P.bezier=Sa,P.blend=Zn,P.cubehelix=Ii,P.mix=P.interpolate=Kn,P.random=ki,P.scale=$n,P.analyze=fo.analyze,P.contrast=Zr,P.deltaE=Bi,P.distance=La,P.limits=fo.limits,P.valid=Ui,P.scales=Pa,P.colors=Tr,P.brewer=Gi;var Vi=P;return Vi})});var Xl=Pn((M0,S0)=>{(function(e,t){typeof M0=="object"&&typeof S0!="undefined"?S0.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis!="undefined"?globalThis:e||self,e.Tweakpane=t())})(M0,function(){"use strict";var e=function(i,o){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,_){c.__proto__=_}||function(c,_){for(var N in _)Object.prototype.hasOwnProperty.call(_,N)&&(c[N]=_[N])},e(i,o)};function t(i,o){if(typeof o!="function"&&o!==null)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");e(i,o);function c(){this.constructor=i}i.prototype=o===null?Object.create(o):(c.prototype=o.prototype,new c)}var r=function(){return r=Object.assign||function(o){for(var c,_=1,N=arguments.length;_<N;_++){c=arguments[_];for(var U in c)Object.prototype.hasOwnProperty.call(c,U)&&(o[U]=c[U])}return o},r.apply(this,arguments)};function n(){for(var i=0,o=0,c=arguments.length;o<c;o++)i+=arguments[o].length;for(var _=Array(i),N=0,o=0;o<c;o++)for(var U=arguments[o],re=0,fe=U.length;re<fe;re++,N++)_[N]=U[re];return _}var a={inputs:[],monitors:[]};function s(){return n(a.inputs,a.monitors)}function f(i){return i}function h(i){return i==null}function g(i,o){if(i.length!==o.length)return!1;for(var c=0;c<i.length;c++)if(i[c]!==o[c])return!1;return!0}function l(i){return i&&i.parentElement&&i.parentElement.removeChild(i),null}var u="tp";function d(i){return function(o,c){return[u,"-",i,"v",o?"_"+o:"",c?"-"+c:""].join("")}}function C(){return["first","last"]}var M=d("");function L(i,o){var c=i.element;o.emitter.on("change",function(_){if(_.propertyName==="hidden"){var N=M(void 0,"hidden");o.hidden?c.classList.add(N):c.classList.remove(N)}else _.propertyName==="positions"&&(C().forEach(function(U){c.classList.remove(M(void 0,U))}),o.positions.forEach(function(U){c.classList.add(M(void 0,U))}))}),o.emitter.on("dispose",function(){i.onDispose&&i.onDispose(),l(c)})}var v=function(){function i(){this.observers_={}}return i.prototype.on=function(o,c){var _=this.observers_[o];return _||(_=this.observers_[o]=[]),_.push({handler:c}),this},i.prototype.off=function(o,c){var _=this.observers_[o];return _&&(this.observers_[o]=_.filter(function(N){return N.handler!==c})),this},i.prototype.emit=function(o,c){var _=this.observers_[o];!_||_.forEach(function(N){N.handler(c)})},i}(),y=function(){function i(o){this.emitter=new v,this.title=o}return i.prototype.click=function(){this.emitter.emit("click",{sender:this})},i}(),I=d("btn"),P=function(){function i(o,c){this.button=c.button,this.element=o.createElement("div"),this.element.classList.add(I());var _=o.createElement("button");_.classList.add(I("b")),_.textContent=this.button.title,this.element.appendChild(_),this.buttonElement=_}return i}(),D=function(){function i(o,c){this.onButtonClick_=this.onButtonClick_.bind(this),this.button=new y(c.title),this.blade=c.blade,this.view=new P(o,{button:this.button}),this.view.buttonElement.addEventListener("click",this.onButtonClick_),L(this.view,this.blade)}return i.prototype.onButtonClick_=function(){this.button.click()},i}(),Z=d("lbl");function O(i,o){var c=i.createDocumentFragment(),_=o.split(`
`).map(function(N){return i.createTextNode(N)});return _.forEach(function(N,U){U>0&&c.appendChild(i.createElement("br")),c.appendChild(N)}),c}var B=function(){function i(o,c){this.label=c.label,this.elem_=o.createElement("div"),this.elem_.classList.add(Z());var _=o.createElement("div");_.classList.add(Z("l")),_.appendChild(O(o,this.label)),this.elem_.appendChild(_);var N=o.createElement("div");N.classList.add(Z("v")),N.appendChild(c.view.element),this.elem_.appendChild(N)}return Object.defineProperty(i.prototype,"element",{get:function(){return this.elem_},enumerable:!1,configurable:!0}),i}(),K=function(){function i(o,c){this.binding=c.binding,this.controller=c.controller,this.view=new B(o,{label:c.label,view:this.controller.view}),this.blade=c.blade,L(this.view,this.blade)}return i}(),V=function(){function i(o,c){var _=this;this.binding=c.binding,this.controller=c.controller,this.view=new B(o,{label:c.label,view:this.controller.view}),this.blade=c.blade,this.blade.emitter.on("dispose",function(){_.binding.dispose()}),L(this.view,this.blade)}return i}(),X=function(){function i(){this.emitter=new v,this.disposed_=!1}return Object.defineProperty(i.prototype,"disposed",{get:function(){return this.disposed_},enumerable:!1,configurable:!0}),i.prototype.dispose=function(){return this.disposed_?!1:(this.disposed_=!0,this.emitter.emit("dispose",{sender:this}),!0)},i}(),Q=function(){function i(){this.onDispose_=this.onDispose_.bind(this),this.emitter=new v,this.positions_=[],this.hidden_=!1,this.disposable_=new X,this.disposable_.emitter.on("dispose",this.onDispose_)}return Object.defineProperty(i.prototype,"hidden",{get:function(){return this.hidden_},set:function(o){this.hidden_!==o&&(this.hidden_=o,this.emitter.emit("change",{propertyName:"hidden",sender:this}))},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"positions",{get:function(){return this.positions_},set:function(o){g(o,this.positions_)||(this.positions_=o,this.emitter.emit("change",{propertyName:"positions",sender:this}))},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"disposed",{get:function(){return this.disposable_.disposed},enumerable:!1,configurable:!0}),i.prototype.dispose=function(){this.disposable_.dispose()},i.prototype.onDispose_=function(){this.emitter.emit("dispose",{sender:this})},i}(),ge="http://www.w3.org/2000/svg";function q(i){i.offsetHeight}function ve(i,o){var c=i.style.transition;i.style.transition="none",o(),i.style.transition=c}function de(i){return i.ontouchstart!==void 0}function Me(){return new Function("return this")()}function _e(){var i=f(Me());return i.document}function Te(){return"document"in Me()}function me(i){return Te()?i.getContext("2d"):null}var ce={p2dpad:'<path d="M8 2V14" stroke="currentColor" stroke-width="1.5"/><path d="M2 8H14" stroke="currentColor" stroke-width="1.5"/><circle cx="8" cy="8" r="2" fill="currentColor"/>'};function Ie(i,o){var c=i.createElementNS(ge,"svg");return c.innerHTML=ce[o],c}function je(i,o,c){i.insertBefore(o,i.children[c])}function Xe(i){return i.relatedTarget?f(i.relatedTarget):"explicitOriginalTarget"in i?i.explicitOriginalTarget:null}function Ue(i){var o=i.items.filter(function(N){return!N.blade.hidden}),c=o[0],_=o[o.length-1];i.items.forEach(function(N){var U=[];N===c&&U.push("first"),N===_&&U.push("last"),N.blade.positions=U})}function ht(i,o){var c=0;return ve(o,function(){i.expandedHeight=null,i.temporaryExpanded=!0,q(o),c=o.clientHeight,i.temporaryExpanded=null,q(o)}),c}var tt=function(){function i(){this.emitter=new v,this.items_=[]}return Object.defineProperty(i.prototype,"items",{get:function(){return this.items_},enumerable:!1,configurable:!0}),i.prototype.add=function(o,c){var _=c!==void 0?c:this.items_.length;this.items_.splice(_,0,o),this.emitter.emit("add",{index:_,item:o,sender:this})},i.prototype.remove=function(o){var c=this.items_.indexOf(o);c<0||(this.items_.splice(c,1),this.emitter.emit("remove",{sender:this}))},i}(),ct=function(){function i(){this.onItemFolderFold_=this.onItemFolderFold_.bind(this),this.onListItemLayout_=this.onListItemLayout_.bind(this),this.onSubitemLayout_=this.onSubitemLayout_.bind(this),this.onSubitemFolderFold_=this.onSubitemFolderFold_.bind(this),this.onSubitemInputChange_=this.onSubitemInputChange_.bind(this),this.onSubitemMonitorUpdate_=this.onSubitemMonitorUpdate_.bind(this),this.onItemInputChange_=this.onItemInputChange_.bind(this),this.onListAdd_=this.onListAdd_.bind(this),this.onListItemDispose_=this.onListItemDispose_.bind(this),this.onListRemove_=this.onListRemove_.bind(this),this.onItemMonitorUpdate_=this.onItemMonitorUpdate_.bind(this),this.blades_=new tt,this.emitter=new v,this.blades_.emitter.on("add",this.onListAdd_),this.blades_.emitter.on("remove",this.onListRemove_)}return Object.defineProperty(i.prototype,"items",{get:function(){return this.blades_.items},enumerable:!1,configurable:!0}),i.prototype.add=function(o,c){this.blades_.add(o,c)},i.prototype.find=function(o){return this.items.reduce(function(c,_){return _ instanceof He&&c.push.apply(c,_.bladeRack.find(o)),_ instanceof o&&c.push(_),c},[])},i.prototype.onListAdd_=function(o){var c=o.item;if(this.emitter.emit("add",{blade:c,index:o.index,sender:this}),c.blade.emitter.on("dispose",this.onListItemDispose_),c.blade.emitter.on("change",this.onListItemLayout_),c instanceof K)c.binding.emitter.on("change",this.onItemInputChange_);else if(c instanceof V)c.binding.emitter.on("update",this.onItemMonitorUpdate_);else if(c instanceof He){c.folder.emitter.on("change",this.onItemFolderFold_);var _=c.bladeRack.emitter;_.on("itemfold",this.onSubitemFolderFold_),_.on("itemlayout",this.onSubitemLayout_),_.on("inputchange",this.onSubitemInputChange_),_.on("monitorupdate",this.onSubitemMonitorUpdate_)}},i.prototype.onListRemove_=function(o){this.emitter.emit("remove",{sender:this})},i.prototype.onListItemLayout_=function(o){(o.propertyName==="hidden"||o.propertyName==="positions")&&this.emitter.emit("itemlayout",{sender:this})},i.prototype.onListItemDispose_=function(o){var c=this,_=this.blades_.items.filter(function(N){return N.blade.disposed});_.forEach(function(N){c.blades_.remove(N)})},i.prototype.onItemInputChange_=function(o){this.emitter.emit("inputchange",{inputBinding:o.sender,sender:this,value:o.rawValue})},i.prototype.onItemMonitorUpdate_=function(o){this.emitter.emit("monitorupdate",{monitorBinding:o.sender,sender:this,value:o.rawValue})},i.prototype.onItemFolderFold_=function(o){o.propertyName==="expanded"&&this.emitter.emit("itemfold",{expanded:o.sender.expanded,sender:this})},i.prototype.onSubitemLayout_=function(o){this.emitter.emit("itemlayout",{sender:this})},i.prototype.onSubitemInputChange_=function(o){this.emitter.emit("inputchange",{inputBinding:o.inputBinding,sender:this,value:o.value})},i.prototype.onSubitemMonitorUpdate_=function(o){this.emitter.emit("monitorupdate",{monitorBinding:o.monitorBinding,sender:this,value:o.value})},i.prototype.onSubitemFolderFold_=function(o){this.emitter.emit("itemfold",{expanded:o.expanded,sender:this})},i}(),ot=function(){function i(o,c){this.emitter=new v,this.expanded_=c,this.expandedHeight_=null,this.temporaryExpanded_=null,this.shouldFixHeight_=!1,this.title=o}return Object.defineProperty(i.prototype,"expanded",{get:function(){return this.expanded_},set:function(o){var c=this.expanded_!==o;!c||(this.emitter.emit("beforechange",{propertyName:"expanded",sender:this}),this.expanded_=o,this.emitter.emit("change",{propertyName:"expanded",sender:this}))},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"temporaryExpanded",{get:function(){return this.temporaryExpanded_},set:function(o){var c=this.temporaryExpanded_!==o;!c||(this.emitter.emit("beforechange",{propertyName:"temporaryExpanded",sender:this}),this.temporaryExpanded_=o,this.emitter.emit("change",{propertyName:"temporaryExpanded",sender:this}))},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"expandedHeight",{get:function(){return this.expandedHeight_},set:function(o){var c=this.expandedHeight_!==o;!c||(this.emitter.emit("beforechange",{propertyName:"expandedHeight",sender:this}),this.expandedHeight_=o,this.emitter.emit("change",{propertyName:"expandedHeight",sender:this}))},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"shouldFixHeight",{get:function(){return this.shouldFixHeight_},set:function(o){var c=this.shouldFixHeight_!==o;!c||(this.emitter.emit("beforechange",{propertyName:"shouldFixHeight",sender:this}),this.shouldFixHeight_=o,this.emitter.emit("change",{propertyName:"shouldFixHeight",sender:this}))},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"styleExpanded",{get:function(){var o;return(o=this.temporaryExpanded)!==null&&o!==void 0?o:this.expanded},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"styleHeight",{get:function(){return this.styleExpanded?this.shouldFixHeight&&!h(this.expandedHeight)?this.expandedHeight+"px":"auto":"0"},enumerable:!1,configurable:!0}),i}(),ut=d("fld"),it=function(){function i(o,c){this.onFolderChange_=this.onFolderChange_.bind(this),this.folder_=c.folder,this.folder_.emitter.on("change",this.onFolderChange_),this.element=o.createElement("div"),this.element.classList.add(ut());var _=o.createElement("button");_.classList.add(ut("t")),_.textContent=this.folder_.title,this.element.appendChild(_),this.titleElement=_;var N=o.createElement("div");N.classList.add(ut("m")),this.titleElement.appendChild(N);var U=o.createElement("div");U.classList.add(ut("c")),this.element.appendChild(U),this.containerElement=U,this.applyModel_()}return i.prototype.applyModel_=function(){var o=this.folder_.styleExpanded,c=ut(void 0,"expanded");o?this.element.classList.add(c):this.element.classList.remove(c),this.containerElement.style.height=this.folder_.styleHeight},i.prototype.onFolderChange_=function(){this.applyModel_()},i}(),He=function(){function i(o,c){var _;this.onContainerTransitionEnd_=this.onContainerTransitionEnd_.bind(this),this.onFolderBeforeChange_=this.onFolderBeforeChange_.bind(this),this.onTitleClick_=this.onTitleClick_.bind(this),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackItemLayout_=this.onRackItemLayout_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.blade=c.blade,this.folder=new ot(c.title,(_=c.expanded)!==null&&_!==void 0?_:!0),this.folder.emitter.on("beforechange",this.onFolderBeforeChange_),this.rack_=new ct,this.rack_.emitter.on("add",this.onRackAdd_),this.rack_.emitter.on("itemlayout",this.onRackItemLayout_),this.rack_.emitter.on("remove",this.onRackRemove_),this.doc_=o,this.view=new it(this.doc_,{folder:this.folder}),this.view.titleElement.addEventListener("click",this.onTitleClick_),this.view.containerElement.addEventListener("transitionend",this.onContainerTransitionEnd_),L(this.view,this.blade)}return Object.defineProperty(i.prototype,"document",{get:function(){return this.doc_},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"bladeRack",{get:function(){return this.rack_},enumerable:!1,configurable:!0}),i.prototype.onFolderBeforeChange_=function(o){o.propertyName==="expanded"&&(h(this.folder.expandedHeight)&&(this.folder.expandedHeight=ht(this.folder,this.view.containerElement)),this.folder.shouldFixHeight=!0,q(this.view.containerElement))},i.prototype.onTitleClick_=function(){this.folder.expanded=!this.folder.expanded},i.prototype.applyRackChange_=function(){Ue(this.bladeRack)},i.prototype.onRackAdd_=function(o){je(this.view.containerElement,o.blade.view.element,o.index),this.applyRackChange_()},i.prototype.onRackRemove_=function(o){this.applyRackChange_()},i.prototype.onRackItemLayout_=function(o){this.applyRackChange_()},i.prototype.onContainerTransitionEnd_=function(o){o.propertyName==="height"&&(this.folder.shouldFixHeight=!1,this.folder.expandedHeight=null)},i}(),Pt=d("spt"),lt=function(){function i(o){this.element=o.createElement("div"),this.element.classList.add(Pt());var c=o.createElement("hr");c.classList.add(Pt("r")),this.element.appendChild(c)}return i}(),rt=function(){function i(o,c){this.blade=c.blade,this.view=new lt(o),L(this.view,this.blade)}return i}(),xt=function(){function i(o){this.controller=o}return Object.defineProperty(i.prototype,"hidden",{get:function(){return this.controller.blade.hidden},set:function(o){this.controller.blade.hidden=o},enumerable:!1,configurable:!0}),i.prototype.dispose=function(){this.controller.blade.dispose()},i.prototype.on=function(o,c){var _=this.controller.button.emitter;return _.on(o,f(c.bind(this))),this},i}();function At(i){var o=i.binding,c=i.eventName,_=i.handler;if(c==="change"){var N=o.emitter;N.on("change",function(U){_(f(U.sender.target.read()))})}}function Vt(i){var o=i.binding,c=i.eventName,_=i.handler;if(c==="update"){var N=o.emitter;N.on("update",function(U){_(U.sender.target.read())})}}function H(i){var o=i.bladeRack,c=i.eventName,_=i.folder,N=i.handler;if(c==="change"){var U=o.emitter;U.on("inputchange",function(re){N(re.inputBinding.target.read())})}if(c==="update"){var U=o.emitter;U.on("monitorupdate",function(fe){N(fe.monitorBinding.target.read())})}c==="fold"&&(o.emitter.on("itemfold",function(re){N(re.expanded)}),_==null||_.emitter.on("change",function(re){re.propertyName==="expanded"&&N(re.sender.expanded)}))}var ne=function(){function i(o){this.controller=o}return Object.defineProperty(i.prototype,"hidden",{get:function(){return this.controller.blade.hidden},set:function(o){this.controller.blade.hidden=o},enumerable:!1,configurable:!0}),i.prototype.dispose=function(){this.controller.blade.dispose()},i.prototype.on=function(o,c){return At({binding:this.controller.binding,eventName:o,handler:c.bind(this)}),this},i.prototype.refresh=function(){this.controller.binding.read()},i}(),ie={alreadydisposed:function(){return"View has been already disposed"},invalidparams:function(i){return"Invalid parameters for '"+i.name+"'"},nomatchingcontroller:function(i){return"No matching controller for '"+i.key+"'"},notbindable:function(){return"Value is not bindable"},propertynotfound:function(i){return"Property '"+i.name+"' not found"},shouldneverhappen:function(){return"This error should never happen"}},J=function(){function i(o){var c;this.message=(c=ie[o.type](f(o.context)))!==null&&c!==void 0?c:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=o.type}return i.alreadyDisposed=function(){return new i({context:{},type:"alreadydisposed"})},i.notBindable=function(){return new i({context:{},type:"notbindable"})},i.propertyNotFound=function(o){return new i({type:"propertynotfound",context:{name:o}})},i.shouldNeverHappen=function(){return new i({context:{},type:"shouldneverhappen"})},i}();J.prototype=Object.create(Error.prototype),J.prototype.constructor=J;var Ee=function(){function i(o){this.onValueChange_=this.onValueChange_.bind(this),this.reader=o.reader,this.writer=o.writer,this.emitter=new v,this.value=o.value,this.value.emitter.on("change",this.onValueChange_),this.target=o.target,this.read()}return i.prototype.read=function(){var o=this.target.read();o!==void 0&&(this.value.rawValue=this.reader(o))},i.prototype.write_=function(o){this.writer(this.target,o)},i.prototype.onValueChange_=function(o){this.write_(o.rawValue),this.emitter.emit("change",{rawValue:o.rawValue,sender:this})},i}(),Re=function(){function i(o,c){var _;this.constraint_=c==null?void 0:c.constraint,this.equals_=(_=c==null?void 0:c.equals)!==null&&_!==void 0?_:function(N,U){return N===U},this.emitter=new v,this.rawValue_=o}return Object.defineProperty(i.prototype,"constraint",{get:function(){return this.constraint_},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"rawValue",{get:function(){return this.rawValue_},set:function(o){var c=this.constraint_?this.constraint_.constrain(o):o,_=!this.equals_(this.rawValue_,c);_&&(this.rawValue_=c,this.emitter.emit("change",{rawValue:c,sender:this}))},enumerable:!1,configurable:!0}),i}();function Le(i,o){var c=i.binding.accept(o.target.read(),o.params);if(c===null)return null;var _={target:o.target,initialValue:c,params:o.params},N=i.binding.reader(_),U=i.binding.constraint?i.binding.constraint(_):void 0,re=new Re(N(c),{constraint:U,equals:i.binding.equals}),fe=new Ee({reader:N,target:o.target,value:re,writer:i.binding.writer(_)}),be=i.controller({binding:fe,document:o.document,initialValue:c,params:o.params});return new K(o.document,{binding:fe,controller:be,label:o.params.label||o.target.key,blade:new Q})}function Se(i,o,c){var _=o.read();if(h(_))throw new J({context:{key:o.key},type:"nomatchingcontroller"});var N=a.inputs.reduce(function(U,re){return U||Le(re,{document:i,target:o,params:c})},null);if(N)return N;throw new J({context:{key:o.key},type:"nomatchingcontroller"})}var we=function(){function i(o){this.controller=o}return Object.defineProperty(i.prototype,"hidden",{get:function(){return this.controller.blade.hidden},set:function(o){this.controller.blade.hidden=o},enumerable:!1,configurable:!0}),i.prototype.dispose=function(){this.controller.blade.dispose()},i.prototype.on=function(o,c){return Vt({binding:this.controller.binding,eventName:o,handler:f(c.bind(this))}),this},i.prototype.refresh=function(){this.controller.binding.read()},i}(),De={monitor:{defaultInterval:200,defaultLineCount:3}};function zt(i,o){for(;i.length<o;)i.push(void 0)}function Kt(i,o){var c=[i];return zt(c,o),new Re(c)}function tr(i){var o=i.indexOf(void 0);return f(o<0?i:i.slice(0,o))}function zr(i,o){var c=n(tr(i),[o]);return c.length>i.length?c.splice(0,c.length-i.length):zt(c,i.length),c}var Dr=function(){function i(o){this.onTick_=this.onTick_.bind(this),this.reader_=o.reader,this.target=o.target,this.emitter=new v,this.value=o.value,this.ticker=o.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}return i.prototype.dispose=function(){this.ticker.disposable.dispose()},i.prototype.read=function(){var o=this.target.read();if(o!==void 0){var c=this.value.rawValue,_=this.reader_(o);this.value.rawValue=zr(c,_),this.emitter.emit("update",{rawValue:_,sender:this})}},i.prototype.onTick_=function(o){this.read()},i}(),_n=function(){function i(o,c){var _=this;if(this.id_=null,this.onTick_=this.onTick_.bind(this),this.doc_=o,this.emitter=new v,c<=0)this.id_=null;else{var N=this.doc_.defaultView;N&&(this.id_=N.setInterval(this.onTick_,c))}this.disposable=new X,this.disposable.emitter.on("dispose",function(){if(_.id_!==null){var U=_.doc_.defaultView;U&&U.clearInterval(_.id_)}_.id_=null})}return i.prototype.onTick_=function(){this.emitter.emit("tick",{sender:this})},i}(),en=function(){function i(){this.disposable=new X,this.emitter=new v}return i.prototype.tick=function(){this.emitter.emit("tick",{sender:this})},i}();function bn(i,o){return o===0?new en:new _n(i,o??De.monitor.defaultInterval)}function tn(i,o){var c,_,N,U=i.binding.accept(o.target.read(),o.params);if(U===null)return null;var re={target:o.target,initialValue:U,params:o.params},fe=i.binding.reader(re),be=(N=(_=(c=o.params.bufferSize)!==null&&c!==void 0?c:o.params.count)!==null&&_!==void 0?_:i.binding.defaultBufferSize&&i.binding.defaultBufferSize(o.params))!==null&&N!==void 0?N:1,ye=new Dr({reader:fe,target:o.target,ticker:bn(o.document,o.params.interval),value:Kt(fe(U),be)});return new V(o.document,{binding:ye,controller:i.controller({binding:ye,document:o.document,params:o.params}),label:o.params.label||o.target.key,blade:new Q})}function rn(i,o,c){var _=a.monitors.reduce(function(N,U){return N||tn(U,{document:i,params:c,target:o})},null);if(_)return _;throw new J({context:{key:o.key},type:"nomatchingcontroller"})}var Hr=function(){function i(o){this.controller=o}return Object.defineProperty(i.prototype,"hidden",{get:function(){return this.controller.blade.hidden},set:function(o){this.controller.blade.hidden=o},enumerable:!1,configurable:!0}),i.prototype.dispose=function(){this.controller.blade.dispose()},i}(),nn=function(){function i(o,c,_){this.obj_=o,this.key_=c,this.presetKey_=_??c}return i.isBindable=function(o){return!(o===null||typeof o!="object")},Object.defineProperty(i.prototype,"key",{get:function(){return this.key_},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"presetKey",{get:function(){return this.presetKey_},enumerable:!1,configurable:!0}),i.prototype.read=function(){return this.obj_[this.key_]},i.prototype.write=function(o){this.obj_[this.key_]=o},i.prototype.writeProperty=function(o,c){var _=this.read();if(!i.isBindable(_))throw J.notBindable();if(!(o in _))throw J.propertyNotFound(o);_[o]=c},i}();function kr(i,o,c){if(!nn.isBindable(i))throw J.notBindable();return new nn(i,o,c)}var qr=function(){function i(o){this.controller=o}return Object.defineProperty(i.prototype,"expanded",{get:function(){return this.controller.folder.expanded},set:function(o){this.controller.folder.expanded=o},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"hidden",{get:function(){return this.controller.blade.hidden},set:function(o){this.controller.blade.hidden=o},enumerable:!1,configurable:!0}),i.prototype.dispose=function(){this.controller.blade.dispose()},i.prototype.addInput=function(o,c,_){var N=_||{},U=Se(this.controller.document,kr(o,c,N.presetKey),N);return this.controller.bladeRack.add(U,N.index),new ne(f(U))},i.prototype.addMonitor=function(o,c,_){var N=_||{},U=rn(this.controller.document,kr(o,c),N);return this.controller.bladeRack.add(U,N.index),new we(f(U))},i.prototype.addFolder=function(o){var c=new He(this.controller.document,r(r({},o),{blade:new Q}));return this.controller.bladeRack.add(c,o.index),new i(c)},i.prototype.addButton=function(o){var c=new D(this.controller.document,r(r({},o),{blade:new Q}));return this.controller.bladeRack.add(c,o.index),new xt(c)},i.prototype.addSeparator=function(o){var c=o||{},_=new rt(this.controller.document,{blade:new Q});return this.controller.bladeRack.add(_,c.index),new Hr(_)},i.prototype.on=function(o,c){return H({eventName:o,folder:this.controller.folder,handler:f(c.bind(this)),bladeRack:this.controller.bladeRack}),this},i}();function dr(i){return i.reduce(function(o,c){var _;return Object.assign(o,(_={},_[c.presetKey]=c.read(),_))},{})}function En(i,o){i.forEach(function(c){var _=o[c.presetKey];_!==void 0&&c.write(_)})}var Wr=function(){function i(o){this.controller=o}return i.registerPlugin=function(o){o.type==="input"?a.inputs.unshift(o.plugin):o.type==="monitor"&&a.monitors.unshift(o.plugin)},Object.defineProperty(i.prototype,"element",{get:function(){return this.controller.view.element},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"expanded",{get:function(){var o=this.controller.folder;return o?o.expanded:!0},set:function(o){var c=this.controller.folder;c&&(c.expanded=o)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"hidden",{get:function(){return this.controller.blade.hidden},set:function(o){this.controller.blade.hidden=o},enumerable:!1,configurable:!0}),i.prototype.dispose=function(){this.controller.blade.dispose()},i.prototype.addInput=function(o,c,_){var N=_||{},U=Se(this.controller.document,kr(o,c,N.presetKey),N);return this.controller.bladeRack.add(U,N.index),new ne(f(U))},i.prototype.addMonitor=function(o,c,_){var N=_||{},U=rn(this.controller.document,kr(o,c),N);return this.controller.bladeRack.add(U,N.index),new we(f(U))},i.prototype.addButton=function(o){var c=new D(this.controller.document,r(r({},o),{blade:new Q}));return this.controller.bladeRack.add(c,o.index),new xt(c)},i.prototype.addFolder=function(o){var c=new He(this.controller.document,r(r({},o),{blade:new Q}));return this.controller.bladeRack.add(c,o.index),new qr(c)},i.prototype.addSeparator=function(o){var c=o||{},_=new rt(this.controller.document,{blade:new Q});return this.controller.bladeRack.add(_,c.index),new Hr(_)},i.prototype.importPreset=function(o){var c=this.controller.bladeRack.find(K).map(function(_){return _.binding.target});En(c,o),this.refresh()},i.prototype.exportPreset=function(){var o=this.controller.bladeRack.find(K).map(function(c){return c.binding.target});return dr(o)},i.prototype.on=function(o,c){return H({eventName:o,folder:this.controller.folder,handler:f(c.bind(this)),bladeRack:this.controller.bladeRack}),this},i.prototype.refresh=function(){this.controller.bladeRack.find(K).forEach(function(o){o.binding.read()}),this.controller.bladeRack.find(V).forEach(function(o){o.binding.read()})},i}(),Cr=d("rot"),wn=function(){function i(o,c){this.titleElem_=null,this.onFolderChange_=this.onFolderChange_.bind(this),this.folder_=c.folder,this.folder_&&this.folder_.emitter.on("change",this.onFolderChange_),this.element=o.createElement("div"),this.element.classList.add(Cr());var _=this.folder_;if(_){var N=o.createElement("button");N.classList.add(Cr("t")),N.textContent=_.title,this.element.appendChild(N);var U=o.createElement("div");U.classList.add(Cr("m")),N.appendChild(U),this.titleElem_=N}var re=o.createElement("div");re.classList.add(Cr("c")),this.element.appendChild(re),this.containerElement=re,this.applyModel_()}return Object.defineProperty(i.prototype,"titleElement",{get:function(){return this.titleElem_},enumerable:!1,configurable:!0}),i.prototype.applyModel_=function(){var o=this.folder_?this.folder_.styleExpanded:!0,c=Cr(void 0,"expanded");o?this.element.classList.add(c):this.element.classList.remove(c),this.containerElement.style.height=this.folder_?this.folder_.styleHeight:"auto"},i.prototype.onFolderChange_=function(){this.applyModel_()},i}();function Cn(i){var o;return i.title?new ot(i.title,(o=i.expanded)!==null&&o!==void 0?o:!0):null}var jr=function(){function i(o,c){this.onContainerTransitionEnd_=this.onContainerTransitionEnd_.bind(this),this.onFolderBeforeChange_=this.onFolderBeforeChange_.bind(this),this.onTitleClick_=this.onTitleClick_.bind(this),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackItemLayout_=this.onRackItemLayout_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.folder=Cn(c),this.folder&&this.folder.emitter.on("beforechange",this.onFolderBeforeChange_),this.bladeRack=new ct,this.bladeRack.emitter.on("add",this.onRackAdd_),this.bladeRack.emitter.on("itemlayout",this.onRackItemLayout_),this.bladeRack.emitter.on("remove",this.onRackRemove_),this.doc_=o,this.blade=c.blade,this.view=new wn(this.doc_,{folder:this.folder}),this.view.titleElement&&this.view.titleElement.addEventListener("click",this.onTitleClick_),this.view.containerElement.addEventListener("transitionend",this.onContainerTransitionEnd_),L(this.view,this.blade)}return Object.defineProperty(i.prototype,"document",{get:function(){return this.doc_},enumerable:!1,configurable:!0}),i.prototype.onFolderBeforeChange_=function(o){if(o.propertyName==="expanded"){var c=this.folder;!c||(h(c.expandedHeight)&&(c.expandedHeight=ht(c,this.view.containerElement)),c.shouldFixHeight=!0,q(this.view.containerElement))}},i.prototype.applyRackChange_=function(){Ue(this.bladeRack)},i.prototype.onRackAdd_=function(o){je(this.view.containerElement,o.blade.view.element,o.index),this.applyRackChange_()},i.prototype.onRackRemove_=function(o){this.applyRackChange_()},i.prototype.onRackItemLayout_=function(o){this.applyRackChange_()},i.prototype.onTitleClick_=function(){this.folder&&(this.folder.expanded=!this.folder.expanded)},i.prototype.onContainerTransitionEnd_=function(o){o.propertyName==="height"&&this.folder&&(this.folder.shouldFixHeight=!1,this.folder.expandedHeight=null)},i}(),$t=function(){function i(o){this.constraints_=o.constraints}return Object.defineProperty(i.prototype,"constraints",{get:function(){return this.constraints_},enumerable:!1,configurable:!0}),i.prototype.constrain=function(o){return this.constraints_.reduce(function(c,_){return _.constrain(c)},o)},i}();function Zt(i,o){if(i instanceof o)return i;if(i instanceof $t){var c=i.constraints.reduce(function(_,N){return _||(N instanceof o?N:null)},null);if(c)return c}return null}var jt=function(){function i(o){this.opts_=o.options}return Object.defineProperty(i.prototype,"options",{get:function(){return this.opts_},enumerable:!1,configurable:!0}),i.prototype.constrain=function(o){var c=this.opts_;if(c.length===0)return o;var _=c.filter(function(N){return N.value===o}).length>0;return _?o:c[0].value},i}();function an(i){return String(i)}function Xr(i){return i==="false"?!1:!!i}function on(i){return an(i)}function Ar(i,o){i.write(o)}var Mr=function(){function i(o){this.step=o.step}return i.prototype.constrain=function(o){var c=o<0?-Math.round(-o/this.step):Math.round(o/this.step);return c*this.step},i}();function gt(i,o,c,_,N){var U=(i-o)/(c-o);return _+U*(N-_)}function Or(i){var o=String(i.toFixed(10)),c=o.split(".")[1];return c.replace(/0+$/,"").length}function Pe(i,o,c){return Math.min(Math.max(i,o),c)}function Mt(i,o){return(i%o+o)%o}function Xt(i,o){if(Array.isArray(i))return i.map(function(N){return{text:N.text,value:o(N.value)}});var c=i,_=Object.keys(c);return _.reduce(function(N,U){return N.concat({text:U,value:o(c[U])})},[])}function m(i){var o=i?Zt(i,jt):null;return o?o.options:null}function b(i){var o=i?Zt(i,Mr):null;return o?o.step:null}function w(i,o){var c=i&&Zt(i,Mr);return c?Or(c.step):Math.max(Or(o),2)}function A(i){var o=b(i);return o??1}var S=d("lst"),T=function(){function i(o,c){var _=this;this.onValueChange_=this.onValueChange_.bind(this),this.element=o.createElement("div"),this.element.classList.add(S()),this.stringifyValue_=c.stringifyValue;var N=o.createElement("select");N.classList.add(S("s")),c.options.forEach(function(re,fe){var be=o.createElement("option");be.dataset.index=String(fe),be.textContent=re.text,be.value=_.stringifyValue_(re.value),N.appendChild(be)}),this.element.appendChild(N),this.selectElement=N;var U=o.createElement("div");U.classList.add(S("m")),this.element.appendChild(U),c.value.emitter.on("change",this.onValueChange_),this.value=c.value,this.update()}return i.prototype.update=function(){this.selectElement.value=this.stringifyValue_(this.value.rawValue)},i.prototype.onValueChange_=function(){this.update()},i}(),F=function(){function i(o,c){this.onSelectChange_=this.onSelectChange_.bind(this),this.value=c.value,this.listItems_=c.listItems,this.view=new T(o,{options:this.listItems_,stringifyValue:c.stringifyValue,value:this.value}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}return i.prototype.onSelectChange_=function(o){var c=f(o.currentTarget),_=c.selectedOptions.item(0);if(!!_){var N=Number(_.dataset.index);this.value.rawValue=this.listItems_[N].value,this.view.update()}},i}(),G=d("ckb"),$=function(){function i(o,c){this.onValueChange_=this.onValueChange_.bind(this),this.element=o.createElement("div"),this.element.classList.add(G());var _=o.createElement("label");_.classList.add(G("l")),this.element.appendChild(_);var N=o.createElement("input");N.classList.add(G("i")),N.type="checkbox",_.appendChild(N),this.inputElement=N;var U=o.createElement("div");U.classList.add(G("m")),_.appendChild(U),c.value.emitter.on("change",this.onValueChange_),this.value=c.value,this.update()}return i.prototype.update=function(){this.inputElement.checked=this.value.rawValue},i.prototype.onValueChange_=function(){this.update()},i}(),W=function(){function i(o,c){this.onInputChange_=this.onInputChange_.bind(this),this.value=c.value,this.view=new $(o,{value:this.value}),this.view.inputElement.addEventListener("change",this.onInputChange_)}return i.prototype.onInputChange_=function(o){var c=f(o.currentTarget);this.value.rawValue=c.checked,this.view.update()},i}();function ae(i){var o=[];return"options"in i&&i.options!==void 0&&o.push(new jt({options:Xt(i.options,Xr)})),new $t({constraints:o})}function se(i,o){var c,_=o.constraint;return _&&Zt(_,jt)?new F(i,{listItems:(c=m(_))!==null&&c!==void 0?c:[],stringifyValue:an,value:o}):new W(i,{value:o})}var ue={id:"input-bool",binding:{accept:function(i){return typeof i=="boolean"?i:null},constraint:function(i){return ae(i.params)},reader:function(i){return Xr},writer:function(i){return Ar}},controller:function(i){return se(i.document,i.binding.value)}},Ne=d("txt"),Ze=function(){function i(o,c){this.onValueChange_=this.onValueChange_.bind(this),this.formatter_=c.formatter,this.element=o.createElement("div"),this.element.classList.add(Ne());var _=o.createElement("input");_.classList.add(Ne("i")),_.type="text",this.element.appendChild(_),this.inputElement=_,c.value.emitter.on("change",this.onValueChange_),this.value=c.value,this.update()}return i.prototype.update=function(){this.inputElement.value=this.formatter_(this.value.rawValue)},i.prototype.onValueChange_=function(){this.update()},i}(),ke=function(){function i(o,c){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=c.parser,this.value=c.value,this.view=new Ze(o,{formatter:c.formatter,value:this.value}),this.view.inputElement.addEventListener("change",this.onInputChange_)}return i.prototype.onInputChange_=function(o){var c=f(o.currentTarget),_=c.value,N=this.parser_(_);h(N)||(this.value.rawValue=N),this.view.update()},i}(),Dt=d("cswtxt"),yt=function(){function i(o,c){this.element=o.createElement("div"),this.element.classList.add(Dt());var _=o.createElement("div");_.classList.add(Dt("s")),this.swatchView_=c.swatchView,_.appendChild(this.swatchView_.element),this.element.appendChild(_);var N=o.createElement("div");N.classList.add(Dt("t")),this.textView=c.textView,N.appendChild(this.textView.element),this.element.appendChild(N)}return Object.defineProperty(i.prototype,"value",{get:function(){return this.textView.value},enumerable:!1,configurable:!0}),i.prototype.update=function(){this.swatchView_.update(),this.textView.update()},i}(),Qt=function(){function i(o){this.onValueChange_=this.onValueChange_.bind(this),this.mode_=o.rawValue.mode,this.value=o,this.value.emitter.on("change",this.onValueChange_),this.emitter=new v}return Object.defineProperty(i.prototype,"mode",{get:function(){return this.mode_},set:function(o){this.mode_!==o&&(this.mode_=o,this.emitter.emit("change",{propertyName:"mode",sender:this}))},enumerable:!1,configurable:!0}),i.prototype.onValueChange_=function(){this.emitter.emit("change",{propertyName:"value",sender:this})},i}();function Ye(i){var o=parseFloat(i);return isNaN(o)?null:o}function Tt(i){if(typeof i=="number")return i;if(typeof i=="string"){var o=Ye(i);if(!h(o))return o}return 0}function sn(i){return String(i)}function _t(i){return function(o){return o.toFixed(Math.max(Math.min(i,20),0))}}var An=_t(0);function Sr(i){return An(i)+"%"}function Fr(i,o,c){var _=Pe(i/255,0,1),N=Pe(o/255,0,1),U=Pe(c/255,0,1),re=Math.max(_,N,U),fe=Math.min(_,N,U),be=re-fe,ye=0,It=0,kt=(fe+re)/2;return be!==0&&(It=kt>.5?be/(2-fe-re):be/(re+fe),_===re?ye=(N-U)/be:N===re?ye=2+(U-_)/be:ye=4+(_-N)/be,ye=ye/6+(ye<0?1:0)),[ye*360,It*100,kt*100]}function cn(i,o,c){var _,N,U,re,fe,be,ye=(i%360+360)%360,It=Pe(o/100,0,1),kt=Pe(c/100,0,1),dt=(1-Math.abs(2*kt-1))*It,St=dt*(1-Math.abs(ye/60%2-1)),gr=kt-dt/2,Ct,Ot,qt;return ye>=0&&ye<60?(_=[dt,St,0],Ct=_[0],Ot=_[1],qt=_[2]):ye>=60&&ye<120?(N=[St,dt,0],Ct=N[0],Ot=N[1],qt=N[2]):ye>=120&&ye<180?(U=[0,dt,St],Ct=U[0],Ot=U[1],qt=U[2]):ye>=180&&ye<240?(re=[0,St,dt],Ct=re[0],Ot=re[1],qt=re[2]):ye>=240&&ye<300?(fe=[St,0,dt],Ct=fe[0],Ot=fe[1],qt=fe[2]):(be=[dt,0,St],Ct=be[0],Ot=be[1],qt=be[2]),[(Ct+gr)*255,(Ot+gr)*255,(qt+gr)*255]}function rr(i,o,c){var _=Pe(i/255,0,1),N=Pe(o/255,0,1),U=Pe(c/255,0,1),re=Math.max(_,N,U),fe=Math.min(_,N,U),be=re-fe,ye;be===0?ye=0:re===_?ye=60*(((N-U)/be%6+6)%6):re===N?ye=60*((U-_)/be+2):ye=60*((_-N)/be+4);var It=re===0?0:be/re,kt=re;return[ye,It*100,kt*100]}function Br(i,o,c){var _,N,U,re,fe,be,ye=Mt(i,360),It=Pe(o/100,0,1),kt=Pe(c/100,0,1),dt=kt*It,St=dt*(1-Math.abs(ye/60%2-1)),gr=kt-dt,Ct,Ot,qt;return ye>=0&&ye<60?(_=[dt,St,0],Ct=_[0],Ot=_[1],qt=_[2]):ye>=60&&ye<120?(N=[St,dt,0],Ct=N[0],Ot=N[1],qt=N[2]):ye>=120&&ye<180?(U=[0,dt,St],Ct=U[0],Ot=U[1],qt=U[2]):ye>=180&&ye<240?(re=[0,St,dt],Ct=re[0],Ot=re[1],qt=re[2]):ye>=240&&ye<300?(fe=[St,0,dt],Ct=fe[0],Ot=fe[1],qt=fe[2]):(be=[dt,0,St],Ct=be[0],Ot=be[1],qt=be[2]),[(Ct+gr)*255,(Ot+gr)*255,(qt+gr)*255]}function yr(i){return[i[0],i[1],i[2]]}function Mn(i,o){return[i[0],i[1],i[2],o]}var Ft={hsl:{hsl:function(i,o,c){return[i,o,c]},hsv:function(i,o,c){var _=cn(i,o,c),N=_[0],U=_[1],re=_[2];return rr(N,U,re)},rgb:cn},hsv:{hsl:function(i,o,c){var _=Br(i,o,c),N=_[0],U=_[1],re=_[2];return Fr(N,U,re)},hsv:function(i,o,c){return[i,o,c]},rgb:Br},rgb:{hsl:Fr,hsv:rr,rgb:function(i,o,c){return[i,o,c]}}};function st(i,o,c){var _;return(_=Ft[o])[c].apply(_,i)}var $o={hsl:function(i){var o;return[Mt(i[0],360),Pe(i[1],0,100),Pe(i[2],0,100),Pe((o=i[3])!==null&&o!==void 0?o:1,0,1)]},hsv:function(i){var o;return[Mt(i[0],360),Pe(i[1],0,100),Pe(i[2],0,100),Pe((o=i[3])!==null&&o!==void 0?o:1,0,1)]},rgb:function(i){var o;return[Pe(i[0],0,255),Pe(i[1],0,255),Pe(i[2],0,255),Pe((o=i[3])!==null&&o!==void 0?o:1,0,1)]}};function zn(i,o){return typeof i!="object"||h(i)?!1:o in i&&typeof i[o]=="number"}var nt=function(){function i(o,c){this.mode_=c,this.comps_=$o[c](o)}return i.black=function(){return new i([0,0,0],"rgb")},i.fromObject=function(o){var c="a"in o?[o.r,o.g,o.b,o.a]:[o.r,o.g,o.b];return new i(c,"rgb")},i.toRgbaObject=function(o){return o.toRgbaObject()},i.isRgbColorObject=function(o){return zn(o,"r")&&zn(o,"g")&&zn(o,"b")},i.isRgbaColorObject=function(o){return this.isRgbColorObject(o)&&zn(o,"a")},i.isColorObject=function(o){return this.isRgbColorObject(o)},i.equals=function(o,c){if(o.mode_!==c.mode_)return!1;for(var _=o.comps_,N=c.comps_,U=0;U<_.length;U++)if(_[U]!==N[U])return!1;return!0},Object.defineProperty(i.prototype,"mode",{get:function(){return this.mode_},enumerable:!1,configurable:!0}),i.prototype.getComponents=function(o){return Mn(st(yr(this.comps_),this.mode_,o||this.mode_),this.comps_[3])},i.prototype.toRgbaObject=function(){var o=this.getComponents("rgb");return{r:o[0],g:o[1],b:o[2],a:o[3]}},i}();function ur(i,o){var c=i.match(/^(.+)%$/);return Math.min(c?parseFloat(c[1])*.01*o:parseFloat(i),o)}var Zo={deg:function(i){return i},grad:function(i){return i*360/400},rad:function(i){return i*360/(2*Math.PI)},turn:function(i){return i*360}};function Qa(i){var o=i.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!o)return parseFloat(i);var c=parseFloat(o[1]),_=o[2];return Zo[_](c)}var xa={"func.rgb":function(i){var o=i.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!o)return null;var c=[ur(o[1],255),ur(o[2],255),ur(o[3],255)];return isNaN(c[0])||isNaN(c[1])||isNaN(c[2])?null:new nt(c,"rgb")},"func.rgba":function(i){var o=i.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!o)return null;var c=[ur(o[1],255),ur(o[2],255),ur(o[3],255),ur(o[4],1)];return isNaN(c[0])||isNaN(c[1])||isNaN(c[2])||isNaN(c[3])?null:new nt(c,"rgb")},"func.hsl":function(i){var o=i.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!o)return null;var c=[Qa(o[1]),ur(o[2],100),ur(o[3],100)];return isNaN(c[0])||isNaN(c[1])||isNaN(c[2])?null:new nt(c,"hsl")},"func.hsla":function(i){var o=i.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!o)return null;var c=[Qa(o[1]),ur(o[2],100),ur(o[3],100),ur(o[4],1)];return isNaN(c[0])||isNaN(c[1])||isNaN(c[2])||isNaN(c[3])?null:new nt(c,"hsl")},"hex.rgb":function(i){var o=i.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(o)return new nt([parseInt(o[1]+o[1],16),parseInt(o[2]+o[2],16),parseInt(o[3]+o[3],16)],"rgb");var c=i.match(/^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return c?new nt([parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16)],"rgb"):null},"hex.rgba":function(i){var o=i.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(o)return new nt([parseInt(o[1]+o[1],16),parseInt(o[2]+o[2],16),parseInt(o[3]+o[3],16),gt(parseInt(o[4]+o[4],16),0,255,0,1)],"rgb");var c=i.match(/^#?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return c?new nt([parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16),gt(parseInt(c[4],16),0,255,0,1)],"rgb"):null}};function Hn(i){var o=Object.keys(xa);return o.reduce(function(c,_){if(c)return c;var N=xa[_];return N(i)?_:null},null)}var Sn=function(i){var o=Hn(i);return o?xa[o](i):null};function Qo(i){return i==="func.hsla"||i==="func.rgba"||i==="hex.rgba"}function Jo(i){if(typeof i=="string"){var o=Sn(i);if(o)return o}return nt.black()}function Ja(i){var o=Pe(Math.floor(i),0,255).toString(16);return o.length===1?"0"+o:o}function ya(i){var o=yr(i.getComponents("rgb")).map(Ja).join("");return"#"+o}function qn(i){var o=i.getComponents("rgb"),c=[o[0],o[1],o[2],o[3]*255].map(Ja).join("");return"#"+c}function eo(i){var o=_t(0),c=yr(i.getComponents("rgb")).map(function(_){return o(_)});return"rgb("+c.join(", ")+")"}function Tr(i){var o=_t(2),c=_t(0),_=i.getComponents("rgb").map(function(N,U){var re=U===3?o:c;return re(N)});return"rgba("+_.join(", ")+")"}function ei(i){var o=[_t(0),Sr,Sr],c=yr(i.getComponents("hsl")).map(function(_,N){return o[N](_)});return"hsl("+c.join(", ")+")"}function ti(i){var o=[_t(0),Sr,Sr,_t(2)],c=i.getComponents("hsl").map(function(_,N){return o[N](_)});return"hsla("+c.join(", ")+")"}var ri={"func.hsl":ei,"func.hsla":ti,"func.rgb":eo,"func.rgba":Tr,"hex.rgb":ya,"hex.rgba":qn};function to(i){return ri[i]}var Wn=d("csw"),ni=function(){function i(o,c){this.onValueChange_=this.onValueChange_.bind(this),c.value.emitter.on("change",this.onValueChange_),this.value=c.value,this.element=o.createElement("div"),this.element.classList.add(Wn());var _=o.createElement("div");_.classList.add(Wn("sw")),this.element.appendChild(_),this.swatchElem_=_;var N=o.createElement("button");N.classList.add(Wn("b")),this.element.appendChild(N),this.buttonElement=N;var U=o.createElement("div");U.classList.add(Wn("p")),this.pickerView_=c.pickerView,U.appendChild(this.pickerView_.element),this.element.appendChild(U),this.update()}return i.prototype.update=function(){var o=this.value.rawValue;this.swatchElem_.style.backgroundColor=qn(o)},i.prototype.onValueChange_=function(){this.update()},i}(),ro=function(){function i(){this.emitter=new v,this.expanded_=!1}return Object.defineProperty(i.prototype,"expanded",{get:function(){return this.expanded_},set:function(o){var c=this.expanded_!==o;c&&(this.expanded_=o,this.emitter.emit("change",{sender:this}))},enumerable:!1,configurable:!0}),i}();function ai(i){var o=i.primary,c=i.secondary,_=i.forward,N=i.backward;o.emitter.on("change",function(){c.rawValue=_(o,c)}),c.emitter.on("change",function(){o.rawValue=N(o,c)}),c.rawValue=_(o,c)}function lr(i,o){var c=i*(o.altKey?.1:1)*(o.shiftKey?10:1);return o.upKey?+c:o.downKey?-c:0}function Yr(i){return{altKey:i.altKey,downKey:i.keyCode===40,shiftKey:i.shiftKey,upKey:i.keyCode===38}}function un(i){return{altKey:i.altKey,downKey:i.keyCode===37,shiftKey:i.shiftKey,upKey:i.keyCode===39}}function jn(i){return i===38||i===40}function no(i){return jn(i)||i===37||i===39}var Xn=function(i){t(o,i);function o(c,_){var N=i.call(this,c,_)||this;return N.onInputKeyDown_=N.onInputKeyDown_.bind(N),N.baseStep_=_.baseStep,N.view.inputElement.addEventListener("keydown",N.onInputKeyDown_),N}return o.prototype.onInputKeyDown_=function(c){var _=lr(this.baseStep_,Yr(c));_!==0&&(this.value.rawValue+=_,this.view.update())},o}(ke),_r=d("clp"),oi=function(){function i(o,c){this.alphaViews_=null,this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.pickedColor=c.pickedColor,this.pickedColor.value.emitter.on("change",this.onValueChange_),this.foldable=c.foldable,this.foldable.emitter.on("change",this.onFoldableChange_),this.element=o.createElement("div"),this.element.classList.add(_r());var _=o.createElement("div");_.classList.add(_r("hsv"));var N=o.createElement("div");N.classList.add(_r("sv")),this.svPaletteView_=c.svPaletteView,N.appendChild(this.svPaletteView_.element),_.appendChild(N);var U=o.createElement("div");U.classList.add(_r("h")),this.hPaletteView_=c.hPaletteView,U.appendChild(this.hPaletteView_.element),_.appendChild(U),this.element.appendChild(_);var re=o.createElement("div");if(re.classList.add(_r("rgb")),this.compTextsView_=c.componentTextsView,re.appendChild(this.compTextsView_.element),this.element.appendChild(re),c.alphaViews){this.alphaViews_={palette:c.alphaViews.palette,text:c.alphaViews.text};var fe=o.createElement("div");fe.classList.add(_r("a"));var be=o.createElement("div");be.classList.add(_r("ap")),be.appendChild(this.alphaViews_.palette.element),fe.appendChild(be);var ye=o.createElement("div");ye.classList.add(_r("at")),ye.appendChild(this.alphaViews_.text.element),fe.appendChild(ye),this.element.appendChild(fe)}this.update()}return Object.defineProperty(i.prototype,"allFocusableElements",{get:function(){var o=n([this.svPaletteView_.element,this.hPaletteView_.element],this.compTextsView_.inputElements);return this.alphaViews_&&o.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),f(o)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"value",{get:function(){return this.pickedColor.value},enumerable:!1,configurable:!0}),i.prototype.update=function(){this.foldable.expanded?this.element.classList.add(_r(void 0,"expanded")):this.element.classList.remove(_r(void 0,"expanded"))},i.prototype.onValueChange_=function(){this.update()},i.prototype.onFoldableChange_=function(){this.update()},i}();function _a(i,o){var c=o.ownerDocument.defaultView,_=o.getBoundingClientRect();return[i.pageX-((c&&c.scrollX||0)+_.left),i.pageY-((c&&c.scrollY||0)+_.top)]}var Tn=function(){function i(o,c){this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.document=o,this.element=c,this.emitter=new v,this.pressed_=!1,de(this.document)?(c.addEventListener("touchstart",this.onTouchStart_),c.addEventListener("touchmove",this.onTouchMove_)):(c.addEventListener("mousedown",this.onMouseDown_),this.document.addEventListener("mousemove",this.onDocumentMouseMove_),this.document.addEventListener("mouseup",this.onDocumentMouseUp_))}return i.prototype.computePosition_=function(o,c){var _=this.element.getBoundingClientRect();return{px:o/_.width,py:c/_.height}},i.prototype.onMouseDown_=function(o){var c;o.preventDefault(),(c=o.currentTarget)===null||c===void 0||c.focus(),this.pressed_=!0,this.emitter.emit("down",{data:this.computePosition_.apply(this,_a(o,this.element)),sender:this})},i.prototype.onDocumentMouseMove_=function(o){!this.pressed_||this.emitter.emit("move",{data:this.computePosition_.apply(this,_a(o,this.element)),sender:this})},i.prototype.onDocumentMouseUp_=function(o){!this.pressed_||(this.pressed_=!1,this.emitter.emit("up",{data:this.computePosition_.apply(this,_a(o,this.element)),sender:this}))},i.prototype.onTouchStart_=function(o){o.preventDefault();var c=o.targetTouches[0],_=this.element.getBoundingClientRect();this.emitter.emit("down",{data:this.computePosition_(c.clientX-_.left,c.clientY-_.top),sender:this})},i.prototype.onTouchMove_=function(o){var c=o.targetTouches[0],_=this.element.getBoundingClientRect();this.emitter.emit("move",{data:this.computePosition_(c.clientX-_.left,c.clientY-_.top),sender:this})},i}();function Yn(i){return i?.1:1}var Rn=d("apl"),ii=function(){function i(o,c){this.onValueChange_=this.onValueChange_.bind(this),this.value=c.value,this.value.emitter.on("change",this.onValueChange_),this.element=o.createElement("div"),this.element.classList.add(Rn()),this.element.tabIndex=0;var _=o.createElement("div");_.classList.add(Rn("b")),this.element.appendChild(_);var N=o.createElement("div");N.classList.add(Rn("c")),_.appendChild(N),this.colorElem_=N;var U=o.createElement("div");U.classList.add(Rn("m")),this.element.appendChild(U),this.markerElem_=U;var re=o.createElement("div");re.classList.add(Rn("p")),this.markerElem_.appendChild(re),this.previewElem_=re,this.update()}return i.prototype.update=function(){var o=this.value.rawValue,c=o.getComponents("rgb"),_=new nt([c[0],c[1],c[2],0],"rgb"),N=new nt([c[0],c[1],c[2],255],"rgb"),U=["to right",Tr(_),Tr(N)];this.colorElem_.style.background="linear-gradient("+U.join(",")+")",this.previewElem_.style.backgroundColor=Tr(o);var re=gt(c[3],0,1,0,100);this.markerElem_.style.left=re+"%"},i.prototype.onValueChange_=function(){this.update()},i}(),si=function(){function i(o,c){this.onKeyDown_=this.onKeyDown_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=c.value,this.view=new ii(o,{value:this.value}),this.ptHandler_=new Tn(o,this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_)}return i.prototype.handlePointerEvent_=function(o){var c=o.px,_=this.value.rawValue,N=_.getComponents("hsv"),U=N[0],re=N[1],fe=N[2];this.value.rawValue=new nt([U,re,fe,c],"hsv"),this.view.update()},i.prototype.onPointerDown_=function(o){this.handlePointerEvent_(o.data)},i.prototype.onPointerMove_=function(o){this.handlePointerEvent_(o.data)},i.prototype.onPointerUp_=function(o){this.handlePointerEvent_(o.data)},i.prototype.onKeyDown_=function(o){var c=lr(Yn(!0),un(o)),_=this.value.rawValue,N=_.getComponents("hsv"),U=N[0],re=N[1],fe=N[2],be=N[3];this.value.rawValue=new nt([U,re,fe,be+c],"hsv")},i}(),ln=d("cctxts"),ci=_t(0);function ba(i){var o=i.createElement("select"),c=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return o.appendChild(c.reduce(function(_,N){var U=i.createElement("option");return U.textContent=N.text,U.value=N.value,_.appendChild(U),_},i.createDocumentFragment())),o}var nr=function(){function i(o,c){this.onValueChange_=this.onValueChange_.bind(this),this.element=o.createElement("div"),this.element.classList.add(ln());var _=o.createElement("div");_.classList.add(ln("m")),this.modeElem_=ba(o),this.modeElem_.classList.add(ln("ms")),_.appendChild(this.modeSelectElement);var N=o.createElement("div");N.classList.add(ln("mm")),_.appendChild(N),this.element.appendChild(_);var U=o.createElement("div");U.classList.add(ln("w")),this.element.appendChild(U);var re=[0,1,2].map(function(){var fe=o.createElement("input");return fe.classList.add(ln("i")),fe.type="text",fe});re.forEach(function(fe){U.appendChild(fe)}),this.inputElems_=[re[0],re[1],re[2]],this.pickedColor=c.pickedColor,this.pickedColor.emitter.on("change",this.onValueChange_),this.update()}return Object.defineProperty(i.prototype,"modeSelectElement",{get:function(){return this.modeElem_},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"inputElements",{get:function(){return this.inputElems_},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"value",{get:function(){return this.pickedColor.value},enumerable:!1,configurable:!0}),i.prototype.update=function(){var o=this;this.modeElem_.value=this.pickedColor.mode;var c=this.pickedColor.value.rawValue.getComponents(this.pickedColor.mode);c.forEach(function(_,N){var U=o.inputElems_[N];!U||(U.value=ci(_))})},i.prototype.onValueChange_=function(){this.update()},i}(),ao=function(){function i(o,c){var _=this;this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.parser_=c.parser,this.pickedColor=c.pickedColor,this.view=new nr(o,{pickedColor:this.pickedColor}),this.view.inputElements.forEach(function(N){N.addEventListener("change",_.onInputChange_),N.addEventListener("keydown",_.onInputKeyDown_)}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}return Object.defineProperty(i.prototype,"value",{get:function(){return this.pickedColor.value},enumerable:!1,configurable:!0}),i.prototype.findIndexOfInputElem_=function(o){for(var c=this.view.inputElements,_=0;_<c.length;_++)if(c[_]===o)return _;return null},i.prototype.updateComponent_=function(o,c){var _=this.pickedColor.mode,N=this.value.rawValue.getComponents(_),U=N.map(function(re,fe){return fe===o?c:re});this.value.rawValue=new nt(U,_),this.view.update()},i.prototype.onInputChange_=function(o){var c=f(o.currentTarget),_=this.parser_(c.value);if(!h(_)){var N=this.findIndexOfInputElem_(c);h(N)||this.updateComponent_(N,_)}},i.prototype.onInputKeyDown_=function(o){var c=this.findIndexOfInputElem_(o.currentTarget),_=lr(Yn(c===3),Yr(o));if(_!==0){var N=f(o.currentTarget),U=this.parser_(N.value);h(U)||h(c)||this.updateComponent_(c,U+_)}},i.prototype.onModeSelectChange_=function(o){var c=o.currentTarget;this.pickedColor.mode=c.value},i}(),Kn=d("hpl"),oo=function(){function i(o,c){this.onValueChange_=this.onValueChange_.bind(this),this.value=c.value,this.value.emitter.on("change",this.onValueChange_),this.element=o.createElement("div"),this.element.classList.add(Kn()),this.element.tabIndex=0;var _=o.createElement("div");_.classList.add(Kn("c")),this.element.appendChild(_);var N=o.createElement("div");N.classList.add(Kn("m")),this.element.appendChild(N),this.markerElem_=N,this.update()}return i.prototype.update=function(){var o=this.value.rawValue,c=o.getComponents("hsv")[0];this.markerElem_.style.backgroundColor=eo(new nt([c,100,100],"hsv"));var _=gt(c,0,360,0,100);this.markerElem_.style.left=_+"%"},i.prototype.onValueChange_=function(){this.update()},i}(),ui=function(){function i(o,c){this.onKeyDown_=this.onKeyDown_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=c.value,this.view=new oo(o,{value:this.value}),this.ptHandler_=new Tn(o,this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_)}return i.prototype.handlePointerEvent_=function(o){var c=gt(o.px,0,1,0,360),_=this.value.rawValue,N=_.getComponents("hsv"),U=N[1],re=N[2],fe=N[3];this.value.rawValue=new nt([c,U,re,fe],"hsv"),this.view.update()},i.prototype.onPointerDown_=function(o){this.handlePointerEvent_(o.data)},i.prototype.onPointerMove_=function(o){this.handlePointerEvent_(o.data)},i.prototype.onPointerUp_=function(o){this.handlePointerEvent_(o.data)},i.prototype.onKeyDown_=function(o){var c=lr(Yn(!1),un(o)),_=this.value.rawValue,N=_.getComponents("hsv"),U=N[0],re=N[1],fe=N[2],be=N[3];this.value.rawValue=new nt([U+c,re,fe,be],"hsv")},i}(),Nn=d("svp"),Kr=64,li=function(){function i(o,c){this.onValueChange_=this.onValueChange_.bind(this),this.value=c.value,this.value.emitter.on("change",this.onValueChange_),this.element=o.createElement("div"),this.element.classList.add(Nn()),this.element.tabIndex=0;var _=o.createElement("canvas");_.height=Kr,_.width=Kr,_.classList.add(Nn("c")),this.element.appendChild(_),this.canvasElement=_;var N=o.createElement("div");N.classList.add(Nn("m")),this.element.appendChild(N),this.markerElem_=N,this.update()}return i.prototype.update=function(){var o=me(this.canvasElement);if(!!o){for(var c=this.value.rawValue,_=c.getComponents("hsv"),N=this.canvasElement.width,U=this.canvasElement.height,re=o.getImageData(0,0,N,U),fe=re.data,be=0;be<U;be++)for(var ye=0;ye<N;ye++){var It=gt(ye,0,N,0,100),kt=gt(be,0,U,100,0),dt=Br(_[0],It,kt),St=(be*N+ye)*4;fe[St]=dt[0],fe[St+1]=dt[1],fe[St+2]=dt[2],fe[St+3]=255}o.putImageData(re,0,0);var gr=gt(_[1],0,100,0,100);this.markerElem_.style.left=gr+"%";var Ct=gt(_[2],0,100,100,0);this.markerElem_.style.top=Ct+"%"}},i.prototype.onValueChange_=function(){this.update()},i}(),gi=function(){function i(o,c){this.onKeyDown_=this.onKeyDown_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=c.value,this.view=new li(o,{value:this.value}),this.ptHandler_=new Tn(o,this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_)}return i.prototype.handlePointerEvent_=function(o){var c=gt(o.px,0,1,0,100),_=gt(o.py,0,1,100,0),N=this.value.rawValue.getComponents("hsv"),U=N[0],re=N[3];this.value.rawValue=new nt([U,c,_,re],"hsv"),this.view.update()},i.prototype.onPointerDown_=function(o){this.handlePointerEvent_(o.data)},i.prototype.onPointerMove_=function(o){this.handlePointerEvent_(o.data)},i.prototype.onPointerUp_=function(o){this.handlePointerEvent_(o.data)},i.prototype.onKeyDown_=function(o){no(o.keyCode)&&o.preventDefault();var c=this.value.rawValue.getComponents("hsv"),_=c[0],N=c[1],U=c[2],re=c[3],fe=Yn(!1);this.value.rawValue=new nt([_,N+lr(fe,un(o)),U+lr(fe,Yr(o)),re],"hsv")},i}(),In=function(){function i(o,c){var _=this;this.triggerElement=null,this.onFocusableElementBlur_=this.onFocusableElementBlur_.bind(this),this.onKeyDown_=this.onKeyDown_.bind(this),this.pickedColor=c.pickedColor,this.foldable=new ro,this.hPaletteIc_=new ui(o,{value:this.pickedColor.value}),this.svPaletteIc_=new gi(o,{value:this.pickedColor.value}),this.alphaIcs_=c.supportsAlpha?{palette:new si(o,{value:this.pickedColor.value}),text:new Xn(o,{formatter:_t(2),parser:Ye,baseStep:.1,value:new Re(0)})}:null,this.alphaIcs_&&ai({primary:this.pickedColor.value,secondary:this.alphaIcs_.text.value,forward:function(N){return N.rawValue.getComponents()[3]},backward:function(N,U){var re=N.rawValue.getComponents();return re[3]=U.rawValue,new nt(re,N.rawValue.mode)}}),this.compTextsIc_=new ao(o,{parser:Ye,pickedColor:this.pickedColor}),this.view=new oi(o,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,componentTextsView:this.compTextsIc_.view,foldable:this.foldable,hPaletteView:this.hPaletteIc_.view,pickedColor:this.pickedColor,supportsAlpha:c.supportsAlpha,svPaletteView:this.svPaletteIc_.view}),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.allFocusableElements.forEach(function(N){N.addEventListener("blur",_.onFocusableElementBlur_)})}return Object.defineProperty(i.prototype,"value",{get:function(){return this.pickedColor.value},enumerable:!1,configurable:!0}),i.prototype.onFocusableElementBlur_=function(o){var c=this.view.element,_=Xe(o);_&&c.contains(_)||_&&_===this.triggerElement&&!de(c.ownerDocument)||(this.foldable.expanded=!1)},i.prototype.onKeyDown_=function(o){o.keyCode===27&&(this.foldable.expanded=!1)},i}(),io=function(){function i(o,c){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.value=c.value,this.pickerIc_=new In(o,{pickedColor:new Qt(this.value),supportsAlpha:c.supportsAlpha}),this.view=new ni(o,{pickerView:this.pickerIc_.view,value:this.value}),this.view.buttonElement.addEventListener("blur",this.onButtonBlur_),this.view.buttonElement.addEventListener("click",this.onButtonClick_),this.pickerIc_.triggerElement=this.view.buttonElement}return i.prototype.onButtonBlur_=function(o){var c=this.view.element,_=f(o.relatedTarget);(!_||!c.contains(_))&&(this.pickerIc_.foldable.expanded=!1)},i.prototype.onButtonClick_=function(){this.pickerIc_.foldable.expanded=!this.pickerIc_.foldable.expanded,this.pickerIc_.foldable.expanded&&this.pickerIc_.view.allFocusableElements[0].focus()},i}(),Ea=function(){function i(o,c){this.value=c.value,this.swatchIc_=new io(o,{supportsAlpha:c.supportsAlpha,value:this.value}),this.textIc_=new ke(o,{formatter:c.formatter,parser:c.parser,value:this.value}),this.view=new yt(o,{swatchView:this.swatchIc_.view,textView:this.textIc_.view})}return i}();function fi(i){return nt.isColorObject(i)?nt.fromObject(i):nt.black()}function di(i){return yr(i.getComponents("rgb")).reduce(function(o,c){return o<<8|Math.floor(c)&255},0)}function hi(i){return i.getComponents("rgb").reduce(function(o,c,_){var N=Math.floor(_===3?c*255:c)&255;return o<<8|N},0)>>>0}function pi(i){return new nt([i>>16&255,i>>8&255,i&255],"rgb")}function vi(i){return new nt([i>>24&255,i>>16&255,i>>8&255,gt(i&255,0,255,0,1)],"rgb")}function wa(i){return typeof i!="number"?nt.black():pi(i)}function Ca(i){return typeof i!="number"?nt.black():vi(i)}function Aa(i){var o=to(i);return function(c,_){Ar(c,o(_))}}function so(i){var o=i?hi:di;return function(c,_){Ar(c,o(_))}}function co(i,o){var c=o.toRgbaObject();i.writeProperty("r",c.r),i.writeProperty("g",c.g),i.writeProperty("b",c.b),i.writeProperty("a",c.a)}function mi(i,o){var c=o.toRgbaObject();i.writeProperty("r",c.r),i.writeProperty("g",c.g),i.writeProperty("b",c.b)}function xi(i){return i?co:mi}function Ma(i){return"input"in i&&i.input==="color.rgba"}var gn={id:"input-color-number",binding:{accept:function(i,o){return typeof i!="number"||!("input"in o)||o.input!=="color"&&o.input!=="color.rgb"&&o.input!=="color.rgba"?null:i},reader:function(i){return Ma(i.params)?Ca:wa},writer:function(i){return so(Ma(i.params))},equals:nt.equals},controller:function(i){var o=Ma(i.params),c=o?qn:ya;return new Ea(i.document,{formatter:c,parser:Sn,supportsAlpha:o,value:i.binding.value})}};function yi(i){return nt.isRgbaColorObject(i)}var $n={id:"input-color-object",binding:{accept:function(i,o){return nt.isColorObject(i)?i:null},reader:function(i){return fi},writer:function(i){return xi(yi(i.initialValue))},equals:nt.equals},controller:function(i){var o=nt.isRgbaColorObject(i.initialValue),c=o?qn:ya;return new Ea(i.document,{formatter:c,parser:Sn,supportsAlpha:o,value:i.binding.value})}},_i={id:"input-color-string",binding:{accept:function(i,o){if(typeof i!="string"||"input"in o&&o.input==="string")return null;var c=Hn(i);return c?i:null},reader:function(i){return Jo},writer:function(i){var o=Hn(i.initialValue);if(!o)throw J.shouldNeverHappen();return Aa(o)},equals:nt.equals},controller:function(i){var o=Hn(i.initialValue);if(!o)throw J.shouldNeverHappen();var c=to(o);return new Ea(i.document,{formatter:c,parser:Sn,supportsAlpha:Qo(o),value:i.binding.value})}},Ur=function(){function i(o){this.maxValue=o.max,this.minValue=o.min}return i.prototype.constrain=function(o){var c=o;return h(this.minValue)||(c=Math.max(c,this.minValue)),h(this.maxValue)||(c=Math.min(c,this.maxValue)),c},i}(),Sa=d("sldtxt"),hr=function(){function i(o,c){this.element=o.createElement("div"),this.element.classList.add(Sa());var _=o.createElement("div");_.classList.add(Sa("s")),this.sliderView_=c.sliderView,_.appendChild(this.sliderView_.element),this.element.appendChild(_);var N=o.createElement("div");N.classList.add(Sa("t")),this.textView_=c.textView,N.appendChild(this.textView_.element),this.element.appendChild(N)}return Object.defineProperty(i.prototype,"value",{get:function(){return this.sliderView_.value},enumerable:!1,configurable:!0}),i.prototype.update=function(){this.sliderView_.update(),this.textView_.update()},i}(),br=d("sld"),Gr=function(){function i(o,c){this.onValueChange_=this.onValueChange_.bind(this),this.minValue_=c.minValue,this.maxValue_=c.maxValue,this.element=o.createElement("div"),this.element.classList.add(br());var _=o.createElement("div");_.classList.add(br("o")),_.tabIndex=0,this.element.appendChild(_),this.outerElement=_;var N=o.createElement("div");N.classList.add(br("i")),this.outerElement.appendChild(N),this.innerElement=N,c.value.emitter.on("change",this.onValueChange_),this.value=c.value,this.update()}return i.prototype.update=function(){var o=Pe(gt(this.value.rawValue,this.minValue_,this.maxValue_,0,100),0,100);this.innerElement.style.width=o+"%"},i.prototype.onValueChange_=function(){this.update()},i}();function bi(i){var o=i.constraint?Zt(i.constraint,Ur):null;return o?[o.minValue,o.maxValue]:[void 0,void 0]}function Ei(i){var o=bi(i),c=o[0],_=o[1];return[c??0,_??100]}var wi=function(){function i(o,c){this.onKeyDown_=this.onKeyDown_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=c.value,this.baseStep_=c.baseStep;var _=Ei(this.value),N=_[0],U=_[1];this.minValue_=N,this.maxValue_=U,this.view=new Gr(o,{maxValue:this.maxValue_,minValue:this.minValue_,value:this.value}),this.ptHandler_=new Tn(o,this.view.outerElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.outerElement.addEventListener("keydown",this.onKeyDown_)}return i.prototype.handlePointerEvent_=function(o){this.value.rawValue=gt(o.px,0,1,this.minValue_,this.maxValue_)},i.prototype.onPointerDown_=function(o){this.handlePointerEvent_(o.data)},i.prototype.onPointerMove_=function(o){this.handlePointerEvent_(o.data)},i.prototype.onPointerUp_=function(o){this.handlePointerEvent_(o.data)},i.prototype.onKeyDown_=function(o){this.value.rawValue+=lr(this.baseStep_,un(o))},i}(),Ci=function(){function i(o,c){this.value=c.value,this.sliderIc_=new wi(o,{baseStep:c.baseStep,value:c.value}),this.textIc_=new Xn(o,{baseStep:c.baseStep,formatter:c.formatter,parser:c.parser,value:c.value}),this.view=new hr(o,{sliderView:this.sliderIc_.view,textView:this.textIc_.view})}return i}();function Ai(i){var o=[];return"step"in i&&!h(i.step)&&o.push(new Mr({step:i.step})),("max"in i&&!h(i.max)||"min"in i&&!h(i.min))&&o.push(new Ur({max:i.max,min:i.min})),"options"in i&&i.options!==void 0&&o.push(new jt({options:Xt(i.options,Tt)})),new $t({constraints:o})}function Mi(i,o){var c,_=o.constraint;return _&&Zt(_,jt)?new F(i,{listItems:(c=m(_))!==null&&c!==void 0?c:[],stringifyValue:sn,value:o}):_&&Zt(_,Ur)?new Ci(i,{baseStep:A(_),formatter:_t(w(o.constraint,o.rawValue)),parser:Ye,value:o}):new Xn(i,{baseStep:A(_),formatter:_t(w(o.constraint,o.rawValue)),parser:Ye,value:o})}var Si={id:"input-number",binding:{accept:function(i){return typeof i=="number"?i:null},constraint:function(i){return Ai(i.params)},reader:function(i){return Tt},writer:function(i){return Ar}},controller:function(i){return Mi(i.document,i.binding.value)}},Rr=function(){function i(o,c){o===void 0&&(o=0),c===void 0&&(c=0),this.x=o,this.y=c}return i.prototype.getComponents=function(){return[this.x,this.y]},i.isObject=function(o){if(h(o))return!1;var c=o.x,_=o.y;return!(typeof c!="number"||typeof _!="number")},i.equals=function(o,c){return o.x===c.x&&o.y===c.y},i.prototype.toObject=function(){return{x:this.x,y:this.y}},i}(),Zn=function(){function i(o){this.x=o.x,this.y=o.y}return i.prototype.constrain=function(o){return new Rr(this.x?this.x.constrain(o.x):o.x,this.y?this.y.constrain(o.y):o.y)},i}(),$r=d("p2dpadtxt"),Ti=function(){function i(o,c){this.element=o.createElement("div"),this.element.classList.add($r());var _=o.createElement("div");_.classList.add($r("w")),this.element.appendChild(_);var N=o.createElement("button");N.classList.add($r("b")),N.appendChild(Ie(o,"p2dpad")),_.appendChild(N),this.padButtonElem_=N;var U=o.createElement("div");U.classList.add($r("p")),_.appendChild(U),this.padView_=c.padView,U.appendChild(this.padView_.element);var re=o.createElement("div");re.classList.add($r("t")),this.textView_=c.textView,re.appendChild(this.textView_.element),this.element.appendChild(re)}return Object.defineProperty(i.prototype,"value",{get:function(){return this.textView_.value},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"padButtonElement",{get:function(){return this.padButtonElem_},enumerable:!1,configurable:!0}),i.prototype.update=function(){this.padView_.update(),this.textView_.update()},i}(),Nr=d("p2dpad"),Ri=function(){function i(o,c){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.foldable=c.foldable,this.foldable.emitter.on("change",this.onFoldableChange_),this.invertsY_=c.invertsY,this.maxValue_=c.maxValue,this.element=o.createElement("div"),this.element.classList.add(Nr());var _=o.createElement("div");_.tabIndex=0,_.classList.add(Nr("p")),this.element.appendChild(_),this.padElement=_;var N=o.createElementNS(ge,"svg");N.classList.add(Nr("g")),this.padElement.appendChild(N),this.svgElem_=N;var U=o.createElementNS(ge,"line");U.classList.add(Nr("ax")),U.setAttributeNS(null,"x1","0"),U.setAttributeNS(null,"y1","50%"),U.setAttributeNS(null,"x2","100%"),U.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(U);var re=o.createElementNS(ge,"line");re.classList.add(Nr("ax")),re.setAttributeNS(null,"x1","50%"),re.setAttributeNS(null,"y1","0"),re.setAttributeNS(null,"x2","50%"),re.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(re);var fe=o.createElementNS(ge,"line");fe.classList.add(Nr("l")),fe.setAttributeNS(null,"x1","50%"),fe.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(fe),this.lineElem_=fe;var be=o.createElementNS(ge,"circle");be.classList.add(Nr("m")),be.setAttributeNS(null,"r","2px"),this.svgElem_.appendChild(be),this.markerElem_=be,c.value.emitter.on("change",this.onValueChange_),this.value=c.value,this.update()}return Object.defineProperty(i.prototype,"allFocusableElements",{get:function(){return[this.padElement]},enumerable:!1,configurable:!0}),i.prototype.update=function(){this.foldable.expanded?this.element.classList.add(Nr(void 0,"expanded")):this.element.classList.remove(Nr(void 0,"expanded"));var o=this.value.rawValue.getComponents(),c=o[0],_=o[1],N=this.maxValue_,U=gt(c,-N,+N,0,100),re=gt(_,-N,+N,0,100),fe=this.invertsY_?100-re:re;this.lineElem_.setAttributeNS(null,"x2",U+"%"),this.lineElem_.setAttributeNS(null,"y2",fe+"%"),this.markerElem_.setAttributeNS(null,"cx",U+"%"),this.markerElem_.setAttributeNS(null,"cy",fe+"%")},i.prototype.onValueChange_=function(){this.update()},i.prototype.onFoldableChange_=function(){this.update()},i}(),Ni=function(){function i(o,c){var _=this;this.triggerElement=null,this.onFocusableElementBlur_=this.onFocusableElementBlur_.bind(this),this.onKeyDown_=this.onKeyDown_.bind(this),this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=c.value,this.foldable=new ro,this.baseSteps_=c.baseSteps,this.maxValue_=c.maxValue,this.invertsY_=c.invertsY,this.view=new Ri(o,{foldable:this.foldable,invertsY:this.invertsY_,maxValue:this.maxValue_,value:this.value}),this.ptHandler_=new Tn(o,this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.allFocusableElements.forEach(function(N){N.addEventListener("blur",_.onFocusableElementBlur_)})}return i.prototype.handlePointerEvent_=function(o){var c=this.maxValue_,_=gt(o.px,0,1,-c,+c),N=gt(this.invertsY_?1-o.py:o.py,0,1,-c,+c);this.value.rawValue=new Rr(_,N),this.view.update()},i.prototype.onPointerDown_=function(o){this.handlePointerEvent_(o.data)},i.prototype.onPointerMove_=function(o){this.handlePointerEvent_(o.data)},i.prototype.onPointerUp_=function(o){this.handlePointerEvent_(o.data)},i.prototype.onPadKeyDown_=function(o){no(o.keyCode)&&o.preventDefault(),this.value.rawValue=new Rr(this.value.rawValue.x+lr(this.baseSteps_[0],un(o)),this.value.rawValue.y+lr(this.baseSteps_[1],Yr(o))*(this.invertsY_?1:-1))},i.prototype.onFocusableElementBlur_=function(o){var c=this.view.element,_=Xe(o);_&&c.contains(_)||_&&_===this.triggerElement&&!de(c.ownerDocument)||(this.foldable.expanded=!1)},i.prototype.onKeyDown_=function(o){o.keyCode===27&&(this.foldable.expanded=!1)},i}(),Ta=d("p2dtxt"),Ii=function(){function i(o,c){var _=this;this.onValueChange_=this.onValueChange_.bind(this),this.formatters_=c.formatters,this.element=o.createElement("div"),this.element.classList.add(Ta());var N=[0,1].map(function(){var U=o.createElement("input");return U.classList.add(Ta("i")),U.type="text",U});[0,1].forEach(function(U,re){var fe=o.createElement("div");fe.classList.add(Ta("w")),fe.appendChild(N[re]),_.element.appendChild(fe)}),this.inputElems_=[N[0],N[1]],c.value.emitter.on("change",this.onValueChange_),this.value=c.value,this.update()}return Object.defineProperty(i.prototype,"inputElements",{get:function(){return this.inputElems_},enumerable:!1,configurable:!0}),i.prototype.update=function(){var o=this,c=this.value.rawValue.getComponents();c.forEach(function(_,N){var U=o.inputElems_[N];U.value=o.formatters_[N](_)})},i.prototype.onValueChange_=function(){this.update()},i}(),Li=function(){function i(o,c){var _=this;this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.parser_=c.parser,this.value=c.value,this.baseSteps_=[c.axes[0].baseStep,c.axes[1].baseStep],this.view=new Ii(o,{formatters:[c.axes[0].formatter,c.axes[1].formatter],value:this.value}),this.view.inputElements.forEach(function(N){N.addEventListener("change",_.onInputChange_),N.addEventListener("keydown",_.onInputKeyDown_)})}return i.prototype.findIndexOfInputElem_=function(o){for(var c=this.view.inputElements,_=0;_<c.length;_++)if(c[_]===o)return _;return null},i.prototype.updateComponent_=function(o,c){var _=this.value.rawValue.getComponents(),N=_.map(function(U,re){return re===o?c:U});this.value.rawValue=new Rr(N[0],N[1]),this.view.update()},i.prototype.onInputChange_=function(o){var c=f(o.currentTarget),_=this.parser_(c.value);if(!h(_)){var N=this.findIndexOfInputElem_(c);h(N)||this.updateComponent_(N,_)}},i.prototype.onInputKeyDown_=function(o){var c=f(o.currentTarget),_=this.parser_(c.value);if(!h(_)){var N=this.findIndexOfInputElem_(c);if(!h(N)){var U=lr(this.baseSteps_[N],Yr(o));U!==0&&this.updateComponent_(N,_+U)}}},i}(),Pi=function(){function i(o,c){this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=c.value,this.padIc_=new Ni(o,{baseSteps:[c.axes[0].baseStep,c.axes[1].baseStep],invertsY:c.invertsY,maxValue:c.maxValue,value:this.value}),this.textIc_=new Li(o,{axes:c.axes,parser:c.parser,value:this.value}),this.view=new Ti(o,{padView:this.padIc_.view,textView:this.textIc_.view}),this.view.padButtonElement.addEventListener("blur",this.onPadButtonBlur_),this.view.padButtonElement.addEventListener("click",this.onPadButtonClick_),this.padIc_.triggerElement=this.view.padButtonElement}return i.prototype.onPadButtonBlur_=function(o){var c=this.view.element,_=f(o.relatedTarget);(!_||!c.contains(_))&&(this.padIc_.foldable.expanded=!1)},i.prototype.onPadButtonClick_=function(){this.padIc_.foldable.expanded=!this.padIc_.foldable.expanded,this.padIc_.foldable.expanded&&this.padIc_.view.allFocusableElements[0].focus()},i}();function Di(i){return Rr.isObject(i)?new Rr(i.x,i.y):new Rr}function ki(i,o){i.writeProperty("x",o.x),i.writeProperty("y",o.y)}function Ra(i){if(!!i){var o=[];return h(i.step)||o.push(new Mr({step:i.step})),(!h(i.max)||!h(i.min))&&o.push(new Ur({max:i.max,min:i.min})),new $t({constraints:o})}}function Oi(i){return new Zn({x:Ra("x"in i?i.x:void 0),y:Ra("y"in i?i.y:void 0)})}function uo(i,o){var c=i&&Zt(i,Ur);if(c)return Math.max(Math.abs(c.minValue||0),Math.abs(c.maxValue||0));var _=A(i);return Math.max(Math.abs(_)*10,Math.abs(o)*10)}function Fi(i,o){var c=o instanceof Zn?o.x:void 0,_=o instanceof Zn?o.y:void 0,N=uo(c,i.x),U=uo(_,i.y);return Math.max(N,U)}function lo(i,o,c){var _=o.constraint;if(!(_ instanceof Zn))throw J.shouldNeverHappen();return new Pi(i,{axes:[{baseStep:A(_.x),formatter:_t(w(_.x,o.rawValue.x))},{baseStep:A(_.y),formatter:_t(w(_.y,o.rawValue.y))}],invertsY:c,maxValue:Fi(o.rawValue,o.constraint),parser:Ye,value:o})}function go(i){if(!("y"in i))return!1;var o=i.y;return o&&"inverted"in o?!!o.inverted:!1}var fo={id:"input-point2d",binding:{accept:function(i,o){return Rr.isObject(i)?i:null},reader:function(i){return Di},writer:function(i){return ki},constraint:function(i){return Oi(i.params)},equals:Rr.equals},controller:function(i){return lo(i.document,i.binding.value,go(i.params))}},Zr=function(){function i(o,c,_){o===void 0&&(o=0),c===void 0&&(c=0),_===void 0&&(_=0),this.x=o,this.y=c,this.z=_}return i.prototype.getComponents=function(){return[this.x,this.y,this.z]},i.isObject=function(o){if(h(o))return!1;var c=o.x,_=o.y,N=o.z;return!(typeof c!="number"||typeof _!="number"||typeof N!="number")},i.equals=function(o,c){return o.x===c.x&&o.y===c.y&&o.z===c.z},i.prototype.toObject=function(){return{x:this.x,y:this.y,z:this.z}},i}(),Ln=function(){function i(o){this.x=o.x,this.y=o.y,this.z=o.z}return i.prototype.constrain=function(o){return new Zr(this.x?this.x.constrain(o.x):o.x,this.y?this.y.constrain(o.y):o.y,this.z?this.z.constrain(o.z):o.z)},i}(),Na=d("p3dtxt"),ho=function(){function i(o,c){var _=this;this.onValueChange_=this.onValueChange_.bind(this),this.formatters_=c.formatters,this.element=o.createElement("div"),this.element.classList.add(Na());var N=[0,1,2].map(function(){var U=o.createElement("input");return U.classList.add(Na("i")),U.type="text",U});[0,1,2].forEach(function(U,re){var fe=o.createElement("div");fe.classList.add(Na("w")),fe.appendChild(N[re]),_.element.appendChild(fe)}),this.inputElems_=[N[0],N[1],N[2]],c.value.emitter.on("change",this.onValueChange_),this.value=c.value,this.update()}return Object.defineProperty(i.prototype,"inputElements",{get:function(){return this.inputElems_},enumerable:!1,configurable:!0}),i.prototype.update=function(){var o=this,c=this.value.rawValue.getComponents();c.forEach(function(_,N){var U=o.inputElems_[N];U.value=o.formatters_[N](_)})},i.prototype.onValueChange_=function(){this.update()},i}(),po=function(){function i(o,c){var _=this;this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.parser_=c.parser,this.value=c.value;var N=c.axes;this.baseSteps_=[N[0].baseStep,N[1].baseStep,N[2].baseStep],this.view=new ho(o,{formatters:[N[0].formatter,N[1].formatter,N[2].formatter],value:this.value}),this.view.inputElements.forEach(function(U){U.addEventListener("change",_.onInputChange_),U.addEventListener("keydown",_.onInputKeyDown_)})}return i.prototype.findIndexOfInputElem_=function(o){for(var c=this.view.inputElements,_=0;_<c.length;_++)if(c[_]===o)return _;return null},i.prototype.updateComponent_=function(o,c){var _=this.value.rawValue.getComponents(),N=_.map(function(U,re){return re===o?c:U});this.value.rawValue=new Zr(N[0],N[1],N[2]),this.view.update()},i.prototype.onInputChange_=function(o){var c=f(o.currentTarget),_=this.parser_(c.value);if(!h(_)){var N=this.findIndexOfInputElem_(c);h(N)||this.updateComponent_(N,_)}},i.prototype.onInputKeyDown_=function(o){var c=f(o.currentTarget),_=this.parser_(c.value);if(!h(_)){var N=this.findIndexOfInputElem_(c);if(!h(N)){var U=lr(this.baseSteps_[N],Yr(o));U!==0&&this.updateComponent_(N,_+U)}}},i}();function Ia(i){return Zr.isObject(i)?new Zr(i.x,i.y,i.z):new Zr}function Bi(i,o){i.writeProperty("x",o.x),i.writeProperty("y",o.y),i.writeProperty("z",o.z)}function La(i){if(!!i){var o=[];return h(i.step)||o.push(new Mr({step:i.step})),(!h(i.max)||!h(i.min))&&o.push(new Ur({max:i.max,min:i.min})),new $t({constraints:o})}}function Ui(i){return new Ln({x:La("x"in i?i.x:void 0),y:La("y"in i?i.y:void 0),z:La("z"in i?i.z:void 0)})}function Pa(i,o){return{baseStep:A(o),formatter:_t(w(o,i))}}function Qn(i,o){var c=o.constraint;if(!(c instanceof Ln))throw J.shouldNeverHappen();return new po(i,{axes:[Pa(o.rawValue.x,c.x),Pa(o.rawValue.y,c.y),Pa(o.rawValue.z,c.z)],parser:Ye,value:o})}var Da={id:"input-point3d",binding:{accept:function(i,o){return Zr.isObject(i)?i:null},reader:function(i){return Ia},writer:function(i){return Bi},constraint:function(i){return Ui(i.params)},equals:Zr.equals},controller:function(i){return Qn(i.document,i.binding.value)}};function Jn(i){return String(i)}function ea(i){return i}function Gi(i){var o=[];return"options"in i&&i.options!==void 0&&o.push(new jt({options:Xt(i.options,Jn)})),new $t({constraints:o})}function Vi(i,o){var c,_=o.constraint;return _&&Zt(_,jt)?new F(i,{listItems:(c=m(_))!==null&&c!==void 0?c:[],stringifyValue:function(N){return N},value:o}):new ke(i,{formatter:ea,parser:function(N){return N},value:o})}var x={id:"input-string",binding:{accept:function(i,o){return typeof i=="string"?i:null},constraint:function(i){return Gi(i.params)},reader:function(i){return Jn},writer:function(i){return Ar}},controller:function(i){return Vi(i.document,i.binding.value)}},E=d("mll"),R=function(){function i(o,c){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=c.formatter,this.element=o.createElement("div"),this.element.classList.add(E());var _=o.createElement("textarea");_.classList.add(E("i")),_.style.height="calc(var(--unit-size) * "+c.lineCount+")",_.readOnly=!0,this.element.appendChild(_),this.textareaElem_=_,c.value.emitter.on("change",this.onValueUpdate_),this.value=c.value,this.update()}return i.prototype.update=function(){var o=this,c=this.textareaElem_,_=c.scrollTop===c.scrollHeight-c.clientHeight;c.textContent=this.value.rawValue.map(function(N){return N!==void 0?o.formatter_(N):""}).join(`
`),_&&(c.scrollTop=c.scrollHeight)},i.prototype.onValueUpdate_=function(){this.update()},i}(),k=function(){function i(o,c){this.value=c.value,this.view=new R(o,{formatter:c.formatter,lineCount:c.lineCount,value:this.value})}return i}(),j=d("sgl"),Y=function(){function i(o,c){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=c.formatter,this.element=o.createElement("div"),this.element.classList.add(j());var _=o.createElement("input");_.classList.add(j("i")),_.readOnly=!0,_.type="text",this.element.appendChild(_),this.inputElem_=_,c.value.emitter.on("change",this.onValueUpdate_),this.value=c.value,this.update()}return i.prototype.update=function(){var o=this.value.rawValue,c=o[o.length-1];this.inputElem_.value=c!==void 0?this.formatter_(c):""},i.prototype.onValueUpdate_=function(){this.update()},i}(),z=function(){function i(o,c){this.value=c.value,this.view=new Y(o,{formatter:c.formatter,value:this.value})}return i}(),ee={id:"monitor-bool",binding:{accept:function(i,o){return typeof i=="boolean"?i:null},reader:function(i){return Xr}},controller:function(i){var o;return i.binding.value.rawValue.length===1?new z(i.document,{formatter:on,value:i.binding.value}):new k(i.document,{formatter:on,lineCount:(o=i.params.lineCount)!==null&&o!==void 0?o:De.monitor.defaultLineCount,value:i.binding.value})}},te=function(){function i(){this.emitter=new v,this.index_=-1}return Object.defineProperty(i.prototype,"index",{get:function(){return this.index_},set:function(o){var c=this.index_!==o;c&&(this.index_=o,this.emitter.emit("change",{index:o,sender:this}))},enumerable:!1,configurable:!0}),i}(),le=d("grl"),pe=function(){function i(o,c){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=o.createElement("div"),this.element.classList.add(le()),this.formatter_=c.formatter,this.minValue_=c.minValue,this.maxValue_=c.maxValue,this.cursor_=c.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);var _=o.createElementNS(ge,"svg");_.classList.add(le("g")),_.style.height="calc(var(--unit-size) * "+c.lineCount+")",this.element.appendChild(_),this.svgElem_=_;var N=o.createElementNS(ge,"polyline");this.svgElem_.appendChild(N),this.lineElem_=N;var U=o.createElement("div");U.classList.add(le("t")),this.element.appendChild(U),this.tooltipElem_=U,c.value.emitter.on("change",this.onValueUpdate_),this.value=c.value,this.update()}return Object.defineProperty(i.prototype,"graphElement",{get:function(){return this.svgElem_},enumerable:!1,configurable:!0}),i.prototype.update=function(){var o=this.svgElem_.getBoundingClientRect(),c=this.value.rawValue.length-1,_=this.minValue_,N=this.maxValue_,U=[];this.value.rawValue.forEach(function(It,kt){if(It!==void 0){var dt=gt(kt,0,c,0,o.width),St=gt(It,_,N,o.height,0);U.push([dt,St].join(","))}}),this.lineElem_.setAttributeNS(null,"points",U.join(" "));var re=this.tooltipElem_,fe=this.value.rawValue[this.cursor_.index];if(fe===void 0){re.classList.remove(le("t","valid"));return}re.classList.add(le("t","valid"));var be=gt(this.cursor_.index,0,c,0,o.width),ye=gt(fe,_,N,o.height,0);re.style.left=be+"px",re.style.top=ye+"px",re.textContent=""+this.formatter_(fe)},i.prototype.onValueUpdate_=function(){this.update()},i.prototype.onCursorChange_=function(){this.update()},i}(),he=function(){function i(o,c){this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.value=c.value,this.cursor_=new te,this.view=new pe(o,{cursor:this.cursor_,formatter:c.formatter,lineCount:c.lineCount,maxValue:c.maxValue,minValue:c.minValue,value:this.value}),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_),this.view.element.addEventListener("mousemove",this.onGraphMouseMove_)}return i.prototype.onGraphMouseLeave_=function(){this.cursor_.index=-1},i.prototype.onGraphMouseMove_=function(o){var c=this.view.graphElement.getBoundingClientRect(),_=o.offsetX;this.cursor_.index=Math.floor(gt(_,0,c.width,0,this.value.rawValue.length))},i}();function Ae(){return _t(2)}function Ce(i,o,c){var _;return o.value.rawValue.length===1?new z(i,{formatter:Ae(),value:o.value}):new k(i,{formatter:Ae(),lineCount:(_=c.lineCount)!==null&&_!==void 0?_:De.monitor.defaultLineCount,value:o.value})}function Oe(i){var o,c,_,N=i.document,U=i.binding,re=i.params;return new he(N,{formatter:Ae(),lineCount:(o=re.lineCount)!==null&&o!==void 0?o:De.monitor.defaultLineCount,maxValue:(c="max"in re?re.max:null)!==null&&c!==void 0?c:100,minValue:(_="min"in re?re.min:null)!==null&&_!==void 0?_:0,value:U.value})}function Ke(i){return"view"in i&&i.view==="graph"}var qe={id:"monitor-number",binding:{accept:function(i,o){return typeof i=="number"?i:null},defaultBufferSize:function(i){return Ke(i)?64:1},reader:function(i){return Tt}},controller:function(i){return Ke(i.params)?Oe({document:i.document,binding:i.binding,params:i.params}):Ce(i.document,i.binding,i.params)}},at={id:"monitor-string",binding:{accept:function(i,o){return typeof i=="string"?i:null},reader:function(i){return Jn}},controller:function(i){var o,c=i.binding.value,_=c.rawValue.length>1||"multiline"in i.params&&i.params.multiline;return _?new k(i.document,{formatter:ea,lineCount:(o=i.params.lineCount)!==null&&o!==void 0?o:De.monitor.defaultLineCount,value:c}):new z(i.document,{formatter:ea,value:c})}};function ft(i){var o=i.createElement("div");return o.classList.add(d("dfw")()),i.body&&i.body.appendChild(o),o}function Bt(i,o,c){if(!i.querySelector("style[data-tp-style="+o+"]")){var _=i.createElement("style");_.dataset.tpStyle=o,_.textContent=c,i.head.appendChild(_)}}function Ht(i){Bt(i,"default",".tp-btnv_b,.tp-lstv_s,.tp-p2dpadtxtv_b,.tp-fldv_t,.tp-rotv_t,.tp-cctxtsv_i,.tp-cswv_sw,.tp-p2dpadv_p,.tp-p2dtxtv_i,.tp-p3dtxtv_i,.tp-txtv_i,.tp-grlv_g,.tp-sglv_i,.tp-mllv_i,.tp-ckbv_i,.tp-cctxtsv_ms{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-btnv_b,.tp-lstv_s,.tp-p2dpadtxtv_b{background-color:var(--button-background-color);border-radius:2px;color:var(--button-foreground-color);cursor:pointer;display:block;font-weight:bold;height:var(--unit-size);line-height:var(--unit-size);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-btnv_b:hover,.tp-lstv_s:hover,.tp-p2dpadtxtv_b:hover{background-color:var(--button-background-color-hover)}.tp-btnv_b:focus,.tp-lstv_s:focus,.tp-p2dpadtxtv_b:focus{background-color:var(--button-background-color-focus)}.tp-btnv_b:active,.tp-lstv_s:active,.tp-p2dpadtxtv_b:active{background-color:var(--button-background-color-active)}.tp-fldv_t,.tp-rotv_t{background-color:var(--folder-background-color);color:var(--folder-foreground-color);cursor:pointer;display:block;height:calc(var(--unit-size) + 4px);line-height:calc(var(--unit-size) + 4px);overflow:hidden;padding-left:28px;position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-fldv_t:hover,.tp-rotv_t:hover{background-color:var(--folder-background-color-hover)}.tp-fldv_t:focus,.tp-rotv_t:focus{background-color:var(--folder-background-color-focus)}.tp-fldv_t:active,.tp-rotv_t:active{background-color:var(--folder-background-color-active)}.tp-fldv_m,.tp-rotv_m{background:linear-gradient(to left, var(--folder-foreground-color), var(--folder-foreground-color) 2px, transparent 2px, transparent 4px, var(--folder-foreground-color) 4px);border-radius:2px;bottom:0;content:'';display:block;height:6px;left:13px;margin:auto;opacity:0.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-fldv.tp-fldv-expanded>.tp-fldv_t>.tp-fldv_m,.tp-rotv.tp-rotv-expanded .tp-rotv_m{transform:none}.tp-fldv_c,.tp-rotv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-fldv_c>.tp-fldv.tp-v-first,.tp-rotv_c>.tp-fldv.tp-v-first{margin-top:-4px}.tp-fldv_c>.tp-fldv.tp-v-last,.tp-rotv_c>.tp-fldv.tp-v-last{margin-bottom:-4px}.tp-fldv_c>*:not(.tp-v-first),.tp-rotv_c>*:not(.tp-v-first){margin-top:4px}.tp-fldv_c>.tp-fldv:not(.tp-v-hidden)+.tp-fldv,.tp-rotv_c>.tp-fldv:not(.tp-v-hidden)+.tp-fldv{margin-top:0}.tp-fldv_c>.tp-sptv:not(.tp-v-hidden)+.tp-sptv,.tp-rotv_c>.tp-sptv:not(.tp-v-hidden)+.tp-sptv{margin-top:0}.tp-fldv.tp-fldv-expanded>.tp-fldv_c,.tp-rotv.tp-rotv-expanded .tp-rotv_c{opacity:1;padding-bottom:4px;padding-top:4px;transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-cctxtsv_i,.tp-cswv_sw,.tp-p2dpadv_p,.tp-p2dtxtv_i,.tp-p3dtxtv_i,.tp-txtv_i{background-color:var(--input-background-color);border-radius:2px;box-sizing:border-box;color:var(--input-foreground-color);font-family:inherit;height:var(--unit-size);line-height:var(--unit-size);min-width:0;width:100%}.tp-cctxtsv_i:hover,.tp-cswv_sw:hover,.tp-p2dpadv_p:hover,.tp-p2dtxtv_i:hover,.tp-p3dtxtv_i:hover,.tp-txtv_i:hover{background-color:var(--input-background-color-hover)}.tp-cctxtsv_i:focus,.tp-cswv_sw:focus,.tp-p2dpadv_p:focus,.tp-p2dtxtv_i:focus,.tp-p3dtxtv_i:focus,.tp-txtv_i:focus{background-color:var(--input-background-color-focus)}.tp-cctxtsv_i:active,.tp-cswv_sw:active,.tp-p2dpadv_p:active,.tp-p2dtxtv_i:active,.tp-p3dtxtv_i:active,.tp-txtv_i:active{background-color:var(--input-background-color-active)}.tp-grlv_g,.tp-sglv_i,.tp-mllv_i{background-color:var(--monitor-background-color);border-radius:2px;box-sizing:border-box;color:var(--monitor-foreground-color);height:var(--unit-size);width:100%}.tp-btnv{padding:0 4px}.tp-btnv_b{width:100%}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_m{background-color:var(--input-background-color);border-radius:2px;cursor:pointer;display:block;height:var(--unit-size);position:relative;width:var(--unit-size)}.tp-ckbv_m::before{background-color:var(--input-foreground-color);border-radius:2px;bottom:4px;content:'';display:block;left:4px;opacity:0;position:absolute;right:4px;top:4px}.tp-ckbv_i:hover+.tp-ckbv_m{background-color:var(--input-background-color-hover)}.tp-ckbv_i:focus+.tp-ckbv_m{background-color:var(--input-background-color-focus)}.tp-ckbv_i:active+.tp-ckbv_m{background-color:var(--input-background-color-active)}.tp-ckbv_i:checked+.tp-ckbv_m::before{opacity:1}.tp-cctxtsv{display:flex;width:100%}.tp-cctxtsv_m{margin-right:4px;position:relative}.tp-cctxtsv_ms{border-radius:2px;color:var(--label-foreground-color);cursor:pointer;height:var(--unit-size);line-height:var(--unit-size);padding:0 18px 0 4px}.tp-cctxtsv_ms:hover{background-color:var(--input-background-color-hover)}.tp-cctxtsv_ms:focus{background-color:var(--input-background-color-focus)}.tp-cctxtsv_ms:active{background-color:var(--input-background-color-active)}.tp-cctxtsv_mm{border-color:var(--label-foreground-color) transparent transparent;border-style:solid;border-width:3px;box-sizing:border-box;height:6px;pointer-events:none;width:6px;bottom:0;margin:auto;position:absolute;right:6px;top:3px}.tp-cctxtsv_w{display:flex;flex:1}.tp-cctxtsv_i{border-radius:0;flex:1;padding:0 4px}.tp-cctxtsv_i:first-child{border-bottom-left-radius:2px;border-top-left-radius:2px}.tp-cctxtsv_i:last-child{border-bottom-right-radius:2px;border-top-right-radius:2px}.tp-cctxtsv_i+.tp-cctxtsv_i{margin-left:2px}.tp-clpv{background-color:var(--base-background-color);border-radius:6px;box-shadow:0 2px 4px var(--base-shadow-color);display:none;padding:4px;position:relative;visibility:hidden;z-index:1000}.tp-clpv.tp-clpv-expanded{display:block;visibility:visible}.tp-clpv_h,.tp-clpv_ap{margin-left:6px;margin-right:6px}.tp-clpv_h{margin-top:4px}.tp-clpv_rgb{display:flex;margin-top:4px;width:100%}.tp-clpv_a{display:flex;margin-top:4px;padding-top:8px;position:relative}.tp-clpv_a:before{background-color:var(--separator-color);content:'';height:4px;left:-4px;position:absolute;right:-4px;top:0}.tp-clpv_ap{align-items:center;display:flex;flex:3}.tp-clpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:2px;outline:none;overflow:hidden;position:relative}.tp-svpv_c{cursor:crosshair;display:block;height:80px;width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,0.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0,0,0,0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--unit-size);outline:none;position:relative}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:2px;border:rgba(255,255,255,0.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,0.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--unit-size);outline:none;position:relative;width:100%}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:2px;box-shadow:0 0 2px rgba(0,0,0,0.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:2px;border:rgba(255,255,255,0.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-cswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:2px}.tp-cswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;cursor:pointer;display:block;height:var(--unit-size);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--unit-size)}.tp-cswv_b:focus::after{border:rgba(255,255,255,0.75) solid 2px;border-radius:2px;bottom:0;content:'';display:block;left:0;position:absolute;right:0;top:0}.tp-cswv_p{left:-4px;position:absolute;right:-4px;top:var(--unit-size)}.tp-cswtxtv{display:flex;position:relative}.tp-cswtxtv_s{flex-grow:0;flex-shrink:0;width:var(--unit-size)}.tp-cswtxtv_t{flex:1;margin-left:4px}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv.tp-fldv-expanded .tp-fldv_t{transition:border-radius 0s}.tp-fldv_c{border-left:var(--folder-background-color) solid 4px}.tp-fldv_t:hover+.tp-fldv_c{border-left-color:var(--folder-background-color-hover)}.tp-fldv_t:focus+.tp-fldv_c{border-left-color:var(--folder-background-color-focus)}.tp-fldv_t:active+.tp-fldv_c{border-left-color:var(--folder-background-color-active)}.tp-fldv_c>.tp-fldv{margin-left:4px}.tp-fldv_c>.tp-fldv>.tp-fldv_t{border-top-left-radius:2px;border-bottom-left-radius:2px}.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_t{border-bottom-left-radius:0}.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:2px}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--unit-size) * 3)}.tp-grlv_g polyline{fill:none;stroke:var(--monitor-foreground-color);stroke-linejoin:round}.tp-grlv_t{color:var(--monitor-foreground-color);font-size:0.9em;left:0;pointer-events:none;position:absolute;text-indent:4px;top:0;visibility:hidden}.tp-grlv_t.tp-grlv_t-valid{visibility:visible}.tp-grlv_t::before{background-color:var(--monitor-foreground-color);border-radius:100%;content:'';display:block;height:4px;left:-2px;position:absolute;top:-2px;width:4px}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:4px;padding-right:4px}.tp-lblv_l{color:var(--label-foreground-color);flex:1;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lstv{position:relative}.tp-lstv_s{padding:0 18px 0 4px;width:100%}.tp-lstv_m{border-color:var(--button-foreground-color) transparent transparent;border-style:solid;border-width:3px;box-sizing:border-box;height:6px;pointer-events:none;width:6px;bottom:0;margin:auto;position:absolute;right:6px;top:3px}.tp-sglv_i{padding:0 4px}.tp-mllv_i{display:block;height:calc(var(--unit-size) * 3);line-height:var(--unit-size);padding:0 4px;resize:none;white-space:pre}.tp-p2dpadv{background-color:var(--base-background-color);border-radius:6px;box-shadow:0 2px 4px var(--base-shadow-color);display:none;padding:4px 4px 4px calc(4px * 2 + var(--unit-size));position:relative;visibility:hidden;z-index:1000}.tp-p2dpadv.tp-p2dpadv-expanded{display:block;visibility:visible}.tp-p2dpadv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpadv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpadv_ax{stroke:var(--input-guide-color)}.tp-p2dpadv_l{stroke:var(--input-foreground-color);stroke-linecap:round;stroke-dasharray:1px 3px}.tp-p2dpadv_m{fill:var(--input-foreground-color)}.tp-p2dpadtxtv{display:flex;position:relative}.tp-p2dpadtxtv_b{height:var(--unit-size);position:relative;width:var(--unit-size)}.tp-p2dpadtxtv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dpadtxtv_p{left:-4px;position:absolute;right:-4px;top:var(--unit-size)}.tp-p2dpadtxtv_t{margin-left:4px}.tp-p2dtxtv{display:flex}.tp-p2dtxtv_w{align-items:center;display:flex}.tp-p2dtxtv_w+.tp-p2dtxtv_w{margin-left:2px}.tp-p2dtxtv_i{padding:0 4px;width:100%}.tp-p2dtxtv_w:nth-child(1) .tp-p2dtxtv_i{border-top-right-radius:0;border-bottom-right-radius:0}.tp-p2dtxtv_w:nth-child(2) .tp-p2dtxtv_i{border-top-left-radius:0;border-bottom-left-radius:0}.tp-p3dtxtv{display:flex}.tp-p3dtxtv_w{align-items:center;display:flex}.tp-p3dtxtv_w+.tp-p3dtxtv_w{margin-left:2px}.tp-p3dtxtv_i{padding:0 4px;width:100%}.tp-p3dtxtv_w:first-child .tp-p3dtxtv_i{border-top-right-radius:0;border-bottom-right-radius:0}.tp-p3dtxtv_w:not(:first-child):not(:last-child) .tp-p3dtxtv_i{border-radius:0}.tp-p3dtxtv_w:last-child .tp-p3dtxtv_i{border-top-left-radius:0;border-bottom-left-radius:0}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono,Source Code Pro,Menlo,Courier,monospace);--unit-size: var(--tp-unit-size, 20px);--base-background-color: var(--tp-base-background-color, #2f3137);--base-shadow-color: var(--tp-base-shadow-color, rgba(0,0,0,0.2));--button-background-color: var(--tp-button-background-color, #adafb8);--button-background-color-active: var(--tp-button-background-color-active, #d6d7db);--button-background-color-focus: var(--tp-button-background-color-focus, #c8cad0);--button-background-color-hover: var(--tp-button-background-color-hover, #bbbcc4);--button-foreground-color: var(--tp-button-foreground-color, #2f3137);--folder-background-color: var(--tp-folder-background-color, rgba(200,202,208,0.1));--folder-background-color-active: var(--tp-folder-background-color-active, rgba(200,202,208,0.25));--folder-background-color-focus: var(--tp-folder-background-color-focus, rgba(200,202,208,0.2));--folder-background-color-hover: var(--tp-folder-background-color-hover, rgba(200,202,208,0.15));--folder-foreground-color: var(--tp-folder-foreground-color, #c8cad0);--input-background-color: var(--tp-input-background-color, rgba(200,202,208,0.1));--input-background-color-active: var(--tp-input-background-color-active, rgba(200,202,208,0.25));--input-background-color-focus: var(--tp-input-background-color-focus, rgba(200,202,208,0.2));--input-background-color-hover: var(--tp-input-background-color-hover, rgba(200,202,208,0.15));--input-foreground-color: var(--tp-input-foreground-color, #c8cad0);--input-guide-color: var(--tp-input-guide-color, rgba(47,49,55,0.5));--label-foreground-color: var(--tp-label-foreground-color, rgba(200,202,208,0.7));--monitor-background-color: var(--tp-monitor-background-color, #26272c);--monitor-foreground-color: var(--tp-monitor-foreground-color, rgba(200,202,208,0.7));--separator-color: var(--tp-separator-color, #26272c)}.tp-rotv{background-color:var(--base-background-color);border-radius:6px;box-shadow:0 2px 4px var(--base-shadow-color);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_t{border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top-left-radius:6px;border-top-right-radius:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_t{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv_m{transition:none}.tp-rotv_c>.tp-fldv:last-child>.tp-fldv_c{border-bottom-left-radius:6px;border-bottom-right-radius:6px}.tp-rotv_c>.tp-fldv:last-child:not(.tp-fldv-expanded)>.tp-fldv_t{border-bottom-left-radius:6px;border-bottom-right-radius:6px}.tp-rotv_c>.tp-fldv:first-child>.tp-fldv_t{border-top-left-radius:6px;border-top-right-radius:6px}.tp-sptv_r{background-color:var(--separator-color);border-width:0;display:block;height:4px;margin:0;width:100%}.tp-sldv_o{box-sizing:border-box;cursor:pointer;height:var(--unit-size);margin:0 6px;outline:none;position:relative}.tp-sldv_o::before{background-color:var(--input-background-color);border-radius:1px;bottom:0;content:'';display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_i{height:100%;left:0;position:absolute;top:0}.tp-sldv_i::before{background-color:var(--button-background-color);border-radius:2px;bottom:0;content:'';display:block;height:12px;margin:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_o:hover .tp-sldv_i::before{background-color:var(--button-background-color-hover)}.tp-sldv_o:focus .tp-sldv_i::before{background-color:var(--button-background-color-focus)}.tp-sldv_o:active .tp-sldv_i::before{background-color:var(--button-background-color-active)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-txtv_i{padding:0 4px}.tp-v-hidden{display:none}"),s().forEach(function(o){o.css&&Bt(i,"plugin-"+o.id,o.css)})}var or=function(i){t(o,i);function o(c){var _,N=this,U=c||{},re=(_=U.document)!==null&&_!==void 0?_:_e(),fe=new jr(re,{expanded:U.expanded,blade:new Q,title:U.title});return N=i.call(this,fe)||this,N.containerElem_=U.container||ft(re),N.containerElem_.appendChild(N.element),N.doc_=re,N.usesDefaultWrapper_=!U.container,Ht(N.document),N}return Object.defineProperty(o.prototype,"document",{get:function(){if(!this.doc_)throw J.alreadyDisposed();return this.doc_},enumerable:!1,configurable:!0}),o.prototype.dispose=function(){var c=this.containerElem_;if(!c)throw J.alreadyDisposed();if(this.usesDefaultWrapper_){var _=c.parentElement;_&&_.removeChild(c)}this.containerElem_=null,this.doc_=null,i.prototype.dispose.call(this)},o}(Wr);function Je(){[fo,Da,x,Si,_i,$n,gn,ue].forEach(function(i){Wr.registerPlugin({type:"input",plugin:i})}),[ee,at,qe].forEach(function(i){Wr.registerPlugin({type:"monitor",plugin:i})})}return Je(),or})});var Jl=Pn((yw,Ql)=>{Ql.exports={directed:!1,multigraph:!1,graph:{node_default:{},edge_default:{}},nodes:[{x:31.6,y:-16.200300000000002,id:"0"},{x:28.000000000000004,y:-22.3999,id:"1"},{x:27.6,y:-28.3997,id:"2"},{x:32.6,y:-27.6001,id:"3"},{x:27.400000000000002,y:-25.199899999999996,id:"4"},{x:31.8,y:-16.200300000000002,id:"5"},{x:32.800000000000004,y:-23.5992,id:"6"},{x:34.599999999999994,y:-16.7999,id:"7"},{x:34.4,y:-18.8004,id:"8"},{x:18,y:-7.6004000000000005,id:"9"},{x:30.599999999999998,y:-19.400000000000002,id:"10"},{x:37.4,y:-19.5999,id:"11"},{x:28.199999999999996,y:-24.6002,id:"12"},{x:32.6,y:-19.7998,id:"13"},{x:29.2,y:-16.9998,id:"14"},{x:35,y:-26.8005,id:"15"},{x:29.2,y:-25.5997,id:"16"},{x:37.4,y:-22.7997,id:"17"},{x:29.2,y:-13.8,id:"18"},{x:34,y:-22.3999,id:"19"},{x:31.6,y:-19.2001,id:"20"},{x:30.4,y:-16.400100000000002,id:"21"},{x:32.4,y:-17.3996,id:"22"},{x:33.6,y:-22.599800000000002,id:"23"},{x:35.6,y:-15.1993,id:"24"},{x:28.000000000000004,y:-25.5997,id:"25"},{x:30,y:-22.2,id:"26"},{x:30.599999999999998,y:-28.5995,id:"27"},{x:32.6,y:-22.599800000000002,id:"28"},{x:29.799999999999997,y:-24.8001,id:"29"},{x:35.199999999999996,y:-27.2003,id:"30"},{x:33.800000000000004,y:-15.4007,id:"31"},{x:31.6,y:-20.3995,id:"32"},{x:33.6,y:-22.0001,id:"33"},{x:30,y:-25.5997,id:"34"},{x:29.2,y:-19.5999,id:"35"},{x:31.8,y:-18.2007,id:"36"},{x:-75,y:-21.4005,id:"37"},{x:41.8,y:-24.0005,id:"38"},{x:40.8,y:-17.599500000000003,id:"39"},{x:40.2,y:-17.3996,id:"40"},{x:41.6,y:-16.9998,id:"41"},{x:74.6,y:5.2002,id:"42"},{x:38,y:-8.799700000000001,id:"43"},{x:21,y:-12.600700000000002,id:"44"},{x:36.4,y:-16.0004,id:"45"},{x:26.8,y:-27.000400000000003,id:"46"},{x:38.800000000000004,y:-22.0001,id:"47"},{x:34.599999999999994,y:-17.599500000000003,id:"48"},{x:53.400000000000006,y:-36.7996,id:"49"},{x:33,y:-13.200400000000002,id:"50"},{x:31.8,y:-18.4006,id:"51"},{x:24,y:-29.400599999999997,id:"52"},{x:20,y:-22.7997,id:"53"},{x:2,y:-31.799300000000002,id:"54"},{x:30.2,y:-25.3998,id:"55"},{x:-10,y:-33.5999,id:"56"},{x:65.4,y:.1999,id:"57"},{x:26.8,y:-19.400000000000002,id:"58"},{x:34.4,y:-22.7997,id:"59"},{x:35.199999999999996,y:-22.0001,id:"60"},{x:33.6,y:-19.400000000000002,id:"61"},{x:37.8,y:-25.999499999999998,id:"62"},{x:30,y:-16.200300000000002,id:"63"},{x:30.2,y:-21.6003,id:"64"},{x:-46.800000000000004,y:-25,id:"65"},{x:-57.599999999999994,y:-9.800699999999999,id:"66"},{x:-56.99999999999999,y:-20.1996,id:"67"},{x:-48.199999999999996,y:-12.800600000000001,id:"68"},{x:-49.2,y:-20.599400000000003,id:"69"},{x:-37,y:-14.599599999999999,id:"70"},{x:-42.4,y:-21.2006,id:"71"},{x:-49.4,y:-23.3994,id:"72"},{x:-66,y:-11.999500000000001,id:"73"},{x:-58.199999999999996,y:-14.799499999999998,id:"74"},{x:-83.2,y:2.8000000000000003,id:"75"},{x:-59.4,y:-20.3995,id:"76"},{x:-48.8,y:-20.799300000000002,id:"77"},{x:-52.400000000000006,y:-19.0002,id:"78"},{x:-64.60000000000001,y:-17.999299999999998,id:"79"},{x:-66,y:-21.2006,id:"80"},{x:-81.39999999999999,y:-12.3993,id:"81"},{x:-92,y:-2.9999000000000002,id:"82"},{x:-84.2,y:-7.0007,id:"83"},{x:-81.6,y:-11.999500000000001,id:"84"},{x:-78.8,y:-16.6,id:"85"},{x:-77.4,y:-17.599500000000003,id:"86"},{x:-87.8,y:-.1999,id:"87"},{x:-75.8,y:-16.9998,id:"88"},{x:-90.2,y:-.5997,id:"89"},{x:-75.4,y:-16.400100000000002,id:"90"},{x:-93.4,y:-3.3997,id:"91"},{x:-85.6,y:-7.6004000000000005,id:"92"},{x:-87.4,y:-12.1994,id:"93"},{x:-93.2,y:-4.2007,id:"94"},{x:-84,y:-15.4007,id:"95"},{x:-89.4,y:-5.0003,id:"96"},{x:-92.80000000000001,y:-2.2003000000000004,id:"97"},{x:-93.60000000000001,y:-1.6006,id:"98"},{x:-82.6,y:-15.800500000000001,id:"99"},{x:-32,y:3.7994,id:"100"},{x:-22.2,y:.1999,id:"101"},{x:-33,y:4.400600000000001,id:"102"},{x:-32.2,y:3.3997,id:"103"},{x:-31.6,y:2.2003000000000004,id:"104"},{x:-30.599999999999998,y:.1999,id:"105"},{x:-35,y:2.2003000000000004,id:"106"},{x:-32.6,y:6.599399999999999,id:"107"},{x:-31,y:-1.8005,id:"108"},{x:-28.599999999999998,y:5.6000000000000005,id:"109"},{x:55.2,y:-44.7998,id:"110"},{x:48.199999999999996,y:-36.5997,id:"111"},{x:38.2,y:-30.000300000000003,id:"112"},{x:55.800000000000004,y:-42.3996,id:"113"},{x:46.400000000000006,y:-38.4003,id:"114"},{x:44.4,y:-27.9999,id:"115"},{x:-69.6,y:30.2002,id:"116"},{x:26.200000000000003,y:2.8000000000000003,id:"117"},{x:27.400000000000002,y:10.8002,id:"118"},{x:23,y:-.7996,id:"119"},{x:28.599999999999998,y:8.999600000000001,id:"120"},{x:35.6,y:2.9999000000000002,id:"121"},{x:7.6,y:10.6003,id:"122"},{x:-20.8,y:-4.2007,id:"123"},{x:-5.4,y:-2.9999000000000002,id:"124"},{x:86.4,y:13.600200000000001,id:"125"},{x:35.6,y:15.6006,id:"126"},{x:45.4,y:13.8,id:"127"},{x:34.8,y:13.8,id:"128"},{x:44,y:12.3993,id:"129"},{x:8.4,y:22.0001,id:"130"},{x:10.2,y:17.3996,id:"131"},{x:21.8,y:-4.8004,id:"132"},{x:20,y:-.3998,id:"133"},{x:-1.7999999999999998,y:6.3995,id:"134"},{x:-84.39999999999999,y:2.0004,id:"135"},{x:-37.6,y:-12.1994,id:"136"},{x:-38.6,y:-22.3999,id:"137"},{x:-35.4,y:-10.8002,id:"138"},{x:77,y:6.7993,id:"139"},{x:74.2,y:7.4005,id:"140"},{x:61,y:-10.2005,id:"141"},{x:50.6,y:8.4,id:"142"},{x:40.8,y:2.8000000000000003,id:"143"},{x:-5.800000000000001,y:-11.5997,id:"144"},{x:-.4,y:-9.199499999999999,id:"145"},{x:-94,y:23.3994,id:"146"},{x:-95.39999999999999,y:12.600700000000002,id:"147"},{x:-95.39999999999999,y:17.999299999999998,id:"148"},{x:-95.39999999999999,y:21.0007,id:"149"},{x:-94.39999999999999,y:23.5992,id:"150"},{x:-96,y:23.8007,id:"151"},{x:-3.4000000000000004,y:-19.5999,id:"152"},{x:-3.2,y:-21.0007,id:"153"},{x:-13,y:-22.7997,id:"154"},{x:-37.4,y:-24.6002,id:"155"},{x:-4.2,y:-21.0007,id:"156"},{x:-4,y:-26.8005,id:"157"},{x:-6.800000000000001,y:-30.000300000000003,id:"158"},{x:-57.199999999999996,y:7.8003,id:"159"},{x:-56.39999999999999,y:7.0007,id:"160"},{x:-53.800000000000004,y:3.1997999999999998,id:"161"},{x:-56.599999999999994,y:8.799700000000001,id:"162"},{x:-74.6,y:27.000400000000003,id:"163"},{x:-94.19999999999999,y:24.8001,id:"164"},{x:-83,y:27.800000000000004,id:"165"},{x:-92.4,y:32.2006,id:"166"},{x:-76,y:31.399500000000003,id:"167"},{x:28.000000000000004,y:14.9994,id:"168"},{x:-56.39999999999999,y:-23.8007,id:"169"},{x:-91.60000000000001,y:-7.6004000000000005,id:"170"},{x:11.600000000000001,y:-14.799499999999998,id:"171"},{x:7.6,y:-17.599500000000003,id:"172"},{x:4.3999999999999995,y:1.8005,id:"173"},{x:5.4,y:-7.6004000000000005,id:"174"},{x:.8,y:-7.0007,id:"175"},{x:19.8,y:-12.1994,id:"176"},{x:12.4,y:-13.999900000000002,id:"177"},{x:14.399999999999999,y:-11.7996,id:"178"},{x:18.8,y:-9.5993,id:"179"},{x:12,y:-13.0005,id:"180"},{x:18.4,y:-9.199499999999999,id:"181"},{x:18.4,y:-10.2005,id:"182"},{x:10.4,y:-8.999600000000001,id:"183"},{x:5.6000000000000005,y:-12.3993,id:"184"},{x:19,y:-12.3993,id:"185"},{x:14.399999999999999,y:-18.2007,id:"186"},{x:5.2,y:-10.0006,id:"187"},{x:13.600000000000001,y:-20.1996,id:"188"},{x:14.399999999999999,y:-9.199499999999999,id:"189"},{x:7.6,y:-19.0002,id:"190"},{x:10,y:-14.9994,id:"191"},{x:12.6,y:-17.1997,id:"192"},{x:15.2,y:-10.6003,id:"193"},{x:6.800000000000001,y:-8.999600000000001,id:"194"},{x:8.799999999999999,y:-19.0002,id:"195"},{x:16.400000000000002,y:-14.9994,id:"196"},{x:20.4,y:-10.4004,id:"197"},{x:-85.8,y:-2.8000000000000003,id:"198"},{x:14.000000000000002,y:-13.999900000000002,id:"199"},{x:18.2,y:-13.200400000000002,id:"200"},{x:5,y:-17.599500000000003,id:"201"},{x:-7.000000000000001,y:-18.4006,id:"202"},{x:20.8,y:-10.8002,id:"203"},{x:10.6,y:-14.799499999999998,id:"204"},{x:10,y:-11.7996,id:"205"},{x:5.2,y:-8.999600000000001,id:"206"},{x:20.200000000000003,y:-8.2001,id:"207"},{x:3.2,y:-13.600200000000001,id:"208"},{x:1,y:-8.4,id:"209"},{x:13.600000000000001,y:-11.3998,id:"210"},{x:-87.8,y:-1.1993,id:"211"},{x:-92,y:2.4002,id:"212"},{x:-89.60000000000001,y:-2.6001,id:"213"},{x:-88,y:-.1999,id:"214"},{x:-98.6,y:7.0007,id:"215"},{x:-85,y:-.9995,id:"216"},{x:-85.2,y:-6.3995,id:"217"},{x:-93.8,y:-3.1997999999999998,id:"218"},{x:-98.4,y:1.8005,id:"219"},{x:-86.6,y:-5.2002,id:"220"},{x:-93,y:-1.6006,id:"221"},{x:-75.2,y:-16.6,id:"222"},{x:-92.2,y:-6.3995,id:"223"},{x:-93.8,y:6.3995,id:"224"},{x:-86.2,y:-2.2003000000000004,id:"225"},{x:-91.4,y:-.1999,id:"226"},{x:77.4,y:7.0007,id:"227"},{x:-94.39999999999999,y:30.9998,id:"228"},{x:-98.6,y:10.4004,id:"229"},{x:-67.80000000000001,y:.1999,id:"230"},{x:-85,y:1.6006,id:"231"},{x:49,y:-13.400300000000001,id:"232"},{x:-69.39999999999999,y:-20.799300000000002,id:"233"},{x:-87.2,y:5.7999,id:"234"},{x:-82.6,y:-8.999600000000001,id:"235"},{x:-77.2,y:-11.0001,id:"236"},{x:-81.6,y:-5.0003,id:"237"},{x:-91.2,y:1.4008,id:"238"},{x:-92.4,y:4.400600000000001,id:"239"},{x:-36.8,y:-.7996,id:"240"},{x:79.60000000000001,y:8.4,id:"241"},{x:81.6,y:10.6003,id:"242"},{x:80.80000000000001,y:8.999600000000001,id:"243"},{x:50.2,y:-29.2007,id:"244"},{x:47.4,y:-38.4003,id:"245"},{x:44.2,y:-29.400599999999997,id:"246"},{x:49.4,y:-37.1994,id:"247"},{x:47,y:-40.1993,id:"248"},{x:43.8,y:-13.600200000000001,id:"249"},{x:44.2,y:-20.799300000000002,id:"250"},{x:37,y:-13.999900000000002,id:"251"},{x:38.4,y:-19.9997,id:"252"},{x:-55.400000000000006,y:17.999299999999998,id:"253"},{x:-72.8,y:33.5999,id:"254"},{x:19.400000000000002,y:1.4008,id:"255"},{x:37.2,y:1.1993,id:"256"},{x:34.8,y:10.2005,id:"257"},{x:33.4,y:2.9999000000000002,id:"258"},{x:35.4,y:-1.1993,id:"259"},{x:34.4,y:8.5999,id:"260"},{x:3.4000000000000004,y:2.0004,id:"261"},{x:3.8,y:1.1993,id:"262"},{x:36.199999999999996,y:-2.0004,id:"263"},{x:16.8,y:-28.9993,id:"264"},{x:20,y:-30.9998,id:"265"},{x:21,y:-30.7999,id:"266"},{x:67.80000000000001,y:.7996,id:"267"},{x:67.80000000000001,y:1.8005,id:"268"},{x:67,y:1.8005,id:"269"},{x:66.2,y:.7996,id:"270"},{x:66.8,y:.1999,id:"271"},{x:88.4,y:13.600200000000001,id:"272"},{x:86.4,y:11.7996,id:"273"},{x:87.6,y:12.800600000000001,id:"274"},{x:84.8,y:12.3993,id:"275"},{x:43.4,y:10.6003,id:"276"},{x:42.4,y:12.1994,id:"277"},{x:15.8,y:18.2007,id:"278"},{x:-2.6,y:7.2006,id:"279"},{x:-73,y:-4.2007,id:"280"},{x:-84.2,y:1.4008,id:"281"},{x:76.8,y:7.0007,id:"282"},{x:76,y:7.2006,id:"283"},{x:75.2,y:6.3995,id:"284"},{x:76.8,y:5.4001,id:"285"},{x:73.2,y:4.2007,id:"286"},{x:73.8,y:6.599399999999999,id:"287"},{x:-39,y:-10.8002,id:"288"},{x:-38.2,y:-13.999900000000002,id:"289"},{x:77.4,y:7.4005,id:"290"},{x:70.8,y:14.399700000000001,id:"291"},{x:77.60000000000001,y:15.4007,id:"292"},{x:76.4,y:8.999600000000001,id:"293"},{x:78.4,y:13.200400000000002,id:"294"},{x:77.4,y:6.7993,id:"295"},{x:77.60000000000001,y:7.4005,id:"296"},{x:59.599999999999994,y:-13.200400000000002,id:"297"},{x:59.8,y:-9.800699999999999,id:"298"},{x:54.800000000000004,y:-9.3994,id:"299"},{x:56.2,y:-9.3994,id:"300"},{x:53,y:-12.3993,id:"301"},{x:39.800000000000004,y:2.2003000000000004,id:"302"},{x:40.6,y:1.6006,id:"303"},{x:-89.4,y:19.0002,id:"304"},{x:-97.8,y:12.800600000000001,id:"305"},{x:-91.8,y:13.600200000000001,id:"306"},{x:55.800000000000004,y:5.9998000000000005,id:"307"},{x:59.8,y:4.600499999999999,id:"308"},{x:66.8,y:8.4,id:"309"},{x:72.8,y:4.2007,id:"310"},{x:86,y:10.8002,id:"311"},{x:47.4,y:-13.8,id:"312"},{x:39.800000000000004,y:-11.5997,id:"313"},{x:.6,y:-29.6005,id:"314"},{x:-62,y:-5.7999,id:"315"},{x:70,y:-5.4001,id:"316"},{x:64.60000000000001,y:-4.8004,id:"317"},{x:60.8,y:-7.6004000000000005,id:"318"},{x:64,y:2.0004,id:"319"},{x:64.8,y:-.1999,id:"320"},{x:69,y:-6.7993,id:"321"},{x:70,y:-6.7993,id:"322"},{x:-83.2,y:26.400800000000004,id:"323"},{x:-94.39999999999999,y:28.9993,id:"324"},{x:-92,y:35.4004,id:"325"},{x:-86.8,y:27.6001,id:"326"},{x:22.400000000000002,y:15.800500000000001,id:"327"},{x:-87.6,y:10.0006,id:"328"},{x:-88.8,y:-8.0002,id:"329"},{x:-90.60000000000001,y:1.1993,id:"330"},{x:65,y:-14.199800000000002,id:"331"},{x:.4,y:-32.6004,id:"332"},{x:-85.2,y:3.3997,id:"333"},{x:-3.8,y:-22.9996,id:"334"},{x:83.6,y:8.999600000000001,id:"335"},{x:49.8,y:-35.600300000000004,id:"336"},{x:-82.39999999999999,y:1.8005,id:"337"},{x:54.6,y:-11.0001,id:"338"},{x:86.4,y:9.5993,id:"339"},{x:53.6,y:-22.2,id:"340"},{x:-8.4,y:-44.5999,id:"341"},{x:-5.6000000000000005,y:-38.6002,id:"342"},{x:-6.6000000000000005,y:-38.000499999999995,id:"343"},{x:65,y:-1.1993,id:"344"},{x:-93.8,y:31.1996,id:"345"},{x:-94,y:9.5993,id:"346"},{x:-95.19999999999999,y:7.4005,id:"347"},{x:-30.8,y:-1.8005,id:"348"},{x:-30.599999999999998,y:1.6006,id:"349"},{x:-34.4,y:3.3997,id:"350"},{x:-28.199999999999996,y:-2.0004,id:"351"},{x:-43,y:0,id:"352"},{x:-38.6,y:3.1997999999999998,id:"353"},{x:-36,y:2.9999000000000002,id:"354"},{x:-33.800000000000004,y:-.9995,id:"355"},{x:-35.6,y:5.7999,id:"356"},{x:-34.2,y:8.999600000000001,id:"357"},{x:-25.8,y:-2.8000000000000003,id:"358"},{x:-32.800000000000004,y:-.9995,id:"359"},{x:-43,y:-4.8004,id:"360"},{x:-35.6,y:2.6001,id:"361"},{x:-42.4,y:-.9995,id:"362"},{x:-35.8,y:-5.0003,id:"363"},{x:-27.6,y:-2.8000000000000003,id:"364"},{x:-37.4,y:-.5997,id:"365"},{x:82.19999999999999,y:9.3994,id:"366"},{x:82.8,y:11.0001,id:"367"},{x:55.400000000000006,y:-44.0002,id:"368"},{x:50.6,y:-33.7997,id:"369"},{x:90,y:10.4004,id:"370"},{x:82.6,y:11.5997,id:"371"},{x:77,y:9.5993,id:"372"},{x:79.2,y:17.599500000000003,id:"373"},{x:90.2,y:17.799400000000002,id:"374"},{x:85.6,y:10.2005,id:"375"},{x:79.80000000000001,y:10.6003,id:"376"},{x:83.6,y:10.4004,id:"377"},{x:84.2,y:15.4007,id:"378"},{x:50,y:-27.6001,id:"379"},{x:71.6,y:1.1993,id:"380"},{x:73.2,y:-.7996,id:"381"},{x:71.39999999999999,y:3.1997999999999998,id:"382"},{x:68.60000000000001,y:2.8000000000000003,id:"383"},{x:54.800000000000004,y:8.999600000000001,id:"384"},{x:66.8,y:-1.1993,id:"385"},{x:68.4,y:2.6001,id:"386"},{x:52.2,y:8.799700000000001,id:"387"},{x:47,y:-31.5994,id:"388"},{x:36.4,y:-28.5995,id:"389"},{x:49.2,y:-42.1997,id:"390"},{x:40.8,y:-29.2007,id:"391"},{x:45.4,y:-29.400599999999997,id:"392"},{x:50.8,y:-30.9998,id:"393"},{x:46,y:-38.4003,id:"394"},{x:35.8,y:-30.2002,id:"395"},{x:47,y:-40.8005,id:"396"},{x:29.599999999999998,y:-29.8004,id:"397"},{x:39.4,y:-29.6005,id:"398"},{x:32.6,y:-28.3997,id:"399"},{x:55.2,y:-44.5999,id:"400"},{x:54.6,y:-39.7995,id:"401"},{x:48,y:-41.6,id:"402"},{x:52,y:-41.9998,id:"403"},{x:47.599999999999994,y:-34.8007,id:"404"},{x:53,y:-36.0001,id:"405"},{x:49.8,y:-37.600699999999996,id:"406"},{x:47,y:-39.5996,id:"407"},{x:48.199999999999996,y:-33.4,id:"408"},{x:51.4,y:-45.399499999999996,id:"409"},{x:52.2,y:-35.0006,id:"410"},{x:47.599999999999994,y:-36.7996,id:"411"},{x:77,y:5.2002,id:"412"},{x:51,y:-39.7995,id:"413"},{x:46.400000000000006,y:-30.599999999999998,id:"414"},{x:44.800000000000004,y:-33.2001,id:"415"},{x:49,y:-31.799300000000002,id:"416"},{x:34,y:-29.400599999999997,id:"417"},{x:51.800000000000004,y:-23.3994,id:"418"},{x:68.4,y:-2.0004,id:"419"},{x:49.8,y:-50,id:"420"},{x:45.800000000000004,y:-32.6004,id:"421"},{x:51.6,y:-42.7994,id:"422"},{x:48.6,y:-35.2005,id:"423"},{x:46,y:-33.4,id:"424"},{x:55.00000000000001,y:-40.4007,id:"425"},{x:53,y:-40.6006,id:"426"},{x:47,y:-11.0001,id:"427"},{x:41,y:-30.000300000000003,id:"428"},{x:42.6,y:-16.7999,id:"429"},{x:42,y:-19.2001,id:"430"},{x:47.199999999999996,y:-20.799300000000002,id:"431"},{x:39.800000000000004,y:-16.200300000000002,id:"432"},{x:39.800000000000004,y:-17.3996,id:"433"},{x:38.2,y:-22.0001,id:"434"},{x:43.4,y:-14.9994,id:"435"},{x:44.800000000000004,y:-17.1997,id:"436"},{x:50.6,y:-25.199899999999996,id:"437"},{x:42.8,y:-17.3996,id:"438"},{x:48.8,y:-18.8004,id:"439"},{x:43.8,y:-21.4005,id:"440"},{x:44,y:-20.599400000000003,id:"441"},{x:41.199999999999996,y:-13.600200000000001,id:"442"},{x:39.6,y:-20.799300000000002,id:"443"},{x:46.2,y:-24.2004,id:"444"},{x:51.2,y:-24.0005,id:"445"},{x:48.8,y:-21.2006,id:"446"},{x:41.199999999999996,y:-18.6005,id:"447"},{x:39.800000000000004,y:-20.1996,id:"448"},{x:45.800000000000004,y:-25.5997,id:"449"},{x:38.6,y:-16.9998,id:"450"},{x:38,y:-13.600200000000001,id:"451"},{x:40.6,y:-25.3998,id:"452"},{x:32,y:-12.800600000000001,id:"453"},{x:44,y:-16.7999,id:"454"},{x:44.800000000000004,y:-18.8004,id:"455"},{x:48.8,y:-19.9997,id:"456"},{x:40,y:-17.3996,id:"457"},{x:42,y:-20.1996,id:"458"},{x:45.4,y:-20.799300000000002,id:"459"},{x:52,y:-23.8007,id:"460"},{x:39.2,y:-19.0002,id:"461"},{x:40.2,y:-18.8004,id:"462"},{x:41.8,y:-22.7997,id:"463"},{x:47.8,y:-25.5997,id:"464"},{x:40.2,y:-14.399700000000001,id:"465"},{x:40.2,y:-15.1993,id:"466"},{x:37.6,y:-16.7999,id:"467"},{x:48.8,y:-18.6005,id:"468"},{x:44.2,y:-19.7998,id:"469"},{x:40.2,y:-24.6002,id:"470"},{x:40.6,y:-26.199299999999997,id:"471"},{x:41.6,y:-15.4007,id:"472"},{x:42,y:-21.6003,id:"473"},{x:46.400000000000006,y:-19.5999,id:"474"},{x:42.8,y:-24.8001,id:"475"},{x:27.800000000000004,y:-14.199800000000002,id:"476"},{x:39,y:-23.5992,id:"477"},{x:38,y:-19.400000000000002,id:"478"},{x:43.8,y:-22.7997,id:"479"},{x:50.4,y:-26.600600000000004,id:"480"},{x:43,y:-20.799300000000002,id:"481"},{x:45.800000000000004,y:-22.2,id:"482"},{x:56.2,y:-21.0007,id:"483"},{x:39.800000000000004,y:-22.599800000000002,id:"484"},{x:43.4,y:-14.799499999999998,id:"485"},{x:43.6,y:-15.6006,id:"486"},{x:39.2,y:-15.800500000000001,id:"487"},{x:37.8,y:-19.7998,id:"488"},{x:37.8,y:-20.3995,id:"489"},{x:50.4,y:-23.3994,id:"490"},{x:47.199999999999996,y:-18.6005,id:"491"},{x:49.8,y:-20.3995,id:"492"},{x:40.2,y:-17.599500000000003,id:"493"},{x:42.6,y:-17.599500000000003,id:"494"},{x:47,y:-24.0005,id:"495"},{x:40.400000000000006,y:-19.9997,id:"496"},{x:49.8,y:-18.4006,id:"497"},{x:49.8,y:-16.9998,id:"498"},{x:40,y:-21.4005,id:"499"},{x:39.4,y:-18.8004,id:"500"},{x:39.2,y:-26.8005,id:"501"},{x:37.4,y:-16.7999,id:"502"},{x:47.599999999999994,y:-23.5992,id:"503"},{x:52,y:-24.0005,id:"504"},{x:36.6,y:-13.999900000000002,id:"505"},{x:40.400000000000006,y:-13.400300000000001,id:"506"},{x:-59.4,y:14.399700000000001,id:"507"},{x:-71.6,y:16.9998,id:"508"},{x:-69.6,y:16.400100000000002,id:"509"},{x:-73.4,y:28.3997,id:"510"},{x:-65.4,y:13.400300000000001,id:"511"},{x:-74.2,y:27.000400000000003,id:"512"},{x:-56.00000000000001,y:16.0004,id:"513"},{x:-73.6,y:29.8004,id:"514"},{x:-66,y:16.200300000000002,id:"515"},{x:-56.8,y:10.8002,id:"516"},{x:-71.6,y:16.400100000000002,id:"517"},{x:-62.6,y:12.600700000000002,id:"518"},{x:-70.39999999999999,y:17.799400000000002,id:"519"},{x:-71.8,y:26.199299999999997,id:"520"},{x:-55.800000000000004,y:17.599500000000003,id:"521"},{x:-74.6,y:26.600600000000004,id:"522"},{x:-74.2,y:18.8004,id:"523"},{x:-77,y:19.7998,id:"524"},{x:-65.2,y:14.599599999999999,id:"525"},{x:16.400000000000002,y:3.7994,id:"526"},{x:28.799999999999997,y:.1999,id:"527"},{x:20.200000000000003,y:-.1999,id:"528"},{x:25,y:12.600700000000002,id:"529"},{x:26.200000000000003,y:5.6000000000000005,id:"530"},{x:19.8,y:4.2007,id:"531"},{x:27.400000000000002,y:2.9999000000000002,id:"532"},{x:26.8,y:4.8004,id:"533"},{x:20.8,y:-1.1993,id:"534"},{x:23.599999999999998,y:5.4001,id:"535"},{x:24.2,y:3.3997,id:"536"},{x:29.2,y:2.8000000000000003,id:"537"},{x:24.2,y:4.8004,id:"538"},{x:24.4,y:-3.5995,id:"539"},{x:26,y:2.6001,id:"540"},{x:26.6,y:11.0001,id:"541"},{x:15.4,y:-18.4006,id:"542"},{x:25,y:11.200000000000001,id:"543"},{x:26.200000000000003,y:8.799700000000001,id:"544"},{x:20,y:.5997,id:"545"},{x:28.199999999999996,y:8.2001,id:"546"},{x:26.200000000000003,y:10.0006,id:"547"},{x:19.8,y:7.6004000000000005,id:"548"},{x:23.799999999999997,y:8.999600000000001,id:"549"},{x:21.4,y:.7996,id:"550"},{x:18.2,y:5.9998000000000005,id:"551"},{x:26.8,y:12.600700000000002,id:"552"},{x:22.2,y:6.7993,id:"553"},{x:18.6,y:9.5993,id:"554"},{x:21.8,y:12.600700000000002,id:"555"},{x:23.400000000000002,y:12.3993,id:"556"},{x:35.6,y:4.8004,id:"557"},{x:31.4,y:-1.4008,id:"558"},{x:32.2,y:10.0006,id:"559"},{x:32.2,y:5.4001,id:"560"},{x:31,y:10.0006,id:"561"},{x:32.2,y:8.999600000000001,id:"562"},{x:15,y:10.2005,id:"563"},{x:2.1999999999999997,y:14.599599999999999,id:"564"},{x:14.399999999999999,y:13.8,id:"565"},{x:40.2,y:-2.6001,id:"566"},{x:33.800000000000004,y:11.200000000000001,id:"567"},{x:43.2,y:15.4007,id:"568"},{x:40.8,y:13.400300000000001,id:"569"},{x:36.199999999999996,y:12.3993,id:"570"},{x:33.800000000000004,y:15.800500000000001,id:"571"},{x:43.6,y:12.1994,id:"572"},{x:12.2,y:18.4006,id:"573"},{x:12.4,y:17.599500000000003,id:"574"},{x:19.2,y:-22.7997,id:"575"},{x:19.8,y:-.3998,id:"576"},{x:47.4,y:6.3995,id:"577"},{x:47.4,y:6.7993,id:"578"},{x:39.6,y:1.1993,id:"579"},{x:-6.2,y:-25.3998,id:"580"},{x:27.800000000000004,y:15.4007,id:"581"},{x:28.4,y:13.400300000000001,id:"582"},{x:26,y:19.7998,id:"583"},{x:28.4,y:13.999900000000002,id:"584"},{x:14.6,y:21.0007,id:"585"},{x:25.6,y:13.200400000000002,id:"586"},{x:26.8,y:14.9994,id:"587"},{x:25.8,y:18.8004,id:"588"},{x:17.599999999999998,y:8.2001,id:"589"},{x:25.8,y:1.1993,id:"590"},{x:20.200000000000003,y:2.0004,id:"591"},{x:20,y:11.0001,id:"592"},{x:16.400000000000002,y:5.7999,id:"593"},{x:-1.7999999999999998,y:13.200400000000002,id:"594"},{x:23,y:8.2001,id:"595"},{x:24.8,y:3.7994,id:"596"},{x:20.8,y:13.200400000000002,id:"597"},{x:24.4,y:10.6003,id:"598"},{x:20.8,y:10.6003,id:"599"},{x:24.8,y:-2.8000000000000003,id:"600"},{x:27.400000000000002,y:-.9995,id:"601"},{x:20.8,y:1.6006,id:"602"},{x:26.400000000000002,y:10.4004,id:"603"},{x:28.599999999999998,y:11.200000000000001,id:"604"},{x:25.6,y:.5997,id:"605"},{x:23,y:5.9998000000000005,id:"606"},{x:21.2,y:-2.9999000000000002,id:"607"},{x:24.2,y:11.7996,id:"608"},{x:28.799999999999997,y:2.2003000000000004,id:"609"},{x:18,y:3.5995,id:"610"},{x:24.2,y:5.6000000000000005,id:"611"},{x:3.5999999999999996,y:3.7994,id:"612"},{x:23.200000000000003,y:2.8000000000000003,id:"613"},{x:24.4,y:-3.3997,id:"614"},{x:38.2,y:9.199499999999999,id:"615"},{x:36.6,y:7.4005,id:"616"},{x:38.800000000000004,y:5.9998000000000005,id:"617"},{x:38.2,y:9.800699999999999,id:"618"},{x:34.4,y:7.0007,id:"619"},{x:36.6,y:8.4,id:"620"},{x:35.199999999999996,y:1.6006,id:"621"},{x:30,y:1.4008,id:"622"},{x:28.599999999999998,y:-1.6006,id:"623"},{x:37.2,y:5.9998000000000005,id:"624"},{x:37.6,y:1.4008,id:"625"},{x:30.8,y:8.999600000000001,id:"626"},{x:30.2,y:1.8005,id:"627"},{x:33.4,y:6.1996,id:"628"},{x:30.2,y:1.1993,id:"629"},{x:29.799999999999997,y:3.9993,id:"630"},{x:34.4,y:6.599399999999999,id:"631"},{x:29.799999999999997,y:10.0006,id:"632"},{x:32.2,y:3.3997,id:"633"},{x:34.4,y:-2.0004,id:"634"},{x:36.4,y:10.4004,id:"635"},{x:30.599999999999998,y:-.3998,id:"636"},{x:31.4,y:-2.4002,id:"637"},{x:30.4,y:.1999,id:"638"},{x:37.8,y:1.6006,id:"639"},{x:38.4,y:1.1993,id:"640"},{x:32.4,y:8.2001,id:"641"},{x:38.4,y:7.2006,id:"642"},{x:38.4,y:5.2002,id:"643"},{x:32,y:-1.1993,id:"644"},{x:29.2,y:-2.8000000000000003,id:"645"},{x:30.599999999999998,y:3.7994,id:"646"},{x:44.800000000000004,y:16.9998,id:"647"},{x:30,y:5.2002,id:"648"},{x:36.8,y:6.7993,id:"649"},{x:35,y:-.1999,id:"650"},{x:36.4,y:3.7994,id:"651"},{x:38,y:5.7999,id:"652"},{x:37,y:-.1999,id:"653"},{x:34,y:-1.6006,id:"654"},{x:34.2,y:2.9999000000000002,id:"655"},{x:31.6,y:2.8000000000000003,id:"656"},{x:35.6,y:-.7996,id:"657"},{x:34.599999999999994,y:5.4001,id:"658"},{x:36,y:.7996,id:"659"},{x:30,y:8.5999,id:"660"},{x:35.199999999999996,y:8.799700000000001,id:"661"},{x:36.8,y:10.2005,id:"662"},{x:35.4,y:7.8003,id:"663"},{x:34.599999999999994,y:3.7994,id:"664"},{x:37.2,y:2.8000000000000003,id:"665"},{x:31,y:-.3998,id:"666"},{x:36.4,y:-1.1993,id:"667"},{x:37.6,y:5.0003,id:"668"},{x:34.599999999999994,y:2.6001,id:"669"},{x:32.6,y:5.4001,id:"670"},{x:34.2,y:-.1999,id:"671"},{x:34,y:-1.8005,id:"672"},{x:29.599999999999998,y:3.9993,id:"673"},{x:38.4,y:3.9993,id:"674"},{x:5.4,y:6.7993,id:"675"},{x:12.6,y:13.0005,id:"676"},{x:16.2,y:10.6003,id:"677"},{x:8,y:11.999500000000001,id:"678"},{x:18,y:10.6003,id:"679"},{x:11.799999999999999,y:8.5999,id:"680"},{x:20,y:10.8002,id:"681"},{x:13.4,y:15.4007,id:"682"},{x:9.2,y:8.5999,id:"683"},{x:16,y:13.0005,id:"684"},{x:18.4,y:13.200400000000002,id:"685"},{x:4.8,y:10.2005,id:"686"},{x:16.8,y:7.2006,id:"687"},{x:6.4,y:8.0002,id:"688"},{x:10,y:10.2005,id:"689"},{x:8,y:10.0006,id:"690"},{x:0,y:8.799700000000001,id:"691"},{x:11.4,y:8.999600000000001,id:"692"},{x:15,y:11.5997,id:"693"},{x:16,y:8.4,id:"694"},{x:17,y:9.3994,id:"695"},{x:14.799999999999999,y:11.5997,id:"696"},{x:9.6,y:15.800500000000001,id:"697"},{x:-1.6,y:13.0005,id:"698"},{x:1,y:8.999600000000001,id:"699"},{x:-3.2,y:17.1997,id:"700"},{x:-24,y:20.3995,id:"701"},{x:-12.4,y:-3.7994,id:"702"},{x:-3.4000000000000004,y:-5.4001,id:"703"},{x:-7.6,y:-.7996,id:"704"},{x:-4,y:-4.400600000000001,id:"705"},{x:.4,y:-5.7999,id:"706"},{x:4,y:.9995,id:"707"},{x:-13.600000000000001,y:-3.9993,id:"708"},{x:3.2,y:3.5995,id:"709"},{x:-3.4000000000000004,y:1.8005,id:"710"},{x:-.4,y:0,id:"711"},{x:.2,y:2.4002,id:"712"},{x:4.2,y:-4.400600000000001,id:"713"},{x:3.5999999999999996,y:-.7996,id:"714"},{x:9.2,y:-5.9998000000000005,id:"715"},{x:12,y:5.2002,id:"716"},{x:3.8,y:2.2003000000000004,id:"717"},{x:-3.8,y:.3998,id:"718"},{x:-6.4,y:-1.4008,id:"719"},{x:2.6,y:.9995,id:"720"},{x:.2,y:-.3998,id:"721"},{x:-11.4,y:.9995,id:"722"},{x:-4.3999999999999995,y:.3998,id:"723"},{x:-6.6000000000000005,y:1.6006,id:"724"},{x:33,y:-5.9998000000000005,id:"725"},{x:41.4,y:-5.7999,id:"726"},{x:42.4,y:-7.0007,id:"727"},{x:26,y:-7.8003,id:"728"},{x:42.8,y:-8.0002,id:"729"},{x:40.6,y:-4.400600000000001,id:"730"},{x:37.6,y:-.7996,id:"731"},{x:40.2,y:.7996,id:"732"},{x:40.2,y:.3998,id:"733"},{x:39.6,y:-5.9998000000000005,id:"734"},{x:40.400000000000006,y:-.7996,id:"735"},{x:45.800000000000004,y:-.7996,id:"736"},{x:46.400000000000006,y:-.3998,id:"737"},{x:38.800000000000004,y:-3.9993,id:"738"},{x:42.8,y:-5.9998000000000005,id:"739"},{x:39.2,y:1.1993,id:"740"},{x:26.6,y:-7.0007,id:"741"},{x:31,y:-5.0003,id:"742"},{x:9,y:-24.4003,id:"743"},{x:41,y:.5997,id:"744"},{x:38,y:-1.6006,id:"745"},{x:27.200000000000003,y:-11.5997,id:"746"},{x:36.6,y:-2.0004,id:"747"},{x:29.4,y:-5.0003,id:"748"},{x:28.4,y:-4.600499999999999,id:"749"},{x:42.6,y:-5.4001,id:"750"},{x:30.8,y:-3.5995,id:"751"},{x:46,y:-4.600499999999999,id:"752"},{x:30.599999999999998,y:-7.2006,id:"753"},{x:32.6,y:-7.2006,id:"754"},{x:42.6,y:-5.7999,id:"755"},{x:39.800000000000004,y:.9995,id:"756"},{x:39.4,y:-5.4001,id:"757"},{x:35.6,y:-4.8004,id:"758"},{x:25.4,y:-7.2006,id:"759"},{x:41.8,y:-3.5995,id:"760"},{x:42,y:-5.6000000000000005,id:"761"},{x:34,y:-2.8000000000000003,id:"762"},{x:29.2,y:-3.1997999999999998,id:"763"},{x:33.6,y:-3.1997999999999998,id:"764"},{x:40.400000000000006,y:-1.1993,id:"765"},{x:45.4,y:-1.6006,id:"766"},{x:47.199999999999996,y:-5.2002,id:"767"},{x:42,y:-2.6001,id:"768"},{x:39.6,y:-3.1997999999999998,id:"769"},{x:37.2,y:-.9995,id:"770"},{x:40,y:-.1999,id:"771"},{x:40.2,y:-7.2006,id:"772"},{x:40,y:-3.1997999999999998,id:"773"},{x:25.2,y:-5.9998000000000005,id:"774"},{x:26.8,y:-6.3995,id:"775"},{x:30.599999999999998,y:-5.4001,id:"776"},{x:36.8,y:-.9995,id:"777"},{x:39.6,y:-5.4001,id:"778"},{x:46.2,y:-3.9993,id:"779"},{x:33.800000000000004,y:-5.6000000000000005,id:"780"},{x:39.2,y:-2.6001,id:"781"},{x:17.8,y:-31.5994,id:"782"},{x:13.600000000000001,y:-30.2002,id:"783"},{x:12.8,y:-27.800000000000004,id:"784"},{x:8.799999999999999,y:-28.5995,id:"785"},{x:11,y:-27.000400000000003,id:"786"},{x:11.600000000000001,y:-22.3999,id:"787"},{x:6.6000000000000005,y:-21.2006,id:"788"},{x:7.6,y:-23.3994,id:"789"},{x:11.4,y:-21.6003,id:"790"},{x:13.4,y:-21.4005,id:"791"},{x:-4,y:-25.5997,id:"792"},{x:9,y:-31.5994,id:"793"},{x:10.6,y:-30.000300000000003,id:"794"},{x:5.4,y:-21.2006,id:"795"},{x:7.6,y:-30.599999999999998,id:"796"},{x:11.600000000000001,y:-25.999499999999998,id:"797"},{x:21,y:-29.400599999999997,id:"798"},{x:16.8,y:-27.9999,id:"799"},{x:11.600000000000001,y:-30.000300000000003,id:"800"},{x:15,y:-31.5994,id:"801"},{x:16.8,y:-29.8004,id:"802"},{x:12.4,y:-31.399500000000003,id:"803"},{x:22.6,y:-33.0002,id:"804"},{x:18.8,y:-27.800000000000004,id:"805"},{x:17.599999999999998,y:-33.0002,id:"806"},{x:15.6,y:-27.800000000000004,id:"807"},{x:22.400000000000002,y:-29.400599999999997,id:"808"},{x:23.400000000000002,y:-21.0007,id:"809"},{x:18,y:-31.5994,id:"810"},{x:13.4,y:-28.5995,id:"811"},{x:14.6,y:-31.5994,id:"812"},{x:17.4,y:-30.599999999999998,id:"813"},{x:21.2,y:-31.399500000000003,id:"814"},{x:19.400000000000002,y:-30.9998,id:"815"},{x:15.4,y:-32.2006,id:"816"},{x:11.4,y:-24.0005,id:"817"},{x:59.599999999999994,y:3.1997999999999998,id:"818"},{x:90.2,y:19.2001,id:"819"},{x:97.39999999999999,y:20.3995,id:"820"},{x:100,y:20.799300000000002,id:"821"},{x:95.6,y:19.9997,id:"822"},{x:88.8,y:15.4007,id:"823"},{x:98.2,y:27.9999,id:"824"},{x:87.8,y:14.9994,id:"825"},{x:96.39999999999999,y:23.1995,id:"826"},{x:91.60000000000001,y:18.2007,id:"827"},{x:91.8,y:24.0005,id:"828"},{x:93.8,y:20.1996,id:"829"},{x:93.60000000000001,y:24.8001,id:"830"},{x:89.4,y:18.8004,id:"831"},{x:49.4,y:-3.5995,id:"832"},{x:70.39999999999999,y:.3998,id:"833"},{x:65,y:2.2003000000000004,id:"834"},{x:72.2,y:-2.0004,id:"835"},{x:67.4,y:4.2007,id:"836"},{x:70.39999999999999,y:2.2003000000000004,id:"837"},{x:57.199999999999996,y:7.6004000000000005,id:"838"},{x:66.8,y:0,id:"839"},{x:67.60000000000001,y:1.8005,id:"840"},{x:63.4,y:2.0004,id:"841"},{x:65.8,y:1.1993,id:"842"},{x:70.39999999999999,y:3.3997,id:"843"},{x:63.2,y:2.6001,id:"844"},{x:72.8,y:20.3995,id:"845"},{x:87.4,y:10.4004,id:"846"},{x:79.80000000000001,y:13.200400000000002,id:"847"},{x:81.8,y:12.600700000000002,id:"848"},{x:85.6,y:19.400000000000002,id:"849"},{x:87,y:16.0004,id:"850"},{x:86.2,y:11.5997,id:"851"},{x:88.8,y:11.200000000000001,id:"852"},{x:86,y:16.7999,id:"853"},{x:84.2,y:16.9998,id:"854"},{x:69.19999999999999,y:14.799499999999998,id:"855"},{x:72.6,y:11.7996,id:"856"},{x:80.60000000000001,y:17.3996,id:"857"},{x:83.2,y:14.799499999999998,id:"858"},{x:41.4,y:18.8004,id:"859"},{x:39.4,y:13.999900000000002,id:"860"},{x:35.199999999999996,y:13.200400000000002,id:"861"},{x:42.4,y:18.4006,id:"862"},{x:38,y:22.9996,id:"863"},{x:37,y:13.0005,id:"864"},{x:41,y:16.9998,id:"865"},{x:42,y:16.400100000000002,id:"866"},{x:34.4,y:18.2007,id:"867"},{x:38.2,y:12.1994,id:"868"},{x:33,y:11.7996,id:"869"},{x:37.4,y:22.9996,id:"870"},{x:46.2,y:14.799499999999998,id:"871"},{x:40.2,y:24.2004,id:"872"},{x:42,y:11.5997,id:"873"},{x:39,y:13.400300000000001,id:"874"},{x:45.2,y:12.600700000000002,id:"875"},{x:41.4,y:14.599599999999999,id:"876"},{x:40,y:18.4006,id:"877"},{x:36.199999999999996,y:21.2006,id:"878"},{x:41.4,y:13.400300000000001,id:"879"},{x:39,y:17.3996,id:"880"},{x:32.800000000000004,y:11.200000000000001,id:"881"},{x:39.6,y:20.1996,id:"882"},{x:33.6,y:20.799300000000002,id:"883"},{x:37.4,y:15.800500000000001,id:"884"},{x:39.6,y:11.0001,id:"885"},{x:25.8,y:29.400599999999997,id:"886"},{x:29.799999999999997,y:27.4002,id:"887"},{x:38,y:14.799499999999998,id:"888"},{x:40.400000000000006,y:12.1994,id:"889"},{x:44.2,y:14.9994,id:"890"},{x:47.199999999999996,y:14.399700000000001,id:"891"},{x:46.800000000000004,y:16.400100000000002,id:"892"},{x:42,y:11.0001,id:"893"},{x:43.8,y:11.0001,id:"894"},{x:38,y:21.6003,id:"895"},{x:37.4,y:16.9998,id:"896"},{x:43,y:16.0004,id:"897"},{x:26.200000000000003,y:29.8004,id:"898"},{x:39,y:16.7999,id:"899"},{x:41.4,y:23.8007,id:"900"},{x:39.6,y:23.3994,id:"901"},{x:39,y:17.799400000000002,id:"902"},{x:8.799999999999999,y:22.599800000000002,id:"903"},{x:5.6000000000000005,y:26.400800000000004,id:"904"},{x:12,y:25.5997,id:"905"},{x:12.2,y:31.1996,id:"906"},{x:4.3999999999999995,y:23.8007,id:"907"},{x:10,y:27.800000000000004,id:"908"},{x:7.000000000000001,y:23.3994,id:"909"},{x:11.4,y:19.9997,id:"910"},{x:1,y:27.000400000000003,id:"911"},{x:-4.8,y:28.5995,id:"912"},{x:-2.4,y:30.9998,id:"913"},{x:3,y:28.3997,id:"914"},{x:7.3999999999999995,y:21.2006,id:"915"},{x:6.2,y:17.1997,id:"916"},{x:12.4,y:27.800000000000004,id:"917"},{x:6,y:19.400000000000002,id:"918"},{x:12.2,y:27.800000000000004,id:"919"},{x:7.8,y:21.2006,id:"920"},{x:-.6,y:23.8007,id:"921"},{x:4.3999999999999995,y:30.400100000000002,id:"922"},{x:10.6,y:23.1995,id:"923"},{x:11.4,y:19.7998,id:"924"},{x:5.800000000000001,y:24.6002,id:"925"},{x:29.4,y:20.3995,id:"926"},{x:12,y:22.0001,id:"927"},{x:11.600000000000001,y:18.8004,id:"928"},{x:7.6,y:27.4002,id:"929"},{x:2.1999999999999997,y:30.000300000000003,id:"930"},{x:5.6000000000000005,y:21.2006,id:"931"},{x:15,y:18.6005,id:"932"},{x:15.4,y:21.4005,id:"933"},{x:3.2,y:22.3999,id:"934"},{x:2.6,y:29.6005,id:"935"},{x:7.000000000000001,y:20.1996,id:"936"},{x:8,y:27.6001,id:"937"},{x:-2,y:32.6004,id:"938"},{x:9.2,y:23.5992,id:"939"},{x:10,y:21.2006,id:"940"},{x:7.199999999999999,y:23.3994,id:"941"},{x:26.8,y:16.0004,id:"942"},{x:22.2,y:17.3996,id:"943"},{x:2.6,y:28.799400000000002,id:"944"},{x:4.8,y:22.3999,id:"945"},{x:18.6,y:-23.1995,id:"946"},{x:15,y:-25.999499999999998,id:"947"},{x:16.6,y:-24.2004,id:"948"},{x:21.2,y:-25.199899999999996,id:"949"},{x:17,y:-17.999299999999998,id:"950"},{x:24.4,y:-17.1997,id:"951"},{x:26.400000000000002,y:-13.999900000000002,id:"952"},{x:18.8,y:-15.4007,id:"953"},{x:.6,y:-5.9998000000000005,id:"954"},{x:22.400000000000002,y:-14.199800000000002,id:"955"},{x:20.8,y:-14.399700000000001,id:"956"},{x:26.6,y:-19.2001,id:"957"},{x:20.200000000000003,y:-19.7998,id:"958"},{x:23,y:-13.600200000000001,id:"959"},{x:23.799999999999997,y:-28.3997,id:"960"},{x:21,y:-22.7997,id:"961"},{x:17.4,y:-18.8004,id:"962"},{x:23.200000000000003,y:-15.6006,id:"963"},{x:23.799999999999997,y:-18.4006,id:"964"},{x:18.2,y:-20.799300000000002,id:"965"},{x:23.799999999999997,y:-23.8007,id:"966"},{x:17.8,y:-25.7996,id:"967"},{x:24.2,y:-16.0004,id:"968"},{x:23,y:-24.4003,id:"969"},{x:17,y:-18.2007,id:"970"},{x:21.6,y:-16.6,id:"971"},{x:19.2,y:-20.799300000000002,id:"972"},{x:10.2,y:-2.2003000000000004,id:"973"},{x:3.5999999999999996,y:4.2007,id:"974"},{x:20,y:-5.4001,id:"975"},{x:14.2,y:1.6006,id:"976"},{x:10.6,y:1.1993,id:"977"},{x:8.799999999999999,y:-5.4001,id:"978"},{x:7.8,y:-5.4001,id:"979"},{x:22.2,y:-5.7999,id:"980"},{x:9.2,y:-.1999,id:"981"},{x:17.599999999999998,y:0,id:"982"},{x:9.4,y:-1.6006,id:"983"},{x:4.8,y:1.4008,id:"984"},{x:19,y:0,id:"985"},{x:6.6000000000000005,y:1.6006,id:"986"},{x:7.199999999999999,y:-5.4001,id:"987"},{x:22.400000000000002,y:-5.2002,id:"988"},{x:9.8,y:-7.8003,id:"989"},{x:6.4,y:.7996,id:"990"},{x:19.8,y:-.5997,id:"991"},{x:16,y:-4.2007,id:"992"},{x:15.2,y:-3.3997,id:"993"},{x:12.4,y:-5.2002,id:"994"},{x:12.6,y:5.9998000000000005,id:"995"},{x:11,y:.7996,id:"996"},{x:4.3999999999999995,y:.5997,id:"997"},{x:15.2,y:-.3998,id:"998"},{x:5.6000000000000005,y:-5.0003,id:"999"},{x:19.400000000000002,y:-.5997,id:"1000"},{x:12.4,y:-7.8003,id:"1001"},{x:14.2,y:-7.2006,id:"1002"},{x:4.6,y:-5.9998000000000005,id:"1003"},{x:19.400000000000002,y:-3.1997999999999998,id:"1004"},{x:4.6,y:-2.6001,id:"1005"},{x:6.800000000000001,y:-2.2003000000000004,id:"1006"},{x:4.6,y:3.1997999999999998,id:"1007"},{x:17.2,y:-1.4008,id:"1008"},{x:15.6,y:-5.0003,id:"1009"},{x:20.4,y:-2.8000000000000003,id:"1010"},{x:17,y:-.7996,id:"1011"},{x:9.6,y:3.5995,id:"1012"},{x:9,y:-1.4008,id:"1013"},{x:12.4,y:-.1999,id:"1014"},{x:15.8,y:3.1997999999999998,id:"1015"},{x:23.400000000000002,y:-6.7993,id:"1016"},{x:22.400000000000002,y:-7.6004000000000005,id:"1017"},{x:7.000000000000001,y:-5.6000000000000005,id:"1018"},{x:14.399999999999999,y:3.5995,id:"1019"},{x:20.599999999999998,y:-7.0007,id:"1020"},{x:5.4,y:-1.8005,id:"1021"},{x:10,y:-7.2006,id:"1022"},{x:-40.8,y:23.8007,id:"1023"},{x:-43.4,y:25.3998,id:"1024"},{x:-46,y:22.9996,id:"1025"},{x:-55.800000000000004,y:30.000300000000003,id:"1026"},{x:-54,y:24.0005,id:"1027"},{x:-63.800000000000004,y:28.5995,id:"1028"},{x:-64.2,y:30.7999,id:"1029"},{x:-65.2,y:32.4005,id:"1030"},{x:-57.99999999999999,y:29.6005,id:"1031"},{x:-56.99999999999999,y:26.8005,id:"1032"},{x:-46,y:24.2004,id:"1033"},{x:-37.2,y:26.400800000000004,id:"1034"},{x:-59.199999999999996,y:25.3998,id:"1035"},{x:-47.8,y:24.2004,id:"1036"},{x:-14.000000000000002,y:7.8003,id:"1037"},{x:.2,y:4.8004,id:"1038"},{x:-3.5999999999999996,y:10.4004,id:"1039"},{x:6,y:8.799700000000001,id:"1040"},{x:-10.6,y:10.0006,id:"1041"},{x:-1.2,y:9.199499999999999,id:"1042"},{x:77,y:11.3998,id:"1043"},{x:78.2,y:10.6003,id:"1044"},{x:-8.6,y:8.5999,id:"1045"},{x:-3.2,y:6.1996,id:"1046"},{x:-10,y:8.0002,id:"1047"},{x:-5.6000000000000005,y:10.8002,id:"1048"},{x:-5.6000000000000005,y:9.800699999999999,id:"1049"},{x:-.8,y:8.2001,id:"1050"},{x:-27.6,y:10.8002,id:"1051"},{x:-70,y:7.2006,id:"1052"},{x:-60.199999999999996,y:.5997,id:"1053"},{x:-82.19999999999999,y:.9995,id:"1054"},{x:-78.8,y:6.3995,id:"1055"},{x:-84.8,y:.9995,id:"1056"},{x:85.8,y:14.399700000000001,id:"1057"},{x:83.2,y:14.9994,id:"1058"},{x:75.6,y:2.2003000000000004,id:"1059"},{x:74,y:4.600499999999999,id:"1060"},{x:73,y:4.2007,id:"1061"},{x:73,y:3.9993,id:"1062"},{x:74,y:5.4001,id:"1063"},{x:74.8,y:8.5999,id:"1064"},{x:66.4,y:12.600700000000002,id:"1065"},{x:72.8,y:6.3995,id:"1066"},{x:71.39999999999999,y:4.600499999999999,id:"1067"},{x:73.8,y:.5997,id:"1068"},{x:73.8,y:2.2003000000000004,id:"1069"},{x:73.6,y:6.3995,id:"1070"},{x:71.8,y:8.799700000000001,id:"1071"},{x:71.8,y:6.7993,id:"1072"},{x:76.6,y:7.4005,id:"1073"},{x:75.2,y:6.599399999999999,id:"1074"},{x:72.2,y:14.9994,id:"1075"},{x:-41,y:-18.8004,id:"1076"},{x:-43,y:-13.400300000000001,id:"1077"},{x:-29.599999999999998,y:-22.2,id:"1078"},{x:-34.4,y:-21.4005,id:"1079"},{x:-37.8,y:-8.2001,id:"1080"},{x:-38.800000000000004,y:-16.6,id:"1081"},{x:-35.199999999999996,y:-14.399700000000001,id:"1082"},{x:-26.400000000000002,y:-14.599599999999999,id:"1083"},{x:-34.599999999999994,y:-18.8004,id:"1084"},{x:-42.199999999999996,y:-12.800600000000001,id:"1085"},{x:-27,y:-22.0001,id:"1086"},{x:-21,y:-18.2007,id:"1087"},{x:-21.8,y:-23.8007,id:"1088"},{x:-32.6,y:-10.6003,id:"1089"},{x:-46,y:-17.3996,id:"1090"},{x:-38.2,y:-23.1995,id:"1091"},{x:-34.2,y:-8.4,id:"1092"},{x:77.8,y:13.600200000000001,id:"1093"},{x:70.8,y:12.600700000000002,id:"1094"},{x:61.199999999999996,y:11.5997,id:"1095"},{x:72.39999999999999,y:16.0004,id:"1096"},{x:76,y:13.200400000000002,id:"1097"},{x:77.2,y:14.199800000000002,id:"1098"},{x:70.39999999999999,y:14.9994,id:"1099"},{x:70.39999999999999,y:11.999500000000001,id:"1100"},{x:68.8,y:11.7996,id:"1101"},{x:71.39999999999999,y:11.200000000000001,id:"1102"},{x:59.8,y:12.600700000000002,id:"1103"},{x:67.4,y:14.599599999999999,id:"1104"},{x:67.80000000000001,y:11.3998,id:"1105"},{x:57.8,y:12.1994,id:"1106"},{x:73.2,y:15.1993,id:"1107"},{x:60.6,y:11.200000000000001,id:"1108"},{x:73.6,y:13.999900000000002,id:"1109"},{x:79.2,y:19.5999,id:"1110"},{x:72.8,y:12.600700000000002,id:"1111"},{x:73.4,y:14.599599999999999,id:"1112"},{x:78,y:13.600200000000001,id:"1113"},{x:69.39999999999999,y:13.400300000000001,id:"1114"},{x:73.4,y:10.6003,id:"1115"},{x:62,y:11.5997,id:"1116"},{x:77.8,y:11.999500000000001,id:"1117"},{x:59.4,y:15.4007,id:"1118"},{x:62.6,y:14.399700000000001,id:"1119"},{x:55.60000000000001,y:11.7996,id:"1120"},{x:68.4,y:16.0004,id:"1121"},{x:76.2,y:9.800699999999999,id:"1122"},{x:78.4,y:15.1993,id:"1123"},{x:73.6,y:14.9994,id:"1124"},{x:77.60000000000001,y:12.1994,id:"1125"},{x:78.60000000000001,y:19.400000000000002,id:"1126"},{x:68.2,y:16.400100000000002,id:"1127"},{x:71.2,y:15.1993,id:"1128"},{x:76.6,y:6.3995,id:"1129"},{x:77.2,y:8.0002,id:"1130"},{x:70,y:5.4001,id:"1131"},{x:68.8,y:4.400600000000001,id:"1132"},{x:68.8,y:-6.1996,id:"1133"},{x:65.4,y:15.6006,id:"1134"},{x:71.6,y:14.599599999999999,id:"1135"},{x:66,y:14.599599999999999,id:"1136"},{x:66,y:13.0005,id:"1137"},{x:61.6,y:16.200300000000002,id:"1138"},{x:73.8,y:14.399700000000001,id:"1139"},{x:69.8,y:3.7994,id:"1140"},{x:63.4,y:-16.200300000000002,id:"1141"},{x:59,y:-16.9998,id:"1142"},{x:57.599999999999994,y:-9.5993,id:"1143"},{x:62.4,y:-14.9994,id:"1144"},{x:61,y:-12.800600000000001,id:"1145"},{x:46.6,y:-10.8002,id:"1146"},{x:52,y:-10.8002,id:"1147"},{x:60.8,y:-16.9998,id:"1148"},{x:67.60000000000001,y:-14.199800000000002,id:"1149"},{x:64,y:-9.3994,id:"1150"},{x:60.4,y:-15.800500000000001,id:"1151"},{x:51.2,y:-10.6003,id:"1152"},{x:59.199999999999996,y:-11.0001,id:"1153"},{x:61.6,y:-8.5999,id:"1154"},{x:56.00000000000001,y:-8.4,id:"1155"},{x:48.6,y:-10.6003,id:"1156"},{x:54,y:-12.3993,id:"1157"},{x:62,y:-14.9994,id:"1158"},{x:67.80000000000001,y:-13.600200000000001,id:"1159"},{x:57.99999999999999,y:-6.7993,id:"1160"},{x:57.8,y:-13.999900000000002,id:"1161"},{x:58.599999999999994,y:-10.8002,id:"1162"},{x:61.4,y:-12.1994,id:"1163"},{x:53.400000000000006,y:-10.6003,id:"1164"},{x:64.2,y:-8.0002,id:"1165"},{x:50.4,y:-10.6003,id:"1166"},{x:63.4,y:-16.0004,id:"1167"},{x:67,y:-10.6003,id:"1168"},{x:61.6,y:-11.3998,id:"1169"},{x:64.4,y:-15.4007,id:"1170"},{x:45.4,y:-11.5997,id:"1171"},{x:-7.3999999999999995,y:-15.4007,id:"1172"},{x:68.4,y:-6.1996,id:"1173"},{x:68.4,y:-11.3998,id:"1174"},{x:70.8,y:-10.8002,id:"1175"},{x:52.800000000000004,y:-11.5997,id:"1176"},{x:59.199999999999996,y:-10.0006,id:"1177"},{x:63.2,y:-13.400300000000001,id:"1178"},{x:64.4,y:-8.5999,id:"1179"},{x:64.4,y:-15.1993,id:"1180"},{x:63,y:-9.800699999999999,id:"1181"},{x:65.4,y:-10.8002,id:"1182"},{x:44,y:-12.600700000000002,id:"1183"},{x:60.6,y:-8.799700000000001,id:"1184"},{x:66,y:-12.1994,id:"1185"},{x:51.4,y:-13.200400000000002,id:"1186"},{x:57.4,y:-9.800699999999999,id:"1187"},{x:53,y:-12.600700000000002,id:"1188"},{x:56.599999999999994,y:-13.400300000000001,id:"1189"},{x:61.6,y:-13.400300000000001,id:"1190"},{x:59,y:-14.599599999999999,id:"1191"},{x:53.400000000000006,y:-13.8,id:"1192"},{x:50.4,y:-10.0006,id:"1193"},{x:41.6,y:-13.200400000000002,id:"1194"},{x:56.2,y:-12.1994,id:"1195"},{x:53.6,y:-8.799700000000001,id:"1196"},{x:47.4,y:-11.200000000000001,id:"1197"},{x:67.80000000000001,y:-13.0005,id:"1198"},{x:65,y:-7.0007,id:"1199"},{x:53.400000000000006,y:-8.4,id:"1200"},{x:54.400000000000006,y:-10.8002,id:"1201"},{x:67.80000000000001,y:-10.2005,id:"1202"},{x:46,y:-12.3993,id:"1203"},{x:53.400000000000006,y:-13.400300000000001,id:"1204"},{x:62.4,y:-8.2001,id:"1205"},{x:-16.400000000000002,y:28.9993,id:"1206"},{x:-19.2,y:27.800000000000004,id:"1207"},{x:-4.2,y:32.2006,id:"1208"},{x:-19.8,y:30.7999,id:"1209"},{x:-10.8,y:28.9993,id:"1210"},{x:-6.6000000000000005,y:33.7997,id:"1211"},{x:-20.200000000000003,y:33.5999,id:"1212"},{x:49,y:4.8004,id:"1213"},{x:41.6,y:4.2007,id:"1214"},{x:43.6,y:5.2002,id:"1215"},{x:41.199999999999996,y:6.1996,id:"1216"},{x:41,y:5.4001,id:"1217"},{x:50.8,y:2.4002,id:"1218"},{x:39.800000000000004,y:7.4005,id:"1219"},{x:47.8,y:7.4005,id:"1220"},{x:46.800000000000004,y:1.4008,id:"1221"},{x:53.2,y:11.0001,id:"1222"},{x:51,y:8.999600000000001,id:"1223"},{x:50.8,y:7.4005,id:"1224"},{x:48.4,y:2.0004,id:"1225"},{x:46.400000000000006,y:7.4005,id:"1226"},{x:46.2,y:3.5995,id:"1227"},{x:53.6,y:4.8004,id:"1228"},{x:53.2,y:9.5993,id:"1229"},{x:39.6,y:3.3997,id:"1230"},{x:53,y:8.5999,id:"1231"},{x:42.6,y:4.8004,id:"1232"},{x:49.2,y:5.9998000000000005,id:"1233"},{x:47.4,y:2.8000000000000003,id:"1234"},{x:39.4,y:1.6006,id:"1235"},{x:45.4,y:4.400600000000001,id:"1236"},{x:43.2,y:2.0004,id:"1237"},{x:53.400000000000006,y:7.4005,id:"1238"},{x:45.800000000000004,y:5.4001,id:"1239"},{x:49.2,y:5.2002,id:"1240"},{x:52.400000000000006,y:5.4001,id:"1241"},{x:45,y:5.4001,id:"1242"},{x:45.2,y:9.800699999999999,id:"1243"},{x:48.199999999999996,y:9.3994,id:"1244"},{x:43,y:8.999600000000001,id:"1245"},{x:52.6,y:10.2005,id:"1246"},{x:43.6,y:8.999600000000001,id:"1247"},{x:41,y:3.1997999999999998,id:"1248"},{x:39.6,y:4.8004,id:"1249"},{x:48.8,y:4.2007,id:"1250"},{x:41.4,y:2.0004,id:"1251"},{x:40.8,y:3.9993,id:"1252"},{x:39.800000000000004,y:2.0004,id:"1253"},{x:47.8,y:2.2003000000000004,id:"1254"},{x:51.800000000000004,y:10.6003,id:"1255"},{x:45.6,y:2.8000000000000003,id:"1256"},{x:40.6,y:10.2005,id:"1257"},{x:47.8,y:1.8005,id:"1258"},{x:52.2,y:10.6003,id:"1259"},{x:44.800000000000004,y:6.3995,id:"1260"},{x:49,y:4.2007,id:"1261"},{x:44.800000000000004,y:5.4001,id:"1262"},{x:45.800000000000004,y:5.9998000000000005,id:"1263"},{x:39.6,y:9.3994,id:"1264"},{x:50.2,y:5.0003,id:"1265"},{x:50.6,y:10.0006,id:"1266"},{x:42.4,y:8.4,id:"1267"},{x:50.8,y:4.2007,id:"1268"},{x:45.2,y:7.4005,id:"1269"},{x:51,y:5.7999,id:"1270"},{x:46.800000000000004,y:9.199499999999999,id:"1271"},{x:62.2,y:3.1997999999999998,id:"1272"},{x:51.6,y:-3.3997,id:"1273"},{x:41.6,y:8.0002,id:"1274"},{x:49.2,y:8.4,id:"1275"},{x:46.400000000000006,y:9.3994,id:"1276"},{x:39.4,y:2.0004,id:"1277"},{x:45.2,y:.9995,id:"1278"},{x:55.00000000000001,y:8.5999,id:"1279"},{x:43.8,y:2.8000000000000003,id:"1280"},{x:53.6,y:-1.6006,id:"1281"},{x:-17.4,y:-7.6004000000000005,id:"1282"},{x:-2.8000000000000003,y:-17.999299999999998,id:"1283"},{x:-1.4000000000000001,y:-16.400100000000002,id:"1284"},{x:.8,y:-12.600700000000002,id:"1285"},{x:-2.1999999999999997,y:-8.5999,id:"1286"},{x:-12.8,y:-12.3993,id:"1287"},{x:-8.799999999999999,y:-7.0007,id:"1288"},{x:1.7999999999999998,y:-10.6003,id:"1289"},{x:-6.4,y:-16.7999,id:"1290"},{x:-5,y:-13.0005,id:"1291"},{x:-5.800000000000001,y:-13.600200000000001,id:"1292"},{x:-3.5999999999999996,y:-12.600700000000002,id:"1293"},{x:-1.6,y:-10.0006,id:"1294"},{x:-10.6,y:-11.0001,id:"1295"},{x:3.8,y:-6.7993,id:"1296"},{x:-6.800000000000001,y:-8.4,id:"1297"},{x:3.2,y:-16.9998,id:"1298"},{x:-4.3999999999999995,y:-7.0007,id:"1299"},{x:-2,y:-8.5999,id:"1300"},{x:-13.8,y:-14.9994,id:"1301"},{x:-15.4,y:-7.8003,id:"1302"},{x:2.1999999999999997,y:-8.799700000000001,id:"1303"},{x:0,y:-14.199800000000002,id:"1304"},{x:-7.000000000000001,y:-14.9994,id:"1305"},{x:-.4,y:-11.0001,id:"1306"},{x:-5.6000000000000005,y:-13.0005,id:"1307"},{x:-3.2,y:-8.5999,id:"1308"},{x:-2.6,y:-14.9994,id:"1309"},{x:2.4,y:-6.599399999999999,id:"1310"},{x:1.7999999999999998,y:-9.800699999999999,id:"1311"},{x:-4.3999999999999995,y:-14.799499999999998,id:"1312"},{x:-97.2,y:20.1996,id:"1313"},{x:-93.60000000000001,y:23.5992,id:"1314"},{x:-98.8,y:25.5997,id:"1315"},{x:-99.8,y:16.200300000000002,id:"1316"},{x:-95.6,y:18.6005,id:"1317"},{x:-86.8,y:19.0002,id:"1318"},{x:-99.6,y:13.0005,id:"1319"},{x:-95.6,y:21.0007,id:"1320"},{x:-90.4,y:24.4003,id:"1321"},{x:-93.4,y:11.7996,id:"1322"},{x:-96.6,y:21.6003,id:"1323"},{x:-98.6,y:23.5992,id:"1324"},{x:-82.6,y:25.199899999999996,id:"1325"},{x:-87.4,y:24.0005,id:"1326"},{x:-95,y:27.2003,id:"1327"},{x:-79.2,y:25.7996,id:"1328"},{x:-77.4,y:22.7997,id:"1329"},{x:66.60000000000001,y:5.2002,id:"1330"},{x:61.4,y:5.7999,id:"1331"},{x:59.599999999999994,y:5.6000000000000005,id:"1332"},{x:65,y:5.6000000000000005,id:"1333"},{x:72.2,y:3.7994,id:"1334"},{x:57.99999999999999,y:8.5999,id:"1335"},{x:65.4,y:8.2001,id:"1336"},{x:66.60000000000001,y:5.6000000000000005,id:"1337"},{x:58.8,y:6.599399999999999,id:"1338"},{x:55.60000000000001,y:2.8000000000000003,id:"1339"},{x:55.60000000000001,y:8.2001,id:"1340"},{x:56.99999999999999,y:5.6000000000000005,id:"1341"},{x:54.800000000000004,y:6.7993,id:"1342"},{x:66,y:11.0001,id:"1343"},{x:68.2,y:4.400600000000001,id:"1344"},{x:62.4,y:5.2002,id:"1345"},{x:56.00000000000001,y:4.400600000000001,id:"1346"},{x:72.2,y:7.2006,id:"1347"},{x:57.8,y:4.600499999999999,id:"1348"},{x:55.60000000000001,y:4.2007,id:"1349"},{x:66,y:8.999600000000001,id:"1350"},{x:56.00000000000001,y:5.9998000000000005,id:"1351"},{x:67.2,y:7.6004000000000005,id:"1352"},{x:56.599999999999994,y:9.199499999999999,id:"1353"},{x:57.599999999999994,y:8.799700000000001,id:"1354"},{x:58.8,y:10.8002,id:"1355"},{x:56.2,y:3.5995,id:"1356"},{x:69.19999999999999,y:3.5995,id:"1357"},{x:55.00000000000001,y:5.0003,id:"1358"},{x:71.2,y:9.199499999999999,id:"1359"},{x:72.2,y:4.600499999999999,id:"1360"},{x:55.400000000000006,y:5.4001,id:"1361"},{x:68.4,y:5.6000000000000005,id:"1362"},{x:70.6,y:8.999600000000001,id:"1363"},{x:68,y:3.9993,id:"1364"},{x:64.4,y:11.0001,id:"1365"},{x:59,y:4.400600000000001,id:"1366"},{x:46.6,y:-14.9994,id:"1367"},{x:52,y:-20.799300000000002,id:"1368"},{x:55.800000000000004,y:-20.599400000000003,id:"1369"},{x:45.800000000000004,y:-14.399700000000001,id:"1370"},{x:52.800000000000004,y:-18.6005,id:"1371"},{x:52.800000000000004,y:-20.1996,id:"1372"},{x:51.6,y:-16.7999,id:"1373"},{x:46.400000000000006,y:-13.600200000000001,id:"1374"},{x:56.00000000000001,y:-20.799300000000002,id:"1375"},{x:53.2,y:-22.9996,id:"1376"},{x:56.599999999999994,y:-16.0004,id:"1377"},{x:57.199999999999996,y:-18.6005,id:"1378"},{x:53.800000000000004,y:-14.799499999999998,id:"1379"},{x:45,y:-13.999900000000002,id:"1380"},{x:54.6,y:-16.9998,id:"1381"},{x:55.2,y:-13.200400000000002,id:"1382"},{x:50.4,y:-15.800500000000001,id:"1383"},{x:-6.2,y:16.400100000000002,id:"1384"},{x:-4.6,y:21.8002,id:"1385"},{x:-8,y:17.1997,id:"1386"},{x:-27.800000000000004,y:19.7998,id:"1387"},{x:-24.4,y:20.599400000000003,id:"1388"},{x:-25.2,y:18.8004,id:"1389"},{x:-5.4,y:14.399700000000001,id:"1390"},{x:35,y:-13.200400000000002,id:"1391"},{x:29.599999999999998,y:-7.6004000000000005,id:"1392"},{x:40,y:-10.2005,id:"1393"},{x:32.800000000000004,y:-11.5997,id:"1394"},{x:24.2,y:-9.199499999999999,id:"1395"},{x:42.199999999999996,y:-10.6003,id:"1396"},{x:37.4,y:-8.2001,id:"1397"},{x:22.400000000000002,y:-9.5993,id:"1398"},{x:35.6,y:-10.8002,id:"1399"},{x:39.2,y:-10.8002,id:"1400"},{x:42.8,y:-9.5993,id:"1401"},{x:46.800000000000004,y:-8.0002,id:"1402"},{x:37.6,y:-13.200400000000002,id:"1403"},{x:30.8,y:-8.799700000000001,id:"1404"},{x:25.2,y:-12.3993,id:"1405"},{x:26.8,y:-11.0001,id:"1406"},{x:32.2,y:-8.799700000000001,id:"1407"},{x:45,y:-10.0006,id:"1408"},{x:35.8,y:-10.0006,id:"1409"},{x:26.6,y:-12.3993,id:"1410"},{x:31.6,y:-10.0006,id:"1411"},{x:29.799999999999997,y:-9.3994,id:"1412"},{x:35,y:-9.199499999999999,id:"1413"},{x:23.400000000000002,y:-10.4004,id:"1414"},{x:33,y:-8.2001,id:"1415"},{x:31.6,y:-10.2005,id:"1416"},{x:31.6,y:-11.7996,id:"1417"},{x:24.8,y:-10.2005,id:"1418"},{x:45.800000000000004,y:-9.199499999999999,id:"1419"},{x:44.4,y:-8.999600000000001,id:"1420"},{x:23.200000000000003,y:-10.0006,id:"1421"},{x:29.599999999999998,y:-8.5999,id:"1422"},{x:46.400000000000006,y:-8.999600000000001,id:"1423"},{x:36.199999999999996,y:-12.800600000000001,id:"1424"},{x:24.2,y:-12.600700000000002,id:"1425"},{x:23.200000000000003,y:-11.200000000000001,id:"1426"},{x:42.199999999999996,y:-10.0006,id:"1427"},{x:43.6,y:-8.799700000000001,id:"1428"},{x:23.799999999999997,y:-11.200000000000001,id:"1429"},{x:40.6,y:-10.6003,id:"1430"},{x:25.4,y:-11.7996,id:"1431"},{x:46.400000000000006,y:-7.8003,id:"1432"},{x:28.199999999999996,y:-8.5999,id:"1433"},{x:23.400000000000002,y:-8.799700000000001,id:"1434"},{x:30.599999999999998,y:-12.3993,id:"1435"},{x:20.599999999999998,y:-12.3993,id:"1436"},{x:36.6,y:-9.199499999999999,id:"1437"},{x:24.8,y:-11.0001,id:"1438"},{x:21,y:-13.0005,id:"1439"},{x:28.999999999999996,y:-8.4,id:"1440"},{x:34.599999999999994,y:-10.4004,id:"1441"},{x:20.8,y:-15.6006,id:"1442"},{x:27.6,y:-11.7996,id:"1443"},{x:63.6,y:.5997,id:"1444"},{x:62.4,y:-.1999,id:"1445"},{x:22.400000000000002,y:-12.800600000000001,id:"1446"},{x:47.599999999999994,y:-8.999600000000001,id:"1447"},{x:36.6,y:-8.999600000000001,id:"1448"},{x:-.4,y:-29.2007,id:"1449"},{x:3.8,y:-23.1995,id:"1450"},{x:-5.2,y:-27.2003,id:"1451"},{x:4.6,y:-26.400800000000004,id:"1452"},{x:-6.6000000000000005,y:-30.000300000000003,id:"1453"},{x:-5.2,y:-30.400100000000002,id:"1454"},{x:-8,y:-21.4005,id:"1455"},{x:.8,y:-21.6003,id:"1456"},{x:-8.200000000000001,y:-27.2003,id:"1457"},{x:-4.8,y:-25.3998,id:"1458"},{x:-9.2,y:-16.9998,id:"1459"},{x:-7.3999999999999995,y:-29.8004,id:"1460"},{x:1,y:-34.1995,id:"1461"},{x:-4,y:-27.800000000000004,id:"1462"},{x:3.8,y:-33.4,id:"1463"},{x:-3.5999999999999996,y:-35.2005,id:"1464"},{x:-12.6,y:-25.7996,id:"1465"},{x:-22.400000000000002,y:-8.0002,id:"1466"},{x:-15.2,y:-24.4003,id:"1467"},{x:-12,y:-31.5994,id:"1468"},{x:-5.4,y:-28.799400000000002,id:"1469"},{x:-17,y:-25.999499999999998,id:"1470"},{x:-7.8,y:-44.4,id:"1471"},{x:-4,y:-35.0006,id:"1472"},{x:-12.4,y:-25.7996,id:"1473"},{x:-12.6,y:-38.6002,id:"1474"},{x:-4.2,y:-27.2003,id:"1475"},{x:6.4,y:-19.5999,id:"1476"},{x:-5.2,y:-21.8002,id:"1477"},{x:6.800000000000001,y:-29.8004,id:"1478"},{x:-3,y:-28.9993,id:"1479"},{x:-1.7999999999999998,y:-32.6004,id:"1480"},{x:-12.4,y:-22.7997,id:"1481"},{x:-2.6,y:-19.2001,id:"1482"},{x:4.8,y:-27.800000000000004,id:"1483"},{x:-1.7999999999999998,y:-29.6005,id:"1484"},{x:-4.8,y:-35.4004,id:"1485"},{x:-12.2,y:-30.599999999999998,id:"1486"},{x:-8.200000000000001,y:-32.0007,id:"1487"},{x:-4.8,y:-17.799400000000002,id:"1488"},{x:2.8000000000000003,y:-31.1996,id:"1489"},{x:-6,y:-29.6005,id:"1490"},{x:-5.2,y:-18.4006,id:"1491"},{x:1,y:-19.7998,id:"1492"},{x:1.4000000000000001,y:-30.2002,id:"1493"},{x:-4,y:-37.399300000000004,id:"1494"},{x:4.2,y:-25.199899999999996,id:"1495"},{x:-1.7999999999999998,y:-23.8007,id:"1496"},{x:-2.1999999999999997,y:-28.799400000000002,id:"1497"},{x:.2,y:-20.799300000000002,id:"1498"},{x:.4,y:-21.8002,id:"1499"},{x:-.6,y:-22.0001,id:"1500"},{x:1.6,y:-22.2,id:"1501"},{x:-23.799999999999997,y:-13.400300000000001,id:"1502"},{x:-21.2,y:-13.400300000000001,id:"1503"},{x:-1.4000000000000001,y:-18.2007,id:"1504"},{x:-3,y:-22.7997,id:"1505"},{x:3.5999999999999996,y:-27.9999,id:"1506"},{x:-5,y:-25.199899999999996,id:"1507"},{x:1.7999999999999998,y:-31.5994,id:"1508"},{x:-7.6,y:-34.3994,id:"1509"},{x:-5.6000000000000005,y:-32.6004,id:"1510"},{x:2.6,y:-24.6002,id:"1511"},{x:3.4000000000000004,y:-21.4005,id:"1512"},{x:-15.2,y:-22.2,id:"1513"},{x:-21,y:-16.6,id:"1514"},{x:4,y:-30.400100000000002,id:"1515"},{x:2,y:-22.599800000000002,id:"1516"},{x:-4.3999999999999995,y:-30.9998,id:"1517"},{x:-2.8000000000000003,y:-31.1996,id:"1518"},{x:6.6000000000000005,y:-27.6001,id:"1519"},{x:-9.2,y:-33.0002,id:"1520"},{x:-6.2,y:-26.199299999999997,id:"1521"},{x:-.4,y:-35.600300000000004,id:"1522"},{x:.6,y:-28.5995,id:"1523"},{x:1.7999999999999998,y:-27.6001,id:"1524"},{x:-.2,y:-30.599999999999998,id:"1525"},{x:-1,y:-29.6005,id:"1526"},{x:-.8,y:-33.2001,id:"1527"},{x:-1.6,y:-21.8002,id:"1528"},{x:0,y:-30.7999,id:"1529"},{x:-3.2,y:-22.7997,id:"1530"},{x:-2.1999999999999997,y:-20.599400000000003,id:"1531"},{x:-19.400000000000002,y:-10.4004,id:"1532"},{x:-2.6,y:-21.4005,id:"1533"},{x:3.8,y:-30.599999999999998,id:"1534"},{x:-.2,y:-27.6001,id:"1535"},{x:7.199999999999999,y:-25.7996,id:"1536"},{x:-11,y:-34.1995,id:"1537"},{x:-15.4,y:-22.7997,id:"1538"},{x:7.3999999999999995,y:-27.800000000000004,id:"1539"},{x:-8.6,y:-21.2006,id:"1540"},{x:-24.4,y:-14.799499999999998,id:"1541"},{x:3,y:-17.999299999999998,id:"1542"},{x:-14.399999999999999,y:-24.4003,id:"1543"},{x:-1.7999999999999998,y:-22.0001,id:"1544"},{x:2.6,y:-22.2,id:"1545"},{x:-7.3999999999999995,y:-21.6003,id:"1546"},{x:-20.599999999999998,y:-14.9994,id:"1547"},{x:-6.6000000000000005,y:-17.999299999999998,id:"1548"},{x:6.800000000000001,y:-30.599999999999998,id:"1549"},{x:3.2,y:-19.5999,id:"1550"},{x:-8.4,y:-28.199800000000003,id:"1551"},{x:-9.8,y:-28.199800000000003,id:"1552"},{x:-13.8,y:-33.5999,id:"1553"},{x:-6.800000000000001,y:-43.2007,id:"1554"},{x:-60.199999999999996,y:9.5993,id:"1555"},{x:-52.6,y:2.9999000000000002,id:"1556"},{x:-51.2,y:5.0003,id:"1557"},{x:-56.599999999999994,y:8.4,id:"1558"},{x:-56.599999999999994,y:2.6001,id:"1559"},{x:-60.4,y:.9995,id:"1560"},{x:-55.60000000000001,y:2.4002,id:"1561"},{x:-57.599999999999994,y:-.5997,id:"1562"},{x:-60,y:-3.3997,id:"1563"},{x:-57.8,y:6.1996,id:"1564"},{x:-56.00000000000001,y:6.3995,id:"1565"},{x:79.80000000000001,y:14.399700000000001,id:"1566"},{x:83.6,y:19.9997,id:"1567"},{x:80.80000000000001,y:21.8002,id:"1568"},{x:79.4,y:21.0007,id:"1569"},{x:81.8,y:20.599400000000003,id:"1570"},{x:82.6,y:19.0002,id:"1571"},{x:61,y:-2.6001,id:"1572"},{x:58.199999999999996,y:-2.4002,id:"1573"},{x:64,y:-2.8000000000000003,id:"1574"},{x:60.4,y:-7.8003,id:"1575"},{x:59.199999999999996,y:-4.2007,id:"1576"},{x:61.8,y:-2.6001,id:"1577"},{x:57.599999999999994,y:-5.0003,id:"1578"},{x:56.599999999999994,y:-4.2007,id:"1579"},{x:63.4,y:-7.4005,id:"1580"},{x:64,y:-4.400600000000001,id:"1581"},{x:56.99999999999999,y:-4.400600000000001,id:"1582"},{x:50.6,y:-5.7999,id:"1583"},{x:60,y:-5.0003,id:"1584"},{x:56.00000000000001,y:-5.2002,id:"1585"},{x:68,y:-6.3995,id:"1586"},{x:52.6,y:-7.0007,id:"1587"},{x:66.2,y:-5.0003,id:"1588"},{x:54.800000000000004,y:-5.6000000000000005,id:"1589"},{x:59.8,y:-.7996,id:"1590"},{x:48.4,y:-7.6004000000000005,id:"1591"},{x:64.4,y:1.1993,id:"1592"},{x:63.6,y:-2.8000000000000003,id:"1593"},{x:63,y:-.9995,id:"1594"},{x:64.4,y:-5.9998000000000005,id:"1595"},{x:67.4,y:-5.2002,id:"1596"},{x:62.4,y:-1.8005,id:"1597"},{x:64.4,y:-2.0004,id:"1598"},{x:61,y:-3.5995,id:"1599"},{x:66.8,y:-7.4005,id:"1600"},{x:64.60000000000001,y:-7.2006,id:"1601"},{x:65.4,y:-5.2002,id:"1602"},{x:59,y:2.4002,id:"1603"},{x:63,y:-5.0003,id:"1604"},{x:63.4,y:-3.7994,id:"1605"},{x:65.2,y:-3.5995,id:"1606"},{x:66.4,y:-3.7994,id:"1607"},{x:63,y:-2.6001,id:"1608"},{x:66.4,y:-4.400600000000001,id:"1609"},{x:62.6,y:-5.7999,id:"1610"},{x:63.2,y:-4.2007,id:"1611"},{x:65.4,y:-5.4001,id:"1612"},{x:59.4,y:-5.7999,id:"1613"},{x:63.6,y:-3.9993,id:"1614"},{x:46.800000000000004,y:-6.1996,id:"1615"},{x:68.4,y:-5.9998000000000005,id:"1616"},{x:71.2,y:-3.5995,id:"1617"},{x:68.8,y:-3.1997999999999998,id:"1618"},{x:48.8,y:-5.6000000000000005,id:"1619"},{x:69,y:-6.599399999999999,id:"1620"},{x:67.80000000000001,y:-7.4005,id:"1621"},{x:50.4,y:-6.7993,id:"1622"},{x:48.199999999999996,y:-.3998,id:"1623"},{x:-80.2,y:28.9993,id:"1624"},{x:-95.39999999999999,y:29.8004,id:"1625"},{x:-91.8,y:30.000300000000003,id:"1626"},{x:-79.60000000000001,y:25.5997,id:"1627"},{x:-85,y:32.0007,id:"1628"},{x:-100,y:33.4,id:"1629"},{x:-92.2,y:24.2004,id:"1630"},{x:-85,y:31.1996,id:"1631"},{x:-83.6,y:33.7997,id:"1632"},{x:-99,y:28.9993,id:"1633"},{x:-77,y:30.400100000000002,id:"1634"},{x:-93.4,y:33.7997,id:"1635"},{x:-97.6,y:32.4005,id:"1636"},{x:-86.4,y:28.9993,id:"1637"},{x:-93.2,y:27.6001,id:"1638"},{x:-95.39999999999999,y:34.3994,id:"1639"},{x:-92.2,y:32.6004,id:"1640"},{x:-94.19999999999999,y:31.5994,id:"1641"},{x:-75.8,y:35.600300000000004,id:"1642"},{x:-72,y:35.0006,id:"1643"},{x:51.6,y:-2.2003000000000004,id:"1644"},{x:50.8,y:1.6006,id:"1645"},{x:53.800000000000004,y:5.4001,id:"1646"},{x:49.2,y:-.9995,id:"1647"},{x:47.199999999999996,y:-2.0004,id:"1648"},{x:52.2,y:-2.4002,id:"1649"},{x:52.6,y:-.7996,id:"1650"},{x:53.400000000000006,y:1.8005,id:"1651"},{x:53.2,y:3.1997999999999998,id:"1652"},{x:49.2,y:-5.0003,id:"1653"},{x:48.8,y:-3.1997999999999998,id:"1654"},{x:51,y:-4.8004,id:"1655"},{x:50.4,y:.1999,id:"1656"},{x:55.60000000000001,y:-.9995,id:"1657"},{x:51,y:.9995,id:"1658"},{x:23.400000000000002,y:14.9994,id:"1659"},{x:29.4,y:19.9997,id:"1660"},{x:28.999999999999996,y:18.8004,id:"1661"},{x:28.999999999999996,y:22.3999,id:"1662"},{x:28.199999999999996,y:21.6003,id:"1663"},{x:25.6,y:21.2006,id:"1664"},{x:18.2,y:25.5997,id:"1665"},{x:18.4,y:22.0001,id:"1666"},{x:21.2,y:21.8002,id:"1667"},{x:27.6,y:15.4007,id:"1668"},{x:18.2,y:20.1996,id:"1669"},{x:15.2,y:18.8004,id:"1670"},{x:23.799999999999997,y:17.599500000000003,id:"1671"},{x:21.6,y:15.800500000000001,id:"1672"},{x:19,y:20.3995,id:"1673"},{x:27.6,y:20.1996,id:"1674"},{x:24.8,y:14.9994,id:"1675"},{x:16.400000000000002,y:17.799400000000002,id:"1676"},{x:26.200000000000003,y:17.599500000000003,id:"1677"},{x:31.4,y:23.3994,id:"1678"},{x:14.000000000000002,y:21.0007,id:"1679"},{x:28.599999999999998,y:17.599500000000003,id:"1680"},{x:26,y:13.8,id:"1681"},{x:20.200000000000003,y:14.9994,id:"1682"},{x:22,y:13.400300000000001,id:"1683"},{x:26.8,y:14.599599999999999,id:"1684"},{x:25.2,y:22.599800000000002,id:"1685"},{x:28.999999999999996,y:20.599400000000003,id:"1686"},{x:22.6,y:16.7999,id:"1687"},{x:23.400000000000002,y:18.8004,id:"1688"},{x:27,y:20.1996,id:"1689"},{x:23.400000000000002,y:15.1993,id:"1690"},{x:29.2,y:16.200300000000002,id:"1691"},{x:14.2,y:23.3994,id:"1692"},{x:15.6,y:18.4006,id:"1693"},{x:17.4,y:27.800000000000004,id:"1694"},{x:-36.199999999999996,y:8.5999,id:"1695"},{x:-34.2,y:19.400000000000002,id:"1696"},{x:-33.800000000000004,y:14.599599999999999,id:"1697"},{x:-38.6,y:14.9994,id:"1698"},{x:-48.6,y:15.1993,id:"1699"},{x:-42.4,y:13.400300000000001,id:"1700"},{x:-51.2,y:8.999600000000001,id:"1701"}],links:[{source:"0",target:"1"},{source:"0",target:"2"},{source:"0",target:"3"},{source:"0",target:"27"},{source:"0",target:"35"},{source:"1",target:"4"},{source:"1",target:"6"},{source:"1",target:"5"},{source:"1",target:"7"},{source:"1",target:"21"},{source:"1",target:"32"},{source:"1",target:"33"},{source:"1",target:"18"},{source:"1",target:"11"},{source:"1",target:"34"},{source:"1",target:"19"},{source:"1",target:"2"},{source:"1",target:"23"},{source:"1",target:"20"},{source:"1",target:"28"},{source:"1",target:"13"},{source:"1",target:"8"},{source:"1",target:"35"},{source:"1",target:"36"},{source:"1",target:"37"},{source:"1",target:"38"},{source:"1",target:"39"},{source:"1",target:"40"},{source:"1",target:"41"},{source:"1",target:"42"},{source:"1",target:"43"},{source:"1",target:"44"},{source:"1",target:"59"},{source:"1",target:"85"},{source:"1",target:"117"},{source:"1",target:"129"},{source:"1",target:"54"},{source:"2",target:"14"},{source:"2",target:"19"},{source:"2",target:"26"},{source:"2",target:"27"},{source:"2",target:"11"},{source:"2",target:"23"},{source:"2",target:"13"},{source:"2",target:"35"},{source:"2",target:"51"},{source:"2",target:"3"},{source:"2",target:"38"},{source:"2",target:"39"},{source:"2",target:"40"},{source:"2",target:"52"},{source:"2",target:"53"},{source:"2",target:"54"},{source:"3",target:"37"},{source:"3",target:"396"},{source:"3",target:"110"},{source:"3",target:"244"},{source:"3",target:"388"},{source:"3",target:"245"},{source:"3",target:"391"},{source:"3",target:"112"},{source:"3",target:"321"},{source:"3",target:"322"},{source:"3",target:"111"},{source:"3",target:"113"},{source:"3",target:"247"},{source:"3",target:"394"},{source:"3",target:"44"},{source:"4",target:"5"},{source:"5",target:"20"},{source:"5",target:"26"},{source:"6",target:"7"},{source:"6",target:"8"},{source:"6",target:"9"},{source:"7",target:"26"},{source:"7",target:"28"},{source:"8",target:"28"},{source:"10",target:"11"},{source:"10",target:"482"},{source:"11",target:"19"},{source:"11",target:"23"},{source:"11",target:"46"},{source:"11",target:"13"},{source:"11",target:"38"},{source:"11",target:"40"},{source:"11",target:"41"},{source:"11",target:"47"},{source:"11",target:"48"},{source:"11",target:"60"},{source:"12",target:"13"},{source:"13",target:"23"},{source:"13",target:"28"},{source:"13",target:"35"},{source:"15",target:"16"},{source:"16",target:"21"},{source:"17",target:"18"},{source:"17",target:"19"},{source:"17",target:"29"},{source:"18",target:"19"},{source:"19",target:"25"},{source:"19",target:"34"},{source:"19",target:"48"},{source:"19",target:"26"},{source:"19",target:"20"},{source:"19",target:"35"},{source:"19",target:"49"},{source:"19",target:"38"},{source:"19",target:"40"},{source:"19",target:"43"},{source:"19",target:"50"},{source:"19",target:"133"},{source:"19",target:"576"},{source:"20",target:"45"},{source:"20",target:"34"},{source:"20",target:"26"},{source:"21",target:"30"},{source:"21",target:"31"},{source:"22",target:"23"},{source:"23",target:"48"},{source:"23",target:"55"},{source:"23",target:"35"},{source:"23",target:"40"},{source:"23",target:"56"},{source:"23",target:"57"},{source:"24",target:"25"},{source:"24",target:"26"},{source:"35",target:"58"},{source:"35",target:"62"},{source:"35",target:"36"},{source:"36",target:"63"},{source:"37",target:"66"},{source:"37",target:"67"},{source:"37",target:"73"},{source:"37",target:"69"},{source:"37",target:"74"},{source:"37",target:"80"},{source:"37",target:"81"},{source:"37",target:"212"},{source:"37",target:"82"},{source:"37",target:"214"},{source:"37",target:"83"},{source:"37",target:"215"},{source:"37",target:"233"},{source:"37",target:"84"},{source:"37",target:"231"},{source:"37",target:"85"},{source:"37",target:"218"},{source:"37",target:"220"},{source:"37",target:"170"},{source:"37",target:"86"},{source:"37",target:"87"},{source:"37",target:"88"},{source:"37",target:"89"},{source:"37",target:"90"},{source:"37",target:"72"},{source:"37",target:"78"},{source:"37",target:"217"},{source:"37",target:"91"},{source:"37",target:"92"},{source:"37",target:"93"},{source:"37",target:"94"},{source:"37",target:"95"},{source:"37",target:"96"},{source:"37",target:"223"},{source:"37",target:"224"},{source:"37",target:"97"},{source:"37",target:"98"},{source:"37",target:"225"},{source:"37",target:"235"},{source:"37",target:"99"},{source:"37",target:"226"},{source:"37",target:"100"},{source:"37",target:"101"},{source:"37",target:"102"},{source:"37",target:"103"},{source:"37",target:"104"},{source:"37",target:"105"},{source:"37",target:"106"},{source:"37",target:"107"},{source:"37",target:"243"},{source:"37",target:"335"},{source:"37",target:"227"},{source:"37",target:"110"},{source:"37",target:"336"},{source:"37",target:"244"},{source:"37",target:"245"},{source:"37",target:"111"},{source:"37",target:"112"},{source:"37",target:"113"},{source:"37",target:"114"},{source:"37",target:"38"},{source:"37",target:"39"},{source:"37",target:"40"},{source:"37",target:"41"},{source:"37",target:"116"},{source:"37",target:"117"},{source:"37",target:"118"},{source:"37",target:"119"},{source:"37",target:"121"},{source:"37",target:"123"},{source:"37",target:"124"},{source:"37",target:"267"},{source:"37",target:"270"},{source:"37",target:"271"},{source:"37",target:"272"},{source:"37",target:"125"},{source:"37",target:"274"},{source:"37",target:"127"},{source:"37",target:"128"},{source:"37",target:"129"},{source:"37",target:"130"},{source:"37",target:"131"},{source:"37",target:"132"},{source:"37",target:"133"},{source:"37",target:"134"},{source:"37",target:"337"},{source:"37",target:"75"},{source:"37",target:"135"},{source:"37",target:"136"},{source:"37",target:"292"},{source:"37",target:"139"},{source:"37",target:"295"},{source:"37",target:"338"},{source:"37",target:"297"},{source:"37",target:"301"},{source:"37",target:"331"},{source:"37",target:"141"},{source:"37",target:"142"},{source:"37",target:"143"},{source:"37",target:"144"},{source:"37",target:"145"},{source:"37",target:"146"},{source:"37",target:"304"},{source:"37",target:"147"},{source:"37",target:"148"},{source:"37",target:"149"},{source:"37",target:"150"},{source:"37",target:"151"},{source:"37",target:"307"},{source:"37",target:"310"},{source:"37",target:"339"},{source:"37",target:"340"},{source:"37",target:"43"},{source:"37",target:"44"},{source:"37",target:"56"},{source:"37",target:"152"},{source:"37",target:"153"},{source:"37",target:"154"},{source:"37",target:"155"},{source:"37",target:"54"},{source:"37",target:"341"},{source:"37",target:"342"},{source:"37",target:"343"},{source:"37",target:"156"},{source:"37",target:"157"},{source:"37",target:"160"},{source:"37",target:"161"},{source:"37",target:"316"},{source:"37",target:"57"},{source:"37",target:"320"},{source:"37",target:"344"},{source:"37",target:"321"},{source:"37",target:"322"},{source:"37",target:"163"},{source:"37",target:"345"},{source:"37",target:"164"},{source:"37",target:"228"},{source:"37",target:"165"},{source:"37",target:"166"},{source:"37",target:"167"},{source:"37",target:"241"},{source:"37",target:"242"},{source:"37",target:"266"},{source:"37",target:"273"},{source:"37",target:"277"},{source:"37",target:"576"},{source:"37",target:"282"},{source:"37",target:"284"},{source:"37",target:"291"},{source:"37",target:"293"},{source:"37",target:"294"},{source:"37",target:"140"},{source:"37",target:"296"},{source:"37",target:"309"},{source:"37",target:"324"},{source:"37",target:"327"},{source:"37",target:"168"},{source:"38",target:"67"},{source:"38",target:"82"},{source:"38",target:"85"},{source:"38",target:"86"},{source:"38",target:"241"},{source:"38",target:"388"},{source:"38",target:"49"},{source:"38",target:"110"},{source:"38",target:"244"},{source:"38",target:"245"},{source:"38",target:"391"},{source:"38",target:"111"},{source:"38",target:"112"},{source:"38",target:"113"},{source:"38",target:"114"},{source:"38",target:"394"},{source:"38",target:"369"},{source:"38",target:"431"},{source:"38",target:"434"},{source:"38",target:"418"},{source:"38",target:"432"},{source:"38",target:"454"},{source:"38",target:"249"},{source:"38",target:"448"},{source:"38",target:"464"},{source:"38",target:"461"},{source:"38",target:"39"},{source:"38",target:"449"},{source:"38",target:"462"},{source:"38",target:"433"},{source:"38",target:"458"},{source:"38",target:"40"},{source:"38",target:"465"},{source:"38",target:"41"},{source:"38",target:"251"},{source:"38",target:"447"},{source:"38",target:"450"},{source:"38",target:"466"},{source:"38",target:"467"},{source:"38",target:"117"},{source:"38",target:"301"},{source:"38",target:"141"},{source:"38",target:"152"},{source:"38",target:"153"},{source:"38",target:"468"},{source:"38",target:"47"},{source:"38",target:"445"},{source:"38",target:"118"},{source:"38",target:"266"},{source:"38",target:"271"},{source:"38",target:"129"},{source:"38",target:"290"},{source:"38",target:"291"},{source:"38",target:"292"},{source:"38",target:"294"},{source:"38",target:"295"},{source:"38",target:"140"},{source:"38",target:"142"},{source:"38",target:"302"},{source:"38",target:"307"},{source:"38",target:"312"},{source:"38",target:"43"},{source:"38",target:"453"},{source:"38",target:"313"},{source:"38",target:"44"},{source:"38",target:"54"},{source:"38",target:"57"},{source:"38",target:"322"},{source:"39",target:"81"},{source:"39",target:"85"},{source:"39",target:"86"},{source:"39",target:"227"},{source:"39",target:"388"},{source:"39",target:"110"},{source:"39",target:"244"},{source:"39",target:"245"},{source:"39",target:"391"},{source:"39",target:"111"},{source:"39",target:"112"},{source:"39",target:"113"},{source:"39",target:"434"},{source:"39",target:"418"},{source:"39",target:"454"},{source:"39",target:"249"},{source:"39",target:"67"},{source:"39",target:"114"},{source:"39",target:"443"},{source:"39",target:"448"},{source:"39",target:"449"},{source:"39",target:"458"},{source:"39",target:"251"},{source:"39",target:"471"},{source:"39",target:"445"},{source:"39",target:"117"},{source:"39",target:"270"},{source:"39",target:"139"},{source:"39",target:"301"},{source:"39",target:"141"},{source:"39",target:"43"},{source:"39",target:"44"},{source:"39",target:"54"},{source:"39",target:"57"},{source:"39",target:"47"},{source:"39",target:"266"},{source:"39",target:"268"},{source:"39",target:"274"},{source:"39",target:"129"},{source:"39",target:"283"},{source:"39",target:"287"},{source:"39",target:"290"},{source:"39",target:"291"},{source:"39",target:"292"},{source:"39",target:"293"},{source:"39",target:"294"},{source:"39",target:"295"},{source:"39",target:"296"},{source:"39",target:"297"},{source:"39",target:"142"},{source:"39",target:"302"},{source:"39",target:"307"},{source:"39",target:"310"},{source:"39",target:"483"},{source:"39",target:"498"},{source:"39",target:"153"},{source:"39",target:"164"},{source:"40",target:"177"},{source:"40",target:"81"},{source:"40",target:"82"},{source:"40",target:"85"},{source:"40",target:"86"},{source:"40",target:"241"},{source:"40",target:"242"},{source:"40",target:"227"},{source:"40",target:"388"},{source:"40",target:"110"},{source:"40",target:"244"},{source:"40",target:"245"},{source:"40",target:"391"},{source:"40",target:"111"},{source:"40",target:"112"},{source:"40",target:"113"},{source:"40",target:"114"},{source:"40",target:"247"},{source:"40",target:"434"},{source:"40",target:"444"},{source:"40",target:"418"},{source:"40",target:"454"},{source:"40",target:"249"},{source:"40",target:"449"},{source:"40",target:"458"},{source:"40",target:"67"},{source:"40",target:"91"},{source:"40",target:"103"},{source:"40",target:"435"},{source:"40",target:"431"},{source:"40",target:"443"},{source:"40",target:"448"},{source:"40",target:"470"},{source:"40",target:"480"},{source:"40",target:"251"},{source:"40",target:"47"},{source:"40",target:"445"},{source:"40",target:"463"},{source:"40",target:"481"},{source:"40",target:"482"},{source:"40",target:"456"},{source:"40",target:"117"},{source:"40",target:"270"},{source:"40",target:"125"},{source:"40",target:"274"},{source:"40",target:"129"},{source:"40",target:"130"},{source:"40",target:"292"},{source:"40",target:"139"},{source:"40",target:"300"},{source:"40",target:"301"},{source:"40",target:"141"},{source:"40",target:"142"},{source:"40",target:"143"},{source:"40",target:"310"},{source:"40",target:"483"},{source:"40",target:"312"},{source:"40",target:"43"},{source:"40",target:"453"},{source:"40",target:"313"},{source:"40",target:"44"},{source:"40",target:"152"},{source:"40",target:"153"},{source:"40",target:"54"},{source:"40",target:"156"},{source:"40",target:"157"},{source:"40",target:"316"},{source:"40",target:"57"},{source:"40",target:"164"},{source:"40",target:"118"},{source:"40",target:"119"},{source:"40",target:"263"},{source:"40",target:"266"},{source:"40",target:"128"},{source:"40",target:"283"},{source:"40",target:"290"},{source:"40",target:"291"},{source:"40",target:"293"},{source:"40",target:"294"},{source:"40",target:"855"},{source:"40",target:"295"},{source:"40",target:"140"},{source:"40",target:"296"},{source:"40",target:"302"},{source:"40",target:"307"},{source:"40",target:"309"},{source:"40",target:"498"},{source:"40",target:"1433"},{source:"40",target:"332"},{source:"40",target:"318"},{source:"40",target:"321"},{source:"40",target:"168"},{source:"41",target:"85"},{source:"41",target:"86"},{source:"41",target:"388"},{source:"41",target:"110"},{source:"41",target:"244"},{source:"41",target:"245"},{source:"41",target:"391"},{source:"41",target:"111"},{source:"41",target:"112"},{source:"41",target:"113"},{source:"41",target:"114"},{source:"41",target:"434"},{source:"41",target:"418"},{source:"41",target:"249"},{source:"41",target:"449"},{source:"41",target:"458"},{source:"41",target:"67"},{source:"41",target:"443"},{source:"41",target:"448"},{source:"41",target:"461"},{source:"41",target:"470"},{source:"41",target:"485"},{source:"41",target:"251"},{source:"41",target:"477"},{source:"41",target:"471"},{source:"41",target:"481"},{source:"41",target:"301"},{source:"41",target:"115"},{source:"41",target:"47"},{source:"41",target:"445"},{source:"41",target:"117"},{source:"41",target:"271"},{source:"41",target:"128"},{source:"41",target:"129"},{source:"41",target:"290"},{source:"41",target:"291"},{source:"41",target:"292"},{source:"41",target:"294"},{source:"41",target:"295"},{source:"41",target:"140"},{source:"41",target:"296"},{source:"41",target:"141"},{source:"41",target:"483"},{source:"41",target:"312"},{source:"41",target:"43"},{source:"41",target:"453"},{source:"41",target:"44"},{source:"41",target:"153"},{source:"41",target:"54"},{source:"41",target:"156"},{source:"41",target:"57"},{source:"41",target:"318"},{source:"42",target:"85"},{source:"42",target:"118"},{source:"42",target:"1059"},{source:"42",target:"282"},{source:"42",target:"283"},{source:"42",target:"96"},{source:"42",target:"110"},{source:"42",target:"117"},{source:"42",target:"125"},{source:"42",target:"139"},{source:"42",target:"308"},{source:"42",target:"292"},{source:"42",target:"295"},{source:"42",target:"309"},{source:"42",target:"316"},{source:"42",target:"322"},{source:"43",target:"67"},{source:"43",target:"85"},{source:"43",target:"110"},{source:"43",target:"245"},{source:"43",target:"111"},{source:"43",target:"117"},{source:"43",target:"121"},{source:"43",target:"566"},{source:"43",target:"263"},{source:"43",target:"727"},{source:"43",target:"129"},{source:"43",target:"139"},{source:"43",target:"301"},{source:"43",target:"302"},{source:"43",target:"1404"},{source:"43",target:"114"},{source:"43",target:"1412"},{source:"43",target:"453"},{source:"43",target:"1413"},{source:"43",target:"313"},{source:"43",target:"1407"},{source:"43",target:"1414"},{source:"43",target:"746"},{source:"43",target:"1405"},{source:"43",target:"1395"},{source:"43",target:"44"},{source:"43",target:"1415"},{source:"43",target:"1416"},{source:"43",target:"1417"},{source:"43",target:"153"},{source:"43",target:"54"},{source:"43",target:"156"},{source:"44",target:"177"},{source:"44",target:"85"},{source:"44",target:"244"},{source:"44",target:"111"},{source:"44",target:"112"},{source:"44",target:"117"},{source:"44",target:"129"},{source:"44",target:"950"},{source:"44",target:"953"},{source:"44",target:"954"},{source:"44",target:"575"},{source:"44",target:"963"},{source:"44",target:"133"},{source:"44",target:"576"},{source:"44",target:"453"},{source:"44",target:"313"},{source:"44",target:"1407"},{source:"44",target:"1395"},{source:"44",target:"67"},{source:"44",target:"182"},{source:"44",target:"263"},{source:"44",target:"1442"},{source:"44",target:"1425"},{source:"44",target:"1443"},{source:"44",target:"746"},{source:"44",target:"1435"},{source:"44",target:"1416"},{source:"44",target:"152"},{source:"44",target:"153"},{source:"44",target:"54"},{source:"44",target:"156"},{source:"44",target:"321"},{source:"44",target:"322"},{source:"44",target:"57"},{source:"46",target:"47"},{source:"47",target:"457"},{source:"47",target:"249"},{source:"47",target:"440"},{source:"47",target:"297"},{source:"49",target:"85"},{source:"49",target:"388"},{source:"49",target:"67"},{source:"49",target:"110"},{source:"49",target:"244"},{source:"49",target:"245"},{source:"49",target:"391"},{source:"49",target:"392"},{source:"49",target:"111"},{source:"49",target:"112"},{source:"49",target:"113"},{source:"49",target:"114"},{source:"49",target:"247"},{source:"49",target:"401"},{source:"49",target:"394"},{source:"49",target:"369"},{source:"49",target:"75"},{source:"49",target:"57"},{source:"49",target:"117"},{source:"49",target:"292"},{source:"49",target:"294"},{source:"49",target:"295"},{source:"49",target:"140"},{source:"49",target:"56"},{source:"52",target:"265"},{source:"52",target:"266"},{source:"52",target:"957"},{source:"52",target:"575"},{source:"52",target:"53"},{source:"52",target:"962"},{source:"52",target:"75"},{source:"52",target:"56"},{source:"53",target:"957"},{source:"53",target:"965"},{source:"54",target:"67"},{source:"54",target:"69"},{source:"54",target:"177"},{source:"54",target:"81"},{source:"54",target:"82"},{source:"54",target:"84"},{source:"54",target:"85"},{source:"54",target:"86"},{source:"54",target:"89"},{source:"54",target:"90"},{source:"54",target:"91"},{source:"54",target:"94"},{source:"54",target:"96"},{source:"54",target:"99"},{source:"54",target:"101"},{source:"54",target:"103"},{source:"54",target:"105"},{source:"54",target:"106"},{source:"54",target:"241"},{source:"54",target:"227"},{source:"54",target:"110"},{source:"54",target:"244"},{source:"54",target:"245"},{source:"54",target:"111"},{source:"54",target:"112"},{source:"54",target:"113"},{source:"54",target:"114"},{source:"54",target:"117"},{source:"54",target:"118"},{source:"54",target:"121"},{source:"54",target:"123"},{source:"54",target:"124"},{source:"54",target:"788"},{source:"54",target:"786"},{source:"54",target:"264"},{source:"54",target:"265"},{source:"54",target:"783"},{source:"54",target:"266"},{source:"54",target:"791"},{source:"54",target:"797"},{source:"54",target:"798"},{source:"54",target:"270"},{source:"54",target:"125"},{source:"54",target:"274"},{source:"54",target:"885"},{source:"54",target:"128"},{source:"54",target:"129"},{source:"54",target:"130"},{source:"54",target:"132"},{source:"54",target:"133"},{source:"54",target:"576"},{source:"54",target:"134"},{source:"54",target:"75"},{source:"54",target:"136"},{source:"54",target:"290"},{source:"54",target:"292"},{source:"54",target:"294"},{source:"54",target:"139"},{source:"54",target:"295"},{source:"54",target:"301"},{source:"54",target:"142"},{source:"54",target:"143"},{source:"54",target:"1286"},{source:"54",target:"144"},{source:"54",target:"145"},{source:"54",target:"307"},{source:"54",target:"310"},{source:"54",target:"1452"},{source:"54",target:"1453"},{source:"54",target:"334"},{source:"54",target:"56"},{source:"54",target:"1461"},{source:"54",target:"1455"},{source:"54",target:"1462"},{source:"54",target:"1482"},{source:"54",target:"152"},{source:"54",target:"1487"},{source:"54",target:"153"},{source:"54",target:"154"},{source:"54",target:"1504"},{source:"54",target:"155"},{source:"54",target:"1490"},{source:"54",target:"1513"},{source:"54",target:"171"},{source:"54",target:"88"},{source:"54",target:"100"},{source:"54",target:"102"},{source:"54",target:"104"},{source:"54",target:"247"},{source:"54",target:"394"},{source:"54",target:"119"},{source:"54",target:"271"},{source:"54",target:"275"},{source:"54",target:"297"},{source:"54",target:"298"},{source:"54",target:"141"},{source:"54",target:"1454"},{source:"54",target:"1483"},{source:"54",target:"1517"},{source:"54",target:"1518"},{source:"54",target:"1464"},{source:"54",target:"792"},{source:"54",target:"1465"},{source:"54",target:"341"},{source:"54",target:"1519"},{source:"54",target:"795"},{source:"54",target:"1466"},{source:"54",target:"1520"},{source:"54",target:"1521"},{source:"54",target:"1087"},{source:"54",target:"1458"},{source:"54",target:"1522"},{source:"54",target:"1088"},{source:"54",target:"314"},{source:"54",target:"1495"},{source:"54",target:"342"},{source:"54",target:"796"},{source:"54",target:"1506"},{source:"54",target:"1511"},{source:"54",target:"1523"},{source:"54",target:"1451"},{source:"54",target:"156"},{source:"54",target:"1469"},{source:"54",target:"157"},{source:"54",target:"1524"},{source:"54",target:"1516"},{source:"54",target:"1472"},{source:"54",target:"1473"},{source:"54",target:"1525"},{source:"54",target:"1526"},{source:"54",target:"1474"},{source:"54",target:"1527"},{source:"54",target:"158"},{source:"54",target:"160"},{source:"54",target:"161"},{source:"54",target:"57"},{source:"54",target:"321"},{source:"54",target:"164"},{source:"54",target:"165"},{source:"54",target:"1450"},{source:"54",target:"1533"},{source:"54",target:"1503"},{source:"54",target:"1545"},{source:"54",target:"168"},{source:"56",target:"67"},{source:"56",target:"69"},{source:"56",target:"85"},{source:"56",target:"86"},{source:"56",target:"88"},{source:"56",target:"89"},{source:"56",target:"90"},{source:"56",target:"96"},{source:"56",target:"97"},{source:"56",target:"105"},{source:"56",target:"245"},{source:"56",target:"111"},{source:"56",target:"399"},{source:"56",target:"112"},{source:"56",target:"117"},{source:"56",target:"266"},{source:"56",target:"267"},{source:"56",target:"270"},{source:"56",target:"271"},{source:"56",target:"129"},{source:"56",target:"133"},{source:"56",target:"576"},{source:"56",target:"75"},{source:"56",target:"1060"},{source:"56",target:"136"},{source:"56",target:"297"},{source:"56",target:"1172"},{source:"56",target:"144"},{source:"56",target:"334"},{source:"56",target:"101"},{source:"56",target:"488"},{source:"56",target:"534"},{source:"56",target:"124"},{source:"56",target:"1286"},{source:"56",target:"145"},{source:"56",target:"1460"},{source:"56",target:"202"},{source:"56",target:"1461"},{source:"56",target:"1455"},{source:"56",target:"1462"},{source:"56",target:"152"},{source:"56",target:"580"},{source:"56",target:"153"},{source:"56",target:"154"},{source:"56",target:"155"},{source:"56",target:"332"},{source:"56",target:"1463"},{source:"56",target:"1464"},{source:"56",target:"1465"},{source:"56",target:"341"},{source:"56",target:"795"},{source:"56",target:"1466"},{source:"56",target:"1087"},{source:"56",target:"1458"},{source:"56",target:"1467"},{source:"56",target:"1468"},{source:"56",target:"314"},{source:"56",target:"342"},{source:"56",target:"156"},{source:"56",target:"1469"},{source:"56",target:"1470"},{source:"56",target:"157"},{source:"56",target:"1471"},{source:"56",target:"1472"},{source:"56",target:"1473"},{source:"56",target:"1474"},{source:"56",target:"158"},{source:"56",target:"1475"},{source:"56",target:"57"},{source:"56",target:"164"},{source:"56",target:"165"},{source:"56",target:"1504"},{source:"56",target:"343"},{source:"56",target:"1553"},{source:"56",target:"1459"},{source:"57",target:"67"},{source:"57",target:"69"},{source:"57",target:"81"},{source:"57",target:"85"},{source:"57",target:"86"},{source:"57",target:"91"},{source:"57",target:"96"},{source:"57",target:"105"},{source:"57",target:"241"},{source:"57",target:"227"},{source:"57",target:"110"},{source:"57",target:"244"},{source:"57",target:"245"},{source:"57",target:"111"},{source:"57",target:"112"},{source:"57",target:"113"},{source:"57",target:"117"},{source:"57",target:"267"},{source:"57",target:"268"},{source:"57",target:"386"},{source:"57",target:"125"},{source:"57",target:"274"},{source:"57",target:"130"},{source:"57",target:"1050"},{source:"57",target:"284"},{source:"57",target:"285"},{source:"57",target:"136"},{source:"57",target:"291"},{source:"57",target:"292"},{source:"57",target:"293"},{source:"57",target:"294"},{source:"57",target:"139"},{source:"57",target:"295"},{source:"57",target:"140"},{source:"57",target:"296"},{source:"57",target:"297"},{source:"57",target:"331"},{source:"57",target:"141"},{source:"57",target:"143"},{source:"57",target:"303"},{source:"57",target:"307"},{source:"57",target:"310"},{source:"57",target:"334"},{source:"57",target:"153"},{source:"57",target:"156"},{source:"57",target:"1572"},{source:"57",target:"316"},{source:"57",target:"317"},{source:"57",target:"1594"},{source:"57",target:"101"},{source:"57",target:"106"},{source:"57",target:"246"},{source:"57",target:"114"},{source:"57",target:"394"},{source:"57",target:"419"},{source:"57",target:"128"},{source:"57",target:"75"},{source:"57",target:"298"},{source:"57",target:"301"},{source:"57",target:"1334"},{source:"57",target:"483"},{source:"57",target:"152"},{source:"57",target:"157"},{source:"57",target:"1573"},{source:"57",target:"1593"},{source:"57",target:"318"},{source:"57",target:"1596"},{source:"57",target:"1589"},{source:"57",target:"1597"},{source:"57",target:"1590"},{source:"57",target:"1598"},{source:"57",target:"1599"},{source:"57",target:"321"},{source:"57",target:"1133"},{source:"57",target:"322"},{source:"57",target:"164"},{source:"57",target:"1173"},{source:"57",target:"165"},{source:"60",target:"61"},{source:"63",target:"64"},{source:"65",target:"66"},{source:"65",target:"67"},{source:"65",target:"68"},{source:"65",target:"69"},{source:"65",target:"70"},{source:"65",target:"71"},{source:"66",target:"67"},{source:"66",target:"73"},{source:"66",target:"68"},{source:"66",target:"69"},{source:"66",target:"74"},{source:"66",target:"75"},{source:"66",target:"85"},{source:"67",target:"72"},{source:"67",target:"77"},{source:"67",target:"79"},{source:"67",target:"73"},{source:"67",target:"68"},{source:"67",target:"69"},{source:"67",target:"78"},{source:"67",target:"74"},{source:"67",target:"80"},{source:"67",target:"81"},{source:"67",target:"82"},{source:"67",target:"83"},{source:"67",target:"84"},{source:"67",target:"85"},{source:"67",target:"86"},{source:"67",target:"87"},{source:"67",target:"88"},{source:"67",target:"89"},{source:"67",target:"90"},{source:"67",target:"91"},{source:"67",target:"92"},{source:"67",target:"93"},{source:"67",target:"94"},{source:"67",target:"95"},{source:"67",target:"96"},{source:"67",target:"97"},{source:"67",target:"98"},{source:"67",target:"99"},{source:"67",target:"100"},{source:"67",target:"101"},{source:"67",target:"102"},{source:"67",target:"103"},{source:"67",target:"104"},{source:"67",target:"105"},{source:"67",target:"106"},{source:"67",target:"107"},{source:"67",target:"108"},{source:"67",target:"109"},{source:"67",target:"110"},{source:"67",target:"111"},{source:"67",target:"112"},{source:"67",target:"113"},{source:"67",target:"114"},{source:"67",target:"115"},{source:"67",target:"116"},{source:"67",target:"117"},{source:"67",target:"118"},{source:"67",target:"119"},{source:"67",target:"120"},{source:"67",target:"121"},{source:"67",target:"122"},{source:"67",target:"123"},{source:"67",target:"124"},{source:"67",target:"125"},{source:"67",target:"126"},{source:"67",target:"127"},{source:"67",target:"128"},{source:"67",target:"129"},{source:"67",target:"130"},{source:"67",target:"131"},{source:"67",target:"132"},{source:"67",target:"133"},{source:"67",target:"134"},{source:"67",target:"75"},{source:"67",target:"135"},{source:"67",target:"136"},{source:"67",target:"137"},{source:"67",target:"71"},{source:"67",target:"138"},{source:"67",target:"139"},{source:"67",target:"140"},{source:"67",target:"141"},{source:"67",target:"142"},{source:"67",target:"143"},{source:"67",target:"144"},{source:"67",target:"145"},{source:"67",target:"146"},{source:"67",target:"147"},{source:"67",target:"148"},{source:"67",target:"149"},{source:"67",target:"150"},{source:"67",target:"151"},{source:"67",target:"152"},{source:"67",target:"153"},{source:"67",target:"154"},{source:"67",target:"155"},{source:"67",target:"156"},{source:"67",target:"157"},{source:"67",target:"158"},{source:"67",target:"159"},{source:"67",target:"160"},{source:"67",target:"161"},{source:"67",target:"162"},{source:"67",target:"163"},{source:"67",target:"164"},{source:"67",target:"165"},{source:"67",target:"166"},{source:"67",target:"167"},{source:"67",target:"168"},{source:"67",target:"169"},{source:"67",target:"214"},{source:"67",target:"233"},{source:"67",target:"218"},{source:"67",target:"170"},{source:"67",target:"223"},{source:"67",target:"225"},{source:"67",target:"235"},{source:"67",target:"241"},{source:"67",target:"242"},{source:"67",target:"243"},{source:"67",target:"227"},{source:"67",target:"244"},{source:"67",target:"245"},{source:"67",target:"255"},{source:"67",target:"552"},{source:"67",target:"554"},{source:"67",target:"556"},{source:"67",target:"256"},{source:"67",target:"258"},{source:"67",target:"259"},{source:"67",target:"563"},{source:"67",target:"564"},{source:"67",target:"263"},{source:"67",target:"270"},{source:"67",target:"272"},{source:"67",target:"273"},{source:"67",target:"274"},{source:"67",target:"275"},{source:"67",target:"568"},{source:"67",target:"569"},{source:"67",target:"277"},{source:"67",target:"903"},{source:"67",target:"278"},{source:"67",target:"906"},{source:"67",target:"576"},{source:"67",target:"1024"},{source:"67",target:"279"},{source:"67",target:"378"},{source:"67",target:"282"},{source:"67",target:"283"},{source:"67",target:"284"},{source:"67",target:"285"},{source:"67",target:"286"},{source:"67",target:"1063"},{source:"67",target:"287"},{source:"67",target:"70"},{source:"67",target:"1079"},{source:"67",target:"288"},{source:"67",target:"290"},{source:"67",target:"291"},{source:"67",target:"292"},{source:"67",target:"293"},{source:"67",target:"294"},{source:"67",target:"1065"},{source:"67",target:"295"},{source:"67",target:"1129"},{source:"67",target:"1130"},{source:"67",target:"296"},{source:"67",target:"297"},{source:"67",target:"912"},{source:"67",target:"302"},{source:"67",target:"578"},{source:"67",target:"303"},{source:"67",target:"1239"},{source:"67",target:"579"},{source:"67",target:"307"},{source:"67",target:"308"},{source:"67",target:"309"},{source:"67",target:"310"},{source:"67",target:"700"},{source:"67",target:"1389"},{source:"67",target:"516"},{source:"67",target:"321"},{source:"67",target:"228"},{source:"67",target:"324"},{source:"67",target:"325"},{source:"67",target:"327"},{source:"67",target:"584"},{source:"67",target:"587"},{source:"68",target:"69"},{source:"68",target:"74"},{source:"69",target:"72"},{source:"69",target:"76"},{source:"69",target:"73"},{source:"69",target:"78"},{source:"69",target:"169"},{source:"69",target:"74"},{source:"69",target:"80"},{source:"69",target:"81"},{source:"69",target:"85"},{source:"69",target:"86"},{source:"69",target:"88"},{source:"69",target:"89"},{source:"69",target:"90"},{source:"69",target:"96"},{source:"69",target:"101"},{source:"69",target:"105"},{source:"69",target:"117"},{source:"69",target:"75"},{source:"69",target:"136"},{source:"69",target:"151"},{source:"69",target:"153"},{source:"69",target:"156"},{source:"69",target:"157"},{source:"69",target:"160"},{source:"69",target:"164"},{source:"69",target:"82"},{source:"69",target:"84"},{source:"69",target:"99"},{source:"69",target:"103"},{source:"69",target:"106"},{source:"69",target:"118"},{source:"69",target:"119"},{source:"69",target:"125"},{source:"69",target:"128"},{source:"69",target:"129"},{source:"69",target:"130"},{source:"69",target:"1085"},{source:"69",target:"150"},{source:"69",target:"152"},{source:"69",target:"154"},{source:"69",target:"155"},{source:"69",target:"165"},{source:"69",target:"166"},{source:"69",target:"167"},{source:"69",target:"327"},{source:"69",target:"168"},{source:"70",target:"1077"},{source:"70",target:"71"},{source:"71",target:"360"},{source:"71",target:"136"},{source:"72",target:"85"},{source:"73",target:"79"},{source:"73",target:"74"},{source:"73",target:"85"},{source:"73",target:"86"},{source:"73",target:"88"},{source:"73",target:"90"},{source:"73",target:"75"},{source:"73",target:"84"},{source:"74",target:"85"},{source:"74",target:"75"},{source:"74",target:"86"},{source:"74",target:"88"},{source:"74",target:"90"},{source:"74",target:"117"},{source:"75",target:"80"},{source:"75",target:"81"},{source:"75",target:"82"},{source:"75",target:"214"},{source:"75",target:"83"},{source:"75",target:"233"},{source:"75",target:"84"},{source:"75",target:"85"},{source:"75",target:"220"},{source:"75",target:"170"},{source:"75",target:"86"},{source:"75",target:"88"},{source:"75",target:"89"},{source:"75",target:"90"},{source:"75",target:"91"},{source:"75",target:"92"},{source:"75",target:"93"},{source:"75",target:"94"},{source:"75",target:"95"},{source:"75",target:"96"},{source:"75",target:"223"},{source:"75",target:"97"},{source:"75",target:"98"},{source:"75",target:"225"},{source:"75",target:"235"},{source:"75",target:"99"},{source:"75",target:"100"},{source:"75",target:"101"},{source:"75",target:"103"},{source:"75",target:"105"},{source:"75",target:"106"},{source:"75",target:"110"},{source:"75",target:"245"},{source:"75",target:"111"},{source:"75",target:"112"},{source:"75",target:"113"},{source:"75",target:"114"},{source:"75",target:"116"},{source:"75",target:"117"},{source:"75",target:"118"},{source:"75",target:"255"},{source:"75",target:"119"},{source:"75",target:"120"},{source:"75",target:"258"},{source:"75",target:"121"},{source:"75",target:"122"},{source:"75",target:"125"},{source:"75",target:"127"},{source:"75",target:"128"},{source:"75",target:"129"},{source:"75",target:"130"},{source:"75",target:"131"},{source:"75",target:"132"},{source:"75",target:"133"},{source:"75",target:"576"},{source:"75",target:"1024"},{source:"75",target:"134"},{source:"75",target:"123"},{source:"75",target:"1052"},{source:"75",target:"280"},{source:"75",target:"136"},{source:"75",target:"144"},{source:"75",target:"147"},{source:"75",target:"148"},{source:"75",target:"150"},{source:"75",target:"151"},{source:"75",target:"153"},{source:"75",target:"155"},{source:"75",target:"156"},{source:"75",target:"159"},{source:"75",target:"1053"},{source:"75",target:"160"},{source:"75",target:"161"},{source:"75",target:"315"},{source:"75",target:"164"},{source:"75",target:"165"},{source:"75",target:"166"},{source:"75",target:"167"},{source:"75",target:"230"},{source:"75",target:"1056"},{source:"75",target:"1059"},{source:"75",target:"284"},{source:"75",target:"137"},{source:"75",target:"290"},{source:"75",target:"291"},{source:"75",target:"292"},{source:"75",target:"293"},{source:"75",target:"294"},{source:"75",target:"139"},{source:"75",target:"295"},{source:"75",target:"140"},{source:"75",target:"1099"},{source:"75",target:"142"},{source:"75",target:"143"},{source:"75",target:"146"},{source:"75",target:"307"},{source:"75",target:"310"},{source:"75",target:"157"},{source:"75",target:"162"},{source:"75",target:"163"},{source:"75",target:"168"},{source:"76",target:"77"},{source:"76",target:"78"},{source:"78",target:"85"},{source:"78",target:"164"},{source:"80",target:"85"},{source:"80",target:"170"},{source:"80",target:"233"},{source:"80",target:"86"},{source:"80",target:"88"},{source:"81",target:"211"},{source:"81",target:"212"},{source:"81",target:"213"},{source:"81",target:"82"},{source:"81",target:"214"},{source:"81",target:"83"},{source:"81",target:"215"},{source:"81",target:"216"},{source:"81",target:"85"},{source:"81",target:"217"},{source:"81",target:"218"},{source:"81",target:"219"},{source:"81",target:"220"},{source:"81",target:"170"},{source:"81",target:"221"},{source:"81",target:"222"},{source:"81",target:"86"},{source:"81",target:"87"},{source:"81",target:"88"},{source:"81",target:"89"},{source:"81",target:"90"},{source:"81",target:"91"},{source:"81",target:"92"},{source:"81",target:"93"},{source:"81",target:"94"},{source:"81",target:"95"},{source:"81",target:"96"},{source:"81",target:"223"},{source:"81",target:"224"},{source:"81",target:"97"},{source:"81",target:"98"},{source:"81",target:"225"},{source:"81",target:"198"},{source:"81",target:"99"},{source:"81",target:"226"},{source:"81",target:"102"},{source:"81",target:"105"},{source:"81",target:"106"},{source:"81",target:"227"},{source:"81",target:"116"},{source:"81",target:"117"},{source:"81",target:"125"},{source:"81",target:"135"},{source:"81",target:"139"},{source:"81",target:"146"},{source:"81",target:"147"},{source:"81",target:"148"},{source:"81",target:"150"},{source:"81",target:"153"},{source:"81",target:"157"},{source:"81",target:"160"},{source:"81",target:"164"},{source:"81",target:"228"},{source:"81",target:"165"},{source:"81",target:"166"},{source:"81",target:"111"},{source:"81",target:"270"},{source:"81",target:"274"},{source:"81",target:"130"},{source:"81",target:"292"},{source:"81",target:"295"},{source:"82",target:"212"},{source:"82",target:"229"},{source:"82",target:"214"},{source:"82",target:"83"},{source:"82",target:"215"},{source:"82",target:"85"},{source:"82",target:"170"},{source:"82",target:"222"},{source:"82",target:"86"},{source:"82",target:"87"},{source:"82",target:"88"},{source:"82",target:"89"},{source:"82",target:"90"},{source:"82",target:"92"},{source:"82",target:"93"},{source:"82",target:"95"},{source:"82",target:"96"},{source:"82",target:"223"},{source:"82",target:"224"},{source:"82",target:"225"},{source:"82",target:"198"},{source:"82",target:"99"},{source:"82",target:"226"},{source:"82",target:"117"},{source:"82",target:"135"},{source:"82",target:"146"},{source:"82",target:"148"},{source:"82",target:"150"},{source:"82",target:"156"},{source:"82",target:"160"},{source:"82",target:"161"},{source:"82",target:"164"},{source:"82",target:"84"},{source:"82",target:"238"},{source:"83",target:"214"},{source:"83",target:"212"},{source:"83",target:"84"},{source:"83",target:"231"},{source:"83",target:"85"},{source:"83",target:"220"},{source:"83",target:"170"},{source:"83",target:"86"},{source:"83",target:"87"},{source:"83",target:"88"},{source:"83",target:"89"},{source:"83",target:"90"},{source:"83",target:"91"},{source:"83",target:"93"},{source:"83",target:"94"},{source:"83",target:"95"},{source:"83",target:"96"},{source:"83",target:"223"},{source:"83",target:"97"},{source:"83",target:"225"},{source:"83",target:"99"},{source:"83",target:"226"},{source:"83",target:"100"},{source:"83",target:"117"},{source:"83",target:"130"},{source:"83",target:"131"},{source:"83",target:"135"},{source:"83",target:"150"},{source:"83",target:"232"},{source:"83",target:"156"},{source:"83",target:"160"},{source:"83",target:"164"},{source:"84",target:"215"},{source:"84",target:"231"},{source:"84",target:"234"},{source:"84",target:"85"},{source:"84",target:"218"},{source:"84",target:"170"},{source:"84",target:"86"},{source:"84",target:"88"},{source:"84",target:"89"},{source:"84",target:"90"},{source:"84",target:"93"},{source:"84",target:"95"},{source:"84",target:"96"},{source:"84",target:"225"},{source:"84",target:"235"},{source:"84",target:"99"},{source:"84",target:"117"},{source:"84",target:"144"},{source:"84",target:"153"},{source:"84",target:"156"},{source:"84",target:"164"},{source:"84",target:"223"},{source:"85",target:"212"},{source:"85",target:"214"},{source:"85",target:"215"},{source:"85",target:"233"},{source:"85",target:"231"},{source:"85",target:"234"},{source:"85",target:"171"},{source:"85",target:"177"},{source:"85",target:"184"},{source:"85",target:"172"},{source:"85",target:"236"},{source:"85",target:"217"},{source:"85",target:"218"},{source:"85",target:"219"},{source:"85",target:"220"},{source:"85",target:"237"},{source:"85",target:"170"},{source:"85",target:"221"},{source:"85",target:"222"},{source:"85",target:"87"},{source:"85",target:"88"},{source:"85",target:"89"},{source:"85",target:"90"},{source:"85",target:"91"},{source:"85",target:"92"},{source:"85",target:"93"},{source:"85",target:"94"},{source:"85",target:"95"},{source:"85",target:"96"},{source:"85",target:"223"},{source:"85",target:"224"},{source:"85",target:"97"},{source:"85",target:"98"},{source:"85",target:"225"},{source:"85",target:"238"},{source:"85",target:"239"},{source:"85",target:"235"},{source:"85",target:"198"},{source:"85",target:"99"},{source:"85",target:"226"},{source:"85",target:"100"},{source:"85",target:"101"},{source:"85",target:"102"},{source:"85",target:"103"},{source:"85",target:"104"},{source:"85",target:"105"},{source:"85",target:"240"},{source:"85",target:"106"},{source:"85",target:"107"},{source:"85",target:"109"},{source:"85",target:"241"},{source:"85",target:"242"},{source:"85",target:"243"},{source:"85",target:"227"},{source:"85",target:"110"},{source:"85",target:"244"},{source:"85",target:"245"},{source:"85",target:"246"},{source:"85",target:"111"},{source:"85",target:"112"},{source:"85",target:"113"},{source:"85",target:"114"},{source:"85",target:"247"},{source:"85",target:"248"},{source:"85",target:"249"},{source:"85",target:"250"},{source:"85",target:"251"},{source:"85",target:"252"},{source:"85",target:"116"},{source:"85",target:"253"},{source:"85",target:"254"},{source:"85",target:"117"},{source:"85",target:"118"},{source:"85",target:"255"},{source:"85",target:"119"},{source:"85",target:"120"},{source:"85",target:"256"},{source:"85",target:"257"},{source:"85",target:"258"},{source:"85",target:"121"},{source:"85",target:"259"},{source:"85",target:"260"},{source:"85",target:"122"},{source:"85",target:"123"},{source:"85",target:"261"},{source:"85",target:"124"},{source:"85",target:"262"},{source:"85",target:"263"},{source:"85",target:"264"},{source:"85",target:"265"},{source:"85",target:"266"},{source:"85",target:"267"},{source:"85",target:"268"},{source:"85",target:"269"},{source:"85",target:"270"},{source:"85",target:"271"},{source:"85",target:"272"},{source:"85",target:"125"},{source:"85",target:"273"},{source:"85",target:"274"},{source:"85",target:"275"},{source:"85",target:"126"},{source:"85",target:"128"},{source:"85",target:"276"},{source:"85",target:"277"},{source:"85",target:"129"},{source:"85",target:"278"},{source:"85",target:"130"},{source:"85",target:"131"},{source:"85",target:"132"},{source:"85",target:"133"},{source:"85",target:"134"},{source:"85",target:"279"},{source:"85",target:"230"},{source:"85",target:"280"},{source:"85",target:"135"},{source:"85",target:"281"},{source:"85",target:"282"},{source:"85",target:"283"},{source:"85",target:"284"},{source:"85",target:"285"},{source:"85",target:"286"},{source:"85",target:"287"},{source:"85",target:"136"},{source:"85",target:"137"},{source:"85",target:"288"},{source:"85",target:"138"},{source:"85",target:"289"},{source:"85",target:"290"},{source:"85",target:"291"},{source:"85",target:"292"},{source:"85",target:"293"},{source:"85",target:"294"},{source:"85",target:"139"},{source:"85",target:"295"},{source:"85",target:"140"},{source:"85",target:"296"},{source:"85",target:"297"},{source:"85",target:"298"},{source:"85",target:"299"},{source:"85",target:"300"},{source:"85",target:"301"},{source:"85",target:"141"},{source:"85",target:"142"},{source:"85",target:"143"},{source:"85",target:"302"},{source:"85",target:"303"},{source:"85",target:"144"},{source:"85",target:"145"},{source:"85",target:"146"},{source:"85",target:"304"},{source:"85",target:"147"},{source:"85",target:"305"},{source:"85",target:"306"},{source:"85",target:"148"},{source:"85",target:"149"},{source:"85",target:"150"},{source:"85",target:"151"},{source:"85",target:"307"},{source:"85",target:"308"},{source:"85",target:"309"},{source:"85",target:"310"},{source:"85",target:"311"},{source:"85",target:"312"},{source:"85",target:"313"},{source:"85",target:"152"},{source:"85",target:"153"},{source:"85",target:"154"},{source:"85",target:"155"},{source:"85",target:"314"},{source:"85",target:"156"},{source:"85",target:"157"},{source:"85",target:"158"},{source:"85",target:"159"},{source:"85",target:"160"},{source:"85",target:"161"},{source:"85",target:"315"},{source:"85",target:"162"},{source:"85",target:"316"},{source:"85",target:"317"},{source:"85",target:"318"},{source:"85",target:"319"},{source:"85",target:"320"},{source:"85",target:"321"},{source:"85",target:"322"},{source:"85",target:"323"},{source:"85",target:"163"},{source:"85",target:"164"},{source:"85",target:"228"},{source:"85",target:"165"},{source:"85",target:"166"},{source:"85",target:"167"},{source:"85",target:"324"},{source:"85",target:"325"},{source:"85",target:"326"},{source:"85",target:"327"},{source:"85",target:"168"},{source:"85",target:"560"},{source:"85",target:"127"},{source:"85",target:"576"},{source:"85",target:"855"},{source:"85",target:"856"},{source:"85",target:"384"},{source:"86",target:"212"},{source:"86",target:"218"},{source:"86",target:"170"},{source:"86",target:"221"},{source:"86",target:"214"},{source:"86",target:"215"},{source:"86",target:"233"},{source:"86",target:"217"},{source:"86",target:"87"},{source:"86",target:"89"},{source:"86",target:"91"},{source:"86",target:"92"},{source:"86",target:"93"},{source:"86",target:"94"},{source:"86",target:"95"},{source:"86",target:"96"},{source:"86",target:"223"},{source:"86",target:"97"},{source:"86",target:"98"},{source:"86",target:"225"},{source:"86",target:"235"},{source:"86",target:"99"},{source:"86",target:"226"},{source:"86",target:"100"},{source:"86",target:"101"},{source:"86",target:"102"},{source:"86",target:"103"},{source:"86",target:"104"},{source:"86",target:"105"},{source:"86",target:"106"},{source:"86",target:"107"},{source:"86",target:"110"},{source:"86",target:"111"},{source:"86",target:"112"},{source:"86",target:"116"},{source:"86",target:"254"},{source:"86",target:"117"},{source:"86",target:"118"},{source:"86",target:"119"},{source:"86",target:"121"},{source:"86",target:"123"},{source:"86",target:"124"},{source:"86",target:"270"},{source:"86",target:"125"},{source:"86",target:"274"},{source:"86",target:"128"},{source:"86",target:"129"},{source:"86",target:"130"},{source:"86",target:"133"},{source:"86",target:"135"},{source:"86",target:"136"},{source:"86",target:"139"},{source:"86",target:"299"},{source:"86",target:"301"},{source:"86",target:"331"},{source:"86",target:"141"},{source:"86",target:"143"},{source:"86",target:"144"},{source:"86",target:"145"},{source:"86",target:"146"},{source:"86",target:"147"},{source:"86",target:"148"},{source:"86",target:"150"},{source:"86",target:"151"},{source:"86",target:"309"},{source:"86",target:"152"},{source:"86",target:"153"},{source:"86",target:"154"},{source:"86",target:"155"},{source:"86",target:"332"},{source:"86",target:"314"},{source:"86",target:"156"},{source:"86",target:"157"},{source:"86",target:"160"},{source:"86",target:"161"},{source:"86",target:"322"},{source:"86",target:"163"},{source:"86",target:"164"},{source:"86",target:"228"},{source:"86",target:"165"},{source:"86",target:"166"},{source:"86",target:"167"},{source:"86",target:"168"},{source:"86",target:"241"},{source:"86",target:"113"},{source:"86",target:"282"},{source:"86",target:"294"},{source:"86",target:"295"},{source:"86",target:"307"},{source:"87",target:"212"},{source:"87",target:"170"},{source:"87",target:"222"},{source:"87",target:"88"},{source:"87",target:"89"},{source:"87",target:"96"},{source:"87",target:"97"},{source:"87",target:"226"},{source:"87",target:"330"},{source:"87",target:"135"},{source:"87",target:"90"},{source:"87",target:"91"},{source:"87",target:"92"},{source:"87",target:"94"},{source:"87",target:"95"},{source:"87",target:"98"},{source:"87",target:"238"},{source:"88",target:"212"},{source:"88",target:"233"},{source:"88",target:"170"},{source:"88",target:"89"},{source:"88",target:"91"},{source:"88",target:"92"},{source:"88",target:"93"},{source:"88",target:"94"},{source:"88",target:"95"},{source:"88",target:"96"},{source:"88",target:"224"},{source:"88",target:"97"},{source:"88",target:"98"},{source:"88",target:"225"},{source:"88",target:"235"},{source:"88",target:"99"},{source:"88",target:"101"},{source:"88",target:"105"},{source:"88",target:"106"},{source:"88",target:"116"},{source:"88",target:"117"},{source:"88",target:"135"},{source:"88",target:"151"},{source:"88",target:"153"},{source:"88",target:"156"},{source:"88",target:"160"},{source:"88",target:"161"},{source:"88",target:"164"},{source:"88",target:"165"},{source:"88",target:"166"},{source:"88",target:"223"},{source:"88",target:"150"},{source:"88",target:"163"},{source:"89",target:"212"},{source:"89",target:"215"},{source:"89",target:"216"},{source:"89",target:"218"},{source:"89",target:"219"},{source:"89",target:"220"},{source:"89",target:"170"},{source:"89",target:"221"},{source:"89",target:"222"},{source:"89",target:"234"},{source:"89",target:"90"},{source:"89",target:"91"},{source:"89",target:"92"},{source:"89",target:"93"},{source:"89",target:"94"},{source:"89",target:"95"},{source:"89",target:"96"},{source:"89",target:"223"},{source:"89",target:"224"},{source:"89",target:"97"},{source:"89",target:"98"},{source:"89",target:"225"},{source:"89",target:"239"},{source:"89",target:"99"},{source:"89",target:"105"},{source:"89",target:"117"},{source:"89",target:"135"},{source:"89",target:"144"},{source:"89",target:"148"},{source:"89",target:"149"},{source:"89",target:"150"},{source:"89",target:"151"},{source:"89",target:"153"},{source:"89",target:"156"},{source:"89",target:"159"},{source:"89",target:"160"},{source:"89",target:"163"},{source:"89",target:"164"},{source:"89",target:"165"},{source:"89",target:"166"},{source:"89",target:"324"},{source:"89",target:"235"},{source:"89",target:"102"},{source:"90",target:"233"},{source:"90",target:"170"},{source:"90",target:"329"},{source:"90",target:"231"},{source:"90",target:"234"},{source:"90",target:"217"},{source:"90",target:"91"},{source:"90",target:"92"},{source:"90",target:"93"},{source:"90",target:"95"},{source:"90",target:"96"},{source:"90",target:"223"},{source:"90",target:"97"},{source:"90",target:"98"},{source:"90",target:"225"},{source:"90",target:"235"},{source:"90",target:"99"},{source:"90",target:"100"},{source:"90",target:"101"},{source:"90",target:"103"},{source:"90",target:"105"},{source:"90",target:"106"},{source:"90",target:"117"},{source:"90",target:"135"},{source:"90",target:"136"},{source:"90",target:"331"},{source:"90",target:"146"},{source:"90",target:"147"},{source:"90",target:"148"},{source:"90",target:"150"},{source:"90",target:"151"},{source:"90",target:"334"},{source:"90",target:"153"},{source:"90",target:"155"},{source:"90",target:"156"},{source:"90",target:"160"},{source:"90",target:"161"},{source:"90",target:"320"},{source:"90",target:"163"},{source:"90",target:"164"},{source:"90",target:"165"},{source:"90",target:"166"},{source:"90",target:"94"},{source:"90",target:"266"},{source:"91",target:"212"},{source:"91",target:"170"},{source:"91",target:"92"},{source:"91",target:"93"},{source:"91",target:"95"},{source:"91",target:"96"},{source:"91",target:"223"},{source:"91",target:"225"},{source:"91",target:"226"},{source:"91",target:"227"},{source:"91",target:"111"},{source:"91",target:"117"},{source:"91",target:"125"},{source:"91",target:"274"},{source:"91",target:"130"},{source:"91",target:"135"},{source:"91",target:"292"},{source:"91",target:"139"},{source:"91",target:"295"},{source:"91",target:"150"},{source:"91",target:"153"},{source:"91",target:"157"},{source:"91",target:"164"},{source:"91",target:"102"},{source:"91",target:"103"},{source:"91",target:"241"},{source:"91",target:"270"},{source:"91",target:"277"},{source:"91",target:"143"},{source:"91",target:"310"},{source:"91",target:"316"},{source:"92",target:"211"},{source:"92",target:"212"},{source:"92",target:"213"},{source:"92",target:"220"},{source:"92",target:"170"},{source:"92",target:"214"},{source:"92",target:"93"},{source:"92",target:"94"},{source:"92",target:"96"},{source:"92",target:"223"},{source:"92",target:"97"},{source:"92",target:"98"},{source:"92",target:"225"},{source:"92",target:"226"},{source:"92",target:"135"},{source:"92",target:"164"},{source:"93",target:"231"},{source:"93",target:"170"},{source:"93",target:"94"},{source:"93",target:"95"},{source:"93",target:"96"},{source:"93",target:"97"},{source:"93",target:"98"},{source:"93",target:"225"},{source:"93",target:"235"},{source:"93",target:"99"},{source:"93",target:"223"},{source:"94",target:"170"},{source:"94",target:"212"},{source:"94",target:"214"},{source:"94",target:"216"},{source:"94",target:"234"},{source:"94",target:"221"},{source:"94",target:"222"},{source:"94",target:"95"},{source:"94",target:"96"},{source:"94",target:"98"},{source:"94",target:"225"},{source:"94",target:"226"},{source:"94",target:"117"},{source:"94",target:"125"},{source:"94",target:"135"},{source:"94",target:"150"},{source:"94",target:"157"},{source:"94",target:"164"},{source:"94",target:"139"},{source:"95",target:"231"},{source:"95",target:"170"},{source:"95",target:"96"},{source:"95",target:"223"},{source:"95",target:"105"},{source:"95",target:"164"},{source:"95",target:"98"},{source:"96",target:"212"},{source:"96",target:"214"},{source:"96",target:"218"},{source:"96",target:"220"},{source:"96",target:"170"},{source:"96",target:"329"},{source:"96",target:"211"},{source:"96",target:"215"},{source:"96",target:"233"},{source:"96",target:"216"},{source:"96",target:"217"},{source:"96",target:"219"},{source:"96",target:"221"},{source:"96",target:"222"},{source:"96",target:"223"},{source:"96",target:"224"},{source:"96",target:"97"},{source:"96",target:"98"},{source:"96",target:"225"},{source:"96",target:"239"},{source:"96",target:"235"},{source:"96",target:"198"},{source:"96",target:"99"},{source:"96",target:"226"},{source:"96",target:"100"},{source:"96",target:"101"},{source:"96",target:"102"},{source:"96",target:"103"},{source:"96",target:"105"},{source:"96",target:"107"},{source:"96",target:"116"},{source:"96",target:"117"},{source:"96",target:"270"},{source:"96",target:"125"},{source:"96",target:"274"},{source:"96",target:"130"},{source:"96",target:"230"},{source:"96",target:"135"},{source:"96",target:"136"},{source:"96",target:"139"},{source:"96",target:"141"},{source:"96",target:"146"},{source:"96",target:"147"},{source:"96",target:"148"},{source:"96",target:"150"},{source:"96",target:"151"},{source:"96",target:"153"},{source:"96",target:"156"},{source:"96",target:"157"},{source:"96",target:"158"},{source:"96",target:"160"},{source:"96",target:"161"},{source:"96",target:"163"},{source:"96",target:"164"},{source:"96",target:"228"},{source:"96",target:"165"},{source:"96",target:"166"},{source:"96",target:"241"},{source:"96",target:"227"},{source:"96",target:"111"},{source:"96",target:"118"},{source:"96",target:"277"},{source:"96",target:"292"},{source:"96",target:"293"},{source:"96",target:"296"},{source:"96",target:"143"},{source:"96",target:"307"},{source:"96",target:"152"},{source:"97",target:"328"},{source:"97",target:"223"},{source:"97",target:"224"},{source:"97",target:"212"},{source:"97",target:"234"},{source:"97",target:"226"},{source:"97",target:"164"},{source:"97",target:"228"},{source:"98",target:"212"},{source:"98",target:"215"},{source:"98",target:"216"},{source:"98",target:"219"},{source:"98",target:"170"},{source:"98",target:"223"},{source:"98",target:"224"},{source:"98",target:"214"},{source:"98",target:"225"},{source:"98",target:"226"},{source:"98",target:"135"},{source:"98",target:"99"},{source:"98",target:"164"},{source:"99",target:"215"},{source:"99",target:"347"},{source:"99",target:"235"},{source:"99",target:"212"},{source:"99",target:"170"},{source:"99",target:"117"},{source:"99",target:"135"},{source:"99",target:"151"},{source:"99",target:"156"},{source:"99",target:"161"},{source:"99",target:"322"},{source:"99",target:"164"},{source:"100",target:"101"},{source:"100",target:"105"},{source:"100",target:"106"},{source:"100",target:"107"},{source:"100",target:"108"},{source:"100",target:"348"},{source:"100",target:"109"},{source:"100",target:"117"},{source:"100",target:"136"},{source:"100",target:"155"},{source:"100",target:"160"},{source:"101",target:"102"},{source:"101",target:"103"},{source:"101",target:"104"},{source:"101",target:"349"},{source:"101",target:"105"},{source:"101",target:"106"},{source:"101",target:"107"},{source:"101",target:"108"},{source:"101",target:"348"},{source:"101",target:"109"},{source:"101",target:"160"},{source:"101",target:"164"},{source:"101",target:"117"},{source:"101",target:"134"},{source:"101",target:"136"},{source:"101",target:"292"},{source:"101",target:"153"},{source:"101",target:"155"},{source:"101",target:"156"},{source:"102",target:"104"},{source:"102",target:"105"},{source:"102",target:"106"},{source:"102",target:"109"},{source:"102",target:"117"},{source:"102",target:"125"},{source:"102",target:"139"},{source:"102",target:"164"},{source:"102",target:"130"},{source:"102",target:"136"},{source:"102",target:"157"},{source:"103",target:"353"},{source:"103",target:"105"},{source:"103",target:"106"},{source:"103",target:"107"},{source:"103",target:"108"},{source:"103",target:"348"},{source:"103",target:"354"},{source:"103",target:"109"},{source:"103",target:"117"},{source:"103",target:"130"},{source:"103",target:"136"},{source:"103",target:"139"},{source:"103",target:"144"},{source:"103",target:"145"},{source:"103",target:"150"},{source:"103",target:"153"},{source:"103",target:"156"},{source:"103",target:"157"},{source:"103",target:"160"},{source:"103",target:"164"},{source:"103",target:"355"},{source:"103",target:"240"},{source:"103",target:"134"},{source:"103",target:"155"},{source:"104",target:"106"},{source:"104",target:"107"},{source:"104",target:"117"},{source:"104",target:"136"},{source:"104",target:"153"},{source:"104",target:"160"},{source:"104",target:"164"},{source:"105",target:"355"},{source:"105",target:"106"},{source:"105",target:"107"},{source:"105",target:"356"},{source:"105",target:"109"},{source:"105",target:"227"},{source:"105",target:"117"},{source:"105",target:"136"},{source:"105",target:"297"},{source:"105",target:"334"},{source:"105",target:"153"},{source:"105",target:"155"},{source:"105",target:"156"},{source:"105",target:"157"},{source:"105",target:"320"},{source:"105",target:"165"},{source:"105",target:"357"},{source:"105",target:"111"},{source:"105",target:"455"},{source:"105",target:"741"},{source:"105",target:"125"},{source:"105",target:"134"},{source:"105",target:"1050"},{source:"105",target:"137"},{source:"105",target:"160"},{source:"105",target:"164"},{source:"106",target:"349"},{source:"106",target:"358"},{source:"106",target:"107"},{source:"106",target:"108"},{source:"106",target:"359"},{source:"106",target:"348"},{source:"106",target:"109"},{source:"106",target:"136"},{source:"106",target:"164"},{source:"106",target:"117"},{source:"106",target:"118"},{source:"106",target:"153"},{source:"106",target:"160"},{source:"107",target:"361"},{source:"107",target:"108"},{source:"107",target:"109"},{source:"107",target:"357"},{source:"107",target:"348"},{source:"107",target:"117"},{source:"107",target:"1313"},{source:"107",target:"1695"},{source:"108",target:"352"},{source:"108",target:"240"},{source:"108",target:"362"},{source:"108",target:"160"},{source:"109",target:"363"},{source:"109",target:"357"},{source:"110",target:"241"},{source:"110",target:"242"},{source:"110",target:"243"},{source:"110",target:"388"},{source:"110",target:"402"},{source:"110",target:"403"},{source:"110",target:"336"},{source:"110",target:"244"},{source:"110",target:"404"},{source:"110",target:"245"},{source:"110",target:"405"},{source:"110",target:"406"},{source:"110",target:"246"},{source:"110",target:"391"},{source:"110",target:"407"},{source:"110",target:"392"},{source:"110",target:"408"},{source:"110",target:"111"},{source:"110",target:"409"},{source:"110",target:"112"},{source:"110",target:"410"},{source:"110",target:"411"},{source:"110",target:"114"},{source:"110",target:"247"},{source:"110",target:"393"},{source:"110",target:"401"},{source:"110",target:"248"},{source:"110",target:"394"},{source:"110",target:"369"},{source:"110",target:"117"},{source:"110",target:"270"},{source:"110",target:"125"},{source:"110",target:"128"},{source:"110",target:"129"},{source:"110",target:"282"},{source:"110",target:"412"},{source:"110",target:"292"},{source:"110",target:"294"},{source:"110",target:"139"},{source:"110",target:"295"},{source:"110",target:"140"},{source:"110",target:"296"},{source:"110",target:"301"},{source:"110",target:"141"},{source:"110",target:"142"},{source:"110",target:"143"},{source:"110",target:"307"},{source:"110",target:"310"},{source:"110",target:"312"},{source:"110",target:"152"},{source:"110",target:"153"},{source:"110",target:"156"},{source:"110",target:"119"},{source:"110",target:"271"},{source:"110",target:"272"},{source:"110",target:"273"},{source:"110",target:"274"},{source:"110",target:"130"},{source:"110",target:"1061"},{source:"110",target:"283"},{source:"110",target:"284"},{source:"110",target:"285"},{source:"110",target:"286"},{source:"110",target:"1073"},{source:"110",target:"287"},{source:"110",target:"290"},{source:"110",target:"372"},{source:"110",target:"291"},{source:"110",target:"293"},{source:"110",target:"855"},{source:"110",target:"1129"},{source:"110",target:"1130"},{source:"110",target:"308"},{source:"110",target:"309"},{source:"110",target:"311"},{source:"110",target:"322"},{source:"110",target:"164"},{source:"111",target:"241"},{source:"111",target:"242"},{source:"111",target:"227"},{source:"111",target:"388"},{source:"111",target:"368"},{source:"111",target:"244"},{source:"111",target:"405"},{source:"111",target:"246"},{source:"111",target:"391"},{source:"111",target:"392"},{source:"111",target:"243"},{source:"111",target:"402"},{source:"111",target:"403"},{source:"111",target:"422"},{source:"111",target:"407"},{source:"111",target:"408"},{source:"111",target:"409"},{source:"111",target:"399"},{source:"111",target:"112"},{source:"111",target:"410"},{source:"111",target:"113"},{source:"111",target:"114"},{source:"111",target:"393"},{source:"111",target:"401"},{source:"111",target:"248"},{source:"111",target:"394"},{source:"111",target:"369"},{source:"111",target:"249"},{source:"111",target:"117"},{source:"111",target:"121"},{source:"111",target:"265"},{source:"111",target:"270"},{source:"111",target:"272"},{source:"111",target:"125"},{source:"111",target:"274"},{source:"111",target:"282"},{source:"111",target:"283"},{source:"111",target:"287"},{source:"111",target:"290"},{source:"111",target:"292"},{source:"111",target:"139"},{source:"111",target:"295"},{source:"111",target:"140"},{source:"111",target:"296"},{source:"111",target:"298"},{source:"111",target:"301"},{source:"111",target:"331"},{source:"111",target:"141"},{source:"111",target:"143"},{source:"111",target:"310"},{source:"111",target:"153"},{source:"111",target:"156"},{source:"111",target:"157"},{source:"111",target:"316"},{source:"111",target:"164"},{source:"111",target:"168"},{source:"111",target:"425"},{source:"111",target:"1073"},{source:"111",target:"294"},{source:"112",target:"241"},{source:"112",target:"242"},{source:"112",target:"243"},{source:"112",target:"388"},{source:"112",target:"396"},{source:"112",target:"403"},{source:"112",target:"368"},{source:"112",target:"244"},{source:"112",target:"404"},{source:"112",target:"245"},{source:"112",target:"405"},{source:"112",target:"406"},{source:"112",target:"246"},{source:"112",target:"391"},{source:"112",target:"407"},{source:"112",target:"392"},{source:"112",target:"408"},{source:"112",target:"399"},{source:"112",target:"410"},{source:"112",target:"113"},{source:"112",target:"411"},{source:"112",target:"114"},{source:"112",target:"247"},{source:"112",target:"401"},{source:"112",target:"248"},{source:"112",target:"394"},{source:"112",target:"423"},{source:"112",target:"369"},{source:"112",target:"117"},{source:"112",target:"270"},{source:"112",target:"301"},{source:"112",target:"141"},{source:"112",target:"153"},{source:"112",target:"156"},{source:"112",target:"322"},{source:"112",target:"164"},{source:"112",target:"118"},{source:"112",target:"271"},{source:"112",target:"268"},{source:"112",target:"371"},{source:"112",target:"125"},{source:"112",target:"274"},{source:"112",target:"128"},{source:"112",target:"129"},{source:"112",target:"130"},{source:"112",target:"282"},{source:"112",target:"283"},{source:"112",target:"1073"},{source:"112",target:"287"},{source:"112",target:"290"},{source:"112",target:"291"},{source:"112",target:"292"},{source:"112",target:"293"},{source:"112",target:"294"},{source:"112",target:"139"},{source:"112",target:"295"},{source:"112",target:"140"},{source:"112",target:"296"},{source:"112",target:"297"},{source:"112",target:"142"},{source:"112",target:"143"},{source:"112",target:"302"},{source:"112",target:"303"},{source:"112",target:"307"},{source:"112",target:"310"},{source:"112",target:"321"},{source:"113",target:"241"},{source:"113",target:"242"},{source:"113",target:"243"},{source:"113",target:"388"},{source:"113",target:"244"},{source:"113",target:"422"},{source:"113",target:"245"},{source:"113",target:"246"},{source:"113",target:"391"},{source:"113",target:"392"},{source:"113",target:"408"},{source:"113",target:"409"},{source:"113",target:"410"},{source:"113",target:"405"},{source:"113",target:"406"},{source:"113",target:"426"},{source:"113",target:"411"},{source:"113",target:"114"},{source:"113",target:"247"},{source:"113",target:"393"},{source:"113",target:"401"},{source:"113",target:"248"},{source:"113",target:"394"},{source:"113",target:"369"},{source:"113",target:"117"},{source:"113",target:"270"},{source:"113",target:"125"},{source:"113",target:"139"},{source:"113",target:"140"},{source:"113",target:"427"},{source:"113",target:"301"},{source:"113",target:"141"},{source:"113",target:"312"},{source:"113",target:"153"},{source:"113",target:"157"},{source:"113",target:"158"},{source:"113",target:"118"},{source:"113",target:"121"},{source:"113",target:"268"},{source:"113",target:"370"},{source:"113",target:"272"},{source:"113",target:"371"},{source:"113",target:"273"},{source:"113",target:"274"},{source:"113",target:"275"},{source:"113",target:"128"},{source:"113",target:"129"},{source:"113",target:"825"},{source:"113",target:"282"},{source:"113",target:"1061"},{source:"113",target:"283"},{source:"113",target:"284"},{source:"113",target:"285"},{source:"113",target:"286"},{source:"113",target:"412"},{source:"113",target:"1073"},{source:"113",target:"287"},{source:"113",target:"290"},{source:"113",target:"372"},{source:"113",target:"291"},{source:"113",target:"292"},{source:"113",target:"293"},{source:"113",target:"294"},{source:"113",target:"1065"},{source:"113",target:"295"},{source:"113",target:"1129"},{source:"113",target:"1130"},{source:"113",target:"296"},{source:"113",target:"142"},{source:"113",target:"143"},{source:"113",target:"307"},{source:"113",target:"308"},{source:"113",target:"309"},{source:"113",target:"310"},{source:"113",target:"311"},{source:"113",target:"156"},{source:"114",target:"241"},{source:"114",target:"242"},{source:"114",target:"243"},{source:"114",target:"388"},{source:"114",target:"403"},{source:"114",target:"244"},{source:"114",target:"404"},{source:"114",target:"246"},{source:"114",target:"391"},{source:"114",target:"392"},{source:"114",target:"402"},{source:"114",target:"368"},{source:"114",target:"406"},{source:"114",target:"424"},{source:"114",target:"247"},{source:"114",target:"369"},{source:"114",target:"117"},{source:"114",target:"118"},{source:"114",target:"301"},{source:"114",target:"141"},{source:"114",target:"153"},{source:"114",target:"121"},{source:"114",target:"267"},{source:"114",target:"272"},{source:"114",target:"125"},{source:"114",target:"275"},{source:"114",target:"128"},{source:"114",target:"129"},{source:"114",target:"378"},{source:"114",target:"282"},{source:"114",target:"1060"},{source:"114",target:"284"},{source:"114",target:"412"},{source:"114",target:"1073"},{source:"114",target:"290"},{source:"114",target:"291"},{source:"114",target:"292"},{source:"114",target:"293"},{source:"114",target:"294"},{source:"114",target:"139"},{source:"114",target:"855"},{source:"114",target:"295"},{source:"114",target:"140"},{source:"114",target:"296"},{source:"114",target:"142"},{source:"114",target:"143"},{source:"114",target:"302"},{source:"114",target:"303"},{source:"114",target:"307"},{source:"114",target:"309"},{source:"114",target:"310"},{source:"114",target:"156"},{source:"114",target:"164"},{source:"115",target:"441"},{source:"115",target:"490"},{source:"116",target:"507"},{source:"116",target:"508"},{source:"116",target:"253"},{source:"116",target:"509"},{source:"116",target:"510"},{source:"116",target:"511"},{source:"116",target:"512"},{source:"116",target:"150"},{source:"116",target:"151"},{source:"116",target:"160"},{source:"116",target:"161"},{source:"116",target:"163"},{source:"116",target:"164"},{source:"116",target:"167"},{source:"116",target:"515"},{source:"116",target:"513"},{source:"116",target:"518"},{source:"116",target:"254"},{source:"116",target:"520"},{source:"116",target:"523"},{source:"117",target:"241"},{source:"117",target:"242"},{source:"117",target:"243"},{source:"117",target:"227"},{source:"117",target:"244"},{source:"117",target:"245"},{source:"117",target:"542"},{source:"117",target:"177"},{source:"117",target:"218"},{source:"117",target:"170"},{source:"117",target:"402"},{source:"117",target:"368"},{source:"117",target:"404"},{source:"117",target:"246"},{source:"117",target:"407"},{source:"117",target:"410"},{source:"117",target:"411"},{source:"117",target:"247"},{source:"117",target:"248"},{source:"117",target:"394"},{source:"117",target:"369"},{source:"117",target:"249"},{source:"117",target:"529"},{source:"117",target:"543"},{source:"117",target:"118"},{source:"117",target:"544"},{source:"117",target:"545"},{source:"117",target:"255"},{source:"117",target:"546"},{source:"117",target:"547"},{source:"117",target:"548"},{source:"117",target:"119"},{source:"117",target:"549"},{source:"117",target:"550"},{source:"117",target:"551"},{source:"117",target:"552"},{source:"117",target:"535"},{source:"117",target:"528"},{source:"117",target:"553"},{source:"117",target:"554"},{source:"117",target:"534"},{source:"117",target:"555"},{source:"117",target:"537"},{source:"117",target:"120"},{source:"117",target:"556"},{source:"117",target:"256"},{source:"117",target:"257"},{source:"117",target:"557"},{source:"117",target:"558"},{source:"117",target:"258"},{source:"117",target:"559"},{source:"117",target:"121"},{source:"117",target:"560"},{source:"117",target:"561"},{source:"117",target:"259"},{source:"117",target:"562"},{source:"117",target:"260"},{source:"117",target:"563"},{source:"117",target:"564"},{source:"117",target:"122"},{source:"117",target:"565"},{source:"117",target:"123"},{source:"117",target:"124"},{source:"117",target:"566"},{source:"117",target:"263"},{source:"117",target:"266"},{source:"117",target:"270"},{source:"117",target:"271"},{source:"117",target:"268"},{source:"117",target:"125"},{source:"117",target:"273"},{source:"117",target:"274"},{source:"117",target:"567"},{source:"117",target:"568"},{source:"117",target:"569"},{source:"117",target:"570"},{source:"117",target:"126"},{source:"117",target:"127"},{source:"117",target:"571"},{source:"117",target:"128"},{source:"117",target:"276"},{source:"117",target:"572"},{source:"117",target:"277"},{source:"117",target:"129"},{source:"117",target:"278"},{source:"117",target:"130"},{source:"117",target:"573"},{source:"117",target:"131"},{source:"117",target:"574"},{source:"117",target:"575"},{source:"117",target:"132"},{source:"117",target:"133"},{source:"117",target:"576"},{source:"117",target:"134"},{source:"117",target:"279"},{source:"117",target:"282"},{source:"117",target:"283"},{source:"117",target:"286"},{source:"117",target:"136"},{source:"117",target:"290"},{source:"117",target:"292"},{source:"117",target:"139"},{source:"117",target:"295"},{source:"117",target:"296"},{source:"117",target:"298"},{source:"117",target:"301"},{source:"117",target:"141"},{source:"117",target:"577"},{source:"117",target:"142"},{source:"117",target:"143"},{source:"117",target:"302"},{source:"117",target:"578"},{source:"117",target:"303"},{source:"117",target:"579"},{source:"117",target:"144"},{source:"117",target:"145"},{source:"117",target:"150"},{source:"117",target:"151"},{source:"117",target:"307"},{source:"117",target:"309"},{source:"117",target:"310"},{source:"117",target:"311"},{source:"117",target:"152"},{source:"117",target:"580"},{source:"117",target:"153"},{source:"117",target:"154"},{source:"117",target:"155"},{source:"117",target:"332"},{source:"117",target:"341"},{source:"117",target:"156"},{source:"117",target:"157"},{source:"117",target:"160"},{source:"117",target:"316"},{source:"117",target:"321"},{source:"117",target:"322"},{source:"117",target:"164"},{source:"117",target:"581"},{source:"117",target:"327"},{source:"117",target:"582"},{source:"117",target:"168"},{source:"117",target:"583"},{source:"117",target:"584"},{source:"117",target:"585"},{source:"117",target:"586"},{source:"117",target:"587"},{source:"117",target:"588"},{source:"117",target:"678"},{source:"117",target:"705"},{source:"117",target:"291"},{source:"117",target:"293"},{source:"117",target:"294"},{source:"117",target:"140"},{source:"118",target:"533"},{source:"118",target:"241"},{source:"118",target:"245"},{source:"118",target:"246"},{source:"118",target:"248"},{source:"118",target:"529"},{source:"118",target:"545"},{source:"118",target:"255"},{source:"118",target:"119"},{source:"118",target:"549"},{source:"118",target:"535"},{source:"118",target:"556"},{source:"118",target:"258"},{source:"118",target:"260"},{source:"118",target:"563"},{source:"118",target:"123"},{source:"118",target:"126"},{source:"118",target:"128"},{source:"118",target:"129"},{source:"118",target:"130"},{source:"118",target:"133"},{source:"118",target:"301"},{source:"118",target:"143"},{source:"118",target:"152"},{source:"118",target:"154"},{source:"118",target:"156"},{source:"118",target:"327"},{source:"118",target:"168"},{source:"118",target:"587"},{source:"118",target:"553"},{source:"118",target:"121"},{source:"118",target:"142"},{source:"118",target:"153"},{source:"118",target:"164"},{source:"119",target:"244"},{source:"119",target:"533"},{source:"119",target:"255"},{source:"119",target:"543"},{source:"119",target:"552"},{source:"119",target:"535"},{source:"119",target:"120"},{source:"119",target:"563"},{source:"119",target:"130"},{source:"119",target:"156"},{source:"119",target:"321"},{source:"119",target:"322"},{source:"119",target:"327"},{source:"119",target:"582"},{source:"119",target:"168"},{source:"119",target:"586"},{source:"119",target:"587"},{source:"119",target:"584"},{source:"120",target:"255"},{source:"120",target:"547"},{source:"120",target:"614"},{source:"120",target:"599"},{source:"120",target:"533"},{source:"120",target:"543"},{source:"120",target:"549"},{source:"120",target:"550"},{source:"120",target:"535"},{source:"120",target:"258"},{source:"120",target:"143"},{source:"121",target:"626"},{source:"121",target:"625"},{source:"121",target:"257"},{source:"121",target:"654"},{source:"121",target:"657"},{source:"121",target:"630"},{source:"121",target:"623"},{source:"121",target:"559"},{source:"121",target:"653"},{source:"121",target:"229"},{source:"121",target:"245"},{source:"121",target:"246"},{source:"121",target:"627"},{source:"121",target:"560"},{source:"121",target:"666"},{source:"121",target:"561"},{source:"121",target:"667"},{source:"121",target:"656"},{source:"121",target:"259"},{source:"121",target:"660"},{source:"121",target:"260"},{source:"121",target:"645"},{source:"121",target:"638"},{source:"121",target:"263"},{source:"121",target:"128"},{source:"121",target:"133"},{source:"121",target:"142"},{source:"121",target:"143"},{source:"121",target:"302"},{source:"121",target:"303"},{source:"121",target:"153"},{source:"121",target:"156"},{source:"121",target:"631"},{source:"121",target:"674"},{source:"121",target:"129"},{source:"122",target:"676"},{source:"122",target:"679"},{source:"122",target:"683"},{source:"122",target:"686"},{source:"122",target:"563"},{source:"122",target:"564"},{source:"122",target:"691"},{source:"122",target:"693"},{source:"122",target:"694"},{source:"122",target:"565"},{source:"122",target:"123"},{source:"122",target:"130"},{source:"122",target:"132"},{source:"122",target:"134"},{source:"122",target:"698"},{source:"122",target:"279"},{source:"123",target:"704"},{source:"123",target:"705"},{source:"123",target:"713"},{source:"123",target:"261"},{source:"123",target:"714"},{source:"123",target:"710"},{source:"123",target:"124"},{source:"123",target:"707"},{source:"123",target:"262"},{source:"123",target:"715"},{source:"123",target:"716"},{source:"123",target:"132"},{source:"123",target:"717"},{source:"123",target:"133"},{source:"123",target:"152"},{source:"123",target:"153"},{source:"123",target:"156"},{source:"123",target:"718"},{source:"123",target:"977"},{source:"123",target:"978"},{source:"123",target:"576"},{source:"123",target:"134"},{source:"123",target:"279"},{source:"123",target:"144"},{source:"124",target:"702"},{source:"124",target:"703"},{source:"124",target:"708"},{source:"124",target:"711"},{source:"124",target:"718"},{source:"124",target:"720"},{source:"124",target:"710"},{source:"124",target:"722"},{source:"124",target:"707"},{source:"124",target:"724"},{source:"124",target:"132"},{source:"124",target:"144"},{source:"124",target:"145"},{source:"124",target:"152"},{source:"124",target:"153"},{source:"124",target:"156"},{source:"124",target:"262"},{source:"125",target:"241"},{source:"125",target:"242"},{source:"125",target:"243"},{source:"125",target:"227"},{source:"125",target:"374"},{source:"125",target:"823"},{source:"125",target:"270"},{source:"125",target:"370"},{source:"125",target:"847"},{source:"125",target:"846"},{source:"125",target:"371"},{source:"125",target:"848"},{source:"125",target:"368"},{source:"125",target:"245"},{source:"125",target:"246"},{source:"125",target:"248"},{source:"125",target:"369"},{source:"125",target:"852"},{source:"125",target:"853"},{source:"125",target:"849"},{source:"125",target:"854"},{source:"125",target:"378"},{source:"125",target:"850"},{source:"125",target:"282"},{source:"125",target:"284"},{source:"125",target:"286"},{source:"125",target:"292"},{source:"125",target:"293"},{source:"125",target:"139"},{source:"125",target:"855"},{source:"125",target:"295"},{source:"125",target:"856"},{source:"125",target:"296"},{source:"125",target:"307"},{source:"125",target:"309"},{source:"125",target:"310"},{source:"125",target:"311"},{source:"125",target:"157"},{source:"125",target:"857"},{source:"125",target:"316"},{source:"125",target:"164"},{source:"125",target:"277"},{source:"125",target:"130"},{source:"125",target:"283"},{source:"125",target:"285"},{source:"125",target:"1093"},{source:"125",target:"290"},{source:"125",target:"291"},{source:"125",target:"294"},{source:"125",target:"140"},{source:"125",target:"141"},{source:"125",target:"142"},{source:"125",target:"302"},{source:"125",target:"384"},{source:"125",target:"153"},{source:"126",target:"864"},{source:"126",target:"567"},{source:"126",target:"868"},{source:"126",target:"874"},{source:"126",target:"568"},{source:"126",target:"878"},{source:"126",target:"569"},{source:"126",target:"888"},{source:"126",target:"880"},{source:"126",target:"889"},{source:"126",target:"570"},{source:"126",target:"127"},{source:"126",target:"276"},{source:"126",target:"277"},{source:"126",target:"129"},{source:"126",target:"866"},{source:"127",target:"568"},{source:"127",target:"569"},{source:"127",target:"570"},{source:"127",target:"881"},{source:"127",target:"880"},{source:"127",target:"128"},{source:"127",target:"892"},{source:"127",target:"277"},{source:"128",target:"863"},{source:"128",target:"568"},{source:"128",target:"569"},{source:"128",target:"880"},{source:"128",target:"890"},{source:"128",target:"881"},{source:"128",target:"865"},{source:"128",target:"368"},{source:"128",target:"245"},{source:"128",target:"246"},{source:"128",target:"248"},{source:"128",target:"895"},{source:"128",target:"877"},{source:"128",target:"878"},{source:"128",target:"886"},{source:"128",target:"879"},{source:"128",target:"893"},{source:"128",target:"896"},{source:"128",target:"276"},{source:"128",target:"882"},{source:"128",target:"866"},{source:"128",target:"891"},{source:"128",target:"897"},{source:"128",target:"277"},{source:"128",target:"129"},{source:"128",target:"130"},{source:"128",target:"139"},{source:"128",target:"301"},{source:"128",target:"142"},{source:"128",target:"143"},{source:"128",target:"302"},{source:"128",target:"164"},{source:"128",target:"291"},{source:"128",target:"578"},{source:"128",target:"303"},{source:"128",target:"307"},{source:"129",target:"868"},{source:"129",target:"568"},{source:"129",target:"569"},{source:"129",target:"880"},{source:"129",target:"889"},{source:"129",target:"570"},{source:"129",target:"881"},{source:"129",target:"866"},{source:"129",target:"891"},{source:"129",target:"245"},{source:"129",target:"246"},{source:"129",target:"411"},{source:"129",target:"369"},{source:"129",target:"867"},{source:"129",target:"901"},{source:"129",target:"902"},{source:"129",target:"877"},{source:"129",target:"878"},{source:"129",target:"885"},{source:"129",target:"888"},{source:"129",target:"879"},{source:"129",target:"890"},{source:"129",target:"896"},{source:"129",target:"571"},{source:"129",target:"882"},{source:"129",target:"892"},{source:"129",target:"301"},{source:"129",target:"141"},{source:"129",target:"142"},{source:"129",target:"143"},{source:"129",target:"578"},{source:"129",target:"153"},{source:"129",target:"139"},{source:"129",target:"295"},{source:"129",target:"302"},{source:"129",target:"164"},{source:"130",target:"258"},{source:"130",target:"563"},{source:"130",target:"678"},{source:"130",target:"913"},{source:"130",target:"916"},{source:"130",target:"910"},{source:"130",target:"904"},{source:"130",target:"278"},{source:"130",target:"928"},{source:"130",target:"924"},{source:"130",target:"368"},{source:"130",target:"246"},{source:"130",target:"929"},{source:"130",target:"922"},{source:"130",target:"930"},{source:"130",target:"931"},{source:"130",target:"905"},{source:"130",target:"918"},{source:"130",target:"573"},{source:"130",target:"911"},{source:"130",target:"131"},{source:"130",target:"925"},{source:"130",target:"906"},{source:"130",target:"921"},{source:"130",target:"907"},{source:"130",target:"574"},{source:"130",target:"932"},{source:"130",target:"908"},{source:"130",target:"134"},{source:"130",target:"136"},{source:"130",target:"139"},{source:"130",target:"912"},{source:"130",target:"150"},{source:"130",target:"153"},{source:"130",target:"164"},{source:"130",target:"327"},{source:"130",target:"933"},{source:"130",target:"168"},{source:"130",target:"927"},{source:"130",target:"587"},{source:"130",target:"934"},{source:"130",target:"938"},{source:"130",target:"132"},{source:"130",target:"576"},{source:"130",target:"292"},{source:"130",target:"295"},{source:"130",target:"1206"},{source:"130",target:"1208"},{source:"130",target:"700"},{source:"130",target:"156"},{source:"130",target:"581"},{source:"130",target:"1679"},{source:"130",target:"1676"},{source:"130",target:"583"},{source:"131",target:"903"},{source:"131",target:"916"},{source:"131",target:"923"},{source:"131",target:"278"},{source:"131",target:"939"},{source:"131",target:"940"},{source:"131",target:"925"},{source:"131",target:"906"},{source:"131",target:"921"},{source:"131",target:"941"},{source:"131",target:"907"},{source:"131",target:"908"},{source:"131",target:"164"},{source:"131",target:"327"},{source:"131",target:"926"},{source:"131",target:"942"},{source:"131",target:"927"},{source:"131",target:"912"},{source:"131",target:"933"},{source:"131",target:"168"},{source:"132",target:"705"},{source:"132",target:"710"},{source:"132",target:"707"},{source:"132",target:"262"},{source:"132",target:"977"},{source:"132",target:"715"},{source:"132",target:"716"},{source:"132",target:"983"},{source:"132",target:"978"},{source:"132",target:"261"},{source:"132",target:"986"},{source:"132",target:"993"},{source:"132",target:"1005"},{source:"132",target:"999"},{source:"132",target:"1006"},{source:"132",target:"1007"},{source:"132",target:"717"},{source:"132",target:"994"},{source:"132",target:"985"},{source:"132",target:"1008"},{source:"132",target:"133"},{source:"132",target:"576"},{source:"132",target:"134"},{source:"132",target:"153"},{source:"132",target:"156"},{source:"132",target:"981"},{source:"132",target:"144"},{source:"133",target:"596"},{source:"133",target:"973"},{source:"133",target:"977"},{source:"133",target:"975"},{source:"133",target:"988"},{source:"133",target:"996"},{source:"133",target:"978"},{source:"133",target:"612"},{source:"133",target:"1018"},{source:"133",target:"1004"},{source:"133",target:"245"},{source:"133",target:"608"},{source:"133",target:"986"},{source:"133",target:"983"},{source:"133",target:"995"},{source:"133",target:"1013"},{source:"133",target:"1019"},{source:"133",target:"152"},{source:"133",target:"153"},{source:"133",target:"156"},{source:"134",target:"699"},{source:"134",target:"698"},{source:"134",target:"1037"},{source:"134",target:"1039"},{source:"134",target:"1040"},{source:"134",target:"1041"},{source:"134",target:"1042"},{source:"134",target:"1043"},{source:"134",target:"1044"},{source:"134",target:"153"},{source:"134",target:"156"},{source:"134",target:"1048"},{source:"134",target:"700"},{source:"135",target:"212"},{source:"135",target:"214"},{source:"135",target:"234"},{source:"135",target:"170"},{source:"135",target:"222"},{source:"135",target:"224"},{source:"135",target:"225"},{source:"135",target:"230"},{source:"135",target:"1052"},{source:"135",target:"1055"},{source:"135",target:"160"},{source:"135",target:"164"},{source:"136",target:"1076"},{source:"136",target:"1077"},{source:"136",target:"137"},{source:"136",target:"1078"},{source:"136",target:"1079"},{source:"136",target:"1080"},{source:"136",target:"138"},{source:"136",target:"1081"},{source:"136",target:"1082"},{source:"136",target:"144"},{source:"136",target:"150"},{source:"136",target:"151"},{source:"136",target:"152"},{source:"136",target:"153"},{source:"136",target:"155"},{source:"136",target:"156"},{source:"136",target:"157"},{source:"136",target:"164"},{source:"136",target:"1083"},{source:"136",target:"1089"},{source:"136",target:"1091"},{source:"136",target:"1092"},{source:"137",target:"1076"},{source:"137",target:"1079"},{source:"137",target:"138"},{source:"137",target:"1084"},{source:"137",target:"1078"},{source:"137",target:"1085"},{source:"137",target:"1090"},{source:"138",target:"1080"},{source:"138",target:"1091"},{source:"138",target:"288"},{source:"139",target:"241"},{source:"139",target:"242"},{source:"139",target:"243"},{source:"139",target:"388"},{source:"139",target:"245"},{source:"139",target:"266"},{source:"139",target:"270"},{source:"139",target:"271"},{source:"139",target:"268"},{source:"139",target:"848"},{source:"139",target:"273"},{source:"139",target:"274"},{source:"139",target:"277"},{source:"139",target:"576"},{source:"139",target:"854"},{source:"139",target:"1061"},{source:"139",target:"286"},{source:"139",target:"1063"},{source:"139",target:"287"},{source:"139",target:"1093"},{source:"139",target:"1097"},{source:"139",target:"372"},{source:"139",target:"291"},{source:"139",target:"292"},{source:"139",target:"294"},{source:"139",target:"218"},{source:"139",target:"376"},{source:"139",target:"335"},{source:"139",target:"382"},{source:"139",target:"410"},{source:"139",target:"847"},{source:"139",target:"272"},{source:"139",target:"275"},{source:"139",target:"1112"},{source:"139",target:"855"},{source:"139",target:"1065"},{source:"139",target:"373"},{source:"139",target:"140"},{source:"139",target:"856"},{source:"139",target:"1043"},{source:"139",target:"301"},{source:"139",target:"141"},{source:"139",target:"142"},{source:"139",target:"143"},{source:"139",target:"150"},{source:"139",target:"307"},{source:"139",target:"1131"},{source:"139",target:"308"},{source:"139",target:"1071"},{source:"139",target:"1066"},{source:"139",target:"309"},{source:"139",target:"310"},{source:"139",target:"311"},{source:"139",target:"153"},{source:"139",target:"157"},{source:"139",target:"316"},{source:"139",target:"318"},{source:"139",target:"321"},{source:"139",target:"322"},{source:"139",target:"164"},{source:"139",target:"298"},{source:"139",target:"384"},{source:"139",target:"1572"},{source:"139",target:"327"},{source:"140",target:"241"},{source:"140",target:"290"},{source:"140",target:"292"},{source:"140",target:"293"},{source:"140",target:"294"},{source:"140",target:"1065"},{source:"140",target:"295"},{source:"140",target:"1129"},{source:"140",target:"1130"},{source:"140",target:"243"},{source:"140",target:"382"},{source:"140",target:"227"},{source:"140",target:"403"},{source:"140",target:"368"},{source:"140",target:"420"},{source:"140",target:"404"},{source:"140",target:"245"},{source:"140",target:"246"},{source:"140",target:"407"},{source:"140",target:"392"},{source:"140",target:"408"},{source:"140",target:"410"},{source:"140",target:"411"},{source:"140",target:"401"},{source:"140",target:"248"},{source:"140",target:"394"},{source:"140",target:"369"},{source:"140",target:"270"},{source:"140",target:"271"},{source:"140",target:"274"},{source:"140",target:"275"},{source:"140",target:"282"},{source:"140",target:"285"},{source:"140",target:"286"},{source:"140",target:"412"},{source:"140",target:"1093"},{source:"140",target:"1097"},{source:"140",target:"1114"},{source:"140",target:"1109"},{source:"140",target:"1123"},{source:"140",target:"1099"},{source:"140",target:"856"},{source:"140",target:"1043"},{source:"140",target:"296"},{source:"140",target:"301"},{source:"140",target:"1141"},{source:"140",target:"141"},{source:"140",target:"308"},{source:"140",target:"1142"},{source:"140",target:"321"},{source:"140",target:"322"},{source:"141",target:"241"},{source:"141",target:"245"},{source:"141",target:"270"},{source:"141",target:"271"},{source:"141",target:"283"},{source:"141",target:"284"},{source:"141",target:"286"},{source:"141",target:"290"},{source:"141",target:"1097"},{source:"141",target:"372"},{source:"141",target:"291"},{source:"141",target:"292"},{source:"141",target:"293"},{source:"141",target:"294"},{source:"141",target:"855"},{source:"141",target:"295"},{source:"141",target:"296"},{source:"141",target:"1143"},{source:"141",target:"427"},{source:"141",target:"1159"},{source:"141",target:"1147"},{source:"141",target:"1162"},{source:"141",target:"338"},{source:"141",target:"297"},{source:"141",target:"1180"},{source:"141",target:"299"},{source:"141",target:"1183"},{source:"141",target:"1165"},{source:"141",target:"300"},{source:"141",target:"1167"},{source:"141",target:"301"},{source:"141",target:"1141"},{source:"141",target:"331"},{source:"141",target:"1145"},{source:"141",target:"1150"},{source:"141",target:"1191"},{source:"141",target:"1204"},{source:"141",target:"1170"},{source:"141",target:"1171"},{source:"141",target:"1197"},{source:"141",target:"152"},{source:"141",target:"156"},{source:"141",target:"157"},{source:"141",target:"318"},{source:"141",target:"143"},{source:"141",target:"307"},{source:"141",target:"310"},{source:"141",target:"483"},{source:"141",target:"498"},{source:"141",target:"153"},{source:"141",target:"317"},{source:"141",target:"1589"},{source:"141",target:"321"},{source:"141",target:"322"},{source:"142",target:"277"},{source:"142",target:"291"},{source:"142",target:"292"},{source:"142",target:"1222"},{source:"142",target:"1225"},{source:"142",target:"577"},{source:"142",target:"1240"},{source:"142",target:"1241"},{source:"142",target:"227"},{source:"142",target:"368"},{source:"142",target:"245"},{source:"142",target:"246"},{source:"142",target:"248"},{source:"142",target:"301"},{source:"142",target:"1220"},{source:"142",target:"1242"},{source:"142",target:"1243"},{source:"142",target:"143"},{source:"142",target:"1229"},{source:"142",target:"302"},{source:"142",target:"1244"},{source:"142",target:"578"},{source:"142",target:"303"},{source:"142",target:"1245"},{source:"142",target:"1221"},{source:"142",target:"1239"},{source:"142",target:"579"},{source:"142",target:"1246"},{source:"142",target:"1247"},{source:"142",target:"1248"},{source:"142",target:"307"},{source:"142",target:"153"},{source:"142",target:"164"},{source:"142",target:"1265"},{source:"142",target:"1120"},{source:"143",target:"256"},{source:"143",target:"566"},{source:"143",target:"263"},{source:"143",target:"292"},{source:"143",target:"293"},{source:"143",target:"295"},{source:"143",target:"1215"},{source:"143",target:"1225"},{source:"143",target:"1216"},{source:"143",target:"577"},{source:"143",target:"1233"},{source:"143",target:"1238"},{source:"143",target:"1242"},{source:"143",target:"1243"},{source:"143",target:"1257"},{source:"143",target:"245"},{source:"143",target:"246"},{source:"143",target:"248"},{source:"143",target:"277"},{source:"143",target:"301"},{source:"143",target:"1229"},{source:"143",target:"1254"},{source:"143",target:"1258"},{source:"143",target:"1250"},{source:"143",target:"1244"},{source:"143",target:"578"},{source:"143",target:"1259"},{source:"143",target:"387"},{source:"143",target:"1260"},{source:"143",target:"1261"},{source:"143",target:"1255"},{source:"143",target:"1256"},{source:"143",target:"1245"},{source:"143",target:"1221"},{source:"143",target:"1262"},{source:"143",target:"1239"},{source:"143",target:"1231"},{source:"143",target:"307"},{source:"143",target:"153"},{source:"143",target:"164"},{source:"143",target:"1265"},{source:"143",target:"1267"},{source:"143",target:"1227"},{source:"143",target:"1224"},{source:"143",target:"1275"},{source:"143",target:"1268"},{source:"143",target:"1246"},{source:"143",target:"1280"},{source:"143",target:"1247"},{source:"143",target:"1273"},{source:"144",target:"1284"},{source:"144",target:"1285"},{source:"144",target:"1287"},{source:"144",target:"1286"},{source:"144",target:"1172"},{source:"144",target:"1294"},{source:"144",target:"1295"},{source:"144",target:"1297"},{source:"144",target:"1298"},{source:"144",target:"1290"},{source:"144",target:"1299"},{source:"144",target:"1301"},{source:"144",target:"1302"},{source:"144",target:"1289"},{source:"144",target:"1304"},{source:"144",target:"1305"},{source:"144",target:"145"},{source:"144",target:"152"},{source:"144",target:"153"},{source:"144",target:"154"},{source:"144",target:"156"},{source:"144",target:"157"},{source:"144",target:"1306"},{source:"144",target:"1309"},{source:"144",target:"155"},{source:"145",target:"172"},{source:"145",target:"1288"},{source:"145",target:"1172"},{source:"145",target:"1297"},{source:"145",target:"1299"},{source:"145",target:"1303"},{source:"145",target:"1289"},{source:"145",target:"1308"},{source:"145",target:"1292"},{source:"145",target:"1304"},{source:"145",target:"1310"},{source:"145",target:"171"},{source:"145",target:"978"},{source:"145",target:"175"},{source:"145",target:"1293"},{source:"145",target:"1307"},{source:"145",target:"152"},{source:"145",target:"153"},{source:"145",target:"154"},{source:"145",target:"156"},{source:"145",target:"157"},{source:"146",target:"1313"},{source:"146",target:"304"},{source:"146",target:"147"},{source:"146",target:"148"},{source:"146",target:"149"},{source:"146",target:"163"},{source:"146",target:"165"},{source:"147",target:"224"},{source:"147",target:"1319"},{source:"147",target:"1317"},{source:"147",target:"306"},{source:"147",target:"148"},{source:"147",target:"149"},{source:"147",target:"150"},{source:"147",target:"151"},{source:"147",target:"164"},{source:"148",target:"1313"},{source:"148",target:"1316"},{source:"148",target:"304"},{source:"148",target:"305"},{source:"148",target:"306"},{source:"148",target:"1322"},{source:"148",target:"1314"},{source:"148",target:"149"},{source:"148",target:"150"},{source:"148",target:"151"},{source:"148",target:"163"},{source:"148",target:"164"},{source:"148",target:"160"},{source:"149",target:"1316"},{source:"149",target:"304"},{source:"149",target:"1322"},{source:"149",target:"1314"},{source:"149",target:"150"},{source:"149",target:"151"},{source:"149",target:"163"},{source:"149",target:"164"},{source:"150",target:"1313"},{source:"150",target:"1315"},{source:"150",target:"304"},{source:"150",target:"1317"},{source:"150",target:"1321"},{source:"150",target:"1322"},{source:"150",target:"306"},{source:"150",target:"1323"},{source:"150",target:"1324"},{source:"150",target:"1325"},{source:"150",target:"1326"},{source:"150",target:"160"},{source:"150",target:"163"},{source:"150",target:"1327"},{source:"150",target:"165"},{source:"150",target:"166"},{source:"150",target:"167"},{source:"150",target:"324"},{source:"150",target:"326"},{source:"151",target:"1313"},{source:"151",target:"1315"},{source:"151",target:"304"},{source:"151",target:"1322"},{source:"151",target:"163"},{source:"151",target:"165"},{source:"151",target:"166"},{source:"151",target:"167"},{source:"151",target:"160"},{source:"152",target:"177"},{source:"152",target:"241"},{source:"152",target:"264"},{source:"152",target:"1286"},{source:"152",target:"1455"},{source:"152",target:"154"},{source:"152",target:"1485"},{source:"152",target:"1486"},{source:"152",target:"1087"},{source:"152",target:"1458"},{source:"152",target:"157"},{source:"152",target:"158"},{source:"152",target:"155"},{source:"152",target:"332"},{source:"152",target:"1459"},{source:"153",target:"177"},{source:"153",target:"172"},{source:"153",target:"227"},{source:"153",target:"244"},{source:"153",target:"245"},{source:"153",target:"788"},{source:"153",target:"264"},{source:"153",target:"790"},{source:"153",target:"266"},{source:"153",target:"791"},{source:"153",target:"270"},{source:"153",target:"576"},{source:"153",target:"292"},{source:"153",target:"295"},{source:"153",target:"301"},{source:"153",target:"1286"},{source:"153",target:"1172"},{source:"153",target:"307"},{source:"153",target:"202"},{source:"153",target:"1461"},{source:"153",target:"1455"},{source:"153",target:"1462"},{source:"153",target:"1449"},{source:"153",target:"1487"},{source:"153",target:"1488"},{source:"153",target:"580"},{source:"153",target:"154"},{source:"153",target:"155"},{source:"153",target:"1485"},{source:"153",target:"332"},{source:"153",target:"1463"},{source:"153",target:"1283"},{source:"153",target:"1490"},{source:"153",target:"792"},{source:"153",target:"1465"},{source:"153",target:"1450"},{source:"153",target:"341"},{source:"153",target:"1454"},{source:"153",target:"1491"},{source:"153",target:"1492"},{source:"153",target:"1486"},{source:"153",target:"795"},{source:"153",target:"1493"},{source:"153",target:"1494"},{source:"153",target:"1087"},{source:"153",target:"1458"},{source:"153",target:"314"},{source:"153",target:"1495"},{source:"153",target:"1496"},{source:"153",target:"342"},{source:"153",target:"1497"},{source:"153",target:"1498"},{source:"153",target:"1451"},{source:"153",target:"1469"},{source:"153",target:"1470"},{source:"153",target:"157"},{source:"153",target:"1499"},{source:"153",target:"1473"},{source:"153",target:"1459"},{source:"153",target:"158"},{source:"153",target:"1500"},{source:"153",target:"1501"},{source:"153",target:"160"},{source:"153",target:"164"},{source:"153",target:"1504"},{source:"153",target:"1088"},{source:"153",target:"1503"},{source:"153",target:"1474"},{source:"154",target:"334"},{source:"154",target:"1455"},{source:"154",target:"1488"},{source:"154",target:"1283"},{source:"154",target:"1450"},{source:"154",target:"156"},{source:"154",target:"157"},{source:"154",target:"158"},{source:"154",target:"1500"},{source:"154",target:"1504"},{source:"154",target:"155"},{source:"154",target:"1087"},{source:"154",target:"1458"},{source:"154",target:"1088"},{source:"154",target:"342"},{source:"154",target:"1451"},{source:"154",target:"1469"},{source:"154",target:"1470"},{source:"154",target:"1459"},{source:"155",target:"297"},{source:"155",target:"334"},{source:"155",target:"1462"},{source:"155",target:"1504"},{source:"155",target:"1079"},{source:"155",target:"1088"},{source:"155",target:"1506"},{source:"155",target:"795"},{source:"155",target:"156"},{source:"155",target:"157"},{source:"155",target:"158"},{source:"155",target:"165"},{source:"156",target:"177"},{source:"156",target:"241"},{source:"156",target:"244"},{source:"156",target:"245"},{source:"156",target:"707"},{source:"156",target:"788"},{source:"156",target:"264"},{source:"156",target:"266"},{source:"156",target:"791"},{source:"156",target:"1097"},{source:"156",target:"295"},{source:"156",target:"1286"},{source:"156",target:"1172"},{source:"156",target:"1461"},{source:"156",target:"1455"},{source:"156",target:"1462"},{source:"156",target:"1504"},{source:"156",target:"1507"},{source:"156",target:"1463"},{source:"156",target:"1490"},{source:"156",target:"792"},{source:"156",target:"1450"},{source:"156",target:"341"},{source:"156",target:"1491"},{source:"156",target:"1486"},{source:"156",target:"795"},{source:"156",target:"1493"},{source:"156",target:"1087"},{source:"156",target:"1458"},{source:"156",target:"1088"},{source:"156",target:"314"},{source:"156",target:"1495"},{source:"156",target:"342"},{source:"156",target:"1540"},{source:"156",target:"1497"},{source:"156",target:"1503"},{source:"156",target:"1451"},{source:"156",target:"1546"},{source:"156",target:"1547"},{source:"156",target:"1488"},{source:"156",target:"580"},{source:"156",target:"332"},{source:"156",target:"1283"},{source:"156",target:"1465"},{source:"156",target:"1454"},{source:"156",target:"1456"},{source:"156",target:"1528"},{source:"156",target:"1548"},{source:"156",target:"1496"},{source:"156",target:"1506"},{source:"156",target:"1469"},{source:"156",target:"1470"},{source:"156",target:"157"},{source:"156",target:"1499"},{source:"156",target:"1473"},{source:"156",target:"1459"},{source:"156",target:"158"},{source:"156",target:"1500"},{source:"156",target:"1501"},{source:"156",target:"160"},{source:"156",target:"164"},{source:"156",target:"1474"},{source:"156",target:"322"},{source:"157",target:"227"},{source:"157",target:"264"},{source:"157",target:"266"},{source:"157",target:"1454"},{source:"157",target:"334"},{source:"157",target:"1461"},{source:"157",target:"1455"},{source:"157",target:"1487"},{source:"157",target:"580"},{source:"157",target:"332"},{source:"157",target:"1463"},{source:"157",target:"1464"},{source:"157",target:"1465"},{source:"157",target:"341"},{source:"157",target:"795"},{source:"157",target:"1087"},{source:"157",target:"1088"},{source:"157",target:"314"},{source:"157",target:"342"},{source:"157",target:"1470"},{source:"157",target:"292"},{source:"157",target:"1551"},{source:"157",target:"1552"},{source:"157",target:"158"},{source:"157",target:"164"},{source:"157",target:"1472"},{source:"157",target:"1474"},{source:"157",target:"1459"},{source:"157",target:"316"},{source:"158",target:"334"},{source:"158",target:"1455"},{source:"158",target:"1462"},{source:"158",target:"1465"},{source:"158",target:"341"},{source:"158",target:"1087"},{source:"158",target:"1458"},{source:"158",target:"342"},{source:"159",target:"1555"},{source:"159",target:"516"},{source:"159",target:"161"},{source:"159",target:"315"},{source:"160",target:"507"},{source:"160",target:"513"},{source:"160",target:"1052"},{source:"160",target:"516"},{source:"160",target:"1556"},{source:"160",target:"1053"},{source:"160",target:"521"},{source:"160",target:"1555"},{source:"160",target:"1557"},{source:"160",target:"1561"},{source:"160",target:"1562"},{source:"160",target:"1563"},{source:"160",target:"161"},{source:"160",target:"315"},{source:"160",target:"163"},{source:"160",target:"164"},{source:"160",target:"165"},{source:"161",target:"513"},{source:"161",target:"521"},{source:"161",target:"1555"},{source:"161",target:"516"},{source:"161",target:"1053"},{source:"161",target:"1559"},{source:"161",target:"1560"},{source:"161",target:"1564"},{source:"161",target:"1565"},{source:"161",target:"315"},{source:"161",target:"162"},{source:"161",target:"164"},{source:"162",target:"1555"},{source:"162",target:"315"},{source:"163",target:"323"},{source:"163",target:"1327"},{source:"163",target:"164"},{source:"163",target:"165"},{source:"163",target:"1630"},{source:"163",target:"166"},{source:"163",target:"167"},{source:"163",target:"324"},{source:"163",target:"325"},{source:"163",target:"1627"},{source:"163",target:"228"},{source:"163",target:"326"},{source:"164",target:"218"},{source:"164",target:"170"},{source:"164",target:"241"},{source:"164",target:"227"},{source:"164",target:"245"},{source:"164",target:"254"},{source:"164",target:"510"},{source:"164",target:"270"},{source:"164",target:"274"},{source:"164",target:"277"},{source:"164",target:"576"},{source:"164",target:"1027"},{source:"164",target:"1028"},{source:"164",target:"292"},{source:"164",target:"307"},{source:"164",target:"310"},{source:"164",target:"316"},{source:"164",target:"323"},{source:"164",target:"1628"},{source:"164",target:"1629"},{source:"164",target:"1626"},{source:"164",target:"1625"},{source:"164",target:"1633"},{source:"164",target:"345"},{source:"164",target:"1636"},{source:"164",target:"1029"},{source:"164",target:"304"},{source:"164",target:"228"},{source:"164",target:"1637"},{source:"164",target:"1638"},{source:"164",target:"1634"},{source:"164",target:"1632"},{source:"164",target:"165"},{source:"164",target:"1639"},{source:"164",target:"1635"},{source:"164",target:"166"},{source:"164",target:"167"},{source:"164",target:"1640"},{source:"164",target:"324"},{source:"164",target:"1328"},{source:"164",target:"325"},{source:"164",target:"1627"},{source:"164",target:"326"},{source:"164",target:"327"},{source:"164",target:"168"},{source:"165",target:"455"},{source:"165",target:"297"},{source:"165",target:"334"},{source:"165",target:"1327"},{source:"165",target:"1633"},{source:"165",target:"228"},{source:"165",target:"1638"},{source:"165",target:"1634"},{source:"165",target:"261"},{source:"165",target:"1629"},{source:"165",target:"1637"},{source:"165",target:"1635"},{source:"165",target:"166"},{source:"165",target:"167"},{source:"165",target:"324"},{source:"165",target:"325"},{source:"165",target:"1627"},{source:"165",target:"326"},{source:"166",target:"323"},{source:"166",target:"1628"},{source:"166",target:"1633"},{source:"166",target:"1637"},{source:"166",target:"1625"},{source:"166",target:"1632"},{source:"166",target:"167"},{source:"166",target:"324"},{source:"166",target:"325"},{source:"166",target:"1627"},{source:"166",target:"326"},{source:"167",target:"254"},{source:"167",target:"510"},{source:"167",target:"1028"},{source:"167",target:"323"},{source:"167",target:"1628"},{source:"167",target:"1625"},{source:"167",target:"228"},{source:"167",target:"1638"},{source:"167",target:"1641"},{source:"167",target:"1632"},{source:"167",target:"1642"},{source:"167",target:"1643"},{source:"167",target:"1640"},{source:"167",target:"324"},{source:"167",target:"325"},{source:"167",target:"1627"},{source:"167",target:"326"},{source:"167",target:"1328"},{source:"168",target:"556"},{source:"168",target:"327"},{source:"168",target:"1670"},{source:"168",target:"1677"},{source:"168",target:"1675"},{source:"168",target:"1672"},{source:"168",target:"1676"},{source:"168",target:"1661"},{source:"168",target:"1667"},{source:"168",target:"1425"},{source:"168",target:"583"},{source:"168",target:"1687"},{source:"168",target:"585"},{source:"168",target:"1680"},{source:"168",target:"586"},{source:"168",target:"1678"},{source:"168",target:"1688"},{source:"168",target:"588"},{source:"170",target:"220"},{source:"170",target:"237"},{source:"170",target:"329"},{source:"170",target:"225"},{source:"170",target:"235"},{source:"170",target:"331"},{source:"171",target:"172"},{source:"171",target:"173"},{source:"171",target:"174"},{source:"171",target:"175"},{source:"171",target:"184"},{source:"172",target:"185"},{source:"172",target:"200"},{source:"172",target:"204"},{source:"172",target:"205"},{source:"172",target:"177"},{source:"172",target:"184"},{source:"172",target:"1062"},{source:"173",target:"978"},{source:"173",target:"979"},{source:"174",target:"1009"},{source:"175",target:"1296"},{source:"176",target:"177"},{source:"177",target:"182"},{source:"177",target:"181"},{source:"177",target:"190"},{source:"177",target:"195"},{source:"177",target:"205"},{source:"177",target:"192"},{source:"177",target:"184"},{source:"177",target:"188"},{source:"178",target:"179"},{source:"180",target:"181"},{source:"181",target:"188"},{source:"181",target:"199"},{source:"181",target:"192"},{source:"182",target:"196"},{source:"182",target:"203"},{source:"183",target:"184"},{source:"184",target:"189"},{source:"184",target:"208"},{source:"184",target:"209"},{source:"185",target:"207"},{source:"186",target:"187"},{source:"187",target:"195"},{source:"187",target:"203"},{source:"188",target:"199"},{source:"188",target:"210"},{source:"190",target:"191"},{source:"190",target:"192"},{source:"191",target:"192"},{source:"193",target:"194"},{source:"197",target:"198"},{source:"198",target:"215"},{source:"198",target:"347"},{source:"198",target:"235"},{source:"201",target:"202"},{source:"202",target:"686"},{source:"202",target:"266"},{source:"202",target:"1476"},{source:"202",target:"1451"},{source:"202",target:"1550"},{source:"205",target:"206"},{source:"212",target:"224"},{source:"212",target:"226"},{source:"212",target:"215"},{source:"212",target:"333"},{source:"212",target:"346"},{source:"213",target:"225"},{source:"214",target:"230"},{source:"215",target:"233"},{source:"215",target:"231"},{source:"215",target:"234"},{source:"215",target:"219"},{source:"215",target:"224"},{source:"216",target:"219"},{source:"216",target:"221"},{source:"217",target:"218"},{source:"218",target:"226"},{source:"220",target:"225"},{source:"220",target:"329"},{source:"220",target:"223"},{source:"222",target:"330"},{source:"223",target:"233"},{source:"223",target:"231"},{source:"223",target:"234"},{source:"223",target:"329"},{source:"223",target:"224"},{source:"223",target:"225"},{source:"224",target:"346"},{source:"225",target:"226"},{source:"225",target:"235"},{source:"227",target:"241"},{source:"227",target:"243"},{source:"227",target:"380"},{source:"227",target:"382"},{source:"227",target:"267"},{source:"227",target:"268"},{source:"227",target:"386"},{source:"227",target:"269"},{source:"227",target:"270"},{source:"227",target:"271"},{source:"227",target:"274"},{source:"227",target:"292"},{source:"227",target:"301"},{source:"227",target:"387"},{source:"227",target:"307"},{source:"227",target:"310"},{source:"227",target:"316"},{source:"227",target:"319"},{source:"227",target:"320"},{source:"227",target:"418"},{source:"227",target:"266"},{source:"227",target:"294"},{source:"227",target:"1193"},{source:"227",target:"309"},{source:"227",target:"1372"},{source:"227",target:"498"},{source:"227",target:"1572"},{source:"228",target:"335"},{source:"228",target:"322"},{source:"228",target:"1636"},{source:"228",target:"1634"},{source:"228",target:"1635"},{source:"228",target:"325"},{source:"228",target:"1627"},{source:"229",target:"238"},{source:"230",target:"1054"},{source:"230",target:"281"},{source:"231",target:"235"},{source:"232",target:"301"},{source:"232",target:"1367"},{source:"232",target:"483"},{source:"232",target:"1374"},{source:"232",target:"498"},{source:"232",target:"1382"},{source:"232",target:"1383"},{source:"234",target:"238"},{source:"235",target:"239"},{source:"240",target:"353"},{source:"241",target:"242"},{source:"241",target:"366"},{source:"241",target:"335"},{source:"241",target:"367"},{source:"241",target:"368"},{source:"241",target:"245"},{source:"241",target:"246"},{source:"241",target:"369"},{source:"241",target:"270"},{source:"241",target:"370"},{source:"241",target:"272"},{source:"241",target:"371"},{source:"241",target:"273"},{source:"241",target:"274"},{source:"241",target:"275"},{source:"241",target:"282"},{source:"241",target:"283"},{source:"241",target:"286"},{source:"241",target:"372"},{source:"241",target:"292"},{source:"241",target:"293"},{source:"241",target:"294"},{source:"241",target:"373"},{source:"241",target:"295"},{source:"241",target:"301"},{source:"241",target:"309"},{source:"241",target:"310"},{source:"241",target:"311"},{source:"241",target:"340"},{source:"241",target:"287"},{source:"242",target:"335"},{source:"242",target:"245"},{source:"242",target:"248"},{source:"242",target:"369"},{source:"242",target:"374"},{source:"242",target:"370"},{source:"242",target:"273"},{source:"242",target:"274"},{source:"242",target:"275"},{source:"242",target:"301"},{source:"242",target:"310"},{source:"242",target:"375"},{source:"242",target:"272"},{source:"242",target:"290"},{source:"242",target:"292"},{source:"242",target:"295"},{source:"242",target:"296"},{source:"242",target:"311"},{source:"243",target:"335"},{source:"243",target:"367"},{source:"243",target:"377"},{source:"243",target:"245"},{source:"243",target:"246"},{source:"243",target:"371"},{source:"243",target:"273"},{source:"243",target:"274"},{source:"243",target:"275"},{source:"243",target:"378"},{source:"243",target:"290"},{source:"243",target:"292"},{source:"243",target:"295"},{source:"243",target:"296"},{source:"243",target:"311"},{source:"243",target:"282"},{source:"243",target:"294"},{source:"244",target:"388"},{source:"244",target:"395"},{source:"244",target:"336"},{source:"244",target:"414"},{source:"244",target:"389"},{source:"244",target:"245"},{source:"244",target:"391"},{source:"244",target:"392"},{source:"244",target:"247"},{source:"244",target:"416"},{source:"244",target:"417"},{source:"244",target:"394"},{source:"244",target:"369"},{source:"244",target:"418"},{source:"244",target:"419"},{source:"244",target:"301"},{source:"244",target:"321"},{source:"244",target:"322"},{source:"244",target:"267"},{source:"244",target:"290"},{source:"244",target:"292"},{source:"244",target:"295"},{source:"244",target:"331"},{source:"244",target:"310"},{source:"244",target:"483"},{source:"245",target:"388"},{source:"245",target:"402"},{source:"245",target:"403"},{source:"245",target:"368"},{source:"245",target:"404"},{source:"245",target:"406"},{source:"245",target:"246"},{source:"245",target:"391"},{source:"245",target:"392"},{source:"245",target:"399"},{source:"245",target:"410"},{source:"245",target:"423"},{source:"245",target:"369"},{source:"245",target:"301"},{source:"245",target:"401"},{source:"245",target:"271"},{source:"245",target:"272"},{source:"245",target:"282"},{source:"245",target:"283"},{source:"245",target:"284"},{source:"245",target:"286"},{source:"245",target:"1073"},{source:"245",target:"290"},{source:"245",target:"291"},{source:"245",target:"292"},{source:"245",target:"293"},{source:"245",target:"294"},{source:"245",target:"295"},{source:"245",target:"296"},{source:"245",target:"297"},{source:"245",target:"302"},{source:"245",target:"303"},{source:"245",target:"307"},{source:"245",target:"310"},{source:"245",target:"322"},{source:"246",target:"402"},{source:"246",target:"368"},{source:"246",target:"422"},{source:"246",target:"406"},{source:"246",target:"388"},{source:"246",target:"391"},{source:"246",target:"407"},{source:"246",target:"247"},{source:"246",target:"248"},{source:"246",target:"394"},{source:"246",target:"272"},{source:"246",target:"290"},{source:"246",target:"291"},{source:"246",target:"292"},{source:"246",target:"294"},{source:"246",target:"295"},{source:"246",target:"307"},{source:"246",target:"310"},{source:"247",target:"388"},{source:"247",target:"421"},{source:"247",target:"368"},{source:"247",target:"407"},{source:"247",target:"392"},{source:"247",target:"410"},{source:"247",target:"404"},{source:"247",target:"391"},{source:"247",target:"401"},{source:"247",target:"248"},{source:"247",target:"369"},{source:"247",target:"394"},{source:"247",target:"292"},{source:"248",target:"401"},{source:"248",target:"388"},{source:"248",target:"391"},{source:"248",target:"286"},{source:"248",target:"291"},{source:"248",target:"293"},{source:"248",target:"294"},{source:"248",target:"296"},{source:"249",target:"434"},{source:"249",target:"418"},{source:"249",target:"454"},{source:"249",target:"446"},{source:"249",target:"432"},{source:"249",target:"461"},{source:"249",target:"449"},{source:"249",target:"462"},{source:"249",target:"447"},{source:"249",target:"463"},{source:"249",target:"292"},{source:"249",target:"295"},{source:"250",target:"431"},{source:"250",target:"252"},{source:"251",target:"458"},{source:"251",target:"486"},{source:"251",target:"485"},{source:"251",target:"430"},{source:"251",target:"477"},{source:"251",target:"487"},{source:"252",target:"492"},{source:"252",target:"452"},{source:"252",target:"451"},{source:"252",target:"453"},{source:"253",target:"517"},{source:"253",target:"523"},{source:"253",target:"511"},{source:"253",target:"524"},{source:"254",target:"514"},{source:"254",target:"510"},{source:"254",target:"525"},{source:"255",target:"543"},{source:"255",target:"529"},{source:"255",target:"533"},{source:"255",target:"547"},{source:"255",target:"549"},{source:"255",target:"552"},{source:"255",target:"535"},{source:"255",target:"556"},{source:"256",target:"615"},{source:"256",target:"557"},{source:"256",target:"616"},{source:"256",target:"560"},{source:"256",target:"617"},{source:"256",target:"259"},{source:"256",target:"618"},{source:"256",target:"260"},{source:"256",target:"619"},{source:"256",target:"620"},{source:"256",target:"661"},{source:"256",target:"258"},{source:"257",target:"646"},{source:"257",target:"259"},{source:"257",target:"647"},{source:"257",target:"617"},{source:"258",target:"558"},{source:"258",target:"559"},{source:"258",target:"560"},{source:"258",target:"663"},{source:"258",target:"561"},{source:"258",target:"259"},{source:"258",target:"260"},{source:"259",target:"559"},{source:"259",target:"646"},{source:"259",target:"557"},{source:"259",target:"560"},{source:"259",target:"561"},{source:"259",target:"260"},{source:"259",target:"567"},{source:"259",target:"647"},{source:"260",target:"628"},{source:"260",target:"639"},{source:"260",target:"557"},{source:"260",target:"655"},{source:"260",target:"630"},{source:"260",target:"558"},{source:"260",target:"666"},{source:"260",target:"561"},{source:"260",target:"672"},{source:"261",target:"705"},{source:"262",target:"705"},{source:"262",target:"716"},{source:"263",target:"632"},{source:"263",target:"633"},{source:"263",target:"740"},{source:"263",target:"751"},{source:"263",target:"566"},{source:"263",target:"741"},{source:"263",target:"391"},{source:"263",target:"765"},{source:"263",target:"754"},{source:"263",target:"766"},{source:"263",target:"767"},{source:"263",target:"742"},{source:"263",target:"768"},{source:"263",target:"727"},{source:"263",target:"301"},{source:"263",target:"302"},{source:"263",target:"1244"},{source:"264",target:"788"},{source:"264",target:"786"},{source:"264",target:"265"},{source:"264",target:"783"},{source:"264",target:"266"},{source:"264",target:"797"},{source:"264",target:"798"},{source:"264",target:"332"},{source:"264",target:"801"},{source:"264",target:"810"},{source:"264",target:"791"},{source:"264",target:"814"},{source:"264",target:"815"},{source:"264",target:"784"},{source:"264",target:"816"},{source:"264",target:"806"},{source:"265",target:"783"},{source:"265",target:"804"},{source:"265",target:"805"},{source:"265",target:"806"},{source:"265",target:"807"},{source:"265",target:"808"},{source:"265",target:"809"},{source:"266",target:"786"},{source:"266",target:"783"},{source:"266",target:"802"},{source:"266",target:"791"},{source:"266",target:"804"},{source:"266",target:"805"},{source:"266",target:"811"},{source:"266",target:"807"},{source:"266",target:"809"},{source:"266",target:"806"},{source:"267",target:"381"},{source:"267",target:"833"},{source:"267",target:"834"},{source:"267",target:"419"},{source:"267",target:"835"},{source:"267",target:"836"},{source:"267",target:"316"},{source:"267",target:"321"},{source:"267",target:"322"},{source:"268",target:"381"},{source:"268",target:"837"},{source:"268",target:"834"},{source:"268",target:"385"},{source:"268",target:"835"},{source:"268",target:"838"},{source:"268",target:"419"},{source:"268",target:"292"},{source:"268",target:"845"},{source:"268",target:"310"},{source:"268",target:"290"},{source:"268",target:"294"},{source:"268",target:"295"},{source:"268",target:"307"},{source:"269",target:"307"},{source:"270",target:"381"},{source:"270",target:"391"},{source:"270",target:"386"},{source:"270",target:"274"},{source:"270",target:"298"},{source:"270",target:"301"},{source:"270",target:"307"},{source:"270",target:"310"},{source:"270",target:"316"},{source:"270",target:"318"},{source:"270",target:"319"},{source:"270",target:"321"},{source:"270",target:"322"},{source:"270",target:"841"},{source:"270",target:"327"},{source:"270",target:"282"},{source:"270",target:"290"},{source:"270",target:"292"},{source:"270",target:"294"},{source:"270",target:"295"},{source:"270",target:"296"},{source:"270",target:"309"},{source:"270",target:"1572"},{source:"271",target:"386"},{source:"271",target:"834"},{source:"271",target:"383"},{source:"271",target:"381"},{source:"271",target:"419"},{source:"271",target:"835"},{source:"271",target:"301"},{source:"271",target:"310"},{source:"271",target:"316"},{source:"271",target:"319"},{source:"271",target:"321"},{source:"271",target:"322"},{source:"271",target:"290"},{source:"271",target:"292"},{source:"271",target:"294"},{source:"271",target:"295"},{source:"271",target:"307"},{source:"271",target:"1133"},{source:"272",target:"846"},{source:"272",target:"368"},{source:"272",target:"374"},{source:"272",target:"370"},{source:"272",target:"371"},{source:"272",target:"848"},{source:"272",target:"273"},{source:"272",target:"275"},{source:"272",target:"849"},{source:"272",target:"378"},{source:"272",target:"850"},{source:"272",target:"310"},{source:"272",target:"311"},{source:"272",target:"290"},{source:"272",target:"292"},{source:"272",target:"295"},{source:"273",target:"370"},{source:"273",target:"371"},{source:"273",target:"848"},{source:"273",target:"378"},{source:"273",target:"825"},{source:"274",target:"367"},{source:"274",target:"374"},{source:"274",target:"370"},{source:"274",target:"847"},{source:"274",target:"371"},{source:"274",target:"848"},{source:"274",target:"394"},{source:"274",target:"823"},{source:"274",target:"275"},{source:"274",target:"378"},{source:"274",target:"290"},{source:"274",target:"292"},{source:"274",target:"295"},{source:"274",target:"296"},{source:"274",target:"310"},{source:"274",target:"316"},{source:"274",target:"854"},{source:"274",target:"850"},{source:"274",target:"282"},{source:"274",target:"283"},{source:"274",target:"285"},{source:"274",target:"286"},{source:"274",target:"293"},{source:"274",target:"294"},{source:"274",target:"309"},{source:"275",target:"370"},{source:"275",target:"846"},{source:"275",target:"848"},{source:"275",target:"852"},{source:"275",target:"374"},{source:"275",target:"823"},{source:"275",target:"858"},{source:"275",target:"378"},{source:"275",target:"825"},{source:"275",target:"290"},{source:"275",target:"292"},{source:"275",target:"295"},{source:"276",target:"861"},{source:"276",target:"567"},{source:"276",target:"568"},{source:"276",target:"569"},{source:"276",target:"570"},{source:"276",target:"571"},{source:"276",target:"341"},{source:"277",target:"568"},{source:"277",target:"570"},{source:"277",target:"881"},{source:"277",target:"866"},{source:"277",target:"891"},{source:"277",target:"578"},{source:"278",target:"903"},{source:"278",target:"916"},{source:"278",target:"920"},{source:"278",target:"924"},{source:"278",target:"925"},{source:"278",target:"906"},{source:"278",target:"921"},{source:"278",target:"907"},{source:"278",target:"574"},{source:"278",target:"926"},{source:"278",target:"927"},{source:"278",target:"573"},{source:"278",target:"912"},{source:"279",target:"1037"},{source:"279",target:"1039"},{source:"279",target:"1045"},{source:"279",target:"1041"},{source:"279",target:"1048"},{source:"279",target:"1049"},{source:"279",target:"1051"},{source:"282",target:"382"},{source:"282",target:"1060"},{source:"282",target:"1061"},{source:"282",target:"286"},{source:"282",target:"1063"},{source:"282",target:"1064"},{source:"282",target:"287"},{source:"282",target:"292"},{source:"282",target:"294"},{source:"282",target:"1065"},{source:"282",target:"1066"},{source:"282",target:"309"},{source:"282",target:"310"},{source:"282",target:"1067"},{source:"282",target:"1070"},{source:"283",target:"1059"},{source:"283",target:"1061"},{source:"283",target:"1069"},{source:"283",target:"1060"},{source:"283",target:"1070"},{source:"283",target:"286"},{source:"283",target:"1063"},{source:"283",target:"292"},{source:"283",target:"301"},{source:"283",target:"1071"},{source:"283",target:"1066"},{source:"283",target:"1072"},{source:"283",target:"310"},{source:"283",target:"321"},{source:"283",target:"294"},{source:"284",target:"1059"},{source:"284",target:"1061"},{source:"284",target:"382"},{source:"284",target:"286"},{source:"284",target:"292"},{source:"284",target:"294"},{source:"284",target:"301"},{source:"284",target:"308"},{source:"284",target:"309"},{source:"284",target:"1072"},{source:"284",target:"310"},{source:"284",target:"296"},{source:"285",target:"1060"},{source:"285",target:"1061"},{source:"285",target:"1070"},{source:"285",target:"382"},{source:"285",target:"286"},{source:"285",target:"1063"},{source:"285",target:"287"},{source:"285",target:"292"},{source:"285",target:"310"},{source:"285",target:"321"},{source:"285",target:"294"},{source:"286",target:"412"},{source:"286",target:"1073"},{source:"286",target:"1064"},{source:"286",target:"1074"},{source:"286",target:"301"},{source:"286",target:"384"},{source:"286",target:"1072"},{source:"286",target:"292"},{source:"286",target:"294"},{source:"286",target:"295"},{source:"286",target:"1129"},{source:"287",target:"412"},{source:"287",target:"1073"},{source:"287",target:"310"},{source:"287",target:"290"},{source:"287",target:"292"},{source:"287",target:"294"},{source:"287",target:"295"},{source:"287",target:"1129"},{source:"290",target:"1093"},{source:"290",target:"1095"},{source:"290",target:"392"},{source:"290",target:"410"},{source:"290",target:"369"},{source:"290",target:"1097"},{source:"290",target:"292"},{source:"290",target:"294"},{source:"290",target:"1065"},{source:"290",target:"373"},{source:"290",target:"1098"},{source:"290",target:"1099"},{source:"290",target:"1043"},{source:"290",target:"301"},{source:"290",target:"1071"},{source:"290",target:"1066"},{source:"290",target:"310"},{source:"290",target:"311"},{source:"290",target:"483"},{source:"290",target:"318"},{source:"290",target:"321"},{source:"290",target:"322"},{source:"290",target:"1112"},{source:"290",target:"291"},{source:"291",target:"1095"},{source:"291",target:"1103"},{source:"291",target:"1106"},{source:"291",target:"1116"},{source:"291",target:"292"},{source:"291",target:"1117"},{source:"291",target:"293"},{source:"291",target:"1118"},{source:"291",target:"295"},{source:"291",target:"856"},{source:"291",target:"1119"},{source:"291",target:"301"},{source:"291",target:"307"},{source:"291",target:"1120"},{source:"291",target:"310"},{source:"291",target:"294"},{source:"291",target:"1065"},{source:"291",target:"1123"},{source:"291",target:"384"},{source:"291",target:"843"},{source:"291",target:"1102"},{source:"292",target:"412"},{source:"292",target:"1073"},{source:"292",target:"1097"},{source:"292",target:"372"},{source:"292",target:"1124"},{source:"292",target:"335"},{source:"292",target:"382"},{source:"292",target:"410"},{source:"292",target:"411"},{source:"292",target:"401"},{source:"292",target:"394"},{source:"292",target:"369"},{source:"292",target:"371"},{source:"292",target:"378"},{source:"292",target:"1059"},{source:"292",target:"1060"},{source:"292",target:"1061"},{source:"292",target:"1063"},{source:"292",target:"293"},{source:"292",target:"1128"},{source:"292",target:"855"},{source:"292",target:"1065"},{source:"292",target:"295"},{source:"292",target:"1129"},{source:"292",target:"1130"},{source:"292",target:"1099"},{source:"292",target:"856"},{source:"292",target:"1043"},{source:"292",target:"296"},{source:"292",target:"297"},{source:"292",target:"300"},{source:"292",target:"301"},{source:"292",target:"1131"},{source:"292",target:"308"},{source:"292",target:"1132"},{source:"292",target:"1071"},{source:"292",target:"1066"},{source:"292",target:"309"},{source:"292",target:"1072"},{source:"292",target:"310"},{source:"292",target:"1067"},{source:"292",target:"311"},{source:"292",target:"483"},{source:"292",target:"498"},{source:"292",target:"318"},{source:"292",target:"320"},{source:"292",target:"321"},{source:"292",target:"1133"},{source:"292",target:"322"},{source:"292",target:"1127"},{source:"293",target:"1093"},{source:"293",target:"1095"},{source:"293",target:"1097"},{source:"293",target:"1106"},{source:"293",target:"1105"},{source:"293",target:"1116"},{source:"293",target:"1117"},{source:"293",target:"1135"},{source:"293",target:"369"},{source:"293",target:"1118"},{source:"293",target:"1128"},{source:"293",target:"855"},{source:"293",target:"1134"},{source:"293",target:"1136"},{source:"293",target:"1127"},{source:"293",target:"1096"},{source:"293",target:"856"},{source:"293",target:"1137"},{source:"293",target:"301"},{source:"293",target:"307"},{source:"293",target:"294"},{source:"293",target:"1119"},{source:"294",target:"382"},{source:"294",target:"368"},{source:"294",target:"404"},{source:"294",target:"411"},{source:"294",target:"401"},{source:"294",target:"412"},{source:"294",target:"372"},{source:"294",target:"1065"},{source:"294",target:"295"},{source:"294",target:"1129"},{source:"294",target:"1130"},{source:"294",target:"856"},{source:"294",target:"296"},{source:"294",target:"301"},{source:"294",target:"1066"},{source:"294",target:"310"},{source:"294",target:"311"},{source:"294",target:"318"},{source:"294",target:"322"},{source:"295",target:"1093"},{source:"295",target:"1097"},{source:"295",target:"372"},{source:"295",target:"1065"},{source:"295",target:"1127"},{source:"295",target:"373"},{source:"295",target:"382"},{source:"295",target:"404"},{source:"295",target:"410"},{source:"295",target:"411"},{source:"295",target:"401"},{source:"295",target:"394"},{source:"295",target:"369"},{source:"295",target:"1059"},{source:"295",target:"1060"},{source:"295",target:"1061"},{source:"295",target:"1063"},{source:"295",target:"855"},{source:"295",target:"1099"},{source:"295",target:"856"},{source:"295",target:"1043"},{source:"295",target:"298"},{source:"295",target:"301"},{source:"295",target:"307"},{source:"295",target:"1066"},{source:"295",target:"309"},{source:"295",target:"310"},{source:"295",target:"1067"},{source:"295",target:"311"},{source:"295",target:"316"},{source:"295",target:"318"},{source:"295",target:"321"},{source:"295",target:"322"},{source:"296",target:"1093"},{source:"296",target:"1065"},{source:"296",target:"373"},{source:"296",target:"1043"},{source:"296",target:"1097"},{source:"296",target:"855"},{source:"296",target:"856"},{source:"296",target:"301"},{source:"296",target:"1066"},{source:"296",target:"310"},{source:"296",target:"311"},{source:"297",target:"457"},{source:"297",target:"445"},{source:"297",target:"745"},{source:"297",target:"338"},{source:"297",target:"455"},{source:"297",target:"787"},{source:"297",target:"299"},{source:"297",target:"300"},{source:"297",target:"1167"},{source:"297",target:"1168"},{source:"297",target:"1169"},{source:"297",target:"301"},{source:"297",target:"1170"},{source:"297",target:"1141"},{source:"297",target:"1150"},{source:"297",target:"1171"},{source:"297",target:"1172"},{source:"297",target:"498"},{source:"297",target:"746"},{source:"297",target:"334"},{source:"297",target:"1173"},{source:"298",target:"299"},{source:"298",target:"300"},{source:"298",target:"301"},{source:"298",target:"1141"},{source:"298",target:"1145"},{source:"298",target:"1150"},{source:"299",target:"1176"},{source:"299",target:"1177"},{source:"299",target:"1165"},{source:"299",target:"301"},{source:"299",target:"1141"},{source:"299",target:"1145"},{source:"299",target:"1182"},{source:"299",target:"1183"},{source:"299",target:"1148"},{source:"300",target:"427"},{source:"300",target:"1176"},{source:"300",target:"301"},{source:"300",target:"1141"},{source:"300",target:"1145"},{source:"300",target:"1188"},{source:"300",target:"1189"},{source:"300",target:"1183"},{source:"300",target:"1150"},{source:"301",target:"855"},{source:"301",target:"427"},{source:"301",target:"1165"},{source:"301",target:"1148"},{source:"301",target:"1161"},{source:"301",target:"1151"},{source:"301",target:"1195"},{source:"301",target:"1170"},{source:"301",target:"1141"},{source:"301",target:"1145"},{source:"301",target:"1150"},{source:"301",target:"1158"},{source:"301",target:"1183"},{source:"301",target:"310"},{source:"301",target:"483"},{source:"301",target:"312"},{source:"301",target:"1142"},{source:"301",target:"498"},{source:"301",target:"318"},{source:"301",target:"331"},{source:"301",target:"303"},{source:"301",target:"579"},{source:"301",target:"307"},{source:"301",target:"1377"},{source:"301",target:"313"},{source:"301",target:"316"},{source:"301",target:"317"},{source:"301",target:"321"},{source:"302",target:"730"},{source:"302",target:"731"},{source:"302",target:"566"},{source:"302",target:"1225"},{source:"302",target:"1227"},{source:"302",target:"1228"},{source:"302",target:"577"},{source:"302",target:"1229"},{source:"302",target:"669"},{source:"302",target:"641"},{source:"302",target:"743"},{source:"302",target:"1214"},{source:"302",target:"578"},{source:"302",target:"1231"},{source:"302",target:"307"},{source:"303",target:"577"},{source:"303",target:"1233"},{source:"303",target:"1249"},{source:"303",target:"1229"},{source:"303",target:"578"},{source:"303",target:"1225"},{source:"303",target:"1236"},{source:"303",target:"1231"},{source:"303",target:"307"},{source:"304",target:"1313"},{source:"304",target:"1318"},{source:"304",target:"1320"},{source:"304",target:"1317"},{source:"304",target:"1322"},{source:"304",target:"1314"},{source:"305",target:"1317"},{source:"306",target:"346"},{source:"307",target:"579"},{source:"307",target:"369"},{source:"307",target:"1331"},{source:"307",target:"308"},{source:"307",target:"1332"},{source:"307",target:"1333"},{source:"307",target:"1334"},{source:"307",target:"1335"},{source:"307",target:"1336"},{source:"307",target:"1330"},{source:"307",target:"1337"},{source:"307",target:"384"},{source:"307",target:"1120"},{source:"307",target:"1338"},{source:"307",target:"1279"},{source:"307",target:"309"},{source:"307",target:"310"},{source:"307",target:"836"},{source:"307",target:"316"},{source:"307",target:"1339"},{source:"307",target:"1132"},{source:"307",target:"1362"},{source:"307",target:"1071"},{source:"307",target:"1366"},{source:"307",target:"322"},{source:"308",target:"1060"},{source:"308",target:"1061"},{source:"308",target:"1070"},{source:"308",target:"1063"},{source:"308",target:"1131"},{source:"308",target:"382"},{source:"308",target:"419"},{source:"308",target:"1068"},{source:"308",target:"1333"},{source:"308",target:"1334"},{source:"308",target:"1344"},{source:"308",target:"384"},{source:"308",target:"1132"},{source:"308",target:"1071"},{source:"308",target:"1066"},{source:"308",target:"309"},{source:"308",target:"1072"},{source:"308",target:"310"},{source:"309",target:"382"},{source:"309",target:"411"},{source:"309",target:"1060"},{source:"309",target:"1061"},{source:"309",target:"1068"},{source:"309",target:"1131"},{source:"309",target:"1345"},{source:"309",target:"1333"},{source:"309",target:"1334"},{source:"309",target:"1337"},{source:"309",target:"384"},{source:"309",target:"1132"},{source:"309",target:"1071"},{source:"309",target:"1346"},{source:"309",target:"1066"},{source:"309",target:"1059"},{source:"309",target:"1062"},{source:"309",target:"1330"},{source:"309",target:"1072"},{source:"309",target:"310"},{source:"309",target:"836"},{source:"310",target:"825"},{source:"310",target:"1059"},{source:"310",target:"1068"},{source:"310",target:"412"},{source:"310",target:"1131"},{source:"310",target:"1345"},{source:"310",target:"1333"},{source:"310",target:"1330"},{source:"310",target:"1337"},{source:"310",target:"384"},{source:"310",target:"1120"},{source:"310",target:"1359"},{source:"310",target:"1132"},{source:"310",target:"1071"},{source:"310",target:"1346"},{source:"310",target:"1350"},{source:"310",target:"1072"},{source:"310",target:"380"},{source:"310",target:"381"},{source:"310",target:"836"},{source:"310",target:"316"},{source:"310",target:"318"},{source:"310",target:"321"},{source:"310",target:"322"},{source:"310",target:"1365"},{source:"311",target:"852"},{source:"311",target:"377"},{source:"312",target:"427"},{source:"312",target:"483"},{source:"312",target:"1377"},{source:"312",target:"1142"},{source:"312",target:"1373"},{source:"312",target:"498"},{source:"312",target:"1186"},{source:"313",target:"1391"},{source:"313",target:"1396"},{source:"313",target:"1420"},{source:"313",target:"453"},{source:"313",target:"1409"},{source:"313",target:"1428"},{source:"313",target:"1397"},{source:"313",target:"1395"},{source:"313",target:"1427"},{source:"313",target:"1429"},{source:"313",target:"1403"},{source:"313",target:"1416"},{source:"313",target:"1437"},{source:"313",target:"1402"},{source:"314",target:"1461"},{source:"314",target:"1455"},{source:"314",target:"332"},{source:"314",target:"1463"},{source:"314",target:"1513"},{source:"314",target:"1534"},{source:"314",target:"1088"},{source:"314",target:"795"},{source:"314",target:"1473"},{source:"315",target:"516"},{source:"315",target:"1053"},{source:"316",target:"1572"},{source:"316",target:"318"},{source:"316",target:"319"},{source:"316",target:"320"},{source:"316",target:"344"},{source:"316",target:"1589"},{source:"317",target:"1572"},{source:"317",target:"318"},{source:"317",target:"1589"},{source:"317",target:"1590"},{source:"317",target:"321"},{source:"317",target:"1591"},{source:"317",target:"322"},{source:"318",target:"1572"},{source:"318",target:"1577"},{source:"318",target:"1588"},{source:"318",target:"1595"},{source:"318",target:"1605"},{source:"318",target:"1606"},{source:"318",target:"1596"},{source:"318",target:"1607"},{source:"318",target:"1608"},{source:"318",target:"1589"},{source:"318",target:"1609"},{source:"318",target:"1610"},{source:"318",target:"1611"},{source:"318",target:"1612"},{source:"318",target:"320"},{source:"318",target:"1585"},{source:"318",target:"1590"},{source:"318",target:"321"},{source:"318",target:"322"},{source:"318",target:"1598"},{source:"318",target:"1133"},{source:"318",target:"1173"},{source:"319",target:"1593"},{source:"320",target:"331"},{source:"320",target:"1572"},{source:"320",target:"1589"},{source:"320",target:"1597"},{source:"320",target:"1590"},{source:"320",target:"1620"},{source:"320",target:"1599"},{source:"320",target:"321"},{source:"320",target:"322"},{source:"321",target:"335"},{source:"321",target:"1174"},{source:"321",target:"331"},{source:"321",target:"483"},{source:"321",target:"1572"},{source:"321",target:"1585"},{source:"321",target:"336"},{source:"321",target:"1175"},{source:"321",target:"1369"},{source:"321",target:"1589"},{source:"322",target:"335"},{source:"322",target:"1369"},{source:"322",target:"483"},{source:"322",target:"336"},{source:"322",target:"419"},{source:"322",target:"1174"},{source:"322",target:"331"},{source:"322",target:"1572"},{source:"322",target:"1596"},{source:"322",target:"1589"},{source:"322",target:"1585"},{source:"322",target:"1590"},{source:"323",target:"1626"},{source:"323",target:"1328"},{source:"323",target:"1627"},{source:"323",target:"326"},{source:"324",target:"1633"},{source:"324",target:"1634"},{source:"324",target:"325"},{source:"325",target:"345"},{source:"325",target:"326"},{source:"326",target:"1625"},{source:"326",target:"1627"},{source:"327",target:"556"},{source:"327",target:"581"},{source:"327",target:"1669"},{source:"327",target:"1670"},{source:"327",target:"933"},{source:"327",target:"1673"},{source:"327",target:"1674"},{source:"327",target:"1675"},{source:"327",target:"1676"},{source:"327",target:"583"},{source:"327",target:"585"},{source:"327",target:"586"},{source:"327",target:"587"},{source:"327",target:"588"},{source:"327",target:"1677"},{source:"327",target:"582"},{source:"327",target:"1661"},{source:"327",target:"1667"},{source:"327",target:"1691"},{source:"327",target:"584"},{source:"327",target:"1680"},{source:"327",target:"1678"},{source:"327",target:"1668"},{source:"331",target:"1159"},{source:"331",target:"338"},{source:"331",target:"1141"},{source:"331",target:"1150"},{source:"331",target:"340"},{source:"331",target:"344"},{source:"331",target:"1179"},{source:"332",target:"1455"},{source:"332",target:"1463"},{source:"332",target:"795"},{source:"334",target:"455"},{source:"334",target:"709"},{source:"334",target:"741"},{source:"334",target:"1172"},{source:"334",target:"746"},{source:"334",target:"1455"},{source:"334",target:"580"},{source:"334",target:"1456"},{source:"334",target:"1457"},{source:"334",target:"1458"},{source:"334",target:"1459"},{source:"334",target:"1536"},{source:"335",target:"379"},{source:"336",target:"388"},{source:"336",target:"389"},{source:"336",target:"393"},{source:"338",target:"1159"},{source:"338",target:"1150"},{source:"338",target:"1198"},{source:"340",target:"483"},{source:"340",target:"498"},{source:"341",target:"1462"},{source:"341",target:"1461"},{source:"341",target:"1455"},{source:"341",target:"342"},{source:"341",target:"1474"},{source:"341",target:"1545"},{source:"342",target:"1462"},{source:"342",target:"1533"},{source:"342",target:"1455"},{source:"342",target:"1474"},{source:"343",target:"1544"},{source:"345",target:"1635"},{source:"348",target:"355"},{source:"348",target:"364"},{source:"350",target:"351"},{source:"353",target:"365"},{source:"357",target:"1698"},{source:"367",target:"376"},{source:"368",target:"421"},{source:"368",target:"370"},{source:"369",target:"388"},{source:"369",target:"420"},{source:"369",target:"406"},{source:"369",target:"392"},{source:"369",target:"416"},{source:"369",target:"394"},{source:"369",target:"391"},{source:"369",target:"428"},{source:"370",target:"846"},{source:"370",target:"371"},{source:"371",target:"847"},{source:"371",target:"846"},{source:"371",target:"851"},{source:"371",target:"852"},{source:"372",target:"1112"},{source:"372",target:"1114"},{source:"372",target:"1093"},{source:"372",target:"1065"},{source:"372",target:"373"},{source:"372",target:"1102"},{source:"374",target:"824"},{source:"374",target:"821"},{source:"374",target:"822"},{source:"374",target:"823"},{source:"374",target:"825"},{source:"374",target:"820"},{source:"374",target:"829"},{source:"374",target:"826"},{source:"374",target:"828"},{source:"378",target:"852"},{source:"378",target:"849"},{source:"378",target:"825"},{source:"378",target:"850"},{source:"380",target:"381"},{source:"381",target:"382"},{source:"381",target:"385"},{source:"381",target:"833"},{source:"381",target:"1334"},{source:"381",target:"384"},{source:"382",target:"383"},{source:"382",target:"384"},{source:"382",target:"1060"},{source:"382",target:"1132"},{source:"384",target:"1060"},{source:"384",target:"1061"},{source:"384",target:"1062"},{source:"384",target:"1334"},{source:"384",target:"1337"},{source:"384",target:"1059"},{source:"384",target:"1068"},{source:"384",target:"1131"},{source:"384",target:"1333"},{source:"384",target:"1132"},{source:"384",target:"1140"},{source:"384",target:"1362"},{source:"385",target:"835"},{source:"386",target:"419"},{source:"387",target:"1245"},{source:"387",target:"1239"},{source:"387",target:"579"},{source:"388",target:"389"},{source:"388",target:"390"},{source:"388",target:"391"},{source:"388",target:"392"},{source:"388",target:"393"},{source:"388",target:"394"},{source:"388",target:"406"},{source:"388",target:"407"},{source:"388",target:"399"},{source:"388",target:"411"},{source:"391",target:"396"},{source:"391",target:"399"},{source:"391",target:"394"},{source:"391",target:"392"},{source:"392",target:"403"},{source:"392",target:"406"},{source:"392",target:"424"},{source:"392",target:"407"},{source:"392",target:"423"},{source:"392",target:"394"},{source:"392",target:"846"},{source:"393",target:"420"},{source:"393",target:"401"},{source:"394",target:"406"},{source:"394",target:"410"},{source:"394",target:"401"},{source:"396",target:"397"},{source:"396",target:"398"},{source:"396",target:"399"},{source:"396",target:"400"},{source:"399",target:"425"},{source:"401",target:"405"},{source:"401",target:"408"},{source:"402",target:"413"},{source:"403",target:"404"},{source:"403",target:"411"},{source:"405",target:"408"},{source:"406",target:"423"},{source:"406",target:"410"},{source:"407",target:"1462"},{source:"412",target:"1059"},{source:"412",target:"1060"},{source:"412",target:"1061"},{source:"412",target:"1070"},{source:"412",target:"1062"},{source:"412",target:"1063"},{source:"412",target:"1130"},{source:"414",target:"415"},{source:"418",target:"442"},{source:"418",target:"443"},{source:"418",target:"454"},{source:"418",target:"455"},{source:"418",target:"456"},{source:"418",target:"483"},{source:"427",target:"1152"},{source:"427",target:"1153"},{source:"427",target:"1154"},{source:"427",target:"1155"},{source:"427",target:"1192"},{source:"429",target:"430"},{source:"430",target:"454"},{source:"430",target:"486"},{source:"431",target:"432"},{source:"431",target:"433"},{source:"432",target:"458"},{source:"433",target:"476"},{source:"434",target:"435"},{source:"434",target:"436"},{source:"434",target:"437"},{source:"434",target:"438"},{source:"434",target:"439"},{source:"434",target:"440"},{source:"436",target:"439"},{source:"439",target:"488"},{source:"442",target:"443"},{source:"444",target:"445"},{source:"445",target:"454"},{source:"445",target:"468"},{source:"445",target:"491"},{source:"445",target:"497"},{source:"445",target:"498"},{source:"446",target:"447"},{source:"447",target:"463"},{source:"448",target:"449"},{source:"448",target:"450"},{source:"449",target:"450"},{source:"451",target:"452"},{source:"451",target:"453"},{source:"452",target:"505"},{source:"452",target:"453"},{source:"453",target:"1398"},{source:"453",target:"505"},{source:"453",target:"1422"},{source:"453",target:"1423"},{source:"453",target:"1395"},{source:"453",target:"1424"},{source:"454",target:"459"},{source:"454",target:"460"},{source:"454",target:"468"},{source:"454",target:"462"},{source:"455",target:"489"},{source:"458",target:"470"},{source:"458",target:"477"},{source:"461",target:"469"},{source:"461",target:"482"},{source:"463",target:"496"},{source:"466",target:"471"},{source:"469",target:"482"},{source:"471",target:"493"},{source:"471",target:"494"},{source:"471",target:"495"},{source:"472",target:"473"},{source:"472",target:"474"},{source:"472",target:"475"},{source:"478",target:"479"},{source:"480",target:"484"},{source:"481",target:"499"},{source:"481",target:"500"},{source:"483",target:"1372"},{source:"483",target:"1142"},{source:"483",target:"1373"},{source:"483",target:"1371"},{source:"483",target:"1374"},{source:"483",target:"498"},{source:"483",target:"1377"},{source:"494",target:"495"},{source:"495",target:"506"},{source:"498",target:"1369"},{source:"498",target:"1375"},{source:"498",target:"1376"},{source:"498",target:"1377"},{source:"498",target:"1142"},{source:"498",target:"1379"},{source:"498",target:"1380"},{source:"498",target:"1371"},{source:"498",target:"1374"},{source:"498",target:"1381"},{source:"498",target:"1186"},{source:"500",target:"501"},{source:"500",target:"502"},{source:"503",target:"504"},{source:"507",target:"513"},{source:"510",target:"520"},{source:"510",target:"1627"},{source:"511",target:"518"},{source:"513",target:"516"},{source:"516",target:"1555"},{source:"519",target:"520"},{source:"520",target:"522"},{source:"523",target:"524"},{source:"524",target:"1314"},{source:"526",target:"527"},{source:"527",target:"528"},{source:"529",target:"530"},{source:"531",target:"532"},{source:"532",target:"596"},{source:"533",target:"534"},{source:"533",target:"535"},{source:"533",target:"536"},{source:"533",target:"537"},{source:"533",target:"552"},{source:"533",target:"553"},{source:"533",target:"556"},{source:"534",target:"540"},{source:"534",target:"608"},{source:"534",target:"538"},{source:"534",target:"611"},{source:"534",target:"612"},{source:"535",target:"546"},{source:"535",target:"549"},{source:"535",target:"550"},{source:"535",target:"552"},{source:"536",target:"600"},{source:"536",target:"601"},{source:"538",target:"539"},{source:"539",target:"604"},{source:"540",target:"541"},{source:"543",target:"589"},{source:"545",target:"596"},{source:"547",target:"549"},{source:"548",target:"597"},{source:"549",target:"550"},{source:"552",target:"556"},{source:"553",target:"592"},{source:"553",target:"609"},{source:"553",target:"610"},{source:"553",target:"596"},{source:"554",target:"595"},{source:"554",target:"565"},{source:"556",target:"589"},{source:"556",target:"585"},{source:"557",target:"626"},{source:"557",target:"625"},{source:"557",target:"653"},{source:"557",target:"560"},{source:"557",target:"654"},{source:"557",target:"630"},{source:"557",target:"623"},{source:"558",target:"561"},{source:"560",target:"627"},{source:"560",target:"652"},{source:"560",target:"623"},{source:"560",target:"664"},{source:"560",target:"667"},{source:"560",target:"561"},{source:"560",target:"645"},{source:"560",target:"638"},{source:"561",target:"655"},{source:"561",target:"623"},{source:"563",target:"676"},{source:"563",target:"680"},{source:"563",target:"685"},{source:"563",target:"687"},{source:"563",target:"564"},{source:"563",target:"565"},{source:"563",target:"678"},{source:"564",target:"675"},{source:"564",target:"676"},{source:"564",target:"684"},{source:"564",target:"685"},{source:"564",target:"688"},{source:"564",target:"565"},{source:"564",target:"678"},{source:"565",target:"681"},{source:"565",target:"695"},{source:"565",target:"678"},{source:"566",target:"734"},{source:"566",target:"747"},{source:"566",target:"751"},{source:"566",target:"753"},{source:"566",target:"731"},{source:"566",target:"754"},{source:"566",target:"755"},{source:"566",target:"748"},{source:"566",target:"756"},{source:"566",target:"743"},{source:"566",target:"741"},{source:"566",target:"733"},{source:"566",target:"758"},{source:"566",target:"778"},{source:"566",target:"727"},{source:"567",target:"647"},{source:"567",target:"569"},{source:"567",target:"570"},{source:"567",target:"572"},{source:"568",target:"877"},{source:"568",target:"878"},{source:"568",target:"569"},{source:"568",target:"879"},{source:"568",target:"880"},{source:"568",target:"570"},{source:"568",target:"881"},{source:"568",target:"882"},{source:"569",target:"868"},{source:"569",target:"888"},{source:"569",target:"880"},{source:"569",target:"570"},{source:"569",target:"881"},{source:"569",target:"865"},{source:"569",target:"866"},{source:"569",target:"891"},{source:"570",target:"647"},{source:"570",target:"889"},{source:"570",target:"869"},{source:"570",target:"572"},{source:"570",target:"571"},{source:"572",target:"861"},{source:"572",target:"647"},{source:"573",target:"932"},{source:"574",target:"903"},{source:"574",target:"923"},{source:"574",target:"906"},{source:"574",target:"907"},{source:"574",target:"926"},{source:"574",target:"927"},{source:"575",target:"957"},{source:"575",target:"963"},{source:"575",target:"964"},{source:"576",target:"977"},{source:"576",target:"612"},{source:"576",target:"983"},{source:"576",target:"996"},{source:"576",target:"978"},{source:"576",target:"1004"},{source:"577",target:"733"},{source:"577",target:"744"},{source:"577",target:"1229"},{source:"577",target:"1230"},{source:"577",target:"1231"},{source:"577",target:"579"},{source:"578",target:"893"},{source:"578",target:"894"},{source:"578",target:"1215"},{source:"578",target:"1244"},{source:"578",target:"1274"},{source:"578",target:"1264"},{source:"578",target:"1248"},{source:"578",target:"1276"},{source:"579",target:"1224"},{source:"579",target:"1244"},{source:"579",target:"1275"},{source:"579",target:"1245"},{source:"579",target:"1239"},{source:"579",target:"1225"},{source:"579",target:"1246"},{source:"579",target:"1247"},{source:"580",target:"1488"},{source:"580",target:"1456"},{source:"580",target:"1457"},{source:"581",target:"1659"},{source:"581",target:"1660"},{source:"581",target:"1661"},{source:"581",target:"1662"},{source:"581",target:"1663"},{source:"581",target:"583"},{source:"581",target:"1664"},{source:"581",target:"588"},{source:"582",target:"586"},{source:"584",target:"1670"},{source:"584",target:"586"},{source:"584",target:"588"},{source:"585",target:"1674"},{source:"585",target:"1675"},{source:"585",target:"586"},{source:"585",target:"588"},{source:"587",target:"1670"},{source:"587",target:"1691"},{source:"587",target:"1680"},{source:"587",target:"1678"},{source:"587",target:"1676"},{source:"587",target:"1687"},{source:"587",target:"588"},{source:"588",target:"1670"},{source:"588",target:"1680"},{source:"588",target:"1678"},{source:"588",target:"1688"},{source:"589",target:"598"},{source:"590",target:"591"},{source:"590",target:"592"},{source:"593",target:"594"},{source:"594",target:"690"},{source:"596",target:"602"},{source:"596",target:"607"},{source:"598",target:"599"},{source:"601",target:"613"},{source:"602",target:"603"},{source:"605",target:"606"},{source:"612",target:"996"},{source:"612",target:"985"},{source:"612",target:"1010"},{source:"612",target:"1004"},{source:"612",target:"1011"},{source:"615",target:"617"},{source:"617",target:"662"},{source:"617",target:"661"},{source:"617",target:"620"},{source:"621",target:"622"},{source:"621",target:"623"},{source:"621",target:"642"},{source:"622",target:"659"},{source:"623",target:"655"},{source:"623",target:"627"},{source:"623",target:"660"},{source:"624",target:"625"},{source:"625",target:"643"},{source:"625",target:"651"},{source:"625",target:"657"},{source:"628",target:"672"},{source:"629",target:"630"},{source:"629",target:"631"},{source:"630",target:"631"},{source:"630",target:"658"},{source:"632",target:"633"},{source:"632",target:"634"},{source:"632",target:"635"},{source:"632",target:"636"},{source:"633",target:"634"},{source:"633",target:"636"},{source:"635",target:"670"},{source:"637",target:"638"},{source:"638",target:"668"},{source:"638",target:"673"},{source:"640",target:"641"},{source:"641",target:"669"},{source:"644",target:"645"},{source:"645",target:"650"},{source:"647",target:"869"},{source:"648",target:"649"},{source:"653",target:"654"},{source:"654",target:"660"},{source:"655",target:"656"},{source:"656",target:"666"},{source:"656",target:"667"},{source:"660",target:"671"},{source:"664",target:"665"},{source:"676",target:"677"},{source:"676",target:"678"},{source:"676",target:"685"},{source:"678",target:"694"},{source:"678",target:"698"},{source:"681",target:"682"},{source:"688",target:"689"},{source:"692",target:"693"},{source:"695",target:"696"},{source:"697",target:"698"},{source:"698",target:"700"},{source:"698",target:"701"},{source:"700",target:"1384"},{source:"700",target:"1385"},{source:"700",target:"1386"},{source:"700",target:"1389"},{source:"700",target:"1390"},{source:"705",target:"706"},{source:"705",target:"707"},{source:"705",target:"720"},{source:"705",target:"710"},{source:"706",target:"707"},{source:"707",target:"712"},{source:"707",target:"721"},{source:"707",target:"710"},{source:"709",target:"710"},{source:"710",target:"722"},{source:"715",target:"990"},{source:"716",target:"975"},{source:"716",target:"977"},{source:"716",target:"993"},{source:"716",target:"717"},{source:"716",target:"994"},{source:"716",target:"978"},{source:"717",target:"975"},{source:"719",target:"720"},{source:"722",target:"723"},{source:"725",target:"726"},{source:"725",target:"727"},{source:"727",target:"751"},{source:"727",target:"773"},{source:"727",target:"779"},{source:"727",target:"780"},{source:"727",target:"743"},{source:"728",target:"729"},{source:"730",target:"731"},{source:"730",target:"732"},{source:"730",target:"733"},{source:"731",target:"733"},{source:"731",target:"743"},{source:"731",target:"744"},{source:"733",target:"770"},{source:"735",target:"736"},{source:"735",target:"737"},{source:"736",target:"1262"},{source:"737",target:"1273"},{source:"738",target:"739"},{source:"738",target:"776"},{source:"740",target:"741"},{source:"740",target:"742"},{source:"741",target:"761"},{source:"741",target:"762"},{source:"741",target:"746"},{source:"743",target:"786"},{source:"744",target:"1214"},{source:"744",target:"1231"},{source:"745",target:"746"},{source:"746",target:"1433"},{source:"747",target:"748"},{source:"748",target:"752"},{source:"749",target:"750"},{source:"750",target:"771"},{source:"750",target:"772"},{source:"754",target:"781"},{source:"755",target:"769"},{source:"757",target:"758"},{source:"758",target:"1657"},{source:"759",target:"760"},{source:"760",target:"775"},{source:"763",target:"764"},{source:"767",target:"777"},{source:"771",target:"772"},{source:"773",target:"774"},{source:"782",target:"783"},{source:"782",target:"784"},{source:"783",target:"786"},{source:"783",target:"794"},{source:"783",target:"798"},{source:"783",target:"816"},{source:"783",target:"806"},{source:"785",target:"786"},{source:"785",target:"787"},{source:"786",target:"788"},{source:"786",target:"793"},{source:"786",target:"794"},{source:"786",target:"795"},{source:"786",target:"796"},{source:"787",target:"797"},{source:"788",target:"789"},{source:"788",target:"790"},{source:"788",target:"791"},{source:"788",target:"792"},{source:"790",target:"797"},{source:"791",target:"812"},{source:"791",target:"813"},{source:"791",target:"807"},{source:"791",target:"797"},{source:"792",target:"1490"},{source:"795",target:"1502"},{source:"795",target:"1515"},{source:"795",target:"1532"},{source:"795",target:"1455"},{source:"795",target:"1463"},{source:"795",target:"1519"},{source:"795",target:"796"},{source:"795",target:"1473"},{source:"795",target:"1087"},{source:"795",target:"1537"},{source:"795",target:"1496"},{source:"795",target:"1541"},{source:"795",target:"1503"},{source:"795",target:"1459"},{source:"795",target:"1500"},{source:"796",target:"1519"},{source:"796",target:"1539"},{source:"798",target:"816"},{source:"798",target:"805"},{source:"798",target:"811"},{source:"798",target:"809"},{source:"799",target:"800"},{source:"801",target:"802"},{source:"801",target:"803"},{source:"804",target:"807"},{source:"808",target:"809"},{source:"817",target:"818"},{source:"818",target:"832"},{source:"819",target:"820"},{source:"819",target:"821"},{source:"819",target:"822"},{source:"819",target:"823"},{source:"821",target:"826"},{source:"821",target:"822"},{source:"821",target:"827"},{source:"821",target:"828"},{source:"822",target:"824"},{source:"822",target:"830"},{source:"822",target:"828"},{source:"822",target:"823"},{source:"823",target:"824"},{source:"823",target:"831"},{source:"825",target:"852"},{source:"825",target:"854"},{source:"825",target:"849"},{source:"826",target:"829"},{source:"833",target:"839"},{source:"834",target:"840"},{source:"834",target:"838"},{source:"836",target:"838"},{source:"836",target:"1334"},{source:"836",target:"1333"},{source:"838",target:"840"},{source:"838",target:"1330"},{source:"838",target:"843"},{source:"842",target:"843"},{source:"842",target:"844"},{source:"843",target:"1330"},{source:"844",target:"1593"},{source:"845",target:"1111"},{source:"845",target:"1125"},{source:"845",target:"855"},{source:"845",target:"1113"},{source:"845",target:"1075"},{source:"845",target:"1566"},{source:"846",target:"848"},{source:"848",target:"851"},{source:"848",target:"852"},{source:"849",target:"853"},{source:"849",target:"850"},{source:"854",target:"1057"},{source:"854",target:"1571"},{source:"855",target:"1093"},{source:"855",target:"1097"},{source:"855",target:"1125"},{source:"855",target:"1134"},{source:"855",target:"1065"},{source:"855",target:"856"},{source:"856",target:"1097"},{source:"856",target:"1104"},{source:"856",target:"1114"},{source:"856",target:"1101"},{source:"857",target:"1567"},{source:"857",target:"1568"},{source:"857",target:"1569"},{source:"857",target:"1570"},{source:"859",target:"860"},{source:"862",target:"863"},{source:"863",target:"865"},{source:"863",target:"866"},{source:"866",target:"875"},{source:"866",target:"880"},{source:"867",target:"868"},{source:"867",target:"869"},{source:"867",target:"885"},{source:"870",target:"871"},{source:"871",target:"872"},{source:"873",target:"874"},{source:"873",target:"875"},{source:"873",target:"876"},{source:"875",target:"880"},{source:"875",target:"884"},{source:"876",target:"881"},{source:"878",target:"883"},{source:"880",target:"881"},{source:"882",target:"899"},{source:"886",target:"887"},{source:"890",target:"891"},{source:"890",target:"892"},{source:"892",target:"897"},{source:"896",target:"898"},{source:"897",target:"900"},{source:"903",target:"904"},{source:"903",target:"905"},{source:"903",target:"906"},{source:"903",target:"907"},{source:"903",target:"908"},{source:"904",target:"922"},{source:"905",target:"941"},{source:"906",target:"919"},{source:"906",target:"930"},{source:"906",target:"935"},{source:"906",target:"943"},{source:"906",target:"907"},{source:"907",target:"915"},{source:"907",target:"937"},{source:"907",target:"941"},{source:"907",target:"908"},{source:"907",target:"944"},{source:"908",target:"941"},{source:"908",target:"945"},{source:"909",target:"910"},{source:"909",target:"911"},{source:"909",target:"912"},{source:"910",target:"912"},{source:"911",target:"912"},{source:"912",target:"1206"},{source:"912",target:"1208"},{source:"912",target:"1210"},{source:"912",target:"1212"},{source:"913",target:"914"},{source:"917",target:"918"},{source:"920",target:"921"},{source:"921",target:"936"},{source:"926",target:"927"},{source:"927",target:"942"},{source:"933",target:"1665"},{source:"933",target:"1667"},{source:"933",target:"1693"},{source:"942",target:"1692"},{source:"946",target:"947"},{source:"948",target:"949"},{source:"949",target:"952"},{source:"950",target:"953"},{source:"951",target:"952"},{source:"952",target:"967"},{source:"952",target:"968"},{source:"954",target:"955"},{source:"954",target:"956"},{source:"957",target:"958"},{source:"957",target:"959"},{source:"957",target:"960"},{source:"957",target:"961"},{source:"958",target:"966"},{source:"961",target:"969"},{source:"961",target:"970"},{source:"971",target:"972"},{source:"974",target:"975"},{source:"975",target:"993"},{source:"976",target:"977"},{source:"977",target:"982"},{source:"977",target:"983"},{source:"977",target:"978"},{source:"977",target:"984"},{source:"977",target:"985"},{source:"977",target:"1001"},{source:"978",target:"991"},{source:"978",target:"997"},{source:"978",target:"999"},{source:"978",target:"985"},{source:"978",target:"992"},{source:"978",target:"1000"},{source:"978",target:"1002"},{source:"978",target:"1012"},{source:"980",target:"981"},{source:"982",target:"983"},{source:"985",target:"996"},{source:"985",target:"1013"},{source:"985",target:"1019"},{source:"986",target:"987"},{source:"988",target:"989"},{source:"989",target:"1016"},{source:"989",target:"1017"},{source:"989",target:"1020"},{source:"991",target:"992"},{source:"991",target:"1022"},{source:"992",target:"1022"},{source:"995",target:"996"},{source:"996",target:"998"},{source:"999",target:"1009"},{source:"1003",target:"1004"},{source:"1004",target:"1011"},{source:"1006",target:"1007"},{source:"1014",target:"1015"},{source:"1020",target:"1021"},{source:"1023",target:"1024"},{source:"1024",target:"1025"},{source:"1024",target:"1026"},{source:"1024",target:"1027"},{source:"1024",target:"1031"},{source:"1024",target:"1034"},{source:"1024",target:"1036"},{source:"1024",target:"1028"},{source:"1026",target:"1027"},{source:"1026",target:"1028"},{source:"1027",target:"1029"},{source:"1027",target:"1028"},{source:"1027",target:"1031"},{source:"1027",target:"1033"},{source:"1028",target:"1030"},{source:"1028",target:"1031"},{source:"1028",target:"1035"},{source:"1031",target:"1032"},{source:"1037",target:"1038"},{source:"1037",target:"1046"},{source:"1043",target:"1094"},{source:"1043",target:"1065"},{source:"1043",target:"1096"},{source:"1043",target:"1099"},{source:"1043",target:"1343"},{source:"1044",target:"1113"},{source:"1044",target:"1123"},{source:"1044",target:"1139"},{source:"1046",target:"1047"},{source:"1057",target:"1058"},{source:"1059",target:"1060"},{source:"1059",target:"1061"},{source:"1059",target:"1062"},{source:"1060",target:"1068"},{source:"1060",target:"1073"},{source:"1061",target:"1068"},{source:"1062",target:"1068"},{source:"1063",target:"1073"},{source:"1063",target:"1072"},{source:"1063",target:"1129"},{source:"1064",target:"1075"},{source:"1064",target:"1065"},{source:"1064",target:"1066"},{source:"1064",target:"1067"},{source:"1065",target:"1073"},{source:"1065",target:"1134"},{source:"1065",target:"1093"},{source:"1065",target:"1130"},{source:"1065",target:"1099"},{source:"1065",target:"1067"},{source:"1065",target:"1129"},{source:"1066",target:"1073"},{source:"1066",target:"1129"},{source:"1066",target:"1345"},{source:"1066",target:"1359"},{source:"1066",target:"1071"},{source:"1066",target:"1346"},{source:"1071",target:"1131"},{source:"1071",target:"1345"},{source:"1071",target:"1132"},{source:"1071",target:"1362"},{source:"1071",target:"1333"},{source:"1071",target:"1334"},{source:"1071",target:"1346"},{source:"1072",target:"1074"},{source:"1072",target:"1345"},{source:"1072",target:"1333"},{source:"1075",target:"1100"},{source:"1075",target:"1110"},{source:"1075",target:"1111"},{source:"1076",target:"1078"},{source:"1086",target:"1087"},{source:"1086",target:"1088"},{source:"1087",target:"1489"},{source:"1087",target:"1504"},{source:"1087",target:"1529"},{source:"1087",target:"1458"},{source:"1087",target:"1088"},{source:"1087",target:"1503"},{source:"1087",target:"1469"},{source:"1087",target:"1549"},{source:"1087",target:"1470"},{source:"1088",target:"1504"},{source:"1088",target:"1530"},{source:"1088",target:"1473"},{source:"1093",target:"1094"},{source:"1093",target:"1112"},{source:"1093",target:"1122"},{source:"1093",target:"1128"},{source:"1094",target:"1112"},{source:"1095",target:"1096"},{source:"1096",target:"1105"},{source:"1096",target:"1117"},{source:"1096",target:"1140"},{source:"1097",target:"1100"},{source:"1097",target:"1101"},{source:"1097",target:"1102"},{source:"1098",target:"1122"},{source:"1100",target:"1109"},{source:"1100",target:"1115"},{source:"1101",target:"1108"},{source:"1103",target:"1104"},{source:"1103",target:"1105"},{source:"1103",target:"1119"},{source:"1105",target:"1107"},{source:"1105",target:"1108"},{source:"1108",target:"1343"},{source:"1109",target:"1115"},{source:"1109",target:"1128"},{source:"1109",target:"1123"},{source:"1110",target:"1114"},{source:"1110",target:"1111"},{source:"1111",target:"1114"},{source:"1112",target:"1113"},{source:"1116",target:"1119"},{source:"1117",target:"1134"},{source:"1118",target:"1136"},{source:"1120",target:"1342"},{source:"1120",target:"1336"},{source:"1120",target:"1330"},{source:"1120",target:"1337"},{source:"1120",target:"1354"},{source:"1120",target:"1355"},{source:"1120",target:"1279"},{source:"1120",target:"1341"},{source:"1121",target:"1122"},{source:"1121",target:"1123"},{source:"1123",target:"1139"},{source:"1125",target:"1126"},{source:"1125",target:"1127"},{source:"1126",target:"1128"},{source:"1127",target:"1128"},{source:"1131",target:"1333"},{source:"1131",target:"1334"},{source:"1131",target:"1337"},{source:"1132",target:"1334"},{source:"1132",target:"1337"},{source:"1132",target:"1359"},{source:"1132",target:"1333"},{source:"1134",target:"1137"},{source:"1134",target:"1138"},{source:"1140",target:"1352"},{source:"1140",target:"1343"},{source:"1141",target:"1151"},{source:"1141",target:"1179"},{source:"1141",target:"1150"},{source:"1143",target:"1144"},{source:"1143",target:"1145"},{source:"1144",target:"1160"},{source:"1144",target:"1189"},{source:"1145",target:"1162"},{source:"1146",target:"1147"},{source:"1146",target:"1148"},{source:"1147",target:"1148"},{source:"1147",target:"1161"},{source:"1148",target:"1157"},{source:"1149",target:"1150"},{source:"1150",target:"1180"},{source:"1150",target:"1187"},{source:"1150",target:"1193"},{source:"1150",target:"1194"},{source:"1150",target:"1171"},{source:"1152",target:"1156"},{source:"1154",target:"1203"},{source:"1157",target:"1158"},{source:"1158",target:"1176"},{source:"1158",target:"1177"},{source:"1160",target:"1577"},{source:"1160",target:"1199"},{source:"1161",target:"1165"},{source:"1162",target:"1163"},{source:"1163",target:"1167"},{source:"1163",target:"1170"},{source:"1164",target:"1165"},{source:"1164",target:"1166"},{source:"1165",target:"1186"},{source:"1167",target:"1169"},{source:"1167",target:"1190"},{source:"1168",target:"1191"},{source:"1168",target:"1170"},{source:"1169",target:"1171"},{source:"1170",target:"1196"},{source:"1171",target:"1178"},{source:"1171",target:"1193"},{source:"1172",target:"1286"},{source:"1174",target:"1175"},{source:"1178",target:"1179"},{source:"1180",target:"1181"},{source:"1181",target:"1197"},{source:"1182",target:"1189"},{source:"1182",target:"1200"},{source:"1183",target:"1184"},{source:"1183",target:"1185"},{source:"1184",target:"1185"},{source:"1185",target:"1205"},{source:"1186",target:"1374"},{source:"1188",target:"1191"},{source:"1189",target:"1199"},{source:"1192",target:"1202"},{source:"1199",target:"1613"},{source:"1200",target:"1201"},{source:"1206",target:"1207"},{source:"1206",target:"1208"},{source:"1206",target:"1209"},{source:"1206",target:"1212"},{source:"1208",target:"1211"},{source:"1208",target:"1212"},{source:"1213",target:"1214"},{source:"1215",target:"1216"},{source:"1215",target:"1217"},{source:"1215",target:"1218"},{source:"1215",target:"1219"},{source:"1216",target:"1226"},{source:"1220",target:"1221"},{source:"1220",target:"1247"},{source:"1221",target:"1241"},{source:"1221",target:"1271"},{source:"1222",target:"1223"},{source:"1222",target:"1224"},{source:"1223",target:"1245"},{source:"1224",target:"1245"},{source:"1225",target:"1280"},{source:"1226",target:"1235"},{source:"1227",target:"1272"},{source:"1228",target:"1656"},{source:"1228",target:"1339"},{source:"1229",target:"1233"},{source:"1229",target:"1236"},{source:"1231",target:"1236"},{source:"1232",target:"1233"},{source:"1232",target:"1234"},{source:"1232",target:"1235"},{source:"1233",target:"1235"},{source:"1234",target:"1252"},{source:"1235",target:"1249"},{source:"1236",target:"1237"},{source:"1237",target:"1257"},{source:"1238",target:"1239"},{source:"1238",target:"1272"},{source:"1239",target:"1245"},{source:"1239",target:"1275"},{source:"1239",target:"1270"},{source:"1239",target:"1247"},{source:"1242",target:"1250"},{source:"1242",target:"1251"},{source:"1242",target:"1252"},{source:"1243",target:"1244"},{source:"1244",target:"1245"},{source:"1244",target:"1248"},{source:"1245",target:"1275"},{source:"1245",target:"1246"},{source:"1246",target:"1279"},{source:"1247",target:"1275"},{source:"1248",target:"1267"},{source:"1248",target:"1274"},{source:"1248",target:"1276"},{source:"1248",target:"1268"},{source:"1250",target:"1253"},{source:"1250",target:"1258"},{source:"1250",target:"1255"},{source:"1251",target:"1260"},{source:"1252",target:"1260"},{source:"1252",target:"1259"},{source:"1253",target:"1254"},{source:"1253",target:"1255"},{source:"1253",target:"1256"},{source:"1255",target:"1261"},{source:"1256",target:"1277"},{source:"1262",target:"1278"},{source:"1263",target:"1264"},{source:"1265",target:"1266"},{source:"1267",target:"1268"},{source:"1268",target:"1271"},{source:"1268",target:"1276"},{source:"1269",target:"1270"},{source:"1272",target:"1646"},{source:"1273",target:"1645"},{source:"1273",target:"1647"},{source:"1273",target:"1648"},{source:"1274",target:"1276"},{source:"1277",target:"1278"},{source:"1279",target:"1336"},{source:"1279",target:"1361"},{source:"1280",target:"1281"},{source:"1281",target:"1658"},{source:"1282",target:"1283"},{source:"1283",target:"1485"},{source:"1285",target:"1286"},{source:"1286",target:"1290"},{source:"1286",target:"1291"},{source:"1286",target:"1292"},{source:"1286",target:"1293"},{source:"1286",target:"1298"},{source:"1288",target:"1289"},{source:"1290",target:"1291"},{source:"1291",target:"1298"},{source:"1292",target:"1294"},{source:"1292",target:"1297"},{source:"1292",target:"1299"},{source:"1292",target:"1301"},{source:"1293",target:"1301"},{source:"1295",target:"1312"},{source:"1299",target:"1300"},{source:"1300",target:"1307"},{source:"1310",target:"1311"},{source:"1313",target:"1314"},{source:"1316",target:"1317"},{source:"1325",target:"1328"},{source:"1325",target:"1329"},{source:"1328",target:"1626"},{source:"1330",target:"1342"},{source:"1330",target:"1336"},{source:"1331",target:"1333"},{source:"1332",target:"1333"},{source:"1332",target:"1341"},{source:"1333",target:"1334"},{source:"1333",target:"1347"},{source:"1333",target:"1348"},{source:"1333",target:"1346"},{source:"1333",target:"1350"},{source:"1333",target:"1341"},{source:"1334",target:"1346"},{source:"1335",target:"1349"},{source:"1336",target:"1353"},{source:"1338",target:"1340"},{source:"1338",target:"1349"},{source:"1339",target:"1650"},{source:"1339",target:"1645"},{source:"1340",target:"1341"},{source:"1344",target:"1346"},{source:"1344",target:"1351"},{source:"1344",target:"1352"},{source:"1345",target:"1346"},{source:"1346",target:"1359"},{source:"1346",target:"1350"},{source:"1346",target:"1363"},{source:"1347",target:"1349"},{source:"1348",target:"1350"},{source:"1351",target:"1352"},{source:"1352",target:"1364"},{source:"1356",target:"1357"},{source:"1357",target:"1358"},{source:"1359",target:"1360"},{source:"1367",target:"1368"},{source:"1370",target:"1371"},{source:"1371",target:"1375"},{source:"1373",target:"1379"},{source:"1373",target:"1374"},{source:"1377",target:"1378"},{source:"1387",target:"1388"},{source:"1387",target:"1389"},{source:"1391",target:"1392"},{source:"1391",target:"1393"},{source:"1393",target:"1440"},{source:"1394",target:"1395"},{source:"1395",target:"1410"},{source:"1395",target:"1441"},{source:"1395",target:"1416"},{source:"1395",target:"1417"},{source:"1395",target:"1415"},{source:"1396",target:"1397"},{source:"1397",target:"1430"},{source:"1397",target:"1399"},{source:"1398",target:"1399"},{source:"1398",target:"1400"},{source:"1399",target:"1400"},{source:"1401",target:"1402"},{source:"1401",target:"1403"},{source:"1402",target:"1421"},{source:"1402",target:"1403"},{source:"1402",target:"1444"},{source:"1402",target:"1445"},{source:"1403",target:"1419"},{source:"1403",target:"1447"},{source:"1404",target:"1405"},{source:"1405",target:"1415"},{source:"1406",target:"1407"},{source:"1407",target:"1418"},{source:"1407",target:"1425"},{source:"1407",target:"1426"},{source:"1407",target:"1431"},{source:"1408",target:"1409"},{source:"1409",target:"1420"},{source:"1409",target:"1427"},{source:"1410",target:"1411"},{source:"1412",target:"1413"},{source:"1414",target:"1432"},{source:"1414",target:"1416"},{source:"1415",target:"1446"},{source:"1415",target:"1416"},{source:"1415",target:"1417"},{source:"1416",target:"1432"},{source:"1417",target:"1448"},{source:"1417",target:"1449"},{source:"1420",target:"1421"},{source:"1434",target:"1435"},{source:"1436",target:"1437"},{source:"1437",target:"1438"},{source:"1437",target:"1439"},{source:"1444",target:"1615"},{source:"1445",target:"1582"},{source:"1445",target:"1621"},{source:"1445",target:"1622"},{source:"1449",target:"1450"},{source:"1449",target:"1451"},{source:"1450",target:"1528"},{source:"1450",target:"1451"},{source:"1450",target:"1499"},{source:"1451",target:"1483"},{source:"1451",target:"1490"},{source:"1451",target:"1511"},{source:"1451",target:"1499"},{source:"1451",target:"1501"},{source:"1454",target:"1493"},{source:"1454",target:"1458"},{source:"1455",target:"1461"},{source:"1455",target:"1477"},{source:"1455",target:"1458"},{source:"1455",target:"1478"},{source:"1455",target:"1463"},{source:"1455",target:"1513"},{source:"1455",target:"1470"},{source:"1455",target:"1526"},{source:"1456",target:"1469"},{source:"1456",target:"1473"},{source:"1458",target:"1509"},{source:"1459",target:"1484"},{source:"1459",target:"1527"},{source:"1459",target:"1497"},{source:"1459",target:"1506"},{source:"1460",target:"1510"},{source:"1461",target:"1463"},{source:"1462",target:"1465"},{source:"1462",target:"1554"},{source:"1464",target:"1487"},{source:"1464",target:"1514"},{source:"1464",target:"1465"},{source:"1465",target:"1479"},{source:"1465",target:"1487"},{source:"1469",target:"1481"},{source:"1469",target:"1538"},{source:"1469",target:"1470"},{source:"1470",target:"1543"},{source:"1472",target:"1480"},{source:"1473",target:"1535"},{source:"1473",target:"1554"},{source:"1486",target:"1492"},{source:"1486",target:"1498"},{source:"1486",target:"1531"},{source:"1490",target:"1511"},{source:"1490",target:"1512"},{source:"1491",target:"1508"},{source:"1491",target:"1530"},{source:"1491",target:"1497"},{source:"1492",target:"1501"},{source:"1493",target:"1505"},{source:"1493",target:"1497"},{source:"1494",target:"1542"},{source:"1497",target:"1540"},{source:"1497",target:"1500"},{source:"1500",target:"1506"},{source:"1502",target:"1503"},{source:"1503",target:"1532"},{source:"1503",target:"1537"},{source:"1507",target:"1508"},{source:"1515",target:"1516"},{source:"1523",target:"1534"},{source:"1557",target:"1558"},{source:"1572",target:"1573"},{source:"1572",target:"1574"},{source:"1572",target:"1575"},{source:"1576",target:"1577"},{source:"1577",target:"1578"},{source:"1577",target:"1584"},{source:"1577",target:"1585"},{source:"1579",target:"1580"},{source:"1579",target:"1581"},{source:"1580",target:"1585"},{source:"1582",target:"1583"},{source:"1583",target:"1623"},{source:"1585",target:"1600"},{source:"1586",target:"1587"},{source:"1589",target:"1604"},{source:"1590",target:"1619"},{source:"1590",target:"1602"},{source:"1591",target:"1595"},{source:"1591",target:"1612"},{source:"1592",target:"1593"},{source:"1593",target:"1601"},{source:"1593",target:"1602"},{source:"1593",target:"1599"},{source:"1593",target:"1603"},{source:"1610",target:"1618"},{source:"1614",target:"1615"},{source:"1616",target:"1617"},{source:"1623",target:"1655"},{source:"1624",target:"1625"},{source:"1629",target:"1636"},{source:"1631",target:"1632"},{source:"1633",target:"1634"},{source:"1644",target:"1645"},{source:"1644",target:"1654"},{source:"1645",target:"1649"},{source:"1645",target:"1653"},{source:"1645",target:"1647"},{source:"1650",target:"1651"},{source:"1650",target:"1652"},{source:"1664",target:"1667"},{source:"1665",target:"1679"},{source:"1666",target:"1667"},{source:"1666",target:"1668"},{source:"1667",target:"1685"},{source:"1667",target:"1686"},{source:"1667",target:"1687"},{source:"1667",target:"1668"},{source:"1668",target:"1687"},{source:"1669",target:"1670"},{source:"1669",target:"1671"},{source:"1669",target:"1672"},{source:"1670",target:"1677"},{source:"1670",target:"1675"},{source:"1670",target:"1678"},{source:"1673",target:"1681"},{source:"1673",target:"1682"},{source:"1676",target:"1683"},{source:"1676",target:"1684"},{source:"1677",target:"1680"},{source:"1677",target:"1678"},{source:"1678",target:"1691"},{source:"1678",target:"1680"},{source:"1689",target:"1690"},{source:"1692",target:"1694"},{source:"1695",target:"1696"},{source:"1695",target:"1698"},{source:"1697",target:"1698"},{source:"1698",target:"1699"},{source:"1700",target:"1701"}]}});function ka(){return ka=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ka.apply(this,arguments)}var Wi={epsilon:1e-12,matrix:"Matrix",number:"number",precision:64,predictable:!1,randomSeed:null};function pt(e){return typeof e=="number"}function Rt(e){return!e||typeof e!="object"||typeof e.constructor!="function"?!1:e.isBigNumber===!0&&typeof e.constructor.prototype=="object"&&e.constructor.prototype.isBigNumber===!0||typeof e.constructor.isDecimal=="function"&&e.constructor.isDecimal(e)===!0}function mo(e){return e&&typeof e=="object"&&Object.getPrototypeOf(e).isComplex===!0||!1}function xo(e){return e&&typeof e=="object"&&Object.getPrototypeOf(e).isFraction===!0||!1}function Oa(e){return e&&e.constructor.prototype.isUnit===!0||!1}function pr(e){return typeof e=="string"}var Et=Array.isArray;function Ut(e){return e&&e.constructor.prototype.isMatrix===!0||!1}function yo(e){return Array.isArray(e)||Ut(e)}function T0(e){return e&&e.isDenseMatrix&&e.constructor.prototype.isMatrix===!0||!1}function R0(e){return e&&e.isSparseMatrix&&e.constructor.prototype.isMatrix===!0||!1}function ji(e){return e&&e.constructor.prototype.isRange===!0||!1}function Dn(e){return e&&e.constructor.prototype.isIndex===!0||!1}function N0(e){return typeof e=="boolean"}function Xi(e){return e&&e.constructor.prototype.isResultSet===!0||!1}function Yi(e){return e&&e.constructor.prototype.isHelp===!0||!1}function I0(e){return typeof e=="function"}function L0(e){return e instanceof Date}function P0(e){return e instanceof RegExp}function D0(e){return!!(e&&typeof e=="object"&&e.constructor===Object&&!mo(e)&&!xo(e))}function k0(e){return e===null}function O0(e){return e===void 0}function F0(e){return e&&e.isAccessorNode===!0&&e.constructor.prototype.isNode===!0||!1}function B0(e){return e&&e.isArrayNode===!0&&e.constructor.prototype.isNode===!0||!1}function U0(e){return e&&e.isAssignmentNode===!0&&e.constructor.prototype.isNode===!0||!1}function G0(e){return e&&e.isBlockNode===!0&&e.constructor.prototype.isNode===!0||!1}function V0(e){return e&&e.isConditionalNode===!0&&e.constructor.prototype.isNode===!0||!1}function z0(e){return e&&e.isConstantNode===!0&&e.constructor.prototype.isNode===!0||!1}function H0(e){return e&&e.isFunctionAssignmentNode===!0&&e.constructor.prototype.isNode===!0||!1}function q0(e){return e&&e.isFunctionNode===!0&&e.constructor.prototype.isNode===!0||!1}function W0(e){return e&&e.isIndexNode===!0&&e.constructor.prototype.isNode===!0||!1}function Ki(e){return e&&e.isNode===!0&&e.constructor.prototype.isNode===!0||!1}function j0(e){return e&&e.isObjectNode===!0&&e.constructor.prototype.isNode===!0||!1}function X0(e){return e&&e.isOperatorNode===!0&&e.constructor.prototype.isNode===!0||!1}function Y0(e){return e&&e.isParenthesisNode===!0&&e.constructor.prototype.isNode===!0||!1}function K0(e){return e&&e.isRangeNode===!0&&e.constructor.prototype.isNode===!0||!1}function $0(e){return e&&e.isSymbolNode===!0&&e.constructor.prototype.isNode===!0||!1}function $i(e){return e&&e.constructor.prototype.isChain===!0||!1}function dn(e){var t=typeof e;return t==="object"?e===null?"null":Array.isArray(e)?"Array":e instanceof Date?"Date":e instanceof RegExp?"RegExp":Rt(e)?"BigNumber":mo(e)?"Complex":xo(e)?"Fraction":Ut(e)?"Matrix":Oa(e)?"Unit":Dn(e)?"Index":ji(e)?"Range":Xi(e)?"ResultSet":Ki(e)?e.type:$i(e)?"Chain":Yi(e)?"Help":"Object":t==="function"?"Function":t}function Gt(e){var t=typeof e;if(t==="number"||t==="string"||t==="boolean"||e===null||e===void 0)return e;if(typeof e.clone=="function")return e.clone();if(Array.isArray(e))return e.map(function(r){return Gt(r)});if(e instanceof Date)return new Date(e.valueOf());if(Rt(e))return e;if(e instanceof RegExp)throw new TypeError("Cannot clone "+e);return s1(e,Gt)}function s1(e,t){var r={};for(var n in e)ta(e,n)&&(r[n]=t(e[n]));return r}function Z0(e,t){for(var r in t)ta(t,r)&&(e[r]=t[r]);return e}function ra(e,t){var r,n,a;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(n=0,a=e.length;n<a;n++)if(!ra(e[n],t[n]))return!1;return!0}else{if(typeof e=="function")return e===t;if(e instanceof Object){if(Array.isArray(t)||!(t instanceof Object))return!1;for(r in e)if(!(r in t)||!ra(e[r],t[r]))return!1;for(r in t)if(!(r in e))return!1;return!0}else return e===t}}function ta(e,t){return e&&Object.hasOwnProperty.call(e,t)}function Q0(e,t){for(var r={},n=0;n<t.length;n++){var a=t[n],s=e[a];s!==void 0&&(r[a]=s)}return r}var J0=["Matrix","Array"],ec=["number","BigNumber","Fraction"];var Qr=function(t){if(t)throw new Error(`The global config is readonly. 
Please create a mathjs instance if you want to change the default configuration. 
Example:

  import { create, all } from 'mathjs';
  const mathjs = create(all);
  mathjs.config({ number: 'BigNumber' });
`);return Object.freeze(Wi)};ka(Qr,Wi,{MATRIX_OPTIONS:J0,NUMBER_OPTIONS:ec});var ns=Ir(rc());function et(e){return typeof e=="boolean"?!0:isFinite(e)?e===Math.round(e):!1}var nc=Math.sign||function(e){return e>0?1:e<0?-1:0},ac=Math.log2||function(t){return Math.log(t)/Math.LN2},oc=Math.log10||function(t){return Math.log(t)/Math.LN10},ic=Math.log1p||function(e){return Math.log(e+1)},sc=Math.cbrt||function(t){if(t===0)return t;var r=t<0,n;return r&&(t=-t),isFinite(t)?(n=Math.exp(Math.log(t)/3),n=(t/(n*n)+2*n)/3):n=t,r?-n:n},cc=Math.expm1||function(t){return t>=2e-4||t<=-2e-4?Math.exp(t)-1:t+t*t/2+t*t*t/6};function Qi(e,t,r){var n={2:"0b",8:"0o",16:"0x"},a=n[t],s="";if(r){if(r<1)throw new Error("size must be in greater than 0");if(!et(r))throw new Error("size must be an integer");if(e>2**(r-1)-1||e<-(2**(r-1)))throw new Error("Value must be in range [-2^".concat(r-1,", 2^").concat(r-1,"-1]"));if(!et(e))throw new Error("Value must be an integer");e<0&&(e=e+2**r),s="i".concat(r)}var f="";return e<0&&(e=-e,f="-"),"".concat(f).concat(a).concat(e.toString(t)).concat(s)}function Fa(e,t){if(typeof t=="function")return t(e);if(e===Infinity)return"Infinity";if(e===-Infinity)return"-Infinity";if(isNaN(e))return"NaN";var r="auto",n,a;if(t&&(t.notation&&(r=t.notation),pt(t)?n=t:pt(t.precision)&&(n=t.precision),t.wordSize&&(a=t.wordSize,typeof a!="number")))throw new Error('Option "wordSize" must be a number');switch(r){case"fixed":return Ji(e,n);case"exponential":return uc(e,n);case"engineering":return c1(e,n);case"bin":return Qi(e,2,a);case"oct":return Qi(e,8,a);case"hex":return Qi(e,16,a);case"auto":return u1(e,n,t&&t).replace(/((\.\d*?)(0+))($|e)/,function(){var s=arguments[2],f=arguments[4];return s!=="."?s+f:f});default:throw new Error('Unknown notation "'+r+'". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')}}function _o(e){var t=String(e).toLowerCase().match(/^0*?(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);if(!t)throw new SyntaxError("Invalid number "+e);var r=t[1],n=t[2],a=parseFloat(t[4]||"0"),s=n.indexOf(".");a+=s!==-1?s-1:n.length-1;var f=n.replace(".","").replace(/^0*/,function(h){return a-=h.length,""}).replace(/0*$/,"").split("").map(function(h){return parseInt(h)});return f.length===0&&(f.push(0),a++),{sign:r,coefficients:f,exponent:a}}function c1(e,t){if(isNaN(e)||!isFinite(e))return String(e);var r=_o(e),n=bo(r,t),a=n.exponent,s=n.coefficients,f=a%3==0?a:a<0?a-3-a%3:a-a%3;if(pt(t))for(;t>s.length||a-f+1>s.length;)s.push(0);else for(var h=Math.abs(a-f)-(s.length-1),g=0;g<h;g++)s.push(0);for(var l=Math.abs(a-f),u=1;l>0;)u++,l--;var d=s.slice(u).join(""),C=pt(t)&&d.length||d.match(/[1-9]/)?"."+d:"",M=s.slice(0,u).join("")+C+"e"+(a>=0?"+":"")+f.toString();return n.sign+M}function Ji(e,t){if(isNaN(e)||!isFinite(e))return String(e);var r=_o(e),n=typeof t=="number"?bo(r,r.exponent+1+t):r,a=n.coefficients,s=n.exponent+1,f=s+(t||0);return a.length<f&&(a=a.concat(na(f-a.length))),s<0&&(a=na(-s+1).concat(a),s=1),s<a.length&&a.splice(s,0,s===0?"0.":"."),n.sign+a.join("")}function uc(e,t){if(isNaN(e)||!isFinite(e))return String(e);var r=_o(e),n=t?bo(r,t):r,a=n.coefficients,s=n.exponent;a.length<t&&(a=a.concat(na(t-a.length)));var f=a.shift();return n.sign+f+(a.length>0?"."+a.join(""):"")+"e"+(s>=0?"+":"")+s}function u1(e,t,r){if(isNaN(e)||!isFinite(e))return String(e);var n=r&&r.lowerExp!==void 0?r.lowerExp:-3,a=r&&r.upperExp!==void 0?r.upperExp:5,s=_o(e),f=t?bo(s,t):s;if(f.exponent<n||f.exponent>=a)return uc(e,t);var h=f.coefficients,g=f.exponent;h.length<t&&(h=h.concat(na(t-h.length))),h=h.concat(na(g-h.length+1+(h.length<t?t-h.length:0))),h=na(-g).concat(h);var l=g>0?g:0;return l<h.length-1&&h.splice(l+1,0,"."),f.sign+h.join("")}function bo(e,t){for(var r={sign:e.sign,coefficients:e.coefficients,exponent:e.exponent},n=r.coefficients;t<=0;)n.unshift(0),r.exponent++,t++;if(n.length>t){var a=n.splice(t,n.length-t);if(a[0]>=5){var s=t-1;for(n[s]++;n[s]===10;)n.pop(),s===0&&(n.unshift(0),r.exponent++,s++),s--,n[s]++}}return r}function na(e){for(var t=[],r=0;r<e;r++)t.push(0);return t}function lc(e){return e.toExponential().replace(/e.*$/,"").replace(/^0\.?0*|\./,"").length}var l1=Number.EPSILON||2220446049250313e-31;function aa(e,t,r){if(r==null)return e===t;if(e===t)return!0;if(isNaN(e)||isNaN(t))return!1;if(isFinite(e)&&isFinite(t)){var n=Math.abs(e-t);return n<l1?!0:n<=Math.max(Math.abs(e),Math.abs(t))*r}return!1}function es(e,t,r){var n=e.constructor,a=new n(2),s="";if(r){if(r<1)throw new Error("size must be in greater than 0");if(!et(r))throw new Error("size must be an integer");if(e.greaterThan(a.pow(r-1).sub(1))||e.lessThan(a.pow(r-1).mul(-1)))throw new Error("Value must be in range [-2^".concat(r-1,", 2^").concat(r-1,"-1]"));if(!e.isInteger())throw new Error("Value must be an integer");e.lessThan(0)&&(e=e.add(a.pow(r))),s="i".concat(r)}switch(t){case 2:return"".concat(e.toBinary()).concat(s);case 8:return"".concat(e.toOctal()).concat(s);case 16:return"".concat(e.toHexadecimal()).concat(s);default:throw new Error("Base ".concat(t," not supported "))}}function fc(e,t){if(typeof t=="function")return t(e);if(!e.isFinite())return e.isNaN()?"NaN":e.gt(0)?"Infinity":"-Infinity";var r="auto",n,a;if(t!==void 0&&(t.notation&&(r=t.notation),typeof t=="number"?n=t:t.precision&&(n=t.precision),t.wordSize&&(a=t.wordSize,typeof a!="number")))throw new Error('Option "wordSize" must be a number');switch(r){case"fixed":return f1(e,n);case"exponential":return gc(e,n);case"engineering":return g1(e,n);case"bin":return es(e,2,a);case"oct":return es(e,8,a);case"hex":return es(e,16,a);case"auto":{var s=t&&t.lowerExp!==void 0?t.lowerExp:-3,f=t&&t.upperExp!==void 0?t.upperExp:5;if(e.isZero())return"0";var h,g=e.toSignificantDigits(n),l=g.e;return l>=s&&l<f?h=g.toFixed():h=gc(e,n),h.replace(/((\.\d*?)(0+))($|e)/,function(){var u=arguments[2],d=arguments[4];return u!=="."?u+d:d})}default:throw new Error('Unknown notation "'+r+'". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')}}function g1(e,t){var r=e.e,n=r%3==0?r:r<0?r-3-r%3:r-r%3,a=e.mul(Math.pow(10,-n)),s=a.toPrecision(t);return s.indexOf("e")!==-1&&(s=a.toString()),s+"e"+(r>=0?"+":"")+n.toString()}function gc(e,t){return t!==void 0?e.toExponential(t-1):e.toExponential()}function f1(e,t){return e.toFixed(t)}function Jt(e,t){if(typeof e=="number")return Fa(e,t);if(Rt(e))return fc(e,t);if(d1(e))return!t||t.fraction!=="decimal"?e.s*e.n+"/"+e.d:e.toString();if(Array.isArray(e))return dc(e,t);if(pr(e))return'"'+e+'"';if(typeof e=="function")return e.syntax?String(e.syntax):"function";if(e&&typeof e=="object"){if(typeof e.format=="function")return e.format(t);if(e&&e.toString(t)!=={}.toString())return e.toString(t);var r=Object.keys(e).map(n=>'"'+n+'": '+Jt(e[n],t));return"{"+r.join(", ")+"}"}return String(e)}function dc(e,t){if(Array.isArray(e)){for(var r="[",n=e.length,a=0;a<n;a++)a!==0&&(r+=", "),r+=dc(e[a],t);return r+="]",r}else return Jt(e,t)}function d1(e){return e&&typeof e=="object"&&typeof e.s=="number"&&typeof e.n=="number"&&typeof e.d=="number"||!1}function wt(e,t,r){if(!(this instanceof wt))throw new SyntaxError("Constructor must be called with the new operator");this.actual=e,this.expected=t,this.relation=r,this.message="Dimension mismatch ("+(Array.isArray(e)?"["+e.join(", ")+"]":e)+" "+(this.relation||"!=")+" "+(Array.isArray(t)?"["+t.join(", ")+"]":t)+")",this.stack=new Error().stack}wt.prototype=new RangeError;wt.prototype.constructor=RangeError;wt.prototype.name="DimensionError";wt.prototype.isDimensionError=!0;function kn(e,t,r){if(!(this instanceof kn))throw new SyntaxError("Constructor must be called with the new operator");this.index=e,arguments.length<3?(this.min=0,this.max=t):(this.min=t,this.max=r),this.min!==void 0&&this.index<this.min?this.message="Index out of range ("+this.index+" < "+this.min+")":this.max!==void 0&&this.index>=this.max?this.message="Index out of range ("+this.index+" > "+(this.max-1)+")":this.message="Index out of range ("+this.index+")",this.stack=new Error().stack}kn.prototype=new RangeError;kn.prototype.constructor=RangeError;kn.prototype.name="IndexError";kn.prototype.isIndexError=!0;function vr(e){for(var t=[];Array.isArray(e);)t.push(e.length),e=e[0];return t}function hc(e,t,r){var n,a=e.length;if(a!==t[r])throw new wt(a,t[r]);if(r<t.length-1){var s=r+1;for(n=0;n<a;n++){var f=e[n];if(!Array.isArray(f))throw new wt(t.length-1,t.length,"<");hc(e[n],t,s)}}else for(n=0;n<a;n++)if(Array.isArray(e[n]))throw new wt(t.length+1,t.length,">")}function ts(e,t){var r=t.length===0;if(r){if(Array.isArray(e))throw new wt(e.length,0)}else hc(e,t,0)}function Lt(e,t){if(!pt(e)||!et(e))throw new TypeError("Index must be an integer (value: "+e+")");if(e<0||typeof t=="number"&&e>=t)throw new kn(e,t)}function On(e,t,r){if(!Array.isArray(e)||!Array.isArray(t))throw new TypeError("Array expected");if(t.length===0)throw new Error("Resizing to scalar is not supported");t.forEach(function(a){if(!pt(a)||!et(a)||a<0)throw new TypeError("Invalid size, must contain positive integers (size: "+Jt(t)+")")});var n=r!==void 0?r:0;return rs(e,t,0,n),e}function rs(e,t,r,n){var a,s,f=e.length,h=t[r],g=Math.min(f,h);if(e.length=h,r<t.length-1){var l=r+1;for(a=0;a<g;a++)s=e[a],Array.isArray(s)||(s=[s],e[a]=s),rs(s,t,l,n);for(a=g;a<h;a++)s=[],e[a]=s,rs(s,t,l,n)}else{for(a=0;a<g;a++)for(;Array.isArray(e[a]);)e[a]=e[a][0];for(a=g;a<h;a++)e[a]=n}}function vc(e,t){var r=p1(e),n=r.length;if(!Array.isArray(e)||!Array.isArray(t))throw new TypeError("Array expected");if(t.length===0)throw new wt(0,n,"!=");t=Ba(t,n);var a=pc(t);if(n!==a)throw new wt(a,n,"!=");try{return h1(r,t)}catch(s){throw s instanceof wt?new wt(a,n,"!="):s}}function Ba(e,t){var r=pc(e),n=e.slice(),a=-1,s=e.indexOf(a),f=e.indexOf(a,s+1)>=0;if(f)throw new Error("More than one wildcard in sizes");var h=s>=0,g=t%r==0;if(h)if(g)n[s]=-t/r;else throw new Error("Could not replace wildcard, since "+t+" is no multiple of "+-r);return n}function pc(e){return e.reduce((t,r)=>t*r,1)}function h1(e,t){for(var r=e,n,a=t.length-1;a>0;a--){var s=t[a];n=[];for(var f=r.length/s,h=0;h<f;h++)n.push(r.slice(h*s,(h+1)*s));r=n}return r}function Eo(e,t,r,n){var a=n||vr(e);if(r)for(var s=0;s<r;s++)e=[e],a.unshift(1);for(e=mc(e,t,0);a.length<t;)a.push(1);return e}function mc(e,t,r){var n,a;if(Array.isArray(e)){var s=r+1;for(n=0,a=e.length;n<a;n++)e[n]=mc(e[n],t,s)}else for(var f=r;f<t;f++)e=[e];return e}function p1(e){if(!Array.isArray(e))return e;var t=[];return e.forEach(function r(n){Array.isArray(n)?n.forEach(r):t.push(n)}),t}function oa(e,t){for(var r,n=0,a=0;a<e.length;a++){var s=e[a],f=Array.isArray(s);if(a===0&&f&&(n=s.length),f&&s.length!==n)return;var h=f?oa(s,t):t(s);if(r===void 0)r=h;else if(r!==h)return"mixed"}return r}function Ge(e,t,r,n){function a(s){var f=Q0(s,t.map(m1));return v1(e,t,s),r(f)}return a.isFactory=!0,a.fn=e,a.dependencies=t.slice().sort(),n&&(a.meta=n),a}function v1(e,t,r){var n=t.filter(s=>!x1(s)).every(s=>r[s]!==void 0);if(!n){var a=t.filter(s=>r[s]===void 0);throw new Error('Cannot create function "'.concat(e,'", ')+"some dependencies are missing: ".concat(a.map(s=>'"'.concat(s,'"')).join(", "),"."))}}function x1(e){return e&&e[0]==="?"}function m1(e){return e&&e[0]==="?"?e.slice(1):e}function _c(e,t){if(yc(e)&&xc(e,t))return e[t];throw typeof e[t]=="function"&&y1(e,t)?new Error('Cannot access method "'+t+'" as a property'):new Error('No access to property "'+t+'"')}function bc(e,t,r){if(yc(e)&&xc(e,t))return e[t]=r,r;throw new Error('No access to property "'+t+'"')}function Ec(e,t){return t in e}function xc(e,t){return!e||typeof e!="object"?!1:ta(_1,t)?!0:!(t in Object.prototype||t in Function.prototype)}function y1(e,t){return e==null||typeof e[t]!="function"||ta(e,t)&&Object.getPrototypeOf&&t in Object.getPrototypeOf(e)?!1:ta(b1,t)?!0:!(t in Object.prototype||t in Function.prototype)}function yc(e){return typeof e=="object"&&e&&e.constructor===Object}var _1={length:!0,name:!0},b1={toString:!0,valueOf:!0,toLocaleString:!0};var wc=class{constructor(t){this.wrappedObject=t}keys(){return Object.keys(this.wrappedObject)}get(t){return _c(this.wrappedObject,t)}set(t,r){return bc(this.wrappedObject,t,r),this}has(t){return Ec(this.wrappedObject,t)}};function Cc(e){return e?e instanceof Map||e instanceof wc||typeof e.set=="function"&&typeof e.get=="function"&&typeof e.keys=="function"&&typeof e.has=="function":!1}var Ac=function(){return Ac=ns.default.create,ns.default},E1=["?BigNumber","?Complex","?DenseMatrix","?Fraction"],Mc=Ge("typed",E1,function(t){var{BigNumber:r,Complex:n,DenseMatrix:a,Fraction:s}=t,f=Ac();return f.types=[{name:"number",test:pt},{name:"Complex",test:mo},{name:"BigNumber",test:Rt},{name:"Fraction",test:xo},{name:"Unit",test:Oa},{name:"string",test:pr},{name:"Chain",test:$i},{name:"Array",test:Et},{name:"Matrix",test:Ut},{name:"DenseMatrix",test:T0},{name:"SparseMatrix",test:R0},{name:"Range",test:ji},{name:"Index",test:Dn},{name:"boolean",test:N0},{name:"ResultSet",test:Xi},{name:"Help",test:Yi},{name:"function",test:I0},{name:"Date",test:L0},{name:"RegExp",test:P0},{name:"null",test:k0},{name:"undefined",test:O0},{name:"AccessorNode",test:F0},{name:"ArrayNode",test:B0},{name:"AssignmentNode",test:U0},{name:"BlockNode",test:G0},{name:"ConditionalNode",test:V0},{name:"ConstantNode",test:z0},{name:"FunctionNode",test:q0},{name:"FunctionAssignmentNode",test:H0},{name:"IndexNode",test:W0},{name:"Node",test:Ki},{name:"ObjectNode",test:j0},{name:"OperatorNode",test:X0},{name:"ParenthesisNode",test:Y0},{name:"RangeNode",test:K0},{name:"SymbolNode",test:$0},{name:"Map",test:Cc},{name:"Object",test:D0}],f.conversions=[{from:"number",to:"BigNumber",convert:function(g){if(r||as(g),lc(g)>15)throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: "+g+"). Use function bignumber(x) to convert to BigNumber.");return new r(g)}},{from:"number",to:"Complex",convert:function(g){return n||wo(g),new n(g,0)}},{from:"number",to:"string",convert:function(g){return g+""}},{from:"BigNumber",to:"Complex",convert:function(g){return n||wo(g),new n(g.toNumber(),0)}},{from:"Fraction",to:"BigNumber",convert:function(g){throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.")}},{from:"Fraction",to:"Complex",convert:function(g){return n||wo(g),new n(g.valueOf(),0)}},{from:"number",to:"Fraction",convert:function(g){s||os(g);var l=new s(g);if(l.valueOf()!==g)throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: "+g+"). Use function fraction(x) to convert to Fraction.");return l}},{from:"string",to:"number",convert:function(g){var l=Number(g);if(isNaN(l))throw new Error('Cannot convert "'+g+'" to a number');return l}},{from:"string",to:"BigNumber",convert:function(g){r||as(g);try{return new r(g)}catch(l){throw new Error('Cannot convert "'+g+'" to BigNumber')}}},{from:"string",to:"Fraction",convert:function(g){s||os(g);try{return new s(g)}catch(l){throw new Error('Cannot convert "'+g+'" to Fraction')}}},{from:"string",to:"Complex",convert:function(g){n||wo(g);try{return new n(g)}catch(l){throw new Error('Cannot convert "'+g+'" to Complex')}}},{from:"boolean",to:"number",convert:function(g){return+g}},{from:"boolean",to:"BigNumber",convert:function(g){return r||as(g),new r(+g)}},{from:"boolean",to:"Fraction",convert:function(g){return s||os(g),new s(+g)}},{from:"boolean",to:"string",convert:function(g){return String(g)}},{from:"Array",to:"Matrix",convert:function(g){return a||w1(),new a(g)}},{from:"Matrix",to:"Array",convert:function(g){return g.valueOf()}}],f});function as(e){throw new Error("Cannot convert value ".concat(e," into a BigNumber: no class 'BigNumber' provided"))}function wo(e){throw new Error("Cannot convert value ".concat(e," into a Complex number: no class 'Complex' provided"))}function w1(){throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided")}function os(e){throw new Error("Cannot convert value ".concat(e," into a Fraction, no class 'Fraction' provided."))}var is=Ir(Tc());var C1="BigNumber",A1=["?on","config"],Rc=Ge(C1,A1,e=>{var{on:t,config:r}=e,n=is.default.clone({precision:r.precision,modulo:is.default.EUCLID});return n.prototype=Object.create(n.prototype),n.prototype.type="BigNumber",n.prototype.isBigNumber=!0,n.prototype.toJSON=function(){return{mathjs:"BigNumber",value:this.toString()}},n.fromJSON=function(a){return new n(a.value)},t&&t("config",function(a,s){a.precision!==s.precision&&n.config({precision:a.precision})}),n},{isClass:!0});var ir=Ir(Ic());var M1="Complex",S1=[],Lc=Ge(M1,S1,()=>(ir.default.prototype.type="Complex",ir.default.prototype.isComplex=!0,ir.default.prototype.toJSON=function(){return{mathjs:"Complex",re:this.re,im:this.im}},ir.default.prototype.toPolar=function(){return{r:this.abs(),phi:this.arg()}},ir.default.prototype.format=function(e){var t="",r=this.im,n=this.re,a=Fa(this.re,e),s=Fa(this.im,e),f=pt(e)?e:e?e.precision:null;if(f!==null){var h=Math.pow(10,-f);Math.abs(n/r)<h&&(n=0),Math.abs(r/n)<h&&(r=0)}return r===0?t=a:n===0?r===1?t="i":r===-1?t="-i":t=s+"i":r<0?r===-1?t=a+" - i":t=a+" - "+s.substring(1)+"i":r===1?t=a+" + i":t=a+" + "+s+"i",t},ir.default.fromPolar=function(e){switch(arguments.length){case 1:{var t=arguments[0];if(typeof t=="object")return(0,ir.default)(t);throw new TypeError("Input has to be an object with r and phi keys.")}case 2:{var r=arguments[0],n=arguments[1];if(pt(r)){if(Oa(n)&&n.hasBase("ANGLE")&&(n=n.toNumber("rad")),pt(n))return new ir.default({r,phi:n});throw new TypeError("Phi is not a number nor an angle unit.")}else throw new TypeError("Radius r is not a number.")}default:throw new SyntaxError("Wrong number of arguments in function fromPolar")}},ir.default.prototype.valueOf=ir.default.prototype.toString,ir.default.fromJSON=function(e){return new ir.default(e)},ir.default.compare=function(e,t){return e.re>t.re?1:e.re<t.re?-1:e.im>t.im?1:e.im<t.im?-1:0},ir.default),{isClass:!0});var Fn=Ir(Dc());var T1="Fraction",R1=[],kc=Ge(T1,R1,()=>(Fn.default.prototype.type="Fraction",Fn.default.prototype.isFraction=!0,Fn.default.prototype.toJSON=function(){return{mathjs:"Fraction",n:this.s*this.n,d:this.d}},Fn.default.fromJSON=function(e){return new Fn.default(e)},Fn.default),{isClass:!0});var N1="Matrix",I1=[],Oc=Ge(N1,I1,()=>{function e(){if(!(this instanceof e))throw new SyntaxError("Constructor must be called with the new operator")}return e.prototype.type="Matrix",e.prototype.isMatrix=!0,e.prototype.storage=function(){throw new Error("Cannot invoke storage on a Matrix interface")},e.prototype.datatype=function(){throw new Error("Cannot invoke datatype on a Matrix interface")},e.prototype.create=function(t,r){throw new Error("Cannot invoke create on a Matrix interface")},e.prototype.subset=function(t,r,n){throw new Error("Cannot invoke subset on a Matrix interface")},e.prototype.get=function(t){throw new Error("Cannot invoke get on a Matrix interface")},e.prototype.set=function(t,r,n){throw new Error("Cannot invoke set on a Matrix interface")},e.prototype.resize=function(t,r){throw new Error("Cannot invoke resize on a Matrix interface")},e.prototype.reshape=function(t,r){throw new Error("Cannot invoke reshape on a Matrix interface")},e.prototype.clone=function(){throw new Error("Cannot invoke clone on a Matrix interface")},e.prototype.size=function(){throw new Error("Cannot invoke size on a Matrix interface")},e.prototype.map=function(t,r){throw new Error("Cannot invoke map on a Matrix interface")},e.prototype.forEach=function(t){throw new Error("Cannot invoke forEach on a Matrix interface")},e.prototype[Symbol.iterator]=function(){throw new Error("Cannot iterate a Matrix interface")},e.prototype.toArray=function(){throw new Error("Cannot invoke toArray on a Matrix interface")},e.prototype.valueOf=function(){throw new Error("Cannot invoke valueOf on a Matrix interface")},e.prototype.format=function(t){throw new Error("Cannot invoke format on a Matrix interface")},e.prototype.toString=function(){throw new Error("Cannot invoke toString on a Matrix interface")},e},{isClass:!0});var L1="DenseMatrix",P1=["Matrix"],Fc=Ge(L1,P1,e=>{var{Matrix:t}=e;function r(u,d){if(!(this instanceof r))throw new SyntaxError("Constructor must be called with the new operator");if(d&&!pr(d))throw new Error("Invalid datatype: "+d);if(Ut(u))u.type==="DenseMatrix"?(this._data=Gt(u._data),this._size=Gt(u._size),this._datatype=d||u._datatype):(this._data=u.toArray(),this._size=u.size(),this._datatype=d||u._datatype);else if(u&&Et(u.data)&&Et(u.size))this._data=u.data,this._size=u.size,ts(this._data,this._size),this._datatype=d||u.datatype;else if(Et(u))this._data=l(u),this._size=vr(this._data),ts(this._data,this._size),this._datatype=d;else{if(u)throw new TypeError("Unsupported type of data ("+dn(u)+")");this._data=[],this._size=[0],this._datatype=d}}r.prototype=new t,r.prototype.createDenseMatrix=function(u,d){return new r(u,d)},r.prototype.type="DenseMatrix",r.prototype.isDenseMatrix=!0,r.prototype.getDataType=function(){return oa(this._data,dn)},r.prototype.storage=function(){return"dense"},r.prototype.datatype=function(){return this._datatype},r.prototype.create=function(u,d){return new r(u,d)},r.prototype.subset=function(u,d,C){switch(arguments.length){case 1:return n(this,u);case 2:case 3:return s(this,u,d,C);default:throw new SyntaxError("Wrong number of arguments")}},r.prototype.get=function(u){if(!Et(u))throw new TypeError("Array expected");if(u.length!==this._size.length)throw new wt(u.length,this._size.length);for(var d=0;d<u.length;d++)Lt(u[d],this._size[d]);for(var C=this._data,M=0,L=u.length;M<L;M++){var v=u[M];Lt(v,C.length),C=C[v]}return C},r.prototype.set=function(u,d,C){if(!Et(u))throw new TypeError("Array expected");if(u.length<this._size.length)throw new wt(u.length,this._size.length,"<");var M,L,v,y=u.map(function(P){return P+1});g(this,y,C);var I=this._data;for(M=0,L=u.length-1;M<L;M++)v=u[M],Lt(v,I.length),I=I[v];return v=u[u.length-1],Lt(v,I.length),I[v]=d,this};function n(u,d){if(!Dn(d))throw new TypeError("Invalid index");var C=d.isScalar();if(C)return u.get(d.min());var M=d.size();if(M.length!==u._size.length)throw new wt(M.length,u._size.length);for(var L=d.min(),v=d.max(),y=0,I=u._size.length;y<I;y++)Lt(L[y],u._size[y]),Lt(v[y],u._size[y]);return new r(a(u._data,d,M.length,0),u._datatype)}function a(u,d,C,M){var L=M===C-1,v=d.dimension(M);return L?v.map(function(y){return Lt(y,u.length),u[y]}).valueOf():v.map(function(y){Lt(y,u.length);var I=u[y];return a(I,d,C,M+1)}).valueOf()}function s(u,d,C,M){if(!d||d.isIndex!==!0)throw new TypeError("Invalid index");var L=d.size(),v=d.isScalar(),y;if(Ut(C)?(y=C.size(),C=C.valueOf()):y=vr(C),v){if(y.length!==0)throw new TypeError("Scalar expected");u.set(d.min(),C,M)}else{if(L.length<u._size.length)throw new wt(L.length,u._size.length,"<");if(y.length<L.length){for(var I=0,P=0;L[I]===1&&y[I]===1;)I++;for(;L[I]===1;)P++,I++;C=Eo(C,L.length,P,y)}if(!ra(L,y))throw new wt(L,y,">");var D=d.max().map(function(B){return B+1});g(u,D,M);var Z=L.length,O=0;f(u._data,d,C,Z,O)}return u}function f(u,d,C,M,L){var v=L===M-1,y=d.dimension(L);v?y.forEach(function(I,P){Lt(I),u[I]=C[P[0]]}):y.forEach(function(I,P){Lt(I),f(u[I],d,C[P[0]],M,L+1)})}r.prototype.resize=function(u,d,C){if(!yo(u))throw new TypeError("Array or Matrix expected");var M=u.valueOf().map(v=>Array.isArray(v)&&v.length===1?v[0]:v),L=C?this.clone():this;return h(L,M,d)};function h(u,d,C){if(d.length===0){for(var M=u._data;Et(M);)M=M[0];return M}return u._size=d.slice(0),u._data=On(u._data,u._size,C),u}r.prototype.reshape=function(u,d){var C=d?this.clone():this;C._data=vc(C._data,u);var M=C._size.reduce((L,v)=>L*v);return C._size=Ba(u,M),C};function g(u,d,C){for(var M=u._size.slice(0),L=!1;M.length<d.length;)M.push(0),L=!0;for(var v=0,y=d.length;v<y;v++)d[v]>M[v]&&(M[v]=d[v],L=!0);L&&h(u,M,C)}r.prototype.clone=function(){var u=new r({data:Gt(this._data),size:Gt(this._size),datatype:this._datatype});return u},r.prototype.size=function(){return this._size.slice(0)},r.prototype.map=function(u){var d=this,C=function v(y,I){return Et(y)?y.map(function(P,D){return v(P,I.concat(D))}):u(y,I,d)},M=C(this._data,[]),L=this._datatype!==void 0?oa(M,dn):void 0;return new r(M,L)},r.prototype.forEach=function(u){var d=this,C=function M(L,v){Et(L)?L.forEach(function(y,I){M(y,v.concat(I))}):u(L,v,d)};C(this._data,[])},r.prototype[Symbol.iterator]=function*(){var u=function*d(C,M){if(Et(C))for(var L=0;L<C.length;L++)yield*d(C[L],M.concat(L));else yield{value:C,index:M}};yield*u(this._data,[])},r.prototype.rows=function(){var u=[],d=this.size();if(d.length!==2)throw new TypeError("Rows can only be returned for a 2D matrix.");var C=this._data;for(var M of C)u.push(new r([M],this._datatype));return u},r.prototype.columns=function(){var u=this,d=[],C=this.size();if(C.length!==2)throw new TypeError("Rows can only be returned for a 2D matrix.");for(var M=this._data,L=function(I){var P=M.map(D=>[D[I]]);d.push(new r(P,u._datatype))},v=0;v<C[1];v++)L(v);return d},r.prototype.toArray=function(){return Gt(this._data)},r.prototype.valueOf=function(){return this._data},r.prototype.format=function(u){return Jt(this._data,u)},r.prototype.toString=function(){return Jt(this._data)},r.prototype.toJSON=function(){return{mathjs:"DenseMatrix",data:this._data,size:this._size,datatype:this._datatype}},r.prototype.diagonal=function(u){if(u){if(Rt(u)&&(u=u.toNumber()),!pt(u)||!et(u))throw new TypeError("The parameter k must be an integer number")}else u=0;for(var d=u>0?u:0,C=u<0?-u:0,M=this._size[0],L=this._size[1],v=Math.min(M-C,L-d),y=[],I=0;I<v;I++)y[I]=this._data[I+C][I+d];return new r({data:y,size:[v],datatype:this._datatype})},r.diagonal=function(u,d,C,M){if(!Et(u))throw new TypeError("Array expected, size parameter");if(u.length!==2)throw new Error("Only two dimensions matrix are supported");if(u=u.map(function(K){if(Rt(K)&&(K=K.toNumber()),!pt(K)||!et(K)||K<1)throw new Error("Size values must be positive integers");return K}),C){if(Rt(C)&&(C=C.toNumber()),!pt(C)||!et(C))throw new TypeError("The parameter k must be an integer number")}else C=0;var L=C>0?C:0,v=C<0?-C:0,y=u[0],I=u[1],P=Math.min(y-v,I-L),D;if(Et(d)){if(d.length!==P)throw new Error("Invalid value array length");D=function(V){return d[V]}}else if(Ut(d)){var Z=d.size();if(Z.length!==1||Z[0]!==P)throw new Error("Invalid matrix length");D=function(V){return d.get([V])}}else D=function(){return d};M||(M=Rt(D(0))?D(0).mul(0):0);var O=[];if(u.length>0){O=On(O,u,M);for(var B=0;B<P;B++)O[B+v][B+L]=D(B)}return new r({data:O,size:[y,I]})},r.fromJSON=function(u){return new r(u)},r.prototype.swapRows=function(u,d){if(!pt(u)||!et(u)||!pt(d)||!et(d))throw new Error("Row index must be positive integers");if(this._size.length!==2)throw new Error("Only two dimensional matrix is supported");return Lt(u,this._size[0]),Lt(d,this._size[0]),r._swapRows(u,d,this._data),this},r._swapRows=function(u,d,C){var M=C[u];C[u]=C[d],C[d]=M};function l(u){for(var d=0,C=u.length;d<C;d++){var M=u[d];Et(M)?u[d]=l(M):M&&M.isMatrix===!0&&(u[d]=l(M.valueOf()))}return u}return r},{isClass:!0});function Jr(e,t,r){return e&&typeof e.map=="function"?e.map(function(n){return Jr(n,t,r)}):t(e)}var Yt="number",Lr="number, number";function D1(e){return Math.abs(e)}D1.signature=Yt;function us(e,t){return e+t}us.signature=Lr;function k1(e,t){return e-t}k1.signature=Lr;function ls(e,t){return e*t}ls.signature=Lr;function O1(e,t){return e/t}O1.signature=Lr;function F1(e){return-e}F1.signature=Yt;function B1(e){return e}B1.signature=Yt;function U1(e){return sc(e)}U1.signature=Yt;function G1(e){return Math.ceil(e)}G1.signature=Yt;function V1(e){return e*e*e}V1.signature=Yt;function z1(e){return Math.exp(e)}z1.signature=Yt;function H1(e){return cc(e)}H1.signature=Yt;function q1(e){return e>0?Math.floor(e):Math.ceil(e)}q1.signature=Yt;function W1(e){return Math.floor(e)}W1.signature=Yt;function j1(e,t){if(!et(e)||!et(t))throw new Error("Parameters in function gcd must be integer numbers");for(var r;t!==0;)r=e%t,e=t,t=r;return e<0?-e:e}j1.signature=Lr;function X1(e,t){if(!et(e)||!et(t))throw new Error("Parameters in function lcm must be integer numbers");if(e===0||t===0)return 0;for(var r,n=e*t;t!==0;)r=t,t=e%r,e=r;return Math.abs(n/e)}X1.signature=Lr;function Y1(e){return Math.log(e)}Y1.signature=Yt;function K1(e){return oc(e)}K1.signature=Yt;function $1(e){return ac(e)}$1.signature=Yt;function Z1(e){return ic(e)}Z1.signature=Yt;function Q1(e,t){if(t>0)return e-t*Math.floor(e/t);if(t===0)return e;throw new Error("Cannot calculate mod for a negative divisor")}Q1.signature=Lr;function J1(e,t){var r=t<0;if(r&&(t=-t),t===0)throw new Error("Root must be non-zero");if(e<0&&Math.abs(t)%2!=1)throw new Error("Root must be odd when a is negative.");if(e===0)return r?Infinity:0;if(!isFinite(e))return r?0:e;var n=Math.pow(Math.abs(e),1/t);return n=e<0?-n:n,r?1/n:n}J1.signature=Lr;function eg(e){return nc(e)}eg.signature=Yt;function tg(e){return Math.sqrt(e)}tg.signature=Yt;function rg(e){return e*e}rg.signature=Yt;function ng(e,t){var r,n,a,s=0,f=1,h=1,g=0;if(!et(e)||!et(t))throw new Error("Parameters in function xgcd must be integer numbers");for(;t;)n=Math.floor(e/t),a=e-n*t,r=s,s=f-n*s,f=r,r=h,h=g-n*h,g=r,e=t,t=a;var l;return e<0?l=[-e,-f,-g]:l=[e,e?f:0,g],l}ng.signature=Lr;function gs(e,t){return e*e<1&&t===Infinity||e*e>1&&t===-Infinity?0:Math.pow(e,t)}gs.signature=Lr;function ag(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return parseFloat(Ji(e,t))}ag.signature=Lr;function og(e){return Math.abs(e)}og.signature=Yt;function Bc(e,t,r){if(r==null)return e.eq(t);if(e.eq(t))return!0;if(e.isNaN()||t.isNaN())return!1;if(e.isFinite()&&t.isFinite()){var n=e.minus(t).abs();if(n.isZero())return!0;var a=e.constructor.max(e.abs(),t.abs());return n.lte(a.times(r))}return!1}function Uc(e,t,r){return aa(e.re,t.re,r)&&aa(e.im,t.im,r)}var Ao="equalScalar",ig=["typed","config"],Gc=Ge(Ao,ig,e=>{var{typed:t,config:r}=e;return t(Ao,{"boolean, boolean":function(a,s){return a===s},"number, number":function(a,s){return aa(a,s,r.epsilon)},"BigNumber, BigNumber":function(a,s){return a.eq(s)||Bc(a,s,r.epsilon)},"Fraction, Fraction":function(a,s){return a.equals(s)},"Complex, Complex":function(a,s){return Uc(a,s,r.epsilon)},"Unit, Unit":function(a,s){if(!a.equalBase(s))throw new Error("Cannot compare units with different base");return this(a.value,s.value)}})}),M9=Ge(Ao,["typed","config"],e=>{var{typed:t,config:r}=e;return t(Ao,{"number, number":function(a,s){return aa(a,s,r.epsilon)}})});var sg="SparseMatrix",cg=["typed","equalScalar","Matrix"],Vc=Ge(sg,cg,e=>{var{typed:t,equalScalar:r,Matrix:n}=e;function a(v,y){if(!(this instanceof a))throw new SyntaxError("Constructor must be called with the new operator");if(y&&!pr(y))throw new Error("Invalid datatype: "+y);if(Ut(v))s(this,v,y);else if(v&&Et(v.index)&&Et(v.ptr)&&Et(v.size))this._values=v.values,this._index=v.index,this._ptr=v.ptr,this._size=v.size,this._datatype=y||v.datatype;else if(Et(v))f(this,v,y);else{if(v)throw new TypeError("Unsupported type of data ("+dn(v)+")");this._values=[],this._index=[],this._ptr=[0],this._size=[0,0],this._datatype=y}}function s(v,y,I){y.type==="SparseMatrix"?(v._values=y._values?Gt(y._values):void 0,v._index=Gt(y._index),v._ptr=Gt(y._ptr),v._size=Gt(y._size),v._datatype=I||y._datatype):f(v,y.valueOf(),I||y._datatype)}function f(v,y,I){v._values=[],v._index=[],v._ptr=[],v._datatype=I;var P=y.length,D=0,Z=r,O=0;if(pr(I)&&(Z=t.find(r,[I,I])||r,O=t.convert(0,I)),P>0){var B=0;do{v._ptr.push(v._index.length);for(var K=0;K<P;K++){var V=y[K];if(Et(V)){if(B===0&&D<V.length&&(D=V.length),B<V.length){var X=V[B];Z(X,O)||(v._values.push(X),v._index.push(K))}}else B===0&&D<1&&(D=1),Z(V,O)||(v._values.push(V),v._index.push(K))}B++}while(B<D)}v._ptr.push(v._index.length),v._size=[P,D]}a.prototype=new n,a.prototype.createSparseMatrix=function(v,y){return new a(v,y)},a.prototype.type="SparseMatrix",a.prototype.isSparseMatrix=!0,a.prototype.getDataType=function(){return oa(this._values,dn)},a.prototype.storage=function(){return"sparse"},a.prototype.datatype=function(){return this._datatype},a.prototype.create=function(v,y){return new a(v,y)},a.prototype.density=function(){var v=this._size[0],y=this._size[1];return v!==0&&y!==0?this._index.length/(v*y):0},a.prototype.subset=function(v,y,I){if(!this._values)throw new Error("Cannot invoke subset on a Pattern only matrix");switch(arguments.length){case 1:return h(this,v);case 2:case 3:return g(this,v,y,I);default:throw new SyntaxError("Wrong number of arguments")}};function h(v,y){if(!Dn(y))throw new TypeError("Invalid index");var I=y.isScalar();if(I)return v.get(y.min());var P=y.size();if(P.length!==v._size.length)throw new wt(P.length,v._size.length);var D,Z,O,B,K=y.min(),V=y.max();for(D=0,Z=v._size.length;D<Z;D++)Lt(K[D],v._size[D]),Lt(V[D],v._size[D]);var X=v._values,Q=v._index,ge=v._ptr,q=y.dimension(0),ve=y.dimension(1),de=[],Me=[];q.forEach(function(ce,Ie){Me[ce]=Ie[0],de[ce]=!0});var _e=X?[]:void 0,Te=[],me=[];return ve.forEach(function(ce){for(me.push(Te.length),O=ge[ce],B=ge[ce+1];O<B;O++)D=Q[O],de[D]===!0&&(Te.push(Me[D]),_e&&_e.push(X[O]))}),me.push(Te.length),new a({values:_e,index:Te,ptr:me,size:P,datatype:v._datatype})}function g(v,y,I,P){if(!y||y.isIndex!==!0)throw new TypeError("Invalid index");var D=y.size(),Z=y.isScalar(),O;if(Ut(I)?(O=I.size(),I=I.toArray()):O=vr(I),Z){if(O.length!==0)throw new TypeError("Scalar expected");v.set(y.min(),I,P)}else{if(D.length!==1&&D.length!==2)throw new wt(D.length,v._size.length,"<");if(O.length<D.length){for(var B=0,K=0;D[B]===1&&O[B]===1;)B++;for(;D[B]===1;)K++,B++;I=Eo(I,D.length,K,O)}if(!ra(D,O))throw new wt(D,O,">");for(var V=y.min()[0],X=y.min()[1],Q=O[0],ge=O[1],q=0;q<Q;q++)for(var ve=0;ve<ge;ve++){var de=I[q][ve];v.set([q+V,ve+X],de,P)}}return v}a.prototype.get=function(v){if(!Et(v))throw new TypeError("Array expected");if(v.length!==this._size.length)throw new wt(v.length,this._size.length);if(!this._values)throw new Error("Cannot invoke get on a Pattern only matrix");var y=v[0],I=v[1];Lt(y,this._size[0]),Lt(I,this._size[1]);var P=l(y,this._ptr[I],this._ptr[I+1],this._index);return P<this._ptr[I+1]&&this._index[P]===y?this._values[P]:0},a.prototype.set=function(v,y,I){if(!Et(v))throw new TypeError("Array expected");if(v.length!==this._size.length)throw new wt(v.length,this._size.length);if(!this._values)throw new Error("Cannot invoke set on a Pattern only matrix");var P=v[0],D=v[1],Z=this._size[0],O=this._size[1],B=r,K=0;pr(this._datatype)&&(B=t.find(r,[this._datatype,this._datatype])||r,K=t.convert(0,this._datatype)),(P>Z-1||D>O-1)&&(C(this,Math.max(P+1,Z),Math.max(D+1,O),I),Z=this._size[0],O=this._size[1]),Lt(P,Z),Lt(D,O);var V=l(P,this._ptr[D],this._ptr[D+1],this._index);return V<this._ptr[D+1]&&this._index[V]===P?B(y,K)?u(V,D,this._values,this._index,this._ptr):this._values[V]=y:d(V,P,D,y,this._values,this._index,this._ptr),this};function l(v,y,I,P){if(I-y==0)return I;for(var D=y;D<I;D++)if(P[D]===v)return D;return y}function u(v,y,I,P,D){I.splice(v,1),P.splice(v,1);for(var Z=y+1;Z<D.length;Z++)D[Z]--}function d(v,y,I,P,D,Z,O){D.splice(v,0,P),Z.splice(v,0,y);for(var B=I+1;B<O.length;B++)O[B]++}a.prototype.resize=function(v,y,I){if(!yo(v))throw new TypeError("Array or Matrix expected");var P=v.valueOf().map(Z=>Array.isArray(Z)&&Z.length===1?Z[0]:Z);if(P.length!==2)throw new Error("Only two dimensions matrix are supported");P.forEach(function(Z){if(!pt(Z)||!et(Z)||Z<0)throw new TypeError("Invalid size, must contain positive integers (size: "+Jt(P)+")")});var D=I?this.clone():this;return C(D,P[0],P[1],y)};function C(v,y,I,P){var D=P||0,Z=r,O=0;pr(v._datatype)&&(Z=t.find(r,[v._datatype,v._datatype])||r,O=t.convert(0,v._datatype),D=t.convert(D,v._datatype));var B=!Z(D,O),K=v._size[0],V=v._size[1],X,Q,ge;if(I>V){for(Q=V;Q<I;Q++)if(v._ptr[Q]=v._values.length,B)for(X=0;X<K;X++)v._values.push(D),v._index.push(X);v._ptr[I]=v._values.length}else I<V&&(v._ptr.splice(I+1,V-I),v._values.splice(v._ptr[I],v._values.length),v._index.splice(v._ptr[I],v._index.length));if(V=I,y>K){if(B){var q=0;for(Q=0;Q<V;Q++){v._ptr[Q]=v._ptr[Q]+q,ge=v._ptr[Q+1]+q;var ve=0;for(X=K;X<y;X++,ve++)v._values.splice(ge+ve,0,D),v._index.splice(ge+ve,0,X),q++}v._ptr[V]=v._values.length}}else if(y<K){var de=0;for(Q=0;Q<V;Q++){v._ptr[Q]=v._ptr[Q]-de;var Me=v._ptr[Q],_e=v._ptr[Q+1]-de;for(ge=Me;ge<_e;ge++)X=v._index[ge],X>y-1&&(v._values.splice(ge,1),v._index.splice(ge,1),de++)}v._ptr[Q]=v._values.length}return v._size[0]=y,v._size[1]=I,v}a.prototype.reshape=function(v,y){if(!Et(v))throw new TypeError("Array expected");if(v.length!==2)throw new Error("Sparse matrices can only be reshaped in two dimensions");v.forEach(function(ce){if(!pt(ce)||!et(ce)||ce<=-2||ce===0)throw new TypeError("Invalid size, must contain positive integers or -1 (size: "+Jt(v)+")")});var I=this._size[0]*this._size[1];v=Ba(v,I);var P=v[0]*v[1];if(I!==P)throw new Error("Reshaping sparse matrix will result in the wrong number of elements");var D=y?this.clone():this;if(this._size[0]===v[0]&&this._size[1]===v[1])return D;for(var Z=[],O=0;O<D._ptr.length;O++)for(var B=0;B<D._ptr[O+1]-D._ptr[O];B++)Z.push(O);for(var K=D._values.slice(),V=D._index.slice(),X=0;X<D._index.length;X++){var Q=V[X],ge=Z[X],q=Q*D._size[1]+ge;Z[X]=q%v[1],V[X]=Math.floor(q/v[1])}D._values.length=0,D._index.length=0,D._ptr.length=v[1]+1,D._size=v.slice();for(var ve=0;ve<D._ptr.length;ve++)D._ptr[ve]=0;for(var de=0;de<K.length;de++){var Me=V[de],_e=Z[de],Te=K[de],me=l(Me,D._ptr[_e],D._ptr[_e+1],D._index);d(me,Me,_e,Te,D._values,D._index,D._ptr)}return D},a.prototype.clone=function(){var v=new a({values:this._values?Gt(this._values):void 0,index:Gt(this._index),ptr:Gt(this._ptr),size:Gt(this._size),datatype:this._datatype});return v},a.prototype.size=function(){return this._size.slice(0)},a.prototype.map=function(v,y){if(!this._values)throw new Error("Cannot invoke map on a Pattern only matrix");var I=this,P=this._size[0],D=this._size[1],Z=function(B,K,V){return v(B,[K,V],I)};return M(this,0,P-1,0,D-1,Z,y)};function M(v,y,I,P,D,Z,O){var B=[],K=[],V=[],X=r,Q=0;pr(v._datatype)&&(X=t.find(r,[v._datatype,v._datatype])||r,Q=t.convert(0,v._datatype));for(var ge=function(Ue,ht,tt){Ue=Z(Ue,ht,tt),X(Ue,Q)||(B.push(Ue),K.push(ht))},q=P;q<=D;q++){V.push(B.length);var ve=v._ptr[q],de=v._ptr[q+1];if(O)for(var Me=ve;Me<de;Me++){var _e=v._index[Me];_e>=y&&_e<=I&&ge(v._values[Me],_e-y,q-P)}else{for(var Te={},me=ve;me<de;me++){var ce=v._index[me];Te[ce]=v._values[me]}for(var Ie=y;Ie<=I;Ie++){var je=Ie in Te?Te[Ie]:0;ge(je,Ie-y,q-P)}}}return V.push(B.length),new a({values:B,index:K,ptr:V,size:[I-y+1,D-P+1]})}a.prototype.forEach=function(v,y){if(!this._values)throw new Error("Cannot invoke forEach on a Pattern only matrix");for(var I=this,P=this._size[0],D=this._size[1],Z=0;Z<D;Z++){var O=this._ptr[Z],B=this._ptr[Z+1];if(y)for(var K=O;K<B;K++){var V=this._index[K];v(this._values[K],[V,Z],I)}else{for(var X={},Q=O;Q<B;Q++){var ge=this._index[Q];X[ge]=this._values[Q]}for(var q=0;q<P;q++){var ve=q in X?X[q]:0;v(ve,[q,Z],I)}}}},a.prototype[Symbol.iterator]=function*(){if(!this._values)throw new Error("Cannot iterate a Pattern only matrix");for(var v=this._size[1],y=0;y<v;y++)for(var I=this._ptr[y],P=this._ptr[y+1],D=I;D<P;D++){var Z=this._index[D];yield{value:this._values[D],index:[Z,y]}}},a.prototype.toArray=function(){return L(this._values,this._index,this._ptr,this._size,!0)},a.prototype.valueOf=function(){return L(this._values,this._index,this._ptr,this._size,!1)};function L(v,y,I,P,D){var Z=P[0],O=P[1],B=[],K,V;for(K=0;K<Z;K++)for(B[K]=[],V=0;V<O;V++)B[K][V]=0;for(V=0;V<O;V++)for(var X=I[V],Q=I[V+1],ge=X;ge<Q;ge++)K=y[ge],B[K][V]=v?D?Gt(v[ge]):v[ge]:1;return B}return a.prototype.format=function(v){for(var y=this._size[0],I=this._size[1],P=this.density(),D="Sparse Matrix ["+Jt(y,v)+" x "+Jt(I,v)+"] density: "+Jt(P,v)+`
`,Z=0;Z<I;Z++)for(var O=this._ptr[Z],B=this._ptr[Z+1],K=O;K<B;K++){var V=this._index[K];D+=`
    (`+Jt(V,v)+", "+Jt(Z,v)+") ==> "+(this._values?Jt(this._values[K],v):"X")}return D},a.prototype.toString=function(){return Jt(this.toArray())},a.prototype.toJSON=function(){return{mathjs:"SparseMatrix",values:this._values,index:this._index,ptr:this._ptr,size:this._size,datatype:this._datatype}},a.prototype.diagonal=function(v){if(v){if(Rt(v)&&(v=v.toNumber()),!pt(v)||!et(v))throw new TypeError("The parameter k must be an integer number")}else v=0;var y=v>0?v:0,I=v<0?-v:0,P=this._size[0],D=this._size[1],Z=Math.min(P-I,D-y),O=[],B=[],K=[];K[0]=0;for(var V=y;V<D&&O.length<Z;V++)for(var X=this._ptr[V],Q=this._ptr[V+1],ge=X;ge<Q;ge++){var q=this._index[ge];if(q===V-y+I){O.push(this._values[ge]),B[O.length-1]=q-I;break}}return K.push(O.length),new a({values:O,index:B,ptr:K,size:[Z,1]})},a.fromJSON=function(v){return new a(v)},a.diagonal=function(v,y,I,P,D){if(!Et(v))throw new TypeError("Array expected, size parameter");if(v.length!==2)throw new Error("Only two dimensions matrix are supported");if(v=v.map(function(ce){if(Rt(ce)&&(ce=ce.toNumber()),!pt(ce)||!et(ce)||ce<1)throw new Error("Size values must be positive integers");return ce}),I){if(Rt(I)&&(I=I.toNumber()),!pt(I)||!et(I))throw new TypeError("The parameter k must be an integer number")}else I=0;var Z=r,O=0;pr(D)&&(Z=t.find(r,[D,D])||r,O=t.convert(0,D));var B=I>0?I:0,K=I<0?-I:0,V=v[0],X=v[1],Q=Math.min(V-K,X-B),ge;if(Et(y)){if(y.length!==Q)throw new Error("Invalid value array length");ge=function(Ie){return y[Ie]}}else if(Ut(y)){var q=y.size();if(q.length!==1||q[0]!==Q)throw new Error("Invalid matrix length");ge=function(Ie){return y.get([Ie])}}else ge=function(){return y};for(var ve=[],de=[],Me=[],_e=0;_e<X;_e++){Me.push(ve.length);var Te=_e-B;if(Te>=0&&Te<Q){var me=ge(Te);Z(me,O)||(de.push(Te+K),ve.push(me))}}return Me.push(ve.length),new a({values:ve,index:de,ptr:Me,size:[V,X]})},a.prototype.swapRows=function(v,y){if(!pt(v)||!et(v)||!pt(y)||!et(y))throw new Error("Row index must be positive integers");if(this._size.length!==2)throw new Error("Only two dimensional matrix is supported");return Lt(v,this._size[0]),Lt(y,this._size[0]),a._swapRows(v,y,this._size[1],this._values,this._index,this._ptr),this},a._forEachRow=function(v,y,I,P,D){for(var Z=P[v],O=P[v+1],B=Z;B<O;B++)D(I[B],y[B])},a._swapRows=function(v,y,I,P,D,Z){for(var O=0;O<I;O++){var B=Z[O],K=Z[O+1],V=l(v,B,K,D),X=l(y,B,K,D);if(V<K&&X<K&&D[V]===v&&D[X]===y){if(P){var Q=P[V];P[V]=P[X],P[X]=Q}continue}if(V<K&&D[V]===v&&(X>=K||D[X]!==y)){var ge=P?P[V]:void 0;D.splice(X,0,y),P&&P.splice(X,0,ge),D.splice(X<=V?V+1:V,1),P&&P.splice(X<=V?V+1:V,1);continue}if(X<K&&D[X]===y&&(V>=K||D[V]!==v)){var q=P?P[X]:void 0;D.splice(V,0,v),P&&P.splice(V,0,q),D.splice(V<=X?X+1:X,1),P&&P.splice(V<=X?X+1:X,1)}}},a},{isClass:!0});var ug="number",lg=["typed"];function gg(e){var t=e.match(/(0[box])([0-9a-fA-F]*)\.([0-9a-fA-F]*)/);if(t){var r={"0b":2,"0o":8,"0x":16}[t[1]],n=t[2],a=t[3];return{input:e,radix:r,integerPart:n,fractionalPart:a}}else return null}function fg(e){for(var t=parseInt(e.integerPart,e.radix),r=0,n=0;n<e.fractionalPart.length;n++){var a=parseInt(e.fractionalPart[n],e.radix);r+=a/Math.pow(e.radix,n+1)}var s=t+r;if(isNaN(s))throw new SyntaxError('String "'+e.input+'" is no valid number');return s}var zc=Ge(ug,lg,e=>{var{typed:t}=e,r=t("number",{"":function(){return 0},number:function(a){return a},string:function(a){if(a==="NaN")return NaN;var s=gg(a);if(s)return fg(s);var f=0,h=a.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);h&&(f=Number(h[2]),a=h[1]);var g=Number(a);if(isNaN(g))throw new SyntaxError('String "'+a+'" is no valid number');if(h){if(g>2**f-1)throw new SyntaxError('String "'.concat(a,'" is out of range'));g>=2**(f-1)&&(g=g-2**f)}return g},BigNumber:function(a){return a.toNumber()},Fraction:function(a){return a.valueOf()},Unit:function(a){throw new Error("Second argument with valueless unit expected")},null:function(a){return 0},"Unit, string | Unit":function(a,s){return a.toNumber(s)},"Array | Matrix":function(a){return Jr(a,this)}});return r.fromJSON=function(n){return parseFloat(n.value)},r});var dg="fraction",hg=["typed","Fraction"],Hc=Ge(dg,hg,e=>{var{typed:t,Fraction:r}=e;return t("fraction",{number:function(a){if(!isFinite(a)||isNaN(a))throw new Error(a+" cannot be represented as a fraction");return new r(a)},string:function(a){return new r(a)},"number, number":function(a,s){return new r(a,s)},null:function(a){return new r(0)},BigNumber:function(a){return new r(a.toString())},Fraction:function(a){return a},Object:function(a){return new r(a)},"Array | Matrix":function(a){return Jr(a,this)}})});var qc="matrix",pg=["typed","Matrix","DenseMatrix","SparseMatrix"],Wc=Ge(qc,pg,e=>{var{typed:t,Matrix:r,DenseMatrix:n,SparseMatrix:a}=e;return t(qc,{"":function(){return s([])},string:function(h){return s([],h)},"string, string":function(h,g){return s([],h,g)},Array:function(h){return s(h)},Matrix:function(h){return s(h,h.storage())},"Array | Matrix, string":s,"Array | Matrix, string, string":s});function s(f,h,g){if(h==="dense"||h==="default"||h===void 0)return new n(f,g);if(h==="sparse")return new a(f,g);throw new TypeError("Unknown matrix type "+JSON.stringify(h)+".")}});var jc="addScalar",vg=["typed"],Xc=Ge(jc,vg,e=>{var{typed:t}=e;return t(jc,{"number, number":us,"Complex, Complex":function(n,a){return n.add(a)},"BigNumber, BigNumber":function(n,a){return n.plus(a)},"Fraction, Fraction":function(n,a){return n.add(a)},"Unit, Unit":function(n,a){if(n.value===null||n.value===void 0)throw new Error("Parameter x contains a unit with undefined value");if(a.value===null||a.value===void 0)throw new Error("Parameter y contains a unit with undefined value");if(!n.equalBase(a))throw new Error("Units do not match");var s=n.clone();return s.value=this(s.value,a.value),s.fixPrefix=!1,s}})});var mg="algorithm11",xg=["typed","equalScalar"],Yc=Ge(mg,xg,e=>{var{typed:t,equalScalar:r}=e;return function(a,s,f,h){var g=a._values,l=a._index,u=a._ptr,d=a._size,C=a._datatype;if(!g)throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");var M=d[0],L=d[1],v,y=r,I=0,P=f;typeof C=="string"&&(v=C,y=t.find(r,[v,v]),I=t.convert(0,v),s=t.convert(s,v),P=t.find(f,[v,v]));for(var D=[],Z=[],O=[],B=0;B<L;B++){O[B]=Z.length;for(var K=u[B],V=u[B+1],X=K;X<V;X++){var Q=l[X],ge=h?P(s,g[X]):P(g[X],s);y(ge,I)||(Z.push(Q),D.push(ge))}}return O[L]=Z.length,a.createSparseMatrix({values:D,index:Z,ptr:O,size:[M,L],datatype:v})}});var yg="algorithm14",_g=["typed"],Kc=Ge(yg,_g,e=>{var{typed:t}=e;return function(a,s,f,h){var g=a._data,l=a._size,u=a._datatype,d,C=f;typeof u=="string"&&(d=u,s=t.convert(s,d),C=t.find(f,[d,d]));var M=l.length>0?r(C,0,l,l[0],g,s,h):[];return a.createDenseMatrix({data:M,size:Gt(l),datatype:d})};function r(n,a,s,f,h,g,l){var u=[];if(a===s.length-1)for(var d=0;d<f;d++)u[d]=l?n(g,h[d]):n(h[d],g);else for(var C=0;C<f;C++)u[C]=r(n,a+1,s,s[a+1],h[C],g,l);return u}});var bg="multiplyScalar",Eg=["typed"],$c=Ge(bg,Eg,e=>{var{typed:t}=e;return t("multiplyScalar",{"number, number":ls,"Complex, Complex":function(n,a){return n.mul(a)},"BigNumber, BigNumber":function(n,a){return n.times(a)},"Fraction, Fraction":function(n,a){return n.mul(a)},"number | Fraction | BigNumber | Complex, Unit":function(n,a){var s=a.clone();return s.value=s.value===null?s._normalize(n):this(s.value,n),s},"Unit, number | Fraction | BigNumber | Complex":function(n,a){var s=n.clone();return s.value=s.value===null?s._normalize(a):this(s.value,a),s},"Unit, Unit":function(n,a){return n.multiply(a)}})});var Zc="multiply",wg=["typed","matrix","addScalar","multiplyScalar","equalScalar","dot"],Qc=Ge(Zc,wg,e=>{var{typed:t,matrix:r,addScalar:n,multiplyScalar:a,equalScalar:s,dot:f}=e,h=Yc({typed:t,equalScalar:s}),g=Kc({typed:t});function l(O,B){switch(O.length){case 1:switch(B.length){case 1:if(O[0]!==B[0])throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length");break;case 2:if(O[0]!==B[0])throw new RangeError("Dimension mismatch in multiplication. Vector length ("+O[0]+") must match Matrix rows ("+B[0]+")");break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has "+B.length+" dimensions)")}break;case 2:switch(B.length){case 1:if(O[1]!==B[0])throw new RangeError("Dimension mismatch in multiplication. Matrix columns ("+O[1]+") must match Vector length ("+B[0]+")");break;case 2:if(O[1]!==B[0])throw new RangeError("Dimension mismatch in multiplication. Matrix A columns ("+O[1]+") must match Matrix B rows ("+B[0]+")");break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has "+B.length+" dimensions)")}break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has "+O.length+" dimensions)")}}function u(O,B,K){if(K===0)throw new Error("Cannot multiply two empty vectors");return f(O,B)}function d(O,B){if(B.storage()!=="dense")throw new Error("Support for SparseMatrix not implemented");return C(O,B)}function C(O,B){var K=O._data,V=O._size,X=O._datatype,Q=B._data,ge=B._size,q=B._datatype,ve=V[0],de=ge[1],Me,_e=n,Te=a;X&&q&&X===q&&typeof X=="string"&&(Me=X,_e=t.find(n,[Me,Me]),Te=t.find(a,[Me,Me]));for(var me=[],ce=0;ce<de;ce++){for(var Ie=Te(K[0],Q[0][ce]),je=1;je<ve;je++)Ie=_e(Ie,Te(K[je],Q[je][ce]));me[ce]=Ie}return O.createDenseMatrix({data:me,size:[de],datatype:Me})}var M=t("_multiplyMatrixVector",{"DenseMatrix, any":v,"SparseMatrix, any":P}),L=t("_multiplyMatrixMatrix",{"DenseMatrix, DenseMatrix":y,"DenseMatrix, SparseMatrix":I,"SparseMatrix, DenseMatrix":D,"SparseMatrix, SparseMatrix":Z});function v(O,B){var K=O._data,V=O._size,X=O._datatype,Q=B._data,ge=B._datatype,q=V[0],ve=V[1],de,Me=n,_e=a;X&&ge&&X===ge&&typeof X=="string"&&(de=X,Me=t.find(n,[de,de]),_e=t.find(a,[de,de]));for(var Te=[],me=0;me<q;me++){for(var ce=K[me],Ie=_e(ce[0],Q[0]),je=1;je<ve;je++)Ie=Me(Ie,_e(ce[je],Q[je]));Te[me]=Ie}return O.createDenseMatrix({data:Te,size:[q],datatype:de})}function y(O,B){var K=O._data,V=O._size,X=O._datatype,Q=B._data,ge=B._size,q=B._datatype,ve=V[0],de=V[1],Me=ge[1],_e,Te=n,me=a;X&&q&&X===q&&typeof X=="string"&&(_e=X,Te=t.find(n,[_e,_e]),me=t.find(a,[_e,_e]));for(var ce=[],Ie=0;Ie<ve;Ie++){var je=K[Ie];ce[Ie]=[];for(var Xe=0;Xe<Me;Xe++){for(var Ue=me(je[0],Q[0][Xe]),ht=1;ht<de;ht++)Ue=Te(Ue,me(je[ht],Q[ht][Xe]));ce[Ie][Xe]=Ue}}return O.createDenseMatrix({data:ce,size:[ve,Me],datatype:_e})}function I(O,B){var K=O._data,V=O._size,X=O._datatype,Q=B._values,ge=B._index,q=B._ptr,ve=B._size,de=B._datatype;if(!Q)throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix");var Me=V[0],_e=ve[1],Te,me=n,ce=a,Ie=s,je=0;X&&de&&X===de&&typeof X=="string"&&(Te=X,me=t.find(n,[Te,Te]),ce=t.find(a,[Te,Te]),Ie=t.find(s,[Te,Te]),je=t.convert(0,Te));for(var Xe=[],Ue=[],ht=[],tt=B.createSparseMatrix({values:Xe,index:Ue,ptr:ht,size:[Me,_e],datatype:Te}),ct=0;ct<_e;ct++){ht[ct]=Ue.length;var ot=q[ct],ut=q[ct+1];if(ut>ot)for(var it=0,He=0;He<Me;He++){for(var Pt=He+1,lt=void 0,rt=ot;rt<ut;rt++){var xt=ge[rt];it!==Pt?(lt=ce(K[He][xt],Q[rt]),it=Pt):lt=me(lt,ce(K[He][xt],Q[rt]))}it===Pt&&!Ie(lt,je)&&(Ue.push(He),Xe.push(lt))}}return ht[_e]=Ue.length,tt}function P(O,B){var K=O._values,V=O._index,X=O._ptr,Q=O._datatype;if(!K)throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");var ge=B._data,q=B._datatype,ve=O._size[0],de=B._size[0],Me=[],_e=[],Te=[],me,ce=n,Ie=a,je=s,Xe=0;Q&&q&&Q===q&&typeof Q=="string"&&(me=Q,ce=t.find(n,[me,me]),Ie=t.find(a,[me,me]),je=t.find(s,[me,me]),Xe=t.convert(0,me));var Ue=[],ht=[];Te[0]=0;for(var tt=0;tt<de;tt++){var ct=ge[tt];if(!je(ct,Xe))for(var ot=X[tt],ut=X[tt+1],it=ot;it<ut;it++){var He=V[it];ht[He]?Ue[He]=ce(Ue[He],Ie(ct,K[it])):(ht[He]=!0,_e.push(He),Ue[He]=Ie(ct,K[it]))}}for(var Pt=_e.length,lt=0;lt<Pt;lt++){var rt=_e[lt];Me[lt]=Ue[rt]}return Te[1]=_e.length,O.createSparseMatrix({values:Me,index:_e,ptr:Te,size:[ve,1],datatype:me})}function D(O,B){var K=O._values,V=O._index,X=O._ptr,Q=O._datatype;if(!K)throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");var ge=B._data,q=B._datatype,ve=O._size[0],de=B._size[0],Me=B._size[1],_e,Te=n,me=a,ce=s,Ie=0;Q&&q&&Q===q&&typeof Q=="string"&&(_e=Q,Te=t.find(n,[_e,_e]),me=t.find(a,[_e,_e]),ce=t.find(s,[_e,_e]),Ie=t.convert(0,_e));for(var je=[],Xe=[],Ue=[],ht=O.createSparseMatrix({values:je,index:Xe,ptr:Ue,size:[ve,Me],datatype:_e}),tt=[],ct=[],ot=0;ot<Me;ot++){Ue[ot]=Xe.length;for(var ut=ot+1,it=0;it<de;it++){var He=ge[it][ot];if(!ce(He,Ie))for(var Pt=X[it],lt=X[it+1],rt=Pt;rt<lt;rt++){var xt=V[rt];ct[xt]!==ut?(ct[xt]=ut,Xe.push(xt),tt[xt]=me(He,K[rt])):tt[xt]=Te(tt[xt],me(He,K[rt]))}}for(var At=Ue[ot],Vt=Xe.length,H=At;H<Vt;H++){var ne=Xe[H];je[H]=tt[ne]}}return Ue[Me]=Xe.length,ht}function Z(O,B){var K=O._values,V=O._index,X=O._ptr,Q=O._datatype,ge=B._values,q=B._index,ve=B._ptr,de=B._datatype,Me=O._size[0],_e=B._size[1],Te=K&&ge,me,ce=n,Ie=a;Q&&de&&Q===de&&typeof Q=="string"&&(me=Q,ce=t.find(n,[me,me]),Ie=t.find(a,[me,me]));for(var je=Te?[]:void 0,Xe=[],Ue=[],ht=O.createSparseMatrix({values:je,index:Xe,ptr:Ue,size:[Me,_e],datatype:me}),tt=Te?[]:void 0,ct=[],ot,ut,it,He,Pt,lt,rt,xt,At=0;At<_e;At++){Ue[At]=Xe.length;var Vt=At+1;for(Pt=ve[At],lt=ve[At+1],He=Pt;He<lt;He++)if(xt=q[He],Te)for(ut=X[xt],it=X[xt+1],ot=ut;ot<it;ot++)rt=V[ot],ct[rt]!==Vt?(ct[rt]=Vt,Xe.push(rt),tt[rt]=Ie(ge[He],K[ot])):tt[rt]=ce(tt[rt],Ie(ge[He],K[ot]));else for(ut=X[xt],it=X[xt+1],ot=ut;ot<it;ot++)rt=V[ot],ct[rt]!==Vt&&(ct[rt]=Vt,Xe.push(rt));if(Te)for(var H=Ue[At],ne=Xe.length,ie=H;ie<ne;ie++){var J=Xe[ie];je[ie]=tt[J]}}return Ue[_e]=Xe.length,ht}return t(Zc,Z0({"Array, Array":function(B,K){l(vr(B),vr(K));var V=this(r(B),r(K));return Ut(V)?V.valueOf():V},"Matrix, Matrix":function(B,K){var V=B.size(),X=K.size();return l(V,X),V.length===1?X.length===1?u(B,K,V[0]):d(B,K):X.length===1?M(B,K):L(B,K)},"Matrix, Array":function(B,K){return this(B,r(K))},"Array, Matrix":function(B,K){return this(r(B,K.storage()),K)},"SparseMatrix, any":function(B,K){return h(B,K,a,!1)},"DenseMatrix, any":function(B,K){return g(B,K,a,!1)},"any, SparseMatrix":function(B,K){return h(K,B,a,!0)},"any, DenseMatrix":function(B,K){return g(K,B,a,!0)},"Array, any":function(B,K){return g(r(B),K,a,!1).valueOf()},"any, Array":function(B,K){return g(r(K),B,a,!0).valueOf()},"any, any":a,"any, any, ...any":function(B,K,V){for(var X=this(B,K),Q=0;Q<V.length;Q++)X=this(X,V[Q]);return X}},a.signatures))});var Cg="sqrt",Ag=["config","typed","Complex"],Jc=Ge(Cg,Ag,e=>{var{config:t,typed:r,Complex:n}=e;return r("sqrt",{number:a,Complex:function(f){return f.sqrt()},BigNumber:function(f){return!f.isNegative()||t.predictable?f.sqrt():a(f.toNumber())},"Array | Matrix":function(f){return Jr(f,this,!0)},Unit:function(f){return f.pow(.5)}});function a(s){return isNaN(s)?NaN:s>=0||t.predictable?Math.sqrt(s):new n(s,0).sqrt()}});var eu="conj",Mg=["typed"],tu=Ge(eu,Mg,e=>{var{typed:t}=e;return t(eu,{number:function(n){return n},BigNumber:function(n){return n},Complex:function(n){return n.conjugate()},"Array | Matrix":function(n){return Jr(n,this)}})});var ru="identity",Sg=["typed","config","matrix","BigNumber","DenseMatrix","SparseMatrix"],nu=Ge(ru,Sg,e=>{var{typed:t,config:r,matrix:n,BigNumber:a,DenseMatrix:s,SparseMatrix:f}=e;return t(ru,{"":function(){return r.matrix==="Matrix"?n([]):[]},string:function(u){return n(u)},"number | BigNumber":function(u){return g(u,u,r.matrix==="Matrix"?"dense":void 0)},"number | BigNumber, string":function(u,d){return g(u,u,d)},"number | BigNumber, number | BigNumber":function(u,d){return g(u,d,r.matrix==="Matrix"?"dense":void 0)},"number | BigNumber, number | BigNumber, string":function(u,d,C){return g(u,d,C)},Array:function(u){return h(u)},"Array, string":function(u,d){return h(u,d)},Matrix:function(u){return h(u.valueOf(),u.storage())},"Matrix, string":function(u,d){return h(u.valueOf(),d)}});function h(l,u){switch(l.length){case 0:return u?n(u):[];case 1:return g(l[0],l[0],u);case 2:return g(l[0],l[1],u);default:throw new Error("Vector containing two values expected")}}function g(l,u,d){var C=Rt(l)||Rt(u)?a:null;if(Rt(l)&&(l=l.toNumber()),Rt(u)&&(u=u.toNumber()),!et(l)||l<1)throw new Error("Parameters in function identity must be positive integers");if(!et(u)||u<1)throw new Error("Parameters in function identity must be positive integers");var M=C?new a(1):1,L=C?new C(0):0,v=[l,u];if(d){if(d==="sparse")return f.diagonal(v,M,0,L);if(d==="dense")return s.diagonal(v,M,0,L);throw new TypeError('Unknown matrix type "'.concat(d,'"'))}for(var y=On([],v,L),I=l<u?l:u,P=0;P<I;P++)y[P][P]=M;return y}});var Tg="ones",Rg=["typed","config","matrix","BigNumber"],au=Ge(Tg,Rg,e=>{var{typed:t,config:r,matrix:n,BigNumber:a}=e;return t("ones",{"":function(){return r.matrix==="Array"?s([]):s([],"default")},"...number | BigNumber | string":function(l){var u=l[l.length-1];if(typeof u=="string"){var d=l.pop();return s(l,d)}else return r.matrix==="Array"?s(l):s(l,"default")},Array:s,Matrix:function(l){var u=l.storage();return s(l.valueOf(),u)},"Array | Matrix, string":function(l,u){return s(l.valueOf(),u)}});function s(g,l){var u=f(g),d=u?new a(1):1;if(h(g),l){var C=n(l);return g.length>0?C.resize(g,d):C}else{var M=[];return g.length>0?On(M,g,d):M}}function f(g){var l=!1;return g.forEach(function(u,d,C){Rt(u)&&(l=!0,C[d]=u.toNumber())}),l}function h(g){g.forEach(function(l){if(typeof l!="number"||!et(l)||l<0)throw new Error("Parameters in function ones must be positive integers")})}});function ou(){throw new Error('No "matrix" implementation available')}var iu="size",Ng=["typed","config","?matrix"],su=Ge(iu,Ng,e=>{var{typed:t,config:r,matrix:n}=e;return t(iu,{Matrix:function(s){return s.create(s.size())},Array:vr,string:function(s){return r.matrix==="Array"?[s.length]:n([s.length])},"number | Complex | BigNumber | Unit | boolean | null":function(s){return r.matrix==="Array"?[]:n?n([]):ou()}})});var cu="pow",Ig=["typed","config","identity","multiply","matrix","fraction","number","Complex"],uu=Ge(cu,Ig,e=>{var{typed:t,config:r,identity:n,multiply:a,matrix:s,number:f,fraction:h,Complex:g}=e;return t(cu,{"number, number":l,"Complex, Complex":function(M,L){return M.pow(L)},"BigNumber, BigNumber":function(M,L){return L.isInteger()||M>=0||r.predictable?M.pow(L):new g(M.toNumber(),0).pow(L.toNumber(),0)},"Fraction, Fraction":function(M,L){var v=M.pow(L);if(v!=null)return v;if(r.predictable)throw new Error("Result of pow is non-rational and cannot be expressed as a fraction");return l(M.valueOf(),L.valueOf())},"Array, number":u,"Array, BigNumber":function(M,L){return u(M,L.toNumber())},"Matrix, number":d,"Matrix, BigNumber":function(M,L){return d(M,L.toNumber())},"Unit, number | BigNumber":function(M,L){return M.pow(L)}});function l(C,M){if(r.predictable&&!et(M)&&C<0)try{var L=h(M),v=f(L);if((M===v||Math.abs((M-v)/M)<1e-14)&&L.d%2==1)return(L.n%2==0?1:-1)*Math.pow(-C,M)}catch(y){}return r.predictable&&(C<-1&&M===Infinity||C>-1&&C<0&&M===-Infinity)?NaN:et(M)||C>=0||r.predictable?gs(C,M):C*C<1&&M===Infinity||C*C>1&&M===-Infinity?0:new g(C,0).pow(M,0)}function u(C,M){if(!et(M)||M<0)throw new TypeError("For A^b, b must be a positive integer (value is "+M+")");var L=vr(C);if(L.length!==2)throw new Error("For A^b, A must be 2 dimensional (A has "+L.length+" dimensions)");if(L[0]!==L[1])throw new Error("For A^b, A must be square (size is "+L[0]+"x"+L[1]+")");for(var v=n(L[0]).valueOf(),y=C;M>=1;)(M&1)==1&&(v=a(y,v)),M>>=1,y=a(y,y);return v}function d(C,M){return s(u(C.valueOf(),M))}});var lu="dot",Lg=["typed","addScalar","multiplyScalar","conj","size"],gu=Ge(lu,Lg,e=>{var{typed:t,addScalar:r,multiplyScalar:n,conj:a,size:s}=e;return t(lu,{"Array | DenseMatrix, Array | DenseMatrix":h,"SparseMatrix, SparseMatrix":g});function f(u,d){var C=l(u),M=l(d),L,v;if(C.length===1)L=C[0];else if(C.length===2&&C[1]===1)L=C[0];else throw new RangeError("Expected a column vector, instead got a matrix of size ("+C.join(", ")+")");if(M.length===1)v=M[0];else if(M.length===2&&M[1]===1)v=M[0];else throw new RangeError("Expected a column vector, instead got a matrix of size ("+M.join(", ")+")");if(L!==v)throw new RangeError("Vectors must have equal length ("+L+" != "+v+")");if(L===0)throw new RangeError("Cannot calculate the dot product of empty vectors");return L}function h(u,d){var C=f(u,d),M=Ut(u)?u._data:u,L=Ut(u)?u._datatype:void 0,v=Ut(d)?d._data:d,y=Ut(d)?d._datatype:void 0,I=l(u).length===2,P=l(d).length===2,D=r,Z=n;if(L&&y&&L===y&&typeof L=="string"){var O=L;D=t.find(r,[O,O]),Z=t.find(n,[O,O])}if(!I&&!P){for(var B=Z(a(M[0]),v[0]),K=1;K<C;K++)B=D(B,Z(a(M[K]),v[K]));return B}if(!I&&P){for(var V=Z(a(M[0]),v[0][0]),X=1;X<C;X++)V=D(V,Z(a(M[X]),v[X][0]));return V}if(I&&!P){for(var Q=Z(a(M[0][0]),v[0]),ge=1;ge<C;ge++)Q=D(Q,Z(a(M[ge][0]),v[ge]));return Q}if(I&&P){for(var q=Z(a(M[0][0]),v[0][0]),ve=1;ve<C;ve++)q=D(q,Z(a(M[ve][0]),v[ve][0]));return q}}function g(u,d){f(u,d);for(var C=u._index,M=u._values,L=d._index,v=d._values,y=0,I=r,P=n,D=0,Z=0;D<C.length&&Z<L.length;){var O=C[D],B=L[Z];if(O<B){D++;continue}if(O>B){Z++;continue}O===B&&(y=I(y,P(M[D],v[Z])),D++,Z++)}return y}function l(u){return Ut(u)?u.size():s(u)}});var fs=Rc({config:Qr}),ds=Lc({});var fu=kc({});var hs=Oc({});var ps=Fc({Matrix:hs});var sr=Mc({BigNumber:fs,Complex:ds,DenseMatrix:ps,Fraction:fu});var du=Xc({typed:sr});var Pg=tu({typed:sr});var hu=Gc({config:Qr,typed:sr});var pu=$c({typed:sr});var Dg=zc({typed:sr});var vu=Vc({Matrix:hs,equalScalar:hu,typed:sr});var mu=Jc({Complex:ds,config:Qr,typed:sr});var kg=Hc({Fraction:fu,typed:sr});var hn=Wc({DenseMatrix:ps,Matrix:hs,SparseMatrix:vu,typed:sr});var Og=su({matrix:hn,config:Qr,typed:sr});var vs=au({BigNumber:fs,config:Qr,matrix:hn,typed:sr});var Fg=gu({addScalar:du,conj:Pg,multiplyScalar:pu,size:Og,typed:sr});var Bg=nu({BigNumber:fs,DenseMatrix:ps,SparseMatrix:vu,config:Qr,matrix:hn,typed:sr});var Mo=Qc({addScalar:du,dot:Fg,equalScalar:hu,matrix:hn,multiplyScalar:pu,typed:sr}),ms=uu({Complex:ds,config:Qr,fraction:kg,identity:Bg,matrix:hn,multiply:Mo,number:Dg,typed:sr});"use strict";var Er=function(e){this.minNode=void 0,this.nodeCount=0,e&&(this.compare=e)};Er.prototype.clear=function(){this.minNode=void 0,this.nodeCount=0};Er.prototype.decreaseKey=function(e,t){if(typeof e=="undefined")throw new Error("Cannot decrease key of non-existent node");if(this.compare({key:t},{key:e.key})>0)throw new Error("New key is larger than old key");e.key=t;var r=e.parent;r&&this.compare(e,r)<0&&(xs(e,r,this.minNode,this.compare),ys(r,this.minNode,this.compare)),this.compare(e,this.minNode)<0&&(this.minNode=e)};Er.prototype.delete=function(e){var t=e.parent;t&&(xs(e,t,this.minNode,this.compare),ys(t,this.minNode,this.compare)),this.minNode=e,this.extractMinimum()};Er.prototype.extractMinimum=function(){var e=this.minNode;if(e){if(e.child){var t=e.child;do t.parent=void 0,t=t.next;while(t!==e.child)}var r;e.next!==e&&(r=e.next),_s(e),this.nodeCount--,this.minNode=ia(r,e.child,this.compare),this.minNode&&(this.minNode=Ug(this.minNode,this.compare))}return e};Er.prototype.findMinimum=function(){return this.minNode};Er.prototype.insert=function(e,t){var r=new Gg(e,t);return this.minNode=ia(this.minNode,r,this.compare),this.nodeCount++,r};Er.prototype.isEmpty=function(){return this.minNode===void 0};Er.prototype.size=function(){return this.isEmpty()?0:xu(this.minNode)};Er.prototype.union=function(e){this.minNode=ia(this.minNode,e.minNode,this.compare),this.nodeCount+=e.nodeCount};Er.prototype.compare=function(e,t){return e.key>t.key?1:e.key<t.key?-1:0};var bs=function(e){this.index=-1,this.items=[];var t=e;do this.items.push(t),t=t.next;while(e!==t)};bs.prototype.hasNext=function(){return this.index<this.items.length-1};bs.prototype.next=function(){return this.items[++this.index]};function xs(e,t,r,n){return e.parent=void 0,t.degree--,e.next===e?t.child=void 0:t.child=e.next,_s(e),r=ia(r,e,n),e.isMarked=!1,r}function ys(e,t,r){var n=e.parent;return n&&(e.isMarked?(t=xs(e,n,t,r),t=ys(n,t,r)):e.isMarked=!0),t}function Ug(e,t){for(var r=[],n=new bs(e);n.hasNext();){for(var a=n.next();r[a.degree];){if(t(a,r[a.degree])>0){var s=a;a=r[a.degree],r[a.degree]=s}Vg(r[a.degree],a,t),r[a.degree]=void 0,a.degree++}r[a.degree]=a}e=void 0;for(var f=0;f<r.length;f++)r[f]&&(r[f].next=r[f],r[f].prev=r[f],e=ia(e,r[f],t));return e}function _s(e){var t=e.prev,r=e.next;t.next=r,r.prev=t,e.next=e,e.prev=e}function Vg(e,t,r){_s(e),t.child=ia(e,t.child,r),e.parent=t,e.isMarked=!1}function ia(e,t,r){if(!(!e&&!t)){if(!e)return t;if(!t)return e;var n=e.next;return e.next=t.next,e.next.prev=e,t.next=n,t.next.prev=t,r(e,t)<0?e:t}}function xu(e){var t=0,r=e;do t++,r.child&&(t+=xu(r.child)),r=r.next;while(r!==e);return t}function Gg(e,t){this.key=e,this.value=t,this.prev=this,this.next=this,this.degree=0,this.parent=void 0,this.child=void 0,this.isMarked=void 0}var Es=class{numApproximationPoints=50;weightFactor=2;maxDistortion=2;bundleStrength=1;constructor(t,r,n,a){var s=performance.now();this.nodes=t,this.edges=r;var f=t.length;this.n=f,this.nodeDict={},this.adjList=new Map;var h=1e5,g=-1e5,l=1e5,u=-1e5;this.nodes.forEach(C=>{C.y=-C.y,C.x=+C.x,h=h<C.x?h:C.x,l=l<C.y?l:C.y,g=g>C.x?g:C.x,u=u>C.y?u:C.y,C.id=parseInt(C.id),this.adjList.set(C.id,[]),this.nodeDict[C.id]=C}),this.minX=h,this.minY=l,this.maxX=g,this.maxY=u,this.scale(n,a);var d=performance.now();console.log("Preprocessing Nodes took "+(d-s)+" milliseconds."),s=performance.now(),this.adj=hn(vs([f,f])),this.adj=Mo(this.adj,-1),this.adj=this.adj._data,this.weight=hn(vs([f,f])),this.weight=Mo(this.weight,-1),this.weight=this.weight._data;var d=performance.now();console.log("Preprocessing Misc took "+(d-s)+" milliseconds."),s=performance.now(),this.edges.forEach((C,M)=>{C.target=parseInt(C.target),C.source=parseInt(C.source),C.id=M;var L=this.nodeDict[C.source],v=this.nodeDict[C.target];this.adjList.get(C.source).push(C.target),this.adjList.get(C.target).push(C.source),C.controlpointsStraight=this.approximateStraight([L,v],this.numApproximationPoints),C.controlpoints=this.approximateStraight([L,v],this.numApproximationPoints),this.adj[C.target][C.source]=M,this.adj[C.source][C.target]=M;var y=yu(L,v);C.color=zg(L,v),C.dist=y,C.weight=Math.pow(y,this.weightFactor),this.weight[C.target][C.source]=C.weight,this.weight[C.source][C.target]=C.weight}),this.locked=new Array(this.edges.length).fill(!1),this.bundled=new Array(this.edges.length).fill(!1);var d=performance.now();console.log("Preprocessing Edges took "+(d-s)+" milliseconds.");var s=performance.now();this.edges.sort(function(C,M){return M.dist-C.dist});var d=performance.now();console.log("Sorting Edges took "+(d-s)+" milliseconds.")}bundle(){var t=performance.now();this.locked=new Array(this.edges.length).fill(!1),this.bundled=new Array(this.edges.length).fill(!1),this.neighbours=new Array(this.nodes.length),this.nodes.forEach(n=>{this.neighbours[n.id]=new Set(this.adjList.get(n.id))}),this.edges.forEach(n=>{if(this.locked[n.id]){n.controlpoints=n.controlpointsStraight;return}var a=n.source,s=n.target;this.neighbours[s].delete(a),this.neighbours[a].delete(s);var f=this.dijkstra(a,s);if(f.length>2){for(var h=0,g=this.nodeDict[f[0]],l=1;l<f.length;l++){var u=this.nodeDict[f[l]];h+=yu(g,u),g=u}if(h>=this.maxDistortion*n.dist)n.controlpoints=[this.nodeDict[a],this.nodeDict[s]],this.neighbours[s].add(a),this.neighbours[a].add(s);else{for(var g=this.nodeDict[f.pop()],d=[g];f.length>0;){var u=this.nodeDict[f.pop()],C=this.adj[g.id][u.id];this.locked[C]=!0,d.push(u),g=u}this.bundled[n.id]=!0,n.cp=d,n.controlpoints=this.approximateBezier(d,this.numApproximationPoints)}}else n.controlpoints=[this.nodeDict[a],this.nodeDict[s]],this.neighbours[s].add(a),this.neighbours[a].add(s)});var r=performance.now();console.log("Bundling took "+(r-t)+" milliseconds.")}dijkstra(t,r){var n,a;(n=[]).length=this.n,n.fill(Infinity),n[t]=0,(a=[]).length=this.n,a.fill(-1);var s={},f=new Er,h=f.insert(0,t);for(s[t]=h;!f.isEmpty();){var g=f.extractMinimum();if(g=g.value,g==r)break;this.neighbours[g].forEach(d=>{var C=n[g]+this.weight[g][d];if(n[d]>C){if(a[d]<0){var M=f.insert(C,d);s[d]=M}else{var M=s[d];f.decreaseKey(M,C)}a[d]=g,n[d]=C}})}for(var l=[r],u=r;;){if(u=a[u],l.push(u),u===t)return l;if(u<=0)return[]}}scale(t,r){var n=this.maxX-this.minX,a=this.maxY-this.minY,s=t*.05,f=r*.05;t-=2*s,r-=2*f,this.nodes.forEach(h=>{h.x=s+(h.x-this.minX)/n*t,h.y=f+(h.y-this.minY)/a*r})}subdivision(){this.edges.forEach(t=>{this.bundled[t.id]&&(t.controlpoints=this.subdivide(t.cp,this.bundleStrength),t.controlpoints=this.approximateBezier(t.controlpoints,this.numApproximationPoints))})}subdivide(t,r){for(var n=1;n<r;n++){var a=[];a.push(t[0]);for(var s=0;s<t.length-1;s++){var f=t[s],h=t[s+1],g={};g.x=(f.x+h.x)/2,g.y=(f.y+h.y)/2,a.push(g),a.push(h)}t=a}return t}approximateStraight(t,r){var n=t[0],a=t[1],s=(a.x-n.x)/r,f=(a.y-n.y)/r;t=[];for(var h=0;h<=r;h++){var g={};g.x=n.x+h*s,g.y=n.y+h*f,t.push(g)}return t}approximateBezier(t,r){var n=[],a=0;t.forEach(h=>{h.binom=Hg(t.length-1,a),a+=1});for(var s=0;s<=1;s+=1/r){var f={x:0,y:0},a=0;t.forEach(g=>{var l=Math.pow(1-s,t.length-1-a),u=l*Math.pow(s,a);f.x+=g.binom*u*g.x,f.y+=g.binom*u*g.y,a+=1}),n.push(f)}return n.push({x:t[t.length-1].x,y:t[t.length-1].y}),n}setWeight(t){this.weightFactor=t,this.edges.forEach(r=>{r.weight=Math.pow(r.dist,t),this.weight[r.target][r.source]=r.weight,this.weight[r.source][r.target]=r.weight})}setDistortion(t){this.maxDistortion=t}setBundlingStrength(t){this.bundleStrength=t}};function yu(e,t){return mu(ms(e.x-t.x,2)+ms(e.y-t.y,2))}function zg(e,t){var r=t.x-e.x,n=t.y-e.y,a=Math.atan2(-n,r),s=180*a/Math.PI;return s<0&&(s=360+Math.round(s)-180),s<11.5?"#733957":s<33?"#8e4830":s<55.5?"#b58837":s<78?"#d6d389":s<100.5?"#abdbca":s<123?"#5ea6c8":s<155.5?"#55609a":s<178?"#723959":"#733957"}function Hg(e,t){for(var r=1,n=e-t+1;n<=e;n++)r*=n;for(n=1;n<=t;n++)r/=n;return r}var p={DEPTH_BUFFER_BIT:256,STENCIL_BUFFER_BIT:1024,COLOR_BUFFER_BIT:16384,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,ZERO:0,ONE:1,SRC_COLOR:768,ONE_MINUS_SRC_COLOR:769,SRC_ALPHA:770,ONE_MINUS_SRC_ALPHA:771,DST_ALPHA:772,ONE_MINUS_DST_ALPHA:773,DST_COLOR:774,ONE_MINUS_DST_COLOR:775,SRC_ALPHA_SATURATE:776,FUNC_ADD:32774,BLEND_EQUATION:32777,BLEND_EQUATION_RGB:32777,BLEND_EQUATION_ALPHA:34877,FUNC_SUBTRACT:32778,FUNC_REVERSE_SUBTRACT:32779,BLEND_DST_RGB:32968,BLEND_SRC_RGB:32969,BLEND_DST_ALPHA:32970,BLEND_SRC_ALPHA:32971,CONSTANT_COLOR:32769,ONE_MINUS_CONSTANT_COLOR:32770,CONSTANT_ALPHA:32771,ONE_MINUS_CONSTANT_ALPHA:32772,BLEND_COLOR:32773,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,ARRAY_BUFFER_BINDING:34964,ELEMENT_ARRAY_BUFFER_BINDING:34965,STREAM_DRAW:35040,STATIC_DRAW:35044,DYNAMIC_DRAW:35048,BUFFER_SIZE:34660,BUFFER_USAGE:34661,CURRENT_VERTEX_ATTRIB:34342,FRONT:1028,BACK:1029,FRONT_AND_BACK:1032,CULL_FACE:2884,BLEND:3042,DITHER:3024,STENCIL_TEST:2960,DEPTH_TEST:2929,SCISSOR_TEST:3089,POLYGON_OFFSET_FILL:32823,SAMPLE_ALPHA_TO_COVERAGE:32926,SAMPLE_COVERAGE:32928,NO_ERROR:0,INVALID_ENUM:1280,INVALID_VALUE:1281,INVALID_OPERATION:1282,OUT_OF_MEMORY:1285,CW:2304,CCW:2305,LINE_WIDTH:2849,ALIASED_POINT_SIZE_RANGE:33901,ALIASED_LINE_WIDTH_RANGE:33902,CULL_FACE_MODE:2885,FRONT_FACE:2886,DEPTH_RANGE:2928,DEPTH_WRITEMASK:2930,DEPTH_CLEAR_VALUE:2931,DEPTH_FUNC:2932,STENCIL_CLEAR_VALUE:2961,STENCIL_FUNC:2962,STENCIL_FAIL:2964,STENCIL_PASS_DEPTH_FAIL:2965,STENCIL_PASS_DEPTH_PASS:2966,STENCIL_REF:2967,STENCIL_VALUE_MASK:2963,STENCIL_WRITEMASK:2968,STENCIL_BACK_FUNC:34816,STENCIL_BACK_FAIL:34817,STENCIL_BACK_PASS_DEPTH_FAIL:34818,STENCIL_BACK_PASS_DEPTH_PASS:34819,STENCIL_BACK_REF:36003,STENCIL_BACK_VALUE_MASK:36004,STENCIL_BACK_WRITEMASK:36005,VIEWPORT:2978,SCISSOR_BOX:3088,COLOR_CLEAR_VALUE:3106,COLOR_WRITEMASK:3107,UNPACK_ALIGNMENT:3317,PACK_ALIGNMENT:3333,MAX_TEXTURE_SIZE:3379,MAX_VIEWPORT_DIMS:3386,SUBPIXEL_BITS:3408,RED_BITS:3410,GREEN_BITS:3411,BLUE_BITS:3412,ALPHA_BITS:3413,DEPTH_BITS:3414,STENCIL_BITS:3415,POLYGON_OFFSET_UNITS:10752,POLYGON_OFFSET_FACTOR:32824,TEXTURE_BINDING_2D:32873,SAMPLE_BUFFERS:32936,SAMPLES:32937,SAMPLE_COVERAGE_VALUE:32938,SAMPLE_COVERAGE_INVERT:32939,COMPRESSED_TEXTURE_FORMATS:34467,DONT_CARE:4352,FASTEST:4353,NICEST:4354,GENERATE_MIPMAP_HINT:33170,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,DEPTH_COMPONENT:6402,ALPHA:6406,RGB:6407,RGBA:6408,LUMINANCE:6409,LUMINANCE_ALPHA:6410,UNSIGNED_SHORT_4_4_4_4:32819,UNSIGNED_SHORT_5_5_5_1:32820,UNSIGNED_SHORT_5_6_5:33635,FRAGMENT_SHADER:35632,VERTEX_SHADER:35633,MAX_VERTEX_ATTRIBS:34921,MAX_VERTEX_UNIFORM_VECTORS:36347,MAX_VARYING_VECTORS:36348,MAX_COMBINED_TEXTURE_IMAGE_UNITS:35661,MAX_VERTEX_TEXTURE_IMAGE_UNITS:35660,MAX_TEXTURE_IMAGE_UNITS:34930,MAX_FRAGMENT_UNIFORM_VECTORS:36349,SHADER_TYPE:35663,DELETE_STATUS:35712,LINK_STATUS:35714,VALIDATE_STATUS:35715,ATTACHED_SHADERS:35717,ACTIVE_UNIFORMS:35718,ACTIVE_ATTRIBUTES:35721,SHADING_LANGUAGE_VERSION:35724,CURRENT_PROGRAM:35725,NEVER:512,LESS:513,EQUAL:514,LEQUAL:515,GREATER:516,NOTEQUAL:517,GEQUAL:518,ALWAYS:519,KEEP:7680,REPLACE:7681,INCR:7682,DECR:7683,INVERT:5386,INCR_WRAP:34055,DECR_WRAP:34056,VENDOR:7936,RENDERER:7937,VERSION:7938,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,TEXTURE_MAG_FILTER:10240,TEXTURE_MIN_FILTER:10241,TEXTURE_WRAP_S:10242,TEXTURE_WRAP_T:10243,TEXTURE_2D:3553,TEXTURE:5890,TEXTURE_CUBE_MAP:34067,TEXTURE_BINDING_CUBE_MAP:34068,TEXTURE_CUBE_MAP_POSITIVE_X:34069,TEXTURE_CUBE_MAP_NEGATIVE_X:34070,TEXTURE_CUBE_MAP_POSITIVE_Y:34071,TEXTURE_CUBE_MAP_NEGATIVE_Y:34072,TEXTURE_CUBE_MAP_POSITIVE_Z:34073,TEXTURE_CUBE_MAP_NEGATIVE_Z:34074,MAX_CUBE_MAP_TEXTURE_SIZE:34076,TEXTURE0:33984,TEXTURE1:33985,TEXTURE2:33986,TEXTURE3:33987,TEXTURE4:33988,TEXTURE5:33989,TEXTURE6:33990,TEXTURE7:33991,TEXTURE8:33992,TEXTURE9:33993,TEXTURE10:33994,TEXTURE11:33995,TEXTURE12:33996,TEXTURE13:33997,TEXTURE14:33998,TEXTURE15:33999,TEXTURE16:34e3,TEXTURE17:34001,TEXTURE18:34002,TEXTURE19:34003,TEXTURE20:34004,TEXTURE21:34005,TEXTURE22:34006,TEXTURE23:34007,TEXTURE24:34008,TEXTURE25:34009,TEXTURE26:34010,TEXTURE27:34011,TEXTURE28:34012,TEXTURE29:34013,TEXTURE30:34014,TEXTURE31:34015,ACTIVE_TEXTURE:34016,REPEAT:10497,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,INT_VEC2:35667,INT_VEC3:35668,INT_VEC4:35669,BOOL:35670,BOOL_VEC2:35671,BOOL_VEC3:35672,BOOL_VEC4:35673,FLOAT_MAT2:35674,FLOAT_MAT3:35675,FLOAT_MAT4:35676,SAMPLER_2D:35678,SAMPLER_CUBE:35680,VERTEX_ATTRIB_ARRAY_ENABLED:34338,VERTEX_ATTRIB_ARRAY_SIZE:34339,VERTEX_ATTRIB_ARRAY_STRIDE:34340,VERTEX_ATTRIB_ARRAY_TYPE:34341,VERTEX_ATTRIB_ARRAY_NORMALIZED:34922,VERTEX_ATTRIB_ARRAY_POINTER:34373,VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:34975,IMPLEMENTATION_COLOR_READ_TYPE:35738,IMPLEMENTATION_COLOR_READ_FORMAT:35739,COMPILE_STATUS:35713,LOW_FLOAT:36336,MEDIUM_FLOAT:36337,HIGH_FLOAT:36338,LOW_INT:36339,MEDIUM_INT:36340,HIGH_INT:36341,FRAMEBUFFER:36160,RENDERBUFFER:36161,RGBA4:32854,RGB5_A1:32855,RGB565:36194,DEPTH_COMPONENT16:33189,STENCIL_INDEX:6401,STENCIL_INDEX8:36168,DEPTH_STENCIL:34041,RENDERBUFFER_WIDTH:36162,RENDERBUFFER_HEIGHT:36163,RENDERBUFFER_INTERNAL_FORMAT:36164,RENDERBUFFER_RED_SIZE:36176,RENDERBUFFER_GREEN_SIZE:36177,RENDERBUFFER_BLUE_SIZE:36178,RENDERBUFFER_ALPHA_SIZE:36179,RENDERBUFFER_DEPTH_SIZE:36180,RENDERBUFFER_STENCIL_SIZE:36181,FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE:36048,FRAMEBUFFER_ATTACHMENT_OBJECT_NAME:36049,FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL:36050,FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE:36051,COLOR_ATTACHMENT0:36064,DEPTH_ATTACHMENT:36096,STENCIL_ATTACHMENT:36128,DEPTH_STENCIL_ATTACHMENT:33306,NONE:0,FRAMEBUFFER_COMPLETE:36053,FRAMEBUFFER_INCOMPLETE_ATTACHMENT:36054,FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:36055,FRAMEBUFFER_INCOMPLETE_DIMENSIONS:36057,FRAMEBUFFER_UNSUPPORTED:36061,FRAMEBUFFER_BINDING:36006,RENDERBUFFER_BINDING:36007,MAX_RENDERBUFFER_SIZE:34024,INVALID_FRAMEBUFFER_OPERATION:1286,UNPACK_FLIP_Y_WEBGL:37440,UNPACK_PREMULTIPLY_ALPHA_WEBGL:37441,CONTEXT_LOST_WEBGL:37442,UNPACK_COLORSPACE_CONVERSION_WEBGL:37443,BROWSER_DEFAULT_WEBGL:37444,READ_BUFFER:3074,UNPACK_ROW_LENGTH:3314,UNPACK_SKIP_ROWS:3315,UNPACK_SKIP_PIXELS:3316,PACK_ROW_LENGTH:3330,PACK_SKIP_ROWS:3331,PACK_SKIP_PIXELS:3332,COLOR:6144,DEPTH:6145,STENCIL:6146,RED:6403,RGB8:32849,RGBA8:32856,RGB10_A2:32857,TEXTURE_BINDING_3D:32874,UNPACK_SKIP_IMAGES:32877,UNPACK_IMAGE_HEIGHT:32878,TEXTURE_3D:32879,TEXTURE_WRAP_R:32882,MAX_3D_TEXTURE_SIZE:32883,UNSIGNED_INT_2_10_10_10_REV:33640,MAX_ELEMENTS_VERTICES:33e3,MAX_ELEMENTS_INDICES:33001,TEXTURE_MIN_LOD:33082,TEXTURE_MAX_LOD:33083,TEXTURE_BASE_LEVEL:33084,TEXTURE_MAX_LEVEL:33085,MIN:32775,MAX:32776,DEPTH_COMPONENT24:33190,MAX_TEXTURE_LOD_BIAS:34045,TEXTURE_COMPARE_MODE:34892,TEXTURE_COMPARE_FUNC:34893,CURRENT_QUERY:34917,QUERY_RESULT:34918,QUERY_RESULT_AVAILABLE:34919,STREAM_READ:35041,STREAM_COPY:35042,STATIC_READ:35045,STATIC_COPY:35046,DYNAMIC_READ:35049,DYNAMIC_COPY:35050,MAX_DRAW_BUFFERS:34852,DRAW_BUFFER0:34853,DRAW_BUFFER1:34854,DRAW_BUFFER2:34855,DRAW_BUFFER3:34856,DRAW_BUFFER4:34857,DRAW_BUFFER5:34858,DRAW_BUFFER6:34859,DRAW_BUFFER7:34860,DRAW_BUFFER8:34861,DRAW_BUFFER9:34862,DRAW_BUFFER10:34863,DRAW_BUFFER11:34864,DRAW_BUFFER12:34865,DRAW_BUFFER13:34866,DRAW_BUFFER14:34867,DRAW_BUFFER15:34868,MAX_FRAGMENT_UNIFORM_COMPONENTS:35657,MAX_VERTEX_UNIFORM_COMPONENTS:35658,SAMPLER_3D:35679,SAMPLER_2D_SHADOW:35682,FRAGMENT_SHADER_DERIVATIVE_HINT:35723,PIXEL_PACK_BUFFER:35051,PIXEL_UNPACK_BUFFER:35052,PIXEL_PACK_BUFFER_BINDING:35053,PIXEL_UNPACK_BUFFER_BINDING:35055,FLOAT_MAT2x3:35685,FLOAT_MAT2x4:35686,FLOAT_MAT3x2:35687,FLOAT_MAT3x4:35688,FLOAT_MAT4x2:35689,FLOAT_MAT4x3:35690,SRGB:35904,SRGB8:35905,SRGB8_ALPHA8:35907,COMPARE_REF_TO_TEXTURE:34894,RGBA32F:34836,RGB32F:34837,RGBA16F:34842,RGB16F:34843,VERTEX_ATTRIB_ARRAY_INTEGER:35069,MAX_ARRAY_TEXTURE_LAYERS:35071,MIN_PROGRAM_TEXEL_OFFSET:35076,MAX_PROGRAM_TEXEL_OFFSET:35077,MAX_VARYING_COMPONENTS:35659,TEXTURE_2D_ARRAY:35866,TEXTURE_BINDING_2D_ARRAY:35869,R11F_G11F_B10F:35898,UNSIGNED_INT_10F_11F_11F_REV:35899,RGB9_E5:35901,UNSIGNED_INT_5_9_9_9_REV:35902,TRANSFORM_FEEDBACK_BUFFER_MODE:35967,MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS:35968,TRANSFORM_FEEDBACK_VARYINGS:35971,TRANSFORM_FEEDBACK_BUFFER_START:35972,TRANSFORM_FEEDBACK_BUFFER_SIZE:35973,TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN:35976,RASTERIZER_DISCARD:35977,MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS:35978,MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS:35979,INTERLEAVED_ATTRIBS:35980,SEPARATE_ATTRIBS:35981,TRANSFORM_FEEDBACK_BUFFER:35982,TRANSFORM_FEEDBACK_BUFFER_BINDING:35983,RGBA32UI:36208,RGB32UI:36209,RGBA16UI:36214,RGB16UI:36215,RGBA8UI:36220,RGB8UI:36221,RGBA32I:36226,RGB32I:36227,RGBA16I:36232,RGB16I:36233,RGBA8I:36238,RGB8I:36239,RED_INTEGER:36244,RGB_INTEGER:36248,RGBA_INTEGER:36249,SAMPLER_2D_ARRAY:36289,SAMPLER_2D_ARRAY_SHADOW:36292,SAMPLER_CUBE_SHADOW:36293,UNSIGNED_INT_VEC2:36294,UNSIGNED_INT_VEC3:36295,UNSIGNED_INT_VEC4:36296,INT_SAMPLER_2D:36298,INT_SAMPLER_3D:36299,INT_SAMPLER_CUBE:36300,INT_SAMPLER_2D_ARRAY:36303,UNSIGNED_INT_SAMPLER_2D:36306,UNSIGNED_INT_SAMPLER_3D:36307,UNSIGNED_INT_SAMPLER_CUBE:36308,UNSIGNED_INT_SAMPLER_2D_ARRAY:36311,DEPTH_COMPONENT32F:36012,DEPTH32F_STENCIL8:36013,FLOAT_32_UNSIGNED_INT_24_8_REV:36269,FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING:33296,FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE:33297,FRAMEBUFFER_ATTACHMENT_RED_SIZE:33298,FRAMEBUFFER_ATTACHMENT_GREEN_SIZE:33299,FRAMEBUFFER_ATTACHMENT_BLUE_SIZE:33300,FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE:33301,FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE:33302,FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE:33303,FRAMEBUFFER_DEFAULT:33304,UNSIGNED_INT_24_8:34042,DEPTH24_STENCIL8:35056,UNSIGNED_NORMALIZED:35863,DRAW_FRAMEBUFFER_BINDING:36006,READ_FRAMEBUFFER:36008,DRAW_FRAMEBUFFER:36009,READ_FRAMEBUFFER_BINDING:36010,RENDERBUFFER_SAMPLES:36011,FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER:36052,MAX_COLOR_ATTACHMENTS:36063,COLOR_ATTACHMENT1:36065,COLOR_ATTACHMENT2:36066,COLOR_ATTACHMENT3:36067,COLOR_ATTACHMENT4:36068,COLOR_ATTACHMENT5:36069,COLOR_ATTACHMENT6:36070,COLOR_ATTACHMENT7:36071,COLOR_ATTACHMENT8:36072,COLOR_ATTACHMENT9:36073,COLOR_ATTACHMENT10:36074,COLOR_ATTACHMENT11:36075,COLOR_ATTACHMENT12:36076,COLOR_ATTACHMENT13:36077,COLOR_ATTACHMENT14:36078,COLOR_ATTACHMENT15:36079,FRAMEBUFFER_INCOMPLETE_MULTISAMPLE:36182,MAX_SAMPLES:36183,HALF_FLOAT:5131,RG:33319,RG_INTEGER:33320,R8:33321,RG8:33323,R16F:33325,R32F:33326,RG16F:33327,RG32F:33328,R8I:33329,R8UI:33330,R16I:33331,R16UI:33332,R32I:33333,R32UI:33334,RG8I:33335,RG8UI:33336,RG16I:33337,RG16UI:33338,RG32I:33339,RG32UI:33340,VERTEX_ARRAY_BINDING:34229,R8_SNORM:36756,RG8_SNORM:36757,RGB8_SNORM:36758,RGBA8_SNORM:36759,SIGNED_NORMALIZED:36764,COPY_READ_BUFFER:36662,COPY_WRITE_BUFFER:36663,COPY_READ_BUFFER_BINDING:36662,COPY_WRITE_BUFFER_BINDING:36663,UNIFORM_BUFFER:35345,UNIFORM_BUFFER_BINDING:35368,UNIFORM_BUFFER_START:35369,UNIFORM_BUFFER_SIZE:35370,MAX_VERTEX_UNIFORM_BLOCKS:35371,MAX_FRAGMENT_UNIFORM_BLOCKS:35373,MAX_COMBINED_UNIFORM_BLOCKS:35374,MAX_UNIFORM_BUFFER_BINDINGS:35375,MAX_UNIFORM_BLOCK_SIZE:35376,MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS:35377,MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS:35379,UNIFORM_BUFFER_OFFSET_ALIGNMENT:35380,ACTIVE_UNIFORM_BLOCKS:35382,UNIFORM_TYPE:35383,UNIFORM_SIZE:35384,UNIFORM_BLOCK_INDEX:35386,UNIFORM_OFFSET:35387,UNIFORM_ARRAY_STRIDE:35388,UNIFORM_MATRIX_STRIDE:35389,UNIFORM_IS_ROW_MAJOR:35390,UNIFORM_BLOCK_BINDING:35391,UNIFORM_BLOCK_DATA_SIZE:35392,UNIFORM_BLOCK_ACTIVE_UNIFORMS:35394,UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES:35395,UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER:35396,UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER:35398,INVALID_INDEX:4294967295,MAX_VERTEX_OUTPUT_COMPONENTS:37154,MAX_FRAGMENT_INPUT_COMPONENTS:37157,MAX_SERVER_WAIT_TIMEOUT:37137,OBJECT_TYPE:37138,SYNC_CONDITION:37139,SYNC_STATUS:37140,SYNC_FLAGS:37141,SYNC_FENCE:37142,SYNC_GPU_COMMANDS_COMPLETE:37143,UNSIGNALED:37144,SIGNALED:37145,ALREADY_SIGNALED:37146,TIMEOUT_EXPIRED:37147,CONDITION_SATISFIED:37148,WAIT_FAILED:37149,SYNC_FLUSH_COMMANDS_BIT:1,VERTEX_ATTRIB_ARRAY_DIVISOR:35070,ANY_SAMPLES_PASSED:35887,ANY_SAMPLES_PASSED_CONSERVATIVE:36202,SAMPLER_BINDING:35097,RGB10_A2UI:36975,INT_2_10_10_10_REV:36255,TRANSFORM_FEEDBACK:36386,TRANSFORM_FEEDBACK_PAUSED:36387,TRANSFORM_FEEDBACK_ACTIVE:36388,TRANSFORM_FEEDBACK_BINDING:36389,TEXTURE_IMMUTABLE_FORMAT:37167,MAX_ELEMENT_INDEX:36203,TEXTURE_IMMUTABLE_LEVELS:33503,TIMEOUT_IGNORED:-1,MAX_CLIENT_WAIT_TIMEOUT_WEBGL:37447,QUERY_COUNTER_BITS_EXT:34916,TIME_ELAPSED_EXT:35007,TIMESTAMP_EXT:36392,GPU_DISJOINT_EXT:36795,TEXTURE_MAX_ANISOTROPY_EXT:34046,MAX_TEXTURE_MAX_ANISOTROPY_EXT:34047,UNMASKED_VENDOR_WEBGL:37445,UNMASKED_RENDERER_WEBGL:37446,COMPLETION_STATUS_KHR:37297,COMPRESSED_RGB_S3TC_DXT1_EXT:33776,COMPRESSED_RGBA_S3TC_DXT1_EXT:33777,COMPRESSED_RGBA_S3TC_DXT3_EXT:33778,COMPRESSED_RGBA_S3TC_DXT5_EXT:33779,COMPRESSED_SRGB_S3TC_DXT1_EXT:35916,COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT:35917,COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT:35918,COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT:35919,COMPRESSED_R11_EAC:37488,COMPRESSED_SIGNED_R11_EAC:37489,COMPRESSED_RG11_EAC:37490,COMPRESSED_SIGNED_RG11_EAC:37491,COMPRESSED_RGB8_ETC2:37492,COMPRESSED_SRGB8_ETC2:37493,COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:37494,COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:37495,COMPRESSED_RGBA8_ETC2_EAC:37496,COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:37497,COMPRESSED_RGB_PVRTC_4BPPV1_IMG:35840,COMPRESSED_RGB_PVRTC_2BPPV1_IMG:35841,COMPRESSED_RGBA_PVRTC_4BPPV1_IMG:35842,COMPRESSED_RGBA_PVRTC_2BPPV1_IMG:35843,COMPRESSED_RGBA_ASTC_4x4_KHR:37808,COMPRESSED_RGBA_ASTC_5x4_KHR:37809,COMPRESSED_RGBA_ASTC_5x5_KHR:37810,COMPRESSED_RGBA_ASTC_6x5_KHR:37811,COMPRESSED_RGBA_ASTC_6x6_KHR:37812,COMPRESSED_RGBA_ASTC_8x5_KHR:37813,COMPRESSED_RGBA_ASTC_8x6_KHR:37814,COMPRESSED_RGBA_ASTC_8x8_KHR:37815,COMPRESSED_RGBA_ASTC_10x5_KHR:37816,COMPRESSED_RGBA_ASTC_10x6_KHR:37817,COMPRESSED_RGBA_ASTC_10x8_KHR:37818,COMPRESSED_RGBA_ASTC_10x10_KHR:37819,COMPRESSED_RGBA_ASTC_12x10_KHR:37820,COMPRESSED_RGBA_ASTC_12x12_KHR:37821,COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:37840,COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:37841,COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:37842,COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:37843,COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:37844,COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:37845,COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:37846,COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:37847,COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:37848,COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:37849,COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:37850,COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:37851,COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:37852,COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:37853},sa={[p.BYTE]:1,[p.UNSIGNED_BYTE]:1,[p.SHORT]:2,[p.UNSIGNED_SHORT]:2,[p.INT]:4,[p.UNSIGNED_INT]:4,[p.FLOAT]:4},So={[p.R8]:[p.RED,p.UNSIGNED_BYTE],[p.R8_SNORM]:[p.RED,p.BYTE],[p.R16F]:[p.RED,p.FLOAT],[p.R32F]:[p.RED,p.FLOAT],[p.R8UI]:[p.RED_INTEGER,p.UNSIGNED_BYTE],[p.R8I]:[p.RED_INTEGER,p.BYTE],[p.R16UI]:[p.RED_INTEGER,p.UNSIGNED_SHORT],[p.R16I]:[p.RED_INTEGER,p.SHORT],[p.R32UI]:[p.RED_INTEGER,p.UNSIGNED_INT],[p.R32I]:[p.RED_INTEGER,p.INT],[p.RG8]:[p.RG,p.UNSIGNED_BYTE],[p.RG8_SNORM]:[p.RG,p.BYTE],[p.RG16F]:[p.RG,p.FLOAT],[p.RG32F]:[p.RG,p.FLOAT],[p.RG8UI]:[p.RG_INTEGER,p.UNSIGNED_BYTE],[p.RG8I]:[p.RG_INTEGER,p.BYTE],[p.RG16UI]:[p.RG_INTEGER,p.UNSIGNED_SHORT],[p.RG16I]:[p.RG_INTEGER,p.SHORT],[p.RG32UI]:[p.RG_INTEGER,p.UNSIGNED_INT],[p.RG32I]:[p.RG_INTEGER,p.INT],[p.RGB8]:[p.RGB,p.UNSIGNED_BYTE],[p.SRGB8]:[p.RGB,p.UNSIGNED_BYTE],[p.RGB565]:[p.RGB,p.UNSIGNED_SHORT_5_6_5],[p.RGB8_SNORM]:[p.RGB,p.BYTE],[p.R11F_G11F_B10F]:[p.RGB,p.UNSIGNED_INT_10F_11F_11F_REV],[p.RGB9_E5]:[p.RGB,p.UNSIGNED_INT_5_9_9_9_REV],[p.RGB16F]:[p.RGB,p.FLOAT],[p.RGB32F]:[p.RGB,p.FLOAT],[p.RGB8UI]:[p.RGB_INTEGER,p.UNSIGNED_BYTE],[p.RGB8I]:[p.RGB_INTEGER,p.BYTE],[p.RGB16UI]:[p.RGB_INTEGER,p.UNSIGNED_SHORT],[p.RGB16I]:[p.RGB_INTEGER,p.SHORT],[p.RGB32UI]:[p.RGB_INTEGER,p.UNSIGNED_INT],[p.RGB32I]:[p.RGB_INTEGER,p.INT],[p.RGBA8]:[p.RGBA,p.UNSIGNED_BYTE],[p.SRGB8_ALPHA8]:[p.RGBA,p.UNSIGNED_BYTE],[p.RGBA8_SNORM]:[p.RGBA,p.BYTE],[p.RGB5_A1]:[p.RGBA,p.UNSIGNED_SHORT_5_5_5_1],[p.RGBA4]:[p.RGBA,p.UNSIGNED_SHORT_4_4_4_4],[p.RGB10_A2]:[p.RGBA,p.UNSIGNED_INT_2_10_10_10_REV],[p.RGBA16F]:[p.RGBA,p.FLOAT],[p.RGBA32F]:[p.RGBA,p.FLOAT],[p.RGBA8UI]:[p.RGBA_INTEGER,p.UNSIGNED_BYTE],[p.RGBA8I]:[p.RGBA_INTEGER,p.BYTE],[p.RGB10_A2UI]:[p.RGBA_INTEGER,p.UNSIGNED_INT_2_10_10_10_REV],[p.RGBA16UI]:[p.RGBA_INTEGER,p.UNSIGNED_SHORT],[p.RGBA16I]:[p.RGBA_INTEGER,p.SHORT],[p.RGBA32I]:[p.RGBA_INTEGER,p.INT],[p.RGBA32UI]:[p.RGBA_INTEGER,p.UNSIGNED_INT],[p.DEPTH_COMPONENT16]:[p.DEPTH_COMPONENT,p.UNSIGNED_SHORT],[p.DEPTH_COMPONENT24]:[p.DEPTH_COMPONENT,p.UNSIGNED_INT],[p.DEPTH_COMPONENT32F]:[p.DEPTH_COMPONENT,p.FLOAT],[p.DEPTH24_STENCIL8]:[p.DEPTH_STENCIL,p.UNSIGNED_INT_24_8],[p.DEPTH32F_STENCIL8]:[p.DEPTH_STENCIL,p.FLOAT_32_UNSIGNED_INT_24_8_REV]},ca={[p.COMPRESSED_RGB_S3TC_DXT1_EXT]:!0,[p.COMPRESSED_RGBA_S3TC_DXT1_EXT]:!0,[p.COMPRESSED_RGBA_S3TC_DXT3_EXT]:!0,[p.COMPRESSED_RGBA_S3TC_DXT5_EXT]:!0,[p.COMPRESSED_SRGB_S3TC_DXT1_EXT]:!0,[p.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT]:!0,[p.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT]:!0,[p.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT]:!0,[p.COMPRESSED_R11_EAC]:!0,[p.COMPRESSED_SIGNED_R11_EAC]:!0,[p.COMPRESSED_RG11_EAC]:!0,[p.COMPRESSED_SIGNED_RG11_EAC]:!0,[p.COMPRESSED_RGB8_ETC2]:!0,[p.COMPRESSED_SRGB8_ETC2]:!0,[p.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2]:!0,[p.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2]:!0,[p.COMPRESSED_RGBA8_ETC2_EAC]:!0,[p.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC]:!0,[p.COMPRESSED_RGBA_ASTC_4x4_KHR]:!0,[p.COMPRESSED_RGBA_ASTC_5x4_KHR]:!0,[p.COMPRESSED_RGBA_ASTC_5x5_KHR]:!0,[p.COMPRESSED_RGBA_ASTC_6x5_KHR]:!0,[p.COMPRESSED_RGBA_ASTC_6x6_KHR]:!0,[p.COMPRESSED_RGBA_ASTC_8x5_KHR]:!0,[p.COMPRESSED_RGBA_ASTC_8x6_KHR]:!0,[p.COMPRESSED_RGBA_ASTC_8x8_KHR]:!0,[p.COMPRESSED_RGBA_ASTC_10x5_KHR]:!0,[p.COMPRESSED_RGBA_ASTC_10x6_KHR]:!0,[p.COMPRESSED_RGBA_ASTC_10x8_KHR]:!0,[p.COMPRESSED_RGBA_ASTC_10x10_KHR]:!0,[p.COMPRESSED_RGBA_ASTC_12x10_KHR]:!0,[p.COMPRESSED_RGBA_ASTC_12x12_KHR]:!0,[p.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR]:!0,[p.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR]:!0,[p.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR]:!0,[p.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR]:!0,[p.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR]:!0,[p.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR]:!0,[p.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR]:!0,[p.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR]:!0,[p.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR]:!0,[p.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR]:!0,[p.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR]:!0,[p.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR]:!0,[p.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR]:!0,[p.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR]:!0,[p.COMPRESSED_RGB_PVRTC_4BPPV1_IMG]:!0,[p.COMPRESSED_RGB_PVRTC_2BPPV1_IMG]:!0,[p.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG]:!0,[p.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG]:!0},Fe={},ua=new Array(1),Vr={},To={[p.UNSIGNED_BYTE]:{[p.RED]:p.R8,[p.RG]:p.RG8,[p.RGB]:p.RGB8,[p.RGBA]:p.RGBA8},[p.UNSIGNED_SHORT]:{[p.DEPTH_COMPONENT]:p.DEPTH_COMPONENT16},[p.FLOAT]:{[p.RED]:p.R16F,[p.RG]:p.RG16F,[p.RGB]:p.RGB16F,[p.RGBA]:p.RGBA16F,[p.DEPTH_COMPONENT]:p.DEPTH_COMPONENT32F}};var ws=class{constructor(t,r,n){if(this.gl=t,this.texture=null,this.appState=r,this.compressed=ca[n.internalFormat],n.format!==void 0&&(console.warn("Cubemap option 'format' is deprecated and will be removed. Use 'internalFormat' with a sized format instead."),this.compressed=Boolean(ca[n.format]),n.type===void 0&&(n.type=n.format===p.DEPTH_COMPONENT?p.UNSIGNED_SHORT:p.UNSIGNED_BYTE),n.internalFormat===void 0&&(this.compressed?n.internalFormat=n.format:n.internalFormat=To[n.type][n.format])),this.compressed)this.internalFormat=n.internalFormat,this.format=n.internalFormat,this.type=p.UNSIGNED_BYTE;else{this.internalFormat=n.internalFormat!==void 0?n.internalFormat:p.RGBA8;let O=So[this.internalFormat];this.format=O[0],this.type=n.type!==void 0?n.type:O[1]}this.currentUnit=-1;let a=Array.isArray(n.negX),s=a?n.negX[0]:n.negX,{width:f=s.width,height:h=s.height,flipY:g=!1,premultiplyAlpha:l=!1,minFilter:u=s?p.LINEAR_MIPMAP_NEAREST:p.NEAREST,magFilter:d=s?p.LINEAR:p.NEAREST,wrapS:C=p.REPEAT,wrapT:M=p.REPEAT,compareMode:L=p.NONE,compareFunc:v=p.LEQUAL,minLOD:y=null,maxLOD:I=null,baseLevel:P=null,maxLevel:D=null,maxAnisotropy:Z=1}=n;this.width=f,this.height=h,this.flipY=g,this.premultiplyAlpha=l,this.minFilter=u,this.magFilter=d,this.wrapS=C,this.wrapT=M,this.compareMode=L,this.compareFunc=v,this.minLOD=y,this.maxLOD=I,this.baseLevel=P,this.maxLevel=D,this.maxAnisotropy=Math.min(Z,Fe.MAX_TEXTURE_ANISOTROPY),this.mipmaps=u===p.LINEAR_MIPMAP_NEAREST||u===p.LINEAR_MIPMAP_LINEAR,this.miplevelsProvided=a&&n.negX.length>1,this.levels=this.mipmaps?Math.floor(Math.log2(Math.min(this.width,this.height)))+1:1,this.restore(n)}restore(t=Vr){this.texture=this.gl.createTexture(),this.currentUnit!==-1&&(this.appState.textures[this.currentUnit]=null),this.bind(0),this.gl.texParameteri(p.TEXTURE_CUBE_MAP,p.TEXTURE_MAG_FILTER,this.magFilter),this.gl.texParameteri(p.TEXTURE_CUBE_MAP,p.TEXTURE_MIN_FILTER,this.minFilter),this.gl.texParameteri(p.TEXTURE_CUBE_MAP,p.TEXTURE_WRAP_S,this.wrapS),this.gl.texParameteri(p.TEXTURE_CUBE_MAP,p.TEXTURE_WRAP_T,this.wrapT),this.gl.texParameteri(p.TEXTURE_CUBE_MAP,p.TEXTURE_COMPARE_FUNC,this.compareFunc),this.gl.texParameteri(p.TEXTURE_CUBE_MAP,p.TEXTURE_COMPARE_MODE,this.compareMode),this.baseLevel!==null&&this.gl.texParameteri(p.TEXTURE_CUBE_MAP,p.TEXTURE_BASE_LEVEL,this.baseLevel),this.maxLevel!==null&&this.gl.texParameteri(p.TEXTURE_CUBE_MAP,p.TEXTURE_MAX_LEVEL,this.maxLevel),this.minLOD!==null&&this.gl.texParameteri(p.TEXTURE_CUBE_MAP,p.TEXTURE_MIN_LOD,this.minLOD),this.maxLOD!==null&&this.gl.texParameteri(p.TEXTURE_CUBE_MAP,p.TEXTURE_MAX_LOD,this.maxLOD),this.maxAnisotropy>1&&this.gl.texParameteri(p.TEXTURE_CUBE_MAP,p.TEXTURE_MAX_ANISOTROPY_EXT,this.maxAnisotropy),this.gl.texStorage2D(p.TEXTURE_CUBE_MAP,this.levels,this.internalFormat,this.width,this.height);let{negX:r,posX:n,negY:a,posY:s,negZ:f,posZ:h}=t;return r&&(this.faceData(p.TEXTURE_CUBE_MAP_NEGATIVE_X,r),this.faceData(p.TEXTURE_CUBE_MAP_POSITIVE_X,n),this.faceData(p.TEXTURE_CUBE_MAP_NEGATIVE_Y,a),this.faceData(p.TEXTURE_CUBE_MAP_POSITIVE_Y,s),this.faceData(p.TEXTURE_CUBE_MAP_NEGATIVE_Z,f),this.faceData(p.TEXTURE_CUBE_MAP_POSITIVE_Z,h)),this.mipmaps&&!this.miplevelsProvided&&this.gl.generateMipmap(p.TEXTURE_CUBE_MAP),this}delete(){return this.texture&&(this.gl.deleteTexture(this.texture),this.texture=null,this.appState.textures[this.currentUnit]=null,this.currentUnit=-1),this}faceData(t,r){Array.isArray(r)||(ua[0]=r,r=ua);let n=this.mipmaps?r.length:1,a=this.width,s=this.height,f;if(this.gl.pixelStorei(p.UNPACK_FLIP_Y_WEBGL,this.flipY),this.gl.pixelStorei(p.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.compressed)for(f=0;f<n;++f)this.gl.compressedTexSubImage2D(t,f,0,0,a,s,this.format,r[f]),a=Math.max(a>>1,1),s=Math.max(s>>1,1);else for(f=0;f<n;++f)this.gl.texSubImage2D(t,f,0,0,a,s,this.format,this.type,r[f]),a=Math.max(a>>1,1),s=Math.max(s>>1,1);return this}bind(t){let r=this.appState.textures[t];return this.appState.activeTexture!==t&&(this.gl.activeTexture(p.TEXTURE0+t),this.appState.activeTexture=t),r!==this&&(r&&(r.currentUnit=-1),this.currentUnit!==-1&&(this.appState.textures[this.currentUnit]=null),this.gl.bindTexture(p.TEXTURE_CUBE_MAP,this.texture),this.appState.textures[t]=this,this.currentUnit=t),this}};var Cs=class{constructor(t,r,n,a=null,s){this.gl=t,this.currentProgram=n,this.drawPrimitive=p.TRIANGLES,this.currentVertexArray=a,this.currentTransformFeedback=null,this.appState=r,this.uniformIndices={},this.uniformNames=new Array(Fe.MAX_UNIFORMS),this.uniformValues=new Array(Fe.MAX_UNIFORMS),this.uniformCount=0,this.uniformBuffers=new Array(Fe.MAX_UNIFORM_BUFFERS),this.uniformBlockNames=new Array(Fe.MAX_UNIFORM_BUFFERS),this.uniformBlockCount=0,this.textures=new Array(Fe.MAX_TEXTURE_UNITS),this.textureCount=0,this.offsets=new Int32Array(1),this.numElements=new Int32Array(1),this.numInstances=new Int32Array(1),this.numDraws=1,this.drawCountsFromVertexArray=!0,s!==void 0&&(console.warn("Primitive argument to 'App.createDrawCall' is deprecated and will be removed. Use 'DrawCall.primitive' instead."),this.primitive(s))}primitive(t){return this.drawPrimitive=t,this}transformFeedback(t){return this.currentTransformFeedback=t,this}uniform(t,r){let n=this.uniformIndices[t];return n===void 0&&(n=this.uniformCount++,this.uniformIndices[t]=n,this.uniformNames[n]=t),this.uniformValues[n]=r,this}texture(t,r){let n=this.currentProgram.samplers[t];return this.textures[n]=r,this}uniformBlock(t,r){let n=this.currentProgram.uniformBlocks[t];return this.uniformBuffers[n]=r,this}drawRanges(...t){this.numDraws=t.length,this.offsets.length<this.numDraws&&(this.offsets=new Int32Array(this.numDraws)),this.numElements.length<this.numDraws&&(this.numElements=new Int32Array(this.numDraws)),this.numInstances.length<this.numDraws&&(this.numInstances=new Int32Array(this.numDraws));for(let r=0;r<this.numDraws;++r){let n=t[r];this.offsets[r]=n[0],this.numElements[r]=n[1],this.numInstances[r]=n[2]||1}return this.drawCountsFromVertexArray=!1,this}draw(){let t=this.uniformNames,r=this.uniformValues,n=this.uniformBuffers,a=this.currentProgram.uniformBlockCount,s=this.textures,f=this.currentProgram.samplerCount,h=!1;this.currentProgram.bind(),this.currentVertexArray&&(this.currentVertexArray.bind(),h=this.currentVertexArray.indexed,this.drawCountsFromVertexArray&&(this.numElements[0]=this.currentVertexArray.numElements,this.numInstances[0]=this.currentVertexArray.numInstances));for(let g=0;g<this.uniformCount;++g)this.currentProgram.uniform(t[g],r[g]);for(let g=0;g<a;++g)n[g].bind(g);for(let g=0;g<f;++g)s[g].bind(g);if(this.currentTransformFeedback?(this.currentTransformFeedback.bind(),this.gl.beginTransformFeedback(this.drawPrimitive)):this.appState.transformFeedback&&(this.gl.bindTransformFeedback(p.TRANSFORM_FEEDBACK,null),this.appState.transformFeedback=null),Fe.MULTI_DRAW_INSTANCED){let g=this.appState.extensions.multiDrawInstanced;h?g.multiDrawElementsInstancedWEBGL(this.drawPrimitive,this.numElements,0,this.currentVertexArray.indexType,this.offsets,0,this.numInstances,0,this.numDraws):g.multiDrawArraysInstancedWEBGL(this.drawPrimitive,this.offsets,0,this.numElements,0,this.numInstances,0,this.numDraws)}else if(h)for(let g=0;g<this.numDraws;++g)this.gl.drawElementsInstanced(this.drawPrimitive,this.numElements[g],this.currentVertexArray.indexType,this.offsets[g],this.numInstances[g]);else for(let g=0;g<this.numDraws;++g)this.gl.drawArraysInstanced(this.drawPrimitive,this.offsets[g],this.numElements[g],this.numInstances[g]);return this.currentTransformFeedback&&this.gl.endTransformFeedback(),this}};var pn=class{constructor(t,r,n,a,s=a.width,f=a.height,h,g,l=Vr){if(this.gl=t,this.binding=n,this.texture=null,this.width=s||0,this.height=f||0,this.depth=h||0,this.is3D=g,this.appState=r,this.compressed=Boolean(ca[l.internalFormat]),l.format!==void 0&&(console.warn("Texture option 'format' is deprecated and will be removed. Use 'internalFormat' with a sized format instead."),this.compressed=Boolean(ca[l.format]),l.type===void 0&&(l.type=l.format===p.DEPTH_COMPONENT?p.UNSIGNED_SHORT:p.UNSIGNED_BYTE),l.internalFormat===void 0&&(this.compressed?l.internalFormat=l.format:l.internalFormat=To[l.type][l.format])),this.compressed)this.internalFormat=l.internalFormat,this.format=this.internalFormat,this.type=p.UNSIGNED_BYTE;else{this.internalFormat=l.internalFormat!==void 0?l.internalFormat:p.RGBA8;let V=So[this.internalFormat];this.format=V[0],this.type=l.type!==void 0?l.type:V[1]}this.currentUnit=-1;let{minFilter:u=a?p.LINEAR_MIPMAP_NEAREST:p.NEAREST,magFilter:d=a?p.LINEAR:p.NEAREST,wrapS:C=p.REPEAT,wrapT:M=p.REPEAT,wrapR:L=p.REPEAT,compareMode:v=p.NONE,compareFunc:y=p.LEQUAL,minLOD:I=null,maxLOD:P=null,baseLevel:D=null,maxLevel:Z=null,maxAnisotropy:O=1,flipY:B=!1,premultiplyAlpha:K=!1}=l;this.minFilter=u,this.magFilter=d,this.wrapS=C,this.wrapT=M,this.wrapR=L,this.compareMode=v,this.compareFunc=y,this.minLOD=I,this.maxLOD=P,this.baseLevel=D,this.maxLevel=Z,this.maxAnisotropy=Math.min(O,Fe.MAX_TEXTURE_ANISOTROPY),this.flipY=B,this.premultiplyAlpha=K,this.mipmaps=u===p.LINEAR_MIPMAP_NEAREST||u===p.LINEAR_MIPMAP_LINEAR,this.restore(a)}restore(t){return this.texture=null,this.resize(this.width,this.height,this.depth),t&&this.data(t),this}resize(t,r,n){if(n=n||0,this.texture&&t===this.width&&r===this.height&&n===this.depth)return this;this.gl.deleteTexture(this.texture),this.currentUnit!==-1&&(this.appState.textures[this.currentUnit]=null),this.texture=this.gl.createTexture(),this.bind(Math.max(this.currentUnit,0)),this.width=t,this.height=r,this.depth=n,this.gl.texParameteri(this.binding,p.TEXTURE_MIN_FILTER,this.minFilter),this.gl.texParameteri(this.binding,p.TEXTURE_MAG_FILTER,this.magFilter),this.gl.texParameteri(this.binding,p.TEXTURE_WRAP_S,this.wrapS),this.gl.texParameteri(this.binding,p.TEXTURE_WRAP_T,this.wrapT),this.gl.texParameteri(this.binding,p.TEXTURE_WRAP_R,this.wrapR),this.gl.texParameteri(this.binding,p.TEXTURE_COMPARE_FUNC,this.compareFunc),this.gl.texParameteri(this.binding,p.TEXTURE_COMPARE_MODE,this.compareMode),this.minLOD!==null&&this.gl.texParameterf(this.binding,p.TEXTURE_MIN_LOD,this.minLOD),this.maxLOD!==null&&this.gl.texParameterf(this.binding,p.TEXTURE_MAX_LOD,this.maxLOD),this.baseLevel!==null&&this.gl.texParameteri(this.binding,p.TEXTURE_BASE_LEVEL,this.baseLevel),this.maxLevel!==null&&this.gl.texParameteri(this.binding,p.TEXTURE_MAX_LEVEL,this.maxLevel),this.maxAnisotropy>1&&this.gl.texParameteri(this.binding,p.TEXTURE_MAX_ANISOTROPY_EXT,this.maxAnisotropy);let a;return this.is3D?(this.mipmaps?a=Math.floor(Math.log2(Math.max(Math.max(this.width,this.height),this.depth)))+1:a=1,this.gl.texStorage3D(this.binding,a,this.internalFormat,this.width,this.height,this.depth)):(this.mipmaps?a=Math.floor(Math.log2(Math.max(this.width,this.height)))+1:a=1,this.gl.texStorage2D(this.binding,a,this.internalFormat,this.width,this.height)),this}data(t){Array.isArray(t)||(ua[0]=t,t=ua);let r=this.mipmaps?t.length:1,n=this.width,a=this.height,s=this.depth,f=this.mipmaps&&t.length===1,h;if(this.bind(Math.max(this.currentUnit,0)),this.gl.pixelStorei(p.UNPACK_FLIP_Y_WEBGL,this.flipY),this.gl.pixelStorei(p.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.compressed)if(this.is3D)for(h=0;h<r;++h)this.gl.compressedTexSubImage3D(this.binding,h,0,0,0,n,a,s,this.format,t[h]),n=Math.max(n>>1,1),a=Math.max(a>>1,1),s=Math.max(s>>1,1);else for(h=0;h<r;++h)this.gl.compressedTexSubImage2D(this.binding,h,0,0,n,a,this.format,t[h]),n=Math.max(n>>1,1),a=Math.max(a>>1,1);else if(this.is3D)for(h=0;h<r;++h)this.gl.texSubImage3D(this.binding,h,0,0,0,n,a,s,this.format,this.type,t[h]),n=Math.max(n>>1,1),a=Math.max(a>>1,1),s=Math.max(s>>1,1);else for(h=0;h<r;++h)this.gl.texSubImage2D(this.binding,h,0,0,n,a,this.format,this.type,t[h]),n=Math.max(n>>1,1),a=Math.max(a>>1,1);return f&&this.gl.generateMipmap(this.binding),this}delete(){return this.texture&&(this.gl.deleteTexture(this.texture),this.texture=null,this.currentUnit!==-1&&this.appState.textures[this.currentUnit]===this&&(this.appState.textures[this.currentUnit]=null,this.currentUnit=-1)),this}bind(t){let r=this.appState.textures[t];return this.appState.activeTexture!==t&&(this.gl.activeTexture(p.TEXTURE0+t),this.appState.activeTexture=t),r!==this&&(r&&(r.currentUnit=-1),this.currentUnit!==-1&&(this.appState.textures[this.currentUnit]=null),this.gl.bindTexture(this.binding,this.texture),this.appState.textures[t]=this,this.currentUnit=t),this}};var la=class{constructor(t,r,n,a,s=0){this.gl=t,this.renderbuffer=null,this.width=r,this.height=n,this.internalFormat=a,this.samples=s,this.restore()}restore(){return this.renderbuffer=this.gl.createRenderbuffer(),this.resize(this.width,this.height),this}resize(t,r){return this.width=t,this.height=r,this.gl.bindRenderbuffer(p.RENDERBUFFER,this.renderbuffer),this.gl.renderbufferStorageMultisample(p.RENDERBUFFER,this.samples,this.internalFormat,this.width,this.height),this.gl.bindRenderbuffer(p.RENDERBUFFER,null),this}delete(){return this.gl.deleteRenderbuffer(this.renderbuffer),this.renderbuffer=null,this}};var As=class{constructor(t,r){this.gl=t,this.framebuffer=null,this.appState=r,this.numColorTargets=0,this.colorAttachments=[],this.colorAttachmentEnums=[],this.colorAttachmentTargets=[],this.depthAttachment=null,this.depthAttachmentTarget=null,this.width=0,this.height=0,this.restore()}restore(){let t=this.appState.framebuffers;for(let r in t)t[r]===this&&(t[r]=null);return this.framebuffer=this.gl.createFramebuffer(),this}colorTarget(t,r,n=r.is3D?0:p.TEXTURE_2D){if(t>=this.numColorTargets){let f=t+1;this.colorAttachmentEnums.length=f,this.colorAttachments.length=f,this.colorAttachmentTargets.length=f;for(let h=this.numColorTargets;h<f-1;++h)this.colorAttachmentEnums[h]=p.NONE,this.colorAttachments[h]=null,this.colorAttachmentTargets[h]=0;this.numColorTargets=f}this.colorAttachmentEnums[t]=p.COLOR_ATTACHMENT0+t,this.colorAttachments[t]=r,this.colorAttachmentTargets[t]=n;let a=this.bindAndCaptureState(),s=this.appState.drawFramebufferBinding;return r instanceof la?this.gl.framebufferRenderbuffer(s,this.colorAttachmentEnums[t],p.RENDERBUFFER,r.renderbuffer):r.is3D?this.gl.framebufferTextureLayer(s,this.colorAttachmentEnums[t],r.texture,0,n):this.gl.framebufferTexture2D(s,this.colorAttachmentEnums[t],n,r.texture,0),this.gl.drawBuffers(this.colorAttachmentEnums),this.width=r.width,this.height=r.height,this.restoreState(a),this}depthTarget(t,r=t.is3D?0:p.TEXTURE_2D){let n=this.bindAndCaptureState(),a=this.appState.drawFramebufferBinding;return this.depthAttachment=t,this.depthAttachmentTarget=r,t instanceof la?this.gl.framebufferRenderbuffer(a,p.DEPTH_ATTACHMENT,p.RENDERBUFFER,t.renderbuffer):t.is3D?this.gl.framebufferTextureLayer(a,p.DEPTH_ATTACHMENT,t.texture,0,r):this.gl.framebufferTexture2D(a,p.DEPTH_ATTACHMENT,r,t.texture,0),this.width=t.width,this.height=t.height,this.restoreState(n),this}resize(t=this.gl.drawingBufferWidth,r=this.gl.drawingBufferHeight){let n=this.bindAndCaptureState(),a=this.appState.drawFramebufferBinding;for(let s=0;s<this.numColorTargets;++s){let f=this.colorAttachments[s];!f||(f.resize(t,r),f instanceof pn&&(f.is3D?this.gl.framebufferTextureLayer(a,this.colorAttachmentEnums[s],f.texture,0,this.colorAttachmentTargets[s]):this.gl.framebufferTexture2D(a,this.colorAttachmentEnums[s],this.colorAttachmentTargets[s],f.texture,0)))}return this.depthAttachment&&(this.depthAttachment.resize(t,r),this.depthAttachment instanceof pn&&(this.depthAttachment.is3D?this.gl.framebufferTextureLayer(a,p.DEPTH_ATTACHMENT,this.depthAttachment.texture,0,this.depthAttachmentTarget):this.gl.framebufferTexture2D(a,p.DEPTH_ATTACHMENT,this.depthAttachmentTarget,this.depthAttachment.texture,0))),this.width=t,this.height=r,this.restoreState(n),this}delete(){if(this.framebuffer){this.gl.deleteFramebuffer(this.framebuffer),this.framebuffer=null;let t=this.appState.framebuffers;for(let r in t)t[r]===this&&(this.gl.bindFramebuffer(r,null),t[r]=null)}return this}getStatus(){let t=this.bindAndCaptureState(),r=this.appState.drawFramebufferBinding,n=this.gl.checkFramebufferStatus(r);return this.restoreState(t),n}bindForDraw(){let t=this.appState.drawFramebufferBinding,r=this.appState.framebuffers;return r[t]!==this&&(this.gl.bindFramebuffer(t,this.framebuffer),r[t]=this),this}bindForRead(){let t=this.appState.readFramebufferBinding,r=this.appState.framebuffers;return r[t]!==this&&(this.gl.bindFramebuffer(t,this.framebuffer),r[t]=this),this}bindAndCaptureState(){let t=this.appState.drawFramebufferBinding,r=this.appState.framebuffers[t];return r!==this&&this.gl.bindFramebuffer(t,this.framebuffer),r}restoreState(t){if(t!==this){let r=this.appState.drawFramebufferBinding;this.gl.bindFramebuffer(r,t?t.framebuffer:null)}return this}get colorTextures(){return console.error("Framebuffer.colorTextures is deprecated and will be removed. Please use Framebuffer.colorAttachments."),this.colorAttachments}get depthTexture(){return console.error("Framebuffer.depthTexture is deprecated and will be removed. Please use Framebuffer.depthAttachment."),this.depthAttachment}};var vn=class{constructor(t,r,n,a){this.gl=t,this.appState=r,this.shader=null,this.type=n,this.source=a.trim(),this.restore()}restore(){return this.shader=this.gl.createShader(this.type),this.gl.shaderSource(this.shader,this.source),this.gl.compileShader(this.shader),this}translatedSource(){return Fe.DEBUG_SHADERS?this.appState.extensions.debugShaders.getTranslatedShaderSource(this.shader):"(Unavailable)"}delete(){return this.shader&&(this.gl.deleteShader(this.shader),this.shader=null),this}checkCompilation(){if(!this.gl.getShaderParameter(this.shader,p.COMPILE_STATUS)){let t,r;for(console.error(this.gl.getShaderInfoLog(this.shader)),r=this.source.split(`
`),t=0;t<r.length;++t)console.error(`${t+1}: ${r[t]}`)}return this}};var ze={};ze[p.BOOL]="uniform1i";ze[p.INT]="uniform1i";ze[p.SAMPLER_2D]="uniform1i";ze[p.INT_SAMPLER_2D]="uniform1i";ze[p.UNSIGNED_INT_SAMPLER_2D]="uniform1i";ze[p.SAMPLER_2D_SHADOW]="uniform1i";ze[p.SAMPLER_2D_ARRAY]="uniform1i";ze[p.INT_SAMPLER_2D_ARRAY]="uniform1i";ze[p.UNSIGNED_INT_SAMPLER_2D_ARRAY]="uniform1i";ze[p.SAMPLER_2D_ARRAY_SHADOW]="uniform1i";ze[p.SAMPLER_CUBE]="uniform1i";ze[p.INT_SAMPLER_CUBE]="uniform1i";ze[p.UNSIGNED_INT_SAMPLER_CUBE]="uniform1i";ze[p.SAMPLER_CUBE_SHADOW]="uniform1i";ze[p.SAMPLER_3D]="uniform1i";ze[p.INT_SAMPLER_3D]="uniform1i";ze[p.UNSIGNED_INT_SAMPLER_3D]="uniform1i";ze[p.UNSIGNED_INT]="uniform1ui";ze[p.FLOAT]="uniform1f";ze[p.FLOAT_VEC2]="uniform2f";ze[p.FLOAT_VEC3]="uniform3f";ze[p.FLOAT_VEC4]="uniform4f";ze[p.INT_VEC2]="uniform2i";ze[p.INT_VEC3]="uniform3i";ze[p.INT_VEC4]="uniform4i";ze[p.UNSIGNED_INT_VEC2]="uniform2ui";ze[p.UNSIGNED_INT_VEC3]="uniform3ui";ze[p.UNSIGNED_INT_VEC4]="uniform4ui";ze[p.BOOL_VEC2]="uniform2i";ze[p.BOOL_VEC3]="uniform3i";ze[p.BOOL_VEC4]="uniform4i";ze[p.FLOAT_MAT2]="uniformMatrix2fv";ze[p.FLOAT_MAT3]="uniformMatrix3fv";ze[p.FLOAT_MAT4]="uniformMatrix4fv";ze[p.FLOAT_MAT2x3]="uniformMatrix2x3fv";ze[p.FLOAT_MAT2x4]="uniformMatrix2x4fv";ze[p.FLOAT_MAT3x2]="uniformMatrix3x2fv";ze[p.FLOAT_MAT3x4]="uniformMatrix3x4fv";ze[p.FLOAT_MAT4x2]="uniformMatrix4x2fv";ze[p.FLOAT_MAT4x3]="uniformMatrix4x3fv";var We={};We[p.BOOL]=1;We[p.INT]=1;We[p.SAMPLER_2D]=1;We[p.INT_SAMPLER_2D]=1;We[p.UNSIGNED_INT_SAMPLER_2D]=1;We[p.SAMPLER_2D_SHADOW]=1;We[p.SAMPLER_2D_ARRAY]=1;We[p.INT_SAMPLER_2D_ARRAY]=1;We[p.UNSIGNED_INT_SAMPLER_2D_ARRAY]=1;We[p.SAMPLER_2D_ARRAY_SHADOW]=1;We[p.SAMPLER_CUBE]=1;We[p.INT_SAMPLER_CUBE]=1;We[p.UNSIGNED_INT_SAMPLER_CUBE]=1;We[p.SAMPLER_CUBE_SHADOW]=1;We[p.SAMPLER_3D]=1;We[p.INT_SAMPLER_3D]=1;We[p.UNSIGNED_INT_SAMPLER_3D]=1;We[p.UNSIGNED_INT]=1;We[p.FLOAT]=1;We[p.FLOAT_VEC2]=2;We[p.FLOAT_VEC3]=3;We[p.FLOAT_VEC4]=4;We[p.INT_VEC2]=2;We[p.INT_VEC3]=3;We[p.INT_VEC4]=4;We[p.UNSIGNED_INT_VEC2]=2;We[p.UNSIGNED_INT_VEC3]=3;We[p.UNSIGNED_INT_VEC4]=4;We[p.BOOL_VEC2]=2;We[p.BOOL_VEC3]=3;We[p.BOOL_VEC4]=4;We[p.FLOAT_MAT2]=4;We[p.FLOAT_MAT3]=9;We[p.FLOAT_MAT4]=16;We[p.FLOAT_MAT2x3]=6;We[p.FLOAT_MAT2x4]=8;We[p.FLOAT_MAT3x2]=6;We[p.FLOAT_MAT3x4]=12;We[p.FLOAT_MAT4x2]=8;We[p.FLOAT_MAT4x3]=12;var vt={};vt[p.INT]=Int32Array;vt[p.SAMPLER_2D]=Int32Array;vt[p.INT_SAMPLER_2D]=Int32Array;vt[p.UNSIGNED_INT_SAMPLER_2D]=Int32Array;vt[p.SAMPLER_2D_SHADOW]=Int32Array;vt[p.SAMPLER_2D_ARRAY]=Int32Array;vt[p.INT_SAMPLER_2D_ARRAY]=Int32Array;vt[p.UNSIGNED_INT_SAMPLER_2D_ARRAY]=Int32Array;vt[p.SAMPLER_2D_ARRAY_SHADOW]=Int32Array;vt[p.SAMPLER_CUBE]=Int32Array;vt[p.INT_SAMPLER_CUBE]=Int32Array;vt[p.UNSIGNED_INT_SAMPLER_CUBE]=Int32Array;vt[p.SAMPLER_CUBE_SHADOW]=Int32Array;vt[p.SAMPLER_3D]=Int32Array;vt[p.INT_SAMPLER_3D]=Int32Array;vt[p.UNSIGNED_INT_SAMPLER_3D]=Int32Array;vt[p.UNSIGNED_INT]=Uint32Array;vt[p.FLOAT]=Float32Array;vt[p.FLOAT_VEC2]=Float32Array;vt[p.FLOAT_VEC3]=Float32Array;vt[p.FLOAT_VEC4]=Float32Array;vt[p.INT_VEC2]=Int32Array;vt[p.INT_VEC3]=Int32Array;vt[p.INT_VEC4]=Int32Array;vt[p.UNSIGNED_INT_VEC2]=Uint32Array;vt[p.UNSIGNED_INT_VEC3]=Uint32Array;vt[p.UNSIGNED_INT_VEC4]=Uint32Array;var Ro=class{constructor(t,r,n){this.gl=t,this.handle=r,this.glFuncName=ze[n],this.cache=n===p.BOOL?!1:0}set(t){this.cache!==t&&(this.gl[this.glFuncName](this.handle,t),this.cache=t)}},No=class{constructor(t,r,n,a){this.gl=t,this.handle=r,this.glFuncName=ze[n]+"v",this.count=a,this.cache=new vt[n](We[n]*a)}set(t){for(let r=0,n=t.length;r<n;++r)if(this.cache[r]!==t[r]){this.gl[this.glFuncName](this.handle,t),this.cache.set(t);return}}},Io=class{constructor(t,r,n,a){this.gl=t,this.handle=r,this.glFuncName=ze[n]+"v",this.count=a,this.cache=new Array(We[n]*a).fill(!1)}set(t){for(let r=0,n=t.length;r<n;++r)if(this.cache[r]!==t[r]){this.gl[this.glFuncName](this.handle,t);for(let a=r;a<n;a++)this.cache[a]=t[a];return}}},Ms=class{constructor(t,r,n,a){this.gl=t,this.handle=r,this.glFuncName=ze[n],this.count=a,this.cache=new Float32Array(We[n]*a)}set(t){for(let r=0,n=t.length;r<n;++r)if(this.cache[r]!==t[r]){this.gl[this.glFuncName](this.handle,!1,t),this.cache.set(t);return}}};var Lo=class{constructor(t,r,n,a,s,f,h){this.gl=t,this.appState=r,this.program=null,this.transformFeedbackVaryings=s||null,this.transformFeedbackMode=h||p.SEPARATE_ATTRIBS,this.attributeLocations=f||null,this.uniforms={},this.uniformBlocks={},this.uniformBlockCount=0,this.samplers={},this.samplerCount=0,this.vertexSource=null,this.vertexShader=null,this.fragmentSource=null,this.fragmentShader=null,this.linked=!1,typeof n=="string"?this.vertexSource=n:this.vertexShader=n,typeof a=="string"?this.fragmentSource=a:this.fragmentShader=a,this.initialize()}restore(){return this.initialize(),this.link(),this.checkLinkage(),this}translatedVertexSource(){if(this.vertexShader)return this.vertexShader.translatedSource();{let t=new vn(this.gl,this.appState,p.VERTEX_SHADER,this.vertexSource),r=t.translatedSource();return t.delete(),r}}translatedFragmentSource(){if(this.fragmentShader)return this.fragmentShader.translatedSource();{let t=new vn(this.gl,this.appState,p.FRAGMENT_SHADER,this.fragmentSource),r=t.translatedSource();return t.delete(),r}}delete(){return this.program&&(this.gl.deleteProgram(this.program),this.program=null,this.appState.program===this&&(this.gl.useProgram(null),this.appState.program=null)),this}initialize(){return this.appState.program===this&&(this.gl.useProgram(null),this.appState.program=null),this.linked=!1,this.uniformBlockCount=0,this.samplerCount=0,this.vertexSource&&(this.vertexShader=new vn(this.gl,this.appState,p.VERTEX_SHADER,this.vertexSource)),this.fragmentSource&&(this.fragmentShader=new vn(this.gl,this.appState,p.FRAGMENT_SHADER,this.fragmentSource)),this.program=this.gl.createProgram(),this}link(){if(this.gl.attachShader(this.program,this.vertexShader.shader),this.gl.attachShader(this.program,this.fragmentShader.shader),this.transformFeedbackVaryings&&this.gl.transformFeedbackVaryings(this.program,this.transformFeedbackVaryings,this.transformFeedbackMode),this.attributeLocations)for(let t in this.attributeLocations)this.gl.bindAttribLocation(this.program,this.attributeLocations[t],t);return this.gl.linkProgram(this.program),this}checkCompletion(){return Fe.PARALLEL_SHADER_COMPILE?this.gl.getProgramParameter(this.program,p.COMPLETION_STATUS_KHR):!0}checkLinkage(){return this.linked?this:(this.gl.getProgramParameter(this.program,p.LINK_STATUS)?(this.linked=!0,this.initVariables()):(console.error(this.gl.getProgramInfoLog(this.program)),this.vertexShader.checkCompilation(),this.fragmentShader.checkCompilation()),this.vertexSource&&(this.vertexShader.delete(),this.vertexShader=null),this.fragmentSource&&(this.fragmentShader.delete(),this.fragmentShader=null),this)}initVariables(){this.bind();let t=this.gl.getProgramParameter(this.program,p.ACTIVE_UNIFORMS),r;for(let a=0;a<t;++a){let s=this.gl.getActiveUniform(this.program,a),f=this.gl.getUniformLocation(this.program,s.name),h=null,g=s.type,l=s.size;switch(g){case p.SAMPLER_2D:case p.INT_SAMPLER_2D:case p.UNSIGNED_INT_SAMPLER_2D:case p.SAMPLER_2D_SHADOW:case p.SAMPLER_2D_ARRAY:case p.INT_SAMPLER_2D_ARRAY:case p.UNSIGNED_INT_SAMPLER_2D_ARRAY:case p.SAMPLER_2D_ARRAY_SHADOW:case p.SAMPLER_CUBE:case p.INT_SAMPLER_CUBE:case p.UNSIGNED_INT_SAMPLER_CUBE:case p.SAMPLER_CUBE_SHADOW:case p.SAMPLER_3D:case p.INT_SAMPLER_3D:case p.UNSIGNED_INT_SAMPLER_3D:r=this.samplerCount++,this.samplers[s.name]=r,this.gl.uniform1i(f,r);break;case p.INT:case p.UNSIGNED_INT:case p.FLOAT:h=l>1?No:Ro;break;case p.BOOL:h=l>1?Io:Ro;break;case p.FLOAT_VEC2:case p.INT_VEC2:case p.UNSIGNED_INT_VEC2:case p.FLOAT_VEC3:case p.INT_VEC3:case p.UNSIGNED_INT_VEC3:case p.FLOAT_VEC4:case p.INT_VEC4:case p.UNSIGNED_INT_VEC4:h=No;break;case p.BOOL_VEC2:case p.BOOL_VEC3:case p.BOOL_VEC4:h=Io;break;case p.FLOAT_MAT2:case p.FLOAT_MAT3:case p.FLOAT_MAT4:case p.FLOAT_MAT2x3:case p.FLOAT_MAT2x4:case p.FLOAT_MAT3x2:case p.FLOAT_MAT3x4:case p.FLOAT_MAT4x2:case p.FLOAT_MAT4x3:h=Ms;break;default:console.error("Unrecognized type for uniform ",s.name);break}h&&(this.uniforms[s.name]=new h(this.gl,f,g,l))}let n=this.gl.getProgramParameter(this.program,p.ACTIVE_UNIFORM_BLOCKS);for(let a=0;a<n;++a){let s=this.gl.getActiveUniformBlockName(this.program,a),f=this.gl.getUniformBlockIndex(this.program,s),h=this.uniformBlockCount++;this.gl.uniformBlockBinding(this.program,f,h),this.uniformBlocks[s]=h}}uniform(t,r){return this.uniforms[t]&&this.uniforms[t].set(r),this}bind(){return this.appState.program!==this&&(this.gl.useProgram(this.program),this.appState.program=this),this}};var Ua=class{constructor(t,r){this.gl=t,this.query=null,this.target=r,this.active=!1,this.result=null,this.restore()}restore(){return this.query=this.gl.createQuery(),this.active=!1,this.result=null,this}begin(){return this.active||(this.gl.beginQuery(this.target,this.query),this.result=null),this}end(){return this.active||(this.gl.endQuery(this.target),this.active=!0),this}ready(){return this.active&&this.gl.getQueryParameter(this.query,p.QUERY_RESULT_AVAILABLE)?(this.active=!1,this.result=Number(this.gl.getQueryParameter(this.query,p.QUERY_RESULT)),!0):!1}delete(){return this.query&&(this.gl.deleteQuery(this.query),this.query=null),this}};var Ss=class{constructor(t){this.gl=t,this.cpuTimer=window.performance||window.Date,this.gpuTimerQuery=null,this.cpuStartTime=0,this.cpuTime=0,this.gpuTime=0,this.restore()}restore(){return Fe.GPU_TIMER&&(this.gpuTimerQuery?this.gpuTimerQuery.restore():this.gpuTimerQuery=new Ua(this.gl,p.TIME_ELAPSED_EXT)),this.cpuStartTime=0,this.cpuTime=0,this.gpuTime=0,this}start(){return Fe.GPU_TIMER?this.gpuTimerQuery.active||(this.gpuTimerQuery.begin(),this.cpuStartTime=this.cpuTimer.now()):this.cpuStartTime=this.cpuTimer.now(),this}end(){return Fe.GPU_TIMER?this.gpuTimerQuery.active||(this.gpuTimerQuery.end(),this.cpuTime=this.cpuTimer.now()-this.cpuStartTime):this.cpuTime=this.cpuTimer.now()-this.cpuStartTime,this}ready(){if(Fe.GPU_TIMER){if(!this.gpuTimerQuery.active)return!1;var t=this.gpuTimerQuery.ready(),r=this.gl.getParameter(p.GPU_DISJOINT_EXT);return t&&!r?(this.gpuTime=this.gpuTimerQuery.result/1e6,!0):!1}else return Boolean(this.cpuStartTime)}delete(){return this.gpuTimerQuery&&(this.gpuTimerQuery.delete(),this.gpuTimerQuery=null),this}};var Ts=class{constructor(t,r){this.gl=t,this.appState=r,this.transformFeedback=null,this.restore()}restore(){return this.appState.transformFeedback===this&&(this.appState.transformFeedback=null),this.transformFeedback=this.gl.createTransformFeedback(),this}feedbackBuffer(t,r){return this.gl.bindTransformFeedback(p.TRANSFORM_FEEDBACK,this.transformFeedback),this.gl.bindBufferBase(p.TRANSFORM_FEEDBACK_BUFFER,t,r.buffer),this.gl.bindTransformFeedback(p.TRANSFORM_FEEDBACK,null),this.gl.bindBufferBase(p.TRANSFORM_FEEDBACK_BUFFER,t,null),this}delete(){return this.transformFeedback&&(this.gl.deleteTransformFeedback(this.transformFeedback),this.transformFeedback=null,this.appState.transformFeedback===this&&(this.gl.bindTransformFeedback(p.TRANSFORM_FEEDBACK,null),this.appState.transformFeedback=null)),this}bind(){return this.appState.transformFeedback!==this&&(this.gl.bindTransformFeedback(p.TRANSFORM_FEEDBACK,this.transformFeedback),this.appState.transformFeedback=this),this}};var Rs=class{constructor(t,r,n,a=t.DYNAMIC_DRAW){this.gl=t,this.buffer=null,this.dataViews={},this.offsets=new Array(n.length),this.sizes=new Array(n.length),this.types=new Array(n.length),this.size=0,this.usage=a,this.appState=r,this.currentBase=-1;for(let s=0,f=n.length;s<f;++s){let h=n[s];switch(h){case p.FLOAT:case p.INT:case p.UNSIGNED_INT:case p.BOOL:this.offsets[s]=this.size,this.sizes[s]=1,h===p.INT?this.types[s]=p.INT:h===p.UNSIGNED_INT?this.types[s]=p.UNSIGNED_INT:this.types[s]=p.FLOAT,this.size++;break;case p.FLOAT_VEC2:case p.INT_VEC2:case p.UNSIGNED_INT_VEC2:case p.BOOL_VEC2:this.size+=this.size%2,this.offsets[s]=this.size,this.sizes[s]=2,h===p.INT_VEC2?this.types[s]=p.INT:h===p.UNSIGNED_INT_VEC2?this.types[s]=p.UNSIGNED_INT:this.types[s]=p.FLOAT,this.size+=2;break;case p.FLOAT_VEC3:case p.INT_VEC3:case p.UNSIGNED_INT_VEC3:case p.BOOL_VEC3:case p.FLOAT_VEC4:case p.INT_VEC4:case p.UNSIGNED_INT_VEC4:case p.BOOL_VEC4:this.size+=(4-this.size%4)%4,this.offsets[s]=this.size,this.sizes[s]=4,h===p.INT_VEC4||h===p.INT_VEC3?this.types[s]=p.INT:h===p.UNSIGNED_INT_VEC4||h===p.UNSIGNED_INT_VEC3?this.types[s]=p.UNSIGNED_INT:this.types[s]=p.FLOAT,this.size+=4;break;case p.FLOAT_MAT2:case p.FLOAT_MAT2x3:case p.FLOAT_MAT2x4:this.size+=(4-this.size%4)%4,this.offsets[s]=this.size,this.sizes[s]=8,this.types[s]=p.FLOAT,this.size+=8;break;case p.FLOAT_MAT3:case p.FLOAT_MAT3x2:case p.FLOAT_MAT3x4:this.size+=(4-this.size%4)%4,this.offsets[s]=this.size,this.sizes[s]=12,this.types[s]=p.FLOAT,this.size+=12;break;case p.FLOAT_MAT4:case p.FLOAT_MAT4x2:case p.FLOAT_MAT4x3:this.size+=(4-this.size%4)%4,this.offsets[s]=this.size,this.sizes[s]=16,this.types[s]=p.FLOAT,this.size+=16;break;default:console.error("Unsupported type for uniform buffer.")}}this.size+=(4-this.size%4)%4,this.data=new Float32Array(this.size),this.dataViews[p.FLOAT]=this.data,this.dataViews[p.INT]=new Int32Array(this.data.buffer),this.dataViews[p.UNSIGNED_INT]=new Uint32Array(this.data.buffer),this.dirtyStart=this.size,this.dirtyEnd=0,this.restore()}restore(){return this.currentBase!==-1&&this.appState.uniformBuffers[this.currentBase]===this&&(this.appState.uniformBuffers[this.currentBase]=null),this.buffer=this.gl.createBuffer(),this.gl.bindBuffer(p.UNIFORM_BUFFER,this.buffer),this.gl.bufferData(p.UNIFORM_BUFFER,this.size*4,this.usage),this.gl.bindBuffer(p.UNIFORM_BUFFER,null),this}set(t,r){let n=this.dataViews[this.types[t]],a=this.offsets[t],s=this.sizes[t];return this.sizes[t]===1?n[a]=r:n.set(r,a),a<this.dirtyStart&&(this.dirtyStart=a),this.dirtyEnd<a+s&&(this.dirtyEnd=a+s),this}update(){if(this.dirtyStart>=this.dirtyEnd)return this;let t=this.data.subarray(this.dirtyStart,this.dirtyEnd),r=this.dirtyStart*4;return this.gl.bindBuffer(this.gl.UNIFORM_BUFFER,this.buffer),this.gl.bufferSubData(this.gl.UNIFORM_BUFFER,r,t),this.gl.bindBuffer(this.gl.UNIFORM_BUFFER,null),this.dirtyStart=this.size,this.dirtyEnd=0,this}delete(){return this.buffer&&(this.gl.deleteBuffer(this.buffer),this.buffer=null,this.currentBase!==-1&&this.appState.uniformBuffers[this.currentBase]===this&&(this.appState.uniformBuffers[this.currentBase]=null),this.currentBase=-1),this}bind(t){let r=this.appState.uniformBuffers[t];return r!==this&&(r&&(r.currentBase=-1),this.currentBase!==-1&&(this.appState.uniformBuffers[this.currentBase]=null),this.gl.bindBufferBase(this.gl.UNIFORM_BUFFER,t,this.buffer),this.appState.uniformBuffers[t]=this,this.currentBase=t),this}};var Ns=class{constructor(t,r){this.gl=t,this.appState=r,this.vertexArray=null,this.indexType=null,this.indexed=!1,this.numElements=0,this.numInstances=1,this.offsets=0,this.numDraws=1}restore(){return this.appState.vertexArray===this&&(this.appState.vertexArray=null),this.vertexArray!==null&&(this.vertexArray=this.gl.createVertexArray()),this}vertexAttributeBuffer(t,r,n=Vr){return this.attributeBuffer(t,r,n,!1),this}instanceAttributeBuffer(t,r,n=Vr){return this.attributeBuffer(t,r,n,!0),this}indexBuffer(t){return this.vertexArray===null&&(this.vertexArray=this.gl.createVertexArray()),this.bind(),this.gl.bindBuffer(p.ELEMENT_ARRAY_BUFFER,t.buffer),this.numElements=t.numItems*3,this.indexType=t.type,this.indexed=!0,this}delete(){return this.vertexArray&&(this.gl.deleteVertexArray(this.vertexArray),this.vertexArray=null,this.appState.vertexArray===this&&(this.gl.bindVertexArray(null),this.appState.vertexArray=null)),this}bind(){return this.appState.vertexArray!==this&&(this.gl.bindVertexArray(this.vertexArray),this.appState.vertexArray=this),this}attributeBuffer(t,r,n={},a){this.vertexArray===null&&(this.vertexArray=this.gl.createVertexArray()),this.bind(),this.gl.bindBuffer(p.ARRAY_BUFFER,r.buffer);let{type:s=r.type,size:f=r.itemSize,stride:h=0,offset:g=0,normalized:l=!1,integer:u=Boolean(r.integer&&!l)}=n,d=r.numColumns;h===0&&(h=d*f*sa[s]);let C=Math.ceil((r.byteLength-g)/h);for(let M=0;M<d;++M)u?this.gl.vertexAttribIPointer(t+M,f,s,h,g+M*f*sa[s]):this.gl.vertexAttribPointer(t+M,f,s,l,h,g+M*f*sa[s]),a&&this.gl.vertexAttribDivisor(t+M,1),this.gl.enableVertexAttribArray(t+M);return this.numDraws===1&&(a?this.numInstances=C:this.indexed||(this.numElements=C)),this.gl.bindBuffer(p.ARRAY_BUFFER,null),this}};var qg={[p.BYTE]:!0,[p.UNSIGNED_BYTE]:!0,[p.SHORT]:!0,[p.UNSIGNED_SHORT]:!0,[p.INT]:!0,[p.UNSIGNED_INT]:!0},ga=class{constructor(t,r,n,a,s,f=t.STATIC_DRAW,h){let g;switch(n){case p.FLOAT_MAT4:case p.FLOAT_MAT4x2:case p.FLOAT_MAT4x3:g=4;break;case p.FLOAT_MAT3:case p.FLOAT_MAT3x2:case p.FLOAT_MAT3x4:g=3;break;case p.FLOAT_MAT2:case p.FLOAT_MAT2x3:case p.FLOAT_MAT2x4:g=2;break;default:g=1}switch(n){case p.FLOAT_MAT4:case p.FLOAT_MAT3x4:case p.FLOAT_MAT2x4:a=4,n=p.FLOAT;break;case p.FLOAT_MAT3:case p.FLOAT_MAT4x3:case p.FLOAT_MAT2x3:a=3,n=p.FLOAT;break;case p.FLOAT_MAT2:case p.FLOAT_MAT3x2:case p.FLOAT_MAT4x2:a=2,n=p.FLOAT;break}let l,u;typeof s=="number"?(l=s,n&&(s*=sa[n]),u=s):(l=s.length,u=s.byteLength),this.gl=t,this.buffer=null,this.appState=r,this.type=n,this.itemSize=a,this.numItems=n?l/(a*g):u/a,this.numColumns=g,this.byteLength=u,this.usage=f,this.indexArray=Boolean(h),this.integer=Boolean(qg[this.type]),this.binding=this.indexArray?p.ELEMENT_ARRAY_BUFFER:p.ARRAY_BUFFER,this.restore(s)}restore(t){return t||(t=this.byteLength),this.appState.vertexArray&&(this.gl.bindVertexArray(null),this.appState.vertexArray=null),this.buffer=this.gl.createBuffer(),this.gl.bindBuffer(this.binding,this.buffer),this.gl.bufferData(this.binding,t,this.usage),this.gl.bindBuffer(this.binding,null),this}data(t,r=0){return this.appState.vertexArray&&(this.gl.bindVertexArray(null),this.appState.vertexArray=null),this.gl.bindBuffer(this.binding,this.buffer),this.gl.bufferSubData(this.binding,r,t),this.gl.bindBuffer(this.binding,null),this}delete(){return this.buffer&&(this.gl.deleteBuffer(this.buffer),this.buffer=null),this}};var Is=class{constructor(t){this.gl=t,this.canvas=t.canvas,this.width=this.gl.drawingBufferWidth,this.height=this.gl.drawingBufferHeight,this.viewportX=0,this.viewportY=0,this.viewportWidth=0,this.viewportHeight=0,this.currentDrawCalls=null,this.emptyFragmentShader=null,this.state={program:null,vertexArray:null,transformFeedback:null,activeTexture:-1,textures:new Array(Fe.MAX_TEXTURE_UNITS),uniformBuffers:new Array(Fe.MAX_UNIFORM_BUFFERS),freeUniformBufferBases:[],framebuffers:{},drawFramebufferBinding:p.DRAW_FRAMEBUFFER,readFramebufferBinding:p.READ_FRAMEBUFFER,extensions:{}},this.clearBits=this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT|this.gl.STENCIL_BUFFER_BIT,this.cpuTime=0,this.gpuTime=0,this.viewport(0,0,this.width,this.height),this.contextLostExt=null,this.contextLostListener=null,this.contextRestoredListener=null,this.contextRestoredHandler=null,this.initExtensions()}loseContext(){return this.contextLostExt&&this.contextLostExt.loseContext(),this}restoreContext(){return this.contextLostExt&&this.contextLostExt.restoreContext(),this}onContextRestored(t){return this.contextRestoredHandler=t,this.initContextListeners(),this}enable(t){return this.gl.enable(t),this}disable(t){return this.gl.disable(t),this}colorMask(t,r,n,a){return this.gl.colorMask(t,r,n,a),this}clearColor(t,r,n,a){return this.gl.clearColor(t,r,n,a),this}clearMask(t){return this.clearBits=t,this}clear(){return this.gl.clear(this.clearBits),this}drawFramebuffer(t){return t.bindForDraw(),this}readFramebuffer(t){return t.bindForRead(),this}defaultDrawFramebuffer(){let t=this.state.drawFramebufferBinding;return this.state.framebuffers[t]!==null&&(this.gl.bindFramebuffer(t,null),this.state.framebuffers[t]=null),this}defaultReadFramebuffer(){let t=this.state.readFramebufferBinding;return this.state.framebuffers[t]!==null&&(this.gl.bindFramebuffer(t,null),this.state.framebuffers[t]=null),this}blitFramebuffer(t,r=Vr){let n=this.state.readFramebufferBinding,a=this.state.drawFramebufferBinding,s=this.state.framebuffers[n],f=this.state.framebuffers[a],h=s?s.width:this.width,g=s?s.height:this.height,l=f?f.width:this.width,u=f?f.height:this.height,{srcStartX:d=0,srcStartY:C=0,srcEndX:M=h,srcEndY:L=g,dstStartX:v=0,dstStartY:y=0,dstEndX:I=l,dstEndY:P=u,filter:D=p.NEAREST}=r;return this.gl.blitFramebuffer(d,C,M,L,v,y,I,P,t,D),this}depthRange(t,r){return this.gl.depthRange(t,r),this}depthMask(t){return this.gl.depthMask(t),this}depthFunc(t){return this.gl.depthFunc(t),this}blendFunc(t,r){return this.gl.blendFunc(t,r),this}blendFuncSeparate(t,r,n,a){return this.gl.blendFuncSeparate(t,r,n,a),this}blendEquation(t){return this.gl.blendEquation(t),this}stencilMask(t){return this.gl.stencilMask(t),this}stencilMaskSeparate(t,r){return this.gl.stencilMaskSeparate(t,r),this}stencilFunc(t,r,n){return this.gl.stencilFunc(t,r,n),this}stencilFuncSeparate(t,r,n,a){return this.gl.stencilFuncSeparate(t,r,n,a),this}stencilOp(t,r,n){return this.gl.stencilOp(t,r,n),this}stencilOpSeparate(t,r,n,a){return this.gl.stencilOpSeparate(t,r,n,a),this}scissor(t,r,n,a){return this.gl.scissor(t,r,n,a),this}polygonOffset(t,r){return this.gl.polygonOffset(t,r),this}readPixel(t,r,n,a=Vr){let{format:s=p.RGBA,type:f=p.UNSIGNED_BYTE}=a;return this.gl.readPixels(t,r,1,1,s,f,n),this}viewport(t,r,n,a){return(this.viewportWidth!==n||this.viewportHeight!==a||this.viewportX!==t||this.viewportY!==r)&&(this.viewportX=t,this.viewportY=r,this.viewportWidth=n,this.viewportHeight=a,this.gl.viewport(t,r,this.viewportWidth,this.viewportHeight)),this}defaultViewport(){return this.viewport(0,0,this.width,this.height),this}resize(t,r){return this.canvas.width=t,this.canvas.height=r,this.width=this.gl.drawingBufferWidth,this.height=this.gl.drawingBufferHeight,this.viewport(0,0,this.width,this.height),this}createProgram(t,r,n={}){let{transformFeedbackVaryings:a,attributeLocations:s,transformFeedbackMode:f}=n;return new Lo(this.gl,this.state,t,r,a,s,f).link().checkLinkage()}createPrograms(...t){return new Promise((r,n)=>{let a=t.length,s=new Array(a),f=new Array(a),h=a;for(let l=0;l<a;++l){let u=t[l],d=u[0],C=u[1],M=u[2]||{},{transformFeedbackVaryings:L,attributeLocations:v,transformFeedbackMode:y}=M;s[l]=new Lo(this.gl,this.state,d,C,L,v,y),f[l]=s[l]}for(let l=0;l<a;++l)s[l].link();let g=()=>{let l=0;for(let u=0;u<h;++u)if(f[u].checkCompletion())if(f[u].checkLinkage(),f[u].linked)++l;else{n(new Error("Program linkage failed"));return}else f[u-l]=f[u];h-=l,h===0?r(s):requestAnimationFrame(g)};g()})}restorePrograms(...t){return new Promise((r,n)=>{let a=t.length,s=t.slice(),f=a;for(let g=0;g<a;++g)t[g].initialize();for(let g=0;g<a;++g)t[g].link();for(let g=0;g<a;++g)t[g].checkCompletion();let h=()=>{let g=0;for(let l=0;l<f;++l)if(s[l].checkCompletion())if(s[l].checkLinkage(),s[l].linked)++g;else{n(new Error("Program linkage failed"));return}else s[l-g]=s[l];f-=g,f===0?r():requestAnimationFrame(h)};h()})}createShader(t,r){return new vn(this.gl,this.state,t,r)}createVertexArray(){return new Ns(this.gl,this.state)}createTransformFeedback(){return new Ts(this.gl,this.state)}createVertexBuffer(t,r,n,a){return new ga(this.gl,this.state,t,r,n,a)}createMatrixBuffer(t,r,n){return new ga(this.gl,this.state,t,0,r,n)}createInterleavedBuffer(t,r,n){return new ga(this.gl,this.state,null,t,r,n)}createIndexBuffer(t,r,n,a){return ArrayBuffer.isView(r)&&(a=n,n=r,r=3),new ga(this.gl,this.state,t,r,n,a,!0)}createUniformBuffer(t,r){return new Rs(this.gl,this.state,t,r)}createTexture2D(t,r,n,a){return typeof t=="number"?(a=n,n=r,r=t,t=null):n===void 0&&(a=r,r=t.width,n=t.height),new pn(this.gl,this.state,this.gl.TEXTURE_2D,t,r,n,void 0,!1,a)}createTextureArray(t,r,n,a,s){return typeof t=="number"&&(s=a,a=n,n=r,r=t,t=null),new pn(this.gl,this.state,this.gl.TEXTURE_2D_ARRAY,t,r,n,a,!0,s)}createTexture3D(t,r,n,a,s){return typeof t=="number"&&(s=a,a=n,n=r,r=t,t=null),new pn(this.gl,this.state,this.gl.TEXTURE_3D,t,r,n,a,!0,s)}createCubemap(t){return new ws(this.gl,this.state,t)}createRenderbuffer(t,r,n,a=0){return new la(this.gl,t,r,n,a)}createFramebuffer(){return new As(this.gl,this.state)}createQuery(t){return new Ua(this.gl,t)}createTimer(){return new Ss(this.gl)}createDrawCall(t,r,n){return new Cs(this.gl,this.state,t,r,n)}initExtensions(){this.gl.getExtension("EXT_color_buffer_float"),this.gl.getExtension("OES_texture_float_linear"),this.gl.getExtension("WEBGL_compressed_texture_s3tc"),this.gl.getExtension("WEBGL_compressed_texture_s3tc_srgb"),this.gl.getExtension("WEBGL_compressed_texture_etc"),this.gl.getExtension("WEBGL_compressed_texture_astc"),this.gl.getExtension("WEBGL_compressed_texture_pvrtc"),this.gl.getExtension("EXT_disjoint_timer_query_webgl2"),this.gl.getExtension("EXT_disjoint_timer_query"),this.gl.getExtension("EXT_texture_filter_anisotropic"),this.state.extensions.debugShaders=this.gl.getExtension("WEBGL_debug_shaders"),this.contextLostExt=this.gl.getExtension("WEBGL_lose_context"),this.gl.getExtension("KHR_parallel_shader_compile"),this.state.extensions.multiDrawInstanced=this.gl.getExtension("WEBGL_multi_draw_instanced")}initContextListeners(){this.contextRestoredHandler?(this.contextLostListener=t=>{t.preventDefault()},this.contextRestoredListener=()=>{this.initExtensions(),this.contextRestoredHandler()},this.canvas.addEventListener("webglcontextlost",this.contextLostListener),this.canvas.addEventListener("webglcontextrestored",this.contextRestoredListener)):(this.canvas.removeEventListener("webglcontextlost",this.contextLostListener),this.canvas.removeEventListener("webglcontextrestored",this.contextRestoredListener),this.contextLostListener=null,this.contextRestoredListener=null)}depthTest(){return console.warn("App.depthTest is deprecated. Use App.enable(PicoGL.DEPTH_TEST) instead."),this.enable(p.DEPTH_TEST),this}noDepthTest(){return console.warn("App.noDepthTest is deprecated. Use App.disable(PicoGL.DEPTH_TEST) instead."),this.disable(p.DEPTH_TEST),this}blend(){return console.warn("App.blend is deprecated. Use App.enable(PicoGL.BLEND) instead."),this.enable(p.BLEND),this}noBlend(){return console.warn("App.noBlend is deprecated. Use App.disable(PicoGL.BLEND) instead."),this.disable(p.BLEND),this}stencilTest(){return console.warn("App.stencilTest is deprecated. Use App.enable(PicoGL.STENCIL_TEST) instead."),this.enable(p.STENCIL_TEST),this}noStencilTest(){return console.warn("App.noStencilTest is deprecated. Use App.disable(PicoGL.STENCIL_TEST) instead."),this.disable(p.STENCIL_TEST),this}scissorTest(){return console.warn("App.scissorTest is deprecated. Use App.enable(PicoGL.SCISSOR_TEST) instead."),this.enable(p.SCISSOR_TEST),this}noScissorTest(){return console.warn("App.noScissorTest is deprecated. Use App.disable(PicoGL.SCISSOR_TEST) instead."),this.disable(p.SCISSOR_TEST),this}rasterize(){return console.warn("App.noRasterize is deprecated. Use App.disable(PicoGL.RASTERIZER_DISCARD) instead."),this.disable(p.RASTERIZER_DISCARD),this}noRasterize(){return console.warn("App.rasterize is deprecated. Use App.enable(PicoGL.RASTERIZER_DISCARD) instead."),this.enable(p.RASTERIZER_DISCARD),this}cullBackfaces(){return console.warn("App.cullBackfaces is deprecated. Use App.enable(PicoGL.CULL_FACE) instead."),this.enable(p.CULL_FACE),this}drawBackfaces(){return console.warn("App.drawBackfaces is deprecated. Use App.disable(PicoGL.CULL_FACE) instead."),this.disable(p.CULL_FACE),this}};var _u=!1,oe=Object.assign({version:"0.17.7",WEBGL_INFO:Fe,createApp(e,t){return e.tagName==="CANVAS"&&(e=e.getContext("webgl2",t)),_u||(Fe.MAX_TEXTURE_UNITS=e.getParameter(p.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Fe.MAX_UNIFORM_BUFFERS=e.getParameter(p.MAX_UNIFORM_BUFFER_BINDINGS),Fe.MAX_UNIFORMS=Math.min(e.getParameter(p.MAX_VERTEX_UNIFORM_VECTORS),e.getParameter(p.MAX_FRAGMENT_UNIFORM_VECTORS)),Fe.SAMPLES=e.getParameter(p.SAMPLES),Fe.VENDOR="(Unknown)",Fe.RENDERER="(Unknown)",Fe.FLOAT_RENDER_TARGETS=Boolean(e.getExtension("EXT_color_buffer_float")),Fe.LINEAR_FLOAT_TEXTURES=Boolean(e.getExtension("OES_texture_float_linear")),Fe.S3TC_TEXTURES=Boolean(e.getExtension("WEBGL_compressed_texture_s3tc")),Fe.S3TC_SRGB_TEXTURES=Boolean(e.getExtension("WEBGL_compressed_texture_s3tc_srgb")),Fe.ETC_TEXTURES=Boolean(e.getExtension("WEBGL_compressed_texture_etc")),Fe.ASTC_TEXTURES=Boolean(e.getExtension("WEBGL_compressed_texture_astc")),Fe.PVRTC_TEXTURES=Boolean(e.getExtension("WEBGL_compressed_texture_pvrtc")),Fe.LOSE_CONTEXT=Boolean(e.getExtension("WEBGL_lose_context")),Fe.DEBUG_SHADERS=Boolean(e.getExtension("WEBGL_debug_shaders")),Fe.GPU_TIMER=Boolean(e.getExtension("EXT_disjoint_timer_query_webgl2")||e.getExtension("EXT_disjoint_timer_query")),Fe.TEXTURE_ANISOTROPY=Boolean(e.getExtension("EXT_texture_filter_anisotropic")),Fe.MAX_TEXTURE_ANISOTROPY=Fe.TEXTURE_ANISOTROPY?e.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT):1,Fe.DEBUG_RENDERER_INFO=Boolean(e.getExtension("WEBGL_debug_renderer_info")),Fe.DEBUG_RENDERER_INFO&&(Fe.VENDOR=e.getParameter(p.UNMASKED_VENDOR_WEBGL),Fe.RENDERER=e.getParameter(p.UNMASKED_RENDERER_WEBGL)),Fe.PARALLEL_SHADER_COMPILE=Boolean(e.getExtension("KHR_parallel_shader_compile")),Fe.MULTI_DRAW_INSTANCED=Boolean(e.getExtension("WEBGL_multi_draw_instanced")),_u=!0),new Is(e)}},p),xe=oe;var Be;(function(e){e[e.DRAFT=0]="DRAFT",e[e.MEDIUM=1]="MEDIUM",e[e.HIGH=2]="HIGH",e[e.HIGH_PASS_1=3]="HIGH_PASS_1",e[e.HIGH_PASS_2=4]="HIGH_PASS_2",e[e.PICKING=5]="PICKING"})(Be||(Be={}));var fa={[xe.BYTE]:1,[xe.UNSIGNED_BYTE]:1,[xe.SHORT]:2,[xe.UNSIGNED_SHORT]:2,[xe.INT]:4,[xe.UNSIGNED_INT]:4,[xe.FLOAT]:4},bu={[xe.BYTE]:(e,t)=>e.getInt8(t),[xe.UNSIGNED_BYTE]:(e,t)=>e.getUint8(t),[xe.SHORT]:(e,t)=>e.getInt16(t,!0),[xe.UNSIGNED_SHORT]:(e,t)=>e.getUint16(t,!0),[xe.INT]:(e,t)=>e.getInt32(t,!0),[xe.UNSIGNED_INT]:(e,t)=>e.getUint32(t,!0),[xe.FLOAT]:(e,t)=>e.getFloat32(t,!0)},Ls={[xe.BYTE]:(e,t,r)=>e.setInt8(t,r),[xe.UNSIGNED_BYTE]:(e,t,r)=>e.setUint8(t,r),[xe.SHORT]:(e,t,r)=>e.setInt16(t,r,!0),[xe.UNSIGNED_SHORT]:(e,t,r)=>e.setUint16(t,r,!0),[xe.INT]:(e,t,r)=>e.setInt32(t,r,!0),[xe.UNSIGNED_INT]:(e,t,r)=>e.setUint32(t,r,!0),[xe.FLOAT]:(e,t,r)=>e.setFloat32(t,r,!0)};function Eu(e){return Array.isArray(e)?fa[e[0]]*e.length:fa[e]}function Wg(e){return e===xe.FLOAT?0:1}function Bn(e){let t=Object.keys(e),r=[],n=0;for(let a=0,s=t.length;a<s;++a)e[t[a]]&&(n+=Eu(e[t[a]]),r.push(t[a]));return{keys:r,stride:n}}function bt(e,t){for(let[r,n]of Object.entries(t))n.texture?e.texture(r,n):e.uniform(r,n)}function Ps(e,t,r,n,a=0,s=!1){let f=s?"instanceAttributeBuffer":"vertexAttributeBuffer",h=n.stride,g=0;for(let l=0,u=n.keys.length;l<u;++l){let d=r[n.keys[l]],C=Array.isArray(d)?d[0]:d,M=Array.isArray(d)?d.length:1;e[f](a+l,t,{type:C,integer:Wg(C),size:M,stride:h,offset:g}),g+=Eu(d)}}var mr=Symbol("graffer:data::mapping::flatten::key"),Ga=Symbol("graffer:data::tools::needs::flatten");function*Po(e,t){let r=Reflect.ownKeys(t);for(let n=0,a=e.length;n<a;++n){let s={};for(let f of r)t[f]!==null&&(s[f]=t[f](e[n],n));yield[n,s]}}function wu(e,t){let r=[];for(let n=0,a=e.length;n<a;++n)for(let[,s]of Po(e[n],t))r.push(s);return r}function Ds(e,t){let r=Object.keys(e),n={};for(let a=0,s=r.length;a<s;++a)r[a]in t&&t[r[a]]!==null&&(n[r[a]]=e[r[a]]);return n}function Cu(e,t,r,n){if(Array.isArray(t)){let a=0;for(let s=0,f=t.length;s<f;++s)Ls[r[s]](e,n+a,t[s]),a+=fa[r[s]];return a}return Ls[r](e,n,t),fa[r]}function jg(e,t,r,n,a,s){var f,h;let g={},l=0;for(let d=0,C=r.keys.length;d<C;++d){let M=r.keys[d];e[Ga].has(M)?(g[M]=(f=n[M][mr])!=null?f:(L,v)=>L[M][v],l=e[M].length):g[M]=(h=n[M][mr])!=null?h:L=>L[M]}let u=0;for(let d=0;d<l;++d)for(let C=0,M=r.keys.length;C<M;++C){let L=r.keys[C];u+=Cu(a,g[L](e,d,l),t[L],s+u)}return u}function Un(e,t,r,n,a){let s=Bn(Ds(r,t)),f=[],h=0,g=Array.isArray(a)?a[0]:a,l=Array.isArray(a)?a[1]:null;for(let[M,L]of Po(e,t)){let v=1;for(let y=0,I=s.keys.length;y<I;++y){let P=L[s.keys[y]];Array.isArray(P)&&(!Array.isArray(r[s.keys[y]])||t[s.keys[y]][mr])&&(L[Ga]||(L[Ga]=new Set),L[Ga].add(s.keys[y]),v=Math.max(v,P.length))}f.push(L),h+=v,g&&g(M,L)}h=n?Math.pow(2,Math.ceil(Math.log2(h))):h;let u=new ArrayBuffer(s.stride*h),d=new DataView(u),C=0;for(let M=0,L=f.length;M<L;++M){let v=f[M];if(l&&l(M,v),v[Ga])C+=jg(v,r,s,t,d,C);else for(let y=0,I=s.keys.length;y<I;++y)C+=Cu(d,v[s.keys[y]],r[s.keys[y]],C)}return u}function Do(e,t,r,n){let a=e.gl,s=Bn(n),f=new ArrayBuffer(s.stride*r),h=new DataView(f);a.bindTransformFeedback(a.TRANSFORM_FEEDBACK,null),a.bindBuffer(a.ARRAY_BUFFER,t.buffer),a.getBufferSubData(a.ARRAY_BUFFER,0,h);let g=0;for(let l=0;l<r;++l)for(let u=0,d=s.keys.length;u<d;++u){let C=Array.isArray(n[s.keys[u]])?n[s.keys[u]]:[n[s.keys[u]]],M=[];for(let L=0,v=C.length;L<v;++L)M.push(bu[C[L]](h,g)),g+=fa[C[L]];console.log(`ELEMENT[${l}] ATTR[${u}]: ${M}`)}}var Qe=1e-6,mt=typeof Float32Array!="undefined"?Float32Array:Array,fr=Math.random;var G8=Math.PI/180;Math.hypot||(Math.hypot=function(){for(var e=0,t=arguments.length;t--;)e+=arguments[t]*arguments[t];return Math.sqrt(e)});function Au(){var e=new mt(9);return mt!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}var ar={};fn(ar,{add:()=>If,adjoint:()=>ef,clone:()=>Yg,copy:()=>Kg,create:()=>Xg,determinant:()=>tf,equals:()=>kf,exactEquals:()=>Df,frob:()=>Nf,fromQuat:()=>_f,fromQuat2:()=>pf,fromRotation:()=>gf,fromRotationTranslation:()=>Tu,fromRotationTranslationScale:()=>xf,fromRotationTranslationScaleOrigin:()=>yf,fromScaling:()=>lf,fromTranslation:()=>uf,fromValues:()=>$g,fromXRotation:()=>ff,fromYRotation:()=>df,fromZRotation:()=>hf,frustum:()=>bf,getRotation:()=>mf,getScaling:()=>Ru,getTranslation:()=>vf,identity:()=>Mu,invert:()=>Jg,lookAt:()=>Sf,mul:()=>Of,multiply:()=>Su,multiplyScalar:()=>Lf,multiplyScalarAndAdd:()=>Pf,ortho:()=>Af,orthoNO:()=>Iu,orthoZO:()=>Mf,perspective:()=>Ef,perspectiveFromFieldOfView:()=>Cf,perspectiveNO:()=>Nu,perspectiveZO:()=>wf,rotate:()=>af,rotateX:()=>of,rotateY:()=>sf,rotateZ:()=>cf,scale:()=>nf,set:()=>Zg,str:()=>Rf,sub:()=>Ff,subtract:()=>Lu,targetTo:()=>Tf,translate:()=>rf,transpose:()=>Qg});function Xg(){var e=new mt(16);return mt!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function Yg(e){var t=new mt(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function Kg(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function $g(e,t,r,n,a,s,f,h,g,l,u,d,C,M,L,v){var y=new mt(16);return y[0]=e,y[1]=t,y[2]=r,y[3]=n,y[4]=a,y[5]=s,y[6]=f,y[7]=h,y[8]=g,y[9]=l,y[10]=u,y[11]=d,y[12]=C,y[13]=M,y[14]=L,y[15]=v,y}function Zg(e,t,r,n,a,s,f,h,g,l,u,d,C,M,L,v,y){return e[0]=t,e[1]=r,e[2]=n,e[3]=a,e[4]=s,e[5]=f,e[6]=h,e[7]=g,e[8]=l,e[9]=u,e[10]=d,e[11]=C,e[12]=M,e[13]=L,e[14]=v,e[15]=y,e}function Mu(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Qg(e,t){if(e===t){var r=t[1],n=t[2],a=t[3],s=t[6],f=t[7],h=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=s,e[11]=t[14],e[12]=a,e[13]=f,e[14]=h}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}function Jg(e,t){var r=t[0],n=t[1],a=t[2],s=t[3],f=t[4],h=t[5],g=t[6],l=t[7],u=t[8],d=t[9],C=t[10],M=t[11],L=t[12],v=t[13],y=t[14],I=t[15],P=r*h-n*f,D=r*g-a*f,Z=r*l-s*f,O=n*g-a*h,B=n*l-s*h,K=a*l-s*g,V=u*v-d*L,X=u*y-C*L,Q=u*I-M*L,ge=d*y-C*v,q=d*I-M*v,ve=C*I-M*y,de=P*ve-D*q+Z*ge+O*Q-B*X+K*V;return de?(de=1/de,e[0]=(h*ve-g*q+l*ge)*de,e[1]=(a*q-n*ve-s*ge)*de,e[2]=(v*K-y*B+I*O)*de,e[3]=(C*B-d*K-M*O)*de,e[4]=(g*Q-f*ve-l*X)*de,e[5]=(r*ve-a*Q+s*X)*de,e[6]=(y*Z-L*K-I*D)*de,e[7]=(u*K-C*Z+M*D)*de,e[8]=(f*q-h*Q+l*V)*de,e[9]=(n*Q-r*q-s*V)*de,e[10]=(L*B-v*Z+I*P)*de,e[11]=(d*Z-u*B-M*P)*de,e[12]=(h*X-f*ge-g*V)*de,e[13]=(r*ge-n*X+a*V)*de,e[14]=(v*D-L*O-y*P)*de,e[15]=(u*O-d*D+C*P)*de,e):null}function ef(e,t){var r=t[0],n=t[1],a=t[2],s=t[3],f=t[4],h=t[5],g=t[6],l=t[7],u=t[8],d=t[9],C=t[10],M=t[11],L=t[12],v=t[13],y=t[14],I=t[15];return e[0]=h*(C*I-M*y)-d*(g*I-l*y)+v*(g*M-l*C),e[1]=-(n*(C*I-M*y)-d*(a*I-s*y)+v*(a*M-s*C)),e[2]=n*(g*I-l*y)-h*(a*I-s*y)+v*(a*l-s*g),e[3]=-(n*(g*M-l*C)-h*(a*M-s*C)+d*(a*l-s*g)),e[4]=-(f*(C*I-M*y)-u*(g*I-l*y)+L*(g*M-l*C)),e[5]=r*(C*I-M*y)-u*(a*I-s*y)+L*(a*M-s*C),e[6]=-(r*(g*I-l*y)-f*(a*I-s*y)+L*(a*l-s*g)),e[7]=r*(g*M-l*C)-f*(a*M-s*C)+u*(a*l-s*g),e[8]=f*(d*I-M*v)-u*(h*I-l*v)+L*(h*M-l*d),e[9]=-(r*(d*I-M*v)-u*(n*I-s*v)+L*(n*M-s*d)),e[10]=r*(h*I-l*v)-f*(n*I-s*v)+L*(n*l-s*h),e[11]=-(r*(h*M-l*d)-f*(n*M-s*d)+u*(n*l-s*h)),e[12]=-(f*(d*y-C*v)-u*(h*y-g*v)+L*(h*C-g*d)),e[13]=r*(d*y-C*v)-u*(n*y-a*v)+L*(n*C-a*d),e[14]=-(r*(h*y-g*v)-f*(n*y-a*v)+L*(n*g-a*h)),e[15]=r*(h*C-g*d)-f*(n*C-a*d)+u*(n*g-a*h),e}function tf(e){var t=e[0],r=e[1],n=e[2],a=e[3],s=e[4],f=e[5],h=e[6],g=e[7],l=e[8],u=e[9],d=e[10],C=e[11],M=e[12],L=e[13],v=e[14],y=e[15],I=t*f-r*s,P=t*h-n*s,D=t*g-a*s,Z=r*h-n*f,O=r*g-a*f,B=n*g-a*h,K=l*L-u*M,V=l*v-d*M,X=l*y-C*M,Q=u*v-d*L,ge=u*y-C*L,q=d*y-C*v;return I*q-P*ge+D*Q+Z*X-O*V+B*K}function Su(e,t,r){var n=t[0],a=t[1],s=t[2],f=t[3],h=t[4],g=t[5],l=t[6],u=t[7],d=t[8],C=t[9],M=t[10],L=t[11],v=t[12],y=t[13],I=t[14],P=t[15],D=r[0],Z=r[1],O=r[2],B=r[3];return e[0]=D*n+Z*h+O*d+B*v,e[1]=D*a+Z*g+O*C+B*y,e[2]=D*s+Z*l+O*M+B*I,e[3]=D*f+Z*u+O*L+B*P,D=r[4],Z=r[5],O=r[6],B=r[7],e[4]=D*n+Z*h+O*d+B*v,e[5]=D*a+Z*g+O*C+B*y,e[6]=D*s+Z*l+O*M+B*I,e[7]=D*f+Z*u+O*L+B*P,D=r[8],Z=r[9],O=r[10],B=r[11],e[8]=D*n+Z*h+O*d+B*v,e[9]=D*a+Z*g+O*C+B*y,e[10]=D*s+Z*l+O*M+B*I,e[11]=D*f+Z*u+O*L+B*P,D=r[12],Z=r[13],O=r[14],B=r[15],e[12]=D*n+Z*h+O*d+B*v,e[13]=D*a+Z*g+O*C+B*y,e[14]=D*s+Z*l+O*M+B*I,e[15]=D*f+Z*u+O*L+B*P,e}function rf(e,t,r){var n=r[0],a=r[1],s=r[2],f,h,g,l,u,d,C,M,L,v,y,I;return t===e?(e[12]=t[0]*n+t[4]*a+t[8]*s+t[12],e[13]=t[1]*n+t[5]*a+t[9]*s+t[13],e[14]=t[2]*n+t[6]*a+t[10]*s+t[14],e[15]=t[3]*n+t[7]*a+t[11]*s+t[15]):(f=t[0],h=t[1],g=t[2],l=t[3],u=t[4],d=t[5],C=t[6],M=t[7],L=t[8],v=t[9],y=t[10],I=t[11],e[0]=f,e[1]=h,e[2]=g,e[3]=l,e[4]=u,e[5]=d,e[6]=C,e[7]=M,e[8]=L,e[9]=v,e[10]=y,e[11]=I,e[12]=f*n+u*a+L*s+t[12],e[13]=h*n+d*a+v*s+t[13],e[14]=g*n+C*a+y*s+t[14],e[15]=l*n+M*a+I*s+t[15]),e}function nf(e,t,r){var n=r[0],a=r[1],s=r[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*a,e[5]=t[5]*a,e[6]=t[6]*a,e[7]=t[7]*a,e[8]=t[8]*s,e[9]=t[9]*s,e[10]=t[10]*s,e[11]=t[11]*s,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function af(e,t,r,n){var a=n[0],s=n[1],f=n[2],h=Math.hypot(a,s,f),g,l,u,d,C,M,L,v,y,I,P,D,Z,O,B,K,V,X,Q,ge,q,ve,de,Me;return h<Qe?null:(h=1/h,a*=h,s*=h,f*=h,g=Math.sin(r),l=Math.cos(r),u=1-l,d=t[0],C=t[1],M=t[2],L=t[3],v=t[4],y=t[5],I=t[6],P=t[7],D=t[8],Z=t[9],O=t[10],B=t[11],K=a*a*u+l,V=s*a*u+f*g,X=f*a*u-s*g,Q=a*s*u-f*g,ge=s*s*u+l,q=f*s*u+a*g,ve=a*f*u+s*g,de=s*f*u-a*g,Me=f*f*u+l,e[0]=d*K+v*V+D*X,e[1]=C*K+y*V+Z*X,e[2]=M*K+I*V+O*X,e[3]=L*K+P*V+B*X,e[4]=d*Q+v*ge+D*q,e[5]=C*Q+y*ge+Z*q,e[6]=M*Q+I*ge+O*q,e[7]=L*Q+P*ge+B*q,e[8]=d*ve+v*de+D*Me,e[9]=C*ve+y*de+Z*Me,e[10]=M*ve+I*de+O*Me,e[11]=L*ve+P*de+B*Me,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function of(e,t,r){var n=Math.sin(r),a=Math.cos(r),s=t[4],f=t[5],h=t[6],g=t[7],l=t[8],u=t[9],d=t[10],C=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=s*a+l*n,e[5]=f*a+u*n,e[6]=h*a+d*n,e[7]=g*a+C*n,e[8]=l*a-s*n,e[9]=u*a-f*n,e[10]=d*a-h*n,e[11]=C*a-g*n,e}function sf(e,t,r){var n=Math.sin(r),a=Math.cos(r),s=t[0],f=t[1],h=t[2],g=t[3],l=t[8],u=t[9],d=t[10],C=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*a-l*n,e[1]=f*a-u*n,e[2]=h*a-d*n,e[3]=g*a-C*n,e[8]=s*n+l*a,e[9]=f*n+u*a,e[10]=h*n+d*a,e[11]=g*n+C*a,e}function cf(e,t,r){var n=Math.sin(r),a=Math.cos(r),s=t[0],f=t[1],h=t[2],g=t[3],l=t[4],u=t[5],d=t[6],C=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*a+l*n,e[1]=f*a+u*n,e[2]=h*a+d*n,e[3]=g*a+C*n,e[4]=l*a-s*n,e[5]=u*a-f*n,e[6]=d*a-h*n,e[7]=C*a-g*n,e}function uf(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}function lf(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function gf(e,t,r){var n=r[0],a=r[1],s=r[2],f=Math.hypot(n,a,s),h,g,l;return f<Qe?null:(f=1/f,n*=f,a*=f,s*=f,h=Math.sin(t),g=Math.cos(t),l=1-g,e[0]=n*n*l+g,e[1]=a*n*l+s*h,e[2]=s*n*l-a*h,e[3]=0,e[4]=n*a*l-s*h,e[5]=a*a*l+g,e[6]=s*a*l+n*h,e[7]=0,e[8]=n*s*l+a*h,e[9]=a*s*l-n*h,e[10]=s*s*l+g,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}function ff(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=r,e[7]=0,e[8]=0,e[9]=-r,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function df(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=0,e[2]=-r,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=r,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function hf(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=r,e[2]=0,e[3]=0,e[4]=-r,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Tu(e,t,r){var n=t[0],a=t[1],s=t[2],f=t[3],h=n+n,g=a+a,l=s+s,u=n*h,d=n*g,C=n*l,M=a*g,L=a*l,v=s*l,y=f*h,I=f*g,P=f*l;return e[0]=1-(M+v),e[1]=d+P,e[2]=C-I,e[3]=0,e[4]=d-P,e[5]=1-(u+v),e[6]=L+y,e[7]=0,e[8]=C+I,e[9]=L-y,e[10]=1-(u+M),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e}function pf(e,t){var r=new mt(3),n=-t[0],a=-t[1],s=-t[2],f=t[3],h=t[4],g=t[5],l=t[6],u=t[7],d=n*n+a*a+s*s+f*f;return d>0?(r[0]=(h*f+u*n+g*s-l*a)*2/d,r[1]=(g*f+u*a+l*n-h*s)*2/d,r[2]=(l*f+u*s+h*a-g*n)*2/d):(r[0]=(h*f+u*n+g*s-l*a)*2,r[1]=(g*f+u*a+l*n-h*s)*2,r[2]=(l*f+u*s+h*a-g*n)*2),Tu(e,t,r),e}function vf(e,t){return e[0]=t[12],e[1]=t[13],e[2]=t[14],e}function Ru(e,t){var r=t[0],n=t[1],a=t[2],s=t[4],f=t[5],h=t[6],g=t[8],l=t[9],u=t[10];return e[0]=Math.hypot(r,n,a),e[1]=Math.hypot(s,f,h),e[2]=Math.hypot(g,l,u),e}function mf(e,t){var r=new mt(3);Ru(r,t);var n=1/r[0],a=1/r[1],s=1/r[2],f=t[0]*n,h=t[1]*a,g=t[2]*s,l=t[4]*n,u=t[5]*a,d=t[6]*s,C=t[8]*n,M=t[9]*a,L=t[10]*s,v=f+u+L,y=0;return v>0?(y=Math.sqrt(v+1)*2,e[3]=.25*y,e[0]=(d-M)/y,e[1]=(C-g)/y,e[2]=(h-l)/y):f>u&&f>L?(y=Math.sqrt(1+f-u-L)*2,e[3]=(d-M)/y,e[0]=.25*y,e[1]=(h+l)/y,e[2]=(C+g)/y):u>L?(y=Math.sqrt(1+u-f-L)*2,e[3]=(C-g)/y,e[0]=(h+l)/y,e[1]=.25*y,e[2]=(d+M)/y):(y=Math.sqrt(1+L-f-u)*2,e[3]=(h-l)/y,e[0]=(C+g)/y,e[1]=(d+M)/y,e[2]=.25*y),e}function xf(e,t,r,n){var a=t[0],s=t[1],f=t[2],h=t[3],g=a+a,l=s+s,u=f+f,d=a*g,C=a*l,M=a*u,L=s*l,v=s*u,y=f*u,I=h*g,P=h*l,D=h*u,Z=n[0],O=n[1],B=n[2];return e[0]=(1-(L+y))*Z,e[1]=(C+D)*Z,e[2]=(M-P)*Z,e[3]=0,e[4]=(C-D)*O,e[5]=(1-(d+y))*O,e[6]=(v+I)*O,e[7]=0,e[8]=(M+P)*B,e[9]=(v-I)*B,e[10]=(1-(d+L))*B,e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e}function yf(e,t,r,n,a){var s=t[0],f=t[1],h=t[2],g=t[3],l=s+s,u=f+f,d=h+h,C=s*l,M=s*u,L=s*d,v=f*u,y=f*d,I=h*d,P=g*l,D=g*u,Z=g*d,O=n[0],B=n[1],K=n[2],V=a[0],X=a[1],Q=a[2],ge=(1-(v+I))*O,q=(M+Z)*O,ve=(L-D)*O,de=(M-Z)*B,Me=(1-(C+I))*B,_e=(y+P)*B,Te=(L+D)*K,me=(y-P)*K,ce=(1-(C+v))*K;return e[0]=ge,e[1]=q,e[2]=ve,e[3]=0,e[4]=de,e[5]=Me,e[6]=_e,e[7]=0,e[8]=Te,e[9]=me,e[10]=ce,e[11]=0,e[12]=r[0]+V-(ge*V+de*X+Te*Q),e[13]=r[1]+X-(q*V+Me*X+me*Q),e[14]=r[2]+Q-(ve*V+_e*X+ce*Q),e[15]=1,e}function _f(e,t){var r=t[0],n=t[1],a=t[2],s=t[3],f=r+r,h=n+n,g=a+a,l=r*f,u=n*f,d=n*h,C=a*f,M=a*h,L=a*g,v=s*f,y=s*h,I=s*g;return e[0]=1-d-L,e[1]=u+I,e[2]=C-y,e[3]=0,e[4]=u-I,e[5]=1-l-L,e[6]=M+v,e[7]=0,e[8]=C+y,e[9]=M-v,e[10]=1-l-d,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function bf(e,t,r,n,a,s,f){var h=1/(r-t),g=1/(a-n),l=1/(s-f);return e[0]=s*2*h,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s*2*g,e[6]=0,e[7]=0,e[8]=(r+t)*h,e[9]=(a+n)*g,e[10]=(f+s)*l,e[11]=-1,e[12]=0,e[13]=0,e[14]=f*s*2*l,e[15]=0,e}function Nu(e,t,r,n,a){var s=1/Math.tan(t/2),f;return e[0]=s/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,a!=null&&a!==Infinity?(f=1/(n-a),e[10]=(a+n)*f,e[14]=2*a*n*f):(e[10]=-1,e[14]=-2*n),e}var Ef=Nu;function wf(e,t,r,n,a){var s=1/Math.tan(t/2),f;return e[0]=s/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,a!=null&&a!==Infinity?(f=1/(n-a),e[10]=a*f,e[14]=a*n*f):(e[10]=-1,e[14]=-n),e}function Cf(e,t,r,n){var a=Math.tan(t.upDegrees*Math.PI/180),s=Math.tan(t.downDegrees*Math.PI/180),f=Math.tan(t.leftDegrees*Math.PI/180),h=Math.tan(t.rightDegrees*Math.PI/180),g=2/(f+h),l=2/(a+s);return e[0]=g,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=l,e[6]=0,e[7]=0,e[8]=-((f-h)*g*.5),e[9]=(a-s)*l*.5,e[10]=n/(r-n),e[11]=-1,e[12]=0,e[13]=0,e[14]=n*r/(r-n),e[15]=0,e}function Iu(e,t,r,n,a,s,f){var h=1/(t-r),g=1/(n-a),l=1/(s-f);return e[0]=-2*h,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*g,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*l,e[11]=0,e[12]=(t+r)*h,e[13]=(a+n)*g,e[14]=(f+s)*l,e[15]=1,e}var Af=Iu;function Mf(e,t,r,n,a,s,f){var h=1/(t-r),g=1/(n-a),l=1/(s-f);return e[0]=-2*h,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*g,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=l,e[11]=0,e[12]=(t+r)*h,e[13]=(a+n)*g,e[14]=s*l,e[15]=1,e}function Sf(e,t,r,n){var a,s,f,h,g,l,u,d,C,M,L=t[0],v=t[1],y=t[2],I=n[0],P=n[1],D=n[2],Z=r[0],O=r[1],B=r[2];return Math.abs(L-Z)<Qe&&Math.abs(v-O)<Qe&&Math.abs(y-B)<Qe?Mu(e):(u=L-Z,d=v-O,C=y-B,M=1/Math.hypot(u,d,C),u*=M,d*=M,C*=M,a=P*C-D*d,s=D*u-I*C,f=I*d-P*u,M=Math.hypot(a,s,f),M?(M=1/M,a*=M,s*=M,f*=M):(a=0,s=0,f=0),h=d*f-C*s,g=C*a-u*f,l=u*s-d*a,M=Math.hypot(h,g,l),M?(M=1/M,h*=M,g*=M,l*=M):(h=0,g=0,l=0),e[0]=a,e[1]=h,e[2]=u,e[3]=0,e[4]=s,e[5]=g,e[6]=d,e[7]=0,e[8]=f,e[9]=l,e[10]=C,e[11]=0,e[12]=-(a*L+s*v+f*y),e[13]=-(h*L+g*v+l*y),e[14]=-(u*L+d*v+C*y),e[15]=1,e)}function Tf(e,t,r,n){var a=t[0],s=t[1],f=t[2],h=n[0],g=n[1],l=n[2],u=a-r[0],d=s-r[1],C=f-r[2],M=u*u+d*d+C*C;M>0&&(M=1/Math.sqrt(M),u*=M,d*=M,C*=M);var L=g*C-l*d,v=l*u-h*C,y=h*d-g*u;return M=L*L+v*v+y*y,M>0&&(M=1/Math.sqrt(M),L*=M,v*=M,y*=M),e[0]=L,e[1]=v,e[2]=y,e[3]=0,e[4]=d*y-C*v,e[5]=C*L-u*y,e[6]=u*v-d*L,e[7]=0,e[8]=u,e[9]=d,e[10]=C,e[11]=0,e[12]=a,e[13]=s,e[14]=f,e[15]=1,e}function Rf(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}function Nf(e){return Math.hypot(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}function If(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e[4]=t[4]+r[4],e[5]=t[5]+r[5],e[6]=t[6]+r[6],e[7]=t[7]+r[7],e[8]=t[8]+r[8],e[9]=t[9]+r[9],e[10]=t[10]+r[10],e[11]=t[11]+r[11],e[12]=t[12]+r[12],e[13]=t[13]+r[13],e[14]=t[14]+r[14],e[15]=t[15]+r[15],e}function Lu(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e[4]=t[4]-r[4],e[5]=t[5]-r[5],e[6]=t[6]-r[6],e[7]=t[7]-r[7],e[8]=t[8]-r[8],e[9]=t[9]-r[9],e[10]=t[10]-r[10],e[11]=t[11]-r[11],e[12]=t[12]-r[12],e[13]=t[13]-r[13],e[14]=t[14]-r[14],e[15]=t[15]-r[15],e}function Lf(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=t[7]*r,e[8]=t[8]*r,e[9]=t[9]*r,e[10]=t[10]*r,e[11]=t[11]*r,e[12]=t[12]*r,e[13]=t[13]*r,e[14]=t[14]*r,e[15]=t[15]*r,e}function Pf(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e[3]=t[3]+r[3]*n,e[4]=t[4]+r[4]*n,e[5]=t[5]+r[5]*n,e[6]=t[6]+r[6]*n,e[7]=t[7]+r[7]*n,e[8]=t[8]+r[8]*n,e[9]=t[9]+r[9]*n,e[10]=t[10]+r[10]*n,e[11]=t[11]+r[11]*n,e[12]=t[12]+r[12]*n,e[13]=t[13]+r[13]*n,e[14]=t[14]+r[14]*n,e[15]=t[15]+r[15]*n,e}function Df(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]}function kf(e,t){var r=e[0],n=e[1],a=e[2],s=e[3],f=e[4],h=e[5],g=e[6],l=e[7],u=e[8],d=e[9],C=e[10],M=e[11],L=e[12],v=e[13],y=e[14],I=e[15],P=t[0],D=t[1],Z=t[2],O=t[3],B=t[4],K=t[5],V=t[6],X=t[7],Q=t[8],ge=t[9],q=t[10],ve=t[11],de=t[12],Me=t[13],_e=t[14],Te=t[15];return Math.abs(r-P)<=Qe*Math.max(1,Math.abs(r),Math.abs(P))&&Math.abs(n-D)<=Qe*Math.max(1,Math.abs(n),Math.abs(D))&&Math.abs(a-Z)<=Qe*Math.max(1,Math.abs(a),Math.abs(Z))&&Math.abs(s-O)<=Qe*Math.max(1,Math.abs(s),Math.abs(O))&&Math.abs(f-B)<=Qe*Math.max(1,Math.abs(f),Math.abs(B))&&Math.abs(h-K)<=Qe*Math.max(1,Math.abs(h),Math.abs(K))&&Math.abs(g-V)<=Qe*Math.max(1,Math.abs(g),Math.abs(V))&&Math.abs(l-X)<=Qe*Math.max(1,Math.abs(l),Math.abs(X))&&Math.abs(u-Q)<=Qe*Math.max(1,Math.abs(u),Math.abs(Q))&&Math.abs(d-ge)<=Qe*Math.max(1,Math.abs(d),Math.abs(ge))&&Math.abs(C-q)<=Qe*Math.max(1,Math.abs(C),Math.abs(q))&&Math.abs(M-ve)<=Qe*Math.max(1,Math.abs(M),Math.abs(ve))&&Math.abs(L-de)<=Qe*Math.max(1,Math.abs(L),Math.abs(de))&&Math.abs(v-Me)<=Qe*Math.max(1,Math.abs(v),Math.abs(Me))&&Math.abs(y-_e)<=Qe*Math.max(1,Math.abs(y),Math.abs(_e))&&Math.abs(I-Te)<=Qe*Math.max(1,Math.abs(I),Math.abs(Te))}var Of=Su,Ff=Lu;var Nt={};fn(Nt,{add:()=>a2,calculateW:()=>Xd,clone:()=>e2,conjugate:()=>Zd,copy:()=>r2,create:()=>Ys,dot:()=>Xu,equals:()=>l2,exactEquals:()=>u2,exp:()=>Ku,fromEuler:()=>Qd,fromMat3:()=>Qu,fromValues:()=>t2,getAngle:()=>Hd,getAxisAngle:()=>zd,identity:()=>Vd,invert:()=>$d,len:()=>s2,length:()=>Ju,lerp:()=>i2,ln:()=>$u,mul:()=>o2,multiply:()=>Yu,normalize:()=>Ks,pow:()=>Yd,random:()=>Kd,rotateX:()=>qd,rotateY:()=>Wd,rotateZ:()=>jd,rotationTo:()=>g2,scale:()=>Zu,set:()=>n2,setAxes:()=>d2,setAxisAngle:()=>ju,slerp:()=>Go,sqlerp:()=>f2,sqrLen:()=>c2,squaredLength:()=>el,str:()=>Jd});var $e={};fn($e,{add:()=>Vf,angle:()=>sd,bezier:()=>Jf,ceil:()=>zf,clone:()=>Bf,copy:()=>Uf,create:()=>ko,cross:()=>Va,dist:()=>pd,distance:()=>Fu,div:()=>hd,divide:()=>Ou,dot:()=>Fo,equals:()=>gd,exactEquals:()=>ld,floor:()=>Hf,forEach:()=>xd,fromValues:()=>Oo,hermite:()=>Qf,inverse:()=>$f,len:()=>Os,length:()=>Pu,lerp:()=>Zf,max:()=>Wf,min:()=>qf,mul:()=>dd,multiply:()=>ku,negate:()=>Kf,normalize:()=>ks,random:()=>ed,rotateX:()=>ad,rotateY:()=>od,rotateZ:()=>id,round:()=>jf,scale:()=>Xf,scaleAndAdd:()=>Yf,set:()=>Gf,sqrDist:()=>vd,sqrLen:()=>md,squaredDistance:()=>Bu,squaredLength:()=>Uu,str:()=>ud,sub:()=>fd,subtract:()=>Du,transformMat3:()=>rd,transformMat4:()=>td,transformQuat:()=>nd,zero:()=>cd});function ko(){var e=new mt(3);return mt!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function Bf(e){var t=new mt(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function Pu(e){var t=e[0],r=e[1],n=e[2];return Math.hypot(t,r,n)}function Oo(e,t,r){var n=new mt(3);return n[0]=e,n[1]=t,n[2]=r,n}function Uf(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function Gf(e,t,r,n){return e[0]=t,e[1]=r,e[2]=n,e}function Vf(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e}function Du(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e}function ku(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e}function Ou(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e}function zf(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}function Hf(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}function qf(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e}function Wf(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e}function jf(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e}function Xf(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e}function Yf(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e}function Fu(e,t){var r=t[0]-e[0],n=t[1]-e[1],a=t[2]-e[2];return Math.hypot(r,n,a)}function Bu(e,t){var r=t[0]-e[0],n=t[1]-e[1],a=t[2]-e[2];return r*r+n*n+a*a}function Uu(e){var t=e[0],r=e[1],n=e[2];return t*t+r*r+n*n}function Kf(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function $f(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}function ks(e,t){var r=t[0],n=t[1],a=t[2],s=r*r+n*n+a*a;return s>0&&(s=1/Math.sqrt(s)),e[0]=t[0]*s,e[1]=t[1]*s,e[2]=t[2]*s,e}function Fo(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Va(e,t,r){var n=t[0],a=t[1],s=t[2],f=r[0],h=r[1],g=r[2];return e[0]=a*g-s*h,e[1]=s*f-n*g,e[2]=n*h-a*f,e}function Zf(e,t,r,n){var a=t[0],s=t[1],f=t[2];return e[0]=a+n*(r[0]-a),e[1]=s+n*(r[1]-s),e[2]=f+n*(r[2]-f),e}function Qf(e,t,r,n,a,s){var f=s*s,h=f*(2*s-3)+1,g=f*(s-2)+s,l=f*(s-1),u=f*(3-2*s);return e[0]=t[0]*h+r[0]*g+n[0]*l+a[0]*u,e[1]=t[1]*h+r[1]*g+n[1]*l+a[1]*u,e[2]=t[2]*h+r[2]*g+n[2]*l+a[2]*u,e}function Jf(e,t,r,n,a,s){var f=1-s,h=f*f,g=s*s,l=h*f,u=3*s*h,d=3*g*f,C=g*s;return e[0]=t[0]*l+r[0]*u+n[0]*d+a[0]*C,e[1]=t[1]*l+r[1]*u+n[1]*d+a[1]*C,e[2]=t[2]*l+r[2]*u+n[2]*d+a[2]*C,e}function ed(e,t){t=t||1;var r=fr()*2*Math.PI,n=fr()*2-1,a=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(r)*a,e[1]=Math.sin(r)*a,e[2]=n*t,e}function td(e,t,r){var n=t[0],a=t[1],s=t[2],f=r[3]*n+r[7]*a+r[11]*s+r[15];return f=f||1,e[0]=(r[0]*n+r[4]*a+r[8]*s+r[12])/f,e[1]=(r[1]*n+r[5]*a+r[9]*s+r[13])/f,e[2]=(r[2]*n+r[6]*a+r[10]*s+r[14])/f,e}function rd(e,t,r){var n=t[0],a=t[1],s=t[2];return e[0]=n*r[0]+a*r[3]+s*r[6],e[1]=n*r[1]+a*r[4]+s*r[7],e[2]=n*r[2]+a*r[5]+s*r[8],e}function nd(e,t,r){var n=r[0],a=r[1],s=r[2],f=r[3],h=t[0],g=t[1],l=t[2],u=a*l-s*g,d=s*h-n*l,C=n*g-a*h,M=a*C-s*d,L=s*u-n*C,v=n*d-a*u,y=f*2;return u*=y,d*=y,C*=y,M*=2,L*=2,v*=2,e[0]=h+u+M,e[1]=g+d+L,e[2]=l+C+v,e}function ad(e,t,r,n){var a=[],s=[];return a[0]=t[0]-r[0],a[1]=t[1]-r[1],a[2]=t[2]-r[2],s[0]=a[0],s[1]=a[1]*Math.cos(n)-a[2]*Math.sin(n),s[2]=a[1]*Math.sin(n)+a[2]*Math.cos(n),e[0]=s[0]+r[0],e[1]=s[1]+r[1],e[2]=s[2]+r[2],e}function od(e,t,r,n){var a=[],s=[];return a[0]=t[0]-r[0],a[1]=t[1]-r[1],a[2]=t[2]-r[2],s[0]=a[2]*Math.sin(n)+a[0]*Math.cos(n),s[1]=a[1],s[2]=a[2]*Math.cos(n)-a[0]*Math.sin(n),e[0]=s[0]+r[0],e[1]=s[1]+r[1],e[2]=s[2]+r[2],e}function id(e,t,r,n){var a=[],s=[];return a[0]=t[0]-r[0],a[1]=t[1]-r[1],a[2]=t[2]-r[2],s[0]=a[0]*Math.cos(n)-a[1]*Math.sin(n),s[1]=a[0]*Math.sin(n)+a[1]*Math.cos(n),s[2]=a[2],e[0]=s[0]+r[0],e[1]=s[1]+r[1],e[2]=s[2]+r[2],e}function sd(e,t){var r=e[0],n=e[1],a=e[2],s=t[0],f=t[1],h=t[2],g=Math.sqrt(r*r+n*n+a*a),l=Math.sqrt(s*s+f*f+h*h),u=g*l,d=u&&Fo(e,t)/u;return Math.acos(Math.min(Math.max(d,-1),1))}function cd(e){return e[0]=0,e[1]=0,e[2]=0,e}function ud(e){return"vec3("+e[0]+", "+e[1]+", "+e[2]+")"}function ld(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function gd(e,t){var r=e[0],n=e[1],a=e[2],s=t[0],f=t[1],h=t[2];return Math.abs(r-s)<=Qe*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(n-f)<=Qe*Math.max(1,Math.abs(n),Math.abs(f))&&Math.abs(a-h)<=Qe*Math.max(1,Math.abs(a),Math.abs(h))}var fd=Du,dd=ku,hd=Ou,pd=Fu,vd=Bu,Os=Pu,md=Uu,xd=function(){var e=ko();return function(t,r,n,a,s,f){var h,g;for(r||(r=3),n||(n=0),a?g=Math.min(a*r+n,t.length):g=t.length,h=n;h<g;h+=r)e[0]=t[h],e[1]=t[h+1],e[2]=t[h+2],s(e,e,f),t[h]=e[0],t[h+1]=e[1],t[h+2]=e[2];return t}}();var xr={};fn(xr,{add:()=>Vs,ceil:()=>yd,clone:()=>Fs,copy:()=>Us,create:()=>Gu,cross:()=>Sd,dist:()=>Od,distance:()=>qu,div:()=>kd,divide:()=>Hu,dot:()=>qs,equals:()=>Xs,exactEquals:()=>js,floor:()=>_d,forEach:()=>Gd,fromValues:()=>Bs,inverse:()=>Md,len:()=>Bd,length:()=>Bo,lerp:()=>Ws,max:()=>Ed,min:()=>bd,mul:()=>Dd,multiply:()=>zu,negate:()=>Ad,normalize:()=>Hs,random:()=>Td,round:()=>wd,scale:()=>zs,scaleAndAdd:()=>Cd,set:()=>Gs,sqrDist:()=>Fd,sqrLen:()=>Ud,squaredDistance:()=>Wu,squaredLength:()=>Uo,str:()=>Ld,sub:()=>Pd,subtract:()=>Vu,transformMat4:()=>Rd,transformQuat:()=>Nd,zero:()=>Id});function Gu(){var e=new mt(4);return mt!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function Fs(e){var t=new mt(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function Bs(e,t,r,n){var a=new mt(4);return a[0]=e,a[1]=t,a[2]=r,a[3]=n,a}function Us(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function Gs(e,t,r,n,a){return e[0]=t,e[1]=r,e[2]=n,e[3]=a,e}function Vs(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e}function Vu(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e}function zu(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e}function Hu(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e}function yd(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e}function _d(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e}function bd(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e}function Ed(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e}function wd(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e}function zs(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e}function Cd(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e[3]=t[3]+r[3]*n,e}function qu(e,t){var r=t[0]-e[0],n=t[1]-e[1],a=t[2]-e[2],s=t[3]-e[3];return Math.hypot(r,n,a,s)}function Wu(e,t){var r=t[0]-e[0],n=t[1]-e[1],a=t[2]-e[2],s=t[3]-e[3];return r*r+n*n+a*a+s*s}function Bo(e){var t=e[0],r=e[1],n=e[2],a=e[3];return Math.hypot(t,r,n,a)}function Uo(e){var t=e[0],r=e[1],n=e[2],a=e[3];return t*t+r*r+n*n+a*a}function Ad(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e}function Md(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e}function Hs(e,t){var r=t[0],n=t[1],a=t[2],s=t[3],f=r*r+n*n+a*a+s*s;return f>0&&(f=1/Math.sqrt(f)),e[0]=r*f,e[1]=n*f,e[2]=a*f,e[3]=s*f,e}function qs(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function Sd(e,t,r,n){var a=r[0]*n[1]-r[1]*n[0],s=r[0]*n[2]-r[2]*n[0],f=r[0]*n[3]-r[3]*n[0],h=r[1]*n[2]-r[2]*n[1],g=r[1]*n[3]-r[3]*n[1],l=r[2]*n[3]-r[3]*n[2],u=t[0],d=t[1],C=t[2],M=t[3];return e[0]=d*l-C*g+M*h,e[1]=-(u*l)+C*f-M*s,e[2]=u*g-d*f+M*a,e[3]=-(u*h)+d*s-C*a,e}function Ws(e,t,r,n){var a=t[0],s=t[1],f=t[2],h=t[3];return e[0]=a+n*(r[0]-a),e[1]=s+n*(r[1]-s),e[2]=f+n*(r[2]-f),e[3]=h+n*(r[3]-h),e}function Td(e,t){t=t||1;var r,n,a,s,f,h;do r=fr()*2-1,n=fr()*2-1,f=r*r+n*n;while(f>=1);do a=fr()*2-1,s=fr()*2-1,h=a*a+s*s;while(h>=1);var g=Math.sqrt((1-f)/h);return e[0]=t*r,e[1]=t*n,e[2]=t*a*g,e[3]=t*s*g,e}function Rd(e,t,r){var n=t[0],a=t[1],s=t[2],f=t[3];return e[0]=r[0]*n+r[4]*a+r[8]*s+r[12]*f,e[1]=r[1]*n+r[5]*a+r[9]*s+r[13]*f,e[2]=r[2]*n+r[6]*a+r[10]*s+r[14]*f,e[3]=r[3]*n+r[7]*a+r[11]*s+r[15]*f,e}function Nd(e,t,r){var n=t[0],a=t[1],s=t[2],f=r[0],h=r[1],g=r[2],l=r[3],u=l*n+h*s-g*a,d=l*a+g*n-f*s,C=l*s+f*a-h*n,M=-f*n-h*a-g*s;return e[0]=u*l+M*-f+d*-g-C*-h,e[1]=d*l+M*-h+C*-f-u*-g,e[2]=C*l+M*-g+u*-h-d*-f,e[3]=t[3],e}function Id(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e}function Ld(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}function js(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function Xs(e,t){var r=e[0],n=e[1],a=e[2],s=e[3],f=t[0],h=t[1],g=t[2],l=t[3];return Math.abs(r-f)<=Qe*Math.max(1,Math.abs(r),Math.abs(f))&&Math.abs(n-h)<=Qe*Math.max(1,Math.abs(n),Math.abs(h))&&Math.abs(a-g)<=Qe*Math.max(1,Math.abs(a),Math.abs(g))&&Math.abs(s-l)<=Qe*Math.max(1,Math.abs(s),Math.abs(l))}var Pd=Vu,Dd=zu,kd=Hu,Od=qu,Fd=Wu,Bd=Bo,Ud=Uo,Gd=function(){var e=Gu();return function(t,r,n,a,s,f){var h,g;for(r||(r=4),n||(n=0),a?g=Math.min(a*r+n,t.length):g=t.length,h=n;h<g;h+=r)e[0]=t[h],e[1]=t[h+1],e[2]=t[h+2],e[3]=t[h+3],s(e,e,f),t[h]=e[0],t[h+1]=e[1],t[h+2]=e[2],t[h+3]=e[3];return t}}();function Ys(){var e=new mt(4);return mt!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e[3]=1,e}function Vd(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e}function ju(e,t,r){r=r*.5;var n=Math.sin(r);return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=Math.cos(r),e}function zd(e,t){var r=Math.acos(t[3])*2,n=Math.sin(r/2);return n>Qe?(e[0]=t[0]/n,e[1]=t[1]/n,e[2]=t[2]/n):(e[0]=1,e[1]=0,e[2]=0),r}function Hd(e,t){var r=Xu(e,t);return Math.acos(2*r*r-1)}function Yu(e,t,r){var n=t[0],a=t[1],s=t[2],f=t[3],h=r[0],g=r[1],l=r[2],u=r[3];return e[0]=n*u+f*h+a*l-s*g,e[1]=a*u+f*g+s*h-n*l,e[2]=s*u+f*l+n*g-a*h,e[3]=f*u-n*h-a*g-s*l,e}function qd(e,t,r){r*=.5;var n=t[0],a=t[1],s=t[2],f=t[3],h=Math.sin(r),g=Math.cos(r);return e[0]=n*g+f*h,e[1]=a*g+s*h,e[2]=s*g-a*h,e[3]=f*g-n*h,e}function Wd(e,t,r){r*=.5;var n=t[0],a=t[1],s=t[2],f=t[3],h=Math.sin(r),g=Math.cos(r);return e[0]=n*g-s*h,e[1]=a*g+f*h,e[2]=s*g+n*h,e[3]=f*g-a*h,e}function jd(e,t,r){r*=.5;var n=t[0],a=t[1],s=t[2],f=t[3],h=Math.sin(r),g=Math.cos(r);return e[0]=n*g+a*h,e[1]=a*g-n*h,e[2]=s*g+f*h,e[3]=f*g-s*h,e}function Xd(e,t){var r=t[0],n=t[1],a=t[2];return e[0]=r,e[1]=n,e[2]=a,e[3]=Math.sqrt(Math.abs(1-r*r-n*n-a*a)),e}function Ku(e,t){var r=t[0],n=t[1],a=t[2],s=t[3],f=Math.sqrt(r*r+n*n+a*a),h=Math.exp(s),g=f>0?h*Math.sin(f)/f:0;return e[0]=r*g,e[1]=n*g,e[2]=a*g,e[3]=h*Math.cos(f),e}function $u(e,t){var r=t[0],n=t[1],a=t[2],s=t[3],f=Math.sqrt(r*r+n*n+a*a),h=f>0?Math.atan2(f,s)/f:0;return e[0]=r*h,e[1]=n*h,e[2]=a*h,e[3]=.5*Math.log(r*r+n*n+a*a+s*s),e}function Yd(e,t,r){return $u(e,t),Zu(e,e,r),Ku(e,e),e}function Go(e,t,r,n){var a=t[0],s=t[1],f=t[2],h=t[3],g=r[0],l=r[1],u=r[2],d=r[3],C,M,L,v,y;return M=a*g+s*l+f*u+h*d,M<0&&(M=-M,g=-g,l=-l,u=-u,d=-d),1-M>Qe?(C=Math.acos(M),L=Math.sin(C),v=Math.sin((1-n)*C)/L,y=Math.sin(n*C)/L):(v=1-n,y=n),e[0]=v*a+y*g,e[1]=v*s+y*l,e[2]=v*f+y*u,e[3]=v*h+y*d,e}function Kd(e){var t=fr(),r=fr(),n=fr(),a=Math.sqrt(1-t),s=Math.sqrt(t);return e[0]=a*Math.sin(2*Math.PI*r),e[1]=a*Math.cos(2*Math.PI*r),e[2]=s*Math.sin(2*Math.PI*n),e[3]=s*Math.cos(2*Math.PI*n),e}function $d(e,t){var r=t[0],n=t[1],a=t[2],s=t[3],f=r*r+n*n+a*a+s*s,h=f?1/f:0;return e[0]=-r*h,e[1]=-n*h,e[2]=-a*h,e[3]=s*h,e}function Zd(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function Qu(e,t){var r=t[0]+t[4]+t[8],n;if(r>0)n=Math.sqrt(r+1),e[3]=.5*n,n=.5/n,e[0]=(t[5]-t[7])*n,e[1]=(t[6]-t[2])*n,e[2]=(t[1]-t[3])*n;else{var a=0;t[4]>t[0]&&(a=1),t[8]>t[a*3+a]&&(a=2);var s=(a+1)%3,f=(a+2)%3;n=Math.sqrt(t[a*3+a]-t[s*3+s]-t[f*3+f]+1),e[a]=.5*n,n=.5/n,e[3]=(t[s*3+f]-t[f*3+s])*n,e[s]=(t[s*3+a]+t[a*3+s])*n,e[f]=(t[f*3+a]+t[a*3+f])*n}return e}function Qd(e,t,r,n){var a=.5*Math.PI/180;t*=a,r*=a,n*=a;var s=Math.sin(t),f=Math.cos(t),h=Math.sin(r),g=Math.cos(r),l=Math.sin(n),u=Math.cos(n);return e[0]=s*g*u-f*h*l,e[1]=f*h*u+s*g*l,e[2]=f*g*l-s*h*u,e[3]=f*g*u+s*h*l,e}function Jd(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}var e2=Fs,t2=Bs,r2=Us,n2=Gs,a2=Vs,o2=Yu,Zu=zs,Xu=qs,i2=Ws,Ju=Bo,s2=Ju,el=Uo,c2=el,Ks=Hs,u2=js,l2=Xs,g2=function(){var e=ko(),t=Oo(1,0,0),r=Oo(0,1,0);return function(n,a,s){var f=Fo(a,s);return f<-.999999?(Va(e,t,a),Os(e)<1e-6&&Va(e,r,a),ks(e,e),ju(n,e,Math.PI),n):f>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(Va(e,a,s),n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=1+f,Ks(n,n))}}(),f2=function(){var e=Ys(),t=Ys();return function(r,n,a,s,f,h){return Go(e,n,f,h),Go(t,a,s,h),Go(r,e,t,2*h*(1-h)),r}}(),d2=function(){var e=Au();return function(t,r,n,a){return e[0]=n[0],e[3]=n[1],e[6]=n[2],e[1]=a[0],e[4]=a[1],e[7]=a[2],e[2]=-r[0],e[5]=-r[1],e[8]=-r[2],Ks(t,Qu(t,e))}}();var Ve={};fn(Ve,{add:()=>x2,angle:()=>B2,ceil:()=>y2,clone:()=>h2,copy:()=>v2,create:()=>tl,cross:()=>N2,dist:()=>X2,distance:()=>ol,div:()=>j2,divide:()=>al,dot:()=>R2,equals:()=>z2,exactEquals:()=>V2,floor:()=>_2,forEach:()=>$2,fromValues:()=>p2,inverse:()=>S2,len:()=>H2,length:()=>sl,lerp:()=>I2,max:()=>E2,min:()=>b2,mul:()=>W2,multiply:()=>nl,negate:()=>M2,normalize:()=>T2,random:()=>L2,rotate:()=>F2,round:()=>w2,scale:()=>C2,scaleAndAdd:()=>A2,set:()=>m2,sqrDist:()=>Y2,sqrLen:()=>K2,squaredDistance:()=>il,squaredLength:()=>cl,str:()=>G2,sub:()=>q2,subtract:()=>rl,transformMat2:()=>P2,transformMat2d:()=>D2,transformMat3:()=>k2,transformMat4:()=>O2,zero:()=>U2});function tl(){var e=new mt(2);return mt!=Float32Array&&(e[0]=0,e[1]=0),e}function h2(e){var t=new mt(2);return t[0]=e[0],t[1]=e[1],t}function p2(e,t){var r=new mt(2);return r[0]=e,r[1]=t,r}function v2(e,t){return e[0]=t[0],e[1]=t[1],e}function m2(e,t,r){return e[0]=t,e[1]=r,e}function x2(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e}function rl(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e}function nl(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e}function al(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e}function y2(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e}function _2(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e}function b2(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e}function E2(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e}function w2(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e}function C2(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e}function A2(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e}function ol(e,t){var r=t[0]-e[0],n=t[1]-e[1];return Math.hypot(r,n)}function il(e,t){var r=t[0]-e[0],n=t[1]-e[1];return r*r+n*n}function sl(e){var t=e[0],r=e[1];return Math.hypot(t,r)}function cl(e){var t=e[0],r=e[1];return t*t+r*r}function M2(e,t){return e[0]=-t[0],e[1]=-t[1],e}function S2(e,t){return e[0]=1/t[0],e[1]=1/t[1],e}function T2(e,t){var r=t[0],n=t[1],a=r*r+n*n;return a>0&&(a=1/Math.sqrt(a)),e[0]=t[0]*a,e[1]=t[1]*a,e}function R2(e,t){return e[0]*t[0]+e[1]*t[1]}function N2(e,t,r){var n=t[0]*r[1]-t[1]*r[0];return e[0]=e[1]=0,e[2]=n,e}function I2(e,t,r,n){var a=t[0],s=t[1];return e[0]=a+n*(r[0]-a),e[1]=s+n*(r[1]-s),e}function L2(e,t){t=t||1;var r=fr()*2*Math.PI;return e[0]=Math.cos(r)*t,e[1]=Math.sin(r)*t,e}function P2(e,t,r){var n=t[0],a=t[1];return e[0]=r[0]*n+r[2]*a,e[1]=r[1]*n+r[3]*a,e}function D2(e,t,r){var n=t[0],a=t[1];return e[0]=r[0]*n+r[2]*a+r[4],e[1]=r[1]*n+r[3]*a+r[5],e}function k2(e,t,r){var n=t[0],a=t[1];return e[0]=r[0]*n+r[3]*a+r[6],e[1]=r[1]*n+r[4]*a+r[7],e}function O2(e,t,r){var n=t[0],a=t[1];return e[0]=r[0]*n+r[4]*a+r[12],e[1]=r[1]*n+r[5]*a+r[13],e}function F2(e,t,r,n){var a=t[0]-r[0],s=t[1]-r[1],f=Math.sin(n),h=Math.cos(n);return e[0]=a*h-s*f+r[0],e[1]=a*f+s*h+r[1],e}function B2(e,t){var r=e[0],n=e[1],a=t[0],s=t[1],f=Math.sqrt(r*r+n*n)*Math.sqrt(a*a+s*s),h=f&&(r*a+n*s)/f;return Math.acos(Math.min(Math.max(h,-1),1))}function U2(e){return e[0]=0,e[1]=0,e}function G2(e){return"vec2("+e[0]+", "+e[1]+")"}function V2(e,t){return e[0]===t[0]&&e[1]===t[1]}function z2(e,t){var r=e[0],n=e[1],a=t[0],s=t[1];return Math.abs(r-a)<=Qe*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(n-s)<=Qe*Math.max(1,Math.abs(n),Math.abs(s))}var H2=sl,q2=rl,W2=nl,j2=al,X2=ol,Y2=il,K2=cl,$2=function(){var e=tl();return function(t,r,n,a,s,f){var h,g;for(r||(r=2),n||(n=0),a?g=Math.min(a*r+n,t.length):g=t.length,h=n;h<g;h+=r)e[0]=t[h],e[1]=t[h+1],s(e,e,f),t[h]=e[0],t[h+1]=e[1];return t}}();var Vo=class{get texture(){return this.update(),this._texture}get capacity(){return this.textureSize[0]*this.textureSize[1]}constructor(e,t=1024){this.context=e,this.textureSize=Ve.create(),this.resizeTexture(t)}destroy(){this._texture.delete(),this.context=null,this.textureSize=null,this._texture=null}createTexture(e,t){return this.context.createTexture2D(e,t)}resizeTexture(e){if(this.capacity<e){let t=Math.pow(2,Math.ceil(Math.log2(Math.ceil(Math.sqrt(e))))),r=Math.pow(2,Math.ceil(Math.log2(Math.ceil(e/t))));this.textureSize=Ve.fromValues(t,r),this._texture?this._texture.resize(t,r):this._texture=this.createTexture(t,r)}}};var Z2=`#version 300 es
#define GLSLIFY 1

layout(location=0) in uint aIndex;

uniform sampler2D uDataTexture;

flat out vec3 vPosition;
flat out float vRadius;
flat out float vYolo;

vec4 getValueByIndexFromTexture(sampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

void main() {
    vec4 value = getValueByIndexFromTexture(uDataTexture, int(aIndex));
    vPosition = value.xyz;
    vRadius = value.w;
    vYolo = value.w / 10.0;
}
`,Q2=`#version 300 es
#define GLSLIFY 1
void main() {}
`,ul={id:(e,t)=>"id"in e?e.id:t,x:e=>e.x,y:e=>e.y,z:e=>"z"in e?e.z:0,radius:e=>"radius"in e?e.radius:0},J2={x:xe.FLOAT,y:xe.FLOAT,z:xe.FLOAT,radius:xe.FLOAT},ll=class extends Vo{constructor(e,t,r={}){super(e,t.length);this._length=0,this.dirty=!1,this.map=new Map,this.bb={min:$e.fromValues(Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER),max:$e.fromValues(Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER)},this.bbCenter=$e.create(),this._dataBuffer=this.packData(t,r,!0),this._dataView=new DataView(this._dataBuffer);let n=$e.sub($e.create(),this.bb.max,this.bb.min);this.bbDiagonal=$e.length(n),this.bbCenter=$e.add($e.create(),this.bb.min,$e.mul($e.create(),n,$e.fromValues(.5,.5,.5))),this._length=t.length,this.dirty=!0}static createGraphFromNodes(e,t,r={}){let n=0,a=Object.assign({},ul,{id:()=>n++},r),s=wu(t,a);return new this(e,s)}get dataBuffer(){return this._dataBuffer}get dataView(){return this._dataView}get length(){return this._length}destroy(){super.destroy(),this.map.clear(),this._dataBuffer=null,this.map=null}update(){if(this.dirty){let e=new Float32Array(this._dataBuffer);this._texture.data(e)}this.dirty=!1}getPointIndex(e){return this.map.get(e)}getPointByIndex(e){return[this._dataView.getFloat32(e*16,!0),this._dataView.getFloat32(e*16+4,!0),this._dataView.getFloat32(e*16+8,!0),this._dataView.getFloat32(e*16+12,!0)]}getPointByID(e){return this.getPointByIndex(this.getPointIndex(e))}addPoints(e,t={}){this.resizeTexture(this._length+e.length);let r=new ArrayBuffer(this.capacity*16),n=new Uint8Array(r),a=this.packData(e,t,!1),s=new Uint8Array(a),f=new Uint8Array(this._dataBuffer,0,this._length*16);n.set(f),n.set(s,f.length),this._dataBuffer=r,this._dataView=new DataView(this._dataBuffer),this._length+=e.length,this.dirty=!0}createTexture(e,t){return this.context.createTexture2D(e,t,{internalFormat:xe.RGBA32F})}packData(e,t,r){let n=Object.assign({},ul,t);return Un(e,n,J2,r,(a,s)=>{this.map.set(s.id,this._length+a),this.bb.min[0]=Math.min(this.bb.min[0],s.x-s.radius),this.bb.min[1]=Math.min(this.bb.min[1],s.y-s.radius),this.bb.min[2]=Math.min(this.bb.min[2],s.z),this.bb.max[0]=Math.max(this.bb.max[0],s.x+s.radius),this.bb.max[1]=Math.max(this.bb.max[1],s.y+s.radius),this.bb.max[2]=Math.max(this.bb.max[2],s.z)})}testFeedback(e){let t=e.createProgram(Z2,Q2,{transformFeedbackVaryings:["vPosition","vRadius","vYolo"],transformFeedbackMode:xe.INTERLEAVED_ATTRIBS}),r=e.createVertexBuffer(xe.FLOAT,4,40),n=e.createVertexBuffer(xe.UNSIGNED_BYTE,1,new Uint8Array([0,1,2,3,4,5])),a=e.createTransformFeedback().feedbackBuffer(0,r),s=e.createVertexArray().vertexAttributeBuffer(0,n),f=e.createDrawCall(t,s).transformFeedback(a);f.primitive(xe.POINTS),f.texture("uDataTexture",this.texture),e.enable(xe.RASTERIZER_DISCARD),f.draw(),e.disable(xe.RASTERIZER_DISCARD),Do(e,r,6,{position:[xe.FLOAT,xe.FLOAT,xe.FLOAT],radius:xe.FLOAT,yolo:xe.FLOAT})}};var eh=`#version 300 es
#define GLSLIFY 1
void main() {}
`,gl=class{get dataTexture(){return this.points.texture}constructor(...e){this.initialize(...e)}initialize(e,t,r,n){this.points=t,this.ingestData(e,r,n),this.initializeTargetBuffers(e,this.dataBuffer.byteLength/this.dataStride),this.initializeDataDrawCall(e)}ingestData(e,t,r){let n=this.computeMappings(r),a=Ds(this.getGLSourceTypes(),n);this.dataBuffer=Un(t,n,a,!1,this.packDataCB()),this.dataView=new DataView(this.dataBuffer);let s=Bn(a);this.dataStride=s.stride,this.sourceVBO=e.createInterleavedBuffer(this.dataStride,this.dataView),this.sourceVAO=e.createVertexArray(),Ps(this.sourceVAO,this.sourceVBO,a,s)}initializeTargetBuffers(e,t){let r=this.getGLTargetTypes(),n=Bn(r).stride;this.targetVBO=e.createInterleavedBuffer(n,t*n),this.targetTFO=e.createTransformFeedback().feedbackBuffer(0,this.targetVBO)}initializeDataDrawCall(e){let t=this.getDataShader();this.dataProgram=e.createProgram(t.vs,eh,{transformFeedbackVaryings:t.varyings,transformFeedbackMode:oe.INTERLEAVED_ATTRIBS}),this.dataDrawCall=e.createDrawCall(this.dataProgram,this.sourceVAO).transformFeedback(this.targetTFO),this.dataDrawCall.primitive(oe.POINTS)}compute(e,t){bt(this.dataDrawCall,t),e.enable(oe.RASTERIZER_DISCARD),this.dataDrawCall.draw(),e.disable(oe.RASTERIZER_DISCARD)}configureTargetVAO(e,t=1){let r=this.getGLTargetTypes(),n=Bn(r);Ps(e,this.targetVBO,r,n,t,!0)}packDataCB(){return()=>null}};var za;(function(e){e[e["2D"]=0]="2D",e[e["3D"]=1]="3D"})(za||(za={}));var rh={mode:0,position:$e.fromValues(0,0,-500)},fl=class{constructor(e,t){this._aovRad=0,this._aov=0,this._nearPlane=1,this._farPlane=1e3;let r=Object.assign({},rh,t);this._position=$e.copy($e.create(),r.position),this._mode=r.mode,this._rotation=Nt.fromEuler(Nt.create(),0,0,0),this._viewMatrix=ar.create(),this._projectionMatrix=ar.create(),this._viewportSize=Ve.copy(Ve.create(),e),this._aspect=this._viewportSize[0]/this._viewportSize[1],this.aov=45,this.calculateProjectionMatrix()}get mode(){return this._mode}set mode(e){this._mode=e,this.calculateProjectionMatrix()}get aovRad(){return this._aovRad}set aovRad(e){this._aovRad=e,this._aov=e*57.29577951308232,this.calculateProjectionMatrix()}get aov(){return this._aov}set aov(e){this._aov=e,this._aovRad=e*.017453292519943295,this.calculateProjectionMatrix()}get nearPlane(){return this._nearPlane}set nearPlane(e){this._nearPlane=e,this.calculateProjectionMatrix()}get farPlane(){return this._farPlane}set farPlane(e){this._farPlane=e,this.calculateProjectionMatrix()}get viewportSize(){return this._viewportSize}set viewportSize(e){Ve.copy(this._viewportSize,e),this._aspect=this._viewportSize[0]/this._viewportSize[1],this.calculateProjectionMatrix()}get position(){return this._position}set position(e){$e.copy(this._position,e)}get rotation(){return this._rotation}set rotation(e){Nt.copy(this._rotation,e)}get target(){return this._target}set target(e){$e.copy(this._target,e)}get aspect(){return this._aspect}get viewMatrix(){return ar.fromQuat(this._viewMatrix,this._rotation),ar.translate(this._viewMatrix,this._viewMatrix,this._position),this._viewMatrix}get projectionMatrix(){return this._projectionMatrix}rotate(e){Nt.mul(this._rotation,e,this._rotation)}calculateProjectionMatrix(){if(this.mode===0){let e=this._viewportSize[0]*.5,t=this._viewportSize[1]*.5;ar.ortho(this._projectionMatrix,-e,e,-t,t,this._nearPlane,this._farPlane)}else ar.perspective(this._projectionMatrix,this._aovRad,this._aspect,this._nearPlane,this._farPlane)}};var zo=Symbol("EventEmitter::omni::event"),$s=class{static mixin(t){let r=t;class n extends r{constructor(){super(...arguments);this.listeners=new Map}static get omniEvent(){return zo}on(s,f){let h=this.listeners.get(s);h?h.add(f):this.listeners.set(s,new Set([f]))}off(s,f){let h=this.listeners.get(s);h&&h.delete(f)}emit(s,...f){if(s!==zo){if(this.listeners.has(s)){let h=new Set(this.listeners.get(s));for(let g of h)g.call(this,s,...f)}if(this.listeners.has(zo)){let h=new Set(this.listeners.get(zo));for(let g of h)g.call(this,s,...f)}}}}return n}},Wt=class extends $s.mixin($s){};var mn=class{constructor(){this._enabled=!1}get enabled(){return this._enabled}set enabled(e){e!==this._enabled&&(this._enabled=e,this._enabled?this.hookEvents():this.unhookEvents())}};var wr={move:Symbol("Grafer::UX::MouseHandler::move"),down:Symbol("Grafer::UX::MouseHandler::down"),up:Symbol("Grafer::UX::MouseHandler::up"),click:Symbol("Grafer::UX::MouseHandler::click"),wheel:Symbol("Grafer::UX::MouseHandler::wheel")};Object.freeze(wr);var Zs={primary:1,secondary:2,auxiliary:4,fourth:8,fifth:16};Object.freeze(Zs);var Qs={1:"primary",2:"secondary",4:"auxiliary",8:"fourth",16:"fifth"};Object.freeze(Qs);var cr=class extends Wt.mixin(mn){constructor(e,t,r,n=!0){super();this.boundHandler=this.handleMouseEvent.bind(this),this.disableContextMenu=a=>a.preventDefault(),this.clickDragThreshold=10,this.canvas=e,this.rect=t,this.pixelRatio=r,this.state={valid:!1,pixelRatio:this.pixelRatio,clientCoords:Ve.create(),canvasCoords:Ve.create(),glCoords:Ve.create(),deltaCoords:Ve.create(),clickPositionDelta:Ve.create(),clickValid:!1,wheel:0,buttons:{primary:!1,secondary:!1,auxiliary:!1,fourth:!1,fifth:!1}},this.newState={valid:!1,pixelRatio:this.pixelRatio,clientCoords:Ve.create(),canvasCoords:Ve.create(),glCoords:Ve.create(),deltaCoords:Ve.create(),clickPositionDelta:Ve.create(),clickValid:!1,wheel:0,buttons:{primary:!1,secondary:!1,auxiliary:!1,fourth:!1,fifth:!1}},this.enabled=n}static get events(){return wr}on(e,t){super.on(e,t)}off(e,t){super.off(e,t)}resize(e,t){this.rect=e,this.pixelRatio=t,this.state.pixelRatio=this.pixelRatio,this.newState.pixelRatio=this.pixelRatio,this.syntheticUpdate(wr.move)}hookEvents(){this.canvas.addEventListener("mouseenter",this.boundHandler),this.canvas.addEventListener("mouseleave",this.boundHandler),this.canvas.addEventListener("mousemove",this.boundHandler),this.canvas.addEventListener("mousedown",this.boundHandler),this.canvas.addEventListener("mouseup",this.boundHandler),this.canvas.addEventListener("wheel",this.boundHandler),this.canvas.addEventListener("contextmenu",this.disableContextMenu)}unhookEvents(){this.canvas.removeEventListener("mouseenter",this.boundHandler),this.canvas.removeEventListener("mouseleave",this.boundHandler),this.canvas.removeEventListener("mousemove",this.boundHandler),this.canvas.removeEventListener("mousedown",this.boundHandler),this.canvas.removeEventListener("mouseup",this.boundHandler),this.canvas.removeEventListener("wheel",this.boundHandler),this.canvas.removeEventListener("contextmenu",this.disableContextMenu)}syntheticUpdate(e,t){switch(e){case wr.up:case wr.down:case wr.click:this.emitEvents([{event:e,args:[t,Qs[t]]}]);break;case wr.move:this.emitEvents([{event:e,args:[Ve.fromValues(0,0),this.state.canvasCoords]}]);break;default:break}}update(e){let t=[];(e.deltaCoords[0]!==0||e.deltaCoords[1]!==0)&&e.valid&&t.push({event:wr.move,args:[e.deltaCoords,e.canvasCoords]});let r=Object.keys(e.buttons);for(let n=0,a=r.length;n<a;++n){let s=r[n],f=e.valid&&e.buttons[s];this.state.buttons[s]!==f&&(this.state.buttons[s]=f,t.push({event:f?wr.down:wr.up,args:[Zs[s],s,f]}))}this.setMouseState(e),this.emitEvents(t)}emitEvents(e){for(let t=0,r=e.length;t<r;++t)this.emit(e[t].event,this.state,...e[t].args)}setMouseState(e){this.state.valid=e.valid,Ve.copy(this.state.clientCoords,e.clientCoords),Ve.copy(this.state.canvasCoords,e.canvasCoords),Ve.copy(this.state.glCoords,e.glCoords),Ve.copy(this.state.deltaCoords,e.deltaCoords),Ve.copy(this.state.clickPositionDelta,e.clickPositionDelta),this.state.clickValid=e.clickValid,this.state.wheel=e.wheel,Object.assign(this.state.buttons,e.buttons)}handleClickEvent(e,t){this.setMouseState(t),this.emitEvents([{event:wr.click,args:[e.button,Qs[e.button]]}])}handleWheelEvent(e,t){this.setMouseState(t);let r;"wheelDeltaY"in e?r=-e.wheelDeltaY/120:r=e.deltaY<1?-1:1,this.emitEvents([{event:wr.wheel,args:[r]}])}handleMouseEvent(e){let t=this.newState.clientCoords,r=this.newState.canvasCoords,n=this.newState.glCoords,a=this.newState.deltaCoords,s=this.rect;switch(Ve.set(t,e.clientX,e.clientY),Ve.set(r,e.clientX-s.left,e.clientY-s.top),Ve.set(n,(e.clientX-s.left)*this.pixelRatio,(s.bottom-e.clientY)*this.pixelRatio),e.type==="mousemove"?(Ve.set(a,e.movementX,e.movementY),this.state.clickValid&&(Ve.add(this.newState.clickPositionDelta,this.state.clickPositionDelta,a),Ve.length(this.newState.clickPositionDelta)>this.clickDragThreshold&&(this.newState.clickValid=!1))):Ve.set(a,0,0),this.newState.valid=Boolean(r[0]>=s.left&&r[0]<=s.right&&r[1]>=0&&r[1]<=s.height),this.newState.buttons.primary=Boolean(e.buttons&1),this.newState.buttons.secondary=Boolean(e.buttons&2),this.newState.buttons.auxiliary=Boolean(e.buttons&4),this.newState.buttons.fourth=Boolean(e.buttons&8),this.newState.buttons.fifth=Boolean(e.buttons&16),e.type){case"mousedown":this.newState.buttons.primary&&(this.newState.clickValid=!0,Ve.set(this.newState.clickPositionDelta,0,0)),this.update(this.newState);break;case"mouseup":this.state.clickValid&&this.handleClickEvent(e,this.newState),this.update(this.newState);break;case"wheel":this.handleWheelEvent(e,this.newState);break;case"mouseleave":this.newState.valid=!1;default:this.update(this.newState);break}}};var Ha;(function(e){e.mapped="mapped",e.indexed="indexed"})(Ha||(Ha={}));var Ho=class extends Vo{constructor(){super(...arguments);this.dirty=!1}};var r0=Ir(t0()),dl=1024,hl=class extends Ho{get length(){return this._length}constructor(e,t=dl){super(e,t);this.colorBuffer=new ArrayBuffer(this.capacity*4),this.colors=new Uint8Array(this.colorBuffer),this._length=0}update(){this.dirty&&this._texture.data(this.colors),this.dirty=!1}registerColor(e){this.resizeBuffer(this._length*4+4);let t=(0,r0.default)(e).rgba(),r=this._length*4;return this.colors[r++]=t[0],this.colors[r++]=t[1],this.colors[r++]=t[2],this.colors[r++]=Math.round(t[3]*255),this.dirty=!0,this._length++}updateColor(e,t){let r=(0,r0.default)(t).rgba(),n=e*4;this.colors[n++]=r[0],this.colors[n++]=r[1],this.colors[n++]=r[2],this.colors[n++]=Math.round(r[3]*255),this.dirty=!0}resizeBuffer(e){if(this.colorBuffer.byteLength<e){let t=Math.max(dl*4,e-this.colorBuffer.byteLength);this.resizeTexture((this.colorBuffer.byteLength+t)/4);let r=new ArrayBuffer(this.capacity*4),n=new Uint8Array(r);n.set(this.colors),this.colorBuffer=r,this.colors=n}}};var nh=400,pl=class{constructor(e){this.callback=e}observe(e){this.elementTarget=e,this.elementTarget.addEventListener("mouseenter",this.handleMouseEnter.bind(this),!1),this.elementTarget.addEventListener("mouseleave",this.handleMouseLeave.bind(this),!1),this.rect=this.elementTarget.getBoundingClientRect()}disconnect(){clearInterval(this.poll),this.elementTarget.removeEventListener("mouseenter",this.handleMouseEnter.bind(this),!1),this.elementTarget.removeEventListener("mouseleave",this.handleMouseLeave.bind(this),!1)}handleMouseEnter(){this.pollElement(),this.poll=setInterval(this.pollElement.bind(this),nh)}pollElement(){let e=this.elementTarget.getBoundingClientRect();this.rectEqual(this.rect,e)||(this.rect=e,this.callback(this.rect))}handleMouseLeave(){this.pollElement(),clearInterval(this.poll)}rectEqual(e,t){return e.width===t.width&&e.height===t.height&&e.top===t.top&&e.left===t.left}};var n0=Ir(t0()),vl=class extends Ho{get length(){return this.colorMap.size}constructor(e,t=1024){super(e,t);this.colorMap=new Map}update(){if(this.dirty){this.colorMap.size>this.capacity&&this.resizeTexture(this.colorMap.size);let e=new Uint8Array(this.capacity*4),t=0;for(let r of this.colorMap.keys()){let n=n0.default.hex(r).rgba();e[t++]=n[0],e[t++]=n[1],e[t++]=n[2],e[t++]=Math.round(n[3]*255)}this._texture.data(e)}this.dirty=!1}registerColor(e){let t=(0,n0.default)(e).hex();return this.colorMap.has(t)||(this.colorMap.set(t,this.colorMap.size),this.dirty=!0),this.colorMap.get(t)}};var ah={colorRegistryType:Ha.mapped,colorRegistryCapacity:1024},ml=class{constructor(e,t){this._clearColor=xr.create(),this.animationFrameID=0,this.timeoutID=0,this.boundDelayedRender=this.delayedRender.bind(this);let r=window.devicePixelRatio,n=Object.assign({},ah,t);this.element=e,this.element instanceof HTMLCanvasElement?this.canvas=this.element:(this.canvas=document.createElement("canvas"),this.canvas.style.width="100%",this.canvas.style.height="100%",this.element.appendChild(this.canvas)),this.rect=this.canvas.getBoundingClientRect(),this.canvas.width=this.rect.width*r,this.canvas.height=this.rect.height*r,this.context=oe.createApp(this.canvas,{antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!0}),this.clearColor=[.141176471,.160784314,.2,1],this.context.clearMask(oe.COLOR_BUFFER_BIT|oe.DEPTH_BUFFER_BIT),this.context.enable(oe.DEPTH_TEST),this.context.enable(oe.POLYGON_OFFSET_FILL),this.context.depthFunc(oe.LESS),this.context.pixelRatio=r,this.mouseHandler=new cr(this.canvas,this.rect,this.pixelRatio),this.size=Ve.fromValues(this.canvas.width,this.canvas.height),this.camera=new fl(this.size,n.camera),new pl(s=>{this.rect=s,this.context.resize(this.rect.width*this.pixelRatio,this.rect.height*this.pixelRatio),Ve.set(this.size,this.canvas.width,this.canvas.height),this.camera.viewportSize=this.size,this.mouseHandler.resize(this.rect,this.pixelRatio),this.graph.resize(this.context),this.render()}).observe(this.canvas),n.colorRegistryType===Ha.mapped?this.colorRegisrty=new vl(this.context,n.colorRegistryCapacity):this.colorRegisrty=new hl(this.context,n.colorRegistryCapacity)}get clearColor(){return this._clearColor}set clearColor(e){xr.copy(this._clearColor,e),this.context.clearColor(...this._clearColor)}get pixelRatio(){return this.context.pixelRatio}resetContextFlags(){this.context.blendFuncSeparate(oe.SRC_ALPHA,oe.ONE_MINUS_SRC_ALPHA,oe.ONE,oe.ONE),this.context.defaultDrawFramebuffer(),this.context.defaultReadFramebuffer(),this.context.disable(oe.BLEND),this.context.enable(oe.DEPTH_TEST),this.context.depthFunc(oe.LESS),this.context.depthMask(!0),this.context.depthRange(0,1),this.context.clearColor(...this._clearColor)}render(){this.animationFrameID||(this.renderMode=Be.DRAFT,this.timeoutID&&(clearTimeout(this.timeoutID),this.timeoutID=0),this.animationFrameID=requestAnimationFrame(()=>this._render()))}scheduleRender(e){this.timeoutID&&clearTimeout(this.timeoutID),this.timeoutID=window.setTimeout(this.boundDelayedRender,e)}delayedRender(){this.timeoutID=0,this._render()}_render(){let e={uViewMatrix:this.camera.viewMatrix,uSceneMatrix:this.graph.matrix,uProjectionMatrix:this.camera.projectionMatrix,uViewportSize:this.size,uPixelRatio:this.pixelRatio,uClearColor:this._clearColor,uColorPalette:this.colorRegisrty.texture,uRenderMode:this.renderMode,uCameraMode:this.camera.mode};if(this.resetContextFlags(),this.context.clear(),this.graph&&this.graph.enabled)switch(this.graph.render(this.context,this.renderMode,e),this.renderMode){case Be.DRAFT:e.uRenderMode=Be.PICKING,this.graph.render(this.context,Be.PICKING,e),this.renderMode=Be.MEDIUM,this.scheduleRender(85);break;case Be.MEDIUM:this.renderMode=Be.HIGH,this.scheduleRender(120);break}this.animationFrameID=0}};var xl=class{constructor(e){this._clearColor=xr.create(),this.context=e,this.resize(e)}get clearColor(){return this._clearColor}set clearColor(e){xr.copy(this._clearColor,e)}resize(e){this.frameBuffer&&this.frameBuffer.delete(),this.colorTarget&&this.colorTarget.delete(),this.depthTarget&&this.depthTarget.delete(),this.colorTarget=e.createTexture2D(e.width,e.height),this.depthTarget=e.createRenderbuffer(e.width,e.height,oe.DEPTH_COMPONENT16),this.frameBuffer=e.createFramebuffer().colorTarget(0,this.colorTarget).depthTarget(this.depthTarget)}prepareContext(e){e.readFramebuffer(this.frameBuffer),e.drawFramebuffer(this.frameBuffer).clearMask(oe.COLOR_BUFFER_BIT|oe.DEPTH_BUFFER_BIT).clearColor(...this._clearColor).clear().depthMask(!0)}blitToBuffer(e,t,r=oe.COLOR_BUFFER_BIT){e.drawFramebuffer(t.frameBuffer),e.readFramebuffer(this.frameBuffer),e.blitFramebuffer(r)}blitToScreen(e,t=oe.COLOR_BUFFER_BIT){e.defaultDrawFramebuffer(),e.readFramebuffer(this.frameBuffer),e.blitFramebuffer(t)}readPixel(e,t,r){this.context.defaultDrawFramebuffer().readFramebuffer(this.frameBuffer).readPixel(e,t,r)}};var qo={preRender:Symbol("grafer_graph_pre_render"),postRender:Symbol("grafer_graph_post_render")};Object.freeze(qo);var a0=class extends Wt.mixin(ll){constructor(e,t,r={}){super(e,t,r);this.enabled=!0,this._layers=[],this._rotation=Nt.create(),this._translation=$e.create(),this._scale=$e.fromValues(1,1,1),this._matrix=ar.create()}static get events(){return qo}get matrix(){return ar.fromRotationTranslationScale(this._matrix,this._rotation,this._translation,this._scale),this._matrix}get layers(){return this._layers}get rotation(){return this._rotation}get translation(){return this._translation}set translation(e){$e.set(this._translation,e[0],e[1],e[2])}get scale(){return this._scale[0]}set scale(e){$e.set(this._scale,e,e,e)}render(e,t,r){this.emit(qo.preRender,this,t,r),t===Be.PICKING&&this.picking&&this.picking.enabled&&this.picking.offscreenBuffer.prepareContext(e);let n=[r];t===Be.HIGH&&(n.push(Object.assign({},r,{uRenderMode:Be.HIGH_PASS_1})),n.push(Object.assign({},r,{uRenderMode:Be.HIGH_PASS_2})));for(let a=0,s=this._layers.length;a<s;++a)this._layers[a].enabled&&this._layers[a].render(e,t,n,a);this.picking&&this.picking.enabled&&this.picking.debugRender&&this.picking.offscreenBuffer.blitToScreen(e),this.emit(qo.postRender,this,t,r)}resize(e){this.picking&&this.picking.offscreenBuffer.resize(e)}rotate(e){Nt.mul(this._rotation,e,this._rotation)}translate(e){$e.add(this._translation,this._translation,e)}addLayer(e){this._layers.push(e)}addLayerAt(e,t){t>=0&&t<=this._layers.length&&this._layers.splice(t,0,e)}removeLayer(e){let t=this._layers.indexOf(e);t!==-1&&this._layers.splice(t,1)}removeLayerAt(e){e>=0&&e<this._layers.length&&this._layers.splice(e,1)}};var Wa={};fn(Wa,{Circle:()=>er,Cross:()=>d0,Nodes:()=>qa,Octagon:()=>g0,Pentagon:()=>l0,Plus:()=>h0,Ring:()=>c0,Star:()=>f0,Triangle:()=>u0,kBasicNodeDataTypes:()=>s0,kBasicNodeMappings:()=>i0,kGLCircleNodeTypes:()=>_l,types:()=>Ch});var o0;(function(e){e[e.NONE=0]="NONE",e[e.NORMAL=1]="NORMAL",e[e.ADDITIVE=2]="ADDITIVE"})(o0||(o0={}));var sh=Wt.mixin(gl),Wo=class extends sh{constructor(...e){super(...e);this.enabled=!0,this.nearDepth=0,this.farDepth=1,this.blendMode=1}static get defaultMappings(){}get alpha(){return this.localUniforms.uAlpha}set alpha(e){this.localUniforms.uAlpha=e}get fade(){return this.localUniforms.uFade}set fade(e){this.localUniforms.uFade=e}get desaturate(){return this.localUniforms.uDesaturate}set desaturate(e){this.localUniforms.uDesaturate=e}get brightness(){return this.localUniforms.uBrightness}set brightness(e){this.localUniforms.uBrightness=e}get opaque(){return this.localUniforms.uAlpha>=1||this.blendMode===0}initialize(e,t,r,n,a){this.pickingManager=a,this.picking=!0,this.localUniforms=Object.assign({},this.localUniforms,{uAlpha:1,uFade:0,uDesaturate:0,uBrightness:0}),super.initialize(e,t,r,n)}configureRenderContext(e,t){switch(e.depthRange(this.nearDepth,this.farDepth),t){case Be.PICKING:e.depthMask(!0),e.disable(oe.BLEND);break;case Be.HIGH_PASS_2:e.depthMask(!1),e.enable(oe.BLEND),this.blendMode===2?e.blendFuncSeparate(oe.SRC_ALPHA,oe.ONE,oe.ONE,oe.ONE):e.blendFuncSeparate(oe.SRC_ALPHA,oe.ONE_MINUS_SRC_ALPHA,oe.ONE,oe.ONE);break;default:this.opaque?(e.disable(oe.BLEND),e.depthMask(!0)):(e.enable(oe.BLEND),e.depthMask(!1),this.blendMode===2?e.blendFuncSeparate(oe.SRC_ALPHA,oe.ONE,oe.ONE,oe.ONE):e.blendFuncSeparate(oe.SRC_ALPHA,oe.ONE_MINUS_SRC_ALPHA,oe.ONE,oe.ONE));break}}};var i0={id:(e,t)=>"id"in e?e.id:t,point:(e,t)=>"point"in e?e.point:t,color:e=>"color"in e?e.color:0,radius:null},s0={point:xe.UNSIGNED_INT,color:xe.UNSIGNED_INT,radius:xe.FLOAT},qa=class extends Wo{static get defaultMappings(){return i0}get pixelSizing(){return this.localUniforms.uPixelSizing}set pixelSizing(e){this.localUniforms.uPixelSizing=e}get billboard(){return this.localUniforms.uBillboard}set billboard(e){this.localUniforms.uBillboard=e}get outline(){return this.localUniforms.uOutline}set outline(e){this.localUniforms.uOutline=e}initialize(...e){super.initialize(...e),this.localUniforms=Object.assign({},this.localUniforms,{uGraphPoints:this.dataTexture,uPixelSizing:!1,uBillboard:!0,uOutline:6})}computeMappings(e){let t=Object.assign({},i0,e),r=t.point;return t.point=(n,a)=>this.points.getPointIndex(r(n,a)),t}ingestData(e,t,r){this.map=new Map,this.idArray=[],super.ingestData(e,t,r)}packDataCB(){return(e,t)=>{this.map.set(t.id,t.point),this.idArray.push(t.id)}}getEntryPointID(e){return this.map.get(e)}};var da={hoverOn:Symbol("grafer_hover_on"),hoverOff:Symbol("grafer_hover_off"),click:Symbol("grafer_click"),emptyClick:Symbol("grafer_empty_click")};Object.freeze(da);var Gn=class extends Wt.mixin(mn){constructor(e,t,r=!0){super();this._debugRender=!1,this.boundMouseHandler=this.handleMouse.bind(this),this.colorBuffer=new ArrayBuffer(4),this.colorBufferUint8=new Uint8Array(this.colorBuffer),this.colorBufferView=new DataView(this.colorBuffer),this.colorHoverID=0,this._offscreenBuffer=new xl(e),this.mouseHandler=t,this.availableIndices=[{start:0,end:4026531839}],this.enabled=r}static get events(){return da}get offscreenBuffer(){return this._offscreenBuffer}get debugRender(){return this._debugRender}set debugRender(e){this._debugRender=e}on(e,t){super.on(e,t)}off(e,t){super.off(e,t)}allocatePickingColors(e){let t=new Uint8Array(e*4),r=[],n=new Map,a=0,s=e;for(let f=0,h=this.availableIndices.length;f<h&&s>0;++f){let g=this.availableIndices[f],l=g.end-g.start;if(l>s){let u={start:g.start,end:g.start+s};a=this.pickingColorsForIndices(t,a,u),this.mapPickingColorIDs(n,e-s,u),r.push(u),g.start+=s,s=0}else a=this.pickingColorsForIndices(t,a,g),this.mapPickingColorIDs(n,e-s,g),r.push(g),s-=l,this.availableIndices.splice(f--,1)}return{colors:t,ranges:r,map:n}}deallocatePickingColors(e){for(let t=0,r=e.ranges.length;t<r;++t)this.deallocatePickingRange(e.ranges[t]);e.colors=new Uint8Array([]),e.ranges.length=0,e.map.clear()}hookEvents(){this.mouseHandler.on(cr.events.move,this.boundMouseHandler),this.mouseHandler.on(cr.events.click,this.boundMouseHandler)}unhookEvents(){this.mouseHandler.off(cr.events.move,this.boundMouseHandler),this.mouseHandler.off(cr.events.click,this.boundMouseHandler)}handleMouse(e,t){let r=t.glCoords;this._offscreenBuffer.readPixel(r[0],r[1],this.colorBufferUint8);let n=this.colorBufferView.getUint32(0);switch(e){case cr.events.move:n!==this.colorHoverID&&(this.colorHoverID!==0&&this.emit(da.hoverOff,this.colorHoverID>>1),this.colorHoverID=n,this.colorHoverID!==0&&this.emit(da.hoverOn,this.colorHoverID>>1));break;case cr.events.click:n!==0?this.emit(da.click,n>>1):this.emit(da.emptyClick);break}}deallocatePickingRange(e){for(let t=0,r=this.availableIndices.length;t<r;++t){let n=this.availableIndices[t];if(n.start>e.start){n.start===e.end?n.start=e.start:this.availableIndices.splice(t,0,{start:e.start,end:e.end});break}}}mapPickingColorIDs(e,t,r){for(let n=0,a=r.end-r.start;n<a;++n)e.set(r.start+n,t+n)}pickingColorsForIndices(e,t,r){for(let n=r.start;n<r.end;++n){let a=this.pickingColorForNumber(n);e[t++]=a[0],e[t++]=a[1],e[t++]=a[2],e[t++]=a[3]}return t}pickingColorForNumber(e){let t=e<<1|1,r=new ArrayBuffer(4);return new DataView(r).setUint32(0,t),new Uint8Array(r)}};var yl=`#version 300 es
#define GLSLIFY 1

layout(location=0) in vec3 aVertex;
layout(location=1) in uint iPositionIndex;
layout(location=2) in float iRadius;
layout(location=3) in uint iColor;
layout(location=4) in uvec4 iPickingColor;

//layout(std140) uniform RenderUniforms {
    uniform mat4 uViewMatrix;
    uniform mat4 uSceneMatrix;
    uniform mat4 uProjectionMatrix;
    uniform vec2 uViewportSize;
    uniform float uPixelRatio;
    uniform sampler2D uGraphPoints;
    uniform sampler2D uColorPalette;
    uniform uint uCameraMode; // 0 = 2D; 1 = 3D;
//};

uniform bool uPixelSizing;
uniform bool uBillboard;

uniform bool uPicking;

flat out vec4 fColor;
flat out float fPixelLength;
out vec2 vFromCenter;

vec4 valueForIndex(sampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uvec4 uvalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uint uivalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0)[0];
}

void main() {
    // claculate the offset matrix, done as a matrix to be able to compute "billboard" vertices in the shader
    mat4 offsetMatrix = mat4(1.0);
    offsetMatrix[3] = vec4(valueForIndex(uGraphPoints, int(iPositionIndex)).xyz, 1.0);

    // reset the rotation of the model-view matrix
    mat4 modelMatrix = uViewMatrix * uSceneMatrix * offsetMatrix;
    mat4 lookAtMatrix = mat4(modelMatrix);
    if (uCameraMode == 1u) {
        lookAtMatrix[0] = vec4(1.0, 0.0, 0.0, lookAtMatrix[0][3]);
        lookAtMatrix[1] = vec4(0.0, 1.0, 0.0, lookAtMatrix[1][3]);
        lookAtMatrix[2] = vec4(0.0, 0.0, 1.0, lookAtMatrix[2][3]);
    }

    // the on-screen center of this node
    vec4 quadCenter = uProjectionMatrix * lookAtMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    vec2 screenQuadCenter = quadCenter.xy / quadCenter.w;

    // the on-screen position of a side of this quad
    vec4 quadSide = uProjectionMatrix * lookAtMatrix * vec4(iRadius, 0.0, 0.0, 1.0);
    vec2 screenQuadSide = quadSide.xy / quadSide.w;

    // compute the pixel radius of this node for a size of 1 in world coordinates
    float pixelRadius = max(1.0, length((screenQuadSide - screenQuadCenter) * uViewportSize * 0.5));

    // calculate the desired pixel radius for the size mode
    float desiredPixelRadius = (uPixelSizing ? iRadius : pixelRadius);

    // calculate the pixel radius multiplier needed to acomplish the desired pixel radius
    float pixelRadiusMult = desiredPixelRadius / pixelRadius;

    // calculate the render matrix
    mat4 renderMatrix = uBillboard ? uProjectionMatrix * lookAtMatrix : uProjectionMatrix * modelMatrix;

    // compute the vertex position and its screen position
    vec4 worldVertex = renderMatrix * vec4(aVertex * iRadius * pixelRadiusMult, 1.0);

    // send the render color to the fragment shader
    fColor = uPicking ? vec4(iPickingColor) / 255.0 : valueForIndex(uColorPalette, int(iColor));
    // send the normalized length of a single pixel to the fragment shader
    fPixelLength = 1.0 / desiredPixelRadius;
    // send the normalized distance from the center to the fragment shader
    vFromCenter = aVertex.xy;

    // set the render vertex location
    gl_Position = worldVertex;
}
`,ch=`#version 300 es
precision highp float;
#define GLSLIFY 1

// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation
float luminance_x(float x) {
    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
}
float color_l(float l) {
    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));
}

// from https://en.wikipedia.org/wiki/Relative_luminance
float rgb2luminance(vec3 color) {
    // relative luminance
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    float r = luminance_x(color.r);
    float g = luminance_x(color.g);
    float b = luminance_x(color.b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

vec3 setLuminance(vec3 color, float luminance) {
    float r = luminance_x(color.r) * 0.2126;
    float g = luminance_x(color.g) * 0.7152;
    float b = luminance_x(color.b) * 0.0722;
    float colorLuminance = r + g + b;

    float tr = luminance * (r / colorLuminance);
    float tg = luminance * (g / colorLuminance);
    float tb = luminance * (b / colorLuminance);

    float rr = color_l(tr / 0.2126);
    float rg = color_l(tg / 0.7152);
    float rb = color_l(tb / 0.0722);

    return vec3(rr, rg, rb );
}

// https://www.w3.org/TR/WCAG20/#contrast-ratiodef
// (L1 + 0.05) / (L2 + 0.05), where
// - L1 is the relative luminance of the lighter of the colors, and
// - L2 is the relative luminance of the darker of the colors.
float findDarker(float luminance, float contrast) {
    return (contrast * luminance) + (0.05 * contrast) - 0.05;
}
float findLighter(float luminance, float contrast) {
    return (luminance + 0.05 - (0.05 * contrast)) / contrast;
}

vec3 contrastingColor(vec3 color, float contrast) {
    float luminance = rgb2luminance(color);
    float darker = findDarker(luminance, contrast);
    float lighter = findLighter(luminance, contrast);

    float targetLuminance;
    if (darker < 0.0 || darker > 1.0) {
        targetLuminance = lighter;
    } else if (lighter < 0.0 || lighter > 1.0) {
        targetLuminance = darker;
    } else {
        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;
    }

    return setLuminance(color, targetLuminance);
}

vec3 desaturateColor(vec3 color, float amount) {
    float l = rgb2luminance(color);
    vec3 gray = vec3(l, l, l);
    return mix(color, gray, amount);
}

uniform vec4 uClearColor;
uniform float uDesaturate;
uniform float uBrightness;
uniform float uFade;
uniform float uAlpha;

vec4 outputColor(vec4 color) {
    // desaturate => fade => alpha
    vec3 ret = mix(color.rgb, vec3(uBrightness + 1.0 / 2.0), abs(uBrightness));
    ret = vec3(desaturateColor(ret, uDesaturate));
    ret = mix(ret, uClearColor.rgb, uFade);
    return vec4(ret, color.a * uAlpha);
}

#define MODE_DRAFT 0u
#define MODE_MEDIUM 1u
#define MODE_HIGH 2u
#define MODE_HIGH_PASS_1 3u
#define MODE_HIGH_PASS_2 4u
#define MODE_PICKING 5u

// most of these come from this excellent post:
// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm

float opRound(in float d, in float r) {
    return d - r;
}

float opOnion(in float d, in float r) {
    return abs(d) - r;
}

float sdCircle(in vec2 p, in float r ) {
    return length(p) - r;
}

float sdEquilateralTriangle(in vec2 p, in float r) {
    const float k = sqrt(3.0);
    p.x = abs(p.x) - r;
    p.y = p.y + (r) / k;
    if (p.x + k * p.y > 0.0) {
        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;
    }
    p.x -= clamp(p.x, -2.0 * r, 0.0);
    return -length(p) * sign(p.y);
}

float sdPentagon(in vec2 p, in float r) {
    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);
    p.y = -(p.y) * 1.25;
    p.x = abs(p.x) * 1.25;
    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);
    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);
    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);
    return length(p) * sign(p.y);
}

float sdOctagon(in vec2 p, in float r) {
    // pi/8: cos, sin, tan.
    const vec3 k = vec3(
        -0.9238795325,   // sqrt(2+sqrt(2))/2
        0.3826834323,   // sqrt(2-sqrt(2))/2
        0.4142135623
    ); // sqrt(2)-1
    // reflections
    p = abs(p) * 1.1;
    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);
    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);
    // Polygon side.
    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);
    return length(p) * sign(p.y);
}

float sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]
    // these 4 lines can be precomputed for a given shape
    float an = 3.141593 / float(n);
    float en = 3.141593 / m;
    vec2  acs = vec2(cos(an), sin(an));
    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,

    // reduce to first sector
    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;
    p = length(p) * vec2(cos(bn), abs(sin(bn)));

    // line sdf
    p -= r * acs;
    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);
    return length(p) * sign(p.x);
}

float sdCross(in vec2 p, in float w, in float r) {
    p = abs(p);
    return length(p - min(p.x + p.y, w) * 0.5) - r;
}

// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)
float sdPlus( in vec2 p, in vec2 b, float r ) {
    p = abs(p);
    p = (p.y > p.x) ? p.yx : p.xy;

    vec2  q = p - b;
    float k = max(q.y, q.x);
    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);

    return sign(k)*length(max(w, 0.0)) + r;
}

uniform float uPixelRatio;
uniform uint uRenderMode;
uniform float uOutline;

flat in vec4 fColor;
flat in float fPixelLength;
in vec2 vFromCenter;

out vec4 fragColor;

void main() {
    float antialias = fPixelLength * 1.5;
    float sd = sdCircle(vFromCenter, 1.0);
    float outline = opOnion(sd, min(0.15, fPixelLength * uOutline * uPixelRatio));
    float modeDistance = uRenderMode == MODE_HIGH_PASS_1 ? -antialias : -antialias * 0.5;
    float distance = uRenderMode == MODE_HIGH_PASS_2 ? 0.0 : modeDistance;

    if (sd > distance) {
        discard;
    }

    vec3 color = fColor.rgb * (1.0 - 0.25 * smoothstep(antialias, 0.0, outline));

    if (uRenderMode == MODE_HIGH_PASS_2) {
        if (sd < -antialias) {
            discard;
        }
        fragColor = outputColor(vec4(color, smoothstep(0.0, antialias, abs(sd))));
    } else {
        fragColor = outputColor(vec4(color, 1.0));
    }
}
`,uh=`#version 300 es
#define GLSLIFY 1

layout(location=0) in uint aPositionIndex;
layout(location=1) in uint aColor;
layout(location=2) in float aRadius; // optional atthe end

uniform sampler2D uGraphPoints;
uniform bool uUsePointRadius;

flat out uint fPoint;
flat out float fRadius;
flat out uint fColor;

vec4 valueForIndex(sampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uvec4 uvalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uint uivalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0)[0];
}

void main() {
    vec4 value = valueForIndex(uGraphPoints, int(aPositionIndex));
    if (uUsePointRadius) {
        fRadius = value.w;
    } else {
        fRadius = aRadius;
    }

    fPoint = aPositionIndex;
    fColor = aColor;
}
`,lh=`#version 300 es
precision highp float;
#define GLSLIFY 1

// most of these come from this excellent post:
// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm

float opRound(in float d, in float r) {
    return d - r;
}

float opOnion(in float d, in float r) {
    return abs(d) - r;
}

float sdCircle(in vec2 p, in float r ) {
    return length(p) - r;
}

float sdEquilateralTriangle(in vec2 p, in float r) {
    const float k = sqrt(3.0);
    p.x = abs(p.x) - r;
    p.y = p.y + (r) / k;
    if (p.x + k * p.y > 0.0) {
        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;
    }
    p.x -= clamp(p.x, -2.0 * r, 0.0);
    return -length(p) * sign(p.y);
}

float sdPentagon(in vec2 p, in float r) {
    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);
    p.y = -(p.y) * 1.25;
    p.x = abs(p.x) * 1.25;
    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);
    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);
    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);
    return length(p) * sign(p.y);
}

float sdOctagon(in vec2 p, in float r) {
    // pi/8: cos, sin, tan.
    const vec3 k = vec3(
        -0.9238795325,   // sqrt(2+sqrt(2))/2
        0.3826834323,   // sqrt(2-sqrt(2))/2
        0.4142135623
    ); // sqrt(2)-1
    // reflections
    p = abs(p) * 1.1;
    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);
    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);
    // Polygon side.
    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);
    return length(p) * sign(p.y);
}

float sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]
    // these 4 lines can be precomputed for a given shape
    float an = 3.141593 / float(n);
    float en = 3.141593 / m;
    vec2  acs = vec2(cos(an), sin(an));
    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,

    // reduce to first sector
    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;
    p = length(p) * vec2(cos(bn), abs(sin(bn)));

    // line sdf
    p -= r * acs;
    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);
    return length(p) * sign(p.x);
}

float sdCross(in vec2 p, in float w, in float r) {
    p = abs(p);
    return length(p - min(p.x + p.y, w) * 0.5) - r;
}

// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)
float sdPlus( in vec2 p, in vec2 b, float r ) {
    p = abs(p);
    p = (p.y > p.x) ? p.yx : p.xy;

    vec2  q = p - b;
    float k = max(q.y, q.x);
    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);

    return sign(k)*length(max(w, 0.0)) + r;
}

flat in vec4 fColor;
flat in float fPixelLength;
in vec2 vFromCenter;

out vec4 fragColor;

void main() {
    float sd = sdCircle(vFromCenter, 1.0);
    if (sd > 0.0) {
        discard;
    }
    fragColor = fColor;
}
`,_l={position:oe.UNSIGNED_INT,radius:oe.FLOAT,color:oe.UNSIGNED_INT},er=class extends qa{constructor(...e){super(...e)}initialize(e,t,r,n,a){super.initialize(e,t,r,n,a),this.verticesVBO=e.createVertexBuffer(oe.FLOAT,2,new Float32Array([-1,-1,1,-1,-1,1,1,1])),this.pickingHandler=this.handlePickingEvent.bind(this),this.pickingColors=this.pickingManager.allocatePickingColors(r.length),this.pickingVBO=e.createVertexBuffer(oe.UNSIGNED_BYTE,4,this.pickingColors.colors),this.nodesVAO=e.createVertexArray().vertexAttributeBuffer(0,this.verticesVBO),this.configureTargetVAO(this.nodesVAO),this.nodesVAO.instanceAttributeBuffer(4,this.pickingVBO);let s=this.getDrawShaders();this.program=e.createProgram(s.vs,s.fs),this.drawCall=e.createDrawCall(this.program,this.nodesVAO).primitive(oe.TRIANGLE_STRIP);let f=this.getPickingShaders();this.pickingProgram=e.createProgram(f.vs,f.fs),this.pickingDrawCall=e.createDrawCall(this.pickingProgram,this.nodesVAO).primitive(oe.TRIANGLE_STRIP);let h=this.computeMappings(n);this.usePointRadius=h.radius===null,this.compute(e,{uGraphPoints:this.dataTexture,uUsePointRadius:this.usePointRadius}),this.pickingManager.on(Gn.events.hoverOn,this.pickingHandler),this.pickingManager.on(Gn.events.hoverOff,this.pickingHandler),this.pickingManager.on(Gn.events.click,this.pickingHandler)}destroy(){}render(e,t,r){switch(this.configureRenderContext(e,t),t){case Be.PICKING:this.picking&&(bt(this.pickingDrawCall,r),bt(this.pickingDrawCall,this.localUniforms),this.pickingDrawCall.uniform("uPicking",!0),this.pickingDrawCall.draw());break;case Be.HIGH_PASS_2:e.depthMask(!1);default:bt(this.drawCall,r),bt(this.drawCall,this.localUniforms),this.drawCall.uniform("uPicking",!1),this.drawCall.draw();break}}getDrawShaders(){return{vs:yl,fs:ch}}getPickingShaders(){return{vs:yl,fs:lh}}getGLSourceTypes(){return s0}getGLTargetTypes(){return _l}getDataShader(){return{vs:uh,varyings:["fPoint","fRadius","fColor"]}}handlePickingEvent(e,t){if(this.picking&&this.pickingColors.map.has(t)){let r=this.idArray[this.pickingColors.map.get(t)];this.emit(e,r)}}};var gh=`#version 300 es
precision highp float;
#define GLSLIFY 1

// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation
float luminance_x(float x) {
    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
}
float color_l(float l) {
    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));
}

// from https://en.wikipedia.org/wiki/Relative_luminance
float rgb2luminance(vec3 color) {
    // relative luminance
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    float r = luminance_x(color.r);
    float g = luminance_x(color.g);
    float b = luminance_x(color.b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

vec3 setLuminance(vec3 color, float luminance) {
    float r = luminance_x(color.r) * 0.2126;
    float g = luminance_x(color.g) * 0.7152;
    float b = luminance_x(color.b) * 0.0722;
    float colorLuminance = r + g + b;

    float tr = luminance * (r / colorLuminance);
    float tg = luminance * (g / colorLuminance);
    float tb = luminance * (b / colorLuminance);

    float rr = color_l(tr / 0.2126);
    float rg = color_l(tg / 0.7152);
    float rb = color_l(tb / 0.0722);

    return vec3(rr, rg, rb );
}

// https://www.w3.org/TR/WCAG20/#contrast-ratiodef
// (L1 + 0.05) / (L2 + 0.05), where
// - L1 is the relative luminance of the lighter of the colors, and
// - L2 is the relative luminance of the darker of the colors.
float findDarker(float luminance, float contrast) {
    return (contrast * luminance) + (0.05 * contrast) - 0.05;
}
float findLighter(float luminance, float contrast) {
    return (luminance + 0.05 - (0.05 * contrast)) / contrast;
}

vec3 contrastingColor(vec3 color, float contrast) {
    float luminance = rgb2luminance(color);
    float darker = findDarker(luminance, contrast);
    float lighter = findLighter(luminance, contrast);

    float targetLuminance;
    if (darker < 0.0 || darker > 1.0) {
        targetLuminance = lighter;
    } else if (lighter < 0.0 || lighter > 1.0) {
        targetLuminance = darker;
    } else {
        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;
    }

    return setLuminance(color, targetLuminance);
}

vec3 desaturateColor(vec3 color, float amount) {
    float l = rgb2luminance(color);
    vec3 gray = vec3(l, l, l);
    return mix(color, gray, amount);
}

uniform vec4 uClearColor;
uniform float uDesaturate;
uniform float uBrightness;
uniform float uFade;
uniform float uAlpha;

vec4 outputColor(vec4 color) {
    // desaturate => fade => alpha
    vec3 ret = mix(color.rgb, vec3(uBrightness + 1.0 / 2.0), abs(uBrightness));
    ret = vec3(desaturateColor(ret, uDesaturate));
    ret = mix(ret, uClearColor.rgb, uFade);
    return vec4(ret, color.a * uAlpha);
}

#define MODE_DRAFT 0u
#define MODE_MEDIUM 1u
#define MODE_HIGH 2u
#define MODE_HIGH_PASS_1 3u
#define MODE_HIGH_PASS_2 4u
#define MODE_PICKING 5u

// most of these come from this excellent post:
// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm

float opRound(in float d, in float r) {
    return d - r;
}

float opOnion(in float d, in float r) {
    return abs(d) - r;
}

float sdCircle(in vec2 p, in float r ) {
    return length(p) - r;
}

float sdEquilateralTriangle(in vec2 p, in float r) {
    const float k = sqrt(3.0);
    p.x = abs(p.x) - r;
    p.y = p.y + (r) / k;
    if (p.x + k * p.y > 0.0) {
        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;
    }
    p.x -= clamp(p.x, -2.0 * r, 0.0);
    return -length(p) * sign(p.y);
}

float sdPentagon(in vec2 p, in float r) {
    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);
    p.y = -(p.y) * 1.25;
    p.x = abs(p.x) * 1.25;
    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);
    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);
    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);
    return length(p) * sign(p.y);
}

float sdOctagon(in vec2 p, in float r) {
    // pi/8: cos, sin, tan.
    const vec3 k = vec3(
        -0.9238795325,   // sqrt(2+sqrt(2))/2
        0.3826834323,   // sqrt(2-sqrt(2))/2
        0.4142135623
    ); // sqrt(2)-1
    // reflections
    p = abs(p) * 1.1;
    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);
    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);
    // Polygon side.
    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);
    return length(p) * sign(p.y);
}

float sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]
    // these 4 lines can be precomputed for a given shape
    float an = 3.141593 / float(n);
    float en = 3.141593 / m;
    vec2  acs = vec2(cos(an), sin(an));
    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,

    // reduce to first sector
    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;
    p = length(p) * vec2(cos(bn), abs(sin(bn)));

    // line sdf
    p -= r * acs;
    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);
    return length(p) * sign(p.x);
}

float sdCross(in vec2 p, in float w, in float r) {
    p = abs(p);
    return length(p - min(p.x + p.y, w) * 0.5) - r;
}

// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)
float sdPlus( in vec2 p, in vec2 b, float r ) {
    p = abs(p);
    p = (p.y > p.x) ? p.yx : p.xy;

    vec2  q = p - b;
    float k = max(q.y, q.x);
    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);

    return sign(k)*length(max(w, 0.0)) + r;
}

uniform float uPixelRatio;
uniform uint uRenderMode;
uniform float uOutline;

flat in vec4 fColor;
flat in float fPixelLength;
in vec2 vFromCenter;

out vec4 fragColor;

void main() {
    float thickness = max(fPixelLength, min(0.1, fPixelLength * uOutline * uPixelRatio));
    float antialias = min(thickness, fPixelLength * 1.5);
    float radius = 1.0 - thickness;
    float ring = opOnion(sdCircle(vFromCenter, radius), thickness);
    float modeDistance = uRenderMode == MODE_HIGH_PASS_1 ? -antialias : -antialias * 0.5;
    float distance = uRenderMode == MODE_HIGH_PASS_2 ? 0.0 : modeDistance;

    if (ring > distance) {
        discard;
    }

    if (uRenderMode == MODE_HIGH_PASS_2) {
        if (ring < -antialias) {
            discard;
        }
        fragColor = outputColor(vec4(fColor.rgb, smoothstep(0.0, antialias, abs(ring))));
    } else {
        fragColor = outputColor(vec4(fColor.rgb, 1.0));
    }
}
`,c0=class extends er{getDrawShaders(){let e=super.getDrawShaders();return e.fs=gh,e}};var fh=`#version 300 es
precision highp float;
#define GLSLIFY 1

// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation
float luminance_x(float x) {
    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
}
float color_l(float l) {
    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));
}

// from https://en.wikipedia.org/wiki/Relative_luminance
float rgb2luminance(vec3 color) {
    // relative luminance
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    float r = luminance_x(color.r);
    float g = luminance_x(color.g);
    float b = luminance_x(color.b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

vec3 setLuminance(vec3 color, float luminance) {
    float r = luminance_x(color.r) * 0.2126;
    float g = luminance_x(color.g) * 0.7152;
    float b = luminance_x(color.b) * 0.0722;
    float colorLuminance = r + g + b;

    float tr = luminance * (r / colorLuminance);
    float tg = luminance * (g / colorLuminance);
    float tb = luminance * (b / colorLuminance);

    float rr = color_l(tr / 0.2126);
    float rg = color_l(tg / 0.7152);
    float rb = color_l(tb / 0.0722);

    return vec3(rr, rg, rb );
}

// https://www.w3.org/TR/WCAG20/#contrast-ratiodef
// (L1 + 0.05) / (L2 + 0.05), where
// - L1 is the relative luminance of the lighter of the colors, and
// - L2 is the relative luminance of the darker of the colors.
float findDarker(float luminance, float contrast) {
    return (contrast * luminance) + (0.05 * contrast) - 0.05;
}
float findLighter(float luminance, float contrast) {
    return (luminance + 0.05 - (0.05 * contrast)) / contrast;
}

vec3 contrastingColor(vec3 color, float contrast) {
    float luminance = rgb2luminance(color);
    float darker = findDarker(luminance, contrast);
    float lighter = findLighter(luminance, contrast);

    float targetLuminance;
    if (darker < 0.0 || darker > 1.0) {
        targetLuminance = lighter;
    } else if (lighter < 0.0 || lighter > 1.0) {
        targetLuminance = darker;
    } else {
        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;
    }

    return setLuminance(color, targetLuminance);
}

vec3 desaturateColor(vec3 color, float amount) {
    float l = rgb2luminance(color);
    vec3 gray = vec3(l, l, l);
    return mix(color, gray, amount);
}

uniform vec4 uClearColor;
uniform float uDesaturate;
uniform float uBrightness;
uniform float uFade;
uniform float uAlpha;

vec4 outputColor(vec4 color) {
    // desaturate => fade => alpha
    vec3 ret = mix(color.rgb, vec3(uBrightness + 1.0 / 2.0), abs(uBrightness));
    ret = vec3(desaturateColor(ret, uDesaturate));
    ret = mix(ret, uClearColor.rgb, uFade);
    return vec4(ret, color.a * uAlpha);
}

#define MODE_DRAFT 0u
#define MODE_MEDIUM 1u
#define MODE_HIGH 2u
#define MODE_HIGH_PASS_1 3u
#define MODE_HIGH_PASS_2 4u
#define MODE_PICKING 5u

// most of these come from this excellent post:
// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm

float opRound(in float d, in float r) {
    return d - r;
}

float opOnion(in float d, in float r) {
    return abs(d) - r;
}

float sdCircle(in vec2 p, in float r ) {
    return length(p) - r;
}

float sdEquilateralTriangle(in vec2 p, in float r) {
    const float k = sqrt(3.0);
    p.x = abs(p.x) - r;
    p.y = p.y + (r) / k;
    if (p.x + k * p.y > 0.0) {
        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;
    }
    p.x -= clamp(p.x, -2.0 * r, 0.0);
    return -length(p) * sign(p.y);
}

float sdPentagon(in vec2 p, in float r) {
    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);
    p.y = -(p.y) * 1.25;
    p.x = abs(p.x) * 1.25;
    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);
    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);
    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);
    return length(p) * sign(p.y);
}

float sdOctagon(in vec2 p, in float r) {
    // pi/8: cos, sin, tan.
    const vec3 k = vec3(
        -0.9238795325,   // sqrt(2+sqrt(2))/2
        0.3826834323,   // sqrt(2-sqrt(2))/2
        0.4142135623
    ); // sqrt(2)-1
    // reflections
    p = abs(p) * 1.1;
    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);
    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);
    // Polygon side.
    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);
    return length(p) * sign(p.y);
}

float sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]
    // these 4 lines can be precomputed for a given shape
    float an = 3.141593 / float(n);
    float en = 3.141593 / m;
    vec2  acs = vec2(cos(an), sin(an));
    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,

    // reduce to first sector
    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;
    p = length(p) * vec2(cos(bn), abs(sin(bn)));

    // line sdf
    p -= r * acs;
    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);
    return length(p) * sign(p.x);
}

float sdCross(in vec2 p, in float w, in float r) {
    p = abs(p);
    return length(p - min(p.x + p.y, w) * 0.5) - r;
}

// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)
float sdPlus( in vec2 p, in vec2 b, float r ) {
    p = abs(p);
    p = (p.y > p.x) ? p.yx : p.xy;

    vec2  q = p - b;
    float k = max(q.y, q.x);
    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);

    return sign(k)*length(max(w, 0.0)) + r;
}

uniform float uPixelRatio;
uniform uint uRenderMode;
uniform float uOutline;

flat in vec4 fColor;
flat in float fPixelLength;
in vec2 vFromCenter;

out vec4 fragColor;

void main() {
    float antialias = fPixelLength * 1.5;
    float sd = sdEquilateralTriangle(vFromCenter, 0.85);
    float outline = opOnion(sd, min(0.15, fPixelLength * uOutline * uPixelRatio));
    float modeDistance = uRenderMode == MODE_HIGH_PASS_1 ? -antialias : -antialias * 0.5;
    float distance = uRenderMode == MODE_HIGH_PASS_2 ? 0.0 : modeDistance;

    if (sd > distance) {
        discard;
    }

    vec3 color = fColor.rgb * (1.0 - 0.25 * smoothstep(antialias, 0.0, outline));

    if (uRenderMode == MODE_HIGH_PASS_2) {
        if (sd < -antialias) {
            discard;
        }
        fragColor = outputColor(vec4(color, smoothstep(0.0, antialias, abs(sd))));
    } else {
        fragColor = outputColor(vec4(color, 1.0));
    }
}
`,dh=`#version 300 es
precision highp float;
#define GLSLIFY 1

// most of these come from this excellent post:
// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm

float opRound(in float d, in float r) {
    return d - r;
}

float opOnion(in float d, in float r) {
    return abs(d) - r;
}

float sdCircle(in vec2 p, in float r ) {
    return length(p) - r;
}

float sdEquilateralTriangle(in vec2 p, in float r) {
    const float k = sqrt(3.0);
    p.x = abs(p.x) - r;
    p.y = p.y + (r) / k;
    if (p.x + k * p.y > 0.0) {
        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;
    }
    p.x -= clamp(p.x, -2.0 * r, 0.0);
    return -length(p) * sign(p.y);
}

float sdPentagon(in vec2 p, in float r) {
    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);
    p.y = -(p.y) * 1.25;
    p.x = abs(p.x) * 1.25;
    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);
    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);
    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);
    return length(p) * sign(p.y);
}

float sdOctagon(in vec2 p, in float r) {
    // pi/8: cos, sin, tan.
    const vec3 k = vec3(
        -0.9238795325,   // sqrt(2+sqrt(2))/2
        0.3826834323,   // sqrt(2-sqrt(2))/2
        0.4142135623
    ); // sqrt(2)-1
    // reflections
    p = abs(p) * 1.1;
    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);
    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);
    // Polygon side.
    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);
    return length(p) * sign(p.y);
}

float sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]
    // these 4 lines can be precomputed for a given shape
    float an = 3.141593 / float(n);
    float en = 3.141593 / m;
    vec2  acs = vec2(cos(an), sin(an));
    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,

    // reduce to first sector
    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;
    p = length(p) * vec2(cos(bn), abs(sin(bn)));

    // line sdf
    p -= r * acs;
    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);
    return length(p) * sign(p.x);
}

float sdCross(in vec2 p, in float w, in float r) {
    p = abs(p);
    return length(p - min(p.x + p.y, w) * 0.5) - r;
}

// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)
float sdPlus( in vec2 p, in vec2 b, float r ) {
    p = abs(p);
    p = (p.y > p.x) ? p.yx : p.xy;

    vec2  q = p - b;
    float k = max(q.y, q.x);
    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);

    return sign(k)*length(max(w, 0.0)) + r;
}

flat in vec4 fColor;
flat in float fPixelLength;
in vec2 vFromCenter;

out vec4 fragColor;

void main() {
    float sd = sdEquilateralTriangle(vFromCenter, 1.0);
    if (sd > 0.0) {
        discard;
    }
    fragColor = fColor;
}
`,u0=class extends er{getDrawShaders(){let e=super.getDrawShaders();return e.fs=fh,e}getPickingShaders(){let e=super.getPickingShaders();return e.fs=dh,e}};var hh=`#version 300 es
precision highp float;
#define GLSLIFY 1

// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation
float luminance_x(float x) {
    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
}
float color_l(float l) {
    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));
}

// from https://en.wikipedia.org/wiki/Relative_luminance
float rgb2luminance(vec3 color) {
    // relative luminance
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    float r = luminance_x(color.r);
    float g = luminance_x(color.g);
    float b = luminance_x(color.b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

vec3 setLuminance(vec3 color, float luminance) {
    float r = luminance_x(color.r) * 0.2126;
    float g = luminance_x(color.g) * 0.7152;
    float b = luminance_x(color.b) * 0.0722;
    float colorLuminance = r + g + b;

    float tr = luminance * (r / colorLuminance);
    float tg = luminance * (g / colorLuminance);
    float tb = luminance * (b / colorLuminance);

    float rr = color_l(tr / 0.2126);
    float rg = color_l(tg / 0.7152);
    float rb = color_l(tb / 0.0722);

    return vec3(rr, rg, rb );
}

// https://www.w3.org/TR/WCAG20/#contrast-ratiodef
// (L1 + 0.05) / (L2 + 0.05), where
// - L1 is the relative luminance of the lighter of the colors, and
// - L2 is the relative luminance of the darker of the colors.
float findDarker(float luminance, float contrast) {
    return (contrast * luminance) + (0.05 * contrast) - 0.05;
}
float findLighter(float luminance, float contrast) {
    return (luminance + 0.05 - (0.05 * contrast)) / contrast;
}

vec3 contrastingColor(vec3 color, float contrast) {
    float luminance = rgb2luminance(color);
    float darker = findDarker(luminance, contrast);
    float lighter = findLighter(luminance, contrast);

    float targetLuminance;
    if (darker < 0.0 || darker > 1.0) {
        targetLuminance = lighter;
    } else if (lighter < 0.0 || lighter > 1.0) {
        targetLuminance = darker;
    } else {
        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;
    }

    return setLuminance(color, targetLuminance);
}

vec3 desaturateColor(vec3 color, float amount) {
    float l = rgb2luminance(color);
    vec3 gray = vec3(l, l, l);
    return mix(color, gray, amount);
}

uniform vec4 uClearColor;
uniform float uDesaturate;
uniform float uBrightness;
uniform float uFade;
uniform float uAlpha;

vec4 outputColor(vec4 color) {
    // desaturate => fade => alpha
    vec3 ret = mix(color.rgb, vec3(uBrightness + 1.0 / 2.0), abs(uBrightness));
    ret = vec3(desaturateColor(ret, uDesaturate));
    ret = mix(ret, uClearColor.rgb, uFade);
    return vec4(ret, color.a * uAlpha);
}

#define MODE_DRAFT 0u
#define MODE_MEDIUM 1u
#define MODE_HIGH 2u
#define MODE_HIGH_PASS_1 3u
#define MODE_HIGH_PASS_2 4u
#define MODE_PICKING 5u

// most of these come from this excellent post:
// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm

float opRound(in float d, in float r) {
    return d - r;
}

float opOnion(in float d, in float r) {
    return abs(d) - r;
}

float sdCircle(in vec2 p, in float r ) {
    return length(p) - r;
}

float sdEquilateralTriangle(in vec2 p, in float r) {
    const float k = sqrt(3.0);
    p.x = abs(p.x) - r;
    p.y = p.y + (r) / k;
    if (p.x + k * p.y > 0.0) {
        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;
    }
    p.x -= clamp(p.x, -2.0 * r, 0.0);
    return -length(p) * sign(p.y);
}

float sdPentagon(in vec2 p, in float r) {
    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);
    p.y = -(p.y) * 1.25;
    p.x = abs(p.x) * 1.25;
    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);
    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);
    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);
    return length(p) * sign(p.y);
}

float sdOctagon(in vec2 p, in float r) {
    // pi/8: cos, sin, tan.
    const vec3 k = vec3(
        -0.9238795325,   // sqrt(2+sqrt(2))/2
        0.3826834323,   // sqrt(2-sqrt(2))/2
        0.4142135623
    ); // sqrt(2)-1
    // reflections
    p = abs(p) * 1.1;
    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);
    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);
    // Polygon side.
    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);
    return length(p) * sign(p.y);
}

float sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]
    // these 4 lines can be precomputed for a given shape
    float an = 3.141593 / float(n);
    float en = 3.141593 / m;
    vec2  acs = vec2(cos(an), sin(an));
    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,

    // reduce to first sector
    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;
    p = length(p) * vec2(cos(bn), abs(sin(bn)));

    // line sdf
    p -= r * acs;
    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);
    return length(p) * sign(p.x);
}

float sdCross(in vec2 p, in float w, in float r) {
    p = abs(p);
    return length(p - min(p.x + p.y, w) * 0.5) - r;
}

// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)
float sdPlus( in vec2 p, in vec2 b, float r ) {
    p = abs(p);
    p = (p.y > p.x) ? p.yx : p.xy;

    vec2  q = p - b;
    float k = max(q.y, q.x);
    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);

    return sign(k)*length(max(w, 0.0)) + r;
}

uniform float uPixelRatio;
uniform uint uRenderMode;
uniform float uOutline;

flat in vec4 fColor;
flat in float fPixelLength;
in vec2 vFromCenter;

out vec4 fragColor;

void main() {
    float antialias = fPixelLength * 1.5;
    float sd = sdPentagon(vFromCenter, 1.0);
    float outline = opOnion(sd, min(0.15, fPixelLength * uOutline * uPixelRatio));
    float modeDistance = uRenderMode == MODE_HIGH_PASS_1 ? -antialias : -antialias * 0.5;
    float distance = uRenderMode == MODE_HIGH_PASS_2 ? 0.0 : modeDistance;

    if (sd > distance) {
        discard;
    }

    vec3 color = fColor.rgb * (1.0 - 0.25 * smoothstep(antialias, 0.0, outline));

    if (uRenderMode == MODE_HIGH_PASS_2) {
        if (sd < -antialias) {
            discard;
        }
        fragColor = outputColor(vec4(color, smoothstep(0.0, antialias, abs(sd))));
    } else {
        fragColor = outputColor(vec4(color, 1.0));
    }
}
`,ph=`#version 300 es
precision highp float;
#define GLSLIFY 1

// most of these come from this excellent post:
// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm

float opRound(in float d, in float r) {
    return d - r;
}

float opOnion(in float d, in float r) {
    return abs(d) - r;
}

float sdCircle(in vec2 p, in float r ) {
    return length(p) - r;
}

float sdEquilateralTriangle(in vec2 p, in float r) {
    const float k = sqrt(3.0);
    p.x = abs(p.x) - r;
    p.y = p.y + (r) / k;
    if (p.x + k * p.y > 0.0) {
        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;
    }
    p.x -= clamp(p.x, -2.0 * r, 0.0);
    return -length(p) * sign(p.y);
}

float sdPentagon(in vec2 p, in float r) {
    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);
    p.y = -(p.y) * 1.25;
    p.x = abs(p.x) * 1.25;
    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);
    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);
    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);
    return length(p) * sign(p.y);
}

float sdOctagon(in vec2 p, in float r) {
    // pi/8: cos, sin, tan.
    const vec3 k = vec3(
        -0.9238795325,   // sqrt(2+sqrt(2))/2
        0.3826834323,   // sqrt(2-sqrt(2))/2
        0.4142135623
    ); // sqrt(2)-1
    // reflections
    p = abs(p) * 1.1;
    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);
    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);
    // Polygon side.
    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);
    return length(p) * sign(p.y);
}

float sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]
    // these 4 lines can be precomputed for a given shape
    float an = 3.141593 / float(n);
    float en = 3.141593 / m;
    vec2  acs = vec2(cos(an), sin(an));
    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,

    // reduce to first sector
    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;
    p = length(p) * vec2(cos(bn), abs(sin(bn)));

    // line sdf
    p -= r * acs;
    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);
    return length(p) * sign(p.x);
}

float sdCross(in vec2 p, in float w, in float r) {
    p = abs(p);
    return length(p - min(p.x + p.y, w) * 0.5) - r;
}

// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)
float sdPlus( in vec2 p, in vec2 b, float r ) {
    p = abs(p);
    p = (p.y > p.x) ? p.yx : p.xy;

    vec2  q = p - b;
    float k = max(q.y, q.x);
    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);

    return sign(k)*length(max(w, 0.0)) + r;
}

flat in vec4 fColor;
flat in float fPixelLength;
in vec2 vFromCenter;

out vec4 fragColor;

void main() {
    float sd = sdPentagon(vFromCenter, 1.0);
    if (sd > 0.0) {
        discard;
    }
    fragColor = fColor;
}
`,l0=class extends er{getDrawShaders(){let e=super.getDrawShaders();return e.fs=hh,e}getPickingShaders(){let e=super.getPickingShaders();return e.fs=ph,e}};var vh=`#version 300 es
precision highp float;
#define GLSLIFY 1

// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation
float luminance_x(float x) {
    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
}
float color_l(float l) {
    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));
}

// from https://en.wikipedia.org/wiki/Relative_luminance
float rgb2luminance(vec3 color) {
    // relative luminance
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    float r = luminance_x(color.r);
    float g = luminance_x(color.g);
    float b = luminance_x(color.b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

vec3 setLuminance(vec3 color, float luminance) {
    float r = luminance_x(color.r) * 0.2126;
    float g = luminance_x(color.g) * 0.7152;
    float b = luminance_x(color.b) * 0.0722;
    float colorLuminance = r + g + b;

    float tr = luminance * (r / colorLuminance);
    float tg = luminance * (g / colorLuminance);
    float tb = luminance * (b / colorLuminance);

    float rr = color_l(tr / 0.2126);
    float rg = color_l(tg / 0.7152);
    float rb = color_l(tb / 0.0722);

    return vec3(rr, rg, rb );
}

// https://www.w3.org/TR/WCAG20/#contrast-ratiodef
// (L1 + 0.05) / (L2 + 0.05), where
// - L1 is the relative luminance of the lighter of the colors, and
// - L2 is the relative luminance of the darker of the colors.
float findDarker(float luminance, float contrast) {
    return (contrast * luminance) + (0.05 * contrast) - 0.05;
}
float findLighter(float luminance, float contrast) {
    return (luminance + 0.05 - (0.05 * contrast)) / contrast;
}

vec3 contrastingColor(vec3 color, float contrast) {
    float luminance = rgb2luminance(color);
    float darker = findDarker(luminance, contrast);
    float lighter = findLighter(luminance, contrast);

    float targetLuminance;
    if (darker < 0.0 || darker > 1.0) {
        targetLuminance = lighter;
    } else if (lighter < 0.0 || lighter > 1.0) {
        targetLuminance = darker;
    } else {
        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;
    }

    return setLuminance(color, targetLuminance);
}

vec3 desaturateColor(vec3 color, float amount) {
    float l = rgb2luminance(color);
    vec3 gray = vec3(l, l, l);
    return mix(color, gray, amount);
}

uniform vec4 uClearColor;
uniform float uDesaturate;
uniform float uBrightness;
uniform float uFade;
uniform float uAlpha;

vec4 outputColor(vec4 color) {
    // desaturate => fade => alpha
    vec3 ret = mix(color.rgb, vec3(uBrightness + 1.0 / 2.0), abs(uBrightness));
    ret = vec3(desaturateColor(ret, uDesaturate));
    ret = mix(ret, uClearColor.rgb, uFade);
    return vec4(ret, color.a * uAlpha);
}

#define MODE_DRAFT 0u
#define MODE_MEDIUM 1u
#define MODE_HIGH 2u
#define MODE_HIGH_PASS_1 3u
#define MODE_HIGH_PASS_2 4u
#define MODE_PICKING 5u

// most of these come from this excellent post:
// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm

float opRound(in float d, in float r) {
    return d - r;
}

float opOnion(in float d, in float r) {
    return abs(d) - r;
}

float sdCircle(in vec2 p, in float r ) {
    return length(p) - r;
}

float sdEquilateralTriangle(in vec2 p, in float r) {
    const float k = sqrt(3.0);
    p.x = abs(p.x) - r;
    p.y = p.y + (r) / k;
    if (p.x + k * p.y > 0.0) {
        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;
    }
    p.x -= clamp(p.x, -2.0 * r, 0.0);
    return -length(p) * sign(p.y);
}

float sdPentagon(in vec2 p, in float r) {
    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);
    p.y = -(p.y) * 1.25;
    p.x = abs(p.x) * 1.25;
    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);
    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);
    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);
    return length(p) * sign(p.y);
}

float sdOctagon(in vec2 p, in float r) {
    // pi/8: cos, sin, tan.
    const vec3 k = vec3(
        -0.9238795325,   // sqrt(2+sqrt(2))/2
        0.3826834323,   // sqrt(2-sqrt(2))/2
        0.4142135623
    ); // sqrt(2)-1
    // reflections
    p = abs(p) * 1.1;
    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);
    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);
    // Polygon side.
    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);
    return length(p) * sign(p.y);
}

float sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]
    // these 4 lines can be precomputed for a given shape
    float an = 3.141593 / float(n);
    float en = 3.141593 / m;
    vec2  acs = vec2(cos(an), sin(an));
    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,

    // reduce to first sector
    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;
    p = length(p) * vec2(cos(bn), abs(sin(bn)));

    // line sdf
    p -= r * acs;
    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);
    return length(p) * sign(p.x);
}

float sdCross(in vec2 p, in float w, in float r) {
    p = abs(p);
    return length(p - min(p.x + p.y, w) * 0.5) - r;
}

// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)
float sdPlus( in vec2 p, in vec2 b, float r ) {
    p = abs(p);
    p = (p.y > p.x) ? p.yx : p.xy;

    vec2  q = p - b;
    float k = max(q.y, q.x);
    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);

    return sign(k)*length(max(w, 0.0)) + r;
}

uniform float uPixelRatio;
uniform uint uRenderMode;
uniform float uOutline;

flat in vec4 fColor;
flat in float fPixelLength;
in vec2 vFromCenter;

out vec4 fragColor;

void main() {
    float antialias = fPixelLength * 1.5;
    float sd = sdOctagon(vFromCenter, 1.0);
    float outline = opOnion(sd, min(0.15, fPixelLength * uOutline * uPixelRatio));
    float modeDistance = uRenderMode == MODE_HIGH_PASS_1 ? -antialias : -antialias * 0.5;
    float distance = uRenderMode == MODE_HIGH_PASS_2 ? 0.0 : modeDistance;

    if (sd > distance) {
        discard;
    }

    vec3 color = fColor.rgb * (1.0 - 0.25 * smoothstep(antialias, 0.0, outline));

    if (uRenderMode == MODE_HIGH_PASS_2) {
        if (sd < -antialias) {
            discard;
        }
        fragColor = outputColor(vec4(color, smoothstep(0.0, antialias, abs(sd))));
    } else {
        fragColor = outputColor(vec4(color, 1.0));
    }
}
`,mh=`#version 300 es
precision highp float;
#define GLSLIFY 1

// most of these come from this excellent post:
// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm

float opRound(in float d, in float r) {
    return d - r;
}

float opOnion(in float d, in float r) {
    return abs(d) - r;
}

float sdCircle(in vec2 p, in float r ) {
    return length(p) - r;
}

float sdEquilateralTriangle(in vec2 p, in float r) {
    const float k = sqrt(3.0);
    p.x = abs(p.x) - r;
    p.y = p.y + (r) / k;
    if (p.x + k * p.y > 0.0) {
        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;
    }
    p.x -= clamp(p.x, -2.0 * r, 0.0);
    return -length(p) * sign(p.y);
}

float sdPentagon(in vec2 p, in float r) {
    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);
    p.y = -(p.y) * 1.25;
    p.x = abs(p.x) * 1.25;
    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);
    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);
    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);
    return length(p) * sign(p.y);
}

float sdOctagon(in vec2 p, in float r) {
    // pi/8: cos, sin, tan.
    const vec3 k = vec3(
        -0.9238795325,   // sqrt(2+sqrt(2))/2
        0.3826834323,   // sqrt(2-sqrt(2))/2
        0.4142135623
    ); // sqrt(2)-1
    // reflections
    p = abs(p) * 1.1;
    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);
    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);
    // Polygon side.
    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);
    return length(p) * sign(p.y);
}

float sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]
    // these 4 lines can be precomputed for a given shape
    float an = 3.141593 / float(n);
    float en = 3.141593 / m;
    vec2  acs = vec2(cos(an), sin(an));
    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,

    // reduce to first sector
    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;
    p = length(p) * vec2(cos(bn), abs(sin(bn)));

    // line sdf
    p -= r * acs;
    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);
    return length(p) * sign(p.x);
}

float sdCross(in vec2 p, in float w, in float r) {
    p = abs(p);
    return length(p - min(p.x + p.y, w) * 0.5) - r;
}

// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)
float sdPlus( in vec2 p, in vec2 b, float r ) {
    p = abs(p);
    p = (p.y > p.x) ? p.yx : p.xy;

    vec2  q = p - b;
    float k = max(q.y, q.x);
    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);

    return sign(k)*length(max(w, 0.0)) + r;
}

flat in vec4 fColor;
flat in float fPixelLength;
in vec2 vFromCenter;

out vec4 fragColor;

void main() {
    float sd = sdOctagon(vFromCenter, 1.0);
    if (sd > 0.0) {
        discard;
    }
    fragColor = fColor;
}
`,g0=class extends er{getDrawShaders(){let e=super.getDrawShaders();return e.fs=vh,e}getPickingShaders(){let e=super.getPickingShaders();return e.fs=mh,e}};var xh=`#version 300 es
precision highp float;
#define GLSLIFY 1

// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation
float luminance_x(float x) {
    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
}
float color_l(float l) {
    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));
}

// from https://en.wikipedia.org/wiki/Relative_luminance
float rgb2luminance(vec3 color) {
    // relative luminance
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    float r = luminance_x(color.r);
    float g = luminance_x(color.g);
    float b = luminance_x(color.b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

vec3 setLuminance(vec3 color, float luminance) {
    float r = luminance_x(color.r) * 0.2126;
    float g = luminance_x(color.g) * 0.7152;
    float b = luminance_x(color.b) * 0.0722;
    float colorLuminance = r + g + b;

    float tr = luminance * (r / colorLuminance);
    float tg = luminance * (g / colorLuminance);
    float tb = luminance * (b / colorLuminance);

    float rr = color_l(tr / 0.2126);
    float rg = color_l(tg / 0.7152);
    float rb = color_l(tb / 0.0722);

    return vec3(rr, rg, rb );
}

// https://www.w3.org/TR/WCAG20/#contrast-ratiodef
// (L1 + 0.05) / (L2 + 0.05), where
// - L1 is the relative luminance of the lighter of the colors, and
// - L2 is the relative luminance of the darker of the colors.
float findDarker(float luminance, float contrast) {
    return (contrast * luminance) + (0.05 * contrast) - 0.05;
}
float findLighter(float luminance, float contrast) {
    return (luminance + 0.05 - (0.05 * contrast)) / contrast;
}

vec3 contrastingColor(vec3 color, float contrast) {
    float luminance = rgb2luminance(color);
    float darker = findDarker(luminance, contrast);
    float lighter = findLighter(luminance, contrast);

    float targetLuminance;
    if (darker < 0.0 || darker > 1.0) {
        targetLuminance = lighter;
    } else if (lighter < 0.0 || lighter > 1.0) {
        targetLuminance = darker;
    } else {
        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;
    }

    return setLuminance(color, targetLuminance);
}

vec3 desaturateColor(vec3 color, float amount) {
    float l = rgb2luminance(color);
    vec3 gray = vec3(l, l, l);
    return mix(color, gray, amount);
}

uniform vec4 uClearColor;
uniform float uDesaturate;
uniform float uBrightness;
uniform float uFade;
uniform float uAlpha;

vec4 outputColor(vec4 color) {
    // desaturate => fade => alpha
    vec3 ret = mix(color.rgb, vec3(uBrightness + 1.0 / 2.0), abs(uBrightness));
    ret = vec3(desaturateColor(ret, uDesaturate));
    ret = mix(ret, uClearColor.rgb, uFade);
    return vec4(ret, color.a * uAlpha);
}

#define MODE_DRAFT 0u
#define MODE_MEDIUM 1u
#define MODE_HIGH 2u
#define MODE_HIGH_PASS_1 3u
#define MODE_HIGH_PASS_2 4u
#define MODE_PICKING 5u

// most of these come from this excellent post:
// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm

float opRound(in float d, in float r) {
    return d - r;
}

float opOnion(in float d, in float r) {
    return abs(d) - r;
}

float sdCircle(in vec2 p, in float r ) {
    return length(p) - r;
}

float sdEquilateralTriangle(in vec2 p, in float r) {
    const float k = sqrt(3.0);
    p.x = abs(p.x) - r;
    p.y = p.y + (r) / k;
    if (p.x + k * p.y > 0.0) {
        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;
    }
    p.x -= clamp(p.x, -2.0 * r, 0.0);
    return -length(p) * sign(p.y);
}

float sdPentagon(in vec2 p, in float r) {
    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);
    p.y = -(p.y) * 1.25;
    p.x = abs(p.x) * 1.25;
    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);
    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);
    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);
    return length(p) * sign(p.y);
}

float sdOctagon(in vec2 p, in float r) {
    // pi/8: cos, sin, tan.
    const vec3 k = vec3(
        -0.9238795325,   // sqrt(2+sqrt(2))/2
        0.3826834323,   // sqrt(2-sqrt(2))/2
        0.4142135623
    ); // sqrt(2)-1
    // reflections
    p = abs(p) * 1.1;
    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);
    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);
    // Polygon side.
    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);
    return length(p) * sign(p.y);
}

float sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]
    // these 4 lines can be precomputed for a given shape
    float an = 3.141593 / float(n);
    float en = 3.141593 / m;
    vec2  acs = vec2(cos(an), sin(an));
    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,

    // reduce to first sector
    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;
    p = length(p) * vec2(cos(bn), abs(sin(bn)));

    // line sdf
    p -= r * acs;
    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);
    return length(p) * sign(p.x);
}

float sdCross(in vec2 p, in float w, in float r) {
    p = abs(p);
    return length(p - min(p.x + p.y, w) * 0.5) - r;
}

// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)
float sdPlus( in vec2 p, in vec2 b, float r ) {
    p = abs(p);
    p = (p.y > p.x) ? p.yx : p.xy;

    vec2  q = p - b;
    float k = max(q.y, q.x);
    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);

    return sign(k)*length(max(w, 0.0)) + r;
}

uniform float uPixelRatio;
uniform uint uRenderMode;
uniform float uOutline;
uniform uint uSides;
uniform float uAngleDivisor;

flat in vec4 fColor;
flat in float fPixelLength;
in vec2 vFromCenter;

out vec4 fragColor;

void main() {
    float antialias = fPixelLength * 1.5;
    float sd = sdStar(vFromCenter, 1.0, uSides, uAngleDivisor);
    float outline = opOnion(sd, min(0.15, fPixelLength * uOutline * uPixelRatio));
    float modeDistance = uRenderMode == MODE_HIGH_PASS_1 ? -antialias : -antialias * 0.5;
    float distance = uRenderMode == MODE_HIGH_PASS_2 ? 0.0 : modeDistance;

    if (sd > distance) {
        discard;
    }

    vec3 color = fColor.rgb * (1.0 - 0.25 * smoothstep(antialias, 0.0, outline));

    if (uRenderMode == MODE_HIGH_PASS_2) {
        if (sd < -antialias) {
            discard;
        }
        fragColor = outputColor(vec4(color, smoothstep(0.0, antialias, abs(sd))));
    } else {
        fragColor = outputColor(vec4(color, 1.0));
    }
}
`,yh=`#version 300 es
precision highp float;
#define GLSLIFY 1

// most of these come from this excellent post:
// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm

float opRound(in float d, in float r) {
    return d - r;
}

float opOnion(in float d, in float r) {
    return abs(d) - r;
}

float sdCircle(in vec2 p, in float r ) {
    return length(p) - r;
}

float sdEquilateralTriangle(in vec2 p, in float r) {
    const float k = sqrt(3.0);
    p.x = abs(p.x) - r;
    p.y = p.y + (r) / k;
    if (p.x + k * p.y > 0.0) {
        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;
    }
    p.x -= clamp(p.x, -2.0 * r, 0.0);
    return -length(p) * sign(p.y);
}

float sdPentagon(in vec2 p, in float r) {
    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);
    p.y = -(p.y) * 1.25;
    p.x = abs(p.x) * 1.25;
    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);
    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);
    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);
    return length(p) * sign(p.y);
}

float sdOctagon(in vec2 p, in float r) {
    // pi/8: cos, sin, tan.
    const vec3 k = vec3(
        -0.9238795325,   // sqrt(2+sqrt(2))/2
        0.3826834323,   // sqrt(2-sqrt(2))/2
        0.4142135623
    ); // sqrt(2)-1
    // reflections
    p = abs(p) * 1.1;
    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);
    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);
    // Polygon side.
    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);
    return length(p) * sign(p.y);
}

float sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]
    // these 4 lines can be precomputed for a given shape
    float an = 3.141593 / float(n);
    float en = 3.141593 / m;
    vec2  acs = vec2(cos(an), sin(an));
    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,

    // reduce to first sector
    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;
    p = length(p) * vec2(cos(bn), abs(sin(bn)));

    // line sdf
    p -= r * acs;
    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);
    return length(p) * sign(p.x);
}

float sdCross(in vec2 p, in float w, in float r) {
    p = abs(p);
    return length(p - min(p.x + p.y, w) * 0.5) - r;
}

// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)
float sdPlus( in vec2 p, in vec2 b, float r ) {
    p = abs(p);
    p = (p.y > p.x) ? p.yx : p.xy;

    vec2  q = p - b;
    float k = max(q.y, q.x);
    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);

    return sign(k)*length(max(w, 0.0)) + r;
}

uniform uint uSides;
uniform float uAngleDivisor;

flat in vec4 fColor;
flat in float fPixelLength;
in vec2 vFromCenter;

out vec4 fragColor;

void main() {
    float sd = sdStar(vFromCenter, 1.0, uSides, uAngleDivisor);
    if (sd > 0.0) {
        discard;
    }
    fragColor = fColor;
}
`,f0=class extends er{get sides(){return this.localUniforms.uSides}set sides(e){this.localUniforms.uSides=e}get angleDivisor(){return this.localUniforms.uAngleDivisor}set angleDivisor(e){this.localUniforms.uAngleDivisor=e}constructor(e,t,r,n,a,s=5,f=3){super(e,t,r,n,a,s,f)}initialize(e,t,r,n,a,s,f){super.initialize(e,t,r,n,a),this.localUniforms.uSides=s,this.localUniforms.uAngleDivisor=f}getDrawShaders(){let e=super.getDrawShaders();return e.fs=xh,e}getPickingShaders(){let e=super.getPickingShaders();return e.fs=yh,e}};var _h=`#version 300 es
precision highp float;
#define GLSLIFY 1

// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation
float luminance_x(float x) {
    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
}
float color_l(float l) {
    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));
}

// from https://en.wikipedia.org/wiki/Relative_luminance
float rgb2luminance(vec3 color) {
    // relative luminance
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    float r = luminance_x(color.r);
    float g = luminance_x(color.g);
    float b = luminance_x(color.b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

vec3 setLuminance(vec3 color, float luminance) {
    float r = luminance_x(color.r) * 0.2126;
    float g = luminance_x(color.g) * 0.7152;
    float b = luminance_x(color.b) * 0.0722;
    float colorLuminance = r + g + b;

    float tr = luminance * (r / colorLuminance);
    float tg = luminance * (g / colorLuminance);
    float tb = luminance * (b / colorLuminance);

    float rr = color_l(tr / 0.2126);
    float rg = color_l(tg / 0.7152);
    float rb = color_l(tb / 0.0722);

    return vec3(rr, rg, rb );
}

// https://www.w3.org/TR/WCAG20/#contrast-ratiodef
// (L1 + 0.05) / (L2 + 0.05), where
// - L1 is the relative luminance of the lighter of the colors, and
// - L2 is the relative luminance of the darker of the colors.
float findDarker(float luminance, float contrast) {
    return (contrast * luminance) + (0.05 * contrast) - 0.05;
}
float findLighter(float luminance, float contrast) {
    return (luminance + 0.05 - (0.05 * contrast)) / contrast;
}

vec3 contrastingColor(vec3 color, float contrast) {
    float luminance = rgb2luminance(color);
    float darker = findDarker(luminance, contrast);
    float lighter = findLighter(luminance, contrast);

    float targetLuminance;
    if (darker < 0.0 || darker > 1.0) {
        targetLuminance = lighter;
    } else if (lighter < 0.0 || lighter > 1.0) {
        targetLuminance = darker;
    } else {
        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;
    }

    return setLuminance(color, targetLuminance);
}

vec3 desaturateColor(vec3 color, float amount) {
    float l = rgb2luminance(color);
    vec3 gray = vec3(l, l, l);
    return mix(color, gray, amount);
}

uniform vec4 uClearColor;
uniform float uDesaturate;
uniform float uBrightness;
uniform float uFade;
uniform float uAlpha;

vec4 outputColor(vec4 color) {
    // desaturate => fade => alpha
    vec3 ret = mix(color.rgb, vec3(uBrightness + 1.0 / 2.0), abs(uBrightness));
    ret = vec3(desaturateColor(ret, uDesaturate));
    ret = mix(ret, uClearColor.rgb, uFade);
    return vec4(ret, color.a * uAlpha);
}

#define MODE_DRAFT 0u
#define MODE_MEDIUM 1u
#define MODE_HIGH 2u
#define MODE_HIGH_PASS_1 3u
#define MODE_HIGH_PASS_2 4u
#define MODE_PICKING 5u

// most of these come from this excellent post:
// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm

float opRound(in float d, in float r) {
    return d - r;
}

float opOnion(in float d, in float r) {
    return abs(d) - r;
}

float sdCircle(in vec2 p, in float r ) {
    return length(p) - r;
}

float sdEquilateralTriangle(in vec2 p, in float r) {
    const float k = sqrt(3.0);
    p.x = abs(p.x) - r;
    p.y = p.y + (r) / k;
    if (p.x + k * p.y > 0.0) {
        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;
    }
    p.x -= clamp(p.x, -2.0 * r, 0.0);
    return -length(p) * sign(p.y);
}

float sdPentagon(in vec2 p, in float r) {
    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);
    p.y = -(p.y) * 1.25;
    p.x = abs(p.x) * 1.25;
    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);
    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);
    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);
    return length(p) * sign(p.y);
}

float sdOctagon(in vec2 p, in float r) {
    // pi/8: cos, sin, tan.
    const vec3 k = vec3(
        -0.9238795325,   // sqrt(2+sqrt(2))/2
        0.3826834323,   // sqrt(2-sqrt(2))/2
        0.4142135623
    ); // sqrt(2)-1
    // reflections
    p = abs(p) * 1.1;
    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);
    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);
    // Polygon side.
    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);
    return length(p) * sign(p.y);
}

float sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]
    // these 4 lines can be precomputed for a given shape
    float an = 3.141593 / float(n);
    float en = 3.141593 / m;
    vec2  acs = vec2(cos(an), sin(an));
    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,

    // reduce to first sector
    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;
    p = length(p) * vec2(cos(bn), abs(sin(bn)));

    // line sdf
    p -= r * acs;
    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);
    return length(p) * sign(p.x);
}

float sdCross(in vec2 p, in float w, in float r) {
    p = abs(p);
    return length(p - min(p.x + p.y, w) * 0.5) - r;
}

// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)
float sdPlus( in vec2 p, in vec2 b, float r ) {
    p = abs(p);
    p = (p.y > p.x) ? p.yx : p.xy;

    vec2  q = p - b;
    float k = max(q.y, q.x);
    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);

    return sign(k)*length(max(w, 0.0)) + r;
}

uniform float uPixelRatio;
uniform uint uRenderMode;
uniform float uOutline;

flat in vec4 fColor;
flat in float fPixelLength;
in vec2 vFromCenter;

out vec4 fragColor;

void main() {
    float antialias = fPixelLength * 1.5;
    float sd = sdCross(vFromCenter, 1.0, 0.3);
    float outline = opOnion(sd, min(0.15, fPixelLength * uOutline * uPixelRatio));
    float modeDistance = uRenderMode == MODE_HIGH_PASS_1 ? -antialias : -antialias * 0.5;
    float distance = uRenderMode == MODE_HIGH_PASS_2 ? 0.0 : modeDistance;

    if (sd > distance) {
        discard;
    }

    vec3 color = fColor.rgb * (1.0 - 0.25 * smoothstep(antialias, 0.0, outline));

    if (uRenderMode == MODE_HIGH_PASS_2) {
        if (sd < -antialias) {
            discard;
        }
        fragColor = outputColor(vec4(color, smoothstep(0.0, antialias, abs(sd))));
    } else {
        fragColor = outputColor(vec4(color, 1.0));
    }
}
`,bh=`#version 300 es
precision highp float;
#define GLSLIFY 1

// most of these come from this excellent post:
// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm

float opRound(in float d, in float r) {
    return d - r;
}

float opOnion(in float d, in float r) {
    return abs(d) - r;
}

float sdCircle(in vec2 p, in float r ) {
    return length(p) - r;
}

float sdEquilateralTriangle(in vec2 p, in float r) {
    const float k = sqrt(3.0);
    p.x = abs(p.x) - r;
    p.y = p.y + (r) / k;
    if (p.x + k * p.y > 0.0) {
        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;
    }
    p.x -= clamp(p.x, -2.0 * r, 0.0);
    return -length(p) * sign(p.y);
}

float sdPentagon(in vec2 p, in float r) {
    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);
    p.y = -(p.y) * 1.25;
    p.x = abs(p.x) * 1.25;
    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);
    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);
    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);
    return length(p) * sign(p.y);
}

float sdOctagon(in vec2 p, in float r) {
    // pi/8: cos, sin, tan.
    const vec3 k = vec3(
        -0.9238795325,   // sqrt(2+sqrt(2))/2
        0.3826834323,   // sqrt(2-sqrt(2))/2
        0.4142135623
    ); // sqrt(2)-1
    // reflections
    p = abs(p) * 1.1;
    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);
    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);
    // Polygon side.
    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);
    return length(p) * sign(p.y);
}

float sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]
    // these 4 lines can be precomputed for a given shape
    float an = 3.141593 / float(n);
    float en = 3.141593 / m;
    vec2  acs = vec2(cos(an), sin(an));
    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,

    // reduce to first sector
    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;
    p = length(p) * vec2(cos(bn), abs(sin(bn)));

    // line sdf
    p -= r * acs;
    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);
    return length(p) * sign(p.x);
}

float sdCross(in vec2 p, in float w, in float r) {
    p = abs(p);
    return length(p - min(p.x + p.y, w) * 0.5) - r;
}

// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)
float sdPlus( in vec2 p, in vec2 b, float r ) {
    p = abs(p);
    p = (p.y > p.x) ? p.yx : p.xy;

    vec2  q = p - b;
    float k = max(q.y, q.x);
    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);

    return sign(k)*length(max(w, 0.0)) + r;
}

flat in vec4 fColor;
flat in float fPixelLength;
in vec2 vFromCenter;

out vec4 fragColor;

void main() {
    float sd = sdCross(vFromCenter, 1.0, 0.3);
    if (sd > 0.0) {
        discard;
    }
    fragColor = fColor;
}
`,d0=class extends er{getDrawShaders(){let e=super.getDrawShaders();return e.fs=_h,e}getPickingShaders(){let e=super.getPickingShaders();return e.fs=bh,e}};var Eh=`#version 300 es
precision highp float;
#define GLSLIFY 1

// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation
float luminance_x(float x) {
    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
}
float color_l(float l) {
    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));
}

// from https://en.wikipedia.org/wiki/Relative_luminance
float rgb2luminance(vec3 color) {
    // relative luminance
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    float r = luminance_x(color.r);
    float g = luminance_x(color.g);
    float b = luminance_x(color.b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

vec3 setLuminance(vec3 color, float luminance) {
    float r = luminance_x(color.r) * 0.2126;
    float g = luminance_x(color.g) * 0.7152;
    float b = luminance_x(color.b) * 0.0722;
    float colorLuminance = r + g + b;

    float tr = luminance * (r / colorLuminance);
    float tg = luminance * (g / colorLuminance);
    float tb = luminance * (b / colorLuminance);

    float rr = color_l(tr / 0.2126);
    float rg = color_l(tg / 0.7152);
    float rb = color_l(tb / 0.0722);

    return vec3(rr, rg, rb );
}

// https://www.w3.org/TR/WCAG20/#contrast-ratiodef
// (L1 + 0.05) / (L2 + 0.05), where
// - L1 is the relative luminance of the lighter of the colors, and
// - L2 is the relative luminance of the darker of the colors.
float findDarker(float luminance, float contrast) {
    return (contrast * luminance) + (0.05 * contrast) - 0.05;
}
float findLighter(float luminance, float contrast) {
    return (luminance + 0.05 - (0.05 * contrast)) / contrast;
}

vec3 contrastingColor(vec3 color, float contrast) {
    float luminance = rgb2luminance(color);
    float darker = findDarker(luminance, contrast);
    float lighter = findLighter(luminance, contrast);

    float targetLuminance;
    if (darker < 0.0 || darker > 1.0) {
        targetLuminance = lighter;
    } else if (lighter < 0.0 || lighter > 1.0) {
        targetLuminance = darker;
    } else {
        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;
    }

    return setLuminance(color, targetLuminance);
}

vec3 desaturateColor(vec3 color, float amount) {
    float l = rgb2luminance(color);
    vec3 gray = vec3(l, l, l);
    return mix(color, gray, amount);
}

uniform vec4 uClearColor;
uniform float uDesaturate;
uniform float uBrightness;
uniform float uFade;
uniform float uAlpha;

vec4 outputColor(vec4 color) {
    // desaturate => fade => alpha
    vec3 ret = mix(color.rgb, vec3(uBrightness + 1.0 / 2.0), abs(uBrightness));
    ret = vec3(desaturateColor(ret, uDesaturate));
    ret = mix(ret, uClearColor.rgb, uFade);
    return vec4(ret, color.a * uAlpha);
}

#define MODE_DRAFT 0u
#define MODE_MEDIUM 1u
#define MODE_HIGH 2u
#define MODE_HIGH_PASS_1 3u
#define MODE_HIGH_PASS_2 4u
#define MODE_PICKING 5u

// most of these come from this excellent post:
// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm

float opRound(in float d, in float r) {
    return d - r;
}

float opOnion(in float d, in float r) {
    return abs(d) - r;
}

float sdCircle(in vec2 p, in float r ) {
    return length(p) - r;
}

float sdEquilateralTriangle(in vec2 p, in float r) {
    const float k = sqrt(3.0);
    p.x = abs(p.x) - r;
    p.y = p.y + (r) / k;
    if (p.x + k * p.y > 0.0) {
        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;
    }
    p.x -= clamp(p.x, -2.0 * r, 0.0);
    return -length(p) * sign(p.y);
}

float sdPentagon(in vec2 p, in float r) {
    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);
    p.y = -(p.y) * 1.25;
    p.x = abs(p.x) * 1.25;
    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);
    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);
    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);
    return length(p) * sign(p.y);
}

float sdOctagon(in vec2 p, in float r) {
    // pi/8: cos, sin, tan.
    const vec3 k = vec3(
        -0.9238795325,   // sqrt(2+sqrt(2))/2
        0.3826834323,   // sqrt(2-sqrt(2))/2
        0.4142135623
    ); // sqrt(2)-1
    // reflections
    p = abs(p) * 1.1;
    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);
    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);
    // Polygon side.
    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);
    return length(p) * sign(p.y);
}

float sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]
    // these 4 lines can be precomputed for a given shape
    float an = 3.141593 / float(n);
    float en = 3.141593 / m;
    vec2  acs = vec2(cos(an), sin(an));
    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,

    // reduce to first sector
    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;
    p = length(p) * vec2(cos(bn), abs(sin(bn)));

    // line sdf
    p -= r * acs;
    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);
    return length(p) * sign(p.x);
}

float sdCross(in vec2 p, in float w, in float r) {
    p = abs(p);
    return length(p - min(p.x + p.y, w) * 0.5) - r;
}

// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)
float sdPlus( in vec2 p, in vec2 b, float r ) {
    p = abs(p);
    p = (p.y > p.x) ? p.yx : p.xy;

    vec2  q = p - b;
    float k = max(q.y, q.x);
    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);

    return sign(k)*length(max(w, 0.0)) + r;
}

uniform float uPixelRatio;
uniform uint uRenderMode;
uniform float uOutline;

flat in vec4 fColor;
flat in float fPixelLength;
in vec2 vFromCenter;

out vec4 fragColor;

void main() {
    float antialias = fPixelLength * 1.5;
    float sd = sdPlus(vFromCenter, vec2(0.9, 0.3), 0.0);
    float outline = opOnion(sd, min(0.15, fPixelLength * uOutline * uPixelRatio));
    float modeDistance = uRenderMode == MODE_HIGH_PASS_1 ? -antialias : -antialias * 0.5;
    float distance = uRenderMode == MODE_HIGH_PASS_2 ? 0.0 : modeDistance;

    if (sd > distance) {
        discard;
    }

    vec3 color = fColor.rgb * (1.0 - 0.25 * smoothstep(antialias, 0.0, outline));

    if (uRenderMode == MODE_HIGH_PASS_2) {
        if (sd < -antialias) {
            discard;
        }
        fragColor = outputColor(vec4(color, smoothstep(0.0, antialias, abs(sd))));
    } else {
        fragColor = outputColor(vec4(color, 1.0));
    }
}
`,wh=`#version 300 es
precision highp float;
#define GLSLIFY 1

// most of these come from this excellent post:
// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm

float opRound(in float d, in float r) {
    return d - r;
}

float opOnion(in float d, in float r) {
    return abs(d) - r;
}

float sdCircle(in vec2 p, in float r ) {
    return length(p) - r;
}

float sdEquilateralTriangle(in vec2 p, in float r) {
    const float k = sqrt(3.0);
    p.x = abs(p.x) - r;
    p.y = p.y + (r) / k;
    if (p.x + k * p.y > 0.0) {
        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;
    }
    p.x -= clamp(p.x, -2.0 * r, 0.0);
    return -length(p) * sign(p.y);
}

float sdPentagon(in vec2 p, in float r) {
    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);
    p.y = -(p.y) * 1.25;
    p.x = abs(p.x) * 1.25;
    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);
    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);
    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);
    return length(p) * sign(p.y);
}

float sdOctagon(in vec2 p, in float r) {
    // pi/8: cos, sin, tan.
    const vec3 k = vec3(
        -0.9238795325,   // sqrt(2+sqrt(2))/2
        0.3826834323,   // sqrt(2-sqrt(2))/2
        0.4142135623
    ); // sqrt(2)-1
    // reflections
    p = abs(p) * 1.1;
    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);
    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);
    // Polygon side.
    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);
    return length(p) * sign(p.y);
}

float sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]
    // these 4 lines can be precomputed for a given shape
    float an = 3.141593 / float(n);
    float en = 3.141593 / m;
    vec2  acs = vec2(cos(an), sin(an));
    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,

    // reduce to first sector
    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;
    p = length(p) * vec2(cos(bn), abs(sin(bn)));

    // line sdf
    p -= r * acs;
    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);
    return length(p) * sign(p.x);
}

float sdCross(in vec2 p, in float w, in float r) {
    p = abs(p);
    return length(p - min(p.x + p.y, w) * 0.5) - r;
}

// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)
float sdPlus( in vec2 p, in vec2 b, float r ) {
    p = abs(p);
    p = (p.y > p.x) ? p.yx : p.xy;

    vec2  q = p - b;
    float k = max(q.y, q.x);
    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);

    return sign(k)*length(max(w, 0.0)) + r;
}

flat in vec4 fColor;
flat in float fPixelLength;
in vec2 vFromCenter;

out vec4 fragColor;

void main() {
    float sd = sdPlus(vFromCenter, vec2(1.0, 0.3), 0.0);
    if (sd > 0.0) {
        discard;
    }
    fragColor = fColor;
}
`,h0=class extends er{getDrawShaders(){let e=super.getDrawShaders();return e.fs=Eh,e}getPickingShaders(){let e=super.getPickingShaders();return e.fs=wh,e}};var Ch={Circle:er,Ring:c0,Triangle:u0,Pentagon:l0,Octagon:g0,Star:f0,Cross:d0,Plus:h0};var Ya={};fn(Ya,{ClusterBundle:()=>_0,CurvedPath:()=>x0,Dashed:()=>v0,Edges:()=>Pr,Gravity:()=>m0,Straight:()=>Xa,StraightPath:()=>y0,kBasicEdgeDataTypes:()=>ja,kBasicEdgeMappings:()=>p0,kClusterBundleEdgeDataTypes:()=>Ll,kClusterBundleEdgeMappings:()=>Il,kCurvedPathEdgeDataTypes:()=>Cl,kCurvedPathEdgeMappings:()=>Xo,kGLClusterBundleEdgeTypes:()=>Pl,kGLCurvedPathEdgeTypes:()=>Al,kGLGravityEdgeTypes:()=>Ih,kGLStraightEdgeTypes:()=>jo,kGLStraightPathEdgeTypes:()=>Tl,kStraightPathEdgeDataTypes:()=>Sl,types:()=>Bh});var p0={id:(e,t)=>"id"in e?e.id:t,source:e=>e.source,target:e=>e.target,sourceColor:e=>"sourceColor"in e?e.sourceColor:0,targetColor:e=>"targetColor"in e?e.targetColor:0},ja={source:xe.UNSIGNED_INT,target:xe.UNSIGNED_INT,sourceColor:xe.UNSIGNED_INT,targetColor:xe.UNSIGNED_INT},Pr=class extends Wo{static get defaultMappings(){return p0}get lineWidth(){return this.localUniforms.uLineWidth}set lineWidth(e){this.localUniforms.uLineWidth=e}initialize(...e){super.initialize(...e),this.localUniforms=Object.assign({},this.localUniforms,{uGraphPoints:this.dataTexture,uLineWidth:1.5})}constructor(...e){super(...e)}computeMappings(e){let t=Object.assign({},p0,e),r=t.source;t.source=(a,s)=>this.points.getPointIndex(r(a,s));let n=t.target;return t.target=(a,s)=>this.points.getPointIndex(n(a,s)),t}};var bl=`#version 300 es
#define GLSLIFY 1

layout(location=0) in vec3 aVertex;
layout(location=1) in uint iPointA;
layout(location=2) in uint iPointB;
layout(location=3) in uint iColorA;
layout(location=4) in uint iColorB;

uniform mat4 uViewMatrix;
uniform mat4 uSceneMatrix;
uniform mat4 uProjectionMatrix;
uniform vec2 uViewportSize;
uniform float uPixelRatio;
uniform sampler2D uGraphPoints;
uniform sampler2D uColorPalette;

uniform float uLineWidth;

flat out float fLineWidth;
out vec3 vColor;
out vec2 vProjectedPosition;
out float vProjectedW;

vec4 valueForIndex(sampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uvec4 uvalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uint uivalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0)[0];
}

void main() {
    vec4 pointA = valueForIndex(uGraphPoints, int(iPointA));
    vec4 pointB = valueForIndex(uGraphPoints, int(iPointB));

    vec3 direction = normalize(pointB.xyz - pointA.xyz);

    vec3 offsetA = pointA.xyz + direction * pointA[3];
    vec3 offsetB = pointB.xyz - direction * pointB[3];

    float multA = aVertex.y;
    float multB = 1.0 - aVertex.y;

    vec4 colorA = valueForIndex(uColorPalette, int(iColorA));
    vec4 colorB = valueForIndex(uColorPalette, int(iColorB));

    vColor = colorA.rgb * multA + colorB.rgb * multB;

    mat4 renderMatrix = uProjectionMatrix * uViewMatrix * uSceneMatrix;

    vec4 aProjected = renderMatrix * vec4(offsetA, 1.0);
    vec2 aScreen = aProjected.xy / aProjected.w * uViewportSize * 0.5;

    vec4 bProjected = renderMatrix * vec4(offsetB, 1.0);
    vec2 bScreen = bProjected.xy / bProjected.w * uViewportSize * 0.5;

    vec2 screenDirection = normalize(bScreen - aScreen);
    vec2 perp = vec2(-screenDirection.y, screenDirection.x);

    fLineWidth = uLineWidth * uPixelRatio;
    float offsetWidth = fLineWidth + 0.5;
    vec4 position = aProjected * multA + bProjected * multB;
    vec4 offset = vec4(((aVertex.x * perp * offsetWidth) / uViewportSize) * position.w, 0.0, 0.0);
    gl_Position = position + offset;

    vProjectedPosition = position.xy;
    vProjectedW = position.w;
}
`,Ah=`#version 300 es
precision highp float;
#define GLSLIFY 1

// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation
float luminance_x_1540259130(float x) {
    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
}
float color_l_1540259130(float l) {
    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));
}

// from https://en.wikipedia.org/wiki/Relative_luminance
float rgb2luminance(vec3 color) {
    // relative luminance
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    float r = luminance_x_1540259130(color.r);
    float g = luminance_x_1540259130(color.g);
    float b = luminance_x_1540259130(color.b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

vec3 setLuminance(vec3 color, float luminance) {
    float r = luminance_x_1540259130(color.r) * 0.2126;
    float g = luminance_x_1540259130(color.g) * 0.7152;
    float b = luminance_x_1540259130(color.b) * 0.0722;
    float colorLuminance = r + g + b;

    float tr = luminance * (r / colorLuminance);
    float tg = luminance * (g / colorLuminance);
    float tb = luminance * (b / colorLuminance);

    float rr = color_l_1540259130(tr / 0.2126);
    float rg = color_l_1540259130(tg / 0.7152);
    float rb = color_l_1540259130(tb / 0.0722);

    return vec3(rr, rg, rb );
}

// https://www.w3.org/TR/WCAG20/#contrast-ratiodef
// (L1 + 0.05) / (L2 + 0.05), where
// - L1 is the relative luminance of the lighter of the colors, and
// - L2 is the relative luminance of the darker of the colors.
float findDarker(float luminance, float contrast) {
    return (contrast * luminance) + (0.05 * contrast) - 0.05;
}
float findLighter(float luminance, float contrast) {
    return (luminance + 0.05 - (0.05 * contrast)) / contrast;
}

vec3 contrastingColor(vec3 color, float contrast) {
    float luminance = rgb2luminance(color);
    float darker = findDarker(luminance, contrast);
    float lighter = findLighter(luminance, contrast);

    float targetLuminance;
    if (darker < 0.0 || darker > 1.0) {
        targetLuminance = lighter;
    } else if (lighter < 0.0 || lighter > 1.0) {
        targetLuminance = darker;
    } else {
        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;
    }

    return setLuminance(color, targetLuminance);
}

vec3 desaturateColor(vec3 color, float amount) {
    float l = rgb2luminance(color);
    vec3 gray = vec3(l, l, l);
    return mix(color, gray, amount);
}

uniform vec4 uClearColor;
uniform float uDesaturate;
uniform float uBrightness;
uniform float uFade;
uniform float uAlpha;

vec4 outputColor(vec4 color) {
    // desaturate => fade => alpha
    vec3 ret = mix(color.rgb, vec3(uBrightness + 1.0 / 2.0), abs(uBrightness));
    ret = vec3(desaturateColor(ret, uDesaturate));
    ret = mix(ret, uClearColor.rgb, uFade);
    return vec4(ret, color.a * uAlpha);
}

#define MODE_DRAFT 0u
#define MODE_MEDIUM 1u
#define MODE_HIGH 2u
#define MODE_HIGH_PASS_1 3u
#define MODE_HIGH_PASS_2 4u
#define MODE_PICKING 5u

#define ONE_ALPHA 0.00392156862 // 1.0 / 255.0

float lineAlpha(vec2 position, float w, vec2 viewportSize, float lineWidth) {
    vec2 lineCenter = ((position / w) * 0.5 + 0.5) * viewportSize;
    float distOffset = (lineWidth - 1.0) * 0.5;
    float dist = smoothstep(lineWidth * 0.5 - 0.5, lineWidth * 0.5 + 0.5, distance(lineCenter, gl_FragCoord.xy));
    return (1.0 - dist);
}

vec4 lineColor(vec3 color, vec2 position, float w, vec2 viewportSize, uint mode, float lineWidth) {
    if (mode < MODE_HIGH_PASS_1) {
        return outputColor(vec4(color, 1.0));
    }

    float a = lineAlpha(position, w, viewportSize, lineWidth);

    if (mode == MODE_HIGH_PASS_1) {
        if (a == 1.0) {
            return outputColor(vec4(color, a));
        } else {
            discard;
        }
    }

    // Possible optimization.
    // Edges run into fill rate issues because too many of them overlap, discarging pixels below a certain alpha
    // threshold might help speed things up a bit.
    if (a < ONE_ALPHA) {
        discard;
    }

    return outputColor(vec4(color, a));
}

uniform vec2 uViewportSize;
uniform uint uRenderMode;

flat in float fLineWidth;
in vec3 vColor;
in vec2 vProjectedPosition;
in float vProjectedW;

out vec4 fragColor;

void main() {
    fragColor = lineColor(vColor, vProjectedPosition, vProjectedW, uViewportSize, uRenderMode, fLineWidth);
}
`,Mh=`#version 300 es
#define GLSLIFY 1

layout(location=0) in uint aSourceIndex;
layout(location=1) in uint aTargetIndex;
layout(location=2) in uint aSourceColor;
layout(location=3) in uint aTargetColor;

flat out uint fSource;
flat out uint fTarget;
flat out uint fSourceColor;
flat out uint fTargetColor;

void main() {
    fSource = aSourceIndex;
    fTarget = aTargetIndex;
    fSourceColor = aSourceColor;
    fTargetColor = aTargetColor;
}
`,jo={source:oe.UNSIGNED_INT,target:oe.UNSIGNED_INT,sourceColor:oe.UNSIGNED_INT,targetColor:oe.UNSIGNED_INT},Xa=class extends Pr{initialize(e,t,r,n,a){super.initialize(e,t,r,n,a),this.verticesVBO=e.createVertexBuffer(oe.FLOAT,2,new Float32Array([-1,0,1,0,-1,1,1,1])),this.edgesVAO=e.createVertexArray().vertexAttributeBuffer(0,this.verticesVBO),this.configureTargetVAO(this.edgesVAO);let s=this.getDrawShaders();this.program=e.createProgram(s.vs,s.fs),this.drawCall=e.createDrawCall(this.program,this.edgesVAO).primitive(oe.TRIANGLE_STRIP),this.compute(e,{})}destroy(){}render(e,t,r){switch(this.configureRenderContext(e,t),bt(this.drawCall,r),bt(this.drawCall,this.localUniforms),t){case Be.PICKING:break;default:this.drawCall.draw();break}}getDrawShaders(){return{vs:bl,fs:Ah}}getPickingShaders(){return{vs:bl,fs:null}}getGLSourceTypes(){return ja}getGLTargetTypes(){return jo}getDataShader(){return{vs:Mh,varyings:["fSource","fTarget","fSourceColor","fTargetColor"]}}};var Sh=`#version 300 es
#define GLSLIFY 1

layout(location=0) in vec3 aVertex;
layout(location=1) in uint iPointA;
layout(location=2) in uint iPointB;
layout(location=3) in uint iColorA;
layout(location=4) in uint iColorB;

uniform mat4 uViewMatrix;
uniform mat4 uSceneMatrix;
uniform mat4 uProjectionMatrix;
uniform vec2 uViewportSize;
uniform float uPixelRatio;
uniform sampler2D uGraphPoints;
uniform sampler2D uColorPalette;
uniform uint uDashLength;

uniform float uLineWidth;

flat out float fLineWidth;
out vec3 vColor;
out float vDashLength;
out vec2 vProjectedPosition;
out float vProjectedW;

vec4 valueForIndex(sampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uvec4 uvalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uint uivalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0)[0];
}

void main() {
    vec4 pointA = valueForIndex(uGraphPoints, int(iPointA));
    vec4 pointB = valueForIndex(uGraphPoints, int(iPointB));

    vec3 direction = normalize(pointB.xyz - pointA.xyz);

    vec3 offsetA = pointA.xyz + direction * pointA[3];
    vec3 offsetB = pointB.xyz - direction * pointB[3];

    float multA = aVertex.y;
    float multB = 1.0 - aVertex.y;

    vec4 colorA = valueForIndex(uColorPalette, int(iColorA));
    vec4 colorB = valueForIndex(uColorPalette, int(iColorB));

    vColor = colorA.rgb * multA + colorB.rgb * multB;

    mat4 renderMatrix = uProjectionMatrix * uViewMatrix * uSceneMatrix;

    vec4 aProjected = renderMatrix * vec4(offsetA, 1.0);
    vec2 aScreen = (aProjected.xy / aProjected.w) * (uViewportSize / 2.0);

    vec4 bProjected = renderMatrix * vec4(offsetB, 1.0);
    vec2 bScreen = (bProjected.xy / bProjected.w) * (uViewportSize / 2.0);

    vec2 screenDirection = normalize(bScreen - aScreen);
    vec2 perp = vec2(-screenDirection.y, screenDirection.x);

    fLineWidth = uLineWidth * uPixelRatio;
    float offsetWidth = fLineWidth + 0.5;
    vec4 position = aProjected * multA + bProjected * multB;
    vec4 offset = vec4(((aVertex.x * perp * offsetWidth) / uViewportSize) * position.w, 0.0, 0.0);
    gl_Position = position + offset;

    vProjectedPosition = position.xy;
    vProjectedW = position.w;

    float screenDistance = distance(aScreen, bScreen);
    vDashLength = (screenDistance / float(uDashLength)) * aVertex.y;
}
`,Th=`#version 300 es
precision highp float;
#define GLSLIFY 1

// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation
float luminance_x_1540259130(float x) {
    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
}
float color_l_1540259130(float l) {
    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));
}

// from https://en.wikipedia.org/wiki/Relative_luminance
float rgb2luminance(vec3 color) {
    // relative luminance
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    float r = luminance_x_1540259130(color.r);
    float g = luminance_x_1540259130(color.g);
    float b = luminance_x_1540259130(color.b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

vec3 setLuminance(vec3 color, float luminance) {
    float r = luminance_x_1540259130(color.r) * 0.2126;
    float g = luminance_x_1540259130(color.g) * 0.7152;
    float b = luminance_x_1540259130(color.b) * 0.0722;
    float colorLuminance = r + g + b;

    float tr = luminance * (r / colorLuminance);
    float tg = luminance * (g / colorLuminance);
    float tb = luminance * (b / colorLuminance);

    float rr = color_l_1540259130(tr / 0.2126);
    float rg = color_l_1540259130(tg / 0.7152);
    float rb = color_l_1540259130(tb / 0.0722);

    return vec3(rr, rg, rb );
}

// https://www.w3.org/TR/WCAG20/#contrast-ratiodef
// (L1 + 0.05) / (L2 + 0.05), where
// - L1 is the relative luminance of the lighter of the colors, and
// - L2 is the relative luminance of the darker of the colors.
float findDarker(float luminance, float contrast) {
    return (contrast * luminance) + (0.05 * contrast) - 0.05;
}
float findLighter(float luminance, float contrast) {
    return (luminance + 0.05 - (0.05 * contrast)) / contrast;
}

vec3 contrastingColor(vec3 color, float contrast) {
    float luminance = rgb2luminance(color);
    float darker = findDarker(luminance, contrast);
    float lighter = findLighter(luminance, contrast);

    float targetLuminance;
    if (darker < 0.0 || darker > 1.0) {
        targetLuminance = lighter;
    } else if (lighter < 0.0 || lighter > 1.0) {
        targetLuminance = darker;
    } else {
        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;
    }

    return setLuminance(color, targetLuminance);
}

vec3 desaturateColor(vec3 color, float amount) {
    float l = rgb2luminance(color);
    vec3 gray = vec3(l, l, l);
    return mix(color, gray, amount);
}

uniform vec4 uClearColor;
uniform float uDesaturate;
uniform float uBrightness;
uniform float uFade;
uniform float uAlpha;

vec4 outputColor(vec4 color) {
    // desaturate => fade => alpha
    vec3 ret = mix(color.rgb, vec3(uBrightness + 1.0 / 2.0), abs(uBrightness));
    ret = vec3(desaturateColor(ret, uDesaturate));
    ret = mix(ret, uClearColor.rgb, uFade);
    return vec4(ret, color.a * uAlpha);
}

#define MODE_DRAFT 0u
#define MODE_MEDIUM 1u
#define MODE_HIGH 2u
#define MODE_HIGH_PASS_1 3u
#define MODE_HIGH_PASS_2 4u
#define MODE_PICKING 5u

#define ONE_ALPHA 0.00392156862 // 1.0 / 255.0

float lineAlpha(vec2 position, float w, vec2 viewportSize, float lineWidth) {
    vec2 lineCenter = ((position / w) * 0.5 + 0.5) * viewportSize;
    float distOffset = (lineWidth - 1.0) * 0.5;
    float dist = smoothstep(lineWidth * 0.5 - 0.5, lineWidth * 0.5 + 0.5, distance(lineCenter, gl_FragCoord.xy));
    return (1.0 - dist);
}

vec4 lineColor(vec3 color, vec2 position, float w, vec2 viewportSize, uint mode, float lineWidth) {
    if (mode < MODE_HIGH_PASS_1) {
        return outputColor(vec4(color, 1.0));
    }

    float a = lineAlpha(position, w, viewportSize, lineWidth);

    if (mode == MODE_HIGH_PASS_1) {
        if (a == 1.0) {
            return outputColor(vec4(color, a));
        } else {
            discard;
        }
    }

    // Possible optimization.
    // Edges run into fill rate issues because too many of them overlap, discarging pixels below a certain alpha
    // threshold might help speed things up a bit.
    if (a < ONE_ALPHA) {
        discard;
    }

    return outputColor(vec4(color, a));
}

uniform vec2 uViewportSize;
uniform uint uRenderMode;

flat in float fLineWidth;
in vec3 vColor;
in float vDashLength;
in vec2 vProjectedPosition;
in float vProjectedW;

out vec4 fragColor;

void main() {
    if (int(vDashLength) % 2 == 1) {
        discard;
    }
    fragColor = lineColor(vColor, vProjectedPosition, vProjectedW, uViewportSize, uRenderMode, fLineWidth);
}
`,v0=class extends Xa{get dashLength(){return this.localUniforms.uDashLength}set dashLength(e){this.localUniforms.uDashLength=e}initialize(e,t,r,n,a){super.initialize(e,t,r,n,a),this.localUniforms.uDashLength=10}getDrawShaders(){return{vs:Sh,fs:Th}}};var El=`#version 300 es
#define GLSLIFY 1

layout(location=0) in vec3 aVertex;
layout(location=1) in uint iPointA;
layout(location=2) in uint iPointB;
layout(location=3) in uint iColorA;
layout(location=4) in uint iColorB;

uniform mat4 uViewMatrix;
uniform mat4 uSceneMatrix;
uniform mat4 uProjectionMatrix;
uniform vec2 uViewportSize;
uniform float uPixelRatio;
uniform float uGravity;
uniform sampler2D uColorPalette;

out vec3 vColor;
out vec2 vProjectedPosition;
out float vProjectedW;

vec4 valueForIndex(sampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uvec4 uvalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uint uivalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0)[0];
}

void main() {
    float multA = aVertex.x;
    float multB = 1.0 - aVertex.x;

    vec3 offsetA = valueForIndex(uGraphPoints, int(iPointA)).xyz;
    vec3 offsetB = valueForIndex(uGraphPoints, int(iPointB)).xyz;

    vec4 colorA = valueForIndex(uColorPalette, int(iColorA));
    vec4 colorB = valueForIndex(uColorPalette, int(iColorB));

    vColor = colorA.rgb * multA + colorB.rgb * multB;

    vec3 direction = offsetB - offsetA;
    vec3 middle = offsetA + direction * 0.5;
    float distance = length(direction);

    float toCenter = length(middle);
    vec3 towardsCenter = (middle * -1.0) / toCenter;

    vec3 gravity = middle + towardsCenter * min(toCenter, distance * uGravity);
    vec3 position = gravity + pow(multB, 2.0) * (offsetB - gravity) + pow(multA, 2.0) * (offsetA - gravity);

    mat4 renderMatrix = uProjectionMatrix * uViewMatrix * uSceneMatrix;
    gl_Position = renderMatrix * vec4(position, 1.0);

    vProjectedPosition = gl_Position.xy;
    vProjectedW = gl_Position.w;
}
`,Rh=`#version 300 es
precision highp float;
#define GLSLIFY 1

// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation
float luminance_x_1540259130(float x) {
    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
}
float color_l_1540259130(float l) {
    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));
}

// from https://en.wikipedia.org/wiki/Relative_luminance
float rgb2luminance(vec3 color) {
    // relative luminance
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    float r = luminance_x_1540259130(color.r);
    float g = luminance_x_1540259130(color.g);
    float b = luminance_x_1540259130(color.b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

vec3 setLuminance(vec3 color, float luminance) {
    float r = luminance_x_1540259130(color.r) * 0.2126;
    float g = luminance_x_1540259130(color.g) * 0.7152;
    float b = luminance_x_1540259130(color.b) * 0.0722;
    float colorLuminance = r + g + b;

    float tr = luminance * (r / colorLuminance);
    float tg = luminance * (g / colorLuminance);
    float tb = luminance * (b / colorLuminance);

    float rr = color_l_1540259130(tr / 0.2126);
    float rg = color_l_1540259130(tg / 0.7152);
    float rb = color_l_1540259130(tb / 0.0722);

    return vec3(rr, rg, rb );
}

// https://www.w3.org/TR/WCAG20/#contrast-ratiodef
// (L1 + 0.05) / (L2 + 0.05), where
// - L1 is the relative luminance of the lighter of the colors, and
// - L2 is the relative luminance of the darker of the colors.
float findDarker(float luminance, float contrast) {
    return (contrast * luminance) + (0.05 * contrast) - 0.05;
}
float findLighter(float luminance, float contrast) {
    return (luminance + 0.05 - (0.05 * contrast)) / contrast;
}

vec3 contrastingColor(vec3 color, float contrast) {
    float luminance = rgb2luminance(color);
    float darker = findDarker(luminance, contrast);
    float lighter = findLighter(luminance, contrast);

    float targetLuminance;
    if (darker < 0.0 || darker > 1.0) {
        targetLuminance = lighter;
    } else if (lighter < 0.0 || lighter > 1.0) {
        targetLuminance = darker;
    } else {
        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;
    }

    return setLuminance(color, targetLuminance);
}

vec3 desaturateColor(vec3 color, float amount) {
    float l = rgb2luminance(color);
    vec3 gray = vec3(l, l, l);
    return mix(color, gray, amount);
}

uniform vec4 uClearColor;
uniform float uDesaturate;
uniform float uBrightness;
uniform float uFade;
uniform float uAlpha;

vec4 outputColor(vec4 color) {
    // desaturate => fade => alpha
    vec3 ret = mix(color.rgb, vec3(uBrightness + 1.0 / 2.0), abs(uBrightness));
    ret = vec3(desaturateColor(ret, uDesaturate));
    ret = mix(ret, uClearColor.rgb, uFade);
    return vec4(ret, color.a * uAlpha);
}

#define MODE_DRAFT 0u
#define MODE_MEDIUM 1u
#define MODE_HIGH 2u
#define MODE_HIGH_PASS_1 3u
#define MODE_HIGH_PASS_2 4u
#define MODE_PICKING 5u

#define ONE_ALPHA 0.00392156862 // 1.0 / 255.0

float lineAlpha(vec2 position, float w, vec2 viewportSize, float lineWidth) {
    vec2 lineCenter = ((position / w) * 0.5 + 0.5) * viewportSize;
    float distOffset = (lineWidth - 1.0) * 0.5;
    float dist = smoothstep(lineWidth * 0.5 - 0.5, lineWidth * 0.5 + 0.5, distance(lineCenter, gl_FragCoord.xy));
    return (1.0 - dist);
}

vec4 lineColor(vec3 color, vec2 position, float w, vec2 viewportSize, uint mode, float lineWidth) {
    if (mode < MODE_HIGH_PASS_1) {
        return outputColor(vec4(color, 1.0));
    }

    float a = lineAlpha(position, w, viewportSize, lineWidth);

    if (mode == MODE_HIGH_PASS_1) {
        if (a == 1.0) {
            return outputColor(vec4(color, a));
        } else {
            discard;
        }
    }

    // Possible optimization.
    // Edges run into fill rate issues because too many of them overlap, discarging pixels below a certain alpha
    // threshold might help speed things up a bit.
    if (a < ONE_ALPHA) {
        discard;
    }

    return outputColor(vec4(color, a));
}

uniform vec2 uViewportSize;
uniform uint uRenderMode;

in vec3 vColor;
in vec2 vProjectedPosition;
in float vProjectedW;

out vec4 fragColor;

void main() {
    fragColor = lineColor(vColor, vProjectedPosition, vProjectedW, uViewportSize, uRenderMode);
}
`,Nh=`#version 300 es
#define GLSLIFY 1

layout(location=0) in uint aSourceIndex;
layout(location=1) in uint aTargetIndex;
layout(location=2) in uint aSourceColor;
layout(location=3) in uint aTargetColor;

uniform sampler2D uGraphPoints;

flat out uint fSource;
flat out uint fTarget;
flat out uint fSourceColor;
flat out uint fTargetColor;

void main() {
    fSource = aSourceIndex;
    fTarget = aTargetIndex;
    fSourceColor = aSourceColor;
    fTargetColor = aTargetColor;
}
`,Ih={source:oe.UNSIGNED_INT,target:oe.UNSIGNED_INT,sourceColor:oe.UNSIGNED_INT,targetColor:oe.UNSIGNED_INT},m0=class extends Pr{get gravity(){return this.localUniforms.uGravity}set gravity(e){this.localUniforms.uGravity=e}constructor(e,t,r,n,a,s=16){super(e,t,r,n,a,s)}initialize(e,t,r,n,a,s){super.initialize(e,t,r,n,a),this.localUniforms.uGravity=-.2;let f=[];for(let g=0;g<=s;++g)f.push(g/s,0);this.verticesVBO=e.createVertexBuffer(oe.FLOAT,2,new Float32Array(f)),this.edgesVAO=e.createVertexArray().vertexAttributeBuffer(0,this.verticesVBO),this.configureTargetVAO(this.edgesVAO);let h=this.getDrawShaders();this.program=e.createProgram(h.vs,h.fs),this.drawCall=e.createDrawCall(this.program,this.edgesVAO).primitive(oe.LINE_STRIP),this.compute(e,{})}destroy(){}render(e,t,r){switch(bt(this.drawCall,r),bt(this.drawCall,this.localUniforms),this.configureRenderContext(e,t),t){case Be.PICKING:break;default:this.drawCall.draw();break}}getDrawShaders(){return{vs:El,fs:Rh}}getPickingShaders(){return{vs:El,fs:null}}getGLSourceTypes(){return ja}getGLTargetTypes(){return jo}getDataShader(){return{vs:Nh,varyings:["fSource","fTarget","fSourceColor","fTargetColor"]}}};var wl=`#version 300 es
#define GLSLIFY 1

layout(location=0) in vec3 aVertex;
layout(location=1) in vec3 iOffsetA;
layout(location=2) in vec3 iOffsetB;
layout(location=3) in vec3 iControl;
layout(location=4) in uint iColorA;
layout(location=5) in uint iColorB;
layout(location=6) in vec2 iColorMix;

uniform mat4 uViewMatrix;
uniform mat4 uSceneMatrix;
uniform mat4 uProjectionMatrix;
uniform vec2 uViewportSize;
uniform float uPixelRatio;
uniform sampler2D uColorPalette;

uniform float uLineWidth;
uniform float uSegments;

flat out float fLineWidth;
out vec3 vColor;
out vec2 vProjectedPosition;
out float vProjectedW;

vec4 getColorByIndexFromTexture(sampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

vec3 bezier(vec3 p0, vec3 p1, vec3 p2, float t) {
    return p1 + pow(1.0 - t, 2.0) * (p2 - p1) + pow(t, 2.0) * (p0 - p1);
}

void main() {
    // bezier works fine with 0 > t > 1
    float t0 = aVertex.y / uSegments;
    float t1 = (aVertex.y + 1.0) / uSegments;

    // calculate both bezier points
    vec3 b0 = bezier(iOffsetA, iControl, iOffsetB, t0);
    vec3 b1 = bezier(iOffsetA, iControl, iOffsetB, t1);

    // project the points to the screen
    mat4 renderMatrix = uProjectionMatrix * uViewMatrix * uSceneMatrix;
    vec4 b0Projected = renderMatrix * vec4(b0, 1.0);
    vec4 b1Projected = renderMatrix * vec4(b1, 1.0);

    // get their screen coords
    vec2 b0Screen = (b0Projected.xy / b0Projected.w) * uViewportSize * 0.5;
    vec2 b1Screen = (b1Projected.xy / b1Projected.w) * uViewportSize * 0.5;

    // get the direction and normal of the segment
    vec2 direction = normalize(b1Screen - b0Screen);
    vec2 normal = vec2(-direction.y, direction.x);

    // calculate the pixel offset
    fLineWidth = uLineWidth * uPixelRatio;
    float offsetWidth = fLineWidth + 0.5;
    vec4 offset = vec4(((aVertex.x * normal * offsetWidth) / uViewportSize) * b0Projected.w, 0.0, 0.0);

    // set the final vertex position
    gl_Position = b0Projected + offset;
    vProjectedPosition = b0Projected.xy;
    vProjectedW = b0Projected.w;

    // calculate the color
    vec4 colorA = getColorByIndexFromTexture(uColorPalette, int(iColorA));
    vec4 colorB = getColorByIndexFromTexture(uColorPalette, int(iColorB));
    vec3 mixColorA = mix(colorA.rgb, colorB.rgb, iColorMix[1]);
    vec3 mixColorB = mix(colorA.rgb, colorB.rgb, iColorMix[0]);
    vColor = mix(mixColorA.rgb, mixColorB.rgb, t0);
}
`,Lh=`#version 300 es
precision highp float;
#define GLSLIFY 1

// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation
float luminance_x_1540259130(float x) {
    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
}
float color_l_1540259130(float l) {
    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));
}

// from https://en.wikipedia.org/wiki/Relative_luminance
float rgb2luminance(vec3 color) {
    // relative luminance
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    float r = luminance_x_1540259130(color.r);
    float g = luminance_x_1540259130(color.g);
    float b = luminance_x_1540259130(color.b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

vec3 setLuminance(vec3 color, float luminance) {
    float r = luminance_x_1540259130(color.r) * 0.2126;
    float g = luminance_x_1540259130(color.g) * 0.7152;
    float b = luminance_x_1540259130(color.b) * 0.0722;
    float colorLuminance = r + g + b;

    float tr = luminance * (r / colorLuminance);
    float tg = luminance * (g / colorLuminance);
    float tb = luminance * (b / colorLuminance);

    float rr = color_l_1540259130(tr / 0.2126);
    float rg = color_l_1540259130(tg / 0.7152);
    float rb = color_l_1540259130(tb / 0.0722);

    return vec3(rr, rg, rb );
}

// https://www.w3.org/TR/WCAG20/#contrast-ratiodef
// (L1 + 0.05) / (L2 + 0.05), where
// - L1 is the relative luminance of the lighter of the colors, and
// - L2 is the relative luminance of the darker of the colors.
float findDarker(float luminance, float contrast) {
    return (contrast * luminance) + (0.05 * contrast) - 0.05;
}
float findLighter(float luminance, float contrast) {
    return (luminance + 0.05 - (0.05 * contrast)) / contrast;
}

vec3 contrastingColor(vec3 color, float contrast) {
    float luminance = rgb2luminance(color);
    float darker = findDarker(luminance, contrast);
    float lighter = findLighter(luminance, contrast);

    float targetLuminance;
    if (darker < 0.0 || darker > 1.0) {
        targetLuminance = lighter;
    } else if (lighter < 0.0 || lighter > 1.0) {
        targetLuminance = darker;
    } else {
        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;
    }

    return setLuminance(color, targetLuminance);
}

vec3 desaturateColor(vec3 color, float amount) {
    float l = rgb2luminance(color);
    vec3 gray = vec3(l, l, l);
    return mix(color, gray, amount);
}

uniform vec4 uClearColor;
uniform float uDesaturate;
uniform float uBrightness;
uniform float uFade;
uniform float uAlpha;

vec4 outputColor(vec4 color) {
    // desaturate => fade => alpha
    vec3 ret = mix(color.rgb, vec3(uBrightness + 1.0 / 2.0), abs(uBrightness));
    ret = vec3(desaturateColor(ret, uDesaturate));
    ret = mix(ret, uClearColor.rgb, uFade);
    return vec4(ret, color.a * uAlpha);
}

#define MODE_DRAFT 0u
#define MODE_MEDIUM 1u
#define MODE_HIGH 2u
#define MODE_HIGH_PASS_1 3u
#define MODE_HIGH_PASS_2 4u
#define MODE_PICKING 5u

#define ONE_ALPHA 0.00392156862 // 1.0 / 255.0

float lineAlpha(vec2 position, float w, vec2 viewportSize, float lineWidth) {
    vec2 lineCenter = ((position / w) * 0.5 + 0.5) * viewportSize;
    float distOffset = (lineWidth - 1.0) * 0.5;
    float dist = smoothstep(lineWidth * 0.5 - 0.5, lineWidth * 0.5 + 0.5, distance(lineCenter, gl_FragCoord.xy));
    return (1.0 - dist);
}

vec4 lineColor(vec3 color, vec2 position, float w, vec2 viewportSize, uint mode, float lineWidth) {
    if (mode < MODE_HIGH_PASS_1) {
        return outputColor(vec4(color, 1.0));
    }

    float a = lineAlpha(position, w, viewportSize, lineWidth);

    if (mode == MODE_HIGH_PASS_1) {
        if (a == 1.0) {
            return outputColor(vec4(color, a));
        } else {
            discard;
        }
    }

    // Possible optimization.
    // Edges run into fill rate issues because too many of them overlap, discarging pixels below a certain alpha
    // threshold might help speed things up a bit.
    if (a < ONE_ALPHA) {
        discard;
    }

    return outputColor(vec4(color, a));
}

uniform vec2 uViewportSize;
uniform uint uRenderMode;

flat in float fLineWidth;
in vec3 vColor;
in vec2 vProjectedPosition;
in float vProjectedW;

out vec4 fragColor;

void main() {
    fragColor = lineColor(vColor, vProjectedPosition, vProjectedW, uViewportSize, uRenderMode, fLineWidth);
}
`,Ph=`#version 300 es
#define GLSLIFY 1

layout(location=0) in uint aSourceIndex;
layout(location=1) in uint aTargetIndex;
layout(location=2) in uvec3 aControl;
layout(location=3) in uint aSourceColor;
layout(location=4) in uint aTargetColor;

uniform sampler2D uGraphPoints;

out vec3 vSource;
out vec3 vTarget;
out vec3 vControl;
flat out uint vSourceColor;
flat out uint vTargetColor;
out vec2 vColorMix;

vec4 valueForIndex(sampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uvec4 uvalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uint uivalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0)[0];
}

void main() {
    vec4 source = valueForIndex(uGraphPoints, int(aSourceIndex));
    vec4 target = valueForIndex(uGraphPoints, int(aTargetIndex));
    vec4 control = valueForIndex(uGraphPoints, int(aControl[0]));

    // TODO: Optimize this to avoid branches. (If performance becomes a problem)
    if (aControl[1] == 0u) {
        vSource = source.xyz;
    } else {
        vSource = (source.xyz + control.xyz) / 2.0;
    }

    if (aControl[1] == aControl[2] - 1u) {
        vTarget = target.xyz;
    } else {
        vTarget = (target.xyz + control.xyz) / 2.0;
    }

    vControl = control.xyz;

    vSourceColor = aSourceColor;
    vTargetColor = aTargetColor;

    vColorMix = vec2(float(aControl[1]) / float(aControl[2]), float(aControl[1] + 1u) / float(aControl[2]));
}
`,Xo={id:(e,t)=>"id"in e?e.id:t,source:e=>e.source,target:e=>e.target,control:e=>e.control,sourceColor:e=>"sourceColor"in e?e.sourceColor:0,targetColor:e=>"targetColor"in e?e.targetColor:0},Cl={source:oe.UNSIGNED_INT,target:oe.UNSIGNED_INT,control:[oe.UNSIGNED_INT,oe.UNSIGNED_INT,oe.UNSIGNED_INT],sourceColor:oe.UNSIGNED_INT,targetColor:oe.UNSIGNED_INT},Al={source:[oe.FLOAT,oe.FLOAT,oe.FLOAT],target:[oe.FLOAT,oe.FLOAT,oe.FLOAT],control:[oe.FLOAT,oe.FLOAT,oe.FLOAT],sourceColor:oe.UNSIGNED_INT,targetColor:oe.UNSIGNED_INT,colorMix:[oe.FLOAT,oe.FLOAT]},x0=class extends Pr{constructor(e,t,r,n,a,s=16){super(e,t,r,n,a,s)}initialize(e,t,r,n,a,s){super.initialize(e,t,r,n,a);let f=[];for(let g=0;g<=s;++g)f.push(-1,g,1,g);this.verticesVBO=e.createVertexBuffer(oe.FLOAT,2,new Float32Array(f)),this.edgesVAO=e.createVertexArray().vertexAttributeBuffer(0,this.verticesVBO),this.configureTargetVAO(this.edgesVAO);let h=this.getDrawShaders();this.program=e.createProgram(h.vs,h.fs),this.drawCall=e.createDrawCall(this.program,this.edgesVAO).primitive(oe.TRIANGLE_STRIP),this.compute(e,{uGraphPoints:this.dataTexture}),this.localUniforms.uSegments=s}destroy(){}render(e,t,r){switch(bt(this.drawCall,r),bt(this.drawCall,this.localUniforms),this.configureRenderContext(e,t),t){case Be.PICKING:break;default:this.drawCall.draw();break}}getDrawShaders(){return{vs:wl,fs:Lh}}getPickingShaders(){return{vs:wl,fs:null}}getGLSourceTypes(){return Cl}getGLTargetTypes(){return Al}getDataShader(){return{vs:Ph,varyings:["vSource","vTarget","vControl","vSourceColor","vTargetColor","vColorMix"]}}computeMappings(e){let t=Object.assign({},Xo,super.computeMappings(e));return t.control[mr]=(r,n,a)=>[this.points.getPointIndex(r.control[n]),n,a],t.source[mr]=(r,n,a)=>n===0?r.source:t.control[mr](r,n-1,a)[0],t.target[mr]=(r,n,a)=>n===a-1?r.target:t.control[mr](r,n+1,a)[0],t}};var Ml=`#version 300 es
#define GLSLIFY 1

layout(location=0) in vec3 aVertex;
layout(location=1) in uint iPointA;
layout(location=2) in uint iPointB;
layout(location=3) in uint iColorA;
layout(location=4) in uint iColorB;
layout(location=5) in vec2 iColorMix;

uniform mat4 uViewMatrix;
uniform mat4 uSceneMatrix;
uniform mat4 uProjectionMatrix;
uniform vec2 uViewportSize;
uniform float uPixelRatio;
uniform sampler2D uGraphPoints;
uniform sampler2D uColorPalette;

uniform float uLineWidth;

flat out float fLineWidth;
out vec3 vColor;
out vec2 vProjectedPosition;
out float vProjectedW;

vec4 valueForIndex(sampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uvec4 uvalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uint uivalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0)[0];
}

void main() {
    float multA = aVertex.y;
    float multB = 1.0 - aVertex.y;

    mat4 renderMatrix = uProjectionMatrix * uViewMatrix * uSceneMatrix;

    vec3 offsetA = valueForIndex(uGraphPoints, int(iPointA)).xyz;
    vec3 offsetB = valueForIndex(uGraphPoints, int(iPointB)).xyz;

    vec4 aProjected = renderMatrix * vec4(offsetA, 1.0);
    vec2 aScreen = aProjected.xy / aProjected.w * uViewportSize * 0.5;

    vec4 bProjected = renderMatrix * vec4(offsetB, 1.0);
    vec2 bScreen = bProjected.xy / bProjected.w * uViewportSize * 0.5;

    vec2 direction = normalize(bScreen - aScreen);
    vec2 perp = vec2(-direction.y, direction.x);

    fLineWidth = uLineWidth * uPixelRatio;
    float offsetWidth = fLineWidth + 0.5;
    vec4 position = aProjected * multA + bProjected * multB;
    vec4 offset = vec4(((aVertex.x * perp * offsetWidth) / uViewportSize) * position.w, 0.0, 0.0);
    gl_Position = position + offset;

    vProjectedPosition = position.xy;
    vProjectedW = position.w;

    // calculate the color
    vec4 colorA = valueForIndex(uColorPalette, int(iColorA));
    vec4 colorB = valueForIndex(uColorPalette, int(iColorB));
    vec3 mixColorA = mix(colorA.rgb, colorB.rgb, iColorMix[1]);
    vec3 mixColorB = mix(colorA.rgb, colorB.rgb, iColorMix[0]);
    vColor = mixColorA.rgb * multB + mixColorB.rgb * multA;
}
`,Dh=`#version 300 es
precision highp float;
#define GLSLIFY 1

// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation
float luminance_x_1540259130(float x) {
    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
}
float color_l_1540259130(float l) {
    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));
}

// from https://en.wikipedia.org/wiki/Relative_luminance
float rgb2luminance(vec3 color) {
    // relative luminance
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    float r = luminance_x_1540259130(color.r);
    float g = luminance_x_1540259130(color.g);
    float b = luminance_x_1540259130(color.b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

vec3 setLuminance(vec3 color, float luminance) {
    float r = luminance_x_1540259130(color.r) * 0.2126;
    float g = luminance_x_1540259130(color.g) * 0.7152;
    float b = luminance_x_1540259130(color.b) * 0.0722;
    float colorLuminance = r + g + b;

    float tr = luminance * (r / colorLuminance);
    float tg = luminance * (g / colorLuminance);
    float tb = luminance * (b / colorLuminance);

    float rr = color_l_1540259130(tr / 0.2126);
    float rg = color_l_1540259130(tg / 0.7152);
    float rb = color_l_1540259130(tb / 0.0722);

    return vec3(rr, rg, rb );
}

// https://www.w3.org/TR/WCAG20/#contrast-ratiodef
// (L1 + 0.05) / (L2 + 0.05), where
// - L1 is the relative luminance of the lighter of the colors, and
// - L2 is the relative luminance of the darker of the colors.
float findDarker(float luminance, float contrast) {
    return (contrast * luminance) + (0.05 * contrast) - 0.05;
}
float findLighter(float luminance, float contrast) {
    return (luminance + 0.05 - (0.05 * contrast)) / contrast;
}

vec3 contrastingColor(vec3 color, float contrast) {
    float luminance = rgb2luminance(color);
    float darker = findDarker(luminance, contrast);
    float lighter = findLighter(luminance, contrast);

    float targetLuminance;
    if (darker < 0.0 || darker > 1.0) {
        targetLuminance = lighter;
    } else if (lighter < 0.0 || lighter > 1.0) {
        targetLuminance = darker;
    } else {
        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;
    }

    return setLuminance(color, targetLuminance);
}

vec3 desaturateColor(vec3 color, float amount) {
    float l = rgb2luminance(color);
    vec3 gray = vec3(l, l, l);
    return mix(color, gray, amount);
}

uniform vec4 uClearColor;
uniform float uDesaturate;
uniform float uBrightness;
uniform float uFade;
uniform float uAlpha;

vec4 outputColor(vec4 color) {
    // desaturate => fade => alpha
    vec3 ret = mix(color.rgb, vec3(uBrightness + 1.0 / 2.0), abs(uBrightness));
    ret = vec3(desaturateColor(ret, uDesaturate));
    ret = mix(ret, uClearColor.rgb, uFade);
    return vec4(ret, color.a * uAlpha);
}

#define MODE_DRAFT 0u
#define MODE_MEDIUM 1u
#define MODE_HIGH 2u
#define MODE_HIGH_PASS_1 3u
#define MODE_HIGH_PASS_2 4u
#define MODE_PICKING 5u

#define ONE_ALPHA 0.00392156862 // 1.0 / 255.0

float lineAlpha(vec2 position, float w, vec2 viewportSize, float lineWidth) {
    vec2 lineCenter = ((position / w) * 0.5 + 0.5) * viewportSize;
    float distOffset = (lineWidth - 1.0) * 0.5;
    float dist = smoothstep(lineWidth * 0.5 - 0.5, lineWidth * 0.5 + 0.5, distance(lineCenter, gl_FragCoord.xy));
    return (1.0 - dist);
}

vec4 lineColor(vec3 color, vec2 position, float w, vec2 viewportSize, uint mode, float lineWidth) {
    if (mode < MODE_HIGH_PASS_1) {
        return outputColor(vec4(color, 1.0));
    }

    float a = lineAlpha(position, w, viewportSize, lineWidth);

    if (mode == MODE_HIGH_PASS_1) {
        if (a == 1.0) {
            return outputColor(vec4(color, a));
        } else {
            discard;
        }
    }

    // Possible optimization.
    // Edges run into fill rate issues because too many of them overlap, discarging pixels below a certain alpha
    // threshold might help speed things up a bit.
    if (a < ONE_ALPHA) {
        discard;
    }

    return outputColor(vec4(color, a));
}

uniform vec2 uViewportSize;
uniform uint uRenderMode;

flat in float fLineWidth;
in vec3 vColor;
in vec2 vProjectedPosition;
in float vProjectedW;

out vec4 fragColor;

void main() {
    fragColor = lineColor(vColor, vProjectedPosition, vProjectedW, uViewportSize, uRenderMode, fLineWidth);
}
`,kh=`#version 300 es
#define GLSLIFY 1

layout(location=0) in uint aSourceIndex;
layout(location=1) in uint aTargetIndex;
layout(location=2) in uvec2 aControl;
layout(location=3) in uint aSourceColor;
layout(location=4) in uint aTargetColor;

uniform sampler2D uGraphPoints;

flat out uint fSource;
flat out uint fTarget;
flat out uint fSourceColor;
flat out uint fTargetColor;
flat out vec2 fColorMix;

void main() {
    fSource = aSourceIndex;
    fTarget = aTargetIndex;

    fSourceColor = aSourceColor;
    fTargetColor = aTargetColor;

    fColorMix = vec2(float(aControl[0]) / float(aControl[1]), float(aControl[0] + 1u) / float(aControl[1]));
}
`,Sl={source:oe.UNSIGNED_INT,target:oe.UNSIGNED_INT,control:[oe.UNSIGNED_INT,oe.UNSIGNED_INT],sourceColor:oe.UNSIGNED_INT,targetColor:oe.UNSIGNED_INT},Tl={source:oe.UNSIGNED_INT,target:oe.UNSIGNED_INT,sourceColor:oe.UNSIGNED_INT,targetColor:oe.UNSIGNED_INT,colorMix:[oe.FLOAT,oe.FLOAT]},y0=class extends Pr{initialize(e,t,r,n,a){super.initialize(e,t,r,n,a),this.verticesVBO=e.createVertexBuffer(oe.FLOAT,2,new Float32Array([-1,0,1,0,-1,1,1,1])),this.edgesVAO=e.createVertexArray().vertexAttributeBuffer(0,this.verticesVBO),this.configureTargetVAO(this.edgesVAO);let s=this.getDrawShaders();this.program=e.createProgram(s.vs,s.fs),this.drawCall=e.createDrawCall(this.program,this.edgesVAO).primitive(oe.TRIANGLE_STRIP),this.compute(e,{uGraphPoints:this.dataTexture})}destroy(){}render(e,t,r){switch(this.configureRenderContext(e,t),bt(this.drawCall,r),bt(this.drawCall,this.localUniforms),t){case Be.PICKING:break;default:this.drawCall.draw();break}}getDrawShaders(){return{vs:Ml,fs:Dh}}getPickingShaders(){return{vs:Ml,fs:null}}getGLSourceTypes(){return Sl}getGLTargetTypes(){return Tl}getDataShader(){return{vs:kh,varyings:["fSource","fTarget","fSourceColor","fTargetColor","fColorMix"]}}computeMappings(e){let t=Object.assign({},Xo,super.computeMappings(e)),r=t.control;t.control=(a,s,f)=>{let h=r(a,s,f);return Array.isArray(h)&&h.push(null),h},t.control[mr]=(a,s,f)=>[s,f];let n=(a,s)=>this.points.getPointIndex(a.control[s]);return t.source[mr]=(a,s)=>s===0?a.source:n(a,s-1),t.target[mr]=(a,s,f)=>s===f-1?a.target:n(a,s),t}};var Rl=`#version 300 es
#define GLSLIFY 1

layout(location=0) in vec3 aVertex;
layout(location=1) in vec3 iOffsetA;
layout(location=2) in vec3 iOffsetB;
layout(location=3) in vec3 iControl;
layout(location=4) in uint iColorA;
layout(location=5) in uint iColorB;
layout(location=6) in vec2 iColorMix;

uniform mat4 uViewMatrix;
uniform mat4 uSceneMatrix;
uniform mat4 uProjectionMatrix;
uniform vec2 uViewportSize;
uniform float uPixelRatio;
uniform sampler2D uColorPalette;

uniform float uLineWidth;
uniform float uSegments;

flat out float fLineWidth;
out vec3 vColor;
out vec2 vProjectedPosition;
out float vProjectedW;

vec4 getColorByIndexFromTexture(sampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

vec3 bezier(vec3 p0, vec3 p1, vec3 p2, float t) {
    return p1 + pow(1.0 - t, 2.0) * (p2 - p1) + pow(t, 2.0) * (p0 - p1);
}

void main() {
    // bezier works fine with 0 > t > 1
    float t0 = aVertex.y / uSegments;
    float t1 = (aVertex.y + 1.0) / uSegments;

    // calculate both bezier points
    vec3 b0 = bezier(iOffsetA, iControl, iOffsetB, t0);
    vec3 b1 = bezier(iOffsetA, iControl, iOffsetB, t1);

    // project the points to the screen
    mat4 renderMatrix = uProjectionMatrix * uViewMatrix * uSceneMatrix;
    vec4 b0Projected = renderMatrix * vec4(b0, 1.0);
    vec4 b1Projected = renderMatrix * vec4(b1, 1.0);

    // get their screen coords
    vec2 b0Screen = (b0Projected.xy / b0Projected.w) * uViewportSize * 0.5;
    vec2 b1Screen = (b1Projected.xy / b1Projected.w) * uViewportSize * 0.5;

    // get the direction and normal of the segment
    vec2 direction = normalize(b1Screen - b0Screen);
    vec2 normal = vec2(-direction.y, direction.x);

    // calculate the pixel offset
    fLineWidth = uLineWidth * uPixelRatio;
    float offsetWidth = fLineWidth + 0.5;
    vec4 offset = vec4(((aVertex.x * normal * offsetWidth) / uViewportSize) * b0Projected.w, 0.0, 0.0);

    // set the final vertex position
    gl_Position = b0Projected + offset;
    vProjectedPosition = b0Projected.xy;
    vProjectedW = b0Projected.w;

    // calculate the color
    vec4 colorA = getColorByIndexFromTexture(uColorPalette, int(iColorA));
    vec4 colorB = getColorByIndexFromTexture(uColorPalette, int(iColorB));
    vec3 mixColorA = mix(colorA.rgb, colorB.rgb, iColorMix[1]);
    vec3 mixColorB = mix(colorA.rgb, colorB.rgb, iColorMix[0]);
    vColor = mix(mixColorA.rgb, mixColorB.rgb, t0);
}

`,Oh=`#version 300 es
precision highp float;
#define GLSLIFY 1

// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation
float luminance_x_1540259130(float x) {
    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
}
float color_l_1540259130(float l) {
    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));
}

// from https://en.wikipedia.org/wiki/Relative_luminance
float rgb2luminance(vec3 color) {
    // relative luminance
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    float r = luminance_x_1540259130(color.r);
    float g = luminance_x_1540259130(color.g);
    float b = luminance_x_1540259130(color.b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

vec3 setLuminance(vec3 color, float luminance) {
    float r = luminance_x_1540259130(color.r) * 0.2126;
    float g = luminance_x_1540259130(color.g) * 0.7152;
    float b = luminance_x_1540259130(color.b) * 0.0722;
    float colorLuminance = r + g + b;

    float tr = luminance * (r / colorLuminance);
    float tg = luminance * (g / colorLuminance);
    float tb = luminance * (b / colorLuminance);

    float rr = color_l_1540259130(tr / 0.2126);
    float rg = color_l_1540259130(tg / 0.7152);
    float rb = color_l_1540259130(tb / 0.0722);

    return vec3(rr, rg, rb );
}

// https://www.w3.org/TR/WCAG20/#contrast-ratiodef
// (L1 + 0.05) / (L2 + 0.05), where
// - L1 is the relative luminance of the lighter of the colors, and
// - L2 is the relative luminance of the darker of the colors.
float findDarker(float luminance, float contrast) {
    return (contrast * luminance) + (0.05 * contrast) - 0.05;
}
float findLighter(float luminance, float contrast) {
    return (luminance + 0.05 - (0.05 * contrast)) / contrast;
}

vec3 contrastingColor(vec3 color, float contrast) {
    float luminance = rgb2luminance(color);
    float darker = findDarker(luminance, contrast);
    float lighter = findLighter(luminance, contrast);

    float targetLuminance;
    if (darker < 0.0 || darker > 1.0) {
        targetLuminance = lighter;
    } else if (lighter < 0.0 || lighter > 1.0) {
        targetLuminance = darker;
    } else {
        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;
    }

    return setLuminance(color, targetLuminance);
}

vec3 desaturateColor(vec3 color, float amount) {
    float l = rgb2luminance(color);
    vec3 gray = vec3(l, l, l);
    return mix(color, gray, amount);
}

uniform vec4 uClearColor;
uniform float uDesaturate;
uniform float uBrightness;
uniform float uFade;
uniform float uAlpha;

vec4 outputColor(vec4 color) {
    // desaturate => fade => alpha
    vec3 ret = mix(color.rgb, vec3(uBrightness + 1.0 / 2.0), abs(uBrightness));
    ret = vec3(desaturateColor(ret, uDesaturate));
    ret = mix(ret, uClearColor.rgb, uFade);
    return vec4(ret, color.a * uAlpha);
}

#define MODE_DRAFT 0u
#define MODE_MEDIUM 1u
#define MODE_HIGH 2u
#define MODE_HIGH_PASS_1 3u
#define MODE_HIGH_PASS_2 4u
#define MODE_PICKING 5u

#define ONE_ALPHA 0.00392156862 // 1.0 / 255.0

float lineAlpha(vec2 position, float w, vec2 viewportSize, float lineWidth) {
    vec2 lineCenter = ((position / w) * 0.5 + 0.5) * viewportSize;
    float distOffset = (lineWidth - 1.0) * 0.5;
    float dist = smoothstep(lineWidth * 0.5 - 0.5, lineWidth * 0.5 + 0.5, distance(lineCenter, gl_FragCoord.xy));
    return (1.0 - dist);
}

vec4 lineColor(vec3 color, vec2 position, float w, vec2 viewportSize, uint mode, float lineWidth) {
    if (mode < MODE_HIGH_PASS_1) {
        return outputColor(vec4(color, 1.0));
    }

    float a = lineAlpha(position, w, viewportSize, lineWidth);

    if (mode == MODE_HIGH_PASS_1) {
        if (a == 1.0) {
            return outputColor(vec4(color, a));
        } else {
            discard;
        }
    }

    // Possible optimization.
    // Edges run into fill rate issues because too many of them overlap, discarging pixels below a certain alpha
    // threshold might help speed things up a bit.
    if (a < ONE_ALPHA) {
        discard;
    }

    return outputColor(vec4(color, a));
}

uniform vec2 uViewportSize;
uniform uint uRenderMode;

flat in float fLineWidth;
in vec3 vColor;
in vec2 vProjectedPosition;
in float vProjectedW;

out vec4 fragColor;

void main() {
    fragColor = lineColor(vColor, vProjectedPosition, vProjectedW, uViewportSize, uRenderMode, fLineWidth);
}

`,Fh=`#version 300 es
#define GLSLIFY 1

layout(location=0) in uint aSourceIndex;
layout(location=1) in uint aTargetIndex;
layout(location=2) in uint aSourceClusterIndex;
layout(location=3) in uint aTargetClusterIndex;
layout(location=4) in uint aSourceColor;
layout(location=5) in uint aTargetColor;
layout(location=6) in uvec2 aHyperEdgeStats;
layout(location=7) in uint aIndex;

uniform sampler2D uGraphPoints;

out vec3 vSource;
out vec3 vTarget;
out vec3 vControl;
flat out uint vSourceColor;
flat out uint vTargetColor;
out vec2 vColorMix;

vec4 valueForIndex(sampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uvec4 uvalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uint uivalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0)[0];
}

void main() {
    vec4 source = valueForIndex(uGraphPoints, int(aSourceIndex));
    vec4 target = valueForIndex(uGraphPoints, int(aTargetIndex));
    vec4 sourceCluster = valueForIndex(uGraphPoints, int(aSourceClusterIndex));
    vec4 targetCluster = valueForIndex(uGraphPoints, int(aTargetClusterIndex));

    vec3 direction = normalize(vec3(targetCluster.xy, 0.0) - vec3(sourceCluster.xy, 0.0));
    // assume 2D and ignore Z, future Dario, make this 3D!
    vec3 perp = vec3(-direction.y, direction.x, direction.z);
    float minClusterRadius = min(sourceCluster[3], targetCluster[3]);
    float edgeWidth = minClusterRadius * 0.0005; // magic number
    float maxOffset = minClusterRadius * 0.1; // magic number
    float offsetLength = min(maxOffset, edgeWidth * float(aHyperEdgeStats[1]));
    vec3 offset = (-perp * offsetLength * 0.5) + (perp * (offsetLength / float(aHyperEdgeStats[1])) * float(aHyperEdgeStats[0]));

    vec3 sourceClusterEdge = sourceCluster.xyz + direction * sourceCluster[3] + offset;
    vec3 targetClusterEdge = targetCluster.xyz - direction * targetCluster[3] + offset;

    float edgeToEdge = length(targetClusterEdge - sourceClusterEdge);
    vec3 bundlePoint = sourceClusterEdge + direction * (edgeToEdge * 0.5);

    vec3 sourceEdgeToNode = sourceClusterEdge - source.xyz - direction * source[3];
    float sourceNodeAdjacent = dot(normalize(sourceEdgeToNode), direction) * length(sourceEdgeToNode);
    vec3 sourceClusterControl = sourceClusterEdge - direction * min(sourceNodeAdjacent * 0.75, sourceCluster[3]);
    vec3 sourceControlDirection = normalize(sourceClusterControl - source.xyz);
    vec3 sourcePoint = source.xyz + sourceControlDirection * source[3];

    vec3 targetEdgeToNode = target.xyz - targetClusterEdge - direction * target[3];
    float targetNodeAdjacent = dot(normalize(targetEdgeToNode), direction) * length(targetEdgeToNode);
    vec3 targetClusterControl = targetClusterEdge + direction * min(targetNodeAdjacent * 0.75, targetCluster[3]);
    vec3 targetControlDirection = normalize(targetClusterControl - target.xyz);
    vec3 targetPoint = target.xyz + targetControlDirection * target[3];

    // TODO: Optimize this to avoid branches. (If performance becomes a problem)
    if (aIndex == 0u) {
        if (aSourceIndex == aSourceClusterIndex) {
            vSource = sourcePoint;
            vControl = sourcePoint;
            vTarget = sourcePoint;
        } else {
            vSource = sourcePoint;
            vControl = sourceClusterControl;
            vTarget = (sourceClusterControl + bundlePoint) / 2.0;
        }
    } else if (aIndex == 1u) {
        if (aSourceIndex == aSourceClusterIndex) {
            vSource = sourcePoint;
        } else {
            vSource = (sourceClusterControl + bundlePoint) / 2.0;
        }

        vControl = bundlePoint;

        if (aTargetIndex == aTargetClusterIndex) {
            vTarget = targetPoint;
        } else {
            vTarget = (bundlePoint + targetClusterControl) / 2.0;
        }
    } else {
        if (aTargetIndex == aTargetClusterIndex) {
            vSource = targetPoint;
            vControl = targetPoint;
            vTarget = targetPoint;
        } else {
            vSource = (bundlePoint + targetClusterControl) / 2.0;
            vControl = targetClusterControl;
            vTarget = targetPoint;
        }
    }

    vSourceColor = aSourceColor;
    vTargetColor = aTargetColor;

    vColorMix = vec2(float(aIndex) * 0.25, float(aIndex + 1u) * 0.25);
}
`,Nl=()=>null,Il={id:(e,t)=>"id"in e?e.id:t,source:e=>e.source,target:e=>e.target,sourceCluster:e=>e.sourceCluster,targetCluster:e=>e.targetCluster,sourceColor:e=>"sourceColor"in e?e.sourceColor:0,targetColor:e=>"targetColor"in e?e.targetColor:0,hyperEdgeStats:Nl,index:()=>[0,1,2]},Ll={source:oe.UNSIGNED_INT,target:oe.UNSIGNED_INT,sourceCluster:oe.UNSIGNED_INT,targetCluster:oe.UNSIGNED_INT,sourceColor:oe.UNSIGNED_INT,targetColor:oe.UNSIGNED_INT,hyperEdgeStats:[oe.UNSIGNED_INT,oe.UNSIGNED_INT],index:oe.UNSIGNED_INT},Pl={source:[oe.FLOAT,oe.FLOAT,oe.FLOAT],target:[oe.FLOAT,oe.FLOAT,oe.FLOAT],control:[oe.FLOAT,oe.FLOAT,oe.FLOAT],sourceColor:oe.UNSIGNED_INT,targetColor:oe.UNSIGNED_INT,colorMix:[oe.FLOAT,oe.FLOAT]},_0=class extends Pr{constructor(e,t,r,n,a,s=16){super(e,t,r,n,a,s);this.hyperEdgeStats=null}initialize(e,t,r,n,a,s){super.initialize(e,t,r,n,a);let f=[];for(let g=0;g<=s;++g)f.push(-1,g,1,g);this.verticesVBO=e.createVertexBuffer(oe.FLOAT,2,new Float32Array(f)),this.edgesVAO=e.createVertexArray().vertexAttributeBuffer(0,this.verticesVBO),this.configureTargetVAO(this.edgesVAO);let h=this.getDrawShaders();this.program=e.createProgram(h.vs,h.fs),this.drawCall=e.createDrawCall(this.program,this.edgesVAO).primitive(oe.TRIANGLE_STRIP),this.compute(e,{uGraphPoints:this.dataTexture}),this.localUniforms.uSegments=s}destroy(){}render(e,t,r){switch(bt(this.drawCall,r),bt(this.drawCall,this.localUniforms),this.configureRenderContext(e,t),t){case Be.PICKING:break;default:this.drawCall.draw();break}}getDrawShaders(){return{vs:Rl,fs:Oh}}getPickingShaders(){return{vs:Rl,fs:null}}getGLSourceTypes(){return Ll}getGLTargetTypes(){return Pl}getDataShader(){return{vs:Fh,varyings:["vSource","vTarget","vControl","vSourceColor","vTargetColor","vColorMix"]}}computeMappings(e){let t=Object.assign({},Il,super.computeMappings(e)),r=t.sourceCluster;t.sourceCluster=(a,s)=>this.points.getPointIndex(r(a,s));let n=t.targetCluster;return t.targetCluster=(a,s)=>this.points.getPointIndex(n(a,s)),t.hyperEdgeStats===Nl&&(this.hyperEdgeStats=new Map,t.hyperEdgeStats=a=>"hyperEdgeStats"in a?a.hyperEdgeStats:[0,0]),t}packDataCB(){return this.hyperEdgeStats?[(r,n)=>{let a=`${n.sourceCluster}=>${n.targetCluster}`,s=this.hyperEdgeStats.get(a);s==null&&(s=0),this.hyperEdgeStats.set(a,s+1),n.hyperEdgeStats[0]=s},(r,n)=>{let a=`${n.sourceCluster}=>${n.targetCluster}`;n.hyperEdgeStats[1]=this.hyperEdgeStats.get(a)}]:null}};var Bh={Straight:Xa,Dashed:v0,Gravity:m0,CurvedPath:x0,StraightPath:y0,ClusterBundle:_0};var Za={};fn(Za,{CircularLabel:()=>$a,CircularLabelPlacement:()=>C0,LabelAtlas:()=>E0,PointLabel:()=>Ka,PointLabelPlacement:()=>w0,RingLabel:()=>A0,kCharBoxDataMappings:()=>Dl,kCharBoxDataTypes:()=>kl,kGLLabelNodeTypes:()=>Ul,kLabelDataTypes:()=>Ol,kLabelMappings:()=>Yo,kLabelNodeDataTypes:()=>Bl,kLabelNodeMappings:()=>Fl,types:()=>Yh});function b0(e){let t=0,r=0;for(let h of e)t+=h.w*h.h,r=Math.max(r,h.w);e.sort((h,g)=>g.h-h.h);let n=Math.max(Math.ceil(Math.sqrt(t/.95)),r),a=[{x:0,y:0,w:n,h:Infinity}],s=0,f=0;for(let h of e)for(let g=a.length-1;g>=0;g--){let l=a[g];if(!(h.w>l.w||h.h>l.h)){if(h.x=l.x,h.y=l.y,f=Math.max(f,h.y+h.h),s=Math.max(s,h.x+h.w),h.w===l.w&&h.h===l.h){let u=a.pop();g<a.length&&(a[g]=u)}else h.h===l.h?(l.x+=h.w,l.w-=h.w):h.w===l.w?(l.y+=h.h,l.h-=h.h):(a.push({x:l.x+h.w,y:l.y,w:l.w-h.w,h:h.h}),l.y+=h.h,l.h-=h.h);break}}return{w:s,h:f,fill:t/(s*f)||0}}var Uh=`#version 300 es

precision lowp usampler2D;
#define GLSLIFY 1

layout(location=0) in uint aIndex;

uniform usampler2D uDataTexture;

flat out vec4 vBox;

vec4 valueForIndex(sampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uvec4 uvalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uint uivalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0)[0];
}

void main() {
    vec2 texSize = vec2(textureSize(uDataTexture, 0));
    vec4 box = vec4(uvalueForIndex(uDataTexture, int(aIndex)));
    vBox = vec4(
        box[0] / texSize.x,
        box[1] / texSize.y,
        box[2] / texSize.x,
        box[3] / texSize.y
    );
}
`,Gh=`#version 300 es
#define GLSLIFY 1
void main() {}
`,xn=12,ha=1e20,Yo={id:(e,t)=>"id"in e?e.id:t,label:(e,t)=>"label"in e?e.label:`${t}`,fontSize:e=>"fontSize"in e?e.fontSize:18,padding:e=>"padding"in e?e.padding:[8,5]},Dl={box:e=>[e.x+xn,e.y+xn,e.w-xn*2,e.h-xn*2]},kl={box:[xe.UNSIGNED_SHORT,xe.UNSIGNED_SHORT,xe.UNSIGNED_SHORT,xe.UNSIGNED_SHORT]},Ol={char:xe.UNSIGNED_SHORT},E0=class{constructor(e,t,r,n,a=!1){this.fontSizeStep=25,this.spaceSizeMap=new Map,this.labelPixelRatio=window.devicePixelRatio,this.characterMap=new Map,this.labelMap=new Map,t.length?this.processData(e,t,Object.assign({},Yo,r),n,a):(this._boxesTexture=e.createTexture2D(1,1),this._labelsTexture=e.createTexture2D(1,1),this._charactersTexture=e.createTexture2D(1,1))}get boxesTexture(){return this._boxesTexture}get labelsTexture(){return this._labelsTexture}get charactersTexture(){return this._charactersTexture}async processData(e,t,r,n,a){let s=document.createElement("canvas");s.setAttribute("style","font-smooth: never;-webkit-font-smoothing : none;");let f=s.getContext("2d"),h=new Map,g=[],l=[];for(let[,v]of Po(t,r))if(typeof v.label=="string"){let y=Math.max(v.fontSize,Math.floor(v.fontSize/this.fontSizeStep)*this.fontSizeStep),I=v.fontSize/y,P={index:l.length,length:v.label.length,width:0,height:0};this.labelMap.set(v.id,P);for(let D=0,Z=v.label.length;D<Z;++D){let O=v.label.charAt(D),B=`${O}-${y}`;if(!this.characterMap.has(B)){let V=this.computeDistanceField(this.renderCharTexture(O,y,f,s,n,a),y),X={id:B,w:V.width,h:V.height,image:V};h.set(B,X),g.push(X),this.characterMap.set(B,0)}let K=h.get(B);P.width+=(K.image.width-xn*2)*I,P.height=Math.max(P.height,(K.image.height-xn*2)*I),l.push(B)}}let u=b0(g),d=f.createImageData(u.w,u.h),C=Un(g,Dl,kl,!0,v=>{let y=g[v];this.characterMap.set(y.id,v),this.blitImageData(y.image,d,y.x,d.height-y.y-y.h)});this._charactersTexture=e.createTexture2D(d,{flipY:!0}),this._boxesTexture=this.createTextureForBuffer(e,new Uint16Array(C),g.length,xe.RGBA16UI);let L=Un(l,{char:v=>this.characterMap.get(v)},Ol,!0);this._labelsTexture=this.createTextureForBuffer(e,new Uint16Array(L),l.length,xe.R16UI)}createTextureForBuffer(e,t,r,n){let a=Math.pow(2,Math.ceil(Math.log2(Math.ceil(Math.sqrt(r))))),s=Math.pow(2,Math.ceil(Math.log2(Math.ceil(r/a)))),f=e.createTexture2D(a,s,{internalFormat:n});return f.data(t),f}renderCharTexture(e,t,r,n,a,s){let f=this.labelPixelRatio,h=`${s?"bold ":""}${t*f}px ${a}`;if(!this.spaceSizeMap.has(t)){r.font=h,r.imageSmoothingEnabled=!1,r.fillStyle="white",r.textAlign="center",r.textBaseline="middle";let d=r.measureText(" ");this.spaceSizeMap.set(t,Math.abs(d.actualBoundingBoxLeft)+Math.abs(d.actualBoundingBoxRight))}let g=this.spaceSizeMap.get(t),l=t*f,u=Math.min(g,l)*.15;return n.width=g+u+xn*2,n.height=t*f+u+xn*2,r.font=h,r.imageSmoothingEnabled=!1,r.fillStyle="white",r.textAlign="center",r.textBaseline="middle",r.fillText(e,n.width*.5,n.height*.5),r.getImageData(0,0,n.width,n.height)}blitImageData(e,t,r,n){for(let a=0;a<e.height;++a){let s=e.width*a*4,f=s+e.width*4,h=t.width*(a+n)*4+r*4;t.data.set(e.data.subarray(s,f),h)}}computeDistanceField(e,t){let r=e.width*e.height,n=Math.max(e.width,e.height),a=new Float64Array(r),s=new Float64Array(r),f=new Float64Array(n),h=new Float64Array(n+1),g=new Uint16Array(n);a.fill(ha,0,r),s.fill(0,0,r);for(let d=0;d<r;++d){let C=e.data[d*4+3]/255;a[d]=C===1?0:C===0?ha:Math.pow(Math.max(0,.5-C),2),s[d]=C===1?ha:C===0?0:Math.pow(Math.max(0,C-.5),2)}this.edt(a,e.width,e.height,f,g,h),this.edt(s,e.width,e.height,f,g,h);let l=t/8,u=e.data;for(let d=0;d<r;++d){let C=Math.sqrt(a[d])-Math.sqrt(s[d]),M=d*4,L=Math.round(255-255*(C/l+.5));u[M]=255,u[M+1]=255,u[M+2]=255,u[M+3]=L}return e}edt(e,t,r,n,a,s){for(let f=0;f<t;++f)this.edt1d(e,f,t,r,n,a,s);for(let f=0;f<r;++f)this.edt1d(e,f*t,1,t,n,a,s)}edt1d(e,t,r,n,a,s,f){let h,g,l,u;for(s[0]=0,f[0]=-ha,f[1]=ha,h=0;h<n;++h)a[h]=e[t+h*r];for(h=1,g=0,l=0;h<n;++h){do u=s[g],l=(a[h]-a[u]+h*h-u*u)/(h-u)/2;while(l<=f[g]&&--g>-1);++g,s[g]=h,f[g]=l,f[g+1]=ha}for(h=0,g=0;h<n;++h){for(;f[g+1]<h;)++g;u=s[g],e[t+h*r]=a[u]+(h-u)*(h-u)}}testFeedback(e){let t=e.createProgram(Uh,Gh,{transformFeedbackVaryings:["vBox"],transformFeedbackMode:xe.INTERLEAVED_ATTRIBS}),r=e.createVertexBuffer(xe.FLOAT,4,40),n=e.createVertexBuffer(xe.UNSIGNED_BYTE,1,new Uint8Array([0,1,2,3,4,5])),a=e.createTransformFeedback().feedbackBuffer(0,r),s=e.createVertexArray().vertexAttributeBuffer(0,n),f=e.createDrawCall(t,s).transformFeedback(a);f.primitive(xe.POINTS),f.texture("uDataTexture",this._boxesTexture),e.enable(xe.RASTERIZER_DISCARD),f.draw(),e.disable(xe.RASTERIZER_DISCARD),Do(e,r,6,{box:[xe.FLOAT,xe.FLOAT,xe.FLOAT,xe.FLOAT]})}};var Vh=`#version 300 es
precision highp float;
precision lowp usampler2D;
#define GLSLIFY 1

vec4 valueForIndex(sampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uvec4 uvalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uint uivalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0)[0];
}

// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation
float luminance_x(float x) {
    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
}
float color_l(float l) {
    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));
}

// from https://en.wikipedia.org/wiki/Relative_luminance
float rgb2luminance(vec3 color) {
    // relative luminance
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    float r = luminance_x(color.r);
    float g = luminance_x(color.g);
    float b = luminance_x(color.b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

vec3 setLuminance(vec3 color, float luminance) {
    float r = luminance_x(color.r) * 0.2126;
    float g = luminance_x(color.g) * 0.7152;
    float b = luminance_x(color.b) * 0.0722;
    float colorLuminance = r + g + b;

    float tr = luminance * (r / colorLuminance);
    float tg = luminance * (g / colorLuminance);
    float tb = luminance * (b / colorLuminance);

    float rr = color_l(tr / 0.2126);
    float rg = color_l(tg / 0.7152);
    float rb = color_l(tb / 0.0722);

    return vec3(rr, rg, rb );
}

// https://www.w3.org/TR/WCAG20/#contrast-ratiodef
// (L1 + 0.05) / (L2 + 0.05), where
// - L1 is the relative luminance of the lighter of the colors, and
// - L2 is the relative luminance of the darker of the colors.
float findDarker(float luminance, float contrast) {
    return (contrast * luminance) + (0.05 * contrast) - 0.05;
}
float findLighter(float luminance, float contrast) {
    return (luminance + 0.05 - (0.05 * contrast)) / contrast;
}

vec3 contrastingColor(vec3 color, float contrast) {
    float luminance = rgb2luminance(color);
    float darker = findDarker(luminance, contrast);
    float lighter = findLighter(luminance, contrast);

    float targetLuminance;
    if (darker < 0.0 || darker > 1.0) {
        targetLuminance = lighter;
    } else if (lighter < 0.0 || lighter > 1.0) {
        targetLuminance = darker;
    } else {
        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;
    }

    return setLuminance(color, targetLuminance);
}

vec3 desaturateColor(vec3 color, float amount) {
    float l = rgb2luminance(color);
    vec3 gray = vec3(l, l, l);
    return mix(color, gray, amount);
}

uniform vec4 uClearColor;
uniform float uDesaturate;
uniform float uBrightness;
uniform float uFade;
uniform float uAlpha;

vec4 outputColor(vec4 color) {
    // desaturate => fade => alpha
    vec3 ret = mix(color.rgb, vec3(uBrightness + 1.0 / 2.0), abs(uBrightness));
    ret = vec3(desaturateColor(ret, uDesaturate));
    ret = mix(ret, uClearColor.rgb, uFade);
    return vec4(ret, color.a * uAlpha);
}

#define MODE_DRAFT 0u
#define MODE_MEDIUM 1u
#define MODE_HIGH 2u
#define MODE_HIGH_PASS_1 3u
#define MODE_HIGH_PASS_2 4u
#define MODE_PICKING 5u

uniform usampler2D uLabelIndices;
uniform usampler2D uCharBoxes;
uniform sampler2D uCharTexture;
uniform float uPixelRatio;
uniform uint uRenderMode;
uniform float uPadding;

flat in vec4 fBackgroundColor;
flat in vec4 fTextColor;
flat in vec4 fLabelInfo;
flat in float fPixelLength;
flat in vec2 fCharTextureSize;
in vec2 vFromCenter;
in vec2 vStringCoords;
in vec2 vPixelCoords;

out vec4 fragColor;

void main() {
    float padding = uPadding * uPixelRatio;
    vec4 finalColor;

    if (vPixelCoords.x < padding || vPixelCoords.y < padding || vPixelCoords.x > fLabelInfo[2] + padding || vPixelCoords.y > fLabelInfo[3] + padding) {
        finalColor = fBackgroundColor;
    } else {
        vec2 uvMultiplier = (vPixelCoords - padding) / fLabelInfo.ba;
        float u = fLabelInfo[0] + fLabelInfo[1] * uvMultiplier.x;
        float v = uvMultiplier.y;

        float stringIndex = floor(u);
        int charIndex = int(uivalueForIndex(uLabelIndices, int(stringIndex)));
        vec4 charBox = vec4(uvalueForIndex(uCharBoxes, charIndex));
        float charMult = u - stringIndex;

        vec4 charBoxUV = charBox / vec4(fCharTextureSize, fCharTextureSize);

        vec2 uv = vec2(charBoxUV[0] + charBoxUV[2] * charMult, charBoxUV[1] + charBoxUV[3] * v);
        vec4 texPixel = texture(uCharTexture, uv);

        float smoothing = 7.0 / fLabelInfo[3];
        float distance = texPixel.a;
        float textEdge = smoothstep(0.5 - smoothing, 0.5 + smoothing, distance);
        finalColor = mix(fBackgroundColor, fTextColor, textEdge);
    }

    float threshold = uRenderMode == MODE_HIGH_PASS_1 ? 0.75 : 0.5;

    if (uRenderMode != MODE_HIGH_PASS_2) {
        if (finalColor.a < threshold) {
            discard;
        }
        fragColor = outputColor(vec4(finalColor.rgb, 1.0));
    } else {
        if (finalColor.a == 1.0) {
            discard;
        }
        fragColor = outputColor(finalColor);
    }

//    if ((uRenderMode != MODE_HIGH_PASS_2 && texPixel.a < threshold) || (uRenderMode == MODE_HIGH_PASS_2 && texPixel.a == 1.0)) {
//        discard;
//    }
//    float alpha = uRenderMode == MODE_HIGH_PASS_2 ? texPixel.a : 1.0;
//    fragColor = vec4(texPixel.rgb * fColor.rgb, alpha);
}
`,zh=`#version 300 es

precision lowp usampler2D;
#define GLSLIFY 1

layout(location=0) in vec3 aVertex;
layout(location=1) in uint iPoint;
layout(location=2) in uint iColor;
layout(location=3) in uvec4 iLabel;

//layout(std140) uniform RenderUniforms {
    uniform mat4 uViewMatrix;
    uniform mat4 uSceneMatrix;
    uniform mat4 uProjectionMatrix;
    uniform vec2 uViewportSize;
    uniform float uPixelRatio;
    uniform sampler2D uGraphPoints;
    uniform sampler2D uColorPalette;
    uniform uint uCameraMode; // 0 = 2D; 1 = 3D;
//};
uniform usampler2D uLabelIndices;
uniform usampler2D uCharBoxes;
uniform sampler2D uCharTexture;
uniform float uVisibilityThreshold;
uniform vec2 uLabelPlacement;
uniform bool uBackground;
uniform float uPadding;

flat out vec4 fBackgroundColor;
flat out vec4 fTextColor;
flat out vec4 fLabelInfo;
flat out float fPixelLength;
flat out vec2 fCharTextureSize;
out vec2 vFromCenter;
out vec2 vStringCoords;
out vec2 vPixelCoords;

vec4 valueForIndex(sampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uvec4 uvalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uint uivalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0)[0];
}

// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation
float luminance_x(float x) {
    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
}
float color_l(float l) {
    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));
}

// from https://en.wikipedia.org/wiki/Relative_luminance
float rgb2luminance(vec3 color) {
    // relative luminance
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    float r = luminance_x(color.r);
    float g = luminance_x(color.g);
    float b = luminance_x(color.b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

vec3 setLuminance(vec3 color, float luminance) {
    float r = luminance_x(color.r) * 0.2126;
    float g = luminance_x(color.g) * 0.7152;
    float b = luminance_x(color.b) * 0.0722;
    float colorLuminance = r + g + b;

    float tr = luminance * (r / colorLuminance);
    float tg = luminance * (g / colorLuminance);
    float tb = luminance * (b / colorLuminance);

    float rr = color_l(tr / 0.2126);
    float rg = color_l(tg / 0.7152);
    float rb = color_l(tb / 0.0722);

    return vec3(rr, rg, rb );
}

// https://www.w3.org/TR/WCAG20/#contrast-ratiodef
// (L1 + 0.05) / (L2 + 0.05), where
// - L1 is the relative luminance of the lighter of the colors, and
// - L2 is the relative luminance of the darker of the colors.
float findDarker(float luminance, float contrast) {
    return (contrast * luminance) + (0.05 * contrast) - 0.05;
}
float findLighter(float luminance, float contrast) {
    return (luminance + 0.05 - (0.05 * contrast)) / contrast;
}

vec3 contrastingColor(vec3 color, float contrast) {
    float luminance = rgb2luminance(color);
    float darker = findDarker(luminance, contrast);
    float lighter = findLighter(luminance, contrast);

    float targetLuminance;
    if (darker < 0.0 || darker > 1.0) {
        targetLuminance = lighter;
    } else if (lighter < 0.0 || lighter > 1.0) {
        targetLuminance = darker;
    } else {
        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;
    }

    return setLuminance(color, targetLuminance);
}

vec3 desaturateColor(vec3 color, float amount) {
    float l = rgb2luminance(color);
    vec3 gray = vec3(l, l, l);
    return mix(color, gray, amount);
}

void main() {
    vec4 point = valueForIndex(uGraphPoints, int(iPoint));
    vec3 position = point.xyz;
    float radius = point.w;
    // claculate the offset matrix, done as a matrix to be able to compute "billboard" vertices in the shader
    mat4 offsetMatrix = mat4(1.0);
    offsetMatrix[3] = vec4(position, 1.0);

    // reset the rotation of the model-view matrix
    mat4 modelMatrix = uViewMatrix * uSceneMatrix * offsetMatrix;
    mat4 lookAtMatrix = mat4(modelMatrix);
    if (uCameraMode == 1u) {
        lookAtMatrix[0] = vec4(1.0, 0.0, 0.0, lookAtMatrix[0][3]);
        lookAtMatrix[1] = vec4(0.0, 1.0, 0.0, lookAtMatrix[1][3]);
        lookAtMatrix[2] = vec4(0.0, 0.0, 1.0, lookAtMatrix[2][3]);
    }

    // the on-screen center of this point
    vec4 quadCenter = uProjectionMatrix * lookAtMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    vec2 screenQuadCenter = quadCenter.xy / quadCenter.w;

    // the on-screen position of a side of this quad
    vec4 quadSide = uProjectionMatrix * lookAtMatrix * vec4(radius, 0.0, 0.0, 1.0);
    vec2 screenQuadSide = quadSide.xy / quadSide.w;

    // compute the pixel radius of this point for a size of 1 in world coordinates
    float pixelRadius = length((screenQuadSide - screenQuadCenter) * uViewportSize * 0.5);

    // send the size of the char texture to the fragment shader
    fCharTextureSize = vec2(textureSize(uCharTexture, 0));

    // send the render color to the fragment shader
    vec4 color = valueForIndex(uColorPalette, int(iColor));
    if (uBackground) {
        fBackgroundColor = vec4(color.rgb, 1.0);
        fTextColor = vec4(contrastingColor(color.rgb, 7.0), 1.0);
    } else {
        fBackgroundColor = vec4(color.rgb, 0.0);
        fTextColor = vec4(color.rgb, 1.0);
    }

    // send the normalized length of a single pixel to the fragment shader
    fPixelLength = 1.0 / max(1.0, pixelRadius);

    // send the normalized distance from the center to the fragment shader
    vFromCenter = aVertex.xy;

    // send the label size to the fragment shader
    fLabelInfo = vec4(iLabel);

    // compute the visibility multiplier
    float visibilityThreshold = uVisibilityThreshold * uPixelRatio;
    vec3 visibilityMultiplier = vec3(
        smoothstep(visibilityThreshold * 0.5, visibilityThreshold * 0.6, pixelRadius),
        smoothstep(visibilityThreshold * 0.5, visibilityThreshold * 0.525, pixelRadius),
        1.0
    );
//    float visibilityMultiplier = pixelRadius >= uVisibilityThreshold * 0.5 * uPixelRatio ? 1.0 : 0.0;

    // calculate the size of a pixel in worls coordinates with repsect to the point's position
    float pixelToWorld = radius / pixelRadius;

    // calculate the with and height of the label
    float padding = uPadding * uPixelRatio;
    vec3 labelSize = vec3((fLabelInfo[2] + padding * 2.0) * pixelToWorld, (fLabelInfo[3] + padding * 2.0) * pixelToWorld, 0.0);

    // compute the UV multiplier based on the vertices of the quad
    vec2 pixelMultiplier = vec2((aVertex.xy + 1.0) / 2.0);
    // send the pixel coords to the fragment shader
    vPixelCoords = vec2(fLabelInfo[2] + padding * 2.0, fLabelInfo[3] + padding * 2.0) * pixelMultiplier;

    // calculate the render matrix
    mat4 renderMatrix = uProjectionMatrix * lookAtMatrix;

    // claculate the label offset
    float labelMargin = 5.0 * pixelToWorld; // pixels
    vec3 labelOffset = vec3(
        (radius + labelSize.x * 0.5 + labelMargin) * uLabelPlacement.x,
        (radius + labelSize.y * 0.5 + labelMargin) * uLabelPlacement.y,
        uCameraMode == 1u ? 0.01 : 0.0
    );

    // compute the vertex position and its screen position
    vec4 worldVertex = renderMatrix * vec4(aVertex * labelSize * 0.5 * visibilityMultiplier + labelOffset, 1.0);

    // set the render vertex location
    gl_Position = worldVertex;
}
`,Hh=`#version 300 es
#define GLSLIFY 1

layout(location=0) in uint aPositionIndex;
layout(location=1) in uint aColor;
layout(location=2) in uvec4 aLabel;

uniform sampler2D uGraphPoints;

flat out uint fPoint;
flat out uint fColor;
flat out uvec4 fLabel;

void main() {
    fPoint = aPositionIndex;
    fColor = aColor;
    fLabel = aLabel;
}
`,Fl=Object.assign({},Yo,{point:(e,t)=>"point"in e?e.point:t,color:e=>"color"in e?e.color:0}),Bl={point:xe.UNSIGNED_INT,color:xe.UNSIGNED_INT,label:[xe.UNSIGNED_INT,xe.UNSIGNED_INT,xe.UNSIGNED_INT,xe.UNSIGNED_INT]},Ul={point:xe.UNSIGNED_INT,color:xe.UNSIGNED_INT,label:[xe.UNSIGNED_INT,xe.UNSIGNED_INT,xe.UNSIGNED_INT,xe.UNSIGNED_INT]},w0;(function(e){e[e.CENTER=0]="CENTER",e[e.TOP=1]="TOP",e[e.BOTTOM=2]="BOTTOM",e[e.LEFT=3]="LEFT",e[e.RIGHT=4]="RIGHT"})(w0||(w0={}));var Ka=class extends qa{constructor(...e){super(...e);this._labelPlacement=0}get labelPlacement(){return this._labelPlacement}set labelPlacement(e){switch(this._labelPlacement=e,this._labelPlacement){case 0:this.localUniforms.uLabelPlacement=[0,0];break;case 2:this.localUniforms.uLabelPlacement=[0,-1];break;case 1:this.localUniforms.uLabelPlacement=[0,1];break;case 3:this.localUniforms.uLabelPlacement=[-1,0];break;case 4:this.localUniforms.uLabelPlacement=[1,0];break}}get renderBackground(){return this.localUniforms.uBackground}set renderBackground(e){this.localUniforms.uBackground=e}get visibilityThreshold(){return this.localUniforms.uVisibilityThreshold}set visibilityThreshold(e){this.localUniforms.uVisibilityThreshold=e}get padding(){return this.localUniforms.uPadding}set padding(e){this.localUniforms.uPadding=e}initialize(e,t,r,n,a,s="monospace",f=!1,h){h?this.labelAtlas=h:this.labelAtlas=new E0(e,r,n,s,f),super.initialize(e,t,r,n,a),this.verticesVBO=e.createVertexBuffer(xe.FLOAT,2,new Float32Array([-1,-1,1,-1,-1,1,1,1])),this.nodesVAO=e.createVertexArray().vertexAttributeBuffer(0,this.verticesVBO),this.configureTargetVAO(this.nodesVAO);let g=this.getDrawShaders();this.program=e.createProgram(g.vs,g.fs),this.drawCall=e.createDrawCall(this.program,this.nodesVAO).primitive(xe.TRIANGLE_STRIP),this.compute(e,{uGraphPoints:this.dataTexture}),this.localUniforms.uBackground=!1,this.localUniforms.uLabelIndices=this.labelAtlas.labelsTexture,this.localUniforms.uCharBoxes=this.labelAtlas.boxesTexture,this.localUniforms.uCharTexture=this.labelAtlas.charactersTexture,this.localUniforms.uVisibilityThreshold=15,this.localUniforms.uLabelPlacement=[0,0],this.localUniforms.uPadding=4}destroy(){}render(e,t,r){switch(this.configureRenderContext(e,t),t){case Be.DRAFT:case Be.MEDIUM:case Be.HIGH_PASS_1:bt(this.drawCall,r),bt(this.drawCall,this.localUniforms),this.drawCall.draw();break;case Be.HIGH_PASS_2:bt(this.drawCall,r),bt(this.drawCall,this.localUniforms),this.drawCall.draw();break;default:break}}getDrawShaders(){return{vs:zh,fs:Vh}}getGLSourceTypes(){return Bl}getGLTargetTypes(){return Ul}getDataShader(){return{vs:Hh,varyings:["fPoint","fColor","fLabel"]}}computeMappings(e){let t=Object.assign({},Fl,super.computeMappings(e)),r=t.id;return t.label=(n,a)=>{let s=this.labelAtlas.labelMap.get(r(n,a));return[s.index,s.length,s.width,s.height]},t}};var qh=`#version 300 es

precision lowp usampler2D;
#define GLSLIFY 1

#define M_PI 3.14159265359
#define M_2PI 6.28318530718

layout(location=0) in vec3 aVertex;
layout(location=1) in uint iPoint;
layout(location=2) in uint iColor;
layout(location=3) in uvec4 iLabel;

//layout(std140) uniform RenderUniforms {
    uniform mat4 uViewMatrix;
    uniform mat4 uSceneMatrix;
    uniform mat4 uProjectionMatrix;
    uniform vec2 uViewportSize;
    uniform float uPixelRatio;
    uniform sampler2D uGraphPoints;
    uniform sampler2D uColorPalette;
    uniform uint uCameraMode; // 0 = 2D; 1 = 3D;
//};
uniform sampler2D uCharTexture;
uniform float uVisibilityThreshold;
uniform vec2 uLabelPositioning;
uniform int uRepeatLabel;
uniform float uRepeatGap;
uniform float uPlacementMargin;
uniform float uLabelPlacement;
uniform vec2 uLabelDirection;
uniform bool uBackground;
uniform float uPadding;

flat out vec4 fBackgroundColor;
flat out vec4 fTextColor;
flat out float fPixelRadius;
flat out float fLabelStep;
flat out vec2 fCharTextureSize;
flat out vec4 fLabelInfo;
flat out float fPixelLength;
out vec2 vFromCenter;

vec4 valueForIndex(sampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uvec4 uvalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uint uivalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0)[0];
}

// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation
float luminance_x(float x) {
    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
}
float color_l(float l) {
    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));
}

// from https://en.wikipedia.org/wiki/Relative_luminance
float rgb2luminance(vec3 color) {
    // relative luminance
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    float r = luminance_x(color.r);
    float g = luminance_x(color.g);
    float b = luminance_x(color.b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

vec3 setLuminance(vec3 color, float luminance) {
    float r = luminance_x(color.r) * 0.2126;
    float g = luminance_x(color.g) * 0.7152;
    float b = luminance_x(color.b) * 0.0722;
    float colorLuminance = r + g + b;

    float tr = luminance * (r / colorLuminance);
    float tg = luminance * (g / colorLuminance);
    float tb = luminance * (b / colorLuminance);

    float rr = color_l(tr / 0.2126);
    float rg = color_l(tg / 0.7152);
    float rb = color_l(tb / 0.0722);

    return vec3(rr, rg, rb );
}

// https://www.w3.org/TR/WCAG20/#contrast-ratiodef
// (L1 + 0.05) / (L2 + 0.05), where
// - L1 is the relative luminance of the lighter of the colors, and
// - L2 is the relative luminance of the darker of the colors.
float findDarker(float luminance, float contrast) {
    return (contrast * luminance) + (0.05 * contrast) - 0.05;
}
float findLighter(float luminance, float contrast) {
    return (luminance + 0.05 - (0.05 * contrast)) / contrast;
}

vec3 contrastingColor(vec3 color, float contrast) {
    float luminance = rgb2luminance(color);
    float darker = findDarker(luminance, contrast);
    float lighter = findLighter(luminance, contrast);

    float targetLuminance;
    if (darker < 0.0 || darker > 1.0) {
        targetLuminance = lighter;
    } else if (lighter < 0.0 || lighter > 1.0) {
        targetLuminance = darker;
    } else {
        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;
    }

    return setLuminance(color, targetLuminance);
}

vec3 desaturateColor(vec3 color, float amount) {
    float l = rgb2luminance(color);
    vec3 gray = vec3(l, l, l);
    return mix(color, gray, amount);
}

void main() {
    vec4 point = valueForIndex(uGraphPoints, int(iPoint));
    vec3 position = point.xyz;
    float radius = point.w;
    // claculate the offset matrix, done as a matrix to be able to compute "billboard" vertices in the shader
    mat4 offsetMatrix = mat4(1.0);
    offsetMatrix[3] = vec4(position, 1.0);

    // reset the rotation of the model-view matrix
    mat4 modelMatrix = uViewMatrix * uSceneMatrix * offsetMatrix;
    mat4 lookAtMatrix = mat4(modelMatrix);
    if (uCameraMode == 1u) {
        lookAtMatrix[0] = vec4(1.0, 0.0, 0.0, lookAtMatrix[0][3]);
        lookAtMatrix[1] = vec4(0.0, 1.0, 0.0, lookAtMatrix[1][3]);
        lookAtMatrix[2] = vec4(0.0, 0.0, 1.0, lookAtMatrix[2][3]);
    }

    // the on-screen center of this point
    vec4 quadCenter = uProjectionMatrix * lookAtMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    vec2 screenQuadCenter = quadCenter.xy / quadCenter.w;

    // the on-screen position of a side of this quad
    vec4 quadSide = uProjectionMatrix * lookAtMatrix * vec4(radius, 0.0, 0.0, 1.0);
    vec2 screenQuadSide = quadSide.xy / quadSide.w;

    // compute the pixel radius of this point for a size of 1 in world coordinates
    float pixelRadius = length((screenQuadSide - screenQuadCenter) * uViewportSize * 0.5);

    // send the size of the char texture to the fragment shader
    fCharTextureSize = vec2(textureSize(uCharTexture, 0));

    // send the render color to the fragment shader
    vec4 color = valueForIndex(uColorPalette, int(iColor));
    if (uBackground) {
        fBackgroundColor = vec4(color.rgb, 1.0);
        fTextColor = vec4(contrastingColor(color.rgb, 7.0), 1.0);
    } else {
        fBackgroundColor = vec4(color.rgb, 0.0);
        fTextColor = vec4(color.rgb, 1.0);
    }

    // send thelabel info to the fragment shader
    fLabelInfo = vec4(iLabel);

    // send the pixel radius of this label to the fragment shader
    float padding = uPadding * uPixelRatio;
    float placementOffset = (fLabelInfo[3] + padding * 2.0) * uLabelPlacement + uPlacementMargin * (-1.0 + 2.0 * uLabelPlacement) * uPixelRatio;
    fPixelRadius = pixelRadius + placementOffset;

    // calculate the render matrix
    mat4 renderMatrix = uProjectionMatrix * lookAtMatrix;

    // compute the visibility multiplier
    float visibilityMultiplier = pixelRadius >= uVisibilityThreshold * 0.5 * uPixelRatio ? 1.0 : 0.0;

    // send the normalized length of a single pixel
    fPixelLength = 1.0 / fPixelRadius;

    // send the normalized distance from the center to the fragment shader
    vFromCenter = aVertex.xy;

    // compute the vertex position and its screen position
    float pixelLength = radius / pixelRadius;
    float textRadius = radius + pixelLength * placementOffset;
    vec3 labelOffset = vec3(0.0, 0.0, uCameraMode == 1u ? 0.01 : 0.0); // offset the label forward a tiny bit so it's always in front in 3D
    vec4 worldVertex = renderMatrix * vec4(aVertex * textRadius * visibilityMultiplier + labelOffset, 1.0);

    // find the number of label repetitions
    float repeatLabels = float(uint(uRepeatLabel));
    float repeatGap = uRepeatGap * uPixelRatio;
    float diameter = fPixelRadius * M_2PI;
    float maxLabels = min(repeatLabels, floor(diameter / (fLabelInfo[2] + repeatGap + padding * 2.0)));
    float maxLabelsLength = (fLabelInfo[2] + padding * 2.0) * maxLabels;
    float labelGap = (diameter - maxLabelsLength) / maxLabels;
    fLabelStep = fLabelInfo[2] + labelGap + padding * 2.0;

    // set the render vertex location
    gl_Position = worldVertex;
}
`,Wh=`#version 300 es
precision highp float;
precision lowp usampler2D;
#define GLSLIFY 1

#define M_PI 3.14159265359
#define M_2PI 6.28318530718

vec4 valueForIndex(sampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uvec4 uvalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uint uivalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0)[0];
}

// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation
float luminance_x(float x) {
    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
}
float color_l(float l) {
    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));
}

// from https://en.wikipedia.org/wiki/Relative_luminance
float rgb2luminance(vec3 color) {
    // relative luminance
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    float r = luminance_x(color.r);
    float g = luminance_x(color.g);
    float b = luminance_x(color.b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

vec3 setLuminance(vec3 color, float luminance) {
    float r = luminance_x(color.r) * 0.2126;
    float g = luminance_x(color.g) * 0.7152;
    float b = luminance_x(color.b) * 0.0722;
    float colorLuminance = r + g + b;

    float tr = luminance * (r / colorLuminance);
    float tg = luminance * (g / colorLuminance);
    float tb = luminance * (b / colorLuminance);

    float rr = color_l(tr / 0.2126);
    float rg = color_l(tg / 0.7152);
    float rb = color_l(tb / 0.0722);

    return vec3(rr, rg, rb );
}

// https://www.w3.org/TR/WCAG20/#contrast-ratiodef
// (L1 + 0.05) / (L2 + 0.05), where
// - L1 is the relative luminance of the lighter of the colors, and
// - L2 is the relative luminance of the darker of the colors.
float findDarker(float luminance, float contrast) {
    return (contrast * luminance) + (0.05 * contrast) - 0.05;
}
float findLighter(float luminance, float contrast) {
    return (luminance + 0.05 - (0.05 * contrast)) / contrast;
}

vec3 contrastingColor(vec3 color, float contrast) {
    float luminance = rgb2luminance(color);
    float darker = findDarker(luminance, contrast);
    float lighter = findLighter(luminance, contrast);

    float targetLuminance;
    if (darker < 0.0 || darker > 1.0) {
        targetLuminance = lighter;
    } else if (lighter < 0.0 || lighter > 1.0) {
        targetLuminance = darker;
    } else {
        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;
    }

    return setLuminance(color, targetLuminance);
}

vec3 desaturateColor(vec3 color, float amount) {
    float l = rgb2luminance(color);
    vec3 gray = vec3(l, l, l);
    return mix(color, gray, amount);
}

uniform vec4 uClearColor;
uniform float uDesaturate;
uniform float uBrightness;
uniform float uFade;
uniform float uAlpha;

vec4 outputColor(vec4 color) {
    // desaturate => fade => alpha
    vec3 ret = mix(color.rgb, vec3(uBrightness + 1.0 / 2.0), abs(uBrightness));
    ret = vec3(desaturateColor(ret, uDesaturate));
    ret = mix(ret, uClearColor.rgb, uFade);
    return vec4(ret, color.a * uAlpha);
}

#define MODE_DRAFT 0u
#define MODE_MEDIUM 1u
#define MODE_HIGH 2u
#define MODE_HIGH_PASS_1 3u
#define MODE_HIGH_PASS_2 4u
#define MODE_PICKING 5u

// most of these come from this excellent post:
// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm

float opRound(in float d, in float r) {
    return d - r;
}

float opOnion(in float d, in float r) {
    return abs(d) - r;
}

float sdCircle(in vec2 p, in float r ) {
    return length(p) - r;
}

float sdEquilateralTriangle(in vec2 p, in float r) {
    const float k = sqrt(3.0);
    p.x = abs(p.x) - r;
    p.y = p.y + (r) / k;
    if (p.x + k * p.y > 0.0) {
        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;
    }
    p.x -= clamp(p.x, -2.0 * r, 0.0);
    return -length(p) * sign(p.y);
}

float sdPentagon(in vec2 p, in float r) {
    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);
    p.y = -(p.y) * 1.25;
    p.x = abs(p.x) * 1.25;
    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);
    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);
    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);
    return length(p) * sign(p.y);
}

float sdOctagon(in vec2 p, in float r) {
    // pi/8: cos, sin, tan.
    const vec3 k = vec3(
        -0.9238795325,   // sqrt(2+sqrt(2))/2
        0.3826834323,   // sqrt(2-sqrt(2))/2
        0.4142135623
    ); // sqrt(2)-1
    // reflections
    p = abs(p) * 1.1;
    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);
    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);
    // Polygon side.
    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);
    return length(p) * sign(p.y);
}

float sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]
    // these 4 lines can be precomputed for a given shape
    float an = 3.141593 / float(n);
    float en = 3.141593 / m;
    vec2  acs = vec2(cos(an), sin(an));
    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,

    // reduce to first sector
    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;
    p = length(p) * vec2(cos(bn), abs(sin(bn)));

    // line sdf
    p -= r * acs;
    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);
    return length(p) * sign(p.x);
}

float sdCross(in vec2 p, in float w, in float r) {
    p = abs(p);
    return length(p - min(p.x + p.y, w) * 0.5) - r;
}

// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)
float sdPlus( in vec2 p, in vec2 b, float r ) {
    p = abs(p);
    p = (p.y > p.x) ? p.yx : p.xy;

    vec2  q = p - b;
    float k = max(q.y, q.x);
    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);

    return sign(k)*length(max(w, 0.0)) + r;
}

uniform usampler2D uLabelIndices;
uniform usampler2D uCharBoxes;
uniform sampler2D uCharTexture;
uniform float uPixelRatio;
uniform uint uRenderMode;
uniform vec2 uLabelDirection;
uniform bool uMirror;
uniform float uPadding;

flat in vec4 fBackgroundColor;
flat in vec4 fTextColor;
flat in float fPixelRadius;
flat in float fLabelStep;
flat in vec2 fCharTextureSize;
flat in vec4 fLabelInfo;
flat in float fPixelLength;
in vec2 vFromCenter;

out vec4 fragColor;

float cross_ish(vec2 a, vec2 b)
{
    return a.x * b.y - a.y * b.x;
}

void main() {
    float padding = uPadding * uPixelRatio;
    float fromCenter = length(vFromCenter);
    float halfLabelWidth = fLabelInfo[2] * 0.5;
    float halfLabelHeight = fLabelInfo[3] * 0.5;
    float normalizedHeight = (halfLabelHeight + padding) / fPixelRadius;
    float circle = fromCenter - (1.0 - normalizedHeight);
    float ring = opOnion(circle, normalizedHeight);

    vec2 positionVector = uLabelDirection;
    float angle = atan(cross_ish(vFromCenter, positionVector), dot(vFromCenter, positionVector));
    float angleDistance = angle * fPixelRadius;
    float paddedLabelWidth = fLabelInfo[2] + padding * 2.0;
    float offsetAngleDistance = angleDistance + halfLabelWidth + padding;

    if (ring > 0.0 || fract(offsetAngleDistance / fLabelStep) >= paddedLabelWidth / fLabelStep) {
        discard;
    }

    float width = fract(offsetAngleDistance / fLabelStep) * fLabelStep;
    float height = (1.0 - fromCenter) * fPixelRadius - padding;
    vec4 finalColor;

    if (height < 0.0 || height > fLabelInfo[3] || width < padding || width > fLabelInfo[2] + padding) {
        finalColor = fBackgroundColor;
    } else {
        float uProgress = (width - padding) / fLabelInfo[2];
        if (uMirror) {
            uProgress = 1.0 - uProgress;
        }
        float stringProgress = fLabelInfo[0] + fLabelInfo[1] * uProgress;
        float stringIndex = floor(stringProgress);
        int charIndex = int(uivalueForIndex(uLabelIndices, int(stringIndex)));
        vec4 charBox = vec4(uvalueForIndex(uCharBoxes, charIndex));
        float charMult = stringProgress - stringIndex;

        vec4 charBoxUV = charBox / vec4(fCharTextureSize, fCharTextureSize);

        vec2 uv = vec2(charBoxUV[0] + charBoxUV[2] * charMult, charBoxUV[1] + charBoxUV[3] * fLabelInfo[1]);
        if (uMirror) {
            uv = vec2(charBoxUV[0] + charBoxUV[2] * charMult, charBoxUV[1] + charBoxUV[3] * (height / fLabelInfo[3]));
        } else {
            uv = vec2(charBoxUV[0] + charBoxUV[2] * charMult, charBoxUV[1] + charBoxUV[3] * (1.0 - height / fLabelInfo[3]));
        }

        vec4 texPixel = texture(uCharTexture, uv);

        float smoothing = 7.0 / fLabelInfo[3];
        float distance = texPixel.a;
        float textEdge = smoothstep(0.5 - smoothing, 0.5 + smoothing, distance);
        finalColor = mix(fBackgroundColor, fTextColor, textEdge);
    }

    finalColor.a *= smoothstep(0.0, fPixelLength * 1.5, abs(ring));

    float threshold = uRenderMode == MODE_HIGH_PASS_1 ? 0.75 : 0.5;

    if (uRenderMode != MODE_HIGH_PASS_2) {
        if (finalColor.a < threshold) {
            discard;
        }
        fragColor = outputColor(vec4(finalColor.rgb, 1.0));
    } else {
        if (finalColor.a == 1.0) {
            discard;
        }
        fragColor = outputColor(finalColor);
    }
}
`,C0;(function(e){e[e.INSIDE=0]="INSIDE",e[e.OUTSIDE=1]="OUTSIDE"})(C0||(C0={}));var $a=class extends Ka{get repeatLabel(){return this.localUniforms.uRepeatLabel}set repeatLabel(e){this.localUniforms.uRepeatLabel=e}get repeatGap(){return this.localUniforms.uRepeatGap}set repeatGap(e){this.localUniforms.uRepeatGap=e}get placementMargin(){return this.localUniforms.uPlacementMargin}set placementMargin(e){this.localUniforms.uPlacementMargin=e}get mirror(){return this.localUniforms.uMirror}set mirror(e){this.localUniforms.uMirror=e}get labelPlacement(){return this.localUniforms.uLabelPlacement}set labelPlacement(e){this.localUniforms.uLabelPlacement=e}get labelDirection(){return this._labelDirection}set labelDirection(e){let t=e*.0174533;this.localUniforms.uLabelDirection=[Math.cos(t),Math.sin(t)]}initialize(e,t,r,n,a,s="monospace",f=!1,h){super.initialize(e,t,r,n,a,s,f,h),this.localUniforms.uRepeatLabel=-1,this.localUniforms.uRepeatGap=5,this.localUniforms.uPlacementMargin=0,this.localUniforms.uMirror=!1,this.localUniforms.uLabelPlacement=1,this.labelDirection=90}getDrawShaders(){return{vs:qh,fs:Wh}}};var jh=`#version 300 es

precision lowp usampler2D;
#define GLSLIFY 1

#define M_PI 3.14159265359
#define M_2PI 6.28318530718

layout(location=0) in vec3 aVertex;
layout(location=1) in uint iPoint;
layout(location=2) in uint iColor;
layout(location=3) in uvec4 iLabel;

//layout(std140) uniform RenderUniforms {
    uniform mat4 uViewMatrix;
    uniform mat4 uSceneMatrix;
    uniform mat4 uProjectionMatrix;
    uniform vec2 uViewportSize;
    uniform float uPixelRatio;
    uniform sampler2D uGraphPoints;
    uniform sampler2D uColorPalette;
    uniform uint uCameraMode; // 0 = 2D; 1 = 3D;
//};
uniform sampler2D uCharTexture;
uniform float uVisibilityThreshold;
uniform vec2 uLabelPositioning;
uniform int uRepeatLabel;
uniform float uRepeatGap;
uniform float uPlacementMargin;
uniform float uLabelPlacement;
uniform vec2 uLabelDirection;
uniform bool uBackground;
uniform float uPadding;

flat out vec4 fBackgroundColor;
flat out vec4 fTextColor;
flat out vec4 fLabelInfo;
flat out float fPixelRadius;
flat out float fPixelLength;
flat out float fThickness;
flat out float fLabelStep;
flat out vec2 fCharTextureSize;

out vec2 vFromCenter;

vec4 valueForIndex(sampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uvec4 uvalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uint uivalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0)[0];
}

// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation
float luminance_x(float x) {
    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
}
float color_l(float l) {
    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));
}

// from https://en.wikipedia.org/wiki/Relative_luminance
float rgb2luminance(vec3 color) {
    // relative luminance
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    float r = luminance_x(color.r);
    float g = luminance_x(color.g);
    float b = luminance_x(color.b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

vec3 setLuminance(vec3 color, float luminance) {
    float r = luminance_x(color.r) * 0.2126;
    float g = luminance_x(color.g) * 0.7152;
    float b = luminance_x(color.b) * 0.0722;
    float colorLuminance = r + g + b;

    float tr = luminance * (r / colorLuminance);
    float tg = luminance * (g / colorLuminance);
    float tb = luminance * (b / colorLuminance);

    float rr = color_l(tr / 0.2126);
    float rg = color_l(tg / 0.7152);
    float rb = color_l(tb / 0.0722);

    return vec3(rr, rg, rb );
}

// https://www.w3.org/TR/WCAG20/#contrast-ratiodef
// (L1 + 0.05) / (L2 + 0.05), where
// - L1 is the relative luminance of the lighter of the colors, and
// - L2 is the relative luminance of the darker of the colors.
float findDarker(float luminance, float contrast) {
    return (contrast * luminance) + (0.05 * contrast) - 0.05;
}
float findLighter(float luminance, float contrast) {
    return (luminance + 0.05 - (0.05 * contrast)) / contrast;
}

vec3 contrastingColor(vec3 color, float contrast) {
    float luminance = rgb2luminance(color);
    float darker = findDarker(luminance, contrast);
    float lighter = findLighter(luminance, contrast);

    float targetLuminance;
    if (darker < 0.0 || darker > 1.0) {
        targetLuminance = lighter;
    } else if (lighter < 0.0 || lighter > 1.0) {
        targetLuminance = darker;
    } else {
        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;
    }

    return setLuminance(color, targetLuminance);
}

vec3 desaturateColor(vec3 color, float amount) {
    float l = rgb2luminance(color);
    vec3 gray = vec3(l, l, l);
    return mix(color, gray, amount);
}

void main() {
    vec4 point = valueForIndex(uGraphPoints, int(iPoint));
    vec3 position = point.xyz;
    float radius = point.w;
    // claculate the offset matrix, done as a matrix to be able to compute "billboard" vertices in the shader
    mat4 offsetMatrix = mat4(1.0);
    offsetMatrix[3] = vec4(position, 1.0);

    // reset the rotation of the model-view matrix
    mat4 modelMatrix = uViewMatrix * uSceneMatrix * offsetMatrix;
    mat4 lookAtMatrix = mat4(modelMatrix);
    if (uCameraMode == 1u) {
        lookAtMatrix[0] = vec4(1.0, 0.0, 0.0, lookAtMatrix[0][3]);
        lookAtMatrix[1] = vec4(0.0, 1.0, 0.0, lookAtMatrix[1][3]);
        lookAtMatrix[2] = vec4(0.0, 0.0, 1.0, lookAtMatrix[2][3]);
    }

    // the on-screen center of this point
    vec4 quadCenter = uProjectionMatrix * lookAtMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    vec2 screenQuadCenter = quadCenter.xy / quadCenter.w;

    // the on-screen position of a side of this quad
    vec4 quadSide = uProjectionMatrix * lookAtMatrix * vec4(radius, 0.0, 0.0, 1.0);
    vec2 screenQuadSide = quadSide.xy / quadSide.w;

    // compute the pixel radius of this point for a size of 1 in world coordinates
    float pixelRadius = length((screenQuadSide - screenQuadCenter) * uViewportSize * 0.5);

    // send the size of the char texture to the fragment shader
    fCharTextureSize = vec2(textureSize(uCharTexture, 0));

    // send the render color to the fragment shader
    vec4 color = valueForIndex(uColorPalette, int(iColor));
    fBackgroundColor = vec4(color.rgb, 1.0);
    fTextColor = vec4(contrastingColor(color.rgb, 7.0), 1.0);

    // send thelabel info to the fragment shader
    fLabelInfo = vec4(iLabel);

    // calculate the label visibility
    float visibilityThreshold = uVisibilityThreshold * uPixelRatio;
    float visibilityMultiplier = smoothstep(visibilityThreshold * 0.5 - fLabelInfo[3], visibilityThreshold * 0.5, pixelRadius * 0.5);

    // send the pixel radius of this label to the fragment shader
    float padding = uPadding * uPixelRatio;
    float minThickness = max(2.0, min(pixelRadius * 0.1, 3.0 * uPixelRatio));
    fThickness = (minThickness + (fLabelInfo[3] + padding * 2.0 - minThickness) * visibilityMultiplier) * 0.5;
    fPixelRadius = pixelRadius + fThickness;

    // send the normalized length of a single pixel
    fPixelLength = 1.0 / fPixelRadius;

    // calculate the render matrix
    mat4 renderMatrix = uProjectionMatrix * lookAtMatrix;

    // send the normalized distance from the center to the fragment shader
    vFromCenter = aVertex.xy;

    // compute the vertex position and its screen position
    float pixelLength = radius / pixelRadius;
    float textRadius = radius + pixelLength * fThickness;
    vec4 worldVertex = renderMatrix * vec4(aVertex * textRadius, 1.0);

    // find the number of label repetitions
    float repeatLabels = float(uint(uRepeatLabel));
    float repeatGap = uRepeatGap * uPixelRatio;
    float circumference = fPixelRadius * M_2PI;
    float maxLabels = min(repeatLabels, floor(circumference / (fLabelInfo[2] + repeatGap + padding * 2.0)));
    float maxLabelsLength = (fLabelInfo[2] + padding * 2.0) * maxLabels;
    float labelGap = (circumference - maxLabelsLength) / maxLabels;
    fLabelStep = fLabelInfo[2] + labelGap + padding * 2.0;

    // set the render vertex location
    gl_Position = worldVertex;
}
`,Xh=`#version 300 es
precision highp float;
precision lowp usampler2D;
#define GLSLIFY 1

#define M_PI 3.14159265359
#define M_2PI 6.28318530718

vec4 valueForIndex(sampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uvec4 uvalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0);
}

uint uivalueForIndex(usampler2D tex, int index) {
    int texWidth = textureSize(tex, 0).x;
    int col = index % texWidth;
    int row = index / texWidth;
    return texelFetch(tex, ivec2(col, row), 0)[0];
}

// from https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation
float luminance_x(float x) {
    return x <= 0.04045 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
}
float color_l(float l) {
    return min(1.0, max(0.0, l <= 0.0031308 ? l * 12.92 : pow(l * 1.055, 1.0 / 2.4) - 0.055));
}

// from https://en.wikipedia.org/wiki/Relative_luminance
float rgb2luminance(vec3 color) {
    // relative luminance
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    float r = luminance_x(color.r);
    float g = luminance_x(color.g);
    float b = luminance_x(color.b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

vec3 setLuminance(vec3 color, float luminance) {
    float r = luminance_x(color.r) * 0.2126;
    float g = luminance_x(color.g) * 0.7152;
    float b = luminance_x(color.b) * 0.0722;
    float colorLuminance = r + g + b;

    float tr = luminance * (r / colorLuminance);
    float tg = luminance * (g / colorLuminance);
    float tb = luminance * (b / colorLuminance);

    float rr = color_l(tr / 0.2126);
    float rg = color_l(tg / 0.7152);
    float rb = color_l(tb / 0.0722);

    return vec3(rr, rg, rb );
}

// https://www.w3.org/TR/WCAG20/#contrast-ratiodef
// (L1 + 0.05) / (L2 + 0.05), where
// - L1 is the relative luminance of the lighter of the colors, and
// - L2 is the relative luminance of the darker of the colors.
float findDarker(float luminance, float contrast) {
    return (contrast * luminance) + (0.05 * contrast) - 0.05;
}
float findLighter(float luminance, float contrast) {
    return (luminance + 0.05 - (0.05 * contrast)) / contrast;
}

vec3 contrastingColor(vec3 color, float contrast) {
    float luminance = rgb2luminance(color);
    float darker = findDarker(luminance, contrast);
    float lighter = findLighter(luminance, contrast);

    float targetLuminance;
    if (darker < 0.0 || darker > 1.0) {
        targetLuminance = lighter;
    } else if (lighter < 0.0 || lighter > 1.0) {
        targetLuminance = darker;
    } else {
        targetLuminance = abs(luminance - lighter) < abs(darker - luminance) ? lighter : darker;
    }

    return setLuminance(color, targetLuminance);
}

vec3 desaturateColor(vec3 color, float amount) {
    float l = rgb2luminance(color);
    vec3 gray = vec3(l, l, l);
    return mix(color, gray, amount);
}

uniform vec4 uClearColor;
uniform float uDesaturate;
uniform float uBrightness;
uniform float uFade;
uniform float uAlpha;

vec4 outputColor(vec4 color) {
    // desaturate => fade => alpha
    vec3 ret = mix(color.rgb, vec3(uBrightness + 1.0 / 2.0), abs(uBrightness));
    ret = vec3(desaturateColor(ret, uDesaturate));
    ret = mix(ret, uClearColor.rgb, uFade);
    return vec4(ret, color.a * uAlpha);
}

#define MODE_DRAFT 0u
#define MODE_MEDIUM 1u
#define MODE_HIGH 2u
#define MODE_HIGH_PASS_1 3u
#define MODE_HIGH_PASS_2 4u
#define MODE_PICKING 5u

// most of these come from this excellent post:
// https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm

float opRound(in float d, in float r) {
    return d - r;
}

float opOnion(in float d, in float r) {
    return abs(d) - r;
}

float sdCircle(in vec2 p, in float r ) {
    return length(p) - r;
}

float sdEquilateralTriangle(in vec2 p, in float r) {
    const float k = sqrt(3.0);
    p.x = abs(p.x) - r;
    p.y = p.y + (r) / k;
    if (p.x + k * p.y > 0.0) {
        p = vec2(p.x-k*p.y,-k*p.x-p.y) / 2.0;
    }
    p.x -= clamp(p.x, -2.0 * r, 0.0);
    return -length(p) * sign(p.y);
}

float sdPentagon(in vec2 p, in float r) {
    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);
    p.y = -(p.y) * 1.25;
    p.x = abs(p.x) * 1.25;
    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);
    p -= 2.0 * min(dot(vec2(k.x, k.y), p), 0.0) * vec2(k.x, k.y);
    p -= vec2(clamp(p.x, -r*k.z, r*k.z), r);
    return length(p) * sign(p.y);
}

float sdOctagon(in vec2 p, in float r) {
    // pi/8: cos, sin, tan.
    const vec3 k = vec3(
        -0.9238795325,   // sqrt(2+sqrt(2))/2
        0.3826834323,   // sqrt(2-sqrt(2))/2
        0.4142135623
    ); // sqrt(2)-1
    // reflections
    p = abs(p) * 1.1;
    p -= 2.0 * min(dot(vec2(k.x,k.y), p), 0.0) * vec2(k.x,k.y);
    p -= 2.0 * min(dot(vec2(-k.x,k.y), p), 0.0) * vec2(-k.x,k.y);
    // Polygon side.
    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);
    return length(p) * sign(p.y);
}

float sdStar(in vec2 p, in float r, in uint n, in float m) { // m=[2,n]
    // these 4 lines can be precomputed for a given shape
    float an = 3.141593 / float(n);
    float en = 3.141593 / m;
    vec2  acs = vec2(cos(an), sin(an));
    vec2  ecs = vec2(cos(en), sin(en)); // ecs=vec2(0,1) and simplify, for regular polygon,

    // reduce to first sector
    float bn = mod(atan(p.x, p.y), 2.0 * an) - an;
    p = length(p) * vec2(cos(bn), abs(sin(bn)));

    // line sdf
    p -= r * acs;
    p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);
    return length(p) * sign(p.x);
}

float sdCross(in vec2 p, in float w, in float r) {
    p = abs(p);
    return length(p - min(p.x + p.y, w) * 0.5) - r;
}

// TODO: Precompute this, we always pass the same parameters tot his function (v, vec2(1.0, 0.3), 0.0)
float sdPlus( in vec2 p, in vec2 b, float r ) {
    p = abs(p);
    p = (p.y > p.x) ? p.yx : p.xy;

    vec2  q = p - b;
    float k = max(q.y, q.x);
    vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);

    return sign(k)*length(max(w, 0.0)) + r;
}

uniform usampler2D uLabelIndices;
uniform usampler2D uCharBoxes;
uniform sampler2D uCharTexture;
uniform float uPixelRatio;
uniform uint uRenderMode;
uniform vec2 uLabelDirection;
uniform bool uMirror;
uniform float uPadding;

flat in vec4 fBackgroundColor;
flat in vec4 fTextColor;
flat in float fPixelRadius;
flat in float fLabelStep;
flat in vec2 fCharTextureSize;
flat in vec4 fLabelInfo;
flat in float fPixelLength;
flat in float fThickness;
in vec2 vFromCenter;

out vec4 fragColor;

float cross_ish(vec2 a, vec2 b)
{
    return a.x * b.y - a.y * b.x;
}

void main() {
    float padding = uPadding * uPixelRatio;
    float fromCenter = length(vFromCenter);
    float thickness = fThickness * fPixelLength;
    float antialias = min(thickness, fPixelLength * 1.5);
    float radius = 1.0 - thickness;
    float circle = fromCenter - (1.0 - thickness);
    float ring = opOnion(circle, thickness);
    float modeDistance = uRenderMode == MODE_HIGH_PASS_1 ? -antialias : -antialias * 0.5;
    float ringThreshold = uRenderMode == MODE_HIGH_PASS_2 ? 0.0 : modeDistance;

    if (ring > ringThreshold) {
        discard;
    }

    float halfLabelWidth = fLabelInfo[2] * 0.5;
    float halfLabelHeight = fLabelInfo[3] * 0.5;
    float normalizedHeight = (halfLabelHeight + padding) / fPixelRadius;

    vec2 positionVector = uLabelDirection;
    float angle = atan(cross_ish(vFromCenter, positionVector), dot(vFromCenter, positionVector));
    float angleDistance = angle * fPixelRadius;
    float paddedLabelWidth = fLabelInfo[2] + padding * 2.0;
    float offsetAngleDistance = angleDistance + halfLabelWidth + padding;

    float width = fract(offsetAngleDistance / fLabelStep) * fLabelStep;
    float height = (1.0 - fromCenter) * fPixelRadius - padding;
    vec4 finalColor;

    if (height < 0.0 || height > fLabelInfo[3] || width < padding || width > fLabelInfo[2] + padding) {
        finalColor = fBackgroundColor;
    } else {
        float uProgress = (width - padding) / fLabelInfo[2];
        if (uMirror) {
            uProgress = 1.0 - uProgress;
        }
        float stringProgress = fLabelInfo[0] + fLabelInfo[1] * uProgress;
        float stringIndex = floor(stringProgress);
        int charIndex = int(uivalueForIndex(uLabelIndices, int(stringIndex)));
        vec4 charBox = vec4(uvalueForIndex(uCharBoxes, charIndex));
        float charMult = stringProgress - stringIndex;

        vec4 charBoxUV = charBox / vec4(fCharTextureSize, fCharTextureSize);

        vec2 uv = vec2(charBoxUV[0] + charBoxUV[2] * charMult, charBoxUV[1] + charBoxUV[3] * fLabelInfo[1]);
        if (uMirror) {
            uv = vec2(charBoxUV[0] + charBoxUV[2] * charMult, charBoxUV[1] + charBoxUV[3] * (height / fLabelInfo[3]));
        } else {
            uv = vec2(charBoxUV[0] + charBoxUV[2] * charMult, charBoxUV[1] + charBoxUV[3] * (1.0 - height / fLabelInfo[3]));
        }

        vec4 texPixel = texture(uCharTexture, uv);

        float smoothing = 7.0 / fLabelInfo[3];
        float distance = texPixel.a;
        float textEdge = smoothstep(0.5 - smoothing, 0.5 + smoothing, distance);
        finalColor = mix(fBackgroundColor, fTextColor, textEdge);
    }

    if (uRenderMode == MODE_HIGH_PASS_2) {
        if (ring < -antialias) {
            discard;
        }
        fragColor = outputColor(vec4(finalColor.rgb, smoothstep(0.0, antialias, abs(ring))));
    } else {
        fragColor = outputColor(vec4(finalColor.rgb, 1.0));
    }

//    fragColor = vec4(1.0,0.0,1.0,1.0);
}
`,A0=class extends $a{initialize(e,t,r,n,a,s="monospace",f=!1,h){super.initialize(e,t,r,n,a,s,f,h),this.localUniforms.uPadding=2}getDrawShaders(){return{vs:jh,fs:Xh}}};var Yh={PointLabel:Ka,CircularLabel:$a,RingLabel:A0};var $h=Object.prototype.toString.call(typeof process!="undefined"?process:0)==="[object process]";function Vn(){return $h}var G7=Boolean(typeof Deno!="undefined");var pa=class{constructor(t,r,n){this._buffer=null,this.source=t,this.start=r,this.end=n}get buffer(){return this._buffer}get byteLength(){return Promise.resolve(this.end-this.start)}get loaded(){return Boolean(this._buffer)}async load(){this._buffer||(this._buffer=await this.loadData(),this._buffer===null?(this.start=0,this.end=0):this.end-this.start>this._buffer.byteLength&&(this.end-=this.end-this.start-this._buffer.byteLength))}unload(){this._buffer=null}slice(t,r){return new pa(this,t,r)}loadData(t=0,r=this.end-this.start){return this.source.loadData(this.start+t,this.start+r)}};function Zh(){try{return Promise.resolve().then(()=>Ir(require(`${null}`))).catch(()=>!1),!0}catch{return!1}}var Qh=Zh();var Jh=new Function("mod","return require(mod)");async function va(e){if(Qh)return await Promise.resolve().then(()=>Ir(require(e.toString())));if(Vn())return Jh(e);throw"ERROR: Can't load modules dynamically on this platform"}var ep=null,Z7=(Vn()?va("fs"):Promise.resolve(null)).then(e=>ep=e);var ma=class extends Wt{slice(t,r){return new pa(this,t,r)}};ma.LOADING_START=Symbol("DataFileEvents::LoadingStart");ma.LOADING_PROGRESS=Symbol("DataFileEvents::LoadingProgress");ma.LOADING_COMPLETE=Symbol("DataFileEvents::LoadingComplete");var db=1024*1024*4;var tp=null,rp=null,np=null,_b=(Vn()?Promise.all([va("http"),va("https"),va("url")]):Promise.resolve([null,null])).then(e=>{tp=e[0],rp=e[1],np=e[2]}),bb=1024*1024*4;var yn=class extends mn{constructor(e,t=!1){super();this.button="primary",this.boundHandler=this.handleMouse.bind(this),this.viewport=e,this.enabled=t}hookEvents(){this.viewport.mouseHandler.on(cr.events.move,this.boundHandler)}unhookEvents(){this.viewport.mouseHandler.off(cr.events.move,this.boundHandler)}};var Vl=class extends yn{handleMouse(e,t,r){if(t.buttons[this.button]){let n=this.viewport.size[0]/this.viewport.size[1],a=this.viewport.camera.aov,s=-a*(r[1]/this.viewport.rect.height),f=-a*(r[0]/this.viewport.rect.width)*n,h=Nt.fromEuler(Nt.create(),s,f,0);this.viewport.camera.rotate(h),this.viewport.render()}}};var zl=class extends yn{constructor(){super(...arguments);this.button="secondary"}handleMouse(e,t,r){if(t.buttons[this.button]){let n=Math.min(this.viewport.size[0],this.viewport.size[1]),a=Nt.fromEuler(Nt.create(),r[1]/n*90,r[0]/n*90,0),s=Nt.invert(Nt.create(),this.viewport.camera.rotation),f=Nt.mul(Nt.create(),s,a);Nt.mul(f,f,this.viewport.camera.rotation),this.viewport.graph.rotate(f),this.viewport.render()}}};var Hl=class extends yn{handleMouse(e,t,r){if(t.buttons[this.button]){let n=this.viewport.camera.position,a=$e.transformQuat($e.create(),n,this.viewport.camera.rotation),s=Math.abs(a[2]),h=this.viewport.camera.aovRad*s/this.viewport.rect.height,g=$e.fromValues(r[0]*h,r[1]*-h,0),l=Nt.invert(Nt.create(),this.viewport.camera.rotation);$e.transformQuat(g,g,l),$e.add(n,n,g),this.viewport.camera.position=n,this.viewport.render()}}};var Ko=class extends mn{constructor(e,t=!1){super();this.speed=4.5,this.boundHandler=this.handleMouse.bind(this),this.viewport=e,this.enabled=t}hookEvents(){this.viewport.mouseHandler.on(cr.events.wheel,this.boundHandler)}unhookEvents(){this.viewport.mouseHandler.off(cr.events.wheel,this.boundHandler)}};var ql=class extends Ko{handleMouse(e,t,r){let n=ar.invert(ar.create(),this.viewport.camera.projectionMatrix),a=ar.invert(ar.create(),this.viewport.camera.viewMatrix),s=Ve.fromValues(t.canvasCoords[0]*this.viewport.pixelRatio,t.canvasCoords[1]*this.viewport.pixelRatio),f=Ve.fromValues(2*s[0]/this.viewport.size[0]-1,1-2*s[1]/this.viewport.size[1]),h=xr.fromValues(f[0],f[1],-1,1),g=xr.transformMat4(xr.create(),h,n);g[2]=-1,g[3]=0;let l=xr.transformMat4(xr.create(),g,a),u=$e.fromValues(l[0],l[1],l[2]);$e.normalize(u,u);let d=this.viewport.camera.position,C=d[2]/u[2],M=$e.fromValues(d[0]+u[0]*C,d[1]+u[1]*C,0),L=Math.max(100,$e.distance(d,M)),v=this.speed*(L/100);$e.scaleAndAdd(d,d,u,r*v),this.viewport.camera.position=d,this.viewport.render()}};var Wl;(function(e){e[e.CENTER=0]="CENTER",e[e.LEFT=-1]="LEFT",e[e.RIGHT=1]="RIGHT"})(Wl||(Wl={}));var jl;(function(e){e[e.CENTER=0]="CENTER",e[e.TOP=1]="TOP",e[e.BOTTOM=-1]="BOTTOM"})(jl||(jl={}));var up=Ir(Xl());var Yl=class extends Wt{constructor(e,t,r,n="Layer"){super();this._nearDepth=0,this._farDepth=1,this._nodesNearDepth=0,this._nodesFarDepth=1,this._edgesNearDepth=0,this._edgesFarDepth=1,this._labelsNearDepth=0,this._labelsFarDepth=1,this.enabled=!0,this._nodes=e,this._edges=t,this._labels=r,this.name=n,this._nodes&&this._nodes.on(Wt.omniEvent,(a,s)=>{this.emit(a,{layer:this.name,type:"node",id:s})}),this._edges&&this._edges.on(Wt.omniEvent,(a,s)=>{this.emit(a,{layer:this.name,type:"edge",id:s})})}get nodes(){return this._nodes}get edges(){return this._edges}get labels(){return this._labels}get nearDepth(){return this._nearDepth}set nearDepth(e){this._nearDepth=e,this.updateLabelsDepths(),this.updateNodesDepths(),this.updateEdgesDepths()}get farDepth(){return this._farDepth}set farDepth(e){this._farDepth=e,this.updateLabelsDepths(),this.updateNodesDepths(),this.updateEdgesDepths()}get nodesNearDepth(){return this._nodesNearDepth}set nodesNearDepth(e){this._nodesNearDepth=e,this.updateNodesDepths()}get nodesFarDepth(){return this._nodesFarDepth}set nodesFarDepth(e){this._nodesFarDepth=e,this.updateNodesDepths()}get edgesNearDepth(){return this._edgesNearDepth}set edgesNearDepth(e){this._edgesNearDepth=e,this.updateEdgesDepths()}get edgesFarDepth(){return this._edgesFarDepth}set edgesFarDepth(e){this._edgesFarDepth=e,this.updateEdgesDepths()}get labelsNearDepth(){return this._labelsNearDepth}set labelsNearDepth(e){this._labelsNearDepth=e,this.updateLabelsDepths()}get labelsFarDepth(){return this._labelsFarDepth}set labelsFarDepth(e){this._labelsFarDepth=e,this.updateLabelsDepths()}render(e,t,r,n=0){let a=n*-3;t===Be.HIGH?(this.renderLabels(e,Be.HIGH_PASS_1,r[1],a-2,!0),this.renderNodes(e,Be.HIGH_PASS_1,r[1],a-1,!0),this.renderEdges(e,Be.HIGH_PASS_1,r[1],a,!0),this.renderEdges(e,Be.HIGH_PASS_1,r[1],a,!1),this.renderEdges(e,Be.HIGH_PASS_2,r[2],a,!1),this.renderNodes(e,Be.HIGH_PASS_1,r[1],a-1,!1),this.renderNodes(e,Be.HIGH_PASS_2,r[2],a-1,!1),this.renderLabels(e,Be.HIGH_PASS_1,r[1],a-2,!1),this.renderLabels(e,Be.HIGH_PASS_2,r[2],a-2,!1)):(this.renderLabels(e,t,r[0],a-2,!0),this.renderNodes(e,t,r[0],a-1,!0),this.renderEdges(e,t,r[0],a,!0),this.renderEdges(e,t,r[0],a,!1),this.renderNodes(e,t,r[0],a-1,!1),this.renderLabels(e,t,r[0],a-2,!1))}renderNodes(e,t,r,n,a){this._nodes&&this._nodes.enabled&&(this._nodes.opaque===a||t===Be.HIGH_PASS_2)&&(e.polygonOffset(0,n),this._nodes.render(e,t,r))}renderEdges(e,t,r,n,a){this._edges&&this._edges.enabled&&(this._edges.opaque===a||t===Be.HIGH_PASS_2)&&(e.polygonOffset(0,n),this._edges.render(e,t,r))}renderLabels(e,t,r,n,a){this._labels&&this._labels.enabled&&(this._labels.opaque===a||t===Be.HIGH_PASS_2)&&(e.polygonOffset(0,n),this._labels.render(e,t,r))}updateLabelsDepths(){if(this._labels){let e=this._farDepth-this._nearDepth;this._labels.nearDepth=this._nearDepth+e*this._labelsNearDepth,this._labels.farDepth=this._nearDepth+e*this._labelsFarDepth}}updateNodesDepths(){if(this._nodes){let e=this._farDepth-this._nearDepth;this._nodes.nearDepth=this._nearDepth+e*this._nodesNearDepth,this._nodes.farDepth=this._nearDepth+e*this._nodesFarDepth}}updateEdgesDepths(){if(this._edges){let e=this._farDepth-this._nearDepth;this._edges.nearDepth=this._nearDepth+e*this._edgesNearDepth,this._edges.farDepth=this._nearDepth+e*this._edgesFarDepth}}};var Kl=class extends yn{handleMouse(e,t,r){t.buttons[this.button]&&(this.viewport.graph.translate([r[0]*t.pixelRatio,-r[1]*t.pixelRatio,0]),this.viewport.render())}};var $l=class extends Ko{handleMouse(e,t,r){let n=1+this.speed*Math.abs(r)*.05,a=this.viewport.graph.scale;r>0?this.viewport.graph.scale=this.viewport.graph.scale/n:this.viewport.graph.scale=this.viewport.graph.scale*n;let s=Ve.fromValues(t.glCoords[0]-this.viewport.size[0]*.5,t.glCoords[1]-this.viewport.size[1]*.5),f=Ve.fromValues(s[0]-this.viewport.graph.translation[0],s[1]-this.viewport.graph.translation[1]),h=this.viewport.graph.scale/a,g=Ve.fromValues(f[0]*h,f[1]*h),l=Ve.sub(Ve.create(),g,f);this.viewport.graph.translate($e.fromValues(-l[0],-l[1],0)),this.viewport.render()}};var gp={viewport:null},Zl=class extends Wt{get viewport(){return this._viewport}get context(){return this.viewport.context}get hasColors(){return this._hasColors}constructor(e,t,r){super();let n=Object.assign({},gp,r);if(this._viewport=new ml(e,n.viewport),this._generateIdPrev=0,this._viewport.camera.mode===za["2D"]){let a=new Kl(this._viewport);a.enabled=!0;let s=new $l(this._viewport);s.enabled=!0}else{let a=new ql(this._viewport);a.enabled=!0;let s=new Hl(this._viewport);s.button="primary",s.enabled=!0;let f=new zl(this._viewport);f.button="secondary",f.enabled=!0;let h=new Vl(this._viewport);h.button="auxiliary",h.enabled=!0}t&&this.loadData(t)}generateId(){return this._generateIdPrev++}loadData(e){let t={radius:r=>"radius"in r?r.radius:1};if(this.loadColors(e),this.loadPoints(e,t),this.loadLayers(e,t),this._viewport.graph){let r=this._viewport.graph.bbCenter,n=this._viewport.graph.bbDiagonal;if(this._viewport.camera.mode===za["2D"]){let a=this._viewport.graph.bb,s=Math.abs(a.min[0])+Math.abs(a.max[0]),f=Math.abs(a.min[1])+Math.abs(a.max[1]),h=this._viewport.size,g=Math.min(h[0]/s,h[1]/f);this._viewport.graph.scale=g,this._viewport.graph.translate([-r[0]*g,-r[1]*g,0])}else this._viewport.camera.position=[-r[0],-r[1],-r[2]-n],this._viewport.camera.farPlane=Math.max(n*2,1e3);this._viewport.render()}}render(){if(this._viewport.graph)this._viewport.render();else throw new Error("No graph found.")}concatenateNodesFromLayers(e){var t,r,n;let a=[],s=e.layers;for(let f=0,h=s.length;f<h;++f){let g=(n=(t=s[f].nodes)==null?void 0:t.data)!=null?n:(r=s[f].labels)==null?void 0:r.data;for(let l=0,u=g.length;l<u;++l)g[l].point=this.generateId();a.push(g)}return a}loadLayers(e,t){if(e.layers&&e.layers.length){let r=e.layers;if(this._hasColors=Boolean(e.colors),!Boolean(this._viewport.graph)){let n=this.concatenateNodesFromLayers(e);this._viewport.graph=a0.createGraphFromNodes(this.context,n,t),this._viewport.graph.picking=new Gn(this._viewport.context,this._viewport.mouseHandler)}for(let n=0,a=r.length;n<a;++n){let s=r[n].name||`Layer_${n}`;this.addLayer(r[n],s,this.hasColors)}}}addLayer(e,t,r){if(r&&!this.hasColors)throw new Error("No colors found.");r=r??this.hasColors;let n=Boolean(this._viewport.graph),a=this._viewport.graph,s=e.nodes,f=this.addNodes(s,r),h=e.edges;if(h&&!f&&!n)throw new Error("Cannot load an edge-only layer in a graph without points!");let g=this.addEdges(h,f,r),l=e.labels,u=this.addLabels(l,r);if(f||g||u){let d=new Yl(f,g,u,t);if(a.layers.push(d),d.on(Wt.omniEvent,(...C)=>this.emit(...C)),"options"in e){let C=e.options,M=Object.keys(C);for(let L of M)L in d&&(d[L]=C[L])}}}removeLayerByName(e){let{layers:t}=this._viewport.graph;for(let r=0;r<t.length;r++)t[r].name===e&&(this.removeLayerByIndex(r),r--)}removeLayerByIndex(e){let{layers:t}=this._viewport.graph;e>=0&&e<t.length&&t.splice(e,1)}addLabels(e,t){var r,n;let a=this._viewport.graph.picking,s=this.context,f=this._viewport.graph,h=null;if(e){let g=e.type?e.type:"PointLabel",l=Za.types[g]||Za.PointLabel,u=Object.assign({},l.defaultMappings,e.mappings);if(!t){let d=u.color;u.color=(C,M)=>{let L=d(C,M);return typeof L!="number"?this._viewport.colorRegisrty.registerColor(L):L}}if(h=new l(s,f,e.data,u,a,(r=e.options)==null?void 0:r.font,(n=e.options)==null?void 0:n.bold),"options"in e){let d=e.options,C=Object.keys(d);for(let M of C)M in h&&(h[M]=d[M])}}return h}addEdges(e,t,r){let n=this._viewport.graph.picking,a=this.context,s=this._viewport.graph,f=Boolean(this._viewport.graph),h=null;if(e){let g=e.type?e.type:"Straight",l=Ya.types[g]||Ya.Straight,u=Object.assign({},l.defaultMappings,e.mappings);if(!f){let d=u.source;u.source=(M,L)=>t.getEntryPointID(d(M,L));let C=u.target;u.target=(M,L)=>t.getEntryPointID(C(M,L))}if(!r){let d=u.sourceColor;u.sourceColor=(M,L)=>{let v=d(M,L);return typeof v!="number"?this._viewport.colorRegisrty.registerColor(v):v};let C=u.targetColor;u.targetColor=(M,L)=>{let v=C(M,L);return typeof v!="number"?this._viewport.colorRegisrty.registerColor(v):v}}if(h=new l(a,s,e.data,u,n),"options"in e){let d=e.options,C=Object.keys(d);for(let M of C)M in h&&(h[M]=d[M])}}return h}addNodes(e,t){let r=this._viewport.graph.picking,n=this.context,a=this._viewport.graph,s=null;if(e){let f=e.type?e.type:"Circle",h=Wa.types[f]||Wa.Circle,g=Object.assign({},h.defaultMappings,e.mappings);if(!t){let l=g.color;g.color=(u,d)=>{let C=l(u,d);return typeof C!="number"?this._viewport.colorRegisrty.registerColor(C):C}}if(s=new h(n,a,e.data,g,r),"options"in e){let l=e.options,u=Object.keys(l);for(let d of u)d in s&&(s[d]=l[d])}}return s}loadPoints(e,t){if(e.points){let r=Object.assign({},t,e.points.mappings);this._viewport.graph=new a0(this._viewport.context,e.points.data,r),this._viewport.graph.picking=new Gn(this._viewport.context,this._viewport.mouseHandler)}}loadColors(e){if(e.colors){let t=e.colors,r=this._viewport.colorRegisrty;for(let n=0,a=t.length;n<a;++n)r.registerColor(t[n])}else this._viewport.colorRegisrty.registerColor("#d8dee9")}};async function fp(e){let{width:t,height:r}=e.getBoundingClientRect(),n=document.querySelector(".grafer_container"),a=await Promise.resolve().then(()=>Ir(Jl())),s=a.nodes,f=a.links,h=new Es(s,f,t,r);h.bundle(),h.subdivision();let g=[];for(let L of s)g.push(L);let l=new Map;for(let L of f){L.control=L.controlpoints.map(v=>`c-${v.x}, ${v.y}`);for(let v of L.controlpoints)l.set(`c-${v.x}, ${v.y}`,v)}l.forEach((L,v)=>{g.push({id:v,x:L.x,y:L.y})});for(let L of g)L.y=-L.y;let u={data:g},M=[{nodes:{data:s.map(L=>({point:L.id}))},edges:{type:"CurvedPath",options:{alpha:.15},data:f}}];new Zl(n,{points:u,layers:M})}fp(document.body);})();
/*! Tweakpane 1.6.1 (c) 2016 cocopon, licensed under the MIT license. */
/**
 * @license Complex.js v2.0.15 12/05/2020
 *
 * Copyright (c) 2020, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
/**
 * @license Fraction.js v4.1.1 23/05/2021
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */
//# sourceMappingURL=index.js.map
