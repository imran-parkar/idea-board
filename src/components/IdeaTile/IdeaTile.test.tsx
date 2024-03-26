// import { it, expect, describe } from 'vitest';
// import { render, fireEvent, screen } from '@testing-library/react';
// import IdeaTile, { IdeaTileProps } from './IdeaTile';
// import '@testing-library/jest-dom/vitest';

// const mockIdea = {
//   id: '1',
//   title: 'Test Idea',
//   description: 'This is a test idea.',
//   creationDate: new Date().toISOString(),
//   lastUpdated: new Date().toISOString(),
// };

// describe('IdeaTile', () => {
//   render(<IdeaTile />);

//   it('should show description error when character count exceeds 140 characters', () => {
//     const descriptionField = screen.getAllByRole('textbox')[1];

//     fireEvent.change(descriptionField, {
//       target: {
//         value:
//           'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque a repudiandae, cum id doloribus ad totam quisquam ipsum sequi quidem ex sed hic voluptas perferendis?',
//       },
//     });

//     expect(
//       screen.queryByText('140 characters limit exceeded for description')
//     ).toBeInTheDocument();
//   });
// });
