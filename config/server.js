module.exports = ({ env }) => ({
  url:env('https://afri-new-e8b16c3eb9ad.herokuapp.com'),
  app: {
    keys: env.array('APP_KEYS', ['u5nc0k8SAJz5PawBHbbnuQ==,/tw6SSrddb3WwqxWB9tdhg==,q815jXzq8W5QgqxV5gzxGw==,URYGYEgjr3chdo1Jv5yijQ==']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
