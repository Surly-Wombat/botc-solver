// TODO
public class GameState {
    private List<Player> players;
    private List<Day> days;
    private List<Night> nights;

    BoolExpr isAlive(Player player, int day);
    BoolExpr isPoisoned(Player player, int night);
    BoolExpr hasCharacter(Player player, Character character, int night);
}
