import React from 'react'
import Template from '../components/Template'
import food2 from '../assets/food2.png'

const SignUp = ({setisloggedIn}) => {
  return (
    <div>
      <Template
        title = "Deliciously Yours: Explore, Cook, Enjoy - Culinary Adventures Await"
        desc1 = "Embark on a culinary journey, discover delectable recipes, and savor the joy of cooking and sharing flavorsome meals."
        desc2 = "Join our community, explore a world of delightful recipes, and indulge your taste buds in a gastronomic adventure!"
        image={food2}
        fromtype="SignUp"
        setisloggedIn={setisloggedIn}
      />

    </div>
  )
}

export default SignUp