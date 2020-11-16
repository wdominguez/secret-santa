// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const names = []

export default (req, res) => {
  // console.log('name:  ', req.body.name)
  names.push(req.body.name)
  // if(name.length 
  console.log(names)
  res.status(200).json({ names: names })
}
