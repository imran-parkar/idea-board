import { it, expect, describe } from 'vitest';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import IdeaBoard from './IdeaBoard';
import '@testing-library/jest-dom/vitest';

describe('IdeaBoard', () => {
  render(<IdeaBoard />);

  it('should render IdeaBoard component', () => {
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Idea Board/i);
  });

  it('should add a new idea', () => {
    const addButton = screen.getByText('Add new idea');
    fireEvent.click(addButton);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('should update an idea', () => {
    const titleField = screen.getAllByRole('textbox')[0];
    fireEvent.change(titleField, { target: { value: 'Test title' } });
    expect(titleField).toHaveValue('Test title');
  });

  it('should delete an idea', async () => {
    const titleField = screen.getAllByRole('textbox')[0];
    const ideaDeleteButton = screen.getAllByText('Delete')[0];

    fireEvent.change(titleField, { target: { value: 'Test idea to delete' } });
    fireEvent.click(ideaDeleteButton);

    await waitFor(() => {
      expect(
        screen.queryByDisplayValue('Test idea to delete')
      ).not.toBeInTheDocument();
    });
  });

  // it('should order ideas alphabetically', async () => {
  //   const addButton = screen.getByText('Add new idea');
  //   fireEvent.click(addButton);
  //   const titleField = screen.getAllByRole('textbox')[0];
  //   fireEvent.change(titleField, { target: { value: 'First test title' } });

  //   fireEvent.click(addButton);
  //   const titleField2 = screen.getAllByRole('textbox')[3];
  //   fireEvent.change(titleField2, { target: { value: 'Another test title' } });

  //   const dropdown = screen.getByRole('combobox');
  //   fireEvent.change(dropdown, { target: { value: 'alphabetical' } });

  //   await waitFor(() => {
  //     const firstSortedIdeaTitleField = screen.getAllByRole('textbox')[0];
  //     expect(firstSortedIdeaTitleField).toHaveValue('Another test title');
  //   });
  // });
});
