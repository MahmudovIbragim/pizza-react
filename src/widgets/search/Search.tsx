import Input from "../../shared/ui/input/Input";
import scss from "./Search.module.scss";
import { Search as SearchIcon } from "lucide-react";
const Search = () => {
  return (
    <label className={scss.Search}>
      <SearchIcon size={16} color="#adadad" />
      <Input placeholder="Поиск пиццы..." />
    </label>
  );
};

export default Search;
