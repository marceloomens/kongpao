module.exports = {
  // the all function returns an array of all of the 'request' objects of a route. Since this is the homepage, there is only one.
  all: () => [{ slug: '/' }],
  // the permalink function takes a 'request' object and returns a relative permalink. In this case "/"
  permalink: ({ request }) => request.slug,
  data: ({ data }) => {
    // The data function populates what data should be in available in our Svelte template.
  },
  // template: 'Home.svelte' // this is auto-detected.
  // layout: 'Layout.svelte' // this is auto-detected.
};