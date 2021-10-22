import SearchIcon from "@mui/icons-material/Search";
import { InputBase, styled } from "@mui/material";
import { alpha } from "@mui/system";
import { useContext } from "react";
import MovieContext from "./context/MovieContext";

const SearchInput = styled("div")(({ theme }) => ({
  position: "relative",
  color: theme.palette.secondary.contrastText,
  width: "auto",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

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

const Search = () => {
  const { overView } = useContext(MovieContext);
  return (
    <SearchInput>
      <SearchIconWrapper>
        <SearchIcon sx={{ color: "#007aff" }} />
      </SearchIconWrapper>
      <StyledInputBase
        sx={{ color: "#8da0bc" }}
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
        className={overView ? "overView__nav-input" : null}
      />
    </SearchInput>
  );
};

export default Search;
