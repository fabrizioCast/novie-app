import { InputBase, styled } from "@mui/material";
import { alpha } from "@mui/system";
import { useContext } from "react";
import MovieSearchContext from "./context/MovieSearchContext";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    border: `1px solid rgba(61,79,145,.5)`,
    backgroundColor: alpha("#080f28", 0.5),
    borderRadius: "30px",
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "15ch",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "25ch",
      },
    },
    "&:focus": {
      border: `1px solid rgba(61,79,145, 1)`,
    },
  },
}));

const SearchInput = () => {
  const { setDynamicSearch, dynamicSearch, setShowDynamicSearch } =
    useContext(MovieSearchContext);

  const handleSearch = (e) => {
    setDynamicSearch(e.target.value);
  };

  const handleFocus = (e) => setShowDynamicSearch(true);

  const handleBlur = (e) => {
    setTimeout(() => {
      setShowDynamicSearch(false);
    }, 100);
  };

  return (
    <StyledInputBase
      sx={{ color: "#8da0bc" }}
      placeholder="Search..."
      inputProps={{ "aria-label": "search" }}
      value={dynamicSearch}
      onChange={handleSearch}
      onFocus={handleFocus}
      onBlurCapture={handleBlur}
    />
  );
};

export default SearchInput;
