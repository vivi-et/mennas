!function(){"use strict";function t(){return e(location.href)}function e(t){return t.split("/").pop().split("?").shift()}function n(t){return{no:parseInt([t.find(".gall_tit a").first().attr("href").split(/[&?]/gi).find(t=>t.startsWith("no="))].map(t=>t||"no=-1")[0].split("no=")[1]),url:location.origin+t.find(".gall_tit a").attr("href"),gall_subject:t.find(".gall_subject").text(),subject:t.find(".gall_tit a").first().text(),subject_type:t.find(".gall_tit em").first().attr("class").split(" ").pop(),comments:t.find(".gall_tit .reply_num")[0]&&t.find(".gall_tit .reply_num").text().split("/")[0]?parseInt(t.find(".gall_tit .reply_num").text().split("/")[0].replace(/[\[\]]/g,"")):0,voice_comments:t.find(".gall_tit .reply_num")[0]&&t.find(".gall_tit .reply_num").text().split("/")[1]?parseInt(t.find(".gall_tit .reply_num").text().split("/")[1].replace(/[\[\]]/g,"")):0,uid:t.find(".gall_writer").data("uid"),ip:t.find(".gall_writer").data("ip"),nick:t.find(".gall_writer").data("nick"),nick_type:t.find(".writer_nikcon img")[0]?t.find(".writer_nikcon img").attr("src").split(".").slice(-2).shift().split("/").slice(-1).pop():void 0,date:t.find(".gall_date").attr("title"),count:parseInt(t.find(".gall_count").text()),recommends:parseInt(t.find(".gall_recommend").text())}}Element.prototype.appendAfter=function(t){t.parentNode.insertBefore(this,t.nextSibling)};const i=".gall_list .ub-content:not(:has(.gall_num:contains(공지), .gall_num:contains(설문), .gall_num:contains(뉴스), .gall_num:contains(AD)))";function o(t){return{no:parseInt(t.find("a").attr("href").split("/").pop().split("?").shift()),url:t.find("a").attr("href"),subject:t.find(".detail-txt").text().trim(),subject_type:t.find(".sp-lst").attr("class").split(" ").pop(),nick:t.find(".ginfo > li:nth-child(1)").text(),nick_type:(t.find(".sp-nick").attr("class")?t.find(".sp-nick").attr("class"):"").split(" ").pop(),date:t.find(".ginfo > li:nth-child(2)").text(),count:parseInt(t.find(".ginfo > li:nth-child(3)").text().split(" ").pop()),recommends:parseInt(t.find(".ginfo > li:nth-child(4)").text().split(" ").pop()),comments:parseInt(t.find(".ct").text())+(t.find(".vo-txt")[0]?parseInt(t.find(".vo-txt").text()):0),voice_comments:t.find(".vo-txt")[0]?parseInt(t.find(".vo-txt").text()):0}}const a=".gall-detail-lnktb";function l(t){return{no:t.data("no"),ip:t.find(".gall_writer").data("ip"),nick:t.find(".gall_writer").data("nick"),nick_type:t.find(".writer_nikcon img")[0]?t.find(".writer_nikcon img").attr("src").split(".").slice(-2).shift().split("/").slice(-1).pop():void 0,comment:t.find("p").text(),date:t.find(".date_time").text(),is_voice:t.find(".btn-voice").length>0,is_dccon:t.find(".coment_dccon_img").length>0}}const r=".cmt_info, .reply_info";function s(t){return{no:t.attr("no"),nick:t.find(".nick").text(),nick_type:(t.find(".sp-nick").attr("class")?t.find(".sp-nick").attr("class"):"").split(" ").pop(),date:t.find(".date").text(),comment:t.find(".txt").text(),is_voice:t.find(".btn-voice").length>0,is_dccon:t.find("p.txt > img").length>0}}const c=".all-comment-lst > li.comment, .all-comment-lst > li.comment-add";function f(t,e,n){var i,o=(i=new Date-new Date(n.queryDate).getTime())?(i=Math.floor(i/1e3))<60?i+"초":i<3600?Math.floor(i/60)+"분":i<86400?Math.floor(i/3600)+"시간":i<31536e3?Math.floor(i/86400)+"일":Math.floor(i/31536e3)+"년":null;o=o?` / ${o} 전`:"";var a=$('<p class="blocked_info" style="font-weight: bold; white-space: break-spaces;">').text(`* 차단자: ${n.authUser?n.authUser:n.AUTH_USER} / 이유: ${n.reason}${o}`);if("POST"==e){if(MENNAS.isPC)t.find(".gall_tit .blocked_info").length||t.find(".gall_tit").append(a);else if(MENNAS.isMobile){t.find(".subject .blocked_info").length||t.find(".subject").append(a)}}else if("COMMENT"==e){if(MENNAS.isPC)t.find(".cmt_txtbox .blocked_info").length||t.find(".cmt_txtbox").append(a);else if(MENNAS.isMobile){t.find(".blocked_info").length||t.append(a)}}}function d(t,e,n){"true"==localStorage.MENNAS_RESTORE_MODE?(!function(t){t.find("span").css("color","#000000"),t.find("li").css("color","#000000"),t.parent().hasClass("ub-content")&&(t=t.parent()),t.css("border","2px solid #413160"),t.css("background-color","rgba(65, 49, 96, 0.5)")}(t),f(t,e,n)):function(t){try{t.parent().hasClass("ub-content")&&(t=t.parent()).parent().find(".ub-content").length==t.parent().find(".ub-content:hidden").length&&(t=t.parent().parent().parent().parent())}catch(t){}t.hide()}(t)}function p(t){var e=t&&!0===t.isBlocked,n=t&&void 0===t.isBlocked;return e||n}function _(t){return t&&t.isBlocked}function m(t){var e=0;for(const n in t){e+=t[n].isBlocked?1:0}return e}function u(t,e){var i=0,a=0,l=0;if(e&&e.comments&&(l=(i=m(e.comments))-(a=function(t){var e=0;for(const i in t){var n=t[i];e+=n.isBlocked&&n.info&&n.info.is_voice?1:0}return e}(e.comments))),0!=i)if("true"==localStorage.MENNAS_RESTORE_MODE){if(MENNAS.isPC){var r=(s=n(t)).comments-i;0==t.find(".blocked_reply_num").length&&r>0&&t.find(".reply_num").append($(`<span class="blocked_reply_num" style="font-weight:bold; color:#413160; font-size:12px; display: inline-table; letter-spacing: 0em;">&nbsp;-${i}</span>`))}else if(MENNAS.isMobile){var r=(s=o(t)).comments-i;0==t.find(".blocked_reply_num").length&&r>0&&t.find(".rt").append($(`<span class="ct blocked_reply_num" style="font-weight:bold; color:#413160;">-${i}</span>`))}}else if(MENNAS.isPC)0==t.find(".blocked_number_fixed").length&&(r=(r=(s=n(t)).comments-i)<0?0:r,f=(f=s.voice_comments-a)<0?0:f,r>0?t.find(".gall_tit .reply_num").addClass("blocked_number_fixed").text(`[${r}`+(f?`/${f}]`:"]")):t.find(".gall_tit .reply_num").addClass("blocked_number_fixed").text(""));else if(MENNAS.isMobile&&0==t.find(".blocked_number_fixed").length){var s,c=(s=o(t)).comments-s.voice_comments-l;c=c<0?0:c;var f=s.voice_comments-a;t.find(".ct").addClass("blocked_number_fixed").text(c),f>0?t.find(".vo-txt").addClass("blocked_number_fixed").text(f):t.find(".vo").hide()}}function N(t){if("true"!=localStorage.MENNAS_RESTORE_MODE){var e=0;if(t&&t.comments&&(e=m(t.comments)),MENNAS.isPC){if(0==$(".info_fixed").length){var n=parseInt($(".gall_comment").text().split(" ").pop())-e;$(".gall_comment").addClass("info_fixed").text(`댓글 ${n}`),$(".font_red span").addClass("info_fixed").text(`${n}`)}if($(".info_update_wait").length>0){$(".info_update_wait").removeClass("info_update_wait");n=parseInt($(".font_red span").text())-e;$(".font_red span").text(`${n}`)}}else if(MENNAS.isMobile){if(0==$(".info_fixed").length){n=parseInt($(".ginfo2 .point-red").text())-e;$(".ginfo2 .point-red").addClass("info_fixed").text(`${n}`),$(".tit-box .ct").addClass("info_fixed").text(`[${n}]`),$(".update-re .ct").addClass("info_fixed").text(`[${n}]`)}if($(".info_update_wait").length>0){$(".info_update_wait").removeClass("info_update_wait");n=parseInt($(".update-re .ct").text().split("").slice(1).reverse().slice(1).reverse().join(""))-e;$(".tit-box .ct").text(`[${n}]`),$(".update-re .ct").text(`[${n}]`)}}}}const g="#recom_box1",S="#recom_title_box";function h(f){MENNAS.isPC?function(t){var e=t[MENNAS.queryMap.no];e&&($(r).toArray().map(t=>$(t)).forEach(t=>{var n=l(t).no,i=e.comments[n];p(i)&&d(t,"COMMENT",i)}),N(e)),$(i).toArray().map(t=>$(t)).forEach(e=>{var i=n(e).no,o=t[i];_(o)&&d(e,"POST",o),u(e,o)})}(f):MENNAS.isMobile&&function(n){var i=t(),l=n[i];if(l&&($(c).toArray().map(t=>$(t)).forEach(t=>{var e=s(t).no,n=l.comments[e];p(n)&&d(t,"COMMENT",n)}),N(l)),$(a).toArray().map(t=>$(t)).forEach(t=>{var e=o(t).no,i=n[e];_(i)&&d(t,"POST",i),u(t,i)}),$(g).length){var r=$(g).find("#recom_title_topLink").attr("href").match(/['"](http|https):\/\/.+?['"]/gi);if(r){var f=e(r=r[0].split("").slice(1).reverse().slice(1).reverse().join("")),m=n[f];_(m)&&d($(g),"POST",m)}}$(S).length&&$(S).find("li").toArray().map(t=>$(t)).forEach(t=>{var i=t.find("a").attr("href").match(/['"](http|https):\/\/.+?['"]/gi);if(i){var o=e(i=i[0].split("").slice(1).reverse().slice(1).reverse().join("")),a=n[o];_(a)&&d(t,"POST",a)}})}(f)}function E(){!function(){if(localStorage.MENNAS_CACHED_BLACKLIST)try{h(JSON.parse(localStorage.MENNAS_CACHED_BLACKLIST))}catch(t){}}(),fetch(MENNAS.blacklistServerURL+MENNAS.blacklistPath).then(t=>t.json()).then(t=>{h(t),localStorage.MENNAS_CACHED_BLACKLIST=JSON.stringify(t)})}function A(t,e){return function(t){return fetch(MENNAS.blacklistServerURL+MENNAS.requestPath,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:encodeURIComponent(btoa(encodeURIComponent(JSON.stringify(t))))}).then(t=>t.json())}(t).then(t=>{localStorage.MENNAS_CACHED_BLACKLIST=void 0,alert(e+"\n"+t.result)})}function M(){$(a).find(" .lt").toArray().map(t=>$(t)).forEach(t=>{if(!t.parent().find(".mt").toArray().length){var e=$('<a href="#" class="rt mt"><span class="ct">D</span></a>');e.on("click",t=>{var e=o(t=$(t.target).parent().parent()),n=e.no,i=`${e.no} ${e.subject} [${e.nick}]`,a=prompt(`${i}\n\n 이유를 입력해주세요`);a?A({cmd:"post_blacklist_request",no:n,info:e,reason:a,authUser:localStorage.MENNAS_AUTH_USER,authCode:localStorage.MENNAS_AUTH_CODE},i):alert("작업 취소됨")}),e[0].appendAfter(t[0])}})}function b(){$(r).find(".date_time").css("cursor","pointer"),$(r).find(".date_time").off("click").on("click",t=>{var e=l(t=$(t.target).parent().parent()),n=e.no,i=parseInt(MENNAS.queryMap.no),o=`${e.no} ${e.comment} [${e.nick}${e.ip?"($ {\n                info.ip\n            })":""}]`,a=prompt(`${o}\n\n이유를 입력해주세요`);a?A({cmd:"comment_blacklist_request",info:e,postNo:i,no:n,reason:a,authUser:localStorage.MENNAS_AUTH_USER,authCode:localStorage.MENNAS_AUTH_CODE},o):alert("작업 취소됨")})}function v(){$(c).find(".date").off("click").on("click",e=>{var n=s(e=$(e.target).parent()),i=n.no,o=parseInt(t()),a=`${n.no} ${n.comment} [${n.nick}]`,l=prompt(`${a}\n\n이유를 입력해주세요`);l?A({cmd:"comment_blacklist_request",info:n,postNo:o,no:i,reason:l,authUser:localStorage.MENNAS_AUTH_USER,authCode:localStorage.MENNAS_AUTH_CODE},a):alert("작업 취소됨")})}function k(){var t=prompt("유저 이름을 입력해주세요"+(localStorage.MENNAS_AUTH_USER?`\n취소 버튼: ${localStorage.MENNAS_AUTH_USER}`:""));localStorage.MENNAS_AUTH_USER=t||localStorage.MENNAS_AUTH_USER;var e=prompt("코드를 입력해주세요"+(localStorage.MENNAS_AUTH_CODE?`\n취소 버튼: ${localStorage.MENNAS_AUTH_CODE}`:""));localStorage.MENNAS_AUTH_CODE=t?e:localStorage.MENNAS_AUTH_CODE,localStorage.MENNAS_RESTORE_MODE=confirm("복구 모드를 사용할까요? (글이 가려지지 않음)"),alert(`성공적으로 멘나스 계정을 설정했습니다.\nMennas, the Voice of DCInside V${MENNAS.version}/WV${MENNAS.wrapperVersion}\nby ASCIIPhilia (https://mennas.roguelike.network)\nBlacklist Server: ${MENNAS.blacklistServerURL}\nGalleryId: ${MENNAS.galleryId}`)}const x={attributes:!0,childList:!0,characterData:!0};function C(){var t;E(),$(i).find(".gall_num").css("cursor","pointer"),$(i).find(".gall_num").on("click",t=>{var e=n(t=$(t.target).parent()),i=e.no,o=`${e.no} ${e.subject} [${e.nick}${e.ip?"($ {\n                info.ip\n            })":""}]`,a=prompt(`${o}\n\n 이유를 입력해주세요`);a?A({cmd:"post_blacklist_request",no:i,info:e,reason:a,authUser:localStorage.MENNAS_AUTH_USER,authCode:localStorage.MENNAS_AUTH_CODE},o):alert("작업 취소됨")}),b(),function(){var t=$('<button type="button" class="" onclick="">멘나스</button>');t.on("click",k),$(".array_tab").append(t);var e=$('<button type="button" class="btn_white">멘나스</button>');e.on("click",k),$(".view_bottom_btnbox .fl").append(e)}(),t=$(`<div class="copyright"><a href="https://mennas.roguelike.network">Mennas V${MENNAS.version}/WV${MENNAS.wrapperVersion} by ASCIIPhilia</a></div>`),$(".dcfoot").append(t),self.viewComments&&(self._viewComments=self.viewComments,self.viewComments=function(){self._viewComments.apply(self._viewComments,arguments),$(".font_red span").addClass("info_update_wait"),E(),b()})}function y(){var t,e;E(),v(),"true"==localStorage.MENNAS_RESTORE_MODE&&M(),(t=$('<a class="lnk" href="#">멘나스</a>')).on("click",k),$(".gall-lnk-box").append(t),e=$(`<a href="https://mennas.roguelike.network"><p class="cpt">Mennas V${MENNAS.version}/WV${MENNAS.wrapperVersion} by ASCIIPhilia</p></a>`),$(".ft-btm").append(e),self.recom_toggle&&(self._recom_toggle=self.recom_toggle,self.recom_toggle=function(){self._recom_toggle.apply(self._recom_toggle,arguments),E()});var n=t=>{E(),v(),"true"==localStorage.MENNAS_RESTORE_MODE&&M()},i=new MutationObserver(n),o=new MutationObserver(n),a=new MutationObserver(t=>{$(".tit-box .ct").addClass("info_update_wait"),$(".update-re .ct").addClass("info_update_wait"),n()});try{i.observe($("section:has(.gall-detail-lst)")[0],x)}catch(t){}try{o.observe($(".gall-detail-lst")[0],x)}catch(t){}try{a.observe($("#comment_box")[0],x)}catch(t){}}!function(){try{self.MENNAS=JSON.parse(localStorage.MENNAS)}catch(t){return void console.error("Mennas Wrapper is not exist.")}var t;MENNAS.version="2.1.8",MENNAS.isPC=location.href.includes(`id=${MENNAS.galleryId}`),MENNAS.isMobile=location.href.includes(`/${MENNAS.galleryId}`),MENNAS.requestPath="/request",MENNAS.blacklistPath=`/blacklist?version=${MENNAS.version}`,MENNAS.queryMap=(t=[],window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,(e,n,i)=>t[n]=i),t),console.log(`%cMennas, the Voice of DCInside V${MENNAS.version}/WV${MENNAS.wrapperVersion}`,"font-size:450%;font-weight:bold;color:#413160;font-family:dotum;"),console.log("%cby ASCIIPhilia (https://mennas.roguelike.network)","font-size:150%;font-weight:bold;"),console.log(`Blacklist Server: ${MENNAS.blacklistServerURL}`),console.log(`GalleryId: ${MENNAS.galleryId}`)}(),MENNAS.isPC?C():MENNAS.isMobile&&y()}();
