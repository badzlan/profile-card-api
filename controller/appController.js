const login = async (req, res) => {
   res.json("Login route")
}

const register = async (req, res) => {
   res.json("Register route")
}

const user = async (req, res) => {
   res.json("User route")
}

const edit = async (req, res) => {
   res.json("Edit route")
}

export { login, register, user, edit };