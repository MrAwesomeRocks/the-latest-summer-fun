// priority: 101
/*
 * New tooltips.
 *
 * Template: `tooltip.add(item[s], tooltip[s])`
 *
 * See https://mods.latvian.dev/books/kubejs/page/itemtooltipeventjs for more details.
 */
onEvent("item.tooltip", (tooltip) => {
  // Jetpacks
  tooltip.add(
    [
      "simplyjetpacks:unit_glowstone",
      "simplyjetpacks:unit_cryotheum",
      "simplyjetpacks:jetpack_te5",
      "simplyjetpacks:thruster_te5",
    ],
    "Temporary Crafting Recipe."
  );

  // Thermal rubies and sapphires
  tooltip.add(/thermal:ruby/, "I can't get it to show up in JEI. Consider this an easter-egg?");
  tooltip.add("thermal:ruby", "It seems flux-rich.");

  tooltip.add(/thermal:sapphire/, "I can't get it to show up in JEI. Consider this an easter-egg?");
  tooltip.add("thermal:sapphire", "It seems full of magical potential.");

  // IE Slag
  tooltip.add("immersiveengineering:slag", "Unobtainable and useless. Use Thermal's Slag instead!");

  // Jelly torches
  tooltip.add(/upgrade_aquatic:.+_jelly_torch/, [
    "Obtained by right-clicking a jellyfish with a prismarine rod.",
    "Temporary recipe added since jellyfish don't spawn yet.",
  ]);

  // Amber
  tooltip.add(["druidcraft:amber", "druidcraft:amber_block"], "Piglins will enjoy this.");

  // CM4
  tooltip.add(
    [
      "compactmachines:machine_small",
      "compactmachines:machine_normal",
      "compactmachines:machine_giant",
      "compactmachines:machine_maximum",
    ],
    Text.yellow("Crafting recipe currently not working :(")
  );

  // TOP config
  tooltip.add("theoneprobe:probenote", "Shift-right click to configure The One Probe.");
});
