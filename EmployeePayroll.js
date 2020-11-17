class EmployeePayrollData{
    get id(){
        return this._id;
    }
    set id(id){
        this._id=id;
    }
    get name(){
        return this._name;
    }
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if(nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect!';
    }
    get profilePic(){
        return this._profilePic;
    }
    set profilePic(profilePic){
        this._profilePic = profilePic;
    }
    get gender(){
        return this._gender;
    }
    set gender(gender){
        this._gender = gender;
    }
    get department(){
        return this._department;
    }
    set department(department){
        this._department = department;
    }
    get salary(){
        return this._salary;
    }
    set salary(salary){
        this._salary = salary
    }
    get note(){
        return this._note
    }
    set note(note){
        this._note = note;
    }
    get startDate(){
        return this._startDate;
    }
    set startDate(startDate){
        if(startDate.getTime()<=new Date().getTime()){
            if(((new Date().getTime()-startDate.getTime())/(86400000))<=30){
                this._startDate = startDate;
            }
            else{
                throw "Date is incorrect: "
            }
        }
    }
    toString(){
        const options = { year: 'numeric',month: 'long',day: 'numeric',weekday:'long'}
        const empDate = this.startDate == undefined ?"undefined":this.startDate.toLocaleDateString("en-US",options);
        return "id="+this.id+" name="+this.name+" salary="+this.salary+" gender="+this.gender+" start date:"+empDate+" profile pic="+this.profilePic+" gender="+this.gender+" department:"+this.department;
    }

}

window.addEventListener("DOMContentLoaded", () => {

    const name = document.querySelector("#name");
    const nameError = document.querySelector(".name-error");
    const validName = document.querySelector(".valid-name");
    name.addEventListener("input", function() {
        if (name.value.length == 0) {
            nameError.textContent = "";
            validName.textContent = "";
        } else {
            try {
                (new EmployeePayrollData).name = name.value;
                nameError.textContent = "";
                validName.textContent = '✓';
                document.querySelector(".submitButton").disabled = false;
            } catch (error) {
                nameError.textContent = error;
                validName.textContent = "";
                document.querySelector(".submitButton").disabled = true;
            }
        }
    });

    const startDate = document.querySelector("#startDate");
    const startDateError = document.querySelector(".startDate-error");
    const validStartDate = document.querySelector(".valid-startDate");
    startDate.addEventListener("input", function() {
        try {
            let dateString = document.querySelector("#month").value + " " + document.querySelector("#day").value + ", " + document.querySelector("#year").value;
            (new EmployeePayrollData).startDate = new Date(dateString);
            startDateError.textContent = "";
            validStartDate.textContent = '✓';
            document.querySelector(".submitButton").disabled = false;
        } catch (error) {
            startDateError.textContent = error;
            validStartDate.textContent = "";
            document.querySelector(".submitButton").disabled = true;
        }
    });

    const salary = document.querySelector("#salary");
    const output = document.querySelector(".salary-output");
    salary.oninput = function() {
        output.textContent = salary.value;
    };
});