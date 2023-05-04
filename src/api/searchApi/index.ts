import instance from '../axios';

const getSearchList = async (search: string) => {
  const searchList: [] = await instance.get(`?name=${search}`);
  console.log('searchList', searchList);
  return searchList;
};

export default getSearchList;
