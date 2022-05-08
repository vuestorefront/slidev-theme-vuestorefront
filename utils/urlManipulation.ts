const checkUrl = (url: string, base: string) =>
  url?.startsWith('http') || url?.startsWith('www') || url?.startsWith(base);

export const urlify = (url: string) => {
  return new URL(
    '',
    /^https?:\/\//.test(url) ? url : `https://${url}`,
  ).toString();
};

export const twitterUrl = (twitter: string) =>
  // eslint-disable-next-line no-nested-ternary
  twitter?.startsWith('@')
    ? `https://www.twitter.com/${twitter.slice(1)}`
    : checkUrl(twitter, 'twitter.com')
    ? twitter
    : `https://www.twitter.com/${twitter}`;

export const githubUrl = (twitter: string) =>
  // eslint-disable-next-line no-nested-ternary
  twitter?.startsWith('@')
    ? `https://www.github.com/${twitter.slice(1)}`
    : checkUrl(twitter, 'github.com')
    ? twitter
    : `https://www.github.com/${twitter}`;

export const linkedinUrl = (twitter: string) =>
  // eslint-disable-next-line no-nested-ternary
  twitter?.startsWith('@')
    ? `https://www.linkedin.com/in/${twitter.slice(1)}`
    : checkUrl(twitter, 'linkedin.com/in')
    ? twitter
    : `https://www.linkedin.com/in/${twitter}`;
