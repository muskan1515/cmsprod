'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';

interface DropdownItem {
    name: string;
    code: string;
}

const FormLayoutDemo = () => {
    const [dropdownItem, setDropdownItem] = useState<DropdownItem | null>(null);
    const [calendarValue, setCalendarValue] = useState<string | Date | Date[] | null>(null);

    const dropdownItems: DropdownItem[] = useMemo(
        () => [
            { name: 'Option 1', code: 'Option 1' },
            { name: 'Option 2', code: 'Option 2' },
            { name: 'Option 3', code: 'Option 3' }
        ],
        []
    );

    useEffect(() => {
        setDropdownItem(dropdownItems[0]);
    }, [dropdownItems]);

    return (
        <div className="grid">
            <div className="col-12 md:col-12">
                <div className="card">
                    <h5>Driver Details</h5>
                    <div className="formgroup-inline">
                        <div className="field">
                            <InputText id="lastname1" type="text" placeholder="Claim No." />
                        </div>
                        <div className="field" style={{}}>
                            <InputText id="firstname1" type="text" placeholder="Type of Verification" style={{}} />
                        </div>
                        <div className="field">
                            <InputText id="firstname1" type="text" placeholder="Driver Name" />
                        </div>
                        <div className="field">
                            <InputText id="lastname1" type="text" placeholder="Age" />
                        </div>
                        <div className="field">
                            <InputText id="firstname1" type="text" placeholder="Date of Birth" />
                        </div>
                        <div className="field">
                            <InputText id="lastname1" type="text" placeholder="License Number" />
                        </div>
                        <div className="field">
                            <InputText id="firstname1" type="text" placeholder="License Type" />
                        </div>
                        <div className="field">
                            <InputText id="lastname1" type="text" placeholder="Issuing Authority" />
                        </div>
                        <div className="field">
                            <InputText id="firstname1" type="text" placeholder="Date of Issue" />
                        </div>
                        <div className="field">
                            <InputText id="lastname1" type="text" placeholder="Valid From" />
                        </div>
                        <div className="field">
                            <InputText id="firstname1" type="text" placeholder="Valid Until" />
                        </div>
                        <div className="field">
                            <InputText id="lastname1" type="text" placeholder="Badge Number" />
                        </div>
                        {/* <div className="field">
                            <InputText id="firstname1" type="text" placeholder="Claim Reference No." />
                        </div>
                        <div className="field">
                            <InputText id="firstname1" type="text" placeholder="Survey Type" />
                        </div> */}
                        <div className="field">
                            <Calendar showIcon showButtonBar value={calendarValue} onChange={(e) => setCalendarValue(e.value ?? null)} placeholder="Select Date" />
                        </div>
                        <Button label="Submit"></Button>
                    </div>
                </div>
                {/* <div className="card p-fluid">
                    <h5>Vertical</h5>
                    <div className="field">
                        <label htmlFor="name1">Name</label>
                        <InputText id="name1" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="email1">Email</label>
                        <InputText id="email1" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="age1">Age</label>
                        <InputText id="age1" type="text" />
                    </div>
                </div>

                <div className="card p-fluid">
                    <h5>Vertical Grid</h5>
                    <div className="formgrid grid">
                        <div className="field col">
                            <label htmlFor="name2">Name</label>
                            <InputText id="name2" type="text" />
                        </div>
                        <div className="field col">
                            <label htmlFor="email2">Email</label>
                            <InputText id="email2" type="text" />
                        </div>
                    </div>
                </div> */}
            </div>

            <div className="col-12 md:col-12">
                <div className="card">
                    <h5>Vehicle Details</h5>
                    <div className="formgroup-inline">
                        <div className="field">
                            <InputText id="lastname1" type="text" placeholder="Claim No." />
                        </div>
                        <div className="field" style={{}}>
                            <InputText id="firstname1" type="text" placeholder="Type of Verification" style={{}} />
                        </div>
                        <div className="field">
                            <InputText id="firstname1" type="text" placeholder="Registered Number" />
                        </div>
                        <div className="field">
                            <InputText id="lastname1" type="text" placeholder="Registered Owner" />
                        </div>
                        <div className="field">
                            <InputText id="firstname1" type="text" placeholder="Owner Serial No." />
                        </div>
                        <div className="field">
                            <InputText id="lastname1" type="text" placeholder="Transfer Date" />
                        </div>
                        <div className="field">
                            <InputText id="firstname1" type="text" placeholder="Make Variant Modal Color" />
                        </div>
                        <div className="field">
                            <InputText id="lastname1" type="text" placeholder="Engine Number" />
                        </div>
                        <div className="field">
                            <InputText id="firstname1" type="text" placeholder="Chasis Number" />
                        </div>
                        <div className="field">
                            <InputText id="lastname1" type="text" placeholder="Model of Check" />
                        </div>
                        <div className="field">
                            <InputText id="firstname1" type="text" placeholder="Type of Body" />
                        </div>
                        <div className="field">
                            <InputText id="lastname1" type="text" placeholder="Class of Vehicle" />
                        </div>
                        <div className="field">
                            <InputText id="firstname1" type="text" placeholder="Pre Accident Condition" />
                        </div>
                        <div className="field">
                            <InputText id="firstname1" type="text" placeholder="Seating Capacity" />
                        </div>
                        <div className="field">
                            <InputText id="firstname1" type="text" placeholder="Cubic Capacity" />
                        </div>
                        <div className="field">
                            <InputText id="firstname1" type="text" placeholder="Fuel Type" />
                        </div>
                        <div className="field">
                            <InputText id="firstname1" type="text" placeholder="Tax Particulars" />
                        </div>
                        <div className="field">
                            <InputText id="firstname1" type="text" placeholder="Odo Meter Reading" />
                        </div>
                        <div className="field">
                            <InputText id="firstname1" type="text" placeholder="PUC Number" />
                        </div>
                        <div className="field">
                            <Calendar showIcon showButtonBar value={calendarValue} onChange={(e) => setCalendarValue(e.value ?? null)} placeholder="PUC Valid Until Date" />
                        </div>
                        <Button label="Submit"></Button>
                    </div>
                </div>
                {/* <div className="card p-fluid">
                    <h5>Vertical</h5>
                    <div className="field">
                        <label htmlFor="name1">Name</label>
                        <InputText id="name1" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="email1">Email</label>
                        <InputText id="email1" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="age1">Age</label>
                        <InputText id="age1" type="text" />
                    </div>
                </div>

                <div className="card p-fluid">
                    <h5>Vertical Grid</h5>
                    <div className="formgrid grid">
                        <div className="field col">
                            <label htmlFor="name2">Name</label>
                            <InputText id="name2" type="text" />
                        </div>
                        <div className="field col">
                            <label htmlFor="email2">Email</label>
                            <InputText id="email2" type="text" />
                        </div>
                    </div>
                </div> */}
            </div>

            {/* <div className="col-12 md:col-6">
                <div className="card p-fluid">
                    <h5>Horizontal</h5>
                    <div className="field grid">
                        <label htmlFor="name3" className="col-12 mb-2 md:col-2 md:mb-0">
                            Name
                        </label>
                        <div className="col-12 md:col-10">
                            <InputText id="name3" type="text" />
                        </div>
                    </div>
                    <div className="field grid">
                        <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                            Email
                        </label>
                        <div className="col-12 md:col-10">
                            <InputText id="email3" type="text" />
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h5>Help Text</h5>
                    <div className="field p-fluid">
                        <label htmlFor="username">Username</label>
                        <InputText id="username" type="text" />
                        <small>Enter your username to reset your password.</small>
                    </div>
                </div>
            </div>

            <div className="col-12">
                <div className="card">
                    <h5>Advanced</h5>
                    <div className="p-fluid formgrid grid">
                        <div className="field col-12 md:col-6">
                            <label htmlFor="firstname2">Firstname</label>
                            <InputText id="firstname2" type="text" />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="lastname2">Lastname</label>
                            <InputText id="lastname2" type="text" />
                        </div>
                        <div className="field col-12">
                            <label htmlFor="address">Address</label>
                            <InputTextarea id="address" rows={4} />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="city">City</label>
                            <InputText id="city" type="text" />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="state">State</label>
                            <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="zip">Zip</label>
                            <InputText id="zip" type="text" />
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default FormLayoutDemo;
