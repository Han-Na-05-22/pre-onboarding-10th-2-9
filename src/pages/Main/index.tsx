// eslint-disable-next-line import/no-extraneous-dependencies
import SVG from 'react-inlinesvg';
import { useState } from 'react';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import { MainContainer, SearchForm } from './style';
import RecentSearch from '../../components/RecentSearch';
import getSearchList from '../../api/searchApi';

const Main = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const [mouseOffset, setMouseOffset] = useState<number | undefined>(undefined);

  const [searchData, setSearchData] = useState<string>('');

  const isSearchActive: boolean =
    mouseOffset !== undefined && mouseOffset >= 0 && mouseOffset <= 500;

  const getSearchDataList = async (e: any) => {
    e.preventDefault();
    await getSearchList(searchData).then((res: any) => {
      console.log('res', res);
    });
  };

  return (
    <MainContainer
      onClick={async (e) => {
        setMouseOffset(e.nativeEvent.offsetX);
      }}
    >
      <SearchForm
        onSubmit={getSearchDataList}
        onClick={() => {
          setIsClicked(true);
        }}
      >
        <TextInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchData(e.target.value);
          }}
          name="search"
          value={searchData}
        />

        <Button
          disabled={false}
          onClick={() => {
            console.log('');
          }}
        >
          <SVG src="/svg/search.svg" />
        </Button>
      </SearchForm>
      {isClicked && isSearchActive && (
        <RecentSearch>
          <div className="top-box">
            <strong>최근 검색어</strong>
            <p>최근 검색어가 없습니다.</p>
          </div>
          <div className="bottom-box">
            <strong>추천 검색어로 검색해보세요</strong>
            <ul>
              <li>
                <span>B형간염</span>
              </li>
              <li>
                <span>비만</span>
              </li>
              <li>
                <span>관절염</span>
              </li>
              <li>
                <span>우울증</span>
              </li>
              <li>
                <span>식도염</span>
              </li>
            </ul>
          </div>
        </RecentSearch>
      )}
    </MainContainer>
  );
};

export default Main;
