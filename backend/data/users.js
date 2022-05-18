import bcrypt from 'bcryptjs'

const users=[
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'Manju',
        email: 'Manju@example.com',
        password: bcrypt.hashSync('123456',10)
    },
    {
        name: 'Ajay',
        email: 'Ajay@example.com',
        password: bcrypt.hashSync('123456',10)
    }
]

export default users