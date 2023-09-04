import { Container, Stack } from '@mui/material';
import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Section from '../Section/Section';
import SearchInfo from './parts/SearchInfo.tsx';
import SearchListItem from './parts/SearchListItem';
import SearchResultsInput from './parts/SearchResultsInput';
import ShowMoreBtn from './parts/ShowMoreBtn.tsx';

import { testData } from './testData.ts';

const Search: FC = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('request') || '';

  const [inputData, setInputData] = useState(search);
  const [searchResults, setSearchResults] = useState(() => {
    return searchContent(search);
  });
  const [searchTitleVal, setSearchTitleVal] = useState(inputData);
  const [visibleNum, setVisibleNum] = useState(5);

  function searchContent(patt: string) {
    if (patt.length) {
      const pattern = new RegExp(patt, 'gim');
      return testData.filter((el) => pattern.test(el.text || '') || pattern.test(el.title));
    }
    return [];
  }

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    setInputData(e.target.value);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    if (inputData.length > 2) {
      e.preventDefault();
      setSearchResults([]);
      setSearchTitleVal(inputData);
      setSearchResults(searchContent(inputData));
      setVisibleNum(5);
    }
  };

  const changeVisibleNum = () => {
    setVisibleNum((prevVal) => prevVal + 5);
  };

  return (
    <Section variant="light">
      <Container>
        <SearchResultsInput inputData={inputData} handleChange={handleChange} onSubmit={onSubmit} />
        <SearchInfo resultsCount={searchResults.length} searchTitle={searchTitleVal} />
        {/* search results */}
        <Stack
          component={'ul'}
          sx={{
            rowGap: {
              lg: '44px',
              md: '32px',
              sm: '24px',
            },
            paddingBottom: {
              lg: '100px',
              md: '80px',
              sm: '60px',
            },
          }}>
          {searchResults.slice(0, visibleNum).map((data, index) => {
            return <SearchListItem key={index} {...data} />;
          })}
          {/* show more button */}
          {visibleNum < searchResults.length && <ShowMoreBtn onClick={changeVisibleNum} />}
        </Stack>
      </Container>
    </Section>
  );
};

export default Search;
