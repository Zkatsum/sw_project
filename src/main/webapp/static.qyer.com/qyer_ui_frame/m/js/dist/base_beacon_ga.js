;
/* 解决 cnd 缓存问题， 修正数据 */
if(window._RATrack && ("m.qyer.com"==document.domain) ){
    window._RATrack.platform = (/qyer\/|lastminute\/|qyer-guideapp\/|planer\//gi.test(navigator.userAgent) ? 'apph5' : 'mobile');
}


/* ga 用到 */
window._qyer_userid = window._qyer_userid || ( window.QYER && window.QYER.uid ) || "";
var _gaq            = _gaq || [];

_gaq.push(["_setAccount", "UA-185023-1"]);
_gaq.push(["_setDomainName", "qyer.com"]);
_gaq.push(["_setSiteSpeedSampleRate",10]);
_gaq.push(["_addIgnoredRef", "qyer.com"]);
_gaq.push(["_addOrganic","soso","w"]);
_gaq.push(["_addOrganic","sogou","query"]);
_gaq.push(["_addOrganic","baidu","word"]);
_gaq.push(["_addOrganic","baidu","q1"]);
_gaq.push(["_addOrganic","baidu","q2"]);
_gaq.push(["_addOrganic","m.baidu","word"]);
_gaq.push(["_addOrganic","so.360","q"]);
_gaq.push(["_addOrganic","so","q"]);
_gaq.push(["_addOrganic","baidu","w"]);
_gaq.push(["_addOrganic","cn.bing","q"]);
_gaq.push(["_addOrganic","sm","q"]);
_gaq.push(["_trackPageview"]);





/* qyer-track */
(function(){var whenReady=(function(){var funcs=[];var ready=false;function handler(e){if(ready){return}if(e.type==="onreadystatechange"&&document.readyState!=="complete"){return}for(var i=0;i<funcs.length;i++){funcs[i].call(document)}ready=true;funcs=null}if(document.readyState=="complete"){ready=true}else{if(document.addEventListener){document.addEventListener("readystatechange",handler,false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",handler)}}}return function whenReady(fn){if(ready){fn.call(document)}else{funcs.push(fn)}}})();function Delegate(){}Delegate.prototype={temp:{},on:function(ele,type,hanlder,props){this["args_"+arguments.length].apply(this,arguments)},one:function(ele,type,hanlder,props){var args=[].slice.call(arguments,0),self=this;args[2]=function(){hanlder.apply(this,arguments);self.off(ele,type)};this["args_"+arguments.length].apply(this,args)},args_3:function(ele,type,hanlder){this.bind(ele,type,hanlder)},args_4:function(ele,type,hanlder,props){var self=this;this.bind(ele,type,function(e){self.getProps(e,e.target||e.srcElement,props,ele,hanlder)})},off:function(ele,type){if(this.temp[ele._alais_on]&&this.temp[ele._alais_on][type]&&this.temp[ele._alais_on][type].length){var length=this.temp[ele._alais_on][type].length,fn=null;for(;fn=this.temp[ele._alais_on][type][--length];){this.unbind(ele,type,fn)}this.temp[ele._alais_on][type]=[];delete ele._alais_on}},bind:function(ele,type,hanlder){if(!ele._alais_on){ele._alais_on=parseInt(Math.random()*100,10)+""+(new Date()).getTime()}if(!this.temp[ele._alais_on]){this.temp[ele._alais_on]={}}if(!this.temp[ele._alais_on][type]){this.temp[ele._alais_on][type]=[]}this.temp[ele._alais_on][type].push(hanlder);this.live(ele,type,this.temp[ele._alais_on][type][this.temp[ele._alais_on][type].length-1])},live:function(element,type,hanlder){if(element.addEventListener){element.addEventListener(type,hanlder,false)}else{if(element.attachEvent){element.attachEvent("on"+type,hanlder)}else{element["on"+type]=hanlder}}},unbind:function(element,type,hanlder){if(element.removeEventListener){element.removeEventListener(type,hanlder,false)}else{if(element.detachEvent){element.detachEvent("on"+type,hanlder)}else{element["on"+type]=null}}},getProps:function(e,tar,props,ele,hanlder){var props_list=props.split(",");var is_gettar=false;for(var i=0;i<props_list.length;i++){var props_item=props_list[i];var attr=this.isAttr(props_item);if(tar&&((attr&&tar.getAttribute&&tar.getAttribute(attr))||(!attr&&tar.tagName==props_item))){hanlder(tar);is_gettar=true;break}}if(!is_gettar){if(tar===ele){return}else{if(tar&&tar.parentNode){this.getProps(e,tar.parentNode,props,ele,hanlder);return}}}},isAttr:function(props_item){if(props_item.indexOf("[")==0&&props_item.indexOf("]")==props_item.length-1){return props_item.slice(1,props_item.length-1)}else{return false}}};var TJQyer=function(){var win=window,doc=document,loc=win.location;if(win.String.prototype.trim==null){win.String.prototype.trim=function(){return this.replace(/(^\s*)|(\s*$)/g,"")}}var Global={curURL:loc.href,referrer:doc.referrer,protocol:loc.protocol,window_size:doc.documentElement.clientWidth+"x"+doc.documentElement.clientHeight,screen_size:win.screen.width+","+win.screen.height,domain:function(){var d=loc.host.toLowerCase(),reg=/.*?([^\.]+\.(com|org|net|biz|edu|cc)(\.[^\.]+)?)/;if(reg.test(d)){return"."+d.replace(reg,"$1")}return""}(),navigation_type:function(){var navtype="-1";try{navtype=win.performance.navigation.type}catch(e){return"-1"}return navtype}()};Global.setCookie=function(){var exp=new Date();(arguments.length>2)?exp.setTime(exp.getTime()+arguments[2]*24*60*60*1000):exp.setTime(exp.getTime()+30*60*1000);if(arguments.length>=2){doc.cookie=arguments[0]+"="+escape(arguments[1])+"; expires="+exp.toGMTString()+";path=/; domain="+Global.domain}};Global.getCookie=function(name){if(!doc.cookie){return""}var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");if(arr=doc.cookie.match(reg)){return unescape(arr[2])}return""};var _lastUrl;Global.ajaxsend=function(url){var img=new Image();img.src=url;return true};Global.getGTID=function(){function fix(num,length,iter){var ret=(""+num).length<length?((new Array(length+1)).join("0")+num).slice(-length):""+num;return(iter==-1)?ret:ret.substring(0,iter)+"-"+ret.substring(iter)}return"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(/x/g,function(c){return(Math.random()*16|0).toString(16)})};Global.setLocalStorage=function(name,value){try{if(!!win.localStorage){win.localStorage.setItem(name,value)}}catch(e){}};Global.getLocalStorage=function(name){try{if(!!win.localStorage){return win.localStorage.getItem(name)}return""}catch(e){return""}};Global.generateUUID=function(){var _t=this;var ret="xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(c){var r=win.Math.random()*16|0,v=c=="x"?r:(r&3|8);return v.toString(16)});_t.setCookie("new_uv",1,365);return ret};Global.getUUID=function(UUIDName){var _t=this;var ret=_t.getCookie(UUIDName)||_t.getLocalStorage(UUIDName)||_t.generateUUID();
_t.setCookie(UUIDName,ret,365);_t.setLocalStorage(UUIDName,ret);return ret};Global.getRandom=function(){return win.Math.random()};Global.bindElem=(function(){var instance=null;return function(){if(!instance){instance=new Delegate()}if(arguments.length>0){instance.on.apply(instance,arguments)}return instance}}());Global.loadScript=function(url,callback){try{var script=doc.createElement("script");script.type="text/javascript";script.async="async";if(script.readyState){script.onreadystatechange=function(){if(script.readyState=="loaded"||script.readyState=="complete"){script.onreadystatechange=null;callback&&callback()}}}else{script.onload=function(){callback&&callback()}}script.src=url;doc.body.appendChild(script)}catch(e){}};var TongJiQY={config:{"trackLog":{"server":"qt.qyer.com/track/empty.gif",},"clickLog":{"server":"qt.qyer.com/click/empty.gif",}},filterList:function(url){var f=["z.qyer.com","m.qyer.com/z/"];for(var i=0;i<f.length;i++){if(url.indexOf(f[i])!==-1){return"YES"}}return"NO"},getValByUrl:function(curl,key){var arr,reg=new RegExp("[&?#]"+key+"=([^&#?]*)");arr=curl.match(reg);if(arr instanceof Array){return arr[1]}else{return""}},getBaseInfo:function(){var referrer="";if(doc.referrer!=""&&typeof(doc.referrer)!="undefined"){var referrer=doc.referrer}curURL=Global.curURL;Global.curURL=decodeURI(Global.curURL);Global.curURL=Global.curURL.replace(/\\x26amp;/,"&");Global.curURL=Global.curURL.replace(/\\x5Cx26amp;/,"&");Global.curURL=Global.curURL.replace(/\\x5C/,"\\");Global.curURL=Global.curURL.replace(/&amp;/,"&");guid=Global.getUUID("_guid");window_size=Global.window_size,navtype=Global.navigation_type,screen_size=Global.screen_size;var als=Global.getCookie("als"),campaign=this.getValByUrl(Global.curURL,"campaign"),category=this.getValByUrl(Global.curURL,"category");ra_label=this.getValByUrl(Global.curURL,"ra_label"),ra_spm=this.getValByUrl(Global.curURL,"ra_spm");var user_id=win._qyer_userid||(win.QYER&&win.QYER.uid)||"";var init_refer,new_session,new_uv;if(Global.getCookie("new_session")!=""){init_refer=Global.getCookie("init_refer");session_time=Global.getCookie("session_time");new_session="0"}else{init_refer=encodeURIComponent(Global.referrer);session_time=(new Date()).getTime()/1000;new_session="1"}var new_uv=Global.getCookie("new_uv");if(new_uv!=""&&parseInt(new_uv)>0){new_uv=parseInt(new_uv)+((new_session=="0")?0:1)}else{new_uv=1}Global.setCookie("new_session",new_session);Global.setCookie("session_time",session_time);Global.setCookie("init_refer",init_refer);Global.setCookie("new_uv",new_uv,365);var gps="",position=Global.getLocalStorage("position");if(position){try{gps=JSON.parse(win.localStorage.position)}catch(e){gps=eval(win.localStorage.position)}}var RATrack=win._RATrack||{},insertSets={"user_id":user_id,"als":als,"campaign":campaign,"category":category,"ra_label":ra_label,"ra_spm":ra_spm,"new_session":new_session,"session_time":session_time,"init_refer":init_refer,"referrer":referrer,"new_uv":new_uv,"guid":guid,"navtype":navtype,"sc":screen_size,"window_size":window_size,"lat":gps.lat||"","lng":gps.lng||"","gpstimestamp":gps.timestamp||"","timestamp":(new Date).getTime()};for(var name in RATrack){if(RATrack.hasOwnProperty(name)){insertSets[name]=RATrack[name]}}return{RATrack:JSON.stringify(insertSets)}},sendLog:function(logType,uniqParamsObject){var B=this.baseInfo,conf=this.config[logType],_t=this;if(logType&&conf&&uniqParamsObject&&typeof uniqParamsObject==="object"){Global.ajaxsend(Global.protocol+"//"+conf["server"]+"?"+_t.urlEncode(_t.extend(uniqParamsObject,B)))}},getAttributeDom:function(attr){if(doc.querySelectorAll=="function"){return doc.querySelectorAll(attr)}else{var allDom=[];var dom=doc.getElementsByTagName("*");for(var i=0;i<dom.length;i++){if(dom[i].getAttribute(attr.slice(1,attr.length-1))){allDom.push(dom[i])}}return allDom}},extend:function(destination,source){for(var property in source){destination[property]=source[property]}return destination},urlEncode:function(param,key,encode){if(param==null){return""}var _t=this;var paramStr="";var t=typeof(param);if(t=="string"||t=="number"||t=="boolean"){paramStr+="&"+key+"="+((encode==null||encode)?encodeURIComponent(param):param)}else{for(var i in param){var k=key==null?i:key+(param instanceof Array?"["+i+"]":"."+i);paramStr+=_t.urlEncode(param[i],k,encode)}}return paramStr},contains:function(arr,obj){var i=arr.length;while(i--){if(arr[i]===obj){return true}}return false},trackLog:function(SWTag){var B=this.baseInfo;var _t=this;if(SWTag!=null){var sw=SWTag}else{var sw=[],datasw=_t.getAttributeDom("[data-bn-sw]");if(datasw){for(var i=0;i<datasw.length;i++){sw_item=datasw[i].getAttribute("data-bn-sw");if(!_t.contains(sw,sw_item)){sw.push(sw_item)}}}}this.sendLog("trackLog",{"log_type":"1","sw":JSON.stringify(sw)})},clickLog:function(click_tag,to){var B=this.baseInfo,from="";if(click_tag!=null&&click_tag.length>0){from=click_tag}link_url="";if(to!=null&&(to.indexOf("http")==0||to.indexOf("//")==0)){link_url=to;if(link_url.indexOf("//")==0){link_url="http:"+link_url
}}this.sendLog("clickLog",{"log_type":"2","click_tag":from,"to":link_url})},bindTongji_tag:function(){var _t=this;Global.bindElem(doc,"click",function(e){_t.baseInfo=_t.getBaseInfo();var tongji_tag=e.getAttribute("data-bn-ipg");var ra_arg=e.getAttribute("ra_arg")||e.getAttribute("ra-arg")||e.getAttribute("data-ra_arg")||"";var sw=e.getAttribute("data-bn-sw");var click_tag=JSON.stringify({"di":tongji_tag,"rr":ra_arg,"ds":sw});var _href=e.getAttribute("href")||"";_t.clickLog(click_tag,_href)},"[data-bn-ipg],[data-ra_arg],[data-bn-sw]")},bindAddGTIDtoURL:function(){var _t=this;Global.bindElem(doc,"click",function(e){var _href=e.getAttribute("href")||"";if(_href.indexOf("javascript:")==-1&&_href.substring(0,1)!="#"&&_t.filterList(_href)=="YES"&&(_href.substring(0,1)=="/"||_href.indexOf(".qyer.com")!=-1)){var href_label=_t.getValByUrl(win.location.href,"ra_label");var href_spm=_t.getValByUrl(win.location.href,"ra_spm");_href_list=_href.split("#");_href=_href_list[0];_new_href=_href.trim();if(href_label){_new_href+=(_new_href.indexOf("?")==-1?"?":"&")+"ra_label="+href_label}if(href_spm){_new_href+=(_new_href.indexOf("?")==-1?"?":"&")+"ra_spm="+href_spm}if(_href_list.length>1){for(var _ii=1;_ii<_href_list.length;_ii++){_new_href+="#"+_href_list[_ii]}}e.setAttribute("href",_new_href)}},"A")},bindAlsTag:function(){var als=Global.getCookie("als");if(!als){Global.bindElem().one(doc.getElementsByTagName("body")[0],"mouseover",function(){Global.setCookie("als","0",365)})}if(Global.getCookie("isSpider")){Global.setCookie("isSpider","",0)}}};function init(){TongJiQY.baseInfo=TongJiQY.getBaseInfo();TongJiQY.trackLog();TongJiQY.bindAlsTag();TongJiQY.bindAddGTIDtoURL();TongJiQY.bindTongji_tag();win.clickLog=function(clickTag){TongJiQY.clickLog(clickTag)};win.qyerTrack={doTrack:function(data_bn_ipg_val,ra_arg_val,data_bn_sw_val){var data_bn_ipg=data_bn_ipg_val||"";var ra_arg=ra_arg_val||"";var sw=data_bn_sw_val||"";var click_tag=JSON.stringify({"di":data_bn_ipg,"rr":ra_arg,"ds":sw});TongJiQY.clickLog(click_tag);return true},doSW:function(data_bn_sw_val){var data_bn_sw=data_bn_sw_val||[];TongJiQY.trackLog(data_bn_sw);return true}}}try{init()}catch(e){console.log(e)}};whenReady(TJQyer)})();





;(function(){var E;function Aa(a,b){switch(b){case 0:return""+a;case 1:return 1*a;case 2:return!!a;case 3:return 1E3*a}return a}function Ba(a){return"function"==typeof a}function Ca(a){return void 0!=a&&-1<(a.constructor+"").indexOf("String")}function F(a,b){return void 0==a||"-"==a&&!b||""==a}function Da(a){if(!a||""==a)return"";for(;a&&-1<" \n\r\t".indexOf(a.charAt(0));)a=a.substring(1);for(;a&&-1<" \n\r\t".indexOf(a.charAt(a.length-1));)a=a.substring(0,a.length-1);return a}
function Ea(){return Math.round(2147483647*Math.random())}function Fa(){}function G(a,b){if(encodeURIComponent instanceof Function)return b?encodeURI(a):encodeURIComponent(a);H(68);return escape(a)}function I(a){a=a.split("+").join(" ");if(decodeURIComponent instanceof Function)try{return decodeURIComponent(a)}catch(b){H(17)}else H(68);return unescape(a)}var Ga=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)};
function Ia(a,b){if(a){var c=J.createElement("script");c.type="text/javascript";c.async=!0;c.src=a;c.id=b;var d=J.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d);return c}}function K(a){return a&&0<a.length?a[0]:""}function L(a){var b=a?a.length:0;return 0<b?a[b-1]:""}var nf=function(){this.prefix="ga.";this.values={}};nf.prototype.set=function(a,b){this.values[this.prefix+a]=b};nf.prototype.get=function(a){return this.values[this.prefix+a]};
nf.prototype.contains=function(a){return void 0!==this.get(a)};function Ka(a){0==a.indexOf("www.")&&(a=a.substring(4));return a.toLowerCase()}
function La(a,b){var c,d={url:a,protocol:"http",host:"",path:"",R:new nf,anchor:""};if(!a)return d;c=a.indexOf("://");0<=c&&(d.protocol=a.substring(0,c),a=a.substring(c+3));c=a.search("/|\\?|#");if(0<=c)d.host=a.substring(0,c).toLowerCase(),a=a.substring(c);else return d.host=a.toLowerCase(),d;c=a.indexOf("#");0<=c&&(d.anchor=a.substring(c+1),a=a.substring(0,c));c=a.indexOf("?");0<=c&&(Na(d.R,a.substring(c+1)),a=a.substring(0,c));d.anchor&&b&&Na(d.R,d.anchor);a&&"/"==a.charAt(0)&&(a=a.substring(1));
d.path=a;return d}
function Oa(a,b){function c(a){var b=(a.hostname||"").split(":")[0].toLowerCase(),c=(a.protocol||"").toLowerCase(),c=1*a.port||("http:"==c?80:"https:"==c?443:"");a=a.pathname||"";0==a.indexOf("/")||(a="/"+a);return[b,""+c,a]}var d=b||J.createElement("a");d.href=J.location.href;var e=(d.protocol||"").toLowerCase(),f=c(d),Be=d.search||"",k=e+"//"+f[0]+(f[1]?":"+f[1]:"");0==a.indexOf("//")?a=e+a:0==a.indexOf("/")?a=k+a:a&&0!=a.indexOf("?")?0>a.split("/")[0].indexOf(":")&&(a=k+f[2].substring(0,f[2].lastIndexOf("/"))+
"/"+a):a=k+f[2]+(a||Be);d.href=a;e=c(d);return{protocol:(d.protocol||"").toLowerCase(),host:e[0],port:e[1],path:e[2],Oa:d.search||"",url:a||""}}function Na(a,b){function c(b,c){a.contains(b)||a.set(b,[]);a.get(b).push(c)}for(var d=Da(b).split("&"),e=0;e<d.length;e++)if(d[e]){var f=d[e].indexOf("=");0>f?c(d[e],"1"):c(d[e].substring(0,f),d[e].substring(f+1))}}
function Pa(a,b){if(F(a)||"["==a.charAt(0)&&"]"==a.charAt(a.length-1))return"-";var c=J.domain;return a.indexOf(c+(b&&"/"!=b?b:""))==(0==a.indexOf("//")?7:0==a.indexOf("https://")?8:0)?"0":a};var Qa=0;function Ra(a,b,c){1<=Qa||1<=100*Math.random()||ld()||(a=["utmt=error","utmerr="+a,"utmwv=5.6.7","utmn="+Ea(),"utmsp=1"],b&&a.push("api="+b),c&&a.push("msg="+G(c.substring(0,100))),M.w&&a.push("aip=1"),Sa(a.join("&")),Qa++)};var Ta=0,Ua={};function N(a){return Va("x"+Ta++,a)}function Va(a,b){Ua[a]=!!b;return a}
var Wa=N(),Xa=Va("anonymizeIp"),Ya=N(),$a=N(),ab=N(),bb=N(),O=N(),P=N(),cb=N(),db=N(),eb=N(),fb=N(),gb=N(),hb=N(),ib=N(),jb=N(),kb=N(),lb=N(),nb=N(),ob=N(),pb=N(),qb=N(),rb=N(),sb=N(),tb=N(),ub=N(),vb=N(),wb=N(),xb=N(),yb=N(),zb=N(),Ab=N(),Bb=N(),Cb=N(),Db=N(),Eb=N(),Fb=N(!0),Gb=Va("currencyCode"),Hb=Va("page"),Ib=Va("title"),Jb=N(),Kb=N(),Lb=N(),Mb=N(),Nb=N(),Ob=N(),Pb=N(),Qb=N(),Rb=N(),Q=N(!0),Sb=N(!0),Tb=N(!0),Ub=N(!0),Vb=N(!0),Wb=N(!0),Zb=N(!0),$b=N(!0),ac=N(!0),bc=N(!0),cc=N(!0),R=N(!0),dc=N(!0),
ec=N(!0),fc=N(!0),gc=N(!0),hc=N(!0),ic=N(!0),jc=N(!0),S=N(!0),kc=N(!0),lc=N(!0),mc=N(!0),nc=N(!0),oc=N(!0),pc=N(!0),qc=N(!0),rc=Va("campaignParams"),sc=N(),tc=Va("hitCallback"),uc=N();N();var vc=N(),wc=N(),xc=N(),yc=N(),zc=N(),Ac=N(),Bc=N(),Cc=N(),Dc=N(),Ec=N(),Fc=N(),Gc=N(),Hc=N(),Ic=N();N();var Mc=N(),Nc=N(),Yb=N(),Jc=N(),Kc=N(),Lc=Va("utmtCookieName"),Cd=Va("displayFeatures"),Oc=N(),of=Va("gtmid"),Oe=Va("uaName"),Pe=Va("uaDomain"),Qe=Va("uaPath"),pf=Va("linkid");var Re=function(){function a(a,c,d){T(qf.prototype,a,c,d)}a("_createTracker",qf.prototype.hb,55);a("_getTracker",qf.prototype.oa,0);a("_getTrackerByName",qf.prototype.u,51);a("_getTrackers",qf.prototype.pa,130);a("_anonymizeIp",qf.prototype.aa,16);a("_forceSSL",qf.prototype.la,125);a("_getPlugin",Pc,120)},Se=function(){function a(a,c,d){T(U.prototype,a,c,d)}Qc("_getName",$a,58);Qc("_getAccount",Wa,64);Qc("_visitCode",Q,54);Qc("_getClientInfo",ib,53,1);Qc("_getDetectTitle",lb,56,1);Qc("_getDetectFlash",
jb,65,1);Qc("_getLocalGifPath",wb,57);Qc("_getServiceMode",xb,59);V("_setClientInfo",ib,66,2);V("_setAccount",Wa,3);V("_setNamespace",Ya,48);V("_setAllowLinker",fb,11,2);V("_setDetectFlash",jb,61,2);V("_setDetectTitle",lb,62,2);V("_setLocalGifPath",wb,46,0);V("_setLocalServerMode",xb,92,void 0,0);V("_setRemoteServerMode",xb,63,void 0,1);V("_setLocalRemoteServerMode",xb,47,void 0,2);V("_setSampleRate",vb,45,1);V("_setCampaignTrack",kb,36,2);V("_setAllowAnchor",gb,7,2);V("_setCampNameKey",ob,41);V("_setCampContentKey",
tb,38);V("_setCampIdKey",nb,39);V("_setCampMediumKey",rb,40);V("_setCampNOKey",ub,42);V("_setCampSourceKey",qb,43);V("_setCampTermKey",sb,44);V("_setCampCIdKey",pb,37);V("_setCookiePath",P,9,0);V("_setMaxCustomVariables",yb,0,1);V("_setVisitorCookieTimeout",cb,28,1);V("_setSessionCookieTimeout",db,26,1);V("_setCampaignCookieTimeout",eb,29,1);V("_setReferrerOverride",Jb,49);V("_setSiteSpeedSampleRate",Dc,132);a("_trackPageview",U.prototype.Fa,1);a("_trackEvent",U.prototype.F,4);a("_trackPageLoadTime",
U.prototype.Ea,100);a("_trackSocial",U.prototype.Ga,104);a("_trackTrans",U.prototype.Ia,18);a("_sendXEvent",U.prototype.ib,78);a("_createEventTracker",U.prototype.ia,74);a("_getVersion",U.prototype.qa,60);a("_setDomainName",U.prototype.B,6);a("_setAllowHash",U.prototype.va,8);a("_getLinkerUrl",U.prototype.na,52);a("_link",U.prototype.link,101);a("_linkByPost",U.prototype.ua,102);a("_setTrans",U.prototype.za,20);a("_addTrans",U.prototype.$,21);a("_addItem",U.prototype.Y,19);a("_clearTrans",U.prototype.ea,
105);a("_setTransactionDelim",U.prototype.Aa,82);a("_setCustomVar",U.prototype.wa,10);a("_deleteCustomVar",U.prototype.ka,35);a("_getVisitorCustomVar",U.prototype.ra,50);a("_setXKey",U.prototype.Ca,83);a("_setXValue",U.prototype.Da,84);a("_getXKey",U.prototype.sa,76);a("_getXValue",U.prototype.ta,77);a("_clearXKey",U.prototype.fa,72);a("_clearXValue",U.prototype.ga,73);a("_createXObj",U.prototype.ja,75);a("_addIgnoredOrganic",U.prototype.W,15);a("_clearIgnoredOrganic",U.prototype.ba,97);a("_addIgnoredRef",
U.prototype.X,31);a("_clearIgnoredRef",U.prototype.ca,32);a("_addOrganic",U.prototype.Z,14);a("_clearOrganic",U.prototype.da,70);a("_cookiePathCopy",U.prototype.ha,30);a("_get",U.prototype.ma,106);a("_set",U.prototype.xa,107);a("_addEventListener",U.prototype.addEventListener,108);a("_removeEventListener",U.prototype.removeEventListener,109);a("_addDevId",U.prototype.V);a("_getPlugin",Pc,122);a("_setPageGroup",U.prototype.ya,126);a("_trackTiming",U.prototype.Ha,124);a("_initData",U.prototype.initData,
2);a("_setVar",U.prototype.Ba,22);V("_setSessionTimeout",db,27,3);V("_setCookieTimeout",eb,25,3);V("_setCookiePersistence",cb,24,1);a("_setAutoTrackOutbound",Fa,79);a("_setTrackOutboundSubdomains",Fa,81);a("_setHrefExamineLimit",Fa,80)};function Pc(a){var b=this.plugins_;if(b)return b.get(a)}
var T=function(a,b,c,d){a[b]=function(){try{return void 0!=d&&H(d),c.apply(this,arguments)}catch(a){throw Ra("exc",b,a&&a.name),a;}}},Qc=function(a,b,c,d){U.prototype[a]=function(){try{return H(c),Aa(this.a.get(b),d)}catch(e){throw Ra("exc",a,e&&e.name),e;}}},V=function(a,b,c,d,e){U.prototype[a]=function(f){try{H(c),void 0==e?this.a.set(b,Aa(f,d)):this.a.set(b,e)}catch(Be){throw Ra("exc",a,Be&&Be.name),Be;}}},Te=function(a,b){return{type:b,target:a,stopPropagation:function(){throw"aborted";}}};var Rc=new RegExp(/(^|\.)doubleclick\.net$/i),Sc=function(a,b){return Rc.test(J.location.hostname)?!0:"/"!==b?!1:0!=a.indexOf("www.google.")&&0!=a.indexOf(".google.")&&0!=a.indexOf("google.")||-1<a.indexOf("google.org")?!1:!0},Tc=function(a){var b=a.get(bb),c=a.c(P,"/");Sc(b,c)&&a.stopPropagation()};var Zc=function(){var a={},b={},c=new Uc;this.g=function(a,b){c.add(a,b)};var d=new Uc;this.v=function(a,b){d.add(a,b)};var e=!1,f=!1,Be=!0;this.T=function(){e=!0};this.j=function(a){this.load();this.set(sc,a,!0);a=new Vc(this);e=!1;d.cb(this);e=!0;b={};this.gb();a.Ja()};this.load=function(){e&&(e=!1,this.Ka(),Wc(this),f||(f=!0,c.cb(this),Xc(this),Wc(this)),e=!0)};this.gb=function(){e&&(f?(e=!1,Xc(this),e=!0):this.load())};this.get=function(c){Ua[c]&&this.load();return void 0!==b[c]?b[c]:a[c]};this.set=
function(c,d,e){Ua[c]&&this.load();e?b[c]=d:a[c]=d;Ua[c]&&this.gb()};this.Za=function(b){a[b]=this.b(b,0)+1};this.b=function(a,b){var c=this.get(a);return void 0==c||""===c?b:1*c};this.c=function(a,b){var c=this.get(a);return void 0==c?b:c+""};this.Ka=function(){if(Be){var b=this.c(bb,""),c=this.c(P,"/");Sc(b,c)||(a[O]=a[hb]&&""!=b?Yc(b):1,Be=!1)}}};Zc.prototype.stopPropagation=function(){throw"aborted";};
var Vc=function(a){var b=this;this.fb=0;var c=a.get(tc);this.Ua=function(){0<b.fb&&c&&(b.fb--,b.fb||c())};this.Ja=function(){!b.fb&&c&&setTimeout(c,10)};a.set(uc,b,!0)};function $c(a,b){b=b||[];for(var c=0;c<b.length;c++){var d=b[c];if(""+a==d||0==d.indexOf(a+"."))return d}return"-"}
var bd=function(a,b,c){c=c?"":a.c(O,"1");b=b.split(".");if(6!==b.length||ad(b[0],c))return!1;c=1*b[1];var d=1*b[2],e=1*b[3],f=1*b[4];b=1*b[5];if(!(0<=c&&0<d&&0<e&&0<f&&0<=b))return!1;a.set(Q,c);a.set(Vb,d);a.set(Wb,e);a.set(Zb,f);a.set($b,b);return!0},cd=function(a){var b=a.get(Q),c=a.get(Vb),d=a.get(Wb),e=a.get(Zb),f=a.b($b,1);return[a.b(O,1),void 0!=b?b:"-",c||"-",d||"-",e||"-",f].join(".")},dd=function(a){return[a.b(O,1),a.b(cc,0),a.b(R,1),a.b(dc,0)].join(".")},ed=function(a,b,c){c=c?"":a.c(O,
"1");var d=b.split(".");if(4!==d.length||ad(d[0],c))d=null;a.set(cc,d?1*d[1]:0);a.set(R,d?1*d[2]:10);a.set(dc,d?1*d[3]:a.get(ab));return null!=d||!ad(b,c)},fd=function(a,b){var c=G(a.c(Tb,"")),d=[],e=a.get(Fb);if(!b&&e){for(var f=0;f<e.length;f++){var Be=e[f];Be&&1==Be.scope&&d.push(f+"="+G(Be.name)+"="+G(Be.value)+"=1")}0<d.length&&(c+="|"+d.join("^"))}return c?a.b(O,1)+"."+c:null},gd=function(a,b,c){c=c?"":a.c(O,"1");b=b.split(".");if(2>b.length||ad(b[0],c))return!1;b=b.slice(1).join(".").split("|");
0<b.length&&a.set(Tb,I(b[0]));if(1>=b.length)return!0;b=b[1].split(-1==b[1].indexOf(",")?"^":",");for(c=0;c<b.length;c++){var d=b[c].split("=");if(4==d.length){var e={};e.name=I(d[1]);e.value=I(d[2]);e.scope=1;a.get(Fb)[d[0]]=e}}return!0},hd=function(a,b){var c=Ue(a,b);return c?[a.b(O,1),a.b(ec,0),a.b(fc,1),a.b(gc,1),c].join("."):""},Ue=function(a){function b(b,e){if(!F(a.get(b))){var f=a.c(b,""),f=f.split(" ").join("%20"),f=f.split("+").join("%20");c.push(e+"="+f)}}var c=[];b(ic,"utmcid");b(nc,"utmcsr");
b(S,"utmgclid");b(kc,"utmgclsrc");b(lc,"utmdclid");b(mc,"utmdsid");b(jc,"utmccn");b(oc,"utmcmd");b(pc,"utmctr");b(qc,"utmcct");return c.join("|")},id=function(a,b,c){c=c?"":a.c(O,"1");b=b.split(".");if(5>b.length||ad(b[0],c))return a.set(ec,void 0),a.set(fc,void 0),a.set(gc,void 0),a.set(ic,void 0),a.set(jc,void 0),a.set(nc,void 0),a.set(oc,void 0),a.set(pc,void 0),a.set(qc,void 0),a.set(S,void 0),a.set(kc,void 0),a.set(lc,void 0),a.set(mc,void 0),!1;a.set(ec,1*b[1]);a.set(fc,1*b[2]);a.set(gc,1*b[3]);
Ve(a,b.slice(4).join("."));return!0},Ve=function(a,b){function c(a){return(a=b.match(a+"=(.*?)(?:\\|utm|$)"))&&2==a.length?a[1]:void 0}function d(b,c){c?(c=e?I(c):c.split("%20").join(" "),a.set(b,c)):a.set(b,void 0)}-1==b.indexOf("=")&&(b=I(b));var e="2"==c("utmcvr");d(ic,c("utmcid"));d(jc,c("utmccn"));d(nc,c("utmcsr"));d(oc,c("utmcmd"));d(pc,c("utmctr"));d(qc,c("utmcct"));d(S,c("utmgclid"));d(kc,c("utmgclsrc"));d(lc,c("utmdclid"));d(mc,c("utmdsid"))},ad=function(a,b){return b?a!=b:!/^\d+$/.test(a)};var Uc=function(){this.filters=[]};Uc.prototype.add=function(a,b){this.filters.push({name:a,s:b})};Uc.prototype.cb=function(a){try{for(var b=0;b<this.filters.length;b++)this.filters[b].s.call(W,a)}catch(c){}};function jd(a){100!=a.get(vb)&&a.get(Q)%1E4>=100*a.get(vb)&&a.stopPropagation()}function kd(a){ld(a.get(Wa))&&a.stopPropagation()}function md(a){"file:"==J.location.protocol&&a.stopPropagation()}function Ge(a){He()&&a.stopPropagation()}
function nd(a){a.get(Ib)||a.set(Ib,J.title,!0);a.get(Hb)||a.set(Hb,J.location.pathname+J.location.search,!0)}function lf(a){a.get(Wa)&&"UA-XXXXX-X"!=a.get(Wa)||a.stopPropagation()};var od=new function(){var a=[];this.set=function(b){a[b]=!0};this.encode=function(){for(var b=[],c=0;c<a.length;c++)a[c]&&(b[Math.floor(c/6)]^=1<<c%6);for(c=0;c<b.length;c++)b[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[c]||0);return b.join("")+"~"}};function H(a){od.set(a)};var W=window,J=document,ld=function(a){var b=W._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===W["ga-disable-"+a])return!0;try{var c=W.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(d){}return!1},He=function(){return W.navigator&&"preview"==W.navigator.loadPurpose},We=function(a,b){setTimeout(a,b)},pd=function(a){var b=[],c=J.cookie.split(";");a=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$");for(var d=0;d<c.length;d++){var e=c[d].match(a);e&&b.push(e[1])}return b},X=function(a,b,c,d,e,f){e=
ld(e)?!1:Sc(d,c)?!1:He()?!1:!0;e&&((b=mf(b))&&2E3<b.length&&(b=b.substring(0,2E3),H(69)),a=a+"="+b+"; path="+c+"; ",f&&(a+="expires="+(new Date((new Date).getTime()+f)).toGMTString()+"; "),d&&(a+="domain="+d+";"),J.cookie=a)},mf=function(a){if(!a)return a;var b=a.indexOf(";");-1!=b&&(a=a.substring(0,b),H(141));if(!(0<=W.navigator.userAgent.indexOf("Firefox")))return a;a=a.replace(/\n|\r/g," ");for(var b=0,c=a.length;b<c;++b){var d=a.charCodeAt(b)&255;if(10==d||13==d)a=a.substring(0,b)+"?"+a.substring(b+
1)}return a};var qd,rd,sd=function(){if(!qd){var a={},b=W.navigator,c=W.screen;a.jb=c?c.width+"x"+c.height:"-";a.P=c?c.colorDepth+"-bit":"-";a.language=(b&&(b.language||b.browserLanguage)||"-").toLowerCase();a.javaEnabled=b&&b.javaEnabled()?1:0;a.characterSet=J.characterSet||J.charset||"-";try{var d;var e=J.documentElement,f=J.body,Be=f&&f.clientWidth&&f.clientHeight,b=[];e&&e.clientWidth&&e.clientHeight&&("CSS1Compat"===J.compatMode||!Be)?b=[e.clientWidth,e.clientHeight]:Be&&(b=[f.clientWidth,f.clientHeight]);
d=0>=b[0]||0>=b[1]?"":b.join("x");a.Wa=d}catch(k){H(135)}qd=a}},td=function(){sd();for(var a=qd,b=W.navigator,a=b.appName+b.version+a.language+b.platform+b.userAgent+a.javaEnabled+a.jb+a.P+(J.cookie?J.cookie:"")+(J.referrer?J.referrer:""),b=a.length,c=W.history.length;0<c;)a+=c--^b++;return Yc(a)},ud=function(a){sd();var b=qd;a.set(Lb,b.jb);a.set(Mb,b.P);a.set(Pb,b.language);a.set(Qb,b.characterSet);a.set(Nb,b.javaEnabled);a.set(Rb,b.Wa);if(a.get(ib)&&a.get(jb)){if(!(b=rd)){var c,d,e;d="ShockwaveFlash";
if((b=(b=W.navigator)?b.plugins:void 0)&&0<b.length)for(c=0;c<b.length&&!e;c++)d=b[c],-1<d.name.indexOf("Shockwave Flash")&&(e=d.description.split("Shockwave Flash ")[1]);else{d=d+"."+d;try{c=new ActiveXObject(d+".7"),e=c.GetVariable("$version")}catch(f){}if(!e)try{c=new ActiveXObject(d+".6"),e="WIN 6,0,21,0",c.AllowScriptAccess="always",e=c.GetVariable("$version")}catch(Be){}if(!e)try{c=new ActiveXObject(d),e=c.GetVariable("$version")}catch(k){}e&&(e=e.split(" ")[1].split(","),e=e[0]+"."+e[1]+" r"+
e[2])}b=e?e:"-"}rd=b;a.set(Ob,rd)}else a.set(Ob,"-")};var vd=function(a){if(Ba(a))this.s=a;else{var b=a[0],c=b.lastIndexOf(":"),d=b.lastIndexOf(".");this.h=this.i=this.l="";-1==c&&-1==d?this.h=b:-1==c&&-1!=d?(this.i=b.substring(0,d),this.h=b.substring(d+1)):-1!=c&&-1==d?(this.l=b.substring(0,c),this.h=b.substring(c+1)):c>d?(this.i=b.substring(0,d),this.l=b.substring(d+1,c),this.h=b.substring(c+1)):(this.i=b.substring(0,d),this.h=b.substring(d+1));this.Xa=a.slice(1);this.Ma=!this.l&&"_require"==this.h;this.J=!this.i&&!this.l&&"_provide"==this.h}},Y=function(){T(Y.prototype,
"push",Y.prototype.push,5);T(Y.prototype,"_getPlugin",Pc,121);T(Y.prototype,"_createAsyncTracker",Y.prototype.Sa,33);T(Y.prototype,"_getAsyncTracker",Y.prototype.Ta,34);this.I=new nf;this.eb=[]};E=Y.prototype;E.Na=function(a,b,c){var d=this.I.get(a);if(!Ba(d))return!1;b.plugins_=b.plugins_||new nf;b.plugins_.set(a,new d(b,c||{}));return!0};E.push=function(a){var b=Z.Va.apply(this,arguments),b=Z.eb.concat(b);for(Z.eb=[];0<b.length&&!Z.O(b[0])&&!(b.shift(),0<Z.eb.length););Z.eb=Z.eb.concat(b);return 0};
E.Va=function(a){for(var b=[],c=0;c<arguments.length;c++)try{var d=new vd(arguments[c]);d.J?this.O(d):b.push(d)}catch(e){}return b};
E.O=function(a){try{if(a.s)a.s.apply(W);else if(a.J)this.I.set(a.Xa[0],a.Xa[1]);else{var b="_gat"==a.i?M:"_gaq"==a.i?Z:M.u(a.i);if(a.Ma){if(!this.Na(a.Xa[0],b,a.Xa[2])){if(!a.Pa){var c=Oa(""+a.Xa[1]);var d=c.protocol,e=J.location.protocol;var f;if(f="https:"==d||d==e?!0:"http:"!=d?!1:"http:"==e)a:{var Be=Oa(J.location.href);if(!(c.Oa||0<=c.url.indexOf("?")||0<=c.path.indexOf("://")||c.host==Be.host&&c.port==Be.port))for(var k="http:"==c.protocol?80:443,Ja=M.S,b=0;b<Ja.length;b++)if(c.host==Ja[b][0]&&
(c.port||k)==(Ja[b][1]||k)&&0==c.path.indexOf(Ja[b][2])){f=!0;break a}f=!1}f&&!ld()&&(a.Pa=Ia(c.url))}return!0}}else a.l&&(b=b.plugins_.get(a.l)),b[a.h].apply(b,a.Xa)}}catch(t){}};E.Sa=function(a,b){return M.hb(a,b||"")};E.Ta=function(a){return M.u(a)};var yd=function(){function a(a,b,c,d){void 0==f[a]&&(f[a]={});void 0==f[a][b]&&(f[a][b]=[]);f[a][b][c]=d}function b(a,b,c){if(void 0!=f[a]&&void 0!=f[a][b])return f[a][b][c]}function c(a,b){if(void 0!=f[a]&&void 0!=f[a][b]){f[a][b]=void 0;var c=!0,d;for(d=0;d<Be.length;d++)if(void 0!=f[a][Be[d]]){c=!1;break}c&&(f[a]=void 0)}}function d(a){var b="",c=!1,d,e;for(d=0;d<Be.length;d++)if(e=a[Be[d]],void 0!=e){c&&(b+=Be[d]);for(var c=[],f=void 0,Bd=void 0,Bd=0;Bd<e.length;Bd++)if(void 0!=e[Bd]){f="";1!=
Bd&&void 0==e[Bd-1]&&(f+=Bd.toString()+"!");for(var fa=e[Bd],Ke="",Le=void 0,Me=void 0,ga=void 0,Le=0;Le<fa.length;Le++)Me=fa.charAt(Le),ga=k[Me],Ke+=void 0!=ga?ga:Me;f+=Ke;c.push(f)}b+="("+c.join("*")+")";c=!1}else c=!0;return b}var e=this,f=[],Be=["k","v"],k={"'":"'0",")":"'1","*":"'2","!":"'3"};e.Ra=function(a){return void 0!=f[a]};e.A=function(){for(var a="",b=0;b<f.length;b++)void 0!=f[b]&&(a+=b.toString()+d(f[b]));return a};e.Qa=function(a){if(void 0==a)return e.A();for(var b=a.A(),c=0;c<f.length;c++)void 0==
f[c]||a.Ra(c)||(b+=c.toString()+d(f[c]));return b};e.f=function(b,c,d){if(!wd(d))return!1;a(b,"k",c,d);return!0};e.o=function(b,c,d){if(!xd(d))return!1;a(b,"v",c,d.toString());return!0};e.getKey=function(a,c){return b(a,"k",c)};e.N=function(a,c){return b(a,"v",c)};e.L=function(a){c(a,"k")};e.M=function(a){c(a,"v")};T(e,"_setKey",e.f,89);T(e,"_setValue",e.o,90);T(e,"_getKey",e.getKey,87);T(e,"_getValue",e.N,88);T(e,"_clearKey",e.L,85);T(e,"_clearValue",e.M,86)};
function wd(a){return"string"==typeof a}function xd(a){return!("number"==typeof a||void 0!=Number&&a instanceof Number)||Math.round(a)!=a||isNaN(a)||Infinity==a?!1:!0};var zd=function(a){var b=W.gaGlobal;a&&!b&&(W.gaGlobal=b={});return b},Ad=function(){var a=zd(!0).hid;null==a&&(a=Ea(),zd(!0).hid=a);return a},Dd=function(a){a.set(Kb,Ad());var b=zd();if(b&&b.dh==a.get(O)){var c=b.sid;c&&(a.get(ac)?H(112):H(132),a.set(Zb,c),a.get(Sb)&&a.set(Wb,c));b=b.vid;a.get(Sb)&&b&&(b=b.split("."),a.set(Q,1*b[0]),a.set(Vb,1*b[1]))}};var Ed,Fd=function(a,b,c,d){var e=a.c(bb,""),f=a.c(P,"/");d=void 0!=d?d:a.b(cb,0);a=a.c(Wa,"");X(b,c,f,e,a,d)},Xc=function(a){var b=a.c(bb,"");a.b(O,1);var c=a.c(P,"/"),d=a.c(Wa,"");X("__utma",cd(a),c,b,d,a.get(cb));X("__utmb",dd(a),c,b,d,a.get(db));X("__utmc",""+a.b(O,1),c,b,d);var e=hd(a,!0);e?X("__utmz",e,c,b,d,a.get(eb)):X("__utmz","",c,b,"",-1);(e=fd(a,!1))?X("__utmv",e,c,b,d,a.get(cb)):X("__utmv","",c,b,"",-1)},Wc=function(a){var b=a.b(O,1);if(!bd(a,$c(b,pd("__utma"))))return a.set(Ub,!0),!1;
var c=!ed(a,$c(b,pd("__utmb")));a.set(bc,c);id(a,$c(b,pd("__utmz")));gd(a,$c(b,pd("__utmv")));Ed=!c;return!0},Gd=function(a){Ed||0<pd("__utmb").length||(X("__utmd","1",a.c(P,"/"),a.c(bb,""),a.c(Wa,""),1E4),0==pd("__utmd").length&&a.stopPropagation())};var h=0,Jd=function(a){void 0==a.get(Q)?Hd(a):a.get(Ub)&&!a.get(Mc)?Hd(a):a.get(bc)&&Id(a)},Kd=function(a){a.get(hc)&&!a.get(ac)&&(Id(a),a.set(fc,a.get($b)))},Hd=function(a){h++;1<h&&H(137);var b=a.get(ab);a.set(Sb,!0);a.set(Q,Ea()^td(a)&2147483647);a.set(Tb,"");a.set(Vb,b);a.set(Wb,b);a.set(Zb,b);a.set($b,1);a.set(ac,!0);a.set(cc,0);a.set(R,10);a.set(dc,b);a.set(Fb,[]);a.set(Ub,!1);a.set(bc,!1)},Id=function(a){h++;1<h&&H(137);a.set(Wb,a.get(Zb));a.set(Zb,a.get(ab));a.Za($b);a.set(ac,!0);a.set(cc,
0);a.set(R,10);a.set(dc,a.get(ab));a.set(bc,!1)};var Ld="daum:q eniro:search_word naver:query pchome:q images.google:q google:q yahoo:p yahoo:q msn:q bing:q aol:query aol:q lycos:q lycos:query ask:q cnn:query virgilio:qs baidu:wd baidu:word alice:qs yandex:text najdi:q seznam:q rakuten:qt biglobe:q goo.ne:MT search.smt.docomo:MT onet:qt onet:q kvasir:q terra:query rambler:query conduit:q babylon:q search-results:q avg:q comcast:q incredimail:q startsiden:q go.mail.ru:q centrum.cz:q 360.cn:q sogou:query tut.by:query globo:q ukr:q so.com:q haosou.com:q auone:q".split(" "),
Sd=function(a){if(a.get(kb)&&!a.get(Mc)){var b;b=!F(a.get(ic))||!F(a.get(nc))||!F(a.get(S))||!F(a.get(lc));for(var c={},d=0;d<Md.length;d++){var e=Md[d];c[e]=a.get(e)}(d=a.get(rc))?(H(149),e=new nf,Na(e,d),d=e):d=La(J.location.href,a.get(gb)).R;if("1"!=L(d.get(a.get(ub)))||!b)if(d=Xe(a,d)||Qd(a),d||b||!a.get(ac)||(Pd(a,void 0,"(direct)",void 0,void 0,void 0,"(direct)","(none)",void 0,void 0),d=!0),d&&(a.set(hc,Rd(a,c)),b="(direct)"==a.get(nc)&&"(direct)"==a.get(jc)&&"(none)"==a.get(oc),a.get(hc)||
a.get(ac)&&!b))a.set(ec,a.get(ab)),a.set(fc,a.get($b)),a.Za(gc)}},Xe=function(a,b){function c(c,d){d=d||"-";var e=L(b.get(a.get(c)));return e&&"-"!=e?I(e):d}var d=L(b.get(a.get(nb)))||"-",e=L(b.get(a.get(qb)))||"-",f=L(b.get(a.get(pb)))||"-",Be=L(b.get("gclsrc"))||"-",k=L(b.get("dclid"))||"-",Ja=c(ob,"(not set)"),t=c(rb,"(not set)"),Za=c(sb),Ma=c(tb);if(F(d)&&F(f)&&F(k)&&F(e))return!1;var mb=!F(f)&&!F(Be),mb=F(e)&&(!F(k)||mb),Xb=F(Za);if(mb||Xb){var Bd=Nd(a),Bd=La(Bd,!0);(Bd=Od(a,Bd))&&!F(Bd[1]&&
!Bd[2])&&(mb&&(e=Bd[0]),Xb&&(Za=Bd[1]))}Pd(a,d,e,f,Be,k,Ja,t,Za,Ma);return!0},Qd=function(a){var b=Nd(a),c=La(b,!0);(b=!(void 0!=b&&null!=b&&""!=b&&"0"!=b&&"-"!=b&&0<=b.indexOf("://")))||(b=c&&-1<c.host.indexOf("google")&&c.R.contains("q")&&"cse"==c.path);if(b)return!1;if((b=Od(a,c))&&!b[2])return Pd(a,void 0,b[0],void 0,void 0,void 0,"(organic)","organic",b[1],void 0),!0;if(b||!a.get(ac))return!1;a:{for(var b=a.get(Bb),d=Ka(c.host),e=0;e<b.length;++e)if(-1<d.indexOf(b[e])){a=!1;break a}Pd(a,void 0,
d,void 0,void 0,void 0,"(referral)","referral",void 0,"/"+c.path);a=!0}return a},Od=function(a,b){for(var c=a.get(zb),d=0;d<c.length;++d){var e=c[d].split(":");if(-1<b.host.indexOf(e[0].toLowerCase())){var f=b.R.get(e[1]);if(f&&(f=K(f),!f&&-1<b.host.indexOf("google.")&&(f="(not provided)"),!e[3]||-1<b.url.indexOf(e[3]))){f||H(151);a:{for(var c=f,d=a.get(Ab),c=I(c).toLowerCase(),Be=0;Be<d.length;++Be)if(c==d[Be]){c=!0;break a}c=!1}return[e[2]||e[0],f,c]}}}return null},Pd=function(a,b,c,d,e,f,Be,k,
Ja,t){a.set(ic,b);a.set(nc,c);a.set(S,d);a.set(kc,e);a.set(lc,f);a.set(jc,Be);a.set(oc,k);a.set(pc,Ja);a.set(qc,t)},Md=[jc,ic,S,lc,nc,oc,pc,qc],Rd=function(a,b){function c(a){a=(""+a).split("+").join("%20");return a=a.split(" ").join("%20")}function d(c){var d=""+(a.get(c)||"");c=""+(b[c]||"");return 0<d.length&&d==c}if(d(S)||d(lc))return H(131),!1;for(var e=0;e<Md.length;e++){var f=Md[e],Be=b[f]||"-",f=a.get(f)||"-";if(c(Be)!=c(f))return!0}return!1},Td=new RegExp(/^https?:\/\/(www\.)?google(\.com?)?(\.[a-z]{2}t?)?\/?$/i),
jf=/^https?:\/\/(r\.)?search\.yahoo\.com?(\.jp)?\/?[^?]*$/i,rf=/^https?:\/\/(www\.)?bing\.com\/?$/i,Nd=function(a){a=Pa(a.get(Jb),a.get(P));try{if(Td.test(a))return H(136),a+"?q=";if(jf.test(a))return H(150),a+"?p=(not provided)";if(rf.test(a))return a+"?q=(not provided)"}catch(b){H(145)}return a};var Ud,Vd,Wd=function(a){Ud=a.c(S,"");Vd=a.c(kc,"")},Xd=function(a){var b=a.c(S,""),c=a.c(kc,"");b!=Ud&&(-1<c.indexOf("ds")?a.set(mc,void 0):!F(Ud)&&-1<Vd.indexOf("ds")&&a.set(mc,Ud))};var Zd=function(a){Yd(a,J.location.href)?(a.set(Mc,!0),H(12)):a.set(Mc,!1)},Yd=function(a,b){if(!a.get(fb))return!1;var c=La(b,a.get(gb)),d=K(c.R.get("__utma")),e=K(c.R.get("__utmb")),f=K(c.R.get("__utmc")),Be=K(c.R.get("__utmx")),k=K(c.R.get("__utmz")),Ja=K(c.R.get("__utmv")),c=K(c.R.get("__utmk"));if(Yc(""+d+e+f+Be+k+Ja)!=c){d=I(d);e=I(e);f=I(f);Be=I(Be);f=$d(d+e+f+Be,k,Ja,c);if(!f)return!1;k=f[0];Ja=f[1]}if(!bd(a,d,!0))return!1;ed(a,e,!0);id(a,k,!0);gd(a,Ja,!0);ae(a,Be,!0);return!0},ce=function(a,
b,c){var d;d=cd(a)||"-";var e=dd(a)||"-",f=""+a.b(O,1)||"-",Be=be(a)||"-",k=hd(a,!1)||"-";a=fd(a,!1)||"-";var Ja=Yc(""+d+e+f+Be+k+a),t=[];t.push("__utma="+d);t.push("__utmb="+e);t.push("__utmc="+f);t.push("__utmx="+Be);t.push("__utmz="+k);t.push("__utmv="+a);t.push("__utmk="+Ja);d=t.join("&");if(!d)return b;e=b.indexOf("#");if(c)return 0>e?b+"#"+d:b+"&"+d;c="";f=b.indexOf("?");0<e&&(c=b.substring(e),b=b.substring(0,e));return 0>f?b+"?"+d+c:b+"&"+d+c},$d=function(a,b,c,d){for(var e=0;3>e;e++){for(var f=
0;3>f;f++){if(d==Yc(a+b+c))return H(127),[b,c];var Be=b.replace(/ /g,"%20"),k=c.replace(/ /g,"%20");if(d==Yc(a+Be+k))return H(128),[Be,k];Be=Be.replace(/\+/g,"%20");k=k.replace(/\+/g,"%20");if(d==Yc(a+Be+k))return H(129),[Be,k];try{var Ja=b.match("utmctr=(.*?)(?:\\|utm|$)");if(Ja&&2==Ja.length&&(Be=b.replace(Ja[1],G(I(Ja[1]))),d==Yc(a+Be+c)))return H(139),[Be,c]}catch(t){}b=I(b)}c=I(c)}};var de="|",fe=function(a,b,c,d,e,f,Be,k,Ja){var t=ee(a,b);t||(t={},a.get(Cb).push(t));t.id_=b;t.affiliation_=c;t.total_=d;t.tax_=e;t.shipping_=f;t.city_=Be;t.state_=k;t.country_=Ja;t.items_=t.items_||[];return t},ge=function(a,b,c,d,e,f,Be){a=ee(a,b)||fe(a,b,"",0,0,0,"","","");var k;a:{if(a&&a.items_){k=a.items_;for(var Ja=0;Ja<k.length;Ja++)if(k[Ja].sku_==c){k=k[Ja];break a}}k=null}Ja=k||{};Ja.transId_=b;Ja.sku_=c;Ja.name_=d;Ja.category_=e;Ja.price_=f;Ja.quantity_=Be;k||a.items_.push(Ja);return Ja},
ee=function(a,b){for(var c=a.get(Cb),d=0;d<c.length;d++)if(c[d].id_==b)return c[d];return null};var he,ie=function(a){if(!he){var b;b=J.location.hash;var c=W.name,d=/^#?gaso=([^&]*)/;if(c=(b=(b=b&&b.match(d)||c&&c.match(d))?b[1]:K(pd("GASO")))&&b.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i))Fd(a,"GASO",""+b,0),M._gasoDomain=a.get(bb),M._gasoCPath=a.get(P),a=c[1],Ia("https://www.google.com/analytics/web/inpage/pub/inpage.js?"+(a?"prefix="+a+"&":"")+Ea(),"_gasojs");he=!0}};var ae=function(a,b,c){c&&(b=I(b));c=a.b(O,1);b=b.split(".");2>b.length||!/^\d+$/.test(b[0])||(b[0]=""+c,Fd(a,"__utmx",b.join("."),void 0))},be=function(a,b){var c=$c(a.get(O),pd("__utmx"));"-"==c&&(c="");return b?G(c):c},Ye=function(a){try{var b=La(J.location.href,!1),c=decodeURIComponent(L(b.R.get("utm_referrer")))||"";c&&a.set(Jb,c);var d=decodeURIComponent(K(b.R.get("utm_expid")))||"";d&&(d=d.split(".")[0],a.set(Oc,""+d))}catch(e){H(146)}},l=function(a){var b=W.gaData&&W.gaData.expId;b&&a.set(Oc,
""+b)};var ke=function(a,b){var c=Math.min(a.b(Dc,0),100);if(a.b(Q,0)%100>=c)return!1;c=Ze()||$e();if(void 0==c)return!1;var d=c[0];if(void 0==d||Infinity==d||isNaN(d))return!1;0<d?af(c)?b(je(c)):b(je(c.slice(0,1))):Ga(W,"load",function(){ke(a,b)},!1);return!0},me=function(a,b,c,d){var e=new yd;e.f(14,90,b.substring(0,500));e.f(14,91,a.substring(0,150));e.f(14,92,""+le(c));void 0!=d&&e.f(14,93,d.substring(0,500));e.o(14,90,c);return e},af=function(a){for(var b=1;b<a.length;b++)if(isNaN(a[b])||Infinity==
a[b]||0>a[b])return!1;return!0},le=function(a){return isNaN(a)||0>a?0:5E3>a?10*Math.floor(a/10):5E4>a?100*Math.floor(a/100):41E5>a?1E3*Math.floor(a/1E3):41E5},je=function(a){for(var b=new yd,c=0;c<a.length;c++)b.f(14,c+1,""+le(a[c])),b.o(14,c+1,a[c]);return b},Ze=function(){var a=W.performance||W.webkitPerformance;if(a=a&&a.timing){var b=a.navigationStart;if(0==b)H(133);else return[a.loadEventStart-b,a.domainLookupEnd-a.domainLookupStart,a.connectEnd-a.connectStart,a.responseStart-a.requestStart,
a.responseEnd-a.responseStart,a.fetchStart-b,a.domInteractive-b,a.domContentLoadedEventStart-b]}},$e=function(){if(W.top==W){var a=W.external,b=a&&a.onloadT;a&&!a.isValidLoadTime&&(b=void 0);2147483648<b&&(b=void 0);0<b&&a.setPageReadyTime();return void 0==b?void 0:[b]}};var cf=function(a){if(a.get(Sb))try{var b;a:{var c=pd(a.get(Oe)||"_ga");if(c&&!(1>c.length)){for(var d=[],e=0;e<c.length;e++){var f;var Be=c[e].split("."),k=Be.shift();if(("GA1"==k||"1"==k)&&1<Be.length){var Ja=Be.shift().split("-");1==Ja.length&&(Ja[1]="1");Ja[0]*=1;Ja[1]*=1;f={Ya:Ja,$a:Be.join(".")}}else f=void 0;f&&d.push(f)}if(1==d.length){b=d[0].$a;break a}if(0!=d.length){var t=a.get(Pe)||a.get(bb),d=bf(d,(0==t.indexOf(".")?t.substr(1):t).split(".").length,0);if(1==d.length){b=d[0].$a;break a}var Za=
a.get(Qe)||a.get(P);(c=Za)?(1<c.length&&"/"==c.charAt(c.length-1)&&(c=c.substr(0,c.length-1)),0!=c.indexOf("/")&&(c="/"+c),Za=c):Za="/";d=bf(d,"/"==Za?1:Za.split("/").length,1);b=d[0].$a;break a}}b=void 0}if(b){var Ma=(""+b).split(".");2==Ma.length&&/[0-9.]/.test(Ma)&&(H(114),a.set(Q,Ma[0]),a.set(Vb,Ma[1]),a.set(Sb,!1))}}catch(mb){H(115)}},bf=function(a,b,c){for(var d=[],e=[],f=128,Be=0;Be<a.length;Be++){var k=a[Be];k.Ya[c]==b?d.push(k):k.Ya[c]==f?e.push(k):k.Ya[c]<f&&(e=[k],f=k.Ya[c])}return 0<d.length?
d:e};var kf=/^gtm\d+$/,hf=function(a){var b;b=!!a.b(Cd,1);b&&(H(140),"page"!=a.get(sc)?a.set(Kc,"",!0):(b=a.c(Lc,""),b||(b=(b=a.c($a,""))&&"~0"!=b?kf.test(b)?"__utmt_"+G(a.c(Wa,"")):"__utmt_"+G(b):"__utmt"),0<pd(b).length?a.set(Kc,"",!0):(X(b,"1",a.c(P,"/"),a.c(bb,""),a.c(Wa,""),6E5),0<pd(b).length&&(a.set(Kc,Ea(),!0),a.set(Yb,1,!0),a.set(Jc,Ne()+"/r/__utm.gif?",!0)))))};var U=function(a,b,c){function d(a){return function(b){if((b=b.get(Nc)[a])&&b.length)for(var c=Te(e,a),d=0;d<b.length;d++)b[d].call(e,c)}}var e=this;this.a=new Zc;this.get=function(a){return this.a.get(a)};this.set=function(a,b,c){this.a.set(a,b,c)};this.set(Wa,b||"UA-XXXXX-X");this.set($a,a||"");this.set(Ya,c||"");this.set(ab,Math.round((new Date).getTime()/1E3));this.set(P,"/");this.set(cb,63072E6);this.set(eb,15768E6);this.set(db,18E5);this.set(fb,!1);this.set(yb,50);this.set(gb,!1);this.set(hb,
!0);this.set(ib,!0);this.set(jb,!0);this.set(kb,!0);this.set(lb,!0);this.set(ob,"utm_campaign");this.set(nb,"utm_id");this.set(pb,"gclid");this.set(qb,"utm_source");this.set(rb,"utm_medium");this.set(sb,"utm_term");this.set(tb,"utm_content");this.set(ub,"utm_nooverride");this.set(vb,100);this.set(Dc,1);this.set(Ec,!1);this.set(wb,"/__utm.gif");this.set(xb,1);this.set(Cb,[]);this.set(Fb,[]);this.set(zb,Ld.slice(0));this.set(Ab,[]);this.set(Bb,[]);this.B("auto");this.set(Jb,J.referrer);Ye(this.a);this.set(Nc,
{hit:[],load:[]});this.a.g("0",Zd);this.a.g("1",Wd);this.a.g("2",Jd);this.a.g("3",cf);this.a.g("4",Sd);this.a.g("5",Xd);this.a.g("6",Kd);this.a.g("7",d("load"));this.a.g("8",ie);this.a.v("A",kd);this.a.v("B",md);this.a.v("C",Ge);this.a.v("D",Jd);this.a.v("E",jd);this.a.v("F",Tc);this.a.v("G",ne);this.a.v("H",lf);this.a.v("I",Gd);this.a.v("J",nd);this.a.v("K",ud);this.a.v("L",Dd);this.a.v("M",l);this.a.v("N",hf);this.a.v("O",d("hit"));this.a.v("P",oe);this.a.v("Q",pe);0===this.get(ab)&&H(111);this.a.T();
this.H=void 0};E=U.prototype;E.m=function(){var a=this.get(Db);a||(a=new yd,this.set(Db,a));return a};E.La=function(a){for(var b in a){var c=a[b];a.hasOwnProperty(b)&&this.set(b,c,!0)}};E.K=function(a){if(this.get(Ec))return!1;var b=this,c=ke(this.a,function(c){b.set(Hb,a,!0);b.ib(c)});this.set(Ec,c);return c};E.Fa=function(a){a&&Ca(a)?(H(13),this.set(Hb,a,!0)):"object"===typeof a&&null!==a&&this.La(a);this.H=a=this.get(Hb);this.a.j("page");this.K(a)};
E.F=function(a,b,c,d,e){if(""==a||!wd(a)||""==b||!wd(b)||void 0!=c&&!wd(c)||void 0!=d&&!xd(d))return!1;this.set(wc,a,!0);this.set(xc,b,!0);this.set(yc,c,!0);this.set(zc,d,!0);this.set(vc,!!e,!0);this.a.j("event");return!0};E.Ha=function(a,b,c,d,e){var f=this.a.b(Dc,0);1*e===e&&(f=e);if(this.a.b(Q,0)%100>=f)return!1;c=1*(""+c);if(""==a||!wd(a)||""==b||!wd(b)||!xd(c)||isNaN(c)||0>c||0>f||100<f||void 0!=d&&(""==d||!wd(d)))return!1;this.ib(me(a,b,c,d));return!0};
E.Ga=function(a,b,c,d){if(!a||!b)return!1;this.set(Ac,a,!0);this.set(Bc,b,!0);this.set(Cc,c||J.location.href,!0);d&&this.set(Hb,d,!0);this.a.j("social");return!0};E.Ea=function(){this.set(Dc,10);this.K(this.H)};E.Ia=function(){this.a.j("trans")};E.ib=function(a){this.set(Eb,a,!0);this.a.j("event")};E.ia=function(a){this.initData();var b=this;return{_trackEvent:function(c,d,e){H(91);b.F(a,c,d,e)}}};E.ma=function(a){return this.get(a)};
E.xa=function(a,b){if(a)if(Ca(a))this.set(a,b);else if("object"==typeof a)for(var c in a)a.hasOwnProperty(c)&&this.set(c,a[c])};E.addEventListener=function(a,b){var c=this.get(Nc)[a];c&&c.push(b)};E.removeEventListener=function(a,b){for(var c=this.get(Nc)[a],d=0;c&&d<c.length;d++)if(c[d]==b){c.splice(d,1);break}};E.qa=function(){return"5.6.7"};E.B=function(a){this.get(hb);a="auto"==a?Ka(J.domain):a&&"-"!=a&&"none"!=a?a.toLowerCase():"";this.set(bb,a)};E.va=function(a){this.set(hb,!!a)};
E.na=function(a,b){return ce(this.a,a,b)};E.link=function(a,b){if(this.a.get(fb)&&a){var c=ce(this.a,a,b);J.location.href=c}};E.ua=function(a,b){this.a.get(fb)&&a&&a.action&&(a.action=ce(this.a,a.action,b))};
E.za=function(){this.initData();var a=this.a,b=J.getElementById?J.getElementById("utmtrans"):J.utmform&&J.utmform.utmtrans?J.utmform.utmtrans:null;if(b&&b.value){a.set(Cb,[]);for(var b=b.value.split("UTM:"),c=0;c<b.length;c++){b[c]=Da(b[c]);for(var d=b[c].split(de),e=0;e<d.length;e++)d[e]=Da(d[e]);"T"==d[0]?fe(a,d[1],d[2],d[3],d[4],d[5],d[6],d[7],d[8]):"I"==d[0]&&ge(a,d[1],d[2],d[3],d[4],d[5],d[6])}}};E.$=function(a,b,c,d,e,f,Be,k){return fe(this.a,a,b,c,d,e,f,Be,k)};
E.Y=function(a,b,c,d,e,f){return ge(this.a,a,b,c,d,e,f)};E.Aa=function(a){de=a||"|"};E.ea=function(){this.set(Cb,[])};E.wa=function(a,b,c,d){var e=this.a;if(0>=a||a>e.get(yb))a=!1;else if(!b||!c||128<b.length+c.length)a=!1;else{1!=d&&2!=d&&(d=3);var f={};f.name=b;f.value=c;f.scope=d;e.get(Fb)[a]=f;a=!0}a&&this.a.gb();return a};E.ka=function(a){this.a.get(Fb)[a]=void 0;this.a.gb()};E.ra=function(a){return(a=this.a.get(Fb)[a])&&1==a.scope?a.value:void 0};
E.Ca=function(a,b,c){12==a&&1==b?this.set(pf,c):this.m().f(a,b,c)};E.Da=function(a,b,c){this.m().o(a,b,c)};E.sa=function(a,b){return this.m().getKey(a,b)};E.ta=function(a,b){return this.m().N(a,b)};E.fa=function(a){this.m().L(a)};E.ga=function(a){this.m().M(a)};E.ja=function(){return new yd};E.W=function(a){a&&this.get(Ab).push(a.toLowerCase())};E.ba=function(){this.set(Ab,[])};E.X=function(a){a&&this.get(Bb).push(a.toLowerCase())};E.ca=function(){this.set(Bb,[])};
E.Z=function(a,b,c,d,e){if(a&&b){a=[a,b.toLowerCase()].join(":");if(d||e)a=[a,d,e].join(":");d=this.get(zb);d.splice(c?0:d.length,0,a)}};E.da=function(){this.set(zb,[])};E.ha=function(a){this.a.load();var b=this.get(P),c=be(this.a);this.set(P,a);this.a.gb();ae(this.a,c);this.set(P,b)};E.ya=function(a,b){if(0<a&&5>=a&&Ca(b)&&""!=b){var c=this.get(Fc)||[];c[a]=b;this.set(Fc,c)}};E.V=function(a){a=""+a;if(a.match(/^[A-Za-z0-9]{1,5}$/)){var b=this.get(Ic)||[];b.push(a);this.set(Ic,b)}};E.initData=function(){this.a.load()};
E.Ba=function(a){a&&""!=a&&(this.set(Tb,a),this.a.j("var"))};var ne=function(a){"trans"!==a.get(sc)&&500<=a.b(cc,0)&&a.stopPropagation();if("event"===a.get(sc)){var b=(new Date).getTime(),c=a.b(dc,0),d=a.b(Zb,0),c=Math.floor((b-(c!=d?c:1E3*c))/1E3*1);0<c&&(a.set(dc,b),a.set(R,Math.min(10,a.b(R,0)+c)));0>=a.b(R,0)&&a.stopPropagation()}},pe=function(a){"event"===a.get(sc)&&a.set(R,Math.max(0,a.b(R,10)-1))};var qe=function(){var a=[];this.add=function(b,c,d){d&&(c=G(""+c));a.push(b+"="+c)};this.toString=function(){return a.join("&")}},re=function(a,b){(b||2!=a.get(xb))&&a.Za(cc)},se=function(a,b){b.add("utmwv","5.6.7");b.add("utms",a.get(cc));b.add("utmn",Ea());var c=J.location.hostname;F(c)||b.add("utmhn",c,!0);c=a.get(vb);100!=c&&b.add("utmsp",c,!0)},te=function(a,b){b.add("utmht",(new Date).getTime());b.add("utmac",Da(a.get(Wa)));a.get(Oc)&&b.add("utmxkey",a.get(Oc),!0);a.get(vc)&&b.add("utmni",1);
a.get(of)&&b.add("utmgtm",a.get(of),!0);var c=a.get(Ic);c&&0<c.length&&b.add("utmdid",c.join("."));ff(a,b);!1!==a.get(Xa)&&(a.get(Xa)||M.w)&&b.add("aip",1);void 0!==a.get(Kc)&&b.add("utmjid",a.c(Kc,""),!0);a.b(Yb,0)&&b.add("utmredir",a.b(Yb,0),!0);M.bb||(M.bb=a.get(Wa));(1<M.ab()||M.bb!=a.get(Wa))&&b.add("utmmt",1);b.add("utmu",od.encode())},ue=function(a,b){for(var c=a.get(Fc)||[],d=[],e=1;e<c.length;e++)c[e]&&d.push(e+":"+G(c[e].replace(/%/g,"%25").replace(/:/g,"%3A").replace(/,/g,"%2C")));d.length&&
b.add("utmpg",d.join(","))},ff=function(a,b){function c(a,b){b&&d.push(a+"="+b+";")}var d=[];c("__utma",cd(a));c("__utmz",hd(a,!1));c("__utmv",fd(a,!0));c("__utmx",be(a));b.add("utmcc",d.join("+"),!0)},ve=function(a,b){a.get(ib)&&(b.add("utmcs",a.get(Qb),!0),b.add("utmsr",a.get(Lb)),a.get(Rb)&&b.add("utmvp",a.get(Rb)),b.add("utmsc",a.get(Mb)),b.add("utmul",a.get(Pb)),b.add("utmje",a.get(Nb)),b.add("utmfl",a.get(Ob),!0))},we=function(a,b){a.get(lb)&&a.get(Ib)&&b.add("utmdt",a.get(Ib),!0);b.add("utmhid",
a.get(Kb));b.add("utmr",Pa(a.get(Jb),a.get(P)),!0);b.add("utmp",G(a.get(Hb),!0),!0)},xe=function(a,b){for(var c=a.get(Db),d=a.get(Eb),e=a.get(Fb)||[],f=0;f<e.length;f++){var Be=e[f];Be&&(c||(c=new yd),c.f(8,f,Be.name),c.f(9,f,Be.value),3!=Be.scope&&c.f(11,f,""+Be.scope))}F(a.get(wc))||F(a.get(xc),!0)||(c||(c=new yd),c.f(5,1,a.get(wc)),c.f(5,2,a.get(xc)),e=a.get(yc),void 0!=e&&c.f(5,3,e),e=a.get(zc),void 0!=e&&c.o(5,1,e));F(a.get(pf))||(c||(c=new yd),c.f(12,1,a.get(pf)));c?b.add("utme",c.Qa(d),!0):
d&&b.add("utme",d.A(),!0)},ye=function(a,b,c){var d=new qe;re(a,c);se(a,d);d.add("utmt","tran");d.add("utmtid",b.id_,!0);d.add("utmtst",b.affiliation_,!0);d.add("utmtto",b.total_,!0);d.add("utmttx",b.tax_,!0);d.add("utmtsp",b.shipping_,!0);d.add("utmtci",b.city_,!0);d.add("utmtrg",b.state_,!0);d.add("utmtco",b.country_,!0);xe(a,d);ve(a,d);we(a,d);(b=a.get(Gb))&&d.add("utmcu",b,!0);c||(ue(a,d),te(a,d));return d.toString()},ze=function(a,b,c){var d=new qe;re(a,c);se(a,d);d.add("utmt","item");d.add("utmtid",
b.transId_,!0);d.add("utmipc",b.sku_,!0);d.add("utmipn",b.name_,!0);d.add("utmiva",b.category_,!0);d.add("utmipr",b.price_,!0);d.add("utmiqt",b.quantity_,!0);xe(a,d);ve(a,d);we(a,d);(b=a.get(Gb))&&d.add("utmcu",b,!0);c||(ue(a,d),te(a,d));return d.toString()},Ae=function(a,b){var c=a.get(sc);if("page"==c)c=new qe,re(a,b),se(a,c),xe(a,c),ve(a,c),we(a,c),b||(ue(a,c),te(a,c)),c=[c.toString()];else if("event"==c)c=new qe,re(a,b),se(a,c),c.add("utmt","event"),xe(a,c),ve(a,c),we(a,c),b||(ue(a,c),te(a,c)),
c=[c.toString()];else if("var"==c)c=new qe,re(a,b),se(a,c),c.add("utmt","var"),!b&&te(a,c),c=[c.toString()];else if("trans"==c)for(var c=[],d=a.get(Cb),e=0;e<d.length;++e){c.push(ye(a,d[e],b));for(var f=d[e].items_,Be=0;Be<f.length;++Be)c.push(ze(a,f[Be],b))}else"social"==c?b?c=[]:(c=new qe,re(a,b),se(a,c),c.add("utmt","social"),c.add("utmsn",a.get(Ac),!0),c.add("utmsa",a.get(Bc),!0),c.add("utmsid",a.get(Cc),!0),xe(a,c),ve(a,c),we(a,c),ue(a,c),te(a,c),c=[c.toString()]):"feedback"==c?b?c=[]:(c=new qe,
re(a,b),se(a,c),c.add("utmt","feedback"),c.add("utmfbid",a.get(Gc),!0),c.add("utmfbpr",a.get(Hc),!0),xe(a,c),ve(a,c),we(a,c),ue(a,c),te(a,c),c=[c.toString()]):c=[];return c},oe=function(a){var b,c=a.get(xb),d=a.get(uc),e=d&&d.Ua,f=0;if(0==c||2==c){var Be=a.get(wb)+"?";b=Ae(a,!0);for(var k=0,Ja=b.length;k<Ja;k++)Sa(b[k],e,Be,!0),f++}if(1==c||2==c)for(b=Ae(a),a=a.c(Jc,""),k=0,Ja=b.length;k<Ja;k++)try{Sa(b[k],e,a),f++}catch(t){t&&Ra(t.name,void 0,t.message)}d&&(d.fb=f)};var Ne=function(){return"https:"==J.location.protocol||M.G?"https://ssl.google-analytics.com":"//www.google-analytics.com"},Ce=function(a){this.name="len";this.message=a+"-8192"},De=function(a){this.name="ff2post";this.message=a+"-2036"},Sa=function(a,b,c,d){b=b||Fa;if(d||2036>=a.length)gf(a,b,c);else if(8192>=a.length){if(0<=W.navigator.userAgent.indexOf("Firefox")&&![].reduce)throw new De(a.length);df(a,b)||ef(a,b)||Ee(a,b)||b()}else throw new Ce(a.length);},gf=function(a,b,c){c=c||Ne()+"/__utm.gif?";
var d=new Image(1,1);d.src=c+a;d.onload=function(){d.onload=null;d.onerror=null;b()};d.onerror=function(){d.onload=null;d.onerror=null;b()}},ef=function(a,b){if(0!=Ne().indexOf(J.location.protocol))return!1;var c;c=W.XDomainRequest;if(!c)return!1;c=new c;c.open("POST",Ne()+"/p/__utm.gif");c.onerror=function(){b()};c.onload=b;c.send(a);return!0},df=function(a,b){var c=W.XMLHttpRequest;if(!c)return!1;var d=new c;if(!("withCredentials"in d))return!1;d.open("POST",Ne()+"/p/__utm.gif",!0);d.withCredentials=
!0;d.setRequestHeader("Content-Type","text/plain");d.onreadystatechange=function(){4==d.readyState&&(b(),d=null)};d.send(a);return!0},Ee=function(a,b){if(!J.body)return We(function(){Ee(a,b)},100),!0;a=encodeURIComponent(a);try{var c=J.createElement('<iframe name="'+a+'"></iframe>')}catch(d){c=J.createElement("iframe"),c.name=a}c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var e=Ne()+"/u/post_iframe.html";Ga(W,"beforeunload",function(){c.src="";c.parentNode&&c.parentNode.removeChild(c)});
setTimeout(b,1E3);J.body.appendChild(c);c.src=e;return!0};var qf=function(){this.G=this.w=!1;0==Ea()%1E4&&(H(142),this.G=!0);this.C={};this.D=[];this.U=0;this.S=[["www.google-analytics.com","","/plugins/"]];this._gasoCPath=this._gasoDomain=this.bb=void 0;Re();Se()};E=qf.prototype;E.oa=function(a,b){return this.hb(a,void 0,b)};E.hb=function(a,b,c){b&&H(23);c&&H(67);void 0==b&&(b="~"+M.U++);a=new U(b,a,c);M.C[b]=a;M.D.push(a);return a};E.u=function(a){a=a||"";return M.C[a]||M.hb(void 0,a)};E.pa=function(){return M.D.slice(0)};E.ab=function(){return M.D.length};
E.aa=function(){this.w=!0};E.la=function(){this.G=!0};var Fe=function(a){if("prerender"==J.visibilityState)return!1;a();return!0};var M=new qf;var Ha=W._gat;Ha&&Ba(Ha._getTracker)?M=Ha:W._gat=M;var Z=new Y;(function(a){if(!Fe(a)){H(123);var b=!1,c=function(){if(!b&&Fe(a)){b=!0;var d=J,e=c;d.removeEventListener?d.removeEventListener("visibilitychange",e,!1):d.detachEvent&&d.detachEvent("onvisibilitychange",e)}};Ga(J,"visibilitychange",c)}})(function(){var a=W._gaq,b=!1;if(a&&Ba(a.push)&&(b="[object Array]"==Object.prototype.toString.call(Object(a)),!b)){Z=a;return}W._gaq=Z;b&&Z.push.apply(Z,a)});function Yc(a){var b=1,c=0,d;if(a)for(b=0,d=a.length-1;0<=d;d--)c=a.charCodeAt(d),b=(b<<6&268435455)+c+(c<<14),c=b&266338304,b=0!=c?b^c>>21:b;return b};})();




// app导流

var GuideFlowUtils = {
  domain: window.location.href,
  ua: window.navigator.userAgent,
  raTrack: window._RATrack,
  regH5: /^(https?:\/\/)?m.qyer.com/gi,
  regOther: /qyer|lastminute|qyer-guideapp|planer|MicroMessenger|Weibo/gi,
  setCookie: function(name, value) {
    var exp = new Date();
    exp.setTime(exp.getTime() + 12 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + "; path=/;domain=.qyer.com" + ";expires=" + exp.toUTCString();
    exp = null;
  },
  getCookie: function(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]);
    return null;
  }
}

GuideFlowUtils.cookie = GuideFlowUtils.getCookie('GuideFlow');
GuideFlowUtils.isH5 = GuideFlowUtils.regH5.test(GuideFlowUtils.domain)

// 只在指定页面显示，目的地国家/城市/poi详情页，帖子详情页，问答详情页
GuideFlowUtils.isShowGuideFlow = (function () {
  var show = false;
  // place国家/城市/poi
  // if (GuideFlowUtils.raTrack.ugc_type.match(/^place_(poi|city|country)$/)) {
  //   show = true
  // }

  // 帖子详情页
  // if (GuideFlowUtils.domain.match(/^(https?:\/\/)?(bbs\.qyer\.com|m\.qyer\.com\/bbs)\/thread-\d+-\d+\.html/)) {
  //   show = true
  // }

  // 问答详情页
  if (GuideFlowUtils.domain.match(/^(https?:\/\/)?ask\.qyer\.com\/question\/\d+\.html/)) {
    show = true
  }

  return show
})()

function webGuideFlow() {
  this.id = 'webGuideFlowLayer';
  this.className = 'web-guide-flow-layer';
  if (GuideFlowUtils.cookie) {
    this.className += ' guide-flow-layer-fold';
  }
  this.dom = null;
  // 折叠样式, true 折叠，false 展开
  this.fold = GuideFlowUtils.cookie ? true : false;
}

webGuideFlow.prototype = {
  getStyleInner: function() {
    return [
      '.web-guide-flow-layer { position: fixed; z-index: 1000; left: 0; bottom: 0; background: rgba(255, 255, 255, 1); width: 100%; height: 160px; font-family: "PingFang SC", "Helvetica Neue", Helvetica, "Avenir Next", Avenir, "Lantinghei SC", "Hiragino Sans GB", "Microsoft YaHei", 微软雅黑, STHeiti, "WenQuanYi Micro Hei", SimSun, sans-serif;}',
      '.guide-flow-wrapper { width: 100%;height: 160px; background: #fff;box-shadow: 0 0 5px rgba(0,0,0,.08);border-top: 1px solid rgba(0,0,0,.08);}',
      '.guide-flow-section { position: relative; width: 1452px;height: 160px;margin: 0 auto;}',
      '.guide-flow-close { position: absolute; z-index: 10; right: 10px;top: 10px;width: 30px;background: url(http://static.qyer.com/qyer_ui_frame/m/img/web-close.png) center center no-repeat;height: 30px;}',
      '.guide-flow-text { /*padding-right: 110px;*/ background: url(//fes.qyerstatic.com/FmsT6rDBopsGlEC5MM0wQbaGLkpc) 0 center / contain no-repeat;height: 160px;}',
      '.guide-flow-text a { display: block; width: 100%; height: 100%;}',
      '.guide-flow-text1 { display: none; font-size: 18px;}',
      '.guide-flow-text1 span { font-weight: bold;}',
      '.guide-flow-text2 { display: none; font-size: 34px;}',
      '.guide-flow-qrcode { display: none; position: absolute;right: 0;top: 25px;width: 90px;font-size: 15px;padding-top: 96px;text-align: center;background: url(http://static.qyer.com/qyer_ui_frame/m/img/qrcode.png) center 0 / contain no-repeat;}',
      '.guide-flow-dock { display: none;position: absolute;left:20px;cursor: pointer;bottom:20px;width: 118px;height: 152px;border-radius: 6px;box-shadow: 0 4px 15px rgba(0,0,0,0.1);background: url(//fes.qyerstatic.com/FsOxDNXLwH5RglW7pFWV_VznMjBY) 0 0 / contain no-repeat;}',
      '.web-guide-flow-layer.guide-flow-layer-fold { width: 0;}',
      '.web-guide-flow-layer.guide-flow-layer-fold .guide-flow-wrapper { display: none;}',
      '.web-guide-flow-layer.guide-flow-layer-fold .guide-flow-dock { display: block;}'
    ].join('')
  },
  getInner: function() {
    return [
      '<div class="guide-flow-wrapper">',
        '<a href="javascript:;" class="web-guide-flow-close guide-flow-close"></a>',
        '<div class="guide-flow-section">',
          '<div class="guide-flow-text">',
            '<a href="//bbs.qyer.com/thread-2936827-1.html" target="_blank">',
              '<p class="guide-flow-text1"><span>穷游App 8.0</span> | 旅途永无穷尽</p>',
              '<p class="guide-flow-text2">让全新穷游App陪你一起出发</p>',
            '</a>',
          '</div>',
          '<div class="guide-flow-qrcode">免费扫码下载</div>',
        '</div>',
      '</div>',
      '<div class="guide-flow-dock"></div>'
    ].join('')
  },
  bindEvent: function() {
    var _this = this;
    var className = ' guide-flow-layer-fold';
    this.dom = document.querySelector('#' + this.id);
    this.dom.querySelector('.guide-flow-close').addEventListener('click', function() {
      _this.dom.className += className;
      GuideFlowUtils.setCookie('GuideFlow', '1');
    });
    this.dom.querySelector('.guide-flow-dock').addEventListener('click', function() {
      _this.dom.className = _this.dom.className.replace(className, '');
    })
  }
}

function h5GuideFlow() {
  this.id = 'h5GuideFlowLayer';
  this.className = 'h5-guide-flow-layer';
  this.dom = null;
}

h5GuideFlow.prototype = {
  getStyleInner: function() {
    return [
      '.h5-guide-flow-layer { position: fixed; z-index: 1000; top: 0; left: 0; background: rgba(255,255,255,.98); width: 100%; height: 100%;font-family: "PingFang SC", "Helvetica Neue", Helvetica, "Avenir Next", Avenir, "Lantinghei SC", "Hiragino Sans GB", "Microsoft YaHei", 微软雅黑, STHeiti, "WenQuanYi Micro Hei", SimSun, sans-serif;}',
      '.h5-guide-flow-close { position: absolute;right: 15px;width: 15px;height: 15px;top: 15px;overflow: hidden;background: url(//static.qyer.com/qyer_ui_frame/m/img/ic_close.png) center center / contain no-repeat;}',
      '.guide-flow-logo { position: absolute;top: 11px;height: 30px;line-height: 30px;left: 15px;}',
      '.guide-flow-logo img { width: 30px;vertical-align: top;height: 30px;}',
      '.guide-flow-logo span { margin-left: 7px; font-weight: bold;}',
      '.guide-flow-title { margin-top: 70px;width: 100%;height: 232px;background: url(//static.qyer.com/qyer_ui_frame/m/img/h5-8.0.png) center center / contain no-repeat;font-size: 40px;}',
      '.guide-flow-title p { display: none;}',
      '.guide-flow-list { margin-top: 10px; padding: 0 38px;}',
      '.guide-flow-list ul { list-style: none;padding: 10px 0;margin: 0;border: 1px solid rgba(0, 0, 0, 0.8);border-width: 1px 0;height: 60px;}',
      '.guide-flow-list ul li { float: left; width: 50%;height: 30px;line-height: 30px; font-size: 14px; opacity: .8;}',
      '.guide-flow-list ul li:before { content: "";display: inline-block;vertical-align: top;width: 3px;height: 3px;border-radius: 50%;margin-top: 14px;margin-right: 7px;line-height: 30px;background: #000;}',
      '.guide-flow-list ul li:nth-child(2n) { text-align: right;}',
      '.guide-flow-buttons { position: absolute;padding: 0 34px;width: 100%;bottom: 35px;box-sizing: border-box;background: #fff;}',
      '.guide-flow-buttons .guide-flow-btn { display: block;text-decoration: none; color: #11BF79;background: #fff;box-sizing: border-box;border-radius: 30px;border: 1px solid #11BF79;height: 50px;width: 100%;font-size: 16px;margin-top: 10px;line-height: 49px;text-align: center;}',
      '.guide-flow-buttons .guide-flow-btn-green {margin-top: 0; background: #11BF79;font-weight: bold; color: #FFF;}',
      '.guide-flow-buttons .guide-flow-btn-green span { display: inline-block;border: 6px solid #fff;border-color: transparent transparent transparent #fff;margin-left: 8px; border-left-width: 10px;}',
      '.guide-flow-buttons .guide-flow-btn-green em {font-style: normal;color: #fff;}',
      '@media screen and (max-height: 480px) { .guide-flow-list {display: none;}}'
    ].join('');
  },
  getInner: function() {
    return [
      '<a class="h5-guide-flow-close guide-flow-close"></a>',
      '<div class="guide-flow-logo"><img src="//static.qyer.com/qyer_ui_frame/m/img/logo.png"><span>穷游App 8.0</span></div>',
      '<div class="guide-flow-title">',
        '<p>下载全新穷游App</p>',
        '<p>解锁完整功能</p>',
      '</div>',
      '<div class="guide-flow-list">',
        '<ul>',
          '<li>全球景点信息宝库</li>',
          '<li>每日甩单特价机酒</li>',
          '<li>最会玩的旅行达人</li>',
          '<li>航旅签证干货大全</li>',
        '</ul>',
      '</div>',
      '<div class="guide-flow-buttons">',
        '<a href="//www.qyer.com/getapp/guide?campaign=app_share_qy&category=z64" class="guide-flow-btn guide-flow-btn-green">用穷游App 8.0 打开 <span></span></a>',
        '<a class="guide-flow-btn guide-flow-close">继续浏览</a>',
      '</div>'
    ].join('');
  },
  bindEvent: function() {
    var _this = this;
    this.dom = document.querySelector('#' + this.id);
    var close = this.dom.querySelectorAll('.guide-flow-close');
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener('click', function() {
        _this.dom.style.display = 'none';
        GuideFlowUtils.setCookie('GuideFlow', '1');
      })
    }
  }
}

function GuideFlow(guideFlowType) {
  this.guideFlowType = guideFlowType || 'web';
  this.guideFlow = null;
  this.init()
}

GuideFlow.prototype = {
  init: function() {
    if (this.guideFlowType === 'web') {
      this.guideFlow = new webGuideFlow();
    } else {
      this.guideFlow = new h5GuideFlow();
    }

    this.renderHtml();
    this.guideFlow.bindEvent();
  },
  renderHtml: function() {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = this.guideFlow.getStyleInner();
    document.getElementsByTagName('head')[0].appendChild(style);

    var guide = document.createElement('div');
    guide.id = this.guideFlow.id;
    guide.className = this.guideFlow.className;
    guide.innerHTML = this.guideFlow.getInner();
    document.getElementsByTagName('body')[0].appendChild(guide);
  }
}

var beginDate = new Date(2018, 3, 9)
var endDate = new Date(2018, 3, 17)
var nowDate = new Date()

// 指定页面显示
if (GuideFlowUtils.isShowGuideFlow && (nowDate > beginDate && nowDate < endDate)) {
  // 区分h5、web
  if (GuideFlowUtils.isH5) {
    // 不在第三发打开、没有记录cookie
    // if (!GuideFlowUtils.regOther.test(GuideFlowUtils.ua) && !GuideFlowUtils.cookie) {
    //   new GuideFlow('h5');
    // }
  } else {
    new GuideFlow('web');
  }
}
