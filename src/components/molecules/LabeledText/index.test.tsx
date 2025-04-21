import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LabeledText from './index.tsx';

describe('LabeledText', () => {
    test('should render the header with the correct title and navigation links', () => {
        // arrange
        const mockText = 'Test Text';
        const mockLabel = 'Test Label';
        // act
        render(<LabeledText label={mockLabel} text={mockText} />);
        // assert
        expect(screen.getByText('Test Label')).toBeInTheDocument();
        expect(screen.getByText('Test Text')).toBeInTheDocument();
    })
})