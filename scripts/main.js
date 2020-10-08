console.log("Welcome to the main module")

import { useFish } from './fish/FishDataProvider.js'
import { FishList } from './fish/FishList.js'
import { useTips } from './tips/TipDataProvider.js'
import { TipList } from './tips/TipList.js'

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

FishList()



const allTheTips = useTips()

for (const tip of allTheTips) {
    console.log(tip)
}

TipList()