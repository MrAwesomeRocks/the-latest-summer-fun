// Whether or not to unify items in inventory
global["INVENTORY_UNIFY"] = true
// Whether or not to unify items in world
global["ITEM_UNIFY"] = true
// Whether or not to unify recipes
global["RECIPE_UNIFY"] = true
// Whether or not to hide not-first materials in jei (requires secondary script)
global["HIDE_UNIFIED_ITEMS"] = true
// Whether or not to disable non-priority ore-gen
global["UNIFY_ORE_GEN"] = true

// Mod priorities
global["unifypriorities"] = [
    "minecraft",
    "emendatusenigmatica",
    "mekanism",
    "thermal",
    "silents_mechanisms",
    "silentgems",
    "chemlib"
]

// Add oredictionary tags here to unify (or use javascript to generate it!)
var tags = []
// Block tags for ore gen unification (an equal item tag is required for this to work, which is the case with ores normally)
/*var btags = [
    "forge:ores/copper",
    "forge:ores/tin",
    "forge:ores/aluminum",
    "forge:ores/lead",
    "forge:ores/silver",
    "forge:ores/nickel",
    "forge:ores/platinum",
    "forge:ores/uranium",
    "forge:ores/iridium",
    "forge:ores/zinc",
    "forge:ores/osmium",
    "forge:ores/sulfur",
]*/

// Easier way to add multiple tags (feel free to add empty extra tags, this will ignore them)
// Adding every possible tag SHOULD work
var tagGen = [
    /*
     * -----VANILLA-----
     */
    "coal=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    "iron=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    "gold=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    "diamond=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    "emerald=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    "lapis_lazuli=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    "nether_quartz=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",

    /*
     * -----MODDED METALS-----
     */
    // Copper
    "copper=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    // Aluminum / Aluminium / Bauxite
    "aluminum=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    "aluminium=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    "bauxite=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    // Silver
    "silver=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    // Lead
    "lead=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    // Nickel
    "nickel=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    // Uranium / Yellorium
    "uranium=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    "yellorium=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    // Osmium
    "osmium=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    // Tin
    "tin=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    // Zinc
    "zinc=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    // Cobalt
    "cobalt=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    // Platinum
    "platinum=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    // Iridium
    "iridium=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",

    /*
     * -----AE2 GEMS-----
     */
    "certus_quartz=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    "charged_certus_quartz=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    "fluix=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",

    /*
     * -----MODDED GEMS-----
     */
    // Fluorite
    "fluorite=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    // Bitumen
    "bitumen=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    // Cinnabar
    "cinnabar=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    // Apatite
    "apatite=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    // Sulfur
    "sulfur=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    // Potassium nitrate / Niter / Saltpeter
    "potassium_nitrate=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    "niter=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    "saltpeter=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    // Mana gem / Arcane
    "mana=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",

    /*
     * -----MODDED ALLOYS-----
     */
    // Bronze
    "bronze=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    // Brass
    "brass=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    // Electrum
    "electrum=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    // Constantan
    "constantan=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    // Steel
    "steel=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    // Invar
    "invar=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    // Lumium
    "lumium=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    // Signalum
    "signalum=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    // Enderium
    "enderium=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",

    /*
     * -----OTHER/MISC-----
     */
    // Silicon
    "silicon=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    // Coal coke
    "coke=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    "coal_coke=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    // Charcoal
    "charcoal=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
]
for (let line of tagGen) {
    let data = line.split("=")
    for (let type of data[1].split(",")) {
        tags.push("forge:" + type + "/" + data[0])
    }
}

// Replace input and output of recipes (and iterate over tags!)
onEvent("recipes", event => {
    // Iterate over tags (they should be loaded)
    var tagitems = new Map()
    tagLoop:
    for (let tag of tags) {
        let ingr = Ingredient.of("#"+tag)
        if (ingr) {
            let stacks = ingr.getStacks().toArray()
            for (let mod of global["unifypriorities"]) {
                for (let stack of stacks) {
                    if (stack.getMod() == mod) {
                        tagitems[tag] = stack.getId()
                        continue tagLoop
                    }
                }
            }
            if (stacks.length > 0) tagitems[tag] = stacks[0].getId()
        }
    }
    // Update tags
    global["unifytags"] = tags
    global["tagitems"] = tagitems

    // Unify the rest
    if (global["RECIPE_UNIFY"]) {
        for (let tag of global["unifytags"]) {
            let ingr = Ingredient.of("#"+tag)
            if (ingr) {
                let stacks = ingr.getStacks().toArray()
                let oItem = global["tagitems"][tag]
                for (let tItem of stacks) {
                    event.replaceInput({}, tItem.getId(), "#"+tag)
                    event.replaceOutput({}, tItem.getId(), oItem)
                }
            }
        }
    }
})

// Handle inventory change (to check for unification)
// Unfortunately it gets called twice due to setting the inventory.
onEvent("player.inventory.changed", event => {
    if (global["INVENTORY_UNIFY"] && event.getEntity().getOpenInventory().getClass().getName() == "net.minecraft.inventory.container.PlayerContainer") {
        // Get held item
        var heldItem = event.getItem()

        // Check for every tag in the list
        for (let tag of global["unifytags"]) {
            let ingr = Ingredient.of("#"+tag)
            if (ingr.test(heldItem)) {
                // If item is in tag, determine if it needs to be changed
                let tItem = global["tagitems"][tag]
                if (tItem != heldItem.getId()) {
                    // Fix slot number
                    let slot = event.getSlot()
                    if (slot <= 5) slot += 36
                    else if (slot == 45) slot = 40
                    else if (slot >= 36) slot -= 36
                    // Update item
                    event.getEntity().inventory.set(slot, Item.of(tItem, heldItem.getCount()))
                }
                break
            }
        }
    }
})

// Items on ground
onEvent("entity.spawned", event => {
    if (global["ITEM_UNIFY"]) {
        var entity = event.getEntity()
        if (entity.getType() == "minecraft:item") {
            var gItem = entity.getItem()
            // Check for every tag in the list
            for (let tag of global["unifytags"]) {
                let ingr = Ingredient.of("#"+tag)
                if (ingr && ingr.test(gItem)) {
                    // If item is in tag, determine if it needs to be changed
                    let tItem = global["tagitems"][tag]
                    if (tItem != gItem.getId()) {
                        entity.setItem(Item.of(tItem, gItem.getCount()))
                    }
                    break
                }
            }
        }
    }
})