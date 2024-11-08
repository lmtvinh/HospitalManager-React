import { Department, DepartmentsClient, Doctor, DoctorRegistration, DoctorsClient } from "./api-client";
import { faker } from '@faker-js/faker/locale/vi';
import _ from 'lodash';


type MethodOnly<T> = {
    [K in keyof T]: T[K] extends (...args: any[]) => any ? T[K] : never;
};


interface Store {
    departments: Department[];
    doctors: Doctor[];
}



function createDepartment(): Department {
    return {
        departmentId: faker.number.int({ min: 1, max: 1000000 }),
        departmentName: faker.company.name(),
        description: faker.lorem.paragraph({
            min: 1,
            max: 2
        })
    };
}

function createDoctor(): Doctor {
    return {
        doctorId: faker.number.int({ min: 1, max: 1000000 }),
        departmentId: faker.number.int({ min: 1, max: 1000000 }),
        email: faker.internet.email(),
        name: faker.person.fullName(),
        specialization: faker.lorem.paragraph({
            min: 1,
            max: 4
        }),
        phoneNumber: faker.helpers.fromRegExp(/^(03|07|08|09)\d{8}$/),
    };
}


const store: Store = {
    departments: Array.from({ length: 5 }, createDepartment),
    doctors: Array.from({ length: 5 }, createDoctor)
};











export const departmentsClient: MethodOnly<DepartmentsClient> = {
    departmentsAll: function (signal?: AbortSignal): Promise<Department[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(store.departments);
            }, 1000);
        });
    },
    departmentsPOST: function (body: Department | undefined, signal?: AbortSignal): Promise<Department> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const newDepartment = {
                    ...body,
                    departmentId: faker.number.int({ min: 1, max: 100000 })
                };
                // add to first
                store.departments = [newDepartment, ...store.departments];
                resolve(newDepartment);
            }, 1000);
        });
    },
    departmentsGET: function (id: number, signal?: AbortSignal): Promise<Department> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const department = store.departments.find(d => d.departmentId === id);
                if (department) {
                    resolve(department);
                } else {
                    reject(new Error("Not found"));
                }
            }, 1000);
        });
    },
    departmentsPUT: function (id: number, body: Department | undefined, signal?: AbortSignal): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = store.departments.findIndex(d => d.departmentId === id);
                if (index !== -1) {
                    store.departments[index] = {
                        ...store.departments[index],
                        ...body
                    };
                    resolve();
                } else {
                    reject(new Error("Not found"));
                }
            }, 1000);
        });
    },
    departmentsDELETE: function (id: number, signal?: AbortSignal): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = store.departments.findIndex(d => d.departmentId === id);
                if (index !== -1) {
                    store.departments.splice(index, 1);
                    resolve();
                } else {
                    reject(new Error("Not found"));
                }
            }, 1000);
        })
    }
};


export const doctorsClient: MethodOnly<DoctorsClient> = {
    doctorsAll: function (signal?: AbortSignal): Promise<Doctor[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // join with department
                const doctors = _.map(store.doctors, (doctor) => {
                    const department = _.find(store.departments, d => d.departmentId === doctor.departmentId) || store.departments[0];
                    return {
                        ...doctor,
                        department
                    }
                }
                );
                resolve(doctors);
            }, 1000);
        });
    },
    doctorsPOST: function (body: Doctor | undefined, signal?: AbortSignal): Promise<Doctor> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const newDoctor = {
                    ...body,
                    doctorId: faker.number.int({ min: 1, max: 100000 })
                };
                // add to first
                store.doctors = [newDoctor, ...store.doctors];
                resolve(newDoctor);
            }, 1000);
        });
    },
    doctorsGET: function (id: number, signal?: AbortSignal): Promise<Doctor> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const doctor = store.doctors.find(d => d.doctorId === id);
                if (doctor) {
                    const department = store.departments.find(d => d.departmentId === doctor.departmentId) || store.departments[0];
                    doctor.department = department;
                    resolve(doctor);
                } else {
                    reject(new Error("Not found"));
                }
            }, 1000);
        });
    },
    doctorsPUT: function (id: number, body: Doctor | undefined, signal?: AbortSignal): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = store.doctors.findIndex(d => d.doctorId === id);
                if (index !== -1) {
                    store.doctors[index] = {
                        ...store.doctors[index],
                        ...body
                    };
                    resolve();
                } else {
                    reject(new Error("Not found"));
                }
            }, 1000);

        }
        );
    },
    doctorsDELETE: function (id: number, signal?: AbortSignal): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = store.doctors.findIndex(d => d.doctorId === id);
                if (index !== -1) {
                    store.doctors.splice(index, 1);
                    resolve();
                } else {
                    reject(new Error("Not found"));
                }
            }, 1000);
        });
    },
    doctorregister: function (body: DoctorRegistration | undefined, signal?: AbortSignal): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const newDoctor: Doctor = {
                    ...body,
                    doctorId: faker.number.int({ min: 1, max: 100000 })
                };
                // add to first
                store.doctors = [newDoctor, ...store.doctors];
                resolve();
            }, 1000);
        });
    }
}