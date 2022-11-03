import { useState } from 'react';
import { NextPage } from 'next';
import { DebounceInput } from 'react-debounce-input';
import { MagnifyingGlass } from 'phosphor-react';
import useSWR from 'swr';

import tmdbAPI from 'lib/tmdbAPI';

import Page from 'components/Page';
import { TextInput } from 'components/TextInput';
import Heading from 'components/Heading';
import { Text } from 'components/Text';
import { MovieList } from 'components/MovieList';

const SearchPage: NextPage = () => {
  const [inputValue, setInputValue] = useState('');

  const { data, isValidating } = useSWR(inputValue, tmdbAPI.search);

  return (
    <Page title="Search" description="Find you next movie to watch" path="/search">
      <DebounceInput
        autoFocus
        minLength={2}
        debounceTimeout={500}
        onChange={(e) => setInputValue(e.target.value.trimStart())}
        placeholder="Search movies by title, genrer..."
        element={(props) => <TextInput {...props} icon={<MagnifyingGlass />} autoFocus />}
      />

      <header className="flex flex-col gap-4">
        <Heading>All movies</Heading>

        <Text asChild size="sm" className="w-full md:max-w-xl text-gray-300">
          <p>
            Scary, funny, dramatic, romantic... Nothing like a movie to stir our emotions! There is no shortage of
            titles and experiences waiting for you.
          </p>
        </Text>
      </header>

      {isValidating && <Text className="text-gray-300">Loading...</Text>}

      {data && <MovieList movies={data} />}
    </Page>
  );
};

export default SearchPage;
