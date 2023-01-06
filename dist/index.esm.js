import e,{css as t,createGlobalStyle as i}from"styled-components";import{jsx as o,jsxs as n,Fragment as r}from"react/jsx-runtime";import{Loader as l}from"@googlemaps/js-api-loader";import{useRef as a,useCallback as s,useEffect as d,useState as c,Fragment as p,useLayoutEffect as h,useMemo as T}from"react";import{map as g}from"lodash-es";import"dayjs/locale/ja";import $ from"dayjs";const f={ATTENTION:"#a370d3",CAUTION:"#ff8897",CAPTION:"#999",INFORMATION:"#5d7fb3",LINK:"#4a90d6",LINK_HOVER:"#417cb5",LINK_CURRENT:"#34628f",LINK_EXTERNAL:"#a4a368",LINK_EXTERNAL_HOVER:"#827f3c",TITLE:"#a370d3",BLACK:"#111",LIGHT_GRAY:"#eee",WHITE:"#fcfcfc"},E={WHITE:f.WHITE},m={DEFAULT:f.LINK,DEFAULT_HOVER:f.LINK_HOVER,DEFAULT_CURRENT:f.LINK_CURRENT,EXTERNAL:f.LINK_EXTERNAL,EXTERNAL_HOVER:f.LINK_EXTERNAL_HOVER},L={CAPTION:f.CAPTION,CAUTION:f.CAUTION,LINK:f.LINK,LINK_HOVER:f.LINK_HOVER,TITLE:f.TITLE,WHITE:f.WHITE,BLACK:f.BLACK},y={DEFAULT:f.INFORMATION,CAUTION:f.CAUTION},u={LIGHT_GRAY:f.LIGHT_GRAY,TITLE:f.TITLE,WHITE:f.WHITE},N=t`
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
`;i`
  ${N}
`;const b="0.25s ease",O={DEFAULT:"0deg",DEG90:"90deg",DEG180:"180deg",DEG270:"270deg"},I={INFO:"INFO",OPEN_IN_NEW:"OPEN_IN_NEW",NAVIGATE_NEXT:"NAVIGATE_NEXT",MENU:"MENU",MENU_OPEN:"MENU_OPEN"},x={SELF:"_self",BLANK:"_blank"},w=({className:e,href:t,target:i,children:n})=>o(A,Object.assign({className:e,href:t,target:i&&x[i],rel:"BLANK"===i?"noopener noreferrer":void 0},{children:n})),A=e.a`
  color: ${L.LINK};
  transition: color ${b};

  @media (any-hover: hover) {
    &:hover {
      color: ${L.LINK_HOVER};
    }
  }
`,v={AUTO:"auto",FULL:"100%",HALF:"50%",ONE_THIRD:"calc(100% / 3)"},H={XXL:"2rem",XL:"1.6rem",L:"1.2rem",M:"1rem",S:"0.9rem"},M={BOLD:"600",NORMAL:"300"},R={M:{WIDTH:"40px",HEIGHT:"40px"},S:{WIDTH:"20px",HEIGHT:"20px"}},_={AUTO:"auto",XL:"20px",L:"16px",M:"12px",S:"8px",XS:"4px",NONE:"0"},z={M:"6px",S:"3px",NONE:"0"},C=({text:e,color:t})=>o(B,Object.assign({$color:t},{children:e})),B=e.span`
  font-size: ${H.M};
  color: ${({$color:e})=>L[e]};
`,S=({status:e,text:t})=>o(U,Object.assign({$status:e},{children:t})),U=e.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: ${z.S};
  background: ${({$status:e})=>y[e]};
  color: ${L.WHITE};
`,D="PAGE_TITLE",K="SECTION_TITLE",j="SUBTITLE",F=({text:e,kind:t})=>n(r,{children:[t===D&&o(k,{children:e}),t===K&&o(G,{children:e}),t===j&&o(X,{children:e})]}),k=e.h1`
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
`,V=({className:e,iconKind:t,fillColor:i,size:r,iconRotate:l})=>n(W,Object.assign({className:e,$iconRotate:l},{children:[t===I.INFO&&o(P,{$fillColor:i,width:H[r],height:H[r]}),t===I.OPEN_IN_NEW&&o(Y,{$fillColor:i,width:H[r],height:H[r]}),t===I.NAVIGATE_NEXT&&o(q,{$fillColor:i,width:H[r],height:H[r]}),t===I.MENU&&o(Z,{$fillColor:i,width:H[r],height:H[r]}),t===I.MENU_OPEN&&o(J,{$fillColor:i,width:H[r],height:H[r]})]})),W=e.i`
  display: inline-grid;
  place-content: center;
  transform: rotate(${({$iconRotate:e})=>`${O[e]}`});
`,P=e((e=>o("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"24px",height:"24px",role:"img"},e,{children:o("path",{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"})}))))`
  ${({$fillColor:e})=>`fill: ${L[e]};`}
`,Y=e((e=>n("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",role:"img"},e,{children:[o("path",{d:"M0 0h24v24H0z",fill:"none"}),o("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"})]}))))`
  ${({$fillColor:e})=>`fill: ${L[e]};`}
`,q=e((e=>n("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",role:"img"},e,{children:[o("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o("path",{d:"M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z"})]}))))`
  ${({$fillColor:e})=>`fill: ${L[e]};`}
`,Z=e((e=>n("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",width:"24px",viewBox:"0 0 24 24"},e,{children:[o("path",{d:"M0 0h24v24H0z",fill:"none"}),o("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})]}))))`
  ${({$fillColor:e})=>`fill: ${L[e]};`}
`,J=e((e=>n("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24px",width:"24px",viewBox:"0 0 24 24"},e,{children:[o("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o("path",{d:"M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"})]}))))`
  ${({$fillColor:e})=>`fill: ${L[e]};`}
`,Q="eager",ee="lazy",te=({className:e,src:t,alt:i="",width:n,height:r,loading:l})=>o("img",{className:e,src:t,alt:i,width:n,height:r,loading:"EAGER"===l?Q:"LAZY"===l?ee:void 0}),ie=({text:e})=>o(oe,{children:e}),oe=e.p`
  padding: 12px;
  border-left: 2px solid ${u.LIGHT_GRAY};
`;function ne(e,t,i,o){return new(i||(i=Promise))((function(n,r){function l(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(l,a)}s((o=o.apply(e,t||[])).next())}))}const re="styled_map",le={center:{lat:35.7803731,lng:139.726063},zoom:16,mapTypeControl:!1,mapTypeControlOptions:{mapTypeIds:[re]}},ae=[{elementType:"geometry",stylers:[{color:"#ebe3cd"}]},{elementType:"labels.text.fill",stylers:[{color:"#523735"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#c9b2a6"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{color:"#dcd2be"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#ae9e90"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#93817c"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#a5b076"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#447530"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#fdfcf8"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#f8c967"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#e9bc62"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#e98d58"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{color:"#db8555"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#806b63"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{color:"#8f7d77"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{color:"#ebe3cd"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#b9d3c2"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#92998d"}]}],se=({loaderOptions:e,height:t})=>{const i=a(null),n=s((()=>ne(void 0,void 0,void 0,(function*(){if(null===i.current)return;const t=new l(e),o=yield t.load(),n=new o.maps.StyledMapType(ae),r=new o.maps.Map(i.current,le);r.mapTypes.set(re,n),r.setMapTypeId(re),new o.maps.Marker({map:r,position:le.center})}))),[e]);return d((()=>(n(),()=>{})),[n]),o(de,{ref:i,$height:t})},de=e.div`
  height: ${({$height:e})=>e};
`,ce={TABLET:"768px",MOBILE:"540px"},pe={TABLET:`(max-width: ${ce.TABLET})`,MOBILE:`(max-width: ${ce.MOBILE})`},he={TABLET:`@media screen and ${pe.TABLET}`,MOBILE:`@media screen and ${pe.MOBILE}`},Te="undefined"!=typeof window&&window.matchMedia(pe.TABLET),ge=()=>{const[e,t]=c(!1!==Te&&Te.matches),i=s((e=>{t(e.matches)}),[]);return d((()=>{if(!1!==Te)return Te.addEventListener("change",i,!1),()=>{Te.removeEventListener("change",i,!1)}}),[i]),{isTablet:e}},$e=({text:e,href:t,target:i})=>n(Ee,Object.assign({href:t,target:i},{children:[o(me,{children:e}),"BLANK"===i&&o(fe,{iconKind:"OPEN_IN_NEW",fillColor:"LINK",size:"M",iconRotate:"DEFAULT"})]})),fe=e(V)``,Ee=e(w)`
  display: inline-flex;

  & > ${fe} {
    margin-left: ${_.XS};

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
`,Le="M",ye="S",ue=({className:e,callback:t,text:i,buttonSize:r,buttonColor:l,iconKind:a,isBorderRadius:s,iconRotate:d,isAnchor:c,href:p,target:h})=>n(Ne,Object.assign({className:e},{children:[c&&n(Ie,Object.assign({href:p||"",target:h,$buttonColor:l,$isBorderRadius:s,$buttonSize:r},{children:[a&&o(xe,{iconKind:a,fillColor:"WHITE",size:r===Le?"XXL":"L",iconRotate:null!=d?d:"DEFAULT",$buttonSize:r}),i&&o(we,Object.assign({$buttonSize:r},{children:i}))]})),!c&&n(Oe,Object.assign({$buttonColor:l,$isBorderRadius:s,$buttonSize:r,onClick:t},{children:[a&&o(xe,{iconKind:a,fillColor:"WHITE",size:r===Le?"XXL":"L",iconRotate:null!=d?d:"DEFAULT",$buttonSize:r}),i&&o(we,Object.assign({$buttonSize:r},{children:i}))]}))]})),Ne=e.div`
  display: inline-flex;
`,be=t`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  min-width: ${({$buttonSize:e})=>e===ye?R.S.WIDTH:R.M.WIDTH};

  min-height: ${({$buttonSize:e})=>e===ye?R.S.HEIGHT:R.M.HEIGHT};

  margin: ${_.NONE};
  font-size: ${H.M};
  color: ${L.WHITE};
  transition: background ${b};

  ${({$buttonColor:e})=>`background: ${m[e]};`}

  ${({$buttonColor:e})=>{if("DEFAULT_CURRENT"===e)return"\n        cursor: pointer;\n        pointer-events: none;\n      "}}

  ${({$isBorderRadius:e})=>`border-radius: ${e?z.S:0}`};

  @media (any-hover: hover) {
    &:hover {
      color: ${L.WHITE};

      ${({$buttonColor:e})=>"DEFAULT"===e?`\n            background: ${m.DEFAULT_HOVER};\n          `:"EXTERNAL"===e?`\n            background: ${m.EXTERNAL_HOVER};\n          `:void 0}
    }
  }
`,Oe=e.button`
  ${be}
`,Ie=e(w)`
  ${be}
`,xe=e(V)`
  margin: ${({$buttonSize:e})=>e===Le?`${_.NONE} ${_.XS}`:`${_.NONE}`};
`,we=e.div`
  margin-right: ${({$buttonSize:e})=>e===Le?_.M:_.S};

  text-align: left;

  font-size: ${({$buttonSize:e})=>e===Le?H.M:H.S};

  user-select: none;

  &:not(${xe} + &) {
    margin-left: ${({$buttonSize:e})=>e===Le?_.M:_.S};
  }
`,Ae=({commonList:e})=>o(ve,{children:g(e,((e,t)=>n(p,{children:[o(ze,{children:e.title}),o(Ce,{children:e.description})]},t)))}),ve=e.dl`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > :nth-of-type(-n + 1) {
    margin-top: ${_.NONE};
  }
`,He="68%",Me="32%",Re="4px",_e="12px",ze=e.dt`
  width: ${Me};
  margin-top: ${_.M};
  padding-top: ${Re};
  padding-bottom: ${Re};
  padding-right: ${_e};
  font-weight: ${M.BOLD};

  ${he.MOBILE} {
    width: ${v.FULL};
    margin-top: ${_.M};
  }
`,Ce=e.dd`
  width: ${He};
  margin-top: ${_.M};
  padding-top: ${Re};
  padding-bottom: ${Re};
  padding-left: ${_e};
  border-left: 2px solid ${u.LIGHT_GRAY};

  ${he.MOBILE} {
    width: ${v.FULL};
    margin-top: ${_.XS};
  }
`,Be=({navigationList:e,handleLinkEvent:t,currentPath:i})=>{const[r,l]=c(!1),{isTablet:a}=ge();return h((()=>{l(!a)}),[a]),n(Se,Object.assign({$isOpen:r},{children:[o(De,Object.assign({$isOpen:r},{children:g(e,((e,n)=>o(Ue,{callback:()=>t(e.path,e.isExternal),text:e.name,buttonSize:"M",buttonColor:e.isExternal?"EXTERNAL":e.path===i?"DEFAULT_CURRENT":"DEFAULT",isBorderRadius:a,isAnchor:!0,href:e.path,target:e.isExternal?"BLANK":"SELF"},n)))})),o(Ke,Object.assign({$isOpen:r},{children:o(ue,{callback:()=>l(!r),buttonSize:"M",buttonColor:"DEFAULT",iconKind:r?"MENU_OPEN":"MENU",isBorderRadius:!0})}))]}))},Se=e.div`
  overflow-y: auto;
  transition: background 0.25s ease;

  ${he.TABLET} {
    position: fixed;
    top: 0;
    right: 0;
    width: ${v.HALF};

    /* NOTE: iOS Safari の address bar 対策のため */
    height: 100vh;
    height: 100dvh;

    background: ${({$isOpen:e})=>e?E.WHITE:"none"};
  }

  ${he.MOBILE} {
    width: ${v.FULL};
  }
`,Ue=e(ue)`
  justify-content: center;
  flex-grow: 1;
  margin: ${_.NONE};

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
  border-radius: ${z.M};
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
    height: calc((${R.M.HEIGHT} * 6) + (${_.L} * 5));
    margin-bottom: ${_.L};
    border-radius: ${z.NONE};
    background: none;
  }
`,Ke=e.div`
  display: none;

  ${he.TABLET} {
    display: flex;
    justify-content: flex-end;

    margin-top: ${({$isOpen:e})=>e?"0":"336px"};
  }
`,je=({imageProps:e})=>o(Fe,{children:o(te,{src:e.src,alt:e.alt,width:e.width,height:e.height,loading:e.loading})}),Fe=e.div`
  display: inline-flex;
  border: 8px solid ${u.LIGHT_GRAY};

  /* NOTE: ここでしか利用しないのでハードコードで対応する */
  background: ${f.LIGHT_GRAY};
`;$().format(),$.locale("ja");const ke=({scheduleList:e,currentTime:t})=>{const i=s((e=>$(e).format("YYYY年M月D日(ddd)")),[]),r=T((()=>{const o=$(t);let n=[];return g(e,(e=>{if(o.isAfter($(e.endDate),"day"))return;const t=i(e.startDate),r=i(e.endDate),l=Object.assign(Object.assign({},e),{startDate:t,endDate:r});n=[...n,l]})),n}),[t,i,e]);return n(Ge,{children:[!r.length&&o("div",{children:"準備中です"}),g(r,((e,t)=>n(p,{children:[n(Ye,{children:[e.startDate,e.startDate!==e.endDate&&`〜${e.endDate}`]}),n(qe,{children:[o(Ze,{children:e.timeFrame}),o("span",{children:e.description})]})]},t)))]})},Ge=e.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > :nth-of-type(-n + 2) {
    margin-top: ${_.NONE};
  }

  ${he.MOBILE} {
    & > :nth-of-type(2) {
      margin-top: ${_.XS};
    }
  }
`,Xe="68%",Ve="32%",We="4px",Pe="12px",Ye=e.div`
  width: ${Ve};
  margin-top: ${_.M};
  padding-top: ${We};
  padding-bottom: ${We};
  padding-right: ${Pe};
  font-weight: ${M.BOLD};

  ${he.MOBILE} {
    width: ${v.FULL};
    margin-top: ${_.M};
  }
`,qe=e.div`
  width: ${Xe};
  margin-top: ${_.M};
  padding-top: ${We};
  padding-bottom: ${We};
  padding-left: ${Pe};
  border-left: 2px solid ${u.LIGHT_GRAY};

  ${he.MOBILE} {
    width: ${v.FULL};
    margin-top: ${_.XS};
  }
`,Ze=e.span`
  margin-right: ${_.M};
  font-weight: ${M.BOLD};
`;export{w as Anchor,$e as AnchorText,C as AnnotationText,E as BACKGROUND_COLOR,f as BASE_COLOR,v as BLOCK_WIDTH,u as BORDER_COLOR,z as BORDER_RADIUS,ce as BREAK_POINTS,m as BUTTON_BACKGROUND_COLOR,ue as Button,y as CHIP_BACKGROUND_COLOR,S as Chip,Ae as CommonList,L as FONT_COLOR,M as FONT_WEIGHT,Be as GlobalNavigation,F as HeadingText,R as ICON_BUTTON_SIZE,I as ICON_KIND,H as INLINE_SIZE,V as Icon,te as Image,_ as MARGIN,pe as MATCH_MEDIA,he as MEDIA_QUERY,ie as ParagraphText,je as Photo,ke as ScheduleList,se as ShopMap,b as TRANSITION_TIME,N as globalStyle,ge as useMatchMedia};
