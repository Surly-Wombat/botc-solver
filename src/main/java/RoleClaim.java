
/* === RoleClaim ===
 * This class represents one role a player claims to be
 * and information they claim to have learned each day
 * 
 * ASSUMPTION: if player is good, they're one of the roles they've claimed (no good bluffing)
 * this assumption could be relaxed
 */
 
 public class RoleClaim () {
	
	private String role;
	
	// Not all of the following will be relevant to all roles
	private ArrayList<String> nightInfo;
	private boolean hasAbility;
	
	// ===CONSTRUCTORS===
	public RoleClaim (String role) {
		this.role = role;
	}
	
	public RoleClaim (String role, ArrayList<String> nightInfo) {
		this.role = role;
		this.nightInfo = nightInfo;
	}
	
	public RoleClaim (String role, boolean hasAbility) {
		this.role = role;
		this.hasAbility = hasAbility;
	}
 }
 