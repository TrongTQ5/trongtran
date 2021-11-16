// Random function
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// Create prototype
const Person = function (fullName, age, email, gender, height, weight) {
  this.fullName = fullName
  this.age = age
  this.email = email
  this.gender = gender
  this.height = height
  this.weight = weight
  this.calculateBMI = () => {
    return this.weight / Math.pow(this.height, 2)
  }
  this.guessHealth = () => {
    let BMI = this.calculateBMI().toFixed(1)

    if (BMI < 18.5) {
      return "Underweight"
    }
    if (18.5 <= BMI <= 24.9) {
      return "Normal weight"
    }
    if (25 <= BMI <= 29.9) {
      return "Overweight"
    }
    return "Obesity"
  }
}

// Data arrays
const dataArray = []
const limit = 10
const names = ['trong','ly','mai','my','hoang','gia','long','sang','hậu','quang']
const ages = [23, 34, 56, 67, 78, 12, 23, 43, 65, 22]
const emails = ["x@gmail.com", "sangx@gmail.com", "quyx@gmail.com", "trax@gmail.com"]
const genders = ["male","femele","other"]
const heights = [1.44, 1.54, 1.78, 1.23, 1.98, 1.4, 1.56]
const weights = [32, 15, 45, 87, 54, 45, 65]

for (let count = 0; count < limit; count++) {
  const person = new Person(
    names[randomInt(0, 9)],
    ages[randomInt(0, 4)],
    emails[randomInt(0, 2)],
    genders[randomInt(0, 2)],
    heights[randomInt(0, 4)],
    weights[randomInt(0, 3)]
  )
  dataArray.push(person)
}

console.log(dataArray)


const addProperty = dataArray.map((obj) => {
  obj.BMI = obj.calculateBMI().toFixed(1)
  obj.healthStt = obj.guessHealth()

  return obj
})
