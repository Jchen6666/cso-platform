let countries = {
    UK: "UK",
    US: "US",
    DK: "DK"
};
let conditions = {
    SPORADIC: "sporadic",
    CHRONICAL: "chronical"
}
let drugs = {
    1: "Medicine 1",
    2: "Medicine 2",
    3: "Medicine 3"
} 

function detectPatientEligible(country, diagnose, condition, previousMedicine) {
    switch (country) {
        case countries.UK:
            if(condition == conditions.SPORADIC) {
                return (previousMedicine == 2 || previousMedicine == drugs[2]) ||
                    ((previousMedicine == 3 || previousMedicine == drugs[3]) && diagnose <= 5)
            } else if(ondition == conditions.CHRONICAL) {
                return (previousMedicine == 1 || previousMedicine == drugs[1]) ||
                    ((previousMedicine == 3 || previousMedicine == drugs[3]) && diagnose > 5)
            }
        case countries.US:
            if(condition == conditions.SPORADIC) {
                return !((previousMedicine == 3 || previousMedicine == drugs[3]) && diagnose <= 5)
            } else if (condition == conditions.CHRONICAL) {
                return ((previousMedicine == 2 || previousMedicine == drugs[2]) && diagnose <= 5) ||
                    ((previousMedicine == 1 || previousMedicine == drugs[1]) && diagnose > 5)
            }
        case countries.DK:
            if(condition == conditions.SPORADIC) {
                return !((previousMedicine == 2 || previousMedicine == drugs[2]) && diagnose > 5)
            } else if (condition == conditions.CHRONICAL) {
                return (previousMedicine == 1 || previousMedicine == drugs[1]) ||
                ((previousMedicine == 3 || previousMedicine == drugs[3]) && diagnose > 5) ||
                ((previousMedicine == 2 || previousMedicine == drugs[2]) && diagnose <= 5)
            }
        default:
            return false
    }
}

var isPatientEligible = function(country, diagnose, condition, previousMedicine) {
    return new Promise(function(resolve, reject) {
    let result = detectPatientEligible(country, diagnose, condition, previousMedicine)
    if(result) {
        resolve(result)
    } else {
        reject(false)
    }
    })
}

isPatientEligible("UK", 6, "sporadic", 2).then(function(fromResolve){
    console.log(fromResolve)
}).catch(function(fromReject){
    console.log(fromReject)
})