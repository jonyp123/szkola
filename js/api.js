const Pool = require('pg').Pool
const pool = new Pool({
  user: '36458026_schoolproject',
  host: 'serwer2220135.home.pl',
  database: 'user',
  password: 'JezusMaryjaNiebolicieszyja',
  port: 5432,
})

const loginNew = "test4";
const passwordNew = "test4";

createUser = () => {
  const { userLogin, userPassword } = request.body

  pool.query('INSERT INTO users (userLogin, userPassword) VALUES (loginNew, passwordNew) RETURNING *', [userLogin, userPassword], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User added`)
  })
}


//zakryc ten plik
