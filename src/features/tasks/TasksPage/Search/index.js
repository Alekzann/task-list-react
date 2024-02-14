import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Input from "../Input/index.js";
import { Wrapper } from "./styled.js";
import searchQueryParamName from "../searchQueryParamName.js";

export default () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);
  const onInputChange = ({target}) => {
    const searchParams = new URLSearchParams(location.search); 

    if (target.value.trim() === ""){
        searchParams.delete(searchQueryParamName);
    }else{
        searchParams.set(searchQueryParamName, target.value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <Wrapper>
        <Input
      placeholder="Filtruj zadania"
      value={query || ""}
      onChange={onInputChange}
    />
    </Wrapper>
  );
};
