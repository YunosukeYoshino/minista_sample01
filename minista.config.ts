// Default Settings
export default {
  beautify: {
    useHtml: true, // Pretty: HTML
    useAssets: false, // Pretty: CSS and JS
    htmlOptions: {
      indent_size: 2,
      max_preserve_newlines: 0,
      indent_inner_html: true,
      extra_liners: [],
      inline: ["span", "strong", "b", "small", "del", "s", "code", "br", "wbr"],
    },
    cssOptions: {
      indent_size: 2,
      space_around_combinator: true,
    },
    jsOptions: {
      indent_size: 2,
    },
  },
}
