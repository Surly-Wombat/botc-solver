public class GameSolver implements AutoCloseable {
    private final Context ctx;
    private final Solver solver;

    private final List<PredicateGenerator> generators;

    public GameSolver() {
        this.ctx = new Context();
        this.solver = new Solver();
    }

    // helpers

    public String getPlayerRoleMap(int playerPos, string roleID) {
        return "p" + playerPos + "_" + roleID;
    }

    public ArrayList<String> getPlayerAllRoles(int playerPos) {
        // TODO
    }

    // botc rules

    public void mkSetupPreds(list<String> roleIDs,
                             Map<RoleType, Integer> countOfEach,
                             int numPlayers) {
        for (int i = 0; i < numPlayers; i++) {
            ArrayList<String> allRoles = getPlayerAllRoles(i);
            
            ctx.mkOr(allRoles.toArray(new String[]));
            ctx.mkAtMost(1, allRoles.toArray(new String[]));
        }
        // TODO: add support for the Baron
        
    }

    // solver add rules

    public void addPredicate(BoolExpr predicate) {
        solver.add(predicate);
    }

    public void addPredicates(List<BoolExpr> predicates) {
        solver.add(predicates.toArray(new BoolExpr[0]));
    }

    // solver get info

    public Status check() {
        return solver.check();
    }

    public Model getModel() {
        return solver.getModel();
    }

    // other stuff
    
    @Override
    public void close() {
        ctx.close();
    }
}
