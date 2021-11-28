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
    container: document.querySelector('#team-list'), 
    attribute: 'team',
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
