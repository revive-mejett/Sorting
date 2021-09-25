'use strict'



document.addEventListener("DOMContentLoaded", setup) 


//chart characteristics constants
const chartHeight = 700
const chartWidth = 1200
const size = 100;
let listItemElementArray = []

function setup() {


    


 
    let numberList = document.querySelector(".numbers")

    numberList.style.height = `${chartHeight}px`
    numberList.style.width = `${chartWidth}px`

    let listItemBlueprint = document.createElement("li")
    listItemBlueprint.setAttribute("class", "array-flex-item")

    

    for (let i = 0; i < size; i++) {

        const allowableItemMaxHeight = chartHeight * 0.9
        const allowableItemMaxWidth = chartWidth*0.9
        let newListItem = listItemBlueprint.cloneNode()
        newListItem.setAttribute("id", `n${i}`)
        newListItem.textContent = i
        newListItem.style.width = `${(allowableItemMaxWidth) / size}px`
        newListItem.style.height =  `${(i+1)/(size+1) * allowableItemMaxHeight}px`;
        listItemElementArray[i] = newListItem
        // numberList.appendChild(newListItem)

    }


    appendItemsToChart(listItemElementArray)
    shuffleChart(listItemElementArray)


    

}

function getValuesInChart() {
    const numberList = document.querySelector(".numbers")
    let allItems = numberList.querySelectorAll(".array-flex-item")

}


function randItemNumber() {
    let randomId = Math.floor(Math.random()*size)
    return randomId
}

function clearChart() {
    const numberList = document.querySelector(".numbers")
    numberList.textContent = undefined
}

function appendItemsToChart(itemArray) {
    const numberList = document.querySelector(".numbers")
    console.log("trying to append items!")

    for (let i = 0; i < itemArray.length; i++) {
        numberList.appendChild(itemArray[i])
    }
}

function updateChart(listItemElementArray) {
    clearChart()
    appendItemsToChart(listItemElementArray)
}

function shuffleChart(itemArray) {
    console.log("shuffle chart!")
    for (let i = 0; i < itemArray.length*2; i++) {
        swapValues(itemArray, randItemNumber(), randItemNumber())
    }
    updateChart(itemArray)
}


function swapValues(itemArray, pos1, pos2) {
    let temp = itemArray[pos1]
    itemArray[pos1] = itemArray[pos2]
    itemArray[pos2] = temp
}