const latex = require('node-latex')
const path = require('path')
const fs = require('fs')

const Route = use('Route')

Route.on('/').render('articles')

Route.get('/articles/:articleID', async ({ response, params }) => {
  const filePath = path.join(__dirname, 'articles', `${params.articleID}.tex`)
  const texFile = fs.createReadStream(filePath)
  const pdfStream = latex(texFile)
  response.implicitEnd = false
  response.header('Content-type', 'application/pdf')
  pdfStream.pipe(response.response)
})
