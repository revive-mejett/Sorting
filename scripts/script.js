'use strict'



document.addEventListener("DOMContentLoaded", setup) 


//chart characteristics constants
const chartHeight = 600
const chartWidth = 1200
const size = 15;

function setup() {


    
    let numbers = [1,2,3,4,5,6,7,8,9]

 
    let numberList = document.querySelector(".numbers")
    console.log(numberList)

    numberList.style.height = `${chartHeight}px`
    numberList.style.width = `${chartWidth}px`

    let listItemBlueprint = document.createElement("li")
    listItemBlueprint.setAttribute("class", "array-flex-item")


    

    for (let i = 0; i < size; i++) {

        const allowableItemMaxHeight = chartHeight * 0.9
        const allowableItemMaxWidth = chartWidth*0.9
        let newListItem = listItemBlueprint.cloneNode()
        numberList.appendChild(newListItem)
        newListItem.setAttribute("id", `n${i}`)
        newListItem.textContent = i
        console.log(newListItem.getAttribute("id"))
        newListItem.style.width = `${(allowableItemMaxWidth) / size}px`
        newListItem.style.height =  `${(i+1)/(size+1) * allowableItemMaxHeight}px`;
    }

    // for (let i = 0; i < numbers.length; i++) {
    //     console.log(numbers[i])
    // }
    getValuesInChart()

    setTimeout(() => {
        
    }, timeout);

}

function getValuesInChart() {
    const numberList = document.querySelector(".numbers")
    let allItems = numberList.querySelectorAll(".array-flex-item")


    console.log(randItemNumber())
}

function randItemNumber() {
    let randomId = Math.floor(Math.random()*size)
    return randomId
}