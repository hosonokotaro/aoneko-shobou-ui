import e,{css as t,createGlobalStyle as i}from"styled-components";import{jsx as n,jsxs as o,Fragment as l}from"react/jsx-runtime";import{map as r}from"lodash-es";import{Loader as a}from"@googlemaps/js-api-loader";import{useRef as s,useCallback as d,useEffect as c,useLayoutEffect as p,useMemo as h,useState as T,Fragment as m}from"react";import"swiper/css";import"swiper/css/pagination";import{Autoplay as $,Pagination as g}from"swiper";import{Swiper as f,SwiperSlide as E}from"swiper/react";import"dayjs/locale/ja";import y from"dayjs";const u={ATTENTION:"#a370d3",CAUTION:"#ff8897",CAPTION:"#999",INFORMATION:"#5d7fb3",LINK:"#4a90d6",LINK_HOVER:"#417cb5",LINK_CURRENT:"#34628f",LINK_EXTERNAL:"#a4a368",LINK_EXTERNAL_HOVER:"#827f3c",TITLE:"#a370d3",BLACK:"#111",LIGHT_GRAY:"#eee",WHITE:"#fcfcfc"},N={WHITE:u.WHITE},L={DEFAULT:u.LINK,DEFAULT_HOVER:u.LINK_HOVER,DEFAULT_CURRENT:u.LINK_CURRENT,EXTERNAL:u.LINK_EXTERNAL,EXTERNAL_HOVER:u.LINK_EXTERNAL_HOVER},b={CAPTION:u.CAPTION,CAUTION:u.CAUTION,LINK:u.LINK,LINK_HOVER:u.LINK_HOVER,TITLE:u.TITLE,WHITE:u.WHITE,BLACK:u.BLACK},O={DEFAULT:u.INFORMATION,CAUTION:u.CAUTION},I={LIGHT_GRAY:u.LIGHT_GRAY,GRAY:u.CAPTION,BLACK:u.BLACK,TITLE:u.TITLE,WHITE:u.WHITE},w=t`
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
    color: ${b.BLACK};
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
  ${w}
`;const x="0.25s ease",A={INFO:"INFO",OPEN_IN_NEW:"OPEN_IN_NEW",NAVIGATE_NEXT:"NAVIGATE_NEXT",MENU:"MENU",MENU_OPEN:"MENU_OPEN"},v=({className:e,href:t,target:i,onClick:o,children:l})=>n(H,Object.assign({className:e,href:t,target:i,rel:"_blank"===i?"noopener noreferrer":void 0,onClick:e=>{"function"==typeof o&&"_blank"!==i&&o(e)}},{children:l})),_=t`
  color: ${b.LINK};
  transition: color ${x};

  @media (any-hover: hover) {
    &:hover {
      color: ${b.LINK_HOVER};
    }
  }
`,H=e.a`
  ${_}
`,M={AUTO:"auto",FULL:"100%",HALF:"50%",ONE_THIRD:"calc(100% / 3)"},C={XXL:"2rem",XL:"1.6rem",L:"1.2rem",M:"1rem",S:"0.9rem"},R={BOLD:"600",NORMAL:"300"},D={M:{WIDTH:"40px",HEIGHT:"40px"},S:{WIDTH:"20px",HEIGHT:"20px"}},S={AUTO:"auto",XL:"20px",L:"16px",M:"12px",S:"8px",XS:"4px",NONE:"0"},G={M:"6px",S:"3px",NONE:"0"},z={WIDTH_ODD:"68%",WIDTH_EVEN:"32%",PADDING_TOP_BOTTOM:S.XS,PADDING_LEFT_RIGHT:S.M},B=({className:e,text:t,color:i})=>n(j,Object.assign({className:e,$color:i},{children:t})),j=e.span`
  font-size: ${C.M};
  color: ${({$color:e})=>b[e]};
`,k=({className:e,status:t,text:i})=>n(U,Object.assign({className:e,$status:t},{children:i})),U=e.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: ${G.S};
  background: ${({$status:e})=>O[e]};
  color: ${b.WHITE};
`,P="PAGE_TITLE",X="SECTION_TITLE",F="SUBTITLE",K=({className:e,text:t,kind:i})=>o(l,{children:[i===P&&n(W,Object.assign({className:e},{children:t})),i===X&&n(V,Object.assign({className:e},{children:t})),i===F&&n(Y,Object.assign({className:e},{children:t}))]}),W=e.h1`
  font-size: ${C.XXL};
  font-weight: ${R.NORMAL};
  color: ${b.TITLE};
`,V=e.h2`
  padding-left: 8px;
  border-left: 2px solid ${I.TITLE};
  font-size: ${C.XL};
  font-weight: ${R.NORMAL};
  color: ${b.TITLE};
`,Y=e.h3`
  font-size: ${C.L};
  font-weight: ${R.NORMAL};
  color: ${b.TITLE};
`,q=({className:e,iconKind:t,fillColor:i,size:l,iconRotate:r="0deg"})=>o(J,Object.assign({className:e,$iconRotate:r},{children:[t===A.INFO&&n(Q,{$fillColor:i,width:C[l],height:C[l]}),t===A.OPEN_IN_NEW&&n(Z,{$fillColor:i,width:C[l],height:C[l]}),t===A.NAVIGATE_NEXT&&n(ee,{$fillColor:i,width:C[l],height:C[l]}),t===A.MENU&&n(te,{$fillColor:i,width:C[l],height:C[l]}),t===A.MENU_OPEN&&n(ie,{$fillColor:i,width:C[l],height:C[l]})]})),J=e.i`
  display: inline-grid;
  place-content: center;
  transform: rotate(${({$iconRotate:e})=>`${e}`});
`,Q=e((e=>n("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"24px",height:"24px",role:"img"},e,{children:n("path",{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"})}))))`
  ${({$fillColor:e})=>`fill: ${b[e]};`}
`,Z=e((e=>o("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",role:"img"},e,{children:[n("path",{d:"M0 0h24v24H0z",fill:"none"}),n("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"})]}))))`
  ${({$fillColor:e})=>`fill: ${b[e]};`}
`,ee=e((e=>o("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",role:"img"},e,{children:[n("path",{d:"M0 0h24v24H0V0z",fill:"none"}),n("path",{d:"M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z"})]}))))`
  ${({$fillColor:e})=>`fill: ${b[e]};`}
`,te=e((e=>o("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",width:"24px",viewBox:"0 0 24 24"},e,{children:[n("path",{d:"M0 0h24v24H0z",fill:"none"}),n("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})]}))))`
  ${({$fillColor:e})=>`fill: ${b[e]};`}
`,ie=e((e=>o("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",width:"24px",viewBox:"0 0 24 24"},e,{children:[n("path",{d:"M0 0h24v24H0V0z",fill:"none"}),n("path",{d:"M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"})]}))))`
  ${({$fillColor:e})=>`fill: ${b[e]};`}
`,ne="eager",oe="lazy",le=({className:e,src:t,alt:i="",width:o,height:l,loading:r})=>n("img",{className:e,src:t,alt:i,width:o,height:l,loading:"eager"===r?ne:"lazy"===r?oe:void 0}),re=({className:e,placeholder:t,isMultiLine:i})=>i?n(se,{className:e,placeholder:t}):n(de,{type:"text",className:e,placeholder:t}),ae=t`
  width: ${M.FULL};
  padding: ${`${S.M} ${S.S}`};
  border: 1px solid ${I.GRAY};
  color: ${b.BLACK};
  border-radius: ${G.S};

  &::placeholder {
    color: ${b.CAPTION};
  }

  &:focus {
    outline: 1px solid ${I.BLACK};
  }
`,se=e.textarea`
  height: 16em;

  ${ae}
`,de=e.input`
  ${ae}
`,ce=({className:e,text:t})=>n(pe,Object.assign({className:e},{children:t})),pe=e.p`
  padding: 12px;
  border-left: 2px solid ${I.LIGHT_GRAY};
`,he=({className:e,valueList:t})=>n(Te,Object.assign({className:e},{children:r(t,(e=>n("option",Object.assign({value:e},{children:e}),e)))})),Te=e.select`
  width: ${M.FULL};
  padding: ${`${S.M} ${S.XS}`};
  border: 1px solid ${I.GRAY};
  color: ${b.BLACK};
  border-radius: ${G.S};

  &:focus {
    outline: 1px solid ${I.BLACK};
  }
`;function me(e,t,i,n){return new(i||(i=Promise))((function(o,l){function r(e){try{s(n.next(e))}catch(e){l(e)}}function a(e){try{s(n.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}s((n=n.apply(e,t||[])).next())}))}const $e="styled_map",ge={center:{lat:35.7803731,lng:139.726063},zoom:16,mapTypeControl:!1,mapTypeControlOptions:{mapTypeIds:[$e]}},fe=[{elementType:"geometry",stylers:[{color:"#ebe3cd"}]},{elementType:"labels.text.fill",stylers:[{color:"#523735"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#c9b2a6"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{color:"#dcd2be"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#ae9e90"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#93817c"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#a5b076"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#447530"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#fdfcf8"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#f8c967"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#e9bc62"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#e98d58"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{color:"#db8555"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#806b63"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{color:"#8f7d77"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{color:"#ebe3cd"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#b9d3c2"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#92998d"}]}],Ee=({loaderOptions:e,height:t})=>{const i=s(null),o=d((()=>me(void 0,void 0,void 0,(function*(){if(null===i.current)return;const t=new a(e),n=yield t.load(),o=new n.maps.StyledMapType(fe),l=new n.maps.Map(i.current,ge);l.mapTypes.set($e,o),l.setMapTypeId($e),new n.maps.Marker({map:l,position:ge.center})}))),[e]);return c((()=>(o(),()=>{})),[o]),n(ye,{ref:i,$height:t})},ye=e.div`
  height: ${({$height:e})=>e};
`,ue={XGA:"1025px",PC:"769px",TABLET:"768px",MOBILE:"540px"},Ne={XGA:`(min-width: ${ue.XGA})`,PC:`(min-width: ${ue.PC})`,TABLET:`(max-width: ${ue.TABLET})`,MOBILE:`(max-width: ${ue.MOBILE})`},Le={XGA:`@media screen and ${Ne.XGA}`,PC:`@media screen and ${Ne.PC}`,TABLET:`@media screen and ${Ne.TABLET}`,MOBILE:`@media screen and ${Ne.MOBILE}`},be=()=>"undefined"!=typeof window?p:c,Oe=()=>{const e=h((()=>{if("undefined"!=typeof window)return window.matchMedia(Ne.TABLET)}),[]),[t,i]=T(!!e&&e.matches),n=d((e=>{i(e.matches)}),[]);return c((()=>{if(e)return e.addEventListener("change",n,!1),()=>{e.removeEventListener("change",n,!1)}}),[n,e]),{isTablet:t}},Ie=({className:e,text:t,href:i,target:l})=>o(xe,Object.assign({className:e,href:i,target:l},{children:[n(Ae,{children:t}),"_blank"===l&&n(we,{iconKind:"OPEN_IN_NEW",fillColor:"LINK",size:"M"})]})),we=e(q)``,xe=e(v)`
  display: inline-flex;

  & > ${we} {
    margin-left: ${S.XS};

    & > svg {
      transition: fill ${x};
    }
  }

  @media (any-hover: hover) {
    &:hover {
      & > ${we} {
        & > svg {
          fill: ${b.LINK_HOVER};
        }
      }
    }
  }
`,Ae=e.span`
  display: inline-flex;
`,ve="M",_e="S",He=({className:e,onClick:t,text:i,buttonSize:l,buttonColor:r,iconKind:a,iconRotate:s,isAnchor:d,href:c,target:p})=>o(Me,Object.assign({className:e},{children:[d&&o(De,Object.assign({href:c,target:p,onClick:t,$buttonColor:r,$buttonSize:l},{children:[a&&n(Se,{iconKind:a,fillColor:"WHITE",size:l===ve?"XXL":"L",iconRotate:s,$buttonSize:l}),i&&n(Ge,Object.assign({$buttonSize:l},{children:i}))]})),!d&&o(Re,Object.assign({$buttonColor:r,$buttonSize:l,onClick:t},{children:[a&&n(Se,{iconKind:a,fillColor:"WHITE",size:l===ve?"XXL":"L",iconRotate:s,$buttonSize:l}),i&&n(Ge,Object.assign({$buttonSize:l},{children:i}))]}))]})),Me=e.div`
  display: inline-flex;
  pointer-events: auto;
`,Ce=t`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  min-width: ${({$buttonSize:e})=>e===_e?D.S.WIDTH:D.M.WIDTH};

  min-height: ${({$buttonSize:e})=>e===_e?D.S.HEIGHT:D.M.HEIGHT};

  margin: ${S.NONE};
  font-size: ${C.M};
  color: ${b.WHITE};
  transition: background ${x};

  ${({$buttonColor:e})=>`background: ${L[e]};`}

  ${({$buttonColor:e})=>{if("DEFAULT_CURRENT"===e)return"\n        cursor: pointer;\n        pointer-events: none;\n      "}}

  border-radius: ${G.S};

  @media (any-hover: hover) {
    &:hover {
      color: ${b.WHITE};

      ${({$buttonColor:e})=>"DEFAULT"===e?`\n            background: ${L.DEFAULT_HOVER};\n          `:"EXTERNAL"===e?`\n            background: ${L.EXTERNAL_HOVER};\n          `:void 0}
    }
  }
`,Re=e.button`
  ${Ce}
`,De=e(v)`
  ${Ce}
`,Se=e(q)`
  margin: ${({$buttonSize:e})=>e===ve?`${S.NONE} ${S.XS}`:`${S.NONE}`};
`,Ge=e.div`
  margin-right: ${({$buttonSize:e})=>e===ve?S.M:S.S};

  text-align: left;

  font-size: ${({$buttonSize:e})=>e===ve?C.M:C.S};

  user-select: none;

  &:not(${Se} + &) {
    margin-left: ${({$buttonSize:e})=>e===ve?S.M:S.S};
  }
`,ze=(e,t)=>`<button class="${t}"><span class="inner"></span></button>`,Be=({imageList:e})=>n(ke,Object.assign({modules:[$,g],loop:!0,slidesPerView:1,speed:1200,autoplay:{delay:4e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},pagination:{clickable:!0,renderBullet:ze,bulletClass:"custom-bullet-style",bulletActiveClass:"custom-bullet-style-active"},centeredSlides:!0,spaceBetween:40},{children:r(e,(({src:e,alt:t,width:i,height:o,loading:l},r)=>n(E,{children:n(je,{src:e,alt:t,width:i,height:o,loading:l})},r)))})),je=e(le)``,ke=e(f)`
  & .swiper-slide {
    display: grid;
    place-content: center;
  }

  & .swiper-slide ${je} {
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
    width: ${D.M.WIDTH};
    height: ${D.S.HEIGHT};
    margin: ${S.NONE} ${S.S};

    ${Le.MOBILE} {
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
`,Ue=({className:e,commonList:t})=>n(Pe,Object.assign({className:e},{children:r(t,((e,t)=>o(m,{children:[n(Xe,{children:e.title}),n(Fe,{children:e.description})]},t)))})),Pe=e.dl`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > :nth-of-type(-n + 1) {
    margin-top: ${S.NONE};
  }
`,Xe=e.dt`
  width: ${z.WIDTH_EVEN};
  margin-top: ${S.M};
  padding: ${`${z.PADDING_TOP_BOTTOM} ${z.PADDING_LEFT_RIGHT}`};
  padding-left: 0;
  font-weight: ${R.BOLD};

  ${Le.MOBILE} {
    width: ${M.FULL};
    margin-top: ${S.M};
  }
`,Fe=e.dd`
  width: ${z.WIDTH_ODD};
  margin-top: ${S.M};
  padding: ${`${z.PADDING_TOP_BOTTOM} ${z.PADDING_LEFT_RIGHT}`};
  padding-right: 0;
  border-left: 2px solid ${I.LIGHT_GRAY};

  ${Le.MOBILE} {
    width: ${M.FULL};
    margin-top: ${S.XS};
  }
`,Ke=({className:e,navigationList:t,handleLinkEvent:i,currentPath:l,isOpenNavigation:a=!0,handleSetIsOpenNavigation:s})=>{const{isTablet:d}=Oe();return be()((()=>{s(!d)}),[d]),o(We,Object.assign({className:e,$isOpen:a},{children:[n(Ye,Object.assign({$isOpen:a},{children:r(t,((e,t)=>n(Ve,{onClick:t=>{i(t,e.path,e.isExternal),d&&s(!1)},text:e.name,buttonSize:"M",buttonColor:e.isExternal?"EXTERNAL":e.path===l?"DEFAULT_CURRENT":"DEFAULT",isAnchor:!0,href:e.path,target:e.isExternal?"_blank":"_self"},t)))})),n(qe,Object.assign({$isOpen:a},{children:n(He,{onClick:()=>s(!a),buttonSize:"M",buttonColor:"DEFAULT",iconKind:a?"MENU_OPEN":"MENU"})}))]}))},We=e.div`
  overflow-y: auto;
  transition: background 0.25s ease;

  ${Le.TABLET} {
    position: fixed;
    top: 0;
    right: 0;
    width: ${M.HALF};

    /* NOTE: iOS Safari の address bar 対策のため */
    height: 100vh;
    height: 100dvh;

    background: none;
    pointer-events: none;

    ${({$isOpen:e})=>e&&`\n        background: ${N.WHITE};\n        pointer-events: auto;\n      `}
  }

  ${Le.MOBILE} {
    width: ${M.FULL};
  }
`,Ve=e(He)`
  justify-content: center;
  flex-grow: 1;
  margin: ${S.NONE};

  ${Le.TABLET} {
    flex-grow: 0;
  }

  /* HACK: 子要素が別のタグの為 */
  & > button,
  & > a {
    width: 100%;

    & > div {
      ${Le.XGA} {
        font-size: ${C.L};
      }
    }
  }
`,Ye=e.nav`
  display: ${({$isOpen:e})=>e?"flex":"none"};
  justify-content: space-between;
  overflow: hidden;
  border-radius: ${G.M};
  background: ${L.DEFAULT};

  & > ${Ve} {
    &:not(:nth-last-of-type(1)) {
      border-right: 1px solid ${I.WHITE};
    }

    ${Le.TABLET} {
      &:not(:nth-last-of-type(1)) {
        border-right: none;
      }
    }
  }

  ${Le.TABLET} {
    flex-direction: column;
    align-items: flex-end;
    height: calc((${D.M.HEIGHT} * 6) + (${S.L} * 5));
    margin-bottom: ${S.L};
    border-radius: ${G.NONE};
    background: none;
  }
`,qe=e.div`
  display: none;

  ${Le.TABLET} {
    display: flex;
    justify-content: flex-end;
    margin-top: ${({$isOpen:e})=>e?"0":"336px"};
  }
`,Je=({className:e,imageProps:t})=>n(Qe,Object.assign({className:e},{children:n(le,{src:t.src,alt:t.alt,width:t.width,height:t.height,loading:t.loading})})),Qe=e.div`
  display: inline-flex;
  border: 8px solid ${I.LIGHT_GRAY};

  /* NOTE: ここでしか利用しないのでハードコードで対応する */
  background: ${u.LIGHT_GRAY};
`;y().format(),y.locale("ja");const Ze=({className:e,scheduleList:t,isSummary:i=!1})=>{const l=d((e=>y(e).format("YYYY年M月D日(ddd)")),[]);return o("div",Object.assign({className:e},{children:[!t.length&&n("div",{children:"準備中です"}),r(t,((e,t)=>o(et,Object.assign({isSummary:i},{children:[o(tt,Object.assign({isSummary:i},{children:[l(e.startDate),e.startDate!==e.endDate&&`〜${l(e.endDate)}`]})),o(it,Object.assign({isSummary:i},{children:[e.timeFrame&&n(nt,{children:e.timeFrame}),n(ot,{dangerouslySetInnerHTML:{__html:e.description}})]}))]}),t)))]}))},et=e.div`
  display: flex;
  justify-content: space-between;

  &:not(:first-of-type) {
    margin-top: ${S.M};
  }

  ${Le.MOBILE} {
    flex-direction: column;
  }

  ${({isSummary:e})=>e&&"flex-direction: column;"}
`,tt=e.div`
  width: ${z.WIDTH_EVEN};
  padding: ${`${z.PADDING_TOP_BOTTOM} ${z.PADDING_LEFT_RIGHT}`};
  padding-left: 0;
  font-weight: ${R.BOLD};

  ${Le.MOBILE} {
    width: ${M.FULL};
  }

  ${({isSummary:e})=>e&&`\n      width: ${M.FULL};\n    `}
`,it=e.div`
  width: ${z.WIDTH_ODD};
  padding: ${`${z.PADDING_TOP_BOTTOM} ${z.PADDING_LEFT_RIGHT}`};
  padding-right: 0;
  border-left: 2px solid ${I.LIGHT_GRAY};

  ${Le.MOBILE} {
    width: ${M.FULL};
    margin-top: ${S.XS};
  }

  ${({isSummary:e})=>e&&`\n      display: -webkit-box;\n      width: ${M.FULL};\n      margin-top: ${S.XS};\n      overflow: hidden;\n      -webkit-line-clamp: 1;\n      -webkit-box-orient: vertical;\n    `}
`,nt=e.div`
  display: inline;
  margin-right: ${S.M};
  font-weight: ${R.BOLD};
`,ot=e.div`
  display: inline;

  /* NOTE: 外部から呼んだ html を使うため */
  > a {
    ${_}
  }
`;export{v as Anchor,Ie as AnchorText,B as AnnotationText,N as BACKGROUND_COLOR,u as BASE_COLOR,M as BLOCK_WIDTH,I as BORDER_COLOR,G as BORDER_RADIUS,ue as BREAK_POINTS,L as BUTTON_BACKGROUND_COLOR,He as Button,O as CHIP_BACKGROUND_COLOR,Be as Carousel,k as Chip,Ue as CommonList,b as FONT_COLOR,R as FONT_WEIGHT,Ke as GlobalNavigation,K as HeadingText,D as ICON_BUTTON_SIZE,A as ICON_KIND,C as INLINE_SIZE,q as Icon,le as Image,re as InputText,Ne as MATCH_MEDIA,Le as MEDIA_QUERY,ce as ParagraphText,Je as Photo,S as SPACE,Ze as ScheduleList,he as Select,Ee as ShopMap,z as TABLE_TWO_COLUMN,x as TRANSITION_TIME,w as globalStyle,be as useIsomorphicEffect,Oe as useMatchMedia};
