public class GameHandler {
    private final GameState gameState;
    private final GameSolver gameSolver;

    // TODO
    public GameHandler() {
        this.game = new gameState();
        this.solver = new GameSolver();
    }

    public void addInfo(Information information) {
        game.addInformation(information);
    }

    public void solve() {
        solver.solve();
    }
}
