'use strict';

var index = require('../index-8fedf5ab.js');

/* src/layouts/Layout.svelte generated by Svelte v3.29.7 */

const css = {
	code: "html{scroll-behavior:smooth}body{background:repeat url(\"/img/swirl.png\");background-color:rgb(241, 39, 124);color:#FFF;margin-left:0;margin-right:0}.font-primary,h1{font-family:'Alex Brush', cursive}.font-secondary{font-family:'Carter One', cursive}header.svelte-6ja51w,footer.svelte-6ja51w{text-align:center}",
	map: "{\"version\":3,\"file\":\"Layout.svelte\",\"sources\":[\"Layout.svelte\"],\"sourcesContent\":[\"<script>\\n  export let templateHtml, settings;\\n</script>\\n\\n<style>\\n:global(html) {\\n  scroll-behavior: smooth;\\n}\\n:global(body) {\\n  background: repeat url(\\\"/img/swirl.png\\\");\\n  background-color: rgb(241, 39, 124);\\n  color: #FFF;\\n  margin-left: 0;\\n  margin-right: 0;\\n}\\n:global(.font-primary,h1) {\\nfont-family: 'Alex Brush', cursive;\\n}\\n:global(.font-secondary) {\\nfont-family: 'Carter One', cursive;\\n}\\nheader, footer {\\n  text-align: center;\\n}\\n/*# sourceMappingURL=src/layouts/Layout.svelte.map */</style>\\n\\n<svelte:head>\\n  <link rel=\\\"preconnect\\\" href=\\\"https://fonts.gstatic.com\\\">\\n  <link rel=\\\"stylesheet\\\" href=\\\"/style.css\\\" />\\n  <link href=\\\"https://fonts.googleapis.com/css2?family=Alex+Brush&family=Carter+One&display=swap\\\" rel=\\\"stylesheet\\\">\\n  <title>J Flower Cake — Buttercream and Korean Bean Paste Flowers</title>\\n  <meta name=\\\"description\\\" content=\\\"J Flower Cake — Buttercream and Korean Bean Paste Flowers\\\">\\n</svelte:head>\\n\\n<header>\\n  <h1>J Flower Cake</h1>\\n</header>\\n\\n<main>\\n  {@html templateHtml}\\n</main>\\n\\n<footer>\\n  <address>\\n    <span class=\\\"font-primary\\\">J Flower Cake</span><br />\\n    Middenmolenlaan 8<br />\\n    2807 DL Gouda\\n  </address>\\n  <dl>\\n    <dt>KVK reg.</dt>\\n    <dd>80458998</dd>\\n    <dt>VAT no.</dt>\\n    <dd>NL003445086B58</dd>\\n  </dl>\\n  <small>&copy; J Flower cake, 2021.</small>\\n</footer>\\n\"],\"names\":[],\"mappings\":\"AAKQ,IAAI,AAAE,CAAC,AACb,eAAe,CAAE,MAAM,AACzB,CAAC,AACO,IAAI,AAAE,CAAC,AACb,UAAU,CAAE,MAAM,CAAC,IAAI,gBAAgB,CAAC,CACxC,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CACnC,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,CAAC,CACd,YAAY,CAAE,CAAC,AACjB,CAAC,AACO,gBAAgB,AAAE,CAAC,AAC3B,WAAW,CAAE,YAAY,CAAC,CAAC,OAAO,AAClC,CAAC,AACO,eAAe,AAAE,CAAC,AAC1B,WAAW,CAAE,YAAY,CAAC,CAAC,OAAO,AAClC,CAAC,AACD,oBAAM,CAAE,MAAM,cAAC,CAAC,AACd,UAAU,CAAE,MAAM,AACpB,CAAC\"}"
};

const Layout = index.create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { templateHtml } = $$props, { settings } = $$props;
	if ($$props.templateHtml === void 0 && $$bindings.templateHtml && templateHtml !== void 0) $$bindings.templateHtml(templateHtml);
	if ($$props.settings === void 0 && $$bindings.settings && settings !== void 0) $$bindings.settings(settings);
	$$result.css.add(css);

	return `${($$result.head += `<link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" data-svelte="svelte-ck4gci"><link rel="${"stylesheet"}" href="${"/style.css"}" data-svelte="svelte-ck4gci"><link href="${"https://fonts.googleapis.com/css2?family=Alex+Brush&family=Carter+One&display=swap"}" rel="${"stylesheet"}" data-svelte="svelte-ck4gci">${($$result.title = `<title>J Flower Cake — Buttercream and Korean Bean Paste Flowers</title>`, "")}<meta name="${"description"}" content="${"J Flower Cake — Buttercream and Korean Bean Paste Flowers"}" data-svelte="svelte-ck4gci">`, "")}

<header class="${"svelte-6ja51w"}"><h1>J Flower Cake</h1></header>

<main>${templateHtml}</main>

<footer class="${"svelte-6ja51w"}"><address><span class="${"font-primary"}">J Flower Cake</span><br>
    Middenmolenlaan 8<br>
    2807 DL Gouda
  </address>
  <dl><dt>KVK reg.</dt><dd>80458998</dd><dt>VAT no.</dt><dd>NL003445086B58</dd></dl>
  <small>© J Flower cake, 2021.</small></footer>`;
});

module.exports = Layout;
module.exports._css = "html{scroll-behavior:smooth}body{background:repeat url(\u002Fimg\u002Fswirl.png);background-color:#f1277c;color:#fff;margin-left:0;margin-right:0}.font-primary,h1{font-family:'Alex Brush',cursive}.font-secondary{font-family:'Carter One',cursive}footer.svelte-6ja51w,header.svelte-6ja51w{text-align:center}";
module.exports._cssMap = "\u002F*# sourceMappingURL=data:application\u002Fjson;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXlvdXRzL0xheW91dC5zdmVsdGUiLCJzcmMvbGF5b3V0cy9MYXlvdXQuc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtRLEtBQU8sZ0JBQ0ksT0FDbEIsS0FDYyxXQUNELE9BQTJCLG9CQUN2QyxpQkFBa0MsUUFDbEMsTUFBTyxLQUNQLFlBQWEsRUFDYixhQUFjLEVBQ2YsY0FBQSxHQUMwQixZQUNkLFlDaEJnTCxDRGdCbEssUUFDMUIsZ0JBQ3lCLFlBQ2IsWUNuQmtPLENEbUJwTixRQUViLHFCQURiLHFCQUNlLFdBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBleHBvcnQgbGV0IHRlbXBsYXRlSHRtbCwgc2V0dGluZ3M7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuOmdsb2JhbChodG1sKSB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuOmdsb2JhbChib2R5KSB7XG4gIGJhY2tncm91bmQ6IHJlcGVhdCB1cmwoXCIvaW1nL3N3aXJsLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMzksIDEyNCk7XG4gIGNvbG9yOiAjRkZGO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuOmdsb2JhbCguZm9udC1wcmltYXJ5LGgxKSB7XG5mb250LWZhbWlseTogJ0FsZXggQnJ1c2gnLCBjdXJzaXZlO1xufVxuOmdsb2JhbCguZm9udC1zZWNvbmRhcnkpIHtcbmZvbnQtZmFtaWx5OiAnQ2FydGVyIE9uZScsIGN1cnNpdmU7XG59XG5oZWFkZXIsIGZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9sYXlvdXRzL0xheW91dC5zdmVsdGUubWFwICovPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIj5cbiAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3R5bGUuY3NzXCIgLz5cbiAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWxleCtCcnVzaCZmYW1pbHk9Q2FydGVyK09uZSZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+XG4gIDx0aXRsZT5KIEZsb3dlciBDYWtlIBQgQnV0dGVyY3JlYW0gYW5kIEtvcmVhbiBCZWFuIFBhc3RlIEZsb3dlcnM8L3RpdGxlPlxuICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSiBGbG93ZXIgQ2FrZSAUIEJ1dHRlcmNyZWFtIGFuZCBLb3JlYW4gQmVhbiBQYXN0ZSBGbG93ZXJzXCI+XG48L3N2ZWx0ZTpoZWFkPlxuXG48aGVhZGVyPlxuICA8aDE+SiBGbG93ZXIgQ2FrZTwvaDE+XG48L2hlYWRlcj5cblxuPG1haW4+XG4gIHtAaHRtbCB0ZW1wbGF0ZUh0bWx9XG48L21haW4+XG5cbjxmb290ZXI+XG4gIDxhZGRyZXNzPlxuICAgIDxzcGFuIGNsYXNzPVwiZm9udC1wcmltYXJ5XCI+SiBGbG93ZXIgQ2FrZTwvc3Bhbj48YnIgLz5cbiAgICBNaWRkZW5tb2xlbmxhYW4gODxiciAvPlxuICAgIDI4MDcgREwgR291ZGFcbiAgPC9hZGRyZXNzPlxuICA8ZGw+XG4gICAgPGR0PktWSyByZWcuPC9kdD5cbiAgICA8ZGQ+ODA0NTg5OTg8L2RkPlxuICAgIDxkdD5WQVQgbm8uPC9kdD5cbiAgICA8ZGQ+TkwwMDM0NDUwODZCNTg8L2RkPlxuICA8L2RsPlxuICA8c21hbGw+JmNvcHk7IEogRmxvd2VyIGNha2UsIDIwMjEuPC9zbWFsbD5cbjwvZm9vdGVyPlxuIiwiaHRtbHtzY3JvbGwtYmVoYXZpb3I6c21vb3RofWJvZHl7YmFja2dyb3VuZDpyZXBlYXQgdXJsKFwiL2ltZy9zd2lybC5wbmdcIik7YmFja2dyb3VuZC1jb2xvcjpyZ2IoMjQxLCAzOSwgMTI0KTtjb2xvcjojRkZGO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjB9LmZvbnQtcHJpbWFyeSxoMXtmb250LWZhbWlseTonQWxleCBCcnVzaCcsIGN1cnNpdmV9LmZvbnQtc2Vjb25kYXJ5e2ZvbnQtZmFtaWx5OidDYXJ0ZXIgT25lJywgY3Vyc2l2ZX1oZWFkZXIuc3ZlbHRlLTZqYTUxdyxmb290ZXIuc3ZlbHRlLTZqYTUxd3t0ZXh0LWFsaWduOmNlbnRlcn0iXX0= *\u002F";
module.exports._cssIncluded = ["src/layouts/Layout.svelte"]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGF5b3V0cy9MYXlvdXQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGV4cG9ydCBsZXQgdGVtcGxhdGVIdG1sLCBzZXR0aW5ncztcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG46Z2xvYmFsKGh0bWwpIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG46Z2xvYmFsKGJvZHkpIHtcbiAgYmFja2dyb3VuZDogcmVwZWF0IHVybChcIi9pbWcvc3dpcmwucG5nXCIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAzOSwgMTI0KTtcbiAgY29sb3I6ICNGRkY7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG46Z2xvYmFsKC5mb250LXByaW1hcnksaDEpIHtcbmZvbnQtZmFtaWx5OiAnQWxleCBCcnVzaCcsIGN1cnNpdmU7XG59XG46Z2xvYmFsKC5mb250LXNlY29uZGFyeSkge1xuZm9udC1mYW1pbHk6ICdDYXJ0ZXIgT25lJywgY3Vyc2l2ZTtcbn1cbmhlYWRlciwgZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIj5cbiAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3R5bGUuY3NzXCIgLz5cbiAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWxleCtCcnVzaCZmYW1pbHk9Q2FydGVyK09uZSZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+XG4gIDx0aXRsZT5KIEZsb3dlciBDYWtlIOKAlCBCdXR0ZXJjcmVhbSBhbmQgS29yZWFuIEJlYW4gUGFzdGUgRmxvd2VyczwvdGl0bGU+XG4gIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJKIEZsb3dlciBDYWtlIOKAlCBCdXR0ZXJjcmVhbSBhbmQgS29yZWFuIEJlYW4gUGFzdGUgRmxvd2Vyc1wiPlxuPC9zdmVsdGU6aGVhZD5cblxuPGhlYWRlcj5cbiAgPGgxPkogRmxvd2VyIENha2U8L2gxPlxuPC9oZWFkZXI+XG5cbjxtYWluPlxuICB7QGh0bWwgdGVtcGxhdGVIdG1sfVxuPC9tYWluPlxuXG48Zm9vdGVyPlxuICA8YWRkcmVzcz5cbiAgICA8c3BhbiBjbGFzcz1cImZvbnQtcHJpbWFyeVwiPkogRmxvd2VyIENha2U8L3NwYW4+PGJyIC8+XG4gICAgTWlkZGVubW9sZW5sYWFuIDg8YnIgLz5cbiAgICAyODA3IERMIEdvdWRhXG4gIDwvYWRkcmVzcz5cbiAgPGRsPlxuICAgIDxkdD5LVksgcmVnLjwvZHQ+XG4gICAgPGRkPjgwNDU4OTk4PC9kZD5cbiAgICA8ZHQ+VkFUIG5vLjwvZHQ+XG4gICAgPGRkPk5MMDAzNDQ1MDg2QjU4PC9kZD5cbiAgPC9kbD5cbiAgPHNtYWxsPiZjb3B5OyBKIEZsb3dlciBjYWtlLCAyMDIxLjwvc21hbGw+XG48L2Zvb3Rlcj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7T0FDYSxZQUFZLGdCQUFFLFFBQVE7Ozs7Ozs7OztRQXNDMUIsWUFBWTs7Ozs7Ozs7Ozs7OyJ9
