import { MailResponse } from 'my-lib';

export default [
  {
    from: {
      name: 'Now TV',
      email: 'nowtv@test.com'
    },
    time: '2020-05-09T19:55:53.922Z',
    subject: 'Grab another Pass, you need to be watching this...',
    body: 'Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright.'
  },
  {
    from: {
      name: 'Investopedia Terms',
      email: 'investopedia@test.com'
    },
    time: '2020-04-09T19:55:53.922Z',
    subject: 'What is \'Fibonanci Retracement\'?',
    body: 'Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher).'
  },
  {
    from: {
      name: 'ASICS Greater Manchester Marathon ',
      email: 'events@human-race.co.uk'
    },
    time: '2020-03-09T19:55:53.922Z',
    subject: 'Your chance to take on the marathon',
    body: 'Do you feel inspired to take on one of Europe\'s most highly regarded and popular marathons?'
  },
  {
    from: {
      name: 'ClassDojo',
      email: 'no-reply@classdojo.com'
    },
    time: '2020-02-09T19:55:53.922Z',
    subject: 'Mr Caines shared 4 new photo!',
    body: 'Mr Caines shared 4 new photo!\nView now Cheers, Sent with love.'
  },
  {
    from: {
      name: 'Twitter',
      email: 'no-reply@twitter.com'
    },
    time: '2019-10-09T19:55:53.922Z',
    subject: 'Follow Sock, Manchester United and ThaiPBS',
    body: 'Manchester United, ThaiPBS also Tweeted.'
  }
] as MailResponse[];
