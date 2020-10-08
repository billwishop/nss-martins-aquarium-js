console.log("Welcome to the main module")

import { useFish } from './fish/FishDataProvider.js'
import { FishList } from './fish/FishList.js'
import { TipList } from './tips/TipList.js'

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

FishList()
TipList()