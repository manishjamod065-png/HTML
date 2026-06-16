
let patients = [];
let doctors = [];

function addPatient(id, name, age, disease) {
    let patient = {
        id: id,
        name: name,
        age: age,
        disease: disease
    };


    patients.push(patient);
    console.log("Patient Added");
}
function addDoctor(id, name, specialization) {
    let doctor = {
        id: id,
        name: name,
        specialization: specialization
    };
    doctors.push(doctor);
    console.log("Doctor Added");
}
function searchDoctor(id) {
    let doctor = doctors.find(d => d.id === id);
    if (doctor) {
        console.log("Doctor Found:", doctor);
    } else {
        console.log("Doctor not found!");
    }
}
function searchPatient(id) {
    let patient = patients.find(p => p.id === id);
    if (patient) {
        console.log("Patient Found:", patient);
    } else {
        console.log("Patient not found!");
    }
}
addPatient(1, "amit", 30, "Flu");
addPatient(2, "rahul", 25, "Cold");    
addPatient(3, "sachin", 40, "Fever");
addPatient(4, "suresh", 35, "Diabetes");
addPatient(5, "ramesh", 28, "Hypertension");
addPatient(6, "aham", 50, "Asthma");
searchPatient(3);
searchPatient(4);
searchPatient(5);
searchPatient(6);
addDoctor(1, "dr. himashu", "Cardiologist");
addDoctor(2, "dr. aditya", "Neurologist");
addDoctor(3, "dr. anurag", "kidney specialist");
addDoctor(4, "dr. aham", "eye specialist");
addDoctor(5, "dr. rahul", "traumatologist");
searchDoctor(1);
searchDoctor(2);
searchDoctor(3);
searchDoctor(4);
searchDoctor(5);
searchDoctor(8);