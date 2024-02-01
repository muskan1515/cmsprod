function getMonthsDifference(givenDate) {
    // Convert the given date to a JavaScript Date object
    const givenDateTime = new Date(givenDate);

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in months
    const monthsDifference = (currentDate.getFullYear() - givenDateTime.getFullYear()) * 12 +
        (currentDate.getMonth() - givenDateTime.getMonth());

    return monthsDifference;
}

export const calculateDepreciationsPercenatge=(depreciations,type,time)=>{
    const age = getMonthsDifference(time);
    let smaller = {}, greater = {};
    depreciations.map((dep,index)=>{
        if(String(dep.PartType) === String(type) && Number(dep.Age)>= Number(age) ){
           if(Number(dep.Age) > Number(smaller.Age) && smaller){
            smaller = smaller;
           }
           else{
            smaller = dep;
           }
        }
    });

    return smaller.DepreciationPercentage;
}