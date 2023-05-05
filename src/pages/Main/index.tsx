/* eslint-disable no-useless-return */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-expressions */

import SVG from 'react-inlinesvg';
import { useCallback, useEffect, useState } from 'react';
import { useCachingDataContext } from 'App';
import recommendBadgeData from '../../utils/data';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import { MainContainer, SearchForm } from './style';
import RecentSearch from '../../components/RecentSearch';
import getSearchList from '../../api/searchApi';

// todo : 타입 any 수정, 키보드 이벤트 추가, 레이아웃 일부 수정 및 리스트 코드들 더 간단하게 변경하기

const Main = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const [searchDataList, setSearchDataList] = useState<any[]>([]);

  const [recommendList, setRecommendList] = useState<any[]>([]);

  const [mouseOffset, setMouseOffset] = useState<number | undefined>(undefined);

  const [searchData, setSearchData] = useState<string>('');

  const { searchDataCaching, setSearchDataCaching } = useCachingDataContext();

  const isSearchActive: boolean =
    mouseOffset !== undefined && mouseOffset >= 0 && mouseOffset <= 500;

  const getSearchDataList = useCallback(
    async (type: string) => {
      if (searchData?.length === 0) {
        return;
      }

      await getSearchList(searchData).then((res: any) => {
        if (res?.length !== 0) {
          type === 'search' ? setSearchDataList(res) : setRecommendList(res);
        }
      });
    },
    [searchData],
  );

  useEffect(() => {
    if (searchDataList?.length !== 0 && searchData?.length !== 0) {
      if (
        searchDataCaching?.length === 0 ||
        searchDataCaching?.find((o: any) => {
          String(Object.keys(o)) !== searchData;
        })?.length !== 0
      ) {
        setSearchDataCaching([
          ...searchDataCaching,
          {
            [searchData]: searchDataList,
          },
        ]);
      }
    }
  }, [searchDataList]);

  useEffect(() => {
    getSearchDataList('recommend');
  }, [getSearchDataList, searchData]);

  return (
    <MainContainer
      onClick={async (e) => {
        setMouseOffset(e.nativeEvent.offsetX);
      }}
    >
      <SearchForm
        onSubmit={(e) => {
          e.preventDefault();
          if (
            searchDataCaching?.find((o: any) => {
              if (String(Object.keys(o)) === searchData) {
                return o;
              }
            }) === undefined
          ) {
            getSearchDataList('search');
            console.info('calling api');
          } else {
            return;
          }
        }}
        method="post"
      >
        <TextInput
          onClick={() => {
            setIsClicked(true);
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchData(e.target.value);
          }}
          name="search"
          value={searchData}
        />
        <SVG
          src="/svg/xmark.svg"
          className={searchData?.length === 0 ? 'xmark-btn' : 'xmark-btn active'}
          onClick={(e) => {
            setSearchData('');
          }}
        />
        <Button disabled={false}>
          <SVG src="/svg/search.svg" />
        </Button>
      </SearchForm>
      {isClicked && isSearchActive && (
        <RecentSearch>
          {recommendList?.length !== 0 && searchData?.length !== 0 ? (
            <>
              <div className="top-box recommend">
                <SVG src="/svg/search.svg" className="recommend-svg" />
                <strong className="my-search-data">{searchData}</strong>
              </div>
              <div className="bottom-box recommend">
                <strong>추천 검색어</strong>
                <ul className="data-list">
                  {recommendList?.length !== 0 &&
                    recommendList?.map(
                      (item: any, idx: number) =>
                        idx < 8 && (
                          <li key={item.id} onClick={() => setSearchData(item.name)}>
                            <SVG src="/svg/search.svg" className="recommend-svg" />
                            <span>{item.name}</span>
                          </li>
                        ),
                    )}
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="top-box">
                <strong>최근 검색어</strong>
                {searchDataCaching?.length === 0 ? (
                  <p>최근 검색어가 없습니다.</p>
                ) : (
                  <ul className="data-list">
                    {searchDataCaching?.map((o: any, idx: number) => (
                      <li>
                        <SVG src="/svg/search.svg" className="recommend-svg" />
                        <span>{Object.keys(o)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="bottom-box">
                <strong>추천 검색어로 검색해보세요</strong>
                <ul>
                  {recommendBadgeData?.map((i: any) => (
                    <li key={i.id} onClick={() => setSearchData(i?.name)}>
                      <span>{i.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </RecentSearch>
      )}
    </MainContainer>
  );
};

export default Main;
