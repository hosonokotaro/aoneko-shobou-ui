import e,{css as t,createGlobalStyle as n}from"styled-components";import{jsx as o,jsxs as i,Fragment as r}from"react/jsx-runtime";import{Loader as l}from"@googlemaps/js-api-loader";import{useRef as a,useCallback as s,useEffect as d,useState as c,Fragment as p,useLayoutEffect as h,useMemo as T}from"react";import{map as g}from"lodash-es";import"dayjs/locale/ja";import $ from"dayjs";const f={ATTENTION:"#a370d3",CAUTION:"#ff8897",CAPTION:"#999",INFORMATION:"#5d7fb3",LINK:"#4a90d6",LINK_HOVER:"#417cb5",LINK_CURRENT:"#34628f",LINK_EXTERNAL:"#a4a368",LINK_EXTERNAL_HOVER:"#827f3c",TITLE:"#a370d3",BLACK:"#111",LIGHT_GRAY:"#eee",WHITE:"#fcfcfc"},E={WHITE:f.WHITE},m={DEFAULT:f.LINK,DEFAULT_HOVER:f.LINK_HOVER,DEFAULT_CURRENT:f.LINK_CURRENT,EXTERNAL:f.LINK_EXTERNAL,EXTERNAL_HOVER:f.LINK_EXTERNAL_HOVER},L={CAPTION:f.CAPTION,CAUTION:f.CAUTION,LINK:f.LINK,LINK_HOVER:f.LINK_HOVER,TITLE:f.TITLE,WHITE:f.WHITE,BLACK:f.BLACK},y={DEFAULT:f.INFORMATION,CAUTION:f.CAUTION},u={LIGHT_GRAY:f.LIGHT_GRAY,TITLE:f.TITLE,WHITE:f.WHITE},N=t`
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
    color: ${L.BLACK};
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
  ${N}
`;const b="0.25s ease",O={DEFAULT:"0deg",DEG90:"90deg",DEG180:"180deg",DEG270:"270deg"},I={INFO:"INFO",OPEN_IN_NEW:"OPEN_IN_NEW",NAVIGATE_NEXT:"NAVIGATE_NEXT",MENU:"MENU",MENU_OPEN:"MENU_OPEN"},x={SELF:"_self",BLANK:"_blank"},v=({className:e,href:t,target:n,handleClickEvent:i,children:r})=>o(w,Object.assign({className:e,href:t,target:n&&x[n],rel:"BLANK"===n?"noopener noreferrer":void 0,onClick:e=>{"function"==typeof i&&"SELF"===n&&(e.preventDefault(),i())}},{children:r})),w=e.a`
  color: ${L.LINK};
  transition: color ${b};

  @media (any-hover: hover) {
    &:hover {
      color: ${L.LINK_HOVER};
    }
  }
`,A={AUTO:"auto",FULL:"100%",HALF:"50%",ONE_THIRD:"calc(100% / 3)"},H={XXL:"2rem",XL:"1.6rem",L:"1.2rem",M:"1rem",S:"0.9rem"},M={BOLD:"600",NORMAL:"300"},R={M:{WIDTH:"40px",HEIGHT:"40px"},S:{WIDTH:"20px",HEIGHT:"20px"}},C={AUTO:"auto",XL:"20px",L:"16px",M:"12px",S:"8px",XS:"4px",NONE:"0"},_={M:"6px",S:"3px",NONE:"0"},z=({text:e,color:t})=>o(B,Object.assign({$color:t},{children:e})),B=e.span`
  font-size: ${H.M};
  color: ${({$color:e})=>L[e]};
`,S=({status:e,text:t})=>o(U,Object.assign({$status:e},{children:t})),U=e.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: ${_.S};
  background: ${({$status:e})=>y[e]};
  color: ${L.WHITE};
`,D="PAGE_TITLE",k="SECTION_TITLE",K="SUBTITLE",F=({text:e,kind:t})=>i(r,{children:[t===D&&o(j,{children:e}),t===k&&o(G,{children:e}),t===K&&o(X,{children:e})]}),j=e.h1`
  font-size: ${H.XXL};
  font-weight: ${M.NORMAL};
  color: ${L.TITLE};
`,G=e.h2`
  padding-left: 8px;
  border-left: 2px solid ${u.TITLE};
  font-size: ${H.XL};
  font-weight: ${M.NORMAL};
  color: ${L.TITLE};
`,X=e.h3`
  font-size: ${H.L};
  font-weight: ${M.NORMAL};
  color: ${L.TITLE};
`,V=({className:e,iconKind:t,fillColor:n,size:r,iconRotate:l})=>i(W,Object.assign({className:e,$iconRotate:l},{children:[t===I.INFO&&o(P,{$fillColor:n,width:H[r],height:H[r]}),t===I.OPEN_IN_NEW&&o(Y,{$fillColor:n,width:H[r],height:H[r]}),t===I.NAVIGATE_NEXT&&o(q,{$fillColor:n,width:H[r],height:H[r]}),t===I.MENU&&o(Z,{$fillColor:n,width:H[r],height:H[r]}),t===I.MENU_OPEN&&o(J,{$fillColor:n,width:H[r],height:H[r]})]})),W=e.i`
  display: inline-grid;
  place-content: center;
  transform: rotate(${({$iconRotate:e})=>`${O[e]}`});
`,P=e((e=>o("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"24px",height:"24px",role:"img"},e,{children:o("path",{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"})}))))`
  ${({$fillColor:e})=>`fill: ${L[e]};`}
`,Y=e((e=>i("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",role:"img"},e,{children:[o("path",{d:"M0 0h24v24H0z",fill:"none"}),o("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"})]}))))`
  ${({$fillColor:e})=>`fill: ${L[e]};`}
`,q=e((e=>i("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",role:"img"},e,{children:[o("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o("path",{d:"M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z"})]}))))`
  ${({$fillColor:e})=>`fill: ${L[e]};`}
`,Z=e((e=>i("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",width:"24px",viewBox:"0 0 24 24"},e,{children:[o("path",{d:"M0 0h24v24H0z",fill:"none"}),o("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})]}))))`
  ${({$fillColor:e})=>`fill: ${L[e]};`}
`,J=e((e=>i("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",width:"24px",viewBox:"0 0 24 24"},e,{children:[o("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o("path",{d:"M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"})]}))))`
  ${({$fillColor:e})=>`fill: ${L[e]};`}
`,Q="eager",ee="lazy",te=({className:e,src:t,alt:n="",width:i,height:r,loading:l})=>o("img",{className:e,src:t,alt:n,width:i,height:r,loading:"EAGER"===l?Q:"LAZY"===l?ee:void 0}),ne=({text:e})=>o(oe,{children:e}),oe=e.p`
  padding: 12px;
  border-left: 2px solid ${u.LIGHT_GRAY};
`;function ie(e,t,n,o){return new(n||(n=Promise))((function(i,r){function l(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,a)}s((o=o.apply(e,t||[])).next())}))}const re="styled_map",le={center:{lat:35.7803731,lng:139.726063},zoom:16,mapTypeControl:!1,mapTypeControlOptions:{mapTypeIds:[re]}},ae=[{elementType:"geometry",stylers:[{color:"#ebe3cd"}]},{elementType:"labels.text.fill",stylers:[{color:"#523735"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#c9b2a6"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{color:"#dcd2be"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#ae9e90"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#93817c"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#a5b076"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#447530"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#fdfcf8"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#f8c967"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#e9bc62"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#e98d58"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{color:"#db8555"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#806b63"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{color:"#8f7d77"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{color:"#ebe3cd"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#b9d3c2"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#92998d"}]}],se=({loaderOptions:e,height:t})=>{const n=a(null),i=s((()=>ie(void 0,void 0,void 0,(function*(){if(null===n.current)return;const t=new l(e),o=yield t.load(),i=new o.maps.StyledMapType(ae),r=new o.maps.Map(n.current,le);r.mapTypes.set(re,i),r.setMapTypeId(re),new o.maps.Marker({map:r,position:le.center})}))),[e]);return d((()=>(i(),()=>{})),[i]),o(de,{ref:n,$height:t})},de=e.div`
  height: ${({$height:e})=>e};
`,ce={TABLET:"768px",MOBILE:"540px"},pe={TABLET:`(max-width: ${ce.TABLET})`,MOBILE:`(max-width: ${ce.MOBILE})`},he={TABLET:`@media screen and ${pe.TABLET}`,MOBILE:`@media screen and ${pe.MOBILE}`},Te="undefined"!=typeof window&&window.matchMedia(pe.TABLET),ge=()=>{const[e,t]=c(!1!==Te&&Te.matches),n=s((e=>{t(e.matches)}),[]);return d((()=>{if(!1!==Te)return Te.addEventListener("change",n,!1),()=>{Te.removeEventListener("change",n,!1)}}),[n]),{isTablet:e}},$e=({text:e,href:t,target:n})=>i(Ee,Object.assign({href:t,target:n},{children:[o(me,{children:e}),"BLANK"===n&&o(fe,{iconKind:"OPEN_IN_NEW",fillColor:"LINK",size:"M",iconRotate:"DEFAULT"})]})),fe=e(V)``,Ee=e(v)`
  display: inline-flex;

  & > ${fe} {
    margin-left: ${C.XS};

    & > svg {
      transition: fill ${b};
    }
  }

  @media (any-hover: hover) {
    &:hover {
      & > ${fe} {
        & > svg {
          fill: ${L.LINK_HOVER};
        }
      }
    }
  }
`,me=e.span`
  display: inline-flex;
`,Le="M",ye="S",ue=({className:e,buttonCallback:t,anchorCallback:n,text:r,buttonSize:l,buttonColor:a,iconKind:s,isBorderRadius:d,iconRotate:c,isAnchor:p,href:h,target:T})=>i(Ne,Object.assign({className:e},{children:[p&&i(Ie,Object.assign({href:h||"",target:T,handleClickEvent:n,$buttonColor:a,$isBorderRadius:d,$buttonSize:l},{children:[s&&o(xe,{iconKind:s,fillColor:"WHITE",size:l===Le?"XXL":"L",iconRotate:null!=c?c:"DEFAULT",$buttonSize:l}),r&&o(ve,Object.assign({$buttonSize:l},{children:r}))]})),!p&&i(Oe,Object.assign({$buttonColor:a,$isBorderRadius:d,$buttonSize:l,onClick:t},{children:[s&&o(xe,{iconKind:s,fillColor:"WHITE",size:l===Le?"XXL":"L",iconRotate:null!=c?c:"DEFAULT",$buttonSize:l}),r&&o(ve,Object.assign({$buttonSize:l},{children:r}))]}))]})),Ne=e.div`
  display: inline-flex;
  pointer-events: auto;
`,be=t`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  min-width: ${({$buttonSize:e})=>e===ye?R.S.WIDTH:R.M.WIDTH};

  min-height: ${({$buttonSize:e})=>e===ye?R.S.HEIGHT:R.M.HEIGHT};

  margin: ${C.NONE};
  font-size: ${H.M};
  color: ${L.WHITE};
  transition: background ${b};

  ${({$buttonColor:e})=>`background: ${m[e]};`}

  ${({$buttonColor:e})=>{if("DEFAULT_CURRENT"===e)return"\n        cursor: pointer;\n        pointer-events: none;\n      "}}

  ${({$isBorderRadius:e})=>`border-radius: ${e?_.S:0}`};

  @media (any-hover: hover) {
    &:hover {
      color: ${L.WHITE};

      ${({$buttonColor:e})=>"DEFAULT"===e?`\n            background: ${m.DEFAULT_HOVER};\n          `:"EXTERNAL"===e?`\n            background: ${m.EXTERNAL_HOVER};\n          `:void 0}
    }
  }
`,Oe=e.button`
  ${be}
`,Ie=e(v)`
  ${be}
`,xe=e(V)`
  margin: ${({$buttonSize:e})=>e===Le?`${C.NONE} ${C.XS}`:`${C.NONE}`};
`,ve=e.div`
  margin-right: ${({$buttonSize:e})=>e===Le?C.M:C.S};

  text-align: left;

  font-size: ${({$buttonSize:e})=>e===Le?H.M:H.S};

  user-select: none;

  &:not(${xe} + &) {
    margin-left: ${({$buttonSize:e})=>e===Le?C.M:C.S};
  }
`,we=({commonList:e})=>o(Ae,{children:g(e,((e,t)=>i(p,{children:[o(_e,{children:e.title}),o(ze,{children:e.description})]},t)))}),Ae=e.dl`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > :nth-of-type(-n + 1) {
    margin-top: ${C.NONE};
  }
`,He="68%",Me="32%",Re="4px",Ce="12px",_e=e.dt`
  width: ${Me};
  margin-top: ${C.M};
  padding-top: ${Re};
  padding-bottom: ${Re};
  padding-right: ${Ce};
  font-weight: ${M.BOLD};

  ${he.MOBILE} {
    width: ${A.FULL};
    margin-top: ${C.M};
  }
`,ze=e.dd`
  width: ${He};
  margin-top: ${C.M};
  padding-top: ${Re};
  padding-bottom: ${Re};
  padding-left: ${Ce};
  border-left: 2px solid ${u.LIGHT_GRAY};

  ${he.MOBILE} {
    width: ${A.FULL};
    margin-top: ${C.XS};
  }
`,Be=({navigationList:e,handleLinkEvent:t,currentPath:n})=>{const[r,l]=c(!0),{isTablet:a}=ge();return h((()=>{l(!a)}),[a]),i(Se,Object.assign({$isOpen:r},{children:[o(De,Object.assign({$isOpen:r},{children:g(e,((e,i)=>o(Ue,{anchorCallback:()=>t(e.path,e.isExternal),text:e.name,buttonSize:"M",buttonColor:e.isExternal?"EXTERNAL":e.path===n?"DEFAULT_CURRENT":"DEFAULT",isBorderRadius:a,isAnchor:!0,href:e.path,target:e.isExternal?"BLANK":"SELF"},i)))})),o(ke,Object.assign({$isOpen:r},{children:o(ue,{buttonCallback:()=>l(!r),buttonSize:"M",buttonColor:"DEFAULT",iconKind:r?"MENU_OPEN":"MENU",isBorderRadius:!0})}))]}))},Se=e.div`
  overflow-y: auto;
  transition: background 0.25s ease;

  ${he.TABLET} {
    position: fixed;
    top: 0;
    right: 0;
    width: ${A.HALF};

    /* NOTE: iOS Safari の address bar 対策のため */
    height: 100vh;
    height: 100dvh;

    background: none;
    pointer-events: none;

    ${({$isOpen:e})=>e&&`\n        background: ${E.WHITE};\n        pointer-events: auto;\n      `}
  }

  ${he.MOBILE} {
    width: ${A.FULL};
  }
`,Ue=e(ue)`
  justify-content: center;
  flex-grow: 1;
  margin: ${C.NONE};

  ${he.TABLET} {
    flex-grow: 0;
  }

  /* HACK: 子要素が別のタグの為 */
  & > button,
  & > a {
    width: 100%;
  }
`,De=e.nav`
  display: ${({$isOpen:e})=>e?"flex":"none"};
  justify-content: space-between;
  overflow: hidden;
  border-radius: ${_.M};
  background: ${m.DEFAULT};

  & > ${Ue} {
    &:not(:nth-last-of-type(1)) {
      border-right: 1px solid ${u.WHITE};
    }

    ${he.TABLET} {
      &:not(:nth-last-of-type(1)) {
        border-right: none;
      }
    }
  }

  ${he.TABLET} {
    flex-direction: column;
    align-items: flex-end;
    height: calc((${R.M.HEIGHT} * 6) + (${C.L} * 5));
    margin-bottom: ${C.L};
    border-radius: ${_.NONE};
    background: none;
  }
`,ke=e.div`
  display: none;

  ${he.TABLET} {
    display: flex;
    justify-content: flex-end;
    margin-top: ${({$isOpen:e})=>e?"0":"336px"};
  }
`,Ke=({imageProps:e})=>o(Fe,{children:o(te,{src:e.src,alt:e.alt,width:e.width,height:e.height,loading:e.loading})}),Fe=e.div`
  display: inline-flex;
  border: 8px solid ${u.LIGHT_GRAY};

  /* NOTE: ここでしか利用しないのでハードコードで対応する */
  background: ${f.LIGHT_GRAY};
`;$().format(),$.locale("ja");const je=({scheduleList:e,currentTime:t})=>{const n=s((e=>$(e).format("YYYY年M月D日(ddd)")),[]),r=T((()=>{const o=$(t);let i=[];return g(e,(e=>{if(o.isAfter($(e.endDate),"day"))return;const t=n(e.startDate),r=n(e.endDate),l=Object.assign(Object.assign({},e),{startDate:t,endDate:r});i=[...i,l]})),i}),[t,n,e]);return i(Ge,{children:[!r.length&&o("div",{children:"準備中です"}),g(r,((e,t)=>i(p,{children:[i(Ye,{children:[e.startDate,e.startDate!==e.endDate&&`〜${e.endDate}`]}),i(qe,{children:[o(Ze,{children:e.timeFrame}),o("span",{children:e.description})]})]},t)))]})},Ge=e.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > :nth-of-type(-n + 2) {
    margin-top: ${C.NONE};
  }

  ${he.MOBILE} {
    & > :nth-of-type(2) {
      margin-top: ${C.XS};
    }
  }
`,Xe="68%",Ve="32%",We="4px",Pe="12px",Ye=e.div`
  width: ${Ve};
  margin-top: ${C.M};
  padding-top: ${We};
  padding-bottom: ${We};
  padding-right: ${Pe};
  font-weight: ${M.BOLD};

  ${he.MOBILE} {
    width: ${A.FULL};
    margin-top: ${C.M};
  }
`,qe=e.div`
  width: ${Xe};
  margin-top: ${C.M};
  padding-top: ${We};
  padding-bottom: ${We};
  padding-left: ${Pe};
  border-left: 2px solid ${u.LIGHT_GRAY};

  ${he.MOBILE} {
    width: ${A.FULL};
    margin-top: ${C.XS};
  }
`,Ze=e.span`
  margin-right: ${C.M};
  font-weight: ${M.BOLD};
`;export{v as Anchor,$e as AnchorText,z as AnnotationText,E as BACKGROUND_COLOR,f as BASE_COLOR,A as BLOCK_WIDTH,u as BORDER_COLOR,_ as BORDER_RADIUS,ce as BREAK_POINTS,m as BUTTON_BACKGROUND_COLOR,ue as Button,y as CHIP_BACKGROUND_COLOR,S as Chip,we as CommonList,L as FONT_COLOR,M as FONT_WEIGHT,Be as GlobalNavigation,F as HeadingText,R as ICON_BUTTON_SIZE,I as ICON_KIND,H as INLINE_SIZE,V as Icon,te as Image,C as MARGIN,pe as MATCH_MEDIA,he as MEDIA_QUERY,ne as ParagraphText,Ke as Photo,je as ScheduleList,se as ShopMap,b as TRANSITION_TIME,N as globalStyle,ge as useMatchMedia};
