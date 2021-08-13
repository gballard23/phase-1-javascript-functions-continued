// Your code here
function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
 
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`

}

function wrapAdjective(grape = '*'){
    const innerFunction = function(apple = "special"){
        return `You are ${grape}${apple}${grape}!`
    }
    return innerFunction
}