import { render, screen } from '@testing-library/react';

import ListOfUrls from './urlList';
import { Shortened } from './types';

describe('UrlList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListOfUrls urls={[]} />);
    expect(baseElement).toBeTruthy();
  });

  it('should contain the list of URLs provided', () => {
    const urls: Array<Shortened> = [
      { original: 'https://c4cneu.com', short: 'http://short.com/s/0' },
    ];

    render(<ListOfUrls urls={urls} />);
    expect(screen.getByText(urls[0].original, { exact: false })).toBeTruthy();
    expect(screen.getByText(urls[0].short, { exact: false })).toBeTruthy();
  });
});