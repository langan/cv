import { render } from '@testing-library/react';

describe('Page', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<div />);
        expect(baseElement).toBeTruthy();
    });
});
