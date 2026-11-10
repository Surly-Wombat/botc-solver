package botcSolver;

/* === Role ===
 * this class represents a generic role in the game, this is a parent class 
 * for all specific roles
 * Stores info about character and claimed information
 * Generates predicates based on claims
 */
 
public class Role {
    private final String id;
    
	private boolean isEvil;
	private RoleType roleType;

    // TODO: registering should be a function returning a list of what you CAN register as
    // recluse can register as good OR evil depending on ST decisions
    // same as spy
	private boolean registersEvil;
	
    // TODO: other role's tokens on you should be in player class
    // also, probably would be better as a list? since many different roles can have tokens on you
	private boolean ftRegistersEvil;
	private boolean safe;
    private boolean poisoned;
	
	
	// Contructor
	public Role () {
        // TODO:
	}

    // TODO: function that generates predicates
}
