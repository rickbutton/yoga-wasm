import Yoga from "../build/yoga";
import entry from "../yoga/javascript/sources/entry-common";

const mod = Yoga();

function bind(name, proto) {
    return proto;
}

export default entry(bind, mod);
