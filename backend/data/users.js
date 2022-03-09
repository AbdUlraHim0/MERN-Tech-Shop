import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Hulk',
    email: 'Hulk@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Captain America',
    email: 'CaptainAmerica@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
