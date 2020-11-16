// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const names = [];

export default (req, res) => {
  if (req.method === 'POST') {
    names.push(req.body.name);
    res.status(200).json({ names: names });
  } else {
    res.status(200).json({ names: names });
  }
};
