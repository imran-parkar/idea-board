import styles from './SortIdeas.module.css';
import { Dispatch, SetStateAction } from 'react';

type SortIdeasProps = {
  setSortOrder: Dispatch<SetStateAction<'lastUpdated' | 'alphabetical'>>;
};

export default function SortIdeas({ setSortOrder }: SortIdeasProps) {
  function handleSortIdeasChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSortOrder(event.target.value as 'lastUpdated' | 'alphabetical');
  }

  return (
    <div className={styles.sortIdeasWrapper}>
      <span className={styles.sortText}>Sort ideas by:</span>
      <select name='' id='' onChange={handleSortIdeasChange}>
        <option value='lastUpdated' defaultChecked>
          Last updated
        </option>
        <option value='alphabetical'>Alphabetically</option>
      </select>
    </div>
  );
}
