onEvent("recipes", (event) => {
  event.replaceOutput({}, "thermal:cinnabar", "#forge:gems/cinnabar");
  event.replaceOutput({}, "thermal:sulfur", "#forge:gems/sulfur");
  event.replaceOutput({}, "thermal:apatite", "#forge:gems/apatite");
  event.replaceOutput({}, "thermal:niter", "#forge:gems/niter");
  event.replaceOutput({}, "thermal:bitumen", "#forge:gems/bitumen");
  event.replaceOutput({}, "thermal:coal_coke", "#forge:gems/coal_coke");
  event.replaceOutput({}, "thermal:sawdust", "emendatusenigmatica:wood_dust");
});
