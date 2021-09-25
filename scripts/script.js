'use strict'



document.addEventListener("DOMContentLoaded", setup) 


//chart characteristics constants
const chartHeight = 700
const chartWidth = 1200
const size = 5;
let listItemElementArray = []

function setup() {

    document.querySelector("#soundButton").addEventListener("click", playSound)

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
        newListItem.style.width = `${Math.floor((allowableItemMaxWidth) / size)}px`
        newListItem.style.height =  `${(i+1)/(size+1) * allowableItemMaxHeight}px`
        listItemElementArray[i] = newListItem
        listItemElementArray[i].style.backgroundColor = `hsl(${i / size * 360}, 100%, 50%)`
        // listItemElementArray[i].style.backgroundColor = `hsl(250, 100%, ${(i+1) / (size+1) * 100}%)`


    }


    appendItemsToChart()
    shuffleChart()

    console.log(checkIfSorted())

    setTimeout(() => {
        bogoSort()
    }, 2000);

    


}



function swapValues(pos1, pos2) {
    let temp = listItemElementArray[pos1]
    listItemElementArray[pos1] = listItemElementArray[pos2]
    listItemElementArray[pos2] = temp
}



function checkIfSorted() {


    for (let i = 0; i < listItemElementArray.length - 1; i++) {
        let leftNumber = toNum(listItemElementArray[i].getAttribute("id"))
        let rightNumber = toNum(listItemElementArray[i+1].getAttribute("id"))

        if (rightNumber < leftNumber) {
            return false
        }

    }

    return true
    
}

function toNum(str) {
    return parseInt(str.replace("n", ""))
}

//sorting////////////////////


function selectionSort() {

    console.log("selection sort!")

    for (let i = 0; i < listItemElementArray.length - 1; i++) {
        let lowestIndex = i


        //find min in next pass and swap it
        for (let j = i; j < listItemElementArray.length; j++) {

            let searchRowValue = toNum(listItemElementArray[j].getAttribute("id"))
            let valueOfLowestIndex = toNum(listItemElementArray[lowestIndex].getAttribute("id"))
            if (searchRowValue < valueOfLowestIndex) {
                lowestIndex = j
            }

        }
        swapValues(i, lowestIndex)
    }

    updateChart()
}


function bogoSort() {

    console.log("bogo sort!")
    


    let shuffleDelay = setInterval(() => {
        shuffleChart()
        updateChart()
        playSound()
        if (checkIfSorted()) {
            clearInterval(shuffleDelay)
            console.log("sorted! with bogosort")
        }
    }, 50)

    

}



//for testing purposes
function printNumbers() {


    for (let i of listItemElementArray) {
        console.log(toNum(i.getAttribute("id")))
    }
}



//chart manipulation


function randItemNumber() {
    let randomId = Math.floor(Math.random()*size)
    return randomId
}

function clearChart() {
    const numberList = document.querySelector(".numbers")
    numberList.textContent = undefined
}

function appendItemsToChart() {
    const numberList = document.querySelector(".numbers")

    for (let i = 0; i < listItemElementArray.length; i++) {
        numberList.appendChild(listItemElementArray[i])
    }
}

function updateChart() {
    clearChart()
    appendItemsToChart()
}

function shuffleChart() {
    console.log("shuffle chart!")
    for (let i = 0; i < listItemElementArray.length; i++) {
        swapValues(randItemNumber(), randItemNumber())
    }
    updateChart()
}


//audio
function playSound() {
    let audio = new Audio("audio/compBlip.mp3")
    audio.play()
}