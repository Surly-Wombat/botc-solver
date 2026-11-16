
enum Certainty {
	// Used for facts even the storyteller won't lie about. Ex (Player deaths, Slayer ability, Virgin ability)
	GLOBAL_CERTAIN,
	
	// You learned this info from the storyteller, but they could be lying (drunk, poison, etc.)
	SELF_CERTAIN,
	
	// Most claims from others will be uncertain. They could always be lying
	UNCERTAIN
}