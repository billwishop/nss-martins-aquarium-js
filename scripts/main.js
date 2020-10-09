console.log("Welcome to the main module")

import { mostHolyFish, useFish } from './fish/FishDataProvider.js'
import { FishList } from './fish/FishList.js'
import { usePlaces } from './locations/LocationDataProvider.js'
import { LocationsList } from './locations/LocationList.js'
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


const allTheLocations = usePlaces()

for (const place of allTheLocations) {
    console.log(place)
}

LocationsList()

mostHolyFish()