(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[4512],{34512:(R,l,n)=>{"use strict";n.r(l),n.d(l,{default:()=>F});var d=n(27279),E=n(70627),u=n.n(E),g=n(72450),i=n(45648),a=n(77970),c=n(93415),h=n(82959),p=n(8175),S=n.n(p),P=n(39642),k=n(95046),w=n.n(k);const f=async(s,m)=>{if(!m)return;const{plugins:I=[]}=s,y=[...I.map(H=>H.pluginName)],L=[{name:"DocumentList",module:"ckeditor5-list"},{name:"TextPartLanguage",module:"ckeditor5-language"},{name:"Alignment",module:"ckeditor5-alignment"},{name:"Autosave",module:"ckeditor5-autosave"},{name:"BlockQuote",module:"ckeditor5-block-quote"},{name:"CodeBlock",module:"ckeditor5-code-block"},{name:"Heading",module:"ckeditor5-heading"},{name:"HtmlEmbed",module:"ckeditor5-html-embed"},{name:"GeneralHtmlSupport",module:"ckeditor5-html-support"},{name:"HorizontalLine",module:"ckeditor5-horizontal-line"},{name:"MediaEmbed",module:"ckeditor5-media-embed"},{name:"Image",module:"ckeditor5-image"},{name:"Indent",module:"ckeditor5-indent"},{name:"Link",module:"ckeditor5-link"},{name:"RemoveFormat",module:"ckeditor5-remove-format"},{name:"Table",module:"ckeditor5-table"},{name:"WordCount",module:"ckeditor5-word-count"},{name:"FindAndReplace",module:"ckeditor5-find-and-replace"},{name:"SpecialCharacters",module:"ckeditor5-special-characters"},{name:"PageBreak",module:"ckeditor5-page-break"},{name:"SourceEditing",module:"ckeditor5-source-editing"},{name:"Highlight",module:"ckeditor5-highlight"},{name:"Style",module:"ckeditor5-style"}],D=["Bold","Code","Italic","Strikethrough","Subscript","Superscript","Underline"],Q=["FontBackgroundColor","FontColor","FontFamily","FontSize"],lt=["List","DocumentList"];await Promise.all(L.filter(({name:H})=>y.includes(H)).map(async({module:H})=>await n(74060)(`./${H}/build/translations/${m}.js`).catch(()=>null))),y.some(H=>D.includes(H))&&await n(98996)(`./${m}.js`).catch(()=>null),y.some(H=>lt.includes(H))&&await n(44042)(`./${m}.js`).catch(()=>null),y.some(H=>Q.includes(H))&&await n(42940)(`./${m}.js`).catch(()=>null)},j=async s=>{const m=new URLSearchParams(window.location.search),y=Object.fromEntries(m.entries())["plugins[i18n][locale]"],L=h.I8.getUserInfo().preferedLanguage,{ui:D=L||"en",content:Q,textPartLanguage:lt,ignorei18n:H}=s.language||{};if(y){const dt=y.split("-")[0];s.language={ui:typeof s.language=="string"?s.language:D,content:H?Q:dt,textPartLanguage:lt},await f(s,s.language.ui),await f(s,s.language.content)}else typeof s.language=="object"?(await f(s,s.language.ui),await f(s,s.language.content)):typeof s.language=="string"?await f(s,s.language):(s.language=L,await f(s,L))},U=s=>{const{configs:m,configsOverwrite:I}=globalThis.CKEditorConfig||{};let y;return I?y=m:(y=P.Z,m&&Object.keys(m).map(D=>{P.Z.hasOwnProperty(D)?(y[D].fields={...P.Z[D].field,...m[D].field},y[D].styles=m[D].styles||P.Z[D].styles,y[D].editorConfig={...P.Z[D].editorConfig,...m[D].editorConfig}):y[D]=m[D]})),S()(y[s])},tt=(s,{responsiveDimensions:m},I)=>{const y=s.editorConfig?.plugins?[...s.editorConfig.plugins.map(L=>L.pluginName)]:[];y.includes("StrapiMediaLib")&&(s.editorConfig.strapiMediaLib={toggle:I}),y.includes("StrapiUploadAdapter")&&(s.editorConfig.strapiUploadAdapter={uploadUrl:`${strapi.backendURL}/upload`,headers:{Authorization:"Bearer "+h.I8.getToken()},backendUrl:strapi.backendURL,responsive:m}),y.includes("WordCount")&&(s.editorConfig.WordCountPlugin=!0)},et=s=>(0,h.WY)(`/${w()}/config/${s}`,{method:"GET"}),V=async(s,m)=>{const I=U(s),y=await et("upload");return tt(I,y,m),await j(I.editorConfig),{currentConfig:I,uploadPluginConfig:y}},ot=(0,g.css)`
  .ck {
    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);
    --ck-color-mention-background: hsla(341, 100%, 30%, 0.1);
    --ck-color-mention-text: hsl(341, 100%, 30%);
    --ck-color-table-caption-background: hsl(0, 0%, 97%);
    --ck-color-table-caption-text: hsl(0, 0%, 20%);
    --ck-highlight-marker-blue: hsl(201, 97%, 72%);
    --ck-highlight-marker-green: hsl(120, 93%, 68%);
    --ck-highlight-marker-pink: hsl(345, 96%, 73%);
    --ck-highlight-marker-yellow: hsl(60, 97%, 73%);
    --ck-highlight-pen-green: hsl(112, 100%, 27%);
    --ck-highlight-pen-red: hsl(0, 85%, 49%);
    --ck-image-style-spacing: 1.5em;
    --ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
    --ck-todo-list-checkmark-size: 16px;
  }

  
  .ck.ck-sticky-panel .ck-sticky-panel__content_sticky {
    top: 64px !important;
  }
  .ck.ck-reset.ck-dropdown__panel.ck-dropdown__panel_sw.ck-dropdown__panel-visible {
    border-radius: 4px;
  }

  .ck-editor__main {
    
    --ck-font-face: "Source Sans Pro", system-ui, Roboto, "Helvetica Neue", "Helvetica", Arial, sans-serif;
    
    color: var(--ck-color-editor-base-text);
    font-family: var(--ck-font-face);

    * {
      font: revert;
      margin: revert;
    }


    h1 {
      font-size: 2.3em;
    }

    h2 {
      font-size: 1.84em;
    }

    h3 {
      font-size: 1.48em;
    }

    h4 {
      font-size: 1.22em;
    }

    h5 {
      font-size: 1.06em;
    }

    h6 {
      font-size: 1em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.2em;
      padding-top: .8em;
      margin-bottom: .4em
    }

    blockquote,
    ol,
    p,
    ul {
      font-size: 1em;
      line-height: 1.6em;
      padding-top: .2em;
      margin-bottom: var(--ck-spacing-large)
    }

    figcaption {
      background-color: var(--ck-color-image-caption-background);
      caption-side: bottom;
      color: var(--ck-color-image-caption-text);
      display: table-caption;
      font-size: 0.75em;
      outline-offset: -1px;
      padding: 0.6em;
      word-break: break-word;
    }

    a {
      text-decoration: none;
      color: #1b3af2;
    }

    a:hover {
      text-decoration: underline;
    }

    .table {
      margin: 0;
    }

    ul.todo-list {
      list-style: none;
      margin: revert;
      color: revert;
      font-family: revert;
      margin-left: 2rem;
    }

    ul,
    ol {
      list-style: initial;
      margin-left: 2rem;
    }

    ol {
      list-style: decimal;
    }

    sub {
      vertical-align: sub;
    }

    sup {
      vertical-align: super;
    }

    .ck.ck-content.ck-editor__editable {
      line-height: initial;
      min-height: 12.5rem;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
      transition-property: border-color, box-shadow, max-height;
      transition-timing-function: ease-in-out;
      transition-duration: 0.5s;
      &.ck-focused:not(.ck-editor__nested-editable) {
        border: 1px solid var(--ck-color-base-border);
        /* border: var(--ck-focus-ring); */
        box-shadow: none;
        transition-property: border-color, box-shadow, max-height;
        transition-timing-function: ease-in-out;
        transition-duration: 0.5s;
      }
    }

    .ck-focused,
    .ck-blurred {
      overflow-y: auto;
      overflow-x: hidden;
      transition: max-height 0.5s ease-in-out;
      ::-webkit-scrollbar {
        width: 7px;
      }
      ::-webkit-scrollbar-track {
        background: var(--ck-scroll-track-background);
        border: none;
      }
      ::-webkit-scrollbar-thumb {
        transition: background 2s;
        background: var(--ck-scroll-thumb-background);
        border: 1px solid var(--ck-scroll-thumb-border-color);
      }
      ::-webkit-scrollbar-thumb:hover {
        transition: background 2s;
        background: var(--ck-scroll-thumb-hover-background);
      }
      ::-webkit-scrollbar-thumb:active {
        background: var(--ck-scroll-thumb-active-background);
      }
    }
  }

  .ck .ck-source-editing-area textarea{
    color: var(--ck-color-text);
    background-color: var(--ck-color-base-background);
    border: 1px solid var(--ck-color-base-border) !important;
    box-shadow: none !important;
  }

  .ck .ck-block-toolbar-button {
    min-width: 0 !important;
    min-height: 0 !important;
    width: 20px !important;
    height: 25px !important;
    margin-left: -2px !important ;
    
    & svg {
      color: var(--ck-color-text) !important;
      position: absolute;
      width: 20px;
      height: 20px;
    }
  }

  .ck-word-count {
    margin-top: 0.3rem;
    display: flex;
    justify-content: end;
    gap: 0.3rem;
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: lowercase;
    /* color: #b3b3c4; */
  }

  .ck[dir=rtl]{
    .ck-block-toolbar-button {
      margin-left: 2px !important ;
    }
    & + div{
      justify-content: flex-start;
      & > .ck-word-count {
          & > div:first-child{
            order: 2;
          }
          & > div:last-child{
            order: 1;
          }
      }
    }
  }
`,X=(0,g.css)`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: #e4e3ff !important;
    --ck-focus-ring: 1px solid rgb(73, 69, 255) !important;
    --ck-color-button-default-hover-background: #F0F0FF !important;

    .ck .ck-color-picker-save {
      & > svg {
        stroke: #7b79ff !important;
      }
    }
  }

  .ck {
    --ck-scroll-track-background: rgb(242, 242, 242);
    --ck-scroll-thumb-background: rgb(236, 236, 236);
    --ck-scroll-thumb-border-color: #cdcdf8;
    --ck-scroll-thumb-hover-background: #f0f0ff;
    --ck-scroll-thumb-active-background: #d9d8ff;

    --ck-color-editor-base-text: #001234;
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #dcdce4;
    --ck-color-base-background: #ffffff;
    --ck-custom-background: #ffffff;
    --ck-custom-foreground: #dedede;
    --ck-custom-border: #dcdce4;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #f0f0ff;
    --ck-color-base-active-focus: #e2e2fd;
    /* -- Overrides generic colors. ------------------------------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);

    --ck-color-focus-border: rgb(73, 69, 255);

    --ck-color-text: #32324d;
    --ck-color-shadow-drop: hsla(250, 31%, 80%, 0.1);
    --ck-color-shadow-inner: hsla(250, 31%, 80%, 0.1);

    /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

    --ck-color-button-default-background: var(--ck-custom-background);
    --ck-color-button-default-hover-background: #f0f0ff;
    --ck-color-button-default-active-background: #f6f6f9;
    --ck-color-button-default-active-shadow: #dedefb;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: rgb(73, 69, 255);
    --ck-color-button-on-background: #f0f0ff;
    --ck-color-button-on-hover-background: #e6e9fc;
    --ck-color-button-on-active-background: #f6f6f9;
    --ck-color-button-on-active-shadow: #cdcdf8;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */

    --ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background);
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. ----------------------------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(0, 0%, 97%);
    --ck-color-input-disabled-border: rgb(214, 214, 214);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. ---------------------------- */

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ------------------------------------------ */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #f4f4fb;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(--ck-color-base-active-focus);
    --ck-color-list-button-on-text: #271fe2;

    /* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */

    --ck-color-widget-blurred-border: #cfcffa;
    --ck-color-widget-hover-border: #c9c9e4;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */

    --ck-color-link-default: hsl(209, 89%, 33%);
  }
`,v=(0,g.css)`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: rgba(106, 114, 143, 0.4) !important;
    --ck-focus-ring: 1px solid #4945ff !important;
    --ck-color-button-default-hover-background: #262630 !important;

    .ck .ck-color-picker > svg {
      color: #ffffff !important;
    }
    .ck .ck-color-picker-save {
      & > svg {
        stroke: #ffffff !important;
      }
      & > svg > #primary,
      #primary-2 {
        stroke: #7b79ff !important;
      }
    }
  }

  .ck {
    --ck-scroll-track-background: #3d3d57;
    --ck-scroll-thumb-background: #181826;
    --ck-scroll-thumb-border-color: rgb(70, 70, 70);
    --ck-scroll-thumb-hover-background: #202033;
    --ck-scroll-thumb-active-background: #2b2b45;

    --ck-color-editor-base-text: rgb(236, 236, 236);
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #4a4a6a;
    --ck-color-base-background: #212134;
    --ck-custom-background: #181826;
    --ck-custom-foreground: #26263b;
    --ck-custom-border: #4a4a6a;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-focus-outer-shadow: #212134;

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #2e2e5c;
    --ck-color-base-active-focus: #28284d;
    /* -- Overrides generic colors. ------------------------------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);
    --ck-color-focus-border: #6765bd;
    --ck-color-text: hsl(0, 0%, 93%);
    --ck-color-shadow-drop: hsla(0, 0%, 0%, 0.2);
    --ck-color-shadow-inner: hsla(0, 0%, 0%, 0.1);

    /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

    --ck-color-button-default-background: rgb(33, 33, 52);

    --ck-color-button-default-hover-background: #262630;
    --ck-color-button-default-active-background: #3c3c47;
    --ck-color-button-default-active-shadow: #3c3c47;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: #7b79ff;
    --ck-color-button-on-background: #2b2b36;
    --ck-color-button-on-hover-background: #30303b;
    --ck-color-button-on-active-background: #3c3c47;
    --ck-color-button-on-active-shadow: #3c3c47;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */

    --ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background);
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. ----------------------------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(255, 4%, 21%);
    --ck-color-input-disabled-border: hsl(250, 3%, 38%);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. ---------------------------- */

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ------------------------------------------ */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #121221;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(--ck-color-base-active-focus);
    --ck-color-list-button-on-text: #ffffff;

    /* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */

    --ck-color-widget-blurred-border: #7c7c96;
    --ck-color-widget-hover-border: #666687;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */

    --ck-color-link-default: hsl(216, 100%, 75%);
  }

`,x=(0,g.css)`

/* --- expanding --- */

.ck.ck-editor__main .ck-blurred {
    max-height: 200px;
  }
.ck.ck-editor__main .ck-focused {
  	max-height: 700px;
  }

/* --- color-grid --- */

.ck.ck-color-ui-dropdown {
	--ck-color-grid-tile-size: 22px !important;
}
.ck.ck-color-grid__tile{
	width:auto;
}
.ck.ck-color-ui-dropdown .ck-color-grid {
	grid-gap: 2px;
}
.ck.ck-color-ui-dropdown .ck-color-grid .ck-button {
	border-radius: 2px;
}
.ck.ck-color-ui-dropdown .ck.ck-color-grid .ck-color-grid__tile:hover:not(.ck-disabled),
.ck.ck-color-ui-dropdown .ck.ck-color-grid .ck-color-grid__tile:focus:not(.ck-disabled) {
	z-index: 1;
	transform: scale(1.1);
	border-radius: 2px;
}

/* --- color-picker --- */

.ck[dir=rtl] .ck-color-input{
  margin: 0 8px 8px 0 !important;
  padding: 3px 5px 0 0 !important;
}

.ck .ck-color-input{
  margin: 0 0 8px 8px ;
  padding: 3px 0 0 6px;
  border-radius:2px ;
  font-size:.77rem !important;
  width: 58px !important;
}
.ck .ck-color-picker{
  margin: 0 3px 8px 3px;
  border-radius:2px !important;
  width: 27px !important;
}
.ck .ck-color-picker-save{
  margin: 0 0 8px 0;
  border-radius:2px !important;
  width:27px !important;
}


/* ---- Style feature config ------------------------------------------------------ */

:root {
	--ck-georgia-serif-font-stack: Georgia,Times,Times New Roman,serif;
}

.ck-content h1.document-title {
	font-family: var(--ck-georgia-serif-font-stack);
	font-size: 50px;
	font-weight: bold;
	border: 0;
}

.ck-content h2.document-subtitle {
	font-family: var(--ck-georgia-serif-font-stack);
	font-size: 20px;
	font-weight: bold;
	color: #d1d1d1;
	letter-spacing: 10px;
}

.ck-content p.callout {
	--border-color: #e91e1e;
	padding: 1.2em 2em;
	border: 1px solid var(--border-color);
	border-left: 10px solid var(--border-color);
	background: #fff9fb;
	border-radius: 5px;
	margin: 1.5em 2em;
	box-shadow: 5px 5px 0 #ffe6ef;
}

.ck-content blockquote.side-quote {
	font-family: var(--ck-georgia-serif-font-stack);
	font-style: normal;
	float: right;
	width: 35%;
	position: relative;
	border: 0;
	overflow: visible;
	z-index: 1;
	margin-left: 1em;
}

.ck-content blockquote.side-quote::before {
	content: "“";
	position: absolute;
	top: -37px;
	left: -10px;
	display: block;
	font-size: 200px;
	color: #e7e7e7;
	z-index: -1;
	line-height: 1;
}

.ck-content blockquote.side-quote p {
	font-size: 2em;
	line-height: 1;
}

.ck-content blockquote.side-quote p:last-child:not(:first-child) {
	font-size: 1.3em;
	text-align: right;
	color: #555;
}

.ck-content span.needs-clarification {
	outline: 1px dashed #c8a24b;
	background: #ffe19c;
	border-radius: 2px;
	position: relative;
}

.ck-content span.needs-clarification::after {
	content: "?";
	display: inline-block;
	color: #fff;
	background: #3b3b3b;
	font-size: 12px;
	vertical-align: super;
	width: 12px;
	height: 12px;
	line-height: 12px;
	border-radius: 10px;
	text-align: center;
	position: absolute;
	right: -6px;
	top: -6px;
	font-weight: bold;
	letter-spacing: initial;
}

.ck-content span.wide-spacing {
	letter-spacing: 0.3em;
}

.ck-content span.small-caps {
	font-variant: small-caps;
}

.ck-content span.spoiler {
	background: #000;
	color: #000;
}

.ck-content span.spoiler:hover {
	background: #000;
	color: #fff;
}

.ck-content pre.stylish-code {
	border-color: transparent;
	margin-left: 2em;
	margin-right: 2em;
	border-radius: 10px;
}

.ck-content pre.stylish-code::before {
	content: "";
	display: block;
	height: 13px;
	background: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NCAxMyI+CiAgPGNpcmNsZSBjeD0iNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGMzZCNUMiLz4KICA8Y2lyY2xlIGN4PSIyNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGOUJFNEQiLz4KICA8Y2lyY2xlIGN4PSI0Ny41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiM1NkM0NTMiLz4KPC9zdmc+Cg==);
	margin-bottom: 8px;
	background-repeat: no-repeat;
}

.ck-content pre.stylish-code-dark,
.ck-content pre.stylish-code-bright {
	padding: 1em;
}

.ck-content pre.stylish-code-dark {
	background: #272822;
	box-shadow: 5px 5px 0 #0000001f;
	color: white;
}

.ck-content pre.stylish-code-dark code {
	color: white;
}

.ck-content pre.stylish-code-bright {
	background: #dddfe0;
	color: #000;
	box-shadow: 5px 5px 0 #b3b3b3;
}

.ck-content pre.stylish-code-bright code {
	color: #222;
}

`,A={common:ot,light:X,dark:v,additional:x},M=()=>{const s=localStorage.getItem("STRAPI_THEME")||"light",{theme:m,themeOverwrite:I}=globalThis.CKEditorConfig||{},y=I?m:{...A,...m};return(0,g.createGlobalStyle)`
       ${y.common}
       ${y[s]}
       ${y.additional}
   `},$=({isOpen:s,onChange:m,onToggle:I,editor:y,uploadConfig:{responsiveDimensions:L}})=>{const{components:D}=(0,h.yX)(),Q=D["media-library"],lt=dt=>{let nt="";dt.map(({name:ft,url:xt,alt:jt,formats:at,mime:_t})=>{if(_t.includes("image"))if(at&&L){let Rt="",Y=Object.keys(at).sort((ct,vt)=>at[ct].width-at[vt].width);Y.map(ct=>Rt+=(0,h.CR)(at[ct].url)+` ${at[ct].width}w,`),nt+=`<img src="${xt}" alt="${jt}" width="${at[Y[Y.length-1]].width}px" srcset="${Rt}" />`}else nt+=`<img src="${xt}" alt="${jt}" />`;else _t.includes("application/pdf")&&(nt=`<a href="${(0,h.CR)(xt)}" download="${ft}">${ft||"Download PDF"}</a>`)});const it=y.data.processor.toView(nt),K=y.data.toModel(it);y.model.insertContent(K),I()},H=dt=>{const nt=dt.map(it=>({name:it.name,alt:it.alternativeText||it.name,url:(0,h.CR)(it.url),mime:it.mime,formats:it.formats}));lt(nt)};return s?d.createElement(Q,{onClose:I,onSelectAssets:H}):null};$.defaultProps={isOpen:!1,onChange:()=>{},onToggle:()=>{}},$.propTypes={isOpen:u().bool,onChange:u().func,onToggle:u().func};const z=$;var rt=n(72958),Z=n(66916);const J=M(),mt=(0,g.default)("div")`${({editorStyles:s})=>s}`,yt=({onChange:s,name:m,value:I,disabled:y,preset:L,maxLength:D})=>{const[Q,lt]=(0,d.useState)(!1),[H,dt]=(0,d.useState)(!1),[nt,it]=(0,d.useState)(null),[K,ft]=(0,d.useState)(null),[xt,jt]=(0,d.useState)(!1),at=(0,d.useRef)(null),_t=()=>dt(Y=>!Y),Rt=Y=>Y>D?jt(!0):jt(!1);return(0,d.useEffect)(()=>{(async()=>{const{currentConfig:Y,uploadPluginConfig:ct}=await V(L,_t);ft(Y),it(ct)})()},[]),d.createElement(d.Fragment,null,K&&d.createElement(J,null),d.createElement(mt,{editorStyles:K?.styles},!K&&d.createElement(Wt,{hasRadius:!0,background:"neutral100"},d.createElement(a.a,null,"Loading...")),K&&d.createElement(i.CKEditor,{editor:window.CKEditor5.editorClassic.ClassicEditor,config:K?.editorConfig,disabled:y,data:I,onReady:Y=>{if(K.editorConfig.WordCountPlugin){const ct=Y.plugins.get("WordCount");ct.on("update",(Ht,Ct)=>Rt(Ct.characters)),at.current?.appendChild(ct.wordCountContainer)}Y.plugins.has("ImageUploadEditing")&&Y.plugins.get("ImageUploadEditing").on("uploadComplete",(ct,{data:vt,imageElement:Ht})=>Y.model.change(Ct=>Ct.setAttribute("alt",vt.alt,Ht))),lt(Y)},onChange:(Y,ct)=>{const vt=ct.getData();s({target:{name:m,value:vt}})}}),K&&K.editorConfig.WordCountPlugin&&d.createElement(wt,{color:xt?"danger500":"neutral400",ref:at},!Q&&d.createElement(a.a,{small:!0},"Loading...")),nt&&d.createElement(z,{isOpen:H,onToggle:_t,editor:Q,uploadConfig:nt})))};yt.defaultProps={value:"",disabled:!1},yt.propTypes={onChange:u().func.isRequired,name:u().string.isRequired,value:u().string,disabled:u().bool};const wt=(0,g.default)(c.x)`
  display:flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  `,Wt=(0,g.default)(c.x)`
  display:flex;
  height: 200px;
  width: 100%;
  justify-content: center;
  align-items: center;
  `,Nt=yt;var Ut=n(61020),kt=n(66769),At=n(58892);const ht=({name:s,attribute:m,onChange:I,value:y,intlLabel:L,labelAction:D,disabled:Q,error:lt,description:H,required:dt})=>{const{formatMessage:nt}=(0,Ut.Z)(),{preset:it,maxLengthCharacters:K,...ft}=m.options;return d.createElement(kt.Field,{name:s,id:s,error:lt,hint:H&&nt(H)},d.createElement(At.Stack,{spacing:1},d.createElement(kt.FieldLabel,{action:D,required:dt},nt(L)),d.createElement(Nt,{disabled:Q,name:s,onChange:I,value:y,preset:it,maxLength:K}),d.createElement(kt.FieldHint,null),d.createElement(kt.FieldError,null)))};ht.defaultProps={description:null,disabled:!1,error:null,labelAction:null,required:!1,value:""},ht.propTypes={intlLabel:u().object.isRequired,onChange:u().func.isRequired,attribute:u().object.isRequired,name:u().string.isRequired,description:u().object,disabled:u().bool,error:u().string,labelAction:u().object,required:u().bool,value:u().string};const F=ht},66916:(R,l,n)=>{/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var d={655:(i,a,c)=>{"use strict";c.d(a,{Z:()=>S});var h=c(609),p=c.n(h)()(function(P){return P[1]});p.push([i.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}",""]);const S=p},609:i=>{"use strict";i.exports=function(a){var c=[];return c.toString=function(){return this.map(function(h){var p=a(h);return h[2]?"@media ".concat(h[2]," {").concat(p,"}"):p}).join("")},c.i=function(h,p,S){typeof h=="string"&&(h=[[null,h,""]]);var P={};if(S)for(var k=0;k<this.length;k++){var w=this[k][0];w!=null&&(P[w]=!0)}for(var f=0;f<h.length;f++){var j=[].concat(h[f]);S&&P[j[0]]||(p&&(j[2]?j[2]="".concat(p," and ").concat(j[2]):j[2]=p),c.push(j))}},c}},62:(i,a,c)=>{"use strict";var h,p=function(){return h===void 0&&(h=Boolean(window&&document&&document.all&&!window.atob)),h},S=function(){var v={};return function(x){if(v[x]===void 0){var _=document.querySelector(x);if(window.HTMLIFrameElement&&_ instanceof window.HTMLIFrameElement)try{_=_.contentDocument.head}catch{_=null}v[x]=_}return v[x]}}(),P=[];function k(v){for(var x=-1,_=0;_<P.length;_++)if(P[_].identifier===v){x=_;break}return x}function w(v,x){for(var _={},A=[],M=0;M<v.length;M++){var $=v[M],z=x.base?$[0]+x.base:$[0],rt=_[z]||0,Z="".concat(z," ").concat(rt);_[z]=rt+1;var J=k(Z),mt={css:$[1],media:$[2],sourceMap:$[3]};J!==-1?(P[J].references++,P[J].updater(mt)):P.push({identifier:Z,updater:X(mt,x),references:1}),A.push(Z)}return A}function f(v){var x=document.createElement("style"),_=v.attributes||{};if(_.nonce===void 0){var A=c.nc;A&&(_.nonce=A)}if(Object.keys(_).forEach(function($){x.setAttribute($,_[$])}),typeof v.insert=="function")v.insert(x);else{var M=S(v.insert||"head");if(!M)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");M.appendChild(x)}return x}var j,U=(j=[],function(v,x){return j[v]=x,j.filter(Boolean).join(`
`)});function tt(v,x,_,A){var M=_?"":A.media?"@media ".concat(A.media," {").concat(A.css,"}"):A.css;if(v.styleSheet)v.styleSheet.cssText=U(x,M);else{var $=document.createTextNode(M),z=v.childNodes;z[x]&&v.removeChild(z[x]),z.length?v.insertBefore($,z[x]):v.appendChild($)}}function et(v,x,_){var A=_.css,M=_.media,$=_.sourceMap;if(M?v.setAttribute("media",M):v.removeAttribute("media"),$&&typeof btoa<"u"&&(A+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify($))))," */")),v.styleSheet)v.styleSheet.cssText=A;else{for(;v.firstChild;)v.removeChild(v.firstChild);v.appendChild(document.createTextNode(A))}}var V=null,ot=0;function X(v,x){var _,A,M;if(x.singleton){var $=ot++;_=V||(V=f(x)),A=tt.bind(null,_,$,!1),M=tt.bind(null,_,$,!0)}else _=f(x),A=et.bind(null,_,x),M=function(){(function(z){if(z.parentNode===null)return!1;z.parentNode.removeChild(z)})(_)};return A(v),function(z){if(z){if(z.css===v.css&&z.media===v.media&&z.sourceMap===v.sourceMap)return;A(v=z)}else M()}}i.exports=function(v,x){(x=x||{}).singleton||typeof x.singleton=="boolean"||(x.singleton=p());var _=w(v=v||[],x);return function(A){if(A=A||[],Object.prototype.toString.call(A)==="[object Array]"){for(var M=0;M<_.length;M++){var $=k(_[M]);P[$].references--}for(var z=w(A,x),rt=0;rt<_.length;rt++){var Z=k(_[rt]);P[Z].references===0&&(P[Z].updater(),P.splice(Z,1))}_=z}}}},704:(i,a,c)=>{i.exports=c(79)("./src/core.js")},492:(i,a,c)=>{i.exports=c(79)("./src/engine.js")},273:(i,a,c)=>{i.exports=c(79)("./src/ui.js")},209:(i,a,c)=>{i.exports=c(79)("./src/utils.js")},79:i=>{"use strict";i.exports=CKEditor5.dll}},E={};function u(i){var a=E[i];if(a!==void 0)return a.exports;var c=E[i]={id:i,exports:{}};return d[i](c,c.exports,u),c.exports}u.n=i=>{var a=i&&i.__esModule?()=>i.default:()=>i;return u.d(a,{a}),a},u.d=(i,a)=>{for(var c in a)u.o(a,c)&&!u.o(i,c)&&Object.defineProperty(i,c,{enumerable:!0,get:a[c]})},u.o=(i,a)=>Object.prototype.hasOwnProperty.call(i,a),u.r=i=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},u.nc=void 0;var g={};(()=>{"use strict";u.r(g),u.d(g,{ClassicEditor:()=>At});var i=u(273),a=u(492),c=u(209);class h extends i.EditorUI{constructor(s,m){super(s),this.view=m,this._toolbarConfig=(0,i.normalizeToolbarConfig)(s.config.get("toolbar")),this._elementReplacer=new c.ElementReplacer}get element(){return this.view.element}init(s){const m=this.editor,I=this.view,y=m.editing.view,L=I.editable,D=y.document.getRoot();L.name=D.rootName,I.render();const Q=L.element;this.setEditableElement(L.name,Q),I.editable.bind("isFocused").to(this.focusTracker),y.attachDomRoot(Q),s&&this._elementReplacer.replace(s,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const s=this.view,m=this.editor.editing.view;this._elementReplacer.restore(),m.detachDomRoot(s.editable.name),s.destroy()}_initToolbar(){const s=this.view;s.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),s.stickyPanel.limiterElement=s.element,s.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:m})=>m||0),s.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(s.toolbar)}_initPlaceholder(){const s=this.editor,m=s.editing.view,I=m.document.getRoot(),y=s.sourceElement,L=s.config.get("placeholder")||y&&y.tagName.toLowerCase()==="textarea"&&y.getAttribute("placeholder");L&&(0,a.enablePlaceholder)({view:m,element:I,text:L,isDirectHost:!1,keepOnFocus:!0})}}var p=u(62),S=u.n(p),P=u(655),k={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};S()(P.Z,k),P.Z.locals;class w extends i.BoxedEditorUIView{constructor(s,m,I={}){super(s),this.stickyPanel=new i.StickyPanelView(s),this.toolbar=new i.ToolbarView(s,{shouldGroupWhenFull:I.shouldToolbarGroupWhenFull}),this.editable=new i.InlineEditableUIView(s,m)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}var f=u(704);const j=function(F){return F!=null&&typeof F=="object"},U=typeof n.g=="object"&&n.g&&n.g.Object===Object&&n.g;var tt=typeof self=="object"&&self&&self.Object===Object&&self;const et=(U||tt||Function("return this")()).Symbol;var V=Object.prototype,ot=V.hasOwnProperty,X=V.toString,v=et?et.toStringTag:void 0;const x=function(F){var s=ot.call(F,v),m=F[v];try{F[v]=void 0;var I=!0}catch{}var y=X.call(F);return I&&(s?F[v]=m:delete F[v]),y};var _=Object.prototype.toString;const A=function(F){return _.call(F)};var M="[object Null]",$="[object Undefined]",z=et?et.toStringTag:void 0;const rt=function(F){return F==null?F===void 0?$:M:z&&z in Object(F)?x(F):A(F)},Z=function(F,s){return function(m){return F(s(m))}}(Object.getPrototypeOf,Object);var J="[object Object]",mt=Function.prototype,yt=Object.prototype,wt=mt.toString,Wt=yt.hasOwnProperty,Nt=wt.call(Object);const Ut=function(F){if(!j(F)||rt(F)!=J)return!1;var s=Z(F);if(s===null)return!0;var m=Wt.call(s,"constructor")&&s.constructor;return typeof m=="function"&&m instanceof m&&wt.call(m)==Nt},kt=function(F){return j(F)&&F.nodeType===1&&!Ut(F)};class At extends(0,f.DataApiMixin)((0,f.ElementApiMixin)(f.Editor)){constructor(s,m={}){if(!ht(s)&&m.initialData!==void 0)throw new c.CKEditorError("editor-create-initial-data",null);super(m),this.config.get("initialData")===void 0&&this.config.set("initialData",function(L){return ht(L)?(0,c.getDataFromElement)(L):L}(s)),ht(s)&&(this.sourceElement=s),this.model.document.createRoot();const I=!this.config.get("toolbar.shouldNotGroupWhenFull"),y=new w(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:I});this.ui=new h(this,y),(0,f.attachToForm)(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(s,m={}){return new Promise(I=>{const y=new this(s,m);I(y.initPlugins().then(()=>y.ui.init(ht(s)?s:null)).then(()=>y.data.init(y.config.get("initialData"))).then(()=>y.fire("ready")).then(()=>y))})}}function ht(F){return kt(F)}})(),(window.CKEditor5=window.CKEditor5||{}).editorClassic=g})()},45648:(R,l,n)=>{R=n.nmd(R);/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(d,E){R.exports=E(n(27279))})(self,d=>(()=>{var E={703:(a,c,h)=>{"use strict";var p=h(414);function S(){}function P(){}P.resetWarningCache=S,a.exports=function(){function k(j,U,tt,et,V,ot){if(ot!==p){var X=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw X.name="Invariant Violation",X}}function w(){return k}k.isRequired=k;var f={array:k,bigint:k,bool:k,func:k,number:k,object:k,string:k,symbol:k,any:k,arrayOf:w,element:k,elementType:k,instanceOf:w,node:k,objectOf:w,oneOf:w,oneOfType:w,shape:w,exact:w,checkPropTypes:P,resetWarningCache:S};return f.PropTypes=f,f}},697:(a,c,h)=>{a.exports=h(703)()},414:a=>{"use strict";a.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:a=>{"use strict";a.exports=d}},u={};function g(a){var c=u[a];if(c!==void 0)return c.exports;var h=u[a]={exports:{}};return E[a](h,h.exports,g),h.exports}g.n=a=>{var c=a&&a.__esModule?()=>a.default:()=>a;return g.d(c,{a:c}),c},g.d=(a,c)=>{for(var h in c)g.o(c,h)&&!g.o(a,h)&&Object.defineProperty(a,h,{enumerable:!0,get:c[h]})},g.o=(a,c)=>Object.prototype.hasOwnProperty.call(a,c),g.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var i={};return(()=>{"use strict";g.r(i),g.d(i,{CKEditor:()=>Pt,CKEditorContext:()=>fe});var a=g(787),c=g.n(a),h=g(697),p=g.n(h);const S=function(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")},P=typeof n.g=="object"&&n.g&&n.g.Object===Object&&n.g;var k=typeof self=="object"&&self&&self.Object===Object&&self;const w=P||k||Function("return this")(),f=function(){return w.Date.now()};var j=/\s/;const U=function(t){for(var e=t.length;e--&&j.test(t.charAt(e)););return e};var tt=/^\s+/;const et=function(t){return t&&t.slice(0,U(t)+1).replace(tt,"")},V=w.Symbol;var ot=Object.prototype,X=ot.hasOwnProperty,v=ot.toString,x=V?V.toStringTag:void 0;const _=function(t){var e=X.call(t,x),o=t[x];try{t[x]=void 0;var r=!0}catch{}var b=v.call(t);return r&&(e?t[x]=o:delete t[x]),b};var A=Object.prototype.toString;const M=function(t){return A.call(t)};var $="[object Null]",z="[object Undefined]",rt=V?V.toStringTag:void 0;const Z=function(t){return t==null?t===void 0?z:$:rt&&rt in Object(t)?_(t):M(t)},J=function(t){return t!=null&&typeof t=="object"};var mt="[object Symbol]";const yt=function(t){return typeof t=="symbol"||J(t)&&Z(t)==mt};var wt=NaN,Wt=/^[-+]0x[0-9a-f]+$/i,Nt=/^0b[01]+$/i,Ut=/^0o[0-7]+$/i,kt=parseInt;const At=function(t){if(typeof t=="number")return t;if(yt(t))return wt;if(S(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=S(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=et(t);var o=Nt.test(t);return o||Ut.test(t)?kt(t.slice(2),o?2:8):Wt.test(t)?wt:+t};var ht="Expected a function",F=Math.max,s=Math.min;const m=function(t,e,o){var r,b,C,O,T,G,B=0,Xt=!1,Tt=!1,pt=!0;if(typeof t!="function")throw new TypeError(ht);function Dt(st){var bt=r,It=b;return r=b=void 0,B=st,O=t.apply(It,bt)}function Zt(st){var bt=st-G;return G===void 0||bt>=e||bt<0||Tt&&st-B>=C}function Ft(){var st=f();if(Zt(st))return ut(st);T=setTimeout(Ft,function(bt){var It=e-(bt-G);return Tt?s(It,C-(bt-B)):It}(st))}function ut(st){return T=void 0,pt&&r?Dt(st):(r=b=void 0,O)}function gt(){var st=f(),bt=Zt(st);if(r=arguments,b=this,G=st,bt){if(T===void 0)return function(It){return B=It,T=setTimeout(Ft,e),Xt?Dt(It):O}(G);if(Tt)return clearTimeout(T),T=setTimeout(Ft,e),Dt(G)}return T===void 0&&(T=setTimeout(Ft,e)),O}return e=At(e)||0,S(o)&&(Xt=!!o.leading,C=(Tt="maxWait"in o)?F(At(o.maxWait)||0,e):C,pt="trailing"in o?!!o.trailing:pt),gt.cancel=function(){T!==void 0&&clearTimeout(T),B=0,r=G=b=T=void 0},gt.flush=function(){return T===void 0?O:ut(f())},gt};var I="Expected a function";const y=function(t,e,o){var r=!0,b=!0;if(typeof t!="function")throw new TypeError(I);return S(o)&&(r="leading"in o?!!o.leading:r,b="trailing"in o?!!o.trailing:b),m(t,e,{leading:r,maxWait:e,trailing:b})},L=function(){this.__data__=[],this.size=0},D=function(t,e){return t===e||t!=t&&e!=e},Q=function(t,e){for(var o=t.length;o--;)if(D(t[o][0],e))return o;return-1};var lt=Array.prototype.splice;const H=function(t){var e=this.__data__,o=Q(e,t);return!(o<0)&&(o==e.length-1?e.pop():lt.call(e,o,1),--this.size,!0)},dt=function(t){var e=this.__data__,o=Q(e,t);return o<0?void 0:e[o][1]},nt=function(t){return Q(this.__data__,t)>-1},it=function(t,e){var o=this.__data__,r=Q(o,t);return r<0?(++this.size,o.push([t,e])):o[r][1]=e,this};function K(t){var e=-1,o=t==null?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}K.prototype.clear=L,K.prototype.delete=H,K.prototype.get=dt,K.prototype.has=nt,K.prototype.set=it;const ft=K,xt=function(){this.__data__=new ft,this.size=0},jt=function(t){var e=this.__data__,o=e.delete(t);return this.size=e.size,o},at=function(t){return this.__data__.get(t)},_t=function(t){return this.__data__.has(t)};var Rt="[object AsyncFunction]",Y="[object Function]",ct="[object GeneratorFunction]",vt="[object Proxy]";const Ht=function(t){if(!S(t))return!1;var e=Z(t);return e==Y||e==ct||e==Rt||e==vt},Ct=w["__core-js_shared__"];var ge=function(){var t=/[^.]+$/.exec(Ct&&Ct.keys&&Ct.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();const ao=function(t){return!!ge&&ge in t};var lo=Function.prototype.toString;const Et=function(t){if(t!=null){try{return lo.call(t)}catch{}try{return t+""}catch{}}return""};var uo=/^\[object .+?Constructor\]$/,ho=Function.prototype,fo=Object.prototype,po=ho.toString,go=fo.hasOwnProperty,bo=RegExp("^"+po.call(go).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const mo=function(t){return!(!S(t)||ao(t))&&(Ht(t)?bo:uo).test(Et(t))},ko=function(t,e){return t?.[e]},St=function(t,e){var o=ko(t,e);return mo(o)?o:void 0},Bt=St(w,"Map"),Gt=St(Object,"create"),vo=function(){this.__data__=Gt?Gt(null):{},this.size=0},yo=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e};var wo="__lodash_hash_undefined__",xo=Object.prototype.hasOwnProperty;const jo=function(t){var e=this.__data__;if(Gt){var o=e[t];return o===wo?void 0:o}return xo.call(e,t)?e[t]:void 0};var _o=Object.prototype.hasOwnProperty;const Co=function(t){var e=this.__data__;return Gt?e[t]!==void 0:_o.call(e,t)};var Eo="__lodash_hash_undefined__";const So=function(t,e){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=Gt&&e===void 0?Eo:e,this};function Mt(t){var e=-1,o=t==null?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}Mt.prototype.clear=vo,Mt.prototype.delete=yo,Mt.prototype.get=jo,Mt.prototype.has=Co,Mt.prototype.set=So;const be=Mt,Oo=function(){this.size=0,this.__data__={hash:new be,map:new(Bt||ft),string:new be}},Po=function(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null},Qt=function(t,e){var o=t.__data__;return Po(e)?o[typeof e=="string"?"string":"hash"]:o.map},To=function(t){var e=Qt(this,t).delete(t);return this.size-=e?1:0,e},Fo=function(t){return Qt(this,t).get(t)},Io=function(t){return Qt(this,t).has(t)},Ao=function(t,e){var o=Qt(this,t),r=o.size;return o.set(t,e),this.size+=o.size==r?0:1,this};function $t(t){var e=-1,o=t==null?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}$t.prototype.clear=Oo,$t.prototype.delete=To,$t.prototype.get=Fo,$t.prototype.has=Io,$t.prototype.set=Ao;const Ro=$t;var Mo=200;const $o=function(t,e){var o=this.__data__;if(o instanceof ft){var r=o.__data__;if(!Bt||r.length<Mo-1)return r.push([t,e]),this.size=++o.size,this;o=this.__data__=new Ro(r)}return o.set(t,e),this.size=o.size,this};function zt(t){var e=this.__data__=new ft(t);this.size=e.size}zt.prototype.clear=xt,zt.prototype.delete=jt,zt.prototype.get=at,zt.prototype.has=_t,zt.prototype.set=$o;const zo=zt,Lo=function(t,e){for(var o=-1,r=t==null?0:t.length;++o<r&&e(t[o],o,t)!==!1;);return t},me=function(){try{var t=St(Object,"defineProperty");return t({},"",{}),t}catch{}}(),ke=function(t,e,o){e=="__proto__"&&me?me(t,e,{configurable:!0,enumerable:!0,value:o,writable:!0}):t[e]=o};var Do=Object.prototype.hasOwnProperty;const ve=function(t,e,o){var r=t[e];Do.call(t,e)&&D(r,o)&&(o!==void 0||e in t)||ke(t,e,o)},Yt=function(t,e,o,r){var b=!o;o||(o={});for(var C=-1,O=e.length;++C<O;){var T=e[C],G=r?r(o[T],t[T],T,o,t):void 0;G===void 0&&(G=t[T]),b?ke(o,T,G):ve(o,T,G)}return o},Wo=function(t,e){for(var o=-1,r=Array(t);++o<t;)r[o]=e(o);return r};var No="[object Arguments]";const ye=function(t){return J(t)&&Z(t)==No};var we=Object.prototype,Uo=we.hasOwnProperty,Ho=we.propertyIsEnumerable;const Bo=ye(function(){return arguments}())?ye:function(t){return J(t)&&Uo.call(t,"callee")&&!Ho.call(t,"callee")},Jt=Array.isArray,Go=function(){return!1};var xe=l&&!l.nodeType&&l,je=xe&&!0&&R&&!R.nodeType&&R,_e=je&&je.exports===xe?w.Buffer:void 0;const Ce=(_e?_e.isBuffer:void 0)||Go;var Vo=9007199254740991,Ko=/^(?:0|[1-9]\d*)$/;const Zo=function(t,e){var o=typeof t;return!!(e=e??Vo)&&(o=="number"||o!="symbol"&&Ko.test(t))&&t>-1&&t%1==0&&t<e};var Qo=9007199254740991;const Ee=function(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Qo};var N={};N["[object Float32Array]"]=N["[object Float64Array]"]=N["[object Int8Array]"]=N["[object Int16Array]"]=N["[object Int32Array]"]=N["[object Uint8Array]"]=N["[object Uint8ClampedArray]"]=N["[object Uint16Array]"]=N["[object Uint32Array]"]=!0,N["[object Arguments]"]=N["[object Array]"]=N["[object ArrayBuffer]"]=N["[object Boolean]"]=N["[object DataView]"]=N["[object Date]"]=N["[object Error]"]=N["[object Function]"]=N["[object Map]"]=N["[object Number]"]=N["[object Object]"]=N["[object RegExp]"]=N["[object Set]"]=N["[object String]"]=N["[object WeakMap]"]=!1;const Yo=function(t){return J(t)&&Ee(t.length)&&!!N[Z(t)]},qt=function(t){return function(e){return t(e)}};var Se=l&&!l.nodeType&&l,Vt=Se&&!0&&R&&!R.nodeType&&R,te=Vt&&Vt.exports===Se&&P.process;const Lt=function(){try{var t=Vt&&Vt.require&&Vt.require("util").types;return t||te&&te.binding&&te.binding("util")}catch{}}();var Oe=Lt&&Lt.isTypedArray;const Xo=Oe?qt(Oe):Yo;var Jo=Object.prototype.hasOwnProperty;const Pe=function(t,e){var o=Jt(t),r=!o&&Bo(t),b=!o&&!r&&Ce(t),C=!o&&!r&&!b&&Xo(t),O=o||r||b||C,T=O?Wo(t.length,String):[],G=T.length;for(var B in t)!e&&!Jo.call(t,B)||O&&(B=="length"||b&&(B=="offset"||B=="parent")||C&&(B=="buffer"||B=="byteLength"||B=="byteOffset")||Zo(B,G))||T.push(B);return T};var qo=Object.prototype;const ee=function(t){var e=t&&t.constructor;return t===(typeof e=="function"&&e.prototype||qo)},Te=function(t,e){return function(o){return t(e(o))}},tr=Te(Object.keys,Object);var er=Object.prototype.hasOwnProperty;const or=function(t){if(!ee(t))return tr(t);var e=[];for(var o in Object(t))er.call(t,o)&&o!="constructor"&&e.push(o);return e},Fe=function(t){return t!=null&&Ee(t.length)&&!Ht(t)},oe=function(t){return Fe(t)?Pe(t):or(t)},rr=function(t,e){return t&&Yt(e,oe(e),t)},nr=function(t){var e=[];if(t!=null)for(var o in Object(t))e.push(o);return e};var ir=Object.prototype.hasOwnProperty;const cr=function(t){if(!S(t))return nr(t);var e=ee(t),o=[];for(var r in t)(r!="constructor"||!e&&ir.call(t,r))&&o.push(r);return o},re=function(t){return Fe(t)?Pe(t,!0):cr(t)},sr=function(t,e){return t&&Yt(e,re(e),t)};var Ie=l&&!l.nodeType&&l,Ae=Ie&&!0&&R&&!R.nodeType&&R,Re=Ae&&Ae.exports===Ie?w.Buffer:void 0,Me=Re?Re.allocUnsafe:void 0;const ar=function(t,e){if(e)return t.slice();var o=t.length,r=Me?Me(o):new t.constructor(o);return t.copy(r),r},lr=function(t,e){var o=-1,r=t.length;for(e||(e=Array(r));++o<r;)e[o]=t[o];return e},dr=function(t,e){for(var o=-1,r=t==null?0:t.length,b=0,C=[];++o<r;){var O=t[o];e(O,o,t)&&(C[b++]=O)}return C},$e=function(){return[]};var ur=Object.prototype.propertyIsEnumerable,ze=Object.getOwnPropertySymbols;const ne=ze?function(t){return t==null?[]:(t=Object(t),dr(ze(t),function(e){return ur.call(t,e)}))}:$e,hr=function(t,e){return Yt(t,ne(t),e)},Le=function(t,e){for(var o=-1,r=e.length,b=t.length;++o<r;)t[b+o]=e[o];return t},ie=Te(Object.getPrototypeOf,Object),De=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)Le(e,ne(t)),t=ie(t);return e}:$e,fr=function(t,e){return Yt(t,De(t),e)},We=function(t,e,o){var r=e(t);return Jt(t)?r:Le(r,o(t))},pr=function(t){return We(t,oe,ne)},gr=function(t){return We(t,re,De)},ce=St(w,"DataView"),se=St(w,"Promise"),ae=St(w,"Set"),le=St(w,"WeakMap");var Ne="[object Map]",Ue="[object Promise]",He="[object Set]",Be="[object WeakMap]",Ge="[object DataView]",br=Et(ce),mr=Et(Bt),kr=Et(se),vr=Et(ae),yr=Et(le),Ot=Z;(ce&&Ot(new ce(new ArrayBuffer(1)))!=Ge||Bt&&Ot(new Bt)!=Ne||se&&Ot(se.resolve())!=Ue||ae&&Ot(new ae)!=He||le&&Ot(new le)!=Be)&&(Ot=function(t){var e=Z(t),o=e=="[object Object]"?t.constructor:void 0,r=o?Et(o):"";if(r)switch(r){case br:return Ge;case mr:return Ne;case kr:return Ue;case vr:return He;case yr:return Be}return e});const de=Ot;var wr=Object.prototype.hasOwnProperty;const xr=function(t){var e=t.length,o=new t.constructor(e);return e&&typeof t[0]=="string"&&wr.call(t,"index")&&(o.index=t.index,o.input=t.input),o},Ve=w.Uint8Array,ue=function(t){var e=new t.constructor(t.byteLength);return new Ve(e).set(new Ve(t)),e},jr=function(t,e){var o=e?ue(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.byteLength)};var _r=/\w*$/;const Cr=function(t){var e=new t.constructor(t.source,_r.exec(t));return e.lastIndex=t.lastIndex,e};var Ke=V?V.prototype:void 0,Ze=Ke?Ke.valueOf:void 0;const Er=function(t){return Ze?Object(Ze.call(t)):{}},Sr=function(t,e){var o=e?ue(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.length)};var Or="[object Boolean]",Pr="[object Date]",Tr="[object Map]",Fr="[object Number]",Ir="[object RegExp]",Ar="[object Set]",Rr="[object String]",Mr="[object Symbol]",$r="[object ArrayBuffer]",zr="[object DataView]",Lr="[object Float32Array]",Dr="[object Float64Array]",Wr="[object Int8Array]",Nr="[object Int16Array]",Ur="[object Int32Array]",Hr="[object Uint8Array]",Br="[object Uint8ClampedArray]",Gr="[object Uint16Array]",Vr="[object Uint32Array]";const Kr=function(t,e,o){var r=t.constructor;switch(e){case $r:return ue(t);case Or:case Pr:return new r(+t);case zr:return jr(t,o);case Lr:case Dr:case Wr:case Nr:case Ur:case Hr:case Br:case Gr:case Vr:return Sr(t,o);case Tr:return new r;case Fr:case Rr:return new r(t);case Ir:return Cr(t);case Ar:return new r;case Mr:return Er(t)}};var Qe=Object.create;const Zr=function(){function t(){}return function(e){if(!S(e))return{};if(Qe)return Qe(e);t.prototype=e;var o=new t;return t.prototype=void 0,o}}(),Qr=function(t){return typeof t.constructor!="function"||ee(t)?{}:Zr(ie(t))};var Yr="[object Map]";const Xr=function(t){return J(t)&&de(t)==Yr};var Ye=Lt&&Lt.isMap;const Jr=Ye?qt(Ye):Xr;var qr="[object Set]";const tn=function(t){return J(t)&&de(t)==qr};var Xe=Lt&&Lt.isSet;const en=Xe?qt(Xe):tn;var on=1,rn=2,nn=4,Je="[object Arguments]",qe="[object Function]",cn="[object GeneratorFunction]",to="[object Object]",W={};W[Je]=W["[object Array]"]=W["[object ArrayBuffer]"]=W["[object DataView]"]=W["[object Boolean]"]=W["[object Date]"]=W["[object Float32Array]"]=W["[object Float64Array]"]=W["[object Int8Array]"]=W["[object Int16Array]"]=W["[object Int32Array]"]=W["[object Map]"]=W["[object Number]"]=W[to]=W["[object RegExp]"]=W["[object Set]"]=W["[object String]"]=W["[object Symbol]"]=W["[object Uint8Array]"]=W["[object Uint8ClampedArray]"]=W["[object Uint16Array]"]=W["[object Uint32Array]"]=!0,W["[object Error]"]=W[qe]=W["[object WeakMap]"]=!1;const sn=function t(e,o,r,b,C,O){var T,G=o&on,B=o&rn,Xt=o&nn;if(r&&(T=C?r(e,b,C,O):r(e)),T!==void 0)return T;if(!S(e))return e;var Tt=Jt(e);if(Tt){if(T=xr(e),!G)return lr(e,T)}else{var pt=de(e),Dt=pt==qe||pt==cn;if(Ce(e))return ar(e,G);if(pt==to||pt==Je||Dt&&!C){if(T=B||Dt?{}:Qr(e),!G)return B?fr(e,sr(T,e)):hr(e,rr(T,e))}else{if(!W[pt])return C?e:{};T=Kr(e,pt,G)}}O||(O=new zo);var Zt=O.get(e);if(Zt)return Zt;O.set(e,T),en(e)?e.forEach(function(ut){T.add(t(ut,o,r,ut,e,O))}):Jr(e)&&e.forEach(function(ut,gt){T.set(gt,t(ut,o,r,gt,e,O))});var Ft=Tt?void 0:(Xt?B?gr:pr:B?re:oe)(e);return Lo(Ft||e,function(ut,gt){Ft&&(ut=e[gt=ut]),ve(T,gt,t(ut,o,r,gt,e,O))}),T};var an=1,ln=4;const dn=function(t,e){return sn(t,an|ln,e=typeof e=="function"?e:void 0)};var un="[object Object]",hn=Function.prototype,fn=Object.prototype,eo=hn.toString,pn=fn.hasOwnProperty,gn=eo.call(Object);const bn=function(t){if(!J(t)||Z(t)!=un)return!1;var e=ie(t);if(e===null)return!0;var o=pn.call(e,"constructor")&&e.constructor;return typeof o=="function"&&o instanceof o&&eo.call(o)==gn},mn=function(t){return J(t)&&t.nodeType===1&&!bn(t)};function he(t,e=new Set){const o=[t],r=new Set;let b=0;for(;o.length>b;){const C=o[b++];if(!(r.has(C)||kn(C)||e.has(C)))if(r.add(C),C[Symbol.iterator])try{for(const O of C)o.push(O)}catch{}else for(const O in C)O!=="defaultValue"&&o.push(C[O])}return r}function kn(t){const e=Object.prototype.toString.call(t),o=typeof t;return o==="number"||o==="boolean"||o==="string"||o==="symbol"||o==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||t==null||t._watchdogExcluded===!0||t instanceof EventTarget||t instanceof Event}function oo(t,e,o=new Set){if(t===e&&typeof(r=t)=="object"&&r!==null)return!0;var r;const b=he(t,o),C=he(e,o);for(const O of b)if(C.has(O))return!0;return!1}class ro{constructor(e){if(this.crashes=[],this.state="initializing",this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._now=Date.now,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=o=>{const r=o.error||o.reason;r instanceof Error&&this._handleError(r,o)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,o){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(o)}off(e,o){this._listeners[e]=this._listeners[e].filter(r=>r!==o)}_fire(e,...o){const r=this._listeners[e]||[];for(const b of r)b.apply(this,[null,...o])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,o){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:o.filename,lineno:o.lineno,colno:o.colno,date:this._now()});const r=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:r}),r?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}class no extends ro{constructor(e,o={}){super(o),this._editor=null,this._throttledSave=y(this._save.bind(this),typeof o.saveInterval=="number"?o.saveInterval:5e3),this._creator=(r,b)=>e.create(r,b),this._destructor=r=>r.destroy()}get editor(){return this._editor}get _item(){return this._editor}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{console.error("An error happened during the editor destroying.",e)}).then(()=>{if(typeof this._elementOrData=="string")return this.create(this._data,this._config,this._config.context);{const e=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,e,e.context)}}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,o=this._config,r){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=e,this._config=this._cloneEditorConfiguration(o)||{},this._config.context=r,this._creator(e,this._config))).then(b=>{this._editor=b,b.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=b.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.flush();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._lastDocumentVersion=e}catch(o){console.error(o,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e={};for(const o of this._editor.model.document.getRootNames())e[o]=this._editor.data.get({rootName:o});return e}_isErrorComingFromThisItem(e){return oo(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return dn(e,(o,r)=>mn(o)||r==="context"?o:void 0)}}const q=new Array(256).fill("").map((t,e)=>("0"+e.toString(16)).slice(-2)),Kt=Symbol("MainQueueId");class io extends ro{constructor(e,o={}){super(o),this._watchdogs=new Map,this._watchdogConfig=o,this._context=null,this._contextProps=new Set,this._actionQueues=new vn,this._creator=r=>e.create(r),this._destructor=r=>r.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}get context(){return this._context}create(e={}){return this._actionQueues.enqueue(Kt,()=>(this._contextConfig=e,this._create()))}getItem(e){return this._getWatchdog(e)._item}getItemState(e){return this._getWatchdog(e).state}add(e){const o=co(e);return Promise.all(o.map(r=>this._actionQueues.enqueue(r.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let b;if(this._watchdogs.has(r.id))throw new Error(`Item with the given id is already added: '${r.id}'.`);if(r.type==="editor")return b=new no(this._watchdogConfig),b.setCreator(r.creator),b._setExcludedProperties(this._contextProps),r.destructor&&b.setDestructor(r.destructor),this._watchdogs.set(r.id,b),b.on("error",(C,{error:O,causesRestart:T})=>{this._fire("itemError",{itemId:r.id,error:O}),T&&this._actionQueues.enqueue(r.id,()=>new Promise(G=>{b.on("restart",function B(){b.off("restart",B),this._fire("itemRestart",{itemId:r.id}),G()}.bind(this))}))}),b.create(r.sourceElementOrData,r.config,this._context);throw new Error(`Not supported item type: '${r.type}'.`)})))}remove(e){const o=co(e);return Promise.all(o.map(r=>this._actionQueues.enqueue(r,()=>{const b=this._getWatchdog(r);return this._watchdogs.delete(r),b.destroy()})))}destroy(){return this._actionQueues.enqueue(Kt,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Kt,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(e=>{console.error("An error happened during destroying the context or items.",e)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(e=>(this._context=e,this._contextProps=he(this._context),Promise.all(Array.from(this._watchdogs.values()).map(o=>(o._setExcludedProperties(this._contextProps),o.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const e=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(o=>o.destroy())).then(()=>this._destructor(e))})}_getWatchdog(e){const o=this._watchdogs.get(e);if(!o)throw new Error(`Item with the given id was not registered: ${e}.`);return o}_isErrorComingFromThisItem(e){for(const o of this._watchdogs.values())if(o._isErrorComingFromThisItem(e))return!1;return oo(this._context,e.context)}}class vn{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._actions=new WeakMap,this._lastActionId=0,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,o){const r=e===Kt;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const b=(r?Promise.all(this._queues.values()):Promise.all([this._queues.get(Kt),this._queues.get(e)])).then(o),C=b.catch(()=>{});return this._queues.set(e,C),b.finally(()=>{this._activeActions--,this._queues.get(e)===C&&this._activeActions===0&&this._onEmptyCallbacks.forEach(O=>O())})}}function co(t){return Array.isArray(t)?t:[t]}const so=c().createContext("contextWatchdog");class fe extends c().Component{constructor(e,o){super(e,o),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}async shouldComponentUpdate(e){return e.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(e.config)),e.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(e.config),!0):this.props.children!==e.children}render(){return c().createElement(so.Provider,{value:this.contextWatchdog},this.props.children)}async componentWillUnmount(){await this._destroyContext()}async _initializeContextWatchdog(e){this.contextWatchdog=new io(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(o,r)=>{this.props.onError(r.error,{phase:"runtime",willContextRestart:r.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(e).catch(o=>{this.props.onError(o,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}fe.defaultProps={isLayoutReady:!0,onError:(t,e)=>console.error(t,e)},fe.propTypes={id:p().string,isLayoutReady:p().bool,context:p().func,watchdogConfig:p().object,config:p().object,onReady:p().func,onError:p().func};const pe="Lock from React integration (@ckeditor/ckeditor5-react)";class Pt extends c().Component{constructor(e){super(e),this.editorDestructionInProgress=null,this.domContainer=c().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:o}=window;if(o){const[r]=o.split(".").map(Number);r<34&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(e){return!!this.editor&&(e.id!==this.props.id||(this._shouldUpdateEditor(e)&&this.editor.setData(e.data),"disabled"in e&&(e.disabled?this.editor.enableReadOnlyMode(pe):this.editor.disableReadOnlyMode(pe)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return c().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.watchdog||(this.context instanceof io?this.watchdog=new yn(this.context):this.watchdog=new Pt._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator((e,o)=>this._createEditor(e,o)),this.watchdog.on("error",(e,{error:o,causesRestart:r})=>{this.props.onError(o,{phase:"runtime",willEditorRestart:r})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch(e=>this.props.onError(e,{phase:"initialization",willEditorRestart:!1})))}_createEditor(e,o){return this.props.editor.create(e,o).then(r=>{"disabled"in this.props&&this.props.disabled&&r.enableReadOnlyMode(pe);const b=r.model.document,C=r.editing.view.document;return b.on("change:data",O=>{this.props.onChange&&this.props.onChange(O,r)}),C.on("focus",O=>{this.props.onFocus&&this.props.onFocus(O,r)}),C.on("blur",O=>{this.props.onBlur&&this.props.onBlur(O,r)}),setTimeout(()=>{this.props.onReady&&this.props.onReady(r)}),r})}async _destroyEditor(){this.editorDestructionInProgress=new Promise(e=>{setTimeout(()=>{this.watchdog?this.watchdog.destroy().then(()=>{this.watchdog=null,e()}):e()})})}_shouldUpdateEditor(e){return this.props.data!==e.data&&this.editor.getData()!==e.data}_getConfig(){return this.props.data&&this.props.config.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` properties. The config property is over the data value and the first one will be used when specified both."),{...this.props.config,initialData:this.props.config.initialData||this.props.data||""}}}class yn{constructor(e){this._contextWatchdog=e,this._id=function(){const o=4294967296*Math.random()>>>0,r=4294967296*Math.random()>>>0,b=4294967296*Math.random()>>>0,C=4294967296*Math.random()>>>0;return"e"+q[o>>0&255]+q[o>>8&255]+q[o>>16&255]+q[o>>24&255]+q[r>>0&255]+q[r>>8&255]+q[r>>16&255]+q[r>>24&255]+q[b>>0&255]+q[b>>8&255]+q[b>>16&255]+q[b>>24&255]+q[C>>0&255]+q[C>>8&255]+q[C>>16&255]+q[C>>24&255]}()}setCreator(e){this._creator=e}create(e,o){return this._contextWatchdog.add({sourceElementOrData:e,config:o,creator:this._creator,id:this._id,type:"editor"})}on(e,o){this._contextWatchdog.on("itemError",(r,{itemId:b,causesRestart:C,error:O})=>{b===this._id&&o(null,{error:O,causesRestart:C})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}Pt.contextType=so,Pt.propTypes={editor:p().func.isRequired,data:p().string,config:p().object,watchdogConfig:p().object,onChange:p().func,onReady:p().func,onFocus:p().func,onBlur:p().func,onError:p().func,disabled:p().bool,onInit:(t,e)=>{if(t[e])return new Error('The "onInit" property is not supported anymore by the CKEditor component. Use the "onReady" property instead.')}},Pt.defaultProps={config:{},onError:(t,e)=>console.error(t,e)},Pt._EditorWatchdog=no})(),i})())},59817:(R,l,n)=>{"use strict";Object.defineProperty(l,Symbol.toStringTag,{value:"Module"});const d=n(74081),E=n(27279),u=n(20565),g=n(54673),i=n(44747),a=E.forwardRef(({children:c,name:h,error:p,hint:S,id:P,required:k=!1,...w},f)=>{const j=g.useId(P),U=E.useMemo(()=>({name:h,id:j,error:p,hint:S,required:k}),[p,j,S,h,k]);return d.jsx(i.Box,{ref:f,...w,children:d.jsx(u.FieldContext.Provider,{value:U,children:c})})});l.Field=a},53785:(R,l,n)=>{"use strict";Object.defineProperty(l,Symbol.toStringTag,{value:"Module"});const d=n(74081),E=n(27279),u=n(72450),g=n(35725),i=n(70321),h=(S=>S&&S.__esModule?S:{default:S})(u).default(g.Flex)`
  font-size: 1.6rem;
  padding: 0;
`,p=E.forwardRef(({label:S,children:P,...k},w)=>d.jsxs(h,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...k,as:"button",ref:w,children:[d.jsx(i.VisuallyHidden,{as:"span",children:S}),E.cloneElement(P,{"aria-hidden":!0,focusable:!1})]}));l.FieldAction=p},20565:(R,l,n)=>{"use strict";Object.defineProperty(l,Symbol.toStringTag,{value:"Module"});const d=n(27279),E=d.createContext({id:"",required:!1}),u=()=>d.useContext(E);l.FieldContext=E,l.useField=u},28518:(R,l,n)=>{"use strict";Object.defineProperty(l,Symbol.toStringTag,{value:"Module"});const d=n(74081),E=n(20565),u=n(11880),g=()=>{const{id:i,error:a}=E.useField();return!a||typeof a!="string"?null:d.jsx(u.Typography,{variant:"pi",as:"p",id:`${i}-error`,textColor:"danger600","data-strapi-field-error":!0,children:a})};l.FieldError=g},63391:(R,l,n)=>{"use strict";Object.defineProperty(l,Symbol.toStringTag,{value:"Module"});const d=n(74081),E=n(20565),u=n(11880),g=()=>{const{id:i,hint:a,error:c}=E.useField();return!a||c?null:d.jsx(u.Typography,{variant:"pi",as:"p",id:`${i}-hint`,textColor:"neutral600",children:a})};l.FieldHint=g},20601:(R,l,n)=>{"use strict";Object.defineProperty(l,Symbol.toStringTag,{value:"Module"});const d=n(74081),E=n(27279),u=n(72450),g=n(20565),i=n(5529),a=n(44747),c=n(35725),p=(f=>f&&f.__esModule?f:{default:f})(u),S={S:6.5,M:10.5},P=E.forwardRef(({endAction:f,startAction:j,disabled:U=!1,onChange:tt,size:et="M",...V},ot)=>{const{id:X,error:v,hint:x,name:_,required:A}=g.useField();let M;v?M=`${X}-error`:x&&(M=`${X}-hint`);const $=Boolean(v),z=rt=>{!U&&tt&&tt(rt)};return d.jsxs(w,{justifyContent:"space-between",hasError:$,disabled:U,children:[j?d.jsx(a.Box,{paddingLeft:3,paddingRight:2,children:j}):null,d.jsx(k,{id:X,name:_,ref:ot,"aria-describedby":M,"aria-invalid":$,"aria-disabled":U,disabled:U,"data-disabled":U?"":void 0,hasLeftAction:Boolean(j),hasRightAction:Boolean(f),onChange:z,"aria-required":A,$size:et,...V}),f?d.jsx(a.Box,{paddingLeft:2,paddingRight:3,children:f}):null]})}),k=p.default.input`
  border: none;
  border-radius: ${({theme:f})=>f.borderRadius};
  padding-bottom: ${({$size:f})=>`${S[f]/16}rem`};
  padding-left: ${({theme:f,hasLeftAction:j})=>j?0:f.spaces[4]};
  padding-right: ${({theme:f,hasRightAction:j})=>j?0:f.spaces[4]};
  padding-top: ${({$size:f})=>`${S[f]/16}rem`};
  cursor: ${f=>f["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:f})=>f.colors.neutral800};
  font-weight: 400;
  font-size: ${f=>f.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:f})=>f.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`,w=p.default(c.Flex)`
  border: 1px solid ${({theme:f,hasError:j})=>j?f.colors.danger600:f.colors.neutral200};
  border-radius: ${({theme:f})=>f.borderRadius};
  background: ${({theme:f})=>f.colors.neutral0};
  ${i.inputFocusStyle()}

  ${({theme:f,disabled:j})=>j?u.css`
          color: ${f.colors.neutral600};
          background: ${f.colors.neutral150};
        `:void 0}
`;l.FieldInput=P,l.InputWrapper=w},69803:(R,l,n)=>{"use strict";Object.defineProperty(l,Symbol.toStringTag,{value:"Module"});const d=n(74081),E=n(27279),u=n(72450),g=n(20565),i=n(63832),a=n(11880),c=n(35725),p=(j=>j&&j.__esModule?j:{default:j})(u),S=i.once(console.warn),P=E.forwardRef(({children:j,action:U,required:tt,...et},V)=>{const{id:ot,required:X}=g.useField(),v=X||tt;return tt!==void 0&&S('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),d.jsxs(k,{ref:V,variant:"pi",textColor:"neutral800",htmlFor:ot,fontWeight:"bold",as:"label",...et,children:[j,v&&d.jsx(w,{textColor:"danger600",children:"*"}),U&&d.jsx(f,{marginLeft:1,children:U})]})}),k=p.default(a.Typography)`
  display: flex;
  align-items: center;
`,w=p.default(a.Typography)`
  line-height: 0;
`,f=p.default(c.Flex)`
  line-height: 0;

  svg path {
    fill: ${({theme:j})=>j.colors.neutral500};
  }
`;l.FieldLabel=P},66769:(R,l,n)=>{"use strict";Object.defineProperty(l,Symbol.toStringTag,{value:"Module"});const d=n(59817),E=n(69803),u=n(20601),g=n(63391),i=n(28518),a=n(20565),c=n(53785);l.Field=d.Field,l.FieldLabel=E.FieldLabel,l.FieldInput=u.FieldInput,l.InputWrapper=u.InputWrapper,l.FieldHint=g.FieldHint,l.FieldError=i.FieldError,l.FieldContext=a.FieldContext,l.useField=a.useField,l.FieldAction=c.FieldAction},95773:(R,l,n)=>{"use strict";Object.defineProperty(l,Symbol.toStringTag,{value:"Module"});const d=n(74081),E=n(27279),u=n(72450),g=n(10547),i=n(35725),c=(k=>k&&k.__esModule?k:{default:k})(u),h={size:!0,spacing:!0},p=c.default(i.Flex).withConfig({shouldForwardProp:(k,w)=>!h[k]&&w(k)})`
  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > * + * {
    margin-top: ${({theme:k,spacing:w})=>g.extractStyleFromTheme(k.spaces,w,void 0)};
  }
`,S=c.default(i.Flex).withConfig({shouldForwardProp:(k,w)=>!h[k]&&w(k)})`
  & > * {
    margin-left: 0;
    margin-right: 0;
  }

  & > * + * {
    margin-left: ${({theme:k,spacing:w})=>g.extractStyleFromTheme(k.spaces,w,void 0)};
  }
`,P=E.forwardRef(({horizontal:k=!1,spacing:w,size:f,...j},U)=>(f&&console.warn('Deprecation warning: Usage of "size" prop in Stack component is deprecated. This is discouraged and will be removed in the next major release. Please use "spacing" instead'),k?d.jsx(S,{ref:U,spacing:w||f,...j}):d.jsx(p,{direction:"column",alignItems:"stretch",ref:U,spacing:w||f,...j})));P.displayName="Stack",l.Stack=P},58892:(R,l,n)=>{"use strict";Object.defineProperty(l,Symbol.toStringTag,{value:"Module"});const d=n(95773);l.Stack=d.Stack},11880:(R,l,n)=>{"use strict";Object.defineProperty(l,Symbol.toStringTag,{value:"Module"});const d=n(72450),E=n(83415),u=n(10547),i=(h=>h&&h.__esModule?h:{default:h})(d),a={fontSize:!0,fontWeight:!0},c=i.default.span.withConfig({shouldForwardProp:(h,p)=>!a[h]&&p(h)})`
  ${E.variantStyle}
  ${E.ellipsisStyle}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:h,fontWeight:p})=>u.extractStyleFromTheme(h.fontWeights,p,void 0)};
  font-size: ${({theme:h,fontSize:p})=>u.extractStyleFromTheme(h.fontSizes,p,void 0)};
  line-height: ${({theme:h,lineHeight:p})=>u.extractStyleFromTheme(h.lineHeights,p,p)};
  color: ${({theme:h,textColor:p})=>h.colors[p||"neutral800"]};
  text-align: ${({textAlign:h})=>h};
  text-decoration: ${({textDecoration:h})=>h};
  text-transform: ${({textTransform:h})=>h};
`;l.Typography=c},14714:(R,l)=>{"use strict";Object.defineProperty(l,Symbol.toStringTag,{value:"Module"});const n="alpha",d="beta",E="delta",u="epsilon",g="omega",i="pi",a="sigma",c=[n,d,E,u,g,i,a];l.ALPHA=n,l.BETA=d,l.DELTA=E,l.EPSILON=u,l.OMEGA=g,l.PI=i,l.SIGMA=a,l.TEXT_VARIANTS=c},83415:(R,l,n)=>{"use strict";Object.defineProperty(l,Symbol.toStringTag,{value:"Module"});const d=n(14714),E=({ellipsis:g=!1})=>g&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,u=({variant:g=d.OMEGA,theme:i})=>{switch(g){case d.ALPHA:return`
        font-weight: ${i.fontWeights.bold};
        font-size: ${i.fontSizes[5]};
        line-height: ${i.lineHeights[2]};
      `;case d.BETA:return`
        font-weight: ${i.fontWeights.bold};
        font-size: ${i.fontSizes[4]};
        line-height: ${i.lineHeights[1]};
      `;case d.DELTA:return`
        font-weight: ${i.fontWeights.semiBold};
        font-size: ${i.fontSizes[3]};
        line-height: ${i.lineHeights[2]};
      `;case d.EPSILON:return`
        font-size: ${i.fontSizes[3]};
        line-height: ${i.lineHeights[6]};
      `;case d.OMEGA:return`
        font-size: ${i.fontSizes[2]};
        line-height: ${i.lineHeights[4]};
      `;case d.PI:return`
        font-size: ${i.fontSizes[1]};
        line-height: ${i.lineHeights[3]};
      `;case d.SIGMA:return`
        font-weight: ${i.fontWeights.bold};
        font-size: ${i.fontSizes[0]};
        line-height: ${i.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${i.fontSizes[2]};
      `}};l.ellipsisStyle=E,l.variantStyle=u},70321:(R,l,n)=>{"use strict";Object.defineProperty(l,Symbol.toStringTag,{value:"Module"});const d=n(72450),g=(i=>i&&i.__esModule?i:{default:i})(d).default.div`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;l.VisuallyHidden=g},63832:(R,l)=>{"use strict";Object.defineProperty(l,Symbol.toStringTag,{value:"Module"});const n="[@strapi/design-system]:",d=E=>{const u=E;let g=!1;if(typeof u!="function")throw new TypeError(`${n} once requires a function parameter`);return(...i)=>{g||(u(...i),g=!0)}};l.PREFIX=n,l.once=d},54673:(R,l,n)=>{"use strict";Object.defineProperty(l,Symbol.toStringTag,{value:"Module"});const d=n(27279),g=(c=>c&&c.__esModule?c:{default:c})(d).default["useId".toString()]||(()=>{});let i=0;const a=c=>{const[h,p]=d.useState(g());return d.useLayoutEffect(()=>{c||p(S=>S??String(i++))},[c]),c?.toString()??(h||"")};l.useId=a},5529:(R,l,n)=>{"use strict";Object.defineProperty(l,Symbol.toStringTag,{value:"Module"});const d=n(72450),E=i=>({theme:a,size:c})=>a.sizes[i][c],u=(i="&")=>({theme:a,hasError:c=!1})=>d.css`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${i}:focus-within {
      border: 1px solid ${c?a.colors.danger600:a.colors.primary600};
      box-shadow: ${c?a.colors.danger600:a.colors.primary600} 0px 0px 0px 2px;
    }
  `,g=({theme:i})=>d.css`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${i.colors.primary600};
    }
  }
`;l.buttonFocusStyle=g,l.getThemeSize=E,l.inputFocusStyle=u}}]);
