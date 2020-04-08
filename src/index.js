import Yoga from "../build/yoga";
import entry from "../yoga/javascript/sources/entry-common";

export default new Promise(function(resolve) {
    Yoga().then(function(Module) {
        function bind(_name, proto) {
            return proto;
        }

        resolve(entry(bind, Module));
    });
});
