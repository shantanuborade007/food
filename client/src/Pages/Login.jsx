import React from 'react'
import Template from '../components/Template'
import food1 from '../assets/food1.png'

const Login = ({setisloggedIn}) => {
  return (
    

      <Template
      title="Welcome Back !" 
      desc1 = "Savor. Create. Delight."
      desc2 = "Welcome to Taste Haven, the online kitchen where food enthusiasts and chefs unite to share and explore delicious recipes."

      image={food1}
      formType="Login"
      setisloggedIn={setisloggedIn}
      >
      </Template>
    
  )
}

export default Login