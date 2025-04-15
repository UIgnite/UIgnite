import {liteClient as algoliasearch} from 'algoliasearch/lite';
import {InstantSearch, SearchBox} from 'react-instantsearch';

const searchClient = algoliasearch(
  'FZ3R5EETVM',
  'cad81ce37d5240c68e6d39c8f68f520f'
);

function Search() {
  return (
    <InstantSearch searchClient={searchClient} indexName="INDEX_NAME">
      <SearchBox />
    </InstantSearch>
  );
}

export default Search;
