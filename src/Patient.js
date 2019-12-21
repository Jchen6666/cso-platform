class Patient{
static countries = {
    UK: "UK",
    US: "US",
    DK: "DK"
};
static conditions = {
    SPORADIC: "sporadic",
    CHRONICAL: "chronical"
}
static drugs = {
    1: "Medicine 1",
    2: "Medicine 2",
    3: "Medicine 3"
}
diagnose = 0;
constructor(country){
    switch(country) { 
        case Patient.countries.DK:
            this.country = country
        case Patient.countries.UK:
            this.country = country
        case Patient.countries.US:
            this.country = country
    }
  
}
}
