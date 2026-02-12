import type { SearchBarProps } from '../../types'

function SearchBar({searchText, styleClass, placeholderText, setSearchText}: SearchBarProps){

const updateSearchInput = (value: string) => {
    setSearchText && setSearchText(value)
}

  return (
    <div className={"inline-block " + styleClass}>
      <input type="search" value={searchText} placeholder={placeholderText || "Search"} onChange={(e) => updateSearchInput(e.target.value)} className="input input-sm input-bordered w-full max-w-xs" />
    </div>
  )
}

export default SearchBar
