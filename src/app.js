/* global instantsearch algoliasearch */

// import algoliasearch from 'algoliasearch'

// const client = algoliasearch('W1CE17ZMDH', '5bb6dc525c2b3c48c00dbb700cc98cf1')

// const index = client.initIndex('demo_ecommerce')

// fetch('https://alg.li/doc-ecommerce.json')
//   .then(function(response) {
//     return response.json()
//   })
//   .then(function(products) {
//     return index.saveObjects(products, {
//       autoGenerateObjectIDIfNotExist: true
//     })
//   })



const search = instantsearch({
  indexName: 'test-nba-players',
  searchClient: algoliasearch(process.env.applicationid, process.env.ALGOLIA_API_KEY),
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
  }),
  instantsearch.widgets.refinementList({
    container: '#team-list', 
    attribute: 'team',
  }),
  instantsearch.widgets.numericMenu({
    container: '#numeric-menu',
    attribute: 'points',
    items: [
      { label: 'All' },
      { label: 'Less than 500', end: 500 },
      { label: 'Between 500 - 1000', start: 500, end: 1000 },
      { label: 'More than 1000', start: 1000 },
    ],
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div>
          <img src="{{image}}" align="left" alt="{{name}}" />
          <div class="hit-name">
            {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
          </div>
          <div class="hit-description">
            {{#helpers.highlight}}{ "attribute": "team" }{{/helpers.highlight}}
          </div>
          <div class="hit-points">\Points: {{points}}</div>
        </div>
      `,
    },
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);



search.start();
