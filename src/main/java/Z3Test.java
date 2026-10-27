import com.microsoft.z3.*;

public class Z3Test {
    public static void main(String[] args) {
        try (Context ctx = new Context()) {
            com.microsoft.z3.Solver solver = ctx.mkSolver();

            BoolExpr hasDemon =
                ctx.mkBoolConst("hasDemon");

            solver.add(hasDemon);

            Status status = solver.check();

            System.out.println("Z3 version: "
                + Version.getFullVersion());
            System.out.println("Result: " + status);
            System.out.println("Model: " + solver.getModel());
        }
    }
}
