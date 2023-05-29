import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);
  const handleInputChange = (e: any) => {
    e.preventDefault();
    if (ref.current) setSearchText(ref.current.value);
    navigate("/");
  };
  return (
    <form onSubmit={(e) => handleInputChange(e)}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} borderRadius={20} placeholder='Search Game...'></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
