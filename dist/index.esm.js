import e,{css as t,createGlobalStyle as n}from"styled-components";import{jsx as i,jsxs as o,Fragment as r}from"react/jsx-runtime";import{Loader as l}from"@googlemaps/js-api-loader";import{useRef as a,useCallback as s,useEffect as d,useLayoutEffect as c,useState as p,Fragment as h,useMemo as g}from"react";import"swiper/css";import"swiper/css/pagination";import{map as m,slice as $}from"lodash-es";import{Autoplay as f,Pagination as T}from"swiper";import{Swiper as E,SwiperSlide as y}from"swiper/react";import"dayjs/locale/ja";import u from"dayjs";const L={ATTENTION:"#a370d3",CAUTION:"#ff8897",CAPTION:"#999",INFORMATION:"#5d7fb3",LINK:"#4a90d6",LINK_HOVER:"#417cb5",LINK_CURRENT:"#34628f",LINK_EXTERNAL:"#a4a368",LINK_EXTERNAL_HOVER:"#827f3c",TITLE:"#a370d3",BLACK:"#111",LIGHT_GRAY:"#eee",WHITE:"#fcfcfc"},b={WHITE:L.WHITE},N={DEFAULT:L.LINK,DEFAULT_HOVER:L.LINK_HOVER,DEFAULT_CURRENT:L.LINK_CURRENT,EXTERNAL:L.LINK_EXTERNAL,EXTERNAL_HOVER:L.LINK_EXTERNAL_HOVER},O={CAPTION:L.CAPTION,CAUTION:L.CAUTION,LINK:L.LINK,LINK_HOVER:L.LINK_HOVER,TITLE:L.TITLE,WHITE:L.WHITE,BLACK:L.BLACK},w={DEFAULT:L.INFORMATION,CAUTION:L.CAUTION},x={LIGHT_GRAY:L.LIGHT_GRAY,TITLE:L.TITLE,WHITE:L.WHITE},I=t`
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
    color: ${O.BLACK};
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
`;n`
  ${I}
`;const v="0.25s ease",A={DEFAULT:"0deg",DEG90:"90deg",DEG180:"180deg",DEG270:"270deg"},H={INFO:"INFO",OPEN_IN_NEW:"OPEN_IN_NEW",NAVIGATE_NEXT:"NAVIGATE_NEXT",MENU:"MENU",MENU_OPEN:"MENU_OPEN"},M={SELF:"_self",BLANK:"_blank"},C=({className:e,href:t,target:n,onClick:o,children:r})=>i(R,Object.assign({className:e,href:t,target:n&&M[n],rel:"BLANK"===n?"noopener noreferrer":void 0,onClick:e=>{"function"==typeof o&&"BLANK"!==n&&o(e)}},{children:r})),R=e.a`
  color: ${O.LINK};
  transition: color ${v};

  @media (any-hover: hover) {
    &:hover {
      color: ${O.LINK_HOVER};
    }
  }
`,_={AUTO:"auto",FULL:"100%",HALF:"50%",ONE_THIRD:"calc(100% / 3)"},S={XXL:"2rem",XL:"1.6rem",L:"1.2rem",M:"1rem",S:"0.9rem"},z={BOLD:"600",NORMAL:"300"},B={M:{WIDTH:"40px",HEIGHT:"40px"},S:{WIDTH:"20px",HEIGHT:"20px"}},U={AUTO:"auto",XL:"20px",L:"16px",M:"12px",S:"8px",XS:"4px",NONE:"0"},k={M:"6px",S:"3px",NONE:"0"},j=({text:e,color:t})=>i(D,Object.assign({$color:t},{children:e})),D=e.span`
  font-size: ${S.M};
  color: ${({$color:e})=>O[e]};
`,F=({status:e,text:t})=>i(K,Object.assign({$status:e},{children:t})),K=e.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: ${k.S};
  background: ${({$status:e})=>w[e]};
  color: ${O.WHITE};
`,G="PAGE_TITLE",X="SECTION_TITLE",V="SUBTITLE",P=({text:e,kind:t})=>o(r,{children:[t===G&&i(W,{children:e}),t===X&&i(Y,{children:e}),t===V&&i(q,{children:e})]}),W=e.h1`
  font-size: ${S.XXL};
  font-weight: ${z.NORMAL};
  color: ${O.TITLE};
`,Y=e.h2`
  padding-left: 8px;
  border-left: 2px solid ${x.TITLE};
  font-size: ${S.XL};
  font-weight: ${z.NORMAL};
  color: ${O.TITLE};
`,q=e.h3`
  font-size: ${S.L};
  font-weight: ${z.NORMAL};
  color: ${O.TITLE};
`,Z=({className:e,iconKind:t,fillColor:n,size:r,iconRotate:l})=>o(J,Object.assign({className:e,$iconRotate:l},{children:[t===H.INFO&&i(Q,{$fillColor:n,width:S[r],height:S[r]}),t===H.OPEN_IN_NEW&&i(ee,{$fillColor:n,width:S[r],height:S[r]}),t===H.NAVIGATE_NEXT&&i(te,{$fillColor:n,width:S[r],height:S[r]}),t===H.MENU&&i(ne,{$fillColor:n,width:S[r],height:S[r]}),t===H.MENU_OPEN&&i(ie,{$fillColor:n,width:S[r],height:S[r]})]})),J=e.i`
  display: inline-grid;
  place-content: center;
  transform: rotate(${({$iconRotate:e})=>`${A[e]}`});
`,Q=e((e=>i("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"24px",height:"24px",role:"img"},e,{children:i("path",{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"})}))))`
  ${({$fillColor:e})=>`fill: ${O[e]};`}
`,ee=e((e=>o("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",role:"img"},e,{children:[i("path",{d:"M0 0h24v24H0z",fill:"none"}),i("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"})]}))))`
  ${({$fillColor:e})=>`fill: ${O[e]};`}
`,te=e((e=>o("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",role:"img"},e,{children:[i("path",{d:"M0 0h24v24H0V0z",fill:"none"}),i("path",{d:"M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z"})]}))))`
  ${({$fillColor:e})=>`fill: ${O[e]};`}
`,ne=e((e=>o("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",width:"24px",viewBox:"0 0 24 24"},e,{children:[i("path",{d:"M0 0h24v24H0z",fill:"none"}),i("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})]}))))`
  ${({$fillColor:e})=>`fill: ${O[e]};`}
`,ie=e((e=>o("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",width:"24px",viewBox:"0 0 24 24"},e,{children:[i("path",{d:"M0 0h24v24H0V0z",fill:"none"}),i("path",{d:"M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"})]}))))`
  ${({$fillColor:e})=>`fill: ${O[e]};`}
`,oe="eager",re="lazy",le=({className:e,src:t,alt:n="",width:o,height:r,loading:l})=>i("img",{className:e,src:t,alt:n,width:o,height:r,loading:"EAGER"===l?oe:"LAZY"===l?re:void 0}),ae=({text:e})=>i(se,{children:e}),se=e.p`
  padding: 12px;
  border-left: 2px solid ${x.LIGHT_GRAY};
`;function de(e,t,n,i){return new(n||(n=Promise))((function(o,r){function l(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,a)}s((i=i.apply(e,t||[])).next())}))}const ce="styled_map",pe={center:{lat:35.7803731,lng:139.726063},zoom:16,mapTypeControl:!1,mapTypeControlOptions:{mapTypeIds:[ce]}},he=[{elementType:"geometry",stylers:[{color:"#ebe3cd"}]},{elementType:"labels.text.fill",stylers:[{color:"#523735"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#c9b2a6"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{color:"#dcd2be"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#ae9e90"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#93817c"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#a5b076"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#447530"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#fdfcf8"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#f8c967"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#e9bc62"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#e98d58"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{color:"#db8555"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#806b63"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{color:"#8f7d77"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{color:"#ebe3cd"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#b9d3c2"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#92998d"}]}],ge=({loaderOptions:e,height:t})=>{const n=a(null),o=s((()=>de(void 0,void 0,void 0,(function*(){if(null===n.current)return;const t=new l(e),i=yield t.load(),o=new i.maps.StyledMapType(he),r=new i.maps.Map(n.current,pe);r.mapTypes.set(ce,o),r.setMapTypeId(ce),new i.maps.Marker({map:r,position:pe.center})}))),[e]);return d((()=>(o(),()=>{})),[o]),i(me,{ref:n,$height:t})},me=e.div`
  height: ${({$height:e})=>e};
`,$e={OVER_PC:"1025px",TABLET:"768px",MOBILE:"540px"},fe={OVER_PC:`(min-width: ${$e.OVER_PC})`,TABLET:`(max-width: ${$e.TABLET})`,MOBILE:`(max-width: ${$e.MOBILE})`},Te={OVER_PC:`@media screen and ${fe.OVER_PC}`,TABLET:`@media screen and ${fe.TABLET}`,MOBILE:`@media screen and ${fe.MOBILE}`},Ee=()=>"undefined"!=typeof window?c:d,ye="undefined"!=typeof window&&window.matchMedia(fe.TABLET),ue=()=>{const[e,t]=p(!1!==ye&&ye.matches),n=s((e=>{t(e.matches)}),[]);return d((()=>{if(!1!==ye)return ye.addEventListener("change",n,!1),()=>{ye.removeEventListener("change",n,!1)}}),[n]),{isTablet:e}},Le=({text:e,href:t,target:n})=>o(Ne,Object.assign({href:t,target:n},{children:[i(Oe,{children:e}),"BLANK"===n&&i(be,{iconKind:"OPEN_IN_NEW",fillColor:"LINK",size:"M",iconRotate:"DEFAULT"})]})),be=e(Z)``,Ne=e(C)`
  display: inline-flex;

  & > ${be} {
    margin-left: ${U.XS};

    & > svg {
      transition: fill ${v};
    }
  }

  @media (any-hover: hover) {
    &:hover {
      & > ${be} {
        & > svg {
          fill: ${O.LINK_HOVER};
        }
      }
    }
  }
`,Oe=e.span`
  display: inline-flex;
`,we="M",xe="S",Ie=({className:e,buttonCallback:t,anchorCallback:n,text:r,buttonSize:l,buttonColor:a,iconKind:s,iconRotate:d,isAnchor:c,href:p,target:h})=>o(ve,Object.assign({className:e},{children:[c&&o(Me,Object.assign({href:p,target:h,onClick:n,$buttonColor:a,$buttonSize:l},{children:[s&&i(Ce,{iconKind:s,fillColor:"WHITE",size:l===we?"XXL":"L",iconRotate:null!=d?d:"DEFAULT",$buttonSize:l}),r&&i(Re,Object.assign({$buttonSize:l},{children:r}))]})),!c&&o(He,Object.assign({$buttonColor:a,$buttonSize:l,onClick:t},{children:[s&&i(Ce,{iconKind:s,fillColor:"WHITE",size:l===we?"XXL":"L",iconRotate:null!=d?d:"DEFAULT",$buttonSize:l}),r&&i(Re,Object.assign({$buttonSize:l},{children:r}))]}))]})),ve=e.div`
  display: inline-flex;
  pointer-events: auto;
`,Ae=t`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  min-width: ${({$buttonSize:e})=>e===xe?B.S.WIDTH:B.M.WIDTH};

  min-height: ${({$buttonSize:e})=>e===xe?B.S.HEIGHT:B.M.HEIGHT};

  margin: ${U.NONE};
  font-size: ${S.M};
  color: ${O.WHITE};
  transition: background ${v};

  ${({$buttonColor:e})=>`background: ${N[e]};`}

  ${({$buttonColor:e})=>{if("DEFAULT_CURRENT"===e)return"\n        cursor: pointer;\n        pointer-events: none;\n      "}}

  border-radius: ${k.S};

  @media (any-hover: hover) {
    &:hover {
      color: ${O.WHITE};

      ${({$buttonColor:e})=>"DEFAULT"===e?`\n            background: ${N.DEFAULT_HOVER};\n          `:"EXTERNAL"===e?`\n            background: ${N.EXTERNAL_HOVER};\n          `:void 0}
    }
  }
`,He=e.button`
  ${Ae}
`,Me=e(C)`
  ${Ae}
`,Ce=e(Z)`
  margin: ${({$buttonSize:e})=>e===we?`${U.NONE} ${U.XS}`:`${U.NONE}`};
`,Re=e.div`
  margin-right: ${({$buttonSize:e})=>e===we?U.M:U.S};

  text-align: left;

  font-size: ${({$buttonSize:e})=>e===we?S.M:S.S};

  user-select: none;

  &:not(${Ce} + &) {
    margin-left: ${({$buttonSize:e})=>e===we?U.M:U.S};
  }
`,_e=(e,t)=>`<button class="${t}"><span class="inner"></span></button>`,Se=({imageList:e})=>i(Be,Object.assign({modules:[f,T],loop:!0,slidesPerView:1,speed:1200,autoplay:{delay:4e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},pagination:{clickable:!0,renderBullet:_e,bulletClass:"custom-bullet-style",bulletActiveClass:"custom-bullet-style-active"},centeredSlides:!0,spaceBetween:40},{children:m(e,((e,t)=>i(y,{children:i(ze,{src:e.src,alt:e.alt,width:e.width,height:e.height,loading:e.loading})},t)))})),ze=e(le)``,Be=e(E)`
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
    width: ${B.M.WIDTH};
    height: ${B.S.HEIGHT};
    margin: ${U.NONE} ${U.S};

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
`,Ue=({commonList:e})=>i(ke,{children:m(e,((e,t)=>o(h,{children:[i(Ge,{children:e.title}),i(Xe,{children:e.description})]},t)))}),ke=e.dl`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > :nth-of-type(-n + 1) {
    margin-top: ${U.NONE};
  }
`,je="68%",De="32%",Fe="4px",Ke="12px",Ge=e.dt`
  width: ${De};
  margin-top: ${U.M};
  padding-top: ${Fe};
  padding-bottom: ${Fe};
  padding-right: ${Ke};
  font-weight: ${z.BOLD};

  ${Te.MOBILE} {
    width: ${_.FULL};
    margin-top: ${U.M};
  }
`,Xe=e.dd`
  width: ${je};
  margin-top: ${U.M};
  padding-top: ${Fe};
  padding-bottom: ${Fe};
  padding-left: ${Ke};
  border-left: 2px solid ${x.LIGHT_GRAY};

  ${Te.MOBILE} {
    width: ${_.FULL};
    margin-top: ${U.XS};
  }
`,Ve=({className:e,navigationList:t,handleLinkEvent:n,currentPath:r})=>{const[l,a]=p(!0),{isTablet:s}=ue();return Ee()((()=>{a(!s)}),[s]),o(Pe,Object.assign({className:e,$isOpen:l},{children:[i(Ye,Object.assign({$isOpen:l},{children:m(t,((e,t)=>i(We,{anchorCallback:t=>{n(t,e.path,e.isExternal),s&&a(!1)},text:e.name,buttonSize:"M",buttonColor:e.isExternal?"EXTERNAL":e.path===r?"DEFAULT_CURRENT":"DEFAULT",isAnchor:!0,href:e.path,target:e.isExternal?"BLANK":"SELF"},t)))})),i(qe,Object.assign({$isOpen:l},{children:i(Ie,{buttonCallback:()=>a(!l),buttonSize:"M",buttonColor:"DEFAULT",iconKind:l?"MENU_OPEN":"MENU"})}))]}))},Pe=e.div`
  overflow-y: auto;
  transition: background 0.25s ease;

  ${Te.TABLET} {
    position: fixed;
    top: 0;
    right: 0;
    width: ${_.HALF};

    /* NOTE: iOS Safari の address bar 対策のため */
    height: 100vh;
    height: 100dvh;

    background: none;
    pointer-events: none;

    ${({$isOpen:e})=>e&&`\n        background: ${b.WHITE};\n        pointer-events: auto;\n      `}
  }

  ${Te.MOBILE} {
    width: ${_.FULL};
  }
`,We=e(Ie)`
  justify-content: center;
  flex-grow: 1;
  margin: ${U.NONE};

  ${Te.TABLET} {
    flex-grow: 0;
  }

  /* HACK: 子要素が別のタグの為 */
  & > button,
  & > a {
    width: 100%;

    & > div {
      ${Te.OVER_PC} {
        font-size: ${S.L};
      }
    }
  }
`,Ye=e.nav`
  display: ${({$isOpen:e})=>e?"flex":"none"};
  justify-content: space-between;
  overflow: hidden;
  border-radius: ${k.M};
  background: ${N.DEFAULT};

  & > ${We} {
    &:not(:nth-last-of-type(1)) {
      border-right: 1px solid ${x.WHITE};
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
    height: calc((${B.M.HEIGHT} * 6) + (${U.L} * 5));
    margin-bottom: ${U.L};
    border-radius: ${k.NONE};
    background: none;
  }
`,qe=e.div`
  display: none;

  ${Te.TABLET} {
    display: flex;
    justify-content: flex-end;
    margin-top: ${({$isOpen:e})=>e?"0":"336px"};
  }
`,Ze=({imageProps:e})=>i(Je,{children:i(le,{src:e.src,alt:e.alt,width:e.width,height:e.height,loading:e.loading})}),Je=e.div`
  display: inline-flex;
  border: 8px solid ${x.LIGHT_GRAY};

  /* NOTE: ここでしか利用しないのでハードコードで対応する */
  background: ${L.LIGHT_GRAY};
`;u().format(),u.locale("ja");const Qe=({scheduleList:e,currentTime:t,isSummary:n=!1})=>{const r=s((e=>u(e).format("YYYY年M月D日(ddd)")),[]),l=g((()=>{const i=u(t);let o=[];return m(e,(e=>{if(i.isAfter(u(e.endDate),"day"))return;const t=r(e.startDate),n=r(e.endDate),l=Object.assign(Object.assign({},e),{startDate:t,endDate:n});o=[...o,l]})),n&&(o=$(o,0,5)),o}),[t,r,n,e]);return o(et,Object.assign({isSummary:n},{children:[!l.length&&i("div",{children:"準備中です"}),m(l,((e,t)=>o(h,{children:[o(rt,Object.assign({isSummary:n},{children:[e.startDate,e.startDate!==e.endDate&&`〜${e.endDate}`]})),o(lt,Object.assign({isSummary:n},{children:[e.timeFrame&&i(at,{children:e.timeFrame}),i("span",{children:e.description})]}))]},t)))]}))},et=e.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > :nth-of-type(-n + 2) {
    margin-top: ${U.NONE};
  }

  ${Te.MOBILE} {
    & > :nth-of-type(2) {
      margin-top: ${U.XS};
    }
  }

  ${({isSummary:e})=>e&&`\n      & > :nth-of-type(2) {\n        margin-top: ${U.XS};\n      }\n    `}
`,tt="68%",nt="32%",it="4px",ot="12px",rt=e.div`
  width: ${nt};
  margin-top: ${U.M};
  padding-top: ${it};
  padding-bottom: ${it};
  padding-right: ${ot};
  font-weight: ${z.BOLD};

  ${Te.MOBILE} {
    width: ${_.FULL};
    margin-top: ${U.M};
  }

  ${({isSummary:e})=>e&&`\n      width: ${_.FULL};\n      margin-top: ${U.M};\n    `}
`,lt=e.div`
  width: ${tt};
  margin-top: ${U.M};
  padding-top: ${it};
  padding-bottom: ${it};
  padding-left: ${ot};
  border-left: 2px solid ${x.LIGHT_GRAY};

  ${Te.MOBILE} {
    width: ${_.FULL};
    margin-top: ${U.XS};
  }

  ${({isSummary:e})=>e&&`\n      display: -webkit-box;\n      width: ${_.FULL};\n      margin-top: ${U.XS};\n      overflow: hidden;\n      -webkit-line-clamp: 1;\n      -webkit-box-orient: vertical;\n    `}
`,at=e.span`
  margin-right: ${U.M};
  font-weight: ${z.BOLD};
`;export{C as Anchor,Le as AnchorText,j as AnnotationText,b as BACKGROUND_COLOR,L as BASE_COLOR,_ as BLOCK_WIDTH,x as BORDER_COLOR,k as BORDER_RADIUS,$e as BREAK_POINTS,N as BUTTON_BACKGROUND_COLOR,Ie as Button,w as CHIP_BACKGROUND_COLOR,Se as Carousel,F as Chip,Ue as CommonList,O as FONT_COLOR,z as FONT_WEIGHT,Ve as GlobalNavigation,P as HeadingText,B as ICON_BUTTON_SIZE,H as ICON_KIND,S as INLINE_SIZE,Z as Icon,le as Image,U as MARGIN,fe as MATCH_MEDIA,Te as MEDIA_QUERY,ae as ParagraphText,Ze as Photo,Qe as ScheduleList,ge as ShopMap,v as TRANSITION_TIME,I as globalStyle,Ee as useIsomorphicEffect,ue as useMatchMedia};
