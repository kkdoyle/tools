export default function handler(req, res) {
  res.send(`
  User-agent: *
  Disallow: /`); // Send your `robots.txt content here
}
