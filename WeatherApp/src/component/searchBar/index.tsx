import { ChangeEvent, KeyboardEvent } from "react";
import "./index.scss";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

interface SearchBarProps {
  onInputChange: (e: ChangeEvent<any>) => void;
  searchInput: string;
  handleSearchOnEnter: (e: KeyboardEvent) => void;
  onClickSearch: (e: string) => void;
  onClickDarkToggle: () => void;
  darkMode: boolean;
}

const SearchBar = (props: SearchBarProps): JSX.Element => {
  const {
    onInputChange,
    searchInput,
    handleSearchOnEnter,
    onClickSearch,
    onClickDarkToggle,
    darkMode,
  } = props;

  const isDarkMode = darkMode ? "Dark Mode" : "Light Mode";
  return (
    <div className="search-wrapper">
      <FloatingLabel
        controlId="floatingInput"
        label="Country"
        className="mb-3 text-wrapper"
      >
        <Form.Control
          type="textarea"
          onChange={(e) => onInputChange(e)}
          value={searchInput}
          onKeyDown={(e) => handleSearchOnEnter(e)}
        />
      </FloatingLabel>
      <div className="cta-wrapper">
        <div
          className="ico-search-wrapper"
          onClick={() => onClickSearch(searchInput || "")}
        >
          <div className="ico-search" />
        </div>
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label={isDarkMode}
          onChange={onClickDarkToggle}
          checked={darkMode}
        />
      </div>
    </div>
  );
};

export default SearchBar;
