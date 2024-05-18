import stratagems from "../data/stratagems"

const randomizer = (options) => {

    function randomizeAll() {
        const result = [];
        let tempStrat = stratagems;
        for (let i = 0; i < 4; i++) {
            const rand = Math.floor(Math.random() * tempStrat.length);
            result.push(tempStrat[rand]);
            if (tempStrat[rand].backpack === 1 && options.oneBackpack === true) {
                tempStrat = tempStrat.filter(strat => strat.backpack === 0)
            }
            tempStrat = tempStrat.filter((val, index) => index !== rand);
        }
        return result;
    }

    if (!options) return [];
    if (options.allowed.all) {
        return randomizeAll();
    } else {

        // establish category list
        // const categories = [];
        const result = [];
        const names = []; // this is purely for dupe checking
        let hasBackpack = false;

        for (let i = 0; i < 4; i++) {
            // filter by options, then by the name
            let tempStrat = stratagems.filter(strat => options.allowed[strat.type][i] === true && names.indexOf(strat.name) < 0);
            // if backpack is limited and we've pulled one, remove those too
            if (options.oneBackpack === true && hasBackpack) {
                tempStrat = tempStrat.filter(strat => strat.backpack === 0);
            }

            // pick one, store both strategem AND name
            const rand = Math.floor(Math.random() * tempStrat.length);
            const selected = tempStrat[rand];
            if (selected.backpack === 1 && options.oneBackpack === true) {
                hasBackpack = true;
            }
            names.push(selected.name);
            result.push(selected);
        }
        return result;
    }

}

export default randomizer;