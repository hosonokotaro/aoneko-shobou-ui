import"./globalStyle.css.ts.vanilla.css";import{jsx as e,jsxs as t,Fragment as i}from"react/jsx-runtime";import n,{css as o}from"styled-components";import"./components/atoms/Chip.css.ts.vanilla.css";import{map as l}from"lodash-es";import{Loader as r}from"@googlemaps/js-api-loader";import{useRef as a,useCallback as s,useEffect as c,useLayoutEffect as d,useMemo as p,useState as h,Fragment as m}from"react";import"swiper/css";import"swiper/css/pagination";import{Autoplay as T,Pagination as $}from"swiper";import{Swiper as g,SwiperSlide as f}from"swiper/react";import"dayjs/locale/ja";import y from"dayjs";const u={ATTENTION:"#a370d3",CAUTION:"#ff8897",CAPTION:"#999",INFORMATION:"#5d7fb3",LINK:"#4a90d6",LINK_HOVER:"#417cb5",LINK_CURRENT:"#34628f",LINK_EXTERNAL:"#a4a368",LINK_EXTERNAL_HOVER:"#827f3c",TITLE:"#a370d3",BLACK:"#111",LIGHT_GRAY:"#eee",WHITE:"#fcfcfc"},E={WHITE:u.WHITE},L={DEFAULT:u.LINK,DEFAULT_HOVER:u.LINK_HOVER,DEFAULT_CURRENT:u.LINK_CURRENT,EXTERNAL:u.LINK_EXTERNAL,EXTERNAL_HOVER:u.LINK_EXTERNAL_HOVER},N={CAPTION:u.CAPTION,CAUTION:u.CAUTION,LINK:u.LINK,LINK_HOVER:u.LINK_HOVER,TITLE:u.TITLE,WHITE:u.WHITE,BLACK:u.BLACK},b={DEFAULT:u.INFORMATION,CAUTION:u.CAUTION},O={LIGHT_GRAY:u.LIGHT_GRAY,GRAY:u.CAPTION,BLACK:u.BLACK,TITLE:u.TITLE,WHITE:u.WHITE},I="0.25s ease",v={INFO:"INFO",OPEN_IN_NEW:"OPEN_IN_NEW",NAVIGATE_NEXT:"NAVIGATE_NEXT",MENU:"MENU",MENU_OPEN:"MENU_OPEN"},w=({className:t,href:i,target:n,onClick:o,children:l})=>e(x,Object.assign({className:t,href:i,target:n,rel:"_blank"===n?"noopener noreferrer":void 0,onClick:e=>{"function"==typeof o&&"_blank"!==n&&o(e)}},{children:l})),A=o`
  color: ${N.LINK};
  transition: color ${I};

  @media (any-hover: hover) {
    &:hover {
      color: ${N.LINK_HOVER};
    }
  }
`,x=n.a`
  ${A}
`,_={AUTO:"auto",FULL:"100%",HALF:"50%",ONE_THIRD:"calc(100% / 3)"},M={XXL:"2rem",XL:"1.6rem",L:"1.2rem",M:"1rem",S:"0.9rem"},H={BOLD:"600",NORMAL:"300"},C={M:{WIDTH:"40px",HEIGHT:"40px"},S:{WIDTH:"20px",HEIGHT:"20px"}},S={AUTO:"auto",XL:"20px",L:"16px",M:"12px",S:"8px",XS:"4px",NONE:"0"},R={M:"6px",S:"3px",NONE:"0"},D={WIDTH_ODD:"68%",WIDTH_EVEN:"32%",PADDING_TOP_BOTTOM:S.XS,PADDING_LEFT_RIGHT:S.M},j=({className:t,text:i,color:n})=>e(B,Object.assign({className:t,$color:n},{children:i})),B=n.span`
  font-size: ${M.M};
  color: ${({$color:e})=>N[e]};
`;function G(e){var t=e.match(/^var\((.*)\)$/);return t?t[1]:e}function z(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=e.constructor();for(var o in e){var l=e[o],r=[...i,o];"string"==typeof l||"number"==typeof l||null==l?n[o]=t(l,r):"object"!=typeof l||Array.isArray(l)?console.warn('Skipping invalid key "'.concat(r.join("."),'". Should be a string, number, null or object. Received: "').concat(Array.isArray(l)?"Array":typeof l,'"')):n[o]=z(l,t,r)}return n}function P(e,t){var i={};if("object"==typeof t){var n=e;z(t,((e,t)=>{if(null!=e){var o=function(e,t){var i=e;for(var n of t){if(!(n in i))throw new Error("Path ".concat(t.join(" -> ")," does not exist in object"));i=i[n]}return i}(n,t);i[G(o)]=String(e)}}))}else{var o=e;for(var l in o){var r=o[l];null!=r&&(i[G(l)]=r)}}return Object.defineProperty(i,"toString",{value:function(){return Object.keys(this).map((e=>"".concat(e,":").concat(this[e]))).join(";")},writable:!1}),i}const U=({status:t,text:i})=>e("span",Object.assign({className:"Chip_chip__sfltot1",style:Object.assign({},P({"var(--backgroundColor__sfltot0)":b[t]}))},{children:i})),k="PAGE_TITLE",F="SECTION_TITLE",X="SUBTITLE",K=({className:n,text:o,kind:l})=>t(i,{children:[l===k&&e(W,Object.assign({className:n},{children:o})),l===F&&e(V,Object.assign({className:n},{children:o})),l===X&&e(Y,Object.assign({className:n},{children:o}))]}),W=n.h1`
  font-size: ${M.XXL};
  font-weight: ${H.NORMAL};
  color: ${N.TITLE};
`,V=n.h2`
  padding-left: 8px;
  border-left: 2px solid ${O.TITLE};
  font-size: ${M.XL};
  font-weight: ${H.NORMAL};
  color: ${N.TITLE};
`,Y=n.h3`
  font-size: ${M.L};
  font-weight: ${H.NORMAL};
  color: ${N.TITLE};
`,q=({className:i,iconKind:n,fillColor:o,size:l,iconRotate:r="0deg"})=>t(J,Object.assign({className:i,$iconRotate:r},{children:[n===v.INFO&&e(Q,{$fillColor:o,width:M[l],height:M[l]}),n===v.OPEN_IN_NEW&&e(Z,{$fillColor:o,width:M[l],height:M[l]}),n===v.NAVIGATE_NEXT&&e(ee,{$fillColor:o,width:M[l],height:M[l]}),n===v.MENU&&e(te,{$fillColor:o,width:M[l],height:M[l]}),n===v.MENU_OPEN&&e(ie,{$fillColor:o,width:M[l],height:M[l]})]})),J=n.i`
  display: inline-grid;
  place-content: center;
  transform: rotate(${({$iconRotate:e})=>`${e}`});
`,Q=n((t=>e("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"24px",height:"24px",role:"img"},t,{children:e("path",{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"})}))))`
  ${({$fillColor:e})=>`fill: ${N[e]};`}
`,Z=n((i=>t("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",role:"img"},i,{children:[e("path",{d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"})]}))))`
  ${({$fillColor:e})=>`fill: ${N[e]};`}
`,ee=n((i=>t("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",role:"img"},i,{children:[e("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e("path",{d:"M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z"})]}))))`
  ${({$fillColor:e})=>`fill: ${N[e]};`}
`,te=n((i=>t("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",width:"24px",viewBox:"0 0 24 24"},i,{children:[e("path",{d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})]}))))`
  ${({$fillColor:e})=>`fill: ${N[e]};`}
`,ie=n((i=>t("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",width:"24px",viewBox:"0 0 24 24"},i,{children:[e("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e("path",{d:"M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"})]}))))`
  ${({$fillColor:e})=>`fill: ${N[e]};`}
`,ne="eager",oe="lazy",le=({className:t,src:i,alt:n="",width:o,height:l,loading:r})=>e("img",{className:t,src:i,alt:n,width:o,height:l,loading:"eager"===r?ne:"lazy"===r?oe:void 0}),re=({className:t,elementProps:i,placeholder:n})=>e(ae,Object.assign({className:t},{children:e("input",Object.assign({type:"text"},i,{placeholder:n}))})),ae=n.div`
  /* FIXME: Styled components を使った要素は DOM として制御し辛い。
     Style を子要素に適用する使い方をした。なにかの形で修正したい */
  & > input {
    width: ${_.FULL};
    padding: ${`${S.M} ${S.S}`};
    border: 1px solid ${O.GRAY};
    color: ${N.BLACK};
    border-radius: ${R.S};

    &::placeholder {
      color: ${N.CAPTION};
    }

    &:focus {
      outline: 1px solid ${O.BLACK};
    }
  }
`,se=({className:t,text:i})=>e(ce,Object.assign({className:t},{children:i})),ce=n.p`
  padding: 12px;
  border-left: 2px solid ${O.LIGHT_GRAY};
`,de=({className:t,selectElementProps:i,valueList:n})=>e(pe,Object.assign({className:t},{children:e("select",Object.assign({},i,{children:l(n,(t=>e("option",Object.assign({value:t},{children:t}),t)))}))})),pe=n.div`
  /* FIXME: Styled components を使った要素は DOM として制御し辛い。
     Style を子要素に適用する使い方をした。なにかの形で修正したい */
  & > select {
    width: ${_.FULL};
    padding: ${`${S.M} ${S.XS}`};
    border: 1px solid ${O.GRAY};
    color: ${N.BLACK};
    border-radius: ${R.S};

    &:focus {
      outline: 1px solid ${O.BLACK};
    }
  }
`;function he(e,t,i,n){return new(i||(i=Promise))((function(o,l){function r(e){try{s(n.next(e))}catch(e){l(e)}}function a(e){try{s(n.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}s((n=n.apply(e,t||[])).next())}))}const me="styled_map",Te={center:{lat:35.7803731,lng:139.726063},zoom:16,mapTypeControl:!1,mapTypeControlOptions:{mapTypeIds:[me]}},$e=[{elementType:"geometry",stylers:[{color:"#ebe3cd"}]},{elementType:"labels.text.fill",stylers:[{color:"#523735"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#c9b2a6"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{color:"#dcd2be"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#ae9e90"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#93817c"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#a5b076"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#447530"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#fdfcf8"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#f8c967"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#e9bc62"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#e98d58"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{color:"#db8555"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#806b63"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{color:"#8f7d77"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{color:"#ebe3cd"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#b9d3c2"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#92998d"}]}],ge=({loaderOptions:t,height:i})=>{const n=a(null),o=s((()=>he(void 0,void 0,void 0,(function*(){if(null===n.current)return;const e=new r(t),i=yield e.load(),o=new i.maps.StyledMapType($e),l=new i.maps.Map(n.current,Te);l.mapTypes.set(me,o),l.setMapTypeId(me),new i.maps.Marker({map:l,position:Te.center})}))),[t]);return c((()=>(o(),()=>{})),[o]),e(fe,{ref:n,$height:i})},fe=n.div`
  height: ${({$height:e})=>e};
`,ye=({className:t,elementProps:i,placeholder:n})=>e(ue,Object.assign({className:t},{children:e("textarea",Object.assign({},i,{placeholder:n}))})),ue=n.div`
  /* FIXME: Styled components を使った要素は DOM として制御し辛い。
     Style を子要素に適用する使い方をした。なにかの形で修正したい */

  & > textarea {
    width: ${_.FULL};
    height: 16em;
    padding: ${`${S.M} ${S.S}`};
    border: 1px solid ${O.GRAY};
    color: ${N.BLACK};
    border-radius: ${R.S};

    &::placeholder {
      color: ${N.CAPTION};
    }

    &:focus {
      outline: 1px solid ${O.BLACK};
    }
  }
`,Ee={XGA:"1025px",PC:"769px",TABLET:"768px",MOBILE:"540px"},Le={XGA:`(min-width: ${Ee.XGA})`,PC:`(min-width: ${Ee.PC})`,TABLET:`(max-width: ${Ee.TABLET})`,MOBILE:`(max-width: ${Ee.MOBILE})`},Ne={XGA:`@media screen and ${Le.XGA}`,PC:`@media screen and ${Le.PC}`,TABLET:`@media screen and ${Le.TABLET}`,MOBILE:`@media screen and ${Le.MOBILE}`},be=()=>"undefined"!=typeof window?d:c,Oe=()=>{const e=p((()=>{if("undefined"!=typeof window)return window.matchMedia(Le.TABLET)}),[]),[t,i]=h(!!e&&e.matches),n=s((e=>{i(e.matches)}),[]);return c((()=>{if(e)return e.addEventListener("change",n,!1),()=>{e.removeEventListener("change",n,!1)}}),[n,e]),{isTablet:t}},Ie=({className:i,text:n,href:o,target:l})=>t(we,Object.assign({className:i,href:o,target:l},{children:[e(Ae,{children:n}),"_blank"===l&&e(ve,{iconKind:"OPEN_IN_NEW",fillColor:"LINK",size:"M"})]})),ve=n(q)``,we=n(w)`
  display: inline-flex;

  & > ${ve} {
    margin-left: ${S.XS};

    & > svg {
      transition: fill ${I};
    }
  }

  @media (any-hover: hover) {
    &:hover {
      & > ${ve} {
        & > svg {
          fill: ${N.LINK_HOVER};
        }
      }
    }
  }
`,Ae=n.span`
  display: inline-flex;
`,xe="M",_e="S",Me=({className:i,onClick:n,text:o,buttonSize:l,buttonColor:r,iconKind:a,iconRotate:s,isAnchor:c,href:d,target:p})=>t(He,Object.assign({className:i},{children:[c&&t(Re,Object.assign({href:d,target:p,onClick:n,$buttonColor:r,$buttonSize:l},{children:[a&&e(De,{iconKind:a,fillColor:"WHITE",size:l===xe?"XXL":"L",iconRotate:s,$buttonSize:l}),o&&e(je,Object.assign({$buttonSize:l},{children:o}))]})),!c&&t(Se,Object.assign({$buttonColor:r,$buttonSize:l,onClick:n},{children:[a&&e(De,{iconKind:a,fillColor:"WHITE",size:l===xe?"XXL":"L",iconRotate:s,$buttonSize:l}),o&&e(je,Object.assign({$buttonSize:l},{children:o}))]}))]})),He=n.div`
  display: inline-flex;
  pointer-events: auto;
`,Ce=o`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  min-width: ${({$buttonSize:e})=>e===_e?C.S.WIDTH:C.M.WIDTH};

  min-height: ${({$buttonSize:e})=>e===_e?C.S.HEIGHT:C.M.HEIGHT};

  margin: ${S.NONE};
  font-size: ${M.M};
  color: ${N.WHITE};
  transition: background ${I};

  ${({$buttonColor:e})=>`background: ${L[e]};`}

  ${({$buttonColor:e})=>{if("DEFAULT_CURRENT"===e)return"\n        cursor: pointer;\n        pointer-events: none;\n      "}}

  border-radius: ${R.S};

  @media (any-hover: hover) {
    &:hover {
      color: ${N.WHITE};

      ${({$buttonColor:e})=>"DEFAULT"===e?`\n            background: ${L.DEFAULT_HOVER};\n          `:"EXTERNAL"===e?`\n            background: ${L.EXTERNAL_HOVER};\n          `:void 0}
    }
  }
`,Se=n.button`
  ${Ce}
`,Re=n(w)`
  ${Ce}
`,De=n(q)`
  margin: ${({$buttonSize:e})=>e===xe?`${S.NONE} ${S.XS}`:`${S.NONE}`};
`,je=n.div`
  margin-right: ${({$buttonSize:e})=>e===xe?S.M:S.S};

  text-align: left;

  font-size: ${({$buttonSize:e})=>e===xe?M.M:M.S};

  user-select: none;

  &:not(${De} + &) {
    margin-left: ${({$buttonSize:e})=>e===xe?S.M:S.S};
  }
`,Be=(e,t)=>`<button class="${t}"><span class="inner"></span></button>`,Ge=({imageList:t})=>e(Pe,Object.assign({modules:[T,$],loop:!0,slidesPerView:1,speed:1200,autoplay:{delay:4e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},pagination:{clickable:!0,renderBullet:Be,bulletClass:"custom-bullet-style",bulletActiveClass:"custom-bullet-style-active"},centeredSlides:!0,spaceBetween:40},{children:l(t,(({src:t,alt:i,width:n,height:o,loading:l},r)=>e(f,{children:e(ze,{src:t,alt:i,width:n,height:o,loading:l})},r)))})),ze=n(le)``,Pe=n(g)`
  & .swiper-slide {
    display: grid;
    place-content: center;
  }

  & .swiper-slide ${ze} {
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
    width: ${C.M.WIDTH};
    height: ${C.S.HEIGHT};
    margin: ${S.NONE} ${S.S};

    ${Ne.MOBILE} {
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
`,Ue=({className:i,commonList:n})=>e(ke,Object.assign({className:i},{children:l(n,((i,n)=>t(m,{children:[e(Fe,{children:i.title}),e(Xe,{children:i.description})]},n)))})),ke=n.dl`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > :nth-of-type(-n + 1) {
    margin-top: ${S.NONE};
  }
`,Fe=n.dt`
  width: ${D.WIDTH_EVEN};
  margin-top: ${S.M};
  padding: ${`${D.PADDING_TOP_BOTTOM} ${D.PADDING_LEFT_RIGHT}`};
  padding-left: 0;
  font-weight: ${H.BOLD};

  ${Ne.MOBILE} {
    width: ${_.FULL};
    margin-top: ${S.M};
  }
`,Xe=n.dd`
  width: ${D.WIDTH_ODD};
  margin-top: ${S.M};
  padding: ${`${D.PADDING_TOP_BOTTOM} ${D.PADDING_LEFT_RIGHT}`};
  padding-right: 0;
  border-left: 2px solid ${O.LIGHT_GRAY};

  ${Ne.MOBILE} {
    width: ${_.FULL};
    margin-top: ${S.XS};
  }
`,Ke=({className:i,navigationList:n,handleLinkEvent:o,currentPath:r,isOpenNavigation:a=!0,handleSetIsOpenNavigation:s})=>{const{isTablet:c}=Oe();return be()((()=>{s(!c)}),[c]),t(We,Object.assign({className:i,$isOpen:a},{children:[e(Ye,Object.assign({$isOpen:a},{children:l(n,((t,i)=>e(Ve,{onClick:e=>{o(e,t.path,t.isExternal),c&&s(!1)},text:t.name,buttonSize:"M",buttonColor:t.isExternal?"EXTERNAL":t.path===r?"DEFAULT_CURRENT":"DEFAULT",isAnchor:!0,href:t.path,target:t.isExternal?"_blank":"_self"},i)))})),e(qe,Object.assign({$isOpen:a},{children:e(Me,{onClick:()=>s(!a),buttonSize:"M",buttonColor:"DEFAULT",iconKind:a?"MENU_OPEN":"MENU"})}))]}))},We=n.div`
  overflow-y: auto;
  transition: background 0.25s ease;

  ${Ne.TABLET} {
    position: fixed;
    top: 0;
    right: 0;
    width: ${_.HALF};

    /* NOTE: iOS Safari の address bar 対策のため */
    height: 100vh;
    height: 100dvh;

    background: none;
    pointer-events: none;

    ${({$isOpen:e})=>e&&`\n        background: ${E.WHITE};\n        pointer-events: auto;\n      `}
  }

  ${Ne.MOBILE} {
    width: ${_.FULL};
  }
`,Ve=n(Me)`
  justify-content: center;
  flex-grow: 1;
  margin: ${S.NONE};

  ${Ne.TABLET} {
    flex-grow: 0;
  }

  /* HACK: 子要素が別のタグの為 */
  & > button,
  & > a {
    width: 100%;

    & > div {
      ${Ne.XGA} {
        font-size: ${M.L};
      }
    }
  }
`,Ye=n.nav`
  display: ${({$isOpen:e})=>e?"flex":"none"};
  justify-content: space-between;
  overflow: hidden;
  border-radius: ${R.M};
  background: ${L.DEFAULT};

  & > ${Ve} {
    &:not(:nth-last-of-type(1)) {
      border-right: 1px solid ${O.WHITE};
    }

    ${Ne.TABLET} {
      &:not(:nth-last-of-type(1)) {
        border-right: none;
      }
    }
  }

  ${Ne.TABLET} {
    flex-direction: column;
    align-items: flex-end;
    height: calc((${C.M.HEIGHT} * 6) + (${S.L} * 5));
    margin-bottom: ${S.L};
    border-radius: ${R.NONE};
    background: none;
  }
`,qe=n.div`
  display: none;

  ${Ne.TABLET} {
    display: flex;
    justify-content: flex-end;
    margin-top: ${({$isOpen:e})=>e?"0":"336px"};
  }
`,Je=({className:t,imageProps:i})=>e(Qe,Object.assign({className:t},{children:e(le,{src:i.src,alt:i.alt,width:i.width,height:i.height,loading:i.loading})})),Qe=n.div`
  display: inline-flex;
  border: 8px solid ${O.LIGHT_GRAY};

  /* NOTE: ここでしか利用しないのでハードコードで対応する */
  background: ${u.LIGHT_GRAY};
`;y().format(),y.locale("ja");const Ze=({className:i,scheduleList:n,isSummary:o=!1})=>{const r=s((e=>y(e).format("YYYY年M月D日(ddd)")),[]);return t("div",Object.assign({className:i},{children:[!n.length&&e("div",{children:"準備中です"}),l(n,((i,n)=>t(et,Object.assign({isSummary:o},{children:[t(tt,Object.assign({isSummary:o},{children:[r(i.startDate),i.startDate!==i.endDate&&`〜${r(i.endDate)}`]})),t(it,Object.assign({isSummary:o},{children:[i.timeFrame&&e(nt,{children:i.timeFrame}),e(ot,{dangerouslySetInnerHTML:{__html:i.description}})]}))]}),n)))]}))},et=n.div`
  display: flex;
  justify-content: space-between;

  &:not(:first-of-type) {
    margin-top: ${S.M};
  }

  ${Ne.MOBILE} {
    flex-direction: column;
  }

  ${({isSummary:e})=>e&&"flex-direction: column;"}
`,tt=n.div`
  width: ${D.WIDTH_EVEN};
  padding: ${`${D.PADDING_TOP_BOTTOM} ${D.PADDING_LEFT_RIGHT}`};
  padding-left: 0;
  font-weight: ${H.BOLD};

  ${Ne.MOBILE} {
    width: ${_.FULL};
  }

  ${({isSummary:e})=>e&&`\n      width: ${_.FULL};\n    `}
`,it=n.div`
  width: ${D.WIDTH_ODD};
  padding: ${`${D.PADDING_TOP_BOTTOM} ${D.PADDING_LEFT_RIGHT}`};
  padding-right: 0;
  border-left: 2px solid ${O.LIGHT_GRAY};

  ${Ne.MOBILE} {
    width: ${_.FULL};
    margin-top: ${S.XS};
  }

  ${({isSummary:e})=>e&&`\n      display: -webkit-box;\n      width: ${_.FULL};\n      margin-top: ${S.XS};\n      overflow: hidden;\n      -webkit-line-clamp: 1;\n      -webkit-box-orient: vertical;\n    `}
`,nt=n.div`
  display: inline;
  margin-right: ${S.M};
  font-weight: ${H.BOLD};
`,ot=n.div`
  display: inline;

  /* NOTE: 外部から呼んだ html を使うため */
  > a {
    ${A}
  }
`;export{w as Anchor,Ie as AnchorText,j as AnnotationText,E as BACKGROUND_COLOR,u as BASE_COLOR,_ as BLOCK_WIDTH,O as BORDER_COLOR,R as BORDER_RADIUS,Ee as BREAK_POINTS,L as BUTTON_BACKGROUND_COLOR,Me as Button,b as CHIP_BACKGROUND_COLOR,Ge as Carousel,U as Chip,Ue as CommonList,N as FONT_COLOR,H as FONT_WEIGHT,Ke as GlobalNavigation,K as HeadingText,C as ICON_BUTTON_SIZE,v as ICON_KIND,M as INLINE_SIZE,q as Icon,le as Image,re as InputText,Le as MATCH_MEDIA,Ne as MEDIA_QUERY,se as ParagraphText,Je as Photo,S as SPACE,Ze as ScheduleList,de as Select,ge as ShopMap,D as TABLE_TWO_COLUMN,I as TRANSITION_TIME,ye as TextArea,be as useIsomorphicEffect,Oe as useMatchMedia};
