import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material";
import SearchInput from "./SearchInput";

const SearchStyled = styled("div")(({ theme }) => ({
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

const Search = () => {
  return (
    <SearchStyled>
      <SearchIconWrapper>
        <SearchIcon sx={{ color: "#007aff" }} />
      </SearchIconWrapper>
      <SearchInput />
    </SearchStyled>
  );
};

export default Search;
