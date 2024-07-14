import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Text,
  List,
  ListItem,
  Box
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const data = ["Apple", "Banana", "Cherry", "Date", "Fig", "Grape", "Kiwi"];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setFilteredData(
      data.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
    );
  };

  const clearSearch = () => {
    setSearchTerm("");
    setFilteredData(data);
  };

  return (
    <Box position='relative' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} ml={{base: '0.4rem', sm: '0'}} width={{md: '40%', base: '70%', sm: '60%'}} height='100%'>
      <InputGroup>
        <Input
          placeholder="Buscar Productos"
          value={searchTerm}
          onChange={handleSearch}
          bg='white'
          color='black'size='sm'
        />
        <InputRightElement height='100%'>
          {searchTerm ? (
            <IconButton
              aria-label="Clear search"
              icon={<IoClose />}
              onClick={clearSearch}
              size="xs"
            />
          ) : (
            <FaSearch color="black" />
          )}
        </InputRightElement>
      </InputGroup>
      <List color='black' borderRadius='2px' position='absolute' top='38.5px' left='0' width='100%' bg="white" zIndex={2}> 
        { searchTerm.length > 0 &&
          filteredData.map((item, index) => (
            <ListItem key={index} display='flex' alignItems='center' justifyContent='start' cursor='pointer' height='32px' _hover={{ backgroundColor: 'inherit', filter: 'brightness(150%)' }} p={2}>
              <Text>{item}</Text>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default SearchBar;
