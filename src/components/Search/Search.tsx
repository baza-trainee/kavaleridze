import { Container, List, Stack, Typography } from '@mui/material';
import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Section from '../Section/Section';
import SearchListItem from './SearchListItem';
import SearchResultsInput from './SearchResultsInput';

import SearchInfo from './SearchInfo.js';
import ShowMoreBtn from './ShowMoreBtn.js';
import { testData } from './testData.js';

const Search: FC = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('request');
  const { palette } = useTheme();

  const [inputData, setInputData] = useState(search || '');
  const [searchResults, setSearchResults] = useState(() => {
    return searchContent(search) || [];
  });
  const [searchTitleVal, setSearchTitleVal] = useState(inputData);
  //number of visible results
  const [visibleNum, setVisibleNum] = useState(5);

  function searchContent(patt: string): string[] {
    const pattern = new RegExp(patt, 'gim');
    const res = testData.filter((el) => pattern.test(el.text) || pattern.test(el.title));
    return res;
  }

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    setInputData(e.target.value);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    if (inputData.length > 3) {
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
        <Typography component={'p'} sx={{ fontSize: '0.875rem', py: '20px' }}>
          there should be breadcrumbs
        </Typography>

        <SearchResultsInput inputData={inputData} handleChange={handleChange} onSubmit={onSubmit} />
        {/* search title */}
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
