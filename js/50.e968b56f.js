"use strict";(self["webpackChunkcat_adoption"]=self["webpackChunkcat_adoption"]||[]).push([[50],{3050:function(a,t,l){l.r(t),l.d(t,{default:function(){return V}});var n=l(3396),s=l(7139),c=l(9242);const e=a=>((0,n.dD)("data-v-09ee0628"),a=a(),(0,n.Cn)(),a),i={class:"header navbar-wrap bg-light"},o={class:"container navbar"},_={class:"container-fluid"},r={class:"logo mb-0"},p={class:"mb-0"},u={style:{color:"#f00"}},d={class:"wrapper"},w={class:"info_container"},g=["src"],k={class:"content"},h=e((()=>(0,n._)("span",{class:"title"},"資料建立日期：",-1))),m=e((()=>(0,n._)("span",{class:"title"},"更新日期：",-1))),b=e((()=>(0,n._)("span",{class:"title"},"尋獲地：",-1))),v=e((()=>(0,n._)("span",{class:"title"},"流水編號：",-1))),f=e((()=>(0,n._)("span",{class:"title"},"收容編號：",-1))),U=e((()=>(0,n._)("span",{class:"title"},"開放認養時間(起)：",-1))),z=e((()=>(0,n._)("span",{class:"title"},"開放認養時間(迄)：",-1))),y=e((()=>(0,n._)("span",{class:"title"},"毛色：",-1))),x=e((()=>(0,n._)("span",{class:"title"},"性別：",-1))),L=e((()=>(0,n._)("span",{class:"title"},"年齡分類：",-1))),D=e((()=>(0,n._)("span",{class:"title"},"收容所名稱：",-1))),H=e((()=>(0,n._)("span",{class:"title"},"收容所地址：",-1))),C=e((()=>(0,n._)("span",{class:"title"},"收容所電話：",-1))),F={class:"img-btn-wrap"},P=["src"],T=e((()=>(0,n._)("p",{class:"close-tip text-center"},"再次點擊螢幕可關閉",-1)));function B(a,t,l,e,B,I){const W=(0,n.up)("router-link"),Z=(0,n.up)("FooterView");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("header",i,[(0,n._)("nav",o,[(0,n._)("div",_,[(0,n._)("h1",r,[(0,n.Wm)(W,{to:"/",class:"navbar-brand"},{default:(0,n.w5)((()=>[(0,n.Uk)(" 給朕一個家 ")])),_:1})]),(0,n._)("p",p,[(0,n.Uk)("收容編號："),(0,n._)("span",u,(0,s.zw)(e.cat.animal_subid),1)])])])]),(0,n._)("div",d,[(0,n._)("div",w,[(0,n._)("img",{class:"cat_pic",src:e.cat.album_file,alt:"",onClick:t[0]||(t[0]=a=>e.showPicHandler()),onKeydown:t[1]||(t[1]=a=>e.showPicHandler())},null,40,g),(0,n._)("div",k,[(0,n._)("p",null,[h,(0,n.Uk)((0,s.zw)(e.cat.animal_createtime),1)]),(0,n._)("p",null,[m,(0,n.Uk)((0,s.zw)(e.cat.cDate),1)]),(0,n._)("p",null,[b,(0,n.Uk)((0,s.zw)(e.cat.animal_foundplace),1)]),(0,n._)("p",null,[v,(0,n.Uk)((0,s.zw)(e.cat.animal_id),1)]),(0,n._)("p",null,[f,(0,n.Uk)((0,s.zw)(e.cat.animal_subid),1)]),(0,n._)("p",null,[U,(0,n.Uk)((0,s.zw)(e.cat.animal_opendate),1)]),(0,n._)("p",null,[z,(0,n.Uk)((0,s.zw)(e.cat.animal_closeddate),1)]),(0,n._)("p",null,[y,(0,n.Uk)((0,s.zw)(e.cat.animal_colour),1)]),(0,n._)("p",null,[x,(0,n.Uk)((0,s.zw)(e.cat.animal_sex),1)]),(0,n._)("p",null,[L,(0,n.Uk)((0,s.zw)(e.cat.animal_age),1)]),(0,n._)("p",null,[D,(0,n.Uk)((0,s.zw)(e.cat.shelter_name),1)]),(0,n._)("p",null,[H,(0,n.Uk)((0,s.zw)(e.cat.shelter_address),1)]),(0,n._)("p",null,[C,(0,n.Uk)((0,s.zw)(e.cat.shelter_tel),1)]),(0,n._)("button",{class:"copy_url_btn",type:"button",onClick:t[2]||(t[2]=a=>e.copyUrlHandler())}," 複製此頁網址 ")])]),(0,n.Wm)(Z)]),(0,n.Wm)(c.uT,null,{default:(0,n.w5)((()=>[e.lightbox?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"lightbox bg-dark bg-opacity-75",onClick:t[3]||(t[3]=a=>e.closeLightBox()),onKeydown:t[4]||(t[4]=a=>e.closeLightBox())},[(0,n._)("div",F,[(0,n._)("img",{src:e.cat.album_file,alt:"cat pic"},null,8,P),T])],32)):(0,n.kq)("",!0)])),_:1})],64)}var I=l(70),W=l(4870),Z=l(65),E=l(6502),K={components:{FooterView:E.Z},setup(){const a=(0,W.iH)(!1),t=(0,Z.oR)(),l=(0,n.Fl)((()=>t.state.isLoading)),s=(0,W.iH)([]),c=window.location.href.split("/cat_info/")[1];async function e(){t.state.isLoading=!0;const a="https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&IsTransData=1",l=`${a}&animal_id=${c}`;try{const a=await I.ZP.get(l);s.value=await a.data[0],t.state.isLoading=!1}catch(n){console.log(n)}}function i(){a.value=!0}function o(){a.value=!1}function _(){const a=window.location.href;navigator.clipboard.writeText(a).then((()=>{window.alert("網址已複製~")})).catch((a=>{console.error("Failed to copy URL: ",a)}))}return e(),{isLoading:l,getCatData:e,cat:s,showPicHandler:i,copyUrlHandler:_,closeLightBox:o,lightbox:a}}},R=l(89);const S=(0,R.Z)(K,[["render",B],["__scopeId","data-v-09ee0628"]]);var V=S}}]);
//# sourceMappingURL=50.e968b56f.js.map