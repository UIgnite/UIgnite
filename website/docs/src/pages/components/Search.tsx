import {liteClient as algoliasearch} from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  RefinementList,
} from 'react-instantsearch';

const searchClient = algoliasearch(
  'FZ3R5EETVM',
  'cad81ce37d5240c68e6d39c8f68f520f'
);

function Hit({hit}: any) {
  return (
    <div className=" flex justify-center">
      <button className="px-4 py-2 bg-blue-400">
        <a href="/components/Accordion">{hit.name}</a>
      </button>
    </div>
  );
}

function Search() {
  return (
    <div className="flex justify-center items-center flex-col ">
      <InstantSearch
        searchClient={searchClient}
        indexName="_components"
        insights
      >
        <SearchBox />
        <RefinementList attribute="name" />

        <Hits hitComponent={Hit} />
      </InstantSearch>
    </div>
  );
}

export default Search;
