interface APIResult {
  code: number;
  message: string;
  tweet: Tweet;
}

interface Tweet {
  url: string;
  id: string;
  text: string;
  author: Author;
  replies: number;
  retweets: number;
  likes: number;
  created_at: string;
  created_timestamp: number;
  possibly_sensitive: boolean;
  views: number;
  is_note_tweet: boolean;
  lang: string;
  replying_to: any;
  replying_to_status: any;
  media: Media;
  twitter_card: string;
  color: any;
}

interface Author {
  id: string;
  name: string;
  screen_name: string;
  avatar_url: string;
  banner_url: string;
  description: string;
  location: string;
  url: string;
  followers: number;
  following: number;
  joined: string;
  likes: number;
  website: Website;
  tweets: number;
  avatar_color: any;
}

interface Website {
  url: string;
  display_url: string;
}

interface Media {
  all: All[];
  photos: Photo[];
  mosaic: Mosaic;
}

interface All {
  type: string;
  url: string;
  width: number;
  height: number;
  altText: string;
  duration: number;
  thumbnail_url: string;
}

interface Photo {
  type: string;
  url: string;
  width: number;
  height: number;
  altText: string;
}

interface Mosaic {
  type: string;
  formats: Formats;
}

interface Formats {
  jpeg: string;
  webp: string;
}
