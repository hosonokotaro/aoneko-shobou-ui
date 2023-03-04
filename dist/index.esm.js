import e,{css as t,createGlobalStyle as i}from"styled-components";import{jsx as n,jsxs as o,Fragment as r}from"react/jsx-runtime";import{Loader as l}from"@googlemaps/js-api-loader";import{useRef as a,useCallback as s,useEffect as d,useLayoutEffect as c,useState as p,Fragment as h,useMemo as g}from"react";import"swiper/css";import"swiper/css/pagination";import{map as m}from"lodash-es";import{Autoplay as f,Pagination as T}from"swiper";import{Swiper as $,SwiperSlide as E}from"swiper/react";import"dayjs/locale/ja";import y from"dayjs";const u={ATTENTION:"#a370d3",CAUTION:"#ff8897",CAPTION:"#999",INFORMATION:"#5d7fb3",LINK:"#4a90d6",LINK_HOVER:"#417cb5",LINK_CURRENT:"#34628f",LINK_EXTERNAL:"#a4a368",LINK_EXTERNAL_HOVER:"#827f3c",TITLE:"#a370d3",BLACK:"#111",LIGHT_GRAY:"#eee",WHITE:"#fcfcfc"},L={WHITE:u.WHITE},b={DEFAULT:u.LINK,DEFAULT_HOVER:u.LINK_HOVER,DEFAULT_CURRENT:u.LINK_CURRENT,EXTERNAL:u.LINK_EXTERNAL,EXTERNAL_HOVER:u.LINK_EXTERNAL_HOVER},N={CAPTION:u.CAPTION,CAUTION:u.CAUTION,LINK:u.LINK,LINK_HOVER:u.LINK_HOVER,TITLE:u.TITLE,WHITE:u.WHITE,BLACK:u.BLACK},O={DEFAULT:u.INFORMATION,CAUTION:u.CAUTION},w={LIGHT_GRAY:u.LIGHT_GRAY,TITLE:u.TITLE,WHITE:u.WHITE},x=t`
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
`;const I="0.25s ease",v={DEFAULT:"0deg",DEG90:"90deg",DEG180:"180deg",DEG270:"270deg"},A={INFO:"INFO",OPEN_IN_NEW:"OPEN_IN_NEW",NAVIGATE_NEXT:"NAVIGATE_NEXT",MENU:"MENU",MENU_OPEN:"MENU_OPEN"},H={SELF:"_self",BLANK:"_blank"},M=({className:e,href:t,target:i,onClick:o,children:r})=>n(C,Object.assign({className:e,href:t,target:i&&H[i],rel:"BLANK"===i?"noopener noreferrer":void 0,onClick:e=>{"function"==typeof o&&"BLANK"!==i&&o(e)}},{children:r})),C=e.a`
  color: ${N.LINK};
  transition: color ${I};

  @media (any-hover: hover) {
    &:hover {
      color: ${N.LINK_HOVER};
    }
  }
`,R={AUTO:"auto",FULL:"100%",HALF:"50%",ONE_THIRD:"calc(100% / 3)"},_={XXL:"2rem",XL:"1.6rem",L:"1.2rem",M:"1rem",S:"0.9rem"},S={BOLD:"600",NORMAL:"300"},z={M:{WIDTH:"40px",HEIGHT:"40px"},S:{WIDTH:"20px",HEIGHT:"20px"}},B={AUTO:"auto",XL:"20px",L:"16px",M:"12px",S:"8px",XS:"4px",NONE:"0"},U={M:"6px",S:"3px",NONE:"0"},k=({text:e,color:t})=>n(j,Object.assign({$color:t},{children:e})),j=e.span`
  font-size: ${_.M};
  color: ${({$color:e})=>N[e]};
`,D=({status:e,text:t})=>n(F,Object.assign({$status:e},{children:t})),F=e.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: ${U.S};
  background: ${({$status:e})=>O[e]};
  color: ${N.WHITE};
`,K="PAGE_TITLE",G="SECTION_TITLE",V="SUBTITLE",X=({text:e,kind:t})=>o(r,{children:[t===K&&n(P,{children:e}),t===G&&n(W,{children:e}),t===V&&n(Y,{children:e})]}),P=e.h1`
  font-size: ${_.XXL};
  font-weight: ${S.NORMAL};
  color: ${N.TITLE};
`,W=e.h2`
  padding-left: 8px;
  border-left: 2px solid ${w.TITLE};
  font-size: ${_.XL};
  font-weight: ${S.NORMAL};
  color: ${N.TITLE};
`,Y=e.h3`
  font-size: ${_.L};
  font-weight: ${S.NORMAL};
  color: ${N.TITLE};
`,q=({className:e,iconKind:t,fillColor:i,size:r,iconRotate:l})=>o(Z,Object.assign({className:e,$iconRotate:l},{children:[t===A.INFO&&n(J,{$fillColor:i,width:_[r],height:_[r]}),t===A.OPEN_IN_NEW&&n(Q,{$fillColor:i,width:_[r],height:_[r]}),t===A.NAVIGATE_NEXT&&n(ee,{$fillColor:i,width:_[r],height:_[r]}),t===A.MENU&&n(te,{$fillColor:i,width:_[r],height:_[r]}),t===A.MENU_OPEN&&n(ie,{$fillColor:i,width:_[r],height:_[r]})]})),Z=e.i`
  display: inline-grid;
  place-content: center;
  transform: rotate(${({$iconRotate:e})=>`${v[e]}`});
`,J=e((e=>n("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"24px",height:"24px",role:"img"},e,{children:n("path",{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"})}))))`
  ${({$fillColor:e})=>`fill: ${N[e]};`}
`,Q=e((e=>o("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",role:"img"},e,{children:[n("path",{d:"M0 0h24v24H0z",fill:"none"}),n("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"})]}))))`
  ${({$fillColor:e})=>`fill: ${N[e]};`}
`,ee=e((e=>o("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",role:"img"},e,{children:[n("path",{d:"M0 0h24v24H0V0z",fill:"none"}),n("path",{d:"M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z"})]}))))`
  ${({$fillColor:e})=>`fill: ${N[e]};`}
`,te=e((e=>o("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",width:"24px",viewBox:"0 0 24 24"},e,{children:[n("path",{d:"M0 0h24v24H0z",fill:"none"}),n("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})]}))))`
  ${({$fillColor:e})=>`fill: ${N[e]};`}
`,ie=e((e=>o("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",width:"24px",viewBox:"0 0 24 24"},e,{children:[n("path",{d:"M0 0h24v24H0V0z",fill:"none"}),n("path",{d:"M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"})]}))))`
  ${({$fillColor:e})=>`fill: ${N[e]};`}
`,ne="eager",oe="lazy",re=({className:e,src:t,alt:i="",width:o,height:r,loading:l})=>n("img",{className:e,src:t,alt:i,width:o,height:r,loading:"EAGER"===l?ne:"LAZY"===l?oe:void 0}),le=({text:e})=>n(ae,{children:e}),ae=e.p`
  padding: 12px;
  border-left: 2px solid ${w.LIGHT_GRAY};
`;function se(e,t,i,n){return new(i||(i=Promise))((function(o,r){function l(e){try{s(n.next(e))}catch(e){r(e)}}function a(e){try{s(n.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(l,a)}s((n=n.apply(e,t||[])).next())}))}const de="styled_map",ce={center:{lat:35.7803731,lng:139.726063},zoom:16,mapTypeControl:!1,mapTypeControlOptions:{mapTypeIds:[de]}},pe=[{elementType:"geometry",stylers:[{color:"#ebe3cd"}]},{elementType:"labels.text.fill",stylers:[{color:"#523735"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#c9b2a6"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{color:"#dcd2be"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#ae9e90"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#93817c"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#a5b076"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#447530"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#fdfcf8"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#f8c967"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#e9bc62"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#e98d58"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{color:"#db8555"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#806b63"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{color:"#8f7d77"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{color:"#ebe3cd"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#b9d3c2"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#92998d"}]}],he=({loaderOptions:e,height:t})=>{const i=a(null),o=s((()=>se(void 0,void 0,void 0,(function*(){if(null===i.current)return;const t=new l(e),n=yield t.load(),o=new n.maps.StyledMapType(pe),r=new n.maps.Map(i.current,ce);r.mapTypes.set(de,o),r.setMapTypeId(de),new n.maps.Marker({map:r,position:ce.center})}))),[e]);return d((()=>(o(),()=>{})),[o]),n(ge,{ref:i,$height:t})},ge=e.div`
  height: ${({$height:e})=>e};
`,me={OVER_PC:"1025px",TABLET:"768px",MOBILE:"540px"},fe={OVER_PC:`(min-width: ${me.OVER_PC})`,TABLET:`(max-width: ${me.TABLET})`,MOBILE:`(max-width: ${me.MOBILE})`},Te={OVER_PC:`@media screen and ${fe.OVER_PC}`,TABLET:`@media screen and ${fe.TABLET}`,MOBILE:`@media screen and ${fe.MOBILE}`},$e=()=>"undefined"!=typeof window?c:d,Ee="undefined"!=typeof window&&window.matchMedia(fe.TABLET),ye=()=>{const[e,t]=p(!1!==Ee&&Ee.matches),i=s((e=>{t(e.matches)}),[]);return d((()=>{if(!1!==Ee)return Ee.addEventListener("change",i,!1),()=>{Ee.removeEventListener("change",i,!1)}}),[i]),{isTablet:e}},ue=({text:e,href:t,target:i})=>o(be,Object.assign({href:t,target:i},{children:[n(Ne,{children:e}),"BLANK"===i&&n(Le,{iconKind:"OPEN_IN_NEW",fillColor:"LINK",size:"M",iconRotate:"DEFAULT"})]})),Le=e(q)``,be=e(M)`
  display: inline-flex;

  & > ${Le} {
    margin-left: ${B.XS};

    & > svg {
      transition: fill ${I};
    }
  }

  @media (any-hover: hover) {
    &:hover {
      & > ${Le} {
        & > svg {
          fill: ${N.LINK_HOVER};
        }
      }
    }
  }
`,Ne=e.span`
  display: inline-flex;
`,Oe="M",we="S",xe=({className:e,buttonCallback:t,anchorCallback:i,text:r,buttonSize:l,buttonColor:a,iconKind:s,iconRotate:d,isAnchor:c,href:p,target:h})=>o(Ie,Object.assign({className:e},{children:[c&&o(He,Object.assign({href:p,target:h,onClick:i,$buttonColor:a,$buttonSize:l},{children:[s&&n(Me,{iconKind:s,fillColor:"WHITE",size:l===Oe?"XXL":"L",iconRotate:null!=d?d:"DEFAULT",$buttonSize:l}),r&&n(Ce,Object.assign({$buttonSize:l},{children:r}))]})),!c&&o(Ae,Object.assign({$buttonColor:a,$buttonSize:l,onClick:t},{children:[s&&n(Me,{iconKind:s,fillColor:"WHITE",size:l===Oe?"XXL":"L",iconRotate:null!=d?d:"DEFAULT",$buttonSize:l}),r&&n(Ce,Object.assign({$buttonSize:l},{children:r}))]}))]})),Ie=e.div`
  display: inline-flex;
  pointer-events: auto;
`,ve=t`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  min-width: ${({$buttonSize:e})=>e===we?z.S.WIDTH:z.M.WIDTH};

  min-height: ${({$buttonSize:e})=>e===we?z.S.HEIGHT:z.M.HEIGHT};

  margin: ${B.NONE};
  font-size: ${_.M};
  color: ${N.WHITE};
  transition: background ${I};

  ${({$buttonColor:e})=>`background: ${b[e]};`}

  ${({$buttonColor:e})=>{if("DEFAULT_CURRENT"===e)return"\n        cursor: pointer;\n        pointer-events: none;\n      "}}

  border-radius: ${U.S};

  @media (any-hover: hover) {
    &:hover {
      color: ${N.WHITE};

      ${({$buttonColor:e})=>"DEFAULT"===e?`\n            background: ${b.DEFAULT_HOVER};\n          `:"EXTERNAL"===e?`\n            background: ${b.EXTERNAL_HOVER};\n          `:void 0}
    }
  }
`,Ae=e.button`
  ${ve}
`,He=e(M)`
  ${ve}
`,Me=e(q)`
  margin: ${({$buttonSize:e})=>e===Oe?`${B.NONE} ${B.XS}`:`${B.NONE}`};
`,Ce=e.div`
  margin-right: ${({$buttonSize:e})=>e===Oe?B.M:B.S};

  text-align: left;

  font-size: ${({$buttonSize:e})=>e===Oe?_.M:_.S};

  user-select: none;

  &:not(${Me} + &) {
    margin-left: ${({$buttonSize:e})=>e===Oe?B.M:B.S};
  }
`,Re=(e,t)=>`<button class="${t}"><span class="inner"></span></button>`,_e=({imageList:e})=>n(ze,Object.assign({modules:[f,T],loop:!0,slidesPerView:1,speed:1200,autoplay:{delay:4e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},pagination:{clickable:!0,renderBullet:Re,bulletClass:"custom-bullet-style",bulletActiveClass:"custom-bullet-style-active"},centeredSlides:!0,spaceBetween:40},{children:m(e,((e,t)=>n(E,{children:n(Se,{src:e.src,alt:e.alt,width:e.width,height:e.height,loading:e.loading})},t)))})),Se=e(re)``,ze=e($)`
  & .swiper-slide {
    display: grid;
    place-content: center;
  }

  & .swiper-slide ${Se} {
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
    width: ${z.M.WIDTH};
    height: ${z.S.HEIGHT};
    margin: ${B.NONE} ${B.S};

    ${Te.MOBILE} {
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
`,Be=({commonList:e})=>n(Ue,{children:m(e,((e,t)=>o(h,{children:[n(Ke,{children:e.title}),n(Ge,{children:e.description})]},t)))}),Ue=e.dl`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > :nth-of-type(-n + 1) {
    margin-top: ${B.NONE};
  }
`,ke="68%",je="32%",De="4px",Fe="12px",Ke=e.dt`
  width: ${je};
  margin-top: ${B.M};
  padding-top: ${De};
  padding-bottom: ${De};
  padding-right: ${Fe};
  font-weight: ${S.BOLD};

  ${Te.MOBILE} {
    width: ${R.FULL};
    margin-top: ${B.M};
  }
`,Ge=e.dd`
  width: ${ke};
  margin-top: ${B.M};
  padding-top: ${De};
  padding-bottom: ${De};
  padding-left: ${Fe};
  border-left: 2px solid ${w.LIGHT_GRAY};

  ${Te.MOBILE} {
    width: ${R.FULL};
    margin-top: ${B.XS};
  }
`,Ve=({className:e,navigationList:t,handleLinkEvent:i,currentPath:r})=>{const[l,a]=p(!0),{isTablet:s}=ye();return $e()((()=>{a(!s)}),[s]),o(Xe,Object.assign({className:e,$isOpen:l},{children:[n(We,Object.assign({$isOpen:l},{children:m(t,((e,t)=>n(Pe,{anchorCallback:t=>{i(t,e.path,e.isExternal),s&&a(!1)},text:e.name,buttonSize:"M",buttonColor:e.isExternal?"EXTERNAL":e.path===r?"DEFAULT_CURRENT":"DEFAULT",isAnchor:!0,href:e.path,target:e.isExternal?"BLANK":"SELF"},t)))})),n(Ye,Object.assign({$isOpen:l},{children:n(xe,{buttonCallback:()=>a(!l),buttonSize:"M",buttonColor:"DEFAULT",iconKind:l?"MENU_OPEN":"MENU"})}))]}))},Xe=e.div`
  overflow-y: auto;
  transition: background 0.25s ease;

  ${Te.TABLET} {
    position: fixed;
    top: 0;
    right: 0;
    width: ${R.HALF};

    /* NOTE: iOS Safari の address bar 対策のため */
    height: 100vh;
    height: 100dvh;

    background: none;
    pointer-events: none;

    ${({$isOpen:e})=>e&&`\n        background: ${L.WHITE};\n        pointer-events: auto;\n      `}
  }

  ${Te.MOBILE} {
    width: ${R.FULL};
  }
`,Pe=e(xe)`
  justify-content: center;
  flex-grow: 1;
  margin: ${B.NONE};

  ${Te.TABLET} {
    flex-grow: 0;
  }

  /* HACK: 子要素が別のタグの為 */
  & > button,
  & > a {
    width: 100%;

    & > div {
      ${Te.OVER_PC} {
        font-size: ${_.L};
      }
    }
  }
`,We=e.nav`
  display: ${({$isOpen:e})=>e?"flex":"none"};
  justify-content: space-between;
  overflow: hidden;
  border-radius: ${U.M};
  background: ${b.DEFAULT};

  & > ${Pe} {
    &:not(:nth-last-of-type(1)) {
      border-right: 1px solid ${w.WHITE};
    }

    ${Te.TABLET} {
      &:not(:nth-last-of-type(1)) {
        border-right: none;
      }
    }
  }

  ${Te.TABLET} {
    flex-direction: column;
    align-items: flex-end;
    height: calc((${z.M.HEIGHT} * 6) + (${B.L} * 5));
    margin-bottom: ${B.L};
    border-radius: ${U.NONE};
    background: none;
  }
`,Ye=e.div`
  display: none;

  ${Te.TABLET} {
    display: flex;
    justify-content: flex-end;
    margin-top: ${({$isOpen:e})=>e?"0":"336px"};
  }
`,qe=({imageProps:e})=>n(Ze,{children:n(re,{src:e.src,alt:e.alt,width:e.width,height:e.height,loading:e.loading})}),Ze=e.div`
  display: inline-flex;
  border: 8px solid ${w.LIGHT_GRAY};

  /* NOTE: ここでしか利用しないのでハードコードで対応する */
  background: ${u.LIGHT_GRAY};
`;y().format(),y.locale("ja");const Je=({scheduleList:e,currentTime:t,isSummary:i=!1})=>{const r=s((e=>y(e).format("YYYY年M月D日(ddd)")),[]),l=g((()=>{const i=y(t);let n=[];return m(e,(e=>{if(i.isAfter(y(e.endDate),"day"))return;const t=r(e.startDate),o=r(e.endDate),l=Object.assign(Object.assign({},e),{startDate:t,endDate:o});n=[...n,l]})),n}),[t,r,e]);return o("div",{children:[!l.length&&n("div",{children:"準備中です"}),m(l,((e,t)=>o(Qe,Object.assign({isSummary:i},{children:[o(ot,Object.assign({isSummary:i},{children:[e.startDate,e.startDate!==e.endDate&&`〜${e.endDate}`]})),o(rt,Object.assign({isSummary:i},{children:[e.timeFrame&&n(lt,{children:e.timeFrame}),n("span",{children:e.description})]}))]}),t)))]})},Qe=e.div`
  display: flex;
  justify-content: space-between;

  &:not(:first-of-type) {
    margin-top: ${B.M};
  }

  ${Te.MOBILE} {
    flex-direction: column;
  }

  ${({isSummary:e})=>e&&"flex-direction: column;"}
`,et="68%",tt="32%",it="4px",nt="12px",ot=e.div`
  width: ${tt};
  padding-top: ${it};
  padding-bottom: ${it};
  padding-right: ${nt};
  font-weight: ${S.BOLD};

  ${Te.MOBILE} {
    width: ${R.FULL};
  }

  ${({isSummary:e})=>e&&`\n      width: ${R.FULL};\n    `}
`,rt=e.div`
  width: ${et};
  padding-top: ${it};
  padding-bottom: ${it};
  padding-left: ${nt};
  border-left: 2px solid ${w.LIGHT_GRAY};

  ${Te.MOBILE} {
    width: ${R.FULL};
    margin-top: ${B.XS};
  }

  ${({isSummary:e})=>e&&`\n      display: -webkit-box;\n      width: ${R.FULL};\n      margin-top: ${B.XS};\n      overflow: hidden;\n      -webkit-line-clamp: 1;\n      -webkit-box-orient: vertical;\n    `}
`,lt=e.span`
  margin-right: ${B.M};
  font-weight: ${S.BOLD};
`;export{M as Anchor,ue as AnchorText,k as AnnotationText,L as BACKGROUND_COLOR,u as BASE_COLOR,R as BLOCK_WIDTH,w as BORDER_COLOR,U as BORDER_RADIUS,me as BREAK_POINTS,b as BUTTON_BACKGROUND_COLOR,xe as Button,O as CHIP_BACKGROUND_COLOR,_e as Carousel,D as Chip,Be as CommonList,N as FONT_COLOR,S as FONT_WEIGHT,Ve as GlobalNavigation,X as HeadingText,z as ICON_BUTTON_SIZE,A as ICON_KIND,_ as INLINE_SIZE,q as Icon,re as Image,B as MARGIN,fe as MATCH_MEDIA,Te as MEDIA_QUERY,le as ParagraphText,qe as Photo,Je as ScheduleList,he as ShopMap,I as TRANSITION_TIME,x as globalStyle,$e as useIsomorphicEffect,ye as useMatchMedia};
