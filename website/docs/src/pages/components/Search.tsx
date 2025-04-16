import {useState} from 'react';
import {liteClient as algoliasearch} from 'algoliasearch/lite';
import {File, Search} from 'lucide-react';
import {InstantSearch, SearchBox, Hits} from 'react-instantsearch';

const searchClient = algoliasearch(
  'FZ3R5EETVM',
  'cad81ce37d5240c68e6d39c8f68f520f'
);

function Hit({hit}: any) {
  return (
    <div className="w-full bg-white dark:bg-black shadow-md p-2 flex items-center hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-md">
      <File className="text-gray-600 dark:text-white" />
      <a
        href={`/components/${hit.name}`}
        className="ml-2 text-neutral-600 dark:text-white"
      >
        {hit.name}
      </a>
    </div>
  );
}

function SearchBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(true);

  return (
    <>
      {isSearchOpen ? (
        <div className="fixed inset-0 flex flex-col items-center justify-center text-gray-900 dark:text-gray-100 z-10">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40 z-0"
            onClick={() => setIsSearchOpen(false)}
          ></div>

          {/* Search Box + Hits */}
          <div className="w-[30vw] z-10">
            <div className="w-full max-w-2xl">
              <InstantSearch
                searchClient={searchClient}
                indexName="_components"
                insights
              >
                <SearchBox
                  placeholder="Search components..."
                  classNames={{
                    root: 'w-full relative',
                    input:
                      'w-full pl-10 pr-4 py-2 border-[0.5px] border-gray-300 dark:border-neutral-800 bg-white dark:bg-black text-gray-900 dark:text-gray-100 rounded-t-md shadow-sm focus:outline-none placeholder-gray-400 dark:placeholder-gray-500',
                    submit:
                      'absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:fill-white',
                    reset:
                      'absolute right-3 top-1/2 -translate-y-1/2 hover:fill-red-500 dark:fill-gray-300',
                  }}
                />

                <div className="w-full scrollable-content max-h-[300px] overflow-y-auto overflow-x-hidden bg-white dark:bg-black p-2 border border-t-0 border-neutral-300 dark:border-neutral-800 rounded-b-md">
                  <Hits hitComponent={Hit} />
                </div>
              </InstantSearch>
            </div>
          </div>
        </div>
      ) : (
        // Optional reopen button
        <button
          onClick={() => setIsSearchOpen(true)}
          className=" flex justify-start items-center w-[300px] text-left cursor-pointer px-4 py-1  border-[0.5px] border-neutral-300 dark:border-neutral-700 text-neutral-400 text-sm dark:bg-neutral-900 rounded-md shadow-sm "
        >
          <Search className="w-[15px] mr-2" />
          Search components...
        </button>
      )}
    </>
  );
}

export default SearchBar;
