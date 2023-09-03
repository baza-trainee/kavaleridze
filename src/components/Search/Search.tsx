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

  const [inputVal, setInputVal] = useState(search || '');
  const [searchResults, setSearchResults] = useState(() => {
    return searchContent(search) || [];
  });
  const [searchTitleVal, setSearchTitleVal] = useState(inputVal);

  function searchContent(patt: string): string[] {
    const pattern = new RegExp(patt, 'gim');
    const res = testData.filter((el) => pattern.test(el.text) || pattern.test(el.title));
    console.log(res);
    return res;
  }

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    setInputVal(e.target.value);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(inputVal, 'onSubmit');
    setSearchResults([]);
    setSearchTitleVal(inputVal);
    setSearchResults(searchContent(inputVal));
  };

  return (
    <Section variant="light">
      <Container>
        <Typography component={'p'} sx={{ fontSize: '0.875rem', py: '16px', mb: '55px' }}>
          there should be breadcrumbs
        </Typography>

        <SearchResultsInput inputVal={inputVal} handleChange={handleChange} onSubmit={onSubmit} />

        {/* search title */}
        <SearchInfo resultsCount={searchResults.length} searchTitle={searchTitleVal} />

        {/* search results */}

        <List disablePadding>
          {searchResults.map((data, index) => {
            return <SearchListItem key={index} {...data} />;
          })}
        </List>
        <ShowMoreBtn />
      </Container>
    </Section>
  );
};

export default Search;
