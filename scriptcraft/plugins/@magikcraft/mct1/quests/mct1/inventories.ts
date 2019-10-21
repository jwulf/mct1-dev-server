import { Journals } from './journals'
import * as items from 'items'

export const Inventories = {
    prologue: [
        items.legacyWoodSword(1),
        items.cookedChicken(1),
        items.bakedPotato(1),
        items.apple(1),
        items.cookie(2),
        items.pumpkinPie(1),
        items.emerald(1),
    ],
    jail: [],
    sunken: [items.cookedChicken(10), Journals.jail1, Journals.jail2],
    magmarun: [
        items.ironSword(1),
        items.shield(1),
        items.cookedChicken(2),
        items.legacyCookedFish(1),
        items.bakedPotato(2),
        items.bread(2),
        items.apple(5),
        items.cookie(5),
        items.carrot(3),
        Journals.jail1,
        Journals.jail2,
        Journals.sunken,
    ],
    magmaboss: [
        items.ironSword(1),
        items.shield(1),
        items.cookedChicken(5),
        items.legacyCookedFish(5),
        items.bakedPotato(5),
        items.bread(10),
        items.apple(5),
        items.cookie(5),
        items.carrot(3),
        Journals.jail1,
        Journals.jail2,
        Journals.sunken,
        Journals.magmarun,
    ],
    breakout: [
        items.ironSword(1),
        items.shield(1),
        items.cookedChicken(10),
        items.legacyCookedFish(10),
        items.bakedPotato(10),
        items.bread(10),
        items.apple(10),
        items.cookie(10),
        items.carrot(10),
        Journals.jail1,
        Journals.jail2,
        Journals.sunken,
        Journals.magmarun,
        Journals.magmaboss,
    ],
    village: [
        items.ironSword(1),
        items.shield(1),
        items.cookedChicken(10),
        items.legacyCookedFish(10),
        items.bakedPotato(10),
        items.bread(10),
        items.apple(10),
        items.cookie(10),
        items.carrot(10),
        Journals.jail1,
        Journals.jail2,
        Journals.sunken,
        Journals.magmarun,
        Journals.magmaboss,
    ],
    breakout2: [
        items.ironSword(1),
        items.shield(1),
        items.cookedChicken(10),
        items.legacyCookedFish(10),
        items.bakedPotato(10),
        items.bread(10),
        items.apple(10),
        items.cookie(10),
        items.carrot(10),
        Journals.jail1,
        Journals.jail2,
        Journals.sunken,
        Journals.magmarun,
        Journals.magmaboss,
    ],
}
