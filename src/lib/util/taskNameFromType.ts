import { Activity, Tasks } from '../constants';

export function taskNameFromType(activityType: Activity) {
	switch (activityType) {
		case Activity.Agility:
			return Tasks.AgilityActivity;
		case Activity.ClueCompletion:
			return Tasks.ClueActivity;
		case Activity.Cooking:
			return Tasks.CookingActivity;
		case Activity.MonsterKilling:
			return Tasks.MonsterActivity;
		case Activity.GroupMonsterKilling:
			return Tasks.GroupMonsterActivity;
		case Activity.Fishing:
			return Tasks.FishingActivity;
		case Activity.Mining:
			return Tasks.MiningActivity;
		case Activity.Smelting:
			return Tasks.SmeltingActivity;
		case Activity.Smithing:
			return Tasks.SmithingActivity;
		case Activity.Woodcutting:
			return Tasks.WoodcuttingActivity;
		case Activity.Firemaking:
			return Tasks.FiremakingActivity;
		case Activity.Crafting:
			return Tasks.CraftingActivity;
		case Activity.Questing:
			return Tasks.QuestingActivity;
		case Activity.Runecraft:
			return Tasks.RunecraftActivity;
		case Activity.Burying:
			return Tasks.BuryingActivity;
		case Activity.Offering:
			return Tasks.OfferingActivity;
		case Activity.FightCaves:
			return Tasks.FightCavesActivity;
		case Activity.Fletching:
			return Tasks.FletchingActivity;
		case Activity.Wintertodt:
			return Tasks.WintertodtActivity;
		case Activity.Alching:
			return Tasks.AlchingActivity;
		case Activity.Herblore:
			return Tasks.HerbloreActivity;
		case Activity.Nightmare:
			return Tasks.NightmareActivity;
		case Activity.AnimatedArmour:
			return Tasks.AnimatedArmourActivity;
		case Activity.Cyclops:
			return Tasks.CyclopsActivity;
		case Activity.Sawmill:
			return Tasks.SawmillActivity;
		case Activity.Sepulchre:
			return Tasks.SepulchreActivity;
		case Activity.Plunder:
			return Tasks.PlunderActivity;
		case Activity.FishingTrawler:
			return Tasks.FishingTrawler;
		case Activity.Zalcano:
			return Tasks.ZalcanoActivity;
		case Activity.Pickpocket:
			return Tasks.PickpocketActivity;
		case Activity.Farming:
			return Tasks.FarmingActivity;
		case Activity.TitheFarm:
			return Tasks.TitheFarmActivity;
		case Activity.BarbarianAssault:
			return Tasks.BarbarianAssault;
		case Activity.AgilityArena:
			return Tasks.AgilityArena;
		case Activity.ChampionsChallenge:
			return Tasks.ChampionsChallenge;
		case Activity.Hunter:
			return Tasks.HunterActivity;
		case Activity.Birdhouse:
			return Tasks.BirdhouseActivity;
		case Activity.AerialFishing:
			return Tasks.AerialFishingActivity;
		case Activity.Construction:
			return Tasks.ConstructionActivity;
		case Activity.MahoganyHomes:
			return Tasks.MahoganyHomes;
		case Activity.Enchanting:
			return Tasks.Enchanting;
		case Activity.Casting:
			return Tasks.Casting;
		case Activity.GloryCharging:
			return Tasks.GloryCharging;
		case Activity.WealthCharging:
			return Tasks.WealthCharging;
		case Activity.GnomeRestaurant:
			return Tasks.GnomeRestaurant;
		case Activity.SoulWars:
			return Tasks.SoulWars;
		case Activity.RoguesDenMaze:
			return Tasks.RoguesDenMaze;
		case Activity.Gauntlet:
			return Tasks.Gauntlet;
		case Activity.CastleWars:
			return Tasks.CastleWars;
		case Activity.MageArena:
			return Tasks.MageArena;
		case Activity.Raids:
			return Tasks.Raids;
		case Activity.Collecting:
			return Tasks.Collecting;
		case Activity.MageTrainingArena:
			return Tasks.MageTrainingArena;
		case Activity.BlastFurnace:
			return Tasks.BlastFurnaceActivity;
		case Activity.MageArena2:
			return Tasks.MageArena2;
		case Activity.BigChompyBirdHunting:
			return Tasks.BigChompyBirdHunting;
	}
}
