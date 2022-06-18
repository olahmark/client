import { HamburgerIcon } from '@chakra-ui/icons';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    IconButton,
    Container,
    Box,
    Stack,
  } from '@chakra-ui/react'

  function Menu2() {
    return (
      
              <Menu>
              <MenuButton  as={IconButton}
                          aria-label='Options'
                          icon={<HamburgerIcon />}
                          variant='solid' 
                          color='teal.600'
                          width = '223px'>
                Menu
              </MenuButton>
              <MenuList>
                <MenuGroup title='Expand map'>
                  <MenuItem as="a" href={'/addcountry'}>Add country </MenuItem>
                  <MenuItem as="a" href={'/addneighbours'}>Add neighbours </MenuItem>
                  <MenuItem as="a" href={'/addsettlement'}>Add settlement </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title='Expand routhes'>
                  <MenuItem as="a" href={'/addairport'}>Add airport</MenuItem>
                  <MenuItem as="a" href={'/addstation'}>Add transit station</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title='Expand flights/pachs'>
                    <MenuItem as="a" href={'/addflight'}>Add flight</MenuItem>
                    <MenuItem as="a" href={'/addline'}>Add other line</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu> 
       
    );
  }

  export default Menu2;