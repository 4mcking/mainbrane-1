import { HiveMap } from "@/components/hive-map";
import { Room } from "@/components/room";

export default function HivePage() {
  return (
    <Room tone="hive" name="mainbrane" bare>
      <div className="home">
        <div className="home-mark">
          <h1 className="wordmark" aria-label="mainbrane">
            main<span>brane</span>
          </h1>
          <p className="formula">mainframe × membrane</p>
          <p className="bhm">beautiful hive mind</p>
        </div>

        <HiveMap />

        <article className="letter taped">
          <p>
            mainbrane is mainframe × membrane. the machine, and the living edge
            around it.
          </p>
          <p>
            this is not a résumé and not a shop. it is a few rooms in my mind,
            and you are welcome inside.
          </p>
          <p>
            i write. i make sounds. i leave bits of code on the bench. where a
            room is still empty, the label says so.
          </p>
          <p className="sign">— king, founder</p>
        </article>
      </div>
    </Room>
  );
}
