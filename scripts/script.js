'use strict'



document.addEventListener("DOMContentLoaded", setup) 



function setup() {


    //array size constant
    const chartHeight = 600
    const chartWidth = 1200
    const size = 50;
    let numbers = [1,2,3,4,5,6,7,8,9]

    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i])
    }

    let numberList = document.querySelector(".numbers")
    console.log(numberList)

    numberList.style.height = `${chartHeight}px`
    numberList.style.width = `${chartWidth}px`

    let listItemBlueprint = document.createElement("li")
    listItemBlueprint.setAttribute("class", "array-flex-item")


    

    for (let i = 0; i < size; i++) {
        let newListItem = listItemBlueprint.cloneNode()
        numberList.appendChild(newListItem)
        newListItem.setAttribute("id", `n${i}`)
        newListItem.textContent = i
        console.log(newListItem.getAttribute("id"))
        newListItem.style.width = `${(chartWidth-100)/size}px`
    }

}