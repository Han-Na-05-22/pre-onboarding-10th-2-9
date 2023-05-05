export const getSearchList = async (search: string) => {
  const response = await fetch(`/api/v1/search-conditions/?name=${search}`).then((res) => {
    return res;
  });

  const data = response?.json();
  return data;
};

export default getSearchList;
