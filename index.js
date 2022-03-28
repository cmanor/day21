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
    return this.name;
    }
    getFieldAndIndustry()
    {
    return this.field + this.industry;
    }
}

class McJob extends Job {
    constructor(name, industry, requiresDegree, field) 
	{
        super(name, industry, requiresDegree, field);
    }
}

let job1 = new Job("job1", "in1", false, "field1")
let job2 = new Job("job2", "in2", false, "field2")
let job3 = new Job("job3", "in3", false, "field3")

console.log(job1.getName() + job1.getFieldAndIndustry());
console.log(job2.getName() + job2.getFieldAndIndustry());
console.log(job3.getName() + job3.getFieldAndIndustry());

let retail = new McJob("McJob1", "in4", false, "field4");

console.log(retail.getName() + retail.getFieldAndIndustry());