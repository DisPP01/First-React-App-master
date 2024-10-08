import React from 'react';
import './Parts.css'

export function CreateManager() {
    const htmlContent = `
        <!DOCTYPE html>
        <html>
            <body>
                <div class="Auth-form-container-big">
                    <form class="Auth-form" action="/Admin">
                        <div class="Auth-form-content">
                            <h3 class="Auth-form-title" align="center">Fill the details of the manager</h3>

                            <div class="row">                               
                                <div class="col-25">
                                    <label>Employee ID</label> </div>
                                    <div class="col-75">
                                    <input
                                        type="text"
                                        className="form-control mt-1"
                                        placeholder="Enter ID"
                                    />
                                </div>
                            </div>

                            <div class="row">
                            <div class="col-25">
                                <label>First Name</label> </div>
                                <div class="col-75">
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Enter first name"
                                /></div>
                            </div>

                            <div class="row">
                            <div class="col-25">
                                <label>Last Name</label> </div>
                                <div class="col-75">
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Enter last name"
                                /></div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label for="branch">Branch</label>
                                </div>
                                <div class="col-75">
                                    <select id="branch" name="branch">
                                        <option value="none">Choose an option</option>
                                        <option value="anseboileau">Anse Boileau</option>
                                        <option value="glacis">Glacis</option>
                                        <option value="plaisance">Plaisance</option>
                                        <option value="Takamaka">Takamaka</option>
                                        <option value="victoria">Victoria</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row">                               
                                <div class="col-25">
                                    <label>NIC Number</label> </div>
                                    <div class="col-75">
                                    <input
                                        type="text"
                                        className="form-control mt-1"
                                        placeholder="Enter NIC number"
                                    />
                                </div>
                            </div>
                            
                            <div class="row">                               
                                <div class="col-25">
                                    <label>Telephone Number</label> </div>
                                    <div class="col-75">
                                    <input
                                        type="text"
                                        className="form-control mt-1"
                                        placeholder="Enter telephone number"
                                         
                                    />
                                </div>
                            </div>

                            <div class="row">                               
                                <div class="col-25">
                                    <label>Address</label> </div>
                                    <div class="col-75">
                                    <input
                                        type="text"
                                        className="form-control mt-1"
                                        placeholder="Enter address"
                                         
                                    />
                                </div>
                            </div>

                            <div class="row">                               
                                <div class="col-25">
                                    <label>Email Address</label> </div>
                                    <div class="col-75">
                                    <input
                                        type="email"
                                        className="form-control mt-1"
                                        placeholder="Enter email address"
                                        size="48"
                                        
                                         
                                    />
                                </div>
                            </div>

                            <div class="row">                               
                                <div class="col-25">
                                    <label>Date of Birth</label> </div>
                                    <div class="col-75">
                                    <input
                                        type="date"
                                        className="form-control mt-1"
                                         
                                    />
                                </div>
                            </div>

                            <div class="row">                               
                            <div class="col-25">
                                <label>Gender</label> </div>
                                    <div class="col-75">
                                    <input type="radio" id="male" name="gender" value="Male">
                                    <label for="male">Male</label>
                                    <input type="radio" id="female" name="gender" value="Female">
                                    <label for="female">Female</label><br>
                            </div>
                            </div>

                            <div class="row">                               
                            <div class="col-25">
                                <label>Username</label> </div>
                                <div class="col-75">
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Enter username"
                                     
                                />
                            </div>
                        </div>

                        <div class="row">                               
                        <div class="col-25">
                            <label>Password</label> </div>
                            <div class="col-75">
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                size ="48"
                                 
                            />
                        </div>
                    </div>

                            <br>
                            <div class="row">
                                <input type="submit" value="Submit">
                            </div>

                            <br>
                            <button class="backbutton" formAction="/Admin" type="submit" color=green><span>Back </span></button>
                            
                        </div>
                    </form>
                </div>
            </body>
        </html>
    `;

    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
