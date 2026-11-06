public class GameSolver {
    private final Context context;
    private final Solver solver;
    private final GameState gameState;

    private final List<PredicateGenerator> generators;

    public GameSolver(GameState gameState) {
        this.gameState = gameState;
        this.context = new Context();
        this.solver = context.mkSolver();
        
        this.generators = List.of(
                                  /*
                                    new SetupPredicateGenerator(),
                                    new CharacterPredicateGenerator(),
                                    new PlayerPredicateGenerator(),
                                    new InformationPredicateGenerator(),
                                    new NightPredicateGenerator(),
                                    new DeathPredicateGenerator()
                                  */
        );
    }

    public void solve() {
        for (PredicateGenerator generator : generators) {
            generator.generate(game, context);
        }
        // TODO
    }
}
