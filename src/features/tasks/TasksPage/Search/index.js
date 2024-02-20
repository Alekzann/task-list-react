import Input from "../Input/index.js";
import { Wrapper } from "./styled.js";
import searchQueryParamName from "../searchQueryParamName.js";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../queryParameters.js";

export default () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
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
