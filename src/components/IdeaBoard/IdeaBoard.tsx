import styles from './IdeaBoard.module.css';
import IdeaTile from '../IdeaTile/IdeaTile';
import SortIdeas from '../SortIdeas/SortIdeas';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Idea } from '../../types/index.ts';

export default function IdeaBoard() {
  const [ideas, setIdeas] = useState<Idea[]>(() =>
    JSON.parse(localStorage.getItem('ideas') || '[]')
  );
  const [sortOrder, setSortOrder] = useState<'alphabetical' | 'lastUpdated'>(
    'lastUpdated'
  );

  useEffect(() => {
    localStorage.setItem('ideas', JSON.stringify(ideas));
  }, [ideas]);

  const sortedIdeas = ideas.sort((a, b) => {
    if (sortOrder === 'alphabetical') {
      return a.title.localeCompare(b.title);
    } else if (sortOrder === 'lastUpdated') {
      return (
        new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
      );
    }
    return 0;
  });

  function handleAddIdea() {
    const newIdea: Idea = {
      id: uuidv4(),
      title: '',
      description: '',
      creationDate: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
    };

    setIdeas((prevIdeas) => [...prevIdeas, newIdea]);
  }

  function handleUpdateIdea(updatedIdea: Idea) {
    setIdeas((prevIdeas) =>
      prevIdeas.map((idea) =>
        idea.id === updatedIdea.id
          ? {
              ...idea,
              title: updatedIdea.title,
              description: updatedIdea.description,
              lastUpdated: updatedIdea.lastUpdated,
            }
          : idea
      )
    );
  }

  function handleDeleteIdea(id: string) {
    setIdeas((prevIdeas) => prevIdeas.filter((idea) => idea.id !== id));
  }

  return (
    <>
      <h1>Idea Board</h1>
      <SortIdeas setSortOrder={setSortOrder} />
      <div className={styles.board}>
        {sortedIdeas.map((idea) => (
          <IdeaTile
            key={idea.id}
            idea={idea}
            deleteIdea={handleDeleteIdea}
            updateIdea={handleUpdateIdea}
          />
        ))}

        <button className={styles.addIdeaButton} onClick={handleAddIdea}>
          Add new idea
        </button>
      </div>
    </>
  );
}
