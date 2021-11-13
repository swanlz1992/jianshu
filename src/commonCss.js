import { createGlobalStyle } from "styled-components";
export const Globalstyle = createGlobalStyle`
    body {
        background:pink;
    }
    @font-face {
        font-family: "iconfont"; /* Project id 2842990 */
        src: url('./iconfont.eot?t=1632979432946'); /* IE9 */
        src: url('./iconfont.eot?t=1632979432946#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
            url('./iconfont.ttf?t=1632979432946') format('truetype'),
            url('./iconfont.svg?t=1632979432946#iconfont') format('svg');
    }
    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
      
    
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;
