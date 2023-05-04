import { RecentSearchProps } from '../../@types';
import RecentSearchContainer from './style';

const RecentSearch = ({ className, children }: RecentSearchProps) => {
  return <RecentSearchContainer className={className}>{children}</RecentSearchContainer>;
};

export default RecentSearch;
