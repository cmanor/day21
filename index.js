class Job
{
    constructor(name, industry, requiresDegree, field) 
    {
        this.name = name,
        this.industry =industry,
        this.requiresDegree = requiresDegree,
        this.field = field
    }
    getName()
    {
    
    }
    getFieldAndIndustry()
    {
    ;
    }
}

class mcJob extends Job {
    constructor(title, author, year, type) {
        super(title, author, year);
        this.type = type;
    }
}

let job1 = new Job(job1){

}
let job2 = new Job(job2){
    
}
let job3 = new Job(job3){
    
}

console.log(job1.getName + job1.getFieldAndIndustry);
console.log(job2.getName + job2.getFieldAndIndustry);

let job4 = new mcJob {
    
}