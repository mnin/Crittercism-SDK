if(typeof(KM)=='undefined'){var KM_KEY="a4b875e887a4d765e6b86e30df931e8d9904a9ab";KM_SKIP_PAGE_VIEW=1;var KM={_i:null,dr:false,rq:[],td:"http://trk.kissmetrics.com",tds:"https://trk.kissmetrics.com",fsu:"http://doug1izaerwt3.cloudfront.net/fs.swf",fsus:"https://doug1izaerwt3.cloudfront.net/fs.swf",dbd:"http://www.kissmetrics.com/debugger.msg",lc:{},cp:"km_"};KM.browser=(function(){var a=navigator.userAgent;if(window.opera){return"opera"}else{if(/msie/i.test(a)){return"ie"}else{if(/AppleWebKit/.test(navigator.appVersion)){return"safari"}else{if(/mozilla/i.test(a)&&!/compatible|webkit/i.test(a)){return"firefox"}else{return"unknown"}}}}})();KM.e=function(a){return document.createElement(a)};KM.ts=function(){return Math.round(new Date().getTime()/1000)};KM.ia=function(b,c){if(!c){return false}for(var a=0;a<c.length;a++){if(c[a]==b){return true}}return false};KM.aa=function(c,b){for(var a=0;a<b.length;a++){c.push(b[a])}return c};KM.mg=function(c,b){if(!c){c={}}if(!b){return c}for(var a in b){c[a]=b[a]}return c};KM.nh=function(c){var a={};for(var b in c){if(typeof c[b]!=="function"&&typeof c[b]!=="object"&&c[b]!==null&&c[b]!==""){a[b]=c[b]}}return a};KM.$$=function(b,a,c){if(document.getElementsByClassName){KM.$$=function(j,m,h){h=h||document;var d=h.getElementsByClassName(j),l=(m)?new RegExp("\\b"+m+"\\b","i"):null,e=[],g;for(var f=0,k=d.length;f<k;f+=1){g=d[f];if(!l||l.test(g.nodeName)){e.push(g)}}return e}}else{if(document.evaluate){KM.$$=function(o,r,n){r=r||"*";n=n||document;var g=o.split(" "),p="",l="http://www.w3.org/1999/xhtml",q=(document.documentElement.namespaceURI===l)?l:null,h=[],d,f;for(var i=0,k=g.length;i<k;i+=1){p+="[contains(concat(' ', @class, ' '), ' "+g[i]+" ')]"}try{d=document.evaluate(".//"+r+p,n,q,0,null)}catch(m){d=document.evaluate(".//"+r+p,n,null,0,null)}while((f=d.iterateNext())){h.push(f)}return h}}else{KM.$$=function(r,u,q){u=u||"*";q=q||document;var h=r.split(" "),t=[],d=(u==="*"&&q.all)?q.all:q.getElementsByTagName(u),p,j=[],o;for(var i=0,e=h.length;i<e;i+=1){t.push(new RegExp("(^|\\s)"+h[i]+"(\\s|$)"))}for(var g=0,s=d.length;g<s;g+=1){p=d[g];o=false;for(var f=0,n=t.length;f<n;f+=1){o=t[f].test(p.className);if(!o){break}}if(o){j.push(p)}}return j}}}return KM.$$(b,a,c)};KM.e$=function(a,d){var e=[];if(typeof(a)=="string"&&a.substring(0,1)=="."){e=KM.$$(a.substring(1))}else{var c=KM.$(a);if(c){e=[c]}}for(var b=0;b<e.length;b++){d(e[b])}};KM.ev=function(c,b,a){c=KM.$(c);if(c){if(c.addEventListener){c.addEventListener(b,a,false)}else{if(c.attachEvent){c.attachEvent("on"+b,a)}}}};KM.sre=function(a){if(a){var b=a.target?a.target:a.srcElement;if(b){return(b.nodeType==3?b.parentNode:b)}}};KM.pdft=function(a){if(a){if(a.preventDefault){a.preventDefault()}a.returnValue=false}};KM.trackClickOnOutboundLink=function(a,b,c){KM.e$(a,function(d){KM.ev(d,"click",function(g){try{KM.record(b,c)}catch(h){}var f=KM.sre(g);while(f&&!f.href){f=f.parentNode}if(f&&!f.target&&!g.shiftKey&&!g.altKey&&!g.ctrlKey&&!g.metaKey){KM.pdft(g);setTimeout(function(){document.location=f.href},250)}})})};KM.trackClick=function(a,b,c){KM.e$(a,function(d){KM.ev(d,"mousedown",function(e){KM.record(b,c)})})};KM.fn=function(a){return(a.name||"").replace(/(^.+?)\[(.+?)\]/,"$1_$2")};KM.iif=function(a){var b=KM.fn(a).replace(/[_\-]/g,"");return b.match(/userid|login|username|email/i)?true:false};KM.iff=function(a){if(KM.hc(a,"km_include")){return true}if(KM.hc(a,"km_ignore")){return false}if(!a.nodeName.match(/input|select/i)){return false}if(a.nodeName.match(/input/i)&&!a.type.match(/text|radio|checkbox/i)&&!KM.iif(a)){return false}if(!a.name){return false}var b=KM.fn(a).replace(/[_\-]/g,"");if(b.match(/pass|billing|creditcard|cardnum|^cc|ccnum|exp|seccode|securitycode|securitynum|cvc|cvv|ssn|socialsec|socsec|csc/i)){return false}if(a.type.match(/radio|checkbox/)&&!(a.checked||a.selected)){return false}return true};KM.fp=function(e){var d={};if(!e){return d}var a=[];KM.aa(a,e.getElementsByTagName("input"));KM.aa(a,e.getElementsByTagName("textarea"));KM.aa(a,e.getElementsByTagName("select"));for(var c=0;c<a.length;c++){var g=a[c];if(KM.iff(g)){var f=g.value;if(!f&&g.nodeName=="SELECT"){f=g.options[g.selectedIndex].text}if(KM.iif(g)&&!KM.gc("ni")){KM.identify(f)}var h=KM.fn(g);if(h.match(/\[\]$/)){h=h.replace(/\[\]$/,"");var b=d[h]?d[h].split(","):[];b.push(f.replace(/,/g," "));b.sort();d[h]=b.join(",")}else{d[h]=f}}}return d};KM.trackSubmit=function(a,b,c){KM.e$(a,function(d){KM.ev(d,"submit",function(f){if(typeof(KM_SKIP_FORM_FIELDS)=="undefined"||!KM_SKIP_FORM_FIELDS){var e;if(e=KM.sre(f)){c=KM.mg(c,KM.fp(e))}}KM.record(b,c)})})};KM.trackForm=KM.trackSubmit;KM.$=function(a){return(typeof a=="object")?a:document.getElementById(a.replace("#",""))};KM.hc=function(a,b){if(a&&a.className){return KM.ia(b,a.className.split(" "))}return false};KM.abi=function(){if(KM._abi){return KM._abi}if(KM._abi=KM.gc("abi")){return KM._abi}KM._abi=KM.npid();KM.sc("abi",KM._abi);return KM._abi};KM.abv={};KM.ab=function(l,p){if(typeof(KM.abv[l])!="undefined"){return KM.abv[l]}if(!l){return null}var h;if(typeof(p)=="object"&&p.length){var j={};var e=p.length;for(h=0;h<e;h++){j[p[h]]=(1/p.length)}p=j}var a=[];var o=0;if(p){for(h in p){if(typeof(p[h])!="function"){o+=p[h];a.push([h,p[h]])}}}var n=null;if(a.length>0){n=a[0][0];if(o>0){var g=100/o;var b=KM.abi();var c=0;for(h=0;h<b.length;h++){c+=b.charCodeAt(h)}c=c%100;var f=0;for(h=0;h<a.length;h++){f+=a[h][1]*g;if(c<=f){n=a[h][0];break}}if(!n){n=a[a.length-1][0]}}}KM.abv[l]=n;var k={};k[l]=n;KM.set(k);return n};KM.sm=function(f,d){if(f.indexOf("*")==-1){return(f==d)}if(f==d){return true}if(f.length==0){return false}var e=f.substr(0,1)=="*";var a=f.substr(f.length-1,1)=="*";var g=f.split("*");for(var c=0;c<g.length;c++){if(g[c]){var b=(e||c>0)?d.lastIndexOf(g[c]):d.indexOf(g[c]);if(b!=-1){if(c==0&&!e){if(b!=0){return false}}d=d.substring(b+g[c].length)}else{return false}}}if(a){return true}else{return d?false:true}};KM.UES={"'":"%27","(":"%28",")":"%29","*":"%2A","~":"%7E","!":"%21","%20":"+"};KM.ue=function(a){if(a){for(var b in KM.UES){if(typeof(KM.UES[b])=="string"){a=a.split(KM.UES[b]).join(b)}}a=decodeURIComponent(a)}return a};KM.uprts=function(a,m){if(!a){return{}}var d=KM.pu(a);if(!d){return[]}var c={};var k=false;var g=[];if(d.query){g.push(d.query.split("&"))}if(m){if(d.path){g.push(d.path.split("/"))}}for(var e=0;e<g.length;e++){var b=g[e];for(var f=0;f<b.length;f++){if(b[f].indexOf("=")!=-1){var n=b[f].split("=");var l=n[0];var h=n[1];l=KM.ue(l);h=KM.ue(h);c[l]=h;k=true}}}d.params=k?c:[];return d};KM.pu=function(e){e=e+"";var a,d;var b={};d=/^(.*?):\/\//;if(a=d.exec(e)){b.scheme=a[1];e=e.replace(d,"")}d=/(.*?)(\/|$)/;if(a=d.exec(e)){var c=a[1].split(":");b.host=c[0];b.port=c[1];e=e.replace(d,"/")}d=/(.*?)(\?|$|\#)/;if(a=d.exec(e)){b.path=a[1];e=e.replace(d,a[2])}d=/^\?(.*?)($|\#)/;if(a=d.exec(e)){b.query=a[1];e=e.replace(d,a[2])}d=/^#(.*)/;if(a=d.exec(e)){b.anchor=a[1]}return b};KM.usi=function(a){return a.replace(/\/(index|home)[^\/]*?$/,"/").replace(/\/$/,"").replace(/\/\*$/,"*")};KM.um=function(f,e){if(!e){e=KM.u()}f=KM.ush(f.toLowerCase());e=KM.ush(e.toLowerCase());if(f==e){return true}var h=f.split("?");var g=e.split("?");if(!KM.sm(KM.usi(h[0]),KM.usi(g[0]))){return false}var c=KM.uqp(h[1]);var b=KM.uqp(g[1]);var d;for(var a in c){d=c[a];if(typeof d!="function"){if(d=="*"){if(!b[a]){return false}}else{if(b[a]!=d){return false}}}}return true};KM.ush=function(a){a=a.replace(/^https?/i,"");a=a.replace(/^:\/\//i,"");if(a.match(/\//)){a=a.replace(/^.*?\//,"/")}else{a=""}if(a.indexOf("/")!=0){a="/"+a}return a.replace(/\#.*/,"")};KM.uqp=function(d){if(!d){return{}}var c=d.split("&");var b={};for(var a=0;a<c.length;a++){var e=c[a].split("=");b[KM.ue(e[0])]=KM.ue(e[1])}return b};KM.au=function(){var b=KM.u();if(b){var d=KM.uprts(b);var c=d.params;if(c){var f=null;var g=null;var h={};var k=false;for(var e in c){if(e.match(/^km/)){var a=e.replace(/^km_?/,"");var j=c[e];if(a=="i"){g=j}else{if(a=="e"){f=j;k=true}else{h[a]=j;k=true}}}}if(g){KM.identify(g)}if(k){KM.record(f,h)}}}};if(typeof(KM_SKIP_URL)=="undefined"||!KM_SKIP_URL){_kmq.push(["au"])}KM.gdc=function(b){if(document.cookie){var f=b+"=";var a=document.cookie.split(";");for(var d=0;d<a.length;d++){var g=a[d];while(g.charAt(0)==" "){g=g.substring(1,g.length)}if(g.indexOf(f)==0){var e=decodeURIComponent(g.substring(f.length,g.length));if(e=="null"||e=="undefined"||e===undefined||e===null){return null}else{if(e=="false"){return false}}return e}}}return null};KM.gc=function(a,c){var b=KM.gdc(KM.cp+a);return b||KM.lc[a]};KM.gcd=function(){if(typeof(KM_COOKIE_DOMAIN)!="undefined"&&KM_COOKIE_DOMAIN){return KM_COOKIE_DOMAIN}return"."+document.location.host.toLowerCase().replace("www.","")};KM.sc=function(a,c,b,d){KM.lc[a]=c;KM.sdc(KM.cp+a,c,b)};KM.sdc=function(c,g,e){if(e===undefined){e=157680000000}var a;if(g===undefined){g=""}if(e){var b=new Date();b.setTime(b.getTime()+e);a="; expires="+b.toGMTString()}else{a=""}var d=c+"="+encodeURIComponent(g)+a+";";var f=KM.gcd();if(f){d+=" domain="+f+";"}d+=" path=/";document.cookie=d};KM.chrsz=8;KM.b64pad="=";KM.core_sha1=function(v,o){v[o>>5]|=128<<(24-o%32);v[((o+64>>9)<<4)+15]=o;var y=Array(80);var u=1732584193;var s=-271733879;var r=-1732584194;var q=271733878;var p=-1009589776;for(var l=0;l<v.length;l+=16){var n=u;var m=s;var k=r;var h=q;var f=p;for(var g=0;g<80;g++){if(g<16){y[g]=v[l+g]}else{y[g]=KM.rol(y[g-3]^y[g-8]^y[g-14]^y[g-16],1)}var z=KM.safe_add(KM.safe_add(KM.rol(u,5),KM.sha1_ft(g,s,r,q)),KM.safe_add(KM.safe_add(p,y[g]),KM.sha1_kt(g)));p=q;q=r;r=KM.rol(s,30);s=u;u=z}u=KM.safe_add(u,n);s=KM.safe_add(s,m);r=KM.safe_add(r,k);q=KM.safe_add(q,h);p=KM.safe_add(p,f)}return Array(u,s,r,q,p)};KM.sha1_ft=function(e,a,g,f){if(e<20){return(a&g)|((~a)&f)}if(e<40){return a^g^f}if(e<60){return(a&g)|(a&f)|(g&f)}return a^g^f};KM.sha1_kt=function(a){return(a<20)?1518500249:(a<40)?1859775393:(a<60)?-1894007588:-899497514};KM.safe_add=function(a,d){var c=(a&65535)+(d&65535);var b=(a>>16)+(d>>16)+(c>>16);return(b<<16)|(c&65535)};KM.rol=function(a,b){return(a<<b)|(a>>>(32-b))};KM.binb2b64=function(d){var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var f="";for(var b=0;b<d.length*4;b+=3){var e=(((d[b>>2]>>8*(3-b%4))&255)<<16)|(((d[b+1>>2]>>8*(3-(b+1)%4))&255)<<8)|((d[b+2>>2]>>8*(3-(b+2)%4))&255);for(var a=0;a<4;a++){if(b*8+a*6>d.length*32){f+=KM.b64pad}else{f+=c.charAt((e>>6*(3-a))&63)}}}return f};KM.str2binb=function(d){var c=[];var a=(1<<KM.chrsz)-1;for(var b=0;b<d.length*KM.chrsz;b+=KM.chrsz){c[b>>5]|=(d.charCodeAt(b/KM.chrsz)&a)<<(32-KM.chrsz-b%32)}return c};KM.sha1_b64=function(a){return KM.binb2b64(KM.core_sha1(KM.str2binb(a),a.length*KM.chrsz))};KM.p=function(b){var e=[];var d;var c;for(var a in b){d=b[a];c=false;if(typeof d!="function"){if(d===null){d=""}else{if(typeof d=="object"){if(typeof d.join=="function"){d=d.join(",")}else{c=true}}}if(!c){e.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}}}return e.join("&")};KM.x=function(a,b,d){if(typeof(KM_KEY)=="undefined"||!KM_KEY){return}if(!b||typeof b!="object"){b={}}b._k=KM_KEY;if(!b._p){b._p=KM.i()}b._t=KM.ts();params=KM.p(b);var c=KM.u().toLowerCase().indexOf("https")==0?KM.tds:KM.td;KM.r(c+"/"+a+"?"+params,d)};KM.r=function(b,c){var a=new Image(1,1);a._cb=c;KM.aq(b);KM.ev(a,"load",function(d){if(a){KM.xq(a.src);if(a._cb){a._cb()}}});a.src=b};KM.i=function(){if(KM._i){return KM._i}if(KM._i=KM.gc("ni")){return KM._i}if(KM._i=KM.gc("ai")){return KM._i}KM._i=KM.npid();KM.sc("ai",KM._i);return KM._i};KM.npid=function(){var e=new Date();var c="";if(navigator.plugins){var a=navigator.plugins.length;for(var b=0;b<a;b++){if(navigator.plugins[b]){c+=[navigator.plugins[b].name,navigator.plugins[b].description,navigator.plugins[b].filename].join("/")}}}return KM.sha1_b64([Math.random(),e.getTime(),navigator.userAgent,navigator.vendor,c,document.referrer].join("|"))};KM.identify=function(a){var d=["null","nil","'null'","'nil'",'"null"','"nil"',"''",'""'];for(var b=0;b<d.length;b++){if(a==d[b]){a=null;break}}if(!a){KM.clearIdentity();return}var e;if(e=KM.gc("ni")){KM.sc("ai",a)}else{var c;if(c=KM.gc("ai")){KM.alias(a,c)}}KM.sc("ni",a);KM._i=a};KM.clearIdentity=function(){KMCID=null;KM._i=null;if(KM.gc("ni")){KM.sc("ai",null,-1000)}KM.sc("ni",null,-1000)};KM.alias=function(a,b){if(a!=b){KM.x("a",{_n:a,_p:b})}};function _kmil(){KM.ikmq()}KM.set=function(b,c){if(b){if(typeof(b)!="object"){b={}}for(var a in b){if(typeof b[a]!="function"){KM.x("s",b,c);break}}}};KM.record=function(c,a,e){var d;var b;if(c&&a){b=c;d=a}else{if(c&&!a){if(typeof(c)=="string"){b=c;d={}}else{d=c}}else{if(!c&&a){d=a}}}if(typeof(d)!="object"){d={}}if(b){KM.ar(b,d,e)}else{if(d){KM.set(d,e)}}};KM.ar=function(a,b,c){b._n=a;KM.x("e",b,c)};KM.rf=function(){return document.referrer};KM.u=function(){return document.location+""};KM.pageView=function(){_kmq.push(["record","Page View",{"Viewed URL":KM.u(),Referrer:KM.rf()||"Direct"}])};if(typeof(KM_SKIP_PAGE_VIEW)=="undefined"||!KM_SKIP_PAGE_VIEW){KM.pageView()}KM.signedUp=function(b,a){KM.record("Signed Up",KM.nh(KM.mg({"Plan Name":b},a)))};KM.upgraded=function(b,a){KM.record("Upgraded",KM.nh(KM.mg({"Plan Name":b},a)))};KM.downgraded=function(b,a){KM.record("Downgraded",KM.nh(KM.mg({"Plan Name":b},a)))};KM.billed=function(a,c,b){KM.record("Billed",KM.nh(KM.mg({"Billing Amount":a,"Billing Description":c},b)))};KM.cancelled=function(a){KM.record("Canceled",a)};KM.canceled=KM.cancelled;KM.rvs=function(){if(!KM.gc("vs",true)){KM.record("Visited Site",{URL:KM.u(),Referrer:KM.rf()||"Direct"})}KM.sc("vs","1",1800000,true)};if(typeof(KM_SKIP_VISITED_SITE)=="undefined"||!KM_SKIP_VISITED_SITE){_kmq.push(["rvs"])}KM.setReferrer=function(){var c=KM.rf()||"Direct";if(c.toLowerCase()=="null"){c="Direct"}if(c!="Direct"){var e=KM.uprts(c);var d=KM.uprts(KM.u());if(e&&d){var b=e.host;var a=d.host;if(b&&a&&b.toLowerCase().replace("www.","")!=a.toLowerCase().replace("www.","")){_kmq.push(["set",{Referrer:c}])}}}};if(typeof(KM_SKIP_REFERRER)=="undefined"||!KM_SKIP_REFERRER){KM.setReferrer()}KM.trackSearchHits=function(){if(!KM.rf()){return}var f={Google:{domain:"google",query_param:"q"},Yahoo:{domain:"search.yahoo",query_param:"p"},Ask:{domain:"ask",query_param:"q"},MSN:{domain:"search.msn",query_param:"q"},Live:{domain:"search.live",query_param:"q"},AOL:{domain:"search.aol",query_param:"query"},Netscape:{domain:"search.netscape",query_param:"query"},AltaVista:{domain:"altavista",query_param:"q"},Lycos:{domain:"search.lycos",query_param:"query"},Dogpile:{domain:"dogpile",query_param:"/dogpile/ws/results/Web/",param_type:"path"},A9:{domain:"a9",query_param:"/"},Bing:{domain:"bing",query_param:"q"}};var h=null;for(var a in f){var j=f[a];if(typeof(j)=="object"){var b=KM.uprts(KM.rf(),(j.param_type&&j.param_type=="path"));var d=b.params?b.params:[];var e=j.domain;var k=b.host;if(k){k=k.toLowerCase()}if(k&&(k.indexOf(e+".com")!=-1||k.indexOf(e+".co.")!=-1)){var g=null;if(j.query_param.substr(0,1)=="/"){if(b.path){if(b.path.indexOf(j.query_param)===0){g=b.path.substr(j.query_param.length);var c=g.indexOf("/");if(c!==-1){g=g.substr(0,c)}g=KM.ue(g)}}}else{if(d[j.query_param]){g=d[j.query_param]}}if(g){h={name:a,terms:g}}}}}if(h){var i="Search Engine Hit";if(h.name=="Google"){if(KM.u().indexOf("gclid=")!=-1){i="Ad Campaign Hit"}}_kmq.push(["record",i,{"Search Engine":h.name,"Search Terms":h.terms}])}};if(typeof(KM_SKIP_SEARCH_ENGINE)=="undefined"||!KM_SKIP_SEARCH_ENGINE){KM.trackSearchHits()}KM.checkForUTM=function(){var a=KM.u();if(a){var d=KM.uprts(a);if(d.params){var b={};var c=false;if(d.params.utm_source){b["Campaign Source"]=d.params.utm_source;c=true}if(d.params.utm_medium){b["Campaign Medium"]=d.params.utm_medium;c=true}if(d.params.utm_campaign){b["Campaign Name"]=d.params.utm_campaign;c=true}if(d.params.utm_term){b["Campaign Terms"]=d.params.utm_term;c=true}if(d.params.utm_content){b["Campaign Content"]=d.params.utm_content;c=true}if(c){b.URL=a;_kmq.push(["record","Ad Campaign Hit",b])}}}};if(typeof(KM_SKIP_UTM)=="undefined"||!KM_SKIP_UTM){KM.checkForUTM()}KM.ir=function(){var a=KM.gc("lv");if(a){if(a=="x"){return true}a=parseInt(a,10);if(a>0&&KM.ts()-a>=30*60){return true}}else{if(KM.gc("ni")){return true}}var e=KM.gdc("__utma");if(e){var d=e.split(".");if(d.length>0){var b=d[d.length-1];var c=parseInt(b,10);if(c>1){return true}}}return false};KM.tr=function(){if(KM.gc("lv")=="x"){return}if(KM.ir()){KM.set({returning:1});KM.sc("lv","x")}else{KM.sc("lv",KM.ts())}};if(typeof(KM_SKIP_RETURNING)=="undefined"||!KM_SKIP_RETURNING){_kmq.push(["tr"])}KM.dnt=function(){if(typeof(KM_DNT)!="undefined"&&KM_DNT){if(typeof(KMDNTH)!="undefined"&&KMDNTH){return 1}var d=document.navigator;if(d&&d.doNotTrack){return 1}var b=window.external;if(b){var a=b.InPrivateFilteringEnabled;if(a&&a()){return 1}var c=b.msTrackingProtectionEnabled;if(c&&c()){return 1}}}return 0};if(typeof(_kmq)=="undefined"){var _kmq=[]}var KMQ=function(a){this.r=1;if(a&&a.length){for(var b=0;b<a.length;b++){this.push(a[b])}}};KMQ.prototype.push=function(b){if(b){if(typeof(b)=="object"&&b.length){var a=b.splice(0,1);if(KM[a]){KM[a].apply(KM,b)}}else{if(typeof(b)=="function"){b()}}}};KM.ikmq=function(){if(KM.dnt()){return}KM.gc("ai");KM.gc("ni");if(!_kmq.r){KM.rq();_kmq=new KMQ(_kmq)}};KM.aq=function(b){b=KM.cqu(b);var a=KM.gq();for(var c=0;c<a.length;c++){if(b==a[c].u){return false}}a.push({u:b,t:KM.ts()});KM.sq(a)};KM.cqu=function(a){a=a.replace(/ /g,"+").replace(/\|/g,"%7C").replace(KM.tds,"").replace(KM.td,"");if(a.indexOf("/")!=0){a="/"+a}return a};KM.sq=function(a){var c=[];for(var b=0;b<a.length;b++){c.push(a[b].t+" "+a[b].u)}while(c.join("|").length>2048){c=c.slice(1)}KM.sc("uq",c.join("|"))};KM.xq=function(c){c=KM.cqu(c);var a=KM.gq();var b=[];for(var d=0;d<a.length;d++){if(c!=a[d].u){b.push(a[d])}}KM.sq(b)};KM.gq=function(){var f=KM.gc("uq");if(!f){return[]}var a=[];var e=f.split("|");var b=KM.ts()-5*60;for(var c=0;c<e.length;c++){var g=e[c].split(" ");if(g.length==2){var d={t:parseInt(g[0],10),u:g[1]};if(d.t>b){a.push(d)}}}return a};KM.rq=function(){var a=KM.gq();var c=KM.u().toLowerCase().indexOf("https")==0?KM.tds:KM.td;for(var b=0;b<a.length;b++){KM.r(c+a[b].u)}};KM.ce=function(e,b,a){var c;var f=document;if(typeof b!="undefined"&&f.getElementById(b)){c=f.getElementById(b)}else{c=f.createElement(e)}c.style.visibility="hidden";c.style.position="absolute";if(b){c.setAttribute("id",b)}if(a){f.body.appendChild(c)}return c};KM.iud=function(){KM.ud=0;if(typeof(KM_COOKIES_ONLY)=="undefined"||!KM_COOKIES_ONLY){if(!KM.ls){try{KM.ude=KM.ce("div","userdata_el",1);KM.ud=KM.ude.addBehavior?1:0;if(KM.ud){KM.ude.style.behavior="url(#default#userData)";KM_NO_SWF=1}}catch(a){}}}};KM.uds=function(a,b){try{if(KM.ud&&KM.ude){if(b===null){b="null"}else{if(b===false){b="false"}}KM.ude.setAttribute(a,b);KM.ude.save(a)}}catch(c){}};KM.udg=function(a){try{if(KM.ud&&KM.ude){KM.ude.load(a);var b=KM.ude.getAttribute(a);if(b=="null"||b=="undefined"||b===undefined||b===null){return null}else{if(b=="false"){return false}else{return b+""}}}}catch(c){}};KM.drdy=false;KM.odr=function(){if(KM.drdy){return}KM.drdy=true;setTimeout(function(){KM.ikmq()},1000)};KM.cdr=function(){var a=document;if(a.readyState=="complete"||(a.addEventListener&&a.readyState=="loaded")){KM.odr();return true}return false};if(!KM.cdr()){KM.idr=function(){var b=document;var a=window;if(b.addEventListener){b.addEventListener("DOMContentLoaded",KM.odr,true);b.addEventListener("readystatechange",KM.cdr,true);a.addEventListener("load",KM.odr,true)}else{if(b.attachEvent){b.attachEvent("onreadystatechange",KM.cdr);a.attachEvent("onload",KM.odr)}}};KM.idr()};}