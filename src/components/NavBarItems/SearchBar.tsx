import React from "react";
import { useRef, useState, FormEvent } from "react";
import { IconSearch } from "@tabler/icons-react";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const ref = useRef<HTMLFormElement>(null);
  //useOnClickOutside(ref, () => setActiveModal(false));

  const handleSearch = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setInputValue("");
  };

  return (
    <>
      <form
        className={`search-box ${activeModal ? "active" : ""}`}
        onSubmit={handleSearch}
        ref={ref}
      >
        <div className="input-area border w-100 bc-n400">
          <input
            type="text"
            placeholder="Search Podcast..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="icon-btn p-0">
            <span className="icon alt-size fs-lg">
              <IconSearch />
              {/* <i className="ti ti-search"></i> */}
            </span>
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
