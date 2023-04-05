import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const sortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {/* {selectedPlatform?.name || "Platforms"} */}
        Selectors
      </MenuButton>
      <MenuList>
        {/* {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}{" "}
          </MenuItem>
        ))} */}
        <MenuItem>Item 1</MenuItem>
        <MenuItem>2</MenuItem>
        <MenuItem>3</MenuItem>
        <MenuItem>4</MenuItem>
        <MenuItem>5</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default sortSelector;
