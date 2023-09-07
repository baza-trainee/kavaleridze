import { Box, Container, Stack } from '@mui/material';
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
      return testData.filter((el) => pattern.test(el.description || '') || pattern.test(el.title));
    }
    return [];
  }

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    setInputData(e.target.value);
  };

  const changeVisibleNum = () => {
    setVisibleNum((prevVal) => prevVal + 5);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (inputData.length > 2) {
      setSearchResults([]);
      setSearchTitleVal(inputData);
      setSearchResults(searchContent(inputData));
      setVisibleNum(5);
    }
  };

  return (
    <Section variant="light">
      <Container>
        <Box
          sx={{
            paddingBottom: {
              lg: '120px',
              md: '80px',
              sm: '60px',
            },
          }}>
          <SearchResultsInput inputData={inputData} handleChange={handleChange} onSubmit={onSubmit} />
          <SearchInfo resultsCount={searchResults.length} searchTitle={searchTitleVal} />
          {!!searchResults?.length && (
            <>
              <Stack
                component={'ul'}
                sx={{
                  rowGap: {
                    lg: '44px',
                    md: '32px',
                    sm: '24px',
                  },
                }}>
                {searchResults.slice(0, visibleNum).map((data, index) => {
                  return <SearchListItem key={index} {...data} />;
                })}
              </Stack>
              {visibleNum < searchResults.length && <ShowMoreBtn onClick={changeVisibleNum} />}
            </>
          )}
        </Box>
      </Container>
    </Section>
  );
};

export default Search;
