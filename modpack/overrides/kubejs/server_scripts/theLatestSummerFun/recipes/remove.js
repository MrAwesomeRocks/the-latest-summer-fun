// priority: 0
/*
 * Recipe removal
 *
 * Template: `event.remove({FILTER});`
 * Example: `event.remove({output: '#minecraft:wool'})` - remove all wool recipes
 *
 ** See L11 of https://mods.latvian.dev/books/kubejs/page/recipeeventjs for more details.
 */
onEvent("recipes", (event) => {
  //! Remove dynamo fuels
  const removeDynamo = [
    // New ruby fuel
    {
      item: "thermal:ruby",
      dynamos: ["lapidary"],
    },
  ];
  for (let entry of removeDynamo) {
    for (let dynamo of entry.dynamos) {
      event.remove({ ingredient: entry.item, type: `thermal:${dynamo}_fuel` });
    }
  }

  //! Remove for new recipe - removes ALL crafting recipes
  const removeForRecipe = [
    // Sands
    "byg:pink_sand",
    "byg:purple_sand",
    "byg:blue_sand",

    // Chunk Loaders
    "chickenchunks:spot_loader",
    "chickenchunks:chunk_loader",

    // Click machine
    "clickmachine:auto_clicker",

    // Mechworks
    "tmechworks:firestarter",
    "tmechworks:drawbridge",
    "tmechworks:upgrade_blank",
    "tmechworks:upgrade_speed",
    "tmechworks:upgrade_drawbridge_distance",
    "tmechworks:upgrade_drawbridge_advanced",

    // Moonstone
    "druidcraft:moonstone_helmet",
    "druidcraft:moonstone_chestplate",
    "druidcraft:moonstone_leggings",
    "druidcraft:moonstone_boots",
    "druidcraft:moonstone_sword",
    "druidcraft:moonstone_shovel",
    "druidcraft:moonstone_pickaxe",
    "druidcraft:moonstone_axe",
    "druidcraft:moonstone_hoe",
    "druidcraft:moonstone_sickle",

    // Vanilla Jetpacks
    /simplyjetpacks:(thruster|jetpack)_vanilla[1-4]{1}/,

    // Refined pipes
    /refinedpipes:.*_extractor_attachment/,
    "refinedpipes:basic_energy_pipe",
    "refinedpipes:improved_energy_pipe",
    "refinedpipes:advanced_energy_pipe",
    "refinedpipes:advanced_item_pipe",
    "refinedpipes:advanced_fluid_pipe",

    // Blueberries
    "byg:blueberry_pie",
    "druidcraft:blueberry_muffin",

    // Chisels and bits stuff
    "chiselsandbits:bitsaw_netherite",
    "chiselsandbits:chisel_netherite",
  ];
  for (let item of removeForRecipe) {
    event.remove({ output: item });
  }

  //! Remove by ID
  // New concrete
  event.remove({ id: "immersiveengineering:crafting/concrete2" });

  //! Completely remove items
  const completelyRemove = [
    // Iron Jetpacks
    "ironjetpacks:strap",
    "ironjetpacks:basic_coil",
    "ironjetpacks:advanced_coil",
    "ironjetpacks:elite_coil",
    "ironjetpacks:ultimate_coil",

    // Calemi's Utilities
    "calemiutils:book_stand",
    "calemiutils:blueprint_filler",
    "calemiutils:link_book_location",
    /calemiutils:sledgehammer_.*/,
  ];
  for (let item of completelyRemove) {
    event.remove({ output: item });
    event.remove({ input: item });
  }
});
