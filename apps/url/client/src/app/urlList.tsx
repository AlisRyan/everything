import { Link, ListItem, UnorderedList } from '@chakra-ui/react';
import { Shortened } from './types';

type UrlListProps = {
  urls: Array<Shortened>;
};

type ShortUrl = {
  url: Shortened;
};

export const ListOfUrls: React.FC<UrlListProps> = ({ urls }) => {
  return (
    <UnorderedList id="urlList" textAlign="left">
      {urls.map((u) => (
        <ListUrl url={u} />
      ))}
    </UnorderedList>
  );
};

const ListUrl: React.FC<ShortUrl> = ({ url }) => {
  const urlPattern =
    /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  if (!!urlPattern.test(url.original)) {
    return <UrlList url={url} />;
  } else {
    return <StringList url={url} />;
  }
};

const StringList: React.FC<ShortUrl> = ({ url }) => {
  return (
    <ListItem>
      {url.original} is an invalid link. Please try again with the proper link
      format.
    </ListItem>
  );
};

const UrlList: React.FC<ShortUrl> = ({ url }) => {
  return (
    <UnorderedList id="urlList" textAlign="left">
      <ListItem>
        <Link href={url.short} color="teal.500">
          {url.short}
        </Link>{' '}
        - {url.original}
      </ListItem>
    </UnorderedList>
  );
};

export default ListOfUrls;
