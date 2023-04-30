import e,{css as t,createGlobalStyle as i}from"styled-components";import{jsx as n,jsxs as o,Fragment as l}from"react/jsx-runtime";import{Loader as r}from"@googlemaps/js-api-loader";import{useRef as a,useCallback as s,useEffect as d,useLayoutEffect as c,useMemo as p,useState as h,Fragment as m}from"react";import"swiper/css";import"swiper/css/pagination";import{map as g}from"lodash-es";import{Autoplay as $,Pagination as f}from"swiper";import{Swiper as T,SwiperSlide as y}from"swiper/react";import"dayjs/locale/ja";import E from"dayjs";const u={ATTENTION:"#a370d3",CAUTION:"#ff8897",CAPTION:"#999",INFORMATION:"#5d7fb3",LINK:"#4a90d6",LINK_HOVER:"#417cb5",LINK_CURRENT:"#34628f",LINK_EXTERNAL:"#a4a368",LINK_EXTERNAL_HOVER:"#827f3c",TITLE:"#a370d3",BLACK:"#111",LIGHT_GRAY:"#eee",WHITE:"#fcfcfc"},b={WHITE:u.WHITE},L={DEFAULT:u.LINK,DEFAULT_HOVER:u.LINK_HOVER,DEFAULT_CURRENT:u.LINK_CURRENT,EXTERNAL:u.LINK_EXTERNAL,EXTERNAL_HOVER:u.LINK_EXTERNAL_HOVER},N={CAPTION:u.CAPTION,CAUTION:u.CAUTION,LINK:u.LINK,LINK_HOVER:u.LINK_HOVER,TITLE:u.TITLE,WHITE:u.WHITE,BLACK:u.BLACK},O={DEFAULT:u.INFORMATION,CAUTION:u.CAUTION},w={LIGHT_GRAY:u.LIGHT_GRAY,TITLE:u.TITLE,WHITE:u.WHITE},x=t`
  /* Reset CSS */
  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input {
    margin: 0;
    padding: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    /* NOTE: 設定する rem は 1 (87.5% === 14px) から相対的な値を設定する */
    font-size: 87.5%;
  }

  body {
    font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN',
      'Hiragino Sans', Meiryo, sans-serif;
    color: ${N.BLACK};
  }

  button {
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    appearance: none;
  }

  a {
    text-decoration: none;
  }
`;i`
  ${x}
`;const I="0.25s ease",v={INFO:"INFO",OPEN_IN_NEW:"OPEN_IN_NEW",NAVIGATE_NEXT:"NAVIGATE_NEXT",MENU:"MENU",MENU_OPEN:"MENU_OPEN"},A=({className:e,href:t,target:i,onClick:o,children:l})=>n(M,Object.assign({className:e,href:t,target:i,rel:"_blank"===i?"noopener noreferrer":void 0,onClick:e=>{"function"==typeof o&&"_blank"!==i&&o(e)}},{children:l})),H=t`
  color: ${N.LINK};
  transition: color ${I};

  @media (any-hover: hover) {
    &:hover {
      color: ${N.LINK_HOVER};
    }
  }
`,M=e.a`
  ${H}
`,C={AUTO:"auto",FULL:"100%",HALF:"50%",ONE_THIRD:"calc(100% / 3)"},_={XXL:"2rem",XL:"1.6rem",L:"1.2rem",M:"1rem",S:"0.9rem"},R={BOLD:"600",NORMAL:"300"},S={M:{WIDTH:"40px",HEIGHT:"40px"},S:{WIDTH:"20px",HEIGHT:"20px"}},z={AUTO:"auto",XL:"20px",L:"16px",M:"12px",S:"8px",XS:"4px",NONE:"0"},j={M:"6px",S:"3px",NONE:"0"},k=({className:e,text:t,color:i})=>n(U,Object.assign({className:e,$color:i},{children:t})),U=e.span`
  font-size: ${_.M};
  color: ${({$color:e})=>N[e]};
`,B=({className:e,status:t,text:i})=>n(X,Object.assign({className:e,$status:t},{children:i})),X=e.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: ${j.S};
  background: ${({$status:e})=>O[e]};
  color: ${N.WHITE};
`,G="PAGE_TITLE",K="SECTION_TITLE",F="SUBTITLE",D=({className:e,text:t,kind:i})=>o(l,{children:[i===G&&n(V,Object.assign({className:e},{children:t})),i===K&&n(W,Object.assign({className:e},{children:t})),i===F&&n(P,Object.assign({className:e},{children:t}))]}),V=e.h1`
  font-size: ${_.XXL};
  font-weight: ${R.NORMAL};
  color: ${N.TITLE};
`,W=e.h2`
  padding-left: 8px;
  border-left: 2px solid ${w.TITLE};
  font-size: ${_.XL};
  font-weight: ${R.NORMAL};
  color: ${N.TITLE};
`,P=e.h3`
  font-size: ${_.L};
  font-weight: ${R.NORMAL};
  color: ${N.TITLE};
`,Y=({className:e,iconKind:t,fillColor:i,size:l,iconRotate:r="0deg"})=>o(q,Object.assign({className:e,$iconRotate:r},{children:[t===v.INFO&&n(J,{$fillColor:i,width:_[l],height:_[l]}),t===v.OPEN_IN_NEW&&n(Q,{$fillColor:i,width:_[l],height:_[l]}),t===v.NAVIGATE_NEXT&&n(Z,{$fillColor:i,width:_[l],height:_[l]}),t===v.MENU&&n(ee,{$fillColor:i,width:_[l],height:_[l]}),t===v.MENU_OPEN&&n(te,{$fillColor:i,width:_[l],height:_[l]})]})),q=e.i`
  display: inline-grid;
  place-content: center;
  transform: rotate(${({$iconRotate:e})=>`${e}`});
`,J=e((e=>n("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"24px",height:"24px",role:"img"},e,{children:n("path",{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"})}))))`
  ${({$fillColor:e})=>`fill: ${N[e]};`}
`,Q=e((e=>o("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",role:"img"},e,{children:[n("path",{d:"M0 0h24v24H0z",fill:"none"}),n("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"})]}))))`
  ${({$fillColor:e})=>`fill: ${N[e]};`}
`,Z=e((e=>o("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",role:"img"},e,{children:[n("path",{d:"M0 0h24v24H0V0z",fill:"none"}),n("path",{d:"M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z"})]}))))`
  ${({$fillColor:e})=>`fill: ${N[e]};`}
`,ee=e((e=>o("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",width:"24px",viewBox:"0 0 24 24"},e,{children:[n("path",{d:"M0 0h24v24H0z",fill:"none"}),n("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})]}))))`
  ${({$fillColor:e})=>`fill: ${N[e]};`}
`,te=e((e=>o("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",width:"24px",viewBox:"0 0 24 24"},e,{children:[n("path",{d:"M0 0h24v24H0V0z",fill:"none"}),n("path",{d:"M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"})]}))))`
  ${({$fillColor:e})=>`fill: ${N[e]};`}
`,ie="eager",ne="lazy",oe=({className:e,src:t,alt:i="",width:o,height:l,loading:r})=>n("img",{className:e,src:t,alt:i,width:o,height:l,loading:"eager"===r?ie:"lazy"===r?ne:void 0}),le=({className:e,text:t})=>n(re,Object.assign({className:e},{children:t})),re=e.p`
  padding: 12px;
  border-left: 2px solid ${w.LIGHT_GRAY};
`;function ae(e,t,i,n){return new(i||(i=Promise))((function(o,l){function r(e){try{s(n.next(e))}catch(e){l(e)}}function a(e){try{s(n.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}s((n=n.apply(e,t||[])).next())}))}const se="styled_map",de={center:{lat:35.7803731,lng:139.726063},zoom:16,mapTypeControl:!1,mapTypeControlOptions:{mapTypeIds:[se]}},ce=[{elementType:"geometry",stylers:[{color:"#ebe3cd"}]},{elementType:"labels.text.fill",stylers:[{color:"#523735"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#c9b2a6"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{color:"#dcd2be"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#ae9e90"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#93817c"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#a5b076"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#447530"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#fdfcf8"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#f8c967"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#e9bc62"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#e98d58"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{color:"#db8555"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#806b63"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{color:"#8f7d77"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{color:"#ebe3cd"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#b9d3c2"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#92998d"}]}],pe=({loaderOptions:e,height:t})=>{const i=a(null),o=s((()=>ae(void 0,void 0,void 0,(function*(){if(null===i.current)return;const t=new r(e),n=yield t.load(),o=new n.maps.StyledMapType(ce),l=new n.maps.Map(i.current,de);l.mapTypes.set(se,o),l.setMapTypeId(se),new n.maps.Marker({map:l,position:de.center})}))),[e]);return d((()=>(o(),()=>{})),[o]),n(he,{ref:i,$height:t})},he=e.div`
  height: ${({$height:e})=>e};
`,me={XGA:"1025px",PC:"769px",TABLET:"768px",MOBILE:"540px"},ge={XGA:`(min-width: ${me.XGA})`,PC:`(min-width: ${me.PC})`,TABLET:`(max-width: ${me.TABLET})`,MOBILE:`(max-width: ${me.MOBILE})`},$e={XGA:`@media screen and ${ge.XGA}`,PC:`@media screen and ${ge.PC}`,TABLET:`@media screen and ${ge.TABLET}`,MOBILE:`@media screen and ${ge.MOBILE}`},fe=()=>"undefined"!=typeof window?c:d,Te=()=>{const e=p((()=>{if("undefined"!=typeof window)return window.matchMedia(ge.TABLET)}),[]),[t,i]=h(!!e&&e.matches),n=s((e=>{i(e.matches)}),[]);return d((()=>{if(e)return e.addEventListener("change",n,!1),()=>{e.removeEventListener("change",n,!1)}}),[n,e]),{isTablet:t}},ye=({className:e,text:t,href:i,target:l})=>o(ue,Object.assign({className:e,href:i,target:l},{children:[n(be,{children:t}),"_blank"===l&&n(Ee,{iconKind:"OPEN_IN_NEW",fillColor:"LINK",size:"M"})]})),Ee=e(Y)``,ue=e(A)`
  display: inline-flex;

  & > ${Ee} {
    margin-left: ${z.XS};

    & > svg {
      transition: fill ${I};
    }
  }

  @media (any-hover: hover) {
    &:hover {
      & > ${Ee} {
        & > svg {
          fill: ${N.LINK_HOVER};
        }
      }
    }
  }
`,be=e.span`
  display: inline-flex;
`,Le="M",Ne="S",Oe=({className:e,onClick:t,text:i,buttonSize:l,buttonColor:r,iconKind:a,iconRotate:s,isAnchor:d,href:c,target:p})=>o(we,Object.assign({className:e},{children:[d&&o(ve,Object.assign({href:c,target:p,onClick:t,$buttonColor:r,$buttonSize:l},{children:[a&&n(Ae,{iconKind:a,fillColor:"WHITE",size:l===Le?"XXL":"L",iconRotate:s,$buttonSize:l}),i&&n(He,Object.assign({$buttonSize:l},{children:i}))]})),!d&&o(Ie,Object.assign({$buttonColor:r,$buttonSize:l,onClick:t},{children:[a&&n(Ae,{iconKind:a,fillColor:"WHITE",size:l===Le?"XXL":"L",iconRotate:s,$buttonSize:l}),i&&n(He,Object.assign({$buttonSize:l},{children:i}))]}))]})),we=e.div`
  display: inline-flex;
  pointer-events: auto;
`,xe=t`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  min-width: ${({$buttonSize:e})=>e===Ne?S.S.WIDTH:S.M.WIDTH};

  min-height: ${({$buttonSize:e})=>e===Ne?S.S.HEIGHT:S.M.HEIGHT};

  margin: ${z.NONE};
  font-size: ${_.M};
  color: ${N.WHITE};
  transition: background ${I};

  ${({$buttonColor:e})=>`background: ${L[e]};`}

  ${({$buttonColor:e})=>{if("DEFAULT_CURRENT"===e)return"\n        cursor: pointer;\n        pointer-events: none;\n      "}}

  border-radius: ${j.S};

  @media (any-hover: hover) {
    &:hover {
      color: ${N.WHITE};

      ${({$buttonColor:e})=>"DEFAULT"===e?`\n            background: ${L.DEFAULT_HOVER};\n          `:"EXTERNAL"===e?`\n            background: ${L.EXTERNAL_HOVER};\n          `:void 0}
    }
  }
`,Ie=e.button`
  ${xe}
`,ve=e(A)`
  ${xe}
`,Ae=e(Y)`
  margin: ${({$buttonSize:e})=>e===Le?`${z.NONE} ${z.XS}`:`${z.NONE}`};
`,He=e.div`
  margin-right: ${({$buttonSize:e})=>e===Le?z.M:z.S};

  text-align: left;

  font-size: ${({$buttonSize:e})=>e===Le?_.M:_.S};

  user-select: none;

  &:not(${Ae} + &) {
    margin-left: ${({$buttonSize:e})=>e===Le?z.M:z.S};
  }
`,Me=(e,t)=>`<button class="${t}"><span class="inner"></span></button>`,Ce=({imageList:e})=>n(Re,Object.assign({modules:[$,f],loop:!0,slidesPerView:1,speed:1200,autoplay:{delay:4e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},pagination:{clickable:!0,renderBullet:Me,bulletClass:"custom-bullet-style",bulletActiveClass:"custom-bullet-style-active"},centeredSlides:!0,spaceBetween:40},{children:g(e,(({src:e,alt:t,width:i,height:o,loading:l},r)=>n(y,{children:n(_e,{src:e,alt:t,width:i,height:o,loading:l})},r)))})),_e=e(oe)``,Re=e(T)`
  & .swiper-slide {
    display: grid;
    place-content: center;
  }

  & .swiper-slide ${_e} {
    width: 100%;
    max-width: ${"749px"};
    height: 100%;
    object-fit: cover;
  }

  & .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: 0;
  }

  & .custom-bullet-style {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${S.M.WIDTH};
    height: ${S.S.HEIGHT};
    margin: ${z.NONE} ${z.S};

    ${$e.MOBILE} {
      display: none;
    }
  }

  & .custom-bullet-style .inner {
    width: 100%;
    height: 4px;
    background: #fff;
  }

  & .custom-bullet-style-active .inner {
    background: #ff8897;
  }
`,Se=({className:e,commonList:t})=>n(ze,Object.assign({className:e},{children:g(t,((e,t)=>o(m,{children:[n(Xe,{children:e.title}),n(Ge,{children:e.description})]},t)))})),ze=e.dl`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > :nth-of-type(-n + 1) {
    margin-top: ${z.NONE};
  }
`,je="68%",ke="32%",Ue="4px",Be="12px",Xe=e.dt`
  width: ${ke};
  margin-top: ${z.M};
  padding-top: ${Ue};
  padding-bottom: ${Ue};
  padding-right: ${Be};
  font-weight: ${R.BOLD};

  ${$e.MOBILE} {
    width: ${C.FULL};
    margin-top: ${z.M};
  }
`,Ge=e.dd`
  width: ${je};
  margin-top: ${z.M};
  padding-top: ${Ue};
  padding-bottom: ${Ue};
  padding-left: ${Be};
  border-left: 2px solid ${w.LIGHT_GRAY};

  ${$e.MOBILE} {
    width: ${C.FULL};
    margin-top: ${z.XS};
  }
`,Ke=({className:e,navigationList:t,handleLinkEvent:i,currentPath:l,isOpenNavigation:r=!0,handleSetIsOpenNavigation:a})=>{const{isTablet:s}=Te();return fe()((()=>{a(!s)}),[s]),o(Fe,Object.assign({className:e,$isOpen:r},{children:[n(Ve,Object.assign({$isOpen:r},{children:g(t,((e,t)=>n(De,{onClick:t=>{i(t,e.path,e.isExternal),s&&a(!1)},text:e.name,buttonSize:"M",buttonColor:e.isExternal?"EXTERNAL":e.path===l?"DEFAULT_CURRENT":"DEFAULT",isAnchor:!0,href:e.path,target:e.isExternal?"_blank":"_self"},t)))})),n(We,Object.assign({$isOpen:r},{children:n(Oe,{onClick:()=>a(!r),buttonSize:"M",buttonColor:"DEFAULT",iconKind:r?"MENU_OPEN":"MENU"})}))]}))},Fe=e.div`
  overflow-y: auto;
  transition: background 0.25s ease;

  ${$e.TABLET} {
    position: fixed;
    top: 0;
    right: 0;
    width: ${C.HALF};

    /* NOTE: iOS Safari の address bar 対策のため */
    height: 100vh;
    height: 100dvh;

    background: none;
    pointer-events: none;

    ${({$isOpen:e})=>e&&`\n        background: ${b.WHITE};\n        pointer-events: auto;\n      `}
  }

  ${$e.MOBILE} {
    width: ${C.FULL};
  }
`,De=e(Oe)`
  justify-content: center;
  flex-grow: 1;
  margin: ${z.NONE};

  ${$e.TABLET} {
    flex-grow: 0;
  }

  /* HACK: 子要素が別のタグの為 */
  & > button,
  & > a {
    width: 100%;

    & > div {
      ${$e.XGA} {
        font-size: ${_.L};
      }
    }
  }
`,Ve=e.nav`
  display: ${({$isOpen:e})=>e?"flex":"none"};
  justify-content: space-between;
  overflow: hidden;
  border-radius: ${j.M};
  background: ${L.DEFAULT};

  & > ${De} {
    &:not(:nth-last-of-type(1)) {
      border-right: 1px solid ${w.WHITE};
    }

    ${$e.TABLET} {
      &:not(:nth-last-of-type(1)) {
        border-right: none;
      }
    }
  }

  ${$e.TABLET} {
    flex-direction: column;
    align-items: flex-end;
    height: calc((${S.M.HEIGHT} * 6) + (${z.L} * 5));
    margin-bottom: ${z.L};
    border-radius: ${j.NONE};
    background: none;
  }
`,We=e.div`
  display: none;

  ${$e.TABLET} {
    display: flex;
    justify-content: flex-end;
    margin-top: ${({$isOpen:e})=>e?"0":"336px"};
  }
`,Pe=({className:e,imageProps:t})=>n(Ye,Object.assign({className:e},{children:n(oe,{src:t.src,alt:t.alt,width:t.width,height:t.height,loading:t.loading})})),Ye=e.div`
  display: inline-flex;
  border: 8px solid ${w.LIGHT_GRAY};

  /* NOTE: ここでしか利用しないのでハードコードで対応する */
  background: ${u.LIGHT_GRAY};
`;E().format(),E.locale("ja");const qe=({className:e,scheduleList:t,isSummary:i=!1})=>{const l=s((e=>E(e).format("YYYY年M月D日(ddd)")),[]);return o("div",Object.assign({className:e},{children:[!t.length&&n("div",{children:"準備中です"}),g(t,((e,t)=>o(Je,Object.assign({isSummary:i},{children:[o(it,Object.assign({isSummary:i},{children:[l(e.startDate),e.startDate!==e.endDate&&`〜${l(e.endDate)}`]})),o(nt,Object.assign({isSummary:i},{children:[e.timeFrame&&n(ot,{children:e.timeFrame}),n(lt,{dangerouslySetInnerHTML:{__html:e.description}})]}))]}),t)))]}))},Je=e.div`
  display: flex;
  justify-content: space-between;

  &:not(:first-of-type) {
    margin-top: ${z.M};
  }

  ${$e.MOBILE} {
    flex-direction: column;
  }

  ${({isSummary:e})=>e&&"flex-direction: column;"}
`,Qe="68%",Ze="32%",et="4px",tt="12px",it=e.div`
  width: ${Ze};
  padding-top: ${et};
  padding-bottom: ${et};
  padding-right: ${tt};
  font-weight: ${R.BOLD};

  ${$e.MOBILE} {
    width: ${C.FULL};
  }

  ${({isSummary:e})=>e&&`\n      width: ${C.FULL};\n    `}
`,nt=e.div`
  width: ${Qe};
  padding-top: ${et};
  padding-bottom: ${et};
  padding-left: ${tt};
  border-left: 2px solid ${w.LIGHT_GRAY};

  ${$e.MOBILE} {
    width: ${C.FULL};
    margin-top: ${z.XS};
  }

  ${({isSummary:e})=>e&&`\n      display: -webkit-box;\n      width: ${C.FULL};\n      margin-top: ${z.XS};\n      overflow: hidden;\n      -webkit-line-clamp: 1;\n      -webkit-box-orient: vertical;\n    `}
`,ot=e.div`
  display: inline;
  margin-right: ${z.M};
  font-weight: ${R.BOLD};
`,lt=e.div`
  display: inline;

  /* NOTE: 外部から呼んだ html を使うため */
  > a {
    ${H}
  }
`;export{A as Anchor,ye as AnchorText,k as AnnotationText,b as BACKGROUND_COLOR,u as BASE_COLOR,C as BLOCK_WIDTH,w as BORDER_COLOR,j as BORDER_RADIUS,me as BREAK_POINTS,L as BUTTON_BACKGROUND_COLOR,Oe as Button,O as CHIP_BACKGROUND_COLOR,Ce as Carousel,B as Chip,Se as CommonList,N as FONT_COLOR,R as FONT_WEIGHT,Ke as GlobalNavigation,D as HeadingText,S as ICON_BUTTON_SIZE,v as ICON_KIND,_ as INLINE_SIZE,Y as Icon,oe as Image,ge as MATCH_MEDIA,$e as MEDIA_QUERY,le as ParagraphText,Pe as Photo,z as SPACE,qe as ScheduleList,pe as ShopMap,I as TRANSITION_TIME,x as globalStyle,fe as useIsomorphicEffect,Te as useMatchMedia};
