// Jai Shree Ram

function outcomeCalculation() {

    const ogOutcomesList = []
    let calcOutcomesList;
    const fail_outcome = 40
    const right_outcome = 100 - fail_outcome


    const findGCD = (a, b) => {
        return b === 0 ? a : findGCD(b, a % b);
    }



    // optimizing of the algorithm

    let gcd = findGCD(fail_outcome, right_outcome)

    const optimal_fail_prob = fail_outcome / gcd
    const optimal_right_prob = right_outcome / gcd

    // tried to make code better but ended up messing it so pls dont even try to use this [!warning]
    function shuffleList(arr) {
        let final_arr = []


        for (let i = 0; i < arr.length; i++) {
            
            let ran_elem = arr[Math.floor(Math.random() * (arr.length - 1))]

            final_arr.push(ran_elem)
            
        }

        return final_arr


    }



    // creating outcomes list 
    function makeOutcomeList() {


        // pushing outcomes to og list

        for (let i = 1; i <= optimal_fail_prob + optimal_right_prob; i++) {

            i <= optimal_fail_prob ? ogOutcomesList.push(false) : ogOutcomesList.push(true)

        }

        calcOutcomesList = [...ogOutcomesList]

    }


    // random selction from list 
    function getOutcome() {

        

        let outcome_index;
        
    
        // let chacha = `${ogOutcomesList.length} , ${calcOutcomesList.length} => ${ogOutcomesList.length - calcOutcomesList.length}`

        let outcome;

        if (calcOutcomesList.length === 0) {
            calcOutcomesList = [...ogOutcomesList]

            outcome_index = Math.floor(Math.random() * (((optimal_fail_prob + optimal_right_prob) - 1) - (ogOutcomesList.length - calcOutcomesList.length)))
        
            outcome = calcOutcomesList[outcome_index]
            
            calcOutcomesList.splice(outcome_index , 1)
        } 
        else {

            outcome_index = Math.floor(Math.random() * (((optimal_fail_prob + optimal_right_prob) - 1) - (ogOutcomesList.length - calcOutcomesList.length)))

            outcome = calcOutcomesList[outcome_index]
            
            calcOutcomesList.splice(outcome_index , 1)
        }
        
        return outcome

    }


    makeOutcomeList()

    return {
        findGCD ,
        getOutcome ,
        ogOutcomesList , 
        calcOutcomesList
    }

}


const dhokebaaz = outcomeCalculation()



