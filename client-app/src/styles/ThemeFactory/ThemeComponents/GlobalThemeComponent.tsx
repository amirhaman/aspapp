export const GlobalThemeComponent = ( props: any ) => {
  return [
    `div, p, span, i, li, h1, h2, h3, h4, h5, h6 {
      color: ${props.palette.primary.contrastText};
      &.invert-color {
        color: ${props.palette.primary.dark};
      }
    }`,
    `code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }`,
    `.wp-block-post-content a:where(:not(.wp-element-button)) {
      color: ${props.palette.primary.contrastText} !important;
      text-decoration: none;
    }`,
    `.alignfull {
      width: 100%;
    }`,
    `.post-content {
      width: 100%;
    }
    `
  ];
};
