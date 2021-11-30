// require('dotenv').config();

const search = instantsearch({
  indexName: 'test-nba-players',
  searchClient: algoliasearch('W1CE17ZMDH', 'c810263da3d0e6881ebd112d90a4e187'),
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: 'Search for a player, team or points',
  }),
  instantsearch.widgets.stats({
    container: "#stats",
    templates: {
      body(hit) {
        return `<span role="img" aria-label="emoji">⚡️</span> <strong>${hit.nbHits}</strong> results found ${
          hit.query != "" ? `for <strong>"${hit.query}"</strong>` : ``
        } in <strong>${hit.processingTimeMS}ms</strong>`;
      }
    }
  }),
  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
  }),
  instantsearch.widgets.refinementList({
    container: '#team-list', 
    attribute: 'team',
    showMore: true,
    searchable: true,
    searchablePlaceholder: 'Search a team',
  }),
  instantsearch.widgets.numericMenu({
    container: '#numeric-menu',
    attribute: 'points',
    items: [
      { label: 'All' },
      { label: 'Less than 100', end: 100 },
      { label: 'Between 100 - 500', start: 100, end: 500 },
      { label: 'Between 500 - 1000', start: 500, end: 1000 },
      { label: 'Between 1000 - 1500', start: 1000, end: 1500 },
      { label: 'More than 1500', start: 1500 },
    ],
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div>
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



